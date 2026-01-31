// app/layout.tsx
import type { Metadata } from "next";
import { Inter, Playfair_Display } from "next/font/google";
import "./globals.css";
import { Header } from "@/components/ui/header";
import { Footer } from "@/components/ui/footer";
import ClientBody from "./ClientBody";


const inter = Inter({
  subsets: ["latin"],
  variable: '--font-sans',
});

const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: '--font-serif',
});

export const metadata: Metadata = {
  title: "Ankudey.",
  description:
    "this so much hell to create",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`${inter.variable} ${playfair.variable} antialiased selection:bg-black selection:text-white`}>
        <ClientBody>
          <Header />
          <main className="min-h-screen">{children}</main>
          <Footer />
        </ClientBody>
      </body>
    </html>
  );
}

{/* ---------solve the layout issue. due wedD..-------------------------------------------------------------------------------------------------- */ }
