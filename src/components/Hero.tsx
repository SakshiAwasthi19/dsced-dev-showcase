
import { ArrowDown, Github, Linkedin, Mail } from 'lucide-react'

const Hero = () => {
  const scrollToProjects = () => {
    const element = document.getElementById('projects')
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
  }

  return (
    <section id="home" className="min-h-screen flex items-center justify-center relative overflow-hidden pt-16">
      {/* Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-purple-500 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse"></div>
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-blue-500 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse"></div>
      </div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
        <div className="animate-fade-in">
          <h1 className="text-5xl md:text-7xl font-bold mb-6">
            <span className="bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
              Engineering
            </span>
            <br />
            <span className="text-white">Student & Developer</span>
          </h1>
          
          <p className="text-xl md:text-2xl text-slate-300 mb-8 max-w-3xl mx-auto">
            Computer Science & Design student at Dayanand Sagar College of Engineering,
            passionate about creating innovative solutions and building impactful applications.
          </p>
          
          <div className="flex flex-col sm:flex-row items-center justify-center gap-6 mb-12">
            <button
              onClick={scrollToProjects}
              className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white px-8 py-3 rounded-full font-semibold transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl"
            >
              View My Projects
            </button>
            
            <div className="flex space-x-4">
              <a href="#" className="p-3 bg-slate-800 hover:bg-slate-700 rounded-full transition-colors duration-200 group">
                <Github className="w-6 h-6 text-slate-300 group-hover:text-white" />
              </a>
              <a href="#" className="p-3 bg-slate-800 hover:bg-slate-700 rounded-full transition-colors duration-200 group">
                <Linkedin className="w-6 h-6 text-slate-300 group-hover:text-white" />
              </a>
              <a href="#" className="p-3 bg-slate-800 hover:bg-slate-700 rounded-full transition-colors duration-200 group">
                <Mail className="w-6 h-6 text-slate-300 group-hover:text-white" />
              </a>
            </div>
          </div>
          
          <div className="animate-bounce">
            <ArrowDown className="w-8 h-8 text-slate-400 mx-auto" />
          </div>
        </div>
      </div>
    </section>
  )
}

export default Hero
