import { Metadata } from "next";
import "./globals.css";

import { Open_Sans } from "next/font/google";

const openSans = Open_Sans({
  subsets: ["latin"],
  weight: ["300", "400", "600", "700"],
  variable: "--font-open-sans",
  display: "swap",
});
export const metadata: Metadata = {
  icons: {
    icon: "/logo.svg",
  },
};
export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${openSans.variable}`}>
      <body className={`antialiased `}>{children}</body>
    </html>
  );
}
