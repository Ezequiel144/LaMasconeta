import { titleFont } from "@/config/fonts";
import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "La masconeta 🐶",
  description: "Adopción de mascotas | 😊❤",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      
      <body className={titleFont.className}>{children}</body>
    </html>
  );
}
