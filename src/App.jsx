import './App.css'; // optional, if you have Tailwind only, you can remove this too
import Header from './components/Header';
import TipForm from './components/TipForm';
import TipCard from './components/TipCard';

function App() {
  const tips = [
    { id: 1, text: 'Start small and build daily.' },
    { id: 2, text: 'Write clean, reusable code!' },
  ];

  return (
    <div className="min-h-screen bg-gray-100">
      <Header />
      <main className="max-w-xl mx-auto p-4">
        <TipForm />
        {tips.map((tip) => (
          <TipCard key={tip.id} tip={tip} />
        ))}
      </main>
    </div>
  );
}

export default App;
