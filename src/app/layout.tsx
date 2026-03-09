import type { Metadata } from "next";
import "./globals.css";
import { ShopProvider } from "@/context/ShopContext";
import { AuthProvider } from "@/context/AuthContext";

export const metadata: Metadata = {
  title: "AWAIS Football - Premium Football Boots",
  description: "High-performance football boots engineered for speed, precision, and control. Control the Game with AWAIS Football.",
  keywords: "football boots, soccer shoes, football gear, AWAIS, premium sports equipment",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <AuthProvider>
          <ShopProvider>{children}</ShopProvider>
        </AuthProvider>
      </body>
    </html>
  );
}
