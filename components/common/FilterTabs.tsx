"use client";

import { cn } from "@/lib/utils";

type FilterTabsProps<T extends string> = {
  options: { label: string; value: T }[];
  value: T;
  onChange: (value: T) => void;
  className?: string;
};

/** 카테고리/지역 필터 탭 — 가로 스크롤 pill (design/mockup 8번.png "ACTIVITY 목록" 상단 필터) */
function FilterTabs<T extends string>({ options, value, onChange, className }: FilterTabsProps<T>) {
  return (
    <div className={cn("flex gap-2 overflow-x-auto", className)}>
      {options.map((option) => {
        const active = option.value === value;
        return (
          <button
            key={option.value}
            type="button"
            aria-pressed={active}
            onClick={() => onChange(option.value)}
            className={cn(
              "flex h-9 shrink-0 items-center justify-center rounded-full px-4 text-body2 font-medium transition-colors active:opacity-70",
              active
                ? "bg-primary text-primary-foreground shadow-[0_2px_6px_rgba(37,99,235,0.3)]"
                : "bg-surface text-muted-foreground hover:text-foreground",
            )}
          >
            {option.label}
          </button>
        );
      })}
    </div>
  );
}

export { FilterTabs };
