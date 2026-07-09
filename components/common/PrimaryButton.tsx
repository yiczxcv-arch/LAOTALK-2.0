import { type ButtonHTMLAttributes, forwardRef } from "react";
import Link from "next/link";
import { cn } from "@/lib/utils";

const primaryButtonClass =
  "inline-flex h-14 w-full items-center justify-center gap-2 rounded-button bg-primary px-6 text-button text-primary-foreground shadow-[0_4px_12px_rgba(37,99,235,0.25)] transition-[background-color,transform] duration-150 hover:bg-primary-hover active:scale-[0.98] active:bg-primary-hover disabled:pointer-events-none disabled:opacity-50";

type PrimaryButtonProps = ButtonHTMLAttributes<HTMLButtonElement> & {
  href?: string;
};

/** docs/03_DESIGN_SYSTEM.md #6 버튼 — Primary: 파란색 배경, 흰 글씨, Radius 12px, 높이 52px */
const PrimaryButton = forwardRef<HTMLButtonElement, PrimaryButtonProps>(
  ({ className, href, ...props }, ref) => {
    if (href) {
      return (
        <Link href={href} className={cn(primaryButtonClass, className)}>
          {props.children}
        </Link>
      );
    }
    return <button ref={ref} className={cn(primaryButtonClass, className)} {...props} />;
  },
);
PrimaryButton.displayName = "PrimaryButton";

export { PrimaryButton };
