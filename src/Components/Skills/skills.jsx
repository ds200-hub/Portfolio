import { 
  FaHtml5, FaCss3Alt, FaJs, FaReact, 
  FaNodeJs, FaGitAlt 
} from "react-icons/fa";

import { 
  SiMongodb, SiExpress, SiTailwindcss, 
  SiPostman 
} from "react-icons/si";

import { VscVscode, VscGithub } from "react-icons/vsc";
import { DiMysql } from "react-icons/di";
import { SiCloudinary } from "react-icons/si";

function Skills() {
  return (
    <section id="Skills" className="w-full py-20 px-4 sm:px-10 lg:px-20 text-white">
      
      {/* Heading */}
      <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-center mb-16">
        My <span className="text-blue-500">Skills</span>
      </h1>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">

        {/* Frontend */}
        <div className="bg-[#1f2640] p-8 rounded-2xl shadow-xl hover:scale-105 transition duration-300">
          <h2 className="text-3xl font-semibold mb-10 text-blue-400">
            Frontend
          </h2>

          <div className="space-y-6 text-xl sm:text-2xl font-semibold">
            <p className="flex items-center gap-5">
              <FaHtml5 className="text-orange-500 text-4xl sm:text-5xl" /> HTML
            </p>
            <p className="flex items-center gap-5">
              <FaCss3Alt className="text-blue-500 text-4xl sm:text-5xl" /> CSS
            </p>
            <p className="flex items-center gap-5">
              <FaJs className="text-yellow-400 text-4xl sm:text-5xl" /> JavaScript
            </p>
            <p className="flex items-center gap-5">
              <FaReact className="text-cyan-400 text-4xl sm:text-5xl" /> React
            </p>
            <p className="flex items-center gap-5">
              <SiTailwindcss className="text-sky-400 text-4xl sm:text-5xl" /> Tailwind
            </p>
          </div>
        </div>

        {/* Backend */}
        <div className="bg-[#1f2640] p-8 rounded-2xl shadow-xl hover:scale-105 transition duration-300">
          <h2 className="text-3xl font-semibold mb-10 text-green-400">
            Backend
          </h2>

          <div className="space-y-6 text-xl sm:text-2xl font-semibold">
            <p className="flex items-center gap-5">
              <FaNodeJs className="text-green-500 text-4xl sm:text-5xl" /> Node.js
            </p>
            <p className="flex items-center gap-5">
              <SiExpress className="text-gray-300 text-4xl sm:text-5xl" /> Express.js
            </p>
            <p className="flex items-center gap-5">
              <SiMongodb className="text-green-400 text-4xl sm:text-5xl" /> MongoDB
            </p>
            <p className="flex items-center gap-5">
              <DiMysql className="text-blue-500 text-4xl sm:text-5xl" /> MySQL
            </p>
          </div>
        </div>

        {/* Tools */}
        <div className="bg-[#1f2640] p-8 rounded-2xl shadow-xl hover:scale-105 transition duration-300">
          <h2 className="text-3xl font-semibold mb-10 text-purple-400">
            Tools
          </h2>

          <div className="space-y-6 text-xl sm:text-2xl font-semibold">
            <p className="flex items-center gap-5">
              <FaGitAlt className="text-orange-600 text-4xl sm:text-5xl" /> Git
            </p>
            <p className="flex items-center gap-5">
              <VscGithub className="text-white text-4xl sm:text-5xl" /> GitHub
            </p>
            <p className="flex items-center gap-5">
              <VscVscode className="text-blue-400 text-4xl sm:text-5xl" /> VS Code
            </p>
            <p className="flex items-center gap-5">
              <SiPostman className="text-orange-400 text-4xl sm:text-5xl" /> Postman
            </p>
            <p className="flex items-center gap-5">
              <SiCloudinary className="text-indigo-400 text-4xl sm:text-5xl" /> Cloudinary
            </p>
          </div>
        </div>

      </div>
    </section>
  );
}

export default Skills;
