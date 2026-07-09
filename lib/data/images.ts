/**
 * 이미지 경로 단일 소스
 *
 * lib/data/*.ts, components/home/data.ts 등 여러 파일에 흩어져 있던 동일 이미지 참조를
 * 이 상수 하나로 모아 교체 지점을 단일화했다. 실제 운영 사진(public/images/*.jpg)으로 교체 완료.
 */
export const IMAGES = {
  heroPhaThatLuang: "/images/hero-pha-that-luang.jpg",
  golfCourse: "/images/golf-course.jpg",
  golfLakeview: "/images/golf-lakeview.jpg",
  golfMekong: "/images/golf-mekong.jpg",
  blueLagoon: "/images/blue-lagoon.jpg",
  ziplineCave: "/images/zipline-cave.jpg",
  kuangSiWaterfall: "/images/kuang-si-waterfall.jpg",
  tubing: "/images/tubing.jpg",
  hotAirBalloon: "/images/hot-air-balloon.jpg",
} as const;
