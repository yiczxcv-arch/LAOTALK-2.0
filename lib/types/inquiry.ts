/**
 * 문의 폼 데이터 타입 (단일 소스)
 * RESERVATION(예약 문의)에서 사용한다. CUSTOM TRAVEL(맞춤여행)은 자체 폼 없이
 * "여행 설계" 토글칩에서 선택한 값을 이 RESERVATION 폼으로 전달해 재사용한다.
 * docs/04_PROJECT_RULE.md #7 예약 기능 규칙: 예약은 결제가 아닌 "문의 접수" 방식이며,
 * 실제 서버 전송 없이 프론트 상태로만 완료 화면을 표시한다.
 * 추후 관리자/DB 연동 시 이 타입을 그대로 API 요청 바디로 사용하면 된다.
 */

export const peopleCountOptions = [
  { label: "1명", value: "1" },
  { label: "2명", value: "2" },
  { label: "3명", value: "3" },
  { label: "4명", value: "4" },
  { label: "5명 이상", value: "5+" },
] as const;

/** 맞춤여행 "여행 설계" 토글칩 옵션 — /custom-travel에서 선택해 /reservation으로 전달한다. */
export const travelPlanDurationOptions = [
  { label: "2박3일", value: "2n3d" },
  { label: "3박4일", value: "3n4d" },
  { label: "4박5일", value: "4n5d" },
  { label: "5박 이상", value: "5n+" },
] as const;

export const travelPlanPeopleOptions = [
  { label: "1명", value: "1" },
  { label: "2명", value: "2" },
  { label: "3~4명", value: "3-4" },
  { label: "5명+", value: "5+" },
] as const;

export const travelPlanStyleOptions = [
  { label: "휴양", value: "healing" },
  { label: "골프", value: "golf" },
  { label: "액티비티", value: "activity" },
  { label: "가족", value: "family" },
  { label: "커플", value: "couple" },
  { label: "비즈니스", value: "business" },
] as const;

export const travelPlanStayOptions = [
  { label: "호텔", value: "hotel" },
  { label: "풀빌라", value: "pool-villa" },
  { label: "상관없음", value: "any" },
] as const;

export const travelPlanBudgetOptions = [
  { label: "100만원 이하", value: "under-100" },
  { label: "100~200만원", value: "100-200" },
  { label: "200~300만원", value: "200-300" },
  { label: "300만원 이상", value: "over-300" },
] as const;

export type ProductType = "activity" | "golf" | "package" | "stay" | "custom";

export type CustomTravelDetails = {
  duration: string;
  people: string;
  style: string;
  stay: string;
  budget: string;
};

export type SelectedProduct = {
  type: ProductType;
  slug: string;
  title: string;
  price: number | null;
  imageSrc?: string;
  /** 카테고리 안의 세부 유형 (예: 숙소의 호텔/풀빌라). 없으면 카테고리 라벨만 표시한다. */
  variantLabel?: string;
  /** type이 "custom"일 때만 사용 — 여행 설계 토글칩에서 선택한 5개 항목의 라벨 */
  customDetails?: CustomTravelDetails;
};

export type ReservationInquiry = {
  product: SelectedProduct;
  name: string;
  phone: string;
  kakaoId: string;
  travelDate: string;
  peopleCount: string;
  message: string;
  agreedToPrivacyPolicy: boolean;
};

export const RESERVATION_COMPLETE_MESSAGE =
  "예약 문의가 접수되었습니다.\n확인 후 입력하신 연락처로 안내드리겠습니다.";

export const RESERVATION_FAILURE_MESSAGE =
  "문의 저장에 실패했습니다.\n입력 내용을 확인한 뒤 다시 시도해주세요.";
