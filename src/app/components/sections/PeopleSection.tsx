import { ArrowRight } from 'lucide-react';
import { PEOPLE } from '../../content';
import { Reveal } from '../anim/Reveal';
import { Eyebrow } from '../Eyebrow';

export function PeopleSection() {
  return (
    <section
      id="people"
      className="scroll-mt-24 border-t border-[color:var(--lt-line)] bg-[color:var(--lt-bg)] px-5 py-24 md:px-8 md:py-32"
    >
      <div className="mx-auto max-w-[1200px]">
        <Reveal>
          <Eyebrow index="07" label="채용과 조직문화" />
        </Reveal>

        <div className="mt-8 grid gap-14 lg:grid-cols-[minmax(0,0.9fr)_minmax(420px,1.1fr)] lg:gap-20">
          <div>
            <Reveal delay={0.06}>
              <h2 className="whitespace-pre-line break-keep font-dc-display text-[clamp(2rem,4.5vw,3.6rem)] font-semibold leading-[1.12] tracking-[-0.03em] text-[color:var(--lt-ink)]">
                {PEOPLE.title}
              </h2>
            </Reveal>
            <Reveal delay={0.12}>
              <p className="mt-7 max-w-[560px] break-keep font-dc-body text-[15px] leading-[1.85] text-[color:var(--lt-mute)]">
                {PEOPLE.lead}
              </p>
            </Reveal>
            <Reveal delay={0.18}>
              <a
                href="/careers/"
                className="mt-9 inline-flex items-center gap-2 rounded-full border border-[color:var(--lt-purple)] bg-[color:var(--lt-purple)] px-6 py-3 font-dc-label text-[13px] font-semibold text-white transition-[transform,background-color] duration-300 hover:-translate-y-0.5 hover:bg-[#5c22d6]"
              >
                팀과 채용 알아보기
                <ArrowRight className="h-4 w-4" />
              </a>
            </Reveal>
          </div>

          <div className="border-t border-[color:var(--lt-line)]">
            {PEOPLE.principles.map((principle, index) => (
              <Reveal key={principle.name} delay={0.06 * index}>
                <article className="grid gap-3 border-b border-[color:var(--lt-line)] py-7 sm:grid-cols-[48px_1fr] sm:gap-5">
                  <span className="font-dc-mono text-[11px] text-[color:var(--lt-purple)]">
                    {String(index + 1).padStart(2, '0')}
                  </span>
                  <div>
                    <h3 className="font-dc-display text-[1.15rem] font-semibold tracking-[-0.015em] text-[color:var(--lt-ink)]">
                      {principle.name}
                    </h3>
                    <p className="mt-2 break-keep font-dc-body text-[13.5px] leading-[1.75] text-[color:var(--lt-mute)]">
                      {principle.desc}
                    </p>
                  </div>
                </article>
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
