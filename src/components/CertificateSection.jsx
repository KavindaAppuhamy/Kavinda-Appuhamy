import React, { useState, useEffect, useRef } from "react";
import { ExternalLink } from "lucide-react";

const certifications = [
  {
    name: "Verstion Control",
    offeredVia: "Coursera",
    issuedDate: "Jannuary 2025",
    credentialId: "4OXDPDQKLZSK",
    credentialUrl:
      "https://www.coursera.org/account/accomplishments/certificate/4OXDPDQKLZSK",
    description:
      "This certification strengthened my skills in version control, GitHub repository management, and code revision while enhancing my command-line, Unix/Linux, and file management expertise. It also improved my knowledge of software development tools, versioning, and collaborative coding practices.",
    image: "/certificates/VC.png",
  },
  {
    name: "Programming with JavaScript",
    offeredVia: "Coursera",
    issuedDate: "June 2024",
    credentialId: "3U5VBSSLTXR8",
    credentialUrl:
      "https://www.coursera.org/account/accomplishments/certificate/3U5VBSSLTXR8",
    description:
      "This certification strengthened my expertise in JavaScript programming and modern web development practices, covering the creation of simple scripts, manipulating objects and arrays, and building interactive applications. I also gained hands-on experience with unit testing using Jest, ensuring code reliability and maintainability. Through this certification, I developed strong skills in programming principles, event-driven programming, Node.js, and web development tools, enabling me to build and test scalable, efficient, and well-structured applications.",
    image: "/certificates/PJS.png",
  },
  {
    name: "Introduction to Front-End Development",
    offeredVia: "Coursera",
    issuedDate: "May 2024",
    credentialId: "PLLTSHQ3NGLU",
    credentialUrl:
      "https://www.coursera.org/account/accomplishments/certificate/PLLTSHQ3NGLU",
    description:
      "This certification enhanced my expertise in web development by providing a solid understanding of front-end, back-end, and full-stack roles while building hands-on experience in creating and styling responsive webpages with HTML, CSS, and JavaScript frameworks. I gained practical skills in working with UI frameworks like Bootstrap and React.js, designing user-friendly interfaces, and developing modern, responsive web applications using essential web development tools and practices.",
    image: "/certificates/IFD.png",
  },
  {
    name: "Programming in Python",
    offeredVia: "University of Moratuwa",
    issuedDate: "January 2024",
    credentialId: "KKo8n1Qwtu",
    credentialUrl:
      "https://open.uom.lk/lms/mod/customcert/view.php?id=675&downloadown=1",
    description:
      "This certification provided a strong foundation in programming and software development, starting from the basics of coding logic to practical applications in Python. I gained hands-on experience through modules such as Introduction to Programming, Python Programming (Basics, Essentials, and Advanced Concepts), and the Software Development Process. The program emphasized problem-solving and real-world application through assignments like building a Calculator and engaging in an Industry Connection Project, strengthening both my technical and professional skills.",
    image: "/certificates/UOM.png",
  },
];

const CertificationSection = () => {
  const [expandedIndex, setExpandedIndex] = useState(null);
  const [showAll, setShowAll] = useState(false);
  const [visibleItems, setVisibleItems] = useState(new Set());
  const itemRefs = useRef([]);
  const titleRef = useRef(null);
  const buttonRef = useRef(null);

  const toggleExpand = (index) => {
    setExpandedIndex(expandedIndex === index ? null : index);
  };

  useEffect(() => {
    const observerOptions = {
      threshold: 0.1,
      rootMargin: '50px 0px -50px 0px'
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        const index = entry.target.dataset.index;
        if (entry.isIntersecting) {
          setVisibleItems(prev => new Set([...prev, index]));
        }
      });
    }, observerOptions);

    // Observe title
    if (titleRef.current) {
      observer.observe(titleRef.current);
    }

    // Observe certificate items
    itemRefs.current.forEach((ref, index) => {
      if (ref) {
        ref.dataset.index = `item-${index}`;
        observer.observe(ref);
      }
    });

    // Observe button
    if (buttonRef.current) {
      buttonRef.current.dataset.index = 'button';
      observer.observe(buttonRef.current);
    }

    return () => observer.disconnect();
  }, [showAll]);

  return (
    <section
      id="certificates"
      className="min-h-screen flex flex-col justify-center items-center bg-slate-900 px-4 sm:px-6 md:px-12 lg:px-16 py-24"
    >
      {/* Title */}
      <div 
        ref={titleRef}
        data-index="title"
        className={`text-center mb-6 transition-all duration-1000 ease-out ${
          visibleItems.has('title') 
            ? 'opacity-100 translate-y-0' 
            : 'opacity-0 translate-y-8'
        }`}
      >
        <div className="relative mb-6">
          <h1 className="text-7xl sm:text-8xl md:text-9xl font-bold text-slate-700 opacity-30 select-none">
            AWARDS
          </h1>
          <h2 className="absolute inset-0 flex items-center justify-center text-xl sm:text-2xl md:text-4xl font-bold">
            MY <span className="text-cyan-400 ml-2 sm:ml-3">CERTIFICATIONS</span>
          </h2>
        </div>
      </div>

      {/* Grid Layout */}
      <div className="grid gap-12 max-w-5xl mx-auto w-full">
        {(showAll ? certifications : certifications.slice(0, 1)).map((cert, idx) => (
          <div
            key={idx}
            ref={el => itemRefs.current[idx] = el}
            className={`bg-slate-800/50 rounded-2xl p-6 shadow-lg grid md:grid-cols-2 gap-6 items-center transition-all duration-1000 ease-out ${
              visibleItems.has(`item-${idx}`)
                ? 'opacity-100 translate-y-0 scale-100'
                : 'opacity-0 translate-y-12 scale-95'
            }`}
            style={{ transitionDelay: `${idx * 200}ms` }}
          >
            {/* Certificate Image */}
            <div className={`flex justify-center items-center transition-all duration-1000 ease-out ${
              visibleItems.has(`item-${idx}`)
                ? 'opacity-100 translate-x-0'
                : 'opacity-0 -translate-x-8'
            }`}
            style={{ transitionDelay: `${idx * 200 + 300}ms` }}>
              <img
                src={cert.image}
                alt={cert.name}
                className="rounded-lg max-h-72 w-full h-auto object-contain transform transition-transform duration-500 hover:scale-105"
              />
            </div>

            {/* Certificate Info */}
            <div className={`space-y-3 text-gray-300 transition-all duration-1000 ease-out ${
              visibleItems.has(`item-${idx}`)
                ? 'opacity-100 translate-x-0'
                : 'opacity-0 translate-x-8'
            }`}
            style={{ transitionDelay: `${idx * 200 + 500}ms` }}>
              <p className="transform transition-all duration-300 hover:translate-x-1">
                <span className="font-semibold text-cyan-400">Name: </span>
                {cert.name}
              </p>
              <p className="transform transition-all duration-300 hover:translate-x-1">
                <span className="font-semibold text-cyan-400">Offered via: </span>
                {cert.offeredVia}
              </p>
              <p className="transform transition-all duration-300 hover:translate-x-1">
                <span className="font-semibold text-cyan-400">Issued date: </span>
                {cert.issuedDate}
              </p>
              <p className="transform transition-all duration-300 hover:translate-x-1">
                <span className="font-semibold text-cyan-400">Credential ID: </span>
                {cert.credentialId}
              </p>
              <p className="transform transition-all duration-300 hover:translate-x-1">
                <span className="font-semibold text-cyan-400">Credential URL: </span>
                <a
                  href={cert.credentialUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-cyan-300 underline italic hover:text-cyan-400 inline-flex items-center gap-1 transition-all duration-300 hover:scale-105"
                >
                  view certificate <ExternalLink size={14} />
                </a>
              </p>

              {/* Expandable Description */}
              <p
                className={`text-sm leading-relaxed transition-all duration-500 ${
                  expandedIndex === idx ? "max-h-96 opacity-100" : "line-clamp-3"
                }`}
              >
                {cert.description}
              </p>
              <button
                onClick={() => toggleExpand(idx)}
                className="text-cyan-400 text-sm font-medium hover:underline mt-1 transition-all duration-300 hover:text-cyan-300 hover:translate-x-1"
              >
                {expandedIndex === idx ? "Read Less" : "Read More"}
              </button>
            </div>
          </div>
        ))}
      </div>

      {/* Button */}
      <div 
        ref={buttonRef}
        className={`text-center mt-6 transition-all duration-1000 ease-out ${
          visibleItems.has('button')
            ? 'opacity-100 translate-y-0 scale-100'
            : 'opacity-0 translate-y-8 scale-95'
        }`}
        style={{ transitionDelay: '400ms' }}
      >
        <button
          onClick={() => setShowAll(!showAll)}
          className="inline-block border border-cyan-400 text-cyan-400 px-6 py-3 rounded-full font-semibold hover:bg-cyan-400 hover:text-slate-900 transition-all duration-300 transform hover:scale-105 hover:shadow-lg hover:shadow-cyan-400/25"
        >
          {showAll ? "Show Less" : "View All Certificates"}
        </button>
      </div>

      <style jsx="true">{`
        .line-clamp-3 {
          display: -webkit-box;
          -webkit-line-clamp: 3;
          -webkit-box-orient: vertical;
          overflow: hidden;
        }
      `}</style>
    </section>
  );
};

export default CertificationSection;