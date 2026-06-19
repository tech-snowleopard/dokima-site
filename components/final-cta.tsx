"use client"

import { motion, useReducedMotion } from "framer-motion"
import { ArrowRight } from "lucide-react"
import { Button } from "@/components/ui/button"

export function FinalCTA() {
  const shouldReduceMotion = useReducedMotion()

  return (
    <section className="py-16 lg:py-24 px-4 sm:px-6 lg:px-8">
      <div
        className="relative max-w-5xl mx-auto bg-background rounded-3xl overflow-hidden py-16 lg:py-24 px-6 sm:px-12"
        style={{
          border: "1px dashed",
          borderColor: "rgba(255, 90, 9, 0.4)",
          borderDasharray: "12 8",
        }}
      >
        <div className="relative max-w-3xl mx-auto text-center">
          <motion.div
            initial={shouldReduceMotion ? {} : { opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-display mb-6 text-foreground">
              Ready to score your sales meetings?
            </h2>
            <p className="text-lg text-muted-foreground mb-10 max-w-xl mx-auto">
              Score how well your sales reps apply your company sales playbook in their meetings. AI-powered, pre-built scoring to drive consistent sales playbook execution.
            </p>
            <Button size="xl" rounded="full" className="gap-2 min-w-[200px]">
              Start for free
              <ArrowRight className="w-4 h-4" />
            </Button>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
