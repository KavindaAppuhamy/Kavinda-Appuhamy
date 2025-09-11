import React from "react";


const Footer = () => {
  return (
    <footer className="bg-slate-800 py-8 text-center relative">
      <div className="container mx-auto text-gray-300">
        <p>&copy; {new Date().getFullYear()} Kavinda Appuhamy. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
