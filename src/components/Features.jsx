import { useEffect, useRef } from 'react';

const features = [
  {
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 2a10 10 0 1 0 10 10H12V2z"/><path d="M12 2a10 10 0 0 1 10 10"/><circle cx="12" cy="12" r="6"/>
      </svg>
    ),
    title: 'Smart Auto-Scheduling',
    description: 'AI analyzes your preferences, priorities, and patterns to automatically place meetings at optimal times. No manual dragging.',
    tag: 'Core',
  },
  {
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <rect x="3" y="3" width="18" height="18" rx="2"/><path d="M3 9h18"/><path d="M9 21V9"/>
      </svg>
    ),
    title: 'Focus Time Protection',
    description: 'Automatically blocks deep work sessions and prevents meetings from fragmenting your most productive hours.',
    tag: 'Popular',
  },
  {
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M22 21v-2a4 4 0 0 0-3-3.87"/><path d="M16 3.13a4 4 0 0 1 0 7.75"/>
      </svg>
    ),
    title: 'Team Coordination',
    description: 'Finds the perfect meeting time across multiple calendars, time zones, and availability windows — in seconds.',
    tag: 'Team',
  },
  {
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/><polyline points="22 6 12 13 2 6"/>
      </svg>
    ),
    title: 'Natural Language Input',
    description: '"Schedule a call with Sarah next Tuesday afternoon" — just type or speak, and SchedlyAI handles the rest.',
    tag: 'AI',
  },
  {
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <polyline points="22 12 18 12 15 21 9 3 6 12 2 12"/>
      </svg>
    ),
    title: 'Conflict Resolution',
    description: 'When schedules clash, SchedlyAI suggests optimal alternatives and auto-reschedules based on priority rules you set.',
    tag: 'Smart',
  },
  {
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <rect x="2" y="3" width="20" height="14" rx="2"/><line x1="8" y1="21" x2="16" y2="21"/><line x1="12" y1="17" x2="12" y2="21"/>
      </svg>
    ),
    title: 'Universal Sync',
    description: 'Google Calendar, Outlook, Apple Calendar, Zoom, Meet — connects to everything you already use seamlessly.',
    tag: 'Integration',
  },
];

const tagColors = {
  Core: 'bg-accent-primary/10 text-accent-primary',
  Popular: 'bg-amber-500/10 text-amber-400',
  Team: 'bg-emerald-500/10 text-emerald-400',
  AI: 'bg-violet-500/10 text-violet-400',
  Smart: 'bg-cyan-500/10 text-cyan-400',
  Integration: 'bg-rose-500/10 text-rose-400',
};

export default function Features() {
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
    <section id="features" ref={sectionRef} className="relative py-24 sm:py-32">
      {/* Background accent */}
      <div className="pointer-events-none absolute left-1/2 top-1/2 h-[600px] w-[600px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-accent-primary/4 blur-[120px]" />

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Section header */}
        <div className="mx-auto max-w-3xl text-center">
          <p
            data-animate
            className="text-sm font-semibold uppercase tracking-widest text-accent-primary opacity-0"
            style={{ animationDelay: '0.1s' }}
          >
            Features
          </p>
          <h2
            data-animate
            className="mt-3 text-3xl font-bold tracking-tight text-text-primary opacity-0 sm:text-4xl lg:text-5xl"
            style={{ animationDelay: '0.2s' }}
          >
            Everything you need to{' '}
            <span className="bg-gradient-to-r from-accent-primary to-accent-secondary bg-clip-text text-transparent">
              own your time
            </span>
          </h2>
          <p
            data-animate
            className="mt-4 text-base text-text-secondary opacity-0 sm:text-lg"
            style={{ animationDelay: '0.3s' }}
          >
            Powerful AI that works behind the scenes so you can focus on what actually matters.
          </p>
        </div>

        {/* Feature grid */}
        <div className="mt-16 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {features.map((feature, i) => (
            <div
              key={i}
              data-animate
              className="group relative overflow-hidden rounded-2xl border border-border-primary bg-bg-card p-7 opacity-0 transition-all duration-500 hover:border-border-accent hover:bg-bg-card-hover hover:-translate-y-1 hover:shadow-xl hover:shadow-accent-glow/10"
              style={{ animationDelay: `${0.35 + i * 0.1}s` }}
            >
              {/* Gradient overlay on hover */}
              <div className="absolute inset-0 bg-gradient-to-br from-accent-primary/5 to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100" />

              <div className="relative">
                <div className="mb-5 flex items-center justify-between">
                  <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-accent-primary/10 text-accent-primary transition-colors group-hover:bg-accent-primary/20">
                    {feature.icon}
                  </div>
                  <span className={`rounded-full px-2.5 py-1 text-[10px] font-semibold uppercase tracking-wider ${tagColors[feature.tag]}`}>
                    {feature.tag}
                  </span>
                </div>
                <h3 className="mb-2 text-lg font-semibold text-text-primary">{feature.title}</h3>
                <p className="text-sm leading-relaxed text-text-secondary">{feature.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
