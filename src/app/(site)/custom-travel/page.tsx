"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { ToggleChipGroup } from "@/components/common/ToggleChipGroup";
import { PrimaryButton } from "@/components/common/PrimaryButton";
import {
  travelPlanDurationOptions,
  travelPlanPeopleOptions,
  travelPlanStyleOptions,
  travelPlanStayOptions,
  travelPlanBudgetOptions,
} from "@/lib/types/inquiry";

/** 맞춤여행 설계 페이지 — 조건을 토글칩으로 선택하면 예약 페이지로 값이 전달된다 (docs/02_BLUEPRINT.md #7 CUSTOM TRAVEL) */
export default function CustomTravelPage() {
  const router = useRouter();
  const [duration, setDuration] = useState<string | null>(null);
  const [people, setPeople] = useState<string | null>(null);
  const [style, setStyle] = useState<string | null>(null);
  const [stay, setStay] = useState<string | null>(null);
  const [budget, setBudget] = useState<string | null>(null);

  const allSelected = Boolean(duration && people && style && stay && budget);

  function handleComplete() {
    if (!duration || !people || !style || !stay || !budget) return;
    const params = new URLSearchParams({
      type: "custom",
      duration,
      people,
      style,
      stay,
      budget,
    });
    router.push(`/reservation?${params.toString()}`);
  }

  return (
    <div className="mx-auto max-w-[1200px] pb-8">
      <section className="bg-primary px-4 pb-5 pt-6 text-white">
        <h1 className="text-title1">맞춤여행 설계</h1>
        <p className="mt-1 text-body1 font-medium text-white/85">
          원하는 조건을 선택하면 맞춤 일정으로 상담해드립니다
        </p>
      </section>

      <div className="flex flex-col gap-6 px-4 pt-6">
        <ToggleChipGroup
          label="여행 기간"
          options={travelPlanDurationOptions}
          value={duration}
          onChange={setDuration}
        />
        <ToggleChipGroup
          label="인원"
          options={travelPlanPeopleOptions}
          value={people}
          onChange={setPeople}
        />
        <ToggleChipGroup
          label="여행 스타일"
          options={travelPlanStyleOptions}
          value={style}
          onChange={setStyle}
        />
        <ToggleChipGroup label="숙소" options={travelPlanStayOptions} value={stay} onChange={setStay} />
        <ToggleChipGroup
          label="예산"
          options={travelPlanBudgetOptions}
          value={budget}
          onChange={setBudget}
        />

        <PrimaryButton type="button" onClick={handleComplete} disabled={!allSelected} className="mt-2">
          선택 완료
        </PrimaryButton>
      </div>
    </div>
  );
}
