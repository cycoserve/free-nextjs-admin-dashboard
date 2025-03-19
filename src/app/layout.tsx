import { Outfit } from "next/font/google";
import { StackProvider, StackTheme } from "@stackframe/stack";
import { stackServerApp } from "../stack";
import "./globals.css";

import { SidebarProvider } from "@/context/SidebarContext";
import { ThemeProvider } from "@/context/ThemeContext";

const theme = {
  light: {
    primary: 'navy',
  },
  dark: {
    primary: 'yellow',
  },
  radius: '8px',
}

const outfit = Outfit({
  variable: "--font-outfit-sans",
  subsets: ["latin"],
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${outfit.variable} dark:bg-gray-900`}>
        <StackProvider app={stackServerApp} lang={'en-US'} >
          <StackTheme theme={theme}>
            <ThemeProvider>
              <SidebarProvider>
                {children}
                </SidebarProvider>
            </ThemeProvider>
          </StackTheme>
      </StackProvider>
      </body>
    </html>
  );
}
