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
      <head>
        <meta name="google-adsense-account" content="ca-pub-4113419530280094" />
      </head>
      <body
        className={`${suitFont.variable} ${suitFont.className} antialiased`}
        suppressHydrationWarning
      >
        <QueryProvider>
          <GoogleAnalytics />
          <div className="mx-auto w-full max-w-[430px] min-h-screen bg-white">
            {children}
          </div>
          <div id="portal-root" />
        </QueryProvider>
      </body>
    </html>
  );
}

export { metadata };
