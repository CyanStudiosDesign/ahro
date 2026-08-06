import type { Metadata } from "next";
import { Cabin, Reddit_Sans, Inter } from "next/font/google";
import "./globals.css";
import Footer from "@/modules/layout/footer/Footer";
import { Navbar } from "@/modules/layout/navbar";
import { Analytics } from "@vercel/analytics/next";

const cabin = Cabin({
  variable: "--font-cabin",
  subsets: ["latin"],
  weight: ["500", "600", "700"],
});

const redditSans = Reddit_Sans({
  variable: "--font-reddit-sans",
  subsets: ["latin"],
  weight: ["400", "500"],
});

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  weight: ["400", "500", "600"],
});

export const metadata: Metadata = {
  title: "How to Apply | AHRO Institute",
  description: "Apply to AHRO Institute in seven simple steps.",
  icons: {
    icon: "/content/AHRO%20logo.png",
    shortcut: "/content/AHRO%20logo.png",
    apple: "/content/AHRO%20logo.png",
  },
};

const footerData = [
  {
    heading: "Quick Links",
    items: [
      { title: "Home", link: "/" },
      { title: "About Us", link: "/about" },
      { title: "Schools", link: "/schools" },
      { title: "Faculty & Alumni", link: "/affiliates" },
      { title: "Community & Engagement", link: "/community" },
    ],
  },
  {
    heading: "Support & Contact",
    items: [
      { title: "Email Us", link: "mailto:support@ahro.in" },
      { title: "Contact Us", link: "/contact" },
    ],
  },
];

const studioCard = {
  name: "Cyan Studios",
  description: "Built by Cyan Studios",
  link: "https://cyanx.vercel.app",
};

const iconsLink = {
  linkedIn: "",
  X: "",
  instagram: "",
};

const legalLinks = [
  { title: "About Us", link: "/about" },
  { title: "Contact Us", link: "/contact" },
];

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${cabin.variable} ${redditSans.variable} ${inter.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">
        <Analytics />
        <Navbar />
        {children}
        <Footer
          theme="surface"
          footerData={footerData}
          studioCard={studioCard}
          iconsLink={iconsLink}
          legalLinks={legalLinks}
          copyrightText={"© 2026 AHRO Institute. All rights reserved."}
        />
      </body>
    </html>
  );
}
