import type { Metadata } from "next";
// import { Inter } from "next/font/google";
import "./globals.css";
import { Providers } from "./providers";
import localFont from "next/font/local"

// const inter = Inter({ subsets: ["latin"], preload: true });
const roboto = localFont({ src: "../assets/fonts/Roboto/Roboto-VariableFont_wdth\,wght.ttf" })

export const metadata: Metadata = {
  title: "Muhammad Rizki",
  description: "Muhammad Rizki's personal website",
  icons: {
    icon: "icon.png",
  }
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
      </head>
      <body className={roboto.className}>
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
