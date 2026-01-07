import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Kaspa Next.js Starter",
  description: "A starter kit for building Kaspa applications with Next.js",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className="min-h-screen bg-background font-sans antialiased">
        {children}
      </body>
    </html>
  );
}