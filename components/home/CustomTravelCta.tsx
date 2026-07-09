import Link from "next/link";
import { ChevronRight, Luggage } from "lucide-react";

/** 맞춤여행 CTA 배너 (design/mockup 9번.png "08 맞춤여행 CTA배너") */
function CustomTravelCta() {
  return (
    <section className="px-4 pt-5">
      <Link
        href="/custom-travel"
        className="flex items-center justify-between gap-4 rounded-card bg-primary-hover px-5 py-5 text-white shadow-[0_4px_12px_rgba(30,64,175,0.3)] transition-transform hover:-translate-y-0.5 active:translate-y-0 active:scale-[0.99]"
      >
        <div className="min-w-0">
          <p className="text-title2 leading-snug">
            내 스타일대로 만드는
            <br />
            특별한 여행
          </p>
          <span className="mt-2 flex items-center gap-0.5 text-body2 text-white/80">
            맞춤여행 상담하기
            <ChevronRight className="size-4" />
          </span>
        </div>
        <Luggage className="size-10 shrink-0 text-white/70" strokeWidth={1.5} />
      </Link>
    </section>
  );
}

export { CustomTravelCta };
