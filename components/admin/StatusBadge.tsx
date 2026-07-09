import type { ReservationStatus } from "@/lib/data/admin";
import { cn } from "@/lib/utils";

const statusClass: Record<ReservationStatus, string> = {
  "신규 문의": "bg-primary/10 text-primary",
  "상담 중": "bg-brand/10 text-brand",
  "파트너 전달": "bg-teal/10 text-teal",
  "예약 진행 중": "bg-warning/10 text-warning",
  "예약 완료": "bg-success/10 text-success",
  취소: "bg-destructive/10 text-destructive",
  보류: "bg-muted text-muted-foreground",
};

type StatusBadgeProps = {
  status: ReservationStatus;
  className?: string;
};

/** 관리자 예약/문의 상태 배지 (design/wireframe 7번.png A3~A6 관리자 화면 기준) */
function StatusBadge({ status, className }: StatusBadgeProps) {
  return (
    <span
      className={cn(
        "inline-flex items-center rounded-full px-2.5 py-1 text-caption2 font-semibold",
        statusClass[status],
        className,
      )}
    >
      {status}
    </span>
  );
}

export { StatusBadge };
