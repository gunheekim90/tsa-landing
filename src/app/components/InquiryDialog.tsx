import { useState, type ReactNode } from 'react';
import { ArrowRight, Check, AlertCircle, Loader2 } from 'lucide-react';
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogTitle,
  DialogTrigger,
} from './ui/dialog';
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
  interest: 'pluora',
  message: '',
  _hp: '',
};

const interests = [
  { value: 'pluora',  label: 'Pluora · 노출·인용·추천 예측' },
  { value: 'lead',    label: 'Plurank Lead · 방문 기업 식별' },
  { value: 'litecx',  label: 'LiteCX · AI 콜센터' },
  { value: 'full',    label: 'Full funnel · 풀 펀넬 도입' },
  { value: 'other',   label: 'Other · 기타 협업' },
];

export function InquiryDialog({ children }: { children: ReactNode }) {
  const [form, setForm] = useState<FormState>(initial);
  const [status, setStatus] = useState<Status>('idle');
  const [errorMsg, setErrorMsg] = useState<string>('');

  const reset = () => {
    setForm(initial);
    setStatus('idle');
    setErrorMsg('');
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (status === 'submitting') return;

    // basic client-side validation
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
      setErrorMsg('메시지를 10자 이상 입력해 주세요.');
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
          ? `전송에 실패했습니다 (${err.message}). 잠시 후 다시 시도해 주세요.`
          : '전송에 실패했습니다.'
      );
    }
  };

  const update =
    <K extends keyof FormState>(k: K) =>
    (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) =>
      setForm((s) => ({ ...s, [k]: e.target.value }));

  return (
    <Dialog
      onOpenChange={(open) => {
        if (open) trackEvent('inquiry_open', {});
        if (!open) {
          // small delay so user sees success state before reset on next open
          setTimeout(reset, 300);
        }
      }}
    >
      <DialogTrigger asChild>{children}</DialogTrigger>
      <DialogContent className="bg-[color:var(--ink-base)] border-[color:var(--ink-line)] text-[color:var(--paper)] max-w-2xl sm:max-w-2xl p-0 gap-0 max-h-[90vh] overflow-y-auto rounded-2xl">
        <div className="p-8 md:p-10">
          {/* Header */}
          <div className="flex items-center gap-3 mb-5">
            <span className="signal-dot" aria-hidden />
            <span className="mono-eyebrow text-[color:var(--paper)]">
              inquiry · direct to slack
            </span>
          </div>
          <DialogTitle className="display-md text-[color:var(--paper)] mb-3">
            Open
            <em className="font-display italic font-light text-[color:var(--signal)]"> inquiry</em>
            <span className="text-[color:var(--mute-2)] font-display">.</span>
          </DialogTitle>
          <p className="mono-meta text-[color:var(--mute-1)]">
            필요한 내용을 보내주시면 영업 채널 Slack으로 즉시 전달됩니다.
            평일 24시간 내 회신드립니다.
          </p>

          {status === 'success' ? (
            <div className="mt-8 pt-6 border-t border-[color:var(--ink-line)] flex flex-col items-center text-center gap-4 py-10">
              <div className="w-14 h-14 rounded-full bg-[color:var(--signal-soft)] border border-[color:var(--signal-line)] flex items-center justify-center">
                <Check className="w-7 h-7 text-[color:var(--signal)]" />
              </div>
              <h3 className="font-display text-2xl text-[color:var(--paper)]">
                보내드렸습니다.
              </h3>
              <p className="text-sm text-[color:var(--mute-1)] max-w-sm">
                Slack으로 전달되었습니다. 평일 24시간 내{' '}
                <span className="text-[color:var(--paper)]">{form.email}</span>로 회신드립니다.
              </p>
              <DialogClose asChild>
                <button
                  type="button"
                  className="mt-4 inline-flex items-center gap-2 border border-[color:var(--ink-line)] hover:border-[color:var(--signal-line)] hover:text-[color:var(--signal)] text-[color:var(--paper)] px-6 py-2.5 rounded-full text-sm transition-colors"
                >
                  닫기
                </button>
              </DialogClose>
            </div>
          ) : (
            <form
              onSubmit={handleSubmit}
              className="mt-8 pt-6 border-t border-[color:var(--ink-line)] flex flex-col gap-5"
            >
              {/* Honeypot — invisible field for bots */}
              <input
                type="text"
                name="_hp"
                value={form._hp}
                onChange={update('_hp')}
                autoComplete="off"
                tabIndex={-1}
                aria-hidden="true"
                style={{
                  position: 'absolute',
                  left: '-9999px',
                  width: '1px',
                  height: '1px',
                  opacity: 0,
                }}
              />

              <div className="grid sm:grid-cols-2 gap-5">
                <Field label="이름" required>
                  <input
                    type="text"
                    required
                    value={form.name}
                    onChange={update('name')}
                    autoComplete="name"
                    className={inputClass}
                    placeholder="홍길동"
                  />
                </Field>
                <Field label="회사" required>
                  <input
                    type="text"
                    required
                    value={form.company}
                    onChange={update('company')}
                    autoComplete="organization"
                    className={inputClass}
                    placeholder="TwoStepsAhead"
                  />
                </Field>
              </div>

              <Field label="이메일" required>
                <input
                  type="email"
                  required
                  value={form.email}
                  onChange={update('email')}
                  autoComplete="email"
                  className={inputClass}
                  placeholder="name@company.com"
                />
              </Field>

              <Field label="관심 영역">
                <select
                  value={form.interest}
                  onChange={update('interest')}
                  className={`${inputClass} appearance-none`}
                >
                  {interests.map((o) => (
                    <option key={o.value} value={o.value} className="bg-[color:var(--ink-elev)]">
                      {o.label}
                    </option>
                  ))}
                </select>
              </Field>

              <Field label="메시지" required>
                <textarea
                  required
                  rows={5}
                  minLength={10}
                  value={form.message}
                  onChange={update('message')}
                  className={`${inputClass} resize-y min-h-[120px]`}
                  placeholder="현재 상황과 원하시는 결과를 짧게 알려주세요. (예: 12개국 GEO 진단 받고 싶습니다)"
                />
              </Field>

              {status === 'error' && errorMsg && (
                <div className="flex items-start gap-3 px-4 py-3 border border-[color:rgba(255,90,90,0.3)] bg-[color:rgba(255,90,90,0.06)] rounded-lg text-sm text-[color:#ff9b9b]">
                  <AlertCircle className="w-4 h-4 mt-0.5 shrink-0" />
                  <span>{errorMsg}</span>
                </div>
              )}

              <div className="flex flex-col sm:flex-row gap-3 pt-2">
                <button
                  type="submit"
                  disabled={status === 'submitting'}
                  className="inline-flex items-center justify-center gap-2 bg-[color:var(--signal)] text-[color:var(--ink-base)] px-6 py-3 rounded-full text-sm font-medium hover:bg-[color:var(--paper)] transition-colors disabled:opacity-60 disabled:cursor-not-allowed group/cta"
                >
                  {status === 'submitting' ? (
                    <>
                      <Loader2 className="w-4 h-4 animate-spin" />
                      <span>전송 중…</span>
                    </>
                  ) : (
                    <>
                      <span>Slack으로 전송</span>
                      <ArrowRight className="w-4 h-4 group-hover/cta:translate-x-1 transition-transform" />
                    </>
                  )}
                </button>
                <DialogClose asChild>
                  <button
                    type="button"
                    className="inline-flex items-center justify-center gap-2 border border-[color:var(--ink-line)] hover:border-[color:var(--signal-line)] hover:text-[color:var(--signal)] text-[color:var(--paper)] px-6 py-3 rounded-full text-sm transition-colors"
                  >
                    취소
                  </button>
                </DialogClose>
              </div>

              <p className="mono-meta text-[color:var(--mute-2)] mt-1">
                또는 직접 이메일 →{' '}
                <a
                  href="mailto:glenn.kim@twostepsahead.co.kr"
                  className="link-signal text-[color:var(--paper)]"
                >
                  glenn.kim@twostepsahead.co.kr
                </a>
              </p>
            </form>
          )}
        </div>
      </DialogContent>
    </Dialog>
  );
}

const inputClass =
  'w-full bg-[color:var(--ink-elev)] border border-[color:var(--ink-line)] rounded-lg px-4 py-3 text-sm text-[color:var(--paper)] placeholder:text-[color:var(--mute-2)] focus:outline-none focus:border-[color:var(--signal-line)] focus:ring-2 focus:ring-[color:var(--signal-soft)] transition-all';

function Field({
  label,
  required,
  children,
}: {
  label: string;
  required?: boolean;
  children: ReactNode;
}) {
  return (
    <label className="flex flex-col gap-1.5">
      <span className="mono-meta text-[color:var(--mute-1)]">
        {label}
        {required && <span className="text-[color:var(--signal)] ml-1">*</span>}
      </span>
      {children}
    </label>
  );
}
