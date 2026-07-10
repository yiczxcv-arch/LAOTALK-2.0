import { SectionHeader } from "@/components/common/SectionHeader";
import { Card } from "@/components/common/Card";
import { VideoPreviewButton } from "@/components/common/VideoPreviewButton";
import { stays } from "@/lib/data/stay";
import { getPreviewVideo } from "@/lib/data/previewVideos";

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
          const reservationHref = `/reservation?type=stay&slug=${stay.slug}`;
          const video = getPreviewVideo(stay.id);
          return (
            <Card
              key={stay.id}
              href={reservationHref}
              title={stay.title}
              description={stay.description}
              price={stay.price}
              imageSrc={stay.imageSrc}
              tag={{ label: stay.typeLabel, variant: "teal" }}
              showFavorite={false}
              previewAction={
                <VideoPreviewButton
                  youtubeId={video?.youtubeId}
                  title={video?.title ?? stay.title}
                  reservationHref={reservationHref}
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
