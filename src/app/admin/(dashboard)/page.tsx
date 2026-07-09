import Link from "next/link";
import { CalendarCheck, CircleX, MessageSquare, PhoneCall } from "lucide-react";
import { StatusBadge } from "@/components/admin/StatusBadge";
import { reservationRecords, inquiryRecords } from "@/lib/data/admin";

// 이 페이지는 요청마다 서버에서만 렌더링되며(클라이언트 재계산 없음), "오늘" 날짜도
// 서버에서 한 번만 계산되어 그대로 HTML로 내려가므로 hydration 불일치가 발생하지 않는다.
export const dynamic = "force-dynamic";

type RecentItem = {
  id: string;
  type: "예약 문의" | "맞춤여행 문의";
  title: string;
  href: string;
  createdAt: string;
  status: (typeof reservationRecords)[number]["status"];
};

/** 관리자 대시보드 (docs/02_BLUEPRINT.md #9 관리자 · design/wireframe 7번.png A2) */
export default function AdminDashboardPage() {
  const TODAY = new Intl.DateTimeFormat("en-CA", { timeZone: "Asia/Seoul" }).format(new Date());

  const todayCount =
    reservationRecords.filter((r) => r.createdAt.startsWith(TODAY)).length +
    inquiryRecords.filter((i) => i.createdAt.startsWith(TODAY)).length;

  const inProgressCount = reservationRecords.filter((r) => r.status === "예약 진행 중").length;
  const completedCount = reservationRecords.filter((r) => r.status === "예약 완료").length;
  const canceledOrHoldCount = [...reservationRecords, ...inquiryRecords].filter(
    (r) => r.status === "취소" || r.status === "보류",
  ).length;

  const recentItems: RecentItem[] = [
    ...reservationRecords.map((r) => ({
      id: r.id,
      type: "예약 문의" as const,
      title: `${r.productTitle} · ${r.name}`,
      href: `/admin/reservations/${r.id}`,
      createdAt: r.createdAt,
      status: r.status,
    })),
    ...inquiryRecords.map((i) => ({
      id: i.id,
      type: "맞춤여행 문의" as const,
      title: `${i.travelStyleLabel} · ${i.regionLabel}`,
      href: `/admin/inquiries/${i.id}`,
      createdAt: i.createdAt,
      status: i.status,
    })),
  ]
    .sort((a, b) => (a.createdAt < b.createdAt ? 1 : -1))
    .slice(0, 8);

  const stats = [
    { label: "오늘 문의", value: todayCount, icon: MessageSquare },
    { label: "예약 진행 중", value: inProgressCount, icon: PhoneCall },
    { label: "예약 완료", value: completedCount, icon: CalendarCheck },
    { label: "취소/보류", value: canceledOrHoldCount, icon: CircleX },
  ];

  return (
    <div className="flex flex-col gap-6">
      <h1 className="text-title1 text-foreground">대시보드</h1>

      <div className="grid grid-cols-2 gap-3 sm:grid-cols-4">
        {stats.map((stat) => {
          const Icon = stat.icon;
          return (
            <div
              key={stat.label}
              className="flex flex-col gap-2 rounded-card bg-background p-4 shadow-[0_2px_10px_rgba(15,23,42,0.06)] ring-1 ring-black/5"
            >
              <span className="flex size-9 items-center justify-center rounded-full bg-primary/10">
                <Icon className="size-5 text-primary" />
              </span>
              <p className="text-caption2 text-muted-foreground">{stat.label}</p>
              <p className="text-title1 text-foreground">{stat.value}</p>
            </div>
          );
        })}
      </div>

      <div className="rounded-card bg-background p-4 shadow-[0_2px_10px_rgba(15,23,42,0.06)] ring-1 ring-black/5">
        <h2 className="text-title2 text-foreground">최근 문의 목록</h2>
        <div className="mt-3 flex flex-col divide-y divide-border">
          {recentItems.map((item) => (
            <Link
              key={`${item.type}-${item.id}`}
              href={item.href}
              className="flex items-center justify-between gap-3 py-3 transition-colors hover:bg-surface active:opacity-70"
            >
              <div className="flex min-w-0 flex-col gap-0.5">
                <span className="text-caption2 text-muted-foreground">{item.type}</span>
                <p className="truncate text-body2 text-foreground">{item.title}</p>
              </div>
              <StatusBadge status={item.status} className="shrink-0" />
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}
