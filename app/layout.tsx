import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import TopNav from "@/components/TopNav";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://osrv.com.br"),
  title: {
    default: "OSRV — Obras Sociais Rafael Verlangieri",
    template: "%s | OSRV",
  },
  description:
    "Obras Sociais Rafael Verlangieri — projetos sociais, esporte, cultura e educacao em Cuiaba/MT. Doe, seja voluntario ou torne-se parceiro.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="pt-BR"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">
          <TopNav />
          {children}
        </body>
    </html>
  );
}
