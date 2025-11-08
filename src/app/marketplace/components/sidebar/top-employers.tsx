"use client";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { topEmployers } from "../../data/internships-data";
import { Building2 } from "lucide-react";

export function TopEmployers() {
  return (
    <Card>
      <CardHeader>
        <CardTitle className="text-lg flex items-center gap-2">
          <Building2 className="w-5 h-5 text-[#002F66]" />
          Top Employers
        </CardTitle>
      </CardHeader>
      <CardContent className="space-y-3">
        {topEmployers.map((employer) => (
          <div
            key={employer.name}
            className="flex items-center gap-3 p-2 rounded-lg hover:bg-slate-50 transition-colors cursor-pointer"
          >
            <div className="w-10 h-10 bg-gradient-to-br from-slate-100 to-slate-200 rounded-lg flex items-center justify-center text-xl flex-shrink-0">
              {employer.logo}
            </div>
            <div className="flex-1 min-w-0">
              <p className="font-medium text-sm truncate">{employer.name}</p>
              <p className="text-xs text-muted-foreground">
                {employer.internships} internships
              </p>
            </div>
          </div>
        ))}
      </CardContent>
    </Card>
  );
}
