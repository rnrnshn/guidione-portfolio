import type { Metadata } from "next";
import { Inter_Tight, Baskervville } from "next/font/google";
import "./globals.css";

const inter_tight = Inter_Tight({
  subsets: ["latin"],
  variable: '--font-inter_tight',
});
const baskervville = Baskervville({
  weight: "400",
  subsets: ["latin"],
  variable: '--font-baskervville',
});

export const metadata: Metadata = {
  title: "Guidione Machava",
  description: "I am France based Product Designer. I lead design at 23point5 previously at Shopify. ",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${inter_tight.variable} ${baskervville.variable}`}>
      <body className="font-sans">{children}</body>
    </html>
  );
}
