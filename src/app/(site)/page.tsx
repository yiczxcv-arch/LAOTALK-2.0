import type { Metadata } from "next";
import { HeroBanner } from "@/components/home/HeroBanner";
import { NoticeBar } from "@/components/home/NoticeBar";
import { LaotalkTv } from "@/components/home/LaotalkTv";
import { TodayLaos } from "@/components/home/TodayLaos";
import { CategoryServices } from "@/components/home/CategoryServices";
import { RecommendedStay } from "@/components/home/RecommendedStay";
import { PremiumGolf } from "@/components/home/PremiumGolf";
import { RecommendedActivities } from "@/components/home/RecommendedActivities";
import { RecommendedPackages } from "@/components/home/RecommendedPackages";
import { CustomTravelCta } from "@/components/home/CustomTravelCta";
import { ReservationCta } from "@/components/home/ReservationCta";

export const metadata: Metadata = {
  alternates: { canonical: "/" },
};

/**
 * HOME 페이지 (docs/02_BLUEPRINT.md #3 HOME 구성 · design/mockup 9번.png)
 * Header / Footer / BottomNav 는 app/layout.tsx 에서 공통 렌더링한다.
 */
export default function Home() {
  return (
    <div className="mx-auto max-w-[1200px] pb-4">
      <HeroBanner />
      <NoticeBar />
      <LaotalkTv />
      <TodayLaos />
      <CategoryServices />
      <RecommendedStay />
      <PremiumGolf />
      <RecommendedActivities />
      <RecommendedPackages />
      <CustomTravelCta />
      <ReservationCta />
    </div>
  );
}
