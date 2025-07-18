
export const works = [
  {
    title: "Epsy Portal",
    description:
      "A health companion app for epilepsy patients to log seizures, manage medications, and share insights with clinicians via the connected Epsy Hub portal.",
    image: "work-logos/epsy_portal.png",
    link: "https://www.epsyhealth.com/",
    tags: [
      "React",
      "Typescript",
      "Tailwindcss",
      "Material UI",
      "Redux Toolkit",
      "React Query",
      "PostgreSQL",
      "GraphQL",
      "Python",
      "Terraform",
      "AWS Amplify"
    ]
  },
  {
    title: "Sm@rtGear Mobile App",
    description:
      "An industrial mobile solution providing real-time diagnostics and control for SmartGear switchgear systems, enhancing electrical safety and equipment monitoring.",
    image: "work-logos/Siemens_app.png",
    link: "https://www.siemens.com/us/en/products/energy/low-voltage/smart-technology/smart-mobile.html",
    tags: [
      "Xamarin.Forms",
      "Node.js",
      "Socket.IO",
      "REST API",
      "JavaScript",
      "SQLite",
      "Modbus Server",
      "MVVM",
      "Syncfusion",
      "AWS"
    ]
  },
  {
    title: "National Life Group App",
    description:
      "A cross-platform mobile app enabling policyholders to manage life insurance and annuity accounts, make payments, view balances, and contact agents securely.",
    image: "work-logos/customer-hd-lg.jpg",
    link: "https://www.nationallife.com/customertools",
    tags: [
      "Xamarin.Forms",
      "REST API",
      "ASP.Net",
      "SkiaSharp",
      "SQLite",
      "MVVM",
      "Syncfusion",
    ]
  },
  {
    title: "Lexus Drivers App",
    description:
      "A companion app for Lexus owners offering service history, remote vehicle access, maintenance alerts, and VIN-based features for a seamless ownership experience.",
    image: "work-logos/Lexus_drivers.png",
    link: "https://www.lexus.com/My-Lexus/resources/connected-technology",
    tags: [
      "Xamarin.Forms",
      "REST API",
      "ASP.Net",
      "SQLite",
      "MVVM",
      "Syncfusion",
    ]
  }
];

export default function WorkSection() { return (
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
                      src="logos/external_icon.png"
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
); }