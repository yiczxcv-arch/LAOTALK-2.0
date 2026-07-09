import type { Metadata } from "next";
import { Leaf, Link2, ShieldCheck, TrendingUp, type LucideIcon } from "lucide-react";
import { SectionHeader } from "@/components/common/SectionHeader";
import { IMAGES } from "@/lib/data/images";

const title = "왜 LAOTALK를 만들었을까요 | LAOTALK";
const description =
  "좋은 여행은 좋은 정보와 좋은 사람에게서 시작된다고 믿었습니다. LAOTALK이 만들어진 이유를 소개합니다.";

export const metadata: Metadata = {
  title,
  description,
  alternates: { canonical: "/why-laotalk" },
  openGraph: {
    title,
    description,
    url: "/why-laotalk",
    images: [{ url: IMAGES.hotAirBalloon, width: 1200, height: 900, alt: "Why LAOTALK" }],
  },
  twitter: {
    card: "summary_large_image",
    title,
    description,
    images: [IMAGES.hotAirBalloon],
  },
};

type ValueItem = {
  id: string;
  label: string;
  desc: string;
  icon: LucideIcon;
};

const values: ValueItem[] = [
  { id: "trust", label: "신뢰", desc: "검증된 정보로 믿을 수 있는 여행을 만듭니다", icon: ShieldCheck },
  { id: "connect", label: "연결", desc: "여행객과 현지 파트너를 잇습니다", icon: Link2 },
  { id: "growth", label: "성장", desc: "함께 성장하는 관계를 지향합니다", icon: TrendingUp },
  { id: "sustainability", label: "지속가능성", desc: "오래도록 이어질 수 있는 방식을 고민합니다", icon: Leaf },
];

/** 브랜드 스토리 페이지 "Why LAOTALK" — 왜 LAOTALK를 만들었는지에 대한 철학을 전달하는 정적 콘텐츠 페이지 */
export default function WhyLaotalkPage() {
  return (
    <div className="mx-auto max-w-[1200px] pb-8">
      <section className="px-4 pt-4">
        <div className="relative h-[320px] overflow-hidden rounded-[20px] shadow-[0_12px_28px_rgba(17,24,39,0.22)] sm:h-[380px] lg:h-[440px]">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src={IMAGES.hotAirBalloon}
            alt="라오스 대표 전경"
            className="absolute inset-0 size-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-black/10" />
          <div className="absolute inset-x-0 bottom-8 px-6 text-white">
            <p className="text-caption2 font-medium tracking-wide text-white/70">Why LAOTALK</p>
            <h1 className="mt-2 text-title1 text-white">왜 LAOTALK를 만들었을까요?</h1>
            <p className="mt-3 whitespace-pre-line text-body1 text-white/90">
              좋은 여행은{"\n"}좋은 정보와{"\n"}좋은 사람에게서 시작된다고 믿었습니다.
            </p>
          </div>
        </div>
      </section>

      <section className="px-4 pt-12">
        <h2 className="text-title2 text-foreground">라오스에는</h2>
        <div className="mt-4 flex flex-col gap-3">
          <div className="rounded-card bg-surface p-6 shadow-[0_2px_10px_rgba(15,23,42,0.05)]">
            <p className="whitespace-pre-line text-body1 leading-relaxed text-foreground">
              많은 좋은 장소가 있습니다.{"\n"}많은 좋은 업체가 있습니다.
            </p>
          </div>
          <div className="rounded-card bg-surface p-6 shadow-[0_2px_10px_rgba(15,23,42,0.05)]">
            <p className="whitespace-pre-line text-body1 leading-relaxed text-foreground">
              하지만{"\n"}좋은 정보는 흩어져 있었고{"\n"}여행객은 무엇을 믿어야 하는지{"\n"}알기
              어려웠습니다.
            </p>
          </div>
        </div>
      </section>

      <section className="px-4 pt-12 text-center">
        <h2 className="whitespace-pre-line text-title1 text-foreground">
          그래서{"\n"}LAOTALK를 만들었습니다.
        </h2>
        <div className="mt-6 flex flex-col items-center gap-3">
          <p className="whitespace-pre-line text-body1 text-foreground">
            여행객에게는{"\n"}더 좋은 정보를.
          </p>
          <p className="whitespace-pre-line text-body1 text-foreground">
            현지 파트너에게는{"\n"}더 많은 기회를.
          </p>
          <p className="mt-2 text-body2 text-muted-foreground">
            콘텐츠와 플랫폼으로 서로를 연결합니다.
          </p>
        </div>
      </section>

      <section className="px-4 pt-12">
        <SectionHeader title="우리가 만드는 가치" />
        <div className="mt-4 grid grid-cols-2 gap-3">
          {values.map((value) => {
            const Icon = value.icon;
            return (
              <div
                key={value.id}
                className="flex flex-col gap-2 rounded-card bg-surface p-4 shadow-[0_2px_10px_rgba(15,23,42,0.05)]"
              >
                <Icon className="size-6 text-primary" strokeWidth={1.75} />
                <p className="text-body1 text-foreground">{value.label}</p>
                <p className="text-caption2 text-muted-foreground">{value.desc}</p>
              </div>
            );
          })}
        </div>
      </section>

      <section className="px-4 pb-2 pt-12">
        <div className="relative aspect-[4/3] w-full overflow-hidden rounded-card sm:aspect-video">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src={IMAGES.ziplineCave} alt="라오스의 자연" className="size-full object-cover" />
        </div>
        <div className="mt-6 flex flex-col items-center gap-4 text-center">
          <p className="whitespace-pre-line text-body1 leading-relaxed text-foreground">
            우리는{"\n"}단순히 예약을 받기 위해{"\n"}존재하지 않습니다.
          </p>
          <p className="whitespace-pre-line text-body2 leading-relaxed text-muted-foreground">
            라오스를 알리고,{"\n"}사람을 연결하고,{"\n"}함께 성장하는 플랫폼을{"\n"}만들고
            있습니다.
          </p>
          <p className="mt-2 text-title2 text-foreground">LAOTALK</p>
          <p className="whitespace-pre-line text-title2 text-foreground">
            라오스를 알리고,{"\n"}함께 성장합니다.
          </p>
        </div>
      </section>
    </div>
  );
}
