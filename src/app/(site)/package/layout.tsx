import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "패키지 | LAOTALK",
  description: "여행자에게 인기있는 라오스 패키지 상품을 확인하세요",
};

export default function PackageLayout({ children }: { children: React.ReactNode }) {
  return children;
}
