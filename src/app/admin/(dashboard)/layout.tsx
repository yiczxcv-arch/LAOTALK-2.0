import { AdminNav } from "@/components/admin/AdminNav";

/** 관리자 대시보드/예약 관리/문의 관리 공통 레이아웃 — 상단 관리자 내비게이션 포함 */
export default function AdminDashboardLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="min-h-screen bg-surface">
      <AdminNav />
      <div className="border-b border-warning/20 bg-warning/10 px-4 py-2 text-center text-caption2 font-medium text-warning">
        현재 관리자 데이터는 운영 전 점검용 샘플 데이터입니다.
      </div>
      <main className="mx-auto max-w-[1200px] px-4 py-6">{children}</main>
    </div>
  );
}
