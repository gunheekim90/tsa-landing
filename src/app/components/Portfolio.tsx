import { motion, useScroll, useTransform } from 'motion/react';
import { useRef } from 'react';

type Stage = 'D' | 'A' | 'C' | 'H';

interface Deployment {
  number: string;
  name: string;
  category: string;
  description: string;
  year: string;
  stage: Stage;
}

const stageLabel: Record<Stage, string> = {
  D: 'discovery',
  A: 'activation',
  C: 'conversation',
  H: 'horizon',
};

const stageColor: Record<Stage, string> = {
  D: 'var(--stage-top)',
  A: 'var(--stage-mid)',
  C: 'var(--stage-bottom)',
  H: 'var(--stage-horizon)',
};

const deployments: Deployment[] = [
  { number: '01', name: 'AcentKorea',  category: 'Data Marketing',         description: '데이터 기반 마케팅 자동화 플랫폼',  year: '2024', stage: 'D' },
  { number: '02', name: 'EV HansolMS', category: 'Renewable Energy',       description: '전기차 충전소 통합 관리 시스템',     year: '2023', stage: 'H' },
  { number: '03', name: 'SAUNA',       category: 'Video Editor Platform',  description: 'AI 기반 영상 편집 자동화 툴',         year: '2024', stage: 'A' },
  { number: '04', name: 'CHIC',        category: 'Fashion',                description: '온라인 패션 커머스 플랫폼',           year: '2023', stage: 'D' },
  { number: '05', name: 'HONORS CLUB', category: 'K-TRIP · Membership',    description: '프리미엄 여행 멤버십 서비스',         year: '2024', stage: 'C' },
  { number: '06', name: 'Kurly',       category: 'E-commerce',             description: '신선식품 새벽배송 플랫폼',           year: '2023', stage: 'C' },
  { number: '07', name: 'Queenit',     category: '4050 Fashion',           description: '시니어 타겟 패션 큐레이션',           year: '2024', stage: 'D' },
  { number: '08', name: 'TeamKai',     category: 'AI CX',                  description: '고객 경험 자동화 AI 에이전트',        year: '2023', stage: 'C' },
  { number: '09', name: 'mentat',      category: 'RAG Search',             description: '문서 검색 및 지식 관리 AI',           year: '2024', stage: 'A' },
  { number: '10', name: 'TOKUYAMA',    category: 'Global Partner',         description: '글로벌 B2B 파트너십 플랫폼',          year: '2023', stage: 'A' },
];

function DeploymentCard({ d }: { d: Deployment }) {
  return (
    <motion.article
      whileHover={{ y: -4 }}
      transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
      className="group shrink-0 w-[78vw] sm:w-[60vw] md:w-[400px] lg:w-[440px] snap-start"
    >
      <div className="relative h-[420px] md:h-[480px] flex flex-col p-7 md:p-8 border border-[color:var(--ink-line)] bg-[color:var(--ink-surface)] rounded-2xl overflow-hidden transition-colors duration-500 group-hover:border-[color:var(--signal-line)]">
        {/* Subtle inner grid */}
        <div className="absolute inset-0 bg-grid-fine opacity-50 pointer-events-none" aria-hidden />
        {/* Stage edge */}
        <div
          className="absolute top-0 left-0 right-0 h-px"
          style={{ background: stageColor[d.stage], opacity: 0.4 }}
          aria-hidden
        />

        <div className="relative flex items-center justify-between mb-10">
          <span className="mono-meta">{d.number} / 10</span>
          <span
            className="mono-meta inline-flex items-center gap-1.5 px-2 py-0.5 border rounded-full"
            style={{
              color: stageColor[d.stage],
              borderColor: 'rgba(255,255,255,0.12)',
            }}
          >
            <span
              className="block w-1 h-1 rounded-full"
              style={{ background: stageColor[d.stage] }}
              aria-hidden
            />
            {d.stage} · {stageLabel[d.stage]}
          </span>
        </div>

        <div className="relative mt-auto">
          <span className="font-display text-7xl md:text-8xl leading-none text-[color:var(--paper)] block mb-6 group-hover:text-[color:var(--signal)] transition-colors duration-700">
            {d.stage}
          </span>
          <h3 className="font-display text-3xl md:text-4xl font-light text-[color:var(--paper)] leading-tight">
            {d.name}
          </h3>
          <p className="mt-3 mono-meta text-[color:var(--mute-1)]">{d.category}</p>
          <p className="mt-4 text-sm text-[color:var(--mute-1)] leading-relaxed">{d.description}</p>
        </div>

        <div className="relative flex items-center justify-between mt-6 pt-5 border-t border-[color:var(--ink-line)] mono-meta">
          <span>year · {d.year}</span>
          <span className="text-[color:var(--mute-2)]">deploy.tsa.lab</span>
        </div>
      </div>
    </motion.article>
  );
}

export function Portfolio() {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ['start end', 'end start'] });
  // Counter-parallax — drift the title slightly as the row scrolls
  const titleY = useTransform(scrollYProgress, [0, 1], ['-4%', '4%']);

  return (
    <section
      id="deployments"
      ref={ref}
      className="relative py-32 md:py-44 border-t border-[color:var(--ink-line)] overflow-hidden"
      aria-label="Deployments"
    >
      <div className="max-w-[1400px] mx-auto px-6 md:px-10 grid grid-cols-12 gap-6 md:gap-10 mb-16 md:mb-24">
        <div className="col-span-12 md:col-span-3 lg:col-span-2">
          <div className="mono-eyebrow">— 03 / deployments</div>
        </div>
        <motion.div style={{ y: titleY }} className="col-span-12 md:col-span-9 lg:col-span-10">
          <h2 className="display-lg text-[color:var(--paper)]">
            In <em className="font-display italic font-light">production.</em>
          </h2>
          <p className="mt-6 max-w-2xl text-[color:var(--mute-1)] text-base md:text-lg leading-relaxed">
            10개 이상의 운영 사례. 각 사례에는 가동된 모델의 펀넬 단계가 함께 기록된다.
            드래그 또는 스와이프로 가로로 둘러볼 수 있다.
          </p>

          {/* Stage legend */}
          <ul className="mt-8 flex flex-wrap items-center gap-x-6 gap-y-2 mono-meta">
            {(['D', 'A', 'C', 'H'] as Stage[]).map((s) => (
              <li key={s} className="flex items-center gap-2">
                <span
                  className="inline-block w-2 h-2 rounded-full"
                  style={{ background: stageColor[s] }}
                  aria-hidden
                />
                <span>
                  <span className="text-[color:var(--paper)]">{s}</span>
                  <span className="text-[color:var(--mute-2)]"> · {stageLabel[s]}</span>
                </span>
              </li>
            ))}
          </ul>
        </motion.div>
      </div>

      {/* Horizontal scroll row */}
      <div className="relative">
        <div
          className="flex gap-6 px-6 md:px-10 pb-6 overflow-x-auto snap-x snap-mandatory scrollbar-hide"
          style={{ scrollPaddingLeft: '2.5rem' }}
        >
          {deployments.map((d) => (
            <DeploymentCard key={d.name} d={d} />
          ))}
          {/* Trailing spacer */}
          <div className="shrink-0 w-1 md:w-10" aria-hidden />
        </div>

        {/* Edge fades */}
        <div
          className="absolute left-0 top-0 bottom-0 w-12 md:w-20 pointer-events-none"
          style={{ background: 'linear-gradient(to right, var(--ink-base), transparent)' }}
          aria-hidden
        />
        <div
          className="absolute right-0 top-0 bottom-0 w-12 md:w-20 pointer-events-none"
          style={{ background: 'linear-gradient(to left, var(--ink-base), transparent)' }}
          aria-hidden
        />
      </div>

      <div className="max-w-[1400px] mx-auto px-6 md:px-10 mt-10 mono-meta flex justify-between text-[color:var(--mute-1)]">
        <span>↔ scroll · {deployments.length} cases</span>
        <span className="hidden md:inline">selected · last 24 months</span>
      </div>
    </section>
  );
}
