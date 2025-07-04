import './App.css'; // optional, if you have Tailwind only, you can remove this too
import Header from './components/Header';
import TipForm from './components/TipForm';
import TipCard from './components/TipCard';

function App() {
  const tips = [
    { id: 1, text: 'Start small and build daily.' },
    { id: 2, text: 'Write clean, reusable code!' },
    { id: 3, text: 'Practice every day!' },
  ];

  return (
    <div className="flex flex-col min-h-screen bg-gray-100">
      <Header />
      <main className="flex-grow w-full max-w-7xl mx-auto px-4 py-8">
        <TipForm />
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {tips.map((tip) => (
            <TipCard key={tip.id} tip={tip} />
          ))}
        </div>
      </main>
      <footer className="bg-blue-600 text-white text-center py-4">
        SkillSwap © 2025
      </footer>
    </div>
  );
}

export default App;

