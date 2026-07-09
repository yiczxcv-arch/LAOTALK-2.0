import { type InputHTMLAttributes, forwardRef } from "react";
import { cn } from "@/lib/utils";

type TextFieldProps = InputHTMLAttributes<HTMLInputElement> & {
  label: string;
};

/** 입력폼 — label + input, radius 12px, 높이 52px (docs/03_DESIGN_SYSTEM.md #10 입력폼) */
const TextField = forwardRef<HTMLInputElement, TextFieldProps>(
  ({ label, id, className, ...props }, ref) => {
    const fieldId = id ?? props.name;
    return (
      <div className="flex flex-col gap-1.5">
        <label htmlFor={fieldId} className="text-body2 font-medium text-foreground">
          {label}
        </label>
        <input
          ref={ref}
          id={fieldId}
          className={cn(
            "h-[52px] w-full rounded-input border border-input bg-background px-4 text-body2 text-foreground transition-colors placeholder:text-muted-foreground focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/20",
            className,
          )}
          {...props}
        />
      </div>
    );
  },
);
TextField.displayName = "TextField";

export { TextField };
