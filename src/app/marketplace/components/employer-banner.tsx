"use client";

import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { BadgeCheck, Building2, Shield } from "lucide-react";

export function EmployerBanner() {
  return (
    <Card className="bg-gradient-to-r from-[#002F66] to-[#004080] text-white border-none">
      <CardContent className="py-8">
        <div className="max-w-4xl mx-auto">
          <div className="flex flex-col md:flex-row items-center gap-6">
            {/* Icon */}
            <div className="w-20 h-20 bg-white/10 rounded-full flex items-center justify-center flex-shrink-0 backdrop-blur-sm">
              <Shield className="w-10 h-10" />
            </div>

            {/* Content */}
            <div className="flex-1 text-center md:text-left">
              <h2 className="text-2xl font-bold mb-2 flex items-center gap-2 justify-center md:justify-start">
                <BadgeCheck className="w-6 h-6" />
                Verified Employers Only
              </h2>
              <p className="text-white/90 leading-relaxed mb-4">
                All internship opportunities on Career+ are posted by verified
                organizations approved by our editorial team. We ensure quality
                placements that meet Erasmus+ standards and provide meaningful
                learning experiences for students.
              </p>
              <div className="flex flex-wrap gap-4 items-center justify-center md:justify-start">
                <div className="flex items-center gap-2 text-sm">
                  <Building2 className="w-4 h-4" />
                  <span>100+ Verified Employers</span>
                </div>
                <div className="flex items-center gap-2 text-sm">
                  <BadgeCheck className="w-4 h-4" />
                  <span>Quality Assurance</span>
                </div>
                <div className="flex items-center gap-2 text-sm">
                  <Shield className="w-4 h-4" />
                  <span>Student Protection</span>
                </div>
              </div>
            </div>

            {/* CTA */}
            <div className="flex-shrink-0">
              <Button
                size="lg"
                variant="secondary"
                className="bg-white text-[#002F66] hover:bg-white/90"
              >
                Apply to Join as Employer
              </Button>
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  );
}
