# Google Sheets 예약 문의 연동 설정 가이드

LAOTALK 2.0의 예약 문의(`/reservation`, 맞춤여행 설계 포함)는 제출되면 서버 API Route
(`/api/reservation`)를 거쳐 Google Apps Script Web App으로 전달되고, Apps Script가 그 값을
Google Sheet에 한 행씩 저장합니다. DB나 로그인 없이, 스프레드시트를 간이 저장소로 사용하는
구조입니다.

이 문서는 운영자가 직접 진행해야 하는 설정 단계를 안내합니다. 코드 수정은 필요하지 않습니다.

---

## 1. Google Sheet 생성

1. Google Drive에서 새 스프레드시트를 만듭니다. (예: `LAOTALK 예약문의`)
2. 첫 번째 시트 이름을 `문의` 등 원하는 이름으로 바꿔도 됩니다(아래 Apps Script 예제의 시트
   이름과 일치시키려면 `getActiveSheet()`를 사용하므로 시트 이름은 무엇이든 상관없습니다).

## 2. 첫 행 헤더 입력

시트의 1행에 아래 15개 헤더를 **왼쪽부터 순서대로** 입력합니다. 이 순서는 서버가 보내는
데이터 순서와 정확히 일치해야 합니다.

| A | B | C | D | E | F | G | H | I | J | K | L | M | N | O |
|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|
| 접수일시 | 문의번호 | 이름 | 연락처 | 카테고리 | 상품명 | 희망 날짜 | 인원 | 여행 기간 | 여행 스타일 | 숙소 유형 | 예산 | 문의 내용 | 유입 경로 | 상태 |

> 참고: "여행 기간 / 여행 스타일 / 숙소 유형(맞춤여행일 때) / 예산"은 맞춤여행 설계에서만
> 채워지고, 숙소 예약일 때는 "숙소 유형"만 채워집니다. 그 외 카테고리(골프/액티비티/패키지)는
> 해당 칸이 빈 값으로 들어옵니다. 정상 동작입니다.

## 3. Apps Script 열기

1. 스프레드시트 메뉴에서 **확장 프로그램 → Apps Script**를 클릭합니다.
2. 기본으로 열리는 `Code.gs` 파일의 내용을 전부 지우고 아래 예제 코드를 붙여넣습니다.

## 4. doPost 예제 코드

```javascript
/**
 * LAOTALK 예약 문의 웹훅 수신
 * 서버(API Route)가 보내는 JSON 순서와 정확히 일치하는 열 순서로 한 행을 추가한다.
 */
function doPost(e) {
  var sheet = SpreadsheetApp.getActiveSpreadsheet().getActiveSheet();

  var data;
  try {
    data = JSON.parse(e.postData.contents);
  } catch (err) {
    return ContentService
      .createTextOutput(JSON.stringify({ ok: false, error: "invalid json" }))
      .setMimeType(ContentService.MimeType.JSON);
  }

  sheet.appendRow([
    data["접수일시"] || "",
    data["문의번호"] || "",
    data["이름"] || "",
    data["연락처"] || "",
    data["카테고리"] || "",
    data["상품명"] || "",
    data["희망 날짜"] || "",
    data["인원"] || "",
    data["여행 기간"] || "",
    data["여행 스타일"] || "",
    data["숙소 유형"] || "",
    data["예산"] || "",
    data["문의 내용"] || "",
    data["유입 경로"] || "",
    data["상태"] || "신규",
  ]);

  return ContentService
    .createTextOutput(JSON.stringify({ ok: true }))
    .setMimeType(ContentService.MimeType.JSON);
}
```

저장(Ctrl+S 또는 💾 아이콘)합니다.

## 5. 웹 앱 배포 방법

1. Apps Script 편집기 우측 상단 **배포 → 새 배포**를 클릭합니다.
2. 유형 선택에서 톱니바퀴 아이콘을 누르고 **웹 앱**을 선택합니다.
3. 설정:
   - **설명**: `laotalk-reservation-webhook` (자유롭게)
   - **다음 사용자 인증으로 실행**: 나(본인 계정)
   - **액세스 권한**: **모든 사용자** (서버가 인증 없이 POST 요청을 보내야 하므로 필요합니다.
     이 URL은 추측하기 매우 어려운 임의 문자열이고, 절대 클라이언트/공개 코드에 노출되지
     않도록 이번 스프린트에서 서버 전용 환경변수로만 다룹니다.)
4. **배포**를 클릭합니다. 처음 배포할 때 Google 계정 권한 승인 화면이 뜨면 승인합니다.

## 6. 접근 권한 설정

위 5번의 "모든 사용자" 설정이 곧 접근 권한 설정입니다. 별도로 시트 자체를 외부에 공유할
필요는 없습니다 — Apps Script만 외부에서 호출 가능하고, 시트는 비공개로 유지해도 됩니다.

## 7. Web App URL 복사

배포가 끝나면 `https://script.google.com/macros/s/XXXXXXXXXXXXXXXXXXXXXXXX/exec` 형태의
URL이 표시됩니다. 이 URL 전체를 복사합니다. (뒤에 `/exec`로 끝나야 합니다. `/dev`로 끝나는
URL은 편집기 로그인 사용자만 호출 가능하므로 사용하지 않습니다.)

## 8. Vercel 환경변수 등록

1. Vercel 프로젝트 대시보드 → **Settings → Environment Variables**로 이동합니다.
2. 아래 값을 추가합니다.
   - **Key**: `GOOGLE_SHEETS_WEBHOOK_URL`
   - **Value**: 7번에서 복사한 Web App URL 전체
   - **Environment**: Production (필요하면 Preview/Development도 함께 체크)
3. **Save**를 클릭합니다.

로컬에서 직접 테스트하려면 프로젝트 루트에 `.env.local` 파일을 만들고 아래처럼 적습니다.
(`.env.local`은 `.gitignore`에 포함되어 있어 Git에 올라가지 않습니다.)

```
GOOGLE_SHEETS_WEBHOOK_URL=https://script.google.com/macros/s/XXXXXXXXXXXXXXXXXXXXXXXX/exec
```

## 9. 재배포

Vercel 환경변수는 **다음 배포부터** 적용됩니다. 이미 배포된 상태라면 Vercel 대시보드에서
최신 커밋을 **Redeploy** 하거나, 새 커밋을 푸시해 재배포를 트리거합니다.

## 10. 테스트 문의 1건 제출

1. 배포된 사이트에서 아무 상품(예: 액티비티) 상세 페이지 → **예약하기** → 폼을 채우고
   **예약 문의하기**를 눌러봅니다.
2. "예약 문의가 접수되었습니다. 확인 후 입력하신 연락처로 안내드리겠습니다." 문구가
   보이면 웹훅 저장까지 성공한 것입니다.
3. "문의 저장에 실패했습니다..." 문구가 보이면 아래를 확인합니다.
   - Vercel 환경변수 `GOOGLE_SHEETS_WEBHOOK_URL`이 정확히 등록되어 있는지
   - 환경변수 등록 후 재배포했는지
   - Apps Script 배포 시 액세스 권한이 "모든 사용자"로 되어 있는지
   - Web App URL이 `/exec`로 끝나는지 (`/dev` 아님)

## 11. 시트 저장 확인

Google Sheet로 돌아가 새 행이 추가되었는지 확인합니다. 접수일시·문의번호가 자동으로
채워져 있고, 나머지 열은 폼에 입력한 값과 일치해야 합니다. 카테고리별로 비어 있는 열이
있는 것은 정상입니다(2번 표 아래 참고 문구 참조).

---

## 참고 — 문의번호 형식

문의번호는 `LT-YYYYMMDD-XXXX` 형식(예: `LT-20260710-0001`)입니다. 이 프로젝트는 별도
데이터베이스 없이 매 요청을 독립적으로 처리하는 서버리스 구조이므로, 진짜 증가하는
일련번호 카운터를 유지할 수 없습니다. 대신 요청 시각(밀리초)과 난수를 조합해 뒤 4자리를
만들어 같은 날짜 안에서도 충돌 가능성을 낮췄습니다. 완전히 겹치지 않는 것을 보장하지는
않지만, 이 사이트의 문의량 규모에서는 실질적으로 안전합니다.
