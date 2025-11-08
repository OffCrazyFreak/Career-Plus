import type { Metadata } from "next";
import "./globals.css";

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
      <body className="antialiased">{children}</body>
    </html>
  );
}
