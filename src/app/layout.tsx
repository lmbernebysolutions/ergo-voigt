import type { Metadata } from "next";
import { Inter } from "next/font/google";
import NextTopLoader from "nextjs-toploader";
import { Footer } from "@/components/layout/Footer";
import { Header } from "@/components/layout/Header";
import { BackToTop } from "@/components/ui/BackToTop";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Ergotherapie Anne-Karen Voigt",
  description: "Praxiswebsite für Ergotherapie Anne-Karen Voigt.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="de">
      <body className={`${inter.className} ${inter.variable} antialiased`}>
        <NextTopLoader
          color="oklch(0.55 0.15 260)"
          height={3}
          showSpinner={false}
          easing="ease"
          speed={200}
          shadow="0 0 10px oklch(0.55 0.15 260),0 0 5px oklch(0.55 0.15 260)"
        />
        <a
          href="#main-content"
          className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 focus:z-[100] focus:px-4 focus:py-2 focus:bg-primary focus:text-white focus:rounded-full focus:shadow-lg"
        >
          Zum Hauptinhalt springen
        </a>
        <Header />
        <main id="main-content" className="pt-20 pb-24" tabIndex={-1}>{children}</main>
        <Footer />
        <BackToTop />
      </body>
    </html>
  );
}
