import { ArrowDown, Github, Linkedin, Mail, Download, BookOpen } from 'lucide-react'
import { Avatar, AvatarImage, AvatarFallback } from '@/components/ui/avatar'
import { useState, useEffect } from 'react'

const Hero = () => {
  const [imageLoaded, setImageLoaded] = useState(false)
  const [showName, setShowName] = useState(false)
  const [showTitle, setShowTitle] = useState(false)
  const [showSubtitle, setShowSubtitle] = useState(false)
  const [showButtons, setShowButtons] = useState(false)
  const [showTagline, setShowTagline] = useState(false)
  const [currentTitleIndex, setCurrentTitleIndex] = useState(0)

  const titles = [
    "Creative Developer",
    "UI/UX Designer", 
    "MERN Stack Developer",
    "Problem Solver",
    "Tech Innovator",
    "Frontend Wizard",
    "AIML Enthusiast"
  ]

  useEffect(() => {
    if (imageLoaded) {
      const timer1 = setTimeout(() => setShowName(true), 300)
      const timer2 = setTimeout(() => setShowTitle(true), 600)
      const timer3 = setTimeout(() => setShowSubtitle(true), 900)
      const timer4 = setTimeout(() => setShowButtons(true), 1200)
      const timer5 = setTimeout(() => setShowTagline(true), 1500)

      return () => {
        clearTimeout(timer1)
        clearTimeout(timer2)
        clearTimeout(timer3)
        clearTimeout(timer4)
        clearTimeout(timer5)
      }
    }
  }, [imageLoaded])

  useEffect(() => {
    if (showTitle) {
      const interval = setInterval(() => {
        setCurrentTitleIndex((prevIndex) => (prevIndex + 1) % titles.length)
      }, 2500)
      
      return () => clearInterval(interval)
    }
  }, [showTitle, titles.length])

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
    const link = document.createElement('a')
    link.href = '/cv.pdf'
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
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left Column - Text Content */}
          <div className="order-2 lg:order-1">
            {/* Personal Greeting */}
            <div className={`mb-6 transition-all duration-700 ${showName ? 'animate-slide-in-left opacity-100' : 'opacity-0'}`}>
              <p className="text-lg md:text-xl text-slate-300 mb-2">Hi, I'm</p>
              <h1 className="text-4xl md:text-5xl xl:text-6xl font-bold mb-4">
                <span className="text-white">Sakshi Awasthi</span>
              </h1>
            </div>
            
            {/* Main Title with Rotating Animation */}
            <h2 className={`text-3xl md:text-4xl xl:text-5xl font-bold mb-6 transition-all duration-700 delay-300 ${showTitle ? 'animate-slide-in-left opacity-100' : 'opacity-0'}`}>
              <span className="bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-transparent animate-gradient inline-block min-h-[1.2em]">
                <span key={currentTitleIndex} className="animate-fade-in">
                  {titles[currentTitleIndex]}
                </span>
              </span>
            </h2>
            
            {/* Subtitle */}
            <p className={`text-lg md:text-xl text-slate-300 mb-8 transition-all duration-700 delay-600 ${showSubtitle ? 'animate-slide-in-left opacity-100' : 'opacity-0'}`}>
              Computer Science & Design student at Dayanand Sagar College of Engineering
            </p>
            
            <div className={`flex flex-col sm:flex-row items-start gap-6 mb-8 transition-all duration-700 delay-900 ${showButtons ? 'animate-slide-in-left opacity-100' : 'opacity-0'}`}>
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
            
            <div className={`flex items-center gap-4 mb-8 transition-all duration-700 delay-1200 ${showButtons ? 'animate-slide-in-left opacity-100' : 'opacity-0'}`}>
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
          </div>

          {/* Right Column - Profile Image */}
          <div className="order-1 lg:order-2 flex flex-col items-center">
            {/* Profile Avatar with slide down animation */}
            <div className="mb-8 animate-slide-in-down">
              <Avatar className="w-48 h-48 md:w-56 md:h-56 xl:w-64 xl:h-64 border-4 border-white/20 shadow-2xl">
                <AvatarImage 
                  src="https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=400&h=400&fit=crop&crop=face" 
                  alt="Sakshi Awasthi" 
                  className="object-cover"
                  onLoad={() => setImageLoaded(true)}
                />
                <AvatarFallback className="text-4xl font-bold bg-gradient-to-br from-blue-500 to-purple-600 text-white">
                  SA
                </AvatarFallback>
              </Avatar>
            </div>

            {/* Design Philosophy - Tagline under image */}
            <p className={`text-base md:text-lg text-slate-400 text-center italic max-w-sm transition-all duration-700 delay-1500 ${showTagline ? 'animate-fade-in opacity-100' : 'opacity-0'}`}>
              "Passionate about blending technology and creativity to solve real-world problems."
            </p>
          </div>
        </div>

        {/* Scroll Down Arrow */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <ArrowDown className="w-8 h-8 text-slate-400" />
        </div>
      </div>
    </section>
  )
}

export default Hero
