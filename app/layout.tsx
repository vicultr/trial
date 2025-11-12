import type { Metadata } from "next";
import { Montserrat } from "next/font/google";
import "./globals.css";

// Import Montserrat
const montserrat = Montserrat({
  subsets: ["latin"],
  variable: "--font-montserrat",
  weight: ["400", "500", "600", "700"], // Optional: define font weights you need
});

export const metadata: Metadata = {
  title: "i-Residence",
  description: "Premium living made easy with i-Residence",
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body className={`${montserrat.variable} antialiased`}>
        {children}
      </body>
    </html>
  );
}
