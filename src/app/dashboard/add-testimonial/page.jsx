"use client";

import { useState, useEffect } from "react";

export default function AddTestimonial() {
  const [name, setName] = useState("");
  const [post, setPost] = useState("");
  const [message, setMessage] = useState("");
  const [error, setError] = useState(null);
  const [success, setSuccess] = useState(null);
  const [loading, setLoading] = useState(false);
  const [testimonials, setTestimonials] = useState([]);

  // Fetch testimonials when the component mounts
  useEffect(() => {
    fetchTestimonials();
  }, []);

  const fetchTestimonials = async () => {
    try {
      const res = await fetch("/api/testimonial");
      const data = await res.json();
      setTestimonials(data);
    } catch (error) {
      console.error("Error fetching testimonials:", error);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError(null);
    setSuccess(null);
    setLoading(true);

    try {
      const res = await fetch("/api/testimonial", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ name, message, post }),
      });

      if (!res.ok) {
        const errorText = await res.text();
        throw new Error(errorText);
      }

      const newTestimonial = await res.json();
      setSuccess("Testimonial added successfully!");
      setName("");
      setMessage("");
      setPost("");

      // Add the new testimonial to the list
      setTestimonials([...testimonials, newTestimonial]);
    } catch (error) {
      setError(`Failed to add testimonial: ${error.message}`);
    } finally {
      setLoading(false);
    }
  };

  const handleDelete = async (id) => {
    try {
      const res = await fetch(`/api/testimonial`, {
        method: "DELETE",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ id }),
      });

      if (res.ok) {
        setTestimonials(
          testimonials.filter((testimonial) => testimonial._id !== id)
        );
      } else {
        console.error("Failed to delete testimonial");
      }
    } catch (error) {
      console.error("Error deleting testimonial:", error);
    }
  };

  return (
    <div className=" mx-auto mt-32 my-32 p-4 bg-white shadow-md rounded-lg">
      <h1 className="text-2xl font-bold mb-4">Add Testimonial</h1>
      {error && <p className="text-red-500 mb-4">{error}</p>}
      {success && <p className="text-green-500 mb-4">{success}</p>}
      <form onSubmit={handleSubmit}>
        <div className="mb-4">
          <label className="block text-gray-700">Name</label>
          <input
            type="text"
            className="w-full p-2 border bg-slate-200 border-gray-300 rounded mt-1"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
          />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700">Message</label>
          <textarea
            className="w-full p-2 border bg-slate-200 border-gray-300 rounded mt-1"
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            required
          />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700">Position</label>
          <input
            type="text"
            className="w-full p-2 border bg-slate-200 border-gray-300 rounded mt-1"
            value={post}
            onChange={(e) => setPost(e.target.value)}
            required
          />
        </div>
        <button
          type="submit"
          className="w-full p-2 bg-green-600 text-white rounded hover:bg-blue-600"
          disabled={loading}
        >
          {loading ? "Submitting..." : "Submit"}
        </button>
      </form>

      <div className="mt-8 ">
        <h2 className="text-xl font-bold mb-4">Testimonials</h2>
        {testimonials.map((testimonial) => (
          <div
            key={testimonial._id}
            className="p-4 mb-4 bg-gray-100  rounded-lg shadow-md"
          >
            <h3 className="font-semibold">{testimonial.name}</h3>
            <p>{testimonial.message}</p>
            <p className="text-sm text-gray-600">{testimonial.post}</p>
            <button
              onClick={() => handleDelete(testimonial._id)}
              className="mt-2 p-2 bg-red-500 text-white rounded hover:bg-red-600"
            >
              Delete
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}
