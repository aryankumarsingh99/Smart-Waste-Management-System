"use client";

import { FaTrashAlt, FaMapMarkedAlt, FaBell, FaMobileAlt, FaUsers } from "react-icons/fa";
import { motion } from "framer-motion";

const cardVariants = {
  hidden: { opacity: 0, y: 40, scale: 0.95 },
  visible: (i) => ({
    opacity: 1,
    y: 0,
    scale: 1,
    transition: { delay: 0.2 + i * 0.15, duration: 0.6, type: "spring" },
  }),
};

export default function Section() {
  return (
    <section className="w-full py-16 px-4 bg-gradient-to-br from-green-50 via-white to-blue-50">
      <div className="max-w-6xl mx-auto">
        <motion.h2
          className="text-3xl md:text-4xl font-extrabold text-green-900 mb-8 text-center drop-shadow"
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
        >
          How Our Smart Waste Management Works
        </motion.h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          {/* Step 1 */}
          <motion.div
            className="bg-white rounded-2xl shadow-lg p-8 flex flex-col items-center hover:scale-105 transition-transform"
            custom={0}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            variants={cardVariants}
          >
            <FaTrashAlt className="text-5xl text-green-700 mb-4 drop-shadow" />
            <h3 className="text-xl font-bold text-green-800 mb-2">Smart Bins</h3>
            <p className="text-gray-700 text-center">
              IoT-enabled bins monitor fill levels and send alerts for timely collection, reducing overflow and keeping your city clean.
            </p>
          </motion.div>
          {/* Step 2 */}
          <motion.div
            className="bg-white rounded-2xl shadow-lg p-8 flex flex-col items-center hover:scale-105 transition-transform"
            custom={1}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            variants={cardVariants}
          >
            <FaMapMarkedAlt className="text-5xl text-blue-700 mb-4 drop-shadow" />
            <h3 className="text-xl font-bold text-blue-800 mb-2">Live Tracking</h3>
            <p className="text-gray-700 text-center">
              Track garbage trucks and collection routes in real time for efficient waste pickup and optimized operations.
            </p>
          </motion.div>
          {/* Step 3 */}
          <motion.div
            className="bg-white rounded-2xl shadow-lg p-8 flex flex-col items-center hover:scale-105 transition-transform"
            custom={2}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            variants={cardVariants}
          >
            <FaBell className="text-5xl text-yellow-500 mb-4 drop-shadow" />
            <h3 className="text-xl font-bold text-yellow-700 mb-2">Instant Alerts</h3>
            <p className="text-gray-700 text-center">
              Citizens and admins receive instant notifications for collection schedules, missed pickups, and urgent updates.
            </p>
          </motion.div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 mt-12">
          {/* Step 4 */}
          <motion.div
            className="bg-white rounded-2xl shadow-lg p-8 flex flex-col items-center hover:scale-105 transition-transform"
            custom={3}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            variants={cardVariants}
          >
            <FaMobileAlt className="text-5xl text-green-600 mb-4 drop-shadow" />
            <h3 className="text-xl font-bold text-green-700 mb-2">Mobile Reporting</h3>
            <p className="text-gray-700 text-center">
              Report overflowing bins, missed pickups, or cleanliness issues instantly from your mobile device.
            </p>
          </motion.div>
          {/* Step 5 */}
          <motion.div
            className="bg-white rounded-2xl shadow-lg p-8 flex flex-col items-center hover:scale-105 transition-transform"
            custom={4}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            variants={cardVariants}
          >
            <FaUsers className="text-5xl text-blue-600 mb-4 drop-shadow" />
            <h3 className="text-xl font-bold text-blue-700 mb-2">Community Engagement</h3>
            <p className="text-gray-700 text-center">
              Engage citizens in cleanliness drives, awareness campaigns, and reward programs for a greener city.
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
}