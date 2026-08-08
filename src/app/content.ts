/**
 * 랜딩 전체 카피 단일 소스.
 * 스펙: docs/superpowers/specs/2026-08-08-tsa-landing-ax-studio-design.md
 * 수치·클라이언트명·서비스 한 줄은 스펙 원문 그대로 — 임의 수정 금지.
 */

export const NAV_LINKS = [
  { label: 'AX/DX', href: '#axdx' },
  { label: '사례', href: '#work' },
  { label: '스튜디오', href: '#studio' },
];

export const HERO = {
  headline: ['기업의 AI 전환,', '두 걸음 앞서.'],
  sub: '투스텝스어헤드는 기업에 AX·DX를 설계하고 구축하는 AI 개발사입니다.\n직접 만들어 운영하며 검증한 AI를 기업 안에 넣습니다.',
  primaryCta: { label: '도입 문의', href: '#contact' },
  secondaryCta: { label: '운영 중인 서비스 보기', href: '#studio' },
};

export const STATS = [
  { v: '5', k: 'Live Services' },
  { v: '15+', k: '프로젝트' },
  { v: '3개국', k: '해외 프로젝트' },
  { v: '3×3', k: '창업 · EXIT' },
];

export const CAPABILITIES = [
  {
    tag: 'AX',
    title: '업무에 AI를 붙입니다',
    lead: 'AI 상담·문서/데이터 자동화·업무 AI 에이전트 구축. 도입 진단부터 운영 정착까지.',
    items: ['AI 상담·응대 도입', '문서/데이터 자동화', '업무 AI 에이전트'],
  },
  {
    tag: 'DX',
    title: '오프라인을 온라인으로',
    lead: '종이와 전화로 돌아가는 업무를 시스템으로. SaaS·관제·예약·CRM을 개발합니다.',
    items: ['SaaS·관제 시스템', '예약·주문 시스템', 'CRM·백오피스'],
  },
  {
    tag: 'AICX',
    title: 'AI가 고객을 응대합니다',
    lead: '24시간 AI 전화·채팅 응대. 자체 서비스 우주콜을 운영하며 검증한 기술입니다.',
    items: ['AI 전화 응대', 'AI 채팅 상담', '콜백·문의 정리'],
  },
];

export const CASES = [
  {
    client: '한솔엠에스 · ChargeFLOW',
    summary: '전기차 충전 관제 SaaS 구축 + Claude 기반 24시간 AI 상담',
    tags: ['AX', 'DX'],
  },
  {
    client: '토쿠야마상사 · 일본',
    summary: '이커머스·CRM 디지털 전환',
    tags: ['DX'],
  },
  {
    client: 'BridgeLeaf · 미국',
    summary: '아마존 셀러 아웃리치 CRM',
    tags: ['DX'],
  },
  {
    client: '레비타로',
    summary: '모바일 앱 개발·운영',
    tags: ['DX'],
  },
];

export const STUDIO = {
  heading: '만드는 회사가,\n도입도 잘합니다.',
  lead: '투스텝스어헤드는 스타트업 스튜디오를 지향합니다. 아이디어를 직접 서비스로 만들고, 운영하며 배운 것을 기업 프로젝트에 그대로 넣습니다.',
};

export const SERVICES = [
  { name: '우주콜', tagline: '전화를 대신 받는 AI 직원', url: 'https://www.woojoocall.com' },
  { name: '텔링사주', tagline: '캐릭터와 채팅으로 보는 AI 사주', url: 'https://telling.ai.kr' },
  { name: '마이크로웨이브', tagline: '글로벌 인플루언서 마케팅', url: 'https://microwave.ai.kr' },
  { name: '사장노트', tagline: '소상공인 AI 마케팅', url: 'https://www.sajangnote.kr' },
  { name: '투니', tagline: '손으로 그리는 콘텐츠 제작 앱', url: 'https://tooni.xyz' },
];

export const INTERESTS = [
  { value: 'ax', label: 'AX 도입 · AI 상담/자동화/에이전트' },
  { value: 'dx', label: 'DX 구축 · SaaS/관제/CRM 개발' },
  { value: 'aicx', label: 'AICX · AI 전화/채팅 응대' },
  { value: 'studio', label: '스튜디오 협업 · 제휴' },
  { value: 'other', label: '기타' },
];

export const FOOTER = {
  corp: '주식회사 투스텝스어헤드',
  lines: [
    '대표 김건희 · 사업자등록번호 319-87-03770',
    '서울특별시 강남구 압구정로 306, 지하1층 4-s 10호(신사동)',
    'glenn.kim@twostepsahead.co.kr · 010-9990-7868',
  ],
  copyright: '© 2026 TwoStepsAhead Co., Ltd. All rights reserved.',
};
