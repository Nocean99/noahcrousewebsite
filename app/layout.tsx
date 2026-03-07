import type { Metadata } from "next";
import "./globals.css";
import Navigation from "@/components/Navigation";

export const metadata: Metadata = {
  title: "Noah Crouse | Creative Technologist",
  description: "Creative technologist blending AI, code, and a past life in electronic music. Building AI-powered apps and interactive experiences that feel intuitive, purposeful, and human.",
  keywords: ["Noah Crouse", "Creative Technologist", "AI Apps", "Sound Design", "Game Development", "Flutter", "React", "Interactive Experiences"],
  authors: [{ name: "Noah Crouse" }],
  openGraph: {
    title: "Noah Crouse | Creative Technologist",
    description: "Creative technologist blending AI, code, and a past life in electronic music.",
    type: "website",
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title: "Noah Crouse | Creative Technologist",
    description: "Creative technologist blending AI, code, and a past life in electronic music.",
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
