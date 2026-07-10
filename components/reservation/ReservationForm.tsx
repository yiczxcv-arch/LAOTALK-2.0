"use client";

import { useState, type FormEvent } from "react";
import { CircleCheck, PackageSearch } from "lucide-react";
import { StepIndicator } from "@/components/common/StepIndicator";
import { TextField } from "@/components/common/TextField";
import { SelectField } from "@/components/common/SelectField";
import { TextareaField } from "@/components/common/TextareaField";
import { Checkbox } from "@/components/common/Checkbox";
import { PrimaryButton } from "@/components/common/PrimaryButton";
import { Price } from "@/components/common/Price";
import { ImagePlaceholder } from "@/components/common/ImagePlaceholder";
import { peopleCountOptions, type ReservationInquiry, type SelectedProduct } from "@/lib/types/inquiry";

const steps = ["상품 선택", "정보 입력", "문의 접수 완료"];

type ReservationFormProps = {
  product: SelectedProduct | null;
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

/** 예약 문의 폼 — 상품 상세에서 진입 시 상품 선택 완료 상태로 시작, 상품 없이 진입 시 선택 안내 상태로 표시 */
function ReservationForm({ product }: ReservationFormProps) {
  const [form, setForm] = useState<ReservationInquiry | null>(() =>
    product ? createInitialForm(product) : null
  );
  const [submitted, setSubmitted] = useState(false);

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    // 실제 서버 전송 없이 프론트 상태로만 완료 화면을 표시한다 (docs/04_PROJECT_RULE.md #7).
    setSubmitted(true);
  }

  return (
    <div className="mx-auto max-w-[1200px] pb-8">
      <section className="px-4 pt-4">
        <StepIndicator steps={steps} currentStep={submitted ? 3 : form ? 2 : 1} />
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
      ) : !form ? (
        <div className="flex min-h-[55vh] flex-col items-center justify-center gap-4 px-4 pt-10 text-center">
          <PackageSearch className="size-14 text-muted-foreground" strokeWidth={1.5} />
          <p className="text-title2 text-foreground">상품을 선택해주세요</p>
          <p className="text-body2 text-muted-foreground">
            액티비티·골프·패키지 상세 페이지에서 예약하기 버튼을 눌러주세요.
          </p>
        </div>
      ) : (
        <>
          <section className="px-4 pt-6">
            <h2 className="text-title2 text-foreground">선택하신 상품</h2>
            <div className="mt-3 flex items-center gap-3 rounded-card bg-surface p-3 shadow-[0_2px_10px_rgba(15,23,42,0.05)]">
              <div className="size-16 shrink-0 overflow-hidden rounded-card">
                {form.product.imageSrc ? (
                  // eslint-disable-next-line @next/next/no-img-element
                  <img
                    src={form.product.imageSrc}
                    alt={form.product.title}
                    className="size-full object-cover"
                  />
                ) : (
                  <ImagePlaceholder ratio="1:1" />
                )}
              </div>
              <div className="flex min-w-0 flex-col gap-1">
                <p className="truncate text-body1 text-foreground">{form.product.title}</p>
                {form.product.price !== null ? (
                  <Price amount={form.product.price} />
                ) : (
                  <p className="text-body2 font-bold text-foreground">가격 문의</p>
                )}
              </div>
            </div>
          </section>

          <form onSubmit={handleSubmit} className="flex flex-col gap-5 px-4 pt-6">
            <h2 className="text-title2 text-foreground">예약자 정보</h2>

            <TextField
              label="이름"
              name="name"
              placeholder="이름을 입력해주세요"
              value={form.name}
              onChange={(e) => setForm((f) => (f ? { ...f, name: e.target.value } : f))}
              required
            />

            <TextField
              label="연락처"
              name="phone"
              type="tel"
              placeholder="010-1234-5678"
              value={form.phone}
              onChange={(e) => setForm((f) => (f ? { ...f, phone: e.target.value } : f))}
              required
            />

            <TextField
              label="카카오 ID"
              name="kakaoId"
              placeholder="카카오톡 ID를 입력해주세요"
              value={form.kakaoId}
              onChange={(e) => setForm((f) => (f ? { ...f, kakaoId: e.target.value } : f))}
              required
            />

            <TextField
              label="여행 날짜"
              name="travelDate"
              type="date"
              value={form.travelDate}
              onChange={(e) => setForm((f) => (f ? { ...f, travelDate: e.target.value } : f))}
              required
            />

            <SelectField
              label="인원수"
              name="peopleCount"
              options={[...peopleCountOptions]}
              value={form.peopleCount}
              onChange={(e) => setForm((f) => (f ? { ...f, peopleCount: e.target.value } : f))}
              required
            />

            <TextareaField
              label="요청사항 (선택)"
              name="message"
              placeholder="요청사항을 입력해주세요"
              value={form.message}
              onChange={(e) => setForm((f) => (f ? { ...f, message: e.target.value } : f))}
            />

            <Checkbox
              label="개인정보 수집 및 이용에 동의합니다."
              name="agreedToPrivacyPolicy"
              checked={form.agreedToPrivacyPolicy}
              onChange={(e) => setForm((f) => (f ? { ...f, agreedToPrivacyPolicy: e.target.checked } : f))}
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
