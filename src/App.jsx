import './App.css';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Navbar from './components/Navbar';
import Home from './pages/Home'; // we will create this
import PostTip from './pages/PostTip'; // create this later
import Bookmarks from './pages/Bookmarks'; // create this later
import About from './pages/About'; // create this later
import NotFound from './pages/NotFound'; // optional 404

function App() {
  return (
    <Router>
      <div className="flex flex-col min-h-screen bg-white-100">
        <Navbar />
        
        <main className="bg-white flex-grow w-screen px-0 text-red-500">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/post" element={<PostTip />} />
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
