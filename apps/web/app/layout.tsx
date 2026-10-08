import type { Metadata } from "next";
import "./globals.css";
import { ThemeProvider } from "@/components/theme-provider";
import { Familjen_Grotesk ,Geist, Geist_Mono } from "next/font/google";
// import { PostHogProvider } from "./providers";
import { Analytics } from "@vercel/analytics/next";

const familjenGrotesk = Familjen_Grotesk({
  variable: "--font-familjen-grotesk",
  subsets: ["latin"],
});


export const metadata: Metadata = {
  title: "MonoLab UI",
  description: "A focused set of clean, accessible components that live in your codebase. Copy what you need, shape it to your product, and keep every line under your control.",
  keywords: [
    "monolab ui",
    "react components",
    "component library",
    "ui components",
    "design system",
    "nextjs components",
  ],
  authors: [{ name: "MonoLab UI" }],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`dark ${familjenGrotesk.variable}`} suppressHydrationWarning>
      <body>
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          enableSystem
          disableTransitionOnChange
        >
          {/* <PostHogProvider>{children}</PostHogProvider> */}
          {children}
          <Analytics />
        </ThemeProvider>
      </body>
    </html>
  );
}
