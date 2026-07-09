"use client";

import { useState } from "react";
import Link from "next/link";
import { Menu, Search, X } from "lucide-react";
import { siteMenuItems } from "@/lib/nav";
import { PrimaryButton } from "@/components/common/PrimaryButton";

/** 상단 헤더 — 로고 + 검색 + 메뉴 (design/mockup 8번,9번.png "01 상단헤더") */
function Header() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-border/70 bg-background/95 shadow-[0_1px_0_rgba(15,23,42,0.04),0_4px_12px_rgba(15,23,42,0.05)] backdrop-blur-sm">
      <div className="mx-auto flex h-14 max-w-[1200px] items-center justify-between px-4">
        <Link href="/" className="text-title1 tracking-tight">
          <span className="text-primary">LAO</span>
          <span className="text-foreground">TALK</span>
        </Link>

        <div className="flex items-center gap-4">
          <button
            type="button"
            aria-label="검색"
            className="-m-2 p-2 text-foreground transition-opacity active:opacity-60"
          >
            <Search className="size-6" />
          </button>
          <button
            type="button"
            aria-label="메뉴"
            aria-expanded={open}
            onClick={() => setOpen((v) => !v)}
            className="-m-2 p-2 text-foreground transition-opacity active:opacity-60"
          >
            {open ? <X className="size-6" /> : <Menu className="size-6" />}
          </button>
        </div>
      </div>

      {open && (
        <div className="border-t border-border bg-background px-4 py-4">
          <nav>
            <ul className="flex flex-col gap-1">
              {siteMenuItems.map((item) => (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    onClick={() => setOpen(false)}
                    className="block rounded-md px-2 py-3 text-body1 text-foreground transition-colors hover:bg-surface"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>
          <PrimaryButton href="/reservation" className="mt-3" onClick={() => setOpen(false)}>
            카카오 예약 문의
          </PrimaryButton>
        </div>
      )}
    </header>
  );
}

export { Header };
