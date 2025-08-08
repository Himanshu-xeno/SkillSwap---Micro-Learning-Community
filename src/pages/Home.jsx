// src/pages/Home.jsx
import { useState } from "react";
import SearchBar from "../components/SearchBar";
import TipCard from "../components/TipCard";

export default function Home({ tips, toggleLike, toggleBookmark }) {
  const [searchText, setSearchText] = useState("");
  const [filterTag, setFilterTag] = useState("");
  const [sortOrder, setSortOrder] = useState(null); // "asc" | "desc" | null

  // 🔍 Handle search input
  const handleSearch = (text) => {
    setSearchText(text.toLowerCase());
  };

  // 🏷 Handle tag selection
  const handleFilterTag = (tag) => {
    setFilterTag(tag);
  };

  // ↕ Sort by likes toggle
  const handleSort = () => {
    setSortOrder((prev) => {
      if (prev === "asc") return "desc";
      if (prev === "desc") return null; // reset to no sorting
      return "asc";
    });
  };

  // 📋 Apply search, filter, and sort to tips
  const filteredTips = tips
    .filter((tip) => {
      const matchesSearch =
        tip.title.toLowerCase().includes(searchText) ||
        tip.description.toLowerCase().includes(searchText);

      const matchesTag = filterTag ? tip.tag === filterTag : true;

      return matchesSearch && matchesTag;
    })
    .sort((a, b) => {
      if (!sortOrder) return 0;
      return sortOrder === "asc" ? a.likes - b.likes : b.likes - a.likes;
    });

  return (
    <div className="flex flex-col items-center justify-center px-4">
      {/* Search Bar */}
      <div className="w-full max-w-4xl">
        <SearchBar
          onSearch={handleSearch}
          onFilterTag={handleFilterTag}
          onSort={handleSort}
        />
      </div>

      {/* Tips Grid */}
      <div className="w-full max-w-6xl mt-8 my-4 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredTips.length > 0 ? (
          filteredTips.map((tip) => (
            <TipCard
              key={tip.id}
              tip={tip}
              toggleLike={toggleLike}
              toggleBookmark={toggleBookmark}
            />
          ))
        ) : (
          <p className="text-gray-500 text-center col-span-full">
            No tips found.
          </p>
        )}
      </div>
    </div>
  );
}
