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

  const showLightText = isHomePage && !isScrolled;

  return (
    <header
      data-testid="header-main"
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-white/95 backdrop-blur-xl border-b border-gray-200 py-2 md:py-3 shadow-sm"
          : showLightText
          ? "bg-transparent py-3 md:py-5"
          : "bg-white/95 backdrop-blur-xl border-b border-gray-200 py-2 md:py-3"
      }`}
    >
      <div className="container mx-auto px-4 md:px-6 flex items-center justify-between gap-4">
        <Link href="/" data-testid="link-logo">
          <div className="flex items-center gap-2 md:gap-3">
            <div className="w-9 h-9 md:w-10 md:h-10 rounded-md bg-green-street-money flex items-center justify-center">
              <span className="text-white font-bold text-base md:text-lg">GS</span>
            </div>
            <span className={`text-lg md:text-xl font-bold hidden sm:block transition-colors ${
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

        <div className="flex items-center gap-2 md:gap-3">
          <Link href="/apply">
            <Button
              data-testid="button-header-apply"
              size="sm"
              className="bg-green-street-money hover:bg-green-street-luxe text-white font-semibold text-sm px-4 md:px-6"
            >
              <span className="hidden sm:inline">Check Your Rate</span>
              <span className="sm:hidden">Apply</span>
            </Button>
          </Link>

          <button
            data-testid="button-mobile-menu"
            className={`lg:hidden p-2 transition-colors ${
              showLightText ? "text-white" : "text-gray-600 hover:text-gray-900"
            }`}
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
      </div>

      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.2 }}
            className="lg:hidden fixed inset-0 top-[52px] bg-white z-40"
          >
            <nav className="container mx-auto px-4 py-6 flex flex-col gap-1">
              {navItems.map((item, index) => (
                <motion.div
                  key={item.href}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.05 }}
                >
                  <Link
                    href={item.href}
                    data-testid={`link-mobile-${item.label.toLowerCase().replace(/\s+/g, "-")}`}
                  >
                    <div
                      className={`flex items-center py-4 px-4 rounded-xl transition-colors ${
                        location === item.href
                          ? "bg-green-street-money/10 text-green-street-money"
                          : "text-gray-700 active:bg-gray-100"
                      }`}
                    >
                      <span className="text-lg font-medium">
                        {item.label}
                      </span>
                    </div>
                  </Link>
                </motion.div>
              ))}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 }}
                className="mt-6"
              >
                <Link href="/apply">
                  <Button
                    data-testid="button-mobile-apply"
                    className="bg-green-street-money hover:bg-green-street-luxe text-white font-semibold w-full py-6 text-lg rounded-xl"
                  >
                    Check Your Rate
                  </Button>
                </Link>
              </motion.div>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
