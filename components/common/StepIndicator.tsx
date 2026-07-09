import { Check } from "lucide-react";
import { cn } from "@/lib/utils";

type StepIndicatorProps = {
  steps: string[];
  currentStep: number;
  className?: string;
};

/** 예약 흐름 단계 표시 — ① 상품 선택 ② 정보 입력 ③ 문의 접수 완료 (design/wireframe 7번.png "04 예약하기") */
function StepIndicator({ steps, currentStep, className }: StepIndicatorProps) {
  return (
    <div className={cn("flex items-center", className)}>
      {steps.map((step, i) => {
        const stepNumber = i + 1;
        const done = stepNumber < currentStep;
        const active = stepNumber === currentStep;
        return (
          <div key={step} className="flex flex-1 items-center last:flex-none">
            <div className="flex flex-col items-center gap-1.5">
              <span
                className={cn(
                  "flex size-7 items-center justify-center rounded-full text-caption2 font-semibold transition-colors",
                  done || active
                    ? "bg-primary text-primary-foreground"
                    : "bg-surface text-muted-foreground",
                )}
              >
                {done ? <Check className="size-4" /> : stepNumber}
              </span>
              <span
                className={cn(
                  "whitespace-nowrap text-caption2 transition-colors",
                  active ? "font-semibold text-foreground" : "text-muted-foreground",
                )}
              >
                {step}
              </span>
            </div>
            {stepNumber < steps.length && (
              <div className={cn("mx-2 h-px flex-1 transition-colors", done ? "bg-primary" : "bg-border")} />
            )}
          </div>
        );
      })}
    </div>
  );
}

export { StepIndicator };
