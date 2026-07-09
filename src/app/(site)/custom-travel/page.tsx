"use client";

import { useState, type FormEvent } from "react";
import { CircleCheck } from "lucide-react";
import { SelectField } from "@/components/common/SelectField";
import { TextField } from "@/components/common/TextField";
import { TextareaField } from "@/components/common/TextareaField";
import { Checkbox } from "@/components/common/Checkbox";
import { PrimaryButton } from "@/components/common/PrimaryButton";
import {
  travelStyleOptions,
  travelDurationOptions,
  travelRegionOptions,
  type CustomTravelInquiry,
} from "@/lib/types/inquiry";

const initialForm: CustomTravelInquiry = {
  travelStyle: "",
  duration: "",
  peopleCount: "",
  region: "",
  message: "",
  agreedToPrivacyPolicy: false,
};

/** 맞춤여행 문의 페이지 (docs/02_BLUEPRINT.md #7 CUSTOM TRAVEL · design/wireframe 7번.png "09 맞춤여행 문의") */
export default function CustomTravelPage() {
  const [form, setForm] = useState<CustomTravelInquiry>(initialForm);
  const [submitted, setSubmitted] = useState(false);

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    // 실제 서버 전송 없이 프론트 상태로만 완료 화면을 표시한다 (docs/04_PROJECT_RULE.md #7).
    setSubmitted(true);
  }

  if (submitted) {
    return (
      <div className="mx-auto flex min-h-[70vh] max-w-[1200px] flex-col items-center justify-center gap-4 px-4 text-center">
        <CircleCheck className="size-14 text-primary" strokeWidth={1.5} />
        <p className="whitespace-pre-line text-title2 text-foreground">
          문의가 접수되었습니다.{"\n"}담당자가 카카오로 연락드립니다.
        </p>
        <PrimaryButton href="/" className="mt-4 max-w-xs">
          홈으로 돌아가기
        </PrimaryButton>
      </div>
    );
  }

  return (
    <div className="mx-auto max-w-[1200px] pb-8">
      <section className="bg-primary px-4 pb-5 pt-6 text-white">
        <h1 className="text-title1">맞춤여행 문의</h1>
        <p className="mt-1 text-body1 font-medium text-white/85">
          나만의 일정으로 자유롭게 라오스를 여행하세요
        </p>
      </section>

      <form onSubmit={handleSubmit} className="flex flex-col gap-4 px-4 pt-5">
        <SelectField
          label="여행 스타일"
          name="travelStyle"
          options={[...travelStyleOptions]}
          value={form.travelStyle}
          onChange={(e) => setForm((f) => ({ ...f, travelStyle: e.target.value }))}
          required
        />

        <SelectField
          label="여행 기간"
          name="duration"
          options={[...travelDurationOptions]}
          value={form.duration}
          onChange={(e) => setForm((f) => ({ ...f, duration: e.target.value }))}
          required
        />

        <TextField
          label="인원 수"
          name="peopleCount"
          type="number"
          min={1}
          placeholder="인원 수를 입력해주세요"
          value={form.peopleCount}
          onChange={(e) => setForm((f) => ({ ...f, peopleCount: e.target.value }))}
          required
        />

        <SelectField
          label="희망 지역"
          name="region"
          options={[...travelRegionOptions]}
          value={form.region}
          onChange={(e) => setForm((f) => ({ ...f, region: e.target.value }))}
          required
        />

        <TextareaField
          label="문의 내용"
          name="message"
          placeholder="원하는 여행 스타일이나 요청사항을 입력해주세요"
          value={form.message}
          onChange={(e) => setForm((f) => ({ ...f, message: e.target.value }))}
          required
        />

        <Checkbox
          label="개인정보 수집 및 이용에 동의합니다."
          name="agreedToPrivacyPolicy"
          checked={form.agreedToPrivacyPolicy}
          onChange={(e) => setForm((f) => ({ ...f, agreedToPrivacyPolicy: e.target.checked }))}
          required
        />

        <PrimaryButton type="submit" className="mt-2" disabled={!form.agreedToPrivacyPolicy}>
          문의하기
        </PrimaryButton>
      </form>
    </div>
  );
}
