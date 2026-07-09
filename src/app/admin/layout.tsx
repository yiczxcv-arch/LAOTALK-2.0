import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "관리자 | LAOTALK",
  description: "LAOTALK 2.0 관리자 페이지",
};

/** /admin 전체 최상위 레이아웃 — 공용 Header/Footer/BottomNav를 포함하지 않는다. */
export default function AdminLayout({ children }: { children: React.ReactNode }) {
  return children;
}
