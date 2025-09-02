"use client";

export default function Footer() {
  return (
    <footer className="w-full bg-gradient-to-r from-green-700 via-green-800 to-blue-900 text-white py-6 px-4 shadow-inner">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4">
        <div className="flex items-center gap-3">
          <span className="text-2xl font-bold tracking-tight">Smart Waste Management System</span>
          <span className="hidden md:inline-block text-xs bg-white/20 rounded px-2 py-1 ml-2">
            Powered by CleanTech
          </span>
        </div>
        <div className="flex flex-col md:flex-row gap-4 md:gap-6 items-center mt-4 md:mt-0">
          <a
            href="mailto:support@smartwaste.com"
            className="hover:underline hover:text-green-200 transition text-sm"
          >
            Contact Support
          </a>
          <span className="text-sm">
            Helpline:{" "}
            <a href="tel:1969" className="underline hover:text-green-200 transition">
              1969
            </a>
          </span>
          <a
            href="https://www.swachhbharatmission.gov.in/"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:underline hover:text-green-200 transition text-sm"
          >
            Swachh Bharat Mission
          </a>
          <a
            href="https://sbmurban.org/"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:underline hover:text-green-200 transition text-sm"
          >
            SBM Urban Portal
          </a>
          <a
            href="https://www.unep.org/"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:underline hover:text-green-200 transition text-sm"
          >
            UNEP
          </a>
          <a
            href="https://moef.gov.in/"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:underline hover:text-green-200 transition text-sm"
          >
            Ministry of Environment, Forest and Climate Change
          </a>
        </div>
      </div>
      <div className="mt-4 text-center text-xs text-green-100/80">
        &copy; {new Date().getFullYear()} Smart Waste Management System. All rights reserved.
      </div>
    </footer>
  );
}