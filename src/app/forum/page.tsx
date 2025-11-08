"use client";

import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Separator } from "@/components/ui/separator";
import {
  Search,
  Home,
  MessageSquare,
  Briefcase,
  LayoutDashboard,
  LogIn,
  ThumbsUp,
  MessageCircle,
  TrendingUp,
  Users,
  BookOpen,
} from "lucide-react";
import { LivingExpensesCalculator } from "@/components/living-expenses-calculator";

// Mock data for forum posts
const forumPosts = [
  {
    id: 1,
    title: "Finding affordable housing in Vienna 🇦🇹",
    category: "Accommodation",
    country: "Austria",
    flag: "🇦🇹",
    preview:
      "After spending 3 months in Vienna, I wanted to share some tips on finding affordable places to stay. Check out WG-Gesucht and Willhaben for the best deals...",
    author: "Sarah Miller",
    avatar: "/avatars/sarah.jpg",
    date: "2 days ago",
    upvotes: 47,
    comments: 12,
  },
  {
    id: 2,
    title: "Living Expenses Calculator helped me budget for Copenhagen 📊",
    category: "Stipends & Funding",
    country: "Denmark",
    flag: "🇩🇰",
    preview:
      "Used the Living Expenses Calculator before my internship and it was spot on! Copenhagen is expensive but knowing the costs upfront helped me plan properly. Highly recommend checking it out...",
    author: "Erik Nielsen",
    avatar: "/avatars/erik.jpg",
    date: "3 days ago",
    upvotes: 112,
    comments: 28,
  },
  {
    id: 3,
    title: "Working at a tech startup in Berlin - My experience",
    category: "Work Experience",
    country: "Germany",
    flag: "🇩🇪",
    preview:
      "Just finished my 6-month internship at a Berlin-based startup. Here's what I learned about German work culture, networking, and making the most of your time...",
    author: "Marco Rossi",
    avatar: "/avatars/marco.jpg",
    date: "5 days ago",
    upvotes: 89,
    comments: 24,
  },
  {
    id: 4,
    title: "Real costs: Stockholm vs Oslo comparison 💰",
    category: "Food & Living",
    country: "Sweden",
    flag: "🇸🇪",
    preview:
      "I compared both cities using the Living Expenses Calculator and real experience. Stockholm is cheaper than Oslo, but both require good budgeting. Here's my monthly breakdown...",
    author: "Ingrid Larsson",
    avatar: "/avatars/ingrid.jpg",
    date: "6 days ago",
    upvotes: 94,
    comments: 19,
  },
  {
    id: 5,
    title: "Erasmus+ stipend reality check - Is it enough? 💶",
    category: "Stipends & Funding",
    country: "Spain",
    flag: "🇪🇸",
    preview:
      "Let's talk real numbers. I'm in Barcelona with a €500/month Erasmus grant. Here's my breakdown of expenses and how I manage to survive...",
    author: "Ana García",
    avatar: "/avatars/ana.jpg",
    date: "1 week ago",
    upvotes: 156,
    comments: 43,
  },
  {
    id: 6,
    title: "Best budget eats in Lisbon 🍽️",
    category: "Food & Living",
    country: "Portugal",
    flag: "🇵🇹",
    preview:
      "Portugal has amazing food and you don't need to break the bank! Here are my favorite spots for authentic Portuguese cuisine under €10...",
    author: "João Silva",
    avatar: "/avatars/joao.jpg",
    date: "1 week ago",
    upvotes: 73,
    comments: 18,
  },
  {
    id: 7,
    title: "How accurate is the Living Expenses Calculator? 🎯",
    category: "General Tips",
    country: "Ireland",
    flag: "🇮🇪",
    preview:
      "Tested the calculator before moving to Dublin. My actual expenses were within 10% of the estimate! Great tool for planning your budget. Here's what matched and what didn't...",
    author: "Connor O'Brien",
    avatar: "/avatars/connor.jpg",
    date: "1 week ago",
    upvotes: 81,
    comments: 22,
  },
  {
    id: 8,
    title: "Internship at Siemens Munich - Application tips ⚙️",
    category: "Employers",
    country: "Germany",
    flag: "🇩🇪",
    preview:
      "Successfully got accepted for an engineering internship at Siemens. Here's what helped me stand out in the application process...",
    author: "Emma Weber",
    avatar: "/avatars/emma.jpg",
    date: "2 weeks ago",
    upvotes: 124,
    comments: 31,
  },
  {
    id: 9,
    title: "Complete guide to Amsterdam as an intern 🇳🇱",
    category: "City Guides",
    country: "Netherlands",
    flag: "🇳🇱",
    preview:
      "Everything you need to know about living in Amsterdam: transportation, bikes, best neighborhoods for students, and how to save money...",
    author: "Lars van der Berg",
    avatar: "/avatars/lars.jpg",
    date: "2 weeks ago",
    upvotes: 201,
    comments: 56,
  },
  {
    id: 10,
    title: "Budget planning tips: Use the calculator BEFORE applying! 💡",
    category: "Stipends & Funding",
    country: "Italy",
    flag: "🇮🇹",
    preview:
      "Wish I had used the Living Expenses Calculator before choosing my destination. Milan is beautiful but expensive! Here's how to plan better than I did...",
    author: "Giulia Romano",
    avatar: "/avatars/giulia.jpg",
    date: "2 weeks ago",
    upvotes: 67,
    comments: 14,
  },
  {
    id: 11,
    title: "Research internship vs Company internship - Pros & Cons",
    category: "General Tips",
    country: "Belgium",
    flag: "🇧🇪",
    preview:
      "I've done both types of internships. Here's my honest comparison to help you decide which path might be better for your career goals...",
    author: "Sophie Dubois",
    avatar: "/avatars/sophie.jpg",
    date: "3 weeks ago",
    upvotes: 95,
    comments: 27,
  },
  {
    id: 12,
    title: "French language barrier? Not a problem! 🇫🇷",
    category: "General Tips",
    country: "France",
    flag: "🇫🇷",
    preview:
      "Did my internship in Lyon with basic French. Here are the apps, tips, and phrases that saved me, plus how to make French friends...",
    author: "Maria Kowalski",
    avatar: "/avatars/maria.jpg",
    date: "3 weeks ago",
    upvotes: 68,
    comments: 15,
  },
];

const categories = [
  { name: "All", color: "default" },
  { name: "Accommodation", color: "blue" },
  { name: "Food & Living", color: "green" },
  { name: "Stipends & Funding", color: "yellow" },
  { name: "Work Experience", color: "purple" },
  { name: "City Guides", color: "pink" },
  { name: "Employers", color: "orange" },
  { name: "General Tips", color: "cyan" },
];

const trendingTopics = [
  "How to use Living Expenses Calculator",
  "Cost of living in Copenhagen",
  "Best IT internships in Dublin",
  "Student visa tips for Sweden",
  "Comparing cities with the calculator tool",
];

const activeUsers = [
  { name: "Anna K.", avatar: "/avatars/anna.jpg", initials: "AK" },
  { name: "Tom B.", avatar: "/avatars/tom.jpg", initials: "TB" },
  { name: "Lisa M.", avatar: "/avatars/lisa.jpg", initials: "LM" },
  { name: "David R.", avatar: "/avatars/david.jpg", initials: "DR" },
  { name: "Nina S.", avatar: "/avatars/nina.jpg", initials: "NS" },
];

export default function ForumPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50">
      {/* Header Navigation */}
      <header className="sticky top-0 z-50 bg-white/95 backdrop-blur-sm border-b shadow-sm">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            {/* Logo */}
            <div className="flex items-center gap-2">
              <div className="w-10 h-10 bg-gradient-to-br from-blue-600 to-purple-600 rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-xl">C+</span>
              </div>
              <span className="text-2xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                Career+
              </span>
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

      <div className="container mx-auto px-4 py-8">
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-6">
          {/* Main Content */}
          <div className="lg:col-span-3 space-y-6">
            {/* Filter Bar */}
            <Card>
              <CardHeader>
                <div className="space-y-4">
                  {/* Category Chips */}
                  <div className="flex flex-wrap gap-2">
                    {categories.map((category) => (
                      <Badge
                        key={category.name}
                        variant={
                          category.name === "All" ? "default" : "outline"
                        }
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
                        <SelectItem value="netherlands">
                          🇳🇱 Netherlands
                        </SelectItem>
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

            {/* Forum Posts Grid */}
            <div className="space-y-3">
              {forumPosts.map((post) => (
                <Card
                  key={post.id}
                  className="hover:shadow-md transition-all duration-300 cursor-pointer group"
                >
                  <CardContent className="p-4">
                    <div className="flex gap-3">
                      {/* Avatar */}
                      <Avatar className="w-10 h-10 ring-2 ring-background flex-shrink-0">
                        <AvatarImage src={post.avatar} alt={post.author} />
                        <AvatarFallback className="bg-gradient-to-br from-blue-500 to-purple-500 text-white text-sm">
                          {post.author
                            .split(" ")
                            .map((n) => n[0])
                            .join("")}
                        </AvatarFallback>
                      </Avatar>

                      {/* Post Content */}
                      <div className="flex-1 space-y-1.5 min-w-0">
                        <div className="flex items-start justify-between gap-3">
                          <div className="flex-1 min-w-0">
                            <h3 className="text-base font-semibold group-hover:text-blue-600 transition-colors line-clamp-1">
                              {post.title}
                            </h3>
                            <div className="flex items-center gap-2 mt-0.5">
                              <Badge
                                variant="secondary"
                                className="text-xs px-2 py-0"
                              >
                                {post.category}
                              </Badge>
                              <span className="text-xs text-muted-foreground">
                                {post.country} {post.flag}
                              </span>
                            </div>
                          </div>
                        </div>

                        <p className="text-sm text-muted-foreground line-clamp-2">
                          {post.preview}
                        </p>

                        <div className="flex items-center justify-between pt-1">
                          <div className="flex items-center gap-3 text-xs text-muted-foreground">
                            <span className="font-medium">{post.author}</span>
                            <span>•</span>
                            <span>{post.date}</span>
                          </div>

                          <div className="flex items-center gap-3 text-xs">
                            <div className="flex items-center gap-1 text-muted-foreground hover:text-blue-600 transition-colors">
                              <ThumbsUp className="w-3.5 h-3.5" />
                              <span className="font-medium">
                                {post.upvotes}
                              </span>
                            </div>
                            <div className="flex items-center gap-1 text-muted-foreground hover:text-purple-600 transition-colors">
                              <MessageCircle className="w-3.5 h-3.5" />
                              <span className="font-medium">
                                {post.comments}
                              </span>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
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
            <Card>
              <CardHeader>
                <div className="flex items-center gap-2">
                  <TrendingUp className="w-5 h-5 text-orange-500" />
                  <h3 className="font-semibold">Trending Topics</h3>
                </div>
              </CardHeader>
              <CardContent className="space-y-3">
                {trendingTopics.map((topic, index) => (
                  <div
                    key={index}
                    className="flex items-start gap-2 text-sm hover:text-blue-600 cursor-pointer transition-colors"
                  >
                    <span className="text-muted-foreground font-medium min-w-[20px]">
                      {index + 1}.
                    </span>
                    <span className="line-clamp-2">{topic}</span>
                  </div>
                ))}
              </CardContent>
            </Card>

            {/* Helpful Resources */}
            <Card>
              <CardHeader>
                <div className="flex items-center gap-2">
                  <BookOpen className="w-5 h-5 text-blue-500" />
                  <h3 className="font-semibold">Helpful Resources</h3>
                </div>
              </CardHeader>
              <CardContent className="space-y-2">
                <a
                  href="#"
                  className="block text-sm text-blue-600 hover:underline"
                >
                  Erasmus+ Official Guide
                </a>
                <a
                  href="#"
                  className="block text-sm text-blue-600 hover:underline"
                >
                  Housing Platforms Directory
                </a>
                <a
                  href="#"
                  className="block text-sm text-blue-600 hover:underline"
                >
                  Language Learning Tools
                </a>
                <a
                  href="#"
                  className="block text-sm text-blue-600 hover:underline"
                >
                  Budgeting Calculator
                </a>
                <a
                  href="#"
                  className="block text-sm text-blue-600 hover:underline"
                >
                  ESN Network
                </a>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>

      {/* Footer */}
      <footer className="bg-slate-900 text-slate-300 mt-16">
        <div className="container mx-auto px-4 py-8">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <div className="text-center md:text-left">
              <p className="text-sm">
                © 2025 Career+ · University of Zagreb Career Development Office
              </p>
            </div>
            <div className="flex items-center gap-6 text-sm">
              <a href="#" className="hover:text-white transition-colors">
                About
              </a>
              <a href="#" className="hover:text-white transition-colors">
                Terms
              </a>
              <a href="#" className="hover:text-white transition-colors">
                Privacy
              </a>
              <a href="#" className="hover:text-white transition-colors">
                Contact
              </a>
            </div>
            <div className="flex items-center gap-4">
              <a
                href="#"
                className="hover:text-white transition-colors"
                aria-label="LinkedIn"
              >
                <svg
                  className="w-5 h-5"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
                </svg>
              </a>
              <a
                href="#"
                className="hover:text-white transition-colors"
                aria-label="Instagram"
              >
                <svg
                  className="w-5 h-5"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
                </svg>
              </a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
