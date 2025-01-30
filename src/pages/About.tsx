import React from 'react';
import { motion } from 'framer-motion';
import { Shield, Brain, Globe } from 'lucide-react';
import Navbar from '@/components/Navbar';

const About = () => {
  const features = [
    {
      icon: Shield,
      title: 'Trusted Verification',
      description: 'Our AI-powered system cross-references information with reliable sources to ensure accuracy.',
    },
    {
      icon: Brain,
      title: 'Advanced AI',
      description: 'State-of-the-art machine learning models trained on vast datasets of verified information.',
    },
    {
      icon: Globe,
      title: 'Global Coverage',
      description: 'Analyze news and information from sources worldwide in multiple languages.',
    },
  ];

  return (
    <div className="min-h-screen relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-white/80 to-gray-100/80 dark:from-gray-900/80 dark:to-black/80 transition-colors duration-300" />
      
      <Navbar />
      
      <div className="relative pt-20 px-4">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold mb-6 bg-gradient-to-r from-pink-500 to-violet-500 bg-clip-text text-transparent">
              About Satya.AI
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
              We're on a mission to combat misinformation and promote truth in the digital age through advanced AI technology.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.2 }}
                className="bg-white/50 dark:bg-gray-800/50 backdrop-blur-lg rounded-lg p-6 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
              >
                <feature.icon className="h-12 w-12 text-purple-600 mb-4" />
                <h3 className="text-xl font-semibold mb-2 dark:text-white">
                  {feature.title}
                </h3>
                <p className="text-gray-600 dark:text-gray-300">
                  {feature.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;