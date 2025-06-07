
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Search, MapPin, Bed, Bath, Square } from "lucide-react";
import { PropertyCard } from "@/components/PropertyCard";
import { SearchFilters } from "@/components/SearchFilters";

const Index = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [showFilters, setShowFilters] = useState(false);

  // Mock property data
  const properties = [
    {
      id: 1,
      title: "Modern lägenhet i centrala Stockholm",
      price: 4200000,
      address: "Södermalm, Stockholm",
      rooms: 3,
      size: 75,
      bathrooms: 1,
      image: "https://images.unsplash.com/photo-1721322800607-8c38375eef04?w=400&h=300&fit=crop"
    },
    {
      id: 2,
      title: "Charmig villa med trädgård",
      price: 6800000,
      address: "Danderyd, Stockholm",
      rooms: 5,
      size: 140,
      bathrooms: 2,
      image: "https://images.unsplash.com/photo-1605810230434-7631ac76ec81?w=400&h=300&fit=crop"
    },
    {
      id: 3,
      title: "Ljus studentlägenhet",
      price: 2100000,
      address: "Lund, Skåne",
      rooms: 2,
      size: 45,
      bathrooms: 1,
      image: "https://images.unsplash.com/photo-1649972904349-6e44c42644a7?w=400&h=300&fit=crop"
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="border-b bg-white">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <h1 className="text-2xl font-bold text-primary">HemSök</h1>
            <nav className="hidden md:flex space-x-6">
              <a href="#" className="text-muted-foreground hover:text-primary">Köpa</a>
              <a href="#" className="text-muted-foreground hover:text-primary">Sälja</a>
              <a href="#" className="text-muted-foreground hover:text-primary">Värdera</a>
              <a href="#" className="text-muted-foreground hover:text-primary">Nyheter</a>
            </nav>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="bg-gradient-to-r from-primary/10 to-primary/5 py-16">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold mb-4">Hitta ditt drömhem</h2>
          <p className="text-xl text-muted-foreground mb-8">
            Sök bland tusentals bostäder till salu i hela Sverige
          </p>
          
          {/* Search Bar */}
          <div className="max-w-2xl mx-auto">
            <div className="flex gap-2">
              <div className="relative flex-1">
                <MapPin className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground h-4 w-4" />
                <Input
                  placeholder="Stad, område eller kommun..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="pl-10 h-12"
                />
              </div>
              <Button 
                onClick={() => setShowFilters(!showFilters)}
                variant="outline"
                className="h-12 px-6"
              >
                Filter
              </Button>
              <Button className="h-12 px-8">
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
          <h3 className="text-2xl font-semibold">
            {properties.length} bostäder till salu
          </h3>
          <div className="flex gap-2">
            <Button variant="outline" size="sm">Senast inlagda</Button>
            <Button variant="outline" size="sm">Lägsta pris</Button>
            <Button variant="outline" size="sm">Högsta pris</Button>
          </div>
        </div>

        {/* Property Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {properties.map((property) => (
            <PropertyCard key={property.id} property={property} />
          ))}
        </div>
      </section>

      {/* Statistics Section */}
      <section className="bg-muted py-16">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 text-center">
            <div>
              <h4 className="text-3xl font-bold text-primary">50,000+</h4>
              <p className="text-muted-foreground">Aktiva annonser</p>
            </div>
            <div>
              <h4 className="text-3xl font-bold text-primary">2,500+</h4>
              <p className="text-muted-foreground">Sålda i veckan</p>
            </div>
            <div>
              <h4 className="text-3xl font-bold text-primary">15 år</h4>
              <p className="text-muted-foreground">På marknaden</p>
            </div>
            <div>
              <h4 className="text-3xl font-bold text-primary">98%</h4>
              <p className="text-muted-foreground">Nöjda kunder</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Index;
