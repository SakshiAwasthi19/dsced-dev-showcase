
import { ArrowDown, Github, Linkedin, Mail, Download, BookOpen } from 'lucide-react'
import { Avatar, AvatarImage, AvatarFallback } from '@/components/ui/avatar'

const Hero = () => {
  const scrollToProjects = () => {
    const element = document.getElementById('projects')
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
  }

  const scrollToAbout = () => {
    const element = document.getElementById('about')
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
  }

  const downloadCV = () => {
    // Create a temporary link element to trigger download
    const link = document.createElement('a')
    link.href = '/cv.pdf' // You'll need to add your CV file to the public folder
    link.download = 'Sakshi_Awasthi_CV.pdf'
    document.body.appendChild(link)
    link.click()
    document.body.removeChild(link)
  }

  return (
    <section id="home" className="min-h-screen flex items-center justify-center relative overflow-hidden pt-16">
      {/* Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-purple-500 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse"></div>
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-blue-500 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-pink-500 rounded-full mix-blend-multiply filter blur-xl opacity-10 animate-pulse"></div>
      </div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
        <div className="animate-fade-in">
          {/* Profile Avatar */}
          <div className="mb-8 flex justify-center">
            <Avatar className="w-32 h-32 border-4 border-white/20 shadow-2xl">
              <AvatarImage 
                src="https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=300&h=300&fit=crop&crop=face" 
                alt="Sakshi Awasthi" 
                className="object-cover"
              />
              <AvatarFallback className="text-2xl font-bold bg-gradient-to-br from-blue-500 to-purple-600 text-white">
                SA
              </AvatarFallback>
            </Avatar>
          </div>

          {/* Personal Greeting */}
          <div className="mb-6">
            <p className="text-lg md:text-xl text-slate-300 mb-2">Hi, I'm</p>
            <h1 className="text-4xl md:text-6xl font-bold mb-4">
              <span className="text-white">Sakshi Awasthi</span>
            </h1>
          </div>
          
          {/* Main Title with Gradient Animation */}
          <h2 className="text-4xl md:text-6xl font-bold mb-6">
            <span className="bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-transparent animate-pulse">
              Creative Developer
            </span>
          </h2>
          
          {/* Subtitle */}
          <p className="text-xl md:text-2xl text-slate-300 mb-4 max-w-3xl mx-auto">
            Computer Science & Design student at Dayanand Sagar College of Engineering
          </p>

          {/* Design Philosophy */}
          <p className="text-lg md:text-xl text-slate-400 mb-8 max-w-4xl mx-auto italic">
            "Passionate about blending technology and creativity to solve real-world problems."
          </p>
          
          <div className="flex flex-col sm:flex-row items-center justify-center gap-6 mb-8">
            <button
              onClick={scrollToProjects}
              className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white px-8 py-3 rounded-full font-semibold transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl"
            >
              View My Projects
            </button>
            
            <button
              onClick={downloadCV}
              className="flex items-center gap-2 bg-slate-800 hover:bg-slate-700 text-white px-6 py-3 rounded-full font-semibold transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl border border-slate-600"
            >
              <Download className="w-5 h-5" />
              Download CV
            </button>
            
            <button
              onClick={scrollToAbout}
              className="flex items-center gap-2 text-slate-300 hover:text-white px-6 py-3 rounded-full font-semibold transition-all duration-300 border border-slate-600 hover:border-slate-400"
            >
              <BookOpen className="w-5 h-5" />
              Learn More
            </button>
          </div>
          
          <div className="flex items-center justify-center gap-4 mb-12">
            <a 
              href="https://github.com/SakshiAwasthi19" 
              target="_blank" 
              rel="noopener noreferrer"
              className="p-3 bg-slate-800 hover:bg-slate-700 rounded-full transition-colors duration-200 group"
            >
              <Github className="w-6 h-6 text-slate-300 group-hover:text-white" />
            </a>
            <a 
              href="https://www.linkedin.com/in/sakshi-awasthi-43045b265/" 
              target="_blank" 
              rel="noopener noreferrer"
              className="p-3 bg-slate-800 hover:bg-slate-700 rounded-full transition-colors duration-200 group"
            >
              <Linkedin className="w-6 h-6 text-slate-300 group-hover:text-white" />
            </a>
            <a 
              href="mailto:sakshiawasthi00114@gmail.com"
              className="p-3 bg-slate-800 hover:bg-slate-700 rounded-full transition-colors duration-200 group"
            >
              <Mail className="w-6 h-6 text-slate-300 group-hover:text-white" />
            </a>
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
