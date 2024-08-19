"use client";
import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import AddTestimonial from "./add-testimonial/page";
import AddGallery from "./addGallery/page";

export default function Dashboard() {
  const [loading, setLoading] = useState(true);
  const [user, setUser] = useState(null);
  const router = useRouter();

  useEffect(() => {
    const token = localStorage.getItem("token");
    const expiresAt = localStorage.getItem("expiresAt");

    if (!token || !expiresAt || Date.now() > expiresAt) {
      router.push("/login");
      return;
    }

    // Fetch user data from API (if needed)
    setUser({ name: "User", email: "user@example.com" }); // Replace with actual user fetching logic
    setLoading(false);

    // Set a timeout to log the user out after 10 minutes
    const timeout = setTimeout(() => {
      localStorage.removeItem("token");
      localStorage.removeItem("expiresAt");
      router.push("/login");
    }, expiresAt - Date.now());

    return () => clearTimeout(timeout); // Clean up the timeout on component unmount
  }, [router]);

  if (loading) {
    return <p className="text-center mt-20">Loading...</p>;
  }

  return (
    <section className="min-h-screen bg-gray-50 pt-40 p-8">
      <div className="max-w-4xl mx-auto bg-white shadow-lg rounded-lg p-8">
        <h1 className="text-3xl font-semibold text-gray-800 mb-6 ">
          Welcome, {user?.name}
        </h1>
        <p className="text-lg text-gray-600 mb-8">
          You are in Omni Dashboard Page 
        </p>
        <button
          onClick={() => {
            localStorage.removeItem("token");
            localStorage.removeItem("expiresAt");
            router.push("/login");
          }}
          className="px-4 py-2  bg-red-500 text-white rounded hover:bg-red-600 transition"
        >
          Logout
        </button>

        {/* AddTestimonial Component */}
        <div className="mt-10">
          <AddTestimonial />
        </div>
        <div className="mt-10">
          <AddGallery/>
        </div>
      </div>
    </section>
  );
}
