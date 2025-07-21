// src/pages/Bookmarks.jsx
import TipCard from '../components/TipCard';

export default function Bookmarks() {
  // TODO: Replace this with real bookmarked data later
  const bookmarkedTips = [
    {
      id: 1,
      title: "Use useState wisely",
      description: "Always initialize your state properly to avoid bugs.",
      tag: "react",
      likes: 10,
      bookmarked: true,
    },
    {
      id: 2,
      title: "Write clear commit messages",
      description: "Explain why you made the change.",
      tag: "git",
      likes: 5,
      bookmarked: true,
    },
    {
    id: 3,
    title: "Master Regex basics",
    description: "Regular expressions help you match, search, and replace text patterns efficiently.",
    tag: "regex",
    likes: 8,
    bookmarked: false,
  },
   {
    id: 4,
    title: "Dockerize your applications",
    description: "Containers make your app portable and easy to deploy anywhere.",
    tag: "docker",
    likes: 12,
    bookmarked: false,
  },
   {
    id: 5,
    title: "Use meaningful variable names",
    description: "Clear variable names improve readability and reduce bugs in your code.",
    tag: "best practices",
    likes: 7,
    bookmarked: true,
  },
  ];

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
            <TipCard key={tip.id} tip={tip} />
          ))}
        </div>
      )}
    </div>
  );
}
