/**
 * STAY(숙소) 더미 데이터 (단일 소스)
 * 현재 보유한 숙소 유형은 호텔 · 풀빌라 2종류뿐이며, 리조트는 포함하지 않는다.
 * 실제 업체명·가격·후기가 아직 확정되지 않아 유형 중심 임시 문구와 "가격 문의"만 사용한다.
 *
 * 이미지: 실사 자산이 준비되면 아래 경로에 파일을 넣고 해당 항목의 imageSrc만 채우면 된다.
 * 지금은 파일이 없어 imageSrc를 비워두고 Card의 ImagePlaceholder로 안전하게 대체한다.
 *   - /images/stay/hotel-01.jpg      ← "premium-hotel" 항목용
 *   - /images/stay/hotel-02.jpg      ← 호텔 두 번째 항목 추가 시 사용 (현재 미사용)
 *   - /images/stay/pool-villa-01.jpg ← "private-pool-villa" 항목용
 *   - /images/stay/pool-villa-02.jpg ← 풀빌라 두 번째 항목 추가 시 사용 (현재 미사용)
 *
 * 영상: videoUrl에 일반적인 유튜브 링크(watch/youtu.be 등)를 넣으면 카드에 "미리보기" 버튼이
 * 자동으로 나타난다. 비워두면(undefined) 버튼이 자동으로 숨겨진다 — 가짜 영상 생성 금지.
 */

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
    priceLabel: "가격 문의",
    reservationHref: "/reservation?type=stay&slug=premium-hotel",
  },
  {
    id: "private-pool-villa",
    type: "pool-villa",
    title: "프라이빗 풀빌라",
    description: "나만의 프라이빗 풀을 갖춘 독채형 숙소",
    priceLabel: "가격 문의",
    reservationHref: "/reservation?type=stay&slug=private-pool-villa",
  },
];

export function getStayBySlug(slug: string): Stay | undefined {
  return stays.find((stay) => stay.id === slug);
}
