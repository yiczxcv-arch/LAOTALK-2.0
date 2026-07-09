import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { Car, Check, Clock, Users, Utensils, type LucideIcon } from "lucide-react";
import { DetailHeader } from "@/components/layout/DetailHeader";
import { ImageSlider } from "@/components/common/ImageSlider";
import { Tag } from "@/components/common/Tag";
import { Rating } from "@/components/common/Rating";
import { Price } from "@/components/common/Price";
import { PrimaryButton } from "@/components/common/PrimaryButton";
import { activities, getActivityBySlug, type IncludedItem } from "@/lib/data/activities";

const includedIconMap: Record<IncludedItem["icon"], LucideIcon> = {
  clock: Clock,
  car: Car,
  users: Users,
  utensils: Utensils,
};

type ActivityDetailPageProps = {
  params: Promise<{ slug: string }>;
};

export function generateStaticParams() {
  return activities.map((activity) => ({ slug: activity.slug }));
}

export async function generateMetadata({
  params,
}: ActivityDetailPageProps): Promise<Metadata> {
  const { slug } = await params;
  const activity = getActivityBySlug(slug);
  return {
    title: activity ? `${activity.title} | LAOTALK` : "액티비티 | LAOTALK",
    description: activity?.description,
  };
}

/** ACTIVITY 상세 페이지 (docs/02_BLUEPRINT.md #4 ACTIVITY · design/wireframe 7번.png "03 ACTIVITY(상세)") */
export default async function ActivityDetailPage({ params }: ActivityDetailPageProps) {
  const { slug } = await params;
  const activity = getActivityBySlug(slug);

  if (!activity) {
    notFound();
  }

  return (
    <div className="pb-8">
      <DetailHeader />

      <ImageSlider images={activity.images} alt={activity.title} />

      <div className="px-4 pt-4">
        <h1 className="text-title1 text-foreground">{activity.title}</h1>

        <div className="mt-2 flex flex-wrap gap-1.5">
          {activity.tags.map((tag) => (
            <Tag key={tag} variant="outline">
              {tag}
            </Tag>
          ))}
        </div>

        <div className="mt-3 flex items-center gap-2">
          <Rating score={activity.rating.score} count={activity.rating.count} />
          <span className="text-caption2 text-muted-foreground">
            예약 {activity.reservationCount.toLocaleString("ko-KR")}건
          </span>
        </div>

        <Price
          amount={activity.price}
          suffix={`/ ${activity.priceUnit}`}
          className="mt-2 text-title2"
        />

        <hr className="my-5 border-border" />

        <section>
          <h2 className="text-title2 text-foreground">상품 소개</h2>
          <p className="mt-2 text-body2 leading-relaxed text-foreground">{activity.description}</p>
        </section>

        <section className="mt-6">
          <h2 className="text-title2 text-foreground">포함 사항</h2>
          <div className="mt-3 grid grid-cols-3 gap-3">
            {activity.included.map((item) => {
              const Icon = includedIconMap[item.icon];
              return (
                <div
                  key={item.label}
                  className="flex flex-col items-center gap-1 rounded-card bg-surface p-3 text-center"
                >
                  <Icon className="size-6 text-primary" strokeWidth={1.75} />
                  <p className="text-caption2 text-muted-foreground">{item.label}</p>
                  <p className="text-body2 font-semibold text-foreground">{item.value}</p>
                </div>
              );
            })}
          </div>
        </section>

        <section className="mt-6">
          <h2 className="text-title2 text-foreground">이용 안내</h2>
          <ul className="mt-3 flex flex-col gap-2">
            {activity.usageNotes.map((note) => (
              <li key={note} className="flex items-start gap-2 text-body2 text-foreground">
                <Check className="mt-0.5 size-4 shrink-0 text-primary" />
                <span>{note}</span>
              </li>
            ))}
          </ul>
        </section>

        <PrimaryButton href={`/reservation?type=activity&slug=${activity.slug}`} className="mt-8">
          예약하기
        </PrimaryButton>
      </div>
    </div>
  );
}
