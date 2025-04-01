
import {
  
  MantineProvider,
  mantineHtmlProps,
} from "@mantine/core";
import "@mantine/core/styles.css";
import "../globals.css";
import ReduxProvider from "../components/Provider";
import { Geist, Geist_Mono } from "next/font/google";
import QueryProvider from "../components/QueryProvider";
import { Toaster } from "sonner";
const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});
export default function AuthLayout({
  children,
}: {
  children: React.ReactNode;
}) {
    return (
      <html lang="en" {...mantineHtmlProps}>
      

        <body
          className={`${geistSans.variable} ${geistMono.variable} antialiased`}
        >
          <ReduxProvider>
            <QueryProvider>
              <Toaster richColors position="top-center" />
              <MantineProvider defaultColorScheme="light">
                {children}
              </MantineProvider>
            </QueryProvider>
          </ReduxProvider>
        </body>
      </html>
    );
}

