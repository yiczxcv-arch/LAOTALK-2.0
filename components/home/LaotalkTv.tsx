import { ExternalLink, PlayCircle } from "lucide-react";
import { IMAGES } from "@/lib/data/images";

const YOUTUBE_CHANNEL_URL = "https://youtube.com/@laotalk_official";

/** 라오톡 TV — 브랜드 콘텐츠 허브 안내 섹션. 유튜브 API 연동/자동 영상 불러오기 없이 채널 링크만 제공한다. */
function LaotalkTv() {
  return (
    <section className="px-4 pt-5">
      <div className="rounded-card bg-surface p-4">
        <p className="flex items-center gap-1.5 text-title2 text-foreground">
          <span aria-hidden="true">🎥</span>
          라오톡 TV
        </p>
        <p className="mt-1 text-body2 text-foreground">라오스를 가장 생생하게 만나는 방법</p>
        <p className="mt-1 text-caption2 text-muted-foreground">
          최신 영상으로 여행·골프·맛집·생활 정보를 확인하세요.
        </p>

        <div className="relative mt-3 aspect-video overflow-hidden rounded-card">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src={IMAGES.tubing}
            alt=""
            aria-hidden="true"
            className="size-full object-cover"
            loading="lazy"
          />
          <div className="absolute inset-0 flex items-center justify-center bg-black/20">
            <PlayCircle
              className="size-14 text-white drop-shadow-[0_2px_6px_rgba(0,0,0,0.5)]"
              strokeWidth={1.25}
            />
          </div>
        </div>

        <a
          href={YOUTUBE_CHANNEL_URL}
          target="_blank"
          rel="noopener noreferrer"
          className="mt-4 inline-flex h-14 w-full items-center justify-center gap-2 rounded-button bg-primary px-6 text-button text-primary-foreground shadow-[0_4px_12px_rgba(37,99,235,0.25)] transition-[background-color,transform] duration-150 hover:bg-primary-hover active:scale-[0.98] active:bg-primary-hover"
        >
          유튜브 채널 바로가기
          <ExternalLink className="size-5" />
        </a>
      </div>
    </section>
  );
}

export { LaotalkTv };
