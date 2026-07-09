"use client";

import { useRouter } from "next/navigation";
import { Bookmark, ChevronLeft, Share } from "lucide-react";

type DetailHeaderProps = {
  onBookmark?: () => void;
  onShare?: () => void;
};

/** 상세 페이지 상단 헤더 — 뒤로가기 + 북마크 + 공유 (design/wireframe 7번.png "03 ACTIVITY(상세)") */
function DetailHeader({ onBookmark, onShare }: DetailHeaderProps) {
  const router = useRouter();

  return (
    <header className="sticky top-0 z-50 border-b border-border/70 bg-background/95 shadow-[0_1px_0_rgba(15,23,42,0.04),0_4px_12px_rgba(15,23,42,0.05)] backdrop-blur-sm">
      <div className="mx-auto flex h-14 max-w-[1200px] items-center justify-between px-4">
        <button
          type="button"
          aria-label="뒤로 가기"
          onClick={() => router.back()}
          className="text-foreground"
        >
          <ChevronLeft className="size-6" />
        </button>

        <div className="flex items-center gap-4">
          <button type="button" aria-label="북마크" onClick={onBookmark} className="text-foreground">
            <Bookmark className="size-[22px]" />
          </button>
          <button type="button" aria-label="공유" onClick={onShare} className="text-foreground">
            <Share className="size-[22px]" />
          </button>
        </div>
      </div>
    </header>
  );
}

export { DetailHeader };
