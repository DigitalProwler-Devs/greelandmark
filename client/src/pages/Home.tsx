import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import { AnimatedCounter } from "@/components/ui/AnimatedCounter";
import { AnimatedBackground } from "@/components/ui/AnimatedBackground";
import heroVideo from "@assets/horses_1769718319951.mp4";
import { 
  MessageCircle, 
  Zap, 
  Shield, 
  FileText, 
  CheckCircle2, 
  DollarSign,
  ArrowRight,
  TrendingUp,
  Clock,
  Star
} from "lucide-react";

const stats = [
  { value: 50, prefix: "$", suffix: "M+", label: "FUNDED" },
  { value: 1000, suffix: "+", label: "BUSINESSES SERVED" },
  { value: 24, suffix: "-HOUR", label: "FUNDING" },
  { value: 85, suffix: "%+", label: "APPROVAL RATE" },
];

const steps = [
  {
    number: "01",
    title: "APPLY",
    description: "5-minute application. No paperwork headaches.",
    icon: FileText,
  },
  {
    number: "02",
    title: "GET APPROVED",
    description: "Instant decision. No credit impact to check your rate.",
    icon: CheckCircle2,
  },
  {
    number: "03",
    title: "GET FUNDED",
    description: "Money in your account within 24 hours.",
    icon: DollarSign,
  },
];

const benefits = [
  {
    icon: Zap,
    title: "SPEED",
    description: "24-hour funding. No waiting.",
  },
  {
    icon: FileText,
    title: "SIMPLICITY",
    description: "5-minute application. Minimal docs.",
  },
  {
    icon: TrendingUp,
    title: "FLEXIBILITY",
    description: "Revenue-based repayment. Breathe easy.",
  },
  {
    icon: Shield,
    title: "TRANSPARENCY",
    description: "No hidden fees. No surprises.",
  },
];

const testimonials = [
  {
    quote: "Green Street Capital came through when traditional banks said no. Funded in less than 24 hours.",
    name: "Marcus Johnson",
    role: "Restaurant Owner",
    location: "Atlanta, GA",
  },
  {
    quote: "The process was incredibly simple. I applied in the morning and had funds by the next day.",
    name: "Sarah Chen",
    role: "Retail Store Owner",
    location: "Los Angeles, CA",
  },
  {
    quote: "Finally, a funding partner that understands small business. Fast, fair, and transparent.",
    name: "David Rodriguez",
    role: "Auto Shop Owner",
    location: "Miami, FL",
  },
];

export default function Home() {
  return (
    <div className="min-h-screen">
      {/* Hero Section - Video background */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20">
        {/* Video Background */}
        <div className="absolute inset-0 z-0">
          <video
            autoPlay
            loop
            muted
            playsInline
            className="absolute inset-0 w-full h-full object-cover"
          >
            <source src={heroVideo} type="video/mp4" />
          </video>
          {/* Dark overlay for text readability */}
          <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/50 to-black/80" />
        </div>
        
        {/* Animated elements overlay */}
        <AnimatedBackground variant="hero" />
        
        <div className="container mx-auto px-4 md:px-6 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: [0.4, 0, 0.2, 1] }}
            >
              <span className="inline-block text-green-street-luxe text-xs font-semibold uppercase tracking-[0.3em] mb-6">
                Merchant Cash Advances
              </span>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.1, ease: [0.4, 0, 0.2, 1] }}
              className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold mb-6 tracking-tight"
            >
              <span className="text-metallic">CAPITAL THAT MOVES</span>
              <br />
              <span className="text-white">AS FAST AS YOU DO</span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2, ease: [0.4, 0, 0.2, 1] }}
              className="text-lg md:text-xl text-gray-400 mb-10 max-w-2xl mx-auto leading-relaxed"
            >
              Merchant cash advances for ambitious businesses. No loans. No hassle. Funded in 24 hours.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.3, ease: [0.4, 0, 0.2, 1] }}
              className="flex flex-col sm:flex-row items-center justify-center gap-4"
            >
              <Link href="/apply">
                <Button
                  data-testid="button-hero-apply"
                  size="lg"
                  className="bg-green-street-money hover:bg-green-street-luxe text-white font-semibold px-8 py-6 text-lg transition-all shadow-lg shadow-green-street-money/25"
                >
                  Check Your Rate
                  <ArrowRight className="ml-2" size={20} />
                </Button>
              </Link>
              <a
                href="https://wa.me/18001234567"
                target="_blank"
                rel="noopener noreferrer"
                data-testid="button-hero-whatsapp"
              >
                <Button
                  size="lg"
                  variant="outline"
                  className="border-white/30 text-white hover:bg-white/10 px-8 py-6 text-lg"
                >
                  <MessageCircle className="mr-2" size={20} />
                  Chat on WhatsApp
                </Button>
              </a>
            </motion.div>
          </div>
        </div>

        <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-[#FAFAF8] to-transparent" />
      </section>

      {/* Stats Section - Light with animated background */}
      <section className="relative py-20 overflow-hidden">
        <AnimatedBackground variant="light" />
        
        <div className="container mx-auto px-4 md:px-6 relative z-10">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="text-center"
              >
                <div className="text-3xl md:text-5xl font-bold text-green-street-money mb-2">
                  <AnimatedCounter end={stat.value} prefix={stat.prefix} suffix={stat.suffix} />
                </div>
                <div className="text-xs uppercase tracking-wider text-gray-500 font-medium">
                  {stat.label}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* How It Works - Light Section */}
      <section className="relative py-20 md:py-32 overflow-hidden">
        <AnimatedBackground variant="light" />
        
        <div className="container mx-auto px-4 md:px-6 relative z-10">
          <div className="text-center mb-16">
            <span className="inline-block text-green-street-money text-xs font-semibold uppercase tracking-[0.2em] mb-4">
              How It Works
            </span>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
              THREE STEPS TO FUNDED
            </h2>
            <p className="text-gray-600 text-lg max-w-2xl mx-auto">
              Get the capital you need without the hassle. Our streamlined process gets you funded fast.
            </p>
            <div className="w-16 h-1 bg-green-street-money mx-auto mt-6" />
          </div>

          <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {steps.map((step, index) => (
              <motion.div
                key={step.number}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.15 }}
                className="bg-white rounded-xl p-8 shadow-lg shadow-gray-200/50 border border-gray-100 hover:shadow-xl transition-shadow"
              >
                <div className="text-center">
                  <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-green-street-money mb-6">
                    <step.icon size={28} className="text-white" />
                  </div>
                  <div className="text-green-street-money text-sm font-semibold mb-2">
                    STEP {step.number}
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-3">
                    {step.title}
                  </h3>
                  <p className="text-gray-600 leading-relaxed">
                    {step.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Inquiry Section - Light with green accent card */}
      <section className="relative py-20 md:py-32 overflow-hidden bg-[#F5F3EE]">
        <div className="container mx-auto px-4 md:px-6 relative z-10">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <span className="inline-block text-green-street-money text-xs font-semibold uppercase tracking-[0.2em] mb-4">
                Quick Inquiry
              </span>
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
                READY TO MOVE?
              </h2>
              <p className="text-gray-600 text-lg mb-8">
                Skip the wait. Start the conversation. Get a response within minutes.
              </p>
              <div className="w-16 h-1 bg-green-street-money mb-6" />
              <div className="flex items-center gap-4 text-gray-600">
                <Clock size={20} className="text-green-street-money" />
                <span>Response within 30 minutes during business hours</span>
              </div>
            </div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="bg-white rounded-xl p-8 shadow-xl border border-gray-100"
            >
              <form className="space-y-6" data-testid="form-inquiry">
                <div>
                  <label className="block text-gray-700 text-sm font-medium mb-2">
                    Business Name
                  </label>
                  <input
                    type="text"
                    data-testid="input-business-name"
                    placeholder="Your Business Name"
                    className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-lg text-gray-900 placeholder:text-gray-400 focus:outline-none focus:border-green-street-money focus:ring-1 focus:ring-green-street-money transition-colors"
                  />
                </div>
                <div>
                  <label className="block text-gray-700 text-sm font-medium mb-2">
                    Funding Amount Needed
                  </label>
                  <select
                    data-testid="select-funding-amount"
                    className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-lg text-gray-900 focus:outline-none focus:border-green-street-money focus:ring-1 focus:ring-green-street-money transition-colors appearance-none"
                  >
                    <option value="">Select Amount</option>
                    <option value="5000-25000">$5,000 - $25,000</option>
                    <option value="25000-50000">$25,000 - $50,000</option>
                    <option value="50000-100000">$50,000 - $100,000</option>
                    <option value="100000-250000">$100,000 - $250,000</option>
                    <option value="250000+">$250,000+</option>
                  </select>
                </div>
                <div>
                  <label className="block text-gray-700 text-sm font-medium mb-2">
                    Phone Number
                  </label>
                  <input
                    type="tel"
                    data-testid="input-phone"
                    placeholder="(555) 123-4567"
                    className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-lg text-gray-900 placeholder:text-gray-400 focus:outline-none focus:border-green-street-money focus:ring-1 focus:ring-green-street-money transition-colors"
                  />
                </div>
                <div className="flex flex-col sm:flex-row gap-4">
                  <Button
                    type="button"
                    data-testid="button-email-inquiry"
                    variant="outline"
                    className="flex-1 border-gray-300 text-gray-700 hover:bg-gray-100"
                  >
                    Email Me
                  </Button>
                  <a
                    href="https://wa.me/18001234567"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1"
                  >
                    <Button
                      type="button"
                      data-testid="button-whatsapp-inquiry"
                      className="bg-green-street-money hover:bg-green-street-luxe text-white font-semibold w-full"
                    >
                      <MessageCircle className="mr-2" size={18} />
                      WhatsApp Now
                    </Button>
                  </a>
                </div>
              </form>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Benefits - Dark Interactive Section */}
      <section className="relative py-24 md:py-36 overflow-hidden">
        {/* Dark gradient background */}
        <div className="absolute inset-0 bg-gradient-to-b from-[#0A1510] via-[#0D1812] to-[#0A1510]" />
        
        {/* Fade gradient at top for smooth transition */}
        <div className="absolute top-0 left-0 right-0 h-16 bg-gradient-to-b from-[#F5F3EE] to-transparent z-10" />
        
        {/* Animated geometric shapes */}
        <motion.div
          className="absolute top-1/4 left-[10%] w-64 h-64"
          animate={{
            rotate: [0, 360],
            scale: [1, 1.1, 1],
          }}
          transition={{
            rotate: { duration: 30, repeat: Infinity, ease: "linear" },
            scale: { duration: 8, repeat: Infinity, ease: "easeInOut" },
          }}
        >
          <div className="w-full h-full rounded-full border border-green-street-money/20" />
        </motion.div>
        
        <motion.div
          className="absolute bottom-1/4 right-[15%] w-48 h-48"
          animate={{
            rotate: [360, 0],
            scale: [1, 1.15, 1],
          }}
          transition={{
            rotate: { duration: 25, repeat: Infinity, ease: "linear" },
            scale: { duration: 6, repeat: Infinity, ease: "easeInOut" },
          }}
        >
          <div className="w-full h-full rounded-full border border-green-street-luxe/15" />
        </motion.div>
        
        {/* Floating diamond shapes */}
        <motion.div
          className="absolute top-1/3 right-[25%] w-16 h-16 border border-green-street-money/25"
          style={{ transform: "rotate(45deg)" }}
          animate={{
            y: [0, -40, 0],
            opacity: [0.3, 0.6, 0.3],
          }}
          transition={{
            duration: 7,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
        <motion.div
          className="absolute bottom-1/3 left-[20%] w-12 h-12 border border-green-street-luxe/20"
          style={{ transform: "rotate(45deg)" }}
          animate={{
            y: [0, 30, 0],
            opacity: [0.2, 0.5, 0.2],
          }}
          transition={{
            duration: 9,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
        
        {/* Glowing orbs */}
        <motion.div
          className="absolute top-1/2 left-1/4 w-[350px] h-[350px] rounded-full"
          style={{
            background: "radial-gradient(circle, rgba(16,185,129,0.12) 0%, transparent 70%)",
          }}
          animate={{
            x: [0, 50, 0],
            y: [0, -30, 0],
          }}
          transition={{
            duration: 14,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
        <motion.div
          className="absolute top-1/3 right-1/4 w-[280px] h-[280px] rounded-full"
          style={{
            background: "radial-gradient(circle, rgba(52,211,153,0.1) 0%, transparent 70%)",
          }}
          animate={{
            x: [0, -40, 0],
            y: [0, 40, 0],
          }}
          transition={{
            duration: 12,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
        
        {/* Horizontal moving line */}
        <motion.div
          className="absolute top-1/2 left-0 w-1/3 h-px"
          style={{
            background: "linear-gradient(90deg, transparent, rgba(16,185,129,0.4), transparent)",
          }}
          animate={{
            x: ["0%", "200%"],
          }}
          transition={{
            duration: 6,
            repeat: Infinity,
            ease: "linear",
          }}
        />
        
        {/* Fade gradient at bottom for smooth transition */}
        <div className="absolute bottom-0 left-0 right-0 h-16 bg-gradient-to-t from-[#F5F3EE] to-transparent z-10" />
        
        <div className="container mx-auto px-4 md:px-6 relative z-20">
          <div className="text-center mb-16">
            <motion.span
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="inline-block text-green-street-luxe text-xs font-semibold uppercase tracking-[0.2em] mb-4"
            >
              Why Choose Us
            </motion.span>
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-4"
            >
              WHY BUSINESSES CHOOSE US
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="text-gray-400 text-lg"
            >
              We're not a bank. We're your capital partner.
            </motion.p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
            {benefits.map((benefit, index) => (
              <motion.div
                key={benefit.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-white/5 backdrop-blur-sm rounded-xl p-6 border border-white/10 hover:bg-white/10 transition-all hover:border-green-street-money/30"
              >
                <div className="text-center">
                  <div className="inline-flex items-center justify-center w-14 h-14 rounded-lg bg-green-street-money/20 mb-5">
                    <benefit.icon size={26} className="text-green-street-luxe" />
                  </div>
                  <h3 className="text-lg font-bold text-white mb-2">
                    {benefit.title}
                  </h3>
                  <p className="text-gray-400 text-sm leading-relaxed">
                    {benefit.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials - Slight gray background */}
      <section className="relative py-20 md:py-32 bg-[#F5F3EE]">
        <div className="container mx-auto px-4 md:px-6 relative z-10">
          <div className="text-center mb-16">
            <span className="inline-block text-green-street-money text-xs font-semibold uppercase tracking-[0.2em] mb-4">
              Testimonials
            </span>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900">
              REAL BUSINESSES. REAL RESULTS.
            </h2>
          </div>

          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {testimonials.map((testimonial, index) => (
              <motion.div
                key={testimonial.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.15 }}
                className="bg-white rounded-xl p-6 shadow-lg border border-gray-100"
              >
                <div className="flex flex-col h-full">
                  <div className="flex gap-1 mb-4">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} size={18} className="text-green-street-gold fill-green-street-gold" />
                    ))}
                  </div>
                  <blockquote className="text-gray-700 text-lg leading-relaxed mb-6 flex-grow">
                    "{testimonial.quote}"
                  </blockquote>
                  <div>
                    <div className="font-semibold text-gray-900">
                      {testimonial.name}
                    </div>
                    <div className="text-gray-500 text-sm">
                      {testimonial.role} • {testimonial.location}
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Trust Badges - White section */}
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
            <div className="w-px h-8 bg-gray-200 hidden md:block" />
            <div className="text-center">
              <div className="text-gray-700 text-sm font-medium mb-1">256-bit SSL</div>
              <div className="text-gray-500 text-xs">Bank-Level Security</div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section - Interactive Hero Style */}
      <section className="relative py-24 md:py-36 overflow-hidden">
        {/* Dark gradient background matching hero */}
        <div className="absolute inset-0 bg-gradient-to-br from-[#0A1510] via-[#0F1F1A] to-[#081210]" />
        
        {/* Interactive animated orbs */}
        <motion.div
          className="absolute top-1/4 left-1/4 w-[500px] h-[500px] rounded-full"
          style={{
            background: "radial-gradient(circle, rgba(16,185,129,0.2) 0%, transparent 70%)",
          }}
          animate={{
            x: [0, 80, 0],
            y: [0, -50, 0],
            scale: [1, 1.2, 1],
          }}
          transition={{
            duration: 12,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
        <motion.div
          className="absolute bottom-1/4 right-1/4 w-[400px] h-[400px] rounded-full"
          style={{
            background: "radial-gradient(circle, rgba(52,211,153,0.15) 0%, transparent 70%)",
          }}
          animate={{
            x: [0, -60, 0],
            y: [0, 60, 0],
            scale: [1, 1.15, 1],
          }}
          transition={{
            duration: 15,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
        <motion.div
          className="absolute top-1/2 right-1/3 w-[300px] h-[300px] rounded-full"
          style={{
            background: "radial-gradient(circle, rgba(212,175,55,0.1) 0%, transparent 70%)",
          }}
          animate={{
            x: [0, 40, 0],
            y: [0, 30, 0],
            scale: [1, 1.1, 1],
          }}
          transition={{
            duration: 10,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
        
        {/* Animated floating particles */}
        {[...Array(6)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-2 h-2 rounded-full bg-green-street-money/30"
            style={{
              left: `${15 + i * 15}%`,
              top: `${20 + (i % 3) * 25}%`,
            }}
            animate={{
              y: [0, -30, 0],
              opacity: [0.3, 0.8, 0.3],
            }}
            transition={{
              duration: 4 + i,
              repeat: Infinity,
              ease: "easeInOut",
              delay: i * 0.5,
            }}
          />
        ))}
        
        {/* Animated lines */}
        <motion.div
          className="absolute top-1/3 left-0 w-full h-px"
          style={{
            background: "linear-gradient(90deg, transparent, rgba(16,185,129,0.3), transparent)",
          }}
          animate={{
            x: ["-100%", "100%"],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "linear",
          }}
        />
        <motion.div
          className="absolute bottom-1/3 left-0 w-full h-px"
          style={{
            background: "linear-gradient(90deg, transparent, rgba(52,211,153,0.2), transparent)",
          }}
          animate={{
            x: ["100%", "-100%"],
          }}
          transition={{
            duration: 10,
            repeat: Infinity,
            ease: "linear",
          }}
        />
        
        {/* Grid pattern overlay */}
        <div 
          className="absolute inset-0 opacity-[0.03]"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
          }}
        />
        
        <div className="container mx-auto px-4 md:px-6 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="max-w-3xl mx-auto text-center"
          >
            <motion.h2 
              className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-6"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1 }}
            >
              <span className="text-metallic">YOUR NEXT CHAPTER</span>
              <br />
              <span className="text-white">STARTS HERE</span>
            </motion.h2>
            <motion.p 
              className="text-gray-400 text-lg mb-10"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              The capital you need. The speed you deserve.
            </motion.p>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.3 }}
            >
              <Link href="/apply">
                <Button
                  data-testid="button-cta-apply"
                  size="lg"
                  className="bg-green-street-money hover:bg-green-street-luxe text-white font-semibold px-10 py-6 text-lg shadow-lg shadow-green-street-money/25 transition-all hover:scale-105"
                >
                  Get Started Now
                  <ArrowRight className="ml-2" size={20} />
                </Button>
              </Link>
            </motion.div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
