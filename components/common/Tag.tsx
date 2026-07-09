import { type HTMLAttributes } from "react";
import { cn } from "@/lib/utils";

type TagVariant = "primary" | "teal" | "brand" | "outline";

type TagProps = HTMLAttributes<HTMLSpanElement> & {
  variant?: TagVariant;
};

const variantClass: Record<TagVariant, string> = {
  primary: "bg-primary text-primary-foreground",
  teal: "bg-teal text-teal-foreground",
  brand: "bg-brand text-brand-foreground",
  outline: "border border-border bg-background text-foreground",
};

/** 카드 배지 / 필터 태그 — 기간(3박4일), 카테고리(먼저) 등 (design/mockup 8번.png) */
function Tag({ variant = "primary", className, ...props }: TagProps) {
  return (
    <span
      className={cn(
        "inline-flex items-center rounded-md px-2 py-1 text-caption2 font-semibold",
        variantClass[variant],
        className,
      )}
      {...props}
    />
  );
}

export { Tag };
