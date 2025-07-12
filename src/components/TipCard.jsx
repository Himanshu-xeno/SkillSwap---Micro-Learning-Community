// src/components/TipCard.jsx
import { useState } from "react";

export default function TipCard({ tip }) {
  const [likes, setLikes] = useState(tip.likes);
  const [bookmarked, setBookmarked] = useState(tip.bookmarked || false);

  return (
    <div className="w-full border bg-grey-400 border-gray-200 rounded-xl shadow-sm p-4 hover:shadow-md transition">
      {/* Title */}
      <h2 className="font-bold text-lg mb-2">{tip.title}</h2>

      {/* Description */}
      <p className="text-gray-700 mb-2">{tip.description}</p>

      {/* Tag */}
      <span className="inline-block bg-blue-100 text-blue-800 text-xs px-2 py-1 rounded-full mb-4">
        #{tip.tag}
      </span>

      {/* Like & Bookmark Row */}
      <div className="flex flex-col md:flex-row justify-center items-center gap-10 ">
        <button
          onClick={() => setLikes(likes + 1)}
          className="flex items-center gap-1 text-sm !bg-amber-50 text-black hover:text-grey-200 transition"
        >
          ❤️ {likes}
        </button>

        <button
          onClick={() => setBookmarked(!bookmarked)}
          className={`text-xl !bg-amber-50 ${bookmarked ?  'text-yellow-400' : 'text-gray-400'} hover:text-yellow-500 transition`}
        >
          🔖
        </button>
      </div>
    </div>
  );
}
