// app/layout.tsx
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { Header } from "@/components/ui/header";
import { Footer } from "@/components/ui/footer";
import ClientBody from "./ClientBody";


const inter = Inter({ subsets: ["latin"] });

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
      <body className={inter.className}>
        <ClientBody>
          <Header />
          <main className="min-h-screen">{children}</main>
          <Footer />
        </ClientBody>
      </body>
    </html>
  );
}
