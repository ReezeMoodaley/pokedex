import type { Metadata } from "next";
import { Roboto } from "next/font/google";
import "./globals.css";

const roboto = Roboto({ subsets: ["latin"], weight: ["500"] });

export const metadata: Metadata = {
  title: "Pokedex",
  description: "Gen 1 Viewer",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${roboto.className} bg-amber-100`}>
        <main className="max-w-lvw mx-3 my-1 ">{children}</main>
      </body>
    </html>
  );
}
