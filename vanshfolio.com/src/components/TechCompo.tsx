import  { useEffect } from 'react';
import { useState } from 'react';


interface TechItem {
    abbr: string;
    name: string;
  }
  
  interface TechCategory {
    title: string;
    icon: string;
    items: TechItem[];
    bubbleClass: string;
  }
  
  interface SkillItem {
    name: string;
    level: string;
    percentage: number;
    color: string;
  }
  
  interface FactItem {
    emoji: string;
    title: string;
    text: string;
  }

const TechCompo = () => {
    
            const [animate, setAnimate] = useState(false);
          
            // Trigger animation after component mounts
            useEffect(() => {
              const timer = setTimeout(() => {
                setAnimate(true);
              }, 300);
              return () => clearTimeout(timer);
            }, []);
          
            // Tech categories data
            const techCategories: TechCategory[] = [
              {
                title: "Frontend",
                icon: "🎨",
                bubbleClass: "bg-blue-50 text-blue-600",
                items: [
                  { abbr: "Ht", name: "HTML5" },
                  { abbr: "Cs", name: "CSS3" },
                  { abbr: "Js", name: "JavaScript" },
                  { abbr: "Re", name: "React" },
                  { abbr: "Nx", name: "Next.js" },
                  { abbr: "Tw", name: "Tailwind" }
                ]
              },
              {
                title: "Backend",
                icon: "⚙️",
                bubbleClass: "bg-green-50 text-green-600",
                items: [
                  { abbr: "No", name: "Node.js" },
                  { abbr: "Ex", name: "Express" },
                  { abbr: "Py", name: "Python" },
                  { abbr: "Dj", name: "Django" },
                  { abbr: "Ts", name: "TypeScript" },
                  { abbr: "Gq", name: "GraphQL" }
                ]
              },
              {
                title: "Database",
                icon: "🗄️",
                bubbleClass: "bg-red-50 text-red-600",
                items: [
                  { abbr: "Mg", name: "MongoDB" },
                  { abbr: "Pg", name: "PostgreSQL" },
                  { abbr: "My", name: "MySQL" },
                  { abbr: "Rd", name: "Redis" },
                  { abbr: "Fb", name: "Firebase" },
                  { abbr: "Pr", name: "Prisma" }
                ]
              },
              {
                title: "DevOps",
                icon: "🚀",
                bubbleClass: "bg-purple-50 text-purple-600",
                items: [
                  { abbr: "Gt", name: "Git" },
                  { abbr: "Gh", name: "GitHub" },
                  { abbr: "Dk", name: "Docker" },
                  { abbr: "Aw", name: "AWS" },
                  { abbr: "Az", name: "Azure" },
                  { abbr: "Vr", name: "Vercel" }
                ]
              }
            ];
    
            const skills: SkillItem[] = [
                { name: "Frontend Development", level: "Advanced", percentage: 90, color: "bg-blue-500" },
                { name: "Backend Development", level: "Proficient", percentage: 85, color: "bg-green-600" },
                { name: "Database Management", level: "Intermediate", percentage: 75, color: "bg-red-600" },
                { name: "DevOps & Deployment", level: "Intermediate", percentage: 70, color: "bg-purple-600" },
                { name: "UI/UX Design", level: "Competent", percentage: 65, color: "bg-orange-500" }
              ];
    
              const facts: FactItem[] = [
                {
                  emoji: "💡",
                  title: "First Stack I Learned",
                  text: "Started with the MERN stack (MongoDB, Express, React, Node.js) back in 2020. Built my first e-commerce app with it!"
                },
                {
                  emoji: "🔥",
                  title: "Current Favorite",
                  text: "Next.js + TypeScript + Tailwind CSS with Prisma for database interactions. It's my go-to for fast, type-safe web development."
                },
                {
                  emoji: "🚀",
                  title: "Learning Next",
                  text: "Exploring Rust and WebAssembly to build high-performance web applications. Also diving deeper into AI/ML integration."
                }
              ];
    return (
        <div className="mx-40 max-w-4xl py-16 px-6  min-h-screen ">
            <span className="text-4xl">🧑‍💻</span>
            <h1 className="text-3xl font-bold text-gray-700 font-sans mt-1">Techstack I have been working with</h1>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
          {techCategories.map((category) => (
            <div key={category.title} className="bg-white rounded-xl shadow-sm p-6 transition-transform hover:-translate-y-1 hover:shadow-md relative overflow-hidden">
              <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-indigo-500 to-purple-600"></div>
              
              <div className="flex justify-between items-center mb-4">
                <h3 className="text-xl font-semibold text-gray-800">{category.title}</h3>
                <div className="text-2xl">{category.icon}</div>
              </div>
              
              <div className="grid grid-cols-2 gap-3">
                {category.items.map((item) => (
                  <div key={item.name} className="flex items-center gap-2">
                    <div className={`w-8 h-8 rounded-full ${category.bubbleClass} flex items-center justify-center font-semibold text-sm`}>
                      {item.abbr}
                    </div>
                    <span className="text-sm text-gray-600">{item.name}</span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
        
        {/* Skills Section */}
        <div className="bg-white rounded-xl shadow-sm p-8 mb-12">
          <h2 className="text-2xl font-semibold mb-6 text-gray-800">Tech Proficiency</h2>
          <div className="grid gap-5">
            {skills.map((skill) => (
              <div key={skill.name} className="flex flex-col gap-2">
                <div className="flex justify-between">
                  <span className="font-medium text-sm">{skill.name}</span>
                  <span className="text-sm text-gray-600">{skill.level}</span>
                </div>
                <div className="h-2 bg-gray-100 rounded-full overflow-hidden">
                  <div className={`h-full rounded-full transition-all duration-1500 ease-in-out ${skill.color}`} style={{ width: animate ? `${skill.percentage}%` : '0%' }}></div>
                </div>
              </div>
            ))}
          </div>
        </div>
        
        {/* Facts Section */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-12">
          {facts.map((fact) => (
            <div key={fact.title} className="bg-white rounded-xl shadow-sm p-6 flex flex-col gap-3 border-l-4 border-indigo-500">
              <div className="text-3xl">{fact.emoji}</div>
              <h3 className="font-semibold text-lg">{fact.title}</h3>
              <p className="text-gray-600 text-sm leading-relaxed">{fact.text}</p>
            </div>
          ))}
        </div>
        </div>
    )
}

export default TechCompo