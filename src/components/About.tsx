
import { GraduationCap, Code, Lightbulb, Target } from 'lucide-react'

const About = () => {
  const skills = [
    'React', 'TypeScript', 'JavaScript', 'Python', 'Node.js', 'Express.js',
    'MongoDB', 'PostgreSQL', 'Git', 'Docker', 'AWS', 'Tailwind CSS'
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

        <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
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
            <div className="flex flex-wrap gap-3">
              {skills.map((skill, index) => (
                <span
                  key={skill}
                  className="px-4 py-2 bg-gradient-to-r from-blue-600/20 to-purple-600/20 text-blue-300 rounded-full text-sm font-medium border border-blue-400/30 hover:border-blue-400/60 transition-colors duration-200"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default About
