import { useEffect, useRef } from 'react';

export default function Hero() {
  const heroRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('animate-fade-up');
          }
        });
      },
      { threshold: 0.1 }
    );

    const elements = heroRef.current?.querySelectorAll('[data-animate]');
    elements?.forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, []);

  return (
    <section id="hero" ref={heroRef} className="relative min-h-screen overflow-hidden pt-16">
      {/* Background effects */}
      <div className="pointer-events-none absolute inset-0">
        {/* Gradient orbs */}
        <div className="absolute -left-32 top-1/4 h-[500px] w-[500px] rounded-full bg-accent-primary/8 blur-[120px]" />
        <div className="absolute -right-32 top-1/3 h-[400px] w-[400px] rounded-full bg-accent-secondary/8 blur-[100px]" />
        <div className="absolute left-1/2 top-0 h-[300px] w-[600px] -translate-x-1/2 rounded-full bg-accent-primary/5 blur-[80px]" />

        {/* Grid pattern */}
        <div
          className="absolute inset-0 opacity-[0.03]"
          style={{
            backgroundImage: `linear-gradient(rgba(99,102,241,0.3) 1px, transparent 1px), linear-gradient(90deg, rgba(99,102,241,0.3) 1px, transparent 1px)`,
            backgroundSize: '64px 64px',
          }}
        />
      </div>

      <div className="relative mx-auto flex max-w-7xl flex-col items-center px-4 pb-20 pt-20 sm:px-6 sm:pt-32 lg:px-8 lg:pt-40">
        {/* Badge */}
        <div
          data-animate
          className="mb-8 inline-flex items-center gap-2 rounded-full border border-accent-primary/20 bg-accent-primary/5 px-4 py-1.5 opacity-0"
          style={{ animationDelay: '0.1s' }}
        >
          <span className="relative flex h-2 w-2">
            <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-success opacity-75" />
            <span className="relative inline-flex h-2 w-2 rounded-full bg-success" />
          </span>
          <span className="text-xs font-medium text-text-accent sm:text-sm">Now in Open Beta — 5,000+ professionals joined</span>
        </div>

        {/* Headline */}
        <h1
          data-animate
          className="max-w-4xl text-center text-4xl font-extrabold leading-[1.1] tracking-tight text-text-primary opacity-0 sm:text-5xl md:text-6xl lg:text-7xl"
          style={{ animationDelay: '0.25s' }}
        >
          Your Calendar on{' '}
          <span className="bg-gradient-to-r from-accent-primary via-accent-secondary to-accent-primary bg-clip-text text-transparent">
            Autopilot
          </span>
        </h1>

        {/* Subheadline */}
        <p
          data-animate
          className="mt-6 max-w-2xl text-center text-base leading-relaxed text-text-secondary opacity-0 sm:text-lg md:text-xl"
          style={{ animationDelay: '0.4s' }}
        >
          SchedlyAI automatically schedules your meetings, organizes tasks, and protects your focus time.
          Stop wasting <span className="font-semibold text-text-primary">10+ hours per week</span> on calendar chaos.
        </p>

        {/* CTA Buttons */}
        <div
          data-animate
          className="mt-10 flex flex-col items-center gap-4 opacity-0 sm:flex-row"
          style={{ animationDelay: '0.55s' }}
        >
          <a
            href="#pricing"
            id="hero-cta-primary"
            className="group inline-flex items-center gap-2 rounded-xl bg-gradient-to-r from-accent-primary to-accent-secondary px-8 py-4 text-base font-semibold text-white shadow-xl shadow-accent-glow transition-all duration-300 hover:shadow-2xl hover:shadow-accent-primary/40 hover:brightness-110 active:scale-[0.97]"
          >
            Start Free — No Card Required
            <svg className="transition-transform duration-200 group-hover:translate-x-1" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
              <path d="M5 12h14M12 5l7 7-7 7"/>
            </svg>
          </a>
          <a
            href="#how-it-works"
            id="hero-cta-secondary"
            className="inline-flex items-center gap-2 rounded-xl border border-border-primary px-8 py-4 text-base font-medium text-text-secondary transition-all duration-300 hover:border-border-hover hover:text-text-primary hover:bg-bg-tertiary/50"
          >
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <circle cx="12" cy="12" r="10"/>
              <polygon points="10 8 16 12 10 16 10 8" fill="currentColor" stroke="none"/>
            </svg>
            See How It Works
          </a>
        </div>

        {/* Trust Indicators */}
        <div
          data-animate
          className="mt-16 flex flex-col items-center gap-6 opacity-0"
          style={{ animationDelay: '0.7s' }}
        >
          <div className="flex items-center gap-1">
            {[...Array(5)].map((_, i) => (
              <svg key={i} width="18" height="18" viewBox="0 0 24 24" fill="#f59e0b" stroke="none">
                <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"/>
              </svg>
            ))}
            <span className="ml-2 text-sm text-text-secondary">4.9/5 from 2,400+ reviews</span>
          </div>

          <div className="flex flex-wrap items-center justify-center gap-x-8 gap-y-3 text-xs text-text-muted sm:text-sm">
            <span className="flex items-center gap-1.5">
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#10b981" strokeWidth="2.5"><path d="M20 6 9 17l-5-5"/></svg>
              Free 14-day trial
            </span>
            <span className="flex items-center gap-1.5">
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#10b981" strokeWidth="2.5"><path d="M20 6 9 17l-5-5"/></svg>
              No credit card needed
            </span>
            <span className="flex items-center gap-1.5">
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#10b981" strokeWidth="2.5"><path d="M20 6 9 17l-5-5"/></svg>
              Cancel anytime
            </span>
          </div>
        </div>

        {/* Dashboard Preview */}
        <div
          data-animate
          className="mt-16 w-full max-w-5xl opacity-0"
          style={{ animationDelay: '0.85s' }}
        >
          <div className="relative rounded-2xl border border-border-primary/80 bg-bg-secondary/60 p-2 shadow-2xl shadow-black/30 backdrop-blur-sm">
            {/* Fake browser bar */}
            <div className="mb-2 flex items-center gap-2 rounded-t-lg bg-bg-primary/60 px-4 py-2.5">
              <div className="flex gap-1.5">
                <div className="h-3 w-3 rounded-full bg-red-500/60" />
                <div className="h-3 w-3 rounded-full bg-yellow-500/60" />
                <div className="h-3 w-3 rounded-full bg-green-500/60" />
              </div>
              <div className="mx-auto flex items-center gap-2 rounded-md bg-bg-tertiary/60 px-4 py-1 text-xs text-text-muted">
                <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><rect x="3" y="11" width="18" height="11" rx="2"/><path d="M7 11V7a5 5 0 0110 0v4"/></svg>
                app.SchedlyAI.ai/dashboard
              </div>
            </div>
            {/* Dashboard mockup */}
            <div className="rounded-xl bg-bg-primary p-6">
              <div className="grid grid-cols-1 gap-4 md:grid-cols-3">
                {/* Left - Calendar */}
                <div className="col-span-1 md:col-span-2 rounded-xl border border-border-primary bg-bg-secondary p-5">
                  <div className="mb-4 flex items-center justify-between">
                    <h3 className="text-sm font-semibold text-text-primary">Today's Schedule</h3>
                    <span className="text-xs text-text-muted">April 17, 2026</span>
                  </div>
                  <div className="space-y-3">
                    {[
                      { time: '9:00 AM', title: 'Team Standup', color: 'bg-accent-primary', duration: '30m' },
                      { time: '10:30 AM', title: 'Client Review Call', color: 'bg-accent-secondary', duration: '1h' },
                      { time: '12:00 PM', title: 'Deep Focus Block', color: 'bg-success', duration: '2h', ai: true },
                      { time: '2:30 PM', title: 'Product Strategy', color: 'bg-warning', duration: '45m' },
                    ].map((item, i) => (
                      <div key={i} className="flex items-center gap-3 rounded-lg bg-bg-primary/50 p-3 transition-colors hover:bg-bg-tertiary/50">
                        <div className={`h-8 w-1 rounded-full ${item.color}`} />
                        <div className="flex-1">
                          <p className="text-sm font-medium text-text-primary">{item.title}</p>
                          <p className="text-xs text-text-muted">{item.time} · {item.duration}</p>
                        </div>
                        {item.ai && (
                          <span className="rounded-full bg-accent-primary/10 px-2 py-0.5 text-[10px] font-semibold text-accent-primary">
                            AI Scheduled
                          </span>
                        )}
                      </div>
                    ))}
                  </div>
                </div>
                {/* Right - Stats */}
                <div className="space-y-4">
                  <div className="rounded-xl border border-border-primary bg-bg-secondary p-5">
                    <p className="text-xs text-text-muted">Hours Saved This Week</p>
                    <p className="mt-1 text-3xl font-bold text-success">12.5h</p>
                    <p className="mt-1 text-xs text-success">↑ 23% vs last week</p>
                  </div>
                  <div className="rounded-xl border border-border-primary bg-bg-secondary p-5">
                    <p className="text-xs text-text-muted">Meetings Optimized</p>
                    <p className="mt-1 text-3xl font-bold text-accent-primary">47</p>
                    <p className="mt-1 text-xs text-text-muted">This month</p>
                  </div>
                  <div className="rounded-xl border border-border-primary bg-bg-secondary p-5">
                    <p className="text-xs text-text-muted">Focus Score</p>
                    <p className="mt-1 text-3xl font-bold text-accent-secondary">94%</p>
                    <div className="mt-2 h-1.5 w-full rounded-full bg-bg-primary">
                      <div className="h-full w-[94%] rounded-full bg-gradient-to-r from-accent-primary to-accent-secondary" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* Glow under preview */}
          <div className="absolute bottom-0 left-1/2 h-32 w-3/4 -translate-x-1/2 translate-y-1/2 rounded-full bg-accent-primary/10 blur-[60px]" />
        </div>
      </div>
    </section>
  );
}
