import React from "react";
import { FaGithub, FaFacebook, FaLinkedin, FaReact } from "react-icons/fa";
import { MdEmail } from "react-icons/md";

export default function Footer() {
  return (
    <footer className="bg-gray-100 dark:bg-gray-900 py-10 mt-16">
      <div className="container mx-auto px-6">

        {/* Top Section */}
        <div className="flex flex-col md:flex-row justify-between items-center gap-6 mb-6">

          {/* Brand / Logo */}
          <div className="flex items-center gap-2">
            <FaReact className="text-blue-400 text-3xl animate-spin-slow" />
            <h1 className="text-xl font-semibold text-gray-800 dark:text-white">
              Shuvo's Portfolio
            </h1>
          </div>

          {/* Navigation Links */}
          <div className="flex gap-6 text-gray-700 dark:text-gray-300 text-sm font-medium">
            <a href="/#home" className="hover:text-blue-500">Home</a>
            <a href="/#about" className="hover:text-blue-500">About</a>
            <a href="/#skills" className="hover:text-blue-500">Skills</a>
            <a href="/#projects" className="hover:text-blue-500">Projects</a>
          </div>

          {/* Social Icons */}
          <div className="flex items-center gap-4 text-xl">
            <a
              href="https://github.com/Khan-Shuvo"
              target="_blank"
              className="text-gray-700 dark:text-gray-300 hover:text-blue-500"
            >
              <FaGithub />
            </a>

            <a
              href="https://facebook.com/"
              target="_blank"
              className="text-gray-700 dark:text-gray-300 hover:text-blue-500"
            >
              <FaFacebook />
            </a>

            <a
              href="https://linkedin.com/"
              target="_blank"
              className="text-gray-700 dark:text-gray-300 hover:text-blue-500"
            >
              <FaLinkedin />
            </a>

            <a
              href="mailto:sk9560720@gmail.com"
              className="text-gray-700 dark:text-gray-300 hover:text-blue-500"
            >
              <MdEmail />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
