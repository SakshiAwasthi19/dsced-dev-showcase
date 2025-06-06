
import { GraduationCap, Code, Lightbulb, Target, BookOpen, Users, Heart } from 'lucide-react'
import SkillsSection from './SkillsSection'

const About = () => {
  const coreInterests = [
    {
      title: "Product Development",
      description: "Building end-to-end solutions that solve real problems",
      icon: Code,
      color: "from-blue-600 to-purple-600"
    },
    {
      title: "Problem Solving", 
      description: "Analytical thinking and creative solutions to complex challenges",
      icon: Lightbulb,
      color: "from-purple-600 to-pink-600"
    },
    {
      title: "UI/UX + AIML + Full-Stack",
      description: "Bridging design, intelligence, and robust backend systems",
      icon: Target,
      color: "from-pink-600 to-red-600"
    },
    {
      title: "Real-world Tech Applications",
      description: "Technology that makes a meaningful impact in people's lives",
      icon: Heart,
      color: "from-red-600 to-orange-600"
    }
  ]

  const testimonials = [
    {
      text: "Sakshi demonstrates exceptional problem-solving skills and a keen eye for user experience. Her dedication to learning new technologies is truly inspiring.",
      author: "Dr. Rajesh Kumar",
      role: "Professor, Computer Science Department"
    },
    {
      text: "Her ability to blend technical expertise with creative thinking makes her stand out. Always eager to take on challenging projects.",
      author: "Ms. Priya Sharma",
      role: "Industry Mentor, Tech Solutions"
    },
    {
      text: "Sakshi's passion for AI/ML combined with her full-stack development skills positions her as a well-rounded technologist of the future.",
      author: "Mr. Arjun Patel",
      role: "Senior Developer, Innovation Labs"
    }
  ]

  return (
    <section id="about" className="py-20 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            About <span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">Me</span>
          </h2>
          <p className="text-xl text-slate-300 max-w-3xl mx-auto">
            Passionate about technology and innovation, I'm dedicated to creating solutions that make a difference.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-start mb-16">
          <div className="space-y-6">
            <div className="flex items-start space-x-4">
              <div className="p-3 bg-gradient-to-r from-blue-600 to-purple-600 rounded-lg">
                <GraduationCap className="w-6 h-6 text-white" />
              </div>
              <div>
                <h3 className="text-xl font-semibold text-white mb-2">Education</h3>
                <p className="text-slate-300">
                  Computer Science & Design<br />
                  Dayanand Sagar College of Engineering
                </p>
              </div>
            </div>

            <div className="flex items-start space-x-4">
              <div className="p-3 bg-gradient-to-r from-purple-600 to-pink-600 rounded-lg">
                <Code className="w-6 h-6 text-white" />
              </div>
              <div>
                <h3 className="text-xl font-semibold text-white mb-2">Developer</h3>
                <p className="text-slate-300">
                  Full-stack developer with expertise in modern web technologies and mobile development.
                </p>
              </div>
            </div>

            <div className="flex items-start space-x-4">
              <div className="p-3 bg-gradient-to-r from-pink-600 to-red-600 rounded-lg">
                <Lightbulb className="w-6 h-6 text-white" />
              </div>
              <div>
                <h3 className="text-xl font-semibold text-white mb-2">Innovation</h3>
                <p className="text-slate-300">
                  Always exploring new technologies and methodologies to solve real-world problems.
                </p>
              </div>
            </div>
          </div>

          <div className="bg-slate-800/50 backdrop-blur-sm p-8 rounded-2xl border border-slate-700">
            <h3 className="text-2xl font-semibold text-white mb-6 flex items-center">
              <Target className="w-6 h-6 mr-3 text-blue-400" />
              Technical Skills
            </h3>
            <SkillsSection />
          </div>
        </div>

        {/* Core Interests Section */}
        <div className="mb-16">
          <h3 className="text-3xl font-bold text-white text-center mb-8">
            Core <span className="bg-gradient-to-r from-orange-400 to-red-400 bg-clip-text text-transparent">Interests</span>
          </h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {coreInterests.map((interest, index) => (
              <div 
                key={interest.title}
                className="bg-slate-800/50 backdrop-blur-sm p-6 rounded-xl border border-slate-700 hover:border-slate-600 transition-all duration-300 transform hover:scale-105 group"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className={`p-3 bg-gradient-to-r ${interest.color} rounded-lg mb-4 w-fit group-hover:scale-110 transition-transform duration-300`}>
                  <interest.icon className="w-6 h-6 text-white" />
                </div>
                <h4 className="text-lg font-semibold text-white mb-2">{interest.title}</h4>
                <p className="text-slate-300 text-sm">{interest.description}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Current Focus Section */}
        <div className="mb-16">
          <div className="bg-gradient-to-r from-blue-600/10 to-purple-600/10 backdrop-blur-sm p-8 rounded-2xl border border-blue-500/20">
            <h3 className="text-2xl font-semibold text-white mb-4 flex items-center">
              <BookOpen className="w-6 h-6 mr-3 text-green-400" />
              Current Focus
            </h3>
            <div className="bg-slate-800/50 p-6 rounded-xl">
              <h4 className="text-xl font-semibold bg-gradient-to-r from-green-400 to-blue-400 bg-clip-text text-transparent mb-2">
                AI/ML & Deep Learning
              </h4>
              <p className="text-slate-300">
                Diving deep into machine learning algorithms, neural networks, and their practical applications in web development. 
                Currently exploring computer vision, natural language processing, and building intelligent user interfaces.
              </p>
              <div className="flex flex-wrap gap-2 mt-4">
                {["TensorFlow", "PyTorch", "Computer Vision", "NLP", "Deep Learning"].map((tech) => (
                  <span key={tech} className="px-3 py-1 bg-green-600/20 text-green-300 rounded-full text-sm">
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Testimonials Section */}
        <div>
          <h3 className="text-3xl font-bold text-white text-center mb-8">
            Mentors <span className="bg-gradient-to-r from-yellow-400 to-orange-400 bg-clip-text text-transparent">Say</span>
          </h3>
          <div className="grid md:grid-cols-3 gap-6">
            {testimonials.map((testimonial, index) => (
              <div 
                key={index}
                className="bg-slate-800/50 backdrop-blur-sm p-6 rounded-xl border border-slate-700 hover:border-slate-600 transition-all duration-300 transform hover:scale-105"
                style={{ animationDelay: `${index * 0.2}s` }}
              >
                <div className="flex items-center mb-4">
                  <Users className="w-5 h-5 text-yellow-400 mr-2" />
                  <div className="flex text-yellow-400">
                    {[...Array(5)].map((_, i) => (
                      <span key={i}>⭐</span>
                    ))}
                  </div>
                </div>
                <p className="text-slate-300 mb-4 italic">"{testimonial.text}"</p>
                <div>
                  <p className="text-white font-semibold">{testimonial.author}</p>
                  <p className="text-slate-400 text-sm">{testimonial.role}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

export default About
