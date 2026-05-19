import { motion } from 'motion/react';

export function Manifesto() {
  return (
    <section
      id="manifesto"
      className="relative py-32 md:py-44 px-6 md:px-10 border-t border-[color:var(--ink-line)]"
      aria-label="Manifesto"
    >
      <div className="max-w-[1400px] mx-auto grid grid-cols-12 gap-6 md:gap-10">
        <div className="col-span-12 md:col-span-3 lg:col-span-2">
          <div className="mono-eyebrow">— 01 / thesis</div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
          viewport={{ once: true, margin: '-20%' }}
          className="col-span-12 md:col-span-9 lg:col-span-10"
        >
          <h2 className="display-lg text-[color:var(--paper)]">
            AI가 노출을 결정합니다.
            <br />
            우리는 그 결정을{' '}
            <em className="font-display italic font-light text-[color:var(--signal)]">
              예측합니다.
            </em>
          </h2>

          <div className="mt-10 grid md:grid-cols-12 gap-6 md:gap-10 max-w-4xl">
            <p className="md:col-span-7 text-[color:var(--mute-1)] text-base md:text-lg leading-relaxed">
              <span className="text-[color:var(--paper)]">AI 검색 · SNS · 추천 알고리즘.</span>{' '}
              발견의 기준이 흩어지는 시대에, 모든 AI-mediated 채널의 노출·인용·추천을
              하나의 예측 모델로 통합합니다. 측정이 아닌 예측이 마케팅 인프라의 새 표준입니다.
            </p>
            <div className="md:col-span-5 mono-meta border-l border-[color:var(--ink-line)] pl-5 flex flex-col gap-3">
              <div>
                <span className="text-[color:var(--mute-2)]">— category</span>
                <div className="text-[color:var(--paper)] mt-1">Predictive Marketing AI</div>
              </div>
              <div>
                <span className="text-[color:var(--mute-2)]">— position</span>
                <div className="text-[color:var(--paper)] mt-1">category definer · seoul</div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
