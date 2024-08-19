"use client";

import Link from "next/link";
import { useState } from "react";

import { useRouter } from "next/navigation";

export default function LoginForm() {
  const [formData, setFormData] = useState({ email: "", password: "" });
  const [error, setError] = useState(null);
  const router = useRouter();

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const res = await fetch("/api/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      const data = await res.json();

      if (res.ok) {
        // Store token and expiration time in localStorage
        localStorage.setItem("token", data.token);
        localStorage.setItem("expiresAt", Date.now() + 20 * 60 * 1000); // 10 minutes in milliseconds

        // Redirect to dashboard
        router.push("/dashboard");
      } else {
        setError(data.error);
      }
    } catch (err) {
      setError("Login failed.");
    }
  };

  return (
    <div className="grid pt-20 bg-white place-items-center h-screen">
      <div className="flex items-center justify-center h-screen">
        <form
          onSubmit={handleSubmit}
          className="p-6 rounded shadow-md bg-gray-200"
        >
          <h1 className="text-2xl font-bold mb-4">Login</h1>
          {error && <p className="text-red-500 mb-4">{error}</p>}
          <div className="mb-4">
            <label htmlFor="email" className="block text-gray-700">
              Email
            </label>
            <input
              type="email"
              id="email"
              name="email"
              className="w-full  bg-slate-400 p-2 text-black border rounded"
              value={formData.email}
              onChange={(e) =>
                setFormData({ ...formData, email: e.target.value })
              }
              required
            />
          </div>
          <div className="mb-4">
            <label htmlFor="password" className="block text-black">
              Password
            </label>
            <input
              type="password"
              id="password"
              name="password"
              className="w-full p-2 bg-slate-400 text-black border rounded"
              value={formData.password}
              onChange={(e) =>
                setFormData({ ...formData, password: e.target.value })
              }
              required
            />
          </div>
          <button
            type="submit"
            className="w-full p-2 text-white bg-green-600 rounded hover:bg-green-900"
          >
            Login
          </button>
        </form>
      </div>
    </div>
  );
}