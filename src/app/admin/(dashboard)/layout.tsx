import { AdminNav } from "@/components/admin/AdminNav";

/** 관리자 대시보드/예약 관리/문의 관리 공통 레이아웃 — 상단 관리자 내비게이션 포함 */
export default function AdminDashboardLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="min-h-screen bg-surface">
      <AdminNav />
      <main className="mx-auto max-w-[1200px] px-4 py-6">{children}</main>
    </div>
  );
}
