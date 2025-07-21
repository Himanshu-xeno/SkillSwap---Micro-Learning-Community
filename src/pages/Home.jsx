// src/pages/Home.jsx
import SearchBar from '../components/SearchBar';
import TipCard from '../components/TipCard';

export default function Home({ tips }) {
  return (
    <div className="flex flex-col items-center justify-center px-4">
      <div className="w-full max-w-4xl">
        <SearchBar />
      </div>

      <div className="w-full max-w-6xl mt-8 my-4 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {tips.map((tip) => (
          <TipCard key={tip.id} tip={tip} />
        ))}
      </div>
    </div>
  );
}
