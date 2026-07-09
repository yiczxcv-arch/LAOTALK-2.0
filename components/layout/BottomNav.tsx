"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { bottomNavItems } from "@/lib/nav";
import { cn } from "@/lib/utils";

/** 하단 고정 내비게이션 — 높이 64px, 활성 아이콘 Primary 색상 (design/mockup 9번.png 컴포넌트 상세) */
function BottomNav() {
  const pathname = usePathname();

  return (
    <nav className="fixed inset-x-0 bottom-0 z-40 h-16 border-t border-border/70 bg-background/95 shadow-[0_-4px_16px_rgba(15,23,42,0.08)] backdrop-blur-sm">
      <ul className="mx-auto flex h-full max-w-[1200px] items-center justify-around">
        {bottomNavItems.map((item) => {
          const active = pathname === item.href;
          const Icon = item.icon;
          return (
            <li key={item.href} className="flex-1">
              <Link
                href={item.href}
                className={cn(
                  "flex flex-col items-center justify-center gap-1 text-[11px] font-medium transition-colors active:opacity-60",
                  active ? "text-primary" : "text-[#9CA3AF]",
                )}
              >
                <Icon className="size-[22px]" strokeWidth={active ? 2.25 : 2} />
                {item.label}
              </Link>
            </li>
          );
        })}
      </ul>
    </nav>
  );
}

export { BottomNav };
