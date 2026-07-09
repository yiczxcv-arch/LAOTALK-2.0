import Link from "next/link";
import { ImagePlaceholder } from "@/components/common/ImagePlaceholder";
import { Rating } from "@/components/common/Rating";
import { Price } from "@/components/common/Price";
import { cn } from "@/lib/utils";

type ListCardProps = {
  href: string;
  title: string;
  price: number;
  imageSrc?: string;
  region?: string;
  rating?: { score: number; count?: number };
  className?: string;
};

/** 리스트형 카드 — 썸네일 + 제목 + 평점 + 가격 (design/wireframe 7번.png · mockup 8번.png "ACTIVITY 목록") */
function ListCard({ href, title, price, imageSrc, region, rating, className }: ListCardProps) {
  return (
    <Link
      href={href}
      className={cn(
        "flex cursor-pointer items-center gap-3 rounded-card bg-card px-3 py-1.5 shadow-[0_2px_10px_rgba(15,23,42,0.06)] ring-1 ring-black/5 transition-[box-shadow,transform] duration-200 ease-out hover:-translate-y-0.5 hover:shadow-[0_8px_20px_rgba(15,23,42,0.12)] active:translate-y-0 active:shadow-[0_2px_8px_rgba(15,23,42,0.08)]",
        className,
      )}
    >
      <div className="relative size-24 shrink-0 overflow-hidden rounded-card bg-surface">
        {imageSrc ? (
          // eslint-disable-next-line @next/next/no-img-element
          <img src={imageSrc} alt={title} className="size-full object-cover" loading="lazy" />
        ) : (
          <ImagePlaceholder ratio="1:1" />
        )}
      </div>

      <div className="flex min-w-0 flex-1 items-center justify-between gap-3">
        <div className="flex min-w-0 flex-col justify-center gap-1">
          <p className="line-clamp-1 text-title2 leading-tight text-foreground">{title}</p>
          <div className="flex min-w-0 items-center gap-1.5 text-caption2 text-muted-foreground">
            {region && <span className="truncate">{region}</span>}
            {region && rating && <span aria-hidden="true">·</span>}
            {rating && <Rating score={rating.score} count={rating.count} />}
          </div>
        </div>

        <Price amount={price} className="shrink-0" />
      </div>
    </Link>
  );
}

export { ListCard };
