export const experiences = [
  {
    title: "Senior Full Stack Engineer",
    imgSource: "/public/company-logos/LivaNovalogolarge.jpg",
    year: "June 2022 - Present",
    category: "Remote",
    description: ["VNS Therapy Ecosystem",
    "• Developed a cross-platform solution for managing Vagus Nerve Stimulation (VNS) therapy in patients with drug-resistant epilepsy",
    "• Built a .NET MAUI Android app for clinicians to simulate and manage therapy",
    "• Integrated BLE/COM protocols for device communication with implantable medical devices",
    "• Designed a clinician-facing React web portal (Epsy Hub) for tracking therapy and managing patients",
    "• Implemented AWS-based backend with Cognito, GraphQL, DynamoDB, and Terraform for secure, scalable deployment",
    "• Automated CI/CD pipelines and device deployments using Azure DevOps and Samsung Knox."]
  },
  {
    title: "Deloitte Consulting LLC",
    imgSource: "/public/company-logos/Deloitte_Logo.jpg",
    year: "April 2019 - June 2022",
    category: "Gilbert, AZ",
    description: [
      "Internal Xamarin App & State Health Platform",
      "• Built a Xamarin.Forms communication app for Deloitte leaders to manage meetings and secure document sharing.",
      "• Integrated Microsoft Graph API for authentication and PDF stream decryption.",
      "• Developed cloud-native Medicaid analytics/reporting platform using React, FusionJS, and Figma mockups.",
      "• Engineered AWS-hosted microservices in Node.js with RESTful API design and MVVM architecture.",
      "• Optimized PostgreSQL and Redshift schemas for financial reporting workflows.",
      "• Deployed Docker-based services with multi-instance load balancing on AWS."
    ]
  },
  {
    title: "Siemens Industry Inc",
    imgSource: "/public/company-logos/logo-siemens.png",
    year: "Oct 2018 - Mar 2019",
    category: "Grand Prairie, TX",
    description: [
      "SmartGear Mobile App",
      "• Developed a cross-platform mobile app for Android and iOS to monitor SmartGear® switchgear devices using Xamarin.Forms and MVVM.",
      "• Enabled real-time diagnostics and alerts with Socket.IO and JSON polling.",
      "• Integrated WPA2 MODBUS for secure local device communication.",
      "• Implemented biometric authentication and push notifications using AWS SNS.",
      "• Visualized live electrical data and alarms using Syncfusion (charts, custom pages, 3D graphics).",
      "• Bound live LVS data (breaker status, meter readings) using data-binding and MVVM architecture."
    ]
  },
  {
    title: "National Life Group",
    imgSource: "/public/company-logos/NLG_White_Logo_2x_Green.png",
    year: "Sept 2019 - Sept 2018",
    category: "Montpelier, VT",
    description: [
      "Customer App Development",
      "• Developed and published the company’s first cross-platform mobile app using Xamarin.Forms.",
      "• Implemented secure authentication with OAuth and multi-factor authentication (MFA).",
      "• Integrated SQLite for local data storage and SkiaSharp for dynamic chart rendering.",
      "• Ensured accessibility through automation properties and text-to-speech (TTS) compatibility."
    ]
  },
    {
    title: "Toyota Motor North America, Inc",
    imgSource: "/public/company-logos/Toyota-Logo-2010-2019.png",
    year: "2019",
    category: "Torrance, CA",
    description: [
      "Lexus Drivers Mobile App",
      "• Delivered the Lexus Drivers App for Android and iOS using Xamarin.Forms.",
      "• Implemented VIN barcode scanning, push notifications, and local storage with SQLite.",
      "• Integrated analytics tracking and Google Maps for enhanced user experience.",
      "• Followed MVVM architecture and used HockeyApp for app distribution and crash reporting."
    ]
  },
];

export default function Experience() {
  return (
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
  );
}