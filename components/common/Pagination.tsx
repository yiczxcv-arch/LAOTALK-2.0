"use client";

import { ChevronLeft, ChevronRight } from "lucide-react";
import { cn } from "@/lib/utils";

type PaginationProps = {
  page: number;
  totalPages: number;
  onChange: (page: number) => void;
  className?: string;
};

/** 페이지네이션 — "< 1 2 3 4 5 >" (design/wireframe 7번.png "02 ACTIVITY(목록)") */
function Pagination({ page, totalPages, onChange, className }: PaginationProps) {
  if (totalPages <= 1) return null;

  const pages = Array.from({ length: totalPages }, (_, i) => i + 1);

  return (
    <nav className={cn("flex items-center justify-center gap-1.5", className)} aria-label="페이지 이동">
      <button
        type="button"
        aria-label="이전 페이지"
        disabled={page <= 1}
        onClick={() => onChange(page - 1)}
        className="flex size-9 shrink-0 items-center justify-center rounded-full text-muted-foreground transition-colors active:opacity-60 disabled:opacity-30"
      >
        <ChevronLeft className="size-4" />
      </button>

      {pages.map((p) => (
        <button
          key={p}
          type="button"
          aria-label={`${p}페이지`}
          aria-current={p === page ? "page" : undefined}
          onClick={() => onChange(p)}
          className={cn(
            "flex size-9 shrink-0 items-center justify-center rounded-full text-body2 transition-colors active:opacity-60",
            p === page
              ? "bg-primary font-semibold text-primary-foreground shadow-[0_2px_6px_rgba(37,99,235,0.3)]"
              : "text-muted-foreground hover:bg-surface",
          )}
        >
          {p}
        </button>
      ))}

      <button
        type="button"
        aria-label="다음 페이지"
        disabled={page >= totalPages}
        onClick={() => onChange(page + 1)}
        className="flex size-9 shrink-0 items-center justify-center rounded-full text-muted-foreground transition-colors active:opacity-60 disabled:opacity-30"
      >
        <ChevronRight className="size-4" />
      </button>
    </nav>
  );
}

export { Pagination };
