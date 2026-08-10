# tsa-landing

투스텝스어헤드 회사 랜딩 사이트 — https://twostepsahead.co.kr

## 스택

React 18 · Vite 6 · Tailwind 4 · motion/react · **pnpm**

## 개발

```bash
pnpm install --frozen-lockfile
pnpm dev            # 개발 서버
pnpm build          # 프로덕션 빌드 → dist/
npx vite preview    # 빌드 결과 미리보기
```

## 배포

`main` 브랜치에 push하면 **Vercel이 자동으로 프로덕션 배포**합니다.
수동 배포가 필요하면 `vercel deploy --prod`.

- Vercel 프로젝트: `tsa-landing` (스코프 `gunheekim90s-projects`)
- 도메인: `twostepsahead.co.kr` + `www` (DNS는 AWS Route53)

## 구조

```
src/app/
  content.ts              # 랜딩 전체 카피 단일 소스 — 문구 수정은 여기서만
  App.tsx                 # 섹션 조립
  components/
    SiteNav · LightHero · StatsBand · SiteFooter · Eyebrow
    sections/             # Journey · Work · Solutions · Education
                          # StudioServices · Statement · ContactForm
    anim/                 # Reveal · WordsPullUp (reduced-motion 대응)
src/styles/theme.css      # lt-* 라이트 테마 토큰 (WCAG 대비 실측 주석 포함)
api/inquiry.ts            # 문의 폼 → Slack 웹훅 (edge runtime)
docs/superpowers/specs/   # 설계 문서
```

### 카피 수정

`src/app/content.ts`만 고치면 됩니다. 컴포넌트에 하드코딩된 문구는 두지 않습니다.

### 환경변수

| 키 | 용도 |
|---|---|
| `SLACK_WEBHOOK_URL` | 문의 폼 알림 전송 (Production·Preview 등록됨) |

미설정 시 `/api/inquiry`가 500 `webhook_not_configured`를 반환합니다.

## 원칙

- 수치·클라이언트명은 **공개 검증된 것만** 사용 (위시켓·크몽 프로필, 공개 제안서 기준)
- 접근성: 라이트 테마 WCAG AA 유지, `prefers-reduced-motion` 전면 존중
- `index.html`의 `naver-site-verification` 메타는 **삭제 금지** (네이버 서치어드바이저 소유 인증)
