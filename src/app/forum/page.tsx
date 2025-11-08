"use client";

import { Button } from "@/components/ui/button";
import { Header } from "@/components/header";
import { Footer } from "@/components/footer";
import { AppSidebar } from "@/components/app-sidebar";
import { SidebarProvider, SidebarInset } from "@/components/ui/sidebar";
import { CategoryFilterBar } from "./components/category-filter-bar";
import { ForumPostItem } from "./components/forum-post-item";
import { TrendingTopics } from "./components/sidebar/trending-topics";
import { HelpfulResources } from "./components/sidebar/helpful-resources";
import { LivingExpensesCalculator } from "@/components/living-expenses-calculator";
import { forumPosts, categories, trendingTopics } from "./data/forum-data";

export default function ForumPage() {
  return (
    <SidebarProvider defaultOpen={false}>
      <AppSidebar />
      <SidebarInset>
        <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50">
          {/* Header Navigation */}
          <Header />

          <div className="container mx-auto px-4 py-8">
            <div className="grid grid-cols-1 lg:grid-cols-4 gap-6">
              {/* Main Content */}
              <div className="lg:col-span-3 space-y-6">
                {/* Filter Bar */}
                <CategoryFilterBar categories={categories} />

                {/* Forum Posts Grid */}
                <div className="space-y-3">
                  {forumPosts.map((post) => (
                    <ForumPostItem key={post.id} post={post} />
                  ))}
                </div>

                {/* Load More */}
                <div className="flex justify-center pt-4">
                  <Button variant="outline" size="lg">
                    Load More Posts
                  </Button>
                </div>
              </div>

              {/* Sidebar */}
              <div className="space-y-6">
                {/* Living Expenses Calculator */}
                <LivingExpensesCalculator />

                {/* Trending Topics */}
                <TrendingTopics topics={trendingTopics} />

                {/* Helpful Resources */}
                <HelpfulResources />
              </div>
            </div>
          </div>

          {/* Footer */}
          <Footer />
        </div>
      </SidebarInset>
    </SidebarProvider>
  );
}
