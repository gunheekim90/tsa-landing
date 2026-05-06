import {
  motion,
  useScroll,
  useTransform,
  useMotionValueEvent,
  type MotionValue,
} from 'motion/react';
import { useRef, useState } from 'react';

const stages = [
  {
    code: 'D',
    label: 'Discovery',
    position: 'top of funnel · core',
    question: 'Who finds you?',
    model: 'Citora · v0.4',
    role: 'core',
    answer:
      'TwoStepsAhead가 직접 학습·운영하는 코어 모델입니다. AI는 모든 콘텐츠를 인용하지 않습니다 — Citora는 검색과 AI 검색에서 어떤 콘텐츠가 인용될지 발행 전에 알려드립니다. GEO 점수, 인용 확률, 노출 경로를 한 번에 출력합니다.',
    metric: '7 AI platforms · 12 countries · MAPE 8.6%',
  },
  {
    code: 'A',
    label: 'Activation',
    position: 'mid funnel',
    question: 'What activates them?',
    model: 'Citora Lead',
    role: 'extended',
    answer:
      '방문 기업을 IP·도메인 신호로 식별하고, 가격·데모 같은 구매 의도 페이지의 행동을 영업팀 Slack으로 즉시 전달합니다. Citora가 키운 익명 트래픽을 실제 영업 파이프라인으로 옮기는 단계입니다.',
    metric: 'first alert in 5min · slack-native',
  },
  {
    code: 'C',
    label: 'Conversation',
    position: 'bottom of funnel',
    question: 'How do they close?',
    model: 'LiteCX-Voice',
    role: 'extended',
    answer:
      '대표번호 한 줄로 영업 응대·예약·VOC가 자동 처리됩니다. PBX-Free, WebRTC 콘솔, 실시간 STT 기반의 가벼운 CX 인프라로 전환 단계의 응대를 책임집니다.',
    metric: 'pbx-free · realtime STT',
  },
  {
    code: 'H',
    label: 'Horizon',
    position: 'adjacent track',
    question: 'What powers the adjacent?',
    model: 'ChargeFLOW',
    role: 'horizon',
    answer:
      '펀넬 밖 인접 영역의 트랙입니다. EV 충전 인프라와 법인 정산을 함께 다루며, 데이터·결제·에너지 흐름을 모델링합니다.',
    metric: '~5,000 chargers · validating',
  },
] as const;

const segments: [number, number, number, number][] = [
  [0.00, 0.06, 0.22, 0.28],
  [0.28, 0.34, 0.50, 0.56],
  [0.56, 0.62, 0.78, 0.84],
  [0.84, 0.90, 1.00, 1.00],
];

type Stage = (typeof stages)[number];

function GhostLetter({
  letter,
  progress,
  segment,
}: {
  letter: string;
  progress: MotionValue<number>;
  segment: [number, number, number, number];
}) {
  const opacity = useTransform(progress, segment, [0, 0.06, 0.06, 0]);
  return (
    <motion.span
      style={{ opacity }}
      className="absolute font-display text-[clamp(20rem,42vw,40rem)] leading-none text-[color:var(--paper)]"
      aria-hidden
    >
      {letter}
    </motion.span>
  );
}

function StageCard({
  stage,
  index,
  progress,
  segment,
}: {
  stage: Stage;
  index: number;
  progress: MotionValue<number>;
  segment: [number, number, number, number];
}) {
  const opacity = useTransform(progress, segment, [0, 1, 1, 0]);
  const y = useTransform(progress, segment, [16, 0, 0, -16]);
  return (
    <motion.div
      style={{ opacity, y }}
      className="absolute inset-0 grid md:grid-cols-12 gap-6 md:gap-10"
    >
      <div className="md:col-span-4 flex flex-col gap-2">
        <div className="mono-eyebrow text-[color:var(--signal)]">
          stage {String(index).padStart(2, '0')} · {stage.position}
        </div>
        <div className="font-display text-4xl md:text-5xl leading-none text-[color:var(--paper)]">
          {stage.label}.
        </div>
        <div className="mono-meta text-[color:var(--mute-1)] mt-2 flex flex-wrap items-center gap-2">
          <span>{stage.model}</span>
          {stage.role === 'core' && (
            <span className="px-1.5 py-0.5 border border-[color:var(--signal-line)] text-[color:var(--signal)] rounded-full text-[0.6rem] tracking-[0.18em]">
              core
            </span>
          )}
        </div>
      </div>

      <div className="md:col-span-8 flex flex-col gap-5">
        <p className="font-display italic text-2xl md:text-3xl text-[color:var(--paper-soft)] leading-snug max-w-xl">
          “{stage.question}”
        </p>
        <p className="text-[color:var(--mute-1)] text-base md:text-lg leading-relaxed max-w-xl">
          {stage.answer}
        </p>
        <div className="mono-meta text-[color:var(--paper)] flex items-center gap-3 mt-2">
          <span className="signal-dot" aria-hidden />
          <span>signal · {stage.metric}</span>
        </div>
      </div>
    </motion.div>
  );
}

export function About() {
  const ref = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ['start start', 'end end'] });
  const [active, setActive] = useState(0);

  useMotionValueEvent(scrollYProgress, 'change', (p) => {
    if (p < 0.28) setActive(0);
    else if (p < 0.56) setActive(1);
    else if (p < 0.84) setActive(2);
    else setActive(3);
  });

  const handleStageClick = (i: number) => {
    if (!ref.current) return;
    const segMid = (segments[i][1] + segments[i][2]) / 2;
    const top = ref.current.offsetTop + ref.current.offsetHeight * segMid - window.innerHeight * 0.5;
    window.scrollTo({ top, behavior: 'smooth' });
  };

  return (
    <section
      id="research"
      ref={ref}
      className="relative"
      style={{ height: '420vh' }}
      aria-label="Research"
    >
      <div className="sticky top-0 h-[100svh] overflow-hidden">
        <div className="absolute inset-0 bg-grid opacity-50 pointer-events-none" aria-hidden />

        {/* Giant ghost letter (current stage) */}
        <div className="absolute -left-10 md:left-0 top-0 bottom-0 w-[55vw] flex items-center pointer-events-none select-none">
          {stages.map((s, i) => (
            <GhostLetter key={s.code} letter={s.code} progress={scrollYProgress} segment={segments[i]} />
          ))}
        </div>

        <div className="relative z-10 h-full max-w-[1400px] mx-auto px-6 md:px-10 grid grid-cols-12 gap-6 md:gap-10">
          {/* Stage navigator */}
          <aside className="hidden md:flex col-span-3 lg:col-span-2 flex-col justify-center gap-1">
            <div className="mono-eyebrow mb-6">— 01 / research</div>
            {stages.map((s, i) => (
              <button
                key={s.code}
                type="button"
                onClick={() => handleStageClick(i)}
                aria-label={`go to ${s.label}`}
                className="group flex items-center gap-3 py-2 text-left"
              >
                <span
                  className={`block h-px transition-all duration-500 ${
                    active === i ? 'w-10 bg-[color:var(--signal)]' : 'w-4 bg-[color:var(--mute-3)]'
                  }`}
                />
                <span
                  className={`font-mono text-xs tracking-wide transition-colors duration-500 ${
                    active === i ? 'text-[color:var(--paper)]' : 'text-[color:var(--mute-2)]'
                  }`}
                >
                  {String(i).padStart(2, '0')} · {s.label.toLowerCase()}
                </span>
              </button>
            ))}
          </aside>

          {/* Heading + stage card stack */}
          <div className="col-span-12 md:col-span-9 lg:col-span-10 flex flex-col justify-center gap-12">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
              viewport={{ once: true, margin: '-30%' }}
              className="max-w-3xl"
            >
              <span className="mono-eyebrow">research lead</span>
              <h2 className="display-lg mt-4 text-[color:var(--paper)]">
                It starts with one question:
                <br />
                <em className="font-display italic font-light text-[color:var(--signal)]">who finds you?</em>
              </h2>
              <p className="mt-6 text-[color:var(--mute-1)] text-base md:text-lg leading-relaxed max-w-xl">
                <span className="text-[color:var(--paper)]">노출 측정이 첫 모델입니다.</span>{' '}
                코어 모델 <span className="text-[color:var(--paper)]">Citora</span>가
                7개 AI 플랫폼 · 12개국에서의 인용 가능성을 발행 전에 추정하고,
                그 위에 활성화·응대·인접 영역의 모델이 풀 펀넬로 이어집니다.
              </p>
            </motion.div>

            <div className="relative h-[260px] md:h-[300px]">
              {stages.map((s, i) => (
                <StageCard
                  key={s.code}
                  stage={s}
                  index={i}
                  progress={scrollYProgress}
                  segment={segments[i]}
                />
              ))}
            </div>

            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="grid grid-cols-3 gap-6 md:gap-10 pt-6 border-t border-[color:var(--ink-line)] mono-meta"
            >
              <div>
                <div className="font-display text-3xl md:text-4xl text-[color:var(--paper)]">50+</div>
                <div className="mt-1 text-[color:var(--mute-1)]">deployments</div>
              </div>
              <div>
                <div className="font-display text-3xl md:text-4xl text-[color:var(--paper)]">30+</div>
                <div className="mt-1 text-[color:var(--mute-1)]">clients · KR/global</div>
              </div>
              <div>
                <div className="font-display text-3xl md:text-4xl text-[color:var(--paper)]">04</div>
                <div className="mt-1 text-[color:var(--mute-1)]">models · +1 horizon</div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
