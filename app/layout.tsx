import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./global.css";
import { ThemeProvider } from "@/components/theme-provider";
import { NavbarDemo } from "@/components/NavbarDemo";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Suhani's Portfolio",
  description: "Portfolio of Suhani Gupta",
  keywords: ["Next.js", "React", "Suhani", "Portfolio"],
  icons: {
    icon: "/logoSuhani.jpg", 
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}> <ThemeProvider

            attribute="class"
            defaultTheme="dark"
            enableSystem
            disableTransitionOnChange
          >
            <NavbarDemo/>
            {children}
          </ThemeProvider></body>
    </html>
  );
}