"use client"

import { motion, useReducedMotion } from "framer-motion"

const integrations = [
  { name: "Salesloft", letter: "S" },
  { name: "Outreach", letter: "O" },
  { name: "HubSpot", letter: "H" },
  { name: "Salesforce", letter: "S" },
  { name: "Slack", letter: "S" },
  { name: "Teams", letter: "T" },
  { name: "Gong", letter: "G" },
  { name: "Fireflies", letter: "F" },
  { name: "Aircall", letter: "A" },
  { name: "Google Chat", letter: "G" },
]

export function Integrations() {
  const shouldReduceMotion = useReducedMotion()

  return (
    <section className="py-16 lg:py-24 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={shouldReduceMotion ? {} : { opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <p className="text-xs sm:text-sm uppercase tracking-widest text-muted-foreground">
            Leverage your existing call recording applications
          </p>
        </motion.div>

        <div className="relative">
          {/* Gradient masks for smooth fade effect */}
          <div className="absolute left-0 top-0 bottom-0 w-24 sm:w-40 bg-gradient-to-r from-background to-transparent z-10 pointer-events-none" />
          <div className="absolute right-0 top-0 bottom-0 w-24 sm:w-40 bg-gradient-to-l from-background to-transparent z-10 pointer-events-none" />

          {/* Scrolling container */}
          <div className="flex overflow-hidden">
            <motion.div
              className="flex gap-8 sm:gap-12"
              animate={shouldReduceMotion ? {} : { x: ["0%", "-50%"] }}
              transition={{
                x: {
                  repeat: Infinity,
                  repeatType: "loop",
                  duration: 25,
                  ease: "linear",
                },
              }}
            >
              {/* First set */}
              {integrations.map((integration, index) => (
                <div
                  key={`first-${index}`}
                  className="flex items-center gap-3 shrink-0"
                >
                  <div className="w-8 h-8 sm:w-10 sm:h-10 rounded-full bg-muted/50 border border-border/50 flex items-center justify-center">
                    <span className="text-xs sm:text-sm font-medium text-muted-foreground">
                      {integration.letter}
                    </span>
                  </div>
                  <span className="text-sm sm:text-base text-muted-foreground whitespace-nowrap">
                    {integration.name}
                  </span>
                </div>
              ))}
              {/* Duplicate set for seamless loop */}
              {integrations.map((integration, index) => (
                <div
                  key={`second-${index}`}
                  className="flex items-center gap-3 shrink-0"
                >
                  <div className="w-8 h-8 sm:w-10 sm:h-10 rounded-full bg-muted/50 border border-border/50 flex items-center justify-center">
                    <span className="text-xs sm:text-sm font-medium text-muted-foreground">
                      {integration.letter}
                    </span>
                  </div>
                  <span className="text-sm sm:text-base text-muted-foreground whitespace-nowrap">
                    {integration.name}
                  </span>
                </div>
              ))}
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  )
}
