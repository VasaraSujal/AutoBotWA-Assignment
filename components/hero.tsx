import { ArrowRight, Play, CheckCircle2, Zap, Shield } from "lucide-react"

export default function Hero() {
  return (
    <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-24 pb-20 md:pt-32 md:pb-24 relative">
      <div className="grid md:grid-cols-2 gap-12 lg:gap-16 items-center">
        {/* Left Content */}
        <div className="space-y-8 animate-[fadeIn_0.8s_ease-out]">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-linear-to-r from-blue-50 to-indigo-50 border border-blue-200 rounded-full shadow-sm hover:shadow-md transition-shadow">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-blue-600"></span>
            </span>
            <span className="text-sm font-semibold text-blue-700">Trusted by 10,000+ teams worldwide</span>
          </div>
          
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-slate-900 leading-[1.1] tracking-tight">
            Organize Your Work.
            <br />
            <span className="relative inline-block">
              <span className="bg-linear-to-r from-blue-600 via-blue-500 to-indigo-500 bg-clip-text text-transparent">Boost Productivity.</span>
              <span className="absolute -bottom-2 left-0 w-full h-1 bg-linear-to-r from-blue-600 to-indigo-500 rounded-full opacity-30"></span>
            </span>
          </h1>

          <p className="text-xl text-slate-600 leading-relaxed max-w-xl">
            TaskFlow helps you manage tasks, track progress, and collaborate effortlessly from anywhere.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 pt-2">
            <button className="group relative px-8 py-4 bg-linear-to-r from-blue-600 to-blue-500 text-white rounded-xl font-semibold hover:from-blue-700 hover:to-blue-600 transition-all hover:shadow-xl hover:shadow-blue-500/50 hover:scale-105 flex items-center justify-center gap-2 overflow-hidden">
              <span className="absolute inset-0 w-full h-full bg-linear-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-700"></span>
              <span className="relative">Get Started</span>
              <ArrowRight size={20} className="relative group-hover:translate-x-1 transition-transform" />
            </button>
            <button className="group px-8 py-4 bg-white border-2 border-slate-200 text-slate-900 rounded-xl font-semibold hover:border-blue-300 hover:bg-blue-50 hover:shadow-lg transition-all flex items-center justify-center gap-2">
              <div className="w-5 h-5 rounded-full bg-blue-100 flex items-center justify-center group-hover:bg-blue-600 transition-colors">
                <Play size={12} className="fill-blue-600 text-blue-600 group-hover:fill-white group-hover:text-white transition-colors" />
              </div>
              Watch Demo
            </button>
          </div>

          {/* Trust Indicators */}
          <div className="pt-8 grid grid-cols-3 gap-8">
            <div className="group cursor-default">
              <div className="flex items-center gap-2 mb-2">
                <div className="w-8 h-8 rounded-lg bg-blue-100 flex items-center justify-center group-hover:bg-blue-600 transition-colors">
                  <CheckCircle2 size={16} className="text-blue-600 group-hover:text-white transition-colors" />
                </div>
              </div>
              <p className="text-2xl font-bold text-slate-900 mb-1">10,000+</p>
              <p className="text-sm text-slate-600">Active teams</p>
            </div>
            <div className="group cursor-default">
              <div className="flex items-center gap-2 mb-2">
                <div className="w-8 h-8 rounded-lg bg-yellow-100 flex items-center justify-center group-hover:bg-yellow-400 transition-colors">
                  <Zap size={16} className="text-yellow-600 group-hover:text-white transition-colors" />
                </div>
              </div>
              <p className="text-2xl font-bold text-slate-900 mb-1">4.9★</p>
              <p className="text-sm text-slate-600">User rating</p>
            </div>
            <div className="group cursor-default">
              <div className="flex items-center gap-2 mb-2">
                <div className="w-8 h-8 rounded-lg bg-green-100 flex items-center justify-center group-hover:bg-green-600 transition-colors">
                  <Shield size={16} className="text-green-600 group-hover:text-white transition-colors" />
                </div>
              </div>
              <p className="text-2xl font-bold text-slate-900 mb-1">99.9%</p>
              <p className="text-sm text-slate-600">Uptime</p>
            </div>
          </div>
        </div>

        {/* Right Mockup */}
        <div className="relative mt-8 md:mt-0 animate-[fadeIn_1s_ease-out_0.3s_backwards]">
          <div className="absolute -inset-4 bg-linear-to-r from-blue-600 via-indigo-600 to-blue-600 rounded-3xl opacity-20 blur-3xl animate-pulse"></div>
          <div className="relative bg-linear-to-br from-blue-50 via-indigo-50 to-blue-50 rounded-2xl p-2 border border-blue-200/60 shadow-2xl backdrop-blur-sm hover:shadow-blue-200/50 hover:scale-[1.02] transition-all duration-500">
            <div className="rounded-xl overflow-hidden bg-white">
              <img src="/taskflow-productivity-dashboard-interface.jpg" alt="TaskFlow Dashboard" className="w-full h-auto" />
            </div>
          </div>
          {/* Floating elements for visual interest */}
          <div className="absolute -top-6 -right-6 w-24 h-24 bg-linear-to-br from-blue-400 to-blue-200 rounded-full opacity-30 blur-2xl animate-[float_6s_ease-in-out_infinite]"></div>
          <div className="absolute -bottom-6 -left-6 w-32 h-32 bg-linear-to-br from-indigo-400 to-indigo-200 rounded-full opacity-30 blur-2xl animate-[float_8s_ease-in-out_infinite]"></div>
          <div className="absolute top-1/2 -right-8 w-20 h-20 bg-linear-to-br from-purple-400 to-purple-200 rounded-full opacity-20 blur-xl animate-[float_7s_ease-in-out_infinite_reverse]"></div>
        </div>
      </div>
    </section>
  )
}
