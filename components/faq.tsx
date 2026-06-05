"use client"

import { motion, useReducedMotion } from "framer-motion"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"

const faqs = [
  {
    question: "How quickly can I start scoring my sales calls?",
    answer:
      "Most teams have their first calls scored within 30 minutes. Simply connect your call recording tool (Gong, Chorus, etc.), configure your playbook criteria, and start scoring. No coding required.",
  },
  {
    question: "Can SalesScore AI integrate with my existing tools?",
    answer:
      "Yes! SalesScore AI integrates with popular call recording tools like Gong, Chorus, and Salesloft, plus CRMs like Salesforce and HubSpot. Results are delivered via Slack, Teams, or directly in your CRM.",
  },
  {
    question: "What methodologies does SalesScore AI support?",
    answer:
      "SalesScore AI supports BANT, MEDDIC, SPIN Selling, and custom playbook criteria. Our 25+ AI Agents analyze sales deck delivery, demo scripts, ICP qualification, persona matching, and competitive handling.",
  },
  {
    question: "How does SalesScore AI learn my playbook?",
    answer:
      "SalesScore AI uses your sales playbook documentation, demo scripts, and qualification criteria to configure custom scoring models. The AI continuously improves based on your feedback and coaching inputs.",
  },
  {
    question: "Is my sales data secure?",
    answer:
      "Absolutely. SalesScore AI is SOC 2 Type II certified and GDPR compliant. All call data is encrypted at rest and in transit. We never use your data to train models for other customers.",
  },
]

export function FAQ() {
  const shouldReduceMotion = useReducedMotion()

  return (
    <section className="relative py-24 lg:py-32 border-t border-border">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={shouldReduceMotion ? {} : { opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl sm:text-4xl font-bold tracking-display mb-4">
            Frequently asked <span className="text-gradient-lime">questions</span>
          </h2>
          <p className="text-muted-foreground">Everything you need to know about SalesScore AI</p>
        </motion.div>

        <motion.div
          initial={shouldReduceMotion ? {} : { opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.1 }}
        >
          <Accordion type="single" collapsible className="space-y-4">
            {faqs.map((faq, index) => (
              <AccordionItem
                key={index}
                value={`item-${index}`}
                className="border border-border rounded-xl px-6 bg-card/30"
              >
                <AccordionTrigger className="text-left text-foreground hover:text-primary hover:no-underline py-5">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground pb-5">{faq.answer}</AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </motion.div>
      </div>
    </section>
  )
}
