/**
 * GOLF 더미 데이터 (단일 소스)
 * docs/02_BLUEPRINT.md #10 데이터 구조(golf: id/title/course/description)를 기준으로 하되,
 * 목록·상세 UI에 필요한 필드(slug, tags, price, rating, images, courseInfo 등)를 확장했다.
 * design/wireframe 7번.png "05 GOLF(목록)" · "06 GOLF(상세)" 구조를 따른다.
 * 추후 관리자/DB 연동 시 이 타입을 API 응답 타입으로 그대로 확장하면 된다.
 */

import { IMAGES } from "@/lib/data/images";

export type GolfRegion = "비엔티안" | "방비엥" | "루앙프라방";

export type CourseInfo = {
  holes: number;
  par: number;
  slope: number;
  difficulty: number;
};

export type GolfCourse = {
  id: string;
  slug: string;
  title: string;
  region: GolfRegion;
  tags: string[];
  price: number;
  priceUnit: string;
  rating: { score: number; count: number };
  imageSrc: string;
  images: string[];
  description: string;
  courseInfo: CourseInfo;
};

export const golfCourses: GolfCourse[] = [
  {
    id: "golf-1",
    slug: "lakeview-golf-club",
    title: "레이크뷰 골프클럽",
    region: "비엔티안",
    tags: ["비엔티안", "인기", "호수뷰"],
    price: 90000,
    priceUnit: "1인",
    rating: { score: 4.6, count: 86 },
    imageSrc: IMAGES.golfLakeview,
    images: [IMAGES.golfLakeview],
    description: "호수를 끼고 펼쳐진 아름다운 코스에서 여유로운 라운딩을 즐길 수 있는 골프장입니다.",
    courseInfo: { holes: 18, par: 72, slope: 128, difficulty: 4 },
  },
  {
    id: "golf-2",
    slug: "dongvien-golf-club",
    title: "동비엔 골프클럽",
    region: "비엔티안",
    tags: ["비엔티안", "추천", "합리적가격"],
    price: 80000,
    priceUnit: "1인",
    rating: { score: 4.5, count: 72 },
    imageSrc: IMAGES.golfCourse,
    images: [IMAGES.golfCourse],
    description: "초보자부터 상급자까지 폭넓게 즐길 수 있는 평지형 코스의 골프장입니다.",
    courseInfo: { holes: 18, par: 72, slope: 120, difficulty: 3 },
  },
  {
    id: "golf-3",
    slug: "bouyang-golf-club",
    title: "부영 골프클럽",
    region: "비엔티안",
    tags: ["비엔티안", "인기", "가성비"],
    price: 70000,
    priceUnit: "1인",
    rating: { score: 4.4, count: 64 },
    imageSrc: IMAGES.golfLongvien,
    images: [IMAGES.golfLongvien],
    description: "합리적인 가격과 깔끔한 관리로 현지 교민과 여행객 모두에게 사랑받는 골프장입니다.",
    courseInfo: { holes: 18, par: 71, slope: 118, difficulty: 3 },
  },
  {
    id: "golf-4",
    slug: "vang-vieng-mountain-golf",
    title: "방비엥 마운틴 골프클럽",
    region: "방비엥",
    tags: ["방비엥", "카르스트뷰", "추천"],
    price: 95000,
    priceUnit: "1인",
    rating: { score: 4.7, count: 58 },
    imageSrc: IMAGES.golfCourse,
    images: [IMAGES.golfCourse],
    description: "카르스트 산맥을 배경으로 라운딩을 즐길 수 있는 방비엥 유일의 골프 코스입니다.",
    courseInfo: { holes: 18, par: 72, slope: 132, difficulty: 5 },
  },
  {
    id: "golf-5",
    slug: "luang-prabang-riverside-golf",
    title: "루앙프라방 리버사이드 골프클럽",
    region: "루앙프라방",
    tags: ["루앙프라방", "강변뷰", "힐링"],
    price: 85000,
    priceUnit: "1인",
    rating: { score: 4.5, count: 39 },
    imageSrc: IMAGES.golfMekong,
    images: [IMAGES.golfMekong],
    description: "메콩강을 따라 조성된 코스에서 여유롭게 라운딩을 즐길 수 있는 골프장입니다.",
    courseInfo: { holes: 9, par: 36, slope: 115, difficulty: 2 },
  },
  {
    id: "golf-6",
    slug: "vientiane-international-golf",
    title: "비엔티안 인터내셔널 골프클럽",
    region: "비엔티안",
    tags: ["비엔티안", "국제규격", "챔피언십"],
    price: 110000,
    priceUnit: "1인",
    rating: { score: 4.8, count: 47 },
    imageSrc: IMAGES.golfLongvien,
    images: [IMAGES.golfLongvien],
    description: "국제 규격을 갖춘 챔피언십 코스로, 골프 애호가들에게 인기가 높은 프리미엄 골프장입니다.",
    courseInfo: { holes: 18, par: 72, slope: 135, difficulty: 5 },
  },
];

export const golfRegions: GolfRegion[] = ["비엔티안", "방비엥", "루앙프라방"];

export function getGolfCourses(): GolfCourse[] {
  return golfCourses;
}

export function getGolfCoursesByRegion(region?: GolfRegion): GolfCourse[] {
  if (!region) return golfCourses;
  return golfCourses.filter((course) => course.region === region);
}

export function getGolfCourseBySlug(slug: string): GolfCourse | undefined {
  return golfCourses.find((course) => course.slug === slug);
}
