import { Banknote, CloudSun, Newspaper, type LucideIcon } from "lucide-react";
import { SectionHeader } from "@/components/common/SectionHeader";
import { todayLaosItems } from "@/components/home/data";

const iconMap: Record<string, LucideIcon> = {
  news: Newspaper,
  exchange: Banknote,
  weather: CloudSun,
};

/** 오늘의 라오스 — 뉴스/환율/날씨를 동일한 카드 스타일로 표시 (design/mockup 9번.png "04 오늘의 라오스") */
function TodayLaos() {
  return (
    <section className="px-4 pt-8">
      <SectionHeader title="오늘의 라오스" />
      <p className="mt-1 text-caption2 text-muted-foreground">
        라오톡이 매일 확인하는 라오스 현지 소식과 환율·날씨
      </p>
      <div className="mt-3 grid grid-cols-3 gap-3">
        {todayLaosItems.map((item) => {
          const Icon = iconMap[item.id] ?? Banknote;
          return (
            <div
              key={item.id}
              className="flex aspect-square flex-col items-center justify-center gap-1 rounded-card bg-surface p-2 text-center shadow-[0_2px_10px_rgba(15,23,42,0.05)]"
            >
              <Icon className="size-7 text-primary" strokeWidth={1.5} />
              <p className="line-clamp-2 text-body2 font-semibold leading-snug text-foreground">
                {item.value}
              </p>
              <p className="text-caption2 text-muted-foreground">{item.sub}</p>
            </div>
          );
        })}
      </div>
      <p className="mt-2 text-caption2 text-muted-foreground">
        환율·날씨는 라오톡이 매일 확인해 전해드리며, 실시간 자동 연동 정보는 아닙니다.
      </p>
    </section>
  );
}

export { TodayLaos };
