import type {Metadata} from "next";
import "./globals.css";
import outfit from '@/app/fonts';

import '@fortawesome/fontawesome-svg-core/styles.css';
import {config} from '@fortawesome/fontawesome-svg-core';
import NavBarComponent from "@/components/NavBarComponent";
import FooterComponent from "@/components/FooterComponent";
import * as React from "react";

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
        <head>
            <link
                rel="icon"
                href="/logo/ergoSolutionsIcon.svg"
                type="image/svg+xml"
                media="(prefers-color-scheme: light)"
            />
            <link
                rel="icon"
                href="/logo/ergoSolutionsIconWhite.svg"
                type="image/svg+xml"
                media="(prefers-color-scheme: dark)"
            />
        </head>
        <body className={`${outfit.variable} bg-white`}>
        <NavBarComponent />
        {children}
        <FooterComponent />
        </body>
        </html>
    );
}
