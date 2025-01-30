import { Button } from "@/components/ui/button";
import Navbar from "@/components/Navbar";
import { ArrowRight } from "lucide-react";

const Index = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-gray-100 dark:from-gray-900 dark:to-black transition-colors duration-300">
      <Navbar />
      
      <main className="pt-32 pb-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-5xl sm:text-6xl font-bold mb-6 bg-gradient-to-r from-pink-500 to-violet-500 bg-clip-text text-transparent animate-fade-in">
            Welcome to Satya.AI
          </h1>
          
          <h2 className="text-3xl sm:text-4xl font-semibold mb-8 text-gray-800 dark:text-gray-200 animate-fade-in [animation-delay:200ms]">
            Your journey to accurate information starts here!
          </h2>
          
          <p className="text-lg text-gray-600 dark:text-gray-400 mb-12 max-w-2xl mx-auto animate-fade-in [animation-delay:400ms]">
            Satya.AI is an AI-powered platform that verifies news credibility by cross-referencing content with trusted sources, helping users identify misinformation effortlessly.
          </p>
          
          <Button 
            size="lg" 
            className="animate-fade-in [animation-delay:600ms] group"
          >
            Get Started
            <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" />
          </Button>
        </div>
      </main>
    </div>
  );
};

export default Index;