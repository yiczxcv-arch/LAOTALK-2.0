import { SectionHeader } from "@/components/common/SectionHeader";
import { Card } from "@/components/common/Card";
import { VideoPreviewButton } from "@/components/common/VideoPreviewButton";
import { stays, type StayType } from "@/lib/data/stay";
import { extractYoutubeVideoId } from "@/lib/youtube";

const typeLabelMap: Record<StayType, string> = {
  hotel: "호텔",
  "pool-villa": "풀빌라",
};

/** 추천 숙소 가로 스크롤 목록 — 호텔·풀빌라 2개 유형만 제공 (리조트 미포함) */
function RecommendedStay() {
  return (
    <section className="pt-8">
      <div className="px-4">
        <SectionHeader title="추천 숙소" href="/reservation" />
        <p className="mt-1 text-caption2 text-muted-foreground">
          편안한 휴식부터 프라이빗한 여행까지
        </p>
      </div>
      <div className="mt-3 flex gap-3 overflow-x-auto px-4 pb-1">
        {stays.map((stay) => {
          const youtubeId = stay.videoUrl ? (extractYoutubeVideoId(stay.videoUrl) ?? undefined) : undefined;
          return (
            <Card
              key={stay.id}
              href={stay.reservationHref}
              title={stay.title}
              description={stay.description}
              price={null}
              priceLabel={stay.priceLabel}
              imageSrc={stay.imageSrc}
              tag={{ label: typeLabelMap[stay.type], variant: "teal" }}
              showFavorite={false}
              previewAction={
                <VideoPreviewButton
                  youtubeId={youtubeId}
                  title={stay.title}
                  reservationHref={stay.reservationHref}
                />
              }
              className="w-[190px] shrink-0"
            />
          );
        })}
      </div>
    </section>
  );
}

export { RecommendedStay };
