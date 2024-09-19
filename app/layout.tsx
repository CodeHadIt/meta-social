import type { Metadata } from "next";
import { Roboto_Flex } from "next/font/google"
import "./globals.css";

const robotoFlex = Roboto_Flex({ subsets: ["latin"]})

export const metadata: Metadata = {
  title: "Meta-Social",
  description: "The decentralized social app of the future",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${robotoFlex.className} antialiased font-medium`}
      >
        {children}
      </body>
    </html>
  );
}
