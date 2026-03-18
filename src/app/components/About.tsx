import { motion } from 'motion/react';

const cycle = [
  {
    step: '고객 유입',
    service: 'GeoRank24',
    description: '검색에서 발견되게 만든다',
  },
  {
    step: '내부 운영',
    service: 'Relayed',
    description: 'AI로 만들고 직접 운영하게 한다',
  },
  {
    step: '고객 응대',
    service: 'LiteCX',
    description: 'AI로 고객을 응대하고 관리한다',
  },
];

export function About() {
  return (
    <section id="about" className="relative py-32 px-6">
      <div className="max-w-5xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true, margin: "-100px" }}
        >
          {/* Section number */}
          <div className="text-sm text-gray-600 mb-12 tracking-wider">01</div>

          {/* Main content */}
          <div className="grid md:grid-cols-2 gap-16">
            <div>
              <h2 className="text-4xl md:text-5xl font-light mb-8 leading-tight">
                발견부터 응대까지
                <br />
                AI로 연결합니다
              </h2>
            </div>

            <div className="space-y-6">
              <p className="text-lg text-gray-400 leading-relaxed">
                고객이 브랜드를 찾고, 팀이 제품을 만들고, 고객을 응대하는 것 —
                비즈니스의 전체 사이클을 AI로 엮어, 각 단계가 끊기지 않고
                하나의 흐름으로 돌아가게 만듭니다.
              </p>

              <div className="pt-8 grid grid-cols-2 gap-8">
                <div>
                  <div className="text-4xl font-light mb-2">50+</div>
                  <div className="text-sm text-gray-600">Projects</div>
                </div>
                <div>
                  <div className="text-4xl font-light mb-2">30+</div>
                  <div className="text-sm text-gray-600">Clients</div>
                </div>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Service Cycle */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true, margin: "-100px" }}
          className="mt-24"
        >
          <div className="grid md:grid-cols-3 gap-px bg-white/5 border border-white/5">
            {cycle.map((item, index) => (
              <div key={item.service} className="bg-[#0a0a0a] p-8 md:p-10 relative">
                {/* Arrow between items (desktop) */}
                {index < cycle.length - 1 && (
                  <div className="hidden md:block absolute right-0 top-1/2 -translate-y-1/2 translate-x-1/2 z-10 text-white/20 text-xl">
                    →
                  </div>
                )}
                <div className="text-xs text-gray-600 uppercase tracking-wider mb-4">
                  {item.step}
                </div>
                <div className="text-xl font-light mb-3">
                  {item.service}
                </div>
                <p className="text-sm text-gray-500 leading-relaxed">
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}