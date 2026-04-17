import { useEffect, useRef } from 'react';

const steps = [
  {
    number: '01',
    title: 'Connect Your Calendar',
    description: 'Link Google Calendar, Outlook, or Apple Calendar in one click. SchedlyAI reads your existing schedule and learns your patterns.',
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M15 3h4a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2h-4"/><polyline points="10 17 15 12 10 7"/><line x1="15" y1="12" x2="3" y2="12"/>
      </svg>
    ),
  },
  {
    number: '02',
    title: 'Set Your Preferences',
    description: 'Tell SchedlyAI when you prefer meetings, how much focus time you need, and your priority rules. Takes 2 minutes.',
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="12" cy="12" r="3"/><path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 0 1 0 2.83 2 2 0 0 1-2.83 0l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-2 2 2 2 0 0 1-2-2v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 0 1-2.83 0 2 2 0 0 1 0-2.83l.06-.06A1.65 1.65 0 0 0 4.68 15a1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1-2-2 2 2 0 0 1 2-2h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 0 1 0-2.83 2 2 0 0 1 2.83 0l.06.06A1.65 1.65 0 0 0 9 4.68a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 2-2 2 2 0 0 1 2 2v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 0 1 2.83 0 2 2 0 0 1 0 2.83l-.06.06a1.65 1.65 0 0 0-.33 1.82V9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 2 2 2 2 0 0 1-2 2h-.09a1.65 1.65 0 0 0-1.51 1z"/>
      </svg>
    ),
  },
  {
    number: '03',
    title: 'AI Takes Over',
    description: 'SchedlyAI intelligently schedules, reschedules, and protects your time. You just show up to the right meetings at the right time.',
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M13 2L3 14h9l-1 8 10-12h-9l1-8z"/>
      </svg>
    ),
  },
];

export default function HowItWorks() {
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
    <section id="how-it-works" ref={sectionRef} className="relative py-24 sm:py-32">
      {/* Divider */}
      <div className="absolute left-0 right-0 top-0 h-px bg-gradient-to-r from-transparent via-border-primary to-transparent" />

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Section header */}
        <div className="mx-auto max-w-3xl text-center">
          <p
            data-animate
            className="text-sm font-semibold uppercase tracking-widest text-accent-primary opacity-0"
            style={{ animationDelay: '0.1s' }}
          >
            How It Works
          </p>
          <h2
            data-animate
            className="mt-3 text-3xl font-bold tracking-tight text-text-primary opacity-0 sm:text-4xl lg:text-5xl"
            style={{ animationDelay: '0.2s' }}
          >
            Up and running in{' '}
            <span className="bg-gradient-to-r from-accent-primary to-accent-secondary bg-clip-text text-transparent">
              3 minutes
            </span>
          </h2>
          <p
            data-animate
            className="mt-4 text-base text-text-secondary opacity-0 sm:text-lg"
            style={{ animationDelay: '0.3s' }}
          >
            No complex setup. No learning curve. Just connect and let the AI handle the rest.
          </p>
        </div>

        {/* Steps */}
        <div className="relative mt-20">
          {/* Connecting line - desktop */}
          <div className="absolute left-0 right-0 top-16 hidden h-px bg-gradient-to-r from-transparent via-accent-primary/30 to-transparent lg:block" />

          <div className="grid grid-cols-1 gap-8 lg:grid-cols-3 lg:gap-12">
            {steps.map((step, i) => (
              <div
                key={i}
                data-animate
                className="group relative flex flex-col items-center text-center opacity-0"
                style={{ animationDelay: `${0.4 + i * 0.2}s` }}
              >
                {/* Step circle */}
                <div className="relative mb-8">
                  <div className="flex h-32 w-32 items-center justify-center rounded-full border border-border-primary bg-bg-card transition-all duration-500 group-hover:border-border-accent group-hover:shadow-xl group-hover:shadow-accent-glow/20">
                    <div className="flex h-20 w-20 items-center justify-center rounded-full bg-gradient-to-br from-accent-primary/20 to-accent-secondary/20 text-accent-primary transition-all duration-500 group-hover:from-accent-primary/30 group-hover:to-accent-secondary/30">
                      {step.icon}
                    </div>
                  </div>
                  {/* Step number badge */}
                  <div className="absolute -right-1 -top-1 flex h-10 w-10 items-center justify-center rounded-full bg-gradient-to-br from-accent-primary to-accent-secondary text-sm font-bold text-white shadow-lg shadow-accent-glow">
                    {step.number}
                  </div>
                </div>

                <h3 className="mb-3 text-xl font-semibold text-text-primary">{step.title}</h3>
                <p className="max-w-sm text-sm leading-relaxed text-text-secondary">{step.description}</p>

                {/* Arrow between steps - mobile */}
                {i < steps.length - 1 && (
                  <div className="mt-6 flex lg:hidden">
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" className="text-accent-primary/40" strokeWidth="2">
                      <path d="M12 5v14M19 12l-7 7-7-7"/>
                    </svg>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
