import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import { AnimatedBackground } from "@/components/ui/AnimatedBackground";
import { 
  AlertCircle, 
  ArrowRight, 
  CheckCircle2, 
  XCircle,
  Calculator,
  Percent,
  DollarSign,
  Calendar,
  Info
} from "lucide-react";

const pricingOverview = [
  { factor: "Funding Amount", range: "$5,000 — $500,000" },
  { factor: "Factor Rate", range: "1.10 — 1.50" },
  { factor: "Purchased Amount", range: "Funding × Factor Rate" },
  { factor: "Remittance", range: "5% — 20% of daily/weekly receivables" },
  { factor: "Term", range: "Estimated 3-18 months (varies by revenue)" },
];

const fees = [
  { name: "Origination Fee", value: "Varies (typically included in factor rate)", included: true },
  { name: "Late Fees", value: "None (repayment is automatic)", none: true },
  { name: "Prepayment Penalty", value: "None", none: true },
  { name: "Application Fee", value: "$0", none: true },
  { name: "Hidden Fees", value: "None", none: true },
];

export default function Rates() {
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
              Rates & Terms
            </span>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-6">
              TRANSPARENT PRICING
            </h1>
            <p className="text-lg md:text-xl text-gray-600 leading-relaxed">
              No hidden fees. No surprises. Know exactly what you're getting.
            </p>
            <div className="w-16 h-1 bg-green-street-money mx-auto mt-8" />
          </motion.div>
        </div>
      </section>

      {/* Important Notice */}
      <section className="py-12 bg-[#F5F3EE]">
        <div className="container mx-auto px-4 md:px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="max-w-3xl mx-auto"
          >
            <div className="bg-amber-50 rounded-xl p-6 border border-amber-200">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-lg bg-amber-100 flex items-center justify-center flex-shrink-0">
                  <AlertCircle size={24} className="text-amber-600" />
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-amber-800 mb-2">
                    Important Notice
                  </h3>
                  <p className="text-amber-700 leading-relaxed">
                    Green Street Capital provides merchant cash advances, <strong>NOT loans</strong>. We purchase a portion of your future receivables at a discount. There is no interest rate or fixed repayment term.
                  </p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Pricing Overview */}
      <section className="relative py-20 md:py-32 overflow-hidden">
        <AnimatedBackground variant="light" />
        
        <div className="container mx-auto px-4 md:px-6 relative z-10">
          <div className="text-center mb-16">
            <span className="inline-block text-green-street-money text-xs font-semibold uppercase tracking-[0.2em] mb-4">
              Pricing
            </span>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
              PRICING OVERVIEW
            </h2>
            <p className="text-gray-600 text-lg">
              Flexible terms tailored to your business.
            </p>
          </div>

          <div className="max-w-3xl mx-auto">
            <div className="bg-white rounded-xl shadow-xl border border-gray-100 overflow-hidden">
              <div className="overflow-x-auto">
                <table className="w-full">
                  <thead>
                    <tr className="border-b border-gray-100 bg-gray-50">
                      <th className="text-left py-4 px-6 text-gray-700 text-sm font-semibold uppercase tracking-wider">
                        Factor
                      </th>
                      <th className="text-right py-4 px-6 text-gray-700 text-sm font-semibold uppercase tracking-wider">
                        Range
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    {pricingOverview.map((item, index) => (
                      <motion.tr
                        key={item.factor}
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.4, delay: index * 0.05 }}
                        className="border-b border-gray-50 last:border-0"
                      >
                        <td className="py-4 px-6 text-gray-900 font-medium">
                          {item.factor}
                        </td>
                        <td className="py-4 px-6 text-right text-green-street-money font-semibold">
                          {item.range}
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

      {/* Factor Rates Explanation */}
      <section className="py-20 md:py-32 bg-[#F5F3EE]">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid lg:grid-cols-2 gap-12 items-start max-w-5xl mx-auto">
            <div>
              <span className="inline-block text-green-street-money text-xs font-semibold uppercase tracking-[0.2em] mb-4">
                Understanding Factor Rates
              </span>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                HOW FACTOR RATES WORK
              </h2>
              <p className="text-gray-600 text-lg mb-6 leading-relaxed">
                Unlike traditional loans with interest rates, merchant cash advances use factor rates. A factor rate is a multiplier applied to your funding amount.
              </p>
              <p className="text-gray-600 leading-relaxed mb-8">
                For example, if you receive $50,000 with a factor rate of 1.25, you'll repay $62,500 total. This amount is collected gradually as a percentage of your daily or weekly receivables.
              </p>
              
              <div className="flex items-center gap-4 p-4 bg-white rounded-lg border border-gray-200">
                <Info size={20} className="text-green-street-money flex-shrink-0" />
                <p className="text-gray-600 text-sm">
                  Factor rates are not the same as APR. They represent the total cost of capital, not an annual rate.
                </p>
              </div>
            </div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="bg-white rounded-xl p-8 shadow-xl border border-gray-100"
            >
              <div className="flex items-center gap-3 mb-6">
                <div className="w-10 h-10 rounded-lg bg-green-street-money/10 flex items-center justify-center">
                  <Calculator size={20} className="text-green-street-money" />
                </div>
                <h3 className="text-xl font-bold text-gray-900">
                  Example Calculation
                </h3>
              </div>

              <div className="space-y-4">
                <div className="flex items-center justify-between py-3 border-b border-gray-100">
                  <div className="flex items-center gap-3">
                    <DollarSign size={18} className="text-gray-400" />
                    <span className="text-gray-600">Funding Amount</span>
                  </div>
                  <span className="text-gray-900 font-semibold">$50,000</span>
                </div>
                <div className="flex items-center justify-between py-3 border-b border-gray-100">
                  <div className="flex items-center gap-3">
                    <Percent size={18} className="text-gray-400" />
                    <span className="text-gray-600">Factor Rate</span>
                  </div>
                  <span className="text-gray-900 font-semibold">1.25</span>
                </div>
                <div className="flex items-center justify-between py-3 border-b border-gray-100">
                  <div className="flex items-center gap-3">
                    <Calculator size={18} className="text-gray-400" />
                    <span className="text-gray-600">Total to Repay</span>
                  </div>
                  <span className="text-green-street-money font-bold text-xl">$62,500</span>
                </div>
                <div className="flex items-center justify-between py-3">
                  <div className="flex items-center gap-3">
                    <Calendar size={18} className="text-gray-400" />
                    <span className="text-gray-600">Cost of Capital</span>
                  </div>
                  <span className="text-gray-900 font-semibold">$12,500</span>
                </div>
              </div>

              <div className="mt-6 p-4 bg-green-street-money/10 rounded-lg">
                <p className="text-gray-700 text-sm text-center">
                  You receive <span className="text-gray-900 font-bold">$50,000</span>, you remit <span className="text-green-street-money font-bold">$62,500</span> over time
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Fee Structure */}
      <section className="relative py-20 md:py-32 overflow-hidden">
        <AnimatedBackground variant="light" />
        
        <div className="container mx-auto px-4 md:px-6 relative z-10">
          <div className="text-center mb-16">
            <span className="inline-block text-green-street-money text-xs font-semibold uppercase tracking-[0.2em] mb-4">
              Fees
            </span>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
              FEE STRUCTURE
            </h2>
            <p className="text-gray-600 text-lg">
              What you see is what you get. No surprises.
            </p>
          </div>

          <div className="max-w-2xl mx-auto space-y-4">
            {fees.map((fee, index) => (
              <motion.div
                key={fee.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
                className="bg-white rounded-xl p-5 shadow-lg border border-gray-100"
              >
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-4">
                    {fee.none ? (
                      <div className="w-8 h-8 rounded-full bg-green-street-money/20 flex items-center justify-center">
                        <CheckCircle2 size={16} className="text-green-street-money" />
                      </div>
                    ) : (
                      <div className="w-8 h-8 rounded-full bg-gray-100 flex items-center justify-center">
                        <Info size={16} className="text-gray-500" />
                      </div>
                    )}
                    <span className="text-gray-900 font-medium">{fee.name}</span>
                  </div>
                  <span className={fee.none ? "text-green-street-money font-semibold" : "text-gray-600"}>
                    {fee.value}
                  </span>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* State Disclosures */}
      <section className="py-12 bg-[#F5F3EE]">
        <div className="container mx-auto px-4 md:px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="max-w-3xl mx-auto"
          >
            <div className="bg-white rounded-xl p-6 shadow-lg border border-gray-100">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-lg bg-gray-100 flex items-center justify-center flex-shrink-0">
                  <Info size={24} className="text-gray-500" />
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">
                    State-Specific Disclosures
                  </h3>
                  <p className="text-gray-600 leading-relaxed">
                    Certain states require additional disclosures. If you are located in California, Virginia, Utah, or New York, you will receive state-mandated disclosure documents as part of your offer.
                  </p>
                </div>
              </div>
            </div>
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
              SEE YOUR PERSONALIZED RATE
            </h2>
            <p className="text-white/80 text-lg mb-10">
              Every business is unique. Check your rate with no impact to your credit score.
            </p>
            <Link href="/apply">
              <Button
                data-testid="button-cta-rate"
                size="lg"
                className="bg-white text-green-street-money hover:bg-gray-100 font-semibold px-10 py-6 text-lg shadow-lg"
              >
                Check Your Rate
                <ArrowRight className="ml-2" size={20} />
              </Button>
            </Link>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
