/**
 * Google Sheets 웹훅 연동 — 서버 전용 유틸리티 (API Route에서만 import한다).
 * 절대 클라이언트 컴포넌트에서 import하지 않는다 (환경변수/웹훅 URL 노출 방지).
 */

export type ReservationWebhookPayload = {
  name: string;
  phone: string;
  travelDate: string;
  peopleCount: string;
  message: string;
  referralPath: string;
  product: {
    type: "activity" | "golf" | "package" | "stay" | "custom";
    title: string;
    variantLabel?: string;
    customDetails?: {
      duration: string;
      people: string;
      style: string;
      stay: string;
      budget: string;
    };
  };
};

const categoryLabelMap: Record<ReservationWebhookPayload["product"]["type"], string> = {
  stay: "숙소",
  golf: "골프",
  activity: "액티비티",
  package: "패키지",
  custom: "맞춤여행",
};

/**
 * 문의번호 생성: LT-YYYYMMDD-XXXX
 * DB 없이 서버리스 환경(요청마다 독립 실행)에서 동작해야 하므로 진짜 증가하는 순번 카운터는
 * 유지할 수 없다. 대신 현재 시각(ms) + 난수를 조합해 같은 날짜 안에서도 충돌 가능성을 낮춘다.
 */
export function generateInquiryNumber(now: Date = new Date()): string {
  const y = now.getFullYear();
  const m = String(now.getMonth() + 1).padStart(2, "0");
  const d = String(now.getDate()).padStart(2, "0");
  const entropy = (now.getTime() % 100000) + Math.floor(Math.random() * 1000);
  const seq = String(entropy % 10000).padStart(4, "0");
  return `LT-${y}${m}${d}-${seq}`;
}

/**
 * 시트 저장 필드를 요청된 순서 그대로 배열로 만든다.
 * 순서: 접수일시, 문의번호, 이름, 연락처, 카테고리, 상품명, 희망 날짜, 인원,
 *       여행 기간, 여행 스타일, 숙소 유형, 예산, 문의 내용, 유입 경로, 상태
 */
export function buildSheetRow(payload: ReservationWebhookPayload, inquiryNumber: string, receivedAt: Date) {
  const { product } = payload;
  const isCustom = product.type === "custom";

  const stayType = product.type === "stay" ? (product.variantLabel ?? "") : isCustom ? (product.customDetails?.stay ?? "") : "";

  return {
    접수일시: receivedAt.toISOString(),
    문의번호: inquiryNumber,
    이름: payload.name,
    연락처: payload.phone,
    카테고리: categoryLabelMap[product.type],
    상품명: product.title,
    "희망 날짜": payload.travelDate,
    인원: payload.peopleCount,
    "여행 기간": isCustom ? (product.customDetails?.duration ?? "") : "",
    "여행 스타일": isCustom ? (product.customDetails?.style ?? "") : "",
    "숙소 유형": stayType,
    예산: isCustom ? (product.customDetails?.budget ?? "") : "",
    "문의 내용": payload.message,
    "유입 경로": payload.referralPath,
    상태: "신규",
  };
}
