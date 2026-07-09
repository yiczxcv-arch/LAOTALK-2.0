import { type InputHTMLAttributes, forwardRef } from "react";
import { Check } from "lucide-react";
import { cn } from "@/lib/utils";

type CheckboxProps = InputHTMLAttributes<HTMLInputElement> & {
  label: string;
};

/** 동의 체크박스 — 개인정보 수집 및 이용 동의 등에 사용 */
const Checkbox = forwardRef<HTMLInputElement, CheckboxProps>(
  ({ label, id, className, ...props }, ref) => {
    const fieldId = id ?? props.name;
    return (
      <label htmlFor={fieldId} className="flex cursor-pointer items-center gap-2">
        <span className="relative flex size-5 shrink-0 items-center justify-center">
          <input
            ref={ref}
            id={fieldId}
            type="checkbox"
            className={cn(
              "peer size-5 shrink-0 appearance-none rounded-[6px] border border-input bg-background transition-colors checked:border-primary checked:bg-primary focus:outline-none focus:ring-2 focus:ring-primary/20",
              className,
            )}
            {...props}
          />
          <Check className="pointer-events-none absolute size-3.5 text-primary-foreground opacity-0 transition-opacity peer-checked:opacity-100" />
        </span>
        <span className="text-body2 text-foreground">{label}</span>
      </label>
    );
  },
);
Checkbox.displayName = "Checkbox";

export { Checkbox };
