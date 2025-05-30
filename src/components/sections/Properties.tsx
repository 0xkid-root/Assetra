'use client';

// Image imports are handled with standard img elements
import { useState, useMemo } from 'react';
import { Building2, MapPin, Bed, Bath, Square, CircleDollarSign, Clock, ArrowUpRight, Filter, Search, Star, Calendar, Eye, Heart, Share2, BarChart3, Shield,  Info } from 'lucide-react';

type Property = {
  id: string;
  title: string;
  location: string;
  image: string;
  price: string;
  yield: string;
  funded: number;
  minimumInvestment: string;
  bedrooms?: number;
  bathrooms?: number;
  area?: string;
  type: 'Residential' | 'Commercial' | 'Industrial';
  closing?: string;
  rating: number;
  investors: number;
  views: number;
  isNew?: boolean;
  isHot?: boolean;
  riskLevel: 'Low' | 'Medium' | 'High';
  annualReturn: string;
  monthlyIncome: string;
  verified: boolean;
};

const properties: Property[] = [
  {
    id: "prop1",
    title: "Skyline Apartments",
    location: "New York, USA",
    image: "https://images.pexels.com/photos/323780/pexels-photo-323780.jpeg",
    price: "$2.5M",
    yield: "7.2%",
    funded: 78,
    minimumInvestment: "$50",
    bedrooms: 2,
    bathrooms: 2,
    area: "1,200 sq ft",
    type: "Residential",
    closing: "24 days",
    rating: 4.8,
    investors: 342,
    views: 1205,
    isNew: false,
    isHot: true,
    riskLevel: 'Medium',
    annualReturn: '$3,600',
    monthlyIncome: '$300',
    verified: true
  },
  {
    id: "prop2",
    title: "Marina Bay Office",
    location: "Singapore",
    image: "https://images.pexels.com/photos/631055/pexels-photo-631055.jpeg",
    price: "$4.1M",
    yield: "8.4%",
    funded: 65,
    minimumInvestment: "$100",
    area: "3,500 sq ft",
    type: "Commercial",
    closing: "18 days",
    rating: 4.9,
    investors: 567,
    views: 2134,
    isNew: false,
    isHot: false,
    riskLevel: 'Low',
    annualReturn: '$8,400',
    monthlyIncome: '$700',
    verified: true
  },
  {
    id: "prop3",
    title: "Palm Villas",
    location: "Dubai, UAE",
    image: "https://images.pexels.com/photos/1396122/pexels-photo-1396122.jpeg",
    price: "$3.7M",
    yield: "6.8%",
    funded: 92,
    minimumInvestment: "$75",
    bedrooms: 4,
    bathrooms: 3,
    area: "2,800 sq ft",
    type: "Residential",
    closing: "7 days",
    rating: 4.7,
    investors: 891,
    views: 3421,
    isNew: false,
    isHot: true,
    riskLevel: 'Medium',
    annualReturn: '$5,100',
    monthlyIncome: '$425',
    verified: true
  },
  {
    id: "prop4",
    title: "Tech Park Offices",
    location: "San Francisco, USA",
    image: "https://images.pexels.com/photos/2574014/pexels-photo-2574014.jpeg",
    price: "$5.8M",
    yield: "9.1%",
    funded: 41,
    minimumInvestment: "$125",
    area: "8,200 sq ft",
    type: "Commercial",
    closing: "32 days",
    rating: 4.6,
    investors: 234,
    views: 987,
    isNew: true,
    isHot: false,
    riskLevel: 'High',
    annualReturn: '$11,375',
    monthlyIncome: '$948',
    verified: true
  },
  {
    id: "prop5",
    title: "Urban Storage Facility",
    location: "London, UK",
    image: "https://images.pexels.com/photos/2556713/pexels-photo-2556713.jpeg",
    price: "$1.9M",
    yield: "7.8%",
    funded: 83,
    minimumInvestment: "$50",
    area: "12,000 sq ft",
    type: "Industrial",
    closing: "15 days",
    rating: 4.5,
    investors: 456,
    views: 1876,
    isNew: false,
    isHot: false,
    riskLevel: 'Low',
    annualReturn: '$3,900',
    monthlyIncome: '$325',
    verified: true
  },
  {
    id: "prop6",
    title: "Riverside Apartments",
    location: "Sydney, Australia",
    image: "https://images.pexels.com/photos/1546166/pexels-photo-1546166.jpeg",
    price: "$3.2M",
    yield: "6.9%",
    funded: 57,
    minimumInvestment: "$60",
    bedrooms: 3,
    bathrooms: 2,
    area: "1,800 sq ft",
    type: "Residential",
    closing: "21 days",
    rating: 4.4,
    investors: 189,
    views: 754,
    isNew: true,
    isHot: false,
    riskLevel: 'Medium',
    annualReturn: '$4,140',
    monthlyIncome: '$345',
    verified: false
  },
];

function PropertyCard({ property }: { property: Property }) {
  const [isHovered, setIsHovered] = useState(false);
  const [isLiked, setIsLiked] = useState(false);
  const [showDetails, setShowDetails] = useState(false);

  const getRiskColor = (risk: string) => {
    switch (risk) {
      case 'Low': return 'text-green-600 bg-green-100 dark:text-green-400 dark:bg-green-900/30';
      case 'Medium': return 'text-yellow-600 bg-yellow-100 dark:text-yellow-400 dark:bg-yellow-900/30';
      case 'High': return 'text-red-600 bg-red-100 dark:text-red-400 dark:bg-red-900/30';
      default: return 'text-gray-600 bg-gray-100';
    }
  };

  return (
    <div
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      className={`group relative bg-white dark:bg-slate-800 rounded-3xl overflow-hidden shadow-lg border border-slate-200 dark:border-slate-700 transition-all duration-500 hover:shadow-2xl hover:-translate-y-2 ${
        isHovered ? 'scale-[1.02]' : ''
      }`}
      role="article"
      aria-labelledby={`property-title-${property.id}`}
    >
      {/* Image Section */}
      <div className="relative h-64 overflow-hidden">
        <img
          src={property.image}
          alt={`${property.title} in ${property.location}`}
          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
          loading="lazy"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" aria-hidden="true" />
        
        {/* Top Badges */}
        <div className="absolute top-4 left-4 flex flex-wrap gap-2">
          {property.isNew && (
            <span className="bg-blue-500 text-white px-3 py-1 rounded-full text-xs font-semibold">
              NEW
            </span>
          )}
          {property.isHot && (
            <span className="bg-red-500 text-white px-3 py-1 rounded-full text-xs font-semibold animate-pulse">
              🔥 HOT
            </span>
          )}
          {property.verified && (
            <span className="bg-green-500 text-white p-1.5 rounded-full">
              <Shield className="h-3 w-3" aria-hidden="true" />
            </span>
          )}
        </div>

        {/* Top Right Actions */}
        <div className="absolute top-4 right-4 flex gap-2">
          <button
            onClick={() => setIsLiked(!isLiked)}
            className={`p-2 rounded-full backdrop-blur-sm transition-all duration-300 ${
              isLiked 
                ? 'bg-red-500 text-white' 
                : 'bg-white/20 text-white hover:bg-white/30'
            }`}
            aria-label={isLiked ? 'Unlike property' : 'Like property'}
          >
            <Heart className={`h-4 w-4 ${isLiked ? 'fill-current' : ''}`} />
          </button>
          <button
            className="p-2 rounded-full bg-white/20 text-white hover:bg-white/30 backdrop-blur-sm transition-all"
            aria-label="Share property"
          >
            <Share2 className="h-4 w-4" />
          </button>
        </div>

        {/* Bottom Info Overlay */}
        <div className="absolute bottom-4 left-4 right-4 text-white">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              <span className={`px-2 py-1 rounded-full text-xs font-medium ${getRiskColor(property.riskLevel)}`}>
                {property.riskLevel} Risk
              </span>
            </div>
            <div className="flex items-center gap-1 text-sm">
              <Eye className="h-4 w-4" aria-hidden="true" />
              {property.views.toLocaleString()}
            </div>
          </div>
        </div>
      </div>

      {/* Content Section */}
      <div className="p-6 space-y-4">
        {/* Header */}
        <div className="flex items-start justify-between">
          <div className="flex-1 min-w-0">
            <h3 id={`property-title-${property.id}`} className="text-xl font-bold text-slate-900 dark:text-white truncate">
              {property.title}
            </h3>
            <div className="flex items-center gap-1 text-slate-600 dark:text-slate-400 mt-1">
              <MapPin className="h-4 w-4 flex-shrink-0" aria-hidden="true" />
              <span className="text-sm truncate">{property.location}</span>
            </div>
            <div className="flex items-center gap-1 mt-2">
              <Star className="h-4 w-4 fill-yellow-400 text-yellow-400" aria-hidden="true" />
              <span className="text-sm font-medium">{property.rating}</span>
              <span className="text-xs text-slate-500">({property.investors} investors)</span>
            </div>
          </div>
          <div className="text-right flex-shrink-0 ml-4">
            <div className="text-2xl font-bold text-slate-900 dark:text-white">
              {property.price}
            </div>
            <div className="text-sm font-semibold text-green-600 dark:text-green-400">
              {property.yield} yield
            </div>
          </div>
        </div>

        {/* Property Details */}
        {property.type === 'Residential' && property.bedrooms && property.bathrooms && (
          <div className="grid grid-cols-3 gap-4">
            <div className="flex items-center gap-2 text-slate-600 dark:text-slate-400">
              <Bed className="h-4 w-4" aria-hidden="true" />
              <span className="text-sm">{property.bedrooms} Beds</span>
            </div>
            <div className="flex items-center gap-2 text-slate-600 dark:text-slate-400">
              <Bath className="h-4 w-4" aria-hidden="true" />
              <span className="text-sm">{property.bathrooms} Baths</span>
            </div>
            <div className="flex items-center gap-2 text-slate-600 dark:text-slate-400">
              <Square className="h-4 w-4" aria-hidden="true" />
              <span className="text-sm">{property.area}</span>
            </div>
          </div>
        )}

        {(property.type === 'Commercial' || property.type === 'Industrial') && (
          <div className="flex items-center gap-2 text-slate-600 dark:text-slate-400">
            <Square className="h-4 w-4" aria-hidden="true" />
            <span className="text-sm">{property.area}</span>
          </div>
        )}

        {/* Financial Info Grid */}
        <div className="grid grid-cols-2 gap-4 p-4 bg-slate-50 dark:bg-slate-700/50 rounded-xl">
          <div>
            <div className="text-xs text-slate-500 dark:text-slate-400 uppercase tracking-wide">
              Monthly Income
            </div>
            <div className="text-lg font-bold text-slate-900 dark:text-white">
              {property.monthlyIncome}
            </div>
          </div>
          <div>
            <div className="text-xs text-slate-500 dark:text-slate-400 uppercase tracking-wide">
              Annual Return
            </div>
            <div className="text-lg font-bold text-slate-900 dark:text-white">
              {property.annualReturn}
            </div>
          </div>
        </div>

        {/* Funding Progress */}
        <div className="space-y-2">
          <div className="flex items-center justify-between">
            <span className="text-sm font-medium text-slate-700 dark:text-slate-300">
              Funding Progress
            </span>
            <span className="text-sm font-bold text-slate-900 dark:text-white">
              {property.funded}%
            </span>
          </div>
          <div className="relative h-3 bg-slate-200 dark:bg-slate-700 rounded-full overflow-hidden">
            <div
              className="absolute top-0 left-0 h-full bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 rounded-full transition-all duration-1000 ease-out"
              style={{ width: `${property.funded}%` }}
              aria-label={`Funded ${property.funded}%`}
            />
            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent animate-pulse" aria-hidden="true" />
          </div>
          <div className="flex items-center justify-between text-xs text-slate-500 dark:text-slate-400">
            <span>{property.investors} investors</span>
            <span>Target: 100%</span>
          </div>
        </div>

        {/* Investment Info */}
        <div className="flex items-center justify-between py-3 px-4 bg-gradient-to-r from-blue-50 to-purple-50 dark:from-blue-900/20 dark:to-purple-900/20 rounded-xl">
          <div className="flex items-center gap-2">
            <CircleDollarSign className="h-4 w-4 text-blue-600 dark:text-blue-400" aria-hidden="true" />
            <span className="text-sm font-medium">Min: {property.minimumInvestment}</span>
          </div>
          <div className="flex items-center gap-2">
            <Clock className="h-4 w-4 text-purple-600 dark:text-purple-400" aria-hidden="true" />
            <span className="text-sm font-medium">Closes in {property.closing}</span>
          </div>
        </div>

        {/* Action Buttons */}
        <div className={`space-y-3 transition-all duration-300 ${
          isHovered ? 'opacity-100 transform translate-y-0' : 'opacity-90 transform translate-y-1'
        }`}>
          <button
            className="w-full bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white py-3 px-6 rounded-xl font-semibold transition-all duration-300 hover:shadow-lg hover:scale-[1.02] flex items-center justify-center gap-2"
            aria-label={`Invest in ${property.title}`}
          >
            Invest Now
            <ArrowUpRight className="h-4 w-4" />
          </button>
          <div className="grid grid-cols-2 gap-2">
            <button
              className="flex items-center justify-center gap-2 py-2 px-4 text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white border border-slate-200 dark:border-slate-600 rounded-lg hover:border-slate-300 dark:hover:border-slate-500 transition-all"
              aria-label={`View analytics for ${property.title}`}
            >
              <BarChart3 className="h-4 w-4" />
              <span className="text-sm">Analytics</span>
            </button>
            <button
              className="flex items-center justify-center gap-2 py-2 px-4 text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white border border-slate-200 dark:border-slate-600 rounded-lg hover:border-slate-300 dark:hover:border-slate-500 transition-all"
              aria-label={`Schedule tour for ${property.title}`}
            >
              <Calendar className="h-4 w-4" />
              <span className="text-sm">Schedule</span>
            </button>
          </div>
          <button
            onClick={() => setShowDetails(true)}
            className="w-full flex items-center justify-center gap-2 py-2 px-4 text-blue-600 dark:text-blue-400 border border-blue-200 dark:border-blue-600 rounded-lg hover:bg-blue-50 dark:hover:bg-blue-900/20 transition-all"
            aria-label={`View all details for ${property.title}`}
          >
            <Info className="h-4 w-4" />
            <span className="text-sm font-medium">View All Details</span>
          </button>
        </div>

        {/* Details Modal (Placeholder) */}
        {showDetails && (
          <div className="absolute inset-0 bg-black/50 backdrop-blur-sm flex items-center justify-center z-50">
            <div className="bg-white dark:bg-slate-800 p-6 rounded-2xl max-w-lg w-full m-4">
              <h4 className="text-xl font-bold text-slate-900 dark:text-white mb-4">
                {property.title} - Full Details
              </h4>
              <p className="text-slate-600 dark:text-slate-400 mb-4">
                Detailed information about {property.title} would be displayed here, including additional metrics, property history, and investment terms.
              </p>
              <button
                onClick={() => setShowDetails(false)}
                className="w-full bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-700 transition-colors"
                aria-label="Close details"
              >
                Close
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

export default function Properties() {
  const [activeTab, setActiveTab] = useState('all');
  const [searchTerm, setSearchTerm] = useState('');
  const [sortBy, setSortBy] = useState('yield');
  const [showFilters, setShowFilters] = useState(false);

  const filteredAndSortedProperties = useMemo(() => {
    let filtered = properties;

    if (activeTab !== 'all') {
      filtered = filtered.filter(p => p.type.toLowerCase() === activeTab);
    }

    if (searchTerm) {
      filtered = filtered.filter(p => 
        p.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
        p.location.toLowerCase().includes(searchTerm.toLowerCase())
      );
    }

    filtered.sort((a, b) => {
      switch (sortBy) {
        case 'yield':
          return parseFloat(b.yield) - parseFloat(a.yield);
        case 'price':
          return parseFloat(b.price.replace(/[$M,]/g, '')) - parseFloat(a.price.replace(/[$M,]/g, ''));
        case 'funded':
          return b.funded - a.funded;
        case 'rating':
          return b.rating - a.rating;
        default:
          return 0;
      }
    });

    return filtered;
  }, [activeTab, searchTerm, sortBy]);

  const stats = useMemo(() => {
    const totalValue = properties.reduce((sum, p) => sum + parseFloat(p.price.replace(/[$M,]/g, '')), 0);
    const avgYield = properties.reduce((sum, p) => sum + parseFloat(p.yield), 0) / properties.length;
    const totalInvestors = properties.reduce((sum, p) => sum + p.investors, 0);
    
    return {
      totalValue: `$${totalValue.toFixed(1)}M`,
      avgYield: `${avgYield.toFixed(1)}%`,
      totalInvestors: totalInvestors.toLocaleString(),
      totalProperties: properties.length
    };
  }, []);

  return (
    <section className="py-20 bg-gradient-to-br from-slate-50 via-white to-blue-50 dark:from-slate-900 dark:via-slate-800 dark:to-slate-900">
      <div className="container mx-auto px-4">
        {/* Header Section */}
        <div className="text-center max-w-4xl mx-auto mb-12">
          <div className="inline-flex items-center gap-2 bg-blue-100 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400 px-4 py-2 rounded-full text-sm font-medium mb-6">
            <Building2 className="h-4 w-4" aria-hidden="true" />
            Premium Properties
          </div>
          <h2 className="text-4xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-slate-900 to-slate-600 dark:from-white dark:to-slate-300 bg-clip-text text-transparent">
            Featured Properties
          </h2>
          <p className="text-xl text-slate-600 dark:text-slate-400 leading-relaxed">
            Browse our selection of premium properties available for fractional investment with guaranteed returns.
          </p>
        </div>

        {/* Stats Section */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-12">
          <div className="text-center p-6 bg-white dark:bg-slate-800 rounded-2xl shadow-lg border border-slate-200 dark:border-slate-700">
            <div className="text-3xl font-bold text-slate-900 dark:text-white">{stats.totalValue}</div>
            <div className="text-sm text-slate-600 dark:text-slate-400">Total Value</div>
          </div>
          <div className="text-center p-6 bg-white dark:bg-slate-800 rounded-2xl shadow-lg border border-slate-200 dark:border-slate-700">
            <div className="text-3xl font-bold text-green-600">{stats.avgYield}</div>
            <div className="text-sm text-slate-600 dark:text-slate-400">Avg Yield</div>
          </div>
          <div className="text-center p-6 bg-white dark:bg-slate-800 rounded-2xl shadow-lg border border-slate-200 dark:border-slate-700">
            <div className="text-3xl font-bold text-blue-600">{stats.totalInvestors}</div>
            <div className="text-sm text-slate-600 dark:text-slate-400">Investors</div>
          </div>
          <div className="text-center p-6 bg-white dark:bg-slate-800 rounded-2xl shadow-lg border border-slate-200 dark:border-slate-700">
            <div className="text-3xl font-bold text-purple-600">{stats.totalProperties}</div>
            <div className="text-sm text-slate-600 dark:text-slate-400">Properties</div>
          </div>
        </div>

        {/* Search and Filter Section */}
        <div className="bg-white dark:bg-slate-800 rounded-2xl p-6 mb-8 shadow-lg border border-slate-200 dark:border-slate-700">
          <div className="flex flex-col lg:flex-row gap-4 items-center">
            <div className="relative flex-1 max-w-md">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-slate-400" aria-hidden="true" />
              <input
                type="text"
                placeholder="Search properties..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full pl-10 pr-4 py-3 border border-slate-200 dark:border-slate-600 rounded-xl bg-white dark:bg-slate-700 text-slate-900 dark:text-white placeholder-slate-500 focus:outline-none focus:ring-2 focus:ring-blue-500"
                aria-label="Search properties by title or location"
              />
            </div>
            <select
              value={sortBy}
              onChange={(e) => setSortBy(e.target.value)}
              className="px-4 py-3 border border-slate-200 dark:border-slate-600 rounded-xl bg-white dark:bg-slate-700 text-slate-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
              aria-label="Sort properties"
            >
              <option value="yield">Sort by Yield</option>
              <option value="price">Sort by Price</option>
              <option value="funded">Sort by Funding</option>
              <option value="rating">Sort by Rating</option>
            </select>
            <button
              onClick={() => setShowFilters(!showFilters)}
              className="flex items-center gap-2 px-4 py-3 bg-slate-100 dark:bg-slate-700 text-slate-700 dark:text-slate-300 rounded-xl hover:bg-slate-200 dark:hover:bg-slate-600 transition-colors"
              aria-label={showFilters ? 'Hide filters' : 'Show filters'}
            >
              <Filter className="h-4 w-4" />
              Filters
            </button>
          </div>
        </div>

        {/* Tabs */}
        <div className="flex flex-wrap justify-center gap-2 mb-8">
          {['all', 'residential', 'commercial', 'industrial'].map((tab) => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab)}
              className={`px-6 py-3 rounded-xl font-medium transition-all duration-300 ${
                activeTab === tab
                  ? 'bg-gradient-to-r from-blue-600 to-purple-600 text-white shadow-lg'
                  : 'bg-white dark:bg-slate-800 text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white border border-slate-200 dark:border-slate-700 hover:border-slate-300 dark:hover:border-slate-600'
              }`}
              aria-label={`Filter by ${tab} properties`}
            >
              {tab.charAt(0).toUpperCase() + tab.slice(1)}
              {tab === 'all' ? ' Properties' : ''}
            </button>
          ))}
        </div>

        {/* Properties Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8 mb-12">
          {filteredAndSortedProperties.map((property) => (
            <PropertyCard key={property.id} property={property} />
          ))}
        </div>

        {/* Load More */}
        <div className="text-center">
          <button
            className="inline-flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white rounded-xl font-semibold transition-all duration-300 hover:shadow-lg hover:scale-105"
            aria-label="View all properties"
          >
            View All Properties
            <ArrowUpRight className="h-5 w-5" />
          </button>
        </div>
      </div>
    </section>
  );
}