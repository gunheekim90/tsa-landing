import { ArrowRight, Mail } from 'lucide-react';
import { Reveal } from '../anim/Reveal';

export function ContactSection() {
  return (
    <section
      id="contact"
      className="relative scroll-mt-24 overflow-hidden border-t border-[color:var(--dc-line)] px-5 py-28 md:px-8 md:py-40"
    >
      <div
        className="pointer-events-none absolute inset-0"
        aria-hidden="true"
        style={{ background: 'radial-gradient(60% 70% at 50% 100%, rgba(123,57,252,0.20), transparent 70%)' }}
      />
      <div className="relative mx-auto max-w-[1240px] text-center">
        <Reveal>
          <h2 className="mx-auto max-w-3xl font-dc-display text-[clamp(2.4rem,6vw,5rem)] font-extrabold leading-[0.98] tracking-[-0.03em] text-[color:var(--dc-ink)]">
            Predict{' '}
            <span className="font-dc-serif font-normal italic text-[color:var(--dc-purple)]">before</span>
            <br />
            you publish.
          </h2>
        </Reveal>
        <Reveal delay={0.1}>
          <p className="mx-auto mt-7 max-w-lg font-dc-body text-[15px] leading-relaxed text-[color:var(--dc-mute)]">
            GEO 진단, ToonAgent 도입, 또는 둘을 함께 쓰는 통합 프로젝트 — 초기 진단은 무료입니다.
          </p>
        </Reveal>
        <Reveal delay={0.18}>
          <div className="mt-10 flex flex-col items-center justify-center gap-3 sm:flex-row">
            <a
              href="mailto:glenn.kim@twostepsahead.co.kr"
              className="group inline-flex items-center justify-center gap-2 rounded-full bg-[color:var(--dc-purple)] px-7 py-4 font-dc-label text-sm font-semibold text-white shadow-[0_18px_50px_-16px_rgba(123,57,252,0.95)] transition-transform hover:-translate-y-0.5"
            >
              무료 진단 신청
              <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
            </a>
            <a
              href="mailto:glenn.kim@twostepsahead.co.kr"
              className="inline-flex items-center justify-center gap-2 rounded-full border border-[color:var(--dc-line)] bg-[color:var(--dc-navy)] px-7 py-4 font-dc-label text-sm font-semibold text-[color:var(--dc-ink)] transition-colors hover:border-[color:var(--dc-purple-line)]"
            >
              <Mail className="h-4 w-4" />
              glenn.kim@twostepsahead.co.kr
            </a>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
