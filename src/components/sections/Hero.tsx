'use client';

// Using standard img element instead of Next.js Image component
import { useState, useEffect, useCallback } from 'react';
import { ArrowRight, Building2, CircleDollarSign, Shield, Sparkles, Star, TrendingUp, Users, Zap, ChevronLeft, ChevronRight } from 'lucide-react';

interface FloatingElementProps {
  index: number;
}

const FloatingElement: React.FC<FloatingElementProps> = ({ index }) => (
  <div
    className="absolute w-3 h-3 bg-gradient-to-r from-purple-400 to-blue-400 rounded-full opacity-0 animate-float-advanced"
    style={{
      left: `${15 + index * 12}%`,
      top: `${25 + index * 10}%`,
      animationDelay: `${index * 0.5}s`,
      transform: `scale(${1 + index * 0.2})`,
    }}
    aria-hidden="true"
  />
);

interface StatCardProps {
  icon: React.ReactNode;
  value: string;
  label: string;
}

const StatCard: React.FC<StatCardProps> = ({ icon, value, label }) => (
  <div className="group text-center">
    <div className="rounded-2xl p-4 mb-2 bg-white/5 backdrop-blur-lg border border-white/10 group-hover:scale-105 transition-transform duration-300">
      {icon}
      <div className="text-2xl font-bold text-white">{value}</div>
      <div className="text-sm text-gray-400">{label}</div>
    </div>
  </div>
);

interface Property {
  id: number;
  name: string;
  location: string;
  value: string;
  yield: string;
  minInvestment: string;
  funded: number;
  rating: number;
  image: string;
  monthlyDividend: string;
}

interface PropertyCardProps {
  property: Property;
}

const PropertyCard: React.FC<PropertyCardProps> = ({ property }) => (
  <div className="relative rounded-3xl overflow-hidden bg-white/5 backdrop-blur-lg border border-white/10 transition-transform duration-300">
    <div className="relative h-80 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-tr from-purple-500/20 to-blue-500/20 z-10" aria-hidden="true" />
      <img
        src={property.image}
        alt={`${property.name} in ${property.location}`}
        className="absolute inset-0 w-full h-full object-cover hover:scale-110 transition-transform duration-700"
        loading="lazy"
      />
      <div className="absolute top-4 right-4 z-20">
        <div className="flex items-center gap-2 px-4 py-2 bg-white/5 backdrop-blur-lg rounded-full">
          <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse" aria-hidden="true" />
          <span className="text-green-400 text-sm font-medium">Live</span>
        </div>
      </div>
    </div>
    <div className="p-6 space-y-4">
      <div className="flex items-start justify-between">
        <div>
          <h3 className="text-2xl font-bold text-white mb-1">{property.name}</h3>
          <p className="text-gray-400">{property.location}</p>
          <div className="flex items-center gap-1 mt-2">
            {[...Array(5)].map((_, i) => (
              <Star
                key={i}
                className={`h-4 w-4 ${i < property.rating ? 'text-yellow-400 fill-current' : 'text-gray-600'}`}
                aria-hidden="true"
              />
            ))}
            <span className="text-sm text-gray-400 ml-2">{property.rating.toFixed(1)} Rating</span>
          </div>
        </div>
        <div className="text-right">
          <div className="text-3xl font-bold bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent">
            {property.value}
          </div>
          <div className="text-sm text-gray-400">Property Value</div>
        </div>
      </div>
      <div className="grid grid-cols-3 gap-3">
        <StatCard
          icon={<TrendingUp className="h-5 w-5 text-green-400 mx-auto mb-2" aria-hidden="true" />}
          value={property.yield}
          label="Annual Yield"
        />
        <StatCard
          icon={<CircleDollarSign className="h-5 w-5 text-blue-400 mx-auto mb-2" aria-hidden="true" />}
          value={property.minInvestment}
          label="Min Investment"
        />
        <div className="text-center p-4 bg-white/5 backdrop-blur-lg rounded-xl hover:scale-105 transition-transform duration-300">
          <div className="relative w-12 h-12 mx-auto mb-2">
            <svg className="w-12 h-12 transform -rotate-90">
              <circle cx="24" cy="24" r="20" stroke="currentColor" strokeWidth="4" fill="none" className="text-gray-600" />
              <circle
                cx="24"
                cy="24"
                r="20"
                stroke="currentColor"
                strokeWidth="4"
                fill="none"
                strokeDasharray={`${property.funded * 1.25} 125`}
                className="text-purple-400"
              />
            </svg>
            <div className="absolute inset-0 flex items-center justify-center">
              <span className="text-sm font-bold text-purple-400">{property.funded}%</span>
            </div>
          </div>
          <div className="text-xs text-gray-400">Funded</div>
        </div>
      </div>
    </div>
    <div className="absolute -top-6 -right-6 z-30">
      <div className="flex items-center gap-3 px-6 py-4 bg-white/5 backdrop-blur-lg rounded-2xl hover:scale-110 transition-transform duration-300 mt-5">
        <div className="w-12 h-12 rounded-full bg-gradient-to-r from-green-400 to-blue-400 flex items-center justify-center">
          <Zap className="h-6 w-6 text-white" aria-hidden="true" />
        </div>
        <div>
          <div className="text-xl font-bold text-green-400">{property.monthlyDividend}</div>
          <div className="text-sm text-gray-400">Monthly Dividend</div>
        </div>
      </div>
    </div>
  </div>
);

const Hero: React.FC = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [isHovered, setIsHovered] = useState(false);
  const [currentProperty, setCurrentProperty] = useState(0);

  const properties: Property[] = [
    {
      id: 1,
      name: 'Manhattan Skyline',
      location: 'New York, USA',
      value: '$347,500',
      yield: '8.2%',
      minInvestment: '$50',
      funded: 73,
      rating: 4.9,
      image: 'https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?w=800&h=600&fit=crop',
      monthlyDividend: '+$348.20',
    },
    {
      id: 2,
      name: 'Miami Beachfront',
      location: 'Miami, USA',
      value: '$425,000',
      yield: '7.5%',
      minInvestment: '$75',
      funded: 62,
      rating: 4.7,
      image: 'https://images.unsplash.com/photo-1512917774080-9991f7c8025d?w=800&h=600&fit=crop',
      monthlyDividend: '+$412.50',
    },
    {
      id: 3,
      name: 'Downtown Dubai',
      location: 'Dubai, UAE',
      value: '$580,000',
      yield: '6.8%',
      minInvestment: '$100',
      funded: 85,
      rating: 4.8,
      image: 'https://images.unsplash.com/photo-1512453979798-5ea266f8880c?w=800&h=600&fit=crop',
      monthlyDividend: '+$529.30',
    },
  ];

  const handleNext = useCallback(() => {
    setCurrentProperty((prev) => (prev + 1) % properties.length);
  }, [properties.length]);

  const handlePrev = useCallback(() => {
    setCurrentProperty((prev) => (prev - 1 + properties.length) % properties.length);
  }, [properties.length]);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };
    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  const floatingElements = Array.from({ length: 12 }, (_, i) => (
    <FloatingElement key={i} index={i} />
  ));

  return (
    <section className="min-h-screen pt-20 pb-20 overflow-hidden relative bg-gray-900">
      <style dangerouslySetInnerHTML={{ __html: `
        @keyframes float-advanced {
          0% { transform: translateY(0) scale(1); opacity: 0; }
          25% { transform: translateY(-15px) scale(1.1); opacity: 0.4; }
          50% { transform: translateY(-30px) scale(1.2); opacity: 0.2; }
          75% { transform: translateY(-15px) scale(1.1); opacity: 0.4; }
          100% { transform: translateY(0) scale(1); opacity: 0; }
        }
        @keyframes pulse {
          0%, 100% { opacity: 0.7; transform: scale(1); }
          50% { opacity: 1; transform: scale(1.1); }
        }
        @keyframes gradient-shift {
          0% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
          100% { background-position: 0% 50%; }
        }
        .animate-gradient-shift {
          background-size: 200% 200%;
          animation: gradient-shift 15s ease infinite;
        }
      ` }} />

      {/* Background Effects */}
      <div className="absolute inset-0 opacity-40 transition-opacity duration-1000">
        <div className="absolute inset-0 bg-gradient-to-br from-purple-900/30 via-blue-900/30 to-teal-900/30 animate-gradient-shift" />
        <div
          className="absolute inset-0 transition-all duration-300 ease-out"
          style={{
            background: `radial-gradient(circle at ${mousePosition.x / window.innerWidth * 100}% ${mousePosition.y / window.innerHeight * 100}%, rgba(147, 51, 234, 0.2) 0%, transparent 70%)`,
            transform: `translate(${(mousePosition.x - window.innerWidth / 2) * 0.02}px, ${(mousePosition.y - window.innerHeight / 2) * 0.02}px)`,
          }}
          aria-hidden="true"
        />
        {floatingElements}
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center min-h-screen">
          {/* Left Content */}
          <div className="space-y-8">
            <div
              className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-white/5 backdrop-blur-lg border border-purple-500/30 animate-pulse"
              role="status"
              aria-label="Platform Status"
            >
              <Sparkles className="h-4 w-4 text-purple-400" aria-hidden="true" />
              <span className="text-purple-300 font-medium">Redefining Real Estate Investment</span>
              <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse" aria-hidden="true" />
            </div>

            <header className="space-y-4">
              <h1 className="text-5xl md:text-6xl lg:text-7xl font-black leading-tight tracking-tight">
                <span className="block bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent">
                  Invest in Real Estate,
                </span>
                <span className="block text-white">
                  Redefined by{' '}
                  <span className="relative bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent">
                    Web3
                  </span>
                </span>
              </h1>
            </header>

            <p className="text-xl md:text-2xl text-gray-300 max-w-lg leading-relaxed">
              Own fractions of premium properties, trade on a lightning-fast DEX, and unlock DeFi lending—all with a{' '}
              <span className="text-green-400 font-bold">$50</span> entry point.
            </p>

            <div className="flex flex-wrap gap-6 pt-4">
              <button
                className="group relative px-8 py-4 bg-gradient-to-r from-purple-600 to-blue-600 rounded-full text-white font-bold text-lg overflow-hidden hover:scale-105 transition-transform duration-300 focus:outline-none focus:ring-2 focus:ring-purple-400"
                onMouseEnter={() => setIsHovered(true)}
                onMouseLeave={() => setIsHovered(false)}
                aria-label="Start Investing"
              >
                <div className="absolute inset-0 bg-gradient-to-r from-purple-400 to-blue-400 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                <div className="relative flex items-center gap-3">
                  <CircleDollarSign className="h-6 w-6" aria-hidden="true" />
                  Start Investing
                  <ArrowRight
                    className={`h-6 w-6 transition-transform duration-300 ${isHovered ? 'translate-x-2' : ''}`}
                    aria-hidden="true"
                  />
                </div>
              </button>

              <button
                className="px-8 py-4 rounded-full text-white font-bold text-lg bg-white/5 backdrop-blur-lg border border-white/20 hover:border-purple-400/50 hover:scale-105 transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-purple-400"
                aria-label="Explore Properties"
              >
                <span className="flex items-center gap-3">
                  <Building2 className="h-6 w-6" aria-hidden="true" />
                  Join Waitlist
                </span>
              </button>
            </div>

            <div className="grid grid-cols-3 gap-6 pt-8">
              <StatCard
                icon={<CircleDollarSign className="h-8 w-8 text-green-400 mx-auto mb-2" aria-hidden="true" />}
                value="$50"
                label="Min Investment"
              />
              <StatCard
                icon={<Users className="h-8 w-8 text-blue-400 mx-auto mb-2" aria-hidden="true" />}
                value="1M+"
                label="Investors"
              />
              <StatCard
                icon={<Shield className="h-8 w-8 text-purple-400 mx-auto mb-2" aria-hidden="true" />}
                value="100%"
                label="Secure"
              />
            </div>
          </div>

          {/* Right Content - Property Carousel */}
          <div className="relative">
            <div className="relative">
              <PropertyCard property={properties[currentProperty]} />
            </div>
            <div className="absolute top-1/2 -translate-y-1/2 w-full flex justify-between px-4 z-30">
              <button
                onClick={handlePrev}
                className="p-2 bg-white/10 backdrop-blur-lg rounded-full hover:bg-white/20 transition-colors duration-300 focus:outline-none focus:ring-2 focus:ring-purple-400"
                aria-label="Previous Property"
              >
                <ChevronLeft className="h-6 w-6  text-white" />
              </button>
              <button
                onClick={handleNext}
                className="p-2 bg-white/10 backdrop-blur-lg rounded-full hover:bg-white/20 transition-colors duration-300 focus:outline-none focus:ring-2 focus:ring-purple-400"
                aria-label="Next Property"
              >
                <ChevronRight className="h-6 w-6 text-white" />
              </button>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;