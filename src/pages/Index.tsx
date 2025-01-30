import { Button } from "@/components/ui/button";
import Navbar from "@/components/Navbar";
import { ArrowRight } from "lucide-react";
import { useEffect, useRef } from "react";

const Index = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);

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