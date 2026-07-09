import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { Flag, Star, Target, TrendingUp, type LucideIcon } from "lucide-react";
import { DetailHeader } from "@/components/layout/DetailHeader";
import { ImageSlider } from "@/components/common/ImageSlider";
import { Tag } from "@/components/common/Tag";
import { Rating } from "@/components/common/Rating";
import { Price } from "@/components/common/Price";
import { PrimaryButton } from "@/components/common/PrimaryButton";
import { golfCourses, getGolfCourseBySlug } from "@/lib/data/golf";

type GolfDetailPageProps = {
  params: Promise<{ slug: string }>;
};

export function generateStaticParams() {
  return golfCourses.map((course) => ({ slug: course.slug }));
}

export async function generateMetadata({ params }: GolfDetailPageProps): Promise<Metadata> {
  const { slug } = await params;
  const course = getGolfCourseBySlug(slug);
  const title = course ? `${course.title} | LAOTALK` : "골프 | LAOTALK";
  return {
    title,
    description: course?.description,
    alternates: { canonical: `/golf/${slug}` },
    openGraph: {
      title,
      description: course?.description,
      url: `/golf/${slug}`,
      images: course ? [{ url: course.imageSrc, width: 1200, height: 900, alt: course.title }] : undefined,
    },
    twitter: {
      card: "summary_large_image",
      title,
      description: course?.description,
      images: course ? [course.imageSrc] : undefined,
    },
  };
}

/** GOLF 상세 페이지 (docs/02_BLUEPRINT.md #5 GOLF · design/wireframe 7번.png "06 GOLF(상세)") */
export default async function GolfDetailPage({ params }: GolfDetailPageProps) {
  const { slug } = await params;
  const course = getGolfCourseBySlug(slug);

  if (!course) {
    notFound();
  }

  const courseInfoItems: { icon: LucideIcon; label: string; value: string }[] = [
    { icon: Flag, label: "홀 수", value: `${course.courseInfo.holes}홀` },
    { icon: Target, label: "파", value: `${course.courseInfo.par}` },
    { icon: TrendingUp, label: "슬로프", value: `${course.courseInfo.slope}` },
    { icon: Star, label: "난이도", value: "★".repeat(course.courseInfo.difficulty) },
  ];

  return (
    <div className="pb-8">
      <DetailHeader />

      <ImageSlider images={course.images} alt={course.title} />

      <div className="px-4 pt-4">
        <h1 className="text-title1 text-foreground">{course.title}</h1>

        <div className="mt-2 flex flex-wrap gap-1.5">
          {course.tags.map((tag) => (
            <Tag key={tag} variant="outline">
              {tag}
            </Tag>
          ))}
        </div>

        <div className="mt-3 flex items-center gap-2">
          <Rating score={course.rating.score} count={course.rating.count} />
        </div>

        <Price
          amount={course.price}
          suffix={`/ ${course.priceUnit}`}
          className="mt-2 text-title2"
        />

        <hr className="my-5 border-border" />

        <section>
          <h2 className="text-title2 text-foreground">골프장 소개</h2>
          <p className="mt-2 text-body2 leading-relaxed text-foreground">{course.description}</p>
        </section>

        <section className="mt-8">
          <h2 className="text-title2 text-foreground">코스 정보</h2>
          <div className="mt-3 grid grid-cols-2 gap-3">
            {courseInfoItems.map((item) => {
              const Icon = item.icon;
              return (
                <div
                  key={item.label}
                  className="flex flex-col items-center gap-1 rounded-card bg-surface p-3 text-center shadow-[0_2px_10px_rgba(15,23,42,0.05)]"
                >
                  <Icon className="size-6 text-primary" strokeWidth={1.75} />
                  <p className="text-caption2 text-muted-foreground">{item.label}</p>
                  <p className="text-body2 font-semibold text-foreground">{item.value}</p>
                </div>
              );
            })}
          </div>
        </section>

        <PrimaryButton href={`/reservation?type=golf&slug=${course.slug}`} className="mt-8">
          예약하기
        </PrimaryButton>
      </div>
    </div>
  );
}
