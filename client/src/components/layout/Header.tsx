import { useState, useEffect } from "react";
import { Link, useLocation } from "wouter";
import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const navItems = [
  { href: "/", label: "Home" },
  { href: "/how-it-works", label: "How It Works" },
  { href: "/rates", label: "Rates" },
  { href: "/about", label: "About" },
  { href: "/faq", label: "FAQ" },
];

export function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [location] = useLocation();

  // Check if we're on the home page (hero has dark background)
  const isHomePage = location === "/";

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    setIsMobileMenuOpen(false);
  }, [location]);

  // Determine text colors based on scroll state and page
  const showLightText = isHomePage && !isScrolled;

  return (
    <header
      data-testid="header-main"
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        isScrolled
          ? "bg-white/95 backdrop-blur-xl border-b border-gray-200 py-3 shadow-sm"
          : showLightText
          ? "bg-transparent py-5"
          : "bg-white/95 backdrop-blur-xl border-b border-gray-200 py-3"
      }`}
    >
      <div className="container mx-auto px-4 md:px-6 flex items-center justify-between gap-4">
        <Link href="/" data-testid="link-logo">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-md bg-green-street-money flex items-center justify-center">
              <span className="text-white font-bold text-lg">GS</span>
            </div>
            <span className={`text-xl font-bold hidden sm:block transition-colors ${
              showLightText ? "text-white" : "text-gray-900"
            }`}>
              Green Street Capital
            </span>
          </div>
        </Link>

        <nav className="hidden lg:flex items-center gap-8">
          {navItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              data-testid={`link-nav-${item.label.toLowerCase().replace(/\s+/g, "-")}`}
            >
              <span
                className={`text-sm font-medium transition-colors ${
                  location === item.href
                    ? "text-green-street-money"
                    : showLightText
                    ? "text-white/80 hover:text-white"
                    : "text-gray-600 hover:text-gray-900"
                }`}
              >
                {item.label}
              </span>
            </Link>
          ))}
        </nav>

        <div className="flex items-center gap-3">
          <Link href="/apply">
            <Button
              data-testid="button-header-apply"
              className="bg-green-street-money hover:bg-green-street-luxe text-white font-semibold hidden sm:flex"
            >
              Check Your Rate
            </Button>
          </Link>

          <button
            data-testid="button-mobile-menu"
            className={`lg:hidden p-2 transition-colors ${
              showLightText ? "text-white" : "text-gray-600 hover:text-gray-900"
            }`}
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="lg:hidden bg-white border-t border-gray-200"
          >
            <nav className="container mx-auto px-4 py-6 flex flex-col gap-4">
              {navItems.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  data-testid={`link-mobile-${item.label.toLowerCase().replace(/\s+/g, "-")}`}
                >
                  <span
                    className={`block py-2 text-lg font-medium transition-colors ${
                      location === item.href
                        ? "text-green-street-money"
                        : "text-gray-600"
                    }`}
                  >
                    {item.label}
                  </span>
                </Link>
              ))}
              <Link href="/apply">
                <Button
                  data-testid="button-mobile-apply"
                  className="bg-green-street-money hover:bg-green-street-luxe text-white font-semibold w-full mt-4"
                >
                  Check Your Rate
                </Button>
              </Link>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
