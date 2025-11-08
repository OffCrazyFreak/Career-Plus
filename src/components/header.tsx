"use client";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { SidebarTrigger } from "@/components/ui/sidebar";
import { Search, Home, MessageSquare, Briefcase, LogIn } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";

export function Header() {
  const pathname = usePathname();
  const currentPage = pathname.startsWith("/marketplace")
    ? "marketplace"
    : "forum";

  return (
    <header className="sticky top-0 z-50 bg-white/95 backdrop-blur-sm border-b shadow-sm">
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          {/* Mobile Sidebar Trigger */}
          <SidebarTrigger className="md:hidden" />

          {/* Logo */}
          <Link href="/forum" className="flex items-center gap-2">
            <div className="w-10 h-10 bg-[#002F66] rounded-lg flex items-center justify-center">
              <span className="text-white font-bold text-xl">C+</span>
            </div>
            <span className="text-2xl font-bold text-[#002F66]">Career+</span>
          </Link>

          {/* Navigation */}
          <nav className="hidden md:flex items-center gap-2">
            <Link href="/forum">
              <Button
                variant={currentPage === "forum" ? "default" : "ghost"}
                className="gap-2"
              >
                <Home className="w-4 h-4" />
                Home
              </Button>
            </Link>
            <Link href="/forum">
              <Button
                variant={currentPage === "forum" ? "default" : "ghost"}
                className="gap-2"
              >
                <MessageSquare className="w-4 h-4" />
                Forum
              </Button>
            </Link>
            <Link href="/marketplace">
              <Button
                variant={currentPage === "marketplace" ? "default" : "ghost"}
                className="gap-2"
              >
                <Briefcase className="w-4 h-4" />
                Marketplace
              </Button>
            </Link>
          </nav>

          {/* Search & Login */}
          <div className="flex items-center gap-2">
            <div className="hidden lg:flex items-center gap-2">
              <div className="relative">
                <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
                <Input placeholder="Search..." className="pl-9 w-64" />
              </div>
            </div>
            <Button variant="outline" className="gap-2">
              <LogIn className="w-4 h-4" />
              Login
            </Button>
          </div>
        </div>
      </div>
    </header>
  );
}
