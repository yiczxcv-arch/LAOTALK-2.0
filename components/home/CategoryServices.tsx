import Link from "next/link";
import { Car, Compass, Flag, Hotel, Package, Sparkles, type LucideIcon } from "lucide-react";
import { categoryServices, type CategoryService } from "@/components/home/data";

const iconMap: Record<CategoryService["icon"], LucideIcon> = {
  activity: Compass,
  golf: Flag,
  package: Package,
  stay: Hotel,
  car: Car,
  custom: Sparkles,
};

/** 카테고리 서비스 6가지 (design/mockup 9번.png "05 카테고리 서비스") */
function CategoryServices() {
  return (
    <section className="px-4 pt-5">
      <h2 className="text-title2 text-foreground">카테고리 서비스</h2>
      <div className="mt-3 grid grid-cols-3 gap-x-3 gap-y-5">
        {categoryServices.map((item) => {
          const Icon = iconMap[item.icon];
          return (
            <Link
              key={item.id}
              href={item.href}
              className="flex flex-col items-center justify-center gap-1.5 text-center transition-[opacity,transform] duration-150 active:scale-95 active:opacity-70"
            >
              <span className="flex size-12 items-center justify-center rounded-full bg-surface">
                <Icon className="size-6 text-primary" strokeWidth={1.75} />
              </span>
              <span className="whitespace-nowrap text-body2 font-semibold text-foreground">
                {item.label}
              </span>
              <span className="whitespace-nowrap text-caption2 text-muted-foreground">
                {item.sub}
              </span>
            </Link>
          );
        })}
      </div>
    </section>
  );
}

export { CategoryServices };
