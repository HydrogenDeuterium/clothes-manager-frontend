import "./globals.css";

import { NextauthProvider, Navbar, Footer } from "@/components";

import { PurchaseContextProvider, ObjectContextProvider } from "./components/client";

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
          <PurchaseContextProvider>
            <ObjectContextProvider>{children}</ObjectContextProvider>
          </PurchaseContextProvider>
          <Footer />
        </NextauthProvider>
      </body>
    </html>
  );
}
