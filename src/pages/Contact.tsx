import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { motion } from "framer-motion";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { CheckCircle, Loader2 } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.2
    }
  }
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 }
};

export default function Contact() {
  const { register, handleSubmit, formState: { isSubmitting } } = useForm();
  const [isSubmitted, setIsSubmitted] = useState(false);

  const onSubmit = async () => {
    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 2000));
    setIsSubmitted(true);
  };

  return (
    <div className="min-h-screen flex items-center justify-center px-4 py-12 relative overflow-hidden">
        <Navbar />
      {/* Animated background elements */}
      <div className="absolute inset-0 -z-10 ">
        <motion.div
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ duration: 1 }}
          className="absolute w-96 h-96 bg-purple-500/10 rounded-full blur-3xl -top-32 -left-32"
        />
        <motion.div
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ duration: 1, delay: 0.2 }}
          className="absolute w-96 h-96 bg-pink-500/10 rounded-full blur-3xl -bottom-32 -right-32"
        />
      </div>

      <div className="container mx-auto max-w-2xl pt-10">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-12"
        >
          <h1 className="text-4xl font-bold mb-4 bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
            Get in Touch
          </h1>
          <p className="text-gray-600 dark:text-gray-400">
            Have questions or suggestions? We'd love to hear from you!
          </p>
        </motion.div>

        {!isSubmitted ? (
          <motion.form
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            onSubmit={handleSubmit(onSubmit)}
            className="space-y-6 bg-white dark:bg-gray-900 p-8 rounded-2xl shadow-xl border border-gray-100 dark:border-gray-800"
          >
            <motion.div variants={itemVariants}>
              <label htmlFor="name" className="block text-sm font-medium mb-2">
                Name
              </label>
              <Input
                id="name"
                placeholder="Your name"
                className="focus:ring-2 focus:ring-purple-500 transition-all"
                {...register("name", { required: true })}
              />
            </motion.div>

            <motion.div variants={itemVariants}>
              <label htmlFor="email" className="block text-sm font-medium mb-2">
                Email
              </label>
              <Input
                id="email"
                type="email"
                placeholder="your@email.com"
                className="focus:ring-2 focus:ring-purple-500 transition-all"
                {...register("email", { required: true })}
              />
            </motion.div>

            <motion.div variants={itemVariants}>
              <label htmlFor="message" className="block text-sm font-medium mb-2">
                Message
              </label>
              <Textarea
                id="message"
                placeholder="Your message..."
                className="min-h-[150px] focus:ring-2 focus:ring-purple-500 transition-all"
                {...register("message", { required: true })}
              />
            </motion.div>

            <motion.div variants={itemVariants}>
              <Button
                type="submit"
                className="w-full h-12 text-lg bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 transition-all"
                disabled={isSubmitting}
              >
                {isSubmitting ? (
                  <Loader2 className="h-5 w-5 animate-spin" />
                ) : (
                  <span className="flex items-center gap-2">
                    Send Message
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-5 w-5"
                      viewBox="0 0 24 24"
                      strokeWidth="2"
                      stroke="currentColor"
                      fill="none"
                    >
                      <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
                      <path d="M10 14l11 -11" />
                      <path d="M21 3l-6.5 18a.55 .55 0 0 1 -1 0l-3.5 -7l-7 -3.5a.55 .55 0 0 1 0 -1l18 -6.5" />
                    </svg>
                  </span>
                )}
              </Button>
            </motion.div>
          </motion.form>
        ) : (
          <motion.div
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            className="text-center p-8 bg-white dark:bg-gray-900 rounded-2xl shadow-xl border border-gray-100 dark:border-gray-800"
          >
            <CheckCircle className="h-16 w-16 text-green-500 mx-auto mb-4" />
            <h2 className="text-2xl font-bold mb-2">Message Sent!</h2>
            <p className="text-gray-600 dark:text-gray-400 mb-4">
              Thank you for reaching out. We'll get back to you soon!
            </p>
            <Button
              onClick={() => setIsSubmitted(false)}
              className="bg-purple-600 hover:bg-purple-700"
            >
              Send Another Message
            </Button>
          </motion.div>
        )}
        
      </div>
      
      
    </div>

    
  );
}

