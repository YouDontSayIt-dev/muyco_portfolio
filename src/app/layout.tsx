import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/ui/theme-provider";
import { FloatingDock } from "@/components/ui/floating-dock";
import { Links } from "@/data/navbar-items";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Mathew James",
  description: "Mathew James's Portfolio",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${geistSans.variable} ${geistMono.variable} bg-gradient-to-r from-white to-[#E8E4C9]  antialiased`}
      >
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <div className="flex justify-center items-center p-4 absolute top-0 right-1/2 left-1/2">
          <FloatingDock items={Links}/>
          </div>
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
