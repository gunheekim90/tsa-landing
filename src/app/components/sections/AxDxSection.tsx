import { Reveal } from '../anim/Reveal';
import { Eyebrow } from '../Eyebrow';
import { CAPABILITIES } from '../../content';

/** 역량별 변화 서사형 태그 — "무엇에서 무엇으로"가 기능 나열보다 강하다. */
const FROM_TO: Record<string, string> = {
  AX: 'FROM 수작업 TO 에이전트',
  DX: 'FROM 오프라인 TO 시스템',
  AICX: 'FROM 대기 TO 즉답',
};

const LETTER = ['A', 'B', 'C'];

/**
 * AX · DX · AICX — 카드 크롬 제거(배경·그림자 없음), 헤어라인 구획 + 문서 인덱싱(—— A/B/C).
 */
export function AxDxSection() {
  return (
    <section
      id="axdx"
      className="scroll-mt-24 border-t border-[color:var(--dc-line)] bg-[color:var(--dc-bg-2)] px-5 py-24 md:px-8 md:py-32"
    >
      <div className="mx-auto max-w-[1240px]">
        <Reveal>
          <Eyebrow index="01" label="Capabilities" />
        </Reveal>
        <Reveal delay={0.06}>
          <h2 className="mt-6 max-w-2xl font-dc-display text-[clamp(2rem,4.5vw,3.4rem)] font-medium leading-[1.12] tracking-[-0.03em] text-[color:var(--dc-ink)]">
            AI를 기업 안에 넣는
            <br />
            세 가지 방법.
          </h2>
        </Reveal>

        <div className="mt-16 grid grid-cols-1 gap-px overflow-hidden bg-[color:var(--dc-line)] md:grid-cols-3">
          {CAPABILITIES.map((c, i) => (
            <Reveal key={c.tag} delay={0.08 * i} className="h-full">
              <article className="group flex h-full flex-col bg-[color:var(--dc-bg-2)] py-10 transition-colors duration-300 hover:bg-[rgba(123,57,252,0.04)] md:px-10 md:first:pl-0 md:last:pr-0">
                <div className="flex items-baseline justify-between">
                  <span className="font-dc-mono text-[12px] text-[color:var(--dc-mute-2)]">
                    —— {LETTER[i]}
                  </span>
                  <span className="font-dc-mono text-[10px] uppercase tracking-[0.14em] text-[color:var(--dc-mute-2)]">
                    {FROM_TO[c.tag]}
                  </span>
                </div>
                <h3 className="mt-8 font-dc-display text-[1.7rem] font-semibold tracking-[-0.02em] text-[color:var(--dc-ink)]">
                  <span className="text-[color:var(--dc-mute-2)]">{c.tag}</span>
                  <br />
                  {c.title}
                </h3>
                <p className="mt-4 font-dc-body text-[14.5px] leading-[1.75] text-[color:var(--dc-mute)]">
                  {c.lead}
                </p>
                <ul className="mt-auto flex flex-col gap-2.5 pt-8">
                  {c.items.map((item) => (
                    <li
                      key={item}
                      className="flex items-center gap-3 font-dc-mono text-[12px] text-[color:var(--dc-mute)]"
                    >
                      <span aria-hidden="true" className="text-[color:var(--dc-mute-2)]">↳</span>
                      {item}
                    </li>
                  ))}
                </ul>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
