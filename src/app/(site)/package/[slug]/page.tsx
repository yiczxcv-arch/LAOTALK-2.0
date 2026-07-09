import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { Bed, Car, Sparkles, Utensils, type LucideIcon } from "lucide-react";
import { DetailHeader } from "@/components/layout/DetailHeader";
import { ImageSlider } from "@/components/common/ImageSlider";
import { Tag } from "@/components/common/Tag";
import { Price } from "@/components/common/Price";
import { PrimaryButton } from "@/components/common/PrimaryButton";
import { packages, getPackageBySlug, type IncludedItem } from "@/lib/data/packages";

const includedIconMap: Record<IncludedItem["icon"], LucideIcon> = {
  bed: Bed,
  car: Car,
  sparkles: Sparkles,
  utensils: Utensils,
};

type PackageDetailPageProps = {
  params: Promise<{ slug: string }>;
};

export function generateStaticParams() {
  return packages.map((pkg) => ({ slug: pkg.slug }));
}

export async function generateMetadata({ params }: PackageDetailPageProps): Promise<Metadata> {
  const { slug } = await params;
  const pkg = getPackageBySlug(slug);
  return {
    title: pkg ? `${pkg.title} | LAOTALK` : "패키지 | LAOTALK",
    description: pkg?.description,
  };
}

/** PACKAGE 상세 페이지 (docs/02_BLUEPRINT.md #6 PACKAGE · design/wireframe 7번.png "07 PACKAGE(상세)") */
export default async function PackageDetailPage({ params }: PackageDetailPageProps) {
  const { slug } = await params;
  const pkg = getPackageBySlug(slug);

  if (!pkg) {
    notFound();
  }

  return (
    <div className="pb-8">
      <DetailHeader />

      <ImageSlider images={pkg.images} alt={pkg.title} />

      <div className="px-4 pt-4">
        <h1 className="text-title1 text-foreground">{pkg.title}</h1>

        <section className="mt-3">
          <div className="flex flex-wrap gap-1.5">
            <Tag variant="teal">{pkg.duration}</Tag>
            {pkg.tags.map((tag) => (
              <Tag key={tag} variant="outline">
                {tag}
              </Tag>
            ))}
          </div>
          <Price
            amount={pkg.price}
            suffix={`/ ${pkg.priceUnit}`}
            className="mt-2 text-title2"
          />
        </section>

        <hr className="my-5 border-border" />

        <section>
          <h2 className="text-title2 text-foreground">패키지 소개</h2>
          <p className="mt-2 text-body2 leading-relaxed text-foreground">{pkg.description}</p>
        </section>

        <section className="mt-6">
          <h2 className="text-title2 text-foreground">포함 사항</h2>
          <div className="mt-3 grid grid-cols-4 gap-3">
            {pkg.included.map((item) => {
              const Icon = includedIconMap[item.icon];
              return (
                <div
                  key={item.label}
                  className="flex flex-col items-center gap-1 rounded-card bg-surface p-3 text-center"
                >
                  <Icon className="size-6 text-primary" strokeWidth={1.75} />
                  <p className="text-caption2 text-muted-foreground">{item.label}</p>
                </div>
              );
            })}
          </div>
        </section>

        <section className="mt-6">
          <h2 className="text-title2 text-foreground">일정</h2>
          <div className="mt-3 flex flex-col gap-3">
            {pkg.itinerary.map((day) => (
              <div key={day.day} className="rounded-card bg-surface p-4">
                <Tag variant="primary">{`DAY ${day.day}`}</Tag>
                <p className="mt-2 text-body1 text-foreground">{day.title}</p>
                <p className="mt-1 text-body2 text-muted-foreground">{day.description}</p>
              </div>
            ))}
          </div>
        </section>

        <PrimaryButton href={`/reservation?type=package&slug=${pkg.slug}`} className="mt-8">
          예약하기
        </PrimaryButton>
      </div>
    </div>
  );
}
