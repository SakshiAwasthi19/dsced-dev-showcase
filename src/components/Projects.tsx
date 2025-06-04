
import { ExternalLink, Github, Leaf, Users, CheckSquare, Clock, Star, Code } from 'lucide-react'

const Projects = () => {
  const projects = [
    {
      title: "EcoStep",
      description: "A comprehensive carbon footprint tracker that helps users monitor and reduce their environmental impact through daily activity tracking and personalized recommendations.",
      icon: Leaf,
      color: "from-green-600 to-emerald-600",
      tech: ["React", "Node.js", "MongoDB", "Chart.js"],
      category: "Environmental"
    },
    {
      title: "PointMate",
      description: "An innovative app enabling students to monitor their AICTE points and discover events that offer AICTE points, streamlining academic achievement tracking.",
      icon: Users,
      color: "from-blue-600 to-cyan-600",
      tech: ["React Native", "Firebase", "Express.js"],
      category: "Education"
    },
    {
      title: "TaskMate",
      description: "An interactive and intuitive to-do list application with advanced features like prioritization, deadlines, and progress tracking for enhanced productivity.",
      icon: CheckSquare,
      color: "from-purple-600 to-pink-600",
      tech: ["React", "TypeScript", "Local Storage"],
      category: "Productivity"
    },
    {
      title: "Pomodoro App",
      description: "A beautifully designed Pomodoro timer application that helps users maintain focus and boost productivity through the proven time management technique.",
      icon: Clock,
      color: "from-orange-600 to-red-600",
      tech: ["React", "CSS3", "Web Audio API"],
      category: "Productivity"
    },
    {
      title: "Project Five",
      description: "Coming soon! An exciting new project that's currently in development. Stay tuned for updates on this innovative solution.",
      icon: Star,
      color: "from-indigo-600 to-purple-600",
      tech: ["TBD"],
      category: "In Development"
    },
    {
      title: "Project Six",
      description: "Another exciting project in the pipeline! This will showcase additional skills and technologies in my development journey.",
      icon: Code,
      color: "from-teal-600 to-blue-600",
      tech: ["TBD"],
      category: "In Development"
    }
  ]

  return (
    <section id="projects" className="py-20 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            My <span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">Projects</span>
          </h2>
          <p className="text-xl text-slate-300 max-w-3xl mx-auto">
            Explore my portfolio of innovative applications and solutions that demonstrate my technical skills and problem-solving abilities.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div
              key={project.title}
              className="group bg-slate-800/50 backdrop-blur-sm p-6 rounded-2xl border border-slate-700 hover:border-slate-600 transition-all duration-300 hover:transform hover:scale-105 hover:shadow-2xl"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className={`w-12 h-12 bg-gradient-to-r ${project.color} rounded-lg flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300`}>
                <project.icon className="w-6 h-6 text-white" />
              </div>
              
              <div className="mb-3">
                <span className="text-xs font-medium text-slate-400 uppercase tracking-wider">
                  {project.category}
                </span>
              </div>

              <h3 className="text-xl font-semibold text-white mb-3 group-hover:text-blue-300 transition-colors duration-200">
                {project.title}
              </h3>
              
              <p className="text-slate-300 mb-4 text-sm leading-relaxed">
                {project.description}
              </p>
              
              <div className="flex flex-wrap gap-2 mb-6">
                {project.tech.map((tech) => (
                  <span
                    key={tech}
                    className="px-2 py-1 bg-slate-700/50 text-slate-300 rounded text-xs font-medium"
                  >
                    {tech}
                  </span>
                ))}
              </div>
              
              <div className="flex space-x-3">
                <button className="flex items-center space-x-2 text-slate-400 hover:text-white transition-colors duration-200">
                  <Github className="w-4 h-4" />
                  <span className="text-sm">Code</span>
                </button>
                <button className="flex items-center space-x-2 text-slate-400 hover:text-white transition-colors duration-200">
                  <ExternalLink className="w-4 h-4" />
                  <span className="text-sm">Demo</span>
                </button>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <p className="text-slate-400 mb-6">Want to see more of my work?</p>
          <a
            href="#"
            className="inline-flex items-center space-x-2 bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white px-6 py-3 rounded-full font-semibold transition-all duration-300 transform hover:scale-105"
          >
            <Github className="w-5 h-5" />
            <span>View All on GitHub</span>
          </a>
        </div>
      </div>
    </section>
  )
}

export default Projects
