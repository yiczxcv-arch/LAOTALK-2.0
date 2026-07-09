import type { Metadata } from "next";
import { ReservationForm } from "@/components/reservation/ReservationForm";
import { activities, getActivityBySlug } from "@/lib/data/activities";
import { getGolfCourseBySlug } from "@/lib/data/golf";
import { getPackageBySlug } from "@/lib/data/packages";
import type { ProductType, SelectedProduct } from "@/lib/types/inquiry";

export const metadata: Metadata = {
  title: "예약 문의 | LAOTALK",
  description: "원하시는 상품을 확인하고 예약 정보를 입력해주세요",
};

type ReservationPageProps = {
  searchParams: Promise<{ type?: string; slug?: string }>;
};

function resolveProduct(type?: string, slug?: string): SelectedProduct {
  if (type === "activity" && slug) {
    const activity = getActivityBySlug(slug);
    if (activity) {
      return {
        type: "activity",
        slug: activity.slug,
        title: activity.title,
        price: activity.price,
        imageSrc: activity.imageSrc,
      };
    }
  }
  if (type === "golf" && slug) {
    const course = getGolfCourseBySlug(slug);
    if (course) {
      return {
        type: "golf",
        slug: course.slug,
        title: course.title,
        price: course.price,
        imageSrc: course.imageSrc,
      };
    }
  }
  if (type === "package" && slug) {
    const pkg = getPackageBySlug(slug);
    if (pkg) {
      return {
        type: "package",
        slug: pkg.slug,
        title: pkg.title,
        price: pkg.price,
        imageSrc: pkg.imageSrc,
      };
    }
  }

  const fallback = activities[0];
  return {
    type: "activity" as ProductType,
    slug: fallback.slug,
    title: fallback.title,
    price: fallback.price,
    imageSrc: fallback.imageSrc,
  };
}

/** 예약 문의 페이지 (docs/02_BLUEPRINT.md #8 RESERVATION · design/wireframe 7번.png "04 예약하기") */
export default async function ReservationPage({ searchParams }: ReservationPageProps) {
  const { type, slug } = await searchParams;
  const product = resolveProduct(type, slug);

  return <ReservationForm product={product} />;
}
