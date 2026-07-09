"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { LayoutDashboard, MessageSquare, PhoneCall, Shield } from "lucide-react";
import { cn } from "@/lib/utils";

const navItems = [
  { label: "대시보드", href: "/admin", icon: LayoutDashboard },
  { label: "예약 관리", href: "/admin/reservations", icon: PhoneCall },
  { label: "문의 관리", href: "/admin/inquiries", icon: MessageSquare },
];

/** 관리자 공통 상단 바 — 로고 + 메뉴 (design/wireframe 7번.png A2~A6 관리자 화면 상단) */
function AdminNav() {
  const pathname = usePathname();

  return (
    <header className="sticky top-0 z-50 border-b border-border/70 bg-background/95 shadow-[0_1px_0_rgba(15,23,42,0.04),0_4px_12px_rgba(15,23,42,0.05)] backdrop-blur-sm">
      <div className="mx-auto flex h-14 max-w-[1200px] items-center justify-between px-4">
        <Link href="/admin" className="flex items-center gap-1.5 text-title2">
          <Shield className="size-5 text-primary" />
          <span className="text-primary">LAO</span>TALK
          <span className="ml-1 text-caption2 font-normal text-muted-foreground">ADMIN</span>
        </Link>

        <nav className="flex items-center gap-1">
          {navItems.map((item) => {
            const active =
              item.href === "/admin" ? pathname === "/admin" : pathname?.startsWith(item.href);
            const Icon = item.icon;
            return (
              <Link
                key={item.href}
                href={item.href}
                className={cn(
                  "flex items-center gap-1.5 rounded-full px-3 py-1.5 text-body2 font-medium transition-colors active:opacity-70",
                  active ? "bg-primary text-primary-foreground" : "text-muted-foreground hover:bg-surface",
                )}
              >
                <Icon className="size-4" />
                <span className="hidden sm:inline">{item.label}</span>
              </Link>
            );
          })}
        </nav>
      </div>
    </header>
  );
}

export { AdminNav };
