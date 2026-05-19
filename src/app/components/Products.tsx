import { motion } from 'motion/react';
import { ArrowUpRight } from 'lucide-react';
import { trackEvent } from '@/lib/gtag';

interface Product {
  code: string;
  stage: 'D' | 'A' | 'C';
  stageLabel: string;
  brand: string;
  oneLiner: string;
  detail: string;
  url: string;
  status: 'live' | 'beta';
}

const products: Product[] = [
  {
    code: 'Pluora · v0.4',
    stage: 'D',
    stageLabel: 'top of funnel · core',
    brand: 'Plurank',
    oneLiner: '발행 전에 노출·인용·추천을 예측합니다.',
    detail:
      '12개국 7 AI 검색 + YouTube · Instagram · X · TikTok · Threads에서 3천만 건+ 데이터를 학습한 멀티시그널 마케팅 AI 모델. URL 한 줄을 입력하면 채널별 노출 확률·GEO 점수·우선 개선 액션이 출력됩니다.',
    url: 'https://georank24.com',
    status: 'live',
  },
  {
    code: 'Plurank-Lead',
    stage: 'A',
    stageLabel: 'mid funnel',
    brand: 'Plurank Lead',
    oneLiner: '방문 기업을 영업 액션으로 잇습니다.',
    detail:
      'IP·도메인 신호로 방문 기업을 식별하고, 가격·데모 같은 구매 의도 페이지의 행동을 Slack으로 즉시 전달. Pluora가 키운 익명 트래픽을 실제 영업 파이프라인으로 옮깁니다.',
    url: 'https://lead.georank24.com',
    status: 'live',
  },
  {
    code: 'LiteCX-Voice',
    stage: 'C',
    stageLabel: 'bottom of funnel',
    brand: 'LiteCX',
    oneLiner: '대표번호 한 줄로 응대·예약·VOC가 자동입니다.',
    detail:
      'PBX-Free, WebRTC 콘솔, 실시간 STT 기반의 가벼운 CX 인프라. 응답봇·상담원 보조·VOC 분석·자동 요약을 한 화면에서 운영합니다.',
    url: 'https://litecx.com',
    status: 'live',
  },
];

function ProductRow({ p, idx }: { p: Product; idx: number }) {
  return (
    <motion.article
      initial={{ opacity: 0, y: 32 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, delay: idx * 0.1, ease: [0.16, 1, 0.3, 1] }}
      viewport={{ once: true, margin: '-15%' }}
      className="group relative grid md:grid-cols-12 gap-6 md:gap-10 py-10 md:py-12 border-t border-[color:var(--ink-line)]"
    >
      {/* Stage */}
      <div className="md:col-span-3 lg:col-span-2 flex md:flex-col items-baseline md:items-start gap-4 md:gap-3">
        <span className="font-display text-6xl md:text-7xl leading-none text-[color:var(--paper)] group-hover:text-[color:var(--signal)] transition-colors duration-700">
          {p.stage}
        </span>
        <div className="mono-eyebrow text-[color:var(--mute-1)]">{p.stageLabel}</div>
      </div>

      {/* Body */}
      <div className="md:col-span-9 lg:col-span-10 flex flex-col gap-4">
        <div className="flex flex-wrap items-center gap-3">
          <span className="mono-meta text-[color:var(--paper)]">{p.code}</span>
          <span className="text-[color:var(--mute-3)]">·</span>
          <span className="mono-meta inline-flex items-center gap-1.5 px-2 py-0.5 border border-[color:var(--signal-line)] text-[color:var(--signal)] rounded-full">
            <span className="signal-dot" aria-hidden style={{ width: '0.3rem', height: '0.3rem' }} />
            {p.status}
          </span>
        </div>

        <h3 className="display-md text-[color:var(--paper)]">
          {p.brand}
          <span className="font-display italic text-[color:var(--mute-2)]">.</span>
        </h3>

        <p className="font-display italic text-xl md:text-2xl text-[color:var(--signal)] leading-snug max-w-2xl">
          “{p.oneLiner}”
        </p>

        <p className="text-[color:var(--paper-soft)] text-base leading-relaxed max-w-2xl">
          {p.detail}
        </p>

        <div className="pt-2">
          <a
            href={p.url}
            target="_blank"
            rel="noopener noreferrer"
            onClick={() =>
              trackEvent('product_click', { product: p.brand, url: p.url })
            }
            className="link-signal mono-meta text-[color:var(--paper)] inline-flex items-center gap-2"
          >
            <span>visit {p.brand.toLowerCase().replace(' ', '-')}</span>
            <ArrowUpRight className="w-3.5 h-3.5" />
          </a>
        </div>
      </div>
    </motion.article>
  );
}

export function Products() {
  return (
    <section
      id="products"
      className="relative py-32 md:py-44 px-6 md:px-10 border-t border-[color:var(--ink-line)]"
      aria-label="Products"
    >
      <div className="max-w-[1400px] mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          viewport={{ once: true, margin: '-20%' }}
          className="grid md:grid-cols-12 gap-6 md:gap-10 mb-16 md:mb-20"
        >
          <div className="md:col-span-3 lg:col-span-2">
            <div className="mono-eyebrow">— 02 / products</div>
          </div>
          <div className="md:col-span-9 lg:col-span-10">
            <h2 className="display-lg text-[color:var(--paper)]">
              Three models. <em className="font-display italic font-light">Full funnel.</em>
            </h2>
            <p className="mt-6 max-w-xl text-[color:var(--mute-1)] text-base md:text-lg leading-relaxed">
              발견(Pluora) · 활성화(Plurank Lead) · 응대(LiteCX) — 각 모델이 한 단계의 추론을 책임지고,
              모듈러로 조합됩니다.
            </p>
          </div>
        </motion.div>

        <div className="border-b border-[color:var(--ink-line)]">
          {products.map((p, i) => (
            <ProductRow key={p.brand} p={p} idx={i} />
          ))}
        </div>
      </div>
    </section>
  );
}
