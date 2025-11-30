import { Users, Bell, Clock, ArrowRight } from "lucide-react"

const features = [
  {
    icon: Users,
    title: "Real-Time Collaboration",
    description:
      "Work together seamlessly with your team. Share tasks, assignments, and updates instantly with real-time sync across all devices.",
  },
  {
    icon: Clock,
    title: "Smart Task Scheduling",
    description:
      "Intelligently organize your workload with smart scheduling. Get AI-powered suggestions for optimal task planning and prioritization.",
  },
  {
    icon: Bell,
    title: "Cloud Sync & Notifications",
    description:
      "Stay updated with smart notifications. Access your tasks anywhere, anytime with automatic cloud synchronization across platforms.",
  },
]

export default function Features() {
  return (
    <section id="features" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 md:py-32 relative">
      {/* Background decoration */}
      <div className="absolute top-1/4 left-0 w-72 h-72 bg-blue-100 rounded-full opacity-10 blur-3xl"></div>
      <div className="absolute bottom-1/4 right-0 w-72 h-72 bg-indigo-100 rounded-full opacity-10 blur-3xl"></div>
      
      <div className="text-center mb-20 relative">
        <div className="inline-block px-4 py-2 bg-linear-to-r from-blue-50 to-indigo-50 border border-blue-200 rounded-full mb-6 shadow-sm">
          <span className="text-sm font-semibold text-blue-700 tracking-wide">✨ FEATURES</span>
        </div>
        <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-slate-900 mb-6 tracking-tight">
          Powerful Features for
          <span className="bg-linear-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent"> Modern Teams</span>
        </h2>
        <p className="text-lg md:text-xl text-slate-600 max-w-3xl mx-auto leading-relaxed">
          Everything you need to manage tasks efficiently and collaborate effectively
        </p>
      </div>

      <div className="grid md:grid-cols-3 gap-8 lg:gap-10 relative">
        {features.map((feature, index) => {
          const Icon = feature.icon
          return (
            <div
              key={index}
              className="relative p-8 bg-white/80 backdrop-blur-sm rounded-2xl border border-slate-200 hover:border-blue-300 hover:shadow-2xl hover:shadow-blue-100/50 transition-all duration-500 group hover:-translate-y-2"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="absolute inset-0 bg-linear-to-br from-blue-50 via-transparent to-indigo-50 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              <div className="absolute top-0 right-0 w-20 h-20 bg-blue-400 rounded-full opacity-0 group-hover:opacity-5 blur-2xl transition-opacity duration-500"></div>
              
              <div className="relative">
                <div className="w-16 h-16 bg-linear-to-br from-blue-500 to-blue-600 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 group-hover:rotate-3 transition-all duration-500 shadow-lg shadow-blue-500/30">
                  <Icon size={28} className="text-white" />
                </div>
                <h3 className="text-xl font-bold text-slate-900 mb-4 group-hover:text-blue-600 transition-colors">{feature.title}</h3>
                <p className="text-slate-600 leading-relaxed">{feature.description}</p>
                <div className="mt-6 flex items-center text-blue-600 font-medium opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                  <span className="text-sm">Learn more</span>
                  <ArrowRight size={16} className="ml-1 group-hover:translate-x-1 transition-transform" />
                </div>
              </div>
            </div>
          )
        })}
      </div>
    </section>
  )
}
