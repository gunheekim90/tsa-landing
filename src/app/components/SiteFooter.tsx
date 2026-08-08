import { FOOTER, SERVICES } from '../content';

export function SiteFooter() {
  return (
    <footer className="border-t border-[color:var(--dc-line)] px-5 py-14 md:px-8">
      <div className="mx-auto flex max-w-[1240px] flex-col gap-10 md:flex-row md:items-start md:justify-between">
        <div className="max-w-sm">
          <div className="font-dc-display text-lg font-extrabold tracking-tight text-[color:var(--dc-ink)]">
            Two<span className="text-[color:var(--dc-purple)]">Steps</span>Ahead
          </div>
          <p className="mt-2 font-dc-label text-[12px] text-[color:var(--dc-mute-2)]">
            AI transformation studio · Seoul
          </p>
          <div className="mt-5 flex flex-col gap-1.5">
            <span className="font-dc-body text-[13px] font-semibold text-[color:var(--dc-mute)]">
              {FOOTER.corp}
            </span>
            {FOOTER.lines.map((line) => (
              <span key={line} className="font-dc-body text-[12px] leading-relaxed text-[color:var(--dc-mute-2)]">
                {line}
              </span>
            ))}
          </div>
        </div>
        <div className="flex gap-12">
          <div className="flex flex-col gap-2">
            <span className="font-dc-label text-[11px] uppercase tracking-[0.15em] text-[color:var(--dc-mute-2)]">
              Our services
            </span>
            {SERVICES.map((s) => (
              <a
                key={s.name}
                href={s.url}
                target="_blank"
                rel="noopener noreferrer"
                className="font-dc-body text-[13px] text-[color:var(--dc-mute)] transition-colors hover:text-[color:var(--dc-ink)]"
              >
                {s.name}
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
            <a
              href="#contact"
              className="font-dc-body text-[13px] text-[color:var(--dc-mute)] transition-colors hover:text-[color:var(--dc-ink)]"
            >
              도입 문의
            </a>
            <span className="font-dc-body text-[13px] text-[color:var(--dc-mute-2)]">Seoul · KST</span>
          </div>
        </div>
      </div>
      <div className="mx-auto mt-10 flex max-w-[1240px] flex-col gap-2 border-t border-[color:var(--dc-line)] pt-6 font-dc-label text-[11px] text-[color:var(--dc-mute-2)] sm:flex-row sm:items-center sm:justify-between">
        <span>{FOOTER.copyright}</span>
        <span>AX · DX · Startup Studio</span>
      </div>
    </footer>
  );
}
