import { Compass, Flag, Home, Luggage, Sparkles, type LucideIcon } from "lucide-react";

export type NavItem = {
  label: string;
  href: string;
  icon: LucideIcon;
};

/** 하단 내비게이션 5탭 (design/mockup 9번.png "10 하단 네비게이션") */
export const bottomNavItems: NavItem[] = [
  { label: "홈", href: "/", icon: Home },
  { label: "액티비티", href: "/activity", icon: Compass },
  { label: "골프", href: "/golf", icon: Flag },
  { label: "패키지", href: "/package", icon: Luggage },
  { label: "맞춤여행", href: "/custom-travel", icon: Sparkles },
];

/** 헤더 메뉴 전체 사이트맵 (docs/02_BLUEPRINT.md #1 사이트맵) */
export const siteMenuItems: { label: string; href: string }[] = [
  { label: "HOME", href: "/" },
  { label: "액티비티", href: "/activity" },
  { label: "골프", href: "/golf" },
  { label: "패키지", href: "/package" },
  { label: "맞춤여행", href: "/custom-travel" },
  { label: "예약 문의", href: "/reservation" },
];
