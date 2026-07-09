import { cn } from "@/lib/utils";

type PriceProps = {
  amount: number;
  from?: boolean;
  suffix?: string;
  className?: string;
};

/** 가격 표기 — "₩35,000 ~" (design/mockup 8번.png 카드 가격 스펙) */
function Price({ amount, from = true, suffix, className }: PriceProps) {
  const formatted = new Intl.NumberFormat("ko-KR").format(amount);
  return (
    <p className={cn("text-body2 font-bold text-foreground", className)}>
      {"₩"}
      {formatted}
      {from && " ~"}
      {suffix && (
        <span className="ml-1 text-caption2 font-normal text-muted-foreground">{suffix}</span>
      )}
    </p>
  );
}

export { Price };
