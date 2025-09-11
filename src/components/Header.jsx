import React from "react";
import { Menu, X } from "lucide-react";

const Header = ({ isScrolled, activeSection, isMenuOpen, setIsMenuOpen }) => {
  return (
    <header
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-slate-900/95 backdrop-blur-md border-b border-slate-700"
          : "bg-slate-900"
      }`}
    >
      <nav className="flex justify-between items-center py-4 px-4 md:px-16">
        <img 
          src="/Logo.png" 
          alt="Logo" 
          className="h-12 w-12 object-contain"
        />

        <div className="hidden md:flex space-x-8">
          {["Home", "About", "Skills", "Projects", "Certificates", "Contact"].map((item) => (
            <a
              key={item}
              href={`#${item.toLowerCase()}`}
              className={`text-lg transition-colors hover:text-cyan-400 ${
                activeSection === item.toLowerCase() ? "text-cyan-400" : ""
              }`}
            >
              {item}
            </a>
          ))}
        </div>

        <button
          className="md:hidden text-3xl"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          {isMenuOpen ? <X /> : <Menu />}
        </button>
      </nav>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden bg-slate-900 border-t border-slate-700">
          <div className="flex flex-col space-y-4 p-4">
            {["Home", "About", "Skills", "Projects", "Certificates", "Contact"].map((item) => (
              <a
                key={item}
                href={`#${item.toLowerCase()}`}
                className="text-xl hover:text-cyan-400 transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                {item}
              </a>
            ))}
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;