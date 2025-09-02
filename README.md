# Smart Waste Management System

The Smart Waste Management System is a web application built to make waste collection more effective and transparent. It allows citizens to easily report garbage by uploading a photo and sharing their location, after which they can track the status of their request until it is completed. On the other side, municipal authorities can view these requests on a dashboard, see them on a map, assign workers for collection, and update the progress in real time. Along with handling requests, the system also provides insights through charts that show waste collection trends across different areas and includes an awareness section that shares tips on recycling and composting. This way, the platform connects people and authorities to keep cities cleaner and more sustainable.


## How It Works

Citizen logs in and submits a pickup request → adds details, image, and location.

Request is stored in MongoDB.

Admin views all requests on map/dashboard.

Admin assigns pickup → request status updates.

Citizen can track status in real-time.

Completed requests contribute to analytics & reports.

## Features

- **Citizen Portal:** Report garbage issues, request pickups, and track status.
- **Admin Dashboard:** Schedule pickups, manage requests, and notify citizens.
- **Real-time Tracking:** Monitor garbage trucks and bin status live on the map.
- **Smart Notifications:** Get timely alerts for collection schedules and community drives.
- **Government ID Admin Login:** Secure admin access using unique government ID and password.
- **Help & Support:** FAQ, contact options, and tips for users.
- **Responsive Design:** Works seamlessly on desktop and mobile.

## Getting Started

1. **Install dependencies:**
   ```bash
   npm install
   ```

2. **Run the development server:**
   ```bash
   npm run dev
   ```

3. **Open your browser:**
   - Visit [http://localhost:3000](http://localhost:3000)

## Project Structure

- `/src/app` — Main Next.js app pages (Home, Citizen, Admin, Dashboard, Help, About)
- `/src/app/components` — Shared UI components (Navbar, Footer, etc.)
- `/src/models` — Mongoose models (User, Admin)
- `/src/lib` — Utility functions (database connection, authentication, etc.)
- `/public` — Static assets (images, icons)

## Tech Stack

- [Next.js](https://nextjs.org)
- [React](https://react.dev)
- [MongoDB](https://mongodb.com) & [Mongoose](https://mongoosejs.com)
- [Tailwind CSS](https://tailwindcss.com) for styling
- [Framer Motion](https://www.framer.com/motion/) for animations

## Learn More

- [Next.js Documentation](https://nextjs.org/docs)
- [Learn Next.js](https://nextjs.org/learn)
- [MongoDB Documentation](https://docs.mongodb.com/)
- [Tailwind CSS Documentation](https://tailwindcss.com/docs)

## Deployment

Deploy easily on [Vercel](https://vercel.com/) or your preferred platform.

## License

MIT

---

**Made with for smarter, cleaner cities.**
