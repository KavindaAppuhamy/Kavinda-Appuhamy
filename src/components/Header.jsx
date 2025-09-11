import React from "react";
import { Menu, X } from "lucide-react";

const Header = ({ isScrolled, activeSection, isMenuOpen, setIsMenuOpen }) => {
  const navItems = ["Home", "About", "Skills", "Projects", "Certificates", "Contact"];

  return (
    <header
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-slate-900/95 backdrop-blur-md" // removed border-b
          : "bg-slate-900"
      }`}
    >
      <nav className="flex justify-between items-center py-4 px-4 md:px-16">
        <img
          src="/Logo.png"
          alt="Logo"
          className="h-12 w-12 object-contain"
        />

        {/* Desktop Menu */}
        <div className="hidden md:flex space-x-8">
          {navItems.map((item) => (
            <a
              key={item}
              href={`#${item.toLowerCase()}`}
              className={`text-lg transition-colors hover:text-cyan-400 ${
                activeSection === item.toLowerCase() ? "text-cyan-400" : "text-white"
              }`}
            >
              {item}
            </a>
          ))}
        </div>

        {/* Mobile Menu Toggle */}
        <button
          className="md:hidden text-3xl text-white"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          {isMenuOpen ? <X /> : <Menu />}
        </button>
      </nav>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden bg-slate-900 border-t border-slate-900/80">
          <div className="flex flex-col space-y-4 p-4">
            {navItems.map((item) => (
              <a
                key={item}
                href={`#${item.toLowerCase()}`}
                className="text-xl text-white hover:text-cyan-400 transition-colors"
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
