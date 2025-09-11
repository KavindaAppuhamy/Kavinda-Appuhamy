import React, { useState, useRef, useEffect } from "react";

const SkillsSection = () => {
  const [activeFilter, setActiveFilter] = useState("All");
  const [showAll, setShowAll] = useState(false);
  const scrollContainerRef = useRef(null);
  const sectionRef = useRef(null);
  const [isVisible, setIsVisible] = useState({});

  // Intersection Observer for scroll animations
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsVisible(prev => ({
              ...prev,
              [entry.target.dataset.animate]: true
            }));
          }
        });
      },
      {
        threshold: 0.1,
        rootMargin: "0px 0px -50px 0px"
      }
    );

    const animatedElements = sectionRef.current?.querySelectorAll('[data-animate]');
    animatedElements?.forEach(el => observer.observe(el));

    return () => observer.disconnect();
  }, []);

  const skills = [
     // Languages
    {
      name: "React",
      level: "85%",
      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg",
      color: "from-blue-400 to-blue-600",
      category: "Frameworks"
    },
    {
      name: "MongoDB",
      level: "70%",
      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg",
      color: "from-green-400 to-green-600",
      category: "Databases"
    },
    {
      name: "Express.js",
      level: "80%",
      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/express/express-original.svg",
      color: "from-gray-600 to-gray-800",
      category: "Frameworks"
    },
    {
      name: "Node.js",
      level: "80%",
      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg",
      color: "from-green-400 to-green-600",
      category: "Frameworks"
    },
    {
      name: "Tailwind CSS",
      level: "85%",
      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tailwindcss/tailwindcss-plain.svg",
      color: "from-cyan-400 to-blue-500",
      category: "Frameworks"
    },
    {
      name: "JavaScript",
      level: "90%",
      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg",
      color: "from-yellow-400 to-yellow-600",
      category: "Languages"
    },
    {
      name: "SpringBoot",
      level: "75%",
      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/spring/spring-original.svg",
      color: "from-green-500 to-green-700",
      category: "Frameworks"
    },
    {
      name: "Java",
      level: "80%",
      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/java/java-original.svg",
      color: "from-red-500 to-orange-600",
      category: "Languages"
    },
    {
      name: "MySQL",
      level: "75%",
      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg",
      color: "from-blue-600 to-orange-500",
      category: "Databases"
    },
    // Version Control
    {
      name: "Git",
      level: "85%",
      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg",
      color: "from-orange-400 to-red-500",
      category: "Version Control"
    },
    {
      name: "Python",
      level: "75%",
      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg",
      color: "from-blue-500 to-yellow-500",
      category: "Languages"
    },
    {
      name: "C#",
      level: "80%",
      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/csharp/csharp-original.svg",
      color: "from-purple-500 to-purple-700",
      category: "Languages"
    },
    {
      name: "HTML5",
      level: "95%",
      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg",
      color: "from-orange-400 to-red-600",
      category: "Languages"
    },
    {
      name: "CSS3",
      level: "90%",
      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg",
      color: "from-blue-400 to-blue-600",
      category: "Languages"
    },

    // UI/UX
    {
      name: "Figma",
      level: "80%",
      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/figma/figma-original.svg",
      color: "from-purple-400 to-pink-500",
      category: "UI/UX"
    },
    // Cloud
    {
      name: "AWS",
      level: "65%",
      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/amazonwebservices/amazonwebservices-original.svg",
      color: "from-orange-500 to-yellow-500",
      category: "Cloud"
    },
    {
      name: "Docker",
      level: "70%",
      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/docker/docker-original.svg",
      color: "from-blue-400 to-blue-600",
      category: "Cloud"
    }
  ];

  const categories = ["All", "Languages", "Frameworks", "Databases", "UI/UX", "Version Control", "Cloud"];

  const filteredSkills = activeFilter === "All" ? skills : skills.filter((skill) => skill.category === activeFilter);
  const displayedSkills = showAll ? filteredSkills : filteredSkills.slice(0, 10);

  const getCategoryCount = (category) => {
    if (category === "All") return skills.length;
    return skills.filter((skill) => skill.category === category).length;
  };

  // Handle touch scroll for category buttons
  useEffect(() => {
    const container = scrollContainerRef.current;
    if (!container) return;

    let isDown = false;
    let startX;
    let scrollLeft;

    const handleMouseDown = (e) => {
      isDown = true;
      container.classList.add('active');
      startX = e.pageX - container.offsetLeft;
      scrollLeft = container.scrollLeft;
    };

    const handleMouseLeave = () => {
      isDown = false;
      container.classList.remove('active');
    };

    const handleMouseUp = () => {
      isDown = false;
      container.classList.remove('active');
    };

    const handleMouseMove = (e) => {
      if (!isDown) return;
      e.preventDefault();
      const x = e.pageX - container.offsetLeft;
      const walk = (x - startX) * 2;
      container.scrollLeft = scrollLeft - walk;
    };

    // Touch events
    const handleTouchStart = (e) => {
      startX = e.touches[0].pageX - container.offsetLeft;
      scrollLeft = container.scrollLeft;
    };

    const handleTouchMove = (e) => {
      if (!startX) return;
      const x = e.touches[0].pageX - container.offsetLeft;
      const walk = (x - startX) * 1.5;
      container.scrollLeft = scrollLeft - walk;
    };

    container.addEventListener('mousedown', handleMouseDown);
    container.addEventListener('mouseleave', handleMouseLeave);
    container.addEventListener('mouseup', handleMouseUp);
    container.addEventListener('mousemove', handleMouseMove);
    container.addEventListener('touchstart', handleTouchStart);
    container.addEventListener('touchmove', handleTouchMove);

    return () => {
      container.removeEventListener('mousedown', handleMouseDown);
      container.removeEventListener('mouseleave', handleMouseLeave);
      container.removeEventListener('mouseup', handleMouseUp);
      container.removeEventListener('mousemove', handleMouseMove);
      container.removeEventListener('touchstart', handleTouchStart);
      container.removeEventListener('touchmove', handleTouchMove);
    };
  }, []);

  return (
    <section ref={sectionRef} id="skills" className="min-h-screen bg-slate-900 px-3 xs:px-4 sm:px-6 md:px-8 lg:px-12 xl:px-16 py-24 xs:py-16 sm:py-20 md:py-24">
      <div className="container mx-auto max-w-7xl">
        {/* Section Header */}
        <div 
          className={`text-center mb-12 sm:mb-16 relative transition-all duration-1000 ${
            isVisible.header ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}
          data-animate="header"
        >
          <div className="relative mb-6 sm:mb-8">
            <h1 className="text-7xl sm:text-8xl md:text-9xl font-bold text-slate-700 opacity-30 select-none">
              SKILLS
            </h1>
            <h2 className="absolute inset-0 flex items-center justify-center text-xl sm:text-2xl md:text-4xl font-bold">
              MY <span className="text-cyan-400 ml-2 sm:ml-3">SKILLS</span>
            </h2>
          </div>
        </div>

        {/* Filter Buttons - Horizontal Scrollable */}
        <div 
          className={`mb-6 xs:mb-8 sm:mb-10 md:mb-12 transition-all duration-1000 delay-300 ${
            isVisible.filters ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
          }`}
          data-animate="filters"
        >
          <div 
            ref={scrollContainerRef}
            className="flex gap-2 xs:gap-3 sm:gap-4 pb-2 overflow-x-auto scrollbar-hide touch-pan-x
                      md:justify-center md:overflow-x-visible"
            style={{
              scrollbarWidth: 'none',
              msOverflowStyle: 'none',
              WebkitOverflowScrolling: 'touch'
            }}
          >
            <div className="flex gap-2 xs:gap-3 sm:gap-4 min-w-max px-1 md:min-w-0">
              {categories.map((category, index) => (
                <button
                  key={category}
                  onClick={() => { setActiveFilter(category); setShowAll(false); }}
                  className={`flex-shrink-0 px-3 xs:px-4 sm:px-5 md:px-6 py-2 xs:py-2.5 sm:py-3 rounded-full font-semibold transition-all duration-300 border-2 text-xs xs:text-sm sm:text-base whitespace-nowrap hover:scale-105 ${
                    activeFilter === category
                      ? "bg-cyan-400 text-slate-900 border-cyan-400 shadow-lg "
                      : "bg-transparent text-gray-300 border-slate-600 hover:border-cyan-400 hover:text-cyan-400"
                  }`}
                  style={{
                    animationDelay: `${300 + index * 100}ms`
                  }}
                >
                  {category} <span className="ml-1 text-xs opacity-75">({getCategoryCount(category)})</span>
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* Skills Grid */}
        <div 
          className={`grid grid-cols-2 xs:grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-5 gap-2 xs:gap-3 sm:gap-4 md:gap-5 min-h-[280px] xs:min-h-[320px] sm:min-h-[360px] transition-all duration-1000 delay-500 ${
            isVisible.skillsGrid ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}
          data-animate="skillsGrid"
        >
          {displayedSkills.map((skill, index) => (
            <div
              key={`${skill.name}-${index}`}
              className={`group relative bg-slate-800 p-2 xs:p-3 sm:p-4 rounded-lg shadow-lg border border-slate-700 hover:shadow-cyan-400/20 transition-all duration-300 hover:scale-105 h-32 xs:h-36 sm:h-40 md:h-44 flex flex-col ${
                isVisible.skillsGrid ? 'animate-fade-in-up' : 'opacity-0 translate-y-4'
              }`}
              style={{ 
                // Reduce stagger time for faster display
                animationDelay: `${50 + index * 30}ms`,
                animationFillMode: 'forwards'
              }}
            >
              {/* Category Badge */}
              <div className="absolute top-1.5 xs:top-2 right-1.5 xs:right-2">
                <span className="px-1 xs:px-1.5 py-0.5 text-xs font-medium bg-cyan-400/20 text-cyan-400 rounded-full">
                  {skill.category.split(" ")[0].slice(0, 3)}
                </span>
              </div>

              {/* Skill Icon */}
              <div className="flex items-center justify-center mb-1 xs:mb-2 sm:mb-3 pt-1 xs:pt-1.5 sm:pt-2 flex-shrink-0">
                <div className="relative">
                  <div className={`w-8 h-8 xs:w-10 xs:h-10 sm:w-12 sm:h-12 rounded-full bg-gradient-to-r ${skill.color} p-0.5 shadow-lg group-hover:shadow-xl transition-all duration-300`}>
                    <div className="w-full h-full bg-slate-800 rounded-full flex items-center justify-center p-1 xs:p-1.5">
                      <img
                        src={skill.icon}
                        alt={skill.name}
                        className="w-4 h-4 xs:w-6 xs:h-6 sm:w-8 sm:h-8 object-contain group-hover:scale-110 transition-transform duration-300"
                        onError={(e) => {
                          e.target.style.display = "none";
                          e.target.nextSibling.style.display = "flex";
                        }}
                      />
                      <div className="w-4 h-4 xs:w-6 xs:h-6 sm:w-8 sm:h-8 hidden items-center justify-center text-cyan-400 font-bold text-xs xs:text-sm">
                        {skill.name.charAt(0)}
                      </div>
                    </div>
                  </div>
                  <div
                    className={`absolute inset-0 rounded-full bg-gradient-to-r ${skill.color} opacity-0 group-hover:opacity-30 blur-lg transition-opacity duration-300`}
                  ></div>
                </div>
              </div>

              {/* Skill Name */}
              <h3 className="text-xs xs:text-sm sm:text-base font-semibold text-center mb-1 xs:mb-1.5 sm:mb-2 text-white group-hover:text-cyan-400 transition-colors duration-300 flex-shrink-0 h-4 xs:h-6 sm:h-8 flex items-center justify-center leading-tight px-1">
                <span className="line-clamp-2 text-center">{skill.name}</span>
              </h3>

              {/* Progress Bar */}
              <div className="space-y-1 mt-auto">
                <div className="flex justify-between items-center text-xs">
                  <span className="text-gray-400">Level</span>
                  <span className="text-cyan-400 font-semibold">{skill.level}</span>
                </div>
                <div className="w-full bg-slate-700 rounded-full h-1 xs:h-1.5">
                  <div
                    className={`h-1 xs:h-1.5 bg-gradient-to-r ${skill.color} rounded-full transition-all duration-1000 ease-out animate-progress-bar`}
                    style={{ 
                      width: isVisible.skillsGrid ? skill.level : '0%',
                      animationDelay: `${800 + index * 100}ms`
                    }}
                  ></div>
                </div>
              </div>

              {/* Hover Overlay */}
              <div className="absolute inset-0 bg-gradient-to-r from-cyan-400/5 to-blue-500/5 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            </div>
          ))}
        </div>

        {/* Empty State */}
        {filteredSkills.length === 0 && (
          <div 
            className={`text-center py-8 xs:py-10 sm:py-12 transition-all duration-1000 delay-500 ${
              isVisible.emptyState ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
            }`}
            data-animate="emptyState"
          >
            <p className="text-gray-400 text-sm xs:text-base sm:text-lg">No skills found in this category.</p>
          </div>
        )}

        {/* See More / See Less */}
        {filteredSkills.length > 10 && (
          <div 
            className={`text-center mt-4 xs:mt-6 sm:mt-8 transition-all duration-1000 delay-700 ${
              isVisible.seeMoreButton ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
            }`}
            data-animate="seeMoreButton"
          >
            <button
              onClick={() => setShowAll(!showAll)}
              className="bg-slate-700 text-gray-300 px-4 xs:px-5 sm:px-6 py-2 xs:py-2.5 sm:py-3 rounded-full font-semibold hover:bg-cyan-400 hover:text-slate-900 transition-all duration-300 text-sm xs:text-base hover:scale-105 hover:shadow-lg"
            >
              {showAll ? "See Less" : "See More"}
            </button>
          </div>
        )}
      </div>

      {/* Custom Styles */}
      <style jsx="true">{`
        @keyframes fade-in {
          from { opacity: 0; transform: translateY(20px); }
          to { opacity: 1; transform: translateY(0); }
        }
        @keyframes fade-in-up {
          0% { 
            opacity: 0; 
            transform: translateY(20px) scale(0.95); 
          }
          100% { 
            opacity: 1; 
            transform: translateY(0) scale(1); 
          }
        }
        @keyframes progress-bar {
          from { width: 0%; }
          to { width: var(--target-width); }
        }
        
        .animate-fade-in { 
          animation: fade-in 0.6s ease-out forwards; 
        }
        .animate-fade-in-up {
          opacity: 0;
          animation: fade-in-up 0.8s ease-out forwards;
        }
        .animate-progress-bar {
          animation: none;
        }
        
        .scrollbar-hide {
          -ms-overflow-style: none;
          scrollbar-width: none;
        }
        .scrollbar-hide::-webkit-scrollbar {
          display: none;
        }
        .line-clamp-2 {
          display: -webkit-box;
          -webkit-line-clamp: 2;
          -webkit-box-orient: vertical;
          overflow: hidden;
        }
        
        /* Extra small devices */
        @media (max-width: 375px) {
          .container {
            max-width: 100%;
          }
        }
        
        /* Touch interaction improvements */
        @media (hover: none) and (pointer: coarse) {
          .group:hover .group-hover\\:opacity-30 {
            opacity: 0;
          }
          .group:active .group-hover\\:opacity-30 {
            opacity: 0.3;
          }
          .group:hover .group-hover\\:text-cyan-400 {
            color: inherit;
          }
          .group:active .group-hover\\:text-cyan-400 {
            color: rgb(34 211 238);
          }
          .group:hover .group-hover\\:opacity-100 {
            opacity: 0;
          }
          .group:active .group-hover\\:opacity-100 {
            opacity: 1;
          }
          .group:hover .group-hover\\:scale-110 {
            transform: scale(1);
          }
          .group:active .group-hover\\:scale-110 {
            transform: scale(1.1);
          }
          .group:hover .group-hover\\:shadow-xl {
            box-shadow: 0 10px 15px -3px rgb(0 0 0 / 0.1), 0 4px 6px -4px rgb(0 0 0 / 0.1);
          }
          .group:active .group-hover\\:shadow-xl {
            box-shadow: 0 25px 50px -12px rgb(0 0 0 / 0.25);
          }
        }
      `}</style>
    </section>
  );
};

export default SkillsSection;