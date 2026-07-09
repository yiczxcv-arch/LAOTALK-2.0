"use client";

import { useState } from "react";
import Link from "next/link";
import { ChevronLeft, PhoneCall } from "lucide-react";
import { SelectField } from "@/components/common/SelectField";
import { PrimaryButton } from "@/components/common/PrimaryButton";
import { SecondaryButton } from "@/components/common/SecondaryButton";
import { StatusBadge } from "@/components/admin/StatusBadge";
import { Price } from "@/components/common/Price";
import { reservationStatuses, type ReservationRecord, type ReservationStatus } from "@/lib/data/admin";

type ReservationDetailViewProps = {
  record: ReservationRecord;
};

/** 예약 문의 상세 화면 — 상태 변경은 화면 상태로만 반영되며 실제 DB에는 저장되지 않는다. */
function ReservationDetailView({ record }: ReservationDetailViewProps) {
  const [status, setStatus] = useState<ReservationStatus>(record.status);
  const [saved, setSaved] = useState(false);

  function handleSave() {
    // 실제 DB 저장 없이 화면 상태로만 변경을 반영한다.
    setSaved(true);
  }

  return (
    <div className="flex flex-col gap-6">
      <div className="flex items-center gap-2">
        <Link
          href="/admin/reservations"
          className="text-muted-foreground transition-colors hover:text-foreground"
        >
          <ChevronLeft className="size-5" />
        </Link>
        <h1 className="text-title1 text-foreground">예약 문의 상세</h1>
      </div>

      <section className="rounded-card bg-background p-4 shadow-[0_2px_10px_rgba(15,23,42,0.06)] ring-1 ring-black/5">
        <div className="flex items-center justify-between">
          <h2 className="text-title2 text-foreground">예약 정보</h2>
          <StatusBadge status={status} />
        </div>
        <dl className="mt-3 flex flex-col gap-2 text-body2">
          <div className="flex justify-between gap-4">
            <dt className="text-muted-foreground">예약번호</dt>
            <dd className="text-foreground">{record.id}</dd>
          </div>
          <div className="flex justify-between gap-4">
            <dt className="text-muted-foreground">예약자명</dt>
            <dd className="text-foreground">{record.name}</dd>
          </div>
          <div className="flex justify-between gap-4">
            <dt className="text-muted-foreground">연락처</dt>
            <dd className="text-foreground">{record.phone}</dd>
          </div>
          <div className="flex justify-between gap-4">
            <dt className="text-muted-foreground">카카오 ID</dt>
            <dd className="text-foreground">{record.kakaoId}</dd>
          </div>
          <div className="flex justify-between gap-4">
            <dt className="text-muted-foreground">접수일</dt>
            <dd className="text-foreground">{record.createdAt.slice(0, 10)}</dd>
          </div>
        </dl>
      </section>

      <section className="rounded-card bg-background p-4 shadow-[0_2px_10px_rgba(15,23,42,0.06)] ring-1 ring-black/5">
        <h2 className="text-title2 text-foreground">상품 정보</h2>
        <div className="mt-3 flex items-center gap-3">
          <div className="size-16 shrink-0 overflow-hidden rounded-card bg-surface">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src={record.imageSrc} alt={record.productTitle} className="size-full object-cover" />
          </div>
          <div className="flex min-w-0 flex-col gap-1">
            <p className="truncate text-body1 text-foreground">{record.productTitle}</p>
            <Price amount={record.price} />
          </div>
        </div>
        <dl className="mt-4 flex flex-col gap-2 text-body2">
          <div className="flex justify-between gap-4">
            <dt className="text-muted-foreground">여행 날짜</dt>
            <dd className="text-foreground">{record.travelDate}</dd>
          </div>
          <div className="flex justify-between gap-4">
            <dt className="text-muted-foreground">인원</dt>
            <dd className="text-foreground">{record.peopleCount}명</dd>
          </div>
        </dl>
        {record.message && (
          <div className="mt-4 rounded-input bg-surface p-3 text-body2 text-foreground">
            {record.message}
          </div>
        )}
      </section>

      <section className="rounded-card bg-background p-4 shadow-[0_2px_10px_rgba(15,23,42,0.06)] ring-1 ring-black/5">
        <h2 className="text-title2 text-foreground">상태 변경</h2>
        <div className="mt-3">
          <SelectField
            label="예약 상태"
            name="status"
            value={status}
            options={reservationStatuses.map((s) => ({ label: s, value: s }))}
            onChange={(e) => {
              setStatus(e.target.value as ReservationStatus);
              setSaved(false);
            }}
          />
        </div>
        {saved && <p className="mt-2 text-caption2 text-success">상태가 변경되었습니다.</p>}

        <div className="mt-4 flex gap-3">
          <SecondaryButton type="button" className="flex items-center justify-center gap-2">
            <PhoneCall className="size-4" />
            전화 걸기
          </SecondaryButton>
          <PrimaryButton type="button" onClick={handleSave}>
            상태 저장
          </PrimaryButton>
        </div>
      </section>
    </div>
  );
}

export { ReservationDetailView };
