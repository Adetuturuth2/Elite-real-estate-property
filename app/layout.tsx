import type { Metadata } from "next";
import { Playfair_Display, Poppins } from "next/font/google";
import Script from "next/script";
import "./globals.css";

const playfair = Playfair_Display({
  variable: "--font-playfair",
  subsets: ["latin"],
});

const poppins = Poppins({
  variable: "--font-poppins",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
});

export const metadata: Metadata = {
  title: "Elite Real Estate | Global Luxury Properties",
  description: "Discover homes that define prestige, comfort, and timeless elegance. The pinnacle of luxury real estate.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${playfair.variable} ${poppins.variable} font-body antialiased bg-navy text-white`}
      >
        {children}
        {/* Zendesk Chat Widget Placeholder */}
        <Script id="zendesk-chat" strategy="afterInteractive">
          {`
            // window.zESettings = { webWidget: { color: { theme: '#C6A75E' } } };
            // (function(d, s, id) { ... })(document, 'script', 'ze-snippet');
          `}
        </Script>
      </body>
    </html>
  );
}
