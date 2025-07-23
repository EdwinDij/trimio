import type { Metadata } from "next";
import { Inter, Geist_Mono } from "next/font/google";
import "./globals.css";

const inter = Inter({
  variable: "--inter-font",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "TrimioEdit | Montage vidéo pro & drone",
  description:
    "TrimioEdit est votre partenaire pour un montage vidéo professionnel, du dérushage à l'étalonnage, en passant par la prise de vue en drone. Nous transformons vos idées en vidéos captivantes.",
  icons: {
    icon: "/favicon.ico",
    apple: "/LOGO-1.png",
  },
  manifest: "/manifest.json",
  verification: {
    google: "0tD58liHM4SUUy9ysD91IVLyK0a35ix-iFF9v4Lqdiw",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fr">
      <body
        className={`${inter.variable} ${geistMono.variable} antialiased body-bg`}
      >
        {children}
      </body>
    </html>
  );
}
