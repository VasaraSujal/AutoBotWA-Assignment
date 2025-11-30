"use client"

import { Menu, X } from "lucide-react"
import { useState } from "react"

export default function Header() {
  const [isOpen, setIsOpen] = useState(false)

  const handleScrollTo = (sectionId: string) => {
    const element = document.getElementById(sectionId)
    if (element) {
      // Update URL hash
      window.history.pushState(null, "", `#${sectionId}`)
      element.scrollIntoView({ behavior: "smooth", block: "start" })
      setIsOpen(false) // Close mobile menu after clicking
    }
  }

  return (
    <header className="sticky top-0 z-50 bg-white/90 backdrop-blur-lg border-b border-slate-200/80 shadow-sm">
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-5 flex items-center justify-between">
        {/* Logo */}
        <div className="flex items-center gap-3">
          <div className="w-9 h-9 bg-linear-to-br from-blue-600 to-blue-500 rounded-xl flex items-center justify-center shadow-md">
            <span className="text-white font-bold text-sm">TF</span>
          </div>
          <span className="font-bold text-xl text-slate-900">TaskFlow</span>
        </div>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center gap-10">
          <button onClick={() => handleScrollTo("features")} className="text-slate-700 hover:text-blue-600 transition-colors font-medium cursor-pointer">
            Features
          </button>
          <button onClick={() => handleScrollTo("pricing")} className="text-slate-700 hover:text-blue-600 transition-colors font-medium cursor-pointer">
            Pricing
          </button>
          <button onClick={() => handleScrollTo("testimonials")} className="text-slate-700 hover:text-blue-600 transition-colors font-medium cursor-pointer">
            Testimonials
          </button>
        </div>

        {/* CTA Buttons */}
        <div className="hidden md:flex items-center gap-4">
          <button className="px-5 py-2.5 text-slate-700 hover:text-slate-900 transition-colors font-medium cursor-pointer">Sign In</button>
          <button className="px-6 py-2.5 bg-blue-600 text-white rounded-xl hover:bg-blue-700 transition-all hover:shadow-lg font-medium cursor-pointer">
            Get Started
          </button>
        </div>

        {/* Mobile Menu Button */}
        <button className="md:hidden p-2 cursor-pointer" onClick={() => setIsOpen(!isOpen)} aria-label="Toggle menu">
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </nav>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-white border-b border-slate-200 px-4 py-4 space-y-3">
          <button onClick={() => handleScrollTo("features")} className="block text-slate-700 hover:text-blue-600 py-2 w-full text-left cursor-pointer">
            Features
          </button>
          <button onClick={() => handleScrollTo("pricing")} className="block text-slate-700 hover:text-blue-600 py-2 w-full text-left cursor-pointer">
            Pricing
          </button>
          <button onClick={() => handleScrollTo("testimonials")} className="block text-slate-700 hover:text-blue-600 py-2 w-full text-left cursor-pointer">
            Testimonials
          </button>
          <button className="w-full px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors cursor-pointer">
            Get Started
          </button>
        </div>
      )}
    </header>
  )
}
