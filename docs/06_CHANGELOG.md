# 06_CHANGELOG.md

# LAOTALK 2.0 CHANGELOG

Version 1.0

---

# 목적

본 문서는 LAOTALK 2.0 프로젝트의 모든 변경 사항을 기록하는 공식 이력 문서이다.

설계, 디자인, 기능, 구조 변경은 반드시 본 문서에 기록한 후 프로젝트에 반영한다.

---

# 기록 원칙

모든 변경 사항은 다음 정보를 포함한다.

- 날짜
- 버전
- 변경 유형
- 변경 내용
- 변경 이유
- 영향 범위
- 담당자

---

# 변경 유형

- FEATURE (기능 추가)
- IMPROVEMENT (기능 개선)
- DESIGN (디자인 변경)
- FIX (오류 수정)
- DOCUMENT (문서 수정)
- REFACTOR (구조 개선)

---

# 변경 기록 템플릿

## YYYY-MM-DD

버전:

변경 유형:

담당자:

변경 내용:

변경 이유:

영향 범위:

관련 문서:

비고:

---

# 버전 관리 규칙

Major (1.0 → 2.0)

- 큰 구조 변경
- 프로젝트 방향 변경

Minor (1.0 → 1.1)

- 기능 추가
- 새로운 페이지
- 주요 개선

Patch (1.0.0 → 1.0.1)

- 버그 수정
- 오탈자 수정
- 작은 UI 수정

---

# 영향 범위 체크

변경 시 아래 항목을 확인한다.

□ MASTER_PLAN

□ BLUEPRINT

□ DESIGN_SYSTEM

□ PROJECT_RULE

□ DAILY_REPORT

□ 관리자

□ 예약 시스템

□ UI

□ 콘텐츠

---

# 변경 승인 절차

1. 변경 내용 작성
2. 영향 범위 확인
3. 관련 문서 수정
4. CHANGELOG 기록
5. 개발 반영
6. 테스트 완료

---

# 변경 기록 예시

## 2026-07-09

버전:
1.1.0

변경 유형:
DOCUMENT

담당자:
Project Team

변경 내용:
프로젝트 기본 문서 6종 작성

변경 이유:
개발 전 설계 체계 확립

영향 범위:
전체 프로젝트

관련 문서:
01_MASTER_PLAN.md
02_BLUEPRINT.md
03_DESIGN_SYSTEM.md
04_PROJECT_RULE.md
05_DAILY_REPORT.md
06_CHANGELOG.md

비고:
초기 프로젝트 문서 작성 완료

---

# 변경 이력

## 2026-07-09

버전:
0.1.0

변경 유형:
FEATURE

담당자:
Claude (AI 개발 어시스턴트)

변경 내용:
Sprint 1 — 프로젝트 초기화 및 HOME 페이지 구현.
- Next.js(App Router, Turbopack) + TypeScript + Tailwind CSS v4 + shadcn/ui 프로젝트 초기화
- ESLint + Prettier(prettier-plugin-tailwindcss) 설정
- 03_DESIGN_SYSTEM.md 및 design/mockup(9번.png) 기준 컬러/타이포그래피/Radius 디자인 토큰 적용
- Pretendard Variable 폰트 적용 (Noto Sans KR 폴백)
- 공통 컴포넌트 구축: Header, Footer, BottomNav, PrimaryButton, SecondaryButton, Card, SectionHeader, Tag, Rating, Price, ImagePlaceholder
- HOME 페이지 구현 (더미 데이터): HeroBanner, NoticeBar, TodayLaos, CategoryServices, RecommendedActivities, RecommendedPackages, CustomTravelCta, ReservationCta
- Build / ESLint / TypeScript 검증 및 로컬 실행 확인 완료

변경 이유:
프로젝트 공통 기반 구축 및 HOME 페이지 우선 구현 (docs/04_PROJECT_RULE.md #2 작업 순서 준수)

영향 범위:
전체 프로젝트 구조, HOME 페이지, UI

관련 문서:
03_DESIGN_SYSTEM.md (Accent/Secondary 컬러 값 보완 필요 — 05_DAILY_REPORT.md #8 참고)
05_DAILY_REPORT.md

비고:
ACTIVITY, GOLF, PACKAGE, CUSTOM TRAVEL, RESERVATION, 관리자 페이지는 아직 미구현.

---

## 2026-07-09 (Sprint 2)

버전:
0.1.1

변경 유형:
IMPROVEMENT

담당자:
Claude (AI 개발 어시스턴트)

변경 내용:
Sprint 2 — HOME 페이지 UI 완성도 개선 (기능/컴포넌트 추가 없음, 기존 컴포넌트 개선만 수행).
- 타이포그래피 토큰 세분화: Title1(20px) / Title2(18px) / Body1(15px) / Body2(14px) / Caption2(12px) — design/mockup 9번.png 컴포넌트 상세 스펙 반영
- 버튼 높이 52px→56px, radius 12px→16px로 조정 (mockup Button 스펙 기준)
- Hero Banner를 실제 이미지 배경 + 그라디언트 오버레이로 전면 개선
- Placeholder 이미지를 자체 제작 라오스 테마 SVG 일러스트로 교체 (public/images/*.svg 7종)
- Card 컴포넌트에 imageSrc prop 추가, 실제 이미지 렌더링 지원
- TodayLaos를 "뉴스 사진 카드 + 정보 카드 2개" 구조로 mockup과 일치하도록 수정
- CategoryServices를 카드형에서 순수 아이콘 배지형으로 mockup과 일치하도록 수정
- CTA 컴포넌트(CustomTravelCta, ReservationCta)에 그림자·눌림 트랜지션 추가
- 페이지 하단 여백을 mockup 스펙(16px)에 맞춰 조정
- Bash 샌드박스가 생성하는 sessions/, .next-linux/ 빌드 산출물을 ESLint/Git/Prettier ignore 대상에 추가

변경 이유:
"HOME 페이지의 UI 완성도를 최종 디자인 시안 수준까지 끌어올리는" Sprint 2 목표에 따름. 기능은 변경하지 않고 기존 컴포넌트만 개선.

영향 범위:
HOME 페이지 UI, 공통 컴포넌트(Button/Card/SectionHeader/Rating/Price/Tag), Header/Footer 타이포그래피, 디자인 토큰

관련 문서:
03_DESIGN_SYSTEM.md (버튼 스펙 52px/12px → mockup 기준 56px/16px 불일치, 반영 검토 필요)
05_DAILY_REPORT.md

비고:
새로운 기능/컴포넌트는 추가하지 않았음. 실제 사진 자산 확보 시 public/images/ SVG를 교체 예정.

---

## 2026-07-09 (HOME Final Sprint)

버전:
0.1.2

변경 유형:
IMPROVEMENT

담당자:
Claude (AI 개발 어시스턴트)

변경 내용:
HOME Final Sprint — 디자인 시안 100% 정합 (기능/신규 컴포넌트 추가 없음, 기존 컴포넌트 시각 개선만 수행).
- Hero Banner: elevation 그림자, 배경 이미지 6% 확대, 그라디언트 강화, 인디케이터/카운터 배지 보강으로 화면 존재감 강화
- Hero 배경 SVG 전면 재제작 (별·halo·다층 노을·금박 그라디언트 사원·물빛 반사·전경 실루엣)으로 이미지 품질 향상
- Card 컴포넌트: 테두리 제거 후 ring + 강화된 그림자, hover 시 부상(lift) 효과와 이미지 zoom 인터랙션으로 입체감 부여
- NoticeBar 상단 여백 버그 수정(16px→20px)으로 Section 간격을 시안과 동일하게 정렬
- Hero 서브타이틀 font-weight 버그 수정(Regular→Medium)으로 Typography를 시안 스펙과 일치시킴
- Header/BottomNav에 elevation 그림자 및 블러 배경을 추가해 HOME 전체 첫인상이 여행 플랫폼 앱처럼 보이도록 개선

변경 이유:
"디자인 시안을 100% 목표"로 하는 HOME Final Sprint 목표에 따름. 기능은 변경하지 않고 Hero/Card/간격/타이포그래피/전체 첫인상만 개선.

영향 범위:
HOME 페이지 UI(Hero Banner, Card, NoticeBar), 공통 레이아웃(Header, BottomNav), Hero 이미지 자산

관련 문서:
05_DAILY_REPORT.md

비고:
새로운 기능/컴포넌트는 추가하지 않았음.

---

## 2026-07-09 (Sprint 3)

버전:
0.2.0

변경 유형:
FEATURE

담당자:
Claude (AI 개발 어시스턴트)

변경 내용:
Sprint 3 — ACTIVITY 목록/상세 페이지 구현.
- lib/data/activities.ts 신설 (canonical 더미 데이터 9건, docs/02_BLUEPRINT.md #10 데이터 구조 기반 확장)
- HOME의 recommendedActivities를 canonical 데이터에서 파생하도록 리팩터링 (데이터 중복 제거, HOME 화면 변화 없음)
- 신규 공통 컴포넌트: DetailHeader, Pagination, ListCard, FilterTabs, ImageSlider (Sprint 1에서 예정되었던 DetailHeader/Pagination 포함)
- 자체 제작 SVG 이미지 1종 추가 (temple-tour.svg)
- ACTIVITY 목록 페이지(/activity): Hero 영역 + 지역 필터 탭 + ListCard 리스트(페이지당 5개) + Pagination
- ACTIVITY 상세 페이지(/activity/[slug]): DetailHeader + ImageSlider + 태그/평점/가격 + 상품 소개 + 포함 사항 + 이용 안내 + 예약하기 버튼. generateStaticParams로 9개 페이지 정적 생성, 존재하지 않는 slug는 notFound() 처리

변경 이유:
docs/04_PROJECT_RULE.md #2 작업 순서(HOME 승인 후 다음 페이지 진행)에 따름. HOME에서 구축한 디자인 시스템과 공통 컴포넌트를 그대로 재사용.

영향 범위:
신규 라우트(/activity, /activity/[slug]), 신규 공통 컴포넌트 5종, components/home/data.ts(리팩터링)

관련 문서:
02_BLUEPRINT.md #4 ACTIVITY, 05_DAILY_REPORT.md

비고:
GOLF/PACKAGE/CUSTOM TRAVEL/RESERVATION/관리자 페이지는 아직 미구현. 새로운 기능(고급 필터, 리뷰 작성 등)은 추가하지 않았음.

---

## 2026-07-09 (Sprint 4)

버전:
0.3.0

변경 유형:
FEATURE

담당자:
Claude (AI 개발 어시스턴트)

변경 내용:
Sprint 4 — GOLF 목록/상세 페이지 구현.
- lib/data/golf.ts 신설 (canonical 더미 데이터 6건, docs/02_BLUEPRINT.md #10 데이터 구조 기반 확장: holes/par/slope/difficulty 등 코스 정보 필드 포함)
- 자체 제작 SVG 이미지 1종 추가 (golf-course.svg)
- GOLF 목록 페이지(/golf): ACTIVITY 목록과 동일 구조 (Hero + 지역 필터 탭 + ListCard 리스트 + Pagination)
- GOLF 상세 페이지(/golf/[slug]): DetailHeader + ImageSlider + 태그/평점/가격 + 골프장 소개 + 코스 정보(홀 수/파/슬로프/난이도 아이콘 그리드) + 예약하기 버튼. generateStaticParams로 6개 페이지 정적 생성, 존재하지 않는 slug는 notFound() 처리
- 신규 공통 컴포넌트 추가 없이 ACTIVITY(Sprint 3)에서 만든 컴포넌트만으로 100% 구현

변경 이유:
docs/04_PROJECT_RULE.md #2 작업 순서(ACTIVITY 승인 후 다음 페이지 진행)에 따름. ACTIVITY와 동일한 디자인 시스템·컴포넌트를 최대한 재사용.

영향 범위:
신규 라우트(/golf, /golf/[slug]), lib/data/golf.ts, public/images/golf-course.svg

관련 문서:
02_BLUEPRINT.md #5 GOLF, 05_DAILY_REPORT.md

비고:
PACKAGE/CUSTOM TRAVEL/RESERVATION/관리자 페이지는 아직 미구현. 새로운 디자인/기능은 추가하지 않았음.

---

## 2026-07-09 (Sprint 5)

버전:
0.4.0

변경 유형:
FEATURE

담당자:
Claude (AI 개발 어시스턴트)

변경 내용:
Sprint 5 — PACKAGE 목록/상세 페이지 구현.
- lib/data/packages.ts 신설 (canonical 더미 데이터 6건, docs/02_BLUEPRINT.md #10 데이터 구조 기반 확장: duration/included/itinerary(DAY별 일정) 필드 포함)
- components/home/data.ts의 recommendedPackages를 canonical 데이터에서 파생하도록 리팩터링 (데이터 중복 제거, HOME 화면 변화 없음)
- PACKAGE 목록 페이지(/package): ACTIVITY/GOLF 목록과 동일 구조 (Hero + 기간 필터 탭(전체/2박3일/3박4일/4박5일) + ListCard 리스트 + Pagination)
- PACKAGE 상세 페이지(/package/[slug]): DetailHeader + ImageSlider + 제목 + 일정 정보(기간 Tag+태그+가격) + 패키지 소개 + 포함 사항(숙박/픽업·샌딩/액티비티/조식 아이콘 4그리드) + 일정(DAY 1, DAY 2… 카드형 목록) + 예약하기 버튼. generateStaticParams로 6개 페이지 정적 생성, 존재하지 않는 slug는 notFound() 처리
- 신규 공통 컴포넌트 추가 없이 ACTIVITY·GOLF(Sprint 3~4)에서 만든 컴포넌트만으로 100% 구현

변경 이유:
docs/04_PROJECT_RULE.md #2 작업 순서(GOLF 승인 후 다음 페이지 진행)에 따름. HOME/ACTIVITY/GOLF와 동일한 디자인 시스템·컴포넌트를 최대한 재사용.

영향 범위:
신규 라우트(/package, /package/[slug]), lib/data/packages.ts, components/home/data.ts(리팩터링)

관련 문서:
02_BLUEPRINT.md #6 PACKAGE, 05_DAILY_REPORT.md

비고:
CUSTOM TRAVEL/RESERVATION/관리자 페이지는 아직 미구현. 새로운 디자인/기능은 추가하지 않았음.

---

## 2026-07-09 (Sprint 6)

버전:
0.5.0

변경 유형:
FEATURE

담당자:
Claude (AI 개발 어시스턴트)

변경 내용:
Sprint 6 — CUSTOM TRAVEL / RESERVATION 문의 폼 페이지 구현.
- 신규 폼 공통 컴포넌트 5종: TextField, SelectField, TextareaField, Checkbox, StepIndicator (docs/03_DESIGN_SYSTEM.md #10 입력폼 스펙 기준)
- lib/types/inquiry.ts 신설: CustomTravelInquiry/ReservationInquiry/SelectedProduct 타입과 옵션 목록을 단일 소스로 분리
- CUSTOM TRAVEL 페이지(/custom-travel): 여행 스타일/기간/희망 지역 선택 + 인원 수 입력 + 문의 내용 + 개인정보 동의 + 문의하기 버튼
- RESERVATION 페이지(/reservation): searchParams(type/slug)로 ACTIVITY·GOLF·PACKAGE 상품을 조회해 선택 상품 카드로 표시, StepIndicator(상품 선택/정보 입력/문의 접수 완료) + 예약자 정보 입력 + 개인정보 동의 + 예약 문의 버튼
- 두 폼 모두 실제 서버 전송 없이 프론트 상태로 완료 화면("문의가 접수되었습니다. 담당자가 카카오로 연락드립니다.") 표시
- ACTIVITY/GOLF/PACKAGE 상세의 예약하기 버튼을 `/reservation?type=&slug=` 쿼리로 보완하여 RESERVATION 페이지와 연결
- 회원가입/결제 기능 없음 (docs/04_PROJECT_RULE.md #7 준수)

변경 이유:
docs/04_PROJECT_RULE.md #2 작업 순서(PACKAGE 승인 후 다음 페이지 진행)에 따름. 예약은 결제가 아닌 문의 접수 구조로 구현.

영향 범위:
신규 라우트(/custom-travel, /reservation), 신규 공통 컴포넌트 5종, lib/types/inquiry.ts, ACTIVITY/GOLF/PACKAGE 상세 페이지(예약하기 링크 보완)

관련 문서:
02_BLUEPRINT.md #7 CUSTOM TRAVEL, #8 RESERVATION, 05_DAILY_REPORT.md

비고:
관리자 페이지는 아직 미구현. 문의 데이터는 실제로 저장되지 않으며 프론트 상태로만 완료 화면을 표시함.

---

## 2026-07-09 (Sprint 7)

버전:
0.6.0

변경 유형:
FEATURE / REFACTOR

담당자:
Claude (AI 개발 어시스턴트)

변경 내용:
Sprint 7 — ADMIN 관리자 페이지 기본 구조 구현.
- [REFACTOR] 라우트 구조 변경: 사용자 페이지 전체를 src/app/(site)/ 라우트 그룹으로 이동, 최상위 layout.tsx에서 Header/Footer/BottomNav를 분리해 (site)/layout.tsx로 이관 (URL 변경 없음, 관리자 페이지가 공용 UI를 상속받지 않도록 하기 위함)
- lib/data/admin.ts 신설: ReservationStatus(신규 문의/상담 중/파트너 전달/예약 진행 중/예약 완료/취소/보류) 7단계 타입, 예약 문의 더미 7건 + 맞춤여행 문의 더미 6건
- 신규 컴포넌트: StatusBadge(상태 배지, 기존 컬러 토큰만 사용), AdminNav(관리자 상단 바), ReservationDetailView, InquiryDetailView
- 관리자 라우트 6종 구현
  - /admin/login — 더미 로그인(실제 인증 없음, 제출 시 /admin 이동)
  - /admin — 대시보드(오늘 문의/예약 진행 중/예약 완료/취소·보류 통계 + 최근 문의 목록)
  - /admin/reservations, /admin/reservations/[id] — 예약 문의 목록(상태 필터)/상세(상태 변경)
  - /admin/inquiries, /admin/inquiries/[id] — 맞춤여행 문의 목록(상태 필터)/상세(상태 변경)
- 실제 로그인 인증 없음, 실제 DB 연결 없음(상태 변경은 화면 상태로만 반영), 회원가입/결제 기능 없음

변경 이유:
docs/04_PROJECT_RULE.md #2 작업 순서(RESERVATION/CUSTOM TRAVEL 승인 후 다음 페이지 진행)에 따름. 관리자가 예약/문의를 확인하고 상태를 변경하는 기본 구조를 우선 구현.

영향 범위:
전체 라우트 구조(src/app/layout.tsx, 신규 src/app/(site)/layout.tsx), 신규 라우트(/admin/*), 신규 컴포넌트 4종, lib/data/admin.ts

관련 문서:
02_BLUEPRINT.md #9 관리자, 05_DAILY_REPORT.md

비고:
콘텐츠/액티비티/골프/패키지 관리 CRUD, 실제 인증/DB 연동은 다음 Sprint 과제로 남김.

---

# 릴리즈 요약

## Version 1.0

- 프로젝트 시작
- 기본 문서 구축
- 설계 단계 완료

## Version 0.1.0

- 프로젝트 초기화 (Next.js / TypeScript / Tailwind / shadcn/ui)
- 디자인 시스템 토큰 및 Pretendard 폰트 적용
- 공통 컴포넌트 구축
- HOME 페이지 구현 (더미 데이터)

## Version 0.1.1

- HOME 페이지 UI 완성도 개선 (타이포그래피/버튼/카드/이미지/간격)
- 자체 제작 라오스 테마 SVG 이미지 적용

## Version 0.1.2

- HOME 디자인 시안 100% 정합 (Hero 존재감/이미지 품질, Card 입체감, 간격·타이포 버그 수정, 전체 첫인상 개선)

## Version 0.2.0

- ACTIVITY 목록/상세 페이지 구현
- 신규 공통 컴포넌트(DetailHeader, Pagination, ListCard, FilterTabs, ImageSlider) 구축
- 액티비티 더미 데이터 단일 소스화 (lib/data/activities.ts)

## Version 0.3.0

- GOLF 목록/상세 페이지 구현 (신규 공통 컴포넌트 추가 없이 ACTIVITY 컴포넌트 재사용)
- 골프 더미 데이터 단일 소스화 (lib/data/golf.ts)

## Version 0.4.0

- PACKAGE 목록/상세 페이지 구현 (신규 공통 컴포넌트 추가 없이 ACTIVITY/GOLF 컴포넌트 재사용)
- 패키지 더미 데이터 단일 소스화 (lib/data/packages.ts), HOME 추천 패키지도 이 데이터에서 파생하도록 리팩터링

## Version 0.5.0

- CUSTOM TRAVEL / RESERVATION 문의 폼 페이지 구현
- 신규 폼 공통 컴포넌트(TextField, SelectField, TextareaField, Checkbox, StepIndicator) 구축
- 문의 폼 데이터 타입 단일 소스화 (lib/types/inquiry.ts), 회원가입/결제 기능 없이 문의 접수 구조로 구현

## Version 0.6.0 (진행 중)

- ADMIN 관리자 페이지 기본 구조 구현 (로그인/대시보드/예약 관리/문의 관리)
- 사용자 페이지를 (site) 라우트 그룹으로 분리하여 관리자 페이지와 레이아웃 완전 분리 (URL 변경 없음)
- 실제 인증/DB 연동 없이 더미 데이터 기반으로 상태 확인·변경 구조만 구현

---

# 최종 원칙

모든 변경 사항은 기록 없이 반영하지 않는다.

CHANGELOG는 프로젝트의 공식 변경 이력으로 사용한다.
