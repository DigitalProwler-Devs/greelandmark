import { Link } from "wouter";
import { MessageCircle, Mail, MapPin, Phone, Shield, Lock } from "lucide-react";

const quickLinks = [
  { href: "/how-it-works", label: "How It Works" },
  { href: "/about", label: "About Us" },
  { href: "/faq", label: "FAQ" },
  { href: "/rates", label: "Rates & Terms" },
  { href: "/apply", label: "Apply Now" },
];

const legalLinks = [
  { href: "#", label: "Terms of Service" },
  { href: "#", label: "Privacy Policy" },
  { href: "#", label: "Accessibility" },
];

export function Footer() {
  return (
    <footer data-testid="footer-main" className="bg-green-street-forest border-t border-green-street-silver/10">
      <div className="container mx-auto px-4 md:px-6 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          <div className="space-y-6">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-md bg-gradient-to-br from-green-street-money to-green-street-luxe flex items-center justify-center">
                <span className="text-white font-bold text-lg">GS</span>
              </div>
              <span className="text-xl font-bold text-green-street-offwhite">
                Green Street Capital
              </span>
            </div>
            <p className="text-green-street-muted text-sm leading-relaxed">
              Capital for the ambitious. Fast, flexible funding solutions for businesses that move.
            </p>
            <div className="flex items-center gap-4">
              <div className="flex items-center gap-2 text-green-street-silver text-xs">
                <Lock size={14} />
                <span>256-bit SSL</span>
              </div>
              <div className="flex items-center gap-2 text-green-street-silver text-xs">
                <Shield size={14} />
                <span>Bank-Level Security</span>
              </div>
            </div>
          </div>

          <div>
            <h4 className="text-green-street-offwhite font-semibold mb-6 text-sm uppercase tracking-wider">
              Quick Links
            </h4>
            <ul className="space-y-3">
              {quickLinks.map((link) => (
                <li key={link.href}>
                  <Link href={link.href} data-testid={`link-footer-${link.label.toLowerCase().replace(/\s+/g, "-")}`}>
                    <span className="text-green-street-muted hover:text-green-street-luxe transition-colors text-sm">
                      {link.label}
                    </span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-green-street-offwhite font-semibold mb-6 text-sm uppercase tracking-wider">
              Contact
            </h4>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <MapPin size={18} className="text-green-street-luxe flex-shrink-0 mt-0.5" />
                <span className="text-green-street-muted text-sm">
                  480 NE 31st Street<br />Miami, FL 33173
                </span>
              </li>
              <li className="flex items-center gap-3">
                <Mail size={18} className="text-green-street-luxe flex-shrink-0" />
                <a
                  href="mailto:info@greenstreetcapital.io"
                  className="text-green-street-muted hover:text-green-street-luxe transition-colors text-sm"
                  data-testid="link-footer-email"
                >
                  info@greenstreetcapital.io
                </a>
              </li>
              <li className="flex items-center gap-3">
                <Phone size={18} className="text-green-street-luxe flex-shrink-0" />
                <a
                  href="tel:+18001234567"
                  className="text-green-street-muted hover:text-green-street-luxe transition-colors text-sm"
                  data-testid="link-footer-phone"
                >
                  (800) 123-4567
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-green-street-offwhite font-semibold mb-6 text-sm uppercase tracking-wider">
              Legal
            </h4>
            <ul className="space-y-3">
              {legalLinks.map((link) => (
                <li key={link.label}>
                  <Link href={link.href} data-testid={`link-footer-${link.label.toLowerCase().replace(/\s+/g, "-")}`}>
                    <span className="text-green-street-muted hover:text-green-street-luxe transition-colors text-sm">
                      {link.label}
                    </span>
                  </Link>
                </li>
              ))}
            </ul>
            <div className="mt-6 flex items-center gap-2">
              <span className="text-xs text-green-street-muted">Equal Opportunity Funder</span>
            </div>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-green-street-silver/10 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-green-street-muted text-sm">
            &copy; {new Date().getFullYear()} Green Street Capital. All rights reserved.
          </p>
          <p className="text-green-street-muted text-xs text-center md:text-right max-w-lg">
            Green Street Capital provides merchant cash advances, not loans. We purchase a portion of your future receivables at a discount.
          </p>
        </div>
      </div>

      <a
        href="https://wa.me/18001234567"
        target="_blank"
        rel="noopener noreferrer"
        data-testid="button-whatsapp-float"
        className="fixed bottom-6 right-6 w-14 h-14 bg-[#25D366] rounded-full flex items-center justify-center shadow-lg hover:scale-110 transition-transform z-50 pulse-animation"
      >
        <MessageCircle size={28} className="text-white" />
      </a>
    </footer>
  );
}
