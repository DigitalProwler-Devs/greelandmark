import { Link, useLocation } from "wouter";
import { Home, HelpCircle, DollarSign, FileText, Info } from "lucide-react";
import { motion } from "framer-motion";

const navItems = [
  { href: "/", label: "Home", icon: Home },
  { href: "/how-it-works", label: "How", icon: FileText },
  { href: "/rates", label: "Rates", icon: DollarSign },
  { href: "/about", label: "About", icon: Info },
  { href: "/faq", label: "FAQ", icon: HelpCircle },
];

export function MobileNav() {
  const [location] = useLocation();

  return (
    <nav 
      className="fixed bottom-0 left-0 right-0 z-50 lg:hidden bg-white/95 backdrop-blur-xl border-t border-gray-200 safe-area-bottom"
      data-testid="nav-mobile-bottom"
    >
      <div className="flex items-center justify-around py-2 px-2">
        {navItems.map((item) => {
          const isActive = location === item.href;
          return (
            <Link key={item.href} href={item.href}>
              <div
                className="flex flex-col items-center py-2 px-3 min-w-[60px]"
                data-testid={`nav-mobile-${item.label.toLowerCase()}`}
              >
                <div className="relative">
                  <item.icon 
                    size={22} 
                    className={`transition-colors ${
                      isActive ? "text-green-street-money" : "text-gray-400"
                    }`} 
                  />
                  {isActive && (
                    <motion.div
                      layoutId="activeTab"
                      className="absolute -bottom-1 left-1/2 -translate-x-1/2 w-1 h-1 bg-green-street-money rounded-full"
                      transition={{ type: "spring", stiffness: 500, damping: 30 }}
                    />
                  )}
                </div>
                <span className={`text-[10px] mt-1 font-medium transition-colors ${
                  isActive ? "text-green-street-money" : "text-gray-400"
                }`}>
                  {item.label}
                </span>
              </div>
            </Link>
          );
        })}
      </div>
    </nav>
  );
}
