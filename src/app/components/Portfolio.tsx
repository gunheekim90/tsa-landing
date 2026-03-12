import { motion } from 'motion/react';

const portfolios = [
  { 
    number: '01',
    name: 'AcentKorea', 
    category: 'Data Marketing',
    description: '데이터 기반 마케팅 자동화 플랫폼',
    year: '2024'
  },
  { 
    number: '02',
    name: 'EV HansolMS', 
    category: 'Renewable Energy',
    description: '전기차 충전소 통합 관리 시스템',
    year: '2023'
  },
  { 
    number: '03',
    name: 'SAUNA', 
    category: 'Video Editor Platform',
    description: 'AI 기반 영상 편집 자동화 툴',
    year: '2024'
  },
  { 
    number: '04',
    name: 'CHIC', 
    category: 'Fashion',
    description: '온라인 패션 커머스 플랫폼',
    year: '2023'
  },
  { 
    number: '05',
    name: 'HONORS CLUB', 
    category: 'K-TRIP / Membership',
    description: '프리미엄 여행 멤버십 서비스',
    year: '2024'
  },
  { 
    number: '06',
    name: 'Kurly', 
    category: 'E-commerce',
    description: '신선식품 새벽배송 플랫폼',
    year: '2023'
  },
  { 
    number: '07',
    name: 'Queenit', 
    category: '4050 Fashion',
    description: '시니어 타겟 패션 큐레이션',
    year: '2024'
  },
  { 
    number: '08',
    name: 'TeamKai', 
    category: 'AI CX',
    description: '고객 경험 자동화 AI 에이전트',
    year: '2023'
  },
  { 
    number: '09',
    name: 'mentat', 
    category: 'RAG Search',
    description: '문서 검색 및 지식 관리 AI',
    year: '2024'
  },
  { 
    number: '10',
    name: 'TOKUYAMA', 
    category: 'Global Partner',
    description: '글로벌 B2B 파트너십 플랫폼',
    year: '2023'
  },
];

export function Portfolio() {
  return (
    <section id="portfolio" className="relative py-32 px-6 border-t border-white/5">
      <div className="max-w-5xl mx-auto">
        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true, margin: "-100px" }}
          className="mb-24"
        >
          <div className="text-sm text-gray-600 mb-12 tracking-wider">03</div>
          <h2 className="text-4xl md:text-5xl font-light mb-6">Selected Work</h2>
          <p className="text-gray-500 max-w-xl">
            수십 개의 프로젝트 중 대표 포트폴리오
          </p>
        </motion.div>

        {/* Portfolio grid */}
        <div className="space-y-px border-t border-white/5">
          {portfolios.map((portfolio, index) => (
            <motion.div
              key={portfolio.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.05 }}
              viewport={{ once: true, margin: "-50px" }}
              className="group border-b border-white/5 hover:bg-white/[0.02] transition-colors duration-300"
            >
              <div className="block py-8 md:py-10">
                <div className="grid md:grid-cols-12 gap-4 md:gap-6 items-start">
                  {/* Number */}
                  <div className="md:col-span-1">
                    <span className="text-sm text-gray-600">{portfolio.number}</span>
                  </div>

                  {/* Content */}
                  <div className="md:col-span-11">
                    <h3 className="text-2xl md:text-3xl font-light mb-2">
                      {portfolio.name}
                    </h3>
                    <p className="text-sm text-gray-600 mb-1">{portfolio.description}</p>
                    <div className="flex gap-4 text-xs text-gray-700">
                      <span>{portfolio.category}</span>
                      <span>{portfolio.year}</span>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}