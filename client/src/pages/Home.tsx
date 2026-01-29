import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import { AnimatedCounter } from "@/components/ui/AnimatedCounter";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { GlassCard } from "@/components/ui/GlassCard";
import { 
  MessageCircle, 
  Zap, 
  Clock, 
  Shield, 
  FileText, 
  CheckCircle2, 
  DollarSign,
  ArrowRight,
  Building2,
  Users,
  TrendingUp,
  Timer,
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
      <section className="relative min-h-screen flex items-center justify-center hero-gradient grain-overlay overflow-hidden pt-20">
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-green-street-money/10 rounded-full blur-[120px]" />
          <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-green-street-luxe/10 rounded-full blur-[100px]" />
        </div>
        
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
              <span className="text-green-street-offwhite">AS FAST AS YOU DO</span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2, ease: [0.4, 0, 0.2, 1] }}
              className="text-lg md:text-xl text-green-street-muted mb-10 max-w-2xl mx-auto leading-relaxed"
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
                  className="btn-gradient text-white font-semibold px-8 py-6 text-lg pulse-animation"
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
                  className="border-green-street-silver/30 text-green-street-offwhite hover:bg-green-street-silver/10 px-8 py-6 text-lg"
                >
                  <MessageCircle className="mr-2" size={20} />
                  Chat on WhatsApp
                </Button>
              </a>
            </motion.div>
          </div>
        </div>

        <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-green-street-forest to-transparent" />
      </section>

      <section className="py-8 bg-green-street-midnight border-y border-green-street-silver/10">
        <div className="container mx-auto px-4 md:px-6">
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
                <div className="text-3xl md:text-4xl font-bold text-metallic mb-1">
                  <AnimatedCounter end={stat.value} prefix={stat.prefix} suffix={stat.suffix} />
                </div>
                <div className="text-xs uppercase tracking-wider text-green-street-muted font-medium">
                  {stat.label}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 md:py-32 bg-green-street-forest">
        <div className="container mx-auto px-4 md:px-6">
          <SectionHeading
            label="How It Works"
            title="THREE STEPS TO FUNDED"
            description="Get the capital you need without the hassle. Our streamlined process gets you funded fast."
          />

          <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {steps.map((step, index) => (
              <GlassCard key={step.number} delay={index * 0.15}>
                <div className="text-center">
                  <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-gradient-to-br from-green-street-money to-green-street-luxe mb-6">
                    <step.icon size={28} className="text-white" />
                  </div>
                  <div className="text-green-street-gold text-sm font-semibold mb-2">
                    STEP {step.number}
                  </div>
                  <h3 className="text-2xl font-bold text-green-street-offwhite mb-3">
                    {step.title}
                  </h3>
                  <p className="text-green-street-muted leading-relaxed">
                    {step.description}
                  </p>
                </div>
              </GlassCard>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 md:py-32 bg-green-street-midnight">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <span className="inline-block text-green-street-luxe text-xs font-semibold uppercase tracking-[0.2em] mb-4">
                Quick Inquiry
              </span>
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-green-street-offwhite mb-4">
                READY TO MOVE?
              </h2>
              <p className="text-green-street-muted text-lg mb-8">
                Skip the wait. Start the conversation. Get a response within minutes.
              </p>
            </div>

            <GlassCard className="lg:p-10" hover={false}>
              <form className="space-y-6" data-testid="form-inquiry">
                <div>
                  <label className="block text-green-street-silver text-sm font-medium mb-2">
                    Business Name
                  </label>
                  <input
                    type="text"
                    data-testid="input-business-name"
                    placeholder="Your Business Name"
                    className="w-full px-4 py-3 bg-green-street-forest/50 border border-green-street-silver/20 rounded-md text-green-street-offwhite placeholder:text-green-street-muted focus:outline-none focus:border-green-street-luxe transition-colors"
                  />
                </div>
                <div>
                  <label className="block text-green-street-silver text-sm font-medium mb-2">
                    Funding Amount Needed
                  </label>
                  <select
                    data-testid="select-funding-amount"
                    className="w-full px-4 py-3 bg-green-street-forest/50 border border-green-street-silver/20 rounded-md text-green-street-offwhite focus:outline-none focus:border-green-street-luxe transition-colors appearance-none"
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
                  <label className="block text-green-street-silver text-sm font-medium mb-2">
                    Phone Number
                  </label>
                  <input
                    type="tel"
                    data-testid="input-phone"
                    placeholder="(555) 123-4567"
                    className="w-full px-4 py-3 bg-green-street-forest/50 border border-green-street-silver/20 rounded-md text-green-street-offwhite placeholder:text-green-street-muted focus:outline-none focus:border-green-street-luxe transition-colors"
                  />
                </div>
                <div className="flex flex-col sm:flex-row gap-4">
                  <Button
                    type="button"
                    data-testid="button-email-inquiry"
                    variant="outline"
                    className="flex-1 border-green-street-silver/30 text-green-street-offwhite hover:bg-green-street-silver/10"
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
                      className="btn-gradient text-white font-semibold w-full pulse-animation"
                    >
                      <MessageCircle className="mr-2" size={18} />
                      WhatsApp Now
                    </Button>
                  </a>
                </div>
              </form>
            </GlassCard>
          </div>
        </div>
      </section>

      <section className="py-20 md:py-32 bg-green-street-forest">
        <div className="container mx-auto px-4 md:px-6">
          <SectionHeading
            label="Why Choose Us"
            title="WHY BUSINESSES CHOOSE US"
            description="We're not a bank. We're your capital partner."
          />

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
            {benefits.map((benefit, index) => (
              <GlassCard key={benefit.title} delay={index * 0.1}>
                <div className="text-center">
                  <div className="inline-flex items-center justify-center w-14 h-14 rounded-lg bg-green-street-money/20 mb-5">
                    <benefit.icon size={26} className="text-green-street-luxe" />
                  </div>
                  <h3 className="text-lg font-bold text-green-street-offwhite mb-2">
                    {benefit.title}
                  </h3>
                  <p className="text-green-street-muted text-sm leading-relaxed">
                    {benefit.description}
                  </p>
                </div>
              </GlassCard>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 md:py-32 bg-green-street-midnight">
        <div className="container mx-auto px-4 md:px-6">
          <SectionHeading
            label="Testimonials"
            title="REAL BUSINESSES. REAL RESULTS."
          />

          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {testimonials.map((testimonial, index) => (
              <GlassCard key={testimonial.name} delay={index * 0.15}>
                <div className="flex flex-col h-full">
                  <div className="flex gap-1 mb-4">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} size={18} className="text-green-street-gold fill-green-street-gold" />
                    ))}
                  </div>
                  <blockquote className="text-green-street-offwhite text-lg leading-relaxed mb-6 flex-grow">
                    "{testimonial.quote}"
                  </blockquote>
                  <div>
                    <div className="font-semibold text-green-street-offwhite">
                      {testimonial.name}
                    </div>
                    <div className="text-green-street-muted text-sm">
                      {testimonial.role} • {testimonial.location}
                    </div>
                  </div>
                </div>
              </GlassCard>
            ))}
          </div>
        </div>
      </section>

      <section className="py-12 bg-green-street-forest border-y border-green-street-silver/10">
        <div className="container mx-auto px-4 md:px-6">
          <div className="flex flex-wrap items-center justify-center gap-8 md:gap-16">
            <div className="text-center">
              <div className="text-green-street-silver text-sm font-medium mb-1">BBB Accredited</div>
              <div className="text-green-street-muted text-xs">A+ Rating</div>
            </div>
            <div className="w-px h-8 bg-green-street-silver/20 hidden md:block" />
            <div className="text-center">
              <div className="text-green-street-silver text-sm font-medium mb-1">SBFA Member</div>
              <div className="text-green-street-muted text-xs">Certified</div>
            </div>
            <div className="w-px h-8 bg-green-street-silver/20 hidden md:block" />
            <div className="text-center">
              <div className="text-green-street-silver text-sm font-medium mb-1">Trustpilot</div>
              <div className="text-green-street-muted text-xs">4.8/5 Rating</div>
            </div>
            <div className="w-px h-8 bg-green-street-silver/20 hidden md:block" />
            <div className="text-center">
              <div className="text-green-street-silver text-sm font-medium mb-1">256-bit SSL</div>
              <div className="text-green-street-muted text-xs">Bank-Level Security</div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 md:py-32 bg-green-street-forest relative overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-green-street-money/5 rounded-full blur-[150px]" />
        </div>
        
        <div className="container mx-auto px-4 md:px-6 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="max-w-3xl mx-auto text-center"
          >
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-green-street-offwhite mb-6">
              YOUR NEXT CHAPTER STARTS HERE
            </h2>
            <p className="text-green-street-muted text-lg mb-10">
              The capital you need. The speed you deserve.
            </p>
            <Link href="/apply">
              <Button
                data-testid="button-cta-apply"
                size="lg"
                className="btn-gradient text-white font-semibold px-10 py-6 text-lg"
              >
                Get Started Now
                <ArrowRight className="ml-2" size={20} />
              </Button>
            </Link>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
