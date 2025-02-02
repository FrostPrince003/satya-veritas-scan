
import { useState, useRef, useEffect } from 'react';
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { motion } from "framer-motion";
import { Card } from "@/components/ui/card";
import { CheckCircle, AlertTriangle, Info } from "lucide-react";
import Footer from '@/components/Footer';

const GetStarted = () => {
  const [text, setText] = useState('');
  const [isSubmitted, setIsSubmitted] = useState(false);
  const canvasRef = useRef<HTMLCanvasElement>(null);

  // Background animation setup
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

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
      speed: number;
      opacity: number;
    }> = [];

    const createParticles = () => {
      const particleCount = 30;
      for (let i = 0; i < particleCount; i++) {
        particles.push({
          x: Math.random() * canvas.width,
          y: canvas.height + Math.random() * 20,
          size: Math.random() * 3 + 1,
          speed: Math.random() * 1 + 0.5,
          opacity: Math.random() * 0.5 + 0.2,
        });
      }
    };

    createParticles();

    // Animation loop
    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      particles.forEach((particle, index) => {
        particle.y -= particle.speed;

        // Reset particle when it goes off screen
        if (particle.y < -10) {
          particle.y = canvas.height + 10;
          particle.x = Math.random() * canvas.width;
        }

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

  const staticResults = [
    {
      title: "Credibility Score",
      icon: CheckCircle,
      value: "85%",
      description: "This content appears to be mostly factual",
      color: "text-green-500"
    },
    {
      title: "Source Analysis",
      icon: Info,
      value: "Verified Sources",
      description: "Content matches with reliable sources",
      color: "text-blue-500"
    },
    {
      title: "Potential Concerns",
      icon: AlertTriangle,
      value: "Minor",
      description: "Some details may need verification",
      color: "text-yellow-500"
    }
  ];

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitted(true);
  };

  return (
    <div className="min-h-screen relative overflow-hidden">
      <canvas
        ref={canvasRef}
        className="absolute inset-0 -z-10"
        style={{ background: 'transparent' }}
      />
      <div className="absolute inset-0 bg-gradient-to-b from-background/80 to-background/95" />
      
      <div className="relative container mx-auto px-4 py-16">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="max-w-3xl mx-auto"
        >
          <h1 className="text-4xl font-bold text-center mb-8">
            Fact Check Any Content
          </h1>
          
          <form onSubmit={handleSubmit} className="space-y-6">
            <Textarea
              value={text}
              onChange={(e) => setText(e.target.value)}
              placeholder="Paste the article or content you want to fact-check..."
              className="min-h-[200px] bg-background/50 backdrop-blur-sm"
            />
            <Button 
              type="submit"
              className="w-full"
              size="lg"
            >
              Analyze Content
            </Button>
          </form>

          {isSubmitted && (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="mt-12 grid gap-6 md:grid-cols-3"
            >
              {staticResults.map((result, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.2 + index * 0.1 }}
                >
                  <Card className="p-6 bg-background/50 backdrop-blur-sm">
                    <result.icon className={`h-8 w-8 ${result.color} mb-4`} />
                    <h3 className="font-semibold mb-2">{result.title}</h3>
                    <p className={`text-2xl font-bold ${result.color} mb-2`}>
                      {result.value}
                    </p>
                    <p className="text-sm text-muted-foreground">
                      {result.description}
                    </p>
                  </Card>
                </motion.div>
              ))}
            </motion.div>
          )}
        </motion.div>
        <Footer />
      </div>
    </div>
  );
};

export default GetStarted;