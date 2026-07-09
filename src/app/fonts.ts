import localFont from "next/font/local";

export const pretendard = localFont({
  src: "../../node_modules/pretendard/dist/web/variable/woff2/PretendardVariable.woff2",
  variable: "--font-sans",
  weight: "45 920",
  display: "swap",
  fallback: ["Noto Sans KR", "sans-serif"],
});
