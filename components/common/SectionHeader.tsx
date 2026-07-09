import Link from "next/link";
import { ChevronRight } from "lucide-react";
import { cn } from "@/lib/utils";

type SectionHeaderProps = {
  title: string;
  href?: string;
  className?: string;
};

/** 섹션 타이틀 + '더보기' 링크 (design/mockup 9번.png 오늘의 라오스/추천 액티비티/추천 패키지) */
function SectionHeader({ title, href, className }: SectionHeaderProps) {
  return (
    <div className={cn("flex items-center justify-between", className)}>
      <h2 className="text-title2 text-foreground">{title}</h2>
      {href && (
        <Link
          href={href}
          className="flex items-center gap-0.5 text-caption2 text-muted-foreground transition-colors hover:text-foreground"
        >
          더보기
          <ChevronRight className="size-4" />
        </Link>
      )}
    </div>
  );
}

export { SectionHeader };
