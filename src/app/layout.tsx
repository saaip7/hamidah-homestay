import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import Navbar from "@/components/navbar";
import Footer from "@/components/footer";
import Head from "next/head";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata: Metadata = {
  title: "Penginapan di Sungailiat Bangka | Hotel & Penginapan Murah",
  description: "Temukan penginapan murah dan hotel di daerah Sungailiat, Bangka. Penginapan ideal untuk wisatawan yang mencari kenyamanan dengan harga terjangkau.",
  keywords: [
    "Penginapan di sungailiat bangka",
    "Hotel sungailiat bangka",
    "Penginapan murah daerah sungailiat",
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <Head>
        <meta name="keywords" content="Penginapan di sungailiat bangka, Hotel sungailiat bangka, Penginapan murah daerah sungailiat" />
        <meta name="description" content="Temukan penginapan murah dan hotel di daerah Sungailiat, Bangka." />
      </Head>
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
        <Navbar />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
