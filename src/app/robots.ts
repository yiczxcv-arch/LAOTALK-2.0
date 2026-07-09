import type { MetadataRoute } from "next";

const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL ?? "http://localhost:3000";

/** robots.txt — 관리자 영역은 색인에서 제외한다 (인증 없이 접근 가능한 더미 화면이므로 노출을 막는다). */
export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: "*",
      allow: "/",
      disallow: "/admin",
    },
    sitemap: `${SITE_URL}/sitemap.xml`,
  };
}
