import type { MetadataRoute } from "next";
import { activities } from "@/lib/data/activities";
import { golfCourses } from "@/lib/data/golf";
import { packages } from "@/lib/data/packages";

const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL ?? "http://localhost:3000";

/**
 * sitemap.xml — 공개 페이지만 포함한다 (관리자 영역 제외).
 * ACTIVITY/GOLF/PACKAGE 상세 경로는 각 데이터 소스(lib/data/*.ts)의 slug를 기준으로 자동 생성되므로,
 * 상품이 추가/삭제되면 별도 수정 없이 함께 갱신된다.
 */
export default function sitemap(): MetadataRoute.Sitemap {
  const staticRoutes: MetadataRoute.Sitemap = [
    { url: `${SITE_URL}/`, priority: 1 },
    { url: `${SITE_URL}/activity`, priority: 0.8 },
    { url: `${SITE_URL}/golf`, priority: 0.8 },
    { url: `${SITE_URL}/package`, priority: 0.8 },
    { url: `${SITE_URL}/custom-travel`, priority: 0.6 },
    { url: `${SITE_URL}/partners`, priority: 0.6 },
    { url: `${SITE_URL}/why-laotalk`, priority: 0.6 },
    { url: `${SITE_URL}/reservation`, priority: 0.5 },
  ];

  const activityRoutes: MetadataRoute.Sitemap = activities.map((activity) => ({
    url: `${SITE_URL}/activity/${activity.slug}`,
    priority: 0.7,
  }));

  const golfRoutes: MetadataRoute.Sitemap = golfCourses.map((course) => ({
    url: `${SITE_URL}/golf/${course.slug}`,
    priority: 0.7,
  }));

  const packageRoutes: MetadataRoute.Sitemap = packages.map((pkg) => ({
    url: `${SITE_URL}/package/${pkg.slug}`,
    priority: 0.7,
  }));

  return [...staticRoutes, ...activityRoutes, ...golfRoutes, ...packageRoutes];
}
