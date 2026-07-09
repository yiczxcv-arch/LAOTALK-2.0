import type { Metadata } from "next";
import {
  ArrowDown,
  BadgeCheck,
  Calendar,
  Car,
  Check,
  Compass,
  Flag,
  HandHeart,
  Handshake,
  Hotel,
  Luggage,
  MapPin,
  MessageCircle,
  Repeat,
  ShoppingBag,
  Star,
  Users,
  Utensils,
  Video,
  type LucideIcon,
} from "lucide-react";
import { Tag } from "@/components/common/Tag";
import { SectionHeader } from "@/components/common/SectionHeader";
import { IMAGES } from "@/lib/data/images";

const title = "함께하는 파트너 | LAOTALK";
const description = "좋은 여행은 좋은 파트너와 함께 시작됩니다. LAOTALK이 현지 파트너와 함께 성장하는 방향을 소개합니다.";

export const metadata: Metadata = {
  title,
  description,
  alternates: { canonical: "/partners" },
  openGraph: {
    title,
    description,
    url: "/partners",
    images: [{ url: IMAGES.heroPhaThatLuang, width: 1200, height: 900, alt: "함께하는 파트너" }],
  },
  twitter: {
    card: "summary_large_image",
    title,
    description,
    images: [IMAGES.heroPhaThatLuang],
  },
};

type FieldItem = {
  id: string;
  label: string;
  desc: string;
  icon: LucideIcon;
};

const fields: FieldItem[] = [
  { id: "stay", label: "숙소", desc: "머무는 순간까지 편안하게", icon: Hotel },
  { id: "activity", label: "액티비티", desc: "라오스를 온몸으로 느끼는 시간", icon: Compass },
  { id: "golf", label: "골프", desc: "여유로운 라운딩의 즐거움", icon: Flag },
  { id: "car", label: "차량", desc: "이동도 하나의 서비스입니다", icon: Car },
  { id: "food", label: "맛집", desc: "현지의 맛을 있는 그대로", icon: Utensils },
  { id: "massage", label: "마사지", desc: "여행의 피로를 씻어내는 휴식", icon: HandHeart },
  { id: "shopping", label: "쇼핑", desc: "소소한 즐거움을 더하는 시간", icon: ShoppingBag },
  { id: "custom", label: "맞춤여행", desc: "나만의 라오스를 설계하다", icon: Luggage },
];

const standards: string[] = [
  "실제 운영 여부 확인",
  "여행객 중심 서비스",
  "합리적인 가격",
  "신뢰할 수 있는 응대",
  "지속적인 관리",
];

type FlowStep = {
  id: string;
  label: string;
  icon: LucideIcon;
};

const flowSteps: FlowStep[] = [
  { id: "traveler", label: "여행객", icon: Users },
  { id: "laotalk", label: "LAOTALK", icon: Handshake },
  { id: "partner", label: "현지 파트너", icon: MapPin },
  { id: "experience", label: "좋은 여행 경험", icon: Star },
  { id: "review", label: "후기", icon: MessageCircle },
  { id: "more-travelers", label: "더 많은 여행객", icon: Repeat },
];

type ComingSoonItem = {
  id: string;
  label: string;
  icon: LucideIcon;
};

const comingSoonItems: ComingSoonItem[] = [
  { id: "video", label: "영상 홍보", icon: Video },
  { id: "certified", label: "인증 파트너", icon: BadgeCheck },
  { id: "map", label: "여행 지도", icon: MapPin },
  { id: "reservation", label: "예약 서비스 고도화", icon: Calendar },
];

/** 브랜드 소개 페이지 "함께하는 파트너" — 업체 목록이 아닌 LAOTALK의 파트너십 철학을 소개하는 정적 콘텐츠 페이지 */
export default function PartnersPage() {
  return (
    <div className="mx-auto max-w-[1200px] pb-8">
      <section className="px-4 pt-4">
        <div className="relative h-[320px] overflow-hidden rounded-[20px] shadow-[0_12px_28px_rgba(17,24,39,0.22)] sm:h-[380px] lg:h-[440px]">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src={IMAGES.heroPhaThatLuang}
            alt="라오스 대표 전경"
            className="absolute inset-0 size-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-black/10" />
          <div className="absolute inset-x-0 bottom-8 px-6 text-white">
            <p className="text-caption2 font-medium tracking-wide text-white/70">
              Our Trusted Partners
            </p>
            <h1 className="mt-2 text-title1 text-white">함께하는 파트너</h1>
            <p className="mt-3 whitespace-pre-line text-body1 text-white/90">
              좋은 여행은{"\n"}좋은 파트너와 함께 시작됩니다.
            </p>
          </div>
        </div>
      </section>

      <section className="px-4 pt-12">
        <SectionHeader title="우리가 함께하는 분야" />
        <div className="mt-4 grid grid-cols-2 gap-3">
          {fields.map((field) => {
            const Icon = field.icon;
            return (
              <div key={field.id} className="flex flex-col gap-2 rounded-card bg-surface p-4">
                <Icon className="size-6 text-primary" strokeWidth={1.75} />
                <p className="text-body1 text-foreground">{field.label}</p>
                <p className="text-caption2 text-muted-foreground">{field.desc}</p>
              </div>
            );
          })}
        </div>
      </section>

      <section className="px-4 pt-12">
        <SectionHeader title="LAOTALK Partner Standard" />
        <p className="mt-1 text-caption2 text-muted-foreground">
          우리가 파트너를 선택하는 기준입니다
        </p>
        <div className="mt-4 flex flex-col gap-3">
          {standards.map((standard) => (
            <div key={standard} className="flex items-center gap-3 rounded-card bg-surface p-4">
              <span className="flex size-8 shrink-0 items-center justify-center rounded-full bg-primary/10">
                <Check className="size-4 text-primary" strokeWidth={2.5} />
              </span>
              <p className="text-body1 text-foreground">{standard}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="px-4 pt-12">
        <SectionHeader title="함께 성장하는 구조" />
        <div className="mt-4 flex flex-col items-center">
          {flowSteps.map((step, index) => {
            const Icon = step.icon;
            return (
              <div key={step.id} className="flex w-full flex-col items-center">
                <div className="flex w-full max-w-xs items-center gap-3 rounded-card bg-surface p-4">
                  <Icon className="size-5 shrink-0 text-primary" strokeWidth={1.75} />
                  <p className="text-body1 text-foreground">{step.label}</p>
                </div>
                {index < flowSteps.length - 1 && (
                  <ArrowDown className="my-1 size-4 text-muted-foreground" strokeWidth={1.75} />
                )}
              </div>
            );
          })}
        </div>
      </section>

      <section className="px-4 pt-12">
        <SectionHeader title="앞으로 함께 만들어갑니다" />
        <div className="mt-4 grid grid-cols-2 gap-3">
          {comingSoonItems.map((item) => {
            const Icon = item.icon;
            return (
              <div
                key={item.id}
                aria-disabled="true"
                className="flex cursor-not-allowed flex-col gap-3 rounded-card bg-surface p-4 opacity-70"
              >
                <div className="flex items-center justify-between">
                  <Icon className="size-6 text-primary" strokeWidth={1.75} />
                  <Tag variant="outline">준비중</Tag>
                </div>
                <p className="text-body1 text-foreground">{item.label}</p>
              </div>
            );
          })}
        </div>
      </section>

      <section className="px-4 pb-2 pt-12">
        <div className="relative aspect-[4/3] w-full overflow-hidden rounded-card sm:aspect-video">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src={IMAGES.kuangSiWaterfall}
            alt="라오스의 자연"
            className="size-full object-cover"
          />
        </div>
        <div className="mt-6 flex flex-col items-center gap-4 text-center">
          <p className="text-body1 leading-relaxed text-foreground">
            우리는 업체를 늘리는 것이 목표가 아닙니다.
          </p>
          <p className="whitespace-pre-line text-body2 leading-relaxed text-muted-foreground">
            여행객에게는 더 좋은 경험을,{"\n"}현지 파트너에게는 더 많은 기회를 만드는 것이{"\n"}
            LAOTALK의 목표입니다.
          </p>
          <p className="whitespace-pre-line text-title2 text-foreground">
            라오스를 알리고,{"\n"}함께 성장합니다.
          </p>
        </div>
      </section>
    </div>
  );
}
