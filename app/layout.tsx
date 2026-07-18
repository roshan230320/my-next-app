import type { Metadata } from "next";
import "./globals.css";
import { Toaster } from "sonner";
import { Poppins, Dancing_Script, Caveat } from "next/font/google";

const poppins = Poppins({
  subsets: ["latin"],
  variable: "--font-poppins",
  weight: ["300","400","500","600","700"]
});

const dancing = Dancing_Script({
  subsets:["latin"],
  variable:"--font-dancing"
});

const caveat = Caveat({
  subsets:["latin"],
  variable:"--font-caveat"
});

export const metadata: Metadata = {
  title: "Our Little Sunflower 🌻",
  description:"Some stories deserve one more chapter."
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body
        className={`
        ${poppins.variable}
        ${dancing.variable}
        ${caveat.variable}
        `}
      >
        {children}
        <Toaster
position="top-center"
richColors
/>
      </body>
    </html>
  );
}