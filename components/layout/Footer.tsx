import Link from "next/link";

/** 하단 푸터 — 회사 정보 / 카카오 문의 / 이용약관 / 개인정보처리방침 (docs/03_DESIGN_SYSTEM.md #11 공통 UI) */
function Footer() {
  return (
    <footer className="mb-16 border-t border-border bg-surface px-4 py-6 text-caption2 text-muted-foreground">
      <div className="mx-auto flex max-w-[1200px] flex-col gap-3">
        <p className="text-title2 text-foreground">
          <span className="text-primary">LAO</span>TALK
        </p>

        <div className="flex flex-wrap gap-x-3 gap-y-1.5">
          <span>회사소개</span>
          <span aria-disabled="true" className="cursor-not-allowed opacity-50">
            이용약관 (준비중)
          </span>
          <span aria-disabled="true" className="cursor-not-allowed opacity-50">
            개인정보처리방침 (준비중)
          </span>
          <Link href="/reservation" className="hover:text-foreground">
            카카오 문의
          </Link>
        </div>

        <p>© 2026 LAOTALK. All rights reserved.</p>
      </div>
    </footer>
  );
}

export { Footer };
