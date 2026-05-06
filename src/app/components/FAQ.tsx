import { motion, AnimatePresence } from 'motion/react';
import { useState } from 'react';
import { trackEvent } from '@/lib/gtag';

const notes = [
  {
    question: 'Citora는 무엇을 측정하나요?',
    answer:
      'Citora는 검색과 AI 검색에서의 인용 가능성을 발행 전에 추정하는 측정·예측 모델입니다. ChatGPT, Claude, Perplexity, Gemini, AI Mode, AI Overview, DeepSeek 등 7개 AI 플랫폼과 12개국 실 ISP IP 환경에서의 인용 확률, GEO 점수, 노출 경로를 한 번에 출력합니다. 현재 v0.4가 운영 중이며, 매주 화요일 03:00 KST에 자동 캡처를 수행합니다.',
  },
  {
    question: '소셜과 커뮤니티는 어떻게 반영되나요?',
    answer:
      'Citora는 도메인 한 곳만 보지 않습니다. YouTube · Instagram · X · TikTok · Threads 5대 SNS, Reddit · HN · Quora · G2 · Trustpilot 5대 커뮤니티, 그리고 80+ 리뷰·언론 매체의 인용·언급을 매주 함께 합산해 학습합니다. AI가 답을 지을 때 참고하는 외부 신호 전체를 하나의 모델로 파악해, 도메인 안쪽 최적화만으로는 잡히지 않는 인용 경로까지 측정합니다.',
  },
  {
    question: '어디부터 도입하면 좋은가요?',
    answer:
      '펀넬 위치에 맞춰 시작하시면 됩니다. 발견 단계의 가시성이 약하시면 코어 모델 Citora(GeoRank24)부터, 방문 기업을 영업 액션으로 옮기는 단계가 병목이시면 Citora Lead, 응대·전환 단계라면 LiteCX-Voice를 권장드립니다. 한 모델만 도입하시든, 풀 펀넬을 한 번에 가동하시든 모듈러로 구성됩니다.',
  },
  {
    question: 'TwoStepsAhead는 어떤 기업에 적합한가요?',
    answer:
      '디지털 전환이 필요한 모든 기업에 적합합니다. 발견 단계의 가시성을 끌어올리고 싶으신 브랜드는 Citora(GeoRank24), 사이트에 방문한 기업을 식별해 영업팀에 즉시 알림으로 연결하고 싶으신 팀은 Citora Lead, 대형 콜센터 없이 응대 체계를 갖추고 싶으신 조직은 LiteCX-Voice를 도입하실 수 있습니다. 스타트업부터 대기업까지 30+ 클라이언트와 함께 진행해왔습니다.',
  },
  {
    question: '개발 지식이 없어도 의뢰할 수 있나요?',
    answer:
      '물론 가능합니다. 비개발자께서도 이해하실 수 있는 언어로 소통드리며, 기획·설계·개발·교육 전 과정을 저희가 리드합니다. Citora Lead는 사이트에 스크립트 한 줄을 붙이는 것으로 5분 내 첫 알림이 시작되고, LiteCX-Voice는 브라우저 관리자 콘솔에 로그인하시는 것만으로 가동이 시작됩니다.',
  },
  {
    question: '프로젝트 기간은 얼마나 걸리나요?',
    answer:
      '규모에 따라 2주에서 3개월 사이입니다. Citora(GeoRank24)는 초기 설정 후 주 단위 자동 리포트와 지속 최적화 루프로 운영되고, Citora Lead는 스크립트 설치 후 5분 내 첫 알림이 시작되며, LiteCX-Voice는 대표번호·CTI 연동 후 즉시 가동됩니다. 초기 진단에서 정확한 일정을 안내드립니다.',
  },
  {
    question: '도입 후 유지보수는 어떻게 진행되나요?',
    answer:
      'Citora는 실시간 대시보드와 매주 월요일 09:00 자동 리포트로 운영됩니다. Citora Lead는 Slack·HubSpot 연동 위에서 방문 회사 식별 결과와 구매신호 스코어가 자동 누적되며 영업팀이 바로 활용하실 수 있고, LiteCX-Voice는 웹 콘솔에서 상담 이력·VOC 분석·통화 요약을 실시간으로 확인하실 수 있으며 지속적인 기술 지원이 제공됩니다.',
  },
  {
    question: '여러 모델을 함께 가동하면 시너지가 있나요?',
    answer:
      '있습니다. Citora로 유입을 키우고, Citora Lead로 방문 기업을 영업 액션으로 잇고, LiteCX-Voice로 응대까지 닫는 풀 펀넬 조합이 가장 강력합니다. 세 모델 묶음 문의 시 맞춤형 제안을 드립니다.',
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
              논문 각주처럼 짧게 정리했습니다. 더 깊은 질문은 아래 inquiry 채널로 보내주세요.
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
