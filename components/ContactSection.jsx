

export default function ContactSection() { return (
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
); }