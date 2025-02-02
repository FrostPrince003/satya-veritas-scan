import React from 'react';
import { motion } from 'framer-motion';
import { Shield, Brain, Globe, Award } from 'lucide-react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

const About = () => {
  const features = [
    {
      icon: Shield,
      title: 'Trusted Verification',
      description: 'Our AI-powered system cross-references information with reliable sources to ensure accuracy.',
      color: 'from-purple-500 to-pink-500'
    },
    {
      icon: Brain,
      title: 'Advanced AI',
      description: 'State-of-the-art machine learning models trained on vast datasets of verified information.',
      color: 'from-blue-500 to-cyan-500'
    },
    {
      icon: Globe,
      title: 'Global Coverage',
      description: 'Analyze news and information from sources worldwide in multiple languages.',
      color: 'from-green-500 to-emerald-500'
    },
    {
      icon: Award,
      title: "Trust",
      description: "Building a more informed society through reliable news verification.",
      color: 'from-indigo-500 to-violet-500'
    },
  ];

  const teamMembers = [
    { name: 'Kartik Kunjekar', role: 'TY B.Tech CSE AIML', image: '/images/team/member1.jpg' },
    { name: 'Varun Vangar', role: 'TY B.Tech CSE AIML', image: '/images/team/member2.jpg' },
    { name: 'Sarah Lee', role: 'Lead Engineer', image: '/images/team/member3.jpg' },
    { name: 'Alex Kim', role: 'Product Manager', image: '/images/team/member4.jpg' }
  ];

  return (
    <div className="min-h-screen relative overflow-hidden bg-gradient-to-b from-gray-50 to-gray-100 dark:from-gray-900 dark:to-black">
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
            <h2 className="text-4xl pt-10 font-bold mb-6 bg-gradient-to-r from-pink-500 to-violet-500 bg-clip-text text-transparent">
              About Satya.AI
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
              We're on a mission to combat misinformation and promote truth in the digital age through advanced AI technology.
            </p>
          </motion.div>

          {/* Features Grid - 2x2 layout */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto mb-16">
            {features.map((feature, index) => {
              const IconComponent = feature.icon;
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: index * 0.2 }}
                  className="bg-white/50 dark:bg-gray-800/50 backdrop-blur-lg rounded-xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
                >
                  <div className="flex flex-col items-center text-center">
                    <div className={`mb-4 p-4 rounded-full bg-gradient-to-br ${feature.color}`}>
                      <IconComponent className="h-6 w-6 text-white" />
                    </div>
                    <h3 className="text-xl font-semibold mb-2 text-gray-800 dark:text-white">
                      {feature.title}
                    </h3>
                    <p className="text-gray-600 dark:text-gray-300">
                      {feature.description}
                    </p>
                  </div>
                </motion.div>
              )
            })}
          </div>

          {/* Mission Section */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.6 }}
            className="max-w-2xl mx-auto text-center pb-16"
          >
            <h2 className="text-2xl font-semibold mb-4 text-purple-600 dark:text-purple-400">
              Our Mission
            </h2>
            <p className="text-lg text-gray-600 dark:text-gray-300">
              Our mission is to empower users with the tools they need to identify and
              combat misinformation in the digital age. Through advanced AI technology
              and collaboration with trusted sources, we're building a more informed
              and discerning online community.
            </p>
          </motion.div>

          {/* Team Section */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.8 }}
            className="max-w-6xl mx-auto text-center mb-16"
          >
            <h2 className="text-2xl font-semibold mb-4 text-green-600 dark:text-green-400">
              Meet the Team
            </h2>
            <p className="text-lg text-gray-600 dark:text-gray-300 mb-8">
              Our team is made up of passionate third-year students working together to make a positive impact on the digital world.
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
              {teamMembers.map((member, index) => (
                <motion.div
                  key={index}
                  whileHover={{ scale: 1.05 }}
                  className="bg-white/50 dark:bg-gray-800/50 p-6 rounded-xl shadow-lg backdrop-blur-lg"
                >
                  <div className="flex flex-col items-center">
                    <img 
                      src={member.image} 
                      alt={member.name} 
                      className="w-32 h-32 rounded-full object-cover mb-4 border-4 border-white/20 hover:border-indigo-500 transition-all duration-300"
                    />
                    <h3 className="text-xl font-semibold text-gray-800 dark:text-white">{member.name}</h3>
                    <p className="text-gray-600 dark:text-gray-300">{member.role}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Technology Section */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1 }}
            className="max-w-6xl mx-auto text-center pb-16"
          >
            <h2 className="text-2xl font-semibold mb-4 text-indigo-600 dark:text-indigo-400">
              Our Technology
            </h2>
            <p className="text-lg text-gray-600 dark:text-gray-300 mb-8">
              We leverage state-of-the-art technologies and machine learning models to provide the best misinformation detection system.
            </p>
            <div className="flex flex-row justify-center gap-8">
              <motion.div
                whileHover={{ scale: 1.05 }}
                className="text-center p-6 bg-white/50 dark:bg-gray-800/50 rounded-xl backdrop-blur-lg shadow-lg"
              >
                <div className="text-4xl mb-4">🤖</div>
                <h4 className="font-semibold text-gray-800 dark:text-white">AI & Machine Learning</h4>
                <p className="text-gray-600 dark:text-gray-300">Harnessing the power of AI to analyze vast datasets and detect misinformation.</p>
              </motion.div>
              
              <motion.div
                whileHover={{ scale: 1.05 }}
                className="text-center p-6 bg-white/50 dark:bg-gray-800/50 rounded-xl backdrop-blur-lg shadow-lg"
              >
                <div className="text-4xl mb-4">🌍</div>
                <h4 className="font-semibold text-gray-800 dark:text-white">Global Data Sources</h4>
                <p className="text-gray-600 dark:text-gray-300">We gather and process data from global sources in multiple languages.</p>
              </motion.div>
            </div>
          </motion.div>

          </div>
        <Footer />
      </div>

      
    </div>
  );
};

export default About;