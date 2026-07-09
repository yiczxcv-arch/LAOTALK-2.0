import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "액티비티 | LAOTALK",
  description: "라오스에서 즐길 수 있는 다양한 액티비티를 만나보세요",
  alternates: { canonical: "/activity" },
  openGraph: {
    title: "액티비티 | LAOTALK",
    description: "라오스에서 즐길 수 있는 다양한 액티비티를 만나보세요",
    url: "/activity",
  },
  twitter: {
    card: "summary_large_image",
    title: "액티비티 | LAOTALK",
    description: "라오스에서 즐길 수 있는 다양한 액티비티를 만나보세요",
  },
};

export default function ActivityLayout({ children }: { children: React.ReactNode }) {
  return children;
}
