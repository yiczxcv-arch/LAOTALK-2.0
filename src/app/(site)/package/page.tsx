"use client";

import { useMemo, useState } from "react";
import { FilterTabs } from "@/components/common/FilterTabs";
import { ListCard } from "@/components/common/ListCard";
import { Pagination } from "@/components/common/Pagination";
import { packages, packageDurations, type PackageDuration } from "@/lib/data/packages";

type FilterValue = "all" | PackageDuration;

const PAGE_SIZE = 5;

const filterOptions: { label: string; value: FilterValue }[] = [
  { label: "전체", value: "all" },
  ...packageDurations.map((duration) => ({ label: duration, value: duration as FilterValue })),
];

/** PACKAGE 목록 페이지 (docs/02_BLUEPRINT.md #6 PACKAGE · design/wireframe 7번.png "07 PACKAGE(목록)") */
export default function PackageListPage() {
  const [filter, setFilter] = useState<FilterValue>("all");
  const [page, setPage] = useState(1);

  const filtered = useMemo(
    () => (filter === "all" ? packages : packages.filter((p) => p.duration === filter)),
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
        <h1 className="text-title1">패키지</h1>
        <p className="mt-1 text-body1 font-medium text-white/85">
          여행자에게 인기있는 라오스 패키지 상품을 확인하세요
        </p>
      </section>

      <section className="px-4 pt-5">
        <FilterTabs options={filterOptions} value={filter} onChange={handleFilterChange} />
      </section>

      <section className="flex flex-col gap-3 px-4 pt-5">
        {paged.map((pkg) => (
          <ListCard
            key={pkg.id}
            href={`/package/${pkg.slug}`}
            title={pkg.title}
            price={pkg.price}
            imageSrc={pkg.imageSrc}
            region={pkg.duration}
          />
        ))}
      </section>

      <div className="pt-5">
        <Pagination page={page} totalPages={totalPages} onChange={setPage} />
      </div>
    </div>
  );
}
