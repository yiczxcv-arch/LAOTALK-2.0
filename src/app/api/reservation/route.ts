import { NextResponse } from "next/server";
import {
  buildSheetRow,
  generateInquiryNumber,
  type ReservationWebhookPayload,
} from "@/lib/reservation-webhook";

const WEBHOOK_TIMEOUT_MS = 10000;

function isValidPayload(body: unknown): body is ReservationWebhookPayload {
  if (!body || typeof body !== "object") return false;
  const b = body as Record<string, unknown>;
  return (
    typeof b.name === "string" &&
    b.name.trim().length > 0 &&
    typeof b.phone === "string" &&
    b.phone.trim().length > 0 &&
    typeof b.travelDate === "string" &&
    typeof b.peopleCount === "string" &&
    typeof b.message === "string" &&
    typeof b.referralPath === "string" &&
    !!b.product &&
    typeof b.product === "object"
  );
}

/** 예약 문의 제출 API — 서버에서만 GOOGLE_SHEETS_WEBHOOK_URL을 읽어 Google Apps Script Web App으로 전달한다. */
export async function POST(request: Request) {
  let body: unknown;
  try {
    body = await request.json();
  } catch {
    return NextResponse.json({ success: false, message: "요청 형식이 올바르지 않습니다." }, { status: 400 });
  }

  if (!isValidPayload(body)) {
    return NextResponse.json({ success: false, message: "필수 입력값이 누락되었습니다." }, { status: 400 });
  }

  const webhookUrl = process.env.GOOGLE_SHEETS_WEBHOOK_URL;

  if (!webhookUrl) {
    if (process.env.NODE_ENV !== "production") {
      // 배포 환경이 아닐 때만 설정 누락을 콘솔에 알린다 (민감 정보 없음).
      console.warn("[reservation] GOOGLE_SHEETS_WEBHOOK_URL 환경변수가 설정되지 않았습니다.");
    }
    return NextResponse.json(
      { success: false, message: "예약 문의 저장 설정이 완료되지 않았습니다." },
      { status: 503 },
    );
  }

  const receivedAt = new Date();
  const inquiryNumber = generateInquiryNumber(receivedAt);
  const row = buildSheetRow(body, inquiryNumber, receivedAt);

  const controller = new AbortController();
  const timeout = setTimeout(() => controller.abort(), WEBHOOK_TIMEOUT_MS);

  try {
    const response = await fetch(webhookUrl, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(row),
      signal: controller.signal,
    });

    if (!response.ok) {
      // 연락처/문의 내용 전체는 로그에 남기지 않고, 상태 코드와 문의번호만 남긴다.
      console.error(`[reservation] webhook responded ${response.status} for ${inquiryNumber}`);
      return NextResponse.json(
        { success: false, message: "문의 저장에 실패했습니다. 입력 내용을 확인한 뒤 다시 시도해주세요." },
        { status: 502 },
      );
    }

    return NextResponse.json({ success: true, inquiryNumber });
  } catch (error) {
    const reason = error instanceof Error ? error.name : "unknown";
    console.error(`[reservation] webhook request failed (${reason}) for ${inquiryNumber}`);
    return NextResponse.json(
      { success: false, message: "문의 저장에 실패했습니다. 입력 내용을 확인한 뒤 다시 시도해주세요." },
      { status: 502 },
    );
  } finally {
    clearTimeout(timeout);
  }
}
