import type { Metadata } from "next";
import { Epilogue, Inter, Space_Grotesk } from "next/font/google";
import "./globals.css";
import Navigation from "@/components/Navigation";

const epilogue = Epilogue({
  subsets: ["latin"],
  variable: "--font-epilogue",
  weight: ["700", "800", "900"],
  display: "swap",
});

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  weight: ["400"],
  display: "swap",
});

const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  variable: "--font-space-grotesk",
  weight: ["400", "500", "700"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Noah Crouse | AI & Autonomy Developer",
  description:
    "AI and autonomy developer building mission intelligence systems, computer vision workflows, and applied AI software.",
  keywords: [
    "Noah Crouse",
    "AI Autonomy Developer",
    "AI Apps",
    "Mission Intelligence",
    "Computer Vision",
    "Robotics",
    "Workflow Automation",
    "Sound Design",
    "Game Development",
    "Flutter",
    "React",
    "Interactive Experiences",
  ],
  authors: [{ name: "Noah Crouse" }],
  openGraph: {
    title: "Noah Crouse | AI & Autonomy Developer",
    description:
      "Building mission intelligence systems, computer vision workflows, and applied AI software.",
    type: "website",
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title: "Noah Crouse | AI & Autonomy Developer",
    description:
      "Building mission intelligence systems, computer vision workflows, and applied AI software.",
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
      className={`${epilogue.variable} ${inter.variable} ${spaceGrotesk.variable}`}
    >
      <body className="antialiased">
        <Navigation />
        {children}
      </body>
    </html>
  );
}
