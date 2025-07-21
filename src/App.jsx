// App.jsx
import { useState } from 'react';
import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import Navbar from './components/Navbar';
import Home from './pages/Home';
import PostTip from './pages/PostTip';
import Bookmarks from './pages/Bookmarks';
import About from './pages/About';
import NotFound from './pages/NotFound';

function App() {
  const [tips, setTips] = useState([
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
  ]);

  // Function to add a tip
  const addTip = (tip) => {
    setTips((prev) => [tip, ...prev]);
  };

  return (
    <Router>
      <Navbar />
      <div className="flex flex-col min-h-screen">
        <main className="flex-grow pt-20 overflow-y-auto bg-white px-4 text-gray-900">
          <Routes>
            <Route path="/" element={<Home tips={tips} />} />
            <Route path="/post" element={<PostTip addTip={addTip} />} />
            <Route path="/bookmarks" element={<Bookmarks />} />
            <Route path="/about" element={<About />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </main>

        <footer className="bg-blue-600 text-white text-center py-4">
          SkillSwap © 2025
        </footer>
      </div>
    </Router>
  );
}

export default App;
