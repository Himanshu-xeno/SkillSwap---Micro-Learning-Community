// src/components/Navbar.jsx
import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <nav className="bg-blue-600 text-white text-9xl py-4 shadow-md">
      <div className="max-w-6xl mx-auto flex justify-between items-center">
        {/* Logo or Brand */}
        <Link to="/" className="text-4xl font-bold tracking-wide -ml-18">
          SkillSwap
        </Link>

        {/* Navigation Links */}
        <div className="space-x-10 text-xl font-medium">
          <Link to="/" className="text-white hover:underline">Home</Link>
          <Link to="/post" className="text-white hover:underline">Post</Link>
          <Link to="/bookmarks" className="text-white hover:underline">Bookmarks</Link>
          <Link to="/about" className="text-white hover:underline">About</Link>
        </div>
      </div>
    </nav>
  );
}
