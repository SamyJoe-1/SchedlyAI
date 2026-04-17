import { useEffect, useRef, useState } from 'react';

const plans = [
  {
    name: 'Starter',
    price: '$0',
    period: 'forever',
    description: 'Perfect for individuals getting started with AI scheduling.',
    cta: 'Start Free',
    popular: false,
    features: [
      'Smart auto-scheduling',
      '1 calendar connection',
      'Basic focus time blocks',
      'Natural language input',
      'Email support',
      '14-day Pro trial included',
    ],
  },
  {
    name: 'Pro',
    price: '$12',
    period: '/month',
    description: 'For professionals and teams who need full scheduling power.',
    cta: 'Start Free Trial',
    popular: true,
    features: [
      'Everything in Starter',
      'Unlimited calendars',
      'Advanced focus protection',
      'Team coordination',
      'Conflict auto-resolution',
      'Priority support',
      'Analytics dashboard',
      'API access',
    ],
  },
];

export default function Pricing() {
  const sectionRef = useRef(null);
  const [annual, setAnnual] = useState(true);

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
    <section id="pricing" ref={sectionRef} className="relative py-24 sm:py-32">
      <div className="absolute left-0 right-0 top-0 h-px bg-gradient-to-r from-transparent via-border-primary to-transparent" />
      <div className="pointer-events-none absolute left-1/2 top-1/2 h-[500px] w-[500px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-accent-primary/5 blur-[120px]" />

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-3xl text-center">
          <p data-animate className="text-sm font-semibold uppercase tracking-widest text-accent-primary opacity-0" style={{ animationDelay: '0.1s' }}>Pricing</p>
          <h2 data-animate className="mt-3 text-3xl font-bold tracking-tight text-text-primary opacity-0 sm:text-4xl lg:text-5xl" style={{ animationDelay: '0.2s' }}>
            Simple, <span className="bg-gradient-to-r from-accent-primary to-accent-secondary bg-clip-text text-transparent">transparent</span> pricing
          </h2>
          <p data-animate className="mt-4 text-base text-text-secondary opacity-0 sm:text-lg" style={{ animationDelay: '0.3s' }}>
            Start free. Upgrade when you're ready. No hidden fees.
          </p>
        </div>

        {/* Billing toggle */}
        <div data-animate className="mt-8 flex items-center justify-center gap-3 opacity-0" style={{ animationDelay: '0.35s' }}>
          <span className={`text-sm font-medium ${!annual ? 'text-text-primary' : 'text-text-muted'}`}>Monthly</span>
          <button
            id="billing-toggle"
            onClick={() => setAnnual(!annual)}
            className={`relative h-7 w-12 rounded-full transition-colors duration-300 ${annual ? 'bg-accent-primary' : 'bg-border-hover'}`}
          >
            <div className={`absolute top-0.5 h-6 w-6 rounded-full bg-white shadow-md transition-transform duration-300 ${annual ? 'translate-x-5.5' : 'translate-x-0.5'}`} />
          </button>
          <span className={`text-sm font-medium ${annual ? 'text-text-primary' : 'text-text-muted'}`}>
            Annual <span className="ml-1 rounded-full bg-success/10 px-2 py-0.5 text-xs font-semibold text-success">Save 20%</span>
          </span>
        </div>

        {/* Plans */}
        <div className="mt-12 grid grid-cols-1 gap-6 sm:mx-auto sm:max-w-4xl lg:grid-cols-2">
          {plans.map((plan, i) => (
            <div
              key={i}
              data-animate
              className={`group relative overflow-hidden rounded-2xl border p-8 opacity-0 transition-all duration-500 hover:-translate-y-1 ${
                plan.popular
                  ? 'border-accent-primary/50 bg-bg-card-hover shadow-xl shadow-accent-glow/10'
                  : 'border-border-primary bg-bg-card hover:border-border-hover'
              }`}
              style={{ animationDelay: `${0.4 + i * 0.15}s` }}
            >
              {plan.popular && (
                <>
                  <div className="absolute inset-0 bg-gradient-to-br from-accent-primary/5 to-transparent" />
                  <div className="absolute right-6 top-6 rounded-full bg-gradient-to-r from-accent-primary to-accent-secondary px-3 py-1 text-xs font-semibold text-white">
                    Most Popular
                  </div>
                </>
              )}
              <div className="relative">
                <h3 className="text-lg font-semibold text-text-primary">{plan.name}</h3>
                <p className="mt-1 text-sm text-text-muted">{plan.description}</p>
                <div className="mt-6 flex items-baseline gap-1">
                  <span className="text-5xl font-extrabold text-text-primary">
                    {plan.price === '$0' ? '$0' : annual ? '$9' : '$12'}
                  </span>
                  <span className="text-text-muted">
                    {plan.price === '$0' ? '/forever' : annual ? '/mo billed annually' : '/month'}
                  </span>
                </div>

                <a
                  href="#"
                  className={`mt-8 flex w-full items-center justify-center gap-2 rounded-xl px-6 py-3.5 text-sm font-semibold transition-all duration-300 active:scale-[0.97] ${
                    plan.popular
                      ? 'bg-gradient-to-r from-accent-primary to-accent-secondary text-white shadow-lg shadow-accent-glow hover:shadow-xl hover:shadow-accent-primary/40 hover:brightness-110'
                      : 'border border-border-primary bg-bg-secondary text-text-primary hover:border-border-hover hover:bg-bg-tertiary'
                  }`}
                >
                  {plan.cta}
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><path d="M5 12h14M12 5l7 7-7 7"/></svg>
                </a>

                <ul className="mt-8 space-y-3">
                  {plan.features.map((f, j) => (
                    <li key={j} className="flex items-start gap-3 text-sm text-text-secondary">
                      <svg className="mt-0.5 shrink-0 text-success" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><path d="M20 6 9 17l-5-5"/></svg>
                      {f}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>

        <p data-animate className="mt-8 text-center text-xs text-text-muted opacity-0" style={{ animationDelay: '0.8s' }}>
          All plans include a 14-day free trial. No credit card required. Cancel anytime.
        </p>
      </div>
    </section>
  );
}
