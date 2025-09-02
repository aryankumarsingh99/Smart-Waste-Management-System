"use client";

import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { FaQuestionCircle, FaEnvelope, FaPhone, FaWhatsapp, FaBookOpen } from "react-icons/fa";

export default function HelpPage() {
  return (
    <div className="min-h-screen flex flex-col bg-gradient-to-br from-green-300 via-blue-500 to-blue-300">
      <Navbar />
      <main className="flex-1 flex flex-col items-center justify-center px-4 py-12">
        <section className="w-full max-w-2xl bg-white/95 rounded-3xl shadow-2xl p-10 border border-green-100 backdrop-blur-md relative z-10">
          <div className="flex items-center gap-4 mb-6">
            <span className="bg-gradient-to-tr from-green-400 to-blue-400 p-3 rounded-full shadow-lg">
              <FaQuestionCircle className="text-5xl text-white drop-shadow" />
            </span>
            <h1 className="text-3xl md:text-4xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-green-700 via-blue-700 to-green-400 drop-shadow-lg">
              Help & Support
            </h1>
          </div>
          <p className="mb-8 text-blue-900 text-lg font-medium text-center">
            Need assistance? We`re here to help you with Smart Waste Management System.
          </p>
          <div className="flex flex-col gap-6">
            <div className="flex items-center gap-3 bg-gradient-to-r from-green-50 to-blue-50 border border-green-200 rounded-xl px-5 py-4 text-green-900 text-base shadow">
              <FaBookOpen className="text-green-600 text-2xl" />
              <span>
                <b>FAQ:</b> Visit our <a href="/faq" className="text-blue-700 underline">Frequently Asked Questions</a> page for quick answers.
              </span>
            </div>
            <div className="flex items-center gap-3 bg-gradient-to-r from-blue-50 to-green-50 border border-blue-200 rounded-xl px-5 py-4 text-blue-900 text-base shadow">
              <FaEnvelope className="text-blue-600 text-2xl" />
              <span>
                <b>Email:</b> <a href="mailto:support@smartwaste.com" className="text-blue-700 underline">support@smartwaste.com</a>
              </span>
            </div>
            <div className="flex items-center gap-3 bg-gradient-to-r from-green-50 to-blue-50 border border-green-200 rounded-xl px-5 py-4 text-green-900 text-base shadow">
              <FaPhone className="text-green-600 text-2xl" />
              <span>
                <b>Phone:</b> <a href="tel:+911234567890" className="text-blue-700 underline">+91 12345 67890</a>
              </span>
            </div>
            <div className="flex items-center gap-3 bg-gradient-to-r from-blue-50 to-green-50 border border-blue-200 rounded-xl px-5 py-4 text-blue-900 text-base shadow">
              <FaWhatsapp className="text-green-600 text-2xl" />
              <span>
                <b>WhatsApp:</b> <a href="https://wa.me/911234567890" target="_blank" rel="noopener noreferrer" className="text-blue-700 underline">Chat with us</a>
              </span>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}