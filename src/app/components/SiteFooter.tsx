import { FOOTER, SERVICES } from '../content';

export function SiteFooter() {
  return (
    <footer className="border-t border-[color:var(--lt-line)] bg-[color:var(--lt-bg-2)] px-5 py-14 md:px-8">
      <div className="mx-auto flex max-w-[1200px] flex-col gap-10 md:flex-row md:items-start md:justify-between">
        <div className="max-w-sm">
          <div className="font-dc-display text-lg font-extrabold tracking-tight text-[color:var(--lt-ink)]">
            Two<span className="text-[color:var(--lt-purple)]">Steps</span>Ahead
          </div>
          <p className="mt-2 font-dc-label text-[12px] text-[color:var(--lt-mute-2)]">
            AX · DX · Education · Startup Studio — Seoul
          </p>
          <div className="mt-5 flex flex-col gap-1.5">
            <span className="font-dc-body text-[13px] font-semibold text-[color:var(--lt-mute)]">
              {FOOTER.corp}
            </span>
            {FOOTER.lines.map((line) => (
              <span key={line} className="font-dc-body text-[12px] leading-relaxed text-[color:var(--lt-mute-2)]">
                {line}
              </span>
            ))}
          </div>
        </div>
        <div className="flex gap-12">
          <div className="flex flex-col gap-2">
            <span className="font-dc-label text-[11px] uppercase tracking-[0.15em] text-[color:var(--lt-mute-2)]">
              Our services
            </span>
            {SERVICES.map((s) => (
              <a
                key={s.name}
                href={s.url}
                target="_blank"
                rel="noopener noreferrer"
                className="font-dc-body text-[13px] text-[color:var(--lt-mute)] transition-colors hover:text-[color:var(--lt-ink)]"
              >
                {s.name}
              </a>
            ))}
          </div>
          <div className="flex flex-col gap-2">
            <span className="font-dc-label text-[11px] uppercase tracking-[0.15em] text-[color:var(--lt-mute-2)]">
              Contact
            </span>
            <a
              href="mailto:glenn.kim@twostepsahead.co.kr"
              className="font-dc-body text-[13px] text-[color:var(--lt-mute)] transition-colors hover:text-[color:var(--lt-ink)]"
            >
              glenn.kim@twostepsahead.co.kr
            </a>
            <a
              href="/#contact"
              className="font-dc-body text-[13px] text-[color:var(--lt-mute)] transition-colors hover:text-[color:var(--lt-ink)]"
            >
              도입·교육 문의
            </a>
            <a
              href="/careers/"
              className="font-dc-body text-[13px] text-[color:var(--lt-mute)] transition-colors hover:text-[color:var(--lt-ink)]"
            >
              채용과 조직문화
            </a>
            <span className="font-dc-body text-[13px] text-[color:var(--lt-mute-2)]">Seoul · KST</span>
          </div>
        </div>
      </div>
      <div className="mx-auto mt-10 flex max-w-[1200px] flex-col gap-2 border-t border-[color:var(--lt-line)] pt-6 font-dc-label text-[11px] text-[color:var(--lt-mute-2)] sm:flex-row sm:items-center sm:justify-between">
        <span>{FOOTER.copyright}</span>
        <span>AX · DX · Education · Startup Studio</span>
      </div>
    </footer>
  );
}
