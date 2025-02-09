"use client"

import { motion } from "framer-motion"
import { AlertCircle, ArrowLeft, Brain, ExternalLink, MessageCircle, Scale, Users, X } from "lucide-react"
import { useState } from "react"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import type { FactCheckData } from "@/components/types"

export default function FactCheckResult({ data }: { data: FactCheckData }) {
  const [expanded, setExpanded] = useState(false)

  // Collect all unique sources
  const allSources = Array.from(
    new Set([
      ...data.political_analyst_agent.sources,
      ...data.media_bias_analyst_agent.sources,
      ...(data.fact_checking_agent.sources || []),
      ...(data.public_sentiment_analyst_agent.sources || []),
    ]),
  ).filter(Boolean)

  const isVerified = !data.verdict_agent.findings.includes("FALSE")

  return (
    <div className="min-h-screen bg-[#0a0b14] text-white p-4 md:p-8">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="max-w-4xl mx-auto space-y-6"
      >
        <Button variant="ghost" className="text-white" onClick={() => window.history.back()}>
          <ArrowLeft className="mr-2 h-4 w-4" />
          Back
        </Button>

        <motion.div initial={{ scale: 0.95 }} animate={{ scale: 1 }} transition={{ delay: 0.2 }}>
          <Card className="bg-[#12141f] border-[#2a2d3d]">
            <CardHeader className="border-b border-[#2a2d3d]">
              <CardTitle className="text-2xl text-center">Final Verdict</CardTitle>
            </CardHeader>
            <CardContent className="p-6">
              <div
                className={`flex items-center justify-center p-4 rounded-lg ${
                  isVerified ? "bg-green-950/50" : "bg-red-950/50"
                }`}
              >
                {isVerified ? (
                  <motion.span
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    className="text-green-400 flex items-center text-xl"
                  >
                    <Scale className="mr-2 h-6 w-6" />
                    Verified
                  </motion.span>
                ) : (
                  <motion.span
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    className="text-red-400 flex items-center text-xl"
                  >
                    <X className="mr-2 h-6 w-6" />
                    Not Verified
                  </motion.span>
                )}
              </div>
            </CardContent>
          </Card>
        </motion.div>

        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.4 }}>
          <Card className="bg-[#12141f] border-[#2a2d3d]">
            <CardHeader>
              <CardTitle>Breakdown</CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="space-y-4">
                <div className="flex items-start gap-4">
                  <AlertCircle className="h-5 w-5 mt-1 text-blue-400" />
                  <div>
                    <h3 className="font-medium mb-1">Factual Accuracy</h3>
                    <p className="text-gray-400 text-sm">{data.fact_checking_agent.conclusion}</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <Brain className="h-5 w-5 mt-1 text-purple-400" />
                  <div>
                    <h3 className="font-medium mb-1">Political Analysis</h3>
                    <p className="text-gray-400 text-sm">{data.political_analyst_agent.conclusion}</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <Scale className="h-5 w-5 mt-1 text-yellow-400" />
                  <div>
                    <h3 className="font-medium mb-1">Media Bias</h3>
                    <p className="text-gray-400 text-sm">{data.media_bias_analyst_agent.conclusion}</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <Users className="h-5 w-5 mt-1 text-green-400" />
                  <div>
                    <h3 className="font-medium mb-1">Public Sentiment</h3>
                    <p className="text-gray-400 text-sm">{data.public_sentiment_analyst_agent.conclusion}</p>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </motion.div>

        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.6 }}>
          <Card className="bg-[#12141f] border-[#2a2d3d]">
            <CardHeader>
              <CardTitle>Detailed Analysis</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <p className="text-gray-400">{data.verdict_agent.findings}</p>
                {!expanded && (
                  <Button variant="ghost" className="text-blue-400" onClick={() => setExpanded(true)}>
                    Show More
                    <MessageCircle className="ml-2 h-4 w-4" />
                  </Button>
                )}
                {expanded && (
                  <motion.div
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: "auto" }}
                    className="text-gray-400"
                  >
                    <p className="mb-4">{data.summary_agent.main_conclusion}</p>
                  </motion.div>
                )}
              </div>
            </CardContent>
          </Card>
        </motion.div>

        {allSources.length > 0 && (
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.8 }}>
            <Card className="bg-[#12141f] border-[#2a2d3d]">
              <CardHeader>
                <CardTitle className="flex items-center">
                  <ExternalLink className="mr-2 h-5 w-5" />
                  Source Links
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-2">
                  {allSources.map((source, index) => (
                    <a
                      key={index}
                      href={source}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="block text-blue-400 hover:text-blue-300 transition-colors"
                    >
                      {source}
                    </a>
                  ))}
                </div>
              </CardContent>
            </Card>
          </motion.div>
        )}
      </motion.div>
    </div>
  )
}

