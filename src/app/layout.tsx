import "./globals.css";

import { NextauthProvider, Navbar, Footer } from "@/components";

export const metadata = {
  title: "Clothes Manager",
  description: "Clothes manager",
  icons: { icon: "/favicon.ico" },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang='zh-cn'>
      <body>
        <NextauthProvider>
          <Navbar />
          {children}
          <Footer />
        </NextauthProvider>
      </body>
    </html>
  );
}
