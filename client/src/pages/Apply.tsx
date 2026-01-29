import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { useMutation } from "@tanstack/react-query";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
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
  Loader2
} from "lucide-react";

const applyFormSchema = insertApplicationSchema.extend({
  email: z.string().email("Valid email is required"),
  phone: z.string().min(10, "Valid phone number is required"),
});

type ApplyFormData = z.infer<typeof applyFormSchema>;

const benefits = [
  { icon: Clock, text: "5-minute application" },
  { icon: Shield, text: "No credit impact to check rate" },
  { icon: CheckCircle2, text: "Same-day decision" },
  { icon: CreditCard, text: "24-hour funding" },
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

export default function Apply() {
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
    <div className="min-h-screen pt-20">
      <section className="relative py-12 md:py-20 overflow-hidden">
        <AnimatedBackground variant="light" />

        <div className="container mx-auto px-4 md:px-6 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-xl mx-auto text-center mb-12"
          >
            <span className="inline-block text-green-street-money text-xs font-semibold uppercase tracking-[0.3em] mb-4">
              Apply Now
            </span>
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
              CHECK YOUR RATE
            </h1>
            <p className="text-gray-600 leading-relaxed">
              Complete our quick application. No credit impact.
            </p>
          </motion.div>

          <div className="grid lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
            <div className="lg:col-span-2">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                className="bg-white rounded-xl p-8 shadow-xl border border-gray-100"
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
                        name="monthlyRevenue"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel className="text-gray-700 text-sm font-medium flex items-center gap-2">
                              <DollarSign size={16} className="text-green-street-money" />
                              Monthly Revenue
                            </FormLabel>
                            <Select onValueChange={field.onChange} defaultValue={field.value}>
                              <FormControl>
                                <SelectTrigger 
                                  data-testid="select-monthly-revenue"
                                  className="bg-gray-50 border-gray-200 text-gray-900 focus:border-green-street-money"
                                >
                                  <SelectValue placeholder="Select revenue" />
                                </SelectTrigger>
                              </FormControl>
                              <SelectContent className="bg-white border-gray-200">
                                {monthlyRevenues.map((revenue) => (
                                  <SelectItem 
                                    key={revenue.value} 
                                    value={revenue.value}
                                    className="text-gray-900 focus:bg-green-street-money/10"
                                  >
                                    {revenue.label}
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
                          <FormItem>
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
                      className="bg-green-street-money hover:bg-green-street-luxe text-white font-semibold w-full py-6 text-lg shadow-lg"
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
            </div>

            <div className="space-y-6">
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: 0.2 }}
                className="bg-white rounded-xl p-6 shadow-lg border border-gray-100"
              >
                <h3 className="text-lg font-bold text-gray-900 mb-6">
                  Why Apply With Us
                </h3>
                <div className="space-y-4">
                  {benefits.map((benefit, index) => (
                    <div key={index} className="flex items-center gap-3" data-testid={`benefit-${index}`}>
                      <div className="w-10 h-10 rounded-lg bg-green-street-money/10 flex items-center justify-center flex-shrink-0">
                        <benefit.icon size={18} className="text-green-street-money" />
                      </div>
                      <span className="text-gray-700 text-sm">
                        {benefit.text}
                      </span>
                    </div>
                  ))}
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: 0.3 }}
                className="bg-white rounded-xl p-6 shadow-lg border border-gray-100"
              >
                <div className="flex items-center gap-3 mb-4">
                  <Shield size={20} className="text-green-street-money" />
                  <h3 className="font-bold text-gray-900">
                    Your Data is Secure
                  </h3>
                </div>
                <p className="text-gray-600 text-sm leading-relaxed">
                  We use 256-bit SSL encryption to protect your information. Your data is never sold or shared with third parties.
                </p>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: 0.4 }}
                className="bg-green-street-money rounded-xl p-6 shadow-lg"
              >
                <div className="text-center">
                  <div className="text-2xl font-bold text-white mb-1">
                    Questions?
                  </div>
                  <p className="text-white/80 text-sm mb-4">
                    We're here to help
                  </p>
                  <a 
                    href="tel:+18001234567" 
                    className="text-white font-semibold hover:underline"
                    data-testid="link-phone-sidebar"
                  >
                    (800) 123-4567
                  </a>
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
