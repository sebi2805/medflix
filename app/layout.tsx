import LayoutWrapper from "@/components/layout";
import "./globals.css";
import type { Metadata } from "next";
import AcceptCookie from "@/components/layout/AcceptCookies";
import { cookies } from "next/headers";

export const metadata: Metadata = {
  title: "MedFlix",
  description: "Meditatii admitere biologie si chimie, UMFCD, Carol Davila",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const cookiesAccepted = cookies()?.get("flash-cards-cookie")?.value;
  return (
    <html lang="ro">
      <body>
        <link
          rel="stylesheet"
          type="text/css"
          href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick.min.css"
        />
        <link
          rel="stylesheet"
          type="text/css"
          href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick-theme.min.css"
        />
        <link
          rel="apple-touch-icon"
          href="/icons/apple-touch-icon.png"
          type="image/png"
          sizes="32x32"
        />
        <link
          rel="icon"
          href="/icons/android-chrome-192x192.png"
          type="image/png"
          sizes="192x192"
        />
        <link
          rel="icon"
          href="/icons/android-chrome-512x512.png"
          type="image/png"
          sizes="512x512"
        />
        <link
          rel="icon"
          href="/icons/favicon-16x16.png"
          type="image/png"
          sizes="16x16"
        />
        <link
          rel="icon"
          href="/icons/favicon-32x32.png"
          type="image/png"
          sizes="32x32"
        />
        {cookiesAccepted !== "true" && <AcceptCookie />}
        <LayoutWrapper>
          <main className="w-full pt-[4em]">{children}</main>
        </LayoutWrapper>
      </body>
    </html>
  );
}
