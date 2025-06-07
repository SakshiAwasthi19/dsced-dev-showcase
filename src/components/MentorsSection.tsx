
import { Quote, Star } from 'lucide-react'

const MentorsSection = () => {
  const testimonials = [
    {
      name: "Dr. Priya Sharma",
      role: "Senior Software Engineer at Google",
      relationship: "Mentor",
      content: "Sakshi demonstrates exceptional problem-solving skills and a natural aptitude for both frontend and backend development. Her curiosity about AIML is truly impressive.",
      rating: 5,
      image: "https://images.unsplash.com/photo-1494790108755-2616b612b786?w=400&h=400&fit=crop&crop=face"
    },
    {
      name: "Prof. Rajesh Kumar",
      role: "AI Research Professor",
      relationship: "Academic Mentor",
      content: "Her approach to integrating machine learning concepts with practical applications shows great promise. Sakshi is always eager to learn and implement new technologies.",
      rating: 5,
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=400&fit=crop&crop=face"
    },
    {
      name: "Ms. Ananya Patel",
      role: "UI/UX Lead at Zomato",
      relationship: "Industry Mentor",
      content: "Sakshi's design thinking and attention to user experience details are remarkable. She has a great eye for creating intuitive and beautiful interfaces.",
      rating: 5,
      image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=400&h=400&fit=crop&crop=face"
    }
  ]

  return (
    <section id="mentors" className="py-20 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            What <span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">Mentors Say</span>
          </h2>
          <p className="text-xl text-slate-300 max-w-3xl mx-auto">
            Insights and feedback from industry professionals and academic mentors who have guided my journey.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div
              key={testimonial.name}
              className="group bg-slate-800/50 backdrop-blur-sm p-6 rounded-2xl border border-slate-700 hover:border-slate-600 transition-all duration-300 hover:transform hover:scale-105 hover:shadow-2xl"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              {/* Quote Icon */}
              <div className="flex justify-between items-start mb-4">
                <Quote className="w-8 h-8 text-blue-400 opacity-60" />
                <div className="flex space-x-1">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 text-yellow-400 fill-current" />
                  ))}
                </div>
              </div>

              {/* Testimonial Content */}
              <p className="text-slate-300 mb-6 text-sm leading-relaxed italic">
                "{testimonial.content}"
              </p>

              {/* Mentor Info */}
              <div className="flex items-center space-x-4">
                <img
                  src={testimonial.image}
                  alt={testimonial.name}
                  className="w-12 h-12 rounded-full object-cover border-2 border-slate-600"
                />
                <div>
                  <h4 className="text-white font-semibold text-sm">{testimonial.name}</h4>
                  <p className="text-slate-400 text-xs">{testimonial.role}</p>
                  <p className="text-blue-400 text-xs font-medium">{testimonial.relationship}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Call to action */}
        <div className="text-center mt-12">
          <p className="text-slate-400 mb-4">Interested in mentoring or collaborating?</p>
          <button
            onClick={() => {
              const element = document.getElementById('contact')
              if (element) {
                element.scrollIntoView({ behavior: 'smooth' })
              }
            }}
            className="inline-flex items-center space-x-2 bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white px-6 py-3 rounded-full font-semibold transition-all duration-300 transform hover:scale-105"
          >
            <span>Get In Touch</span>
          </button>
        </div>
      </div>
    </section>
  )
}

export default MentorsSection
