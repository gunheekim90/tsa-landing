import { motion, AnimatePresence } from 'motion/react';
import { useState } from 'react';
import { trackEvent } from '@/lib/gtag';

const notes = [
  {
    question: '어디부터 도입해야 하나요?',
    answer:
      '펀넬 위치에 맞춰 시작합니다. 발견 단계가 약하면 G24-DISCOVERY부터, 운영 자동화가 병목이면 R-PIPELINE, 응대·전환 단계라면 LX-CONVERSATION. 한 모델만 도입하든, 풀 펀넬을 한 번에 가동하든 모듈러로 구성됩니다.',
  },
  {
    question: 'TwoStepsAhead는 어떤 기업에게 적합한가요?',
    answer:
      '디지털 전환이 필요한 모든 기업. 발견 단계의 가시성을 끌어올리고 싶은 브랜드(G24-DISCOVERY), 마케팅·세일즈 운영을 AI 에이전트로 자동화하고 직접 운영하고 싶은 팀(R-PIPELINE), 대형 콜센터 없이 응대 체계를 즉시 갖추고 싶은 조직(LX-CONVERSATION)에게 최적화되어 있습니다. 스타트업부터 대기업까지 30+ 클라이언트와 함께했습니다.',
  },
  {
    question: '개발 지식이 없어도 의뢰할 수 있나요?',
    answer:
      '물론입니다. 비개발자가 이해할 수 있는 언어로 소통하며, 기획·설계·개발·교육 전 과정을 리드합니다. R-PIPELINE은 칸반 카드 한 장으로 시작 가능하고, LX-CONVERSATION은 브라우저 관리자 콘솔 로그인만으로 가동을 시작합니다.',
  },
  {
    question: '프로젝트 기간은 얼마나 걸리나요?',
    answer:
      '규모에 따라 2주~3개월. G24-DISCOVERY는 초기 설정 후 지속 최적화 루프, R-PIPELINE의 MVP는 평균 4~6주, LX-CONVERSATION은 대표번호·CTI 연동 후 즉시 가동. 초기 진단에서 정확한 일정을 안내합니다.',
  },
  {
    question: '도입 후 유지보수는 어떻게 진행되나요?',
    answer:
      'G24-DISCOVERY는 실시간 모니터링과 월간 리포트, R-PIPELINE은 도입 후 귀사 팀이 직접 유지·확장할 수 있도록 에이전트와 워크플로우를 함께 이전, LX-CONVERSATION은 웹 콘솔에서 상담 이력·VOC 분석·통화 요약을 실시간 확인 + 지속 기술 지원.',
  },
  {
    question: '여러 모델을 같이 가동하면 시너지가 있나요?',
    answer:
      '있습니다. G24-DISCOVERY로 유입을 키우고, R-PIPELINE으로 내부 운영을 자동화하며, LX-CONVERSATION으로 응대까지 닫는 풀 펀넬 패키지가 가장 강한 조합입니다. 세 모델 묶음 문의 시 맞춤형 제안을 드립니다.',
  },
];

export function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section
      id="notes"
      className="relative py-32 md:py-44 px-6 md:px-10 border-t border-[color:var(--ink-line)]"
      aria-label="Notes"
    >
      <div className="max-w-[1400px] mx-auto grid grid-cols-12 gap-6 md:gap-10">
        {/* Left rail */}
        <motion.aside
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          viewport={{ once: true, margin: '-20%' }}
          className="col-span-12 md:col-span-4 lg:col-span-3"
        >
          <div className="md:sticky md:top-32">
            <div className="mono-eyebrow mb-6">— 05 / notes</div>
            <h2 className="display-md text-[color:var(--paper)]">
              Frequently
              <br />
              <em className="font-display italic font-light">asked</em> questions.
            </h2>
            <p className="mt-6 mono-meta text-[color:var(--mute-1)] max-w-xs">
              논문 각주처럼 짧게. 더 깊은 질문은 아래 inquiry 채널로.
            </p>
          </div>
        </motion.aside>

        {/* Notes */}
        <ol className="col-span-12 md:col-span-8 lg:col-span-9 list-none flex flex-col">
          {notes.map((n, i) => {
            const isOpen = openIndex === i;
            return (
              <motion.li
                key={i}
                initial={{ opacity: 0, y: 18 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: i * 0.05, ease: [0.16, 1, 0.3, 1] }}
                viewport={{ once: true, margin: '-15%' }}
                className="border-t border-[color:var(--ink-line)] last:border-b"
              >
                <button
                  type="button"
                  className="group w-full text-left flex gap-6 md:gap-10 py-7 md:py-9"
                  aria-expanded={isOpen}
                  onClick={() => {
                    if (!isOpen) trackEvent('faq_open', { question: n.question });
                    setOpenIndex(isOpen ? null : i);
                  }}
                >
                  <span className="mono-meta shrink-0 text-[color:var(--mute-2)] pt-1.5">
                    {String(i + 1).padStart(2, '0')}
                  </span>
                  <div className="flex-1">
                    <div className="flex items-baseline justify-between gap-6">
                      <h3 className="font-display text-xl md:text-2xl text-[color:var(--paper)] leading-snug group-hover:text-[color:var(--signal)] transition-colors duration-500">
                        {n.question}
                      </h3>
                      <span
                        className={`mono-meta shrink-0 transition-all duration-500 ${
                          isOpen ? 'text-[color:var(--signal)]' : 'text-[color:var(--mute-2)]'
                        }`}
                        aria-hidden
                      >
                        {isOpen ? '—' : '+'}
                      </span>
                    </div>

                    <AnimatePresence initial={false}>
                      {isOpen && (
                        <motion.div
                          key="content"
                          initial={{ opacity: 0, height: 0 }}
                          animate={{ opacity: 1, height: 'auto' }}
                          exit={{ opacity: 0, height: 0 }}
                          transition={{ duration: 0.45, ease: [0.16, 1, 0.3, 1] }}
                          className="overflow-hidden"
                        >
                          <p className="pt-5 max-w-2xl text-[color:var(--paper-soft)] leading-relaxed">
                            {n.answer}
                          </p>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>
                </button>
              </motion.li>
            );
          })}
        </ol>
      </div>
    </section>
  );
}
