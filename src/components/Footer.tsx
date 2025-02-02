import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import { Shield, Mail, Twitter, Facebook, Linkedin } from "lucide-react";

const Footer = () => {
  const [isDark, setIsDark] = useState(false);
  const darkLogo = "https://res.cloudinary.com/dew9g6sk4/image/upload/v1738262858/wgs0fwr1slfujxosmymj.png";
  const lightLogo = "https://res.cloudinary.com/drjjof5zw/image/upload/v1738476888/fern79jmw1lrcjloyxqm.png";

  useEffect(() => {
    const html = document.documentElement;
    const isSystemDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
    setIsDark(isSystemDark);
    isSystemDark ? html.classList.add('dark') : html.classList.remove('dark');
  }, []);

  return (
    <footer className="bg-gray-50 dark:bg-gray-900 border-t">
      <div className="container px-6 py-12 mx-auto">
        <div className="grid grid-cols-1 gap-8 md:grid-cols-4">
          {/* Brand Section */}
          <div className="space-y-4">
            <div className="flex items-center">
              <a href="/" className="flex items-center">
                <img
                  src={isDark ? darkLogo : lightLogo}
                  alt="Satya.AI Logo"
                  className="h-16 w-16 object-contain"
                />
                <span className="ml-3 text-2xl font-bold text-gray-800 dark:text-gray-100">
                  Satya.ai
                </span>
              </a>
            </div>

            <p className="text-gray-600 dark:text-gray-300 text-sm max-w-xs">
              Combating misinformation through advanced AI detection algorithms. Trust in truth.
            </p>
            
            <div className="flex space-x-4 mt-4">
              <Twitter className="h-5 w-5 text-gray-600 hover:text-primary cursor-pointer dark:text-gray-300" />
              <Facebook className="h-5 w-5 text-gray-600 hover:text-primary cursor-pointer dark:text-gray-300" />
              <Linkedin className="h-5 w-5 text-gray-600 hover:text-primary cursor-pointer dark:text-gray-300" />
            </div>
          </div>

          {/* Product Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4 text-gray-800 dark:text-gray-100">Solutions</h3>
            <ul className="space-y-3">
              <li>
                <Link to="/features" className="text-gray-600 hover:text-primary transition-colors dark:text-gray-300">
                  Features
                </Link>
              </li>
              <li>
                <Link to="/demo" className="text-gray-600 hover:text-primary transition-colors dark:text-gray-300">
                  Live Demo
                </Link>
              </li>
              <li>
                <Link to="/api" className="text-gray-600 hover:text-primary transition-colors dark:text-gray-300">
                  API Integration
                </Link>
              </li>
            </ul>
          </div>

          {/* Company Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4 text-gray-800 dark:text-gray-100">Company</h3>
            <ul className="space-y-3">
              <li>
                <Link to="/about" className="text-gray-600 hover:text-primary transition-colors dark:text-gray-300">
                  About Us
                </Link>
              </li>
              <li>
                <Link to="/blog" className="text-gray-600 hover:text-primary transition-colors dark:text-gray-300">
                  Blog
                </Link>
              </li>
              <li>
                <Link to="/contact" className="text-gray-600 hover:text-primary transition-colors dark:text-gray-300">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Newsletter */}
          <div>
            <h3 className="text-lg font-semibold mb-4 text-gray-800 dark:text-gray-100">Stay Updated</h3>
            <div className="flex flex-col space-y-4">
              <p className="text-gray-600 dark:text-gray-300 text-sm">
                Get weekly AI insights and detection updates
              </p>
              
              <div className="flex flex-col sm:flex-row gap-2 w-full">
                <div className="relative flex-1">
                  <input
                    type="email"
                    placeholder="Your email address"
                    className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg sm:rounded-r-none focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent dark:bg-gray-800 placeholder-gray-500 dark:placeholder-gray-400 transition-all"
                  />
                </div>
                
                <button className="px-6 py-3 bg-primary hover:bg-primary-dark text-white rounded-lg sm:rounded-l-none sm:w-auto w-full flex items-center justify-center gap-2 transition-colors dark:bg-gray-800 dark:hover:bg-gray-700">
                  <Mail className="h-5 w-5" stroke="currentColor" />
                  <span className="hidden sm:inline"></span>
                </button>
              </div>

              <p className="text-xs text-gray-500 dark:text-gray-400">
                We respect your privacy. Unsubscribe anytime.
              </p>
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="mt-12 pt-8 border-t border-gray-200 dark:border-gray-700">
          <div className="flex flex-col md:flex-row items-center justify-between">
            <p className="text-gray-600 dark:text-gray-400 text-sm">
              © {new Date().getFullYear()} Satya.ai. All rights reserved.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;