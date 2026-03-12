import { motion } from 'motion/react';
import { useState } from 'react';
import { ChevronDown } from 'lucide-react';

const faqs = [
  {
    question: 'TwoStepsAhead는 어떤 기업에게 적합한가요?',
    answer:
      '디지털 전환이 필요한 모든 기업에 적합합니다. 특히 온라인 가시성을 높이고 싶은 브랜드(GeoRank24)나, AI 기반 자동화 시스템을 도입하고 내부에서 직접 운영하고 싶은 기업(Relayed)에게 최적화되어 있습니다. 스타트업부터 대기업까지 30개 이상의 클라이언트와 함께한 경험이 있습니다.',
  },
  {
    question: '개발 지식이 전혀 없어도 의뢰할 수 있나요?',
    answer:
      '물론입니다. TwoStepsAhead는 비개발자도 이해할 수 있는 언어로 소통하며, 기획부터 설계, 개발, 교육까지 전 과정을 책임지고 리드합니다. Relayed의 경우 칸반 보드에 카드를 올리는 것만으로 시작할 수 있으며, AI가 자동으로 분석하고 개발합니다.',
  },
  {
    question: '프로젝트 기간은 보통 얼마나 걸리나요?',
    answer:
      '프로젝트 규모와 범위에 따라 다르지만, 일반적으로 2주~3개월 사이입니다. GeoRank24는 초기 설정 후 지속적인 최적화로 진행되며, Relayed는 MVP 구축까지 평균 4~6주가 소요됩니다. 초기 컨설팅에서 정확한 일정을 안내드립니다.',
  },
  {
    question: '유지보수는 어떻게 진행되나요?',
    answer:
      'GeoRank24는 실시간 모니터링과 월간 리포트를 제공하며, Relayed는 시스템 구축 후 귀사 팀이 직접 유지보수 및 추가 개발을 할 수 있도록 AI 에이전트와 워크플로우를 함께 이전합니다. 필요시 기술 지원 및 컨설팅도 제공합니다.',
  },
  {
    question: '두 서비스를 함께 이용할 수 있나요?',
    answer:
      '네, 많은 클라이언트가 GeoRank24로 온라인 가시성을 높이고, Relayed로 내부 시스템을 자동화하여 시너지 효과를 보고 있습니다. 패키지 문의 시 맞춤형 제안을 드립니다.',
  },
];

export function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <section className="relative py-32 px-6 border-t border-white/5">
      <div className="max-w-3xl mx-auto">
        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true, margin: "-100px" }}
          className="mb-24"
        >
          <div className="text-sm text-gray-600 mb-12 tracking-wider">Q&A</div>
          <h2 className="text-4xl md:text-5xl font-light mb-6">
            Frequently
            <br />
            Asked Questions
          </h2>
        </motion.div>

        {/* FAQ list */}
        <div className="space-y-px">
          {faqs.map((faq, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true, margin: "-50px" }}
              className="border-b border-white/5"
            >
              <button
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
                className="w-full text-left py-8 group"
              >
                <div className="flex items-start justify-between gap-6">
                  <h3 className="text-lg md:text-xl font-light group-hover:text-gray-400 transition-colors">
                    {faq.question}
                  </h3>
                  <ChevronDown
                    className={`w-5 h-5 text-gray-600 transition-transform duration-300 flex-shrink-0 ${
                      openIndex === index ? 'rotate-180' : ''
                    }`}
                  />
                </div>

                <motion.div
                  initial={false}
                  animate={{
                    height: openIndex === index ? 'auto' : 0,
                    opacity: openIndex === index ? 1 : 0,
                  }}
                  transition={{ duration: 0.3 }}
                  className="overflow-hidden"
                >
                  <p className="text-gray-500 leading-relaxed pt-4 pr-8">
                    {faq.answer}
                  </p>
                </motion.div>
              </button>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
