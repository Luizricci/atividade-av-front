import React from "react";
import { Roboto } from "next/font/google";
import "./globals.css";

const font = Roboto ({
  variable: "--font",
  subsets: ["latin"],
});

export const metadata = {
    title: "avaliação Front",
    icons: {
    icon: "/icon/favicon.ico",
  },
    description: "Projeto para a avaliação do Front-end com consumo de API",

};

export default function RootLayout({ children }) {
    return (
        <html>
            <body className={font.variable}>{children}</body>
        </html>
    );
}
