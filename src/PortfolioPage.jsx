import { useState } from "react";
import Header from "../components/Header";
import IntroSection from "../components/IntroSection";
import ExperienceSection, { experiences } from "../components/ExperienceSection";
import SkillsSection, { skills } from "../components/SkillsSection";
import WorkSection, { works } from "../components/WorkSection";
import ContactSection from "../components/ContactSection";
import Footer from "../components/Footer";

export default function PortfolioPage() {
    const [isMobileMenuOpen, setMobileMenuOpen] = useState(false);
    const [isAnimatingOut, setAnimatingOut] = useState(false);
    const headerName = "Aproop Saggam { AS }";
  
    const handleCloseMenu = () => {
      setAnimatingOut(true);
      setTimeout(() => {
        setMobileMenuOpen(false);
        setAnimatingOut(false);
      }, 300);
    };
    
  return (
      <main className="font-sans text-[#21243D] pt-24">

        {/* Header */}
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
                  href="/public/Resume/AproopSaggam(Resume).pdf"
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

      {/* Intro Section */}
      <section id="intro" className="px-4 sm:px-8 py-12">
        <div className="flex flex-col-reverse md:flex-row items-top justify-between gap-12">
          <div className="md:w-1/2 text-left">
            <h2 className="text-3xl sm:text-4xl font-bold leading-tight mb-4">
              Hi, I am Aproop Saggam, <br /> Senior Full Stack Engineer
            </h2>
            <p className="text-base text-gray-600 break-words">
              I'm a full-stack developer (.NET MAUI, React.js, Node.js) with a passion for building cross-platform applications that are fast, intuitive, and reliable. 
              With 8+ years of experience across mobile, web, and desktop, I enjoy turning complex problems into simple, user-focused solutions—especially in high-impact domains like healthcare. 
              I’m always learning, always building, and still love what I do every day.
            </p>

            <a
              href="/public/Resume/AproopSaggam(Resume).pdf"
              target="_blank"
              rel="noopener noreferrer"
            >
            <button className="bg-[#FF6464] text-white px-6 py-3 mt-6 rounded-md font-semibold">
              Download Resume
            </button>
            </a>

            {/* Social Buttons */}
            <div className="pt 6pt mt-6 ml-2 space-x-6 text-2xl text-gray-700">
            <a href="https://github.com/asaggam" target="_blank" rel="noreferrer" className="hover:text-[#FF6464] transition">
              <i className="fab fa-github"></i>
            </a>
            <a href="https://www.instagram.com/aproopsaggam/" target="_blank" rel="noreferrer" className="hover:text-[#FF6464] transition">
              <i className="fab fa-instagram"></i>
            </a>
            <a href="https://www.linkedin.com/in/aproop-saggam-351347135/" target="_blank" rel="noreferrer" className="hover:text-[#FF6464] transition">
              <i className="fab fa-linkedin"></i>
            </a>
            </div>
          
          </div>
          <div className="md:w-1/3">
            <div className="w-48 h-48 sm:w-60 sm:h-60 mx-auto rounded-full overflow-hidden shadow-lg">
              <img src="/public/IMG_7430.jpg" alt="Profile" className="w-full h-full object-cover" />
            </div>
          </div>
        </div>
      </section>

      {/* Experience Section */}
      <section id="experience" className="py-12 px-4 sm:px-8 bg-[#F3F2F0]">
         <div className="text-center mb-12">
          <div className="inline-block bg-[#DEDEDE] text-gray-600 px-4 py-1 rounded-full text-sm font-medium mb-4">
            Experience
          </div>
        </div>
        <div className="space-y-12">
          {experiences.map((exp, index) => (
            <div key={index} className="bg-white shadow-md rounded-lg overflow-hidden max-w-4xl mx-auto">
              <div className="flex flex-col md:flex-row">
                <div className="md:w-1/3 w-full h-60 md:h-auto">
                  <img src={exp.imgSource} alt="work" className="object-cover" />
                </div>
                <div className="md:w-2/3 w-full p-6">
                  <h3 className="text-xl font-bold mb-2">{exp.title}</h3>
                  <div className="flex items-center space-x-4 mb-3">
                    <span className="text-sm font-medium bg-[#142850] text-white px-2 py-1 rounded">
                      {exp.year}
                    </span>
                    <span className="text-sm text-gray-500">{exp.category}</span>
                  </div>
                  <div className="text-sm text-gray-600 leading-relaxed">
                    {exp.description.map((line, i) => (
                      <p key={i}>{line}</p>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>
     
      {/* Skills Section */}
       <section id="skills" className="py-12 px-4 sm:px-8 text-center">
        <div className="inline-block bg-[#DEDEDE] text-gray-600 px-4 py-1 rounded-full text-sm font-medium mb-4">
          Skills
        </div>
        <h4 className="text-gray-600 mb-7 text-sm sm:text-base">
          The skills, tools and technologies I am really good at:
        </h4>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-6 max-w-6xl mx-auto">
          {skills.map((skill, index) => (
            <div key={index} className="flex flex-col items-center space-y-2">
              <img src={skill.icon} alt={skill.name} className="w-12 h-12 object-contain" />
              <span className="text-sm text-gray-600 text-center">{skill.name}</span>
            </div>
          ))}
        </div>
      </section>

      {/* Work Section */}
       <section id="work" className="bg-[#F3F2F0] py-16 px-4 sm:px-8">
        <div className="text-center mb-12">
          <div className="inline-block bg-[#DEDEDE] text-gray-600 px-4 py-1 rounded-full text-sm font-medium mb-4">
            Work
          </div>
          <h4 className="text-gray-600 mb-7 text-sm sm:text-base">
            Some of the noteworthy projects I have worked:
          </h4>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          {works.map((project, index) => (
            <div
              key={index}
              className="bg-white p-6 rounded-2xl shadow-md flex flex-col md:flex-row gap-6 items-start"
            >
              <div className="md:w-1/2 w-full overflow-hidden rounded-xl">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-auto object-cover rounded-xl hover:scale-105 transition-transform duration-300"
                />
              </div>
              <div className="md:w-1/2 w-full">
                <h3 className="text-lg font-semibold mb-2 text-gray-800">
                  {project.title}
                </h3>
                <p className="text-sm text-gray-600 mb-4">
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag, i) => (
                    <span
                      key={i}
                      className="bg-gray-100 text-gray-700 text-xs px-3 py-1 rounded-full"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
                {project.link && (
                  <a
                    href={project.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-block"
                  >
                    <img
                      src="/public/logos/external_icon.png"
                      alt="external link"
                      className="w-15 h-10 hover:opacity-80 transition-opacity"
                    />
                  </a>
                )}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-16 px-4 sm:px-8 text-center bg-white">
        <div className="inline-block bg-[#DEDEDE] text-gray-600 px-4 py-1 rounded-full text-sm font-medium mb-4">
            Get in touch
        </div>
        <p className="text-gray-600 mb-8">
          What’s next? Feel free to reach out to me or simply want to connect.
          Fill and submit the form below to contact
        </p>

        <form 
          action="https://formsubmit.co/aproopkumars@gmail.com"
          method="POST"
          className="max-w-md mx-auto space-y-4">
        <input
          type="hidden"
          name="_subject"
          value="New Portfolio Contact Form Message"
        />

        <input type="hidden" name="_captcha" value="false" />

        <input
          type="text"
          name="name"
          placeholder="Name"
          required
          className="w-full border border-gray-400 rounded-md px-4 py-3 focus:outline-none focus:ring-2 focus:ring-[#FF6464]"
        />

        <input
          type="email"
          name="email"
          placeholder="Email"
          required
          className="w-full border border-gray-400 rounded-md px-4 py-3 focus:outline-none focus:ring-2 focus:ring-[#FF6464]"
        />

        <textarea
          name="message"
          rows="5"
          placeholder="Message"
          required
          className="w-full border border-gray-400 rounded-md px-4 py-3 focus:outline-none focus:ring-2 focus:ring-[#FF6464]"
        ></textarea>

          <button
            type="submit"
            className="w-full bg-[#FF6464] text-white font-semibold py-3 rounded-md hover:bg-[#e15555] transition-colors"
          >
            Submit
          </button>
        </form>

        {/* Social Icons */}
        <p className="text-gray-600 mb-4 mt-4 text-sm sm:text-base">
          You may also find me on these platforms!
        </p>
        <div className="flex justify-center space-x-6 text-2xl text-gray-700">
            <a href="https://github.com/asaggam" target="_blank" rel="noreferrer" className="hover:text-[#FF6464] transition">
              <i className="fab fa-github"></i>
            </a>
            <a href="https://www.instagram.com/aproopsaggam/" target="_blank" rel="noreferrer" className="hover:text-[#FF6464] transition">
              <i className="fab fa-instagram"></i>
            </a>
            <a href="https://www.linkedin.com/in/aproop-saggam-351347135/" target="_blank" rel="noreferrer" className="hover:text-[#FF6464] transition">
              <i className="fab fa-linkedin"></i>
            </a>
        </div>
        </section>

      {/* Footer */}
       <footer className="text-center py-8 text-sm text-gray-400">
        &copy; 2023 Aproop Saggam. All rights reserved.
      </footer>

    </main>
  );
}
