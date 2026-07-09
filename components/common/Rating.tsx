import { Star } from "lucide-react";
import { cn } from "@/lib/utils";

type RatingProps = {
  score: number;
  count?: number;
  className?: string;
};

/** 카드 하단 평점 표기 — "★ 4.8 (120)" (design/mockup 9번.png 카드 스펙) */
function Rating({ score, count, className }: RatingProps) {
  return (
    <div className={cn("flex items-center gap-1 text-caption2 text-foreground", className)}>
      <Star className="size-3.5 fill-brand text-brand" />
      <span className="font-semibold">{score.toFixed(1)}</span>
      {typeof count === "number" && <span className="text-muted-foreground">({count})</span>}
    </div>
  );
}

export { Rating };
