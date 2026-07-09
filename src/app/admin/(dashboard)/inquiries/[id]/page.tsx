import { notFound } from "next/navigation";
import { getInquiryById, inquiryRecords } from "@/lib/data/admin";
import { InquiryDetailView } from "@/components/admin/InquiryDetailView";

type InquiryDetailPageProps = {
  params: Promise<{ id: string }>;
};

export function generateStaticParams() {
  return inquiryRecords.map((i) => ({ id: i.id }));
}

/** 맞춤여행 문의 상세 (docs/02_BLUEPRINT.md #9 관리자 · design/wireframe 7번.png A6) */
export default async function AdminInquiryDetailPage({ params }: InquiryDetailPageProps) {
  const { id } = await params;
  const record = getInquiryById(id);

  if (!record) {
    notFound();
  }

  return <InquiryDetailView record={record} />;
}
