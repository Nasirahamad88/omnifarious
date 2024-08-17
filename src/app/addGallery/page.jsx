"use client";

import { useState, useEffect } from "react";

export default function Home() {
  const [file, setFile] = useState(null);
  const [message, setMessage] = useState("");
  const [images, setImages] = useState([]);

  const handleFileChange = (e) => {
    setFile(e.target.files[0]);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!file) {
      setMessage("Please select a file");
      return;
    }

    const formData = new FormData();
    formData.append("image", file);

    const res = await fetch("/api/gallery/route", {
      method: "PUT",
      body: formData,
    });

    const data = await res.json();
    setMessage(data.message);
    setFile(null);
    fetchImages(); // Fetch updated images
  };

  const fetchImages = async () => {
    const res = await fetch("/api/gallery/route");
    const data = await res.json();
    setImages(data);
  };

  const handleDelete = async (id) => {
    const res = await fetch(`/api/gallery/route?id=${id}`, {
      method: "DELETE",
    });

    const data = await res.json();
    setMessage(data.message);
    fetchImages(); // Fetch updated images
  };

  useEffect(() => {
    fetchImages();
  }, []);

  return (
    <div className="pt-20 px-4">
      <h1 className="text-2xl mb-4">Upload Image</h1>
      <form onSubmit={handleSubmit} className="mb-4">
        <input
          type="file"
          onChange={handleFileChange}
          className="border rounded p-2 mr-2"
        />
        <button
          type="submit"
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
        >
          Upload
        </button>
      </form>
      {message && <p className="text-red-500">{message}</p>}
      <h2 className="text-xl mb-2">Gallery</h2>
      <div className="flex flex-wrap -mx-2">
        {images.map((image) => (
          <div key={image._id} className="w-1/3 px-2 mb-4">
            <img
              src={`/uploads/${image.image}`}
              alt={image.image}
              className="rounded-lg shadow-md"
            />
            <button
              onClick={() => handleDelete(image._id)}
              className="block bg-red-500 hover:bg-red-700 text-white font-bold py-1 px-4 mt-2 rounded"
            >
              Delete
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}
