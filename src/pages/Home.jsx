import SearchBar from '../components/SearchBar';
import TipCard from '../components/TipCard';

export default function Home() {
  const tips = [
  {
    id: 1,
    title: "Use useState wisely",
    description: "Always initialize your state properly to avoid bugs and unexpected behavior.",
    tag: "react",
    likes: 10,
    bookmarked: false,
  },
  {
    id: 2,
    title: "Write clear commit messages",
    description: "Good commit messages make collaboration easy and code history readable.",
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
  {
    id: 6,
    title: "Keep components small & reusable",
    description: "Small components are easier to maintain, test, and reuse across your project.",
    tag: "react",
    likes: 15,
    bookmarked: false,
  },
];


  return (
    <div className="flex flex-col items-center justify-center px-4">
      <div className="w-full max-w-4xl">
        <SearchBar />
      </div>

      <div className="w-full max-w-6xl mt-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {tips.map((tip) => (
          <TipCard key={tip.id} tip={tip} />
        ))}
      </div>
    </div>
  );
}
