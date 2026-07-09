import { SectionHeader } from "@/components/common/SectionHeader";
import { Card } from "@/components/common/Card";
import { recommendedPackages } from "@/components/home/data";

/** 추천 패키지 가로 스크롤 목록 (design/mockup 9번.png "07 추천 패키지") */
function RecommendedPackages() {
  return (
    <section className="pt-6">
      <div className="px-4">
        <SectionHeader title="추천 패키지" href="/package" />
      </div>
      <div className="mt-3 flex gap-3 overflow-x-auto px-4 pb-1">
        {recommendedPackages.map((pkg) => (
          <Card
            key={pkg.id}
            href={pkg.href}
            title={pkg.title}
            price={pkg.price}
            imageSrc={pkg.imageSrc}
            tag={{ label: pkg.days, variant: "teal" }}
            showFavorite={false}
            className="w-[190px] shrink-0"
          />
        ))}
      </div>
    </section>
  );
}

export { RecommendedPackages };
