/**
 * 유튜브 URL(watch/youtu.be/embed/shorts 등 일반적인 형태)에서 임베드용 video ID를 추출한다.
 * 형식을 인식하지 못하면 null을 반환하며, 호출부는 이 경우 미리보기 버튼을 자동으로 숨겨야 한다.
 */
export function extractYoutubeVideoId(url: string): string | null {
  const match = url.match(
    /(?:youtube\.com\/(?:watch\?v=|embed\/|shorts\/)|youtu\.be\/)([a-zA-Z0-9_-]{11})/,
  );
  return match ? match[1] : null;
}
