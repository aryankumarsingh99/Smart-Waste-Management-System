"use client";

import Link from "next/link";
import { useState, useEffect } from "react";
import {
  FaRecycle,
  FaSignInAlt,
  FaBars,
  FaTimes,
  FaBell,
  FaUserPlus,
  FaUserCircle,
} from "react-icons/fa";

// Utility to get user from localStorage (client-side only)
function getStoredUser() {
  if (typeof window !== "undefined") {
    const user = localStorage.getItem("swm_user");
    if (user) return JSON.parse(user);
  }
  return null;
}

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [showNotif, setShowNotif] = useState(false);
  const [showUserMenu, setShowUserMenu] = useState(false);
  const [user, setUser] = useState(null);

  // Example notifications (replace with real notifications if needed)
  const notifications = [
    { id: 1, message: "Garbage collection scheduled for 7:00 AM tomorrow." },
    { id: 2, message: "New cleanliness drive in your area this weekend!" },
    { id: 3, message: "Your report has been resolved. Thank you!" },
  ];

  // On mount, get user from localStorage
  useEffect(() => {
    setUser(getStoredUser());
  }, []);

  // Logout handler
  const handleLogout = () => {
    localStorage.removeItem("swm_user");
    setUser(null);
    setShowUserMenu(false);
    window.location.href = "/";
  };

  return (
    <nav className="w-full bg-gradient-to-r bg-opacity-90 px-6 py-4 flex items-center justify-between sticky top-0 z-50 transition">
      {/* Logo and Title */}
      <div className="flex items-center gap-3">
        <FaRecycle className="text-3xl text-green-800 drop-shadow" />
        <span className="text-xl md:text-2xl text-white font-extrabold tracking-tight">
          Smart Waste Management
        </span>
      </div>
      {/* Desktop Navigation */}
      <div className="hidden md:flex items-center gap-6">
        <Link
          href="/"
          className="text-white font-semibold hover:underline hover:text-green-200 transition"
        >
          Home
        </Link>
        <Link
          href="/Help"
          className="text-white font-semibold hover:underline hover:text-green-200 transition"
        >
          Help
        </Link>
        <Link
          href="/Citizen"
          className="text-white font-semibold hover:underline hover:text-green-200 transition"
        >
          Citizen
        </Link>
        {/* Hide Admin Portal if user is logged in */}
        {!user && (
          <Link
            href="/Admin"
            className="text-white font-semibold hover:underline hover:text-green-200 transition"
          >
            Admin
          </Link>
        )}
        {!user && (
          <>
            <Link
              href="/Auth/register"
              className="flex items-center gap-2 bg-white/20 hover:bg-green-600 text-white font-bold px-4 py-2 rounded-lg shadow transition"
            >
              <FaUserPlus className="text-lg" />
              Register
            </Link>
            <Link
              href="/Auth/login"
              className="flex items-center gap-2 bg-white/20 hover:bg-green-600 text-white font-bold px-4 py-2 rounded-lg shadow transition"
            >
              <FaSignInAlt className="text-lg" />
              Login
            </Link>
          </>
        )}
        <button
          className="relative flex items-center gap-2 bg-white/20 hover:bg-green-600 text-white font-bold px-4 py-2 rounded-lg shadow transition"
          onClick={() => setShowNotif((v) => !v)}
          aria-label="Notifications"
        >
          <FaBell className="text-lg" />
          {notifications.length > 0 && (
            <span className="absolute -top-2 -right-2 bg-red-500 text-white text-xs rounded-full px-2 py-0.5">
              {notifications.length}
            </span>
          )}
        </button>
        {/* User Avatar */}
        {user && (
          <div className="relative">
            <button
              className="ml-2 flex items-center gap-2 focus:outline-none"
              onClick={() => setShowUserMenu((v) => !v)}
              aria-label="User menu"
            >
              {user.avatar ? (
                <img
                  src={user.avatar}
                  alt="User Avatar"
                  className="w-9 h-9 rounded-full border-2 border-green-700 object-cover"
                />
              ) : (
                <FaUserCircle className="text-3xl text-white" />
              )}
              <span className="hidden md:inline text-white font-semibold">
                {user.name}
              </span>
            </button>
            {showUserMenu && (
              <div className="absolute right-0 mt-2 bg-white rounded-lg shadow-lg py-2 w-48 z-50 border border-green-100 animate-fade-in">
                <div className="px-4 py-2 text-green-800 font-bold border-b border-green-50">
                  {user.name}
                  <div className="text-xs text-gray-500">{user.email}</div>
                </div>
                <Link
                  href="/profile"
                  className="block px-4 py-2 text-green-700 hover:bg-green-50 transition"
                  onClick={() => setShowUserMenu(false)}
                >
                  Profile
                </Link>
                <Link
                  href="/settings"
                  className="block px-4 py-2 text-green-700 hover:bg-green-50 transition"
                  onClick={() => setShowUserMenu(false)}
                >
                  Settings
                </Link>
                <button
                  className="w-full text-left px-4 py-2 text-red-600 hover:bg-red-50 transition"
                  onClick={handleLogout}
                >
                  Logout
                </button>
              </div>
            )}
          </div>
        )}
      </div>
      {/* Mobile Hamburger */}
      <button
        className="md:hidden flex items-center justify-center p-2 rounded hover:bg-green-800 transition"
        aria-label="Open menu"
        onClick={() => setMenuOpen((v) => !v)}
      >
        {menuOpen ? (
          <FaTimes className="text-2xl text-white" />
        ) : (
          <FaBars className="text-2xl text-white" />
        )}
      </button>
      {/* Mobile Dropdown Menu */}
      {menuOpen && (
        <div className="absolute top-full left-0 w-full bg-gradient-to-r from-green-700/90 via-green-800/90 to-blue-900/90 backdrop-blur-md shadow-lg flex flex-col items-center py-6 gap-4 md:hidden animate-fade-in z-50">
          <Link
            href="/"
            className="text-white font-semibold hover:underline hover:text-green-200 transition text-lg"
            onClick={() => setMenuOpen(false)}
          >
            Home
          </Link>
          <Link
            href="/Help"
            className="text-white font-semibold hover:underline hover:text-green-200 transition text-lg"
            onClick={() => setMenuOpen(false)}
          >
            Help
          </Link>
          <Link
            href="/Citizen"
            className="text-white font-semibold hover:underline hover:text-green-200 transition text-lg"
            onClick={() => setMenuOpen(false)}
          >
            Citizen
          </Link>
          {/* Hide Admin Portal if user is logged in */}
          {!user && (
            <Link
              href="/Admin"
              className="text-white font-semibold hover:underline hover:text-green-200 transition text-lg"
              onClick={() => setMenuOpen(false)}
            >
              Admin
            </Link>
          )}
          {!user && (
            <>
              <Link
                href="/Auth/register"
                className="flex items-center gap-2 bg-white/20 hover:bg-green-600 text-white font-bold px-6 py-3 rounded-lg shadow transition text-lg"
                onClick={() => setMenuOpen(false)}
              >
                <FaUserPlus className="text-lg" />
                Register
              </Link>
              <Link
                href="/Auth/login"
                className="flex items-center gap-2 bg-white/20 hover:bg-green-600 text-white font-bold px-6 py-3 rounded-lg shadow transition text-lg"
                onClick={() => setMenuOpen(false)}
              >
                <FaSignInAlt className="text-lg" />
                Login
              </Link>
            </>
          )}
          <button
            className="flex items-center gap-2 bg-white/20 hover:bg-green-600 text-white font-bold px-6 py-3 rounded-lg shadow transition text-lg"
            onClick={() => {
              setShowNotif((v) => !v);
              setMenuOpen(false);
            }}
          >
            <FaBell className="text-lg" />
            {notifications.length > 0 && (
              <span className="ml-2 bg-red-500 text-white text-xs rounded-full px-2 py-0.5">
                {notifications.length}
              </span>
            )}
          </button>
          {/* User Avatar in mobile */}
          {user && (
            <button
              className="flex items-center gap-2 mt-2 text-white font-bold"
              onClick={() => setShowUserMenu((v) => !v)}
            >
              {user.avatar ? (
                <img
                  src={user.avatar}
                  alt="User Avatar"
                  className="w-9 h-9 rounded-full border-2 border-green-700 object-cover"
                />
              ) : (
                <FaUserCircle className="text-3xl text-white" />
              )}
              <span>{user.name}</span>
            </button>
          )}
          {showUserMenu && user && (
            <div className="bg-white rounded-lg shadow-lg py-2 w-48 z-50 border border-green-100 animate-fade-in mt-2">
              <div className="px-4 py-2 text-green-800 font-bold border-b border-green-50">
                {user.name}
                <div className="text-xs text-gray-500">{user.email}</div>
              </div>
              <Link
                href="/profile"
                className="block px-4 py-2 text-green-700 hover:bg-green-50 transition"
                onClick={() => setShowUserMenu(false)}
              >
                Profile
              </Link>
              <Link
                href="/settings"
                className="block px-4 py-2 text-green-700 hover:bg-green-50 transition"
                onClick={() => setShowUserMenu(false)}
              >
                Settings
              </Link>
              <button
                className="w-full text-left px-4 py-2 text-red-600 hover:bg-red-50 transition"
                onClick={handleLogout}
              >
                Logout
              </button>
            </div>
          )}
        </div>
      )}
      {/* Notifications Dropdown */}
      {showNotif && (
        <div className="absolute right-4 top-20 md:top-16 bg-white text-green-900 rounded-xl shadow-lg w-80 max-w-xs z-50 animate-fade-in border border-green-200">
          <div className="p-4 border-b border-green-100 font-bold flex items-center gap-2">
            <FaBell className="text-green-700" />
            Notifications
          </div>
          <ul className="max-h-60 overflow-y-auto">
            {notifications.length === 0 ? (
              <li className="p-4 text-center text-gray-500">No notifications</li>
            ) : (
              notifications.map((notif) => (
                <li
                  key={notif.id}
                  className="p-4 border-b border-green-50 last:border-b-0 text-sm flex gap-2 items-start"
                >
                  <FaBell className="mt-1 text-yellow-500" />
                  <span>{notif.message}</span>
                </li>
              ))
            )}
          </ul>
          <button
            className="w-full py-2 bg-green-700 text-white rounded-b-xl font-semibold hover:bg-green-800 transition"
            onClick={() => setShowNotif(false)}
          >
            Close
          </button>
        </div>
      )}
      <style jsx global>{`
        @keyframes fade-in {
          from {
            opacity: 0;
            transform: translateY(-10px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        .animate-fade-in {
          animation: fade-in 0.2s ease;
        }
      `}</style>
    </nav>
  );
}