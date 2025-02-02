import React from 'react';
import { Card } from "@/components/ui/card";
import { Shield, Brain, Globe, Clock, Lock, BarChart } from "lucide-react";
import { motion } from "framer-motion";
import Navbar from "@/components/Navbar";

const features = [
  {
    icon: Shield,
    title: "Advanced AI Analysis",
    description: "State-of-the-art AI algorithms analyze content patterns and writing style to detect potential misinformation.",
    color: "from-purple-500 to-pink-500"
  },
  {
    icon: Brain,
    title: "Machine Learning",
    description: "Our system continuously learns from new data to improve accuracy and adapt to emerging misinformation tactics.",
    color: "from-blue-500 to-cyan-500"
  },
  {
    icon: Globe,
    title: "Cross-Reference Sources",
    description: "Automatically checks against multiple trusted sources to verify information authenticity.",
    color: "from-green-500 to-emerald-500"
  },
  {
    icon: Clock,
    title: "Real-time Results",
    description: "Get instant credibility scores and detailed analysis reports within seconds.",
    color: "from-orange-500 to-red-500"
  },
  {
    icon: Lock,
    title: "Privacy First",
    description: "Your data is encrypted and protected. We never store sensitive information.",
    color: "from-indigo-500 to-violet-500"
  },
  {
    icon: BarChart,
    title: "Detailed Reports",
    description: "Comprehensive analysis reports with credibility scores and source verification.",
    color: "from-yellow-500 to-amber-500"
  }
];

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
      delayChildren: 0.3
    }
  }
};

const item = {
  hidden: { opacity: 0, y: 50, scale: 0.8 },
  show: { 
    opacity: 1, 
    y: 0, 
    scale: 1,
    transition: { type: "spring", stiffness: 100 }
  },
  hover: { y: -10, scale: 1.05 }
};

export default function Features() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white dark:from-gray-900 dark:to-gray-950">
      <Navbar />
      
      <div className="container mx-auto px-4 py-16 pt-18">
        {/* Animated Background Elements */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          {[...Array(20)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute bg-purple-500/10 rounded-full blur-lg"
              initial={{
                scale: 0,
                x: Math.random() * 100 - 50,
                y: Math.random() * 100 - 50
              }}
              animate={{
                scale: 1,
                x: Math.random() * 100 - 50,
                y: Math.random() * 100 - 50,
                transition: {
                  duration: 2 + Math.random() * 5,
                  repeat: Infinity,
                  repeatType: "mirror"
                }
              }}
              style={{
                width: `${Math.random() * 50 + 20}px`,
                height: `${Math.random() * 50 + 20}px`,
              }}
            />
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="text-center mb-16 relative z-10"
        >
          <motion.div
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            className="inline-block mb-6"
          >
          </motion.div>
          <h1 className="text-5xl font-bold mb-4 bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
            Powerful Features
          </h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Discover the cutting-edge technology powering our AI-driven truth verification system
          </p>
        </motion.div>

        <motion.div
          variants={container}
          initial="hidden"
          animate="show"
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 relative z-10"
        >
          {features.map((feature, index) => (
            <motion.div 
              key={index} 
              variants={item}
              whileHover="hover"
              whileTap={{ scale: 0.95 }}
            >
              <Card className="p-6 group relative overflow-hidden border-transparent bg-gradient-to-br from-white/50 to-white/20 dark:from-gray-800/50 dark:to-gray-800/20 backdrop-blur-sm">
                <div className={`absolute inset-0 bg-gradient-to-br ${feature.color} opacity-0 group-hover:opacity-10 transition-opacity`} />
                
                <div className="p-3 mb-4 inline-block rounded-xl bg-gradient-to-br from-purple-100 to-pink-100 dark:from-gray-700 dark:to-gray-800">
                  {React.createElement(feature.icon, { className: "w-8 h-8" })}
                </div>
                
                <h3 className="text-2xl font-bold mb-3 bg-gradient-to-br from-purple-600 to-pink-600 bg-clip-text text-transparent">
                  {feature.title}
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  {feature.description}
                </p>
                
                <div className={`absolute -bottom-4 -right-4 w-24 h-24 bg-gradient-to-br ${feature.color} rounded-full opacity-0 group-hover:opacity-10 transition-opacity`} />
              </Card>
            </motion.div>
          ))}
        </motion.div>

        {/* Floating Animation */}
        <motion.div
          initial={{ y: 0 }}
          animate={{ y: [0, -20, 0] }}
          transition={{ duration: 4, repeat: Infinity }}
          className="text-center mt-16 text-muted-foreground"
        >
          ✨ Trusted by millions worldwide ✨
        </motion.div>
      </div>
    </div>
  );
}
