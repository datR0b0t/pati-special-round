import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "IM8 Daily Ultimate Essentials | Clone",
  description: "Clone of IM8 Health landing page",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="anonymous"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Fraunces:opsz,wght@9..144,300..900&family=Inter:wght@100..900&display=swap"
          rel="stylesheet"
        />
        <link href="https://fonts.googleapis.com/css2?family=Quantico:ital,wght@0,400;0,700;1,400;1,700&display=swap" rel="stylesheet"/>
        <link href="https://fonts.googleapis.com/css2?family=Outfit:wght@100..900&display=swap" rel="stylesheet"/>


      </head>
      <body
        className="antialiased bg-white text-gray-900 font-sans"
        style={
          {
            "--font-inter": '"Inter", sans-serif',
            "--font-fraunces": '"Fraunces", serif',
            "--font-quantico": '"Quantico", sans-serif',
            "--font-outfit": '"Outfit", sans-serif',
          } as React.CSSProperties
        }
      >
        {children}
      </body>
    </html>
  );
}
