import type { Metadata, Viewport } from "next";
import { Manrope } from "next/font/google";
import "./globals.css";

const manrope = Manrope({
  subsets: ["latin"],
  variable: "--font-manrope",
  display: "swap",
});

export const metadata: Metadata = {
  title: {
    default: "PhysioLearn AI — Interactive Physiotherapy Learning",
    template: "%s · PhysioLearn AI",
  },
  description: "An interactive physiotherapy education and assessment platform.",
  applicationName: "PhysioLearn AI",
  manifest: "/manifest.webmanifest",
  icons: { icon: "/icons/icon.svg" },
};

export const viewport: Viewport = {
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#f2f7f9" },
    { media: "(prefers-color-scheme: dark)", color: "#081524" },
  ],
  width: "device-width",
  initialScale: 1,
};

// Applies stored theme + accessibility prefs before first paint (no flash).
const themeScript = `(function(){try{
var t=localStorage.getItem("pl-theme");if(t==="light"||t==="dark"){document.documentElement.dataset.theme=t;}
var m=localStorage.getItem("pl-reduce-motion");if(m==="true"){document.documentElement.dataset.reduceMotion="true";}
var f=localStorage.getItem("pl-font-scale");if(f==="large"){document.documentElement.dataset.fontScale="large";}
}catch(e){}})();`;

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <script dangerouslySetInnerHTML={{ __html: themeScript }} />
      </head>
      <body className={`${manrope.variable} font-sans antialiased`}>{children}</body>
    </html>
  );
}
