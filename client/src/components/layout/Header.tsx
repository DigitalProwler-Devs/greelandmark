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

  return (
    <header
      data-testid="header-main"
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        isScrolled
          ? "bg-green-street-forest/95 backdrop-blur-xl border-b border-green-street-silver/10 py-3"
          : "bg-transparent py-5"
      }`}
    >
      <div className="container mx-auto px-4 md:px-6 flex items-center justify-between gap-4">
        <Link href="/" data-testid="link-logo">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-md bg-gradient-to-br from-green-street-money to-green-street-luxe flex items-center justify-center">
              <span className="text-white font-bold text-lg">GS</span>
            </div>
            <span className="text-xl font-bold text-green-street-offwhite hidden sm:block">
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
                className={`text-sm font-medium transition-colors link-hover ${
                  location === item.href
                    ? "text-green-street-luxe"
                    : "text-green-street-silver hover:text-green-street-offwhite"
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
              className="btn-gradient text-white font-semibold hidden sm:flex"
            >
              Check Your Rate
            </Button>
          </Link>

          <button
            data-testid="button-mobile-menu"
            className="lg:hidden p-2 text-green-street-silver hover:text-green-street-offwhite transition-colors"
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
            className="lg:hidden bg-green-street-forest/98 backdrop-blur-xl border-t border-green-street-silver/10"
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
                        ? "text-green-street-luxe"
                        : "text-green-street-silver"
                    }`}
                  >
                    {item.label}
                  </span>
                </Link>
              ))}
              <Link href="/apply">
                <Button
                  data-testid="button-mobile-apply"
                  className="btn-gradient text-white font-semibold w-full mt-4"
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
