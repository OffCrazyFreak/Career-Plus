import type { Metadata } from "next";
import "./globals.css";
import { AuthProvider } from "@/contexts/auth-context";
import { SidebarProvider, SidebarInset } from "@/components/ui/sidebar";
import { AppSidebar } from "@/components/app-sidebar";
import { Header } from "@/components/header";
import { JarvisFab } from "@/components/jarvis-fab";

export const metadata: Metadata = {
  title: "Career+ Forum",
  description:
    "Knowledge & Experience Exchange Forum for Erasmus+ participants",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="antialiased m-0 p-0">
        <AuthProvider>
          <SidebarProvider defaultOpen={false}>
            <AppSidebar />
            <SidebarInset className="m-0">
              <Header />
              {children}
            </SidebarInset>
          </SidebarProvider>
          <JarvisFab />
        </AuthProvider>
      </body>
    </html>
  );
}
