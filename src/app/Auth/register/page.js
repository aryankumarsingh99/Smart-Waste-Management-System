"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { FaUserPlus, FaCheckCircle } from "react-icons/fa";

export default function RegisterPage() {
  const router = useRouter();
  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    address: "",
    city: "",
    state: "",
    pincode: "",
    password: "",
    confirm: "",
  });
  const [msg, setMsg] = useState("");
  const [success, setSuccess] = useState(false);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setMsg("");
    setSuccess(false);
    try {
      const res = await fetch("/api/auth/register", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });
      const data = await res.json();
      if (data.success) {
        setSuccess(true);
        setMsg("Registration successful! Redirecting to login...");
        // After successful login/registration:
        localStorage.setItem(
          "swm_user",
          JSON.stringify({
            name: data.user.name,
            email: data.user.email,
            avatar: data.user.avatar || "", // if available
          })
        );
        setTimeout(() => {
          router.push("/Auth/login");
        }, 1500);
        setForm({
          name: "",
          email: "",
          phone: "",
          address: "",
          city: "",
          state: "",
          pincode: "",
          password: "",
          confirm: "",
        });
      } else {
        setMsg(data.message || "Registration failed.");
      }
    } catch {
      setMsg("Server error.");
    }
  };

  return (
    <main className="flex items-center justify-center min-h-screen bg-gradient-to-br from-green-100 via-white to-blue-100">
      <div className="bg-white/90 rounded-2xl shadow-2xl p-8 w-full max-w-lg flex flex-col items-center">
        <div className="flex items-center gap-3 mb-6">
          <FaUserPlus className="text-4xl text-green-700 drop-shadow" />
          <h1 className="text-3xl font-extrabold text-green-800 drop-shadow">
            Register
          </h1>
        </div>
        <form
          className="w-full flex flex-col gap-3"
          onSubmit={handleSubmit}
          autoComplete="off"
        >
          <input
            type="text"
            name="name"
            value={form.name}
            onChange={handleChange}
            required
            placeholder="Full Name"
            className="input"
          />
          <input
            type="email"
            name="email"
            value={form.email}
            onChange={handleChange}
            required
            placeholder="Email Address"
            className="input"
          />
          <input
            type="tel"
            name="phone"
            value={form.phone}
            onChange={handleChange}
            required
            placeholder="Phone Number"
            className="input"
          />
          <input
            type="text"
            name="address"
            value={form.address}
            onChange={handleChange}
            required
            placeholder="Address"
            className="input"
          />
          <input
            type="text"
            name="city"
            value={form.city}
            onChange={handleChange}
            required
            placeholder="City"
            className="input"
          />
          <input
            type="text"
            name="state"
            value={form.state}
            onChange={handleChange}
            required
            placeholder="State"
            className="input"
          />
          <input
            type="text"
            name="pincode"
            value={form.pincode}
            onChange={handleChange}
            required
            placeholder="Pincode"
            className="input"
          />
          <input
            type="password"
            name="password"
            value={form.password}
            onChange={handleChange}
            required
            placeholder="Password"
            className="input"
          />
          <input
            type="password"
            name="confirm"
            value={form.confirm}
            onChange={handleChange}
            required
            placeholder="Confirm Password"
            className="input"
          />
          <button
            type="submit"
            className="mt-2 bg-green-700 hover:bg-green-800 text-white font-bold py-3 rounded-lg shadow transition text-lg flex items-center justify-center gap-2"
          >
            <FaUserPlus />
            Register
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
            {success ? <FaCheckCircle className="inline mr-2" /> : null}
            {msg}
          </div>
        )}
        <div className="mt-6 text-center text-sm text-gray-600">
          Already have an account?{" "}
          <a
            href="/Auth/login"
            className="text-green-700 font-semibold hover:underline"
          >
            Login here
          </a>
        </div>
      </div>
      <style jsx>{`
        .input {
          padding: 0.75rem 0.75rem 0.75rem 0.75rem;
          border-radius: 0.5rem;
          border: 1px solid #bbf7d0;
          background: #fff;
          width: 100%;
          outline: none;
          margin-bottom: 0.25rem;
        }
        .input:focus {
          border-color: #22c55e;
          box-shadow: 0 0 0 2px #bbf7d0;
        }
      `}</style>
    </main>
  );
}