/**
 * STAY(숙소) 더미 데이터 (단일 소스)
 * 현재 보유한 숙소 유형은 호텔 · 풀빌라 2종류뿐이며, 리조트는 포함하지 않는다.
 * 실제 업체명이 아직 확정되지 않아 유형 중심 임시 문구를 사용한다.
 * 실사 이미지 자산이 아직 없어 imageSrc는 비워두고 ImagePlaceholder로 안전하게 대체한다.
 * 추후 실사 이미지가 준비되면 이 배열에 imageSrc만 추가하면 된다 (예상 파일명: hotel-premium.jpg, pool-villa-private.jpg).
 */

export type StayType = "hotel" | "villa";

export type Stay = {
  id: string;
  slug: string;
  title: string;
  type: StayType;
  typeLabel: string;
  price: number | null;
  priceUnit: string;
  description: string;
  imageSrc?: string;
};

export const stays: Stay[] = [
  {
    id: "stay-1",
    slug: "premium-hotel",
    title: "프리미엄 호텔",
    type: "hotel",
    typeLabel: "호텔",
    price: null,
    priceUnit: "1박",
    description: "편안한 휴식을 위한 프리미엄 객실",
  },
  {
    id: "stay-2",
    slug: "private-pool-villa",
    title: "프라이빗 풀빌라",
    type: "villa",
    typeLabel: "풀빌라",
    price: null,
    priceUnit: "1박",
    description: "나만의 프라이빗 풀을 갖춘 독채형 숙소",
  },
];

export function getStayBySlug(slug: string): Stay | undefined {
  return stays.find((stay) => stay.slug === slug);
}
