import { ArrowRight } from 'lucide-react';
import { Reveal } from '../anim/Reveal';

const FEATURES = [
  '12개국 7 AI 검색 + 5대 SNS 멀티시그널 학습',
  'URL 한 줄 입력 → 채널별 노출 확률 · GEO 점수',
  '우선순위 개선 액션까지 자동 제시',
  '매주 리트레이닝 · 30M+ rows · MAPE 8.6%',
];

const CHANNELS = [
  { name: 'Google AI Overviews', pct: 78 },
  { name: 'Perplexity', pct: 62 },
  { name: 'YouTube', pct: 71 },
  { name: 'Instagram', pct: 54 },
];

export function GeoSection() {
  return (
    <section
      id="geo"
      className="relative scroll-mt-24 border-t border-[color:var(--dc-line)] px-5 py-24 md:px-8 md:py-32"
    >
      <div className="mx-auto grid max-w-[1240px] items-center gap-12 lg:grid-cols-2 lg:gap-16">
        {/* Text */}
        <div>
          <Reveal>
            <div className="font-dc-label text-[12px] uppercase tracking-[0.2em] text-[color:var(--dc-purple)]">
              01 — GEO 모니터링
            </div>
          </Reveal>
          <Reveal delay={0.05}>
            <h2 className="mt-4 font-dc-display text-[clamp(2rem,4.4vw,3.4rem)] font-extrabold leading-[1.05] tracking-[-0.02em] text-[color:var(--dc-ink)]">
              발행 전에, 어디서
              <br />
              <span className="text-[color:var(--dc-purple)]">발견될지</span>{' '}
              예측합니다.
            </h2>
          </Reveal>
          <Reveal delay={0.1}>
            <p className="mt-5 max-w-md font-dc-body text-[15px] leading-relaxed text-[color:var(--dc-mute)]">
              AI 검색 · SNS · 추천 알고리즘에서의 노출 · 인용 · 추천을 발행 전에 예측하고
              모니터링하는 멀티시그널 마케팅 AI.
            </p>
          </Reveal>
          <ul className="mt-8 flex flex-col gap-3">
            {FEATURES.map((f, i) => (
              <Reveal key={f} delay={0.12 + i * 0.05}>
                <li className="flex items-start gap-3 font-dc-body text-[14px] text-[color:var(--dc-ink-soft)]">
                  <span className="mt-[7px] h-1.5 w-1.5 shrink-0 rounded-full bg-[color:var(--dc-purple)]" />
                  {f}
                </li>
              </Reveal>
            ))}
          </ul>
          <Reveal delay={0.35}>
            <a
              href="#contact"
              className="group mt-9 inline-flex items-center gap-2 font-dc-label text-sm font-semibold text-[color:var(--dc-ink)]"
            >
              <span className="border-b border-[color:var(--dc-purple-line)] pb-0.5">GEO 진단 신청</span>
              <ArrowRight className="h-4 w-4 text-[color:var(--dc-purple)] transition-transform group-hover:translate-x-1" />
            </a>
          </Reveal>
        </div>

        {/* Visual — faux prediction readout */}
        <Reveal delay={0.15} className="dc-glass rounded-2xl p-6 md:p-8">
          <div className="flex items-center justify-between">
            <span className="font-dc-label text-[11px] uppercase tracking-[0.15em] text-[color:var(--dc-mute)]">
              채널별 노출 확률
            </span>
            <span className="font-dc-label text-[11px] text-[color:var(--dc-mute-2)]">pluora · v0.4</span>
          </div>
          <div className="mt-6 flex flex-col gap-4">
            {CHANNELS.map((c) => (
              <div key={c.name}>
                <div className="flex items-center justify-between font-dc-body text-[13px]">
                  <span className="text-[color:var(--dc-ink-soft)]">{c.name}</span>
                  <span className="font-dc-label text-[color:var(--dc-ink)]">{c.pct}%</span>
                </div>
                <div className="mt-2 h-2 overflow-hidden rounded-full bg-white/5">
                  <div
                    className="h-full rounded-full"
                    style={{ width: `${c.pct}%`, background: 'linear-gradient(90deg, var(--dc-purple), #a06bff)' }}
                  />
                </div>
              </div>
            ))}
          </div>
          <div className="mt-7 flex items-center justify-between border-t border-[color:var(--dc-line)] pt-5">
            <span className="font-dc-label text-[11px] uppercase tracking-[0.15em] text-[color:var(--dc-mute)]">
              GEO score
            </span>
            <span className="font-dc-display text-3xl font-extrabold text-[color:var(--dc-ink)]">
              82<span className="text-lg text-[color:var(--dc-mute-2)]">/100</span>
            </span>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
