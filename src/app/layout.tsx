import type { Metadata } from "next";
import "./globals.css";
import outfit from '@/app/fonts';

import '@fortawesome/fontawesome-svg-core/styles.css';
import { config } from '@fortawesome/fontawesome-svg-core';
config.autoAddCss = false;

export const metadata: Metadata = {
  title: "Detecom",
  description: "Slogan",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es">
      <body
        className={`${outfit.variable} ${outfit.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
