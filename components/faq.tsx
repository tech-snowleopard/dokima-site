"use client"

import { motion, useReducedMotion } from "framer-motion"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"

const faqs = [
  {
    question: "How quickly can I start scoring my sales calls?",
    answer:
      "Get first calls scored against your playbook within 5 minutes. Simply connect your call recording tool (Gong, Fireflies, etc.), upload your playbook, and start scoring. Out of the box. No LLM prompting required.",
  },
  {
    question: "How does Dokima.AI learn my playbook?",
    answer:
      "Dokima.AI guides you to upload the different pieces of your sales playbook so that your sales meetings can be correctly scored. You can feed Dokima.AI with additional elements throughout your usage of the product.",
  },
  {
    question: "How does Dokima.AI access my sales meetings?",
    answer:
      "Dokima.AI seamlessly integrates with most popular call recording tools like Gong, Fireflies or telephony systems like Aircall, and lots of others. Scoring can be shared or automatically pushed into Slack, Teams or Google Chat.",
  },
  {
    question: "How does Dokima.AI score my meetings?",
    answer:
      "Dokima.AI has developed inhouse industry specific, expert based AI prompting to ensure application of your sales playbook is correctly evaluated and provides you actionable items for your sales enablement teams.",
  },
  {
    question: "Do I need to build my own LLM prompts?",
    answer:
      "No. Dokima.AI is a ready to be used pre-built application that doesn't require you to build any LLM prompt.",
  },
  {
    question: "What if I don't have any sales playbook?",
    answer:
      "Having a structured sales playbook that sales reps will follow is a best practice of B2B Selling. Contact Dokima.AI and we will connect you to one of our partners to help you build a robust and applicable sales playbook.",
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
          <p className="text-muted-foreground">Everything you need to know about Dokima.AI</p>
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
