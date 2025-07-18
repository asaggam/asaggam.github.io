
export const skills = [
  { name: "Javascript", icon: "/public/logos/javascript-original.svg" },
  { name: "Typescript", icon: "/public/logos/typescript-original.svg" },
  { name: "Java", icon: "/public/logos/java-original.svg" },
  { name: "C#", icon: "/public/logos/csharp-original.svg" },
  { name: "React", icon: "/public/logos/react-original.svg" },
  { name: "Angular", icon: "/public/logos/angularjs-original.svg" },
  { name: "TailWindcss", icon: "/public/logos/tailwindcss-original.svg" },
  { name: "Sass/Scss", icon: "/public/logos/sass-original.svg" },
  { name: "Node.js", icon: "/public/logos/nodejs-original-wordmark.svg" },
  { name: "GraphQL", icon: "/public/logos/graphql-plain.svg" },
  { name: "Socket.IO", icon: "/public/logos/socketio-original.svg" },
  { name: "PostgreSQL", icon: "/public/logos/postgresql-original.svg" },
  { name: "SQLite", icon: "/public/logos/sqlite-original.svg" },
  { name: "MongoDB", icon: "/public/logos/mongodb-original.svg" },
  { name: "Figma", icon: "/public/logos/figma-original.svg" },
  { name: "Git", icon: "/public/logos/github-original.svg" },
  { name: "Docker", icon: "/public/logos/docker-original.svg" },
  { name: "Azure DevOps", icon: "/public/logos/azuredevops-original.svg" },
  { name: "AWS Services", icon: "/public/logos/amazonwebservices-original-wordmark.svg" },
  { name: "Xamarin", icon: "/public/logos/xamarin-original.svg" },
  { name: ".Net", icon: "/public/logos/dot-net-plain-wordmark.svg" },
  { name: "Android", icon: "/public/logos/android-original.svg" },
  { name: "IOS", icon: "/public/logos/apple-original.svg" },
];

export default function SkillsSection() { 
return (
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
); }