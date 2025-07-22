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
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fr">
      <head>
        <head>
          <link rel="icon" href="/favicon.ico" />
          <link rel="apple-touch-icon" href="/LOGO-1.png" />
          <link rel="manifest" href="/manifest.json" />
        </head>
      </head>
      <body
        className={`${inter.variable} ${geistMono.variable} antialiased body-bg`}
      >
        {children}
      </body>
    </html>
  );
}
