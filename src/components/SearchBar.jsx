// src/components/SearchBar.jsx
import { useState } from "react";

export default function SearchBar({ onSearch, onFilterTag, onSort }) {
  const [searchText, setSearchText] = useState("");
  const [selectedTag, setSelectedTag] = useState("");

  const handleSearchClick = () => {
    if (onSearch) onSearch(searchText);
  };

  const handleTagChange = (e) => {
    setSelectedTag(e.target.value);
    if (onFilterTag) onFilterTag(e.target.value);
  };

  return (
    <div className="flex flex-col md:flex-row justify-center items-center gap-4 my-5">
      {/* 🔍 Search Input */}
      <input
        type="text"
        placeholder="Search tips..."
        value={searchText}
        onChange={(e) => setSearchText(e.target.value)}
        className="w-full md:w-[40%] px-3 py-2 rounded-xl border border-gray-300 shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
      />

      {/* Search Button */}
      <button
        onClick={handleSearchClick}
        className="w-full md:w-auto px-4 py-2 !bg-green-500 text-white font-medium rounded-lg hover:bg-green-600 transition duration-200"
      >
        Search
      </button>

      {/* ⬇️ Tag Filter Dropdown */}
      <select
        value={selectedTag}
        onChange={handleTagChange}
        className="w-full md:w-auto px-3 py-2 rounded-lg border border-gray-300 shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
      >
        <option value="">All Tags</option>
        <option value="react">React</option>
        <option value="git">Git</option>
        <option value="regex">Regex</option>
        <option value="docker">Docker</option>
        <option value="javascript">JavaScript</option>
        <option value="css">CSS</option>
        <option value="html">HTML</option>
        <option value="nodejs">Node.js</option>
        <option value="python">Python</option>
        <option value="typescript">TypeScript</option>
        <option value="nextjs">Next.js</option>
        <option value="best-practices">Best Practices</option>
      </select>

      {/* ↕️ Sort Button */}
      <button
        onClick={onSort}
        className="w-full md:w-auto px-4 py-2 !bg-red-500 text-white font-medium rounded-lg hover:bg-red-600 transition duration-200"
      >
        Sort by Likes
      </button>
    </div>
  );
}
