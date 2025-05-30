import { useState } from 'react';
import { UserPlus, Search, CircleDollarSign, LineChart, ArrowRightLeft, CheckCircle, ArrowRight } from 'lucide-react';

export default function HowItWorks() {
  const [activeStep, setActiveStep] = useState(0);

  const steps = [
    {
      id: "signup",
      title: "Sign Up",
      icon: <UserPlus className="h-8 w-8" />,
      description: "Create an account in minutes via ElisaOS's mobile-friendly interface.",
      image: "/images/signup.svg",
      features: [
        "Quick KYC/AML verification",
        "Multiple wallet connection options",
        "Social login supported"
      ],
      color: "from-blue-500 to-cyan-500"
    },
    {
      id: "explore",
      title: "Explore",
      icon: <Search className="h-8 w-8" />,
      description: "Browse tokenized properties or diversified REITs with real-time rental income data.",
      image: "https://images.pexels.com/photos/1396132/pexels-photo-1396132.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      features: [
        "Filter by location, price, and yield",
        "Compare historical performance",
        "View detailed property analytics"
      ],
      color: "from-purple-500 to-pink-500"
    },
    {
      id: "invest",
      title: "Invest",
      icon: <CircleDollarSign className="h-8 w-8" />,
      description: "Buy fractional shares with USDC or fiat, secured by Chainlink VRF for fair allocation.",
      image: "https://images.pexels.com/photos/7821738/pexels-photo-7821738.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      features: [
        "Multiple payment methods",
        "Adjustable investment amounts",
        "Automatic reinvestment options"
      ],
      color: "from-green-500 to-emerald-500"
    },
    {
      id: "earn",
      title: "Earn",
      icon: <LineChart className="h-8 w-8" />,
      description: "Receive stablecoin dividends and vote on property decisions via our DAO.",
      image: "https://images.pexels.com/photos/7788009/pexels-photo-7788009.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      features: [
        "Real-time dividend tracking",
        "Participation in governance decisions",
        "Property performance analytics"
      ],
      color: "from-orange-500 to-red-500"
    },
    {
      id: "trade",
      title: "Trade & Borrow",
      icon: <ArrowRightLeft className="h-8 w-8" />,
      description: "Trade on our Avalanche DEX or use tokens as collateral in DeFi lending.",
      image: "https://images.pexels.com/photos/6771900/pexels-photo-6771900.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      features: [
        "Low-fee token swapping",
        "Cross-chain compatibility",
        "Collateralized lending at competitive rates"
      ],
      color: "from-indigo-500 to-purple-500"
    },
  ];

  return (
    <section id="how-it-works" className="py-20 bg-gradient-to-br from-slate-50 to-blue-50 dark:from-slate-900 dark:to-slate-800 overflow-hidden">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center max-w-4xl mx-auto mb-20">
          <div className="inline-flex items-center gap-2 bg-blue-100 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400 px-4 py-2 rounded-full text-sm font-medium mb-6">
            <CheckCircle className="h-4 w-4" />
            Simple Process
          </div>
          <h2 className="text-4xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-slate-900 to-slate-600 dark:from-white dark:to-slate-300 bg-clip-text text-transparent">
            How It Works
          </h2>
          <p className="text-xl text-slate-600 dark:text-slate-400 leading-relaxed">
            Our platform makes real estate investing simple and accessible to everyone, with just a few easy steps.
          </p>
        </div>

        {/* Process Flow Visualization */}
        <div className="max-w-7xl mx-auto mb-16">
          {/* Desktop Timeline */}
          <div className="hidden lg:flex items-center justify-between mb-12 relative">
            {/* Progress Line */}
            <div className="absolute top-1/2 left-0 right-0 h-1 bg-slate-200 dark:bg-slate-700 -translate-y-1/2 z-0">
              <div 
                className="h-full bg-gradient-to-r from-blue-500 to-purple-500 transition-all duration-700 ease-out"
                style={{ width: `${(activeStep / (steps.length - 1)) * 100}%` }}
              />
            </div>

            {steps.map((step, index) => (
              <div key={step.id} className="relative z-10">
                <button
                  onClick={() => setActiveStep(index)}
                  className={`group relative transition-all duration-300 ${
                    index <= activeStep ? 'scale-110' : 'scale-100 hover:scale-105'
                  }`}
                >
                  <div className={`
                    w-20 h-20 rounded-full flex items-center justify-center transition-all duration-300
                    ${index <= activeStep 
                      ? `bg-gradient-to-r ${step.color} text-white shadow-lg shadow-blue-500/25` 
                      : 'bg-white dark:bg-slate-800 text-slate-400 border-2 border-slate-200 dark:border-slate-700'
                    }
                  `}>
                    {index < activeStep ? (
                      <CheckCircle className="h-10 w-10" />
                    ) : (
                      step.icon
                    )}
                  </div>
                  <div className="absolute -bottom-8 left-1/2 transform -translate-x-1/2 whitespace-nowrap">
                    <span className={`text-sm font-medium ${
                      index <= activeStep ? 'text-slate-900 dark:text-white' : 'text-slate-500 dark:text-slate-400'
                    }`}>
                      {step.title}
                    </span>
                  </div>
                </button>
              </div>
            ))}
          </div>

          {/* Mobile Step Indicator */}
          <div className="lg:hidden flex justify-center mb-8">
            <div className="bg-white dark:bg-slate-800 rounded-full p-1 shadow-lg">
              {steps.map((step, index) => (
                <button
                  key={step.id}
                  onClick={() => setActiveStep(index)}
                  className={`
                    w-3 h-3 rounded-full mx-1 transition-all duration-300
                    ${index === activeStep 
                      ? `bg-gradient-to-r ${step.color}` 
                      : 'bg-slate-300 dark:bg-slate-600'
                    }
                  `}
                />
              ))}
            </div>
          </div>
        </div>

        {/* Active Step Content */}
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Image Section */}
            <div className="relative group">
              <div className={`absolute inset-0 bg-gradient-to-r ${steps[activeStep].color} rounded-3xl blur-xl opacity-20 group-hover:opacity-30 transition-opacity duration-300`} />
              <div className="relative bg-white dark:bg-slate-800 rounded-3xl overflow-hidden shadow-2xl border border-slate-200 dark:border-slate-700">
                <div className="aspect-[4/3] overflow-hidden">
                  <img 
                    src={steps[activeStep].image} 
                    alt={steps[activeStep].title} 
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                </div>
                <div className="absolute top-6 right-6">
                  <div className={`w-16 h-16 rounded-2xl bg-gradient-to-r ${steps[activeStep].color} flex items-center justify-center text-white shadow-lg`}>
                    {steps[activeStep].icon}
                  </div>
                </div>
              </div>
            </div>

            {/* Content Section */}
            <div className="space-y-8">
              <div>
                <div className="flex items-center gap-4 mb-4">
                  <div className={`w-12 h-12 rounded-xl bg-gradient-to-r ${steps[activeStep].color} flex items-center justify-center text-white text-xl font-bold shadow-lg`}>
                    {activeStep + 1}
                  </div>
                  <h3 className="text-3xl md:text-4xl font-bold text-slate-900 dark:text-white">
                    {steps[activeStep].title}
                  </h3>
                </div>
                <p className="text-lg text-slate-600 dark:text-slate-400 leading-relaxed">
                  {steps[activeStep].description}
                </p>
              </div>

              {/* Features */}
              <div className="bg-white dark:bg-slate-800 rounded-2xl p-6 shadow-lg border border-slate-200 dark:border-slate-700">
                <h4 className="font-semibold text-slate-900 dark:text-white mb-4 flex items-center gap-2">
                  <div className={`w-2 h-2 rounded-full bg-gradient-to-r ${steps[activeStep].color}`} />
                  Key Features
                </h4>
                <div className="space-y-3">
                  {steps[activeStep].features.map((feature, index) => (
                    <div key={index} className="flex items-center gap-3 group">
                      <CheckCircle className={`h-5 w-5 text-green-500 flex-shrink-0 group-hover:scale-110 transition-transform`} />
                      <span className="text-slate-600 dark:text-slate-400">{feature}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Navigation */}
              <div className="flex gap-4">
                {activeStep > 0 && (
                  <button
                    onClick={() => setActiveStep(activeStep - 1)}
                    className="flex items-center gap-2 px-6 py-3 bg-slate-100 dark:bg-slate-700 text-slate-700 dark:text-slate-300 rounded-xl hover:bg-slate-200 dark:hover:bg-slate-600 transition-colors"
                  >
                    <ArrowRight className="h-4 w-4 rotate-180" />
                    Previous
                  </button>
                )}
                {activeStep < steps.length - 1 && (
                  <button
                    onClick={() => setActiveStep(activeStep + 1)}
                    className={`flex items-center gap-2 px-6 py-3 bg-gradient-to-r ${steps[activeStep].color} text-white rounded-xl hover:shadow-lg transition-all duration-300`}
                  >
                    Next
                    <ArrowRight className="h-4 w-4" />
                  </button>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}