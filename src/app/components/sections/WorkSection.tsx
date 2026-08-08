import { ArrowUpRight } from 'lucide-react';
import { Reveal } from '../anim/Reveal';
import { Eyebrow } from '../Eyebrow';
import { CASES, CREDENTIALS, PROFILES } from '../../content';

/**
 * 사례 — 1 피처 + 에디토리얼 리스트 행(헤어라인 디바이더).
 * 피처는 "성과 문장 + — 클라이언트" 포맷(Scale 방식). 수치 창작 금지.
 * 하단에 제3자 검증 스트립: 발급기관 있는 인증·선정 + 클릭 가능한 외부 파트너 프로필.
 */
export function WorkSection() {
  const [feature, ...rest] = CASES;

  return (
    <section
      id="work"
      className="scroll-mt-24 border-t border-[color:var(--dc-line)] bg-[color:var(--dc-bg)] px-5 py-24 md:px-8 md:py-32"
    >
      <div className="mx-auto max-w-[1240px]">
        <Reveal>
          <Eyebrow index="02" label="Selected work" />
        </Reveal>
        <Reveal delay={0.06}>
          <h2 className="mt-6 max-w-2xl font-dc-display text-[clamp(2rem,4.5vw,3.4rem)] font-medium leading-[1.12] tracking-[-0.03em] text-[color:var(--dc-ink)]">
            이런 걸
            <br />
            만들어 왔습니다.
          </h2>
        </Reveal>

        {/* 피처 1건 — 성과 문장 + 출처 행 */}
        <Reveal delay={0.12}>
          <article className="mt-16 border-y border-[color:var(--dc-line)] py-12 md:py-14">
            <div className="grid grid-cols-1 gap-6 md:grid-cols-12">
              <div className="flex flex-col gap-2 md:col-span-3">
                <span className="font-dc-mono text-[11px] uppercase tracking-[0.18em] text-[color:var(--dc-mute-2)]">
                  Client impact
                </span>
                <span className="font-dc-mono text-[11px] uppercase tracking-[0.18em] text-[color:var(--dc-mute-2)]">
                  실서비스 운영 중
                </span>
                <div className="mt-3 flex gap-2">
                  {feature.tags.map((t) => (
                    <span
                      key={t}
                      className="border border-[color:var(--dc-line)] px-2 py-0.5 font-dc-mono text-[10px] uppercase tracking-[0.12em] text-[color:var(--dc-mute)]"
                    >
                      {t}
                    </span>
                  ))}
                </div>
              </div>
              <div className="md:col-span-9">
                <p className="font-dc-display text-[clamp(1.5rem,3.2vw,2.4rem)] font-medium leading-[1.35] tracking-[-0.02em] text-[color:var(--dc-ink)]">
                  {feature.summary}.
                </p>
                <p className="mt-4 font-dc-mono text-[12px] tracking-[0.06em] text-[color:var(--dc-mute)]">
                  — {feature.client}
                </p>
              </div>
            </div>
          </article>
        </Reveal>

        {/* 나머지 — 헤어라인 리스트 행 */}
        <div>
          {rest.map((c, i) => (
            <Reveal key={c.client} delay={0.06 + 0.05 * i}>
              <article className="grid grid-cols-1 gap-2 border-b border-[color:var(--dc-line)] py-6 transition-colors duration-300 hover:bg-[rgba(255,255,255,0.02)] md:grid-cols-12 md:items-baseline md:gap-6">
                <div className="flex gap-2 md:col-span-3">
                  {c.tags.map((t) => (
                    <span
                      key={t}
                      className="border border-[color:var(--dc-line)] px-2 py-0.5 font-dc-mono text-[10px] uppercase tracking-[0.12em] text-[color:var(--dc-mute-2)]"
                    >
                      {t}
                    </span>
                  ))}
                </div>
                <h3 className="font-dc-display text-[1.1rem] font-semibold tracking-[-0.01em] text-[color:var(--dc-ink)] md:col-span-4">
                  {c.client}
                </h3>
                <p className="font-dc-body text-[14px] leading-relaxed text-[color:var(--dc-mute)] md:col-span-5">
                  {c.summary}
                </p>
              </article>
            </Reveal>
          ))}
        </div>

        {/* 제3자 검증 스트립 */}
        <Reveal delay={0.18}>
          <div className="mt-14 grid grid-cols-1 gap-10 border border-[color:var(--dc-line)] p-8 md:grid-cols-12 md:p-10">
            <div className="md:col-span-3">
              <span className="font-dc-mono text-[11px] uppercase tracking-[0.18em] text-[color:var(--dc-mute-2)]">
                인증·선정
              </span>
            </div>
            <ul className="flex flex-col gap-2.5 md:col-span-5">
              {CREDENTIALS.map((c) => (
                <li key={c} className="flex items-baseline gap-3 font-dc-body text-[13.5px] text-[color:var(--dc-mute)]">
                  <span aria-hidden="true" className="font-dc-mono text-[color:var(--dc-mute-2)]">↳</span>
                  {c}
                </li>
              ))}
            </ul>
            <div className="flex flex-col gap-2.5 md:col-span-4">
              <span className="font-dc-mono text-[11px] uppercase tracking-[0.18em] text-[color:var(--dc-mute-2)]">
                외부 프로필에서 검증하기
              </span>
              {PROFILES.map((p) => (
                <a
                  key={p.name}
                  href={p.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group inline-flex items-center gap-1.5 font-dc-body text-[13.5px] text-[color:var(--dc-ink)] transition-colors hover:text-[color:var(--dc-purple-text)]"
                >
                  {p.name}
                  <ArrowUpRight className="h-3.5 w-3.5 text-[color:var(--dc-mute-2)] transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                </a>
              ))}
            </div>
          </div>
        </Reveal>

        <Reveal delay={0.22}>
          <p className="mt-8 font-dc-mono text-[12px] uppercase tracking-[0.14em] text-[color:var(--dc-mute-2)]">
            + 설립 6개월 차 누적 계약 2억 원 · 미국 · 일본 · 프랑스 포함 15개 이상의 프로젝트
          </p>
        </Reveal>
      </div>
    </section>
  );
}
