"use client";
import { useState, useEffect } from "react";

export default function Gallery() {
  const [galleryItems, setGalleryItems] = useState([]);
  const [formData, setFormData] = useState({ title: "", description: "" });
  const [imageFile, setImageFile] = useState(null);

  useEffect(() => {
    fetch("/api/gallery")
      .then((res) => res.json())
      .then((data) => setGalleryItems(data))
      .catch((error) => console.error("Error fetching gallery items:", error));
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();

    const form = new FormData();
    form.append("title", formData.title);
    form.append("description", formData.description);
    form.append("image", imageFile);

    try {
      const res = await fetch("/api/gallery", {
        method: "POST",
        body: form,
      });

      const newGalleryItem = await res.json();
      setGalleryItems([...galleryItems, newGalleryItem]);
    } catch (error) {
      console.error("Error uploading image:", error);
    }
  };
  const handleDelete = async (id) => {
    try {
      const res = await fetch(`/api/gallery`, {
        method: "DELETE",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ id }),
      });

      if (res.ok) {
        setGalleryItems(galleryItems.filter((item) => item._id !== id));
      } else {
        console.error("Failed to delete the gallery item");
      }
    } catch (error) {
      console.error("Error deleting the gallery item:", error);
    }
  };

  return (
    <div>
      <h1 className="text-3xl font-bold mb-4">Gallery</h1>
      <form onSubmit={handleSubmit} className="mb-6">
        <input
          type="text"
          placeholder="Title"
          value={formData.title}
          onChange={(e) => setFormData({ ...formData, title: e.target.value })}
          required
          className="border p-2 rounded  bg-slate-200 mb-2 w-full"
        />
        <textarea
          placeholder="Description"
          value={formData.description}
          onChange={(e) =>
            setFormData({ ...formData, description: e.target.value })
          }
          className="border p-2 rounded  bg-slate-200 mb-2 w-full"
        />
        <input
          type="file"
          onChange={(e) => setImageFile(e.target.files[0])}
          required
          className="border bg-slate-200 p-2 rounded mb-2 w-full"
        />
        <button
          type="submit"
          className="p-2 bg-green-600 text-white rounded hover:bg-blue-600"
        >
          Upload Image
        </button>
      </form>
      <div className="grid grid-cols-3 gap-4">
        {galleryItems.map((item) => (
          <div key={item._id} className="border p-4 rounded shadow-md">
            <h2 className="text-xl font-semibold mb-2">{item.title}</h2>
            <img
              src={item.imageUrl}
              alt={item.title}
              className="h-72 w-72 object-cover mb-2"
            />
            <p>{item.description}</p>
            <button
              onClick={() => handleDelete(item._id)}
              className="p-2 bg-red-500 text-white rounded hover:bg-red-600 mt-2"
            >
              Delete
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}