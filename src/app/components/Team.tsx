import { motion } from 'motion/react';

interface Researcher {
  glyph: string;
  code: string;
  name: string;
  role: string;
  interest: string;
  credentials: string[];
}

const team: Researcher[] = [
  {
    glyph: 'G',
    code: 'G · LEAD',
    name: 'Glenn',
    role: 'CEO · principal',
    interest: 'go-to-market modeling, multi-exit playbooks',
    credentials: ['founded × 4 · exited × 3', 'venture-backed × 2'],
  },
  {
    glyph: 'V',
    code: 'V · OPS',
    name: 'Victor',
    role: 'COO',
    interest: 'growth pipelines, capital sequencing',
    credentials: ['series A / B fundraising'],
  },
  {
    glyph: 'L',
    code: 'L · DESIGN',
    name: 'Lily',
    role: 'design lead',
    interest: 'interface systems, editorial UI',
    credentials: ['12 yrs · brand & product design'],
  },
  {
    glyph: 'D',
    code: 'D · INFRA',
    name: 'Daniel',
    role: 'CTO',
    interest: 'high-throughput backends, MSA',
    credentials: ['15 yrs · large-scale traffic', 'cloud architecture'],
  },
  {
    glyph: 'S',
    code: 'S · ML',
    name: 'Sophie',
    role: 'AI engineer',
    interest: 'LLM fine-tuning, ML serving',
    credentials: ['NLP · LLM specialist', '7 yrs · ML pipelines'],
  },
  {
    glyph: 'J',
    code: 'J · STACK',
    name: 'Jason',
    role: 'full-stack engineer',
    interest: 'react/node, fintech & commerce',
    credentials: ['10 yrs · full-stack', 'fintech · commerce builds'],
  },
];

function ResearcherCard({ r, i }: { r: Researcher; i: number }) {
  return (
    <motion.article
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.7, delay: i * 0.06, ease: [0.16, 1, 0.3, 1] }}
      viewport={{ once: true, margin: '-15%' }}
      className="group relative shrink-0 w-[78vw] sm:w-auto md:shrink"
    >
      <div className="relative h-full p-7 md:p-8 border border-[color:var(--ink-line)] rounded-2xl bg-[color:var(--ink-surface)] overflow-hidden transition-all duration-500 group-hover:border-[color:var(--signal-line)]">
        <div className="absolute inset-0 bg-grid-fine opacity-30 pointer-events-none" aria-hidden />

        <div className="relative flex items-start justify-between mb-10">
          <span className="mono-meta">{String(i + 1).padStart(2, '0')} / 06</span>
          <span className="mono-meta text-[color:var(--mute-2)]">{r.code}</span>
        </div>

        <div className="relative">
          <span className="font-display text-7xl md:text-8xl leading-none text-[color:var(--paper)] block group-hover:text-[color:var(--signal)] transition-colors duration-700">
            {r.glyph}
          </span>
          <h3 className="mt-4 font-display text-3xl text-[color:var(--paper)] leading-tight">
            {r.name}
          </h3>
          <p className="mt-1 mono-meta text-[color:var(--mute-1)]">{r.role}</p>
        </div>

        <p className="relative mt-6 font-display italic text-base md:text-lg text-[color:var(--paper-soft)] leading-snug">
          “{r.interest}”
        </p>

        <ul className="relative mt-6 pt-5 border-t border-[color:var(--ink-line)] space-y-1">
          {r.credentials.map((c, idx) => (
            <li key={idx} className="mono-meta text-[color:var(--mute-1)]">
              — {c}
            </li>
          ))}
        </ul>
      </div>
    </motion.article>
  );
}

export function Team() {
  return (
    <section
      id="researchers"
      className="relative py-32 md:py-44 px-6 md:px-10 border-t border-[color:var(--ink-line)]"
      aria-label="Researchers"
    >
      <div className="max-w-[1400px] mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          viewport={{ once: true, margin: '-20%' }}
          className="grid md:grid-cols-12 gap-6 md:gap-10 mb-20 md:mb-28"
        >
          <div className="md:col-span-3 lg:col-span-2">
            <div className="mono-eyebrow">— 04 / researchers</div>
          </div>
          <div className="md:col-span-9 lg:col-span-10">
            <h2 className="display-lg text-[color:var(--paper)]">
              The <em className="font-display italic font-light">people</em>
              <br />
              behind the models.
            </h2>
            <p className="mt-6 max-w-xl text-[color:var(--mute-1)] text-base md:text-lg leading-relaxed">
              여섯 명의 연구자·엔지니어·디자이너로 구성되어 있습니다. 각자의 관심 영역이 라이브러리의 한 모델을 떠받칩니다.
            </p>
          </div>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 md:gap-6">
          {team.map((r, i) => (
            <ResearcherCard key={r.name} r={r} i={i} />
          ))}
        </div>
      </div>
    </section>
  );
}
