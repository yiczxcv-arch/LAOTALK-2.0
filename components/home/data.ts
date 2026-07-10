/**
 * HOME 페이지 더미 데이터
 * docs/02_BLUEPRINT.md #10 데이터 구조를 기준으로 타입을 구성하여
 * 추후 관리자(콘텐츠/액티비티/골프/패키지 관리)와 연결하기 쉽도록 분리한다.
 */

import { activities } from "@/lib/data/activities";
import { packages } from "@/lib/data/packages";
import { IMAGES } from "@/lib/data/images";

export type HeroSlide = {
  id: string;
  title: string;
  subtitle: string;
  imageSrc: string;
};

export const heroSlides: HeroSlide[] = [
  {
    id: "hero-1",
    title: "라오스의 모든 정보,\n여기 다 있습니다",
    subtitle: "여행 · 생활 · 예약 · 소식",
    imageSrc: IMAGES.heroPhaThatLuang,
  },
  {
    id: "hero-2",
    title: "검증된 현지 파트너와\n함께하는 여행",
    subtitle: "액티비티 · 골프 · 패키지",
    imageSrc: IMAGES.hotAirBalloon,
  },
  {
    id: "hero-3",
    title: "카카오 상담으로\n간편하게 예약",
    subtitle: "복잡한 절차 없이 빠르게",
    imageSrc: IMAGES.golfLakeview,
  },
  {
    id: "hero-4",
    title: "나만의 일정으로\n떠나는 맞춤여행",
    subtitle: "원하는 스타일 그대로",
    imageSrc: IMAGES.blueLagoon,
  },
];

export type NoticeItem = {
  id: string;
  text: string;
  href: string;
};

export const notice: NoticeItem = {
  id: "notice-1",
  text: "라오스 입국 및 비자 최신 정보 업데이트",
  href: "/notice/visa-update",
};

export type TodayLaosItem = {
  id: string;
  label: string;
  value: string;
  sub: string;
};

export const todayLaosItems: TodayLaosItem[] = [
  {
    id: "news",
    label: "비엔티안 빠뚜싸이",
    value: "야간 경관조명 운영 시작",
    sub: "비엔티안 빠뚜싸이",
  },
  { id: "exchange", label: "환율 정보", value: "1,000원 ≈ 16,800 KIP", sub: "라오톡 매일 업데이트" },
  { id: "weather", label: "날씨", value: "32°C", sub: "맑음 · 비엔티안" },
];

export type LaotalkTvConfig = {
  channelUrl: string;
  channelHandle: string;
  videoTitle: string;
  videoDescription: string;
  thumbnailSrc: string;
};

/**
 * 라오톡 TV 최신 영상 수동 연동 설정 (유튜브 API 미사용).
 * 최신 영상으로 교체할 때 이 객체의 값만 수정하면 된다 — channelUrl: 채널 또는 최신 영상 링크,
 * videoTitle/videoDescription: 카드에 노출할 문구, thumbnailSrc: lib/data/images.ts의 IMAGES 상수 사용 권장.
 */
export const laotalkTv: LaotalkTvConfig = {
  channelUrl: "https://www.youtube.com/@llaotalk_official",
  channelHandle: "@llaotalk_official",
  videoTitle: "라오스를 가장 생생하게 만나는 방법",
  videoDescription: "최신 영상으로 여행·골프·맛집·생활 정보를 확인하세요.",
  thumbnailSrc: IMAGES.tubing,
};

export type CategoryService = {
  id: string;
  label: string;
  sub: string;
  href: string;
  icon: "activity" | "golf" | "package" | "stay" | "car" | "custom";
};

export const categoryServices: CategoryService[] = [
  { id: "activity", label: "액티비티", sub: "즐길거리", href: "/activity", icon: "activity" },
  { id: "golf", label: "골프", sub: "라운딩 예약", href: "/golf", icon: "golf" },
  { id: "package", label: "패키지", sub: "여행 패키지", href: "/package", icon: "package" },
  { id: "stay", label: "숙소 예약", sub: "호텔 · 풀빌라", href: "/reservation", icon: "stay" },
  { id: "car", label: "차량/픽업", sub: "렌트 & 픽업", href: "/transport", icon: "car" },
  { id: "custom", label: "맞춤여행", sub: "나만의 여행", href: "/custom-travel", icon: "custom" },
];

export type ActivityItem = {
  id: string;
  title: string;
  region: string;
  price: number;
  rating: { score: number; count: number };
  tag?: string;
  href: string;
  imageSrc: string;
};

/** lib/data/activities.ts(단일 소스)에서 상위 3건을 파생하여 중복 데이터를 없앤다. */
export const recommendedActivities: ActivityItem[] = activities.slice(0, 3).map((activity) => ({
  id: activity.id,
  title: activity.title,
  region: activity.region,
  price: activity.price,
  rating: activity.rating,
  tag: activity.id === "activity-1" ? "먼저" : undefined,
  href: `/activity/${activity.slug}`,
  imageSrc: activity.imageSrc,
}));

export type PackageItem = {
  id: string;
  title: string;
  days: string;
  price: number;
  href: string;
  imageSrc: string;
};

/** lib/data/packages.ts(단일 소스)에서 상위 2건을 파생하여 중복 데이터를 없앤다. */
export const recommendedPackages: PackageItem[] = packages.slice(0, 2).map((pkg) => ({
  id: pkg.id,
  title: pkg.title,
  days: pkg.duration,
  price: pkg.price,
  href: `/package/${pkg.slug}`,
  imageSrc: pkg.imageSrc,
}));
