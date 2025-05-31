import { Building2, MapPin, DollarSign, CheckCircle } from 'lucide-react';

const featured = [
  {
    name: 'Skyline Tower',
    location: 'New York, NY',
    price: '$2,500,000',
    status: 'Available',
    image: 'https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=400&q=80',
  },
  {
    name: 'Palm Beach Villa',
    location: 'Miami, FL',
    price: '$1,200,000',
    status: 'Available',
    image: 'https://images.unsplash.com/photo-1464983953574-0892a716854b?auto=format&fit=crop&w=400&q=80',
  },
];

const listings = [
  {
    name: 'Downtown Loft',
    location: 'San Francisco, CA',
    price: '$950,000',
    status: 'Available',
    image: 'https://images.unsplash.com/photo-1512918728675-ed5a9ecdebfd?auto=format&fit=crop&w=400&q=80',
  },
  {
    name: 'Lakeview House',
    location: 'Chicago, IL',
    price: '$1,100,000',
    status: 'Sold',
    image: 'https://images.unsplash.com/photo-1507089947368-19c1da9775ae?auto=format&fit=crop&w=400&q=80',
  },
  {
    name: 'Urban Apartment',
    location: 'Austin, TX',
    price: '$780,000',
    status: 'Available',
    image: 'https://images.unsplash.com/photo-1465101046530-73398c7f28ca?auto=format&fit=crop&w=400&q=80',
  },
  {
    name: 'Mountain Cabin',
    location: 'Denver, CO',
    price: '$650,000',
    status: 'Available',
    image: 'https://images.unsplash.com/photo-1501594907352-04cda38ebc29?auto=format&fit=crop&w=400&q=80',
  },
];

export default function Marketplace() {
  return (
    <div className="space-y-8">
      <div>
        <h1 className="text-3xl font-bold mb-1">Marketplace</h1>
        <p className="text-muted-foreground">Browse featured and recent property listings</p>
      </div>
      {/* Featured Properties */}
      <div>
        <h2 className="text-lg font-semibold mb-4">Featured Properties</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {featured.map((prop) => (
            <div key={prop.name} className="rounded-2xl bg-white dark:bg-gray-800 shadow-lg overflow-hidden flex flex-col md:flex-row">
              <img src={prop.image} alt={prop.name} className="w-full md:w-48 h-40 object-cover" />
              <div className="flex-1 p-6 flex flex-col justify-between">
                <div>
                  <div className="flex items-center gap-2 text-xl font-bold">
                    <Building2 className="w-5 h-5 text-purple-500" />
                    {prop.name}
                  </div>
                  <div className="flex items-center gap-2 text-sm text-muted-foreground mt-1">
                    <MapPin className="w-4 h-4" /> {prop.location}
                  </div>
                </div>
                <div className="flex items-center gap-2 mt-4">
                  <DollarSign className="w-5 h-5 text-green-500" />
                  <span className="text-lg font-semibold">{prop.price}</span>
                  <span className={`ml-auto px-3 py-1 rounded-full text-xs font-bold ${prop.status === 'Available' ? 'bg-green-100 text-green-700' : 'bg-gray-200 text-gray-500'}`}>{prop.status}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
      {/* Recent Listings */}
      <div>
        <h2 className="text-lg font-semibold mb-4">Recent Listings</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {listings.map((prop) => (
            <div key={prop.name} className="rounded-2xl bg-white dark:bg-gray-800 shadow-lg overflow-hidden flex flex-col">
              <img src={prop.image} alt={prop.name} className="w-full h-36 object-cover" />
              <div className="flex-1 p-4 flex flex-col justify-between">
                <div>
                  <div className="flex items-center gap-2 text-lg font-bold">
                    <Building2 className="w-5 h-5 text-purple-500" />
                    {prop.name}
                  </div>
                  <div className="flex items-center gap-2 text-xs text-muted-foreground mt-1">
                    <MapPin className="w-4 h-4" /> {prop.location}
                  </div>
                </div>
                <div className="flex items-center gap-2 mt-3">
                  <DollarSign className="w-5 h-5 text-green-500" />
                  <span className="text-base font-semibold">{prop.price}</span>
                  {prop.status === 'Available' && <CheckCircle className="w-4 h-4 text-green-500 ml-auto" />}
                  {prop.status === 'Sold' && <span className="ml-auto px-2 py-0.5 rounded-full bg-gray-200 text-gray-500 text-xs font-bold">Sold</span>}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
} 