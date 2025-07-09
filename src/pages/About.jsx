// src/pages/About.jsx

// ✅ Corrected import path — relative, no 'src/' prefix, no spaces in file name
import aboutImage from '../assets/jai-jagannath.jpeg';

export default function About() {
  return (
    <div className="flex flex-col md:flex-row items-center justify-center min-h-[80vh] px-6 md:px-12 py-12 gap-8">
      
      {/* Left content */}
      <div className="flex-1 max-w-xl">
        <h4 className="uppercase tracking-widest text-sm mb-2 text-blue-600">
          Our Mission
        </h4>
        <h1 className="text-4xl md:text-5xl font-semibold mb-6 text-gray-900">
          Empowering Developers to Share Knowledge
        </h1>
        <p className="text-gray-700 mb-4">
          SkillSwap is an open community platform where developers can share bite-sized tips, tricks, and best practices 
          to help each other grow faster. Our goal is to make it easy to find and share practical coding insights, 
          from React to Git, Regex, and Docker.
        </p>
        <p className="text-gray-700 mb-4">
          We believe that everyone has something valuable to teach — whether it's a clever shortcut, a debugging trick,
          or a regex pattern that saves hours. By swapping skills, we grow as a community and build better software together.
        </p>
        <p className="text-gray-700 mb-6">
          This project is built with React and Tailwind CSS to demonstrate modern web development practices, 
          reusable components, and clean UI design. Join us as we keep expanding SkillSwap into a place for everyday learning.
        </p>
        <button className="px-6 py-3 bg-blue-600 text-black uppercase tracking-wider text-sm hover:bg-blue-700 transition">
          Learn More
        </button>
      </div>

      {/* Right image */}
      <div className="flex-1 max-w-lg">
        <img
          src={aboutImage}
          alt="Developers collaborating on SkillSwap"
          className="w-full rounded-lg object-cover"
        />
      </div>

    </div>
  );
}
