import { useEffect, useRef } from 'react';

export default function FinalCTA() {
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) entry.target.classList.add('animate-fade-up');
        });
      },
      { threshold: 0.1 }
    );
    const elements = sectionRef.current?.querySelectorAll('[data-animate]');
    elements?.forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  return (
    <section id="final-cta" ref={sectionRef} className="relative py-24 sm:py-32">
      <div className="absolute left-0 right-0 top-0 h-px bg-gradient-to-r from-transparent via-border-primary to-transparent" />
      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        <div className="absolute -left-40 top-1/2 h-[400px] w-[400px] rounded-full bg-accent-primary/8 blur-[100px]" />
        <div className="absolute -right-40 top-1/3 h-[300px] w-[300px] rounded-full bg-accent-secondary/8 blur-[80px]" />
      </div>

      <div className="relative mx-auto max-w-4xl px-4 text-center sm:px-6 lg:px-8">
        <div data-animate className="opacity-0" style={{ animationDelay: '0.1s' }}>
          <div className="mx-auto mb-6 flex h-16 w-16 items-center justify-center rounded-2xl bg-gradient-to-br from-accent-primary to-accent-secondary shadow-xl shadow-accent-glow animate-pulse-glow">
            <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M13 2L3 14h9l-1 8 10-12h-9l1-8z"/>
            </svg>
          </div>
        </div>

        <h2 data-animate className="text-3xl font-bold tracking-tight text-text-primary opacity-0 sm:text-4xl lg:text-5xl" style={{ animationDelay: '0.2s' }}>
          Ready to take back your <span className="bg-gradient-to-r from-accent-primary to-accent-secondary bg-clip-text text-transparent">time</span>?
        </h2>
        <p data-animate className="mt-4 text-base text-text-secondary opacity-0 sm:text-lg" style={{ animationDelay: '0.3s' }}>
          Join 5,000+ professionals who reclaimed their calendar. Set up in under 3 minutes.
        </p>

        <div data-animate className="mt-10 flex flex-col items-center gap-4 opacity-0 sm:flex-row sm:justify-center" style={{ animationDelay: '0.4s' }}>
          <a href="#pricing" id="final-cta-button" className="group inline-flex items-center gap-2 rounded-xl bg-gradient-to-r from-accent-primary to-accent-secondary px-10 py-4 text-base font-semibold text-white shadow-xl shadow-accent-glow transition-all duration-300 hover:shadow-2xl hover:shadow-accent-primary/40 hover:brightness-110 active:scale-[0.97]">
            Start Your Free Trial
            <svg className="transition-transform duration-200 group-hover:translate-x-1" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><path d="M5 12h14M12 5l7 7-7 7"/></svg>
          </a>
          <span className="text-sm text-text-muted">No credit card required</span>
        </div>
      </div>
    </section>
  );
}
