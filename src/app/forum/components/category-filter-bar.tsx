import { Card, CardHeader } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Separator } from "@/components/ui/separator";

interface CategoryFilterBarProps {
  categories: Array<{ name: string; color: string }>;
}

export function CategoryFilterBar({ categories }: CategoryFilterBarProps) {
  return (
    <Card>
      <CardHeader>
        <div className="space-y-4">
          {/* Category Chips */}
          <div className="flex flex-wrap gap-2">
            {categories.map((category) => (
              <Badge
                key={category.name}
                variant={category.name === "All" ? "default" : "outline"}
                className="cursor-pointer hover:bg-primary hover:text-primary-foreground transition-colors px-3 py-1"
              >
                {category.name}
              </Badge>
            ))}
          </div>

          <Separator />

          {/* Dropdown Filters */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
            <Select>
              <SelectTrigger>
                <SelectValue placeholder="Filter by Country" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="germany">🇩🇪 Germany</SelectItem>
                <SelectItem value="spain">🇪🇸 Spain</SelectItem>
                <SelectItem value="france">🇫🇷 France</SelectItem>
                <SelectItem value="italy">🇮🇹 Italy</SelectItem>
                <SelectItem value="netherlands">🇳🇱 Netherlands</SelectItem>
                <SelectItem value="austria">🇦🇹 Austria</SelectItem>
              </SelectContent>
            </Select>

            <Select>
              <SelectTrigger>
                <SelectValue placeholder="Filter by City" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="berlin">Berlin</SelectItem>
                <SelectItem value="barcelona">Barcelona</SelectItem>
                <SelectItem value="vienna">Vienna</SelectItem>
                <SelectItem value="amsterdam">Amsterdam</SelectItem>
                <SelectItem value="paris">Paris</SelectItem>
              </SelectContent>
            </Select>

            <Select>
              <SelectTrigger>
                <SelectValue placeholder="Filter by Field" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="it">IT & Technology</SelectItem>
                <SelectItem value="engineering">Engineering</SelectItem>
                <SelectItem value="business">Business</SelectItem>
                <SelectItem value="research">Research</SelectItem>
                <SelectItem value="education">Education</SelectItem>
              </SelectContent>
            </Select>
          </div>
        </div>
      </CardHeader>
    </Card>
  );
}
