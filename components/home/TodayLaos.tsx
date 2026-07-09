import { Banknote, CloudSun, type LucideIcon } from "lucide-react";
import { SectionHeader } from "@/components/common/SectionHeader";
import { todayLaosItems } from "@/components/home/data";

const iconMap: Record<string, LucideIcon> = {
  exchange: Banknote,
  weather: CloudSun,
};

/** 오늘의 라오스 — 뉴스 썸네일 + 환율/날씨 정보 카드 (design/mockup 9번.png "04 오늘의 라오스") */
function TodayLaos() {
  return (
    <section className="px-4 pt-5">
      <SectionHeader title="오늘의 라오스" href="/news" />
      <div className="mt-3 grid grid-cols-3 gap-3">
        {todayLaosItems.map((item) => {
          if (item.imageSrc) {
            return (
              <div
                key={item.id}
                className="relative aspect-square overflow-hidden rounded-card bg-surface"
              >
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src={item.imageSrc}
                  alt={item.label}
                  className="size-full object-cover"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-black/10 to-transparent" />
                <p className="absolute inset-x-2 bottom-2 line-clamp-2 text-caption2 leading-snug text-white">
                  {item.value}
                </p>
              </div>
            );
          }

          const Icon = iconMap[item.id] ?? Banknote;
          return (
            <div
              key={item.id}
              className="flex aspect-square flex-col items-center justify-center gap-1 rounded-card bg-surface p-2 text-center"
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
    </section>
  );
}

export { TodayLaos };
