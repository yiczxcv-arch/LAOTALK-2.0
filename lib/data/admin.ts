/**
 * 관리자 더미 데이터 (단일 소스)
 * RESERVATION(예약 문의) / CUSTOM TRAVEL(맞춤여행 문의) 제출 데이터를 관리자 화면에서 확인·상태 변경하기 위한 더미 데이터.
 * lib/types/inquiry.ts의 ReservationInquiry/CustomTravelInquiry 타입을 기준으로 confirmedAt/status 등 관리자 전용 필드만 확장했다.
 * 실제 로그인 인증 및 DB 연결은 하지 않으며, 상태 변경은 프론트 상태로만 동작한다.
 */

import type { ProductType } from "@/lib/types/inquiry";

export type ReservationStatus =
  | "신규 문의"
  | "상담 중"
  | "파트너 전달"
  | "예약 진행 중"
  | "예약 완료"
  | "취소"
  | "보류";

export const reservationStatuses: ReservationStatus[] = [
  "신규 문의",
  "상담 중",
  "파트너 전달",
  "예약 진행 중",
  "예약 완료",
  "취소",
  "보류",
];

export type ReservationRecord = {
  id: string;
  productType: ProductType;
  productTitle: string;
  productSlug: string;
  price: number;
  imageSrc: string;
  name: string;
  phone: string;
  kakaoId: string;
  travelDate: string;
  peopleCount: string;
  message: string;
  status: ReservationStatus;
  createdAt: string;
};

export type InquiryRecord = {
  id: string;
  travelStyleLabel: string;
  durationLabel: string;
  regionLabel: string;
  peopleCount: string;
  message: string;
  status: ReservationStatus;
  createdAt: string;
};

export const reservationRecords: ReservationRecord[] = [
  {
    id: "R-1001",
    productType: "activity",
    productTitle: "블루라군 & 카약",
    productSlug: "blue-lagoon-kayak",
    price: 35000,
    imageSrc: "/images/blue-lagoon.svg",
    name: "김민준",
    phone: "010-1234-5678",
    kakaoId: "minjun_k",
    travelDate: "2026-07-09",
    peopleCount: "2",
    message: "오전 시간대로 예약하고 싶습니다.",
    status: "신규 문의",
    createdAt: "2026-07-09T08:20:00+09:00",
  },
  {
    id: "R-1002",
    productType: "golf",
    productTitle: "레이크뷰 골프클럽",
    productSlug: "lakeview-golf-club",
    price: 90000,
    imageSrc: "/images/golf-course.svg",
    name: "이서연",
    phone: "010-2222-3333",
    kakaoId: "seoyeon_lee",
    travelDate: "2026-07-15",
    peopleCount: "4",
    message: "카트 2대 부탁드립니다.",
    status: "상담 중",
    createdAt: "2026-07-09T07:05:00+09:00",
  },
  {
    id: "R-1003",
    productType: "package",
    productTitle: "방비엥 힐링 패키지",
    productSlug: "vang-vieng-healing",
    price: 380000,
    imageSrc: "/images/vang-vieng-package.svg",
    name: "박지훈",
    phone: "010-3333-4444",
    kakaoId: "jihoon_p",
    travelDate: "2026-08-01",
    peopleCount: "2",
    message: "허니문 여행입니다. 방 업그레이드 가능할까요?",
    status: "파트너 전달",
    createdAt: "2026-07-08T21:40:00+09:00",
  },
  {
    id: "R-1004",
    productType: "activity",
    productTitle: "광시폭포 투어",
    productSlug: "kuang-si-waterfall",
    price: 40000,
    imageSrc: "/images/kuang-si-waterfall.svg",
    name: "최유진",
    phone: "010-4444-5555",
    kakaoId: "yujin_choi",
    travelDate: "2026-07-20",
    peopleCount: "3",
    message: "",
    status: "예약 진행 중",
    createdAt: "2026-07-08T15:10:00+09:00",
  },
  {
    id: "R-1005",
    productType: "package",
    productTitle: "루앙프라방 감성 패키지",
    productSlug: "luang-prabang-emotion",
    price: 520000,
    imageSrc: "/images/luang-prabang-package.svg",
    name: "정하윤",
    phone: "010-5555-6666",
    kakaoId: "hayoon_j",
    travelDate: "2026-07-25",
    peopleCount: "2",
    message: "채식 식단 요청드립니다.",
    status: "예약 완료",
    createdAt: "2026-07-07T11:00:00+09:00",
  },
  {
    id: "R-1006",
    productType: "golf",
    productTitle: "부영 골프클럽",
    productSlug: "bouyang-golf-club",
    price: 70000,
    imageSrc: "/images/golf-course.svg",
    name: "한도윤",
    phone: "010-6666-7777",
    kakaoId: "doyoon_han",
    travelDate: "2026-07-12",
    peopleCount: "1",
    message: "일정이 변경되어 취소합니다.",
    status: "취소",
    createdAt: "2026-07-06T09:30:00+09:00",
  },
  {
    id: "R-1007",
    productType: "activity",
    productTitle: "질라인 & 동굴탐험",
    productSlug: "zipline-cave",
    price: 45000,
    imageSrc: "/images/zipline-cave.svg",
    name: "오서준",
    phone: "010-7777-8888",
    kakaoId: "seojun_oh",
    travelDate: "2026-08-05",
    peopleCount: "5",
    message: "인원 확정 후 다시 연락드리겠습니다.",
    status: "보류",
    createdAt: "2026-07-09T09:15:00+09:00",
  },
];

export const inquiryRecords: InquiryRecord[] = [
  {
    id: "I-2001",
    travelStyleLabel: "가족 여행",
    durationLabel: "3박 4일",
    regionLabel: "방비엥",
    peopleCount: "4",
    message: "아이 둘과 함께하는 가족 여행입니다. 이동이 적은 일정으로 부탁드려요.",
    status: "신규 문의",
    createdAt: "2026-07-09T10:05:00+09:00",
  },
  {
    id: "I-2002",
    travelStyleLabel: "커플 여행",
    durationLabel: "2박 3일",
    regionLabel: "루앙프라방",
    peopleCount: "2",
    message: "감성적인 카페와 야시장 위주로 다니고 싶어요.",
    status: "상담 중",
    createdAt: "2026-07-09T06:40:00+09:00",
  },
  {
    id: "I-2003",
    travelStyleLabel: "골프 여행",
    durationLabel: "4박 5일",
    regionLabel: "비엔티안",
    peopleCount: "4",
    message: "골프장 2~3곳 라운딩 가능한 일정으로 견적 부탁드립니다.",
    status: "파트너 전달",
    createdAt: "2026-07-08T18:20:00+09:00",
  },
  {
    id: "I-2004",
    travelStyleLabel: "힐링/휴양",
    durationLabel: "3박 4일",
    regionLabel: "방비엥",
    peopleCount: "1",
    message: "혼자 조용히 힐링하고 싶습니다. 스파나 마사지 포함 일정 있을까요?",
    status: "예약 완료",
    createdAt: "2026-07-05T14:00:00+09:00",
  },
  {
    id: "I-2005",
    travelStyleLabel: "단체/기업 여행",
    durationLabel: "5박 이상",
    regionLabel: "라오스 전역",
    peopleCount: "5+",
    message: "회사 워크숍 목적이며 20인 규모입니다. 견적 부탁드립니다.",
    status: "보류",
    createdAt: "2026-07-04T09:50:00+09:00",
  },
  {
    id: "I-2006",
    travelStyleLabel: "자유여행",
    durationLabel: "2박 3일",
    regionLabel: "비엔티안",
    peopleCount: "2",
    message: "일정이 맞지 않아 취소합니다.",
    status: "취소",
    createdAt: "2026-07-03T13:15:00+09:00",
  },
];

export function getReservationById(id: string): ReservationRecord | undefined {
  return reservationRecords.find((r) => r.id === id);
}

export function getInquiryById(id: string): InquiryRecord | undefined {
  return inquiryRecords.find((i) => i.id === id);
}
