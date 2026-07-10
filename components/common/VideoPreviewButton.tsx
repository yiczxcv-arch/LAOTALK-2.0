"use client";

import { useState } from "react";
import { Dialog } from "@base-ui/react/dialog";
import { Play, X } from "lucide-react";
import { PrimaryButton } from "@/components/common/PrimaryButton";
import { cn } from "@/lib/utils";

type VideoPreviewButtonProps = {
  youtubeId?: string;
  title: string;
  reservationHref: string;
  className?: string;
};

/**
 * 카드 위에 얹는 "미리보기" 배지 + 유튜브 임베드 모달(Base UI Dialog, modal 스크롤 잠금 기본 적용).
 * youtubeId가 없으면 아무것도 렌더링하지 않는다 — 영상 URL은 lib/data/previewVideos.ts에서만 관리한다.
 *
 * 카드 전체가 <Link>이므로 트리거는 실제 <button>이 아닌 role="button" span으로 만들어
 * <a> 안에 인터랙티브 요소가 중첩되는 문제를 피하고, 클릭 시 preventDefault/stopPropagation으로
 * 카드 자체의 이동(Link)과 충돌하지 않게 한다. 모달 내부 클릭도 Portal을 통해 React 트리를 타고
 * 카드 Link까지 버블링될 수 있어 Popup/Backdrop에서도 stopPropagation으로 막는다.
 */
function VideoPreviewButton({ youtubeId, title, reservationHref, className }: VideoPreviewButtonProps) {
  const [open, setOpen] = useState(false);

  if (!youtubeId) return null;

  function handleOpen(event: React.SyntheticEvent) {
    event.preventDefault();
    event.stopPropagation();
    setOpen(true);
  }

  return (
    <>
      <span
        role="button"
        tabIndex={0}
        aria-haspopup="dialog"
        onClick={handleOpen}
        onKeyDown={(event) => {
          if (event.key === "Enter" || event.key === " ") handleOpen(event);
        }}
        className={cn(
          "flex items-center gap-1 rounded-full bg-black/55 px-2.5 py-1.5 text-caption2 font-semibold text-white backdrop-blur-sm transition-colors hover:bg-black/70 active:bg-black/70",
          className,
        )}
      >
        <Play className="size-3.5 fill-white" strokeWidth={0} />
        미리보기
      </span>

      <Dialog.Root open={open} onOpenChange={setOpen} modal>
        <Dialog.Portal>
          <Dialog.Backdrop
            onClick={(event) => event.stopPropagation()}
            className="fixed inset-0 z-[60] bg-black/70"
          />
          <Dialog.Popup
            onClick={(event) => event.stopPropagation()}
            className="fixed left-1/2 top-1/2 z-[61] w-[calc(100%-32px)] max-w-md -translate-x-1/2 -translate-y-1/2 rounded-card bg-background p-4 shadow-[0_20px_50px_rgba(15,23,42,0.35)] outline-none"
          >
            <div className="flex items-center justify-between gap-3">
              <Dialog.Title className="truncate text-title2 text-foreground">{title}</Dialog.Title>
              <Dialog.Close
                aria-label="닫기"
                className="-m-1 flex size-8 shrink-0 items-center justify-center rounded-full text-muted-foreground transition-colors hover:bg-surface hover:text-foreground"
              >
                <X className="size-5" />
              </Dialog.Close>
            </div>

            <div className="mt-3 aspect-video w-full overflow-hidden rounded-card bg-surface">
              <iframe
                className="size-full"
                src={`https://www.youtube.com/embed/${youtubeId}`}
                title={title}
                allow="encrypted-media; picture-in-picture"
                allowFullScreen
              />
            </div>

            <PrimaryButton href={reservationHref} className="mt-4">
              예약 문의
            </PrimaryButton>
          </Dialog.Popup>
        </Dialog.Portal>
      </Dialog.Root>
    </>
  );
}

export { VideoPreviewButton };
