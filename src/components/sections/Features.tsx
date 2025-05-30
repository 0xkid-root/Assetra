import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Building2, DollarSign, AreaChart, Users, LockKeyhole, Globe } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';

type FeatureCardProps = {
  title: string;
  description: string;
  icon: React.ReactNode;
  color: string;
  delay: number;
};

function FeatureCard({ title, description, icon, color, delay }: FeatureCardProps) {
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
      whileHover={{ y: -5, transition: { duration: 0.2 } }}
    >
      <Card className="border border-border/50 bg-card/50 backdrop-blur-sm h-full hover:shadow-lg transition-all duration-300">
        <CardContent className="p-6">
          <div className={`h-12 w-12 rounded-lg ${color} flex items-center justify-center mb-4`}>
            {icon}
          </div>
          <h3 className="text-xl font-bold mb-2">{title}</h3>
          <p className="text-muted-foreground">{description}</p>
        </CardContent>
      </Card>
    </motion.div>
  );
}

export default function Features() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const features = [
    {
      title: "Democratized Access",
      description: "Invest in high-value properties worldwide, starting at just $50.",
      icon: <Building2 className="h-6 w-6 text-white" />,
      color: "bg-purple-600",
      delay: 0.1,
    },
    {
      title: "Stable Returns",
      description: "Earn rental income pegged to stablecoins like USDC for predictable payouts.",
      icon: <DollarSign className="h-6 w-6 text-white" />,
      color: "bg-blue-600",
      delay: 0.2,
    },
    {
      title: "Diversified REITs",
      description: "Access AI-curated real estate portfolios for instant diversification.",
      icon: <AreaChart className="h-6 w-6 text-white" />,
      color: "bg-green-600",
      delay: 0.3,
    },
    {
      title: "Decentralized Control",
      description: "Vote on property upgrades and management through our Property Management DAO.",
      icon: <Users className="h-6 w-6 text-white" />,
      color: "bg-orange-600",
      delay: 0.4,
    },
    {
      title: "Secure & Private",
      description: "MiMC hash Merkle trees and IPFS ensure your data stays safe and compliant.",
      icon: <LockKeyhole className="h-6 w-6 text-white" />,
      color: "bg-indigo-600",
      delay: 0.5,
    },
    {
      title: "Global Liquidity",
      description: "Trade tokens or use them as collateral across Avalanche, Ethereum, Polygon, and Solana.",
      icon: <Globe className="h-6 w-6 text-white" />,
      color: "bg-teal-600",
      delay: 0.6,
    },
  ];

  return (
    <section id="features" className="py-20">
      <div className="container mx-auto px-4">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.5 }}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Why Choose Assetra?</h2>
          <p className="text-lg text-muted-foreground">
            Our platform combines the best of real estate investment with Web3 technology, providing unprecedented access, security, and liquidity.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((feature, index) => (
            <FeatureCard
              key={index}
              title={feature.title}
              description={feature.description}
              icon={feature.icon}
              color={feature.color}
              delay={feature.delay}
            />
          ))}
        </div>
      </div>
    </section>
  );
}