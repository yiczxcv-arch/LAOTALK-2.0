import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "맞춤여행 문의 | LAOTALK",
  description: "나만의 일정으로 자유롭게 라오스를 여행하세요",
};

export default function CustomTravelLayout({ children }: { children: React.ReactNode }) {
  return children;
}
