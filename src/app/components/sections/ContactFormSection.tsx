import { useState } from 'react';
import { Check } from 'lucide-react';
import { Reveal } from '../anim/Reveal';
import { Eyebrow } from '../Eyebrow';
import { INTERESTS } from '../../content';
import { trackEvent } from '@/lib/gtag';

type Status = 'idle' | 'submitting' | 'success' | 'error';

interface FormState {
  name: string;
  company: string;
  email: string;
  interest: string;
  message: string;
  _hp: string; // honeypot
}

const initial: FormState = {
  name: '',
  company: '',
  email: '',
  interest: 'ax',
  message: '',
  _hp: '',
};

/** 인풋 — 박스 대신 하단 헤어라인만, focus 시 퍼플 라인 전이. */
const inputClass =
  'w-full bg-transparent border-0 border-b border-[color:var(--dc-line)] px-0 py-3 font-dc-body text-[15px] text-[color:var(--dc-ink)] placeholder:text-[color:var(--dc-mute-2)] focus:outline-none focus:border-[color:var(--dc-purple)] transition-colors rounded-none';

function FieldLabel({ children, required }: { children: string; required?: boolean }) {
  return (
    <span className="font-dc-mono text-[10.5px] uppercase tracking-[0.16em] text-[color:var(--dc-mute-2)]">
      {children}
      {required && <span className="text-[color:var(--dc-purple-text)]"> *</span>}
    </span>
  );
}

/**
 * 문의 — 히어로와 북엔드(가장 어두운 배경 복귀 + 미러 헤드라인 "다음 두 걸음은, 함께.").
 * 폼 계약은 api/inquiry.ts 그대로: {name, company, email, interest, message, _hp}
 */
export function ContactFormSection() {
  const [form, setForm] = useState<FormState>(initial);
  const [status, setStatus] = useState<Status>('idle');
  const [errorMsg, setErrorMsg] = useState('');

  const update =
    <K extends keyof FormState>(k: K) =>
    (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) =>
      setForm((s) => ({ ...s, [k]: e.target.value }));

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (status === 'submitting') return;

    if (!form.name.trim() || !form.company.trim() || !form.email.trim() || !form.message.trim()) {
      setStatus('error');
      setErrorMsg('모든 필수 항목을 입력해 주세요.');
      return;
    }
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) {
      setStatus('error');
      setErrorMsg('올바른 이메일 형식이 아닙니다.');
      return;
    }
    if (form.message.trim().length < 10) {
      setStatus('error');
      setErrorMsg('내용을 10자 이상 입력해 주세요.');
      return;
    }

    setStatus('submitting');
    setErrorMsg('');
    trackEvent('inquiry_submit', { interest: form.interest });

    try {
      const res = await fetch('/api/inquiry', {
        method: 'POST',
        headers: { 'content-type': 'application/json' },
        body: JSON.stringify(form),
      });
      if (!res.ok) {
        const body = await res.json().catch(() => ({}));
        throw new Error(body.error || `status_${res.status}`);
      }
      setStatus('success');
    } catch (err) {
      setStatus('error');
      setErrorMsg(
        err instanceof Error
          ? `전송에 실패했습니다 (${err.message}). glenn.kim@twostepsahead.co.kr로 직접 보내주셔도 됩니다.`
          : '전송에 실패했습니다.',
      );
    }
  };

  return (
    <section
      id="contact"
      className="relative scroll-mt-24 overflow-hidden border-t border-[color:var(--dc-line)] bg-[color:var(--dc-bg)] px-5 py-24 md:px-8 md:py-32"
    >
      <div
        className="pointer-events-none absolute inset-0"
        aria-hidden="true"
        style={{
          background:
            'radial-gradient(ellipse 55% 45% at 50% 115%, rgba(123,57,252,0.12), transparent 65%)',
        }}
      />
      <div className="relative mx-auto max-w-[1240px]">
        <Reveal>
          <Eyebrow index="04" label="Contact" />
        </Reveal>
        <Reveal delay={0.06}>
          <h2 className="mt-6 font-dc-display text-[clamp(2.4rem,6vw,4.6rem)] font-medium leading-[1.08] tracking-[-0.03em] text-[color:var(--dc-ink)]">
            다음 두 걸음은,
            <br />
            함께<span className="text-[color:var(--dc-purple)]">.</span>
          </h2>
        </Reveal>

        <div className="mt-14 grid grid-cols-1 gap-14 lg:grid-cols-12">
          {/* 좌: 메타 + 실행형 오퍼 */}
          <Reveal delay={0.1} className="lg:col-span-5">
            <div className="flex flex-col gap-8">
              <p className="max-w-sm font-dc-body text-[15px] leading-[1.8] text-[color:var(--dc-mute)]">
                첫 미팅에서 데모가 아니라, 귀사 업무의 AI 적용 지점을 짚어드립니다.
                어디서부터 시작할지 모르셔도 됩니다 — 지금 하고 있는 일을 그대로 들려주세요.
              </p>
              <dl className="flex flex-col gap-4 font-dc-mono text-[12px] tracking-[0.04em]">
                <div className="flex flex-col gap-1">
                  <dt className="uppercase tracking-[0.16em] text-[color:var(--dc-mute-2)]">Email</dt>
                  <dd>
                    <a
                      href="mailto:glenn.kim@twostepsahead.co.kr"
                      className="text-[color:var(--dc-ink)] transition-colors hover:text-[color:var(--dc-purple-text)]"
                    >
                      glenn.kim@twostepsahead.co.kr
                    </a>
                  </dd>
                </div>
                <div className="flex flex-col gap-1">
                  <dt className="uppercase tracking-[0.16em] text-[color:var(--dc-mute-2)]">Response</dt>
                  <dd className="text-[color:var(--dc-mute)]">평일 24시간 내 회신</dd>
                </div>
                <div className="flex flex-col gap-1">
                  <dt className="uppercase tracking-[0.16em] text-[color:var(--dc-mute-2)]">Office</dt>
                  <dd className="text-[color:var(--dc-mute)]">서울 강남구 압구정로 306</dd>
                </div>
              </dl>
            </div>
          </Reveal>

          {/* 우: 인라인 폼 */}
          <Reveal delay={0.16} className="lg:col-span-7">
            {status === 'success' ? (
              <div className="flex flex-col items-start gap-5 border border-[color:var(--dc-line)] p-10">
                <div className="flex h-12 w-12 items-center justify-center rounded-full border border-[color:var(--dc-purple-line)] bg-[color:var(--dc-purple-soft)]">
                  <Check className="h-6 w-6 text-[color:var(--dc-purple)]" />
                </div>
                <h3 className="font-dc-display text-2xl font-semibold text-[color:var(--dc-ink)]">
                  보내드렸습니다.
                </h3>
                <p className="font-dc-body text-[14px] leading-relaxed text-[color:var(--dc-mute)]">
                  평일 24시간 내 <span className="text-[color:var(--dc-ink)]">{form.email}</span>로
                  회신드립니다.
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="flex flex-col gap-7" noValidate>
                {/* Honeypot */}
                <input
                  type="text"
                  name="_hp"
                  value={form._hp}
                  onChange={update('_hp')}
                  autoComplete="off"
                  tabIndex={-1}
                  aria-hidden="true"
                  style={{ position: 'absolute', left: '-9999px', width: 1, height: 1, opacity: 0 }}
                />
                <div className="grid gap-7 sm:grid-cols-2">
                  <label className="flex flex-col gap-1.5">
                    <FieldLabel required>Name</FieldLabel>
                    <input
                      type="text"
                      required
                      value={form.name}
                      onChange={update('name')}
                      autoComplete="name"
                      className={inputClass}
                      placeholder="이름"
                    />
                  </label>
                  <label className="flex flex-col gap-1.5">
                    <FieldLabel required>Company</FieldLabel>
                    <input
                      type="text"
                      required
                      value={form.company}
                      onChange={update('company')}
                      autoComplete="organization"
                      className={inputClass}
                      placeholder="회사명"
                    />
                  </label>
                </div>
                <div className="grid gap-7 sm:grid-cols-2">
                  <label className="flex flex-col gap-1.5">
                    <FieldLabel required>Email</FieldLabel>
                    <input
                      type="email"
                      required
                      value={form.email}
                      onChange={update('email')}
                      autoComplete="email"
                      className={inputClass}
                      placeholder="work@company.co.kr"
                    />
                  </label>
                  <label className="flex flex-col gap-1.5">
                    <FieldLabel>Interest</FieldLabel>
                    <select value={form.interest} onChange={update('interest')} className={inputClass}>
                      {INTERESTS.map((o) => (
                        <option key={o.value} value={o.value} className="bg-[color:var(--dc-bg-2)]">
                          {o.label}
                        </option>
                      ))}
                    </select>
                  </label>
                </div>
                <label className="flex flex-col gap-1.5">
                  <FieldLabel required>Message</FieldLabel>
                  <textarea
                    required
                    rows={4}
                    value={form.message}
                    onChange={update('message')}
                    className={`${inputClass} resize-none`}
                    placeholder="지금 하고 있는 업무, 반복되는 일, 바꾸고 싶은 것 — 편하게 적어주세요."
                  />
                </label>

                {status === 'error' && (
                  <p role="alert" className="font-dc-body text-[13px] text-[color:var(--dc-orange)]">
                    {errorMsg}
                  </p>
                )}

                <button
                  type="submit"
                  disabled={status === 'submitting'}
                  className="mt-2 inline-flex items-center justify-center gap-2 self-start rounded-full bg-[color:var(--dc-purple)] px-8 py-4 font-dc-label text-[14px] font-semibold text-white shadow-[0_18px_50px_-16px_rgba(123,57,252,0.95)] transition-transform hover:-translate-y-0.5 disabled:opacity-60"
                >
                  {status === 'submitting' ? '보내는 중…' : '문의 보내기'}
                </button>
              </form>
            )}
          </Reveal>
        </div>
      </div>
    </section>
  );
}
