import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { CircleDollarSign, Building2, LockKeyhole, LineChart, Coins, BarChart3 } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';

type BenefitCardProps = {
  title: string;
  description: string;
  icon: React.ReactNode;
  color: string;
  delay: number;
};

function BenefitCard({ title, description, icon, color, delay }: BenefitCardProps) {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <motion.div
      ref={ref}
      initial={{ y: 50, opacity: 0 }}
      animate={inView ? { y: 0, opacity: 1 } : { y: 50, opacity: 0 }}
      transition={{ duration: 0.5, delay }}
      className="h-full"
    >
      <Card className="border border-border bg-card/50 backdrop-blur-sm h-full hover:shadow-lg transition-all duration-300">
        <CardContent className="p-6 flex flex-col items-center md:items-start text-center md:text-left">
          <div className={`h-12 w-12 rounded-full ${color} flex items-center justify-center mb-4`}>
            {icon}
          </div>
          <h3 className="text-xl font-bold mb-2">{title}</h3>
          <p className="text-muted-foreground">{description}</p>
        </CardContent>
      </Card>
    </motion.div>
  );
}

export default function Benefits() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const benefits = [
    {
      title: "ERC-3643 Tokens",
      description: "Compliant, secure tokens with encrypted metadata for privacy and regulatory compliance.",
      icon: <LockKeyhole className="h-6 w-6 text-white" />,
      color: "bg-gradient-to-r from-blue-600 to-indigo-600",
      delay: 0.1,
    },
    {
      title: "Dynamic Upgrades",
      description: "Vote to upgrade properties, boosting value and ESG metrics through community-driven improvements.",
      icon: <Building2 className="h-6 w-6 text-white" />,
      color: "bg-gradient-to-r from-purple-600 to-indigo-600",
      delay: 0.2,
    },
    {
      title: "Cross-Chain Lending",
      description: "Use tokens as collateral across multiple blockchains with Chainlink CCIP technology.",
      icon: <Coins className="h-6 w-6 text-white" />,
      color: "bg-gradient-to-r from-green-600 to-teal-600",
      delay: 0.3,
    },
    {
      title: "Real-Time Transparency",
      description: "Track rental income and property data via Chainlink Data Streams with immutable records.",
      icon: <LineChart className="h-6 w-6 text-white" />,
      color: "bg-gradient-to-r from-orange-600 to-red-600",
      delay: 0.4,
    },
    {
      title: "Low Entry Barrier",
      description: "Start investing with as little as $50, making premium real estate accessible to everyone.",
      icon: <CircleDollarSign className="h-6 w-6 text-white" />,
      color: "bg-gradient-to-r from-sky-600 to-blue-600",
      delay: 0.5,
    },
    {
      title: "AI-Powered Analytics",
      description: "Make informed decisions with AI-driven property analysis and performance predictions.",
      icon: <BarChart3 className="h-6 w-6 text-white" />,
      color: "bg-gradient-to-r from-violet-600 to-purple-600",
      delay: 0.6,
    },
  ];

  const keyMetrics = [
    { label: "Total Properties", value: "250+" },
    { label: "Countries", value: "12" },
    { label: "Total Value Locked", value: "$143M" },
    { label: "Active Investors", value: "1M+" },
  ];

  return (
    <section id="benefits" className="py-20 relative overflow-hidden">
      {/* Background decorations */}
      <div className="absolute -z-10 top-1/3 left-0 h-64 w-64 bg-purple-600/20 rounded-full blur-3xl"></div>
      <div className="absolute -z-10 bottom-1/4 right-0 h-64 w-64 bg-blue-600/20 rounded-full blur-3xl"></div>
      
      <div className="container mx-auto px-4">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.5 }}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Key Features</h2>
          <p className="text-lg text-muted-foreground">
            Our platform offers unique advantages through Web3 technology for a secure, transparent, and efficient real estate investment experience.
          </p>
        </motion.div>

        {/* Key metrics */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-16">
          {keyMetrics.map((metric, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.8 }}
              animate={inView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.8 }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
              className="bg-card/50 backdrop-blur-sm border border-border rounded-lg p-6 text-center"
            >
              <div className="text-3xl md:text-4xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-purple-500 to-blue-500">
                {metric.value}
              </div>
              <div className="text-sm text-muted-foreground mt-2">{metric.label}</div>
            </motion.div>
          ))}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {benefits.map((benefit, index) => (
            <BenefitCard
              key={index}
              title={benefit.title}
              description={benefit.description}
              icon={benefit.icon}
              color={benefit.color}
              delay={benefit.delay}
            />
          ))}
        </div>
      </div>
    </section>
  );
}