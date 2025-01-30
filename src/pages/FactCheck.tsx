import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Search, AlertCircle } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Textarea } from '@/components/ui/textarea';
import Navbar from '@/components/Navbar';
import { useToast } from '@/components/ui/use-toast';

const FactCheck = () => {
  const [text, setText] = useState('');
  const [isChecking, setIsChecking] = useState(false);
  const { toast } = useToast();

  const handleCheck = async () => {
    if (!text.trim()) {
      toast({
        title: "Empty Input",
        description: "Please enter some text to fact-check.",
        variant: "destructive",
      });
      return;
    }

    setIsChecking(true);
    // Simulate API call
    setTimeout(() => {
      toast({
        title: "Analysis Complete",
        description: "This is a placeholder for the actual AI analysis result.",
      });
      setIsChecking(false);
    }, 2000);
  };

  return (
    <div className="min-h-screen relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-white/80 to-gray-100/80 dark:from-gray-900/80 dark:to-black/80 transition-colors duration-300" />
      
      <Navbar />
      
      <div className="relative pt-20 px-4">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-12"
          >
            <h2 className="text-4xl font-bold mb-6 bg-gradient-to-r from-pink-500 to-violet-500 bg-clip-text text-transparent">
              Fact Checker
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-300">
              Enter any news article, social media post, or claim to verify its credibility.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="space-y-4"
          >
            <Textarea
              placeholder="Enter text to fact-check..."
              className="min-h-[200px] bg-white/50 dark:bg-gray-800/50 backdrop-blur-lg"
              value={text}
              onChange={(e) => setText(e.target.value)}
            />
            
            <div className="flex justify-center">
              <Button
                size="lg"
                onClick={handleCheck}
                disabled={isChecking}
                className="group"
              >
                {isChecking ? (
                  <motion.div
                    animate={{ rotate: 360 }}
                    transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
                  >
                    <Search className="mr-2 h-5 w-5" />
                  </motion.div>
                ) : (
                  <Search className="mr-2 h-5 w-5 group-hover:scale-110 transition-transform" />
                )}
                {isChecking ? "Analyzing..." : "Check Facts"}
              </Button>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default FactCheck;