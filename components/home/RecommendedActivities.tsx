import { SectionHeader } from "@/components/common/SectionHeader";
import { Card } from "@/components/common/Card";
import { VideoPreviewButton } from "@/components/common/VideoPreviewButton";
import { recommendedActivities } from "@/components/home/data";
import { getPreviewVideo } from "@/lib/data/previewVideos";

/** 추천 액티비티 가로 스크롤 목록 (design/mockup 9번.png "06 추천 액티비티") */
function RecommendedActivities() {
  return (
    <section className="pt-8">
      <div className="px-4">
        <SectionHeader title="추천 액티비티" href="/activity" />
      </div>
      <div className="mt-3 flex gap-3 overflow-x-auto px-4 pb-1">
        {recommendedActivities.map((activity) => {
          const video = getPreviewVideo(activity.id);
          return (
            <Card
              key={activity.id}
              href={activity.href}
              title={activity.title}
              price={activity.price}
              imageSrc={activity.imageSrc}
              rating={activity.rating}
              tag={activity.tag ? { label: activity.tag, variant: "primary" } : undefined}
              previewAction={
                <VideoPreviewButton
                  youtubeId={video?.youtubeId}
                  title={video?.title ?? activity.title}
                  reservationHref={`/reservation?type=activity&slug=${activity.slug}`}
                />
              }
              className="w-[150px] shrink-0"
            />
          );
        })}
      </div>
    </section>
  );
}

export { RecommendedActivities };
