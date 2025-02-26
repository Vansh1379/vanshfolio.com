import  { useState, useEffect } from 'react';

interface TechItem {
  abbr: string;
  name: string;
}

interface TechCategory {
  title: string;
  icon: string;
  items: TechItem[];
  bubbleClass: string;
  gradient: string;
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
  color: string;
}

const TechCompo = () => {
  const [animate, setAnimate] = useState(false);
  const [activeCategory, setActiveCategory] = useState<string>("Frontend");
  
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
      bubbleClass: "bg-blue-100 text-blue-600",
      gradient: "from-blue-500 to-indigo-600",
      items: [
          { abbr: "Js", name: "JavaScript" },
          { abbr: "Re", name: "React" },
          { abbr: "Nx", name: "Next.js" },
          { abbr: "Tw", name: "Tailwind" },
          { abbr: "Sc", name: "Shadcn UI" },
          { abbr: "Ts", name: "Typescript" },
          { abbr: "Ht", name: "HTML5" },
          { abbr: "Cs", name: "CSS3" },
      ]
    },
    {
      title: "Backend",
      icon: "⚙️",
      bubbleClass: "bg-green-100 text-green-600",
      gradient: "from-green-500 to-emerald-600",
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
      bubbleClass: "bg-red-100 text-red-600",
      gradient: "from-red-500 to-rose-600",
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
      bubbleClass: "bg-purple-100 text-purple-600",
      gradient: "from-purple-500 to-violet-600",
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
      text: "Started with the MERN stack (MongoDB, Express, React, Node.js) back in 2020. Built my first e-commerce app with it!",
      color: "border-blue-400 bg-blue-50"
    },
    {
      emoji: "🔥",
      title: "Current Favorite",
      text: "Next.js + TypeScript + Tailwind CSS with Prisma for database interactions. It's my go-to for fast, type-safe web development.",
      color: "border-green-400 bg-green-50"
    },
    {
      emoji: "🚀",
      title: "Learning Next",
      text: "Exploring Rust and WebAssembly to build high-performance web applications. Also diving deeper into AI/ML integration.",
      color: "border-purple-400 bg-purple-50"
    }
  ];

  const activeCategoryData = techCategories.find(cat => cat.title === activeCategory) || techCategories[0];

  return (
    <div className="mx-40 max-w-4xl py-16 px-6  min-h-screen ">
    <span className="text-4xl">🧑‍💻</span>
    <div className='mb-10'>
    <h1 className="text-3xl font-bold text-gray-700 font-sans mt-1 mb-10">Techstack I have been working with</h1>
    </div>
      <div className="mb-16 ">
        <div className="flex flex-wrap gap-2 mb-6 ">
          {techCategories.map((category) => (
            <button
              key={category.title}
              onClick={() => setActiveCategory(category.title)}
              className={`px-4 py-2 rounded-full text-sm font-medium transition-all ${
                activeCategory === category.title 
                  ? `bg-gradient-to-r ${category.gradient} text-white shadow-md`
                  : 'bg-white text-gray-700 hover:bg-gray-100'
              }`}
            >
              <span className="mr-2">{category.icon}</span>
              {category.title}
            </button>
          ))}
        </div>
        
        {/* Active Category Display */}
        <div className="bg-white rounded-2xl shadow-md p-8 transform transition-all duration-500">
          <div className="flex justify-between items-center mb-6">
            <div>
              <h3 className="text-2xl font-bold text-gray-800 flex items-center">
                <span className="mr-3 text-3xl">{activeCategoryData.icon}</span>
                {activeCategoryData.title}
              </h3>
              <p className={`text-sm mt-1 ${activeCategoryData.title === 'Frontend' ? 'text-blue-600' : 
                            activeCategoryData.title === 'Backend' ? 'text-green-600' : 
                            activeCategoryData.title === 'Database' ? 'text-red-600' : 'text-purple-600'}`}>
                {activeCategoryData.items.length} technologies
              </p>
            </div>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
            {activeCategoryData.items.map((item) => (
              <div 
                key={item.name} 
                className={`flex items-center gap-3 p-3 rounded-lg transition-all hover:bg-gray-50`}
              >
                <div className={`w-10 h-10 rounded-lg ${activeCategoryData.bubbleClass} flex items-center justify-center font-semibold shadow-sm`}>
                  {item.abbr}
                </div>
                <span className="font-medium text-gray-700">{item.name}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
      
      {/* Skills Section */}
      <div className="mb-16">
        <h2 className="text-2xl font-bold text-gray-800 mb-6">Tech Proficiency</h2>
        <div className="bg-white rounded-2xl shadow-md p-8">
          <div className="grid gap-8">
            {skills.map((skill) => (
              <div key={skill.name} className="flex flex-col gap-3">
                <div className="flex justify-between items-center">
                  <div>
                    <h3 className="font-semibold text-base text-gray-800">{skill.name}</h3>
                    <p className="text-sm text-gray-500">{skill.level}</p>
                  </div>
                  <div className="bg-gray-200 text-gray-800 px-3 py-1 rounded-full text-sm font-medium">
                    {skill.percentage}%
                  </div>
                </div>
                <div className="h-3 bg-gray-100 rounded-full overflow-hidden">
                  <div 
                    className={`h-full rounded-full transition-all duration-1500 ease-out ${skill.color}`} 
                    style={{ 
                      width: animate ? `${skill.percentage}%` : '0%',
                      boxShadow: animate ? '0 0 10px rgba(0,0,0,0.1)' : 'none' 
                    }}
                  ></div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
      
      {/* Facts Section */}
      <div>
        <h2 className="text-2xl font-bold text-gray-800 mb-6">Tech Journey Highlights</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {facts.map((fact, index) => (
            <div 
              key={fact.title} 
              className={`rounded-2xl shadow-md p-6 border-l-4 ${fact.color} hover:shadow-lg transition-all duration-300 transform ${
                animate ? `translate-y-0 opacity-100` : `translate-y-8 opacity-0`
              }`}
              style={{ transitionDelay: `${index * 150}ms` }}
            >
              <div className="text-4xl mb-3">{fact.emoji}</div>
              <h3 className="font-bold text-lg text-gray-800 mb-2">{fact.title}</h3>
              <p className="text-gray-600 leading-relaxed">{fact.text}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default TechCompo;