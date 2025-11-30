import { Star } from "lucide-react"

const testimonials = [
  {
    name: "Sarah Chen",
    role: "Product Manager at TechCorp",
    avatar: "/professional-woman-diverse.png",
    rating: 5,
    feedback:
      "TaskFlow transformed how our team collaborates. Tasks are organized, deadlines are met, and everyone stays on the same page. Highly recommend!",
  },
  {
    name: "Marcus Johnson",
    role: "CEO at StartupXYZ",
    avatar: "/professional-man.jpg",
    rating: 5,
    feedback:
      "The best productivity tool we've invested in. Our project completion rates increased by 40% after switching to TaskFlow.",
  },
  {
    name: "Emma Rodriguez",
    role: "Designer at CreativeStudio",
    avatar: "/creative-professional-woman.png",
    rating: 5,
    feedback:
      "Simple, intuitive, and powerful. TaskFlow makes project management feel effortless. It's now essential to our workflow.",
  },
]

export default function Testimonials() {
  return (
    <section
      id="testimonials"
      className="bg-linear-to-b from-slate-50 to-white py-24 md:py-32"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-20">
          <div className="inline-block px-4 py-2 bg-linear-to-r from-blue-50 to-indigo-50 border border-blue-200 rounded-full mb-6 shadow-sm">
            <span className="text-sm font-semibold text-blue-700 tracking-wide">💬 TESTIMONIALS</span>
          </div>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-slate-900 mb-6 tracking-tight">
            Loved by
            <span className="bg-linear-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent"> Teams Worldwide</span>
          </h2>
          <p className="text-lg md:text-xl text-slate-600 max-w-3xl mx-auto leading-relaxed">
            Join thousands of teams who trust TaskFlow for their productivity needs
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 lg:gap-10">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="relative bg-white/90 backdrop-blur-sm p-8 rounded-2xl border border-slate-200 hover:border-blue-200 hover:shadow-2xl hover:shadow-blue-100/50 transition-all duration-500 hover:-translate-y-2 group"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="absolute inset-0 bg-linear-to-br from-blue-50/50 via-transparent to-indigo-50/50 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              
              <div className="relative">
                {/* Rating */}
                <div className="flex gap-1 mb-6">
                  {Array.from({ length: testimonial.rating }).map((_, i) => (
                    <Star 
                      key={i} 
                      size={20} 
                      className="fill-yellow-400 text-yellow-400 transform group-hover:scale-110 transition-transform"
                      style={{ transitionDelay: `${i * 0.05}s` }}
                    />
                  ))}
                </div>

                {/* Quote mark */}
                <div className="absolute -top-2 -left-2 text-6xl text-blue-100 font-serif leading-none group-hover:text-blue-200 transition-colors">"</div>
                
                {/* Feedback */}
                <p className="text-slate-700 mb-8 leading-relaxed text-lg relative">{testimonial.feedback}</p>

                {/* Author */}
                <div className="flex items-center gap-4 pt-6 border-t border-slate-100">
                  <div className="relative">
                    <div className="absolute inset-0 bg-linear-to-br from-blue-400 to-indigo-400 rounded-full blur-sm opacity-0 group-hover:opacity-50 transition-opacity"></div>
                    <img
                      src={testimonial.avatar || "/placeholder.svg"}
                      alt={testimonial.name}
                      className="relative w-14 h-14 rounded-full bg-linear-to-br from-blue-100 to-indigo-100 object-cover ring-2 ring-slate-100 group-hover:ring-blue-200 transition-all"
                    />
                  </div>
                  <div>
                    <p className="font-bold text-slate-900 group-hover:text-blue-600 transition-colors">{testimonial.name}</p>
                    <p className="text-sm text-slate-600 mt-0.5">{testimonial.role}</p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
