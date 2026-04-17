import { useEffect, useRef } from 'react';

export default function Problem() {
  const sectionRef = useRef(null);

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
    const elements = sectionRef.current?.querySelectorAll('[data-animate]');
    elements?.forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  const painPoints = [
    {
      icon: (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <circle cx="12" cy="12" r="10"/><line x1="12" y1="8" x2="12" y2="12"/><line x1="12" y1="16" x2="12.01" y2="16"/>
        </svg>
      ),
      stat: '11.2 hrs',
      label: 'per week wasted on scheduling',
      description: 'Professionals spend an average of 11.2 hours each week coordinating calendars, rescheduling conflicts, and chasing confirmations.',
    },
    {
      icon: (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M23 21v-2a4 4 0 0 0-3-3.87"/><path d="M16 3.13a4 4 0 0 1 0 7.75"/>
        </svg>
      ),
      stat: '67%',
      label: 'of meetings are unnecessary',
      description: 'Over two-thirds of meetings could have been an email. Without smart scheduling, your day fills up with low-value commitments.',
    },
    {
      icon: (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M22 12h-4l-3 9L9 3l-3 9H2"/>
        </svg>
      ),
      stat: '23 min',
      label: 'to refocus after each interruption',
      description: 'Context switching between meetings costs 23 minutes of recovery time. Scattered schedules destroy your deep work capacity.',
    },
  ];

  return (
    <section id="problem" ref={sectionRef} className="relative py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Section header */}
        <div className="mx-auto max-w-3xl text-center">
          <p
            data-animate
            className="text-sm font-semibold uppercase tracking-widest text-accent-primary opacity-0"
            style={{ animationDelay: '0.1s' }}
          >
            The Problem
          </p>
          <h2
            data-animate
            className="mt-3 text-3xl font-bold tracking-tight text-text-primary opacity-0 sm:text-4xl lg:text-5xl"
            style={{ animationDelay: '0.2s' }}
          >
            Your calendar is <span className="text-red-400">working against you</span>
          </h2>
          <p
            data-animate
            className="mt-4 text-base text-text-secondary opacity-0 sm:text-lg"
            style={{ animationDelay: '0.3s' }}
          >
            Back-to-back meetings. No focus time. Endless rescheduling.
            Sound familiar? You're not alone.
          </p>
        </div>

        {/* Pain point cards */}
        <div className="mt-16 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {painPoints.map((point, i) => (
            <div
              key={i}
              data-animate
              className="group relative overflow-hidden rounded-2xl border border-border-primary bg-bg-card p-8 opacity-0 transition-all duration-500 hover:border-red-500/30 hover:bg-bg-card-hover"
              style={{ animationDelay: `${0.4 + i * 0.15}s` }}
            >
              {/* Glow on hover */}
              <div className="absolute inset-0 bg-gradient-to-br from-red-500/5 to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100" />

              <div className="relative">
                <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-xl bg-red-500/10 text-red-400">
                  {point.icon}
                </div>
                <div className="mb-3">
                  <span className="text-4xl font-extrabold text-text-primary">{point.stat}</span>
                  <p className="mt-1 text-sm font-semibold text-red-400">{point.label}</p>
                </div>
                <p className="text-sm leading-relaxed text-text-secondary">{point.description}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Transition line */}
        <div
          data-animate
          className="mt-16 flex flex-col items-center gap-4 opacity-0"
          style={{ animationDelay: '0.9s' }}
        >
          <div className="h-12 w-px bg-gradient-to-b from-border-primary to-accent-primary/40" />
          <p className="text-sm font-medium text-text-accent">There's a better way ↓</p>
        </div>
      </div>
    </section>
  );
}
