import React from "react";
import { Link } from "react-router-dom";
import { Github, Linkedin, Globe } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-[#0b0b0b] text-gray-300 mt-16 py-10">
      <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-3 gap-10">

        {/* Left */}
        <div>
          <h2 className="text-lg font-semibold">Arbaz Ali</h2>
          <p className="text-sm mt-2 text-gray-400">
            © 2025 All Rights Reserved.
          </p>
        </div>

        {/* Middle Links */}
        <div className="flex flex-col space-y-2">
          <h3 className="font-semibold text-sm mb-1">Quick Links</h3>
          <Link to="/" className="hover:text-blue-400">Home</Link>
          <Link to="/history" className="hover:text-blue-400">History</Link>
          <Link to="/about" className="hover:text-blue-400">About</Link>
        </div>

        {/* Right Socials */}
        <div>
          <h3 className="font-semibold text-sm mb-2">Follow Me</h3>
          <div className="flex gap-4">
            <a href="https://github.com/Arbazali0347" target="_blank" className="hover:text-white">
              <Github size={20} />
            </a>

            <a href="https://www.linkedin.com/in/arbaz-ali-290917325" target="_blank" className="hover:text-white">
              <Linkedin size={20} />
            </a>

            <a href="https://arbazali.framer.website" target="_blank" className="hover:text-white">
              <Globe size={20} />
            </a>
          </div>
        </div>

      </div>
    </footer>
  );
};

export default Footer;
