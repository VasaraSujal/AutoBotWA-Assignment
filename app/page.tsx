import Header from "@/components/header"
import Hero from "@/components/hero"
import Features from "@/components/features"
import Testimonials from "@/components/testimonials"
import Pricing from "@/components/pricing"
import Footer from "@/components/footer"

export const metadata = {
  title: "TaskFlow - Organize Your Work. Boost Productivity.",
  description: "TaskFlow helps you manage tasks, track progress, and collaborate effortlessly from anywhere.",
}

export default function Home() {
  return (
    <main className="min-h-screen bg-linear-to-b from-white via-slate-50 to-white overflow-x-hidden">
      <div className="fixed inset-0 bg-[radial-gradient(circle_at_top_right,var(--tw-gradient-stops))] from-blue-50 via-transparent to-transparent opacity-40 pointer-events-none"></div>
      <div className="relative z-10">
        <Header />
        <Hero />
        <section id="features">
          <Features />
        </section>
        <section id="testimonials">
          <Testimonials />
        </section>
        <section id="pricing">
          <Pricing />
        </section>
        <Footer />
      </div>
    </main>
  )
}
