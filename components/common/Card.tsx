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
  description?: string;
  price: number | null;
  priceLabel?: string;
  imageSrc?: string;
  tag?: CardTag;
  rating?: { score: number; count?: number };
  showFavorite?: boolean;
  previewAction?: React.ReactNode;
  className?: string;
};

/** 공통 카드 — 이미지(4:3) + 배지 + 제목 + (선택)한줄설명 + 평점 + 가격 (design/mockup 9번.png 컴포넌트 상세: radius16, shadow light) */
function Card({
  href,
  title,
  description,
  price,
  priceLabel,
  imageSrc,
  tag,
  rating,
  showFavorite = true,
  previewAction,
  className,
}: CardProps) {
  return (
    <Link
      href={href}
      className={cn(
        "group block overflow-hidden rounded-card bg-card shadow-[0_4px_16px_rgba(15,23,42,0.07)] ring-1 ring-black/5 transition-all duration-300 ease-out hover:-translate-y-1 hover:shadow-[0_18px_34px_rgba(15,23,42,0.14)] active:translate-y-0 active:shadow-[0_4px_12px_rgba(15,23,42,0.08)]",
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
        {previewAction && <div className="absolute bottom-2 right-2">{previewAction}</div>}
      </div>
      <div className="flex flex-col gap-1 p-3">
        <p className="truncate text-body1 text-foreground">{title}</p>
        {description && (
          <p className="line-clamp-1 text-caption2 text-muted-foreground">{description}</p>
        )}
        {rating && <Rating score={rating.score} count={rating.count} />}
        {priceLabel ? (
          <p className="text-body2 font-bold text-foreground">{priceLabel}</p>
        ) : price !== null ? (
          <Price amount={price} />
        ) : (
          <p className="text-body2 font-bold text-foreground">예약 문의</p>
        )}
      </div>
    </Link>
  );
}

export { Card };
