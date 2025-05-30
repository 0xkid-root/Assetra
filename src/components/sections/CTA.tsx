import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Button } from '@/components/ui/button';
import { CircleDollarSign, ArrowRight, Download, Building2 } from 'lucide-react';
import { useToast } from '@/hooks/use-toast';

export default function CTA() {
  const { toast } = useToast();
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const handleDownload = () => {
    toast({
      title: "App download started",
      description: "Thank you for downloading the Assetra app!",
    });
  };

  const handleExplore = () => {
    toast({
      title: "Welcome to Assetra",
      description: "Let's explore real estate investment opportunities together!",
    });
  };

  return (
    <section className="py-20">
      <div className="container mx-auto px-4">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.7 }}
          className="relative overflow-hidden rounded-3xl"
        >
          <div className="absolute inset-0 bg-gradient-to-br from-purple-600 via-blue-600 to-indigo-700 z-0"></div>
          <div className="absolute inset-0 bg-[url('/noise.svg')] opacity-10 z-0"></div>
          
          {/* Decorative elements */}
          <div className="absolute -bottom-20 -right-20 h-64 w-64 bg-blue-500/30 rounded-full blur-3xl z-0"></div>
          <div className="absolute -top-20 -left-20 h-64 w-64 bg-purple-500/30 rounded-full blur-3xl z-0"></div>
          
          <div className="relative z-10 py-16 px-6 md:px-12 text-center">
            <div className="mx-auto max-w-3xl space-y-8">
              <div className="mx-auto h-16 w-16 rounded-full bg-white/10 backdrop-blur-sm flex items-center justify-center mb-6">
                <Building2 className="h-8 w-8 text-white" />
              </div>
              
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white leading-tight">
                Join the Future of Real Estate Investment Today
              </h2>
              
              <p className="text-lg md:text-xl text-white/80 max-w-2xl mx-auto">
                Start investing in tokenized real estate with Assetra. Whether you're a retail investor seeking passive income or an institution diversifying your portfolio, Assetra empowers you with secure, liquid, and decentralized opportunities.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center pt-4">
                <Button 
                  size="lg" 
                  onClick={handleDownload}
                  className="bg-white text-primary hover:bg-white/90 rounded-full gap-2"
                >
                  <Download className="h-5 w-5" />
                  Download App
                </Button>
                <Button 
                  size="lg" 
                  variant="outline" 
                  onClick={handleExplore}
                  className="text-white border-white hover:bg-white/10 rounded-full gap-2"
                >
                  <CircleDollarSign className="h-5 w-5" />
                  Explore Properties
                  <ArrowRight className="h-5 w-5" />
                </Button>
              </div>
              
              <p className="text-sm text-white/60 pt-4">
                Available in Singapore, Dubai, New York, and 9 other locations worldwide
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}