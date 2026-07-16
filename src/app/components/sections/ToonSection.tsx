import { ArrowRight, Play } from 'lucide-react';
import { Reveal } from '../anim/Reveal';

const FEATURES = [
  '인스타툰 4컷 → 9:16 숏폼 자동 변환',
  'YouTube Shorts · Reels · TikTok 교차 배포',
  '브랜드 톤 · 자막 · 모션 프리셋 적용',
];

const PROOF = [
  { v: '300+', k: '실사용자' },
  { v: '₩800만', k: '초기 대행매출' },
  { v: '4개 군', k: '검증 고객군' },
];

export function ToonSection() {
  return (
    <section
      id="toon"
      className="relative scroll-mt-24 border-t border-[color:var(--dc-line)] px-5 py-24 md:px-8 md:py-32"
    >
      <div className="mx-auto grid max-w-[1240px] items-center gap-12 lg:grid-cols-2 lg:gap-16">
        {/* Visual — 4-panel → shorts */}
        <Reveal delay={0.15} className="order-2 lg:order-1">
          <div className="flex items-center justify-center gap-5 md:gap-6">
            <div className="grid grid-cols-2 gap-2">
              {[1, 2, 3, 4].map((n) => (
                <div
                  key={n}
                  className="flex h-16 w-16 items-center justify-center rounded-lg border border-[color:var(--dc-line)] font-dc-label text-[11px] text-[color:var(--dc-mute-2)] md:h-20 md:w-20"
                  style={{ background: 'linear-gradient(135deg, rgba(248,123,82,0.14), rgba(123,57,252,0.10))' }}
                >
                  {n}컷
                </div>
              ))}
            </div>
            <ArrowRight className="h-6 w-6 shrink-0 text-[color:var(--dc-orange)]" />
            <div
              className="relative flex h-52 w-[118px] items-center justify-center overflow-hidden rounded-2xl border border-[color:var(--dc-line)] md:h-64 md:w-[150px]"
              style={{ background: 'linear-gradient(160deg, rgba(248,123,82,0.24), rgba(20,19,43,0.9))' }}
            >
              <span className="dc-glass flex h-11 w-11 items-center justify-center rounded-full">
                <Play className="h-4 w-4 fill-current text-white" />
              </span>
              <span className="absolute bottom-3 left-0 right-0 text-center font-dc-label text-[10px] uppercase tracking-[0.15em] text-[color:var(--dc-ink-soft)]">
                9:16 shorts
              </span>
            </div>
          </div>
        </Reveal>

        {/* Text */}
        <div className="order-1 lg:order-2">
          <Reveal>
            <div className="font-dc-label text-[12px] uppercase tracking-[0.2em] text-[color:var(--dc-orange)]">
              02 — ToonAgent · <span className="text-[color:var(--dc-mute)]">live · 특허 출원중</span>
            </div>
          </Reveal>
          <Reveal delay={0.05}>
            <h2 className="mt-4 font-dc-display text-[clamp(2rem,4.4vw,3.4rem)] font-extrabold leading-[1.05] tracking-[-0.02em] text-[color:var(--dc-ink)]">
              인스타툰을,
              <br />
              <span className="text-[color:var(--dc-orange)]">숏폼으로</span>{' '}
              자동 생산.
            </h2>
          </Reveal>
          <Reveal delay={0.1}>
            <p className="mt-5 max-w-md font-dc-body text-[15px] leading-relaxed text-[color:var(--dc-mute)]">
              4컷 인스타툰을 9:16 숏폼으로 변환하고, 주요 플랫폼에 교차 배포하는 콘텐츠 생성
              에이전트. 지금 실서비스 중입니다.
            </p>
          </Reveal>
          <ul className="mt-8 flex flex-col gap-3">
            {FEATURES.map((f, i) => (
              <Reveal key={f} delay={0.12 + i * 0.05}>
                <li className="flex items-start gap-3 font-dc-body text-[14px] text-[color:var(--dc-ink-soft)]">
                  <span className="mt-[7px] h-1.5 w-1.5 shrink-0 rounded-full bg-[color:var(--dc-orange)]" />
                  {f}
                </li>
              </Reveal>
            ))}
          </ul>
          <Reveal delay={0.26}>
            <div className="mt-8 flex flex-wrap gap-x-8 gap-y-4 border-t border-[color:var(--dc-line)] pt-6">
              {PROOF.map((p) => (
                <div key={p.k} className="flex flex-col">
                  <span className="font-dc-display text-xl font-extrabold text-[color:var(--dc-ink)]">
                    {p.v}
                  </span>
                  <span className="font-dc-label text-[10px] uppercase tracking-[0.1em] text-[color:var(--dc-mute-2)]">
                    {p.k}
                  </span>
                </div>
              ))}
            </div>
          </Reveal>
          <Reveal delay={0.3}>
            <a
              href="#contact"
              className="group mt-9 inline-flex items-center gap-2 font-dc-label text-sm font-semibold text-[color:var(--dc-ink)]"
            >
              <span className="border-b border-[color:rgba(248,123,82,0.5)] pb-0.5">툰에이전트 문의</span>
              <ArrowRight className="h-4 w-4 text-[color:var(--dc-orange)] transition-transform group-hover:translate-x-1" />
            </a>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
