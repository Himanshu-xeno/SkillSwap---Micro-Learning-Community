// src/pages/PostTip.jsx
export default function PostTip() {
  return (
    <div className="flex items-center justify-center py-6 bg-gray-50">
      <div className="w-full max-w-2xl bg-white rounded-lg shadow-lg p-8">
        <h2 className="text-3xl font-bold mb-6 text-center text-gray-900">
          Post a New Tip
        </h2>

        <form className="space-y-4">
          <input
            type="text"
            placeholder="Title"
            className="w-full border border-gray-300 px-4 py-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          <textarea
            placeholder="Description"
            rows="4"
            className="w-full border border-gray-300 px-4 py-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          <select className="w-full border border-gray-300 px-4 py-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500">
            <option value="">Select Tag</option>
            <option value="react">React</option>
            <option value="git">Git</option>
            <option value="regex">Regex</option>
            <option value="docker">Docker</option>
          </select>
          <button
            type="submit"
            className=" !bg-red-500 text-white px-4 py-3 rounded-lg font-semibold hover:bg-yellow-700 transition duration-200"
          >
            Submit Tip
          </button>
        </form>
      </div>
    </div>
  );
}
