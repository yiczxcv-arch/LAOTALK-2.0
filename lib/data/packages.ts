/**
 * PACKAGE 더미 데이터 (단일 소스)
 * docs/02_BLUEPRINT.md #10 데이터 구조(package: id/title/days/summary)를 기준으로 하되,
 * 목록·상세 UI에 필요한 필드(slug, tags, price, images, included, itinerary 등)를 확장했다.
 * design/wireframe 7번.png "07 PACKAGE(목록)" · "07 PACKAGE(상세)" 구조를 따른다.
 * 추후 관리자/DB 연동 시 이 타입을 API 응답 타입으로 그대로 확장하면 된다.
 */

import { IMAGES } from "@/lib/data/images";

export type PackageDuration = "2박 3일" | "3박 4일" | "4박 5일";

export type IncludedItem = {
  icon: "bed" | "car" | "sparkles" | "utensils";
  label: string;
};

export type ItineraryDay = {
  day: number;
  title: string;
  description: string;
};

export type TravelPackage = {
  id: string;
  slug: string;
  title: string;
  duration: PackageDuration;
  tags: string[];
  price: number;
  priceUnit: string;
  imageSrc: string;
  images: string[];
  description: string;
  included: IncludedItem[];
  itinerary: ItineraryDay[];
};

export const packages: TravelPackage[] = [
  {
    id: "package-1",
    slug: "vang-vieng-healing",
    title: "방비엥 힐링 패키지",
    duration: "3박 4일",
    tags: ["방비엥", "자연", "힐링"],
    price: 380000,
    priceUnit: "1인",
    imageSrc: "/images/vang-vieng-package.svg",
    images: ["/images/vang-vieng-package.svg"],
    description:
      "카르스트 산맥과 남송강이 어우러진 방비엥에서 숙박, 액티비티, 픽업까지 한번에 즐기는 힐링 패키지입니다.",
    included: [
      { icon: "bed", label: "숙박" },
      { icon: "car", label: "픽업/샌딩" },
      { icon: "sparkles", label: "액티비티" },
      { icon: "utensils", label: "조식" },
    ],
    itinerary: [
      { day: 1, title: "비엔티안 도착 및 방비엥 이동", description: "공항 픽업 후 방비엥으로 이동, 숙소 체크인 및 자유 시간." },
      { day: 2, title: "블루라군 & 카약 투어", description: "에메랄드빛 블루라군에서 수영과 카약을 즐기는 하루." },
      { day: 3, title: "짚라인 & 동굴 탐험", description: "정글 짚라인과 신비로운 동굴을 탐험하는 액티비티 데이." },
      { day: 4, title: "자유 일정 및 출국", description: "오전 자유 시간 후 공항으로 이동, 출국." },
    ],
  },
  {
    id: "package-2",
    slug: "luang-prabang-emotion",
    title: "루앙프라방 감성 패키지",
    duration: "4박 5일",
    tags: ["루앙프라방", "문화체험", "감성여행"],
    price: 520000,
    priceUnit: "1인",
    imageSrc: "/images/luang-prabang-package.svg",
    images: ["/images/luang-prabang-package.svg"],
    description:
      "유네스코 세계문화유산 도시 루앙프라방의 사원과 야시장, 광시폭포까지 둘러보는 감성 가득한 여행 패키지입니다.",
    included: [
      { icon: "bed", label: "숙박" },
      { icon: "car", label: "픽업/샌딩" },
      { icon: "sparkles", label: "투어" },
      { icon: "utensils", label: "조식" },
    ],
    itinerary: [
      { day: 1, title: "루앙프라방 도착", description: "공항 픽업 후 숙소 체크인, 야시장 자유 관람." },
      { day: 2, title: "왓시엥통 사원 & 시내 투어", description: "루앙프라방 대표 사원과 구시가지를 둘러보는 문화 탐방." },
      { day: 3, title: "광시폭포 투어", description: "에메랄드빛 광시폭포에서 수영과 트레킹을 즐기는 하루." },
      { day: 4, title: "탁발 체험 & 자유 일정", description: "새벽 탁발 공양 체험 후 자유 일정." },
      { day: 5, title: "출국", description: "숙소 체크아웃 후 공항으로 이동, 출국." },
    ],
  },
  {
    id: "package-3",
    slug: "vientiane-short-trip",
    title: "비엔티안 알짜 단기 패키지",
    duration: "2박 3일",
    tags: ["비엔티안", "단기여행", "가성비"],
    price: 250000,
    priceUnit: "1인",
    imageSrc: "/images/patuxai-night.svg",
    images: ["/images/patuxai-night.svg"],
    description: "짧은 일정으로도 비엔티안의 핵심 명소를 알차게 둘러볼 수 있는 단기 패키지입니다.",
    included: [
      { icon: "bed", label: "숙박" },
      { icon: "car", label: "픽업/샌딩" },
      { icon: "sparkles", label: "시티투어" },
      { icon: "utensils", label: "조식" },
    ],
    itinerary: [
      { day: 1, title: "비엔티안 도착", description: "공항 픽업 후 숙소 체크인, 야시장 자유 관람." },
      { day: 2, title: "시티 투어", description: "빠뚜싸이, 탓루앙 등 핵심 명소를 둘러보는 반나절 투어." },
      { day: 3, title: "자유 일정 및 출국", description: "오전 자유 시간 후 공항으로 이동, 출국." },
    ],
  },
  {
    id: "package-4",
    slug: "vang-vieng-couple",
    title: "방비엥 커플 여행 패키지",
    duration: "3박 4일",
    tags: ["방비엥", "커플", "힐링"],
    price: 420000,
    priceUnit: "1인",
    imageSrc: "/images/vang-vieng-package.svg",
    images: ["/images/vang-vieng-package.svg"],
    description: "연인과 함께 방비엥의 자연 속에서 여유로운 시간을 보낼 수 있도록 구성한 커플 전용 패키지입니다.",
    included: [
      { icon: "bed", label: "숙박" },
      { icon: "car", label: "픽업/샌딩" },
      { icon: "sparkles", label: "액티비티" },
      { icon: "utensils", label: "조식" },
    ],
    itinerary: [
      { day: 1, title: "방비엥 도착", description: "공항 픽업 후 방비엥 이동, 숙소 체크인 및 자유 시간." },
      { day: 2, title: "열기구 투어 & 선셋 뷰포인트", description: "카르스트 지형을 하늘에서 감상하는 열기구 투어와 노을 감상." },
      { day: 3, title: "튜빙 & 온천", description: "남송강 튜빙과 온천에서의 여유로운 힐링 타임." },
      { day: 4, title: "자유 일정 및 출국", description: "오전 자유 시간 후 공항으로 이동, 출국." },
    ],
  },
  {
    id: "package-5",
    slug: "laos-golf-package",
    title: "라오스 골프 여행 패키지",
    duration: "3박 4일",
    tags: ["비엔티안", "골프", "단체"],
    price: 650000,
    priceUnit: "1인",
    imageSrc: IMAGES.golfCourse,
    images: [IMAGES.golfCourse],
    description: "비엔티안 인기 골프장 2곳에서의 라운딩과 숙박, 픽업까지 포함된 골프 애호가를 위한 패키지입니다.",
    included: [
      { icon: "bed", label: "숙박" },
      { icon: "car", label: "픽업/샌딩" },
      { icon: "sparkles", label: "그린피 2회" },
      { icon: "utensils", label: "조식" },
    ],
    itinerary: [
      { day: 1, title: "비엔티안 도착", description: "공항 픽업 후 숙소 체크인 및 자유 시간." },
      { day: 2, title: "레이크뷰 골프클럽 라운딩", description: "호수뷰 코스에서의 라운딩." },
      { day: 3, title: "동비엔 골프클럽 라운딩", description: "평지형 코스에서의 라운딩." },
      { day: 4, title: "자유 일정 및 출국", description: "오전 자유 시간 후 공항으로 이동, 출국." },
    ],
  },
  {
    id: "package-6",
    slug: "luang-prabang-family",
    title: "루앙프라방 가족 여행 패키지",
    duration: "4박 5일",
    tags: ["루앙프라방", "가족여행", "문화체험"],
    price: 560000,
    priceUnit: "1인",
    imageSrc: "/images/luang-prabang-package.svg",
    images: ["/images/luang-prabang-package.svg"],
    description: "아이와 함께하기 좋은 편안한 일정으로 구성한 루앙프라방 가족 여행 패키지입니다.",
    included: [
      { icon: "bed", label: "숙박" },
      { icon: "car", label: "픽업/샌딩" },
      { icon: "sparkles", label: "투어" },
      { icon: "utensils", label: "조식" },
    ],
    itinerary: [
      { day: 1, title: "루앙프라방 도착", description: "공항 픽업 후 숙소 체크인, 자유 시간." },
      { day: 2, title: "곰 보호구역 & 광시폭포", description: "곰 보호구역 관람 후 광시폭포에서 물놀이." },
      { day: 3, title: "코끼리 캠프 체험", description: "코끼리 먹이주기, 목욕 체험 등 가족 친화 액티비티." },
      { day: 4, title: "시내 사원 투어 & 야시장", description: "주요 사원 관람 후 야시장에서 자유 시간." },
      { day: 5, title: "출국", description: "숙소 체크아웃 후 공항으로 이동, 출국." },
    ],
  },
];

export const packageDurations: PackageDuration[] = ["2박 3일", "3박 4일", "4박 5일"];

export function getPackages(): TravelPackage[] {
  return packages;
}

export function getPackagesByDuration(duration?: PackageDuration): TravelPackage[] {
  if (!duration) return packages;
  return packages.filter((pkg) => pkg.duration === duration);
}

export function getPackageBySlug(slug: string): TravelPackage | undefined {
  return packages.find((pkg) => pkg.slug === slug);
}
