import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import { AnimatedBackground } from "@/components/ui/AnimatedBackground";
import { 
  ArrowRight, 
  Zap, 
  Shield, 
  Users, 
  Lightbulb,
  Building2,
  TrendingUp,
  Eye,
  CheckCircle2,
  XCircle
} from "lucide-react";

const values = [
  {
    icon: Zap,
    title: "SPEED",
    description: "Time is money. We move fast.",
  },
  {
    icon: Shield,
    title: "TRANSPARENCY",
    description: "No games. No hidden fees. Clear terms.",
  },
  {
    icon: Users,
    title: "PARTNERSHIP",
    description: "Your success is our success.",
  },
  {
    icon: Lightbulb,
    title: "INNOVATION",
    description: "Modern problems require modern solutions.",
  },
];

const comparison = [
  { feature: "Speed", traditional: "Weeks of waiting", greenStreet: "24-hour funding" },
  { feature: "Paperwork", traditional: "Mountains of documents", greenStreet: "5-minute application" },
  { feature: "Approval", traditional: "Credit score obsessed", greenStreet: "Revenue-focused" },
  { feature: "Repayment", traditional: "Rigid terms", greenStreet: "Flexible, revenue-based" },
  { feature: "Fees", traditional: "Hidden costs", greenStreet: "Transparent pricing" },
];

export default function About() {
  return (
    <div className="min-h-screen pt-20">
      {/* Hero Section */}
      <section className="relative py-20 md:py-32 overflow-hidden">
        <AnimatedBackground variant="light" />

        <div className="container mx-auto px-4 md:px-6 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-3xl mx-auto text-center"
          >
            <span className="inline-block text-green-street-money text-xs font-semibold uppercase tracking-[0.3em] mb-6">
              About Us
            </span>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-6">
              BUILT FOR BUSINESSES THAT MOVE
            </h1>
            <p className="text-lg md:text-xl text-gray-600 leading-relaxed">
              We're not a bank. We're not a lender. We're your capital partner.
            </p>
            <div className="w-16 h-1 bg-green-street-money mx-auto mt-8" />
          </motion.div>
        </div>
      </section>

      {/* Our Story */}
      <section className="py-20 md:py-32 bg-[#F5F3EE]">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid lg:grid-cols-2 gap-12 items-center max-w-5xl mx-auto">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <span className="inline-block text-green-street-money text-xs font-semibold uppercase tracking-[0.2em] mb-4">
                Our Story
              </span>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                CAPITAL FOR THE AMBITIOUS
              </h2>
              <div className="space-y-4 text-gray-600 leading-relaxed">
                <p>
                  Founded in Miami, Florida, Green Street Capital was born from a simple observation: too many businesses miss opportunities because of slow, outdated funding processes.
                </p>
                <p>
                  We saw restaurant owners turn away expansion opportunities. Retailers unable to stock inventory for busy seasons. Service providers losing contracts because they couldn't scale fast enough.
                </p>
                <p>
                  We built Green Street Capital to change that. Our mission is to provide fast, flexible capital to businesses that traditional lenders overlook—businesses that have revenue, customers, and ambition, but need working capital now, not in six weeks.
                </p>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="bg-white rounded-xl p-8 shadow-xl border border-gray-100"
            >
              <div className="flex items-center gap-3 mb-6">
                <div className="w-10 h-10 rounded-lg bg-green-street-money/10 flex items-center justify-center">
                  <Building2 size={20} className="text-green-street-money" />
                </div>
                <div>
                  <div className="text-gray-900 font-semibold">Headquarters</div>
                  <div className="text-gray-500 text-sm">Miami, Florida</div>
                </div>
              </div>
              <div className="space-y-4">
                <div className="flex items-center gap-3">
                  <CheckCircle2 size={18} className="text-green-street-money flex-shrink-0" />
                  <span className="text-gray-700">Serving businesses nationwide in all 50 states</span>
                </div>
                <div className="flex items-center gap-3">
                  <CheckCircle2 size={18} className="text-green-street-money flex-shrink-0" />
                  <span className="text-gray-700">Real people making real decisions</span>
                </div>
                <div className="flex items-center gap-3">
                  <CheckCircle2 size={18} className="text-green-street-money flex-shrink-0" />
                  <span className="text-gray-700">Speed without sacrificing service</span>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Mission & Values */}
      <section className="relative py-20 md:py-32 overflow-hidden">
        <AnimatedBackground variant="light" />
        
        <div className="container mx-auto px-4 md:px-6 relative z-10">
          <div className="max-w-4xl mx-auto">
            <div className="grid md:grid-cols-2 gap-8 mb-16">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
                className="bg-white rounded-xl p-8 shadow-lg border border-gray-100"
              >
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-10 h-10 rounded-lg bg-green-street-money/10 flex items-center justify-center">
                    <Eye size={20} className="text-green-street-money" />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900">Our Mission</h3>
                </div>
                <p className="text-gray-600 leading-relaxed">
                  To empower ambitious businesses with fast, flexible capital — without the friction of traditional lending.
                </p>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.1 }}
                className="bg-white rounded-xl p-8 shadow-lg border border-gray-100"
              >
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-10 h-10 rounded-lg bg-green-street-money/10 flex items-center justify-center">
                    <TrendingUp size={20} className="text-green-street-money" />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900">Our Vision</h3>
                </div>
                <p className="text-gray-600 leading-relaxed">
                  A world where business owners never miss an opportunity because of slow, outdated funding processes.
                </p>
              </motion.div>
            </div>

            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
                OUR VALUES
              </h2>
              <p className="text-gray-600 text-lg">
                The principles that guide everything we do.
              </p>
            </div>

            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {values.map((value, index) => (
                <motion.div
                  key={value.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="bg-white rounded-xl p-6 shadow-lg border border-gray-100"
                >
                  <div className="text-center">
                    <div className="inline-flex items-center justify-center w-14 h-14 rounded-lg bg-green-street-money/10 mb-5">
                      <value.icon size={26} className="text-green-street-money" />
                    </div>
                    <h3 className="text-lg font-bold text-gray-900 mb-2">
                      {value.title}
                    </h3>
                    <p className="text-gray-600 text-sm leading-relaxed">
                      {value.description}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Comparison Table */}
      <section className="py-20 md:py-32 bg-[#F5F3EE]">
        <div className="container mx-auto px-4 md:px-6">
          <div className="text-center mb-16">
            <span className="inline-block text-green-street-money text-xs font-semibold uppercase tracking-[0.2em] mb-4">
              The Difference
            </span>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
              WHY WE'RE DIFFERENT
            </h2>
            <p className="text-gray-600 text-lg">
              See how we stack up against traditional lenders.
            </p>
          </div>

          <div className="max-w-4xl mx-auto">
            <div className="bg-white rounded-xl shadow-xl border border-gray-100 overflow-hidden">
              <div className="overflow-x-auto">
                <table className="w-full">
                  <thead>
                    <tr className="border-b border-gray-100 bg-gray-50">
                      <th className="text-left py-4 px-6 text-gray-700 text-sm font-semibold uppercase tracking-wider">
                        Factor
                      </th>
                      <th className="text-center py-4 px-6 text-gray-500 text-sm font-semibold uppercase tracking-wider">
                        Traditional Lenders
                      </th>
                      <th className="text-center py-4 px-6 text-green-street-money text-sm font-semibold uppercase tracking-wider">
                        Green Street Capital
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    {comparison.map((item, index) => (
                      <motion.tr
                        key={item.feature}
                        initial={{ opacity: 0, y: 10 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.3, delay: index * 0.05 }}
                        className="border-b border-gray-50 last:border-0"
                      >
                        <td className="py-4 px-6 text-gray-900 font-medium">
                          {item.feature}
                        </td>
                        <td className="py-4 px-6 text-center">
                          <div className="flex items-center justify-center gap-2 text-gray-500">
                            <XCircle size={16} className="text-red-400" />
                            <span className="text-sm">{item.traditional}</span>
                          </div>
                        </td>
                        <td className="py-4 px-6 text-center">
                          <div className="flex items-center justify-center gap-2 text-gray-900">
                            <CheckCircle2 size={16} className="text-green-street-money" />
                            <span className="text-sm font-medium">{item.greenStreet}</span>
                          </div>
                        </td>
                      </motion.tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Trust Badges */}
      <section className="py-12 bg-white border-y border-gray-100">
        <div className="container mx-auto px-4 md:px-6">
          <div className="flex flex-wrap items-center justify-center gap-8 md:gap-16">
            <div className="text-center">
              <div className="text-gray-700 text-sm font-medium mb-1">BBB Accredited</div>
              <div className="text-gray-500 text-xs">A+ Rating</div>
            </div>
            <div className="w-px h-8 bg-gray-200 hidden md:block" />
            <div className="text-center">
              <div className="text-gray-700 text-sm font-medium mb-1">SBFA Member</div>
              <div className="text-gray-500 text-xs">Certified</div>
            </div>
            <div className="w-px h-8 bg-gray-200 hidden md:block" />
            <div className="text-center">
              <div className="text-gray-700 text-sm font-medium mb-1">Trustpilot</div>
              <div className="text-gray-500 text-xs">4.8/5 Rating</div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 md:py-32 bg-green-street-money relative overflow-hidden">
        <div className="absolute inset-0">
          <motion.div
            className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full"
            style={{
              background: "radial-gradient(circle, rgba(255,255,255,0.1) 0%, transparent 70%)",
            }}
            animate={{
              scale: [1, 1.2, 1],
            }}
            transition={{
              duration: 10,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          />
        </div>
        
        <div className="container mx-auto px-4 md:px-6 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="max-w-2xl mx-auto text-center"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              READY TO WORK WITH US?
            </h2>
            <p className="text-white/80 text-lg mb-10">
              Join thousands of businesses that have secured their capital with Green Street Capital.
            </p>
            <Link href="/apply">
              <Button
                data-testid="button-cta-apply"
                size="lg"
                className="bg-white text-green-street-money hover:bg-gray-100 font-semibold px-10 py-6 text-lg shadow-lg"
              >
                Get Started
                <ArrowRight className="ml-2" size={20} />
              </Button>
            </Link>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
