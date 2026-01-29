import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { GlassCard } from "@/components/ui/GlassCard";
import { 
  FileText, 
  CheckCircle2, 
  DollarSign,
  ArrowRight,
  ClipboardList,
  ShieldCheck,
  Banknote,
  Clock,
  Building2,
  CreditCard,
  FileCheck,
  HelpCircle
} from "lucide-react";

const detailedSteps = [
  {
    number: "01",
    title: "APPLY",
    subtitle: "5 Minutes",
    icon: FileText,
    color: "from-green-street-money to-green-street-luxe",
    details: [
      "Complete our simple online application",
      "Basic business and owner information",
      "No extensive paperwork required",
      "Soft credit check — no impact on your score",
    ],
  },
  {
    number: "02",
    title: "GET APPROVED",
    subtitle: "Same Day",
    icon: ShieldCheck,
    color: "from-green-street-luxe to-green-street-money",
    details: [
      "Our team reviews your application",
      "We verify your business revenue",
      "Receive your customized offer",
      "Clear terms, no hidden fees",
    ],
  },
  {
    number: "03",
    title: "GET FUNDED",
    subtitle: "24 Hours",
    icon: Banknote,
    color: "from-green-street-money to-green-street-luxe",
    details: [
      "Accept your offer with e-signature",
      "Funds deposited directly to your account",
      "Start using capital immediately",
      "Repay through your daily/weekly receivables",
    ],
  },
];

const requirements = [
  { icon: FileCheck, text: "4 months of business bank statements" },
  { icon: CreditCard, text: "Valid government-issued ID" },
  { icon: Building2, text: "Proof of business ownership" },
  { icon: ClipboardList, text: "Basic business information (EIN, address, etc.)" },
];

const eligibility = [
  { text: "At least 6 months in business", check: true },
  { text: "Minimum $10,000/month in revenue", check: true },
  { text: "U.S.-based business", check: true },
  { text: "Active business bank account", check: true },
];

const faqs = [
  {
    question: "How long does the application take?",
    answer: "Our application takes approximately 5 minutes to complete. You'll need basic information about your business and bank statements.",
  },
  {
    question: "Will applying affect my credit score?",
    answer: "No. We perform a soft credit check to evaluate your application, which does not impact your credit score.",
  },
  {
    question: "How soon will I receive funds?",
    answer: "Once approved and you accept your offer, funds are typically deposited within 24 hours.",
  },
];

export default function HowItWorks() {
  return (
    <div className="min-h-screen pt-20">
      <section className="py-20 md:py-32 hero-gradient grain-overlay relative overflow-hidden">
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-1/3 left-1/4 w-80 h-80 bg-green-street-money/10 rounded-full blur-[100px]" />
          <div className="absolute bottom-1/3 right-1/4 w-64 h-64 bg-green-street-luxe/10 rounded-full blur-[80px]" />
        </div>

        <div className="container mx-auto px-4 md:px-6 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-3xl mx-auto text-center"
          >
            <span className="inline-block text-green-street-luxe text-xs font-semibold uppercase tracking-[0.3em] mb-6">
              The Process
            </span>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-metallic mb-6">
              FUNDING, SIMPLIFIED
            </h1>
            <p className="text-lg md:text-xl text-green-street-muted leading-relaxed">
              From application to funded in three easy steps. No complicated paperwork. No waiting weeks. Just fast, simple capital.
            </p>
          </motion.div>
        </div>
      </section>

      <section className="py-20 md:py-32 bg-green-street-forest">
        <div className="container mx-auto px-4 md:px-6">
          <div className="max-w-4xl mx-auto space-y-8">
            {detailedSteps.map((step, index) => (
              <motion.div
                key={step.number}
                initial={{ opacity: 0, x: index % 2 === 0 ? -30 : 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
              >
                <GlassCard className="relative overflow-hidden" hover={false}>
                  <div className="flex flex-col md:flex-row gap-8 items-start">
                    <div className="flex-shrink-0">
                      <div className={`w-20 h-20 rounded-xl bg-gradient-to-br ${step.color} flex items-center justify-center`}>
                        <step.icon size={36} className="text-white" />
                      </div>
                    </div>
                    <div className="flex-grow">
                      <div className="flex items-center gap-4 mb-4">
                        <span className="text-green-street-gold text-sm font-semibold tracking-wider">
                          STEP {step.number}
                        </span>
                        <span className="px-3 py-1 bg-green-street-money/20 rounded-full text-green-street-luxe text-xs font-medium">
                          {step.subtitle}
                        </span>
                      </div>
                      <h3 className="text-2xl md:text-3xl font-bold text-green-street-offwhite mb-4">
                        {step.title}
                      </h3>
                      <ul className="space-y-3">
                        {step.details.map((detail, i) => (
                          <li key={i} className="flex items-start gap-3">
                            <CheckCircle2 size={18} className="text-green-street-luxe flex-shrink-0 mt-0.5" />
                            <span className="text-green-street-muted">{detail}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </GlassCard>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 md:py-32 bg-green-street-midnight">
        <div className="container mx-auto px-4 md:px-6">
          <SectionHeading
            label="Requirements"
            title="WHAT TO HAVE READY"
            description="Gather these documents before you apply to speed up the process."
          />

          <div className="grid sm:grid-cols-2 gap-6 max-w-3xl mx-auto">
            {requirements.map((req, index) => (
              <GlassCard key={index} delay={index * 0.1}>
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-lg bg-green-street-money/20 flex items-center justify-center flex-shrink-0">
                    <req.icon size={22} className="text-green-street-luxe" />
                  </div>
                  <span className="text-green-street-offwhite font-medium">
                    {req.text}
                  </span>
                </div>
              </GlassCard>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 md:py-32 bg-green-street-forest">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid lg:grid-cols-2 gap-12 items-center max-w-5xl mx-auto">
            <div>
              <span className="inline-block text-green-street-luxe text-xs font-semibold uppercase tracking-[0.2em] mb-4">
                Eligibility
              </span>
              <h2 className="text-3xl md:text-4xl font-bold text-green-street-offwhite mb-6">
                DO YOU QUALIFY?
              </h2>
              <p className="text-green-street-muted text-lg mb-8">
                Most businesses qualify. Here's what we look for:
              </p>
              
              <div className="space-y-4">
                {eligibility.map((item, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4, delay: index * 0.1 }}
                    className="flex items-center gap-4"
                  >
                    <div className="w-8 h-8 rounded-full bg-green-street-money/30 flex items-center justify-center">
                      <CheckCircle2 size={18} className="text-green-street-luxe" />
                    </div>
                    <span className="text-green-street-offwhite">{item.text}</span>
                  </motion.div>
                ))}
              </div>
            </div>

            <GlassCard className="text-center" hover={false}>
              <div className="w-20 h-20 rounded-full bg-gradient-to-br from-green-street-money to-green-street-luxe flex items-center justify-center mx-auto mb-6">
                <Clock size={36} className="text-white" />
              </div>
              <h3 className="text-2xl font-bold text-green-street-offwhite mb-3">
                Check Your Eligibility
              </h3>
              <p className="text-green-street-muted mb-6">
                Takes less than 2 minutes. No credit impact.
              </p>
              <Link href="/apply">
                <Button
                  data-testid="button-check-eligibility"
                  size="lg"
                  className="btn-gradient text-white font-semibold w-full"
                >
                  Check Your Rate
                  <ArrowRight className="ml-2" size={18} />
                </Button>
              </Link>
            </GlassCard>
          </div>
        </div>
      </section>

      <section className="py-20 md:py-32 bg-green-street-midnight">
        <div className="container mx-auto px-4 md:px-6">
          <SectionHeading
            label="FAQ"
            title="COMMON QUESTIONS"
          />

          <div className="max-w-3xl mx-auto space-y-4">
            {faqs.map((faq, index) => (
              <GlassCard key={index} delay={index * 0.1} hover={false}>
                <div className="flex gap-4">
                  <div className="w-10 h-10 rounded-lg bg-green-street-money/20 flex items-center justify-center flex-shrink-0">
                    <HelpCircle size={20} className="text-green-street-luxe" />
                  </div>
                  <div>
                    <h4 className="text-lg font-semibold text-green-street-offwhite mb-2">
                      {faq.question}
                    </h4>
                    <p className="text-green-street-muted leading-relaxed">
                      {faq.answer}
                    </p>
                  </div>
                </div>
              </GlassCard>
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mt-10"
          >
            <Link href="/faq">
              <Button variant="outline" className="border-green-street-silver/30 text-green-street-offwhite hover:bg-green-street-silver/10">
                View All FAQs
                <ArrowRight className="ml-2" size={16} />
              </Button>
            </Link>
          </motion.div>
        </div>
      </section>

      <section className="py-20 md:py-32 bg-green-street-forest relative overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-green-street-money/5 rounded-full blur-[120px]" />
        </div>
        
        <div className="container mx-auto px-4 md:px-6 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="max-w-2xl mx-auto text-center"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-green-street-offwhite mb-6">
              READY TO GET STARTED?
            </h2>
            <p className="text-green-street-muted text-lg mb-10">
              Join thousands of businesses that have already secured their capital with Green Street Capital.
            </p>
            <Link href="/apply">
              <Button
                data-testid="button-cta-apply"
                size="lg"
                className="btn-gradient text-white font-semibold px-10 py-6 text-lg"
              >
                Apply Now
                <ArrowRight className="ml-2" size={20} />
              </Button>
            </Link>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
