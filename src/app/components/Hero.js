// "use client";

// import Link from "next/link";

// export default function HomePage() {
//   return (
//     <main
//       className="fixed inset-0 flex flex-col items-center justify-center relative min-h-screen min-w-full"
//       style={{ width: "100vw", height: "100vh" }}
//     >
//       {/* Blurred background image */}
//       <div
//         className="absolute inset-0 w-full h-full -z-10"
//         style={{
//           backgroundImage: "url('/img1.avif')",
//           backgroundSize: "cover",
//           backgroundPosition: "center",
//           backgroundRepeat: "no-repeat",
//           filter: "blur(3px)",
//           opacity: 0.95,
//         }}
//       />
//       <div className="rounded-2xl shadow-2xl p-10 flex flex-col items-center max-w-lg w-full bg-white/80 backdrop-blur-md">
//         <h1 className="text-3xl font-bold text-green-800 mb-4 text-center">
//           Smart Waste Management System
//         </h1>
//         <p className="mb-8 text-gray-700 text-center">
//           Welcome! Please select your portal to continue.
//         </p>
//         <div className="flex gap-8 mb-8">
//           <Link
//             href="/citizen"
//             className="bg-green-600 hover:bg-green-700 text-white font-semibold px-8 py-4 rounded-lg shadow transition text-lg"
//           >
//             Citizen
//           </Link>
//           <Link
//             href="/admin"
//             className="bg-blue-600 hover:bg-blue-700 text-white font-semibold px-8 py-4 rounded-lg shadow transition text-lg"
//           >
//             Admin
//           </Link>
//         </div>
//         {/* Extra Content */}
//         <div className="w-full mt-4">
//           <h2 className="text-xl font-semibold text-green-700 mb-2 text-center">
//             Why Smart Waste Management?
//           </h2>
//           <ul className="list-disc pl-6 text-gray-700 text-sm mb-4">
//             <li>Efficient collection and disposal of waste in your city.</li>
//             <li>Track garbage trucks and collection schedules in real time.</li>
//             <li>Report overflowing bins or missed pickups instantly.</li>
//             <li>Support a cleaner, greener, and healthier environment.</li>
//           </ul>
//           <div className="bg-green-50 rounded-lg p-4 text-green-900 text-center text-sm shadow mb-2">
//             <b>Did you know?</b> Smart waste systems can reduce operational costs by
//             up to 30% and help keep your city clean!
//           </div>
//           <div className="text-center mt-4">
//             <span className="text-xs text-gray-500">
//               &copy; {new Date().getFullYear()} Smart Waste Management System. All
//               rights reserved.
//             </span>
//           </div>
//         </div>
//       </div>
//     </main>
//   );
// }
