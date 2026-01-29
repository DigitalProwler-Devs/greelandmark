import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import { AnimatedBackground } from "@/components/ui/AnimatedBackground";
import { 
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { MessageCircle, Mail, ArrowRight } from "lucide-react";

const faqCategories = [
  {
    name: "General",
    faqs: [
      {
        question: "What is a merchant cash advance?",
        answer: "A merchant cash advance (MCA) is a type of business financing where we purchase a portion of your future receivables in exchange for upfront capital. Unlike a loan, there is no fixed repayment term or interest rate. Instead, you repay through a percentage of your daily or weekly revenue.",
      },
      {
        question: "How is an MCA different from a loan?",
        answer: "The key difference is structure. A loan involves borrowing money and repaying with interest over a fixed term. An MCA is a purchase of your future receivables—we buy a portion of your expected revenue at a discount. This means repayment fluctuates with your business performance, and there's no traditional interest rate.",
      },
      {
        question: "Is Green Street Capital a direct funder?",
        answer: "Yes. Green Street Capital is a direct funder. We underwrite, approve, and fund merchant cash advances in-house. This means faster decisions and direct communication throughout the process.",
      },
    ],
  },
  {
    name: "Eligibility",
    faqs: [
      {
        question: "What are the minimum requirements?",
        answer: "To qualify for a merchant cash advance, your business should be at least 6 months old, generate a minimum of $10,000 per month in revenue, be based in the United States, and have an active business bank account.",
      },
      {
        question: "Do I need good credit?",
        answer: "We focus primarily on your business revenue rather than personal credit scores. While we do check credit, a low score doesn't automatically disqualify you. Many businesses with less-than-perfect credit are approved based on their revenue performance.",
      },
      {
        question: "What industries do you work with?",
        answer: "We work with businesses across many industries, including restaurants, retail, healthcare, automotive, construction, and professional services. Some restricted industries include adult entertainment, gambling, and illegal activities.",
      },
      {
        question: "Can I apply if I have an existing MCA?",
        answer: "Yes, in many cases you can. We evaluate each situation individually. If your business has sufficient revenue and meets our criteria, we may be able to provide additional funding even with an existing MCA position.",
      },
    ],
  },
  {
    name: "Application Process",
    faqs: [
      {
        question: "How long does the application take?",
        answer: "Our online application takes approximately 5 minutes to complete. You'll need basic business information and access to your recent bank statements.",
      },
      {
        question: "What documents do I need?",
        answer: "To apply, you'll need 4 months of business bank statements, a valid government-issued ID, proof of business ownership, and basic business information including your EIN and business address.",
      },
      {
        question: "Will applying affect my credit score?",
        answer: "No. When you apply and we check your rate, we perform a soft credit inquiry, which does not impact your credit score. A hard inquiry only occurs if you accept an offer and proceed with funding.",
      },
      {
        question: "How quickly will I get a decision?",
        answer: "Most applications receive a decision within the same business day. Many are approved within hours of submission.",
      },
    ],
  },
  {
    name: "Funding & Repayment",
    faqs: [
      {
        question: "How much can I receive?",
        answer: "Funding amounts range from $5,000 to $500,000, depending on your business revenue, time in business, and overall qualification criteria.",
      },
      {
        question: "How soon will I be funded?",
        answer: "Once you accept your offer and complete the required documentation, funds are typically deposited into your business bank account within 24 hours.",
      },
      {
        question: "How does repayment work?",
        answer: "Repayment is automatic and based on a percentage of your daily or weekly receivables. This percentage (called the remittance rate) typically ranges from 5% to 20%. When your revenue is higher, you repay more; when it's lower, you repay less.",
      },
      {
        question: "What if my revenue fluctuates?",
        answer: "That's the beauty of an MCA. Since repayment is based on a percentage of your revenue, your payments naturally adjust with your business performance. There are no late fees or penalties for slower revenue periods.",
      },
      {
        question: "Can I pay off early?",
        answer: "Yes, you can pay off your advance early. There are no prepayment penalties. Some funders may offer discounts for early payoff—contact your funding specialist for details.",
      },
    ],
  },
  {
    name: "Fees & Costs",
    faqs: [
      {
        question: "What is a factor rate?",
        answer: "A factor rate is a multiplier used to calculate the total amount you repay. For example, if you receive $50,000 with a factor rate of 1.25, you'll repay $62,500 total ($50,000 × 1.25). Factor rates typically range from 1.10 to 1.50.",
      },
      {
        question: "Are there any fees?",
        answer: "Origination fees may apply and are typically included in the factor rate. There are no application fees, no hidden fees, and no late fees (since repayment is automatic).",
      },
      {
        question: "Are there prepayment penalties?",
        answer: "No. We do not charge prepayment penalties. You can pay off your advance early at any time without additional costs.",
      },
    ],
  },
  {
    name: "Support",
    faqs: [
      {
        question: "How can I contact you?",
        answer: "You can reach us by phone at (800) 123-4567, by email at info@greenstreetcapital.io, or via WhatsApp for instant messaging. Our team is here to help with any questions.",
      },
      {
        question: "What are your hours?",
        answer: "Our team is available Monday through Friday, 9:00 AM to 6:00 PM Eastern Time. WhatsApp support may be available outside these hours for urgent inquiries.",
      },
      {
        question: "Can I speak to someone on WhatsApp?",
        answer: "Yes! We offer WhatsApp support for quick questions and real-time communication. Click the WhatsApp button on our website or message us directly at our business number.",
      },
    ],
  },
];

export default function FAQ() {
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
              FAQ
            </span>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-6">
              QUESTIONS? WE'VE GOT ANSWERS.
            </h1>
            <p className="text-lg md:text-xl text-gray-600 leading-relaxed">
              Everything you need to know about merchant cash advances and working with Green Street Capital.
            </p>
            <div className="w-16 h-1 bg-green-street-money mx-auto mt-8" />
          </motion.div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 md:py-32 bg-[#F5F3EE]">
        <div className="container mx-auto px-4 md:px-6">
          <div className="max-w-3xl mx-auto">
            {faqCategories.map((category, categoryIndex) => (
              <motion.div
                key={category.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.5, delay: categoryIndex * 0.1 }}
                className="mb-12"
              >
                <h2 className="text-2xl font-bold text-gray-900 mb-6 flex items-center gap-3">
                  <div className="w-1 h-8 bg-green-street-money rounded-full" />
                  {category.name}
                </h2>
                
                <Accordion type="single" collapsible className="space-y-3">
                  {category.faqs.map((faq, faqIndex) => (
                    <AccordionItem
                      key={faqIndex}
                      value={`${category.name}-${faqIndex}`}
                      className="bg-white rounded-lg border border-gray-100 px-6 overflow-hidden shadow-sm"
                    >
                      <AccordionTrigger 
                        className="text-left text-gray-900 hover:text-green-street-money py-5 text-base font-medium [&[data-state=open]>svg]:text-green-street-money"
                        data-testid={`accordion-${category.name.toLowerCase()}-${faqIndex}`}
                      >
                        {faq.question}
                      </AccordionTrigger>
                      <AccordionContent className="text-gray-600 leading-relaxed pb-5">
                        {faq.answer}
                      </AccordionContent>
                    </AccordionItem>
                  ))}
                </Accordion>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="relative py-20 md:py-32 overflow-hidden">
        <AnimatedBackground variant="light" />
        
        <div className="container mx-auto px-4 md:px-6 relative z-10">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
              CAN'T FIND YOUR ANSWER?
            </h2>
            <p className="text-gray-600 text-lg">
              Our team is here to help. Reach out anytime.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 max-w-xl mx-auto">
            <a
              href="https://wa.me/18001234567"
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto"
            >
              <Button
                data-testid="button-faq-whatsapp"
                size="lg"
                className="bg-green-street-money hover:bg-green-street-luxe text-white font-semibold w-full"
              >
                <MessageCircle className="mr-2" size={20} />
                Chat on WhatsApp
              </Button>
            </a>
            <a
              href="mailto:info@greenstreetcapital.io"
              className="w-full sm:w-auto"
            >
              <Button
                data-testid="button-faq-email"
                size="lg"
                variant="outline"
                className="border-gray-300 text-gray-700 hover:bg-gray-100 w-full"
              >
                <Mail className="mr-2" size={20} />
                Email Us
              </Button>
            </a>
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
              READY TO GET STARTED?
            </h2>
            <p className="text-white/80 text-lg mb-10">
              Check your rate in minutes. No credit impact.
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
