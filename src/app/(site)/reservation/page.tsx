import type { Metadata } from "next";
import { ReservationForm } from "@/components/reservation/ReservationForm";
import { getActivityBySlug } from "@/lib/data/activities";
import { getGolfCourseBySlug } from "@/lib/data/golf";
import { getPackageBySlug } from "@/lib/data/packages";
import { getStayBySlug } from "@/lib/data/stay";
import {
  travelPlanDurationOptions,
  travelPlanPeopleOptions,
  travelPlanStyleOptions,
  travelPlanStayOptions,
  travelPlanBudgetOptions,
  type SelectedProduct,
} from "@/lib/types/inquiry";

export const metadata: Metadata = {
  title: "예약 문의 | LAOTALK",
  description: "원하시는 상품을 확인하고 예약 정보를 입력해주세요",
  // 쿼리(type/slug) 유무와 무관하게 대표 URL로 정규화 — 상품별 중복 색인 방지
  alternates: { canonical: "/reservation" },
  openGraph: {
    title: "예약 문의 | LAOTALK",
    description: "원하시는 상품을 확인하고 예약 정보를 입력해주세요",
    url: "/reservation",
  },
  twitter: {
    card: "summary_large_image",
    title: "예약 문의 | LAOTALK",
    description: "원하시는 상품을 확인하고 예약 정보를 입력해주세요",
  },
};

type ReservationSearchParams = {
  type?: string;
  slug?: string;
  duration?: string;
  people?: string;
  style?: string;
  stay?: string;
  budget?: string;
};

type ReservationPageProps = {
  searchParams: Promise<ReservationSearchParams>;
};

function findLabel<T extends string>(
  options: readonly { label: string; value: T }[],
  value: string | undefined,
): string | null {
  if (!value) return null;
  return options.find((option) => option.value === value)?.label ?? null;
}

/** 쿼리로 상품/여행 설계 값을 찾지 못하면 null을 반환한다 — 임의 폴백 없이 안전하게 빈 상태로 보여준다 */
function resolveProduct(params: ReservationSearchParams): SelectedProduct | null {
  const { type, slug } = params;

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
  if (type === "stay" && slug) {
    const stay = getStayBySlug(slug);
    if (stay) {
      return {
        type: "stay",
        slug: stay.id,
        title: stay.title,
        price: null,
        imageSrc: stay.imageSrc,
        variantLabel: stay.type === "hotel" ? "호텔" : "풀빌라",
      };
    }
  }
  if (type === "custom") {
    const duration = findLabel(travelPlanDurationOptions, params.duration);
    const people = findLabel(travelPlanPeopleOptions, params.people);
    const style = findLabel(travelPlanStyleOptions, params.style);
    const stay = findLabel(travelPlanStayOptions, params.stay);
    const budget = findLabel(travelPlanBudgetOptions, params.budget);
    if (duration && people && style && stay && budget) {
      return {
        type: "custom",
        slug: "custom",
        title: "맞춤여행 설계",
        price: null,
        customDetails: { duration, people, style, stay, budget },
      };
    }
  }

  return null;
}

/** 예약 문의 페이지 (docs/02_BLUEPRINT.md #8 RESERVATION · design/wireframe 7번.png "04 예약하기") */
export default async function ReservationPage({ searchParams }: ReservationPageProps) {
  const params = await searchParams;
  const product = resolveProduct(params);

  return <ReservationForm product={product} />;
}
