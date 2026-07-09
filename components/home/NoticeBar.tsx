import Link from "next/link";
import { ChevronRight, Megaphone } from "lucide-react";
import { notice } from "@/components/home/data";

/** 공지/알림 영역 (design/mockup 9번.png "03 공지/알림 영역") */
function NoticeBar() {
  return (
    <div className="px-4 pt-5">
      <Link
        href={notice.href}
        className="flex items-center gap-2 rounded-input border border-border bg-surface px-4 py-3 transition-transform active:scale-[0.99]"
      >
        <span className="flex items-center gap-1 text-body2 font-semibold text-primary">
          <Megaphone className="size-4" />
          공지
        </span>
        <span className="flex-1 truncate text-body2 text-foreground">{notice.text}</span>
        <ChevronRight className="size-4 shrink-0 text-muted-foreground" />
      </Link>
    </div>
  );
}

export { NoticeBar };
