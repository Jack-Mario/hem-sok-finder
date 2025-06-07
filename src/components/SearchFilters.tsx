
import { Card, CardContent } from "@/components/ui/card";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";

export const SearchFilters = () => {
  const croatianCounties = [
    "Zagrebs län",
    "Krapina-Zagorje län", 
    "Sisak-Moslavina län",
    "Karlovac län",
    "Varaždin län",
    "Koprivnica-Križevci län",
    "Bjelovar-Bilogora län",
    "Primorje-Gorski kotar län",
    "Lika-Senj län",
    "Virovitica-Podravina län",
    "Požega-Slavonien län",
    "Brod-Posavina län",
    "Zadar län",
    "Osijek-Baranja län",
    "Šibenik-Knin län",
    "Vukovar-Syrmien län",
    "Split-Dalmatien län",
    "Istrien län",
    "Dubrovnik-Neretva län",
    "Međimurje län",
    "Zagreb stad"
  ];

  return (
    <Card className="w-full border-2 border-croatian-blue/20">
      <CardContent className="p-4">
        <div className="grid grid-cols-1 md:grid-cols-5 gap-4">
          {/* County/Region */}
          <div className="space-y-2">
            <Label className="text-sm font-medium text-croatian-blue">Län</Label>
            <Select>
              <SelectTrigger className="border-croatian-blue/30 focus:border-croatian-blue">
                <SelectValue placeholder="Välj..." />
              </SelectTrigger>
              <SelectContent className="max-h-60">
                {croatianCounties.map((county) => (
                  <SelectItem key={county} value={county.toLowerCase()}>
                    {county}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>

          {/* Price Range */}
          <div className="space-y-2">
            <Label className="text-sm font-medium text-croatian-blue">Pris (EUR)</Label>
            <div className="flex gap-2">
              <Input placeholder="Min" type="number" className="border-croatian-blue/30 focus:border-croatian-blue" />
              <Input placeholder="Max" type="number" className="border-croatian-blue/30 focus:border-croatian-blue" />
            </div>
          </div>

          {/* Rooms */}
          <div className="space-y-2">
            <Label className="text-sm font-medium text-croatian-blue">Antal rum</Label>
            <div className="flex gap-2">
              <Input placeholder="Min" type="number" className="border-croatian-blue/30 focus:border-croatian-blue" />
              <Input placeholder="Max" type="number" className="border-croatian-blue/30 focus:border-croatian-blue" />
            </div>
          </div>

          {/* Size */}
          <div className="space-y-2">
            <Label className="text-sm font-medium text-croatian-blue">Yta (m²)</Label>
            <div className="flex gap-2">
              <Input placeholder="Min" type="number" className="border-croatian-blue/30 focus:border-croatian-blue" />
              <Input placeholder="Max" type="number" className="border-croatian-blue/30 focus:border-croatian-blue" />
            </div>
          </div>

          {/* Property Type */}
          <div className="space-y-2">
            <Label className="text-sm font-medium text-croatian-blue">Fastighetstyp</Label>
            <div className="space-y-2">
              <div className="flex items-center space-x-2">
                <Checkbox id="apartment" className="border-croatian-blue data-[state=checked]:bg-croatian-blue" />
                <Label htmlFor="apartment" className="text-sm">Lägenhet</Label>
              </div>
              <div className="flex items-center space-x-2">
                <Checkbox id="house" className="border-croatian-blue data-[state=checked]:bg-croatian-blue" />
                <Label htmlFor="house" className="text-sm">Hus</Label>
              </div>
              <div className="flex items-center space-x-2">
                <Checkbox id="villa" className="border-croatian-blue data-[state=checked]:bg-croatian-blue" />
                <Label htmlFor="villa" className="text-sm">Villa</Label>
              </div>
            </div>
          </div>
        </div>

        <div className="flex gap-2 mt-4 pt-4 border-t border-croatian-blue/20">
          <Button variant="outline" size="sm" className="border-croatian-red text-croatian-red hover:bg-croatian-red hover:text-white">
            Rensa filter
          </Button>
          <Button size="sm" className="bg-croatian-blue hover:bg-croatian-blue/90">
            Tillämpa filter
          </Button>
        </div>
      </CardContent>
    </Card>
  );
};
