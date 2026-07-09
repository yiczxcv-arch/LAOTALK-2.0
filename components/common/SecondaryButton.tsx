import { type ButtonHTMLAttributes, forwardRef } from "react";
import Link from "next/link";
import { cn } from "@/lib/utils";

const secondaryButtonClass =
  "inline-flex h-14 w-full items-center justify-center gap-2 rounded-button border-[1.5px] border-primary bg-background px-6 text-button text-primary transition-colors hover:bg-surface active:bg-surface disabled:pointer-events-none disabled:opacity-50";

type SecondaryButtonProps = ButtonHTMLAttributes<HTMLButtonElement> & {
  href?: string;
};

/** docs/03_DESIGN_SYSTEM.md #6 버튼 — Secondary: 흰 배경, 파란 테두리, Radius 12px, 높이 52px */
const SecondaryButton = forwardRef<HTMLButtonElement, SecondaryButtonProps>(
  ({ className, href, ...props }, ref) => {
    if (href) {
      return (
        <Link href={href} className={cn(secondaryButtonClass, className)}>
          {props.children}
        </Link>
      );
    }
    return <button ref={ref} className={cn(secondaryButtonClass, className)} {...props} />;
  },
);
SecondaryButton.displayName = "SecondaryButton";

export { SecondaryButton };
