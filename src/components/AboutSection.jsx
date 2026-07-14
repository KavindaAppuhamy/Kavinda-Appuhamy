import React, { useEffect, useRef, useState } from "react";
import { Mail, MapPin, Calendar, Briefcase, GraduationCap, User } from "lucide-react";

const AboutSection = () => {
  const sectionRef = useRef(null);
  const [isVisible, setIsVisible] = useState({});

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

  return (
    <section
      ref={sectionRef}
      id="about"
      className="min-h-screen flex items-center justify-center bg-slate-800 px-4 md:px-8 lg:px-16 py-24"
    >
      <div className="container mx-auto max-w-7xl w-full">
        {/* Section Header */}
        <div 
          className={`text-center mb-6 md:mb-10 transition-all duration-1000 ${
            isVisible.header ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}
          data-animate="header"
        >
          <div className="relative mb-8">
            {/* Background text */}
            <h1 className="text-7xl sm:text-8xl md:text-9xl font-bold text-slate-700 opacity-30 select-none">
              ABOUT
            </h1>
            {/* Foreground text */}
            <h2 className="absolute inset-0 flex items-center justify-center text-xl sm:text-2xl md:text-4xl font-bold">
              ABOUT <span className="text-cyan-400 ml-2 sm:ml-3">ME</span>
            </h2>
          </div>
        </div>

        {/* Content Flex - Adjusted for centering */}
        <div className="flex flex-col lg:flex-row items-center justify-center gap-8 lg:gap-10">
          {/* Left Side - Image - Centered vertically */}
          <div 
            className={`flex justify-center items-center transition-all duration-1000 delay-300 ${
              isVisible.image ? 'opacity-100 translate-x-0 scale-100' : 'opacity-0 -translate-x-8 scale-95'
            }`}
            data-animate="image"
          >
            <div className="relative group w-56 sm:w-64 md:w-72 lg:w-80">
               <div className="w-full aspect-[3/4] rounded-2xl overflow-hidden bg-gradient-to-r from-cyan-400 to-blue-500 p-1 shadow-xl shadow-cyan-400/20 hover:shadow-cyan-400/40 transition-shadow duration-300">
                  <div className="w-full h-full rounded-2xl overflow-hidden bg-slate-700">
                    <img
                      src="/AboutKA.png"
                      alt="Kavinda Appuhamy"
                      className="w-full h-full object-cover object-center filter brightness-110 contrast-110 transition-all duration-300 group-hover:scale-105"
                      onError={(e) => {
                        e.target.style.display = "none";
                        e.target.nextSibling.style.display = "flex";
                      }}
                    />
                    <div className="w-full h-full hidden items-center justify-center text-4xl font-bold text-cyan-400 bg-gradient-to-br from-slate-700 to-slate-600">
                      K
                    </div>
                  </div>
                </div>
              {/* Decorative Elements */}
              <div className="absolute -top-2 -right-2 w-4 h-4 bg-cyan-400 rounded-full opacity-20 animate-pulse"></div>
              <div className="absolute -bottom-2 -left-2 w-3 h-3 bg-blue-500 rounded-full opacity-30 animate-bounce"></div>
            </div>
          </div>

          {/* Right Side - Content - Desktop layout */}
          <div 
            className={`hidden lg:flex flex-col justify-center text-left space-y-6 md:space-y-8 max-w-lg lg:max-w-2xl transition-all duration-1000 delay-500 ${
              isVisible.content ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-8'
            }`}
            data-animate="content"
          >
            {/* Title */}
            <h3 className="text-2xl md:text-3xl lg:text-2xl font-bold text-white mb-4">
              MERN FullStack Developer
            </h3>

            {/* Description */}
            <div className="space-y-4 md:space-y-2">
              <p className="text-gray-300 leading-relaxed text-base md:text-1xl">
                I am a self-motivated and collaborative developer with a strong passion for exploring emerging technologies such as Tailwind CSS and Supabase. Currently pursuing a BSc (Hons) in Computing at Coventry University, I specialize as a MERN Full-Stack Developer, building responsive and scalable web applications using MongoDB, Express, React, Node.js and SpringBoot.
              </p>
              <p className="text-gray-300 leading-relaxed text-base md:text-1xl">
                Beyond web development, I also have hands-on experience creating desktop applications in Java and C# (.NET), allowing me to deliver versatile and efficient solutions across platforms. My focus lies in developing functional, intuitive, and user-friendly applications that make a meaningful impact.
              </p>
              <p className="text-gray-300 leading-relaxed text-base md:text-1xl">
                I have worked on a variety of projects, including e-commerce websites (Concept) such as “Crystal Beauty Clear” and microservices-based systems, where I applied problem-solving skills, modern design practices, and team collaboration to achieve real-world results. I thrive in innovative, team-oriented environments and am driven to continuously learn, adapt, and create solutions that matter.
              </p>
            </div>

            {/* Personal Details Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 md:gap-6 pt-4 md:pt-1">
              <div className="space-y-4 md:space-y-5">
                <div className="flex items-center justify-start gap-3 hover:translate-x-2 transition-transform duration-300">
                  <User className="text-cyan-400 w-5 h-5 flex-shrink-0" />
                  <span className="text-white text-base md:text-1xl">Kavinda Appuhamy</span>
                </div>
                
                <div className="flex items-center justify-start gap-3 hover:translate-x-2 transition-transform duration-300">
                  <Briefcase className="text-cyan-400 w-5 h-5 flex-shrink-0" />
                  <span className="text-white text-base md:text-1xl">2+ Years Experience</span>
                </div>
                
                <div className="flex items-center justify-start gap-3 hover:translate-x-2 transition-transform duration-300">
                  <MapPin className="text-cyan-400 w-5 h-5 flex-shrink-0" />
                  <span className="text-white text-base md:text-1xl">Dankotuwa, Sri Lanka</span>
                </div>
              </div>
              
              <div className="space-y-4 md:space-y-5">
                <div className="flex items-center justify-start gap-3 hover:translate-x-2 transition-transform duration-300">
                  <GraduationCap className="text-cyan-400 w-5 h-5 flex-shrink-0" />
                  <span className="text-white text-base md:text-1xl">BSc (Hons) in Computing (Reading)</span>
                </div>
                
                <div className="flex items-center justify-start gap-3 hover:translate-x-2 transition-transform duration-300">
                  <Mail className="text-cyan-400 w-5 h-5 flex-shrink-0" />
                  <span className="text-white text-sm md:text-base break-all">kavinda.appuhamy@gmail.com</span>
                </div>
                
                <div className="flex items-center justify-start gap-3 hover:translate-x-2 transition-transform duration-300">
                  <Calendar className="text-cyan-400 w-5 h-5 flex-shrink-0" />
                  <span className="text-green-400 text-base md:text-1xl font-semibold">Available</span>
                </div>
              </div>
            </div>
          </div>

          {/* Mobile Card Layout */}
          <div 
            className={`lg:hidden w-full max-w-md transition-all duration-1000 delay-500 ${
              isVisible.mobileCard ? 'opacity-100 translate-y-0 scale-100' : 'opacity-0 translate-y-8 scale-95'
            }`}
            data-animate="mobileCard"
          >
            {/* Card Container */}
            <div className="bg-slate-700/40 backdrop-blur-sm rounded-2xl p-6 border border-slate-600/20 shadow-xl hover:shadow-2xl hover:shadow-cyan-400/10 transition-all duration-300 hover:scale-[1.02]">
              {/* Title */}
              <h3 className="text-xl font-bold text-white mb-4 text-center">
                MERN FullStack Developer
              </h3>

              {/* Description */}
              <div className="space-y-3 mb-6">
                <p className="text-gray-300 leading-relaxed text-sm text-justify">
                  I am a self-motivated and collaborative developer with a strong passion for exploring emerging technologies such as Tailwind CSS and Supabase. Currently pursuing a BSc (Hons) in Computing at Coventry University, I specialize as a MERN Full-Stack Developer, building responsive and scalable web applications using MongoDB, Express, React, Node.js and SpringBoot.
                </p>
                <p className="text-gray-300 leading-relaxed text-sm text-justify">
                  Beyond web development, I also have hands-on experience creating desktop applications in Java and C# (.NET), allowing me to deliver versatile and efficient solutions across platforms. My focus lies in developing functional, intuitive, and user-friendly applications that make a meaningful impact.
                </p>
                <p className="text-gray-300 leading-relaxed text-sm text-justify">
                  I have worked on a variety of projects, including e-commerce websites (Concept) such as “Crystal Beauty Clear” and microservices-based systems, where I applied problem-solving skills, modern design practices, and team collaboration to achieve real-world results. I thrive in innovative, team-oriented environments and am driven to continuously learn, adapt, and create solutions that matter.
                </p>
              </div>

              {/* Personal Details */}
              <div className="space-y-3">
                <div className="flex items-center gap-3 hover:translate-x-1 transition-transform duration-300">
                  <User className="text-cyan-400 w-4 h-4 flex-shrink-0" />
                  <span className="text-white text-sm font-medium">Name:</span>
                  <span className="text-gray-300 text-sm">Kavinda Appuhamy</span>
                </div>
                
                <div className="flex items-center gap-3 hover:translate-x-1 transition-transform duration-300">
                  <GraduationCap className="text-cyan-400 w-4 h-4 flex-shrink-0" />
                  <span className="text-white text-sm font-medium">Degree:</span>
                  <span className="text-gray-300 text-sm">BSc (Hons) Computing (Reading)</span>
                </div>
                
                <div className="flex items-center gap-3 hover:translate-x-1 transition-transform duration-300">
                  <Briefcase className="text-cyan-400 w-4 h-4 flex-shrink-0" />
                  <span className="text-white text-sm font-medium">Experience:</span>
                  <span className="text-gray-300 text-sm">1+ Years</span>
                </div>
                
                <div className="flex items-center gap-3 hover:translate-x-1 transition-transform duration-300">
                  <Mail className="text-cyan-400 w-4 h-4 flex-shrink-0" />
                  <span className="text-white text-sm font-medium">Email:</span>
                  <span className="text-gray-300 text-xs break-all">kavinda.appuhamy@gmail.com</span>
                </div>
                
                <div className="flex items-center gap-3 hover:translate-x-1 transition-transform duration-300">
                  <MapPin className="text-cyan-400 w-4 h-4 flex-shrink-0" />
                  <span className="text-white text-sm font-medium">Location:</span>
                  <span className="text-gray-300 text-sm">Dankotuwa, Sri Lanka</span>
                </div>
                
                <div className="flex items-center gap-3 hover:translate-x-1 transition-transform duration-300">
                  <Calendar className="text-cyan-400 w-4 h-4 flex-shrink-0" />
                  <span className="text-white text-sm font-medium">Freelance:</span>
                  <span className="text-green-400 text-sm font-semibold">Available</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;