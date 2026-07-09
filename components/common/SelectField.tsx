import { type SelectHTMLAttributes, forwardRef } from "react";
import { ChevronDown } from "lucide-react";
import { cn } from "@/lib/utils";

type SelectFieldProps = SelectHTMLAttributes<HTMLSelectElement> & {
  label: string;
  placeholder?: string;
  options: { label: string; value: string }[];
};

/** 입력폼 — label + select, radius 12px, 높이 52px (docs/03_DESIGN_SYSTEM.md #10 입력폼) */
const SelectField = forwardRef<HTMLSelectElement, SelectFieldProps>(
  ({ label, id, placeholder = "선택해주세요", options, className, ...props }, ref) => {
    const fieldId = id ?? props.name;
    return (
      <div className="flex flex-col gap-1.5">
        <label htmlFor={fieldId} className="text-body2 font-medium text-foreground">
          {label}
        </label>
        <div className="relative">
          <select
            ref={ref}
            id={fieldId}
            defaultValue=""
            className={cn(
              "h-[52px] w-full appearance-none rounded-input border border-input bg-background px-4 pr-10 text-body2 text-foreground transition-colors focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/20",
              className,
            )}
            {...props}
          >
            <option value="" disabled>
              {placeholder}
            </option>
            {options.map((option) => (
              <option key={option.value} value={option.value}>
                {option.label}
              </option>
            ))}
          </select>
          <ChevronDown className="pointer-events-none absolute right-4 top-1/2 size-4 -translate-y-1/2 text-muted-foreground" />
        </div>
      </div>
    );
  },
);
SelectField.displayName = "SelectField";

export { SelectField };
