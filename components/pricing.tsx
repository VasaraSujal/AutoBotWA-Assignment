import { Check } from "lucide-react"

const plans = [
  {
    name: "Basic",
    description: "Perfect for individuals and small teams",
    price: "$29",
    period: "per month",
    features: [
      "Up to 10 projects",
      "Basic task management",
      "Team collaboration (3 members)",
      "Email support",
      "2GB storage",
    ],
    cta: "Start Free Trial",
    highlighted: false,
  },
  {
    name: "Pro",
    description: "Ideal for growing teams",
    price: "$79",
    period: "per month",
    features: [
      "Unlimited projects",
      "Advanced task scheduling",
      "Team collaboration (25 members)",
      "Priority support",
      "100GB storage",
      "Custom workflows",
      "Analytics & reports",
    ],
    cta: "Start Free Trial",
    highlighted: true,
  },
  {
    name: "Enterprise",
    description: "For large organizations",
    price: "Custom",
    period: "contact sales",
    features: [
      "Everything in Pro",
      "Unlimited team members",
      "Advanced security",
      "Dedicated support",
      "Unlimited storage",
      "API access",
      "SSO & custom integrations",
    ],
    cta: "Contact Sales",
    highlighted: false,
  },
]

export default function Pricing() {
  return (
    <section id="pricing" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 md:py-32">
      <div className="text-center mb-20">
        <div className="inline-block px-4 py-2 bg-blue-50 border border-blue-100 rounded-full mb-6">
          <span className="text-sm font-semibold text-blue-700">PRICING</span>
        </div>
        <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-slate-900 mb-6 tracking-tight">Flexible Pricing for Everyone</h2>
        <p className="text-lg md:text-xl text-slate-600 max-w-3xl mx-auto leading-relaxed">
          Choose the perfect plan for your needs. All plans include a 14-day free trial.
        </p>
      </div>

      <div className="grid md:grid-cols-3 gap-8 lg:gap-10 items-start">
        {plans.map((plan, index) => (
          <div
            key={index}
            className={`rounded-2xl border transition-all duration-300 ${
              plan.highlighted
                ? "border-blue-600 bg-white shadow-2xl md:scale-105 md:ring-2 md:ring-blue-600 md:ring-offset-4"
                : "border-slate-200 bg-white hover:border-slate-300 hover:shadow-xl"
            } p-8 relative`}
          >
            {plan.highlighted && (
              <div className="absolute -top-5 left-1/2 -translate-x-1/2">
                <div className="px-4 py-2 bg-linear-to-r from-blue-600 to-blue-500 text-white text-sm font-bold rounded-full shadow-lg">
                  Most Popular
                </div>
              </div>
            )}

            <div className="text-center mb-8">
              <h3 className="text-2xl font-bold text-slate-900 mb-2">{plan.name}</h3>
              <p className="text-slate-600 text-sm">{plan.description}</p>
            </div>

            {/* Pricing */}
            <div className="text-center mb-8 pb-8 border-b border-slate-100">
              <div className="flex items-baseline justify-center gap-2">
                <span className="text-5xl font-bold text-slate-900">{plan.price}</span>
                {plan.period !== "contact sales" && <span className="text-slate-600">/{plan.period.replace("per ", "")}</span>}
              </div>
              {plan.period === "contact sales" && <span className="text-slate-600 text-sm">{plan.period}</span>}
            </div>

            {/* CTA Button */}
            <button
              className={`w-full py-4 px-4 rounded-xl font-semibold transition-all mb-8 ${
                plan.highlighted
                  ? "bg-blue-600 text-white hover:bg-blue-700 shadow-lg hover:shadow-xl hover:scale-105"
                  : "bg-slate-100 text-slate-900 hover:bg-slate-200 hover:shadow-md"
              }`}
            >
              {plan.cta}
            </button>

            {/* Features */}
            <div className="space-y-4">
              {plan.features.map((feature, i) => (
                <div key={i} className="flex items-start gap-3">
                  <div className="w-5 h-5 rounded-full bg-green-100 flex items-center justify-center shrink-0 mt-0.5">
                    <Check size={14} className="text-green-600" />
                  </div>
                  <span className="text-slate-700 text-sm">{feature}</span>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>

      {/* FAQ Note */}
      <div className="mt-20 text-center p-8 bg-linear-to-r from-slate-50 to-blue-50 rounded-2xl border border-slate-200">
        <p className="text-slate-700 text-lg">
          Have questions?{" "}
          <a href="#" className="text-blue-600 hover:text-blue-700 font-semibold underline underline-offset-4">
            Check our FAQ
          </a>{" "}
          or{" "}
          <a href="#contact" className="text-blue-600 hover:text-blue-700 font-semibold underline underline-offset-4">
            contact our sales team
          </a>
        </p>
      </div>
    </section>
  )
}
