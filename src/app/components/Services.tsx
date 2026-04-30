import { motion } from 'motion/react';
import { ArrowUpRight, Download, ArrowRight } from 'lucide-react';
import { trackEvent } from '@/lib/gtag';
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogTitle,
  DialogTrigger,
} from './ui/dialog';

type Status = 'live' | 'beta' | 'research';

interface Model {
  index: string;
  code: string;
  stageCode: 'D' | 'A' | 'C';
  stagePosition: string;
  status: Status;
  brand: string;
  subtitle: string;
  description: string;
  metric: string;
  features: string[];
  url: string;
  core?: boolean;
}

const models: Model[] = [
  {
    index: '01',
    code: 'G24-DISCOVERY',
    stageCode: 'D',
    stagePosition: 'top of funnel · core',
    status: 'live',
    core: true,
    brand: 'GeoRank24',
    subtitle: 'TwoStepsAhead의 코어 모델 · 노출 측정 + 인용 예측',
    description:
      'TwoStepsAhead는 노출 측정 모델을 고도화하는 회사다. GeoRank24는 검색과 AI 검색에서 어떤 콘텐츠가 인용될지 발행 전에 추정한다 — GEO 점수, 인용 확률, 노출 경로를 한 번에.',
    metric: 'MAPE 8.6% · 4M+ training rows',
    features: [
      'GEO 점수 · 인용 확률',
      '발행 전 진단',
      '5 AI search · 12 countries',
      '실시간 모니터링',
    ],
    url: 'https://georank24.com',
  },
  {
    index: '02',
    code: 'R-PIPELINE',
    stageCode: 'A',
    stagePosition: 'mid funnel',
    status: 'live',
    brand: 'Relayed',
    subtitle: '기업 AX/DX 도입 · AI 에이전트',
    description:
      '도입하고 끝이 아니다. AI 에이전트가 마케팅·세일즈 팀의 반복 작업을 인계받아, 도입 이후에도 다음 빌드를 이어간다.',
    metric: 'agent · 24/7 build loop',
    features: [
      'AI 에이전트 설치',
      '자동 분석 · 개발',
      '직접 유지보수',
      '워크플로우 이전',
    ],
    url: 'https://relayed.co.kr',
  },
  {
    index: '03',
    code: 'LX-CONVERSATION',
    stageCode: 'C',
    stagePosition: 'bottom of funnel',
    status: 'live',
    brand: 'LiteCX',
    subtitle: 'AI CX Center · CTI 마이크로 콜센터 SaaS',
    description:
      '대표번호 한 줄로 영업 응대·예약·VOC가 자동 처리된다. PBX-Free, WebRTC 콘솔, 실시간 STT 기반의 가벼운 CX 인프라.',
    metric: 'pbx-free · realtime STT',
    features: [
      'AI 음성 응답봇 · 실시간 STT',
      '상담원 보조 응답 추천',
      'VOC 분석 · 자동 요약',
      'WebRTC PBX-Free 콘솔',
    ],
    url: 'https://litecx.com',
  },
];

const horizon = {
  index: '04',
  code: 'CF-ENERGY',
  stageCode: 'H' as const,
  stagePosition: 'adjacent track',
  status: 'beta' as Status,
  brand: 'ChargeFLOW',
  subtitle: 'EV 충전 인프라 SaaS 트랙',
  description:
    '충전기 관리, 결제, 로밍, AI 고객 상담, 친환경 에너지 연계까지 한 번에 다루는 턴키 SaaS. 현재 약 5,000대 실 운영 환경에서 검증을 진행하고 있다.',
  metric: '~5,000 chargers · validating',
  features: [
    'OCPP 1.6 / 2.0.1 이중 지원',
    '태양광 · ESS · V2G 에너지 연계',
    'AI 고객 상담 · 장애 예측',
    '실시간 모니터링 · 원격 제어',
  ],
  url: '/ChargeFLOW_제안서.pdf',
  extensions: [
    {
      title: 'Fleet',
      tagline: '법인 EV 충전비 관리 SaaS',
      description:
        '법인 전기차 운영사를 위한 충전비 정산 SaaS. CPO 위에 올라가 드라이버 · 차량 · 부서별 비용을 자동 집계하고 월말 정산을 자동화한다.',
      detail: {
        positioning:
          '충전 사업이 아니라, 정산 소프트웨어. CPO와 경쟁하지 않고 CPO 위에 올라가는 관리 레이어.',
        problem: [
          '드라이버 10명이 이번 달 각자 얼마 썼는지 모른다',
          '회사 · 공용 · 집 충전이 분산되어 영수증 수기로 취합',
          '업무용 / 개인용 구분 불가, 월말 경비 보고서는 수작업',
        ],
        solution:
          'RFID 카드 한 장으로 전국 어디서 충전하든 데이터가 자동 수집된다. 회사는 드라이버별 · 차량별 · 부서별 비용을 한눈에 보고, 월말 정산은 자동 처리된다.',
      },
    },
  ],
};

const statusStyle: Record<Status, string> = {
  live: 'text-[color:var(--signal)] border-[color:var(--signal-line)]',
  beta: 'text-[color:var(--stage-mid)] border-[color:rgba(200,232,112,0.3)]',
  research: 'text-[color:var(--mute-1)] border-[color:var(--ink-line)]',
};

function StatusBadge({ status }: { status: Status }) {
  return (
    <span
      className={`mono-meta inline-flex items-center gap-1.5 px-2 py-0.5 border rounded-full ${statusStyle[status]}`}
    >
      <span className="signal-dot" aria-hidden style={{ width: '0.3rem', height: '0.3rem' }} />
      {status}
    </span>
  );
}

function ModelCard({ model, idx }: { model: Model; idx: number }) {
  return (
    <motion.article
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.9, delay: idx * 0.08, ease: [0.16, 1, 0.3, 1] }}
      viewport={{ once: true, margin: '-15%' }}
      className="group relative grid md:grid-cols-12 gap-6 md:gap-12 py-12 md:py-16 border-t border-[color:var(--ink-line)]"
    >
      {/* Left axis — stage code + index */}
      <div className="md:col-span-3 lg:col-span-2 flex md:flex-col items-baseline justify-between md:justify-start gap-6">
        <div className="flex items-baseline gap-3">
          <span className="font-display text-7xl md:text-8xl leading-none text-[color:var(--paper)] group-hover:text-[color:var(--signal)] transition-colors duration-700">
            {model.stageCode}
          </span>
          <span className="mono-meta text-[color:var(--mute-2)]">/{model.index}</span>
        </div>
        <div className="mono-eyebrow">{model.stagePosition}</div>
      </div>

      {/* Body */}
      <div className="md:col-span-9 lg:col-span-10 flex flex-col gap-6">
        <div className="flex flex-wrap items-center gap-3">
          <span className="mono-meta text-[color:var(--paper)]">{model.code}</span>
          <span className="text-[color:var(--mute-3)]">·</span>
          <StatusBadge status={model.status} />
          {model.core && (
            <>
              <span className="text-[color:var(--mute-3)]">·</span>
              <span className="mono-meta inline-flex items-center gap-1.5 px-2 py-0.5 border border-[color:var(--signal-line)] text-[color:var(--signal)] rounded-full">
                core · TSA flagship
              </span>
            </>
          )}
          <span className="text-[color:var(--mute-3)]">·</span>
          <span className="mono-meta">{model.metric}</span>
        </div>

        <div>
          <h3 className="display-md text-[color:var(--paper)]">
            {model.brand}
            <span className="font-display italic text-[color:var(--mute-2)]">.</span>
          </h3>
          <p className="mt-2 mono-meta text-[color:var(--mute-1)]">{model.subtitle}</p>
        </div>

        <p className="text-[color:var(--paper-soft)] text-base md:text-lg leading-relaxed max-w-2xl">
          {model.description}
        </p>

        <ul className="grid grid-cols-1 sm:grid-cols-2 gap-x-8 gap-y-2 max-w-2xl">
          {model.features.map((f) => (
            <li key={f} className="flex items-start gap-3 text-sm text-[color:var(--mute-1)]">
              <span className="mt-2 block w-2 h-px bg-[color:var(--signal-line)]" aria-hidden />
              <span>{f}</span>
            </li>
          ))}
        </ul>

        <div className="flex flex-wrap items-center gap-6 pt-2">
          <a
            href={model.url}
            target="_blank"
            rel="noopener noreferrer"
            onClick={() =>
              trackEvent('service_click', { service_name: model.brand, service_url: model.url })
            }
            className="link-signal mono-meta text-[color:var(--paper)]"
          >
            <span>visit model</span>
            <ArrowUpRight className="w-3.5 h-3.5" />
          </a>
          <span className="mono-meta text-[color:var(--mute-2)] hidden sm:inline">
            {model.code.toLowerCase()}.tsa.lab
          </span>
        </div>
      </div>
    </motion.article>
  );
}

export function Services() {
  return (
    <section
      id="models"
      className="relative py-32 md:py-44 px-6 md:px-10 border-t border-[color:var(--ink-line)]"
    >
      <div className="max-w-[1400px] mx-auto">
        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          viewport={{ once: true, margin: '-20%' }}
          className="grid md:grid-cols-12 gap-6 md:gap-10 mb-20 md:mb-28"
        >
          <div className="md:col-span-3 lg:col-span-2">
            <div className="mono-eyebrow">— 02 / models</div>
          </div>
          <div className="md:col-span-9 lg:col-span-10">
            <h2 className="display-lg text-[color:var(--paper)]">
              The <em className="font-display italic font-light">library.</em>
            </h2>
            <p className="mt-6 max-w-xl text-[color:var(--mute-1)] text-base md:text-lg leading-relaxed">
              <span className="text-[color:var(--paper)]">노출 측정 모델 G24-DISCOVERY</span>를 코어로,
              그 위에 활성화·응대를 잇는 라이브러리. 각 모델은 펀넬의 한 단계만 책임진다.
            </p>
          </div>
        </motion.div>

        {/* Model cards */}
        <div className="border-b border-[color:var(--ink-line)]">
          {models.map((m, i) => (
            <ModelCard key={m.code} model={m} idx={i} />
          ))}
        </div>

        {/* Horizon — ChargeFLOW + Fleet */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
          viewport={{ once: true, margin: '-15%' }}
          className="mt-32"
        >
          <div className="relative rounded-3xl border border-[color:var(--ink-line)] bg-[color:var(--ink-surface)] overflow-hidden">
            {/* Faint inner grid for the horizon panel */}
            <div className="absolute inset-0 bg-grid-fine opacity-60 pointer-events-none" aria-hidden />
            <div
              className="absolute inset-0 pointer-events-none"
              style={{
                background:
                  'radial-gradient(40% 60% at 90% 0%, rgba(106,108,255,0.12), transparent 70%)',
              }}
              aria-hidden
            />

            <div className="relative p-8 md:p-14">
              <div className="flex items-center gap-3 mb-10">
                <span
                  className="signal-dot"
                  style={{ background: 'var(--stage-horizon)' }}
                  aria-hidden
                />
                <span className="mono-eyebrow text-[color:var(--paper)]">
                  Next Horizon · adjacent track
                </span>
              </div>

              <div className="grid md:grid-cols-12 gap-8 md:gap-12">
                <div className="md:col-span-5">
                  <div className="flex items-baseline gap-3 mb-3">
                    <span className="font-display text-7xl leading-none text-[color:var(--signal)]">
                      {horizon.stageCode}
                    </span>
                    <span className="mono-meta text-[color:var(--mute-2)]">/{horizon.index}</span>
                  </div>
                  <h3 className="display-md text-[color:var(--signal)]">
                    {horizon.brand}
                  </h3>
                  <p className="mt-2 mono-meta text-[color:var(--mute-1)]">{horizon.subtitle}</p>
                  <p className="mt-6 text-sm text-[color:var(--mute-1)] leading-relaxed max-w-md">
                    핵심 펀넬 사이클을 넘어, TSA가 다음 단계로 준비하고 있는 인접 영역의 트랙입니다.
                  </p>
                </div>

                <div className="md:col-span-7">
                  <div className="flex flex-wrap items-center gap-3 mb-5">
                    <span className="mono-meta text-[color:var(--paper)]">{horizon.code}</span>
                    <span className="text-[color:var(--mute-3)]">·</span>
                    <StatusBadge status={horizon.status} />
                    <span className="text-[color:var(--mute-3)]">·</span>
                    <span className="mono-meta">{horizon.metric}</span>
                  </div>

                  <p className="text-[color:var(--paper-soft)] text-base leading-relaxed mb-6 max-w-xl">
                    {horizon.description}
                  </p>

                  <ul className="grid grid-cols-1 sm:grid-cols-2 gap-x-8 gap-y-2 mb-8 max-w-xl">
                    {horizon.features.map((f) => (
                      <li
                        key={f}
                        className="flex items-start gap-3 text-sm text-[color:var(--mute-1)]"
                      >
                        <span className="mt-2 block w-2 h-px bg-[color:var(--signal-line)]" aria-hidden />
                        <span>{f}</span>
                      </li>
                    ))}
                  </ul>

                  <a
                    href={horizon.url}
                    download
                    onClick={() =>
                      trackEvent('service_click', { service_name: horizon.brand, action: 'download' })
                    }
                    className="link-signal mono-meta text-[color:var(--paper)]"
                  >
                    <span>download proposal</span>
                    <Download className="w-3.5 h-3.5" />
                  </a>
                </div>
              </div>

              {/* Extended line */}
              <div className="mt-14 pt-10 border-t border-[color:var(--ink-line)]">
                <div className="mono-eyebrow mb-6">Extended Line · 확장 라인업</div>
                {horizon.extensions.map((ext) => (
                  <div
                    key={ext.title}
                    className="grid md:grid-cols-12 gap-4 md:gap-10 items-start"
                  >
                    <div className="md:col-span-3">
                      <h4 className="font-display text-2xl text-[color:var(--signal)]">
                        {ext.title}
                      </h4>
                      <p className="mt-1 mono-meta">{ext.tagline}</p>
                    </div>
                    <div className="md:col-span-9">
                      <p className="text-sm text-[color:var(--mute-1)] leading-relaxed mb-5 max-w-2xl">
                        {ext.description}
                      </p>
                      <Dialog>
                        <DialogTrigger asChild>
                          <button
                            className="link-signal mono-meta text-[color:var(--paper)]"
                            onClick={() =>
                              trackEvent('extension_click', { name: ext.title, action: 'open_detail' })
                            }
                          >
                            <span>read detail</span>
                            <ArrowUpRight className="w-3.5 h-3.5" />
                          </button>
                        </DialogTrigger>
                        <DialogContent className="bg-[color:var(--ink-base)] border-[color:var(--ink-line)] text-[color:var(--paper)] max-w-2xl sm:max-w-2xl p-0 gap-0 max-h-[85vh] overflow-y-auto rounded-2xl">
                          <div className="p-8 md:p-10">
                            <div className="mono-eyebrow mb-5">
                              ChargeFLOW · Extended Line
                            </div>
                            <DialogTitle className="display-md mb-2 text-[color:var(--signal)]">
                              {ext.title}
                            </DialogTitle>
                            <p className="mono-meta mb-8">{ext.tagline}</p>

                            <p className="text-[color:var(--paper-soft)] text-base leading-relaxed mb-10">
                              {ext.detail.positioning}
                            </p>

                            <div className="mb-10">
                              <div className="mono-eyebrow mb-4">Problem</div>
                              <ul className="space-y-2">
                                {ext.detail.problem.map((p, i) => (
                                  <li key={i} className="text-sm text-[color:var(--mute-1)] leading-relaxed">
                                    — {p}
                                  </li>
                                ))}
                              </ul>
                            </div>

                            <div className="mb-10">
                              <div className="mono-eyebrow mb-4">Solution</div>
                              <p className="text-sm text-[color:var(--mute-1)] leading-relaxed">
                                {ext.detail.solution}
                              </p>
                            </div>

                            <div className="flex flex-col sm:flex-row gap-3 pt-6 border-t border-[color:var(--ink-line)]">
                              <DialogClose asChild>
                                <button
                                  type="button"
                                  className="inline-flex items-center justify-center gap-2 bg-[color:var(--signal)] text-[color:var(--ink-base)] px-6 py-3 rounded-full text-sm font-medium hover:bg-[color:var(--paper)] transition-colors group/cta"
                                  onClick={() => {
                                    trackEvent('extension_click', { name: ext.title, action: 'contact' });
                                    setTimeout(() => {
                                      document
                                        .getElementById('contact')
                                        ?.scrollIntoView({ behavior: 'smooth', block: 'start' });
                                    }, 150);
                                  }}
                                >
                                  <span>문의하기</span>
                                  <ArrowRight className="w-4 h-4 group-hover/cta:translate-x-1 transition-transform" />
                                </button>
                              </DialogClose>
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
