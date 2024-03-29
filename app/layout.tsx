import type { Metadata } from "next";
import { Newsreader } from "next/font/google";
import "./globals.css";
import { AppRouterCacheProvider } from "@mui/material-nextjs/v13-appRouter";
import LabelBottomNavigation from "../ui/navbars";
import DesktopNav from "@/ui/desktop-nav";

const newsreader = Newsreader({
  subsets: ["latin"],
  display: "swap",
  adjustFontFallback: false,
});

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={newsreader.className}>
        <AppRouterCacheProvider options={{ enableCssLayer: true }}>
          <div className="hidden md:block" >
            <DesktopNav />
          </div>
          {children}
          <div className="fixed bottom-0 max-w-full text-gray-700 border-t-2 md:hidden">
            <LabelBottomNavigation />
          </div>
        </AppRouterCacheProvider>
      </body>
    </html>
  );
}
