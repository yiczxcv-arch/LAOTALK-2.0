/**
 * 이미지 경로 단일 소스 (1차 교체 대상)
 *
 * 현재는 자체 제작 SVG 더미 이미지를 가리키고 있으며, 실제 촬영 사진(jpg/webp/png 등)이
 * 준비되면 이 파일의 경로 값만 교체하면 된다 — lib/data/*.ts, components/home/data.ts 등
 * 여러 파일에 흩어져 있던 동일 이미지 참조를 이 상수 하나로 모아 교체 지점을 단일화했다.
 *
 * 주의: 실제 사진 파일이 준비되기 전까지는 아래 경로를 변경하지 않는다(깨진 이미지 방지).
 * 확장자를 바꿀 경우, public/images/ 안에 해당 파일을 실제로 넣은 뒤 이 값만 수정하면 된다.
 */
export const IMAGES = {
  heroPhaThatLuang: "/images/hero-pha-that-luang.svg",
  golfCourse: "/images/golf-course.svg",
  blueLagoon: "/images/blue-lagoon.svg",
  ziplineCave: "/images/zipline-cave.svg",
  kuangSiWaterfall: "/images/kuang-si-waterfall.svg",
} as const;
