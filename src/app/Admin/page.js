"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import {
  FaUserShield,
  FaIdCard,
  FaBuilding,
  FaEnvelope,
  FaPhone,
  FaCheckCircle,
  FaSpinner,
  FaUserEdit,
  FaKey,
} from "react-icons/fa";

export default function AdminPage() {
  const router = useRouter();
  const [form, setForm] = useState({
    gov_id: "",
    full_name: "",
    department: "",
    email: "",
    phone: "",
    designation: "",
    password: "",
  });
  const [status, setStatus] = useState("idle");
  const [msg, setMsg] = useState("");

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus("pending");
    setMsg("");
    setTimeout(() => {
      setStatus("success");
      setMsg("Admin details submitted successfully!");
      router.push("/AdminDashboard");
    }, 1500);
  };

  return (
    <div className="min-h-screen flex flex-col bg-gradient-to-br from-blue-100 via-green-100 to-green-300">
      <Navbar />
      <main className="flex-1 flex items-center justify-center px-4 py-12">
        <section className="w-full max-w-5xl bg-white/95 rounded-3xl shadow-2xl p-10 border border-blue-100 backdrop-blur-md flex flex-col md:flex-row gap-10 items-center relative z-10">
          {/* Left Side: Icon & Title */}
          <div className="flex flex-col items-center md:items-start justify-center gap-6 md:w-1/2">
            <span className="bg-gradient-to-tr from-blue-400 to-green-400 p-5 rounded-full shadow-lg">
              <FaUserShield className="text-6xl text-white drop-shadow" />
            </span>
            <h1 className="text-4xl md:text-5xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-blue-700 via-green-700 to-blue-400 drop-shadow-lg text-center md:text-left">
              Admin Government ID Form
            </h1>
            <p className="text-blue-900 text-lg font-medium text-center md:text-left">
              Please fill in your government credentials to access the admin
              dashboard.
            </p>
          </div>
          {/* Right Side: Form */}
          <form
            className="flex flex-col gap-6 md:w-1/2"
            onSubmit={handleSubmit}
          >
            <div className="flex items-center gap-2">
              <FaIdCard className="text-blue-700 text-xl" />
              <input
                type="text"
                name="gov_id"
                value={form.gov_id}
                onChange={handleChange}
                required
                placeholder="Government ID Number"
                className="flex-1 rounded-xl border border-blue-200 px-4 py-3 shadow focus:ring-2 focus:ring-blue-300 focus:outline-none"
                maxLength={30}
              />
            </div>
            <div className="flex items-center gap-2">
              <FaUserEdit className="text-blue-700 text-xl" />
              <input
                type="text"
                name="full_name"
                value={form.full_name}
                onChange={handleChange}
                required
                placeholder="Full Name"
                className="flex-1 rounded-xl border border-blue-200 px-4 py-3 shadow focus:ring-2 focus:ring-blue-300 focus:outline-none"
                maxLength={50}
              />
            </div>
            <div className="flex items-center gap-2">
              <FaBuilding className="text-blue-700 text-xl" />
              <input
                type="text"
                name="department"
                value={form.department}
                onChange={handleChange}
                required
                placeholder="Department (e.g. Municipal Corp.)"
                className="flex-1 rounded-xl border border-blue-200 px-4 py-3 shadow focus:ring-2 focus:ring-blue-300 focus:outline-none"
                maxLength={50}
              />
            </div>
            <div className="flex items-center gap-2">
              <FaEnvelope className="text-blue-700 text-xl" />
              <input
                type="email"
                name="email"
                value={form.email}
                onChange={handleChange}
                required
                placeholder="Email Address"
                className="flex-1 rounded-xl border border-blue-200 px-4 py-3 shadow focus:ring-2 focus:ring-blue-300 focus:outline-none"
                maxLength={50}
              />
            </div>
            <div className="flex items-center gap-2">
              <FaPhone className="text-blue-700 text-xl" />
              <input
                type="tel"
                name="phone"
                value={form.phone}
                onChange={handleChange}
                required
                placeholder="Phone Number"
                className="flex-1 rounded-xl border border-blue-200 px-4 py-3 shadow focus:ring-2 focus:ring-blue-300 focus:outline-none"
                maxLength={15}
              />
            </div>
            <div className="flex items-center gap-2">
              <FaUserShield className="text-blue-700 text-xl" />
              <input
                type="text"
                name="designation"
                value={form.designation}
                onChange={handleChange}
                required
                placeholder="Designation (e.g. Supervisor)"
                className="flex-1 rounded-xl border border-blue-200 px-4 py-3 shadow focus:ring-2 focus:ring-blue-300 focus:outline-none"
                maxLength={30}
              />
            </div>
            <div className="flex items-center gap-2">
              <FaKey className="text-blue-700 text-xl" />
              <input
                type="password"
                name="password"
                value={form.password}
                onChange={handleChange}
                required
                placeholder="Password"
                className="flex-1 rounded-xl border border-blue-200 px-4 py-3 shadow focus:ring-2 focus:ring-blue-300 focus:outline-none"
                maxLength={30}
              />
            </div>
            <button
              type="submit"
              disabled={status === "pending"}
              className="mt-2 bg-gradient-to-r from-blue-700 to-green-600 hover:from-blue-800 hover:to-green-700 text-white font-bold py-3 rounded-xl shadow-lg transition text-lg flex items-center justify-center gap-2 disabled:opacity-60"
            >
              {status === "pending" ? (
                <>
                  <FaSpinner className="animate-spin" /> Submitting...
                </>
              ) : (
                <>
                  <FaCheckCircle /> Submit
                </>
              )}
            </button>
            {msg && (
              <div
                className={`mt-4 text-center rounded py-2 font-semibold ${
                  status === "success"
                    ? "bg-green-100 text-green-800"
                    : "bg-red-100 text-red-700"
                }`}
              >
                {msg}
              </div>
            )}
          </form>
        </section>
      </main>
      <Footer />
    </div>
  );
}