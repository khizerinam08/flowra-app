import { Inter, Outfit, Jura } from "next/font/google";
import "./globals.css";
import "@/components/fx/fx.css";

/* next/font self-hosts these at build time: the deck makes no external requests at runtime. */
const inter = Inter({ subsets: ["latin"], variable: "--font-inter", display: "swap" });
const outfit = Outfit({ subsets: ["latin"], variable: "--font-outfit", display: "swap" });
const jura = Jura({ subsets: ["latin"], variable: "--font-jura", display: "swap" });

export const metadata = {
  title: "CareerKonnect — FYDP-I Proposal Defence",
  description: "CareerKonnect: bridging the gap between fresh graduates and employers in Pakistan. FYDP-I proposal defence, NUST SEECS, BS Computer Science.",
  icons: {
    icon: [{ url: "/icon.svg", type: "image/svg+xml" }],
    shortcut: "/icon.svg",
    apple: "/icon.svg",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={`${inter.variable} ${outfit.variable} ${jura.variable}`}>
      <body suppressHydrationWarning>
        {children}
      </body>
    </html>
  );
}
