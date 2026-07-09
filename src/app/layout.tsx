import type { Metadata } from "next";
import "./globals.css";
import { pretendard } from "./fonts";

export const metadata: Metadata = {
  title: "LAOTALK 2.0",
  description: "라오스를 가장 쉽고 신뢰할 수 있게 소개하는 콘텐츠 기반 여행 브랜드",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ko" className={`${pretendard.variable} h-full antialiased`}>
      <body className="flex min-h-full flex-col">{children}</body>
    </html>
  );
}
