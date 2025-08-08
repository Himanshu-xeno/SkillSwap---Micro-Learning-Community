import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

export default function PostTip({ addTip }) {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [tag, setTag] = useState('');
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();

    const newTip = {
      id: Date.now(), // unique ID
      title,
      description,
      tag,
      likes: 0,
      bookmarked: false
    };

    // Add to App.jsx state + localStorage
    addTip(newTip);

    // Reset form fields
    setTitle('');
    setDescription('');
    setTag('');

    // Redirect to homepage
    navigate('/');
  };

  return (
    <div className="flex items-center justify-center py-6 bg-gray-50 overflow-hidden">
      <div className="w-full max-w-2xl bg-white rounded-lg shadow-lg p-8">
        <h2 className="text-3xl font-bold mb-6 text-center text-gray-900">
          Post a New Tip
        </h2>

        <form className="space-y-4" onSubmit={handleSubmit}>
          <input
            type="text"
            placeholder="Title"
            className="w-full border border-gray-300 px-4 py-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            required
          />
          <textarea
            placeholder="Description"
            rows="4"
            className="w-full border border-gray-300 px-4 py-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            required
          />
          <select
            className="w-full border border-gray-300 px-4 py-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            value={tag}
            onChange={(e) => setTag(e.target.value)}
            required
          >
            <option value="">Select Tag</option>
            <option value="react">React</option>
            <option value="git">Git</option>
            <option value="regex">Regex</option>
            <option value="docker">Docker</option>
          </select>
          <button
            type="submit"
            className="!bg-red-500 text-white px-4 py-3 rounded-lg font-semibold hover:bg-yellow-700 transition duration-200"
          >
            Submit Tip
          </button>
        </form>
      </div>
    </div>
  );
}
