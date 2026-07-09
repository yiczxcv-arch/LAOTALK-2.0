import { CalendarCheck } from "lucide-react";
import { PrimaryButton } from "@/components/common/PrimaryButton";

/** 하단 예약 CTA (design/mockup 9번.png "09 하단 예약 CTA") */
function ReservationCta() {
  return (
    <section className="px-4 pt-5">
      <PrimaryButton href="/reservation">
        <CalendarCheck className="size-5" />
        예약하기
      </PrimaryButton>
      <p className="mt-2 text-center text-caption2 text-muted-foreground">
        숙소 · 골프 · 액티비티 · 차량 · 패키지
      </p>
    </section>
  );
}

export { ReservationCta };
