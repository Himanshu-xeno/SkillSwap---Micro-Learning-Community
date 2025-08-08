// src/pages/Bookmarks.jsx
import TipCard from '../components/TipCard';

export default function Bookmarks({ tips, toggleLike, toggleBookmark }) {
  // Filter bookmarked tips from the full tips array
  const bookmarkedTips = tips.filter((tip) => tip.bookmarked);

  return (
    <div className="max-w-6xl mx-auto pt-2 pb-4 px-4">
      <h1 className="text-4xl font-bold mb-8 text-center text-gray-900">
        Your Bookmarked Tips
      </h1>

      {bookmarkedTips.length === 0 ? (
        <p className="text-center text-gray-600">No bookmarks yet!</p>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {bookmarkedTips.map((tip) => (
            <TipCard
              key={tip.id}
              tip={tip}
              toggleLike={toggleLike}
              toggleBookmark={toggleBookmark}
            />
          ))}
        </div>
      )}
    </div>
  );
}
