import type { Metadata } from "next";
import { Manrope } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "next-themes";
import ThemeProviderWrapper from "@/themes/theme-provider";

const manrope = Manrope({
  subsets: ["latin"],
  weight: ["600", "800"],
  variable: "--font-manrope",
});

export const metadata: Metadata = {
  title: "Interactive Pricing",
  description: "Solution to Frontend Mentor interactive pricing component",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={manrope.className}>
        <ThemeProviderWrapper>{children}</ThemeProviderWrapper>
      </body>
    </html>
  );
}
