"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { FaSignInAlt, FaEnvelope, FaLock } from "react-icons/fa";

export default function LoginPage() {
  const router = useRouter();
  const [form, setForm] = useState({ email: "", password: "" });
  const [loading, setLoading] = useState(false);
  const [msg, setMsg] = useState("");
  const [success, setSuccess] = useState(false);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setMsg("");
    setSuccess(false);
    try {
      const res = await fetch("/api/auth/login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });
      const data = await res.json();
      if (data.success && data.user) {
        setSuccess(true);
        setMsg("Login successful! Redirecting...");
        // Store user data in localStorage
        if (typeof window !== "undefined") {
          localStorage.setItem(
            "swm_user",
            JSON.stringify({
              name: data.user.name,
              email: data.user.email,
              avatar: data.user.avatar || "",
            })
          );
        }
        setTimeout(() => {
          router.push("/");
        }, 1200);
      } else {
        setMsg(data.message || "Login failed.");
      }
    } catch (err) {
      setMsg("Server error.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <main className="flex items-center justify-center min-h-screen bg-gradient-to-br from-green-100 via-white to-blue-100">
      <div className="bg-white/90 rounded-2xl shadow-2xl p-8 w-full max-w-md flex flex-col items-center">
        <div className="flex items-center gap-3 mb-6">
          <FaSignInAlt className="text-4xl text-green-700 drop-shadow" />
          <h1 className="text-3xl font-extrabold text-green-800 drop-shadow">
            Login
          </h1>
        </div>
        <form
          className="w-full flex flex-col gap-4"
          onSubmit={handleSubmit}
          autoComplete="off"
        >
          <div className="relative">
            <FaEnvelope className="absolute left-3 top-3 text-green-400" />
            <input
              type="email"
              name="email"
              value={form.email}
              onChange={handleChange}
              required
              placeholder="Email Address"
              className="pl-10 pr-3 py-3 rounded-lg border border-green-200 w-full focus:outline-none focus:ring-2 focus:ring-green-400 bg-white/80"
            />
          </div>
          <div className="relative">
            <FaLock className="absolute left-3 top-3 text-green-400" />
            <input
              type="password"
              name="password"
              value={form.password}
              onChange={handleChange}
              required
              placeholder="Password"
              className="pl-10 pr-3 py-3 rounded-lg border border-green-200 w-full focus:outline-none focus:ring-2 focus:ring-green-400 bg-white/80"
            />
          </div>
          <button
            type="submit"
            disabled={loading}
            className="mt-2 bg-green-700 hover:bg-green-800 text-white font-bold py-3 rounded-lg shadow transition text-lg flex items-center justify-center gap-2"
          >
            <FaSignInAlt />
            {loading ? "Logging in..." : "Login"}
          </button>
        </form>
        {msg && (
          <div
            className={`mt-4 w-full text-center rounded py-2 ${
              success
                ? "bg-green-100 text-green-800"
                : "bg-red-100 text-red-700"
            }`}
          >
            {msg}
          </div>
        )}
        <div className="mt-6 text-center text-sm text-gray-600">
          Don&apos;t have an account?{" "}
          <a
            href="/Auth/register"
            className="text-green-700 font-semibold hover:underline"
          >
            Register here
          </a>
        </div>
      </div>
    </main>
  );
}