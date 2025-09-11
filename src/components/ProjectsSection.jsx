import React, { useState, useRef, useEffect } from "react";
import { ExternalLink, Github } from "lucide-react";

const projects = [
  {
    title: "LCCG Website",
    subtitle: "Leo Club of Cinnamon Gardens Colombo",
    category: "Web Development",
    desc: "Developed a dynamic and responsive website for the Leo Club of Cinnamon Gardens Colombo (LCCG) using the MERN stack. The platform showcases the club's activities, events, and community services while enabling members and visitors to engage with the club more effectively.",
    tech: "MERN Stack (MongoDB, Express.js, React.js, Node.js)",
    status: "Deployed",
    frontend: "https://github.com/KavindaAppuhamy/Project-LCCG-Frontend",
    backend: "https://github.com/KavindaAppuhamy/Project-LCCG-Backend",
    demo: "https://cinnamonleos.org", // Added Demo link
    gradient: "from-green-500 to-emerald-400",
    image: "/Projects/LCCG.png"
  },
  {
    title: "Crystal Beauty Clear",
    subtitle: "E-Commerce Website",
    category: "Web Development",
    desc: "Crystal Beauty Clear is an e-commerce platform built with the MERN stack...",
    tech: "MERN Stack (MongoDB, Express, React, Node.js)",
    status: "Developing",
    frontend: "https://github.com/KavindaAppuhamy/cbc-frontend",
    backend: "https://github.com/KavindaAppuhamy/cbc-backend",
    demo: "https://cbc-website.com",
    gradient: "from-pink-400 to-purple-500",
    image: "/Projects/CBC.png"
  },
  {
    title: "DoMedia Job Assessment",
    subtitle: "Assessment Project for DoMedia Internship",
    category: "Web Development",
    desc: "Developed and deployed a job assessment project for DoMedia, showcasing strong skills in building a Landing Page Website, responsive frontend UI.",
    tech: "Frontend: HTML, CSS, JavaScript",
    status: "Deployed",
    frontend: "https://github.com/KavindaAppuhamy/Domedia-Assessment",
    demo: "https://kavindaappuhamy.github.io/Domedia-Assessment/",
    gradient: "from-indigo-500 to-purple-500",
    image: "/Projects/DoMedia.png"
  },
  {
    title: "Pic N Charge",
    subtitle: "Electric Vehicle Charging Stations Finder App for Sri Lanka",
    category: "Mobile App",
    desc: "The automotive industry globally is rapidly transforming...",
    tech: "Kotlin, Firebase",
    status: "Done",
    frontend: "https://github.com/KavindaAppuhamy/PicNCharge",
    demo: "",
    gradient: "from-cyan-400 to-blue-500",
    image: "/Projects/PicnCharge.png"
  },
  {
    title: "Pharmacy System",
    subtitle: "Pharmacy Store Management System",
    category: "Desktop App",
    desc: "In this project, I leveraged Visual Studio and Microsoft SQL Server to create a comprehensive and efficient Pharmacy Store Management System.",
    tech: ".NET Development",
    status: "Done",
    frontend: "https://github.com/KavindaAppuhamy/Hospital_Medicine_Management_System",
    demo: "",
    gradient: "from-blue-500 to-cyan-500",
    image: "/Projects/Atom.png"
  },
  {
    title: "NPI SPACE",
    subtitle: "Engineering Change Management System",
    category: "Enterprise",
    desc: "This endeavor served as our final project...",
    tech: "Enterprise App Development",
    status: "Done",
    frontend: "https://github.com/KavindaAppuhamy/NPISpace_ECN_Change_Management_System",
    demo: "",
    gradient: "from-blue-500 to-cyan-500",
    image: "/Projects/NPI_SPACE.png"
  },
  {
    title: "Restaurant API",
    subtitle: "Restaurant Management Web App",
    category: "Web Development",
    desc: "A restaurant management application with microservices architecture...",
    tech: "Microservices Based (SpringBoot, Express, React, Node.js)",
    status: "Done",
    frontend: "https://github.com/KavindaAppuhamy/REST_API_Microservices/tree/master/frontend-react",
    backend: "https://github.com/KavindaAppuhamy/REST_API_Microservices/tree/master/backend-microservices-rest-api",
    demo: "",
    gradient: "from-blue-500 to-cyan-500",
    image: "/Projects/REST-API.png"
  },
];

const categories = ["All", "Enterprise", "Web Development", "Desktop App", "Mobile App"];

// Custom hook for intersection observer
const useIntersectionObserver = (options = {}) => {
  const [isVisible, setIsVisible] = useState(false);
  const [hasAnimated, setHasAnimated] = useState(false);
  const ref = useRef();

  useEffect(() => {
    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting && !hasAnimated) {
        setIsVisible(true);
        setHasAnimated(true);
      }
    }, {
      threshold: 0.1,
      rootMargin: '-50px 0px',
      ...options
    });

    const currentRef = ref.current;
    if (currentRef) {
      observer.observe(currentRef);
    }

    return () => {
      if (currentRef) {
        observer.unobserve(currentRef);
      }
    };
  }, [hasAnimated, options]);

  return [ref, isVisible];
};

// Animated wrapper component for individual items
const AnimatedItem = ({ children, delay = 0, className = "" }) => {
  const [ref, isVisible] = useIntersectionObserver();

  return (
    <div
      ref={ref}
      className={`${className} transition-all duration-700 ease-out ${
        isVisible 
          ? 'opacity-100 translate-y-0' 
          : 'opacity-0 translate-y-8'
      }`}
      style={{
        transitionDelay: isVisible ? `${delay}ms` : '0ms'
      }}
    >
      {children}
    </div>
  );
};

const ProjectsSection = () => {
  const [activeCategory, setActiveCategory] = useState("All");
  const [isDragging, setIsDragging] = useState(false);
  const [startX, setStartX] = useState(0);
  const [scrollLeft, setScrollLeft] = useState(0);
  const categoriesRef = useRef(null);

  const filteredProjects = activeCategory === "All" 
    ? projects 
    : projects.filter(project => project.category === activeCategory);

  // Handle touch events for horizontal swipe
  const handleTouchStart = (e) => {
    setIsDragging(true);
    setStartX(e.touches[0].pageX - categoriesRef.current.offsetLeft);
    setScrollLeft(categoriesRef.current.scrollLeft);
  };

  const handleTouchMove = (e) => {
    if (!isDragging) return;
    e.preventDefault();
    const x = e.touches[0].pageX - categoriesRef.current.offsetLeft;
    const walk = (x - startX) * 2;
    categoriesRef.current.scrollLeft = scrollLeft - walk;
  };

  const handleTouchEnd = () => {
    setIsDragging(false);
  };

  // Handle mouse events for horizontal swipe (for testing on desktop)
  const handleMouseDown = (e) => {
    setIsDragging(true);
    setStartX(e.pageX - categoriesRef.current.offsetLeft);
    setScrollLeft(categoriesRef.current.scrollLeft);
  };

  const handleMouseMove = (e) => {
    if (!isDragging) return;
    const x = e.pageX - categoriesRef.current.offsetLeft;
    const walk = (x - startX) * 2;
    categoriesRef.current.scrollLeft = scrollLeft - walk;
  };

  const handleMouseUp = () => {
    setIsDragging(false);
  };

  const handleMouseLeave = () => {
    setIsDragging(false);
  };

  return (
    <section id="projects" className="min-h-screen bg-slate-800 px-4 md:px-16 py-24">
      <div className="container mx-auto max-w-7xl">
        {/* Header */}
        <AnimatedItem className="text-center mb-8 sm:mb-10 relative">
          <div className="relative mb-12 sm:mb-15">
            <h1 className="text-7xl sm:text-8xl md:text-9xl font-bold text-slate-700 opacity-30 select-none">
              GALLERY
            </h1>
            <h2 className="absolute inset-0 flex items-center justify-center text-xl sm:text-2xl md:text-4xl font-bold">
              MY <span className="text-cyan-400 ml-3">PORTFOLIO</span>
            </h2>
          </div>
        </AnimatedItem>
          
        {/* Category Filters - Horizontal Scrollable */}
        <AnimatedItem delay={200} className="mb-4 sm:mb-6">
          <div
            ref={categoriesRef}
            className="flex gap-2 xs:gap-3 sm:gap-4 pb-2 overflow-x-auto hide-scrollbar touch-pan-x
                      md:justify-center md:overflow-x-visible"
            style={{
              scrollbarWidth: "none",
              msOverflowStyle: "none",
              WebkitOverflowScrolling: "touch",
              cursor: isDragging ? "grabbing" : "grab",
            }}
            onTouchStart={handleTouchStart}
            onTouchMove={handleTouchMove}
            onTouchEnd={handleTouchEnd}
            onMouseDown={handleMouseDown}
            onMouseMove={handleMouseMove}
            onMouseUp={handleMouseUp}
            onMouseLeave={handleMouseLeave}
          >
            <div className="flex gap-2 xs:gap-3 sm:gap-4 min-w-max px-1 md:min-w-0">
              {categories.map((category, index) => (
                <button
                  key={category}
                  onClick={() => setActiveCategory(category)}
                  className={`flex-shrink-0 px-3 xs:px-4 sm:px-5 md:px-6 py-2 xs:py-2.5 sm:py-3 rounded-full font-semibold transition-all duration-300 border-2 text-xs xs:text-sm sm:text-base whitespace-nowrap transform hover:scale-105 ${
                    activeCategory === category
                      ? "bg-cyan-400 text-slate-900 border-cyan-400 shadow-lg"
                      : "bg-transparent text-gray-300 border-slate-600 hover:border-cyan-400 hover:text-cyan-400"
                  }`}
                  style={{
                    animationDelay: `${index * 100}ms`
                  }}
                >
                  {category}
                </button>
              ))}
            </div>
          </div>
        </AnimatedItem>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-2 gap-4">
          {filteredProjects.map((project, index) => (
            <AnimatedItem 
              key={`${project.title}-${activeCategory}`} 
              delay={index * 100}
              className="group relative overflow-hidden rounded-xl bg-slate-700 hover:shadow-lg hover:shadow-cyan-400/20 transition-all duration-500 hover:-translate-y-1"
            >
              {/* Project Image/Placeholder */}
              <div className="aspect-[3/2] relative overflow-hidden">
                {project.image ? (
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-500"
                  />
                ) : (
                  <div className={`w-full h-full bg-gradient-to-br ${project.gradient} flex items-center justify-center`}>
                    <span className="text-lg font-bold text-white">{project.title}</span>
                  </div>
                )}
                <div className="absolute inset-0 bg-black/30"></div>
              </div>
              
              {/* Content Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-slate-900/80 to-transparent 
                opacity-100 sm:opacity-0 sm:group-hover:opacity-100 
                transition-all duration-500 flex flex-col justify-end p-4">
                <div className="transform translate-y-3 group-hover:translate-y-0 transition-transform duration-500">
                  <div className="text-xs text-cyan-400 font-semibold mb-1">
                    {project.tech}
                  </div>
                  <h3 className="text-sm font-bold text-white mb-2">
                    {project.subtitle}
                  </h3>
                  <p className="text-gray-300 text-xs mb-3 line-clamp-2">
                    {project.desc}
                  </p>

                  {/* Action Buttons */}
                  <div className="flex flex-wrap items-center gap-2">
                    {project.frontend && (
                      <a
                        href={project.frontend}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-1 px-3 py-1.5 bg-white text-slate-900 rounded-full text-xs font-semibold hover:bg-cyan-400 transition-colors duration-300 transform hover:scale-105"
                      >
                        <Github size={12} />
                        <span>Frontend</span>
                      </a>
                    )}
                    {project.backend && (
                      <a
                        href={project.backend}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-1 px-3 py-1.5 bg-white text-slate-900 rounded-full text-xs font-semibold hover:bg-cyan-400 transition-colors duration-300 transform hover:scale-105"
                      >
                        <Github size={12} />
                        <span>Backend</span>
                      </a>
                    )}

                    {/* Status Button */}
                    {project.status && (
                      <span
                        className={`px-3 py-1.5 rounded-full text-xs font-semibold ${
                          project.status === "Deployed"
                            ? "bg-green-500 text-white"
                            : project.status === "Developing"
                            ? "bg-yellow-400 text-slate-900"
                            : project.status === "Maintaining"
                            ? "bg-blue-500 text-white"
                            : "bg-gray-500 text-white"
                        }`}
                      >
                        {project.status}
                      </span>
                    )}
                    {/* Live Demo Button */}
                    {project.demo && (
                      <a
                        href={project.demo}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-1 px-3 py-1.5 bg-cyan-400 text-slate-900 rounded-full text-xs font-semibold hover:bg-cyan-500 transition-colors duration-300 transform hover:scale-105"
                      >
                        <ExternalLink size={12} />
                        <span>Demo</span>
                      </a>
                    )}
                  </div>
                </div>
              </div>

              {/* Corner Badge */}
              <div className="absolute top-3 left-3 bg-slate-900/80 backdrop-blur-sm text-cyan-400 px-2 py-1 rounded-full text-xs font-medium">
                {project.category}
              </div>
            </AnimatedItem>
          ))}
        </div>

        {/* Bottom CTA */}
        <AnimatedItem delay={400} className="text-center mt-16">
          <p className="text-gray-400 text-lg mb-6">
            Want to see more of my work?
          </p>
          <a
            href="https://github.com/KavindaAppuhamy"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-cyan-500 to-blue-500 text-white rounded-full font-semibold hover:shadow-lg hover:shadow-cyan-400/50 transition-all duration-300 hover:-translate-y-1 transform hover:scale-105"
          >
            <Github size={20} />
            <span>Visit My GitHub</span>
            <ExternalLink size={18} />
          </a>
        </AnimatedItem>
      </div>

      {/* Custom CSS for hiding scrollbar */}
      <style jsx="true">{`
        .hide-scrollbar {
          -ms-overflow-style: none;  /* IE and Edge */
          scrollbar-width: none;  /* Firefox */
        }
        .hide-scrollbar::-webkit-scrollbar {
          display: none;  /* Chrome, Safari and Opera */
        }
      `}</style>
    </section>
  );
};

export default ProjectsSection;