import { motion } from "framer-motion";
import { Card } from "@/components/ui/card";
import Navbar from '@/components/Navbar';
import { FileText, Brain, CheckCircle, BarChart } from "lucide-react";
import Footer from "@/components/Footer";

const steps = [
  {
    icon: FileText,
    title: "Submit Content",
    description: "Paste your article text or enter the URL of the news article you want to verify."
  },
  {
    icon: Brain,
    title: "AI Analysis",
    description: "Our advanced AI model analyzes the content using multiple verification techniques."
  },
  {
    icon: CheckCircle,
    title: "Source Verification",
    description: "The system cross-references the information with trusted and reliable sources."
  },
  {
    icon: BarChart,
    title: "Get Results",
    description: "Receive a detailed credibility report with sources and confidence scores."
  }
];

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.3
    }
  }
};

const item = {
  hidden: { opacity: 0, x: -20 },
  show: { opacity: 1, x: 0 }
};

export default function HowItWorks() {
  return (
    <div className="container mx-auto px-4 py-16 pt-32">
    <Navbar />
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="text-center mb-16"
      >
        <h1 className="text-4xl font-bold mb-4">How It Works</h1>
        <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
          Our AI-powered system makes it easy to verify the credibility of any news article
          in just a few simple steps.
        </p>
      </motion.div>

      <motion.div
        variants={container}
        initial="hidden"
        animate="show"
        className="max-w-4xl mx-auto"
      >
        {steps.map((step, index) => (
          <motion.div key={index} variants={item}>
            <Card className="p-6 mb-8 hover:shadow-lg transition-shadow">
              <div className="flex items-start space-x-6">
                <div className="flex-shrink-0">
                  <step.icon className="w-12 h-12 text-primary" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-2">
                    Step {index + 1}: {step.title}
                  </h3>
                  <p className="text-muted-foreground">{step.description}</p>
                </div>
              </div>
            </Card>
          </motion.div>
        ))}
      </motion.div>
      <Footer />
    </div>
  );
}