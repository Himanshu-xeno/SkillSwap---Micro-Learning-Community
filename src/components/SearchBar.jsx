// src/components/SearchBar.jsx
export default function SearchBar() {
  return (
    <div className="flex flex-col md:flex-row justify-center items-center gap-10 my-5 ">
      {/* 🔍 Search Input */}
      <input
        type="text"
        placeholder="Search tips..."
        className="w-full md:w-[40%] px-3 py-2 rounded-xl border border-gray-300 shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
      />

      {/* ⬇️ Tag Filter Dropdown */}
      <select className="w-full md:w-auto px-3 py-2 rounded-lg border border-gray-300 shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500">
        <option value="">All Tags</option>
        <option value="react">React</option>
        <option value="git">Git</option>
        <option value="regex">Regex</option>
        <option value="docker">Docker</option>
      </select>

      {/* ↕️ Sort Button */}
      <button className="w-full md:w-auto px-4 py-2 !bg-red-500 !text-white font-medium rounded-lg transition duration-200">
        Sort by Likes
      </button>
    </div>
  );
}
