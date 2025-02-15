import { motion } from "framer-motion";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Brain, Cpu, LineChart, MessageSquare } from "lucide-react";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";

const features = [
  {
    icon: Brain,
    title: "AI-Powered Automation",
    description: "Streamline your business processes with intelligent automation powered by advanced AI algorithms.",
    details: {
      benefits: [
        "Reduce manual work by up to 80%",
        "24/7 automated operations",
        "Smart workflow optimization",
        "Real-time process monitoring"
      ],
      technologies: ["Machine Learning", "Natural Language Processing", "Computer Vision"],
      useCase: "A leading manufacturer reduced production errors by 65% using our AI automation system."
    }
  },
  {
    icon: LineChart,
    title: "Data Analytics",
    description: "Transform raw data into actionable insights with our powerful analytics tools.",
    details: {
      benefits: [
        "Real-time data visualization",
        "Predictive analytics",
        "Custom reporting dashboards",
        "Automated insights generation"
      ],
      technologies: ["Deep Learning", "Statistical Analysis", "Big Data Processing"],
      useCase: "A retail chain increased sales by 45% using our predictive analytics platform."
    }
  },
  {
    icon: MessageSquare,
    title: "Intelligent Chatbot",
    description: "Engage customers 24/7 with our AI-powered conversational assistant.",
    details: {
      benefits: [
        "Instant customer support",
        "Multi-language support",
        "Context-aware responses",
        "Seamless human handover"
      ],
      technologies: ["Natural Language Processing", "Sentiment Analysis", "Dialog Management"],
      useCase: "A financial institution reduced support costs by 50% with our AI chatbot."
    }
  },
  {
    icon: Cpu,
    title: "Machine Learning",
    description: "Custom ML models tailored to your business needs for better decision-making.",
    details: {
      benefits: [
        "Custom model development",
        "Automated model training",
        "Continuous optimization",
        "Scalable infrastructure"
      ],
      technologies: ["Deep Learning", "Transfer Learning", "AutoML"],
      useCase: "A healthcare provider improved diagnosis accuracy by 40% using our ML models."
    }
  },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
    },
  },
};

const itemVariants = {
  hidden: { y: 20, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
  },
};

const floatingAnimation = {
  y: [0, -10, 0],
  transition: {
    duration: 3,
    repeat: Infinity,
    ease: "easeInOut",
  },
};

export default function ServicesPage() {
  return (
    <div className="container mx-auto px-4 py-16">
      <motion.div
        initial="hidden"
        animate="visible"
        variants={containerVariants}
        className="space-y-12"
      >
        <div className="text-center space-y-4">
          <motion.div animate={floatingAnimation}>
            <motion.h1 
              className="text-4xl font-bold bg-gradient-to-r from-primary to-primary/60 bg-clip-text text-transparent"
              variants={itemVariants}
            >
              Our AI Solutions
            </motion.h1>
          </motion.div>
          <motion.p 
            className="text-xl text-muted-foreground max-w-2xl mx-auto"
            variants={itemVariants}
          >
            Transforming businesses with cutting-edge artificial intelligence
          </motion.p>
        </div>

        <motion.div 
          className="grid md:grid-cols-2 gap-6"
          variants={containerVariants}
        >
          {features.map((feature, index) => (
            <motion.div key={index} variants={itemVariants}>
              <Card className="h-full transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-primary/20">
                <CardHeader>
                  <motion.div 
                    animate={floatingAnimation}
                    className="mb-4"
                  >
                    <feature.icon className="h-12 w-12 text-primary" />
                  </motion.div>
                  <CardTitle>{feature.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground mb-4">{feature.description}</p>
                  <Dialog>
                    <DialogTrigger asChild>
                      <Button variant="outline">Learn More</Button>
                    </DialogTrigger>
                    <DialogContent className="sm:max-w-[425px]">
                      <DialogHeader>
                        <DialogTitle className="flex items-center gap-2">
                          <feature.icon className="h-6 w-6 text-primary" />
                          {feature.title}
                        </DialogTitle>
                      </DialogHeader>
                      <div className="space-y-4 py-4">
                        <div>
                          <h4 className="font-semibold mb-2">Key Benefits</h4>
                          <ul className="list-disc list-inside space-y-1 text-muted-foreground">
                            {feature.details.benefits.map((benefit, i) => (
                              <li key={i}>{benefit}</li>
                            ))}
                          </ul>
                        </div>
                        <div>
                          <h4 className="font-semibold mb-2">Technologies Used</h4>
                          <div className="flex flex-wrap gap-2">
                            {feature.details.technologies.map((tech, i) => (
                              <span
                                key={i}
                                className="px-2 py-1 bg-primary/10 rounded-full text-sm text-primary"
                              >
                                {tech}
                              </span>
                            ))}
                          </div>
                        </div>
                        <div>
                          <h4 className="font-semibold mb-2">Success Story</h4>
                          <p className="text-muted-foreground">{feature.details.useCase}</p>
                        </div>
                      </div>
                    </DialogContent>
                  </Dialog>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </motion.div>

        <motion.div 
          className="text-center space-y-6 max-w-2xl mx-auto"
          variants={containerVariants}
        >
          <motion.h2 
            className="text-3xl font-bold"
            variants={itemVariants}
          >
            Ready to Transform Your Business?
          </motion.h2>
          <motion.p 
            className="text-muted-foreground"
            variants={itemVariants}
          >
            Join thousands of businesses already leveraging our AI solutions
          </motion.p>
          <motion.div variants={itemVariants}>
            <Button size="lg" className="bg-primary hover:bg-primary/90">
              Get Started
            </Button>
          </motion.div>
        </motion.div>
      </motion.div>
    </div>
  );
}