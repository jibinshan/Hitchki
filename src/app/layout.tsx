import "@/styles/globals.css";
import "@/styles/ham.css";

import { cn } from "@/lib/utils";
import { type Metadata } from "next";
import { Inter, Roboto, Manrope, Arvo } from "next/font/google";
import Providers from "@/app/Providers";

export const metadata: Metadata = {
  title: "Hitchki Restaurant | Indian Restaurant & Takeaway!",
  description:
    "HITCHKI is an Indian restaurant in Cheadle that strives to provide a new experience using traditional and ancient flavours. Three friends founded it from Mumbai, Goa and Delhi with over 20 years of Experience",
  icons: [{ rel: "icon", url: "/images/logo.png" }],
};

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  weight: ["100", "300", "400", "500", "700", "900"],
});

const roboto = Roboto({
  subsets: ["latin"],
  variable: "--font-roboto",
  weight: ["100", "300", "400", "500", "700", "900"],
});

const manrope = Manrope({
  subsets: ["latin"],
  variable: "--font-manrope",
  weight: ["200", "300", "400", "500", "600", "700", "800"],
});

const arvo = Arvo({
  subsets: ["latin"],
  variable: "--font-arvo",
  weight: "400",
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={cn(
          "theme-custom min-h-screen bg-background font-sans antialiased",
          inter.variable,
          roboto.variable,
          arvo.variable,
          manrope.variable,
        )}
      >
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
