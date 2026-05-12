import type { Metadata } from "next";
import { Inter, Space_Grotesk, JetBrains_Mono } from "next/font/google";
import "./globals.css";
import Navigation from "@/components/Navigation";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-sans",
  display: "swap",
});

const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  variable: "--font-display",
  display: "swap",
});

const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-mono",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Noah Crouse | Creative Technologist",
  description:
    "Creative technologist blending AI, code, and a past life in electronic music. Building AI-powered apps and interactive experiences that feel intuitive, purposeful, and human.",
  keywords: [
    "Noah Crouse",
    "Creative Technologist",
    "AI Apps",
    "Sound Design",
    "Game Development",
    "Flutter",
    "React",
    "Interactive Experiences",
  ],
  authors: [{ name: "Noah Crouse" }],
  openGraph: {
    title: "Noah Crouse | Creative Technologist",
    description:
      "Creative technologist blending AI, code, and a past life in electronic music.",
    type: "website",
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title: "Noah Crouse | Creative Technologist",
    description:
      "Creative technologist blending AI, code, and a past life in electronic music.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      suppressHydrationWarning
      className={`${inter.variable} ${spaceGrotesk.variable} ${jetbrainsMono.variable}`}
    >
      <body className="antialiased">
        <Navigation />
        {children}
      </body>
    </html>
  );
}
