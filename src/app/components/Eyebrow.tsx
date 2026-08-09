/**
 * 전 섹션 공통 아이브로우 — 모노 인덱스 + 대문자 라벨 (라이트 테마).
 */
export function Eyebrow({ index, label }: { index: string; label: string }) {
  return (
    <div className="flex items-center gap-3 font-dc-mono text-[11px] uppercase tracking-[0.22em]">
      <span className="text-[color:var(--lt-purple)]">{index}</span>
      <span aria-hidden="true" className="h-px w-8 bg-[color:var(--lt-line)]" />
      <span className="text-[color:var(--lt-mute-2)]">{label}</span>
    </div>
  );
}
