import Link from "next/link";
import { ChevronRight } from "lucide-react";
import { Tag } from "@/components/common/Tag";
import { VideoPreviewButton } from "@/components/common/VideoPreviewButton";
import { IMAGES } from "@/lib/data/images";
import { getPreviewVideo } from "@/lib/data/previewVideos";

const PREMIUM_GOLF_VIDEO_KEY = "golf-premium";
const PREMIUM_GOLF_RESERVATION_HREF = "/reservation?type=golf&slug=lakeview-golf-club";

/**
 * 프리미엄 골프 쇼케이스 — 카테고리 그리드의 "골프" 항목과 달리
 * 카드 나열이 아닌 단독 풀블리드 배너로 골프를 액티비티와 다른 역할(프리미엄 여행)로 보여준다.
 */
function PremiumGolf() {
  const video = getPreviewVideo(PREMIUM_GOLF_VIDEO_KEY);

  return (
    <section className="px-4 pt-10">
      <Link
        href="/golf"
        className="group relative block h-[220px] overflow-hidden rounded-[20px] shadow-[0_12px_28px_rgba(17,24,39,0.22)] sm:h-[260px] lg:h-[300px]"
      >
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src={IMAGES.golfCourse}
          alt=""
          aria-hidden="true"
          className="absolute inset-0 size-full scale-[1.04] object-cover transition-transform duration-500 group-hover:scale-110"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/25 to-black/10" />
        <div className="absolute inset-0 ring-1 ring-inset ring-white/10" />

        <Tag variant="brand" className="absolute left-5 top-5 tracking-wide">
          PREMIUM GOLF
        </Tag>

        <VideoPreviewButton
          youtubeId={video?.youtubeId}
          title={video?.title ?? "라오스 프리미엄 골프"}
          reservationHref={PREMIUM_GOLF_RESERVATION_HREF}
          className="absolute right-5 top-5"
        />

        <div className="absolute inset-x-0 bottom-6 px-6 text-white">
          <h2 className="text-title1 drop-shadow-[0_2px_6px_rgba(0,0,0,0.45)]">
            라오스 프리미엄 골프
          </h2>
          <p className="mt-2 text-body1 font-medium text-white/90 drop-shadow-[0_1px_4px_rgba(0,0,0,0.4)]">
            최고의 코스에서 완성하는 특별한 라운딩
          </p>
          <span className="mt-4 flex items-center gap-1 text-body2 font-semibold text-white">
            골프 코스 보기
            <ChevronRight className="size-4" />
          </span>
        </div>
      </Link>
    </section>
  );
}

export { PremiumGolf };
