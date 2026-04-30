import { motion, AnimatePresence } from 'motion/react';
import { useEffect, useState } from 'react';
import { trackEvent } from '@/lib/gtag';

interface NavigationProps {
  scrollY: number;
}

const navItems = [
  { name: 'Research',    href: '#research',    code: '01' },
  { name: 'Models',      href: '#models',      code: '02' },
  { name: 'Deployments', href: '#deployments', code: '03' },
  { name: 'Researchers', href: '#researchers', code: '04' },
  { name: 'Notes',       href: '#notes',       code: '05' },
  { name: 'Inquiry',     href: '#contact',     code: '06' },
];

function useClock() {
  const [t, setT] = useState(() => new Date());
  useEffect(() => {
    const id = setInterval(() => setT(new Date()), 1000);
    return () => clearInterval(id);
  }, []);
  return t;
}

function formatUTC(d: Date) {
  const hh = String(d.getUTCHours()).padStart(2, '0');
  const mm = String(d.getUTCMinutes()).padStart(2, '0');
  const ss = String(d.getUTCSeconds()).padStart(2, '0');
  return `${hh}:${mm}:${ss}Z`;
}

export function Navigation({ scrollY }: NavigationProps) {
  const [isOpen, setIsOpen] = useState(false);
  const elevated = scrollY > 24;
  const clock = useClock();

  return (
    <>
      <motion.nav
        initial={{ y: -40, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
        aria-label="메인 내비게이션"
        className={`fixed top-0 left-0 right-0 z-50 transition-[background,border] duration-500 ${
          elevated
            ? 'bg-[color:var(--ink-base)]/80 backdrop-blur-xl border-b border-[color:var(--ink-line)]'
            : 'border-b border-transparent'
        }`}
      >
        <div className="max-w-[1400px] mx-auto px-6 md:px-10 py-4 md:py-5 flex items-center justify-between gap-6">
          {/* Wordmark + meta */}
          <a
            href="#"
            className="group flex items-center gap-4"
            onClick={() => trackEvent('nav_click', { nav_item: 'home' })}
          >
            <span className="font-display text-[1.05rem] leading-none tracking-tight text-[color:var(--paper)] transition-colors group-hover:text-[color:var(--signal)]">
              TwoStepsAhead
            </span>
            <span className="hidden lg:flex items-center gap-2 mono-meta">
              <span className="signal-dot" aria-hidden />
              <span>rev.layer · v0.7</span>
            </span>
          </a>

          {/* Desktop nav */}
          <div className="hidden md:flex items-center gap-8 lg:gap-10">
            {navItems.map((item, index) => (
              <motion.a
                key={item.name}
                href={item.href}
                className="group flex items-baseline gap-1.5 text-[0.78rem] tracking-wide text-[color:var(--mute-1)] hover:text-[color:var(--paper)] transition-colors"
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 + index * 0.05, duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
                onClick={() => trackEvent('nav_click', { nav_item: item.name })}
              >
                <span className="font-mono text-[0.62rem] text-[color:var(--mute-2)] group-hover:text-[color:var(--signal)] transition-colors">
                  {item.code}
                </span>
                <span className="relative">
                  {item.name}
                  <span className="absolute -bottom-1 left-0 w-0 h-px bg-[color:var(--signal)] group-hover:w-full transition-all duration-500 ease-[cubic-bezier(0.16,1,0.3,1)]" />
                </span>
              </motion.a>
            ))}
          </div>

          {/* Status cluster */}
          <div className="hidden md:flex items-center gap-3 mono-meta">
            <span className="hidden lg:inline">SEL · 37.55N 126.97E</span>
            <span className="hidden lg:inline text-[color:var(--mute-3)]">/</span>
            <span tabular-nums="true" className="tabular-nums">{formatUTC(clock)}</span>
          </div>

          {/* Mobile menu trigger */}
          <button
            className="md:hidden relative w-9 h-9 flex items-center justify-center"
            onClick={() => setIsOpen(!isOpen)}
            aria-label={isOpen ? '메뉴 닫기' : '메뉴 열기'}
            aria-expanded={isOpen}
          >
            <span className="absolute inset-0 border border-[color:var(--ink-line)] rounded-full" />
            <div className="w-4 h-3 flex flex-col justify-between">
              <motion.span
                className="w-full h-px bg-[color:var(--paper)] origin-center"
                animate={{ rotate: isOpen ? 45 : 0, y: isOpen ? 5 : 0 }}
                transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
              />
              <motion.span
                className="w-full h-px bg-[color:var(--paper)]"
                animate={{ opacity: isOpen ? 0 : 1 }}
                transition={{ duration: 0.2 }}
              />
              <motion.span
                className="w-full h-px bg-[color:var(--paper)] origin-center"
                animate={{ rotate: isOpen ? -45 : 0, y: isOpen ? -5 : 0 }}
                transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
              />
            </div>
          </button>
        </div>
      </motion.nav>

      {/* Full-screen mobile menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.4 }}
            className="md:hidden fixed inset-0 z-40 bg-[color:var(--ink-base)]"
          >
            <div className="absolute inset-0 bg-grid opacity-40 pointer-events-none" />
            <div className="relative h-full flex flex-col px-6 pt-24 pb-10">
              <div className="mono-eyebrow mb-10">— navigation</div>
              <div className="flex flex-col gap-2">
                {navItems.map((item, i) => (
                  <motion.a
                    key={item.name}
                    href={item.href}
                    initial={{ opacity: 0, x: -16 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.1 + i * 0.06, duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
                    onClick={() => {
                      trackEvent('nav_click', { nav_item: item.name, mobile: 'true' });
                      setIsOpen(false);
                    }}
                    className="flex items-baseline gap-4 py-4 border-b border-[color:var(--ink-line)]"
                  >
                    <span className="font-mono text-xs text-[color:var(--mute-2)]">{item.code}</span>
                    <span className="font-display text-3xl text-[color:var(--paper)]">{item.name}</span>
                  </motion.a>
                ))}
              </div>
              <div className="mt-auto pt-10 mono-meta flex justify-between">
                <span>rev.layer · v0.7</span>
                <span className="tabular-nums">{formatUTC(clock)}</span>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
