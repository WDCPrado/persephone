import Footer from "@/components/footer";
import ModalProvider from "@/providers/modal-provider";
import ToastProvider from "@/providers/toast-provider";

import "./globals.css";

import { cn } from "@/lib/utils";
import { Inter as FontSans } from "next/font/google";
import { color3 } from "@/lib/constants";

export const fontSans = FontSans({
  subsets: ["latin"],
  variable: "--font-sans",
});

export const metadata = {
  title: "PERSEPHONE",
  description: "Descripcion.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body
        className={cn(
          "min-h-screen bg-background antialiased",
          fontSans.variable
        )}
        style={{
          fontFamily: "var(--font-custom)",
          backgroundColor: "#f887a8",
          color: `${color3}`,
        }}
      >
        <ToastProvider />
        <ModalProvider />

        {children}
        <Footer />
      </body>
    </html>
  );
}
