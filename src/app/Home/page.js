"use client";
import { FaRecycle, FaLeaf, FaMapMarkerAlt, FaMobileAlt, FaBell } from "react-icons/fa";
import Image from "next/image";
import Navbar from "../components/Navbar";
import { motion } from "framer-motion";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";

export default function HomePage() {
  const router = useRouter();
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  useEffect(() => {
    if (typeof window !== "undefined") {
      setIsLoggedIn(!!localStorage.getItem("swm_user"));
    }
  }, []);

  // Check login status from localStorage
  const handleCitizenPortal = () => {
    if (typeof window !== "undefined") {
      const user = localStorage.getItem("swm_user");
      if (user) {
        router.push("/Citizen");
      } else {
        router.push("/Auth/login");
      }
    }
  };

  const handleAdminPortal = () => {
    router.push("/Admin");
  };

  return (
    <main className="relative min-h-screen w-full">
      {/* Background Image */}
      <div
        className="fixed inset-0 -z-20 w-full h-full"
        style={{
          backgroundImage: "url('/img12.jpg')",
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
          opacity: 0.98,
          filter: "blur(2px)",
        }}
      />
      <Navbar />
      <section className="relative w-full flex flex-col md:flex-row items-center justify-between gap-10 py-12 px-6 md:px-16 bg-gradient-to-br overflow-hidden">
        {/* Left Content */}
        <motion.div
          className="flex-1 flex flex-col items-start justify-center z-10"
          initial={{ x: -80, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <motion.div
            className="flex items-center gap-3 mb-4"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.6 }}
          >
            <FaLeaf className="text-green-700 text-3xl" />
            <span className="text-lg font-semibold text-green-700 tracking-wide">
              Welcome to
            </span>
          </motion.div>
          <motion.h1
            className="text-4xl md:text-5xl font-extrabold text-green-900 mb-4 leading-tight drop-shadow"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6, duration: 0.7 }}
          >
            Smart Waste Management System
          </motion.h1>
          <motion.p
            className="text-white text-lg mb-6 max-w-xl"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8, duration: 0.7 }}
          >
            Revolutionizing urban cleanliness with real-time tracking, smart notifications, and citizen engagement. Make your city cleaner, greener, and smarter!
          </motion.p>
          <motion.ul
            className="mb-8 space-y-2 text-gray-800 text-base"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1, duration: 0.7 }}
          >
            <li className="flex items-center gap-2">
              <FaMapMarkerAlt className="text-blue-600" />
              <span className="text-black">Track garbage trucks and bin status live on the map</span>
            </li>
            <li className="flex items-center gap-2">
              <FaMobileAlt className="text-green-600" />
              <span className="text-black">Report issues instantly from your mobile</span>
            </li>
            <li className="flex items-center gap-2">
              <FaBell className="text-yellow-500" />
              <span className="text-black">Get timely notifications for collection schedules</span>
            </li>
          </motion.ul>
          <motion.div
            className="flex gap-4"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.2, duration: 0.6 }}
          >
            <button
              type="button"
              onClick={handleCitizenPortal}
              className="bg-green-700 hover:bg-green-800 text-white font-bold px-6 py-3 rounded-lg shadow transition text-lg flex items-center gap-2"
            >
              <FaLeaf /> Citizen Portal
            </button>
            {!isLoggedIn && (
              <button
                type="button"
                onClick={handleAdminPortal}
                className="bg-blue-700 hover:bg-blue-800 text-white font-bold px-6 py-3 rounded-lg shadow transition text-lg flex items-center gap-2"
              >
                <FaRecycle /> Admin Portal
              </button>
            )}
          </motion.div>
        </motion.div>
        {/* Right Side Image */}
        <motion.div
          className="flex-1 flex items-center justify-center z-10"
          initial={{ x: 80, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <Image
            src="/img4.jpg"
            alt="Smart Waste Management Illustration"
            width={420}
            height={420}
            className="rounded-xl shadow-lg hover:border-green-300 hover:scale-110 border-4 border-green-200 bg-white"
            priority
          />
        </motion.div>
      </section>
    </main>
  );
}