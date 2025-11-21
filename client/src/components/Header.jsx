import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Menu, X } from "lucide-react";

const Header = () => {
  const [open, setOpen] = useState(false);

  return (
    <header
      className="
        w-full 
        sticky top-0 z-50
        bg-gradient-to-r from-[#0f0f11] via-[#111113] to-[#0c0c0e]
        backdrop-blur-md
        border-b border-white/10
        shadow-[0_2px_15px_rgba(0,0,0,0.45)]
        text-white
      "
    >
      <div className="max-w-7xl mx-auto flex justify-between items-center px-6 py-4">

        {/* Logo */}
        <h1 className="text-xl font-bold tracking-wide hover:text-blue-400 duration-300">
          Arbaz <span className="text-blue-500">Short</span>
        </h1>

        {/* Desktop Menu */}
        <nav className="hidden md:flex gap-8 text-sm">
          <Link to="/" className="hover:text-blue-400 duration-300">Home</Link>
          <Link to="/history" className="hover:text-blue-400 duration-300">History</Link>
          <Link to="/about" className="hover:text-blue-400 duration-300">About</Link>
        </nav>

        {/* Mobile Button */}
        <button 
          className="md:hidden text-white"
          onClick={() => setOpen(!open)}
        >
          {open ? <X size={26} /> : <Menu size={26} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {open && (
        <nav
          className="
            md:hidden 
            bg-[#111113] 
            border-t border-white/10
            px-6 pb-4 text-sm space-y-2
            animate-slideDown
          "
        >
          <Link 
            to="/" 
            onClick={() => setOpen(false)} 
            className="block py-2 hover:text-blue-400 duration-300"
          >
            Home
          </Link>

          <Link 
            to="/history" 
            onClick={() => setOpen(false)} 
            className="block py-2 hover:text-blue-400 duration-300"
          >
            History
          </Link>

          <Link 
            to="/about"
            onClick={() => setOpen(false)} 
            className="block py-2 hover:text-blue-400 duration-300"
          >
            About
          </Link>
        </nav>
      )}
    </header>
  );
};

export default Header;
