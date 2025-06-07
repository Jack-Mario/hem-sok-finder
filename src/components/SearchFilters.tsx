
import { Card, CardContent } from "@/components/ui/card";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";

export const SearchFilters = () => {
  const croatianCounties = [
    "Zagrebačka županija",
    "Krapinsko-zagorska županija", 
    "Sisačko-moslavačka županija",
    "Karlovačka županija",
    "Varaždinska županija",
    "Koprivničko-križevačka županija",
    "Bjelovarsko-bilogorska županija",
    "Primorsko-goranska županija",
    "Ličko-senjska županija",
    "Virovitičko-podravska županija",
    "Požeško-slavonska županija",
    "Brodsko-posavska županija",
    "Zadarska županija",
    "Osječko-baranjska županija",
    "Šibensko-kninska županija",
    "Vukovarsko-srijemska županija",
    "Splitsko-dalmatinska županija",
    "Istarska županija",
    "Dubrovačko-neretvanska županija",
    "Međimurska županija",
    "Grad Zagreb"
  ];

  return (
    <Card className="w-full border-2 border-croatian-blue/20">
      <CardContent className="p-4">
        <div className="grid grid-cols-1 md:grid-cols-5 gap-4">
          {/* County/Region */}
          <div className="space-y-2">
            <Label className="text-sm font-medium text-croatian-blue">Županija</Label>
            <Select>
              <SelectTrigger className="border-croatian-blue/30 focus:border-croatian-blue">
                <SelectValue placeholder="Odaberite..." />
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
            <Label className="text-sm font-medium text-croatian-blue">Cijena (EUR)</Label>
            <div className="flex gap-2">
              <Input placeholder="Min" type="number" className="border-croatian-blue/30 focus:border-croatian-blue" />
              <Input placeholder="Max" type="number" className="border-croatian-blue/30 focus:border-croatian-blue" />
            </div>
          </div>

          {/* Rooms */}
          <div className="space-y-2">
            <Label className="text-sm font-medium text-croatian-blue">Broj soba</Label>
            <div className="flex gap-2">
              <Input placeholder="Min" type="number" className="border-croatian-blue/30 focus:border-croatian-blue" />
              <Input placeholder="Max" type="number" className="border-croatian-blue/30 focus:border-croatian-blue" />
            </div>
          </div>

          {/* Size */}
          <div className="space-y-2">
            <Label className="text-sm font-medium text-croatian-blue">Površina (m²)</Label>
            <div className="flex gap-2">
              <Input placeholder="Min" type="number" className="border-croatian-blue/30 focus:border-croatian-blue" />
              <Input placeholder="Max" type="number" className="border-croatian-blue/30 focus:border-croatian-blue" />
            </div>
          </div>

          {/* Property Type */}
          <div className="space-y-2">
            <Label className="text-sm font-medium text-croatian-blue">Tip nekretnine</Label>
            <div className="space-y-2">
              <div className="flex items-center space-x-2">
                <Checkbox id="apartment" className="border-croatian-blue data-[state=checked]:bg-croatian-blue" />
                <Label htmlFor="apartment" className="text-sm">Apartman</Label>
              </div>
              <div className="flex items-center space-x-2">
                <Checkbox id="house" className="border-croatian-blue data-[state=checked]:bg-croatian-blue" />
                <Label htmlFor="house" className="text-sm">Kuća</Label>
              </div>
              <div className="flex items-center space-x-2">
                <Checkbox id="villa" className="border-croatian-blue data-[state=checked]:bg-croatian-blue" />
                <Label htmlFor="villa" className="text-sm">Vila</Label>
              </div>
            </div>
          </div>
        </div>

        <div className="flex gap-2 mt-4 pt-4 border-t border-croatian-blue/20">
          <Button variant="outline" size="sm" className="border-croatian-red text-croatian-red hover:bg-croatian-red hover:text-white">
            Obriši filtere
          </Button>
          <Button size="sm" className="bg-croatian-blue hover:bg-croatian-blue/90">
            Primijeni filtere
          </Button>
        </div>
      </CardContent>
    </Card>
  );
};
