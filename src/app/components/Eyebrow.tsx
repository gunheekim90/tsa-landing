/**
 * 전 섹션 공통 아이브로우 — 모노 인덱스 + 대문자 라벨.
 * 리서치 수렴점: 6유닛에 동일한 라벨 리듬을 심어 페이지 전체의 시스템감을 만든다.
 */
export function Eyebrow({ index, label }: { index: string; label: string }) {
  return (
    <div className="flex items-center gap-3 font-dc-mono text-[11px] uppercase tracking-[0.22em]">
      <span className="text-[color:var(--dc-purple-text)]">{index}</span>
      <span aria-hidden="true" className="h-px w-8 bg-[color:var(--dc-line)]" />
      <span className="text-[color:var(--dc-mute-2)]">{label}</span>
    </div>
  );
}
