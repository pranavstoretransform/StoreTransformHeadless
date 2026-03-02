import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Store Transform - Expert Ecommerce Web Development & Digital Marketing Agency",
  description: "Transform your business's online presence with our web development and digital marketing agency.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        {/* WordPress CSS Files */}
        <link rel="stylesheet" href="/css/style.css" />
        <link rel="stylesheet" href="/css/st-custom.css" />
        <link rel="stylesheet" href="/css/animation.css" />
        <link rel="stylesheet" href="/css/menu-style.css" />
        <link rel="stylesheet" href="/css/gs-custom.css" />
        <link rel="stylesheet" href="/css/responsive.css" />
        <link rel="stylesheet" href="/css/gs-custom-fix.css" />
        <link rel="stylesheet" href="/css/custom-color-overrides.css" />
        {/* Font Awesome */}
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.1/css/all.min.css" />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <div id="page" className="site">
          <Header />
          <div id="content" className="site-content">
            <div id="primary" className="content-area">
              <main id="main" className="site-main">
                {children}
              </main>
            </div>
          </div>
          <Footer />
        </div>
      </body>
    </html>
  );
}
