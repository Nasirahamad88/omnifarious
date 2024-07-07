"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";

export default function AddTestimonial() {
  const [name, setName] = useState("");
  const [post, setPost] = useState("");
  const [message, setMessage] = useState("");
  const [error, setError] = useState(null);
  const [success, setSuccess] = useState(null);
  const router = useRouter();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError(null);
    setSuccess(null);

    try {
      const res = await fetch("/api/testimonial", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ name, message, post }),
      });

      if (!res.ok) {
        throw new Error(await res.text());
      }

      const data = await res.json();
      setSuccess("Testimonial added successfully!");
      setName("");
        setMessage("")
        setPost("");
    } catch (error) {
      setError("Failed to add testimonial. Please try again.");
    }
  };

  return (
    <div className="max-w-md  mx-auto mt-32 my-32 p-4 bg-white shadow-md rounded-lg">
      <h1 className="text-2xl font-bold mb-4">Add Testimonial</h1>
      {error && <p className="text-red-500 mb-4">{error}</p>}
      {success && <p className="text-green-500 mb-4">{success}</p>}
      <form onSubmit={handleSubmit}>
        <div className="mb-4">
          <label className="block text-gray-700">Name</label>
          <input
            type="text"
            className="w-full p-2 border border-gray-300 rounded mt-1"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
          />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700">Message</label>
          <textarea
            className="w-full p-2 border border-gray-300 rounded mt-1"
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            required
          />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700">Post</label>
          <input
            type="text"
            className="w-full p-2 border border-gray-300 rounded mt-1"
            value={post}
            onChange={(e) => setPost(e.target.value)}
            required
          />
        </div>
        <button
          type="submit"
          className="w-full p-2 bg-blue-500 text-white rounded hover:bg-blue-600"
        >
          Submit
        </button>
      </form>
    </div>
  );
}
