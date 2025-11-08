"use client";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { recommendedDestinations } from "../../data/internships-data";
import { MapPin } from "lucide-react";

export function RecommendedDestinations() {
  return (
    <Card>
      <CardHeader>
        <CardTitle className="text-lg flex items-center gap-2">
          <MapPin className="w-5 h-5 text-[#002F66]" />
          Recommended Destinations
        </CardTitle>
      </CardHeader>
      <CardContent className="space-y-2">
        {recommendedDestinations.map((destination) => (
          <div
            key={destination.city}
            className="flex items-center justify-between p-2 rounded-lg hover:bg-slate-50 transition-colors cursor-pointer"
          >
            <div className="flex items-center gap-2">
              <span className="text-2xl">{destination.flag}</span>
              <div>
                <p className="font-medium text-sm">{destination.city}</p>
                <p className="text-xs text-muted-foreground">
                  {destination.country}
                </p>
              </div>
            </div>
            <span className="text-xs font-medium text-[#002F66]">
              {destination.internships} open
            </span>
          </div>
        ))}
      </CardContent>
    </Card>
  );
}
