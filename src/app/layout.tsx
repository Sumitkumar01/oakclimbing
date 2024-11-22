import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.scss";
import { Call, Footer, NavBar, Whatsapp } from "@/components";

const sourceSansProRegular = localFont({
  src: "./fonts/SourceSansPro-Regular.woff",
  variable: "--font-source-sans-pro",
  weight: "100 900",
});

const sourceSansProItalic = localFont({
  src: "./fonts/SourceSansPro-It.woff",
  variable: "--font-source-sans-pro-italic",
  weight: "100 900",
});

const sourceSansProExtraLight = localFont({
  src: "./fonts/SourceSansPro-ExtraLight.woff",
  variable: "--font-source-sans-pro-extra-light",
  weight: "100 900",
});

const sourceSansProExtraLightItalic = localFont({
  src: "./fonts/SourceSansPro-ExtraLightIt.woff",
  variable: "--font-source-sans-pro-extra-light-italic",
  weight: "100 900",
});

const sourceSansProLight = localFont({
  src: "./fonts/SourceSansPro-Light.woff",
  variable: "--font-source-sans-pro-light",
  weight: "100 900",
});

const sourceSansProLightItalic = localFont({
  src: "./fonts/SourceSansPro-LightIt.woff",
  variable: "--font-source-sans-pro-light-italic",
  weight: "100 900",
});

const sourceSansProSemiBold = localFont({
  src: "./fonts/SourceSansPro-Semibold.woff",
  variable: "--font-source-sans-pro-semi-bold",
  weight: "100 900",
});

const sourceSansProSemiBoldItalic = localFont({
  src: "./fonts/SourceSansPro-SemiboldIt.woff",
  variable: "--font-source-sans-pro-semi-bold-italic",
  weight: "100 900",
});

const sourceSansProBold = localFont({
  src: "./fonts/SourceSansPro-Bold.woff",
  variable: "--font-source-sans-pro-bold",
  weight: "100 900",
});

const sourceSansProBoldItalic = localFont({
  src: "./fonts/SourceSansPro-BoldIt.woff",
  variable: "--font-source-sans-pro-bold-italic",
  weight: "100 900",
});

const sourceSansProBlack = localFont({
  src: "./fonts/SourceSansPro-Black.woff",
  variable: "--font-source-sans-pro-black",
  weight: "100 900",
});

const sourceSansProBlackItalic = localFont({
  src: "./fonts/SourceSansPro-BlackIt.woff",
  variable: "--font-source-sans-pro-black-italic",
  weight: "100 900",
});

export const metadata: Metadata = {
  title: "Oak Climbing Resort | Best Hotel and Resort in Mukteshwar Uttarakhand",
  description: "Experience the best resort in Mukteshwar, Uttarakhand. Enjoy luxury and comfort at top-rated hotels and resorts in Mukteshwar for an unforgettable retreat",
  authors: [{ name: "OAK CLIMBING RESORT", url: "https://oakclimbingresort.com" }],
  keywords: ["Oak Climbing Resort", "Hotel", "Resort", "Mukteshwar", "Uttarakhand", "Adventure", "Adventure Tourism", "Adventure Tourism Mukteshwar", "Adventure Tourism Uttarakhand", "Adventure Tourism Mukteshwar Uttarakhand", "Outdoor Adventure Activities", "Climbing and Adventure Stay", "Adventure Resort in Mukteshwar Uttarakhand", "Rock Climbing Getaway", "Climbing Adventure Packages", "Outdoor Rock Climbing Experience", "Best Climbing Resorts in Mukteshwar Uttarakhand", "Nature and Adventure Retreat", "Eco-Friendly Adventure Resorts", "Beginner-Friendly Climbing Resorts", "Rock Climbing Vacations", "Resorts for Outdoor Enthusiasts", "Stay and Climb Packages", "Luxury Climbing Resort", "Resorts with Rock Climbing Walls", "Climbing Resorts for Families", "Group Climbing Packages"],
  alternates: {
    canonical: "https://oakclimbingresort.com",
    languages: {
      "en-US": "https://oakclimbingresort.com",
    },

  },

  robots: {
    index: true,
    follow: true,
    nocache: true,
    googleBot: {
      index: true,
      follow: true,
      noimageindex: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },

  openGraph: {
    title: "Oak Climbing Resort | Best Hotel and Resort in Mukteshwar Uttarakhand",
    description: "Experience the best resort in Mukteshwar, Uttarakhand. Enjoy luxury and comfort at top-rated hotels and resorts in Mukteshwar for an unforgettable retreat",
    url: "https://oakclimbingresort.com",
    siteName: "Oak Climbing Resort",
    locale: "en-US",
    type: "website",
    images: [
      {
        url: "https://oakclimbingresort.com/og-image.png",
        width: 800,
        height: 600,
        alt: "Oak Climbing Resort",
      },
      {
        url: "https://oakclimbingresort.com/og-image.png",
        width: 900,
        height: 800,
        alt: "Oak Climbing Resort",
      },
      {
        url: "https://oakclimbingresort.com/og-image.png",
        width: 1000,
        height: 800,
        alt: "Oak Climbing Resort",
      },

    ],

  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${sourceSansProRegular.variable} ${sourceSansProBlack.variable} ${sourceSansProBold.variable} ${sourceSansProSemiBold.variable} ${sourceSansProLight.variable} ${sourceSansProExtraLight.variable} ${sourceSansProItalic.variable} ${sourceSansProExtraLightItalic.variable} ${sourceSansProLightItalic.variable} ${sourceSansProSemiBoldItalic.variable} ${sourceSansProBoldItalic.variable} ${sourceSansProBlackItalic.variable} antialiased`}
        suppressHydrationWarning={true}
      >
        <NavBar />
        {children}
        <Footer />
        <Whatsapp />
        <Call />
      </body>
    </html>
  );
}
