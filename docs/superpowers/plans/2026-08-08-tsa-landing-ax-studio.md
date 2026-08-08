# AX/DX 스튜디오 랜딩 Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** twostepsahead.co.kr을 "AX/DX 도입 AI 개발사 + 스타트업 스튜디오" 서사의 새 다크 원페이지로 전면 교체하고 main 브랜치를 정상화해 배포한다.

**Architecture:** 기존 Vite+React 앱의 셸(SiteNav 골격, Reveal/WordsPullUp 모션, dc-* 디자인 토큰, api/inquiry.ts)을 유지하고 섹션 콘텐츠 레이어만 전면 재작성. 카피는 `src/app/content.ts` 단일 모듈로 중앙화해 QA를 grep 가능하게 만든다. 스타일 방향은 해외 AX/DX 사이트 리서치 워크플로우(wf_826eb8f9) 합성 결과를 따른다.

**Tech Stack:** React 18 + Vite 6 + Tailwind 4 + motion/react + lucide-react + pnpm (신규 의존성 금지)

## Global Constraints

- 스펙: `docs/superpowers/specs/2026-08-08-tsa-landing-ax-studio-design.md` — 카피·수치·링크는 스펙 원문 그대로.
- 플루랭크·툰에이전트·GEO·Pluora·Plurank Lead·LiteCX 문구 전면 제거 (`api/inquiry.ts` 포함).
- `naver-site-verification` 메타(`ad987914f240b4a21986751ba69d17aabfc2ed85`) 유지 필수.
- 액센트는 `--dc-purple` 1색. 이미지 에셋 신규 추가 금지(타이포+CSS만). `prefers-reduced-motion` 존중.
- 작업 브랜치 `redesign/ax-studio`. 커밋 메시지 한국어 + `Co-Authored-By: Claude Fable 5 <noreply@anthropic.com>`.
- 수치는 스펙 명시분만: 5 Live Services · 15+ 프로젝트 · 3개국 해외 프로젝트 · 3회 창업 · 3회 EXIT.

---

### Task 1: 콘텐츠 모듈 (단일 카피 소스)

**Files:**
- Create: `src/app/content.ts`

**Interfaces:**
- Produces: `NAV_LINKS: {label,href}[]`, `HERO`, `STATS: {v,k}[]`, `CAPABILITIES: {tag,title,lead,items[]}[]`, `CASES: {client,summary,tags[]}[]`, `STUDIO`, `SERVICES: {name,tagline,url}[]`, `INTERESTS: {value,label}[]`, `FOOTER`

- [ ] **Step 1: content.ts 작성** — 스펙의 카피를 그대로 옮긴다.

```ts
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
  { tag: 'AX', title: '업무에 AI를 붙입니다',
    lead: 'AI 상담·문서/데이터 자동화·업무 AI 에이전트 구축. 도입 진단부터 운영 정착까지.',
    items: ['AI 상담·응대 도입', '문서/데이터 자동화', '업무 AI 에이전트'] },
  { tag: 'DX', title: '오프라인을 온라인으로',
    lead: '종이와 전화로 돌아가는 업무를 시스템으로. SaaS·관제·예약·CRM을 개발합니다.',
    items: ['SaaS·관제 시스템', '예약·주문 시스템', 'CRM·백오피스'] },
  { tag: 'AICX', title: 'AI가 고객을 응대합니다',
    lead: '24시간 AI 전화·채팅 응대. 자체 서비스 우주콜을 운영하며 검증한 기술입니다.',
    items: ['AI 전화 응대', 'AI 채팅 상담', '콜백·문의 정리'] },
];

export const CASES = [
  { client: '한솔엠에스 · ChargeFLOW', summary: '전기차 충전 관제 SaaS 구축 + Claude 기반 24시간 AI 상담', tags: ['AX', 'DX'] },
  { client: '토쿠야마상사 · 일본', summary: '이커머스·CRM 디지털 전환', tags: ['DX'] },
  { client: 'BridgeLeaf · 미국', summary: '아마존 셀러 아웃리치 CRM', tags: ['DX'] },
  { client: '레비타로', summary: '모바일 앱 개발·운영', tags: ['DX'] },
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
```

- [ ] **Step 2: 타입 체크** — Run: `pnpm exec tsc --noEmit 2>/dev/null || npx vite build` Expected: 통과
- [ ] **Step 3: 커밋** — `git add src/app/content.ts && git commit -m "feat(content): 새 서사 카피 단일 모듈"`

---

### Task 2: head 메타 재작성 (index.html)

**Files:**
- Modify: `index.html` (head 전체)

- [ ] **Step 1:** title `TwoStepsAhead — 기업 AX·DX 도입 AI 개발사 · 스타트업 스튜디오`, description "투스텝스어헤드는 기업에 AI 상담·자동화·에이전트(AX)와 SaaS·CRM 시스템(DX)을 설계·구축하는 AI 개발사입니다. 우주콜·텔링사주·마이크로웨이브·사장노트·투니를 직접 만들어 운영하는 스타트업 스튜디오입니다." OG/Twitter 동기화. **naver-site-verification 유지.** GEO/Plurank 키워드 제거. `<video>`/hero.mp4 프리로드 제거.
- [ ] **Step 2:** `grep -iE "plurank|toonagent|GEO|pluora" index.html` → naver 메타 외 0건 확인
- [ ] **Step 3:** 커밋

---

### Task 3: SiteNav·SiteFooter 개편

**Files:**
- Modify: `src/app/components/SiteNav.tsx` — `NAV_LINKS` 사용, CTA "도입 문의"(`#contact`)
- Modify: `src/app/components/SiteFooter.tsx` — `FOOTER` 사용, 법인 정보 3줄 + copyright

**Interfaces:** Consumes Task 1의 `NAV_LINKS`, `FOOTER`.

- [ ] Step 1: SiteNav 수정 (골격·glass 스타일 유지, 링크·CTA만 교체)
- [ ] Step 2: SiteFooter 수정
- [ ] Step 3: 커밋

---

### Task 4: Hero (AxHero)

**Files:**
- Create: `src/app/components/AxHero.tsx`
- Delete: `src/app/components/StudioHero.tsx`, `public/hero.mp4`

**Interfaces:** Consumes `HERO`, `STATS`, `WordsPullUp`, `Reveal`. Produces `<AxHero />`.

- [ ] Step 1: AxHero 구현 — WordsPullUp 헤드라인(2줄, 액센트 워드 1개), 서브카피, CTA 2개, 하단 스탯 라인 4개. 배경은 CSS 그리드/글로우(라디얼 퍼플 + 미세 그리드), `motion-reduce` 대응. 리서치 방향 문서의 히어로 지침 적용.
- [ ] Step 2: 빌드 확인, 커밋

---

### Task 5: AxDxSection (3역량)

**Files:**
- Create: `src/app/components/sections/AxDxSection.tsx`
- Delete: `src/app/components/sections/GeoSection.tsx`

**Interfaces:** Consumes `CAPABILITIES`. Produces `<AxDxSection />` (`id="axdx"`).

- [ ] Step 1: 3카드 그리드 — tag(모노 라벨) + title + lead + items 리스트. 카드 보더+호버 글로우.
- [ ] Step 2: 빌드, 커밋

---

### Task 6: WorkSection (사례 4)

**Files:**
- Create: `src/app/components/sections/WorkSection.tsx`
- Delete: `src/app/components/sections/ToonSection.tsx`

**Interfaces:** Consumes `CASES`. Produces `<WorkSection />` (`id="work"`).

- [ ] Step 1: 4건 리스트/그리드 — client + summary + 역량 태그 칩. 이미지 없음, 타이포 주도.
- [ ] Step 2: 빌드, 커밋

---

### Task 7: StudioServicesSection (서비스 5)

**Files:**
- Create: `src/app/components/sections/StudioServicesSection.tsx`
- Delete: `src/app/components/sections/StudioSection.tsx` (구 버전)

**Interfaces:** Consumes `STUDIO`, `SERVICES`. Produces `<StudioServicesSection />` (`id="studio"`).

- [ ] Step 1: 헤딩+리드+5카드(외부링크 `target="_blank" rel="noopener noreferrer"`, ArrowUpRight 아이콘). 각 카드 name+tagline+도메인 표기.
- [ ] Step 2: 빌드, 커밋

---

### Task 8: Contact 인라인 폼 + inquiry API 갱신

**Files:**
- Create: `src/app/components/sections/ContactFormSection.tsx` (InquiryDialog의 폼 로직 이식, 인라인화)
- Modify: `api/inquiry.ts` — `INTEREST_LABEL`을 Task 1 `INTERESTS`와 동일 키로 교체
- Delete: `src/app/components/sections/ContactSection.tsx`, `src/app/components/InquiryDialog.tsx`

**Interfaces:** Consumes `INTERESTS`. 폼 POST `/api/inquiry` body `{name,company,email,interest,message,_hp}` (기존 계약 유지).

- [ ] Step 1: ContactFormSection 구현 — 헤딩("AI 전환, 어디서부터 시작할지 같이 봅니다" 톤) + 인라인 폼(name/company/email/interest select/message/honeypot) + 상태(idle/submitting/success/error) + mailto 보조 링크. gtag trackEvent 유지.
- [ ] Step 2: api/inquiry.ts INTEREST_LABEL 교체:

```ts
const INTEREST_LABEL: Record<string, string> = {
  ax: 'AX 도입 · AI 상담/자동화/에이전트',
  dx: 'DX 구축 · SaaS/관제/CRM 개발',
  aicx: 'AICX · AI 전화/채팅 응대',
  studio: '스튜디오 협업 · 제휴',
  other: '기타',
};
```

- [ ] Step 3: 빌드, 커밋

---

### Task 9: App 조립 + 구코드 제거 + 최종 검증

**Files:**
- Modify: `src/app/App.tsx` — SiteNav → AxHero → AxDxSection → WorkSection → StudioServicesSection → ContactFormSection → SiteFooter
- Delete: 구 섹션 잔여 파일, 미사용 import

- [ ] Step 1: App.tsx 교체, 빌드
- [ ] Step 2: 카피 QA — `grep -riE "plurank|toonagent|pluora|litecx|GEO 모니터링" src api index.html` → 0건
- [ ] Step 3: `pnpm build` + `vite preview` 스크린샷(데스크톱 1440·모바일 390) 육안 검증
- [ ] Step 4: 커밋

---

### Task 10: 리뷰 워크플로우 + 배포 (main 정상화)

- [ ] Step 1: 리뷰 워크플로우 — 스크린샷 비주얼 QA·코드리뷰·카피 검증 에이전트 병렬, CONFIRMED 이슈 수정
- [ ] Step 2: `git checkout main && git merge redesign/ax-studio` → `git push origin main redesign/ax-studio`
- [ ] Step 3: `vercel --prod` (git push가 main production 자동배포하므로 결과 확인 후 필요시만)
- [ ] Step 4: 라이브 실측 — 200, 새 title, naver 메타, 서비스 링크 5개, 구 브랜드 문구 0
- [ ] Step 5: ⚠ SLACK_WEBHOOK_URL 미등록 상태 보고(폼 500) — 대표에게 웹훅 URL 요청

## 완료 조건

- twostepsahead.co.kr이 새 AX/DX+스튜디오 랜딩으로 뜬다 (main = 정본).
- 구 브랜드 문구 0건, naver 메타 유지, 빌드·프리뷰·라이브 검증 통과.
