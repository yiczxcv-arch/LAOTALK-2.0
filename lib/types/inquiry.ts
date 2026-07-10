/**
 * 문의 폼 데이터 타입 (단일 소스)
 * RESERVATION(예약 문의) / CUSTOM TRAVEL(맞춤여행 문의) 두 폼이 공통으로 사용한다.
 * docs/04_PROJECT_RULE.md #7 예약 기능 규칙: 예약은 결제가 아닌 "문의 접수" 방식이며,
 * 실제 서버 전송 없이 프론트 상태로만 완료 화면을 표시한다.
 * 추후 관리자/DB 연동 시 이 타입을 그대로 API 요청 바디로 사용하면 된다.
 */

export const travelStyleOptions = [
  { label: "자유여행", value: "free" },
  { label: "액티비티 중심", value: "activity" },
  { label: "골프 여행", value: "golf" },
  { label: "힐링/휴양", value: "healing" },
  { label: "가족 여행", value: "family" },
  { label: "커플 여행", value: "couple" },
  { label: "단체/기업 여행", value: "group" },
] as const;

export const travelDurationOptions = [
  { label: "2박 3일", value: "2n3d" },
  { label: "3박 4일", value: "3n4d" },
  { label: "4박 5일", value: "4n5d" },
  { label: "5박 이상", value: "5n+" },
] as const;

export const travelRegionOptions = [
  { label: "비엔티안", value: "vientiane" },
  { label: "방비엥", value: "vang-vieng" },
  { label: "루앙프라방", value: "luang-prabang" },
  { label: "라오스 전역", value: "all" },
] as const;

export const peopleCountOptions = [
  { label: "1명", value: "1" },
  { label: "2명", value: "2" },
  { label: "3명", value: "3" },
  { label: "4명", value: "4" },
  { label: "5명 이상", value: "5+" },
] as const;

export type CustomTravelInquiry = {
  travelStyle: string;
  duration: string;
  peopleCount: string;
  region: string;
  message: string;
  agreedToPrivacyPolicy: boolean;
};

export type ProductType = "activity" | "golf" | "package" | "stay";

export type SelectedProduct = {
  type: ProductType;
  slug: string;
  title: string;
  price: number | null;
  imageSrc?: string;
  /** 카테고리 안의 세부 유형 (예: 숙소의 호텔/풀빌라). 없으면 카테고리 라벨만 표시한다. */
  variantLabel?: string;
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
  "문의가 접수되었습니다.\n확인 후 카카오톡 또는 연락처로 안내드리겠습니다.";
