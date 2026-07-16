import { motion } from 'motion/react';
import { ArrowUpRight } from 'lucide-react';
import { useEffect, useState } from 'react';

const EASE: [number, number, number, number] = [0.16, 1, 0.3, 1];

const NAV = [
  { label: 'GEO 모니터링', href: '#geo' },
  { label: '툰에이전트', href: '#toon' },
  { label: 'Studio', href: '#studio' },
];

export function SiteNav() {
  const [elevated, setElevated] = useState(false);

  useEffect(() => {
    const onScroll = () => setElevated(window.scrollY > 24);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <motion.header
      initial={{ y: -20, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.7, ease: EASE }}
      className="fixed inset-x-0 top-0 z-50"
    >
      <div className="mx-auto max-w-[1240px] px-4 pt-4 md:px-8 md:pt-6">
        <div
          className={`flex items-center justify-between gap-4 rounded-full py-2 pl-5 pr-2 transition-all duration-500 ${
            elevated ? 'dc-glass' : 'border border-transparent'
          }`}
        >
          <a
            href="#top"
            className="font-dc-display text-[15px] font-extrabold tracking-tight text-[color:var(--dc-ink)]"
          >
            Two<span className="text-[color:var(--dc-purple)]">Steps</span>Ahead
          </a>
          <nav className="hidden items-center gap-8 md:flex">
            {NAV.map((n) => (
              <a
                key={n.label}
                href={n.href}
                className="font-dc-label text-[13px] text-[color:var(--dc-mute)] transition-colors hover:text-[color:var(--dc-ink)]"
              >
                {n.label}
              </a>
            ))}
          </nav>
          <a
            href="#contact"
            className="group inline-flex items-center gap-1.5 rounded-full bg-[color:var(--dc-purple)] py-2 pl-4 pr-3 text-[13px] font-semibold text-white shadow-[0_10px_30px_-10px_rgba(123,57,252,0.9)] transition-transform hover:-translate-y-0.5"
          >
            무료 진단
            <ArrowUpRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
          </a>
        </div>
      </div>
    </motion.header>
  );
}
