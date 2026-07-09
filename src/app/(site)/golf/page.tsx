"use client";

import { useMemo, useState } from "react";
import { FilterTabs } from "@/components/common/FilterTabs";
import { ListCard } from "@/components/common/ListCard";
import { Pagination } from "@/components/common/Pagination";
import { golfCourses, golfRegions, type GolfRegion } from "@/lib/data/golf";

type FilterValue = "all" | GolfRegion;

const PAGE_SIZE = 5;

const filterOptions: { label: string; value: FilterValue }[] = [
  { label: "전체", value: "all" },
  ...golfRegions.map((region) => ({ label: region, value: region as FilterValue })),
];

/** GOLF 목록 페이지 (docs/02_BLUEPRINT.md #5 GOLF · design/wireframe 7번.png "05 GOLF(목록)") */
export default function GolfListPage() {
  const [filter, setFilter] = useState<FilterValue>("all");
  const [page, setPage] = useState(1);

  const filtered = useMemo(
    () => (filter === "all" ? golfCourses : golfCourses.filter((c) => c.region === filter)),
    [filter],
  );

  const totalPages = Math.max(1, Math.ceil(filtered.length / PAGE_SIZE));
  const paged = filtered.slice((page - 1) * PAGE_SIZE, page * PAGE_SIZE);

  function handleFilterChange(value: FilterValue) {
    setFilter(value);
    setPage(1);
  }

  return (
    <div className="mx-auto max-w-[1200px] pb-8">
      <section className="bg-primary px-4 pb-5 pt-6 text-white">
        <h1 className="text-title1">골프</h1>
        <p className="mt-1 text-body1 font-medium text-white/85">
          라오스의 아름다운 골프 코스를 확인하고 예약하세요
        </p>
      </section>

      <section className="px-4 pt-6">
        <FilterTabs options={filterOptions} value={filter} onChange={handleFilterChange} />
      </section>

      <section className="flex flex-col gap-3 px-4 pt-6">
        {paged.map((course) => (
          <ListCard
            key={course.id}
            href={`/golf/${course.slug}`}
            title={course.title}
            price={course.price}
            imageSrc={course.imageSrc}
            region={course.region}
            rating={course.rating}
          />
        ))}
      </section>

      <div className="pt-6">
        <Pagination page={page} totalPages={totalPages} onChange={setPage} />
      </div>
    </div>
  );
}
