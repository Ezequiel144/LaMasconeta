import { Providers } from "@/components";
import { titleFont } from "@/config/fonts";
import Header from "@/components/ui/Header/Header";
import "./globals.css";

export const metadata = {
  title: {
    template: "%s - La Masconeta | Adopta",
    default: "La Masconeta | Adopta",
  },
  description: "La Masconeta | Adopciones de mascotas",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={titleFont.className}>
        <Providers>
          {/* <Header /> */}
          {children}
        </Providers>
      </body>
    </html>
  );
}
