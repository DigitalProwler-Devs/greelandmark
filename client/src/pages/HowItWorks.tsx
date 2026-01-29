import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import { AnimatedBackground } from "@/components/ui/AnimatedBackground";
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
              The Process
            </span>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-6">
              FUNDING, SIMPLIFIED
            </h1>
            <p className="text-lg md:text-xl text-gray-600 leading-relaxed">
              From application to funded in three easy steps. No complicated paperwork. No waiting weeks. Just fast, simple capital.
            </p>
            <div className="w-16 h-1 bg-green-street-money mx-auto mt-8" />
          </motion.div>
        </div>
      </section>

      {/* Steps Section */}
      <section className="py-20 md:py-32 bg-[#F5F3EE]">
        <div className="container mx-auto px-4 md:px-6">
          <div className="max-w-4xl mx-auto space-y-8">
            {detailedSteps.map((step, index) => (
              <motion.div
                key={step.number}
                initial={{ opacity: 0, x: index % 2 === 0 ? -30 : 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-white rounded-xl p-8 shadow-lg border border-gray-100"
              >
                <div className="flex flex-col md:flex-row gap-8 items-start">
                  <div className="flex-shrink-0">
                    <div className="w-20 h-20 rounded-xl bg-green-street-money flex items-center justify-center">
                      <step.icon size={36} className="text-white" />
                    </div>
                  </div>
                  <div className="flex-grow">
                    <div className="flex items-center gap-4 mb-4">
                      <span className="text-green-street-money text-sm font-semibold tracking-wider">
                        STEP {step.number}
                      </span>
                      <span className="px-3 py-1 bg-green-street-money/10 rounded-full text-green-street-money text-xs font-medium">
                        {step.subtitle}
                      </span>
                    </div>
                    <h3 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">
                      {step.title}
                    </h3>
                    <ul className="space-y-3">
                      {step.details.map((detail, i) => (
                        <li key={i} className="flex items-start gap-3">
                          <CheckCircle2 size={18} className="text-green-street-money flex-shrink-0 mt-0.5" />
                          <span className="text-gray-600">{detail}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Requirements Section */}
      <section className="relative py-20 md:py-32 overflow-hidden">
        <AnimatedBackground variant="light" />
        
        <div className="container mx-auto px-4 md:px-6 relative z-10">
          <div className="text-center mb-16">
            <span className="inline-block text-green-street-money text-xs font-semibold uppercase tracking-[0.2em] mb-4">
              Requirements
            </span>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
              WHAT TO HAVE READY
            </h2>
            <p className="text-gray-600 text-lg">
              Gather these documents before you apply to speed up the process.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 gap-6 max-w-3xl mx-auto">
            {requirements.map((req, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-white rounded-xl p-6 shadow-lg border border-gray-100"
              >
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-lg bg-green-street-money/10 flex items-center justify-center flex-shrink-0">
                    <req.icon size={22} className="text-green-street-money" />
                  </div>
                  <span className="text-gray-900 font-medium">
                    {req.text}
                  </span>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Eligibility Section */}
      <section className="py-20 md:py-32 bg-[#F5F3EE]">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid lg:grid-cols-2 gap-12 items-center max-w-5xl mx-auto">
            <div>
              <span className="inline-block text-green-street-money text-xs font-semibold uppercase tracking-[0.2em] mb-4">
                Eligibility
              </span>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                DO YOU QUALIFY?
              </h2>
              <p className="text-gray-600 text-lg mb-8">
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
                    <div className="w-8 h-8 rounded-full bg-green-street-money/20 flex items-center justify-center">
                      <CheckCircle2 size={18} className="text-green-street-money" />
                    </div>
                    <span className="text-gray-900">{item.text}</span>
                  </motion.div>
                ))}
              </div>
            </div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="bg-white rounded-xl p-8 shadow-xl border border-gray-100 text-center"
            >
              <div className="w-20 h-20 rounded-full bg-green-street-money flex items-center justify-center mx-auto mb-6">
                <Clock size={36} className="text-white" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-3">
                Check Your Eligibility
              </h3>
              <p className="text-gray-600 mb-6">
                Takes less than 2 minutes. No credit impact.
              </p>
              <Link href="/apply">
                <Button
                  data-testid="button-check-eligibility"
                  size="lg"
                  className="bg-green-street-money hover:bg-green-street-luxe text-white font-semibold w-full"
                >
                  Check Your Rate
                  <ArrowRight className="ml-2" size={18} />
                </Button>
              </Link>
            </motion.div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="relative py-20 md:py-32 overflow-hidden">
        <AnimatedBackground variant="light" />
        
        <div className="container mx-auto px-4 md:px-6 relative z-10">
          <div className="text-center mb-16">
            <span className="inline-block text-green-street-money text-xs font-semibold uppercase tracking-[0.2em] mb-4">
              FAQ
            </span>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900">
              COMMON QUESTIONS
            </h2>
          </div>

          <div className="max-w-3xl mx-auto space-y-4">
            {faqs.map((faq, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-white rounded-xl p-6 shadow-lg border border-gray-100"
              >
                <div className="flex gap-4">
                  <div className="w-10 h-10 rounded-lg bg-green-street-money/10 flex items-center justify-center flex-shrink-0">
                    <HelpCircle size={20} className="text-green-street-money" />
                  </div>
                  <div>
                    <h4 className="text-lg font-semibold text-gray-900 mb-2">
                      {faq.question}
                    </h4>
                    <p className="text-gray-600 leading-relaxed">
                      {faq.answer}
                    </p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mt-10"
          >
            <Link href="/faq">
              <Button variant="outline" className="border-gray-300 text-gray-700 hover:bg-gray-100">
                View All FAQs
                <ArrowRight className="ml-2" size={16} />
              </Button>
            </Link>
          </motion.div>
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
              READY TO GET STARTED?
            </h2>
            <p className="text-white/80 text-lg mb-10">
              Join thousands of businesses that have already secured their capital with Green Street Capital.
            </p>
            <Link href="/apply">
              <Button
                data-testid="button-cta-apply"
                size="lg"
                className="bg-white text-green-street-money hover:bg-gray-100 font-semibold px-10 py-6 text-lg shadow-lg"
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
