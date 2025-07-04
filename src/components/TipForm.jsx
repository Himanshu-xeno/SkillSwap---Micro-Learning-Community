import { useState } from 'react';

function TipForm() {
  const [tip, setTip] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(tip);
    setTip('');
  };

  return (
    <form onSubmit={handleSubmit} className="mb-8 bg-white p-6 rounded-lg shadow max-w-3xl mx-auto">
      <textarea
        className="border border-gray-300 w-full p-4 rounded mb-4 text-black focus:outline-none focus:ring-2 focus:ring-blue-500"
        rows="4"
        placeholder="Your tip..."
        value={tip}
        onChange={(e) => setTip(e.target.value)}
      />
      <button
        type="submit"
        className="bg-blue-600 text-white px-6 py-3 rounded hover:bg-blue-700 transition"
      >
        Post Tip
      </button>
    </form>
  );
}

export default TipForm;
