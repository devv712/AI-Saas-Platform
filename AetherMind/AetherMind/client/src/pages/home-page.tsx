import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Brain, Sparkles, Award, Building, Bot, LineChart, Zap, CircuitBoard } from "lucide-react";
import { Link } from "wouter";

const testimonials = [
  {
    name: "Sarah Johnson",
    role: "CTO, TechCorp",
    content: "AetherMind has transformed our business operations. The AI insights are invaluable.",
    company: "TechCorp Inc."
  },
  {
    name: "Michael Chen",
    role: "CEO, DataFlow",
    content: "The best AI solution we've used. Incredible ROI and outstanding support.",
    company: "DataFlow Analytics"
  },
  {
    name: "Emily Rodriguez",
    role: "Head of Innovation, FutureScale",
    content: "The AI models have drastically improved our decision-making process.",
    company: "FutureScale"
  }
];

const clients = [
  "TechCorp Inc.", "DataFlow Analytics", "InnovateTech", "FutureScale"
];

const industries = [
  {
    icon: LineChart,
    title: "Finance",
    description: "AI-powered risk assessment and market prediction"
  },
  {
    icon: Bot,
    title: "Healthcare",
    description: "Advanced diagnostic assistance and patient care optimization"
  },
  {
    icon: Zap,
    title: "E-commerce",
    description: "Intelligent product recommendations and inventory management"
  },
  {
    icon: CircuitBoard,
    title: "Manufacturing",
    description: "Predictive maintenance and quality control automation"
  }
];

export default function HomePage() {
  return (
    <div className="min-h-screen">
      {/* Hero Section with enhanced gradients */}
      <motion.section 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
        className="relative h-screen flex items-center justify-center overflow-hidden"
      >
        <div className="absolute inset-0 bg-gradient-to-br from-background via-primary/5 to-primary/10" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(var(--primary-rgb),0.1)_0%,transparent_100%)]" />

        <div className="container mx-auto px-4 text-center space-y-8 relative z-10">
          <motion.h1 
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="text-6xl md:text-7xl font-bold"
          >
            <span className="bg-gradient-to-r from-primary to-primary/60 bg-clip-text text-transparent">
              Power Your Business
            </span>
            <br />
            <span className="bg-gradient-to-r from-primary/90 to-primary/50 bg-clip-text text-transparent">
              With Advanced AI
            </span>
          </motion.h1>

          <motion.p
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.4 }}
            className="text-xl text-muted-foreground max-w-2xl mx-auto"
          >
            Transform your business with AI-powered insights, automation, and intelligent decision-making
          </motion.p>

          <motion.div
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.6 }}
            className="flex gap-4 justify-center"
          >
            <Button asChild size="lg" className="bg-primary hover:bg-primary/90">
              <Link href="/auth">Get Started Free</Link>
            </Button>
            <Button asChild size="lg" variant="outline" className="border-primary/20 hover:bg-primary/10">
              <Link href="/services">Book a Demo</Link>
            </Button>
          </motion.div>
        </div>

        {/* Animated background elements */}
        <motion.div 
          className="absolute inset-0 pointer-events-none"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.8 }}
        >
          {[...Array(5)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute h-64 w-64 bg-primary/5 rounded-full filter blur-3xl"
              animate={{
                x: [Math.random() * 100, Math.random() * -100],
                y: [Math.random() * 100, Math.random() * -100],
              }}
              transition={{
                duration: 15,
                repeat: Infinity,
                repeatType: "reverse",
                delay: i * 0.5,
              }}
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
              }}
            />
          ))}
        </motion.div>
      </motion.section>

      {/* Industries Served */}
      <section className="py-20 bg-gradient-to-b from-background to-primary/5">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Industries We Serve</h2>
          <div className="grid md:grid-cols-4 gap-8">
            {industries.map((industry, index) => (
              <motion.div
                key={index}
                initial={{ y: 20, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                transition={{ delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <Card className="relative overflow-hidden group hover:border-primary/50 transition-colors">
                  <CardContent className="pt-6">
                    <div className="mb-4 relative">
                      <industry.icon className="h-12 w-12 text-primary" />
                      <div className="absolute inset-0 bg-primary/20 filter blur-xl opacity-0 group-hover:opacity-100 transition-opacity" />
                    </div>
                    <h3 className="text-xl font-semibold mb-2">{industry.title}</h3>
                    <p className="text-muted-foreground">{industry.description}</p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Features with enhanced visuals */}
      <section className="py-20 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-background" />
        <div className="container mx-auto px-4 relative z-10">
          <h2 className="text-3xl font-bold text-center mb-12">Why Choose AetherMind?</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                icon: Brain,
                title: "Advanced AI",
                description: "State-of-the-art machine learning models for intelligent automation"
              },
              {
                icon: Sparkles,
                title: "Easy Integration",
                description: "Seamlessly integrate with your existing business tools and workflows"
              },
              {
                icon: Award,
                title: "Proven Results",
                description: "95% customer satisfaction with measurable business impact"
              }
            ].map((feature, index) => (
              <motion.div
                key={index}
                initial={{ y: 20, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                transition={{ delay: index * 0.2 }}
                viewport={{ once: true }}
              >
                <Card className="relative h-full group hover:border-primary/50 transition-all duration-300">
                  <div className="absolute inset-0 bg-gradient-to-br from-primary/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
                  <CardContent className="pt-6 relative z-10">
                    <feature.icon className="h-12 w-12 text-primary mb-4" />
                    <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
                    <p className="text-muted-foreground">{feature.description}</p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Enhanced Testimonials */}
      <section className="py-20 bg-gradient-to-b from-primary/5 to-background">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">What Our Clients Say</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <motion.div
                key={index}
                initial={{ scale: 0.95, opacity: 0 }}
                whileInView={{ scale: 1, opacity: 1 }}
                transition={{ delay: index * 0.2 }}
                viewport={{ once: true }}
              >
                <Card className="h-full group hover:border-primary/50 transition-colors">
                  <CardContent className="pt-6">
                    <p className="text-lg mb-4">"{testimonial.content}"</p>
                    <div className="flex items-center gap-4">
                      <div className="h-12 w-12 rounded-full bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                        <Building className="h-6 w-6 text-primary" />
                      </div>
                      <div>
                        <p className="font-semibold">{testimonial.name}</p>
                        <p className="text-sm text-muted-foreground">{testimonial.role}</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Client Logos with enhanced styling */}
      <section className="py-12 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-primary/5 via-transparent to-primary/5" />
        <div className="container mx-auto px-4 relative z-10">
          <h3 className="text-center text-xl font-semibold mb-8">Trusted by Industry Leaders</h3>
          <div className="flex flex-wrap justify-center gap-8">
            {clients.map((client, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-background/50 backdrop-blur-sm rounded-lg px-6 py-3 shadow-sm border border-primary/20 hover:border-primary/50 transition-colors"
              >
                <span className="font-semibold text-primary">{client}</span>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}