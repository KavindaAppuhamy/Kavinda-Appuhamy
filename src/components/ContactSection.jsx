import React, { useState, useRef, useEffect } from "react";
import { Send, Loader2 } from "lucide-react";
import emailjs from "@emailjs/browser";
import toast, { Toaster } from "react-hot-toast";

const ContactSection = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const [isLoading, setIsLoading] = useState(false);
  const form = useRef();
  const sectionRef = useRef(null);
  const [isVisible, setIsVisible] = useState({});

  // Intersection Observer for animations
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsVisible((prev) => ({
              ...prev,
              [entry.target.dataset.animate]: true,
            }));
          }
        });
      },
      { threshold: 0.1, rootMargin: "0px 0px -50px 0px" }
    );

    const animatedElements =
      sectionRef.current?.querySelectorAll("[data-animate]");
    animatedElements?.forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, []);

  const validateEmail = (email) => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);

  const emailJSConfig = {
    serviceID: import.meta.env.VITE_EMAILJS_SERVICE_ID,
    templateID: import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
    publicKey: import.meta.env.VITE_EMAILJS_PUBLIC_KEY,
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);

    const { name, email, subject, message } = formData;

    if (!name.trim() || !email.trim() || !subject.trim() || !message.trim()) {
      toast.error("All fields are required!", {
        style: { background: "#ef4444", color: "#fff" },
        position: "top-center",
      });
      setIsLoading(false);
      return;
    }

    if (!validateEmail(email)) {
      toast.error("Please enter a valid email address!", {
        style: { background: "#ef4444", color: "#fff" },
        position: "top-center",
      });
      setIsLoading(false);
      return;
    }

    try {
      await emailjs.send(
        emailJSConfig.serviceID,
        emailJSConfig.templateID,
        {
          from_name: name,
          from_email: email,
          subject,
          message,
          to_email: "kavinda.appuhamy@gmail.com",
        },
        emailJSConfig.publicKey
      );

      toast.success("Message sent successfully! 🚀", {
        style: { background: "#06b6d4", color: "#fff" },
        position: "top-center",
      });

      setFormData({ name: "", email: "", subject: "", message: "" });
    } catch (error) {
      console.error("EmailJS Error:", error);
      toast.error("Failed to send message. Please try again.", {
        style: { background: "#ef4444", color: "#fff" },
        position: "top-center",
      });
    } finally {
      setIsLoading(false);
    }
  };

  const handleInputChange = (field, value) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
  };

  return (
    <section
      ref={sectionRef}
      id="contact"
      className="min-h-screen py-24 px-4 sm:px-6 md:px-20 bg-white dark:bg-gray-900 text-gray-800 dark:text-gray-200 relative flex items-center justify-center"
    >
      {/* React Hot Toast */}
      <Toaster />

      <div className="w-full max-w-3xl">
        {/* Header */}
        <div
          className={`text-center mb-12 transition-all duration-1000 ${
            isVisible.header ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
          data-animate="header"
        >
          <div className="relative mb-6">
            <h1 className="text-7xl sm:text-8xl md:text-9xl font-bold text-slate-700 opacity-30 select-none">
              CONTACT
            </h1>
            <h2 className="absolute inset-0 flex items-center justify-center text-xl sm:text-2xl md:text-4xl font-bold">
              CONTACT <span className="text-cyan-400 ml-2 sm:ml-3">ME</span>
            </h2>
          </div>
        </div>

        {/* Form */}
        <form
          className={`space-y-4 transition-all duration-1000 delay-300 ${
            isVisible.form ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
          data-animate="form"
          onSubmit={handleSubmit}
        >
          <div className="grid sm:grid-cols-2 gap-4">
            <input
              type="text"
              placeholder="Your Name"
              className="w-full p-4 rounded-full border-2 border-gray-200 dark:border-gray-600 bg-gray-50 dark:bg-gray-800 focus:border-blue-500 dark:focus:border-blue-400 focus:outline-none transition-colors text-gray-600 dark:text-gray-300 placeholder-gray-400"
              value={formData.name}
              onChange={(e) => handleInputChange("name", e.target.value)}
              disabled={isLoading}
            />
            <input
              type="email"
              placeholder="Your Email"
              className="w-full p-4 rounded-full border-2 border-gray-200 dark:border-gray-600 bg-gray-50 dark:bg-gray-800 focus:border-blue-500 dark:focus:border-blue-400 focus:outline-none transition-colors text-gray-600 dark:text-gray-300 placeholder-gray-400"
              value={formData.email}
              onChange={(e) => handleInputChange("email", e.target.value)}
              disabled={isLoading}
            />
          </div>

          <input
            type="text"
            placeholder="Subject"
            className="w-full p-4 rounded-full border-2 border-gray-200 dark:border-gray-600 bg-gray-50 dark:bg-gray-800 focus:border-blue-500 dark:focus:border-blue-400 focus:outline-none transition-colors text-gray-600 dark:text-gray-300 placeholder-gray-400"
            value={formData.subject}
            onChange={(e) => handleInputChange("subject", e.target.value)}
            disabled={isLoading}
          />

          <textarea
            placeholder="Message"
            rows={6}
            className="w-full p-4 rounded-3xl border-2 border-gray-200 dark:border-gray-600 bg-gray-50 dark:bg-gray-800 focus:border-blue-500 dark:focus:border-blue-400 focus:outline-none transition-colors text-gray-600 dark:text-gray-300 placeholder-gray-400 resize-none"
            value={formData.message}
            onChange={(e) => handleInputChange("message", e.target.value)}
            disabled={isLoading}
          />

          <div
            className={`text-center transition-all duration-1000 delay-500 ${
              isVisible.button ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
            }`}
            data-animate="button"
          >
            <button
              type="submit"
              disabled={isLoading}
              className="px-14 py-4 bg-blue-600 hover:bg-blue-700 disabled:bg-blue-400 text-white rounded-full font-semibold transition-all duration-300 transform hover:scale-105 hover:shadow-lg disabled:scale-100 disabled:shadow-none flex items-center justify-center space-x-2 mx-auto"
            >
              {isLoading ? (
                <>
                  <Loader2 className="w-5 h-5 animate-spin" />
                  <span>Sending...</span>
                </>
              ) : (
                <>
                  <Send className="w-5 h-5" />
                  <span>Send Message</span>
                </>
              )}
            </button>
          </div>
        </form>
      </div>

      {/* Animations */}
      <style jsx="true">{`
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
        .animate-fade-in-up {
          opacity: 0;
          animation: fade-in-up 0.8s ease-out forwards;
        }
      `}</style>
    </section>
  );
};

export default ContactSection;
