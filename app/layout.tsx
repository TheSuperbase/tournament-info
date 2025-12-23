import type { Metadata } from "next";
import { suitFont } from "./_font";
import "@/shared/style/global.css";
import { QueryProvider } from "@/shared/providers/QueryProvider";
import GoogleAnalytics from "@/shared/lib/google-analytics";

const metadata: Metadata = {
  title: "배드민턴 대회 캘린더",
  description: "모든 배드민턴 대회를 한곳에서!",
  icons: {
    icon: "/image/brand/favicon.png",
    apple: "/image/brand/favicon.png",
  },
  keywords: ["대회", "캘린더", "스포츠", "배드민턴"],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${suitFont.variable} antialiased`}
        suppressHydrationWarning
      >
        <QueryProvider>
          <GoogleAnalytics />
          {children}
          <div id="portal-root" />
        </QueryProvider>
      </body>
    </html>
  );
}

export { metadata };
