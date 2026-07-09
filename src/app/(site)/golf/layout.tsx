import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "골프 | LAOTALK",
  description: "라오스의 아름다운 골프 코스를 확인하고 예약하세요",
  alternates: { canonical: "/golf" },
  openGraph: {
    title: "골프 | LAOTALK",
    description: "라오스의 아름다운 골프 코스를 확인하고 예약하세요",
    url: "/golf",
  },
  twitter: {
    card: "summary_large_image",
    title: "골프 | LAOTALK",
    description: "라오스의 아름다운 골프 코스를 확인하고 예약하세요",
  },
};

export default function GolfLayout({ children }: { children: React.ReactNode }) {
  return children;
}
