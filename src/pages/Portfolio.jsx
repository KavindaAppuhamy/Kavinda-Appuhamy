import React, { useState, useEffect } from "react";
import Header from "../components/Header";
import HomeSection from "../components/HomeSection";
import AboutSection from "../components/AboutSection";
import ProjectsSection from "../components/ProjectsSection";
import ContactSection from "../components/ContactSection";
import Footer from "../components/Footer";
import SkillsSection from "../components/SkillsSection";
import CertificateSection from "../components/CertificateSection";

const Portfolio = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("home");
  const [isScrolled, setIsScrolled] = useState(false);
  const [currentTypeText, setCurrentTypeText] = useState("");
  const [typeIndex, setTypeIndex] = useState(0);
  const [charIndex, setCharIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const [showScrollUp, setShowScrollUp] = useState(false); // Scroll-up button state

  const typeTexts = [
    "MERN Stack Developer",
    "Java Fullstack Developer",
    "Video Creator",
  ];

  // Smooth scroll function
  const smoothScrollTo = (elementId) => {
    const element = document.getElementById(elementId);
    if (element) {
      const offsetTop = element.offsetTop - 80; // Account for fixed header
      window.scrollTo({
        top: offsetTop,
        behavior: "smooth",
      });
      setIsMenuOpen(false); // Close mobile menu after navigation
    }
  };

  // Typing effect
  useEffect(() => {
    const typeSpeed = isDeleting ? 50 : 100;
    const currentText = typeTexts[typeIndex];

    const timer = setTimeout(() => {
      if (!isDeleting && charIndex < currentText.length) {
        setCurrentTypeText(currentText.substring(0, charIndex + 1));
        setCharIndex(charIndex + 1);
      } else if (isDeleting && charIndex > 0) {
        setCurrentTypeText(currentText.substring(0, charIndex - 1));
        setCharIndex(charIndex - 1);
      } else if (!isDeleting && charIndex === currentText.length) {
        setTimeout(() => setIsDeleting(true), 1000);
      } else if (isDeleting && charIndex === 0) {
        setIsDeleting(false);
        setTypeIndex((typeIndex + 1) % typeTexts.length);
      }
    }, typeSpeed);

    return () => clearTimeout(timer);
  }, [charIndex, isDeleting, typeIndex]);

  // Scroll effect with throttling
  useEffect(() => {
    let ticking = false;

    const handleScroll = () => {
      if (!ticking) {
        requestAnimationFrame(() => {
          setIsScrolled(window.scrollY > 100);

          const sections = document.querySelectorAll("section[id]");
          let current = "home";

          sections.forEach((section) => {
            const rect = section.getBoundingClientRect();
            if (rect.top <= 150 && rect.bottom >= 150) {
              current = section.id;
            }
          });

          setActiveSection(current);

          // Show scroll-up button after About Section
          const aboutSection = document.getElementById("about");
          if (aboutSection) {
            setShowScrollUp(window.scrollY > aboutSection.offsetTop);
          }

          ticking = false;
        });
        ticking = true;
      }
    };

    document.documentElement.style.scrollBehavior = "smooth";
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => {
      window.removeEventListener("scroll", handleScroll);
      document.documentElement.style.scrollBehavior = "auto";
    };
  }, []);

  return (
    <div className="bg-slate-900 text-white overflow-x-hidden relative">
      <Header
        isMenuOpen={isMenuOpen}
        setIsMenuOpen={setIsMenuOpen}
        activeSection={activeSection}
        isScrolled={isScrolled}
        smoothScrollTo={smoothScrollTo}
      />
      <HomeSection
        currentTypeText={currentTypeText}
        smoothScrollTo={smoothScrollTo}
      />
      <AboutSection />
      <SkillsSection />
      <ProjectsSection />
      <CertificateSection />
      <ContactSection />
      <Footer />

      {/* Scroll Up Button */}
      <button
        onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
        className={`fixed bottom-6 right-6 p-4 w-12 h-12 flex items-center justify-center rounded-full bg-cyan-400 shadow-lg text-white text-xl transition-all duration-500 ${
          showScrollUp
            ? "opacity-100 translate-y-0"
            : "opacity-0 translate-y-10 pointer-events-none"
        }`}
      >
        ↑
      </button>
    </div>
  );
};

export default Portfolio;
