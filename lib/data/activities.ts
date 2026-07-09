/**
 * ACTIVITY 더미 데이터 (단일 소스)
 * docs/02_BLUEPRINT.md #10 데이터 구조(activity: id/title/region/duration/description)를 기준으로 하되,
 * 목록·상세 UI에 필요한 필드(price, rating, tags, images, included, usageNotes 등)를 확장했다.
 * 추후 관리자/DB 연동 시 이 타입을 API 응답 타입으로 그대로 확장하면 된다.
 * HOME의 추천 액티비티(components/home/data.ts)도 이 데이터에서 파생하여 중복을 없앤다.
 */

import { IMAGES } from "@/lib/data/images";

export type ActivityRegion = "방비엥" | "비엔티안" | "루앙프라방";

export type IncludedItem = {
  icon: "clock" | "car" | "users" | "utensils";
  label: string;
  value: string;
};

export type Activity = {
  id: string;
  slug: string;
  title: string;
  region: ActivityRegion;
  duration: string;
  tags: string[];
  price: number;
  priceUnit: string;
  rating: { score: number; count: number };
  reservationCount: number;
  imageSrc: string;
  images: string[];
  description: string;
  included: IncludedItem[];
  usageNotes: string[];
};

export const activities: Activity[] = [
  {
    id: "activity-1",
    slug: "blue-lagoon-kayak",
    title: "블루라군 & 카약",
    region: "방비엥",
    duration: "6시간",
    tags: ["방비엥", "자연", "카약"],
    price: 35000,
    priceUnit: "1인",
    rating: { score: 4.8, count: 120 },
    reservationCount: 286,
    imageSrc: IMAGES.blueLagoon,
    images: [IMAGES.blueLagoon],
    description:
      "에메랄드빛 블루라군에서 수영과 카약을 즐기고 동남아의 자연을 만끽하세요.",
    included: [
      { icon: "clock", label: "소요시간", value: "6시간" },
      { icon: "car", label: "픽업/샌딩", value: "포함" },
      { icon: "users", label: "최소인원", value: "2명" },
    ],
    usageNotes: [
      "수영이 가능한 복장을 준비해주세요.",
      "우천 시 일정이 변경될 수 있습니다.",
      "귀중품은 소지하지 않는 것을 권장합니다.",
    ],
  },
  {
    id: "activity-2",
    slug: "zipline-cave",
    title: "질라인 & 동굴탐험",
    region: "방비엥",
    duration: "5시간",
    tags: ["방비엥", "액티브", "동굴"],
    price: 45000,
    priceUnit: "1인",
    rating: { score: 4.9, count: 98 },
    reservationCount: 154,
    imageSrc: IMAGES.ziplineCave,
    images: [IMAGES.ziplineCave],
    description:
      "정글 위를 가로지르는 짜릿한 짚라인과 신비로운 동굴 탐험을 함께 즐기는 코스입니다.",
    included: [
      { icon: "clock", label: "소요시간", value: "5시간" },
      { icon: "car", label: "픽업/샌딩", value: "포함" },
      { icon: "users", label: "최소인원", value: "2명" },
    ],
    usageNotes: [
      "활동하기 편한 복장과 운동화를 착용해주세요.",
      "우천 시 일정이 변경될 수 있습니다.",
      "만 12세 이상부터 참여 가능합니다.",
    ],
  },
  {
    id: "activity-3",
    slug: "kuang-si-waterfall",
    title: "광시폭포 투어",
    region: "루앙프라방",
    duration: "7시간",
    tags: ["루앙프라방", "자연", "힐링"],
    price: 40000,
    priceUnit: "1인",
    rating: { score: 4.7, count: 76 },
    reservationCount: 132,
    imageSrc: IMAGES.kuangSiWaterfall,
    images: [IMAGES.kuangSiWaterfall],
    description:
      "루앙프라방 대표 명소 광시폭포의 에메랄드빛 옥빛 소(沼)에서 수영과 트레킹을 즐겨보세요.",
    included: [
      { icon: "clock", label: "소요시간", value: "7시간" },
      { icon: "car", label: "픽업/샌딩", value: "포함" },
      { icon: "users", label: "최소인원", value: "1명" },
    ],
    usageNotes: [
      "수영이 가능한 복장을 준비해주세요.",
      "곰 보호구역(Bear Rescue Centre) 관람이 포함됩니다.",
      "우천 시 일정이 변경될 수 있습니다.",
    ],
  },
  {
    id: "activity-4",
    slug: "wat-xieng-thong-temple-tour",
    title: "왓시엥통 사원 투어",
    region: "루앙프라방",
    duration: "3시간",
    tags: ["루앙프라방", "문화체험", "사원"],
    price: 30000,
    priceUnit: "1인",
    rating: { score: 4.6, count: 54 },
    reservationCount: 88,
    imageSrc: IMAGES.heroPhaThatLuang,
    images: [IMAGES.heroPhaThatLuang],
    description:
      "루앙프라방에서 가장 아름다운 사원으로 꼽히는 왓시엥통을 현지 가이드와 함께 둘러보는 문화 탐방 코스입니다.",
    included: [
      { icon: "clock", label: "소요시간", value: "3시간" },
      { icon: "car", label: "픽업/샌딩", value: "포함" },
      { icon: "users", label: "최소인원", value: "1명" },
    ],
    usageNotes: [
      "사원 방문 시 어깨와 무릎을 가리는 복장을 착용해주세요.",
      "신발을 벗고 입장하는 구역이 있습니다.",
      "가이드의 안내에 따라 조용히 관람해주세요.",
    ],
  },
  {
    id: "activity-5",
    slug: "vientiane-city-tour",
    title: "비엔티안 시티 투어",
    region: "비엔티안",
    duration: "4시간",
    tags: ["비엔티안", "문화체험", "도심"],
    price: 28000,
    priceUnit: "1인",
    rating: { score: 4.5, count: 41 },
    reservationCount: 63,
    imageSrc: IMAGES.heroPhaThatLuang,
    images: [IMAGES.heroPhaThatLuang],
    description:
      "빠뚜싸이, 탓루앙 등 비엔티안의 핵심 명소를 반나절 만에 둘러보는 시티 투어입니다.",
    included: [
      { icon: "clock", label: "소요시간", value: "4시간" },
      { icon: "car", label: "픽업/샌딩", value: "포함" },
      { icon: "users", label: "최소인원", value: "2명" },
    ],
    usageNotes: [
      "도보 이동이 많으니 편한 신발을 착용해주세요.",
      "사원 방문 시 노출이 적은 복장을 권장합니다.",
      "우천 시에도 정상 진행됩니다.",
    ],
  },
  {
    id: "activity-6",
    slug: "vang-vieng-tubing",
    title: "방비엥 튜빙 투어",
    region: "방비엥",
    duration: "4시간",
    tags: ["방비엥", "액티브", "액티비티"],
    price: 25000,
    priceUnit: "1인",
    rating: { score: 4.4, count: 67 },
    reservationCount: 121,
    imageSrc: IMAGES.tubing,
    images: [IMAGES.tubing],
    description: "남송강을 따라 튜브를 타고 내려가며 방비엥의 자연을 온몸으로 느껴보세요.",
    included: [
      { icon: "clock", label: "소요시간", value: "4시간" },
      { icon: "car", label: "픽업/샌딩", value: "포함" },
      { icon: "users", label: "최소인원", value: "2명" },
    ],
    usageNotes: [
      "수영이 가능한 복장을 준비해주세요.",
      "구명조끼가 제공됩니다.",
      "음주 후 참여는 제한될 수 있습니다.",
    ],
  },
  {
    id: "activity-7",
    slug: "kuang-si-bike-tour",
    title: "루앙프라방 자전거 투어",
    region: "루앙프라방",
    duration: "3시간",
    tags: ["루앙프라방", "액티브", "자연"],
    price: 22000,
    priceUnit: "1인",
    rating: { score: 4.3, count: 29 },
    reservationCount: 47,
    imageSrc: IMAGES.kuangSiWaterfall,
    images: [IMAGES.kuangSiWaterfall],
    description: "루앙프라방 외곽 마을과 논길을 따라 달리는 여유로운 자전거 투어입니다.",
    included: [
      { icon: "clock", label: "소요시간", value: "3시간" },
      { icon: "car", label: "픽업/샌딩", value: "미포함" },
      { icon: "users", label: "최소인원", value: "1명" },
    ],
    usageNotes: [
      "헬멧이 제공됩니다.",
      "우천 시 일정이 변경될 수 있습니다.",
      "체력 수준에 따라 코스가 조정될 수 있습니다.",
    ],
  },
  {
    id: "activity-8",
    slug: "vientiane-night-market-tour",
    title: "비엔티안 야시장 투어",
    region: "비엔티안",
    duration: "2시간",
    tags: ["비엔티안", "문화체험", "야시장"],
    price: 18000,
    priceUnit: "1인",
    rating: { score: 4.5, count: 33 },
    reservationCount: 52,
    imageSrc: IMAGES.heroPhaThatLuang,
    images: [IMAGES.heroPhaThatLuang],
    description: "메콩강변 야시장에서 현지 먹거리와 소품을 즐기는 저녁 투어입니다.",
    included: [
      { icon: "clock", label: "소요시간", value: "2시간" },
      { icon: "car", label: "픽업/샌딩", value: "미포함" },
      { icon: "users", label: "최소인원", value: "1명" },
    ],
    usageNotes: [
      "현지 화폐(KIP) 소액권을 준비해주세요.",
      "우기에는 일부 노점이 운영되지 않을 수 있습니다.",
      "가이드 없이 자유 관람 방식으로 진행됩니다.",
    ],
  },
  {
    id: "activity-9",
    slug: "vang-vieng-hot-air-balloon",
    title: "방비엥 열기구 투어",
    region: "방비엥",
    duration: "1시간",
    tags: ["방비엥", "힐링", "뷰"],
    price: 60000,
    priceUnit: "1인",
    rating: { score: 4.9, count: 82 },
    reservationCount: 96,
    imageSrc: IMAGES.hotAirBalloon,
    images: [IMAGES.hotAirBalloon],
    description: "카르스트 지형 위로 떠올라 방비엥의 절경을 하늘에서 감상하는 프리미엄 투어입니다.",
    included: [
      { icon: "clock", label: "소요시간", value: "1시간" },
      { icon: "car", label: "픽업/샌딩", value: "포함" },
      { icon: "users", label: "최소인원", value: "1명" },
    ],
    usageNotes: [
      "기상 상황에 따라 운항이 취소될 수 있습니다.",
      "일출 시간대에 진행됩니다.",
      "임산부 및 지병이 있는 경우 참여가 제한됩니다.",
    ],
  },
];

export const activityRegions: ActivityRegion[] = ["방비엥", "비엔티안", "루앙프라방"];

export function getActivities(): Activity[] {
  return activities;
}

export function getActivitiesByRegion(region?: ActivityRegion): Activity[] {
  if (!region) return activities;
  return activities.filter((activity) => activity.region === region);
}

export function getActivityBySlug(slug: string): Activity | undefined {
  return activities.find((activity) => activity.slug === slug);
}
