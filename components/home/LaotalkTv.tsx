import { ExternalLink, PlayCircle } from "lucide-react";
import { laotalkTv } from "@/components/home/data";

/**
 * 라오톡 TV — 브랜드 콘텐츠 허브 안내 섹션.
 * 유튜브 API 연동/자동 영상 불러오기 없이 components/home/data.ts의 laotalkTv 값만 수동으로 노출한다.
 * 운영자는 최신 영상 교체 시 data.ts의 laotalkTv 객체만 수정하면 된다.
 */
function LaotalkTv() {
  return (
    <section className="px-4 pt-6">
      <div className="rounded-card bg-surface p-4 shadow-[0_2px_10px_rgba(15,23,42,0.05)]">
        <p className="flex items-center gap-1.5 text-title2 text-foreground">
          <span aria-hidden="true">🎥</span>
          라오톡 TV
        </p>
        <p className="mt-1 text-body2 text-foreground">{laotalkTv.videoTitle}</p>
        <p className="mt-1 text-caption2 text-muted-foreground">{laotalkTv.videoDescription}</p>
        <p className="mt-1 text-caption2 text-muted-foreground">{laotalkTv.channelHandle}</p>

        <a
          href={laotalkTv.channelUrl}
          target="_blank"
          rel="noopener noreferrer"
          aria-label="라오톡 TV 유튜브 채널에서 최신 영상 보기"
          className="group relative mt-3 block aspect-video overflow-hidden rounded-card"
        >
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src={laotalkTv.thumbnailSrc}
            alt=""
            aria-hidden="true"
            className="size-full object-cover transition-transform duration-300 group-hover:scale-105"
            loading="lazy"
          />
          <div className="absolute inset-0 flex items-center justify-center bg-black/20">
            <PlayCircle
              className="size-14 text-white drop-shadow-[0_2px_6px_rgba(0,0,0,0.5)]"
              strokeWidth={1.25}
            />
          </div>
        </a>

        <a
          href={laotalkTv.channelUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="mt-4 inline-flex h-14 w-full items-center justify-center gap-2 rounded-button bg-primary px-6 text-button text-primary-foreground shadow-[0_4px_12px_rgba(37,99,235,0.25)] transition-[background-color,transform] duration-150 hover:bg-primary-hover active:scale-[0.98] active:bg-primary-hover"
        >
          최신 영상 보러가기
          <ExternalLink className="size-5" />
        </a>
      </div>
    </section>
  );
}

export { LaotalkTv };
