"use client"

import { motion, useReducedMotion } from "framer-motion"
import { BarChart3, Zap, Users } from "lucide-react"

const benefits = [
  {
    icon: BarChart3,
    title: "Win Ratio Improved",
    description: "Boost your close rate by enforcing playbook execution",
    visual: "chart",
  },
  {
    icon: Zap,
    title: "Ramp-up Accelerated",
    description: "Shorten time to first deal for new joiners by monitoring how they execute the company sales playbook",
    metric: "-40%",
    metricLabel: "ramp time",
  },
  {
    icon: Users,
    title: "People Performance Enriched",
    description: "Incorporate objective scoring of sales behaviors into sales rep performance evaluation",
  },
]

export function Benefits() {
  const shouldReduceMotion = useReducedMotion()

  return (
    <section className="py-16 lg:py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={shouldReduceMotion ? {} : { opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl sm:text-4xl font-bold tracking-display mb-4">
            Why <span className="text-gradient-lime">Dokima.AI</span>
          </h2>
          <p className="text-muted-foreground max-w-xl mx-auto">
            Drive measurable improvements across your sales organization
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-6">
          {benefits.map((benefit, index) => (
            <motion.div
              key={benefit.title}
              initial={shouldReduceMotion ? {} : { opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-card border border-border rounded-2xl p-6 sm:p-8 flex flex-col"
            >
              {/* Icon */}
              <div className="w-10 h-10 rounded-lg bg-muted/50 border border-border/50 flex items-center justify-center mb-6">
                <benefit.icon className="w-5 h-5 text-muted-foreground" />
              </div>

              {/* Title */}
              <h3 className="text-lg sm:text-xl font-semibold text-foreground mb-2">
                {benefit.title}
              </h3>

              {/* Description */}
              <p className="text-sm sm:text-base text-muted-foreground mb-6 flex-1">
                {benefit.description}
              </p>

              {/* Visual elements based on card type */}
              {benefit.visual === "chart" && (
                <div className="mt-auto pt-4">
                  <svg
                    viewBox="0 0 200 60"
                    className="w-full h-16 text-foreground"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <motion.path
                      d="M0 50 L20 45 L40 48 L60 35 L80 38 L100 25 L120 30 L140 20 L160 15 L180 18 L200 10"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      initial={{ pathLength: 0 }}
                      whileInView={{ pathLength: 1 }}
                      viewport={{ once: true }}
                      transition={{ duration: 1.5, delay: 0.3 }}
                    />
                  </svg>
                </div>
              )}

              {benefit.metric && (
                <div className="mt-auto pt-4">
                  <span className="text-primary font-bold text-lg">{benefit.metric}</span>
                  <span className="text-muted-foreground text-sm ml-2">{benefit.metricLabel}</span>
                </div>
              )}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
