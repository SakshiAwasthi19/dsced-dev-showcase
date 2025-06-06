
import { useState } from 'react'
import { ChevronDown, ChevronUp } from 'lucide-react'

interface SkillCategory {
  title: string
  skills: string[]
  color: string
}

const SkillsSection = () => {
  const [expandedCategory, setExpandedCategory] = useState<string | null>(null)

  const skillCategories: SkillCategory[] = [
    {
      title: "Frontend",
      skills: ["HTML", "CSS", "JavaScript", "React", "Tailwind", "Next.js"],
      color: "from-blue-600 to-cyan-600"
    },
    {
      title: "Backend", 
      skills: ["Node.js", "Express.js", "MongoDB", "MySQL"],
      color: "from-green-600 to-emerald-600"
    },
    {
      title: "Languages",
      skills: ["Python", "JavaScript"],
      color: "from-purple-600 to-violet-600"
    },
    {
      title: "ML Tools",
      skills: ["scikit-learn", "pandas", "numpy", "matplotlib"],
      color: "from-pink-600 to-rose-600"
    },
    {
      title: "Version Control & Deployment",
      skills: ["Git", "GitHub", "Vercel", "Netlify"],
      color: "from-orange-600 to-amber-600"
    },
    {
      title: "UI/UX",
      skills: ["Figma", "Canva"],
      color: "from-indigo-600 to-blue-600"
    },
    {
      title: "Others",
      skills: ["APIs", "Postman"],
      color: "from-slate-600 to-gray-600"
    }
  ]

  const toggleCategory = (title: string) => {
    setExpandedCategory(expandedCategory === title ? null : title)
  }

  return (
    <div className="space-y-4">
      {skillCategories.map((category, index) => (
        <div 
          key={category.title}
          className="bg-slate-800/50 backdrop-blur-sm rounded-xl border border-slate-700 overflow-hidden transition-all duration-300 hover:border-slate-600"
          style={{ animationDelay: `${index * 0.1}s` }}
        >
          <button
            onClick={() => toggleCategory(category.title)}
            className="w-full p-4 flex items-center justify-between text-left hover:bg-slate-700/30 transition-colors duration-200"
          >
            <div className="flex items-center space-x-3">
              <div className={`w-3 h-3 rounded-full bg-gradient-to-r ${category.color}`}></div>
              <h3 className="text-lg font-semibold text-white">{category.title}</h3>
              <span className="text-sm text-slate-400">({category.skills.length})</span>
            </div>
            {expandedCategory === category.title ? (
              <ChevronUp className="w-5 h-5 text-slate-400" />
            ) : (
              <ChevronDown className="w-5 h-5 text-slate-400" />
            )}
          </button>
          
          {expandedCategory === category.title && (
            <div className="px-4 pb-4 animate-accordion-down">
              <div className="flex flex-wrap gap-2 pt-2">
                {category.skills.map((skill, skillIndex) => (
                  <span
                    key={skill}
                    className={`px-3 py-1 bg-gradient-to-r ${category.color}/20 text-white rounded-full text-sm font-medium border border-current/30 hover:border-current/60 transition-all duration-200 animate-fade-in`}
                    style={{ animationDelay: `${skillIndex * 0.05}s` }}
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          )}
        </div>
      ))}
    </div>
  )
}

export default SkillsSection
