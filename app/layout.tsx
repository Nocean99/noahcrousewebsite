import type { Metadata } from "next";
import "./globals.css";
import Navigation from "@/components/Navigation";

export const metadata: Metadata = {
  title: "Noah Crouse | Mobile Developer & AI Integration Specialist",
  description: "Mobile developer passionate about building AI-powered fitness and health applications. Specializing in Flutter, React, and full-stack development.",
  keywords: ["Noah Crouse", "Mobile Developer", "Flutter Developer", "AI Integration", "Fitness Tech", "Full-Stack Developer"],
  authors: [{ name: "Noah Crouse" }],
  openGraph: {
    title: "Noah Crouse | Mobile Developer",
    description: "Mobile developer passionate about building AI-powered fitness and health applications.",
    type: "website",
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title: "Noah Crouse | Mobile Developer",
    description: "Mobile developer passionate about building AI-powered fitness and health applications.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className="antialiased w-full min-w-full">
        <Navigation />
        {children}
      </body>
    </html>
  );
}
