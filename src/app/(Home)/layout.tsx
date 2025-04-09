import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "../globals.css";
import "@mantine/core/styles.css";
import {
  ColorSchemeScript,
  MantineProvider,
  mantineHtmlProps,
} from "@mantine/core";
import Navbar from "./sections/Navbar";
import Footer from "./sections/Footer";
import ReduxProvider from "@/app/components/Provider";
import QueryProvider from "@/app/components/QueryProvider";
import { Toaster } from "sonner";

import PreloaderWrapper from "@/app/components/PreloaderWrapper";
const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Tahwill Solutions",
  description: "It begins with you",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" {...mantineHtmlProps}>
      <head>
        <ColorSchemeScript />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <ReduxProvider>
          <QueryProvider>
            <Toaster richColors position="top-center" />
            <MantineProvider defaultColorScheme="light">
              <PreloaderWrapper>
                <Navbar />
                {children}
                <Footer />
              </PreloaderWrapper>
            </MantineProvider>
          </QueryProvider>
        </ReduxProvider>
      </body>
    </html>
  );
}
