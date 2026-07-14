import React, { useState } from "react";
import { Facebook, Twitter, Instagram, Linkedin, Download, Phone, MessageCircle, Mail, X, UserCheck } from "lucide-react";
import { useNavigate } from "react-router-dom";

const HomeSection = ({ currentTypeText }) => {
  const [showHireModal, setShowHireModal] = useState(false);

  const handlePhoneCall = () => {
    window.open('tel:+94769210099', '_self');
  };

  const handleWhatsApp = () => {
    window.open('https://wa.me/94769210099', '_blank');
  };

  const handleEmail = () => {
    window.location.href = 'mailto:kavinda.appuhamy@gmail.com';
  };

  return (
    <>
      <section
        id="home"
        className="min-h-screen flex items-center justify-center px-4 sm:px-6 md:px-8 lg:px-16 pt-16 py-24 sm:pt-20 pb-8"
      >
        <div className="container mx-auto max-w-7xl flex flex-col-reverse lg:flex-row items-center justify-center gap-8 sm:gap-10 lg:gap-12">
          {/* Left Side - Content */}
          <div className="flex-1 text-center lg:text-left space-y-4 sm:space-y-6 w-full">
            <div className="space-y-3 sm:space-y-4">
              <h3 className="text-lg sm:text-xl md:text-2xl lg:text-3xl font-medium text-gray-200 animate-fadeInUp opacity-0 animation-delay-100">
                Hello, It's Me
              </h3>
              <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold leading-tight animate-fadeInUp opacity-0 animation-delay-200">
                Kavinda <span className="text-cyan-400">Appuhamy</span>
              </h1>
              <h3 className="text-lg sm:text-xl md:text-2xl lg:text-3xl text-gray-200 animate-fadeInUp opacity-0 animation-delay-300">
                And I'm a{" "}
                <span className="text-cyan-400 inline-block min-w-0">
                  {currentTypeText}
                </span>
                <span className="animate-pulse ml-1">|</span>
              </h3>
            </div>

            {/* Social Icons */}
            <div className="flex justify-center lg:justify-start space-x-3 sm:space-x-4 py-2 animate-fadeInUp opacity-0 animation-delay-400">
              <a
                href="https://www.facebook.com/kavinda.roshan.71/"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 sm:w-12 sm:h-12 border-2 border-cyan-400 rounded-full flex items-center justify-center hover:bg-cyan-400 hover:text-slate-900 transition-all duration-300 hover:scale-110 focus:outline-none focus:ring-2 focus:ring-cyan-400 focus:ring-offset-2 focus:ring-offset-slate-900 animate-scaleIn opacity-0 animation-delay-500"
                aria-label="Facebook Profile"
              >
                <Facebook size={16} className="sm:w-5 sm:h-5" />
              </a>
              <a
                href="https://twitter.com/YourTwitterUsername"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 sm:w-12 sm:h-12 border-2 border-cyan-400 rounded-full flex items-center justify-center hover:bg-cyan-400 hover:text-slate-900 transition-all duration-300 hover:scale-110 focus:outline-none focus:ring-2 focus:ring-cyan-400 focus:ring-offset-2 focus:ring-offset-slate-900 animate-scaleIn opacity-0 animation-delay-600"
                aria-label="Twitter Profile"
              >
                <Twitter size={16} className="sm:w-5 sm:h-5" />
              </a>
              <a
                href="https://www.instagram.com/kavinda_appuhamy/"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 sm:w-12 sm:h-12 border-2 border-cyan-400 rounded-full flex items-center justify-center hover:bg-cyan-400 hover:text-slate-900 transition-all duration-300 hover:scale-110 focus:outline-none focus:ring-2 focus:ring-cyan-400 focus:ring-offset-2 focus:ring-offset-slate-900 animate-scaleIn opacity-0 animation-delay-700"
                aria-label="Instagram Profile"
              >
                <Instagram size={16} className="sm:w-5 sm:h-5" />
              </a>
              <a
                href="https://www.linkedin.com/in/kavinda-appuhamy/"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 sm:w-12 sm:h-12 border-2 border-cyan-400 rounded-full flex items-center justify-center hover:bg-cyan-400 hover:text-slate-900 transition-all duration-300 hover:scale-110 focus:outline-none focus:ring-2 focus:ring-cyan-400 focus:ring-offset-2 focus:ring-offset-slate-900 animate-scaleIn opacity-0 animation-delay-800"
                aria-label="LinkedIn Profile"
              >
                <Linkedin size={16} className="sm:w-5 sm:h-5" />
              </a>
            </div>

            {/* Action Buttons */}
            <div className="flex flex-col sm:flex-row justify-center lg:justify-start items-center w-80 mx-auto lg:mx-0 gap-4 sm:gap-4 pt-2">
              <a
                href="https://drive.google.com/uc?export=download&id=1GeVPk9SZ27NA2a0DkDpgrVQCovXQ5VKd"
                
                download="Kavinda Appuhamy - CV.pdf"
                className="inline-flex items-center justify-center gap-2 bg-cyan-400 text-slate-900 px-4 py-3.5 sm:px-8 sm:py-4 rounded-full font-semibold hover:shadow-lg hover:shadow-cyan-400/50 transition-all duration-300 hover:scale-105 focus:outline-none focus:ring-2 focus:ring-cyan-400 focus:ring-offset-2 focus:ring-offset-slate-900 text-sm sm:text-base w-full sm:w-fit animate-fadeInUp opacity-0 animation-delay-500"
              >
                <Download size={16} className="sm:w-5 sm:h-5" />
                <span className="whitespace-nowrap">Download My CV</span>
              </a>
              
              <button
                onClick={() => setShowHireModal(true)}
                className="inline-flex items-center justify-center gap-2 border-2 border-cyan-400 text-cyan-400 px-4 py-3.5 sm:px-8 sm:py-4 rounded-full font-semibold hover:bg-cyan-400 hover:text-slate-900 hover:shadow-lg hover:shadow-cyan-400/50 transition-all duration-300 hover:scale-105 focus:outline-none focus:ring-2 focus:ring-cyan-400 focus:ring-offset-2 focus:ring-offset-slate-900 text-sm sm:text-base w-full sm:w-fit animate-fadeInUp opacity-0 animation-delay-900"
              >
                <UserCheck size={16} className="sm:w-5 sm:h-5" />
                <span className="whitespace-nowrap">Hire Me</span>
              </button>
            </div>
          </div>

          {/* Right Side - Professional Image */}
          <div className="flex-1 flex justify-center w-full max-w-sm sm:max-w-md lg:max-w-lg animate-fadeInRight opacity-0 animation-delay-400">
            <div className="relative group w-full aspect-square max-w-72 sm:max-w-80 md:max-w-96">
              {/* Animated Background Circles */}
              <div className="absolute inset-0 animate-spin-slow">
                <div className="w-full h-full rounded-full border-2 border-dashed border-cyan-400/30"></div>
              </div>
              <div className="absolute inset-2 sm:inset-4 animate-ping-slow">
                <div className="w-full h-full rounded-full border border-cyan-400/20"></div>
              </div>
              
              {/* Main Image Container */}
              <div className="relative w-full h-full rounded-full bg-gradient-to-br from-cyan-400 via-blue-500 to-purple-600 p-1 shadow-2xl shadow-cyan-400/20 transform transition-all duration-500 group-hover:scale-105 group-hover:rotate-2">
                {/* Inner Container */}
                <div className="w-full h-full rounded-full bg-gradient-to-br from-slate-800 to-slate-900 p-2 relative overflow-hidden">
                  {/* Professional Image */}
                  <div className="w-full h-full rounded-full overflow-hidden bg-gradient-to-br from-slate-700 to-slate-600 relative">
                    <img 
                      src="/MainKA.png" 
                      alt="Kavinda Appuhamy - Professional Portrait" 
                      className="w-full h-full object-cover object-center filter brightness-110 contrast-110 transition-all duration-300 group-hover:scale-110"
                      loading="lazy"
                      onError={(e) => {
                        // Fallback if image doesn't exist
                        e.target.style.display = 'none';
                        e.target.nextSibling.style.display = 'flex';
                      }}
                    />
                    {/* Fallback Avatar */}
                    <div className="absolute inset-0 hidden items-center justify-center text-4xl sm:text-5xl md:text-6xl font-bold text-cyan-400 bg-gradient-to-br from-slate-700 to-slate-600">
                      KA
                    </div>
                  </div>
                  
                  {/* Floating Particles - Responsive sizes */}
                  <div className="absolute top-2 left-2 sm:top-4 sm:left-4 w-1.5 h-1.5 sm:w-2 sm:h-2 bg-cyan-400 rounded-full animate-bounce delay-100"></div>
                  <div className="absolute top-4 right-3 sm:top-8 sm:right-6 w-1 h-1 bg-blue-400 rounded-full animate-bounce delay-300"></div>
                  <div className="absolute bottom-3 left-4 sm:bottom-6 sm:left-8 w-1 sm:w-1.5 h-1 sm:h-1.5 bg-purple-400 rounded-full animate-bounce delay-500"></div>
                  <div className="absolute bottom-2 right-2 sm:bottom-4 sm:right-4 w-1 h-1 bg-cyan-400 rounded-full animate-bounce delay-700"></div>
                </div>
                
                {/* Glow Effect */}
                <div className="absolute inset-0 rounded-full bg-gradient-to-r from-cyan-400/20 to-blue-500/20 animate-pulse opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              </div>

              {/* Status Indicator - Responsive positioning and sizing */}
              <div className="absolute bottom-2 right-2 sm:bottom-4 sm:right-4 w-6 h-6 sm:w-8 sm:h-8 bg-green-500 border-2 sm:border-4 border-slate-900 rounded-full animate-pulse flex items-center justify-center animate-scaleIn opacity-0 animation-delay-1000">
                <div className="w-1.5 h-1.5 sm:w-2 sm:h-2 bg-white rounded-full"></div>
              </div>

              {/* Floating Badge - Responsive positioning and text */}
              <div className="absolute -top-1 -right-1 sm:-top-2 sm:-right-2 bg-gradient-to-r from-cyan-400 to-blue-500 text-slate-900 px-2 py-1 sm:px-3 sm:py-1 rounded-full text-xs sm:text-sm font-semibold shadow-lg animate-bounce animate-fadeInDown opacity-0 animation-delay-1100">
                Available
              </div>
            </div>
          </div>
        </div>

        {/* Custom Animations Styles - Enhanced for mobile performance */}
        <style jsx="true">{`
          @keyframes spin-slow {
            from {
              transform: rotate(0deg);
            }
            to {
              transform: rotate(360deg);
            }
          }
          
          @keyframes ping-slow {
            0%, 100% {
              transform: scale(1);
              opacity: 0.5;
            }
            50% {
              transform: scale(1.05);
              opacity: 0.3;
            }
          }

          @keyframes fadeInUp {
            0% {
              opacity: 0;
              transform: translateY(30px);
            }
            100% {
              opacity: 1;
              transform: translateY(0);
            }
          }

          @keyframes fadeInRight {
            0% {
              opacity: 0;
              transform: translateX(30px);
            }
            100% {
              opacity: 1;
              transform: translateX(0);
            }
          }

          @keyframes fadeInDown {
            0% {
              opacity: 0;
              transform: translateY(-20px);
            }
            100% {
              opacity: 1;
              transform: translateY(0);
            }
          }

          @keyframes scaleIn {
            0% {
              opacity: 0;
              transform: scale(0.8);
            }
            100% {
              opacity: 1;
              transform: scale(1);
            }
          }
          
          .animate-spin-slow {
            animation: spin-slow 20s linear infinite;
          }
          
          .animate-ping-slow {
            animation: ping-slow 3s ease-in-out infinite;
          }

          .animate-fadeInUp {
            animation: fadeInUp 0.8s ease-out forwards;
          }

          .animate-fadeInRight {
            animation: fadeInRight 0.8s ease-out forwards;
          }

          .animate-fadeInDown {
            animation: fadeInDown 0.8s ease-out forwards;
          }

          .animate-scaleIn {
            animation: scaleIn 0.6s ease-out forwards;
          }

          .animation-delay-100 {
            animation-delay: 0.1s;
          }

          .animation-delay-200 {
            animation-delay: 0.2s;
          }

          .animation-delay-300 {
            animation-delay: 0.3s;
          }

          .animation-delay-400 {
            animation-delay: 0.4s;
          }

          .animation-delay-500 {
            animation-delay: 0.5s;
          }

          .animation-delay-600 {
            animation-delay: 0.6s;
          }

          .animation-delay-700 {
            animation-delay: 0.7s;
          }

          .animation-delay-800 {
            animation-delay: 0.8s;
          }

          .animation-delay-900 {
            animation-delay: 0.9s;
          }

          .animation-delay-1000 {
            animation-delay: 1.0s;
          }

          .animation-delay-1100 {
            animation-delay: 1.1s;
          }
          
          /* Reduce animations on mobile for better performance */
          @media (max-width: 768px) {
            .animate-spin-slow {
              animation: spin-slow 30s linear infinite;
            }
            
            .animate-ping-slow {
              animation: ping-slow 4s ease-in-out infinite;
            }

            .animate-fadeInUp,
            .animate-fadeInRight,
            .animate-fadeInDown,
            .animate-scaleIn {
              animation-duration: 0.6s;
            }
          }
          
          /* Ensure smooth scrolling and better touch targets */
          @media (max-width: 768px) {
            * {
              -webkit-tap-highlight-color: transparent;
            }
          }
          
          /* Fix for iOS Safari viewport issues */
          @supports (-webkit-touch-callout: none) {
            .min-h-screen {
              min-height: -webkit-fill-available;
            }
          }

          /* Prefers reduced motion for accessibility */
          @media (prefers-reduced-motion: reduce) {
            .animate-fadeInUp,
            .animate-fadeInRight,
            .animate-fadeInDown,
            .animate-scaleIn {
              animation: none;
              opacity: 1;
              transform: none;
            }
          }
        `}</style>
      </section>

      {/* Hire Me Modal */}
      {showHireModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/70 backdrop-blur-sm">
          <div className="relative bg-slate-800 rounded-3xl p-8 w-full max-w-md shadow-2xl shadow-cyan-400/20 border border-slate-700 animate-scaleIn">
            {/* Close Button */}
            <button
              onClick={() => setShowHireModal(false)}
              className="absolute top-4 right-4 text-slate-400 hover:text-white transition-colors duration-200"
              aria-label="Close modal"
            >
              <X size={24} />
            </button>

            {/* Modal Content */}
            <div className="text-center space-y-6">
              <h2 className="text-2xl sm:text-3xl font-bold text-white">
                Hire Me
              </h2>
              
              <p className="text-slate-300 text-sm sm:text-base">
                Get in touch via phone, WhatsApp, or email.
              </p>

              {/* Contact Options */}
              <div className="space-y-3">
                {/* Phone */}
                <button
                  onClick={handlePhoneCall}
                  className="w-full flex items-center justify-center gap-3 bg-blue-600 hover:bg-blue-700 text-white px-6 py-4 rounded-2xl font-semibold transition-all duration-300 hover:scale-105 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 focus:ring-offset-slate-800"
                >
                  <Phone size={20} />
                  <span>Call Me</span>
                </button>

                {/* WhatsApp */}
                <button
                  onClick={handleWhatsApp}
                  className="w-full flex items-center justify-center gap-3 bg-green-600 hover:bg-green-700 text-white px-6 py-4 rounded-2xl font-semibold transition-all duration-300 hover:scale-105 focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-offset-2 focus:ring-offset-slate-800"
                >
                  <MessageCircle size={20} />
                  <span>WhatsApp Me</span>
                </button>

                {/* Email */}
                <button
                  onClick={handleEmail}
                  className="w-full flex items-center justify-center gap-3 bg-slate-700 hover:bg-slate-600 text-white px-6 py-4 rounded-2xl font-semibold transition-all duration-300 hover:scale-105 focus:outline-none focus:ring-2 focus:ring-slate-500 focus:ring-offset-2 focus:ring-offset-slate-800"
                >
                  <Mail size={20} />
                  <span>Email Me</span>
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default HomeSection;