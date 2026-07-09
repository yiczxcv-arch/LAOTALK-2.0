import { type TextareaHTMLAttributes, forwardRef } from "react";
import { cn } from "@/lib/utils";

type TextareaFieldProps = TextareaHTMLAttributes<HTMLTextAreaElement> & {
  label: string;
};

/** 입력폼 — label + textarea, radius 12px (docs/03_DESIGN_SYSTEM.md #10 입력폼) */
const TextareaField = forwardRef<HTMLTextAreaElement, TextareaFieldProps>(
  ({ label, id, className, ...props }, ref) => {
    const fieldId = id ?? props.name;
    return (
      <div className="flex flex-col gap-1.5">
        <label htmlFor={fieldId} className="text-body2 font-medium text-foreground">
          {label}
        </label>
        <textarea
          ref={ref}
          id={fieldId}
          rows={5}
          className={cn(
            "w-full resize-none rounded-input border border-input bg-background px-4 py-3 text-body2 text-foreground transition-colors placeholder:text-muted-foreground focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/20",
            className,
          )}
          {...props}
        />
      </div>
    );
  },
);
TextareaField.displayName = "TextareaField";

export { TextareaField };
