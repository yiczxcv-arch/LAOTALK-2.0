import type { Metadata } from "next";
import "./globals.css";
import { pretendard } from "./fonts";

// 운영 도메인이 확정되면 배포 환경(Vercel 등)에 NEXT_PUBLIC_SITE_URL 환경변수를 설정한다.
// 미설정 시 로컬 개발 기준(localhost)으로 폴백하며, OG/canonical 절대경로 계산에 사용된다.
const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL ?? "http://localhost:3000";
const SITE_TITLE = "LAOTALK 2.0";
const SITE_DESCRIPTION = "라오스를 가장 쉽고 신뢰할 수 있게 소개하는 콘텐츠 기반 여행 브랜드";

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: SITE_TITLE,
  description: SITE_DESCRIPTION,
  alternates: {
    canonical: "/",
  },
  openGraph: {
    type: "website",
    locale: "ko_KR",
    siteName: "LAOTALK",
    url: "/",
    title: SITE_TITLE,
    description: SITE_DESCRIPTION,
    images: [{ url: "/images/hero-pha-that-luang.jpg", width: 1200, height: 630, alt: SITE_TITLE }],
  },
  twitter: {
    card: "summary_large_image",
    title: SITE_TITLE,
    description: SITE_DESCRIPTION,
    images: ["/images/hero-pha-that-luang.jpg"],
  },
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
