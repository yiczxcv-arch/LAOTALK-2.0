"use client";

import { useMemo, useState } from "react";
import { FilterTabs } from "@/components/common/FilterTabs";
import { ListCard } from "@/components/common/ListCard";
import { Pagination } from "@/components/common/Pagination";
import { activities, activityRegions, type ActivityRegion } from "@/lib/data/activities";

type FilterValue = "all" | ActivityRegion;

const PAGE_SIZE = 5;

const filterOptions: { label: string; value: FilterValue }[] = [
  { label: "전체", value: "all" },
  ...activityRegions.map((region) => ({ label: region, value: region as FilterValue })),
];

/** ACTIVITY 목록 페이지 (docs/02_BLUEPRINT.md #4 ACTIVITY · design/wireframe 7번.png "02 ACTIVITY(목록)") */
export default function ActivityListPage() {
  const [filter, setFilter] = useState<FilterValue>("all");
  const [page, setPage] = useState(1);

  const filtered = useMemo(
    () => (filter === "all" ? activities : activities.filter((a) => a.region === filter)),
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
        <h1 className="text-title1">액티비티</h1>
        <p className="mt-1 text-body1 font-medium text-white/85">
          라오스에서 즐길 수 있는 다양한 액티비티를 만나보세요
        </p>
      </section>

      <section className="px-4 pt-6">
        <FilterTabs options={filterOptions} value={filter} onChange={handleFilterChange} />
      </section>

      <section className="flex flex-col gap-3 px-4 pt-6">
        {paged.map((activity) => (
          <ListCard
            key={activity.id}
            href={`/activity/${activity.slug}`}
            title={activity.title}
            price={activity.price}
            imageSrc={activity.imageSrc}
            region={activity.region}
            rating={activity.rating}
          />
        ))}
      </section>

      <div className="pt-6">
        <Pagination page={page} totalPages={totalPages} onChange={setPage} />
      </div>
    </div>
  );
}
