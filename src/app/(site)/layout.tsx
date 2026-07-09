import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { BottomNav } from "@/components/layout/BottomNav";

/** 사용자 대상 페이지 공통 레이아웃 — Header/Footer/BottomNav (관리자 페이지는 별도 layout 사용) */
export default function SiteLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <Header />
      <main className="flex-1">{children}</main>
      <Footer />
      <BottomNav />
    </>
  );
}
