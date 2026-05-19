import { motion } from 'motion/react';

const stats: { value: string; label: string; sub?: string }[] = [
  { value: '30M+',  label: 'training rows', sub: 'pluora · weekly refresh' },
  { value: '12',    label: 'countries',     sub: 'real ISP IP capture' },
  { value: '7+5',   label: 'AI · SNS',      sub: '7 AI search · 5 SNS' },
  { value: '85+',   label: 'outlets',       sub: 'news · communities' },
  { value: '8.6%',  label: 'MAPE',          sub: 'pluora prediction error' },
  { value: '192',   label: 'verified',      sub: 'publish↔citation cases' },
  { value: '50+',   label: 'deployments',   sub: 'across kr · global' },
  { value: '30+',   label: 'clients',       sub: 'startups → enterprise' },
];

export function Numbers() {
  return (
    <section
      id="numbers"
      className="relative py-32 md:py-44 px-6 md:px-10 border-t border-[color:var(--ink-line)] overflow-hidden"
      aria-label="Numbers"
    >
      {/* Subtle backdrop */}
      <div className="absolute inset-0 bg-grid opacity-30 pointer-events-none" aria-hidden />
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            'radial-gradient(60% 50% at 50% 50%, rgba(163,255,18,0.05), transparent 70%)',
        }}
        aria-hidden
      />

      <div className="relative max-w-[1400px] mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          viewport={{ once: true, margin: '-20%' }}
          className="grid md:grid-cols-12 gap-6 md:gap-10 mb-16 md:mb-20"
        >
          <div className="md:col-span-3 lg:col-span-2">
            <div className="mono-eyebrow">— 03 / numbers</div>
          </div>
          <div className="md:col-span-9 lg:col-span-10">
            <h2 className="display-lg text-[color:var(--paper)]">
              The <em className="font-display italic font-light">infrastructure</em>, in
              numbers.
            </h2>
            <p className="mt-6 max-w-xl text-[color:var(--mute-1)] text-base md:text-lg leading-relaxed">
              자본은 인프라를 살 수 있지만, 시간만이 쌓는 데이터는 살 수 없습니다.
              매주 새로 적립되는 측정·예측 자산입니다.
            </p>
          </div>
        </motion.div>

        <ul className="grid grid-cols-2 md:grid-cols-4 gap-px bg-[color:var(--ink-line)] border border-[color:var(--ink-line)]">
          {stats.map((s, i) => (
            <motion.li
              key={s.label}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: i * 0.05, ease: [0.16, 1, 0.3, 1] }}
              viewport={{ once: true, margin: '-15%' }}
              className="bg-[color:var(--ink-base)] p-6 md:p-8 flex flex-col gap-3"
            >
              <div className="font-display text-5xl md:text-6xl leading-none text-[color:var(--paper)]">
                {s.value}
              </div>
              <div className="mono-meta text-[color:var(--paper)]">{s.label}</div>
              {s.sub && (
                <div className="mono-meta text-[color:var(--mute-2)]">{s.sub}</div>
              )}
            </motion.li>
          ))}
        </ul>
      </div>
    </section>
  );
}
