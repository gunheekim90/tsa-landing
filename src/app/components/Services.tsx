import { motion } from 'motion/react';
import { ExternalLink, Download, ArrowUpRight, ArrowRight } from 'lucide-react';
import { trackEvent } from '@/lib/gtag';
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogTitle,
  DialogTrigger,
} from './ui/dialog';

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
];

const futureProject = {
  title: 'ChargeFLOW',
  subtitle: 'EV 충전 인프라 SaaS 트랙',
  description: '충전기 관리, 결제, 로밍, AI 고객 상담, 친환경 에너지 연계까지 한 번에 다루는 턴키 SaaS. 현재 약 5,000대 실 운영 환경에서 검증을 진행하고 있습니다.',
  url: '/ChargeFLOW_제안서.pdf',
  features: [
    'OCPP 1.6/2.0.1 이중 지원',
    '태양광 · ESS · V2G 에너지 연계',
    'AI 고객 상담 · 장애 예측',
    '실시간 모니터링 · 원격 제어',
  ],
  extensions: [
    {
      title: 'Fleet',
      tagline: '법인 EV 충전비 관리 SaaS',
      description: '법인 전기차 운영사를 위한 충전비 정산 SaaS. CPO 위에 올라가 드라이버 · 차량 · 부서별 비용을 자동 집계하고 월말 정산을 자동화합니다.',
      detail: {
        positioning: '충전 사업이 아니라, 정산 소프트웨어. CPO와 경쟁하지 않고 CPO 위에 올라가는 관리 레이어.',
        problem: [
          '드라이버 10명이 이번 달 각자 얼마 썼는지 모른다',
          '회사 · 공용 · 집 충전이 분산되어 영수증 수기로 취합',
          '업무용 / 개인용 구분 불가, 월말 경비 보고서는 수작업',
        ],
        solution: 'RFID 카드 한 장으로 전국 어디서 충전하든 데이터가 자동 수집됩니다. 회사는 드라이버별 · 차량별 · 부서별 비용을 한눈에 보고, 월말 정산은 자동 처리됩니다.',
        highlights: [
          { label: '타깃', value: '전기택시 · 렌터카 · 법인차량 · 화물 운송' },
          { label: '데이터', value: 'KECO 로밍 기반 전국 충전소 자동 수집' },
          { label: '시장', value: '국내 법인 EV 충전 약 720~1,280억원/년' },
          { label: '현황', value: '국내 전문 SaaS 부재 — 선점 단계' },
        ],
        teaser: '한솔 시스템을 직접 설계한 경험 위에서 출발합니다. 자세한 사업 구조와 파트너십 모델은 별도로 안내드립니다.',
      },
    },
  ],
};

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

        {/* Future / Upcoming */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true, margin: "-100px" }}
          className="mt-32"
        >
          <div className="rounded-2xl border border-white/10 bg-white/[0.02] p-8 md:p-12">
            <div className="flex items-center gap-3 mb-8">
              <span className="inline-block w-1.5 h-1.5 rounded-full bg-white/40 animate-pulse" />
              <span className="text-xs text-gray-500 tracking-[0.2em] uppercase">
                Next Horizon · 준비 중인 미래 기술
              </span>
            </div>

            <div className="grid md:grid-cols-12 gap-8 md:gap-16">
              <div className="md:col-span-5">
                <h3 className="text-3xl md:text-4xl font-light mb-2">
                  {futureProject.title}
                </h3>
                <p className="text-sm text-gray-600 mb-6">{futureProject.subtitle}</p>
                <p className="text-sm text-gray-500 leading-relaxed">
                  발견 → 도입 → 응대로 이어지는 핵심 사이클을 넘어,
                  TSA가 다음 단계로 준비하고 있는 인접 영역의 기술입니다.
                </p>
              </div>

              <div className="md:col-span-7">
                <p className="text-gray-400 mb-8 leading-relaxed">
                  {futureProject.description}
                </p>

                <div className="grid grid-cols-2 gap-4 mb-8">
                  {futureProject.features.map((feature, idx) => (
                    <div key={idx} className="text-sm text-gray-500">
                      — {feature}
                    </div>
                  ))}
                </div>

                <a
                  href={futureProject.url}
                  download
                  className="inline-flex items-center gap-3 text-sm border-b border-white/20 pb-1 hover:border-white/40 transition-all group/link"
                  onClick={() => trackEvent('service_click', { service_name: futureProject.title, action: 'download' })}
                >
                  <span>Download Proposal</span>
                  <Download className="w-4 h-4 group-hover/link:translate-y-0.5 transition-transform" />
                </a>
              </div>
            </div>

            {/* Extended lineup */}
            <div className="mt-12 pt-8 border-t border-white/5">
              <div className="text-xs text-gray-600 tracking-[0.2em] uppercase mb-6">
                Extended Line · 확장 라인업
              </div>
              <div className="space-y-6">
                {futureProject.extensions.map((ext) => (
                  <div
                    key={ext.title}
                    className="grid md:grid-cols-12 gap-4 md:gap-8 items-start"
                  >
                    <div className="md:col-span-3">
                      <h4 className="text-lg font-light">{ext.title}</h4>
                      <p className="text-xs text-gray-600 mt-1">{ext.tagline}</p>
                    </div>
                    <div className="md:col-span-9">
                      <p className="text-sm text-gray-500 leading-relaxed mb-4">
                        {ext.description}
                      </p>
                      <Dialog>
                        <DialogTrigger asChild>
                          <button
                            className="inline-flex items-center gap-2 text-xs text-gray-400 hover:text-white transition-colors group/btn"
                            onClick={() => trackEvent('extension_click', { name: ext.title, action: 'open_detail' })}
                          >
                            <span>자세히 보기</span>
                            <ArrowUpRight className="w-3.5 h-3.5 group-hover/btn:translate-x-0.5 group-hover/btn:-translate-y-0.5 transition-transform" />
                          </button>
                        </DialogTrigger>
                        <DialogContent className="bg-[#0a0a0a] border-white/10 text-white max-w-2xl sm:max-w-2xl p-0 gap-0 max-h-[85vh] overflow-y-auto">
                          <div className="p-8 md:p-10">
                            <div className="text-xs text-gray-500 tracking-[0.2em] uppercase mb-4">
                              ChargeFLOW · Extended Line
                            </div>
                            <DialogTitle className="text-3xl font-light mb-2">
                              {ext.title}
                            </DialogTitle>
                            <p className="text-sm text-gray-500 mb-8">{ext.tagline}</p>

                            <p className="text-base text-gray-300 leading-relaxed mb-10">
                              {ext.detail.positioning}
                            </p>

                            <div className="mb-10">
                              <div className="text-xs text-gray-600 tracking-[0.2em] uppercase mb-4">
                                Problem
                              </div>
                              <ul className="space-y-2">
                                {ext.detail.problem.map((p, i) => (
                                  <li key={i} className="text-sm text-gray-400 leading-relaxed">
                                    — {p}
                                  </li>
                                ))}
                              </ul>
                            </div>

                            <div className="mb-10">
                              <div className="text-xs text-gray-600 tracking-[0.2em] uppercase mb-4">
                                Solution
                              </div>
                              <p className="text-sm text-gray-400 leading-relaxed">
                                {ext.detail.solution}
                              </p>
                            </div>

                            <div className="mb-10 grid grid-cols-1 sm:grid-cols-2 gap-x-8 gap-y-5">
                              {ext.detail.highlights.map((h, i) => (
                                <div key={i}>
                                  <div className="text-xs text-gray-600 mb-1.5">{h.label}</div>
                                  <div className="text-sm text-gray-300">{h.value}</div>
                                </div>
                              ))}
                            </div>

                            <p className="text-xs text-gray-600 leading-relaxed mb-8 italic">
                              {ext.detail.teaser}
                            </p>

                            <div className="flex flex-col sm:flex-row gap-3 pt-6 border-t border-white/5">
                              <DialogClose asChild>
                                <a
                                  href="#contact"
                                  className="inline-flex items-center justify-center gap-2 bg-white text-black px-6 py-3 rounded-full text-sm hover:bg-gray-200 transition-colors group/cta"
                                  onClick={() => trackEvent('extension_click', { name: ext.title, action: 'contact' })}
                                >
                                  <span>문의하기</span>
                                  <ArrowRight className="w-4 h-4 group-hover/cta:translate-x-1 transition-transform" />
                                </a>
                              </DialogClose>
                              <a
                                href="mailto:glenn.kim@twostepsahead.co.kr?subject=Fleet%20%EB%AC%B8%EC%9D%98"
                                className="inline-flex items-center justify-center gap-2 border border-white/15 px-6 py-3 rounded-full text-sm hover:border-white/30 transition-colors"
                                onClick={() => trackEvent('extension_click', { name: ext.title, action: 'email' })}
                              >
                                <span>이메일로 문의</span>
                              </a>
                            </div>
                          </div>
                        </DialogContent>
                      </Dialog>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
