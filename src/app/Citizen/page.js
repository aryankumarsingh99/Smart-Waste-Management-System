"use client";

import { useEffect } from "react";
import { useRouter } from "next/navigation";
import { useState } from "react";
import {
  FaMapMarkerAlt,
  FaCheckCircle,
  FaSpinner,
  FaClock,
  FaRecycle,
  FaLeaf,
  FaInfoCircle,
  FaCamera,
  FaRegCommentDots,
  FaHome,
} from "react-icons/fa";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

// Use your real Google Maps Embed API key here
const GOOGLE_MAPS_API_KEY = "YOUR_GOOGLE_MAPS_API_KEY";

export default function CitizenPage() {
  const router = useRouter();
  const [image, setImage] = useState(null);
  const [location, setLocation] = useState({ lat: "", lng: "" });
  const [address, setAddress] = useState("");
  const [description, setDescription] = useState("");
  const [manualAddress, setManualAddress] = useState("");
  const [status, setStatus] = useState("idle");
  const [showMap, setShowMap] = useState(false);

  // Redirect to login if not logged in
  useEffect(() => {
    if (typeof window !== "undefined") {
      const user = localStorage.getItem("swm_user");
      if (!user) {
        router.push("/Auth/login");
      }
    }
  }, [router]);

  const handleImageChange = (e) => {
    if (e.target.files && e.target.files[0]) {
      setImage(URL.createObjectURL(e.target.files[0]));
    }
  };

  const handleGetLocation = () => {
    if (!navigator.geolocation) {
      alert("Geolocation is not supported by your browser.");
      return;
    }
    setStatus("pending");
    navigator.geolocation.getCurrentPosition(
      (pos) => {
        setLocation({
          lat: pos.coords.latitude,
          lng: pos.coords.longitude,
        });
        setShowMap(true);
        fetch(
          `https://maps.googleapis.com/maps/api/geocode/json?latlng=${pos.coords.latitude},${pos.coords.longitude}&key=${GOOGLE_MAPS_API_KEY}`
        )
          .then((res) => res.json())
          .then((data) => {
            if (data.results && data.results[0]) {
              setAddress(data.results[0].formatted_address);
            }
            setStatus("idle");
          })
          .catch(() => setStatus("idle"));
      },
      () => {
        alert("Unable to retrieve your location.");
        setStatus("idle");
      }
    );
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setStatus("inprogress");
    setTimeout(() => setStatus("completed"), 3000);
  };

  return (
    <div className="min-h-screen flex flex-col bg-gradient-to-br from-green-400 via-blue-100 to-blue-600">
      <Navbar />
      <main className="flex-1 flex flex-col md:flex-row items-center justify-center gap-12 px-4 py-12 relative">
        {/* Left: Info & Motivation */}
        <section className="w-full md:w-1/2 flex flex-col items-center md:items-start mb-10 md:mb-0">
          <div className="flex items-center gap-4 mb-6">
            <span className="bg-gradient-to-tr from-green-400 to-blue-400 p-3 rounded-full shadow-lg">
              <FaRecycle className="text-5xl text-white drop-shadow" />
            </span>
            <h1 className="text-4xl md:text-5xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-green-700 via-blue-700 to-green-400 drop-shadow-lg">
              Smart Waste Pickup
            </h1>
          </div>
          <p className="mb-8 text-blue-900 text-xl flex items-center gap-2 font-medium">
            <FaInfoCircle className="text-blue-400" />
            Help us keep your city clean! Report garbage spots with a photo and location.
          </p>
          <div className="flex flex-col gap-4 w-full max-w-md">
            <div className="flex items-center gap-3 bg-gradient-to-r from-green-100 to-green-50 border border-green-200 rounded-xl px-5 py-3 text-green-900 text-base shadow">
              <FaLeaf className="text-green-600 text-2xl" />
              <span>Earn green points for every successful pickup!</span>
            </div>
            <div className="flex items-center gap-3 bg-gradient-to-r from-blue-100 to-blue-50 border border-blue-200 rounded-xl px-5 py-3 text-blue-900 text-base shadow">
              <FaRecycle className="text-blue-600 text-2xl" />
              <span>Track your requests and get instant status updates.</span>
            </div>
            <div className="flex items-center gap-3 bg-gradient-to-r from-yellow-100 to-yellow-50 border border-yellow-200 rounded-xl px-5 py-3 text-yellow-900 text-base shadow">
              <FaCheckCircle className="text-yellow-600 text-2xl" />
              <span>Join community drives and make a difference!</span>
            </div>
          </div>
        </section>
        {/* Right: Form Card */}
        <section className="w-full md:w-[440px] bg-white/95 rounded-3xl shadow-2xl p-10 flex flex-col items-center border border-green-100 backdrop-blur-md relative z-10">
          <form className="w-full flex flex-col gap-6" onSubmit={handleSubmit}>
            {/* Image Upload */}
            <div className="flex flex-col items-center gap-2 w-full">
              <label className="flex items-center gap-2 cursor-pointer bg-gradient-to-r from-green-50 to-blue-50 border border-green-200 px-5 py-3 rounded-xl shadow hover:bg-green-100 transition font-semibold text-green-700">
                <FaCamera className="text-green-700 text-xl" />
                Upload Image
                <input
                  type="file"
                  accept="image/*"
                  className="hidden"
                  onChange={handleImageChange}
                  required
                />
              </label>
              {image && (
                <img
                  src={image}
                  alt="Uploaded"
                  className="mt-3 w-44 h-32 object-cover rounded-xl shadow border-2 border-green-200"
                />
              )}
              <span className="text-xs text-gray-500 mt-1">
                Please upload a clear photo of the garbage spot.
              </span>
            </div>
            {/* Description */}
            <div className="flex flex-col items-center gap-2 w-full">
              <label className="flex items-center gap-2 w-full font-semibold text-green-700">
                <FaRegCommentDots className="text-green-700 text-xl" />
                Description
              </label>
              <textarea
                className="w-full rounded-xl border border-green-200 px-4 py-3 shadow focus:ring-2 focus:ring-green-300 focus:outline-none resize-none"
                rows={3}
                placeholder="Describe the issue or location (optional, e.g. 'Overflowing bin near park entrance')"
                value={description}
                onChange={(e) => setDescription(e.target.value)}
                maxLength={200}
              />
              <span className="text-xs text-gray-500">
                Add any details to help us find and resolve the issue faster.
              </span>
            </div>
            {/* Address Form */}
            <div className="flex flex-col items-center gap-2 w-full">
              <label className="flex items-center gap-2 w-full font-semibold text-green-700">
                <FaHome className="text-green-700 text-xl" />
                Address (optional)
              </label>
              <input
                type="text"
                className="w-full rounded-xl border border-green-200 px-4 py-3 shadow focus:ring-2 focus:ring-green-300 focus:outline-none"
                placeholder="Enter address or landmark (optional)"
                value={manualAddress}
                onChange={(e) => setManualAddress(e.target.value)}
                maxLength={200}
              />
              <span className="text-xs text-gray-500">
                You can provide a specific address or landmark for more accuracy.
              </span>
            </div>
            {/* Location */}
            <div className="flex flex-col items-center gap-2 w-full">
              <button
                type="button"
                onClick={handleGetLocation}
                className="flex items-center gap-2 bg-gradient-to-r from-blue-700 to-green-600 hover:from-blue-800 hover:to-green-700 text-white px-5 py-3 rounded-xl shadow transition font-semibold"
              >
                <FaMapMarkerAlt />
                Use My Location
              </button>
              {location.lat && location.lng && (
                <div className="text-sm text-green-800 mt-2 text-center font-medium">
                  <b>Location:</b>{" "}
                  {address
                    ? address
                    : `${location.lat.toFixed(5)}, ${location.lng.toFixed(5)}`}
                </div>
              )}
              {/* Show Google Map if location is set */}
              {showMap && location.lat && location.lng && (
                <div className="w-full flex justify-center mt-2">
                  <iframe
                    title="Google Map"
                    width="100%"
                    height="180"
                    className="rounded-xl border"
                    style={{ maxWidth: 350 }}
                    loading="lazy"
                    allowFullScreen
                    referrerPolicy="no-referrer-when-downgrade"
                    src={`https://www.google.com/maps/embed/v1/place?key=${GOOGLE_MAPS_API_KEY}&q=${location.lat},${location.lng}&zoom=16`}
                  />
                </div>
              )}
              <span className="text-xs text-gray-500">
                Your location helps us find and clean the spot faster.
              </span>
            </div>
            <button
              type="submit"
              disabled={!image || !location.lat || status === "inprogress"}
              className="mt-2 bg-gradient-to-r from-green-600 to-blue-600 hover:from-green-700 hover:to-blue-700 text-white font-bold py-3 rounded-xl shadow-lg transition text-lg flex items-center justify-center gap-2 disabled:opacity-60"
            >
              {status === "inprogress" ? (
                <>
                  <FaSpinner className="animate-spin" /> Requesting Pickup...
                </>
              ) : (
                "Submit Pickup Request"
              )}
            </button>
          </form>
          {/* Status Tracking */}
          <div className="mt-8 w-full">
            <h2 className="text-lg font-bold text-blue-800 mb-2 flex items-center gap-2">
              <FaCheckCircle className="text-green-600" />
              Request Status
            </h2>
            <div className="flex items-center gap-3 justify-center">
              {status === "idle" && (
                <span className="text-gray-500">No active request.</span>
              )}
              {status === "pending" && (
                <>
                  <FaClock className="text-yellow-500 animate-pulse" />
                  <span className="text-yellow-700">Fetching your location...</span>
                </>
              )}
              {status === "inprogress" && (
                <>
                  <FaSpinner className="text-blue-600 animate-spin" />
                  <span className="text-blue-700">Pickup request in progress...</span>
                </>
              )}
              {status === "completed" && (
                <>
                  <FaCheckCircle className="text-green-600" />
                  <span className="text-green-700 font-semibold">
                    Pickup completed! Thank you for keeping your city clean.
                  </span>
                </>
              )}
            </div>
          </div>
        </section>
        {/* Decorative icons */}
        <FaRecycle className="hidden md:block absolute left-0 top-0 text-green-100 opacity-20 text-[140px] -z-10 pointer-events-none" />
        <FaLeaf className="hidden md:block absolute right-0 bottom-0 text-green-100 opacity-20 text-[120px] -z-10 pointer-events-none" />
      </main>
      <Footer />
    </div>
  );
}