// src/components/Navbar.jsx
import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <nav className="fixed top-0 left-0 w-full z-50 bg-blue-600 text-white py-4 shadow-md">
      <div className="max-w-6xl mx-auto flex justify-between items-center px-4">
        {/* Logo or Brand */}
        <Link to="/" className="text-4xl font-bold tracking-wide">
          SkillSwap
        </Link>

        {/* Navigation Links */}
        <div className="space-x-10 text-xl font-medium">
          <Link to="/" className="hover:underline">Home</Link>
          <Link to="/post" className="hover:underline">Post</Link>
          <Link to="/bookmarks" className="hover:underline">Bookmarks</Link>
          <Link to="/about" className="hover:underline">About</Link>
        </div>
      </div>
    </nav>
  );
}
