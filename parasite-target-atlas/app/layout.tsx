import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Parasite Target Atlas",
  description:
    "Autoimmune x parasite target intelligence for ranking unmet need, pathogen molecules, and therapeutic white space.",
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
