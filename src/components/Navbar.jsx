export default function Navbar() {
  return (
    <nav id="navbar" className="fixed top-0 left-0 right-0 z-50 border-b border-border-primary/50 bg-bg-primary/80 backdrop-blur-xl">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          {/* Logo */}
          <a href="#" id="nav-logo" className="flex items-center gap-2 group">
            <div className="relative flex h-9 w-9 items-center justify-center rounded-lg bg-gradient-to-br from-accent-primary to-accent-secondary shadow-lg shadow-accent-glow transition-shadow group-hover:shadow-accent-primary/40">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M13 2L3 14h9l-1 8 10-12h-9l1-8z"/>
              </svg>
            </div>
            <span className="text-xl font-bold tracking-tight text-text-primary">
              Samy<span className="text-accent-primary">Joe</span>
            </span>
          </a>

          {/* Desktop Links */}
          <div className="hidden items-center gap-8 md:flex">
            <a href="#features" className="text-sm font-medium text-text-secondary transition-colors hover:text-text-primary">Features</a>
            <a href="#how-it-works" className="text-sm font-medium text-text-secondary transition-colors hover:text-text-primary">How It Works</a>
            <a href="#pricing" className="text-sm font-medium text-text-secondary transition-colors hover:text-text-primary">Pricing</a>
            <a href="#testimonials" className="text-sm font-medium text-text-secondary transition-colors hover:text-text-primary">Reviews</a>
          </div>

          {/* CTA */}
          <div className="flex items-center gap-3">
            <a href="#pricing" id="nav-login" className="hidden text-sm font-medium text-text-secondary transition-colors hover:text-text-primary sm:inline-block">
              Log In
            </a>
            <a
              href="#pricing"
              id="nav-cta"
              className="inline-flex items-center gap-2 rounded-lg bg-gradient-to-r from-accent-primary to-accent-secondary px-5 py-2.5 text-sm font-semibold text-white shadow-lg shadow-accent-glow transition-all duration-300 hover:shadow-xl hover:shadow-accent-primary/40 hover:brightness-110 active:scale-[0.98]"
            >
              Start Free Trial
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                <path d="M5 12h14M12 5l7 7-7 7"/>
              </svg>
            </a>
          </div>
        </div>
      </div>
    </nav>
  );
}
