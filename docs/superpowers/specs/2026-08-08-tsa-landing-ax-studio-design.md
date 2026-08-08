# twostepsahead.co.kr 전면 개편 — AX/DX 전문 + 스타트업 스튜디오 설계

작성일: 2026-08-08 · 승인: 대표 (섹션 구조·비주얼·서사 승인 완료)

## 배경과 목표

현행 랜딩(브랜치 `redesign/datacore-v3`)은 "예측 마케팅 AI 스튜디오 · GEO 모니터링 × ToonAgent"
포지셔닝이다. **플루랭크·툰에이전트는 종료된 서비스**(대표 확인, 2026-08-08)라 서사 전체가
무효가 됐다.

새 포지셔닝: **기업에 AX/DX를 도입하는 AI 개발사**이자, **자체 서비스 5종을 직접 만들어
운영하는 스타트업 스튜디오**. AX/DX를 주로 강조하고, 자체 서비스는 "만드는 회사"라는
증거로 뒤에 배치한다(대표 지시).

성공 기준: 기업 담당자가 첫 화면에서 "우리 회사 AI 도입을 맡길 수 있는 회사"로 인식하고
문의 폼까지 도달하는 것. 심플하고 임팩트 있게.

## 확정 사항 (대표 승인)

1. 플루랭크·툰에이전트 언급 **전면 제거** (종료된 서비스).
2. 사장노트 = **소상공인 AI 마케팅** 서비스로 소개.
3. 비주얼: **새 다크 스튜디오** — 다크 베이스 유지하되 완전히 새로 설계.
4. 구성: A안 — AX/DX 본업 → 증거 → 스튜디오 → 문의 순서의 원페이지.

## 페이지 구조 (6개 유닛)

내러티브: "AI로 기업을 바꾸는 회사. 그리고 그 AI를 직접 만들어 운영하는 스튜디오."

### ① SiteNav
- TSA 워드마크(TwoStepsAhead) + 앵커 링크: AX/DX(`#axdx`) · 사례(`#work`) · 스튜디오(`#studio`) · 문의(`#contact`)
- 우측 CTA 버튼 "도입 문의" → `#contact`
- 모바일: 앵커 축약 또는 햄버거 없이 CTA만 유지(심플 우선)

### ② Hero
- 헤드라인: **"기업의 AI 전환, 두 걸음 앞서."**
- 서브카피: "투스텝스어헤드는 기업에 AX·DX를 설계하고 구축하는 AI 개발사입니다.
  직접 만들어 운영하며 검증한 AI를 기업 안에 넣습니다."
- 스탯 라인 4개: `5 Live Services` · `15+ 프로젝트` · `3개국 해외 프로젝트` · `3회 창업 · 3회 EXIT`
  (전부 위시켓 프로필·llms.txt에 공개된 검증 가능 수치만. 새 수치 창작 금지)
- 배경: `hero.mp4` 제거 → 경량 CSS/canvas 시그널 애니메이션(다크 + 일렉트릭 액센트,
  `prefers-reduced-motion` 존중). 페이지 무게 대폭 감소.
- CTA: "도입 문의" (primary) + "운영 중인 서비스 보기" (secondary → `#studio`)

### ③ AX/DX 섹션 `#axdx` (What we do)
3개 역량 카드 — 위시켓 파트너 프로필의 "AX/DX 도입 전문 + AICX" 구조와 동일하게 유지해
채널 간 일관성 확보:

| 카드 | 제목 | 내용 |
|---|---|---|
| AX | **AX 도입** — 업무에 AI를 붙입니다 | AI 상담·문서/데이터 자동화·업무 AI 에이전트 구축. 도입 진단부터 운영 정착까지. |
| DX | **DX 구축** — 오프라인을 온라인으로 | SaaS·관제 시스템·예약·CRM 개발. 종이와 전화로 돌아가는 업무를 시스템으로. |
| AICX | **AICX** — AI가 고객을 응대합니다 | 24시간 AI 전화·채팅 응대. 자체 서비스 우주콜을 운영하며 검증한 기술. |

### ④ 사례 섹션 `#work` (Proof)
실제 프로젝트 4건 카드. 전부 위시켓·llms.txt에 이미 실명 공개된 것만:

1. **한솔엠에스 · ChargeFLOW** — 전기차 충전 관제 SaaS 구축 + Claude 기반 24시간 AI 상담 (AX+DX)
2. **토쿠야마상사(일본)** — 이커머스·CRM 디지털 전환 (DX)
3. **BridgeLeaf(미국)** — 아마존 셀러 아웃리치 CRM (DX)
4. **레비타로** — 모바일 앱 개발·운영 (DX)

각 카드: 클라이언트명 · 한 줄 성과 · 역량 태그(AX/DX/AICX). 이미지 없이 타이포+태그로
심플하게(스크린샷 수급 이슈 제거).
익명화 규칙: 삼성 계열 → 언급하지 않음(GEO 프로젝트라 새 서사와 무관). 의료기관 → 미포함.

### ⑤ 스튜디오 섹션 `#studio` (We build our own)
- 헤딩: **"만드는 회사가, 도입도 잘합니다."**
- 리드: "투스텝스어헤드는 스타트업 스튜디오를 지향합니다. 아이디어를 직접 서비스로 만들고,
  운영하며 배운 것을 기업 프로젝트에 그대로 넣습니다."
- 5개 서비스 카드(외부 링크, `target="_blank" rel="noopener"`):

| 서비스 | 한 줄 | 링크 |
|---|---|---|
| 우주콜 | 전화를 대신 받는 AI 직원 | https://www.woojoocall.com |
| 텔링사주 | 캐릭터와 채팅으로 보는 AI 사주 | https://telling.ai.kr |
| 마이크로웨이브 | 글로벌 인플루언서 마케팅 | https://microwave.ai.kr |
| 사장노트 | 소상공인 AI 마케팅 | https://www.sajangnote.kr |
| 투니 | 손으로 그리는 콘텐츠 제작 앱 | https://tooni.xyz |

- 각 서비스의 한 줄은 해당 사이트의 실제 타이틀·메타에서 가져온 표현(2026-08-08 실측)이며
  임의로 바꾸지 않는다. 단 사장노트는 대표 확인 문구("소상공인 AI 마케팅") 사용.

### ⑥ Contact + Footer `#contact`
- 문의 폼: 기존 `api/inquiry.ts`(edge, Slack 웹훅) 재사용.
  `INTEREST_LABEL`만 교체: `ax`(AX 도입) / `dx`(DX 구축) / `aicx`(AICX·AI 응대) /
  `studio`(스튜디오 협업·제휴) / `other`(기타).
  InquiryDialog가 아닌 인라인 섹션 폼으로 배치(원페이지 마지막 전환 지점).
- 푸터: 주식회사 투스텝스어헤드 · 대표 김건희 · 사업자등록번호 319-87-03770 ·
  서울특별시 강남구 압구정로 306, 지하1층 4-s 10호(신사동) ·
  glenn.kim@twostepsahead.co.kr · 010-9990-7868 · © 2026 TwoStepsAhead Co., Ltd.

## 비주얼 방향

- 다크 베이스(#0b0a10 계열) + 액센트는 기존 일렉트릭 퍼플(`--dc-purple`) **1색만** 유지 —
  심플·임팩트 원칙, 토큰 재사용으로 작업량 최소화.
- 타이포 주도 레이아웃: 큰 디스플레이 헤드라인, 넉넉한 여백, 카드에는 보더+미묘한 그라데이션.
- 기존 `Reveal`/`WordsPullUp` 애니메이션 컴포넌트 재사용. 신규 무거운 라이브러리 추가 금지.
- `prefers-reduced-motion` 전 애니메이션 존중.

## 기술 설계

- 스택 유지: React 18 + Vite 6 + Tailwind 4 + pnpm. 새 의존성 추가 금지.
- `src/app/App.tsx`가 새 6개 유닛을 조립. 구 섹션(GeoSection·ToonSection·StudioSection·
  StudioHero)은 **삭제**(git 이력에 남으므로 백업 불필요). 미사용 asset(hero.mp4 등) 제거.
- `index.html` head 재작성:
  - title: `TwoStepsAhead — 기업 AX·DX 도입 AI 개발사 · 스타트업 스튜디오`
  - description: AX/DX 중심으로 재작성, 플루랭크·툰에이전트·GEO 문구 제거
  - OG/Twitter 메타 동기화. og-image는 기존 파일 유지(새 이미지는 후속 작업)
  - **`naver-site-verification` 메타 유지 필수** (`ad987914f240b4a21986751ba69d17aabfc2ed85`)
- `public/sitemap.xml`·`robots.txt` 점검(원페이지라 URL 변화 없음, lastmod만 갱신).

## 배포 설계 (main 정상화 포함)

현행 함정: Vercel productionBranch=`main`인데 라이브는 `redesign/datacore-v3`
(main push 시 옛 디자인으로 롤백되는 구조).

1. 작업 브랜치 `redesign/ax-studio`(← redesign/datacore-v3에서 분기)에서 구현.
2. 로컬 `pnpm build` + 프리뷰 검증 → 스크린샷 확인.
3. `redesign/ax-studio` → `main` 머지(redesign/datacore-v3는 main의 FF라 충돌 없음) 후 push
   → **main이 다시 정본**이 되고 git push 자동 production 배포 복원.
4. 배포 후 라이브 실측: 200 응답, 새 타이틀, naver 메타, 5개 서비스 링크.
5. ⚠️ **`SLACK_WEBHOOK_URL` env 등록 필요** — 현재 프로젝트 env 0개라 문의 폼이 500.
   대표에게 전용 채널 웹훅 URL 요청 후 `vercel env add SLACK_WEBHOOK_URL production` + 재배포.
   URL 받기 전까지는 폼이 실패 상태임을 배포 보고에 명시.

## 카피 규칙

- 영어 허용: AX·DX·AICX·AI·SaaS·CRM·EXIT·서비스 고유명. 그 외 본문은 한국어.
- 수치는 위 명시분만 사용. 새 수치·고객명 창작 금지.
- 플루랭크·툰에이전트·GEO·Pluora·Plurank Lead·LiteCX 등 구 브랜드 문구 전면 제거
  (api/inquiry.ts의 INTEREST_LABEL 포함).

## 범위 밖 (후속)

- 새 og-image 제작 (현 파일 유지)
- 영문 페이지 (한국어 단일)
- sajangnote.kr이 Plurank App 타이틀을 서빙하는 문제 (별도 프로젝트)
- 위시켓 프로필 등 타 채널의 문구 동기화
