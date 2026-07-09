import { ImageIcon } from "lucide-react";
import { cn } from "@/lib/utils";

type ImagePlaceholderProps = {
  className?: string;
  ratio?: "4:3" | "16:9" | "1:1";
};

const ratioClass: Record<NonNullable<ImagePlaceholderProps["ratio"]>, string> = {
  "4:3": "aspect-[4/3]",
  "16:9": "aspect-video",
  "1:1": "aspect-square",
};

/** 실제 사진 자산 연동 전까지 사용하는 이미지 플레이스홀더 (design/7번.png 와이어프레임 스타일) */
function ImagePlaceholder({ className, ratio = "4:3" }: ImagePlaceholderProps) {
  return (
    <div
      className={cn(
        "flex items-center justify-center bg-surface text-muted-foreground",
        ratioClass[ratio],
        className,
      )}
    >
      <ImageIcon className="size-8 opacity-40" strokeWidth={1.5} />
    </div>
  );
}

export { ImagePlaceholder };
