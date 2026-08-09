/**
 * 랜딩 전체 카피 단일 소스.
 * 스펙: docs/superpowers/specs/2026-08-10-light-editorial-redesign.md
 * 수치·클라이언트명·플랫폼명은 공개 검증된 사실만 — 임의 수정·창작 금지.
 */

export const NAV_LINKS = [
  { label: '여정', href: '#journey' },
  { label: '사례', href: '#work' },
  { label: '솔루션', href: '#solutions' },
  { label: '교육', href: '#education' },
  { label: '스튜디오', href: '#studio' },
];

export const HERO = {
  chip: 'AX · DX · 교육 · 스타트업 스튜디오',
  /** headline: highlight=true 세그먼트에 형광 마크 */
  headline: [
    { text: '이제, AI에게 ', highlight: false },
    { text: '일을 시키세요', highlight: true },
  ],
  sub: '투스텝스어헤드는 AX·DX를 설계하고 구축하는 AI 개발사입니다.\n자체 AI 서비스 다섯 개를 직접 운영하며, 그 경험 그대로 기업에 적용합니다.',
  primaryCta: { label: '무료 상담받기', href: '#contact' },
  secondaryCta: { label: '사례 보기', href: '#work' },
  /** CTA 아래 신뢰 뱃지 — 대표 확인 사실(2026-08-10) */
  badges: ['한국관광공사 관광벤처 선정', 'AI 바우처 공급기업', '벤처기업 인증'],
};

/**
 * 성과 스토리형 스탯 — 숫자가 속도·역량의 변화를 말하게(joshua 문법의 변주).
 * 전부 공개 검증분: 24개월→2주·1,467기(ChargeFLOW 공개 제안서), 2억+(위시켓 프로필).
 */
export const STATS = [
  { v: '24개월 → 2주', k: '충전 관제 구축, 구독 도입으로 단축' },
  { v: '1,467기', k: '실운영 중인 충전기 관제' },
  { v: '15+', k: '국내외 프로젝트 · 미국 일본 프랑스' },
  { v: '5개', k: '직접 만들어 운영하는 AI 서비스' },
];

/**
 * 포트폴리오·파트너 전체 — 무한 횡스크롤 마퀴용.
 * 전부 위시켓·크몽에 공개된 실명(의료기관 등 익명 건 제외).
 */
export const CLIENTS = [
  '한솔엠에스',
  '어센트코리아',
  '토쿠야마상사',
  'BridgeLeaf',
  'Kozy.care',
  '올댓아너스클럽',
  '레비타로',
  '아워컨설팅',
  '한인텔',
  '더블유디자인호텔',
  '한국관광공사',
];

export const JOURNEY = {
  title: 'AI 도입은 구축으로\n끝나지 않습니다.',
  lead: '진단에서 운영까지, 도입의 전 구간을 한 팀이 맡습니다.',
  steps: [
    {
      num: '01',
      name: '진단',
      title: '업무에서 AI가 들어갈 지점을 찾습니다',
      items: ['현장 인터뷰·업무 분해', '적용 지점과 우선순위 정리', '도입 범위·비용 설계'],
    },
    {
      num: '02',
      name: '구축',
      title: 'AX·DX 시스템을 만듭니다',
      items: ['AI 에이전트·업무 자동화', 'SaaS·관제·예약·CRM 개발', '기존 시스템 연동'],
    },
    {
      num: '03',
      name: '운영',
      title: '도입 후를 함께 갑니다',
      items: ['24시간 AI 고객 응대(AICX)', '모니터링·개선', '임직원 교육'],
    },
  ],
};

export const CASES_FEATURED = [
  {
    client: '한솔엠에스 · ChargeFLOW',
    headline: '충전기 1,467기 — 실운영 중인 전기차 충전 관제를 만들다',
    detail: 'OCPP 기반 통합 관제 SaaS를 구축하고, Claude 기반 AI 상담이 24시간 문의를 받습니다.',
    tags: ['AX', 'DX'],
  },
  {
    client: '어센트코리아',
    headline: '글로벌 대기업 계열 신제품의 AI 검색 노출 검증',
    detail: '국가·플랫폼별 AI 검색 데이터를 공급하는 연간 계약으로 이어졌습니다.',
    tags: ['AI'],
  },
  {
    client: '올댓아너스클럽 · K-Trip ONE',
    headline: '외국인 관광객 앱, 기획부터 런칭까지',
    detail: '여행 패스 서비스 앱을 데이터 파이프라인부터 풀스택으로 만들었습니다.',
    tags: ['DX'],
  },
];

export const CASES_LIST = [
  { num: '04', client: '토쿠야마상사 · 일본', summary: '이커머스·CRM 디지털 전환' },
  { num: '05', client: 'BridgeLeaf · 미국', summary: '아마존 셀러 아웃리치 CRM 구축' },
  { num: '06', client: 'Kozy.care · 프랑스', summary: '유럽 시장 AI 검색 노출 분석 리포트' },
  { num: '07', client: '레비타로', summary: '모바일 앱 개발·운영' },
];

export const TECH_META = [
  'AI 에이전트 · 상담 구축',
  'SaaS·관제 인프라 — 서버 43모듈 · 관리자 87화면 · OCPP',
  '데이터 수집 · 크롤링 인프라',
  '글로벌 프로젝트 — 미국 · 일본 · 프랑스',
];

export const SOLUTIONS = {
  title: '만들어 둔 것부터\n쓰셔도 됩니다.',
  lead: '직접 운영 중인 자체 솔루션은 개발 없이 바로 도입할 수 있습니다.',
  main: {
    name: '우주콜',
    tagline: '전화를 대신 받는 AI 직원',
    desc: '바쁜 순간과 영업시간 밖에도 전화를 대신 받고, 반복 문의와 콜백 요청을 정리합니다. 매장·병원·사무실에 바로 붙습니다.',
    url: 'https://www.woojoocall.com',
    dialogue: [
      { role: 'caller', text: '지금 예약 가능한가요?' },
      { role: 'ai', text: '네, 오늘 오후 3시와 5시에 자리가 있습니다. 성함과 연락처를 남겨주시면 예약해 드릴게요.' },
      { role: 'caller', text: '김민수, 010-1234-5678이요.' },
      { role: 'ai', text: '오후 3시로 예약했습니다. 확인 문자를 보내드렸어요.' },
    ],
  },
  sub: {
    name: '사장노트',
    tagline: '소상공인 AI 마케팅',
    desc: '가게의 온라인 노출을 AI가 진단하고, 무엇을 하면 되는지 알려줍니다.',
    url: 'https://www.sajangnote.kr',
  },
};

export const EDUCATION = {
  title: '만든 사람이\n가르칩니다.',
  lead: '대표는 Class101 · 패스트캠퍼스 · 스파르타코딩클럽 · 코드잇에서 개발 강의와 콘텐츠를 만들어 왔습니다. 지금도 기업과 개인에게 AI와 개발을 가르칩니다.',
  platforms: ['Class101', '패스트캠퍼스', '스파르타코딩클럽', '코드잇'],
  programs: [
    {
      title: '임원·리더 AI 특강',
      desc: 'AI가 사업을 어떻게 바꾸는지, 의사결정자가 알아야 할 것만 압축합니다.',
    },
    {
      title: 'AX·DX 실무 워크숍',
      desc: '부서 단위로 실제 업무를 가져와, AI를 붙이는 실습까지 갑니다.',
    },
    {
      title: '개발 임직원 교육',
      desc: 'AI 도구·에이전트 개발을 현업 개발자 눈높이로 가르칩니다.',
    },
    {
      title: '개인 교육·코칭',
      desc: '커리어 전환부터 사이드 프로젝트까지, 1:1로 갑니다.',
    },
  ],
};

export const STUDIO = {
  heading: '직접 만들고,\n직접 운영합니다.',
  lead: '투스텝스어헤드는 스타트업 스튜디오를 지향합니다. 아이디어를 서비스로 만들고, 운영하며 배운 것을 기업 프로젝트에 그대로 넣습니다.',
  founderNote: '대표 김건희는 세 번 창업해 세 번 매각했습니다. COO 김지현은 B2B 스타트업에서 8년간 운영을 맡으며 시리즈 A와 B 투자 유치를 이끌었습니다.',
};

export const SERVICES = [
  { name: '우주콜', tagline: '전화를 대신 받는 AI 직원', url: 'https://www.woojoocall.com' },
  { name: '텔링사주', tagline: '캐릭터와 채팅으로 보는 AI 사주', url: 'https://telling.ai.kr' },
  { name: '마이크로웨이브', tagline: '글로벌 인플루언서 마케팅', url: 'https://microwave.ai.kr' },
  { name: '사장노트', tagline: '소상공인 AI 마케팅', url: 'https://www.sajangnote.kr' },
  { name: '투니', tagline: '손으로 그리는 콘텐츠 제작 앱', url: 'https://tooni.xyz' },
];

export const STATEMENT = '납품하고 떠나지 않습니다.\n운영까지 함께합니다.';

/** 제3자 검증 — 발급기관이 있는 인증·선정만. 임의 추가 금지. */
export const CREDENTIALS = [
  '한국관광공사 관광벤처사업 선정',
  'AI 바우처 공급기업',
  '벤처기업 인증',
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

export const INTERESTS = [
  { value: 'ax', label: 'AX 도입 · AI 상담/자동화/에이전트' },
  { value: 'dx', label: 'DX 구축 · SaaS/관제/CRM 개발' },
  { value: 'aicx', label: 'AICX · AI 전화/채팅 응대' },
  { value: 'edu', label: '기업교육 · 강의/워크숍' },
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
