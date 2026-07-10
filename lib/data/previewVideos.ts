/**
 * 카드 미리보기 영상(유튜브) 단일 소스 — 액티비티 · 골프 전용.
 * (숙소는 lib/data/stay.ts의 각 항목이 자체 videoUrl 필드로 직접 관리한다.)
 * key는 콘텐츠 id와 일치해야 한다 — 액티비티: activity.id, 골프: "golf-premium"(HOME 프리미엄 골프 배너 고정 키).
 * 값이 없는(매핑되지 않은) 항목은 카드의 "미리보기" 버튼이 자동으로 숨겨진다.
 * 실제 영상이 준비되면 이 객체에 { youtubeId, title } 값만 추가하면 되고, 컴포넌트 쪽은 수정할 필요 없다.
 */

export type PreviewVideo = {
  youtubeId: string;
  title: string;
};

export const previewVideos: Partial<Record<string, PreviewVideo>> = {
  // 예시: "activity-1": { youtubeId: "여기에_유튜브_영상ID", title: "블루라군 & 카약 30초 미리보기" },
};

export function getPreviewVideo(id: string): PreviewVideo | undefined {
  return previewVideos[id];
}
