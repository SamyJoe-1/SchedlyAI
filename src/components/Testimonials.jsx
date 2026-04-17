import { useEffect, useRef, useState } from 'react';

const testimonials = [
  {
    name: 'Sarah Chen', role: 'Startup Founder', company: 'NovaTech',
    initials: 'SC', color: 'from-indigo-500 to-purple-500',
    quote: 'SchedlyAI saved me 12 hours a week. I used to spend my Sunday nights planning the week — now the AI does it better than I ever could.',
  },
  {
    name: 'Marcus Rivera', role: 'Freelance Consultant', company: 'Independent',
    initials: 'MR', color: 'from-emerald-500 to-teal-500',
    quote: 'As a freelancer juggling 8 clients, scheduling was my biggest headache. SchedlyAI handles time zones, availability, and even reminds me to take breaks.',
  },
  {
    name: 'Emily Nakamura', role: 'VP of Engineering', company: 'ScaleUp Inc.',
    initials: 'EN', color: 'from-amber-500 to-orange-500',
    quote: 'Our entire engineering team uses SchedlyAI now. Meeting coordination across 3 time zones went from painful to automatic.',
  },
  {
    name: 'David Okonkwo', role: 'Product Manager', company: 'Finova',
    initials: 'DO', color: 'from-rose-500 to-pink-500',
    quote: "I was skeptical about an AI touching my calendar, but after a week I couldn't imagine going back. It's like having a personal assistant.",
  },
];

const stats = [
  { value: '5,000+', label: 'Active Users' },
  { value: '2.4M', label: 'Meetings Scheduled' },
  { value: '98.7%', label: 'Satisfaction Rate' },
  { value: '10.5h', label: 'Avg. Hours Saved/Week' },
];

export default function Testimonials() {
  const sectionRef = useRef(null);
  const [activeIndex, setActiveIndex] = useState(0);

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

  useEffect(() => {
    const interval = setInterval(() => setActiveIndex((p) => (p + 1) % testimonials.length), 5000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section id="testimonials" ref={sectionRef} className="relative py-24 sm:py-32">
      <div className="absolute left-0 right-0 top-0 h-px bg-gradient-to-r from-transparent via-border-primary to-transparent" />
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-3xl text-center">
          <p data-animate className="text-sm font-semibold uppercase tracking-widest text-accent-primary opacity-0" style={{ animationDelay: '0.1s' }}>Social Proof</p>
          <h2 data-animate className="mt-3 text-3xl font-bold tracking-tight text-text-primary opacity-0 sm:text-4xl lg:text-5xl" style={{ animationDelay: '0.2s' }}>
            Loved by <span className="bg-gradient-to-r from-accent-primary to-accent-secondary bg-clip-text text-transparent">thousands</span> of professionals
          </h2>
        </div>

        <div data-animate className="mt-12 grid grid-cols-2 gap-4 rounded-2xl border border-border-primary bg-bg-card p-6 opacity-0 sm:grid-cols-4 sm:gap-8 sm:p-8" style={{ animationDelay: '0.3s' }}>
          {stats.map((s, i) => (
            <div key={i} className="text-center">
              <p className="text-2xl font-extrabold text-text-primary sm:text-3xl">{s.value}</p>
              <p className="mt-1 text-xs text-text-muted sm:text-sm">{s.label}</p>
            </div>
          ))}
        </div>

        <div className="mt-12 grid grid-cols-1 gap-5 sm:grid-cols-2">
          {testimonials.map((t, i) => (
            <div key={i} data-animate
              className={`group relative overflow-hidden rounded-2xl border p-7 opacity-0 transition-all duration-500 ${i === activeIndex ? 'border-border-accent bg-bg-card-hover shadow-lg shadow-accent-glow/10' : 'border-border-primary bg-bg-card hover:border-border-hover hover:bg-bg-card-hover'}`}
              style={{ animationDelay: `${0.4 + i * 0.1}s` }}
              onMouseEnter={() => setActiveIndex(i)}>
              <div className={`absolute inset-0 bg-gradient-to-br from-accent-primary/3 to-transparent transition-opacity duration-500 ${i === activeIndex ? 'opacity-100' : 'opacity-0 group-hover:opacity-100'}`} />
              <div className="relative">
                <div className="mb-4 flex gap-0.5">
                  {[...Array(5)].map((_, j) => (
                    <svg key={j} width="16" height="16" viewBox="0 0 24 24" fill="#f59e0b"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"/></svg>
                  ))}
                </div>
                <p className="mb-6 text-sm leading-relaxed text-text-secondary sm:text-base">"{t.quote}"</p>
                <div className="flex items-center gap-3">
                  <div className={`flex h-10 w-10 items-center justify-center rounded-full bg-gradient-to-br ${t.color} text-sm font-bold text-white`}>{t.initials}</div>
                  <div>
                    <p className="text-sm font-semibold text-text-primary">{t.name}</p>
                    <p className="text-xs text-text-muted">{t.role} · {t.company}</p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div data-animate className="mt-16 opacity-0" style={{ animationDelay: '0.9s' }}>
          <p className="mb-6 text-center text-xs uppercase tracking-widest text-text-muted">Trusted by teams at</p>
          <div className="flex flex-wrap items-center justify-center gap-x-10 gap-y-4">
            {['Stripe', 'Notion', 'Linear', 'Figma', 'Vercel'].map((n) => (
              <span key={n} className="text-lg font-bold tracking-tight text-text-muted/50 transition-colors hover:text-text-muted">{n}</span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
