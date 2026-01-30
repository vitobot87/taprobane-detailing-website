import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Taprobane Detailing | Professional Auto Detailing in Mississauga",
  description: "Mississauga's 5-Star Auto Detailing Experts. Full interior & exterior detailing, headlight restoration, ceramic coating, and paint correction. Call (647) 917-4643.",
  keywords: ["auto detailing", "car detailing", "Mississauga", "headlight restoration", "ceramic coating", "paint correction", "interior detailing"],
  openGraph: {
    title: "Taprobane Detailing | 5-Star Auto Detailing",
    description: "Professional auto detailing in Mississauga. 5.0 Google rating. Full detail, headlight restoration, ceramic coating & more.",
    url: "https://vitobot87.github.io/taprobane-detailing-website",
    siteName: "Taprobane Detailing",
    images: [
      {
        url: "/taprobane-detailing-website/og-image.png",
        width: 1200,
        height: 630,
        alt: "Taprobane Detailing - Professional Auto Detailing",
      },
    ],
    locale: "en_CA",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Taprobane Detailing | 5-Star Auto Detailing",
    description: "Professional auto detailing in Mississauga. 5.0 Google rating.",
    images: ["/taprobane-detailing-website/og-image.png"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${inter.className} antialiased bg-white dark:bg-gray-950`}>
        {children}
      </body>
    </html>
  );
}
