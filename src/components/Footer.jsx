export default function Footer() {
  const links = {
    Product: ['Features', 'Pricing', 'Integrations', 'Changelog', 'Roadmap'],
    Company: ['About', 'Blog', 'Careers', 'Press', 'Contact'],
    Resources: ['Documentation', 'Help Center', 'Community', 'API Reference', 'Status'],
    Legal: ['Privacy Policy', 'Terms of Service', 'Cookie Policy', 'GDPR'],
  };

  return (
    <footer id="footer" className="relative border-t border-border-primary bg-bg-secondary/50">
      <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 gap-8 sm:grid-cols-3 lg:grid-cols-5">
          {/* Brand */}
          <div className="col-span-2 sm:col-span-3 lg:col-span-1">
            <a href="#" className="flex items-center gap-2">
              <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-gradient-to-br from-accent-primary to-accent-secondary">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2"><path d="M13 2L3 14h9l-1 8 10-12h-9l1-8z"/></svg>
              </div>
              <span className="text-lg font-bold text-text-primary">Samy<span className="text-accent-primary">Joe</span></span>
            </a>
            <p className="mt-3 max-w-xs text-sm leading-relaxed text-text-muted">
              AI-powered scheduling that gives you back the time you deserve.
            </p>
            <div className="mt-5 flex gap-3">
              {['X', 'Li', 'GH'].map((label) => (
                <a key={label} href="#" className="flex h-9 w-9 items-center justify-center rounded-lg border border-border-primary text-xs font-bold text-text-muted transition-colors hover:border-border-hover hover:text-text-primary hover:bg-bg-tertiary">
                  {label}
                </a>
              ))}
            </div>
          </div>

          {/* Link columns */}
          {Object.entries(links).map(([title, items]) => (
            <div key={title}>
              <h4 className="mb-4 text-sm font-semibold text-text-primary">{title}</h4>
              <ul className="space-y-2.5">
                {items.map((item) => (
                  <li key={item}>
                    <a href="#" className="text-sm text-text-muted transition-colors hover:text-text-primary">{item}</a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="mt-12 flex flex-col items-center justify-between gap-4 border-t border-border-primary pt-8 sm:flex-row">
          <p className="text-xs text-text-muted">© 2026 SchedlyAI. All rights reserved.</p>
          <p className="text-xs text-text-muted">Made with ✦ for busy professionals everywhere.</p>
        </div>
      </div>
    </footer>
  );
}
