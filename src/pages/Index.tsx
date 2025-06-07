
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Search, MapPin, Bed, Bath, Square } from "lucide-react";
import { PropertyCard } from "@/components/PropertyCard";
import { SearchFilters } from "@/components/SearchFilters";
import { LanguageSelector } from "@/components/LanguageSelector";

const Index = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [showFilters, setShowFilters] = useState(false);

  // Mock property data - now in Swedish
  const properties = [
    {
      id: 1,
      title: "Modern villa med havsutsikt",
      price: 850000,
      address: "Split, Dalmatien",
      rooms: 4,
      size: 120,
      bathrooms: 2,
      image: "https://images.unsplash.com/photo-1721322800607-8c38375eef04?w=400&h=300&fit=crop"
    },
    {
      id: 2,
      title: "Lyxig lägenhet i centrum",
      price: 450000,
      address: "Zagreb, Centrum",
      rooms: 3,
      size: 85,
      bathrooms: 2,
      image: "https://images.unsplash.com/photo-1605810230434-7631ac76ec81?w=400&h=300&fit=crop"
    },
    {
      id: 3,
      title: "Hus vid havet",
      price: 1200000,
      address: "Dubrovnik, Dubrovnik-Neretva",
      rooms: 5,
      size: 180,
      bathrooms: 3,
      image: "https://images.unsplash.com/photo-1649972904349-6e44c42644a7?w=400&h=300&fit=crop"
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      {/* Header with Croatian theme */}
      <header className="border-b bg-gradient-to-r from-croatian-blue via-white to-croatian-red shadow-sm">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <h1 className="text-2xl font-bold text-white drop-shadow-md">FastigheterHR</h1>
            <div className="flex items-center gap-6">
              <nav className="hidden md:flex space-x-6">
                <a href="#" className="text-white hover:text-red-100 transition-colors font-medium">Köp</a>
                <a href="#" className="text-white hover:text-red-100 transition-colors font-medium">Sälj</a>
                <a href="#" className="text-white hover:text-red-100 transition-colors font-medium">Värdering</a>
                <a href="#" className="text-white hover:text-red-100 transition-colors font-medium">Nyheter</a>
              </nav>
              <LanguageSelector />
            </div>
          </div>
        </div>
      </header>

      {/* Hero Section with Croatian styling */}
      <section className="bg-gradient-to-br from-croatian-blue/20 via-white to-croatian-red/10 py-16 relative overflow-hidden">
        <div className="absolute inset-0 opacity-50" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%233b82f6' fill-opacity='0.05'%3E%3Ccircle cx='30' cy='30' r='4'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`
        }}></div>
        <div className="container mx-auto px-4 text-center relative z-10">
          <h2 className="text-4xl font-bold mb-4 text-croatian-blue">Hitta ditt drömhem</h2>
          <p className="text-xl text-muted-foreground mb-8">
            Sök bland tusentals fastigheter till salu i hela Kroatien
          </p>
          
          {/* Search Bar */}
          <div className="max-w-2xl mx-auto">
            <div className="flex gap-2">
              <div className="relative flex-1">
                <MapPin className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground h-4 w-4" />
                <Input
                  placeholder="Stad, kommun eller län..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="pl-10 h-12 border-2 border-croatian-blue/20 focus:border-croatian-blue"
                />
              </div>
              <Button 
                onClick={() => setShowFilters(!showFilters)}
                variant="outline"
                className="h-12 px-6 border-2 border-croatian-blue text-croatian-blue hover:bg-croatian-blue hover:text-white"
              >
                Filter
              </Button>
              <Button className="h-12 px-8 bg-croatian-red hover:bg-croatian-red/90">
                <Search className="mr-2 h-4 w-4" />
                Sök
              </Button>
            </div>
            
            {showFilters && (
              <div className="mt-4">
                <SearchFilters />
              </div>
            )}
          </div>
        </div>
      </section>

      {/* Results Section */}
      <section className="container mx-auto px-4 py-12">
        <div className="flex justify-between items-center mb-8">
          <h3 className="text-2xl font-semibold text-croatian-blue">
            {properties.length} fastigheter till salu
          </h3>
          <div className="flex gap-2">
            <Button variant="outline" size="sm" className="border-croatian-blue text-croatian-blue hover:bg-croatian-blue hover:text-white">Senaste</Button>
            <Button variant="outline" size="sm" className="border-croatian-blue text-croatian-blue hover:bg-croatian-blue hover:text-white">Lägsta pris</Button>
            <Button variant="outline" size="sm" className="border-croatian-blue text-croatian-blue hover:bg-croatian-blue hover:text-white">Högsta pris</Button>
          </div>
        </div>

        {/* Property Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {properties.map((property) => (
            <PropertyCard key={property.id} property={property} />
          ))}
        </div>
      </section>

      {/* Statistics Section with Croatian colors */}
      <section className="bg-gradient-to-r from-croatian-blue/10 via-white to-croatian-red/10 py-16">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 text-center">
            <div className="p-6 rounded-lg bg-white shadow-md border-l-4 border-croatian-blue">
              <h4 className="text-3xl font-bold text-croatian-blue">25,000+</h4>
              <p className="text-muted-foreground">Aktiva annonser</p>
            </div>
            <div className="p-6 rounded-lg bg-white shadow-md border-l-4 border-croatian-red">
              <h4 className="text-3xl font-bold text-croatian-red">1,200+</h4>
              <p className="text-muted-foreground">Sålda denna vecka</p>
            </div>
            <div className="p-6 rounded-lg bg-white shadow-md border-l-4 border-croatian-blue">
              <h4 className="text-3xl font-bold text-croatian-blue">10 år</h4>
              <p className="text-muted-foreground">På marknaden</p>
            </div>
            <div className="p-6 rounded-lg bg-white shadow-md border-l-4 border-croatian-red">
              <h4 className="text-3xl font-bold text-croatian-red">97%</h4>
              <p className="text-muted-foreground">Nöjda kunder</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Index;
