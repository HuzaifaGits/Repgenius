import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Repair Genius | Expert Device Repairs in London",
  description: "Fast, dependable phone, tablet and laptop repairs in Stratford, London. Walk-ins welcome at Repair Genius.",
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <html lang="en-GB"><body>{children}</body></html>;
}
