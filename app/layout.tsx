import type { Metadata, Viewport } from "next";

import "./globals.css";

export const metadata: Metadata = {
  title: "Inclusive Media Network",
  description:
    "Inclusive Media Network connects brands with multicultural audiences through strategic media, partnerships, and content.",
  applicationName: "Inclusive Media Network",
};

export const viewport: Viewport = {
  themeColor: "#000000",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
