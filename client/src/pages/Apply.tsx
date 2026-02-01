import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { useMutation } from "@tanstack/react-query";
import { Button } from "@/components/ui/button";
import { motion, AnimatePresence } from "framer-motion";
import { AnimatedBackground } from "@/components/ui/AnimatedBackground";
import { 
  Form, 
  FormControl, 
  FormField, 
  FormItem, 
  FormLabel, 
  FormMessage 
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { 
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { useToast } from "@/hooks/use-toast";
import { apiRequest, queryClient } from "@/lib/queryClient";
import { insertApplicationSchema, type InsertApplication } from "@shared/schema";
import { 
  ArrowRight, 
  CheckCircle2, 
  Shield, 
  Clock, 
  CreditCard,
  Building2,
  User,
  Phone,
  Mail,
  DollarSign,
  Calendar,
  Loader2,
  Zap,
  FileText,
  TrendingUp,
  ArrowLeft
} from "lucide-react";

const applyFormSchema = insertApplicationSchema.extend({
  email: z.string().email("Valid email is required"),
  phone: z.string().min(10, "Valid phone number is required"),
});

type ApplyFormData = z.infer<typeof applyFormSchema>;

const heroCheckmarks = [
  "No blanket liens or asset claims",
  "Capped weekly payments for predictable cash flow",
  "Fast approvals in as little as 24 hours",
  "Compatible with all business types",
  "Transparent terms, no surprises",
  "No equity dilution",
];

const fundingAmounts = [
  { value: "5000-15000", label: "$5,000 - $15,000" },
  { value: "15000-25000", label: "$15,000 - $25,000" },
  { value: "25000-50000", label: "$25,000 - $50,000" },
  { value: "50000-100000", label: "$50,000 - $100,000" },
  { value: "100000-250000", label: "$100,000 - $250,000" },
  { value: "250000-500000", label: "$250,000 - $500,000" },
];

const monthlyRevenues = [
  { value: "10000-25000", label: "$10,000 - $25,000" },
  { value: "25000-50000", label: "$25,000 - $50,000" },
  { value: "50000-100000", label: "$50,000 - $100,000" },
  { value: "100000-250000", label: "$100,000 - $250,000" },
  { value: "250000+", label: "$250,000+" },
];

const timeInBusinessOptions = [
  { value: "6-12", label: "6 - 12 months" },
  { value: "1-2", label: "1 - 2 years" },
  { value: "2-5", label: "2 - 5 years" },
  { value: "5+", label: "5+ years" },
];

const industries = [
  { value: "restaurant", label: "Restaurant / Food Service" },
  { value: "retail", label: "Retail" },
  { value: "healthcare", label: "Healthcare" },
  { value: "automotive", label: "Automotive" },
  { value: "construction", label: "Construction" },
  { value: "professional", label: "Professional Services" },
  { value: "beauty", label: "Beauty / Salon" },
  { value: "ecommerce", label: "E-Commerce" },
  { value: "manufacturing", label: "Manufacturing" },
  { value: "other", label: "Other" },
];

const trustedBrands = [
  "Restaurant Depot",
  "AutoZone",
  "Sysco",
  "US Foods",
  "Grainger",
  "HD Supply",
];

export default function Apply() {
  const [step, setStep] = useState<"hero" | "form">("hero");
  const [selectedRevenue, setSelectedRevenue] = useState<string>("");
  const [isSubmitted, setIsSubmitted] = useState(false);
  const { toast } = useToast();

  const form = useForm<ApplyFormData>({
    resolver: zodResolver(applyFormSchema),
    defaultValues: {
      businessName: "",
      ownerName: "",
      email: "",
      phone: "",
      fundingAmount: "",
      monthlyRevenue: "",
      timeInBusiness: "",
      industry: "",
    },
  });

  const applicationMutation = useMutation({
    mutationFn: async (data: ApplyFormData) => {
      const response = await apiRequest("POST", "/api/applications", data);
      return response.json();
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["/api/applications"] });
      setIsSubmitted(true);
      toast({
        title: "Application Submitted!",
        description: "We'll be in touch within 24 hours.",
      });
    },
    onError: (error: Error) => {
      toast({
        title: "Something went wrong",
        description: error.message || "Please try again or contact us directly.",
        variant: "destructive",
      });
    },
  });

  const onSubmit = (data: ApplyFormData) => {
    applicationMutation.mutate(data);
  };

  const handleRevenueSelect = (revenue: string) => {
    setSelectedRevenue(revenue);
    form.setValue("monthlyRevenue", revenue);
    setStep("form");
  };

  if (isSubmitted) {
    return (
      <div className="min-h-screen pt-20 relative overflow-hidden">
        <AnimatedBackground variant="light" />
        <div className="relative z-10 flex items-center justify-center min-h-[80vh]">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            className="text-center px-4"
          >
            <div className="w-20 h-20 rounded-full bg-green-street-money flex items-center justify-center mx-auto mb-6">
              <CheckCircle2 size={40} className="text-white" />
            </div>
            <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Application Received!
            </h1>
            <p className="text-gray-600 text-lg max-w-md mx-auto mb-8">
              Thank you for your application. A funding specialist will contact you within 24 hours to discuss your options.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a href="https://wa.me/18001234567" target="_blank" rel="noopener noreferrer">
                <Button data-testid="button-success-whatsapp" className="bg-green-street-money hover:bg-green-street-luxe text-white font-semibold">
                  Chat on WhatsApp
                </Button>
              </a>
              <a href="/">
                <Button data-testid="button-success-home" variant="outline" className="border-gray-300 text-gray-700 hover:bg-gray-100">
                  Return Home
                </Button>
              </a>
            </div>
          </motion.div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen">
      <AnimatePresence mode="wait">
        {step === "hero" ? (
          <motion.div
            key="hero"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0, x: -50 }}
            transition={{ duration: 0.3 }}
          >
            {/* Hero Section */}
            <section className="relative min-h-screen pt-20 overflow-hidden bg-[#F5F3EE]">
              <AnimatedBackground variant="light" />
              
              <div className="container mx-auto px-4 md:px-6 relative z-10 py-12 md:py-20">
                <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-start max-w-6xl mx-auto">
                  {/* Left Column - Headlines & Benefits */}
                  <motion.div
                    initial={{ opacity: 0, x: -30 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.6 }}
                    className="space-y-8"
                  >
                    <div>
                      <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-gray-900 leading-tight mb-6">
                        Capital That Moves{" "}
                        <span className="text-green-street-money">As Fast As You Do</span>
                      </h1>
                      <p className="text-xl md:text-2xl text-gray-600 font-medium mb-4">
                        Lower Pricing. Higher Capacity. Flexible Structures.
                      </p>
                      <p className="text-gray-500 leading-relaxed">
                        Join 1,000+ brands who have already switched to smarter funding with Green Street Capital for:
                      </p>
                    </div>

                    <div className="space-y-3">
                      {heroCheckmarks.map((item, index) => (
                        <motion.div
                          key={index}
                          initial={{ opacity: 0, x: -20 }}
                          animate={{ opacity: 1, x: 0 }}
                          transition={{ delay: 0.1 + index * 0.05 }}
                          className="flex items-center gap-3"
                          data-testid={`checkmark-${index}`}
                        >
                          <CheckCircle2 size={20} className="text-green-street-money flex-shrink-0" />
                          <span className="text-gray-700">{item}</span>
                        </motion.div>
                      ))}
                    </div>
                  </motion.div>

                  {/* Right Column - Revenue Selection Card */}
                  <motion.div
                    initial={{ opacity: 0, x: 30 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.6, delay: 0.2 }}
                  >
                    <div className="bg-white rounded-2xl shadow-2xl border border-gray-100 overflow-hidden">
                      {/* Card Header */}
                      <div className="bg-gradient-to-r from-green-street-money to-green-street-luxe px-6 py-4">
                        <span className="text-white/90 text-sm font-medium">
                          Ready to Fund Your Next Move?
                        </span>
                      </div>
                      
                      {/* Card Body */}
                      <div className="p-6 md:p-8">
                        <p className="text-gray-600 text-sm mb-6">
                          Free consultation. Decisions in as little as 24 hours. No blanket liens. Pay early without penalty.
                        </p>

                        <h3 className="text-gray-900 font-bold text-lg text-center mb-6">
                          Get started by selecting your business monthly revenue
                        </h3>

                        <div className="space-y-3">
                          <button
                            onClick={() => handleRevenueSelect("100000-250000")}
                            className="w-full py-4 px-6 rounded-lg border-2 border-gray-200 text-gray-900 font-semibold text-center hover:border-green-street-money hover:bg-green-street-money/5 transition-all"
                            data-testid="button-revenue-high"
                          >
                            $100K OR MORE
                          </button>
                          <button
                            onClick={() => handleRevenueSelect("50000-100000")}
                            className="w-full py-4 px-6 rounded-lg border-2 border-gray-200 text-gray-900 font-semibold text-center hover:border-green-street-money hover:bg-green-street-money/5 transition-all"
                            data-testid="button-revenue-low"
                          >
                            $99K OR LESS
                          </button>
                        </div>

                        <div className="mt-8 pt-6 border-t border-gray-100 flex items-center justify-center gap-6 text-xs text-gray-500">
                          <div className="flex items-center gap-2">
                            <Shield size={14} className="text-green-street-money" />
                            <span>256-bit SSL</span>
                          </div>
                          <div className="flex items-center gap-2">
                            <Clock size={14} className="text-green-street-money" />
                            <span>5-min application</span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </motion.div>
                </div>
              </div>

              {/* Social Proof Section */}
              <div className="relative z-10 border-t border-gray-200 bg-white/80 backdrop-blur-sm py-10">
                <div className="container mx-auto px-4 md:px-6">
                  <p className="text-center text-gray-900 font-bold text-lg md:text-xl mb-8">
                    $50M+ Deployed For Thousands Of Brands Like Yours
                  </p>
                  <div className="flex flex-wrap justify-center items-center gap-6 md:gap-12">
                    {trustedBrands.map((brand, index) => (
                      <span 
                        key={index} 
                        className="text-gray-400 font-semibold text-sm md:text-base tracking-wide"
                      >
                        {brand}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </section>
          </motion.div>
        ) : (
          <motion.div
            key="form"
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
          >
            {/* Application Form Section */}
            <section className="relative min-h-screen pt-20 overflow-hidden bg-[#F5F3EE]">
              <AnimatedBackground variant="light" />

              <div className="container mx-auto px-4 md:px-6 relative z-10 py-12 md:py-16">
                <div className="max-w-3xl mx-auto">
                  {/* Back Button */}
                  <motion.button
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    onClick={() => setStep("hero")}
                    className="flex items-center gap-2 text-gray-600 hover:text-gray-900 mb-8 transition-colors"
                    data-testid="button-back"
                  >
                    <ArrowLeft size={20} />
                    <span>Back to options</span>
                  </motion.button>

                  {/* Form Header */}
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="text-center mb-10"
                  >
                    <span className="inline-block text-green-street-money text-xs font-semibold uppercase tracking-[0.3em] mb-4">
                      Almost There
                    </span>
                    <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-3">
                      Complete Your Application
                    </h1>
                    <p className="text-gray-600">
                      Selected revenue: <span className="font-semibold text-green-street-money">
                        {selectedRevenue === "100000-250000" ? "$100K+" : "$99K or less"} / month
                      </span>
                    </p>
                  </motion.div>

                  {/* Application Form */}
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.1 }}
                    className="bg-white rounded-2xl p-6 md:p-10 shadow-xl border border-gray-100"
                  >
                    <Form {...form}>
                      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6" data-testid="form-apply">
                        <div className="grid sm:grid-cols-2 gap-6">
                          <FormField
                            control={form.control}
                            name="businessName"
                            render={({ field }) => (
                              <FormItem>
                                <FormLabel className="text-gray-700 text-sm font-medium flex items-center gap-2">
                                  <Building2 size={16} className="text-green-street-money" />
                                  Business Name
                                </FormLabel>
                                <FormControl>
                                  <Input
                                    {...field}
                                    data-testid="input-business-name"
                                    placeholder="Your Business Name"
                                    className="bg-gray-50 border-gray-200 text-gray-900 placeholder:text-gray-400 focus:border-green-street-money focus:ring-green-street-money"
                                  />
                                </FormControl>
                                <FormMessage />
                              </FormItem>
                            )}
                          />

                          <FormField
                            control={form.control}
                            name="ownerName"
                            render={({ field }) => (
                              <FormItem>
                                <FormLabel className="text-gray-700 text-sm font-medium flex items-center gap-2">
                                  <User size={16} className="text-green-street-money" />
                                  Owner Name
                                </FormLabel>
                                <FormControl>
                                  <Input
                                    {...field}
                                    data-testid="input-owner-name"
                                    placeholder="Your Full Name"
                                    className="bg-gray-50 border-gray-200 text-gray-900 placeholder:text-gray-400 focus:border-green-street-money focus:ring-green-street-money"
                                  />
                                </FormControl>
                                <FormMessage />
                              </FormItem>
                            )}
                          />

                          <FormField
                            control={form.control}
                            name="email"
                            render={({ field }) => (
                              <FormItem>
                                <FormLabel className="text-gray-700 text-sm font-medium flex items-center gap-2">
                                  <Mail size={16} className="text-green-street-money" />
                                  Email Address
                                </FormLabel>
                                <FormControl>
                                  <Input
                                    {...field}
                                    data-testid="input-email"
                                    type="email"
                                    placeholder="you@business.com"
                                    className="bg-gray-50 border-gray-200 text-gray-900 placeholder:text-gray-400 focus:border-green-street-money focus:ring-green-street-money"
                                  />
                                </FormControl>
                                <FormMessage />
                              </FormItem>
                            )}
                          />

                          <FormField
                            control={form.control}
                            name="phone"
                            render={({ field }) => (
                              <FormItem>
                                <FormLabel className="text-gray-700 text-sm font-medium flex items-center gap-2">
                                  <Phone size={16} className="text-green-street-money" />
                                  Phone Number
                                </FormLabel>
                                <FormControl>
                                  <Input
                                    {...field}
                                    data-testid="input-phone"
                                    type="tel"
                                    placeholder="(555) 123-4567"
                                    className="bg-gray-50 border-gray-200 text-gray-900 placeholder:text-gray-400 focus:border-green-street-money focus:ring-green-street-money"
                                  />
                                </FormControl>
                                <FormMessage />
                              </FormItem>
                            )}
                          />

                          <FormField
                            control={form.control}
                            name="fundingAmount"
                            render={({ field }) => (
                              <FormItem>
                                <FormLabel className="text-gray-700 text-sm font-medium flex items-center gap-2">
                                  <DollarSign size={16} className="text-green-street-money" />
                                  Funding Amount Needed
                                </FormLabel>
                                <Select onValueChange={field.onChange} defaultValue={field.value}>
                                  <FormControl>
                                    <SelectTrigger 
                                      data-testid="select-funding-amount"
                                      className="bg-gray-50 border-gray-200 text-gray-900 focus:border-green-street-money"
                                    >
                                      <SelectValue placeholder="Select amount" />
                                    </SelectTrigger>
                                  </FormControl>
                                  <SelectContent className="bg-white border-gray-200">
                                    {fundingAmounts.map((amount) => (
                                      <SelectItem 
                                        key={amount.value} 
                                        value={amount.value}
                                        className="text-gray-900 focus:bg-green-street-money/10"
                                      >
                                        {amount.label}
                                      </SelectItem>
                                    ))}
                                  </SelectContent>
                                </Select>
                                <FormMessage />
                              </FormItem>
                            )}
                          />

                          <FormField
                            control={form.control}
                            name="timeInBusiness"
                            render={({ field }) => (
                              <FormItem>
                                <FormLabel className="text-gray-700 text-sm font-medium flex items-center gap-2">
                                  <Calendar size={16} className="text-green-street-money" />
                                  Time in Business
                                </FormLabel>
                                <Select onValueChange={field.onChange} defaultValue={field.value}>
                                  <FormControl>
                                    <SelectTrigger 
                                      data-testid="select-time-in-business"
                                      className="bg-gray-50 border-gray-200 text-gray-900 focus:border-green-street-money"
                                    >
                                      <SelectValue placeholder="Select duration" />
                                    </SelectTrigger>
                                  </FormControl>
                                  <SelectContent className="bg-white border-gray-200">
                                    {timeInBusinessOptions.map((option) => (
                                      <SelectItem 
                                        key={option.value} 
                                        value={option.value}
                                        className="text-gray-900 focus:bg-green-street-money/10"
                                      >
                                        {option.label}
                                      </SelectItem>
                                    ))}
                                  </SelectContent>
                                </Select>
                                <FormMessage />
                              </FormItem>
                            )}
                          />

                          <FormField
                            control={form.control}
                            name="industry"
                            render={({ field }) => (
                              <FormItem className="sm:col-span-2">
                                <FormLabel className="text-gray-700 text-sm font-medium flex items-center gap-2">
                                  <Building2 size={16} className="text-green-street-money" />
                                  Industry
                                </FormLabel>
                                <Select onValueChange={field.onChange} defaultValue={field.value}>
                                  <FormControl>
                                    <SelectTrigger 
                                      data-testid="select-industry"
                                      className="bg-gray-50 border-gray-200 text-gray-900 focus:border-green-street-money"
                                    >
                                      <SelectValue placeholder="Select industry" />
                                    </SelectTrigger>
                                  </FormControl>
                                  <SelectContent className="bg-white border-gray-200">
                                    {industries.map((industry) => (
                                      <SelectItem 
                                        key={industry.value} 
                                        value={industry.value}
                                        className="text-gray-900 focus:bg-green-street-money/10"
                                      >
                                        {industry.label}
                                      </SelectItem>
                                    ))}
                                  </SelectContent>
                                </Select>
                                <FormMessage />
                              </FormItem>
                            )}
                          />
                        </div>

                        <Button
                          type="submit"
                          data-testid="button-submit-application"
                          disabled={applicationMutation.isPending}
                          className="bg-green-street-money hover:bg-green-street-luxe text-white font-semibold w-full py-6 text-lg shadow-lg rounded-xl"
                        >
                          {applicationMutation.isPending ? (
                            <>
                              <Loader2 className="mr-2 animate-spin" size={20} />
                              Submitting...
                            </>
                          ) : (
                            <>
                              Check Your Rate
                              <ArrowRight className="ml-2" size={20} />
                            </>
                          )}
                        </Button>

                        <p className="text-gray-500 text-xs text-center">
                          By submitting, you agree to our Terms of Service and Privacy Policy. 
                          Checking your rate will not impact your credit score.
                        </p>
                      </form>
                    </Form>
                  </motion.div>

                  {/* Trust Badges */}
                  <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.3 }}
                    className="mt-8 flex flex-wrap justify-center gap-6 text-sm text-gray-500"
                  >
                    <div className="flex items-center gap-2">
                      <Shield size={16} className="text-green-street-money" />
                      <span>256-bit SSL Encryption</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Clock size={16} className="text-green-street-money" />
                      <span>24-Hour Decisions</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <CheckCircle2 size={16} className="text-green-street-money" />
                      <span>No Credit Impact</span>
                    </div>
                  </motion.div>
                </div>
              </div>
            </section>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
