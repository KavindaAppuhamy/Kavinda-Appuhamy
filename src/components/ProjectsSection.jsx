import React, { useState, useRef, useEffect } from "react";
import { ExternalLink, Github, X } from "lucide-react";

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
    demo: "https://cinnamonleos.org",
    gradient: "from-green-500 to-emerald-400",
    image: "/Projects/LCCG.png"
  },
  {
    title: "Crystal Beauty Clear",
    subtitle: "E-Commerce Website",
    category: "Web Development",
    desc: "Crystal Beauty Clear is a full-featured e-commerce platform developed using the MERN stack, designed to provide a seamless shopping experience. The platform consists of two separate sites: a user-facing store where customers can browse products, add items to their cart, and place orders, and an admin dashboard that allows administrators to manage products, inventory, and orders efficiently. With its modern design, responsive UI, and robust backend, Crystal Beauty Clear showcases both frontend and backend development skills while highlighting strong problem-solving and system design capabilities.",
    tech: "MERN Stack (MongoDB, Express, React, Node.js)",
    status: "Developing",
    frontend: "https://github.com/KavindaAppuhamy/cbc-frontend",
    backend: "https://github.com/KavindaAppuhamy/cbc-backend",
    demo: "",
    gradient: "from-pink-400 to-purple-500",
    image: "/Projects/CBC.png"
  },
  {
    title: "DoMedia Job Assessment",
    subtitle: "Assessment Project for DoMedia Internship",
    category: "Web Development",
    desc: "Developed and deployed a Job Assessment project for DoMedia, demonstrating expertise in creating a fully responsive and visually engaging landing page. Built entirely with HTML, CSS, and JavaScript, the project highlights my ability to design and implement a clean, user-friendly frontend interface while ensuring seamless responsiveness across devices.",
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
    desc: "The automotive industry globally is rapidly transforming, led by the evolution of Electric Vehicle (EV) technology. Countries like Sri Lanka are actively embracing this change, driving a surge in the demand for accessible EV charging infrastructure. To aid this transition, we're creating a mobile app to easily locate and access Electric Vehicle charging stations across Sri Lanka, facilitating the widespread adoption of EVs as a sustainable mode of transportation.",
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
    desc: "During my first year of pursuing my degree, I developed a Pharmacy Store Management System, marking a significant step in my journey into software development. This project allowed me to gain hands-on experience in building real-world applications, designing an efficient system for managing pharmacy operations. I utilized C# to create a user-friendly front end in Visual Studio, while Microsoft SQL Server powered the back end, enabling seamless data management and storage. Through this project, I honed my skills in full-stack development, database integration, and practical problem-solving within a professional software environment.",
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
    desc: "During my first-year studies, I had the privilege of collaborating with a talented group of peers on an innovative project known as NPI SPACE. This endeavor served as our final project, representing the culmination of our foundational knowledge in software development. In this Project, NetBeans and mysql used to créate this system. Its front end was developed using JAVA programming language, while the back end was powered by SQL.",
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
    desc: "A restaurant management application was created with new menu-adding and delivery tracking features. To manage various CRUD activities from multiple databases, this project used a microservices architecture with three different microservices. Java and Spring Boot were used in the back-end development to build dependable RESTful APIs for the microservices. Additionally, React was used for the frontend, with the Node.js environment's Axios package for effective processing of HTTP requests.",
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

// Project Detail Modal Component
const ProjectModal = ({ project, isOpen, onClose }) => {
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }

    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isOpen]);

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center">
      {/* Backdrop with blur */}
      <div 
        className="absolute inset-0 bg-black/50 backdrop-blur-md"
        onClick={onClose}
      ></div>
      
      {/* Modal Content */}
      <div className="relative bg-slate-800 rounded-2xl max-w-4xl mx-4 max-h-[90vh] overflow-y-auto border border-slate-600/50 shadow-2xl">
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 z-10 p-2 bg-slate-700 hover:bg-slate-600 text-gray-300 hover:text-white rounded-full transition-colors duration-300"
        >
          <X size={20} />
        </button>

        {/* Modal Header with Image */}
        <div className="relative">
          <div className="aspect-[2/1] overflow-hidden rounded-t-2xl">
            {project.image ? (
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-full object-cover"
              />
            ) : (
              <div className={`w-full h-full bg-gradient-to-br ${project.gradient} flex items-center justify-center`}>
                <span className="text-2xl font-bold text-white">{project.title}</span>
              </div>
            )}
          </div>
          
          {/* Overlay badges */}
          <div className="absolute top-4 left-4 flex gap-2">
            <span className="bg-slate-900/80 backdrop-blur-sm text-cyan-400 px-3 py-1.5 rounded-full text-sm font-medium">
              {project.category}
            </span>
            {project.status && (
              <span
                className={`px-3 py-1.5 rounded-full text-sm font-semibold backdrop-blur-sm ${
                  project.status === "Deployed"
                    ? "bg-green-500/80 text-white"
                    : project.status === "Developing"
                    ? "bg-yellow-400/80 text-slate-900"
                    : project.status === "Maintaining"
                    ? "bg-blue-500/80 text-white"
                    : "bg-gray-500/80 text-white"
                }`}
              >
                {project.status}
              </span>
            )}
          </div>
        </div>

        {/* Modal Body */}
        <div className="p-8">
          {/* Title Section */}
          <div className="mb-6">
            <h2 className="text-3xl font-bold text-white mb-2">{project.title}</h2>
            <p className="text-xl text-gray-300">{project.subtitle}</p>
          </div>

          {/* Tech Stack */}
          <div className="mb-6">
            <h3 className="text-lg font-semibold text-cyan-400 mb-2">Technology Stack</h3>
            <div className="flex flex-wrap gap-2">
              {project.tech.split(',').map((tech, i) => (
                <span 
                  key={i}
                  className="px-3 py-1.5 bg-slate-700 text-cyan-400 rounded-lg text-sm font-medium"
                >
                  {tech.trim()}
                </span>
              ))}
            </div>
          </div>

          {/* Description */}
          <div className="mb-8">
            <h3 className="text-lg font-semibold text-cyan-400 mb-3">Project Description</h3>
            <p className="text-gray-300 leading-relaxed text-base">
              {project.desc}
            </p>
          </div>

          {/* Action Buttons */}
          <div className="flex flex-wrap gap-4">
            {project.frontend && (
              <a
                href={project.frontend}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 px-6 py-3 bg-slate-700 hover:bg-slate-600 text-white rounded-lg font-medium transition-all duration-300 hover:scale-105"
              >
                <Github size={20} />
                <span>Frontend Code</span>
              </a>
            )}

            {project.backend && (
              <a
                href={project.backend}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 px-6 py-3 bg-slate-700 hover:bg-slate-600 text-white rounded-lg font-medium transition-all duration-300 hover:scale-105"
              >
                <Github size={20} />
                <span>Backend Code</span>
              </a>
            )}

            {project.demo && (
              <a
                href={project.demo}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-cyan-500 to-blue-500 hover:from-cyan-400 hover:to-blue-400 text-white rounded-lg font-medium transition-all duration-300 hover:scale-105 shadow-lg"
              >
                <ExternalLink size={20} />
                <span>Live Demo</span>
              </a>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

const ProjectsSection = () => {
  const [activeCategory, setActiveCategory] = useState("All");
  const [selectedProject, setSelectedProject] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isDragging, setIsDragging] = useState(false);
  const [startX, setStartX] = useState(0);
  const [scrollLeft, setScrollLeft] = useState(0);
  const categoriesRef = useRef(null);

  const filteredProjects = activeCategory === "All" 
    ? projects 
    : projects.filter(project => project.category === activeCategory);

  const openModal = (project) => {
    setSelectedProject(project);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setSelectedProject(null);
  };

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
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {filteredProjects.map((project, index) => (
            <AnimatedItem 
              key={`${project.title}-${activeCategory}`} 
              delay={index * 100}
              className="group bg-slate-700/50 backdrop-blur-sm rounded-xl overflow-hidden hover:shadow-lg hover:shadow-cyan-400/20 transition-all duration-500 hover:-translate-y-1 border border-slate-600/30 flex flex-col h-full"
            >
              {/* Project Image */}
              <div className="aspect-[3/2] relative overflow-hidden bg-gradient-to-br from-slate-600 to-slate-700">
                {project.image ? (
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-500"
                  />
                ) : (
                  <div className={`w-full h-full bg-gradient-to-br ${project.gradient} flex items-center justify-center`}>
                    <span className="text-lg font-bold text-white">{project.title}</span>
                  </div>
                )}
                
                {/* Status Badge */}
                {project.status && (
                  <div className="absolute top-3 right-3">
                    <span
                      className={`px-2 py-1 rounded-full text-xs font-semibold backdrop-blur-sm ${
                        project.status === "Deployed"
                          ? "bg-green-500/80 text-white"
                          : project.status === "Developing"
                          ? "bg-yellow-400/80 text-slate-900"
                          : project.status === "Maintaining"
                          ? "bg-blue-500/80 text-white"
                          : "bg-gray-500/80 text-white"
                      }`}
                    >
                      {project.status}
                    </span>
                  </div>
                )}

                {/* Category Badge */}
                <div className="absolute top-3 left-3">
                  <span className="bg-slate-900/80 backdrop-blur-sm text-cyan-400 px-2 py-1 rounded-full text-xs font-medium">
                    {project.category}
                  </span>
                </div>
              </div>
              
              {/* Content Section */}
              <div className="p-4 flex flex-col flex-1">
                {/* Title and Subtitle */}
                <div className="mb-3">
                  <h3 className="text-lg font-bold text-white mb-1">
                    {project.title}
                  </h3>
                  <p className="text-gray-400 text-sm">
                    {project.subtitle}
                  </p>
                </div>

                {/* Description - Truncated with Read More */}
                <div className="mb-3 flex-1">
                  <p className="text-gray-300 text-sm line-clamp-2 mb-2">
                    {project.desc}
                  </p>
                  <button
                    onClick={() => openModal(project)}
                    className="text-cyan-400 hover:text-cyan-300 text-sm font-medium transition-colors duration-300"
                  >
                    Read more...
                  </button>
                </div>

                {/* Tech Stack */}
                <div className="text-xs text-cyan-400 font-medium mb-4">
                  {project.tech}
                </div>

                {/* Action Buttons - Always at bottom */}
                <div className="flex items-center gap-2 mt-auto">
                  {/* Frontend/Source Code Button */}
                  {project.frontend ? (
                    <a
                      href={project.frontend}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-1 px-3 py-2 bg-slate-600 hover:bg-slate-500 text-white rounded-lg text-xs font-medium transition-all duration-300 hover:scale-105"
                      title="View Frontend Code"
                    >
                      <Github size={14} />
                      <span>Frontend</span>
                    </a>
                  ) : (
                    <div className="flex items-center gap-1 px-3 py-2 bg-slate-700 text-gray-500 rounded-lg text-xs font-medium cursor-not-allowed">
                      <Github size={14} />
                      <span>Frontend</span>
                    </div>
                  )}

                  {/* Backend Button */}
                  {project.backend ? (
                    <a
                      href={project.backend}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-1 px-3 py-2 bg-slate-600 hover:bg-slate-500 text-white rounded-lg text-xs font-medium transition-all duration-300 hover:scale-105"
                      title="View Backend Code"
                    >
                      <Github size={14} />
                      <span>Backend</span>
                    </a>
                  ) : (
                    <div className="flex items-center gap-1 px-3 py-2 bg-slate-700 text-gray-500 rounded-lg text-xs font-medium cursor-not-allowed">
                      <Github size={14} />
                      <span>Backend</span>
                    </div>
                  )}

                  {/* Live Demo Button */}
                  {project.demo ? (
                    <a
                      href={project.demo}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-1 px-3 py-2 bg-gradient-to-r from-cyan-500 to-blue-500 hover:from-cyan-400 hover:to-blue-400 text-white rounded-lg text-xs font-medium transition-all duration-300 hover:scale-105 shadow-md"
                      title="View Live Demo"
                    >
                      <ExternalLink size={14} />
                      <span>Demo</span>
                    </a>
                  ) : (
                    <div className="flex items-center gap-1 px-3 py-2 bg-slate-700 text-gray-500 rounded-lg text-xs font-medium cursor-not-allowed">
                      <ExternalLink size={14} />
                      <span>Demo</span>
                    </div>
                  )}
                </div>
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

      {/* Project Detail Modal */}
      <ProjectModal 
        project={selectedProject}
        isOpen={isModalOpen}
        onClose={closeModal}
      />

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