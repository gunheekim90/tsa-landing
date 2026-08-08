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
  headline: ['기업 안에서 실제로 돌아가는', 'AI를 만듭니다'],
  sub: '투스텝스어헤드는 AX·DX를 설계하고 구축하는 AI 개발사입니다.\n자체 AI 서비스 다섯 개를 직접 운영하며, 그 경험 그대로 기업에 적용합니다.',
  primaryCta: { label: '도입 문의', href: '#contact' },
  secondaryCta: { label: '운영 중인 서비스 보기', href: '#studio' },
};

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
    summary: '전기차 충전기 1,467기의 관제를 SaaS로 옮기고, Claude 기반 AI 상담이 24시간 문의를 받습니다',
    tags: ['AX', 'DX'],
  },
  {
    client: '토쿠야마상사 · 일본',
    summary: '이커머스·CRM 디지털 전환',
    tags: ['DX'],
  },
  {
    client: 'BridgeLeaf · 미국',
    summary: '아마존 셀러 아웃리치 CRM 구축',
    tags: ['DX'],
  },
  {
    client: 'Kozy.care · 프랑스',
    summary: '유럽 시장 AI 검색 노출 분석 리포트',
    tags: ['AI'],
  },
  {
    client: '올댓아너스클럽 · K-Trip ONE',
    summary: '외국인 관광객용 여행 앱 개발',
    tags: ['DX'],
  },
  {
    client: '어센트코리아',
    summary: '글로벌 대기업 계열 신제품의 AI 검색 노출 검증 · 연간 계약',
    tags: ['AI'],
  },
  {
    client: '레비타로',
    summary: '모바일 앱 개발·운영',
    tags: ['DX'],
  },
];

/** 제3자 검증 — 발급기관이 있는 인증·선정만. 임의 추가 금지. */
export const CREDENTIALS = [
  '한국관광공사 관광벤처사업 선정',
  '중소벤처기업부 창업기업·중소기업 확인',
  '한국인공지능협회(KORAIA) 회원사',
  '연구개발전담부서 보유',
];

/**
 * 외부 파트너 프로필 — 클릭해서 검증 가능한 실적 페이지.
 * ⚠ 위시켓 파트너 페이지는 로그인 벽(auth 리다이렉트)이라 제외 (2026-08-09 실측).
 */
export const PROFILES = [
  { name: '크몽 전문가 프로필', url: 'https://kmong.com/@투스텝스어헤드' },
];

export const STUDIO = {
  heading: '직접 만들고,\n직접 운영합니다.',
  lead: '투스텝스어헤드는 스타트업 스튜디오를 지향합니다. 아이디어를 서비스로 만들고, 운영하며 배운 것을 기업 프로젝트에 그대로 넣습니다.',
  founderNote: '대표는 세 번 창업해 세 번 매각했습니다. 호텔 예약 시스템은 야놀자에, 커머스 플랫폼은 KREAM에 인수됐습니다.',
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
    '통신판매업신고 2025-서울강남-05963',
    '서울특별시 강남구 압구정로 306, 지하1층 4-s 10호(신사동)',
    'glenn.kim@twostepsahead.co.kr · 010-9990-7868',
  ],
  copyright: '© 2026 TwoStepsAhead Co., Ltd. All rights reserved.',
};
