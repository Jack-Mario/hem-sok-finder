
import { Card, CardContent } from "@/components/ui/card";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";

export const SearchFilters = () => {
  return (
    <Card className="w-full">
      <CardContent className="p-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
          {/* Price Range */}
          <div className="space-y-2">
            <Label className="text-sm font-medium">Pris</Label>
            <div className="flex gap-2">
              <Input placeholder="Min" type="number" />
              <Input placeholder="Max" type="number" />
            </div>
          </div>

          {/* Rooms */}
          <div className="space-y-2">
            <Label className="text-sm font-medium">Antal rum</Label>
            <div className="flex gap-2">
              <Input placeholder="Min" type="number" />
              <Input placeholder="Max" type="number" />
            </div>
          </div>

          {/* Size */}
          <div className="space-y-2">
            <Label className="text-sm font-medium">Storlek (m²)</Label>
            <div className="flex gap-2">
              <Input placeholder="Min" type="number" />
              <Input placeholder="Max" type="number" />
            </div>
          </div>

          {/* Property Type */}
          <div className="space-y-2">
            <Label className="text-sm font-medium">Bostadstyp</Label>
            <div className="space-y-2">
              <div className="flex items-center space-x-2">
                <Checkbox id="apartment" />
                <Label htmlFor="apartment" className="text-sm">Lägenhet</Label>
              </div>
              <div className="flex items-center space-x-2">
                <Checkbox id="house" />
                <Label htmlFor="house" className="text-sm">Villa</Label>
              </div>
              <div className="flex items-center space-x-2">
                <Checkbox id="townhouse" />
                <Label htmlFor="townhouse" className="text-sm">Radhus</Label>
              </div>
            </div>
          </div>
        </div>

        <div className="flex gap-2 mt-4 pt-4 border-t">
          <Button variant="outline" size="sm">
            Rensa filter
          </Button>
          <Button size="sm">
            Använd filter
          </Button>
        </div>
      </CardContent>
    </Card>
  );
};
