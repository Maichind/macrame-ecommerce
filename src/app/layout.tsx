import "./globals.css";
import type { Metadata } from "next";
import Header from "../components/Header";
import Footer from "../components/Footer";
import { Geist, Geist_Mono } from "next/font/google";
import { CartProvider } from "@/context/cartContext";
import WhatsAppButton from "@/components/WhatsAppButton";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://tu-dominio.com"),
  title: "E-commerce Macramé",
  description: "E-commerce de artículos macramé hechos a mano: pulseras, aretes, llaveros y más.",
  keywords: [
		'Software Developer',
		'Web Developer',
		'Clean Code',
		'Simple Design',
		'JavaScript',
		'TypeScript',
		'React',
		'Next.js',
		'User Experience',
		'Problem Solving',
		'Effective Solutions',
		'Web Development',
		'Frontend Development',
		'Backend Development',
		'Maichol Mindiola',
		'E-commerce',
	],
	authors: [{ name: 'Yussy Montero, Maichol Mindiola' }],
	creator: 'Maichol Mindiola',
  openGraph: {
    title: "Tu Tienda de Macramé",
    description: "Diseños únicos y artesanales en macramé.",
    url: "https://tu-dominio.com",
    siteName: "Tienda Macramé",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "E-commerce de Macramé",
      },
    ],
    locale: "es_CO",
    type: "website",
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
        className={`${geistSans.variable} ${geistMono.variable} antialiased flex flex-col min-h-screen`}
      >
        <CartProvider>
          <Header />
            <main className="flex-1 overflow-hidden">{children}</main>
          <Footer />
          <WhatsAppButton />
        </CartProvider>
      </body>
    </html>
  );
}
