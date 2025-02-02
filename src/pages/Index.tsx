import { Button } from "@/components/ui/button";
import Navbar from "@/components/Navbar";
import { ArrowRight } from "lucide-react";
import { useEffect, useRef } from "react";
import { useNavigate } from "react-router-dom";



const Index = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const navigate = useNavigate();

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    // Set canvas size
    const setCanvasSize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };
    setCanvasSize();
    window.addEventListener('resize', setCanvasSize);

    // Particle configuration
    const particles: Array<{
      x: number;
      y: number;
      size: number;
      speedX: number;
      speedY: number;
      opacity: number;
    }> = [];

    const createParticles = () => {
      const particleCount = 50;
      for (let i = 0; i < particleCount; i++) {
        particles.push({
          x: Math.random() * canvas.width,
          y: Math.random() * canvas.height,
          size: Math.random() * 2 + 1,
          speedX: (Math.random() - 0.5) * 0.5,
          speedY: (Math.random() - 0.5) * 0.5,
          opacity: Math.random() * 0.5 + 0.2,
        });
      }
    };

    createParticles();

    // Animation loop
    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      particles.forEach((particle) => {
        particle.x += particle.speedX;
        particle.y += particle.speedY;

        // Wrap particles around screen
        if (particle.x < 0) particle.x = canvas.width;
        if (particle.x > canvas.width) particle.x = 0;
        if (particle.y < 0) particle.y = canvas.height;
        if (particle.y > canvas.height) particle.y = 0;

        // Draw particle
        ctx.beginPath();
        ctx.arc(particle.x, particle.y, particle.size, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(147, 51, 234, ${particle.opacity})`;
        ctx.fill();
      });

      requestAnimationFrame(animate);
    };

    animate();

    return () => {
      window.removeEventListener('resize', setCanvasSize);
    };
  }, []);

  return (
    <div className="min-h-screen relative overflow-hidden">
      <canvas
        ref={canvasRef}
        className="absolute inset-0 -z-10"
        style={{ background: 'transparent' }}
      />
      <div className="absolute inset-0 bg-gradient-to-b from-white/80 to-gray-100/80 dark:from-gray-900/80 dark:to-black/80 transition-colors duration-300" />
      
      <Navbar />
      
      <main className="relative pt-32 pb-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          {/* Hero Section */}
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
            className="animate-fade-in [animation-delay:600ms] group transition-all duration-300 hover:bg-purple-600"
            onClick={() => navigate('/login')}
          >
            Get Started
            <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" />
          </Button>

          {/* Statistics Section */}
          <div className="mt-24 animate-fade-in [animation-delay:800ms]">
            <h3 className="text-2xl font-bold mb-8 text-gray-800 dark:text-gray-200">
              The Misinformation Crisis
            </h3>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-12">
              <div className="p-4 bg-white dark:bg-gray-800 rounded-lg shadow-sm">
                <div className="text-3xl font-bold text-purple-600">76%</div>
                <div className="text-sm text-gray-600 dark:text-gray-400">of fake news goes undetected</div>
              </div>
              <div className="p-4 bg-white dark:bg-gray-800 rounded-lg shadow-sm">
                <div className="text-3xl font-bold text-pink-500">10M+</div>
                <div className="text-sm text-gray-600 dark:text-gray-400">fake articles daily</div>
              </div>
              <div className="p-4 bg-white dark:bg-gray-800 rounded-lg shadow-sm">
                <div className="text-3xl font-bold text-blue-500">6×</div>
                <div className="text-sm text-gray-600 dark:text-gray-400">faster spread than real news</div>
              </div>
              <div className="p-4 bg-white dark:bg-gray-800 rounded-lg shadow-sm">
                <div className="text-3xl font-bold text-green-500">92%</div>
                <div className="text-sm text-gray-600 dark:text-gray-400">accuracy rate</div>
              </div>
            </div>
          </div>

          {/* <div className="relative w-full h-[400px] mt-12">
            <div className="absolute w-full -bottom-20 h-72 md:h-full z-10">
              <World data={sampleArcs} globeConfig={globeConfig} />
            </div>
            <div className="absolute w-full bottom-0 inset-x-0 h-40 bg-gradient-to-b pointer-events-none select-none from-transparent dark:to-black to-white z-40" />
          </div> */}

          {/* How It Works Section */}
          <div className="mt-16 animate-fade-in [animation-delay:1000ms]">
            <h3 className="text-2xl font-bold mb-8 text-gray-800 dark:text-gray-200">
              How We Protect You
            </h3>
            <div className="grid md:grid-cols-3 gap-8 text-left">
              <div className="p-6 bg-white dark:bg-gray-800 rounded-lg shadow-sm">
                <div className="text-purple-500 text-2xl mb-4">🔍</div>
                <h4 className="font-semibold mb-2">AI-Powered Analysis</h4>
                <p className="text-gray-600 dark:text-gray-400 text-sm">
                  Advanced NLP algorithms dissect content structure, sentiment, and linguistic patterns
                </p>
              </div>
              <div className="p-6 bg-white dark:bg-gray-800 rounded-lg shadow-sm">
                <div className="text-purple-500 text-2xl mb-4">🌐</div>
                <h4 className="font-semibold mb-2">Cross-Source Verification</h4>
                <p className="text-gray-600 dark:text-gray-400 text-sm">
                  Real-time checking against 500+ trusted news sources and databases
                </p>
              </div>
              <div className="p-6 bg-white dark:bg-gray-800 rounded-lg shadow-sm">
                <div className="text-purple-500 text-2xl mb-4">📊</div>
                <h4 className="font-semibold mb-2">Credibility Scoring</h4>
                <p className="text-gray-600 dark:text-gray-400 text-sm">
                  Clear 1-100 rating system with detailed breakdowns
                </p>
              </div>
            </div>
          </div>

          {/* Trust Section */}
          <div className="mt-24 animate-fade-in [animation-delay:1200ms]">
            <h3 className="text-2xl font-bold mb-8 text-gray-800 dark:text-gray-200">
              Trusted By Leading Organizations
            </h3>
            <div className="flex flex-wrap justify-center gap-8 opacity-75">
              <span className="text-gray-600 dark:text-gray-300 font-medium">Reuters Fact Check</span>
              <span className="text-gray-600 dark:text-gray-300 font-medium">World Health Organization</span>
              <span className="text-gray-600 dark:text-gray-300 font-medium">UNESCO</span>
            </div>
          </div>

          {/* CTA Section */}
          <div className="mt-24 animate-fade-in [animation-delay:1400ms]">
            <h3 className="text-2xl font-bold mb-4 text-gray-800 dark:text-gray-200">
              Ready to See Through the Noise?
            </h3>
            <p className="text-gray-600 dark:text-gray-400 mb-8 max-w-xl mx-auto">
              Join thousands of informed users making smarter decisions daily
            </p>
            <Button 
              size="lg" 
              className="group transition-all duration-300 hover:bg-purple-600"
              onClick={() => navigate('/login')}
            >
              Start Verifying Now
              <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" />
            </Button>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Index;
