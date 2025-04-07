import { NavbarSimple } from "./components/Sidebar";
// import DashboardNavbar from "./components/NavbarDashboard";
import { Geist, Geist_Mono } from "next/font/google";
import { MantineProvider, mantineHtmlProps } from "@mantine/core";
import "@mantine/core/styles.css";
import "@mantine/tiptap/styles.css";
import "../globals.css";
import ReduxProvider from "../components/Provider";
import QueryProvider from "../components/QueryProvider";
import { Toaster } from "sonner";
import AuthGuard from "../components/AuthGuard";
const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});
export default function DashboardLayout({
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
            <MantineProvider>
              <div className="flex h-screen">
                <NavbarSimple />
                <div className="flex-1 flex flex-col">
                  {/* <DashboardNavbar /> */}
                  <main>
                    <AuthGuard>{children}</AuthGuard>
                  </main>
                </div>
              </div>
            </MantineProvider>
          </QueryProvider>
        </ReduxProvider>
      </body>
    </html>
  );
}
