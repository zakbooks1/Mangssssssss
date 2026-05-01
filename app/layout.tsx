import type { Metadata, Viewport } from "next";
import "@./globals.css";

export const metadata: Metadata = {
  title: "Legacy of Zion",
  description: "Fully Online Multiplayer Kingdom Builder",
  manifest: "/manifest.json",
  appleWebApp: { capable: true, statusBarStyle: "black-translucent" },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 1,
  userScalable: false,
  viewportFit: "cover",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className="bg-stone-900 text-stone-100 overflow-hidden antialiased">
        {children}
      </body>
    </html>
  );
}
