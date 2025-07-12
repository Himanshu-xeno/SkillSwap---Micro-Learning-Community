// src/App.jsx
import './App.css';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Navbar from './components/Navbar';
import Home from './pages/Home';
import PostTip from './pages/PostTip'; // ✅ use the dedicated Post page
import Bookmarks from './pages/Bookmarks';
import About from './pages/About';
import NotFound from './pages/NotFound';

function App() {
  return (
    <Router>
      {/* ✅ Navbar is always visible */}
      <Navbar />

      <div className="flex flex-col min-h-screen">
        <main className="flex-grow pt-20 overflow-y-auto bg-white px-4 text-gray-900">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/post" element={<PostTip />} /> {/* ✅ Post route */}
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
