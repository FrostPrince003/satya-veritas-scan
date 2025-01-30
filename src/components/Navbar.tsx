import { Button } from "@/components/ui/button";
import { Moon, Sun } from "lucide-react";
import { useEffect, useState } from "react";

const Navbar = () => {
  const [isDark, setIsDark] = useState(true);

  useEffect(() => {
    document.documentElement.classList.add('dark');
  }, []);

  useEffect(() => {
    if (isDark) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [isDark]);

  return (
    <nav className="fixed top-0 w-full backdrop-blur-lg bg-white/50 dark:bg-black/50 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20"> {/* Increased navbar height */}
          <div className="flex items-center">
            <a href="/" className="flex items-center">
              <img 
                src="https://res.cloudinary.com/dew9g6sk4/image/upload/v1738262858/wgs0fwr1slfujxosmymj.png" // Use public directory path
                alt="Satya.AI Logo" 
                className="h-50 w-48 object-contain brightness-125 contrast-125 dark:brightness-100 dark:contrast-100" // Optimized size and visibility
              />
            </a>
          </div>
          <div className="flex items-center gap-6">
            <a href="/about" className="text-gray-700 dark:text-gray-200 hover:text-gray-900 dark:hover:text-white transition-colors">
              About Us
            </a>
            <a href="/fact-check" className="text-gray-700 dark:text-gray-200 hover:text-gray-900 dark:hover:text-white transition-colors">
              Fact Check
            </a>
            <Button variant="outline" className="ml-4">
              Login
            </Button>
            <Button
              variant="ghost"
              size="icon"
              onClick={() => setIsDark(!isDark)}
              className="ml-2"
            >
              {isDark ? <Sun className="h-5 w-5" /> : <Moon className="h-5 w-5" />}
            </Button>
          </div>
        </div>
      </div>
    </nav>
  );
};
export default Navbar;