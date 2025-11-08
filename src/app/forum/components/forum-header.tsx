import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  Search,
  Home,
  MessageSquare,
  Briefcase,
  LayoutDashboard,
  LogIn,
} from "lucide-react";

export function ForumHeader() {
  return (
    <header className="sticky top-0 z-50 bg-white/95 backdrop-blur-sm border-b shadow-sm">
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <div className="flex items-center gap-2">
            <div className="w-10 h-10 bg-[#002F66] rounded-lg flex items-center justify-center">
              <span className="text-white font-bold text-xl">C+</span>
            </div>
            <span className="text-2xl font-bold text-[#002F66]">Career+</span>
          </div>

          {/* Navigation */}
          <nav className="hidden md:flex items-center gap-2">
            <Button variant="ghost" className="gap-2">
              <Home className="w-4 h-4" />
              Home
            </Button>
            <Button variant="default" className="gap-2">
              <MessageSquare className="w-4 h-4" />
              Forum
            </Button>
            <Button variant="ghost" className="gap-2">
              <Briefcase className="w-4 h-4" />
              Internships
            </Button>
            <Button variant="ghost" className="gap-2">
              <LayoutDashboard className="w-4 h-4" />
              Dashboard
            </Button>
          </nav>

          {/* Search & Login */}
          <div className="flex items-center gap-2">
            <div className="hidden lg:flex items-center gap-2">
              <div className="relative">
                <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
                <Input placeholder="Search forum..." className="pl-9 w-64" />
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
