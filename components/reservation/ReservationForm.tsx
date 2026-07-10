"use client";

import { useState, type FormEvent } from "react";
import Link from "next/link";
import { CircleCheck, PackageSearch } from "lucide-react";
import { StepIndicator } from "@/components/common/StepIndicator";
import { TextField } from "@/components/common/TextField";
import { SelectField } from "@/components/common/SelectField";
import { TextareaField } from "@/components/common/TextareaField";
import { Checkbox } from "@/components/common/Checkbox";
import { PrimaryButton } from "@/components/common/PrimaryButton";
import { Price } from "@/components/common/Price";
import { ImagePlaceholder } from "@/components/common/ImagePlaceholder";
import { Tag } from "@/components/common/Tag";
import {
  peopleCountOptions,
  RESERVATION_COMPLETE_MESSAGE,
  RESERVATION_FAILURE_MESSAGE,
  type ProductType,
  type ReservationInquiry,
  type SelectedProduct,
} from "@/lib/types/inquiry";

const steps = ["상품 선택", "정보 입력", "문의 접수 완료"];

const categoryLabelMap: Record<ProductType, string> = {
  stay: "숙소",
  golf: "골프",
  activity: "액티비티",
  package: "패키지",
  custom: "맞춤여행",
};

const categoryBrowseHrefMap: Record<ProductType, string> = {
  stay: "/",
  golf: "/golf",
  activity: "/activity",
  package: "/package",
  custom: "/custom-travel",
};

const dateLabelMap: Record<ProductType, string> = {
  stay: "체크인 희망일",
  golf: "희망 라운딩 날짜",
  activity: "희망 날짜",
  package: "출발 희망일",
  custom: "여행 예정일",
};

const customDetailLabels: { key: keyof NonNullable<SelectedProduct["customDetails"]>; label: string }[] = [
  { key: "duration", label: "여행기간" },
  { key: "people", label: "인원" },
  { key: "style", label: "스타일" },
  { key: "stay", label: "숙소" },
  { key: "budget", label: "예산" },
];

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
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitError, setSubmitError] = useState<string | null>(null);

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    // 연속 클릭·중복 제출 방지 — 이미 전송 중이면 새 요청을 시작하지 않는다.
    if (isSubmitting || !form) return;

    setIsSubmitting(true);
    setSubmitError(null);

    try {
      const response = await fetch("/api/reservation", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name: form.name,
          phone: form.phone,
          travelDate: form.travelDate,
          peopleCount: form.peopleCount,
          message: form.message,
          referralPath: typeof window !== "undefined" ? window.location.pathname + window.location.search : "",
          product: {
            type: form.product.type,
            title: form.product.title,
            variantLabel: form.product.variantLabel,
            customDetails: form.product.customDetails,
          },
        }),
      });
      const data = (await response.json()) as { success: boolean; message?: string };

      if (response.ok && data.success) {
        setSubmitted(true);
      } else {
        setSubmitError(data.message || RESERVATION_FAILURE_MESSAGE);
      }
    } catch {
      setSubmitError(RESERVATION_FAILURE_MESSAGE);
    } finally {
      setIsSubmitting(false);
    }
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
            {RESERVATION_COMPLETE_MESSAGE}
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
            숙소·액티비티·골프·패키지 페이지에서 예약하기 버튼을 누르거나, 맞춤여행 설계에서
            선택을 완료해주세요.
          </p>
        </div>
      ) : (
        <>
          <section className="px-4 pt-6">
            <div className="flex items-center justify-between">
              <h2 className="text-title2 text-foreground">선택하신 상품</h2>
              <Link
                href={categoryBrowseHrefMap[form.product.type]}
                className="text-caption2 text-muted-foreground underline-offset-2 hover:text-foreground hover:underline"
              >
                선택 변경
              </Link>
            </div>
            {form.product.customDetails ? (
              <div className="mt-3 flex flex-col gap-3 rounded-card bg-surface p-4 shadow-[0_2px_10px_rgba(15,23,42,0.05)]">
                <Tag variant="outline" className="w-fit">
                  {categoryLabelMap[form.product.type]}
                </Tag>
                <div className="grid grid-cols-2 gap-x-3 gap-y-2">
                  {customDetailLabels.map(({ key, label }) => (
                    <p key={key} className="text-body2 text-foreground">
                      <span className="text-muted-foreground">{label} </span>
                      {form.product.customDetails?.[key]}
                    </p>
                  ))}
                </div>
              </div>
            ) : (
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
                  <Tag variant="outline" className="w-fit">
                    {categoryLabelMap[form.product.type]}
                    {form.product.variantLabel ? ` · ${form.product.variantLabel}` : ""}
                  </Tag>
                  <p className="truncate text-body1 text-foreground">{form.product.title}</p>
                  {form.product.price !== null ? (
                    <Price amount={form.product.price} />
                  ) : (
                    <p className="text-body2 font-bold text-foreground">예약 문의</p>
                  )}
                </div>
              </div>
            )}
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
              label={dateLabelMap[form.product.type]}
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
              label="문의 내용"
              name="message"
              placeholder="문의하실 내용을 입력해주세요"
              value={form.message}
              onChange={(e) => setForm((f) => (f ? { ...f, message: e.target.value } : f))}
              required
            />

            <Checkbox
              label="개인정보 수집 및 이용에 동의합니다."
              name="agreedToPrivacyPolicy"
              checked={form.agreedToPrivacyPolicy}
              onChange={(e) => setForm((f) => (f ? { ...f, agreedToPrivacyPolicy: e.target.checked } : f))}
              required
            />

            {submitError && (
              <p role="alert" className="whitespace-pre-line text-center text-body2 font-medium text-destructive">
                {submitError}
              </p>
            )}

            <PrimaryButton
              type="submit"
              className="mt-2"
              disabled={!form.agreedToPrivacyPolicy || isSubmitting}
            >
              {isSubmitting ? "접수 처리 중..." : "예약 문의하기"}
            </PrimaryButton>
          </form>
        </>
      )}
    </div>
  );
}

export { ReservationForm };
