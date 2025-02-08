import { Button } from "@/components/ui/button";
import { Moon, Sun, Download } from "lucide-react";
import { useEffect, useState } from "react";
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip";
import { useNavigate } from "react-router-dom";

const Navbar = () => {
  const [isDark, setIsDark] = useState(true);
  const navigate = useNavigate();

  useEffect(() => {
    document.documentElement.classList.add("dark");
  }, []);

  useEffect(() => {
    if (isDark) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [isDark]);

  const darkLogo =
    "https://res.cloudinary.com/dew9g6sk4/image/upload/v1738262858/wgs0fwr1slfujxosmymj.png";
  const lightLogo =
    "https://res.cloudinary.com/drjjof5zw/image/upload/v1738476888/fern79jmw1lrcjloyxqm.png";

  return (
    <nav className="fixed top-0 w-full backdrop-blur-lg bg-white/50 dark:bg-black/50 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo Section */}
          <div className="flex items-center">
            <a href="/" className="flex items-center">
              <img
                src={isDark ? darkLogo : lightLogo}
                alt="Satya.AI Logo"
                className="h-40 w-50 object-contain brightness-125 contrast-125 dark:brightness-100 dark:contrast-100"
              />
            </a>
          </div>

          {/* Navigation Links and Buttons */}
          <div className="flex items-center gap-6">
            <a
              href="/how-it-works"
              className="text-gray-700 dark:text-gray-200 hover:text-gray-900 dark:hover:text-white transition-colors"
            >
              How It Works
            </a>
            <a
              href="/features"
              className="text-gray-700 dark:text-gray-200 hover:text-gray-900 dark:hover:text-white transition-colors"
            >
              Features
            </a>
            <a
              href="/explore" // Added Explore Link
              className="text-gray-700 dark:text-gray-200 hover:text-gray-900 dark:hover:text-white transition-colors"
            >
              Explore
            </a>
            <a
              href="/fact-check"
              className="text-gray-700 dark:text-gray-200 hover:text-gray-900 dark:hover:text-white transition-colors"
            >
              Fact Check
            </a>
            <a
              href="/about"
              className="text-gray-700 dark:text-gray-200 hover:text-gray-900 dark:hover:text-white transition-colors"
            >
              About Us
            </a>
            <a
              href="/contact"
              className="text-gray-700 dark:text-gray-200 hover:text-gray-900 dark:hover:text-white transition-colors"
            >
              Contact Us
            </a>
            <Button
              variant="outline"
              className="ml-4"
              onClick={() => navigate("/login")}
            >
              Login
            </Button>

            {/* Chrome Extension Download Button */}
            <TooltipProvider>
              <Tooltip>
                <TooltipTrigger asChild>
                  <Button
                    variant="ghost"
                    size="icon"
                    className="ml-2"
                    onClick={() =>
                      window.open("https://chrome.google.com/webstore", "_blank")
                    }
                  >
                    <Download className="h-5 w-5" />
                  </Button>
                </TooltipTrigger>
                <TooltipContent>
                  <p>Download Chrome Extension</p>
                </TooltipContent>
              </Tooltip>
            </TooltipProvider>

            {/* Theme Toggle Button */}
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