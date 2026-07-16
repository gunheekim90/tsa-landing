const SERVICES = [
  { label: 'GEO 모니터링', href: '#geo' },
  { label: '툰에이전트', href: '#toon' },
];

export function SiteFooter() {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-[color:var(--dc-line)] px-5 py-12 md:px-8">
      <div className="mx-auto flex max-w-[1240px] flex-col gap-8 md:flex-row md:items-start md:justify-between">
        <div>
          <div className="font-dc-display text-lg font-extrabold tracking-tight text-[color:var(--dc-ink)]">
            Two<span className="text-[color:var(--dc-purple)]">Steps</span>Ahead
          </div>
          <p className="mt-2 font-dc-label text-[12px] text-[color:var(--dc-mute-2)]">
            predictive marketing AI studio · Seoul
          </p>
        </div>
        <div className="flex gap-12">
          <div className="flex flex-col gap-2">
            <span className="font-dc-label text-[11px] uppercase tracking-[0.15em] text-[color:var(--dc-mute-2)]">
              Services
            </span>
            {SERVICES.map((s) => (
              <a
                key={s.label}
                href={s.href}
                className="font-dc-body text-[13px] text-[color:var(--dc-mute)] transition-colors hover:text-[color:var(--dc-ink)]"
              >
                {s.label}
              </a>
            ))}
          </div>
          <div className="flex flex-col gap-2">
            <span className="font-dc-label text-[11px] uppercase tracking-[0.15em] text-[color:var(--dc-mute-2)]">
              Contact
            </span>
            <a
              href="mailto:glenn.kim@twostepsahead.co.kr"
              className="font-dc-body text-[13px] text-[color:var(--dc-mute)] transition-colors hover:text-[color:var(--dc-ink)]"
            >
              glenn.kim@twostepsahead.co.kr
            </a>
            <span className="font-dc-body text-[13px] text-[color:var(--dc-mute-2)]">Seoul · KST</span>
          </div>
        </div>
      </div>
      <div className="mx-auto mt-10 flex max-w-[1240px] items-center justify-between border-t border-[color:var(--dc-line)] pt-6 font-dc-label text-[11px] text-[color:var(--dc-mute-2)]">
        <span>© {year} TwoStepsAhead</span>
        <span>v3 · renewal preview</span>
      </div>
    </footer>
  );
}
