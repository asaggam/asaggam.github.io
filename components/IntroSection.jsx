



export default function IntroSection() { 
    return (
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
              <img src="/IMG_7430.jpg" alt="Profile" className="w-full h-full object-cover" />
            </div>
          </div>
        </div>
      </section>

); }