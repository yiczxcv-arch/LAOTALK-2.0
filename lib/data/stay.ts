/**
 * STAY(숙소) 더미 데이터 (단일 소스)
 * 현재 보유한 숙소 유형은 호텔 · 풀빌라 2종류뿐이며, 리조트는 포함하지 않는다.
 * 실제 업체명·가격·후기가 아직 확정되지 않아 유형 중심 임시 문구와 "예약 문의"만 사용한다.
 *
 * 이미지: public/images/{hotel-01,hotel-02,pool-villa-01,pool-villa-02}.png 실사 이미지를 사용한다.
 * 영상: videoUrl에 일반적인 유튜브 링크(watch/youtu.be 등)를 넣으면 카드에 "미리보기" 버튼이
 * 자동으로 나타난다. 비워두면(undefined) 버튼이 자동으로 숨겨진다 — 가짜 영상 생성 금지.
 */

import { IMAGES } from "@/lib/data/images";

export type StayType = "hotel" | "pool-villa";

export type Stay = {
  id: string;
  type: StayType;
  title: string;
  description: string;
  imageSrc?: string;
  priceLabel: string;
  videoUrl?: string;
  reservationHref: string;
};

export const stays: Stay[] = [
  {
    id: "premium-hotel",
    type: "hotel",
    title: "프리미엄 호텔",
    description: "편안한 휴식을 위한 프리미엄 객실",
    imageSrc: IMAGES.hotel01,
    priceLabel: "예약 문의",
    reservationHref: "/reservation?type=stay&slug=premium-hotel",
  },
  {
    id: "city-hotel",
    type: "hotel",
    title: "시티 호텔",
    description: "도심에서 편리하게 머무는 실용적인 객실",
    imageSrc: IMAGES.hotel02,
    priceLabel: "예약 문의",
    reservationHref: "/reservation?type=stay&slug=city-hotel",
  },
  {
    id: "private-pool-villa",
    type: "pool-villa",
    title: "프라이빗 풀빌라",
    description: "나만의 프라이빗 풀을 갖춘 독채형 숙소",
    imageSrc: IMAGES.poolVilla01,
    priceLabel: "예약 문의",
    reservationHref: "/reservation?type=stay&slug=private-pool-villa",
  },
  {
    id: "riverview-pool-villa",
    type: "pool-villa",
    title: "리버뷰 풀빌라",
    description: "강변 전망을 즐길 수 있는 프라이빗 풀빌라",
    imageSrc: IMAGES.poolVilla02,
    priceLabel: "예약 문의",
    reservationHref: "/reservation?type=stay&slug=riverview-pool-villa",
  },
];

export function getStayBySlug(slug: string): Stay | undefined {
  return stays.find((stay) => stay.id === slug);
}
