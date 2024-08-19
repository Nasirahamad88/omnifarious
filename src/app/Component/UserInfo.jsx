"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";

export default function UserInfo() {
  const [loading, setLoading] = useState(true);
  const [user, setUser] = useState(null);
  const router = useRouter();

  useEffect(() => {
    const token = localStorage.getItem("token");

    if (!token) {
      router.push("/login");
      return;
    }

    // Fetch user data from API (if needed)
    // For demonstration purposes
    setUser({ name: "User", email: "user@example.com" }); // Replace with actual user fetching logic

    setLoading(false);
  }, [router]);

  if (loading) {
    return <p>Loading...</p>;
  }

  return (
    <div className="p-6">
      <h1>Welcome, {user.name}</h1>
      <p>This is your dashboard.</p>
      <button
        onClick={() => {
          localStorage.removeItem("token");
          router.push("/login");
        }}
        className="p-2 text-white bg-red-500 rounded hover:bg-red-600"
      >
        Logout
      </button>
    </div>
  );
}