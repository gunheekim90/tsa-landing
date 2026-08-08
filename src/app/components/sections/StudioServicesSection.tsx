import { ArrowUpRight } from 'lucide-react';
import { Reveal } from '../anim/Reveal';
import { Eyebrow } from '../Eyebrow';
import { SERVICES, STUDIO } from '../../content';

/**
 * 스타트업 스튜디오 — "프로덕트 라이브러리" 프레이밍.
 * 서비스명은 이미지 로고 대신 타이포 워드마크(서비스별 자간·웨이트 개성).
 * 컬러 규율: 5종 전부 무채색, 퍼플은 호버 시 화살표에만.
 */
const WORDMARK_STYLE: Record<string, string> = {
  우주콜: 'tracking-[0.28em] font-semibold',
  텔링사주: 'tracking-[0.16em] font-light',
  마이크로웨이브: 'tracking-[-0.04em] font-bold uppercase',
  사장노트: 'tracking-[0.1em] font-medium',
  투니: 'tracking-[-0.02em] font-extrabold',
};

export function StudioServicesSection() {
  const [first, second, ...rest] = SERVICES;

  const Card = ({ s, big = false }: { s: (typeof SERVICES)[number]; big?: boolean }) => (
    <a
      href={s.url}
      target="_blank"
      rel="noopener noreferrer"
      className={`group flex h-full flex-col justify-between border border-[color:var(--dc-line)] bg-[color:var(--dc-bg-2)] p-7 transition-all duration-300 hover:-translate-y-0.5 hover:border-[color:var(--dc-purple-line)] ${
        big ? 'min-h-[220px] md:p-9' : 'min-h-[190px]'
      }`}
    >
      <div className="flex items-start justify-between gap-4">
        <span className="font-dc-mono text-[10px] uppercase tracking-[0.16em] text-[color:var(--dc-mute-2)]">
          {String(SERVICES.indexOf(s) + 1).padStart(2, '0')} — Live
        </span>
        <ArrowUpRight className="h-4 w-4 text-[color:var(--dc-mute-2)] transition-all duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 group-hover:text-[color:var(--dc-purple)]" />
      </div>
      <div>
        <div
          className={`font-dc-display text-[color:var(--dc-ink)] ${big ? 'text-[1.9rem]' : 'text-[1.4rem]'} ${WORDMARK_STYLE[s.name] ?? ''}`}
        >
          {s.name}
        </div>
        <p className="mt-2 font-dc-body text-[13.5px] leading-relaxed text-[color:var(--dc-mute)]">
          {s.tagline}
        </p>
        <p className="mt-3 font-dc-mono text-[10.5px] tracking-[0.06em] text-[color:var(--dc-mute-2)]">
          ↳ {s.url.replace(/^https:\/\/(www\.)?/, '')}
        </p>
      </div>
    </a>
  );

  return (
    <section
      id="studio"
      className="scroll-mt-24 border-t border-[color:var(--dc-line)] bg-[color:var(--dc-bg-2)] px-5 py-24 md:px-8 md:py-32"
    >
      <div className="mx-auto max-w-[1240px]">
        <Reveal>
          <Eyebrow index="03" label="Our products — built & operated" />
        </Reveal>
        <div className="mt-6 grid grid-cols-1 gap-8 lg:grid-cols-12 lg:items-end">
          <Reveal delay={0.06} className="lg:col-span-7">
            <h2 className="whitespace-pre-line font-dc-display text-[clamp(2rem,4.5vw,3.4rem)] font-medium leading-[1.12] tracking-[-0.03em] text-[color:var(--dc-ink)]">
              {STUDIO.heading}
            </h2>
          </Reveal>
          <Reveal delay={0.12} className="lg:col-span-5">
            <p className="max-w-md font-dc-body text-[15px] leading-[1.75] text-[color:var(--dc-mute)]">
              {STUDIO.lead}
            </p>
          </Reveal>
        </div>

        {/* 상단 2 와이드 + 하단 3 그리드 */}
        <div className="mt-14 grid grid-cols-1 gap-4 md:grid-cols-2">
          <Reveal delay={0.06} className="h-full"><Card s={first} big /></Reveal>
          <Reveal delay={0.12} className="h-full"><Card s={second} big /></Reveal>
        </div>
        <div className="mt-4 grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-3">
          {rest.map((s, i) => (
            <Reveal key={s.name} delay={0.08 + i * 0.06} className="h-full">
              <Card s={s} />
            </Reveal>
          ))}
        </div>

        {/* NEXT 고스트 카드 — 스튜디오는 계속 만든다는 신호 */}
        <Reveal delay={0.24}>
          <div className="mt-4 flex min-h-[72px] items-center justify-between border border-dashed border-[color:var(--dc-line)] px-7 py-5">
            <span className="font-dc-mono text-[11px] uppercase tracking-[0.18em] text-[color:var(--dc-mute-2)]">
              06 — Next
            </span>
            <span className="font-dc-body text-[13px] text-[color:var(--dc-mute-2)]">
              다음 서비스를 준비하고 있습니다.
            </span>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
