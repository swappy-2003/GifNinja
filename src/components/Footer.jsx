import React from "react";
import { FaGithub, FaHeart } from "react-icons/fa6";

const Footer = () => {
  const githubUrl = "https://github.com/swappy-2003/GifNinja"; // Replace with your GitHub URL

  return (
    <footer className=" flex justify-center  items-center py-3 bg-gray-800 text-gray-100 rounded-full mt-8 ">
      <p className="flex items-center faded-text text-sm sm:text-lg tracking-tight">
        Made with <FaHeart className="mx-2 text-red-500" /> by Swapnil
      </p>

      <a
        href={githubUrl}
        target="_blank"
        rel="noopener noreferrer"
        className="flex items-center justify-center gap-2 ml-4 px-3 py-2 text-sm font-medium text-center text-white bg-gray-700 rounded-lg hover:gradient focus:ring-4 focus:outline-none focus:ring-blue-300 transition-all delay-300"
      >
        Source Code <FaGithub />
      </a>
    </footer>
  );
};

export default Footer;