import type { Metadata } from "next";
import { Roboto } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/theme-provider";
// import { PostHogProvider } from "./providers";
import { Analytics } from "@vercel/analytics/next";
import { Navbar } from "@/components/Navbar";

const roboto = Roboto({
  subsets: ["latin"],
  weight: ["100", "300", "400", "500", "700", "900"],
  variable: "--font-roboto",
});

export const metadata: Metadata = {
  title: "MonoLab UI",
  description: "A minimal layer for your codebase",
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
    <html lang="en" className="dark" suppressHydrationWarning>
      <body>
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          enableSystem
          disableTransitionOnChange
        >
          {/* <PostHogProvider>{children}</PostHogProvider> */}
          <Navbar />
          {children}
          <Analytics />
        </ThemeProvider>
      </body>
    </html>
  );
}
