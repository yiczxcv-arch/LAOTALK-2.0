"use client";

import { useMemo, useState } from "react";
import Link from "next/link";
import { ChevronRight } from "lucide-react";
import { FilterTabs } from "@/components/common/FilterTabs";
import { StatusBadge } from "@/components/admin/StatusBadge";
import { Price } from "@/components/common/Price";
import { reservationRecords, reservationStatuses, type ReservationStatus } from "@/lib/data/admin";

type FilterValue = "all" | ReservationStatus;

const filterOptions: { label: string; value: FilterValue }[] = [
  { label: "전체", value: "all" },
  ...reservationStatuses.map((status) => ({ label: status, value: status as FilterValue })),
];

/** 예약 문의 목록 (docs/02_BLUEPRINT.md #9 관리자 · design/wireframe 7번.png A3) */
export default function AdminReservationsPage() {
  const [filter, setFilter] = useState<FilterValue>("all");

  const filtered = useMemo(
    () =>
      filter === "all"
        ? reservationRecords
        : reservationRecords.filter((r) => r.status === filter),
    [filter],
  );

  return (
    <div className="flex flex-col gap-4">
      <h1 className="text-title1 text-foreground">예약 관리</h1>

      <FilterTabs options={filterOptions} value={filter} onChange={setFilter} />

      <div className="flex flex-col gap-3">
        {filtered.map((r) => (
          <Link
            key={r.id}
            href={`/admin/reservations/${r.id}`}
            className="flex items-center justify-between gap-3 rounded-card bg-background p-4 shadow-[0_2px_10px_rgba(15,23,42,0.06)] ring-1 ring-black/5 transition-[box-shadow,transform] duration-200 ease-out hover:-translate-y-0.5 hover:shadow-[0_8px_20px_rgba(15,23,42,0.12)] active:translate-y-0 active:shadow-[0_2px_8px_rgba(15,23,42,0.08)]"
          >
            <div className="flex min-w-0 flex-col gap-1">
              <span className="text-caption2 text-muted-foreground">{r.id}</span>
              <p className="truncate text-body1 text-foreground">{r.productTitle}</p>
              <p className="text-caption2 text-muted-foreground">
                {r.name} · {r.travelDate}
              </p>
              <Price amount={r.price} />
            </div>
            <div className="flex shrink-0 items-center gap-2">
              <StatusBadge status={r.status} />
              <ChevronRight className="size-4 text-muted-foreground" />
            </div>
          </Link>
        ))}
        {filtered.length === 0 && (
          <p className="py-10 text-center text-body2 text-muted-foreground">
            해당 상태의 예약 문의가 없습니다.
          </p>
        )}
      </div>
    </div>
  );
}
