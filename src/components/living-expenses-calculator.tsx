"use client";

import { useState } from "react";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import {
  Calculator,
  Home,
  Utensils,
  Bus,
  Wifi,
  ShoppingBag,
} from "lucide-react";
import { Badge } from "@/components/ui/badge";

// Mock data for European cities with student-focused living costs (monthly in EUR)
const cityCosts = {
  berlin: {
    name: "Berlin",
    country: "Germany",
    flag: "🇩🇪",
    rent: 450,
    food: 250,
    transport: 49,
    utilities: 80,
    entertainment: 100,
  },
  munich: {
    name: "Munich",
    country: "Germany",
    flag: "🇩🇪",
    rent: 650,
    food: 280,
    transport: 55,
    utilities: 90,
    entertainment: 120,
  },
  barcelona: {
    name: "Barcelona",
    country: "Spain",
    flag: "🇪🇸",
    rent: 500,
    food: 220,
    transport: 40,
    utilities: 70,
    entertainment: 90,
  },
  madrid: {
    name: "Madrid",
    country: "Spain",
    flag: "🇪🇸",
    rent: 480,
    food: 210,
    transport: 35,
    utilities: 65,
    entertainment: 85,
  },
  paris: {
    name: "Paris",
    country: "France",
    flag: "🇫🇷",
    rent: 700,
    food: 300,
    transport: 75,
    utilities: 100,
    entertainment: 130,
  },
  lyon: {
    name: "Lyon",
    country: "France",
    flag: "🇫🇷",
    rent: 500,
    food: 250,
    transport: 60,
    utilities: 80,
    entertainment: 100,
  },
  amsterdam: {
    name: "Amsterdam",
    country: "Netherlands",
    flag: "🇳🇱",
    rent: 650,
    food: 280,
    transport: 70,
    utilities: 110,
    entertainment: 120,
  },
  vienna: {
    name: "Vienna",
    country: "Austria",
    flag: "🇦🇹",
    rent: 500,
    food: 260,
    transport: 50,
    utilities: 85,
    entertainment: 95,
  },
  copenhagen: {
    name: "Copenhagen",
    country: "Denmark",
    flag: "🇩🇰",
    rent: 750,
    food: 320,
    transport: 80,
    utilities: 100,
    entertainment: 140,
  },
  stockholm: {
    name: "Stockholm",
    country: "Sweden",
    flag: "🇸🇪",
    rent: 650,
    food: 290,
    transport: 70,
    utilities: 90,
    entertainment: 120,
  },
  oslo: {
    name: "Oslo",
    country: "Norway",
    flag: "🇳🇴",
    rent: 800,
    food: 350,
    transport: 85,
    utilities: 110,
    entertainment: 150,
  },
  rome: {
    name: "Rome",
    country: "Italy",
    flag: "🇮🇹",
    rent: 480,
    food: 240,
    transport: 35,
    utilities: 75,
    entertainment: 90,
  },
  milan: {
    name: "Milan",
    country: "Italy",
    flag: "🇮🇹",
    rent: 550,
    food: 260,
    transport: 40,
    utilities: 85,
    entertainment: 100,
  },
  lisbon: {
    name: "Lisbon",
    country: "Portugal",
    flag: "🇵🇹",
    rent: 420,
    food: 200,
    transport: 30,
    utilities: 60,
    entertainment: 75,
  },
  dublin: {
    name: "Dublin",
    country: "Ireland",
    flag: "🇮🇪",
    rent: 700,
    food: 300,
    transport: 65,
    utilities: 95,
    entertainment: 115,
  },
  brussels: {
    name: "Brussels",
    country: "Belgium",
    flag: "🇧🇪",
    rent: 550,
    food: 270,
    transport: 50,
    utilities: 90,
    entertainment: 105,
  },
  prague: {
    name: "Prague",
    country: "Czech Republic",
    flag: "🇨🇿",
    rent: 400,
    food: 190,
    transport: 25,
    utilities: 65,
    entertainment: 70,
  },
  zagreb: {
    name: "Zagreb",
    country: "Croatia",
    flag: "🇭🇷",
    rent: 350,
    food: 180,
    transport: 25,
    utilities: 55,
    entertainment: 65,
  },
};

export function LivingExpensesCalculator() {
  const [selectedCity, setSelectedCity] = useState<keyof typeof cityCosts | "">(
    ""
  );

  const cityData = selectedCity ? cityCosts[selectedCity] : null;
  const total = cityData
    ? cityData.rent +
      cityData.food +
      cityData.transport +
      cityData.utilities +
      cityData.entertainment
    : 0;

  const getAffordabilityColor = (total: number) => {
    if (total < 800) return "bg-green-500";
    if (total < 1200) return "bg-yellow-500";
    return "bg-red-500";
  };

  const getAffordabilityLabel = (total: number) => {
    if (total < 800) return "Budget-Friendly";
    if (total < 1200) return "Moderate";
    return "Expensive";
  };

  return (
    <Card>
      <CardHeader>
        <div className="flex items-center gap-2">
          <Calculator className="w-5 h-5 text-green-500" />
          <h3 className="font-semibold">Living Expenses</h3>
        </div>
        <p className="text-xs text-muted-foreground mt-1">
          Estimate monthly costs for students
        </p>
      </CardHeader>
      <CardContent className="space-y-4">
        {/* City Selector */}
        <Select
          value={selectedCity}
          onValueChange={(value) =>
            setSelectedCity(value as keyof typeof cityCosts)
          }
        >
          <SelectTrigger className="w-full">
            <SelectValue placeholder="Select a city..." />
          </SelectTrigger>
          <SelectContent>
            {Object.entries(cityCosts).map(([key, city]) => (
              <SelectItem key={key} value={key}>
                {city.flag} {city.name}
              </SelectItem>
            ))}
          </SelectContent>
        </Select>

        {/* Results */}
        {cityData && (
          <div className="space-y-3">
            {/* Total */}
            <div className="p-3 bg-primary/5 rounded-lg border-2 border-primary/20">
              <div className="flex items-center justify-between mb-1">
                <span className="text-sm font-semibold text-primary">
                  Monthly Total
                </span>
                <Badge
                  variant="secondary"
                  className={`${getAffordabilityColor(
                    total
                  )} text-white border-0`}
                >
                  {getAffordabilityLabel(total)}
                </Badge>
              </div>
              <div className="text-2xl font-bold text-primary">€{total}</div>
            </div>

            {/* Breakdown */}
            <div className="space-y-2 text-sm">
              <div className="flex items-center justify-between py-1.5 border-b">
                <div className="flex items-center gap-2">
                  <Home className="w-4 h-4 text-muted-foreground" />
                  <span>Rent (shared)</span>
                </div>
                <span className="font-semibold">€{cityData.rent}</span>
              </div>

              <div className="flex items-center justify-between py-1.5 border-b">
                <div className="flex items-center gap-2">
                  <Utensils className="w-4 h-4 text-muted-foreground" />
                  <span>Food & Groceries</span>
                </div>
                <span className="font-semibold">€{cityData.food}</span>
              </div>

              <div className="flex items-center justify-between py-1.5 border-b">
                <div className="flex items-center gap-2">
                  <Bus className="w-4 h-4 text-muted-foreground" />
                  <span>Transport</span>
                </div>
                <span className="font-semibold">€{cityData.transport}</span>
              </div>

              <div className="flex items-center justify-between py-1.5 border-b">
                <div className="flex items-center gap-2">
                  <Wifi className="w-4 h-4 text-muted-foreground" />
                  <span>Utilities & Internet</span>
                </div>
                <span className="font-semibold">€{cityData.utilities}</span>
              </div>

              <div className="flex items-center justify-between py-1.5">
                <div className="flex items-center gap-2">
                  <ShoppingBag className="w-4 h-4 text-muted-foreground" />
                  <span>Entertainment</span>
                </div>
                <span className="font-semibold">€{cityData.entertainment}</span>
              </div>
            </div>

            {/* Info */}
            <div className="text-xs text-muted-foreground pt-2 border-t">
              <p>
                💡 Costs are estimates based on student living. Actual expenses
                may vary.
              </p>
            </div>
          </div>
        )}

        {!cityData && (
          <div className="text-center py-6 text-sm text-muted-foreground">
            Select a city to calculate living expenses
          </div>
        )}
      </CardContent>
    </Card>
  );
}
