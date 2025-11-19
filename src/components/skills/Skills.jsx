import React from 'react'
import { FaCss3, FaGithub, FaHtml5, FaReact } from 'react-icons/fa'
import { IoLogoJavascript } from 'react-icons/io'
import { RiTailwindCssFill } from 'react-icons/ri'
import { SiVite } from 'react-icons/si';

export default function Skills() {

  const skills = [
    { name: "HTML5", logo: <FaHtml5 className="text-orange-600" /> },
    { name: "CSS3", logo: <FaCss3 className="text-blue-600" /> },
    { name: "JavaScript", logo: <IoLogoJavascript className="text-yellow-400" /> },
    { name: "Tailwind", logo: <RiTailwindCssFill className="text-cyan-400" /> },
    { name: "React", logo: <FaReact className="text-blue-400" /> },
    { name: "Git & GitHub", logo: <FaGithub className='text-gray-800' /> },
    { name: "Vite", logo: <SiVite className="text-purple-500" /> },
  ];

  return (
    <div id='skills' className="container mx-auto text-center px-4 py-10 my-3">
      <h1 className="text-3xl  font-semibold text-center mb-8 relative inline-block mx-auto">
        My Skills
        <span className="block h-1 w-16 bg-blue-500 mx-auto mt-2 rounded-full"></span>
      </h1>


      <div className="
        grid 
        grid-cols-2 
        sm:grid-cols-3 
        md:grid-cols-4 
        lg:grid-cols-5 
        gap-6 sm:gap-8
        place-items-center
      ">
        {skills.map((skill, index) => (
          <div
            key={index}
            className="
              flex flex-col justify-center items-center 
              bg-white/10 backdrop-blur-sm
              dark:bg-black/20
              border border-gray-200 dark:border-gray-700
              p-6 rounded-xl shadow-sm
              transition-all duration-300
              hover:scale-105 hover:shadow-lg
            "
          >
            <div className="text-5xl sm:text-6xl mb-3">
              {skill.logo}
            </div>

            <p className="text-lg font-medium">
              {skill.name}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}
