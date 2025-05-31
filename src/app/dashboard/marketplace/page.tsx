'use client';

import { Building2, Search, Filter } from 'lucide-react';
import DashboardLayout from '@/components/dashboard/DashboardLayout';

const assets = [
  {
    id: 1,
    title: 'Premium Office Space',
    type: 'Commercial',
    location: 'Downtown Business District',
    price: '$2.5M',
    return: '8.5% p.a.',
    image: '/placeholder.jpg',
    gradient: 'from-purple-500 to-pink-600'
  },
  {
    id: 2,
    title: 'Luxury Apartment Complex',
    type: 'Residential',
    location: 'Waterfront Area',
    price: '$4.2M',
    return: '7.2% p.a.',
    image: '/placeholder.jpg',
    gradient: 'from-blue-500 to-purple-600'
  },
  {
    id: 3,
    title: 'Industrial Warehouse',
    type: 'Industrial',
    location: 'Logistics Hub',
    price: '$1.8M',
    return: '9.0% p.a.',
    image: '/placeholder.jpg',
    gradient: 'from-emerald-500 to-teal-600'
  },
  {
    id: 4,
    title: 'Retail Shopping Center',
    type: 'Retail',
    location: 'City Center',
    price: '$3.5M',
    return: '8.0% p.a.',
    image: '/placeholder.jpg',
    gradient: 'from-orange-500 to-red-600'
  },
];

export default function MarketplacePage() {
  return (
    <DashboardLayout>
      <div className="space-y-8">
        <div className="flex items-center justify-between">
          <div>
            <h1 className="text-3xl font-bold">Marketplace</h1>
            <p className="text-muted-foreground mt-2">Discover and invest in premium real estate assets</p>
          </div>
          <div className="flex items-center gap-4">
            <div className="relative">
              <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
              <input
                type="text"
                placeholder="Search assets..."
                className="pl-10 pr-4 py-2 rounded-xl border bg-background focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>
            <button
              className="p-2 rounded-xl border bg-background hover:bg-accent transition-colors"
              aria-label="Filter"
            >
              <Filter className="h-4 w-4" />
            </button>
          </div>
        </div>

        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {assets.map((asset) => (
            <div
              key={asset.id}
              className="group relative overflow-hidden rounded-2xl bg-card shadow-lg transition-all hover:shadow-xl hover:scale-[1.02]"
            >
              <div className="aspect-[4/3] relative overflow-hidden">
                <div className={`absolute inset-0 bg-gradient-to-br ${asset.gradient} opacity-10`} />
                <div className="absolute inset-0 flex items-center justify-center">
                  <Building2 className="h-16 w-16 text-foreground/20" />
                </div>
              </div>
              <div className="p-6 space-y-4">
                <div>
                  <h3 className="text-lg font-semibold line-clamp-1">{asset.title}</h3>
                  <p className="text-sm text-muted-foreground">{asset.location}</p>
                </div>
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm text-muted-foreground">Price</p>
                    <p className="text-lg font-semibold">{asset.price}</p>
                  </div>
                  <div className="text-right">
                    <p className="text-sm text-muted-foreground">Expected Return</p>
                    <p className="text-lg font-semibold text-green-500">{asset.return}</p>
                  </div>
                </div>
                <div className="pt-4 border-t">
                  <button
                    className={`w-full py-2 rounded-xl bg-gradient-to-r ${asset.gradient} text-white font-medium shadow-lg transition-transform hover:scale-[1.02] active:scale-[0.98]`}
                  >
                    View Details
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </DashboardLayout>
  );
}