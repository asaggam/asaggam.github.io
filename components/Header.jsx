import { useState } from "react";

export default function Header({ headerName }) {
  const [isMobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [isAnimatingOut, setAnimatingOut] = useState(false);

  const handleCloseMenu = () => {
    setAnimatingOut(true);
    setTimeout(() => {
      setMobileMenuOpen(false);
      setAnimatingOut(false);
    }, 300); // match animation duration
  };

  return (
   <header className="fixed top-0 left-0 right-0 z-50 py-4 px-4 sm:px-8 bg-white/95 bg-opacity-40">
     {/* <header className="fixed top-0 left-0 right-0 z-50 bg-white/80 backdrop-blur-sm py-4 px-4 sm:px-8"> */}
        <div className="flex justify-between items-center">
          <a href="#intro" className="text-xl font-bold">{headerName}</a>

          {/* Desktop Nav */}
          <nav className="hidden sm:flex space-x-6 text-sm font-medium">
            <a href="#experience" className="hover:text-[#00A8CC]">Experience</a>
            <a href="#skills" className="hover:text-[#00A8CC]">Skills</a>
            <a href="#work" className="hover:text-[#00A8CC]">Work</a>
            <a href="#contact" className="hover:text-[#00A8CC]">Contact</a>
          </nav>

          {/* Hamburger */}
          <button
            className="sm:hidden focus:outline-none"
            onClick={() => setMobileMenuOpen(true)}
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth="2"
              viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round"
                d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>
        </div>

        {/* Right-side Mobile Menu */}
        {isMobileMenuOpen && (
          <div
            className="fixed inset-0 z-40 bg-black bg-opacity-40 backdrop-blur-sm"
            onClick={handleCloseMenu}
          >
            <div
              className={`bg-white w-4/5 h-full p-6 absolute top-0 right-0 shadow-lg transition-transform duration-300 transform 
                ${isAnimatingOut ? "animate-slide-out-right" : "animate-slide-in-right"}`}
              onClick={(e) => e.stopPropagation()}
            >
              <button
                className="mb-6"
                onClick={handleCloseMenu}
              >
                <svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth="2"
                  viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round"
                    d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>

              <nav className="flex flex-col space-y-4 text-lg font-medium">
                <a href="#experience" onClick={handleCloseMenu}>Experience</a>
                <a href="#skills" onClick={handleCloseMenu}>Skills</a>
                <a href="#work" onClick={handleCloseMenu}>Work</a>
                <a href="#contact" onClick={handleCloseMenu}>Contact</a>
                <a
                  href="/public/AproopSaggam(Resume).pdf"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <button className="bg-[#FF6464] text-white px-6 py-3 rounded-md font-semibold">
                    Download Resume
                  </button>
                </a>
              </nav>
            </div>
          </div>
        )}
      </header>
  );
}