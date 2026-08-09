import { motion, useReducedMotion } from 'motion/react';
import { ArrowUpRight } from 'lucide-react';
import { useEffect, useState } from 'react';
import { NAV_LINKS } from '../content';

const EASE: [number, number, number, number] = [0.16, 1, 0.3, 1];

export function SiteNav() {
  const [elevated, setElevated] = useState(false);
  const reduce = useReducedMotion();

  useEffect(() => {
    const onScroll = () => setElevated(window.scrollY > 24);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <motion.header
      initial={reduce ? false : { y: -20, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: reduce ? 0 : 0.7, ease: EASE }}
      className="fixed inset-x-0 top-0 z-50"
    >
      <div className="mx-auto max-w-[1200px] px-4 pt-4 md:px-8 md:pt-5">
        <div
          className={`flex items-center justify-between gap-4 rounded-full py-2 pl-5 pr-2 transition-all duration-500 ${
            elevated
              ? 'border border-[color:var(--lt-line)] bg-[rgba(250,250,248,0.85)] shadow-[0_8px_30px_-18px_rgba(17,16,21,0.25)] backdrop-blur-md'
              : 'border border-transparent'
          }`}
        >
          <a
            href="#top"
            className="font-dc-display text-[15px] font-extrabold tracking-tight text-[color:var(--lt-ink)]"
          >
            Two<span className="text-[color:var(--lt-purple)]">Steps</span>Ahead
          </a>
          <nav className="hidden items-center gap-7 md:flex" aria-label="주요 메뉴">
            {NAV_LINKS.map((n) => (
              <a
                key={n.label}
                href={n.href}
                className="font-dc-label text-[13px] text-[color:var(--lt-mute)] transition-colors hover:text-[color:var(--lt-ink)]"
              >
                {n.label}
              </a>
            ))}
          </nav>
          <a
            href="#contact"
            className="group inline-flex items-center gap-1.5 rounded-full bg-[color:var(--lt-ink)] py-2 pl-4 pr-3 text-[13px] font-semibold text-white transition-transform hover:-translate-y-0.5"
          >
            문의하기
            <ArrowUpRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
          </a>
        </div>
      </div>
    </motion.header>
  );
}
