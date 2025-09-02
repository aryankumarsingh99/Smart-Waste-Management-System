"use client";

import { useState } from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { FaCalendarAlt, FaCheckCircle, FaTrashAlt, FaUserCircle, FaMapMarkerAlt } from "react-icons/fa";

// Dummy data for demonstration (replace with API data)
const initialRequests = [
  {
    id: 1,
    citizen: "Amit Kumar",
    address: "Park Avenue, Sector 12",
    description: "Overflowing bin near park entrance",
    image: "/bin1.jpg",
    status: "Pending",
    scheduled: null,
  },
  {
    id: 2,
    citizen: "Priya Singh",
    address: "Near City Mall",
    description: "Garbage dumped on roadside",
    image: "/bin2.jpg",
    status: "Pending",
    scheduled: null,
  },
];

export default function AdminDashboard() {
  const [requests, setRequests] = useState(initialRequests);
  const [selectedId, setSelectedId] = useState(null);
  const [schedule, setSchedule] = useState({ date: "", time: "" });
  const [msg, setMsg] = useState("");

  const handleSchedule = (id) => {
    setRequests((prev) =>
      prev.map((req) =>
        req.id === id
          ? {
              ...req,
              status: "Scheduled",
              scheduled: `${schedule.date} at ${schedule.time}`,
            }
          : req
      )
    );
    setMsg("Pickup scheduled and citizen notified!");
    setSelectedId(null);
    setSchedule({ date: "", time: "" });
    setTimeout(() => setMsg(""), 2000);
  };

  const handleDelete = (id) => {
    setRequests((prev) => prev.filter((req) => req.id !== id));
  };

  return (
    <div className="min-h-screen flex flex-col bg-gradient-to-br from-blue-100 via-green-100 to-green-300">
      <Navbar />
      <main className="flex-1 flex flex-col items-center px-4 py-10">
        <section className="w-full max-w-4xl bg-white/95 rounded-3xl shadow-2xl p-10 border border-blue-100 backdrop-blur-md relative z-10">
          <h1 className="text-3xl font-extrabold text-blue-800 mb-8 flex items-center gap-3">
            <FaCalendarAlt className="text-blue-600" />
            Admin Smart Dashboard
          </h1>
          {msg && (
            <div className="mb-6 text-center bg-green-100 text-green-800 rounded py-2 font-semibold">
              {msg}
            </div>
          )}
          <div className="space-y-8">
            {requests.length === 0 ? (
              <div className="text-center text-gray-500 py-10">
                No citizen requests at the moment.
              </div>
            ) : (
              requests.map((req) => (
                <div
                  key={req.id}
                  className="bg-gradient-to-r from-blue-50 to-green-50 border border-blue-100 rounded-xl p-6 shadow flex flex-col md:flex-row gap-6 items-center"
                >
                  <img
                    src={req.image}
                    alt="Waste"
                    className="w-32 h-24 object-cover rounded-xl border-2 border-green-200 shadow"
                  />
                  <div className="flex-1 flex flex-col gap-2">
                    <div className="flex items-center gap-2 text-lg font-semibold text-green-800">
                      <FaUserCircle className="text-blue-600" />
                      {req.citizen}
                    </div>
                    <div className="flex items-center gap-2 text-sm text-blue-700">
                      <FaMapMarkerAlt className="text-green-600" />
                      {req.address}
                    </div>
                    <div className="text-sm text-gray-700">{req.description}</div>
                    <div className="text-xs text-blue-600 mt-1">
                      Status: <b>{req.status}</b>
                      {req.scheduled && (
                        <span className="ml-2 text-green-700">
                          | Scheduled: {req.scheduled}
                        </span>
                      )}
                    </div>
                  </div>
                  <div className="flex flex-col gap-3 items-center">
                    {req.status === "Pending" && (
                      <>
                        {selectedId === req.id ? (
                          <div className="flex flex-col gap-2">
                            <input
                              type="date"
                              value={schedule.date}
                              onChange={(e) =>
                                setSchedule({ ...schedule, date: e.target.value })
                              }
                              className="border border-blue-200 rounded px-2 py-1"
                              required
                            />
                            <input
                              type="time"
                              value={schedule.time}
                              onChange={(e) =>
                                setSchedule({ ...schedule, time: e.target.value })
                              }
                              className="border border-blue-200 rounded px-2 py-1"
                              required
                            />
                            <button
                              className="bg-green-700 hover:bg-green-800 text-white font-bold px-4 py-2 rounded shadow flex items-center gap-2"
                              onClick={() => handleSchedule(req.id)}
                              disabled={!schedule.date || !schedule.time}
                            >
                              <FaCheckCircle /> Confirm
                            </button>
                            <button
                              className="text-blue-700 underline text-xs"
                              onClick={() => setSelectedId(null)}
                            >
                              Cancel
                            </button>
                          </div>
                        ) : (
                          <button
                            className="bg-blue-700 hover:bg-blue-800 text-white font-bold px-4 py-2 rounded shadow flex items-center gap-2"
                            onClick={() => setSelectedId(req.id)}
                          >
                            <FaCalendarAlt /> Schedule Pickup
                          </button>
                        )}
                      </>
                    )}
                    <button
                      className="bg-red-100 hover:bg-red-200 text-red-700 font-bold px-3 py-2 rounded shadow flex items-center gap-2 text-sm"
                      onClick={() => handleDelete(req.id)}
                    >
                      <FaTrashAlt /> Remove
                    </button>
                  </div>
                </div>
              ))
            )}
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}   