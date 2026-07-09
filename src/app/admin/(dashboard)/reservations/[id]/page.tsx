import { notFound } from "next/navigation";
import { getReservationById, reservationRecords } from "@/lib/data/admin";
import { ReservationDetailView } from "@/components/admin/ReservationDetailView";

type ReservationDetailPageProps = {
  params: Promise<{ id: string }>;
};

export function generateStaticParams() {
  return reservationRecords.map((r) => ({ id: r.id }));
}

/** 예약 문의 상세 (docs/02_BLUEPRINT.md #9 관리자 · design/wireframe 7번.png A4) */
export default async function AdminReservationDetailPage({ params }: ReservationDetailPageProps) {
  const { id } = await params;
  const record = getReservationById(id);

  if (!record) {
    notFound();
  }

  return <ReservationDetailView record={record} />;
}
