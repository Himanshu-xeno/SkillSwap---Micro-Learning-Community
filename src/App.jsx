import { useState, useEffect } from 'react';
import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import Navbar from './components/Navbar';
import Home from './pages/Home';
import PostTip from './pages/PostTip';
import Bookmarks from './pages/Bookmarks';
import About from './pages/About';
import NotFound from './pages/NotFound';

function App() {
  const [tips, setTips] = useState([]);

  // Load tips from localStorage or tips.json
  useEffect(() => {
    const savedTips = localStorage.getItem("tips");
    if (savedTips) {
      setTips(JSON.parse(savedTips));
    } else {
      fetch('/tips.json')
        .then((res) => res.json())
        .then((data) => {
          setTips(data);
          localStorage.setItem("tips", JSON.stringify(data));
        })
        .catch((err) => console.error("Error loading tips:", err));
    }
  }, []);

  // Save updated tips to localStorage
  const saveTips = (updatedTips) => {
    setTips(updatedTips);
    localStorage.setItem("tips", JSON.stringify(updatedTips));
  };

  // Add new tip
  const addTip = (tip) => {
    const updatedTips = [tip, ...tips];
    saveTips(updatedTips);
  };

  // Toggle like
  const toggleLike = (id) => {
    const updatedTips = tips.map(tip =>
      tip.id === id ? { ...tip, likes: tip.likes + 1 } : tip
    );
    saveTips(updatedTips);
  };

  // Toggle bookmark
  const toggleBookmark = (id) => {
    const updatedTips = tips.map(tip =>
      tip.id === id ? { ...tip, bookmarked: !tip.bookmarked } : tip
    );
    saveTips(updatedTips);
  };

  return (
    <Router>
      <Navbar />
      <div className="flex flex-col min-h-screen">
        <main className="flex-grow pt-20 overflow-y-auto bg-white px-4 text-gray-900">
          <Routes>
            <Route path="/" element={<Home tips={tips} toggleLike={toggleLike} toggleBookmark={toggleBookmark} />} />
            <Route path="/post" element={<PostTip addTip={addTip} />} />
            <Route
  path="/bookmarks"
  element={<Bookmarks tips={tips} toggleLike={toggleLike} toggleBookmark={toggleBookmark} />}
/>
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
