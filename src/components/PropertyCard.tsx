
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Bed, Bath, Square, Heart } from "lucide-react";
import { Button } from "@/components/ui/button";

interface Property {
  id: number;
  title: string;
  price: number;
  address: string;
  rooms: number;
  size: number;
  bathrooms: number;
  image: string;
}

interface PropertyCardProps {
  property: Property;
}

export const PropertyCard = ({ property }: PropertyCardProps) => {
  const formatPrice = (price: number) => {
    return new Intl.NumberFormat('sv-SE', {
      style: 'currency',
      currency: 'SEK',
      minimumFractionDigits: 0,
      maximumFractionDigits: 0,
    }).format(price);
  };

  const pricePerSqm = Math.round(property.price / property.size);

  return (
    <Card className="overflow-hidden hover:shadow-lg transition-shadow cursor-pointer group">
      <div className="relative">
        <img
          src={property.image}
          alt={property.title}
          className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
        />
        <Button
          size="sm"
          variant="secondary"
          className="absolute top-2 right-2 opacity-0 group-hover:opacity-100 transition-opacity"
        >
          <Heart className="h-4 w-4" />
        </Button>
        <Badge className="absolute top-2 left-2 bg-primary text-primary-foreground">
          Till salu
        </Badge>
      </div>
      
      <CardContent className="p-4">
        <div className="space-y-3">
          <div>
            <h3 className="font-semibold text-lg line-clamp-2 group-hover:text-primary transition-colors">
              {property.title}
            </h3>
            <p className="text-muted-foreground text-sm flex items-center">
              <span>{property.address}</span>
            </p>
          </div>
          
          <div className="flex items-center justify-between text-sm text-muted-foreground">
            <div className="flex items-center gap-4">
              <div className="flex items-center gap-1">
                <Bed className="h-4 w-4" />
                <span>{property.rooms} rum</span>
              </div>
              <div className="flex items-center gap-1">
                <Square className="h-4 w-4" />
                <span>{property.size} m²</span>
              </div>
              <div className="flex items-center gap-1">
                <Bath className="h-4 w-4" />
                <span>{property.bathrooms}</span>
              </div>
            </div>
          </div>
          
          <div className="border-t pt-3">
            <div className="flex justify-between items-center">
              <div>
                <p className="text-2xl font-bold text-primary">
                  {formatPrice(property.price)}
                </p>
                <p className="text-sm text-muted-foreground">
                  {formatPrice(pricePerSqm)}/m²
                </p>
              </div>
              <Button size="sm">
                Se mer
              </Button>
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};
