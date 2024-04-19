import { titleFont } from "@/config/fonts";
import type { Metadata } from "next";
import "./globals.css";
import { Providers } from "@/components/providers/Providers";

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
      <Providers>
        <body className={titleFont.className}>{children}</body>
      </Providers>
    </html>
  );
}
