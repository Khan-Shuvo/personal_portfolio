import React from "react";
import { FaExternalLinkAlt, FaGithub } from "react-icons/fa";
import movie_Bloge from '../../assets/movie_bloge.png'
import portfolio from "../../assets/portfolio.png"
import weather_app from "../../assets/weathe_app.png"


export default function Projects() {
  const projects = [
    {
      title: "Movie Bloge",
      description: "A modern platform built using React, Tailwind CSS, Where you can see any movies deatails",
      image: movie_Bloge,
      live: "http://khan-shuvo-movis-show.netlify.app",
      github: "https://github.com/Khan-Shuvo/react-assessment"
    },
    {
      title: "Portfolio Website",
      description: "A fully responsive personal portfolio built using React, Vite, and Tailwind with smooth animations.",
      image: portfolio,
      live: "https://your-live-link.com",
      github: "https://github.com/Khan-Shuvo/personal_portfolio"
    },
    {
      title: "weather_app",
      description: "Real-time weather application built using React.",
      image: weather_app,
      live: "https://khan-shuvo.github.io/weather_app/",
      github: "https://github.com/Khan-Shuvo/weather_app"
    },
  ];

  return (
    <div id="projects" className="container mx-auto px-4 py-12 my-4">
      <h1 className="text-3xl font-semibold text-center mb-10">
        My Projects
        <span className="block h-1 w-20 bg-blue-500 mx-auto mt-2 rounded-full"></span>
      </h1>

      <div className="
        grid 
        grid-cols-1 
        sm:grid-cols-2 
        lg:grid-cols-3 
        gap-8
      ">
        {projects.map((project, index) => (
          <div
            key={index}
            className="
              bg-white/10 dark:bg-black/20
              border border-gray-300 dark:border-gray-700
              rounded-xl shadow-md overflow-hidden
              backdrop-blur-sm
              transition-all duration-300
              hover:scale-[1.03] hover:shadow-xl
            "
          >
            {/* Project Image */}
            <img
              src={project.image}
              alt={project.title}
              className="h-48 w-full object-cover"
            />

            {/* Project Content */}
            <div className="p-5">
              <h2 className="text-xl font-semibold mb-2">{project.title}</h2>
              <p className="text-gray-700 dark:text-gray-300 text-sm mb-4">
                {project.description}
              </p>

              {/* Buttons */}
              <div className="flex justify-between items-center">
                <a
                  href={project.live}
                  target="_blank"
                  className="
                    flex items-center gap-2
                    text-blue-600 dark:text-blue-400 font-medium
                    hover:underline
                  "
                >
                  Live Demo <FaExternalLinkAlt />
                </a>

                <a
                  href={project.github}
                  target="_blank"
                  className="
                    flex items-center gap-2
                    text-gray-800 dark:text-gray-200
                    hover:underline
                  "
                >
                  <FaGithub /> Code
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
