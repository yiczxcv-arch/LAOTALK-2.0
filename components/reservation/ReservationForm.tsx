"use client";

import { useState, type FormEvent } from "react";
import { CircleCheck } from "lucide-react";
import { StepIndicator } from "@/components/common/StepIndicator";
import { TextField } from "@/components/common/TextField";
import { SelectField } from "@/components/common/SelectField";
import { TextareaField } from "@/components/common/TextareaField";
import { Checkbox } from "@/components/common/Checkbox";
import { PrimaryButton } from "@/components/common/PrimaryButton";
import { Price } from "@/components/common/Price";
import { peopleCountOptions, type ReservationInquiry, type SelectedProduct } from "@/lib/types/inquiry";

const steps = ["상품 선택", "정보 입력", "문의 접수 완료"];

type ReservationFormProps = {
  product: SelectedProduct;
};

function createInitialForm(product: SelectedProduct): ReservationInquiry {
  return {
    product,
    name: "",
    phone: "",
    kakaoId: "",
    travelDate: "",
    peopleCount: "",
    message: "",
    agreedToPrivacyPolicy: false,
  };
}

/** 예약 문의 폼 — 상품 선택은 완료된 상태로 진입, 정보 입력 → 문의 접수 완료 2단계로 진행 */
function ReservationForm({ product }: ReservationFormProps) {
  const [form, setForm] = useState<ReservationInquiry>(() => createInitialForm(product));
  const [submitted, setSubmitted] = useState(false);

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    // 실제 서버 전송 없이 프론트 상태로만 완료 화면을 표시한다 (docs/04_PROJECT_RULE.md #7).
    setSubmitted(true);
  }

  return (
    <div className="mx-auto max-w-[1200px] pb-8">
      <section className="px-4 pt-4">
        <StepIndicator steps={steps} currentStep={submitted ? 3 : 2} />
      </section>

      {submitted ? (
        <div className="flex min-h-[55vh] flex-col items-center justify-center gap-4 px-4 pt-10 text-center">
          <CircleCheck className="size-14 text-primary" strokeWidth={1.5} />
          <p className="whitespace-pre-line text-title2 text-foreground">
            문의가 접수되었습니다.{"\n"}담당자가 카카오로 연락드립니다.
          </p>
          <PrimaryButton href="/" className="mt-4 max-w-xs">
            홈으로 돌아가기
          </PrimaryButton>
        </div>
      ) : (
        <>
          <section className="px-4 pt-5">
            <h2 className="text-title2 text-foreground">선택하신 상품</h2>
            <div className="mt-3 flex items-center gap-3 rounded-card bg-surface p-3">
              <div className="size-16 shrink-0 overflow-hidden rounded-card">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src={form.product.imageSrc}
                  alt={form.product.title}
                  className="size-full object-cover"
                />
              </div>
              <div className="flex min-w-0 flex-col gap-1">
                <p className="truncate text-body1 text-foreground">{form.product.title}</p>
                <Price amount={form.product.price} />
              </div>
            </div>
          </section>

          <form onSubmit={handleSubmit} className="flex flex-col gap-4 px-4 pt-5">
            <h2 className="text-title2 text-foreground">예약자 정보</h2>

            <TextField
              label="이름"
              name="name"
              placeholder="이름을 입력해주세요"
              value={form.name}
              onChange={(e) => setForm((f) => ({ ...f, name: e.target.value }))}
              required
            />

            <TextField
              label="연락처"
              name="phone"
              type="tel"
              placeholder="010-1234-5678"
              value={form.phone}
              onChange={(e) => setForm((f) => ({ ...f, phone: e.target.value }))}
              required
            />

            <TextField
              label="카카오 ID"
              name="kakaoId"
              placeholder="카카오톡 ID를 입력해주세요"
              value={form.kakaoId}
              onChange={(e) => setForm((f) => ({ ...f, kakaoId: e.target.value }))}
              required
            />

            <TextField
              label="여행 날짜"
              name="travelDate"
              type="date"
              value={form.travelDate}
              onChange={(e) => setForm((f) => ({ ...f, travelDate: e.target.value }))}
              required
            />

            <SelectField
              label="인원수"
              name="peopleCount"
              options={[...peopleCountOptions]}
              value={form.peopleCount}
              onChange={(e) => setForm((f) => ({ ...f, peopleCount: e.target.value }))}
              required
            />

            <TextareaField
              label="요청사항 (선택)"
              name="message"
              placeholder="요청사항을 입력해주세요"
              value={form.message}
              onChange={(e) => setForm((f) => ({ ...f, message: e.target.value }))}
            />

            <Checkbox
              label="개인정보 수집 및 이용에 동의합니다."
              name="agreedToPrivacyPolicy"
              checked={form.agreedToPrivacyPolicy}
              onChange={(e) => setForm((f) => ({ ...f, agreedToPrivacyPolicy: e.target.checked }))}
              required
            />

            <PrimaryButton type="submit" className="mt-2" disabled={!form.agreedToPrivacyPolicy}>
              예약 문의
            </PrimaryButton>
          </form>
        </>
      )}
    </div>
  );
}

export { ReservationForm };
