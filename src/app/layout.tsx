import type {Metadata} from "next";
import "./globals.css";
import outfit from '@/app/fonts';

import '@fortawesome/fontawesome-svg-core/styles.css';
import {config} from '@fortawesome/fontawesome-svg-core';
import NavBarComponent from "@components/NavBarComponent";

config.autoAddCss = false;

export const metadata: Metadata = {
  title: "Ergo Solutions",
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
        className={`${outfit.variable} bg-white`}
      >
        <NavBarComponent />
        {children}
      </body>
    </html>
  );
}
