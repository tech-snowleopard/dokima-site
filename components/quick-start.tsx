"use client"

import { useState } from "react"
import { motion, useReducedMotion } from "framer-motion"
import { Copy, Check } from "lucide-react"
import { Button } from "@/components/ui/button"

const codeExamples = {
  CLI: `# Install the SalesScore CLI
  curl https://salesscore.ai/install.sh | bash

# Log in
  salesscore login

# Connect call recording
  salesscore connect --provider gong

# Score a call
  salesscore score --call-id CALL_123

# View scoring results
  salesscore results --call-id CALL_123`,
  "REST API": `# Score a sales call
  curl -X POST https://api.salesscore.ai/v1/score \\
    -H "Authorization: Bearer YOUR_API_KEY" \\
    -H "Content-Type: application/json" \\
    -d '{"call_id": "CALL_123", "playbook": "meddic"}'

# Get scoring results
  curl https://api.salesscore.ai/v1/results/CALL_123 \\
    -H "Authorization: Bearer YOUR_API_KEY"`,
  JavaScript: `import { SalesScore } from '@salesscore/sdk';

const client = new SalesScore({
  apiKey: "YOUR_API_KEY"
});

const result = await client.score({
  callId: "CALL_123",
  playbook: "meddic",
  agents: ["bant", "pitch", "demo"]
});`,
  Python: `import salesscore

client = salesscore.Client(api_key="YOUR_API_KEY")

result = client.score(
    call_id="CALL_123",
    playbook="meddic",
    agents=["bant", "pitch", "demo"]
)`,
}

const tabs = Object.keys(codeExamples) as (keyof typeof codeExamples)[]

export function QuickStart() {
  const [activeTab, setActiveTab] = useState<keyof typeof codeExamples>("CLI")
  const [copied, setCopied] = useState(false)
  const shouldReduceMotion = useReducedMotion()

  const handleCopy = () => {
    navigator.clipboard.writeText(codeExamples[activeTab])
    setCopied(true)
    setTimeout(() => setCopied(false), 2000)
  }

  const renderCodeLine = (line: string, index: number) => {
    const trimmedLine = line.trimStart()
    const indent = line.length - trimmedLine.length
    const indentSpaces = " ".repeat(indent)

    if (trimmedLine.startsWith("#")) {
      return (
        <div key={index} className="whitespace-pre">
          <span className="text-foreground">{trimmedLine}</span>
        </div>
      )
    }

    return (
      <div key={index} className="whitespace-pre">
        <span className="text-primary">
          {indentSpaces}
          {trimmedLine}
        </span>
      </div>
    )
  }

  return (
    <section id="docs" className="relative py-16 sm:py-24 lg:py-32">
      <div className="max-w-4xl mx-auto px-2 sm:px-4 lg:px-8">
        <motion.div
          initial={shouldReduceMotion ? {} : { opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="rounded-xl overflow-hidden border border-primary/30 bg-[#1a1816] shadow-[0_0_30px_rgba(240,98,16,0.1)]"
        >
          <div className="flex items-center gap-2 px-3 sm:px-4 py-3 bg-primary/15 border-b border-primary/20">
            <div className="flex items-center gap-1.5">
              <div className="w-2.5 sm:w-3 h-2.5 sm:h-3 rounded-full bg-red-500" />
              <div className="w-2.5 sm:w-3 h-2.5 sm:h-3 rounded-full bg-yellow-500" />
              <div className="w-2.5 sm:w-3 h-2.5 sm:h-3 rounded-full bg-primary" />
            </div>
            <span className="ml-2 sm:ml-3 text-xs sm:text-sm font-medium text-foreground tracking-wider uppercase">
              Quick Start
            </span>
          </div>

          <div className="flex items-center gap-2 px-3 sm:px-6 py-3 overflow-x-auto">
            {tabs.map((tab) => (
              <Button
                key={tab}
                onClick={() => setActiveTab(tab)}
                size="sm"
                variant={activeTab === tab ? "default" : "secondary"}
                className="uppercase tracking-wide text-[10px] sm:text-xs flex-shrink-0"
              >
                {tab}
              </Button>
            ))}

            <Button
              variant="ghost"
              size="icon-sm"
              onClick={handleCopy}
              className="ml-auto flex-shrink-0"
              aria-label="Copy code"
            >
              {copied ? <Check className="w-4 h-4 text-primary" /> : <Copy className="w-4 h-4" />}
            </Button>
          </div>

          <div className="p-3 sm:p-6 overflow-x-auto">
            <pre className="text-xs sm:text-sm font-mono leading-loose">
              <code>{codeExamples[activeTab].split("\n").map((line, i) => renderCodeLine(line, i))}</code>
            </pre>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
