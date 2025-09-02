import { FaCheckCircle, FaLeaf, FaRecycle, FaExclamationTriangle, FaClock, FaUserShield, FaBell, FaHandsHelping } from "react-icons/fa";

export default function Rules() {
  return (
    <section className="w-full my-10 bg-white/90 rounded-2xl shadow-lg p-8 border border-green-100">
      <h2 className="text-2xl md:text-3xl font-bold text-green-800 flex items-center gap-2 mb-6">
        <FaLeaf className="text-green-500" />
        Smart Waste Management: Citizen Guidelines
      </h2>
      <ul className="space-y-5 text-green-900 text-base">
        <li className="flex items-start gap-3">
          <FaCheckCircle className="text-green-600 mt-1" />
          <span>
            <b>Report Responsibly:</b> Only submit genuine waste pickup requests. False or duplicate reports may result in penalties.
          </span>
        </li>
        <li className="flex items-start gap-3">
          <FaRecycle className="text-blue-500 mt-1" />
          <span>
            <b>Segregate Waste:</b> Whenever possible, separate recyclables, organic, and hazardous waste before reporting for pickup.
          </span>
        </li>
        <li className="flex items-start gap-3">
          <FaCheckCircle className="text-green-600 mt-1" />
          <span>
            <b>Provide Accurate Location:</b> Use the map or enter the correct address/landmark to help teams find the spot quickly.
          </span>
        </li>
        <li className="flex items-start gap-3">
          <FaCheckCircle className="text-green-600 mt-1" />
          <span>
            <b>Upload Clear Photos:</b> Ensure your photo clearly shows the waste and surroundings for faster action.
          </span>
        </li>
        <li className="flex items-start gap-3">
          <FaExclamationTriangle className="text-yellow-500 mt-1" />
          <span>
            <b>Do Not Litter:</b> Help keep your city clean by disposing of waste in designated bins and encouraging others to do the same.
          </span>
        </li>
        <li className="flex items-start gap-3">
          <FaLeaf className="text-green-500 mt-1" />
          <span>
            <b>Community Spirit:</b> Participate in clean-up drives and spread awareness about sustainable waste management.
          </span>
        </li>
        <li className="flex items-start gap-3">
          <FaClock className="text-blue-400 mt-1" />
          <span>
            <b>Timely Reporting:</b> Report waste issues as soon as you notice them to ensure prompt action.
          </span>
        </li>
        <li className="flex items-start gap-3">
          <FaUserShield className="text-green-700 mt-1" />
          <span>
            <b>Respect Privacy:</b> Avoid including people’s faces or private property in your photos.
          </span>
        </li>
        <li className="flex items-start gap-3">
          <FaBell className="text-yellow-400 mt-1" />
          <span>
            <b>Stay Informed:</b> Enable notifications to receive updates about your requests and community events.
          </span>
        </li>
        <li className="flex items-start gap-3">
          <FaHandsHelping className="text-green-600 mt-1" />
          <span>
            <b>Help Others:</b> Encourage neighbors and friends to use the platform and keep your locality clean together.
          </span>
        </li>
      </ul>
      <div className="mt-8 text-center text-green-700 font-semibold">
        Together, we can build a cleaner, greener, and smarter city!
      </div>
    </section>
  );
}