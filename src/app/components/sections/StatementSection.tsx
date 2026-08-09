import { Reveal } from '../anim/Reveal';
import { STATEMENT } from '../../content';

/** 프리푸터 선언 — 풀블리드 큰 타이포 한 문장. */
export function StatementSection() {
  return (
    <section className="border-t border-[color:var(--lt-line)] bg-[color:var(--lt-card)] px-5 py-28 md:px-8 md:py-36">
      <div className="mx-auto max-w-[1200px]">
        <Reveal>
          <p className="whitespace-pre-line text-center break-keep font-dc-display text-[clamp(1.8rem,4.5vw,3.4rem)] font-semibold leading-[1.24] tracking-[-0.03em] text-[color:var(--lt-ink)]">
            {STATEMENT}
          </p>
        </Reveal>
      </div>
    </section>
  );
}
