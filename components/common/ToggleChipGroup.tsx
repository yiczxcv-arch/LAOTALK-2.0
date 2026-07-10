"use client";

import { cn } from "@/lib/utils";

type ToggleChipGroupProps<T extends string> = {
  label: string;
  options: readonly { label: string; value: T }[];
  value: T | null;
  onChange: (value: T) => void;
};

/** 단일 선택 토글칩 그룹 — FilterTabs와 동일한 pill 스타일을 재사용하되 줄바꿈 가능한 그리드형 (드롭다운 미사용) */
function ToggleChipGroup<T extends string>({ label, options, value, onChange }: ToggleChipGroupProps<T>) {
  return (
    <fieldset className="flex flex-col gap-2">
      <legend className="text-body2 font-semibold text-foreground">{label}</legend>
      <div className="flex flex-wrap gap-2">
        {options.map((option) => {
          const active = option.value === value;
          return (
            <button
              key={option.value}
              type="button"
              aria-pressed={active}
              onClick={() => onChange(option.value)}
              className={cn(
                "flex h-10 items-center justify-center rounded-full px-4 text-body2 font-medium transition-colors active:opacity-70",
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
    </fieldset>
  );
}

export { ToggleChipGroup };
