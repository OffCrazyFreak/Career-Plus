"use client";

import { useState } from "react";
import { AppSidebar } from "@/components/app-sidebar";
import { SidebarProvider, SidebarInset } from "@/components/ui/sidebar";
import { Header } from "@/components/header";
import { Footer } from "@/components/footer";
import { FilterBar } from "./components/filter-bar";
import { InternshipCard } from "./components/internship-card";
import { InternshipDetailModal } from "./components/internship-detail-modal";
import { TopEmployers } from "./components/sidebar/top-employers";
import { RecommendedDestinations } from "./components/sidebar/recommended-destinations";
import { HelpfulResources } from "./components/sidebar/helpful-resources";
import { EmployerBanner } from "./components/employer-banner";
import { Button } from "@/components/ui/button";
import { Briefcase, Plus } from "lucide-react";
import { internships, type Internship } from "./data/internships-data";

export default function MarketplacePage() {
  const [selectedInternship, setSelectedInternship] =
    useState<Internship | null>(null);
  const [modalOpen, setModalOpen] = useState(false);

  const handleViewDetails = (internship: Internship) => {
    setSelectedInternship(internship);
    setModalOpen(true);
  };

  return (
    <SidebarProvider defaultOpen={false}>
      <AppSidebar />
      <SidebarInset className="min-h-screen bg-slate-50">
        <Header />

        <main className="container mx-auto px-4 py-8">
          {/* Hero Section */}
          <div className="mb-8 text-center">
            <h1 className="text-4xl md:text-5xl font-bold text-[#002F66] mb-4">
              Explore Erasmus+ Internship Opportunities
            </h1>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto mb-6">
              Find verified placements across Europe that match your skills,
              language, and goals. All opportunities are curated to meet
              Erasmus+ standards.
            </p>
          </div>

          {/* Filter Bar */}
          <FilterBar />

          {/* Main Content Grid */}
          <div className="grid lg:grid-cols-[1fr_340px] gap-6">
            {/* Internships Grid */}
            <div>
              <div className="mb-4 flex items-center justify-between">
                <p className="text-sm text-muted-foreground">
                  Showing{" "}
                  <span className="font-semibold text-foreground">
                    {internships.length}
                  </span>{" "}
                  internships
                </p>
              </div>

              <div className="grid md:grid-cols-2 gap-6">
                {internships.map((internship) => (
                  <InternshipCard
                    key={internship.id}
                    internship={internship}
                    onViewDetails={handleViewDetails}
                  />
                ))}
              </div>
            </div>

            {/* Sidebar */}
            <aside className="space-y-6">
              <TopEmployers />
              <RecommendedDestinations />
              <HelpfulResources />
            </aside>
          </div>

          {/* Employer Banner */}
          <div className="mt-12">
            <EmployerBanner />
          </div>
        </main>

        <Footer />

        {/* Internship Detail Modal */}
        <InternshipDetailModal
          internship={selectedInternship}
          open={modalOpen}
          onOpenChange={setModalOpen}
        />
      </SidebarInset>
    </SidebarProvider>
  );
}
