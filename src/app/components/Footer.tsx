import { motion } from 'motion/react';
import { ArrowUpRight } from 'lucide-react';
import { trackEvent } from '@/lib/gtag';

const models = [
  { code: 'Pluora',         url: 'https://georank24.com', label: 'georank24.com' },
  { code: 'Pluora-Lead',    url: 'https://lead.georank24.com', label: 'lead.georank24.com' },
  { code: 'LiteCX-Voice',   url: 'https://litecx.com',    label: 'litecx.com' },
];

export function Footer() {
  const now = new Date();
  const year = now.getFullYear();
  const buildHash = '0430.04';

  return (
    <footer
      id="contact"
      className="relative pt-32 md:pt-44 pb-10 px-6 md:px-10 border-t border-[color:var(--ink-line)] overflow-hidden"
      aria-label="Inquiry"
    >
      {/* Backdrop signal */}
      <div className="absolute inset-0 bg-grid opacity-30 pointer-events-none" aria-hidden />
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            'radial-gradient(60% 60% at 80% 100%, rgba(163,255,18,0.08), transparent 70%)',
        }}
        aria-hidden
      />

      <div className="relative max-w-[1400px] mx-auto">
        {/* Big call */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
          viewport={{ once: true, margin: '-15%' }}
          className="grid md:grid-cols-12 gap-6 md:gap-10 mb-24 md:mb-32"
        >
          <div className="md:col-span-3 lg:col-span-2">
            <div className="mono-eyebrow">— 06 / inquiry</div>
          </div>
          <div className="md:col-span-9 lg:col-span-10">
            <h2 className="display-xl text-[color:var(--paper)]">
              <span className="block">Open for</span>
              <span className="block">
                <em className="font-display italic font-light text-[color:var(--signal)]">
                  full-funnel
                </em>{' '}
                collaboration.
              </span>
            </h2>
            <p className="mt-8 max-w-2xl text-[color:var(--mute-1)] text-base md:text-lg leading-relaxed">
              <span className="text-[color:var(--paper)]">Pluora 진단(Plurank)</span>,
              단일 모델 도입, 풀 펀넬 프로젝트, 인접 영역 공동 연구 — 어떤 형태든 환영합니다.
              초기 진단은 무료로 제공해드립니다.
            </p>

            <div className="mt-10 flex flex-col sm:flex-row gap-4">
              <a
                href="mailto:glenn.kim@twostepsahead.co.kr?subject=TwoStepsAhead%20%E2%80%94%20%EC%97%B0%EB%9D%BD%EC%B0%BD%EA%B5%AC"
                onClick={() => trackEvent('contact_click', { type: 'email' })}
                className="group inline-flex items-center gap-3 bg-[color:var(--signal)] text-[color:var(--ink-base)] px-7 py-4 rounded-full text-sm font-medium hover:bg-[color:var(--paper)] transition-colors"
              >
                <span>Open inquiry</span>
                <ArrowUpRight className="w-4 h-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              </a>
              <a
                href="mailto:glenn.kim@twostepsahead.co.kr"
                onClick={() => trackEvent('contact_click', { type: 'email_secondary' })}
                className="inline-flex items-center gap-3 border border-[color:var(--ink-line)] hover:border-[color:var(--signal-line)] hover:text-[color:var(--signal)] text-[color:var(--paper)] px-7 py-4 rounded-full text-sm transition-colors"
              >
                glenn.kim@twostepsahead.co.kr
              </a>
            </div>
          </div>
        </motion.div>

        {/* Index strip */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.1 }}
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-12 gap-8 md:gap-10 pt-12 border-t border-[color:var(--ink-line)]"
        >
          {/* Column · brand */}
          <div className="md:col-span-4 lg:col-span-3">
            <div className="font-display text-2xl text-[color:var(--paper)]">
              Two<span className="text-[color:var(--signal)]">Steps</span>Ahead
            </div>
            <p className="mt-2 mono-meta">
              marketing intelligence lab
              <br />
              measurement-first · v0.7
            </p>
          </div>

          {/* Column · models */}
          <div className="md:col-span-4 lg:col-span-4">
            <div className="mono-eyebrow mb-4">/ models</div>
            <ul className="space-y-2">
              {models.map((m) => (
                <li key={m.code}>
                  <a
                    href={m.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    onClick={() =>
                      trackEvent('footer_service_click', { service: m.code })
                    }
                    className="link-signal mono-meta text-[color:var(--paper)]"
                  >
                    <span className="text-[color:var(--mute-2)]">↗</span>
                    <span>{m.code}</span>
                    <span className="text-[color:var(--mute-2)]">· {m.label}</span>
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Column · ops */}
          <div className="md:col-span-4 lg:col-span-5 grid grid-cols-2 gap-6 mono-meta">
            <div>
              <div className="text-[color:var(--mute-2)] mb-1">— location</div>
              <div className="text-[color:var(--paper)]">Seoul · KR</div>
              <div className="text-[color:var(--mute-1)]">37.55N 126.97E</div>
            </div>
            <div>
              <div className="text-[color:var(--mute-2)] mb-1">— inquiry</div>
              <a
                href="mailto:glenn.kim@twostepsahead.co.kr"
                className="link-signal text-[color:var(--paper)]"
              >
                glenn.kim
              </a>
              <div className="text-[color:var(--mute-1)]">@twostepsahead.co.kr</div>
            </div>
            <div>
              <div className="text-[color:var(--mute-2)] mb-1">— hours</div>
              <div className="text-[color:var(--paper)]">Mon–Fri</div>
              <div className="text-[color:var(--mute-1)]">10:00–19:00 KST</div>
            </div>
            <div>
              <div className="text-[color:var(--mute-2)] mb-1">— track</div>
              <div className="text-[color:var(--paper)]">ChargeFLOW</div>
              <div className="text-[color:var(--mute-1)]">+ Fleet (beta)</div>
            </div>
          </div>
        </motion.div>

        {/* Bottom build strip */}
        <div className="mt-12 pt-6 border-t border-[color:var(--ink-line)] flex flex-col md:flex-row gap-3 md:items-center md:justify-between mono-meta">
          <div className="flex items-center gap-3 text-[color:var(--mute-1)]">
            <span className="signal-dot" aria-hidden />
            <span>system online</span>
            <span className="text-[color:var(--mute-3)]">/</span>
            <span>build {buildHash}</span>
            <span className="text-[color:var(--mute-3)]">/</span>
            <span>commit a255de0</span>
          </div>
          <div className="flex items-center gap-6 text-[color:var(--mute-2)]">
            <a href="#" className="link-signal">privacy</a>
            <a href="#" className="link-signal">terms</a>
            <span>© {year} TwoStepsAhead</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
