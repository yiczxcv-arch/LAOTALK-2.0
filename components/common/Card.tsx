import Link from "next/link";
import { Heart } from "lucide-react";
import { ImagePlaceholder } from "@/components/common/ImagePlaceholder";
import { Rating } from "@/components/common/Rating";
import { Price } from "@/components/common/Price";
import { Tag } from "@/components/common/Tag";
import { cn } from "@/lib/utils";

type CardTag = {
  label: string;
  variant?: "primary" | "teal" | "brand" | "outline";
};

type CardProps = {
  href: string;
  title: string;
  price: number;
  imageSrc?: string;
  tag?: CardTag;
  rating?: { score: number; count?: number };
  showFavorite?: boolean;
  className?: string;
};

/** 공통 카드 — 이미지(4:3) + 배지 + 제목 + 평점 + 가격 (design/mockup 9번.png 컴포넌트 상세: radius16, shadow light) */
function Card({
  href,
  title,
  price,
  imageSrc,
  tag,
  rating,
  showFavorite = true,
  className,
}: CardProps) {
  return (
    <Link
      href={href}
      className={cn(
        "group block overflow-hidden rounded-card bg-card shadow-[0_6px_18px_rgba(15,23,42,0.1)] ring-1 ring-black/5 transition-all duration-200 hover:-translate-y-0.5 hover:shadow-[0_12px_24px_rgba(15,23,42,0.16)] active:translate-y-0 active:shadow-[0_4px_12px_rgba(15,23,42,0.1)]",
        className,
      )}
    >
      <div className="relative aspect-[4/3] w-full overflow-hidden bg-surface">
        {imageSrc ? (
          // eslint-disable-next-line @next/next/no-img-element
          <img
            src={imageSrc}
            alt={title}
            className="size-full object-cover transition-transform duration-300 group-hover:scale-110"
            loading="lazy"
          />
        ) : (
          <ImagePlaceholder ratio="4:3" />
        )}
        <div className="absolute inset-0 bg-gradient-to-t from-black/10 via-transparent to-transparent" />
        {tag && (
          <Tag
            variant={tag.variant ?? "primary"}
            className="absolute left-2 top-2 shadow-sm"
          >
            {tag.label}
          </Tag>
        )}
        {showFavorite && (
          <span className="absolute right-2 top-2 flex size-7 items-center justify-center rounded-full bg-background/85 shadow-sm backdrop-blur-sm">
            <Heart className="size-4 text-foreground" />
          </span>
        )}
      </div>
      <div className="flex flex-col gap-1 p-3">
        <p className="truncate text-body1 text-foreground">{title}</p>
        {rating && <Rating score={rating.score} count={rating.count} />}
        <Price amount={price} />
      </div>
    </Link>
  );
}

export { Card };
