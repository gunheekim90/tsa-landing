import { motion } from 'motion/react';
import { ExternalLink, Download } from 'lucide-react';
import { trackEvent } from '@/lib/gtag';

interface Service {
  number: string;
  title: string;
  subtitle: string;
  description: string;
  url: string;
  features: string[];
  download?: boolean;
}

const services: Service[] = [
  {
    number: '01',
    title: 'GeoRank24',
    subtitle: 'Brand SEO/GEO 최적화 서비스',
    description: '검색 엔진과 지역 검색 최적화를 통해 브랜드의 온라인 가시성을 극대화합니다.',
    url: 'https://georank24.com',
    features: [
      '검색 순위 최적화',
      '로컬 SEO 전략',
      '콘텐츠 최적화',
      '실시간 모니터링',
    ],
  },
  {
    number: '02',
    title: 'Relayed',
    subtitle: '기업 AX/DX 도입 서비스',
    description: '도입하고 끝이 아닙니다. AI 개발 에이전트를 설치해, 팀이 직접 명령으로 다음 개발을 이어갑니다.',
    url: 'https://relayed.co.kr',
    features: [
      'AI 에이전트 설치',
      '자동 분석 및 개발',
      '직접 유지보수 가능',
      '워크플로우 이전',
    ],
  },
  {
    number: '03',
    title: 'LiteCX',
    subtitle: 'AI CX Center + CTI 마이크로 AI 콜센터 SaaS',
    description: '대형 콜센터 구축 없이 대표번호 기반 고객 응대, 예약 접수, 리드 분류, 상담 기록 관리, VOC 분석을 바로 시작할 수 있는 웹 기반 AI 콜센터 SaaS입니다.',
    url: 'https://litecx.com',
    features: [
      'AI 음성 응답봇 · 실시간 STT',
      '상담원 보조 응답 추천',
      'VOC 분석 · 자동 요약 리포트',
      'WebRTC 기반 PBX-Free 콘솔',
    ],
  },
  {
    number: '04',
    title: 'ChargeFLOW',
    subtitle: '전기차 충전 통합 관리 SaaS 플랫폼',
    description: '충전 사업자가 별도 개발 없이 충전기 관리, 결제, 로밍, AI 고객 상담, 친환경 에너지 연계까지 즉시 시작할 수 있는 턴키 SaaS. 1,467대 실 운영 환경에서 검증된 기술 기반.',
    url: '/ChargeFLOW_제안서.pdf',
    download: true,
    features: [
      'OCPP 1.6/2.0.1 이중 지원',
      '태양광 · ESS · V2G 에너지 연계',
      'AI 고객 상담 · 장애 예측',
      '실시간 모니터링 · 원격 제어',
    ],
  },
];

export function Services() {
  return (
    <section id="services" className="relative py-32 px-6 border-t border-white/5">
      <div className="max-w-5xl mx-auto">
        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true, margin: "-100px" }}
          className="mb-24"
        >
          <div className="text-sm text-gray-600 mb-12 tracking-wider">02</div>
          <h2 className="text-4xl md:text-5xl font-light">Services</h2>
        </motion.div>

        {/* Services list */}
        <div className="space-y-24">
          {services.map((service, index) => (
            <motion.div
              key={service.number}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              viewport={{ once: true, margin: "-100px" }}
              className="group"
            >
              <div className="grid md:grid-cols-12 gap-8 md:gap-16">
                {/* Number */}
                <div className="md:col-span-2">
                  <div className="text-sm text-gray-600">{service.number}</div>
                </div>

                {/* Content */}
                <div className="md:col-span-10">
                  <h3 className="text-3xl md:text-4xl font-light mb-2 group-hover:text-gray-400 transition-colors duration-300">
                    {service.title}
                  </h3>
                  <p className="text-sm text-gray-600 mb-6">{service.subtitle}</p>

                  <p className="text-gray-400 mb-8 leading-relaxed max-w-2xl">
                    {service.description}
                  </p>

                  {/* Features */}
                  <div className="grid grid-cols-2 gap-4 mb-8 max-w-2xl">
                    {service.features.map((feature, idx) => (
                      <div key={idx} className="text-sm text-gray-500">
                        — {feature}
                      </div>
                    ))}
                  </div>

                  {/* Link */}
                  {service.download ? (
                    <a
                      href={service.url}
                      download
                      className="inline-flex items-center gap-3 text-sm border-b border-white/20 pb-1 hover:border-white/40 transition-all group/link"
                      onClick={() => trackEvent('service_click', { service_name: service.title, action: 'download' })}
                    >
                      <span>Download Proposal</span>
                      <Download className="w-4 h-4 group-hover/link:translate-y-0.5 transition-transform" />
                    </a>
                  ) : (
                    <a
                      href={service.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-3 text-sm border-b border-white/20 pb-1 hover:border-white/40 transition-all group/link"
                      onClick={() => trackEvent('service_click', { service_name: service.title, service_url: service.url })}
                    >
                      <span>Visit Service</span>
                      <ExternalLink className="w-4 h-4 group-hover/link:translate-x-1 group-hover/link:-translate-y-1 transition-transform" />
                    </a>
                  )}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
