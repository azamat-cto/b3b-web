import type { Metadata } from "next";
import localFont from "next/font/local";
import "@/styles/index.css";
import { cn } from "@/lib/utils";

const openSans = localFont({
  src: [
    {
      path: "../assets/fonts/Open_Sans/300/OpenSans-Light.ttf",
      weight: "300",
      style: "normal",
    },
    {
      path: "../assets/fonts/Open_Sans/400/OpenSans-Regular.ttf",
      weight: "400",
      style: "normal",
    },
    {
      path: "../assets/fonts/Open_Sans/500/OpenSans-Medium.ttf",
      weight: "500",
      style: "normal",
    },
    {
      path: "../assets/fonts/Open_Sans/600/OpenSans-SemiBold.ttf",
      weight: "600",
      style: "normal",
    },
    {
      path: "../assets/fonts/Open_Sans/700/OpenSans-Bold.ttf",
      weight: "700",
      style: "normal",
    },
    {
      path: "../assets/fonts/Open_Sans/800/OpenSans-ExtraBold.ttf",
      weight: "800",
      style: "normal",
    },
  ],
  display: "swap",
  variable: "--font-open-sans",
});

const merriweather = localFont({
  src: [
    {
      path: "../assets/fonts/Merriweather/300/Merriweather-Light.ttf",
      weight: "300",
      style: "normal",
    },
    {
      path: "../assets/fonts/Merriweather/400/Merriweather-Regular.ttf",
      weight: "400",
      style: "normal",
    },
    {
      path: "../assets/fonts/Merriweather/700/Merriweather-Bold.ttf",
      weight: "700",
      style: "normal",
    },
    {
      path: "../assets/fonts/Merriweather/900/Merriweather-Black.ttf",
      weight: "900",
      style: "normal",
    },
  ],
  display: "swap",
  variable: "--font-merriweather",
});

export const metadata: Metadata = {
  title: "",
  description: "",
};

type RootLayoutProps = {
  children: Readonly<React.ReactNode>;
};

function RootLayout({ children }: RootLayoutProps) {
  return (
    <html className={cn(openSans.variable, merriweather.variable)} lang="en">
      <body className="bg-background text-foreground antialiased font-sans">
        <main>{children}</main>
      </body>
    </html>
  );
}

export default RootLayout;
