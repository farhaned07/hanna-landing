import React from 'react';
import { motion } from 'framer-motion';
import {
  Activity,
  ArrowRight,
  BarChart3,
  CheckCircle2,
  ClipboardList,
  Eye,
  FileText,
  HeartPulse,
  Layers3,
  LineChart,
  LockKeyhole,
  MessageCircle,
  Mic2,
  ShieldCheck,
} from 'lucide-react';

const fadeUp = {
  hidden: { opacity: 0, y: 14 },
  visible: { opacity: 1, y: 0 },
};

const smooth = { duration: 0.42, ease: [0.22, 1, 0.36, 1] };
const eyebrow = 'text-xs font-semibold uppercase tracking-[0.2em] text-emerald-600';
const sectionTitle = 'text-[2.2rem] font-medium leading-[1.1] tracking-[-0.045em] text-slate-950 sm:text-[3rem] lg:text-[3.35rem]';
const bodyText = 'text-base leading-8 text-slate-600 sm:text-lg';

const navItems = [
  ['Platform', '#platform'],
  ['How it works', '#how-it-works'],
  ['Pricing', '#pricing'],
  ['Trust', '#trust'],
];

const stats = [
  ['67%', 'of nurses report spending over 2 hours per day on documentation and coordination'],
  ['3×', 'more likely to catch patient deterioration early with unified monitoring'],
  ['40%', 'reduction in adverse events reported with real-time care intelligence'],
];

const platformItems = [
  { icon: Mic2, title: 'Documentation', body: 'Structured clinical notes prepared from each visit.' },
  { icon: ClipboardList, title: 'Care plan', body: 'Clear next steps and follow-up timing for patients.' },
  { icon: MessageCircle, title: 'Follow-up', body: 'LINE check-ins continue the care path after discharge or clinic visit.' },
  { icon: HeartPulse, title: 'Priority', body: 'Risk signals become a focused nurse review list.' },
];

const steps = [
  ['Capture the visit', 'Hanna drafts structured documentation for clinician review.'],
  ['Create the care plan', 'The visit becomes patient-friendly next steps and follow-up timing.'],
  ['Continue through LINE', 'Patients receive simple check-ins without downloading a new app.'],
  ['Surface risk', 'Symptoms, silence, and missed medication become priority signals.'],
  ['Report outcomes', 'Leadership sees follow-up, escalation, and continuity performance.'],
];

const pricing = [
  {
    title: 'Hanna Pilot',
    price: '฿60,000',
    cadence: '/ month for 90 days',
    body: 'For one clinic or department to prove the care intelligence loop.',
    items: ['Reviewed note workflow', 'Care plan generation', 'LINE follow-up handoff', 'Basic nurse priority view', 'Monthly report'],
  },
  {
    title: 'Care Intelligence',
    price: '฿85,000',
    cadence: '/ month, billed annually',
    body: 'For one department running Hanna as an annual care intelligence system.',
    items: ['Department care intelligence system', 'Scribe workflow for visits', 'Care plans and LINE follow-up', 'Nurse priority queue', 'Monthly leadership reports'],
    featured: true,
  },
  {
    title: 'Enterprise',
    price: 'From ฿250,000',
    cadence: '/ month, annual only',
    body: 'For hospital groups, multi-site rollout, or payer programs.',
    items: ['Multi-department rollout', 'Executive reporting', 'Custom workflows and risk rules', 'Integration roadmap', 'Dedicated rollout support'],
  },
];

const trustItems = [
  ['Clinician reviewed', 'AI drafts. Care teams review, edit, and confirm.', ShieldCheck],
  ['Audit-ready workflow', 'Notes, care plans, check-ins, and escalations can be tracked.', LockKeyhole],
  ['Exception-first design', 'Staff focus on the patients who need attention, not dashboard noise.', LineChart],
];

export default function HannaLandingDesigned() {
  return (
    <main className="min-h-screen overflow-hidden bg-[#f7f8fb] text-slate-950 antialiased selection:bg-slate-950 selection:text-white">
      <Background />
      <Header />
      <Hero />
      <Problem />
      <Platform />
      <HowItWorks />
      <Pricing />
      <Trust />
      <BookDemo />
      <Footer />
    </main>
  );
}

function Background() {
  return (
    <div className="pointer-events-none fixed inset-0 z-0 overflow-hidden">
      <div className="absolute -left-40 -top-40 h-[460px] w-[460px] rounded-full bg-cyan-100/50 blur-3xl" />
      <div className="absolute right-[-160px] top-24 h-[540px] w-[540px] rounded-full bg-blue-100/45 blur-3xl" />
      <div className="absolute bottom-[-240px] left-[28%] h-[500px] w-[500px] rounded-full bg-emerald-50/80 blur-3xl" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_0%,rgba(255,255,255,0.98),rgba(247,248,251,0.45)_40%,rgba(247,248,251,0)_72%)]" />
    </div>
  );
}

function Header() {
  return (
    <header className="fixed inset-x-0 top-0 z-50 border-b border-slate-200/70 bg-white/80 backdrop-blur-2xl">
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-5 lg:px-8">
        <a href="#top" className="flex items-center gap-3" aria-label="Hanna home">
          <img src="/hanna-logo.png" alt="Hanna" className="h-8 w-8 rounded-xl shadow-sm" />
          <div className="leading-tight">
            <p className="text-[15px] font-semibold tracking-[-0.02em]">Hanna</p>
            <p className="text-[11px] font-medium text-slate-500">Care Intelligence</p>
          </div>
        </a>
        <nav className="hidden items-center gap-7 lg:flex">
          {navItems.map(([label, href]) => (
            <a key={label} href={href} className="text-sm font-medium text-slate-500 transition hover:text-slate-950">{label}</a>
          ))}
        </nav>
        <a href="mailto:hello@hanna.care?subject=Hanna%20Platform%20Demo" className="rounded-full bg-[#07111f] px-5 py-2.5 text-sm font-semibold text-white shadow-md shadow-slate-950/10 transition hover:bg-slate-800">
          Book pilot
        </a>
      </div>
    </header>
  );
}

function Hero() {
  return (
    <section id="top" className="relative z-10 px-5 pb-16 pt-32 lg:px-8 lg:pb-20 lg:pt-34">
      <motion.div className="mx-auto max-w-6xl text-center" initial="hidden" animate="visible" variants={fadeUp} transition={smooth}>
        <div className="mx-auto mb-5 inline-flex items-center gap-2 rounded-full border border-slate-200 bg-white/80 px-3.5 py-2 text-sm font-medium text-slate-700 shadow-sm backdrop-blur-xl">
          <Layers3 className="h-4 w-4 text-emerald-500" />
          Hanna Care Intelligence
        </div>
        <h1 className="mx-auto max-w-4xl text-[3rem] font-medium leading-[1.02] tracking-[-0.06em] text-slate-950 sm:text-[4.2rem] lg:text-[5.2rem]">
          Turn clinic visits into guided care.
        </h1>
        <p className="mx-auto mt-6 max-w-2xl text-base leading-8 text-slate-600 sm:text-lg">
          Hanna creates the documentation, care plan, LINE follow-up, and nurse priority list after each visit.
        </p>
        <div className="mt-8 flex flex-col justify-center gap-3 sm:flex-row">
          <a href="mailto:hello@hanna.care?subject=Hanna%20Platform%20Demo" className="group inline-flex items-center justify-center gap-2 rounded-full bg-[#07111f] px-6 py-3.5 text-sm font-semibold text-white shadow-lg shadow-slate-950/10 transition hover:bg-slate-800">
            Book a platform demo <ArrowRight className="h-4 w-4 transition group-hover:translate-x-0.5" />
          </a>
          <a href="#problem" className="inline-flex items-center justify-center rounded-full border border-slate-200 bg-white/80 px-6 py-3.5 text-sm font-semibold text-slate-900 shadow-sm backdrop-blur-xl transition hover:bg-white">
            See the problem
          </a>
        </div>
        <HeroSurface />
      </motion.div>
    </section>
  );
}

function HeroSurface() {
  const items = ['Clinical note prepared', 'Care plan created', 'LINE follow-up scheduled', 'Nurse priority updated'];
  return (
    <div className="relative mx-auto mt-12 max-w-3xl">
      <div className="absolute inset-0 rounded-[2rem] bg-gradient-to-br from-cyan-100 to-emerald-100 blur-2xl" />
      <div className="relative rounded-[2rem] border border-white/80 bg-white/80 p-4 shadow-xl shadow-slate-950/10 backdrop-blur-2xl">
        <div className="rounded-[1.45rem] bg-[#07111f] p-5 text-left text-white sm:p-6">
          <div className="mb-5 flex items-center justify-between gap-4">
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.16em] text-emerald-300">Guided care path</p>
              <p className="mt-1 text-xl font-medium tracking-[-0.035em]">Visit converted into action</p>
            </div>
            <span className="rounded-full bg-white/10 px-3 py-1 text-xs font-semibold text-white/65">Live workflow</span>
          </div>
          <div className="grid gap-3 sm:grid-cols-2">
            {items.map((item) => (
              <div key={item} className="flex items-center gap-3 rounded-2xl border border-white/10 bg-white/[0.06] p-4">
                <CheckCircle2 className="h-5 w-5 shrink-0 text-emerald-300" />
                <p className="text-sm font-medium text-white/80">{item}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

function Problem() {
  return (
    <Section id="problem">
      <div className="mx-auto max-w-6xl">
        <div className="rounded-[2rem] border border-slate-200/80 bg-white/68 p-5 shadow-sm shadow-slate-950/5 backdrop-blur-xl sm:p-8 lg:p-10">
          <div className="grid gap-10 lg:grid-cols-[0.85fr_1.15fr] lg:items-start">
            <div>
              <p className={eyebrow}>The Reality Today</p>
              <h2 className={`mt-4 ${sectionTitle}`}>Your hospital is running on fragmented intelligence.</h2>
            </div>
            <div className="space-y-5">
              <p className={bodyText}>Care teams make critical decisions with data split across EMRs, ward notes, discharge logs, and spreadsheets — none of it talking to each other.</p>
              <p className={bodyText}>Leadership sees reports. Not reality. By the time data reaches a dashboard, the moment to act has already passed.</p>
              <p className="text-base font-medium leading-8 text-slate-950 sm:text-lg">The result? Avoidable adverse events. Operational blind spots. And care teams spending more time on coordination than care.</p>
            </div>
          </div>
          <div className="mt-10 grid gap-4 md:grid-cols-3">
            {stats.map(([value, label]) => (
              <div key={value} className="rounded-[1.45rem] border border-slate-200/80 bg-slate-50/80 p-6 shadow-sm shadow-slate-950/5">
                <p className="text-[2.65rem] font-medium leading-none tracking-[-0.055em] text-slate-950">{value}</p>
                <p className="mt-4 text-sm leading-6 text-slate-600">{label}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </Section>
  );
}

function Platform() {
  return (
    <Section id="platform">
      <div className="mx-auto max-w-2xl text-center">
        <p className={eyebrow}>The Platform</p>
        <h2 className={`mt-4 ${sectionTitle}`}>One care intelligence loop.</h2>
        <p className={`mt-5 ${bodyText}`}>Documentation is only the entry point. Hanna connects the visit to care planning, follow-up, risk visibility, nurse action, and reporting.</p>
      </div>
      <div className="mt-10 grid gap-4 lg:grid-cols-4">
        {platformItems.map((item) => {
          const Icon = item.icon;
          return (
            <div key={item.title} className="rounded-[1.45rem] border border-slate-200/80 bg-white/76 p-5 shadow-sm shadow-slate-950/5 backdrop-blur-xl">
              <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-slate-950 text-white"><Icon className="h-5 w-5" /></div>
              <h3 className="mt-6 text-lg font-medium tracking-[-0.025em] text-slate-950">{item.title}</h3>
              <p className="mt-3 text-sm leading-6 text-slate-600">{item.body}</p>
            </div>
          );
        })}
      </div>
    </Section>
  );
}

function HowItWorks() {
  return (
    <section id="how-it-works" className="relative z-10 px-5 py-16 lg:px-8 lg:py-20">
      <div className="mx-auto max-w-6xl rounded-[1.8rem] bg-[#07111f] p-6 text-white shadow-xl shadow-slate-950/12 sm:p-10">
        <div className="grid gap-10 lg:grid-cols-[0.72fr_1.28fr]">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-emerald-300">How it works</p>
            <h2 className="mt-4 text-[2.2rem] font-medium leading-[1.1] tracking-[-0.04em] text-white sm:text-[3rem]">From signal to action.</h2>
            <p className="mt-5 text-base leading-8 text-white/64">Hanna connects documentation, care planning, patient follow-up, monitoring, nurse action, and reporting.</p>
          </div>
          <div className="grid gap-3 sm:grid-cols-2">
            {steps.map(([title, body], index) => (
              <div key={title} className="rounded-[1.35rem] border border-white/10 bg-white/[0.055] p-5">
                <p className="text-xs font-semibold uppercase tracking-[0.14em] text-emerald-300">0{index + 1}</p>
                <h3 className="mt-4 text-base font-medium tracking-[-0.02em] text-white">{title}</h3>
                <p className="mt-3 text-sm leading-6 text-white/64">{body}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

function Pricing() {
  return (
    <Section id="pricing">
      <div className="mx-auto max-w-2xl text-center">
        <p className={eyebrow}>Packaging</p>
        <h2 className={`mt-4 ${sectionTitle}`}>Choose the rollout stage.</h2>
        <p className={`mt-5 ${bodyText}`}>Start with one care team. Continue annually once the loop is proven.</p>
      </div>
      <div className="mt-10 grid gap-4 lg:grid-cols-3">
        {pricing.map((plan) => <PricingCard key={plan.title} {...plan} />)}
      </div>
    </Section>
  );
}

function PricingCard({ title, price, cadence, body, items, featured = false }: { title: string; price: string; cadence: string; body: string; items: string[]; featured?: boolean }) {
  return (
    <div className={`overflow-hidden rounded-[1.45rem] border shadow-sm backdrop-blur-xl ${featured ? 'border-slate-950 bg-[#07111f] text-white shadow-slate-950/12' : 'border-slate-200/70 bg-white/82 text-slate-950'}`}>
      <div className={`border-b px-5 py-4 ${featured ? 'border-white/10' : 'border-slate-200/70'}`}>
        <h3 className="text-lg font-medium tracking-[-0.025em]">{title}</h3>
      </div>
      <div className="p-5">
        <p className="text-[2.05rem] font-medium leading-none tracking-[-0.04em]">{price}</p>
        <p className={`mt-2 text-sm font-medium ${featured ? 'text-white/55' : 'text-slate-500'}`}>{cadence}</p>
        <p className={`mt-5 text-sm leading-6 ${featured ? 'text-white/68' : 'text-slate-600'}`}>{body}</p>
        <div className="mt-5 grid gap-2.5">
          {items.map((item) => (
            <div key={item} className="flex items-start gap-2.5">
              <CheckCircle2 className={`mt-0.5 h-4 w-4 shrink-0 ${featured ? 'text-emerald-300' : 'text-emerald-500'}`} />
              <span className={`text-sm leading-5 ${featured ? 'text-white/78' : 'text-slate-700'}`}>{item}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

function Trust() {
  return (
    <Section id="trust">
      <div className="mx-auto max-w-2xl text-center">
        <p className={eyebrow}>Trust posture</p>
        <h2 className={`mt-4 ${sectionTitle}`}>Supervised AI. Human care team.</h2>
        <p className={`mt-5 ${bodyText}`}>AI drafts. Care teams review. Nurses act.</p>
      </div>
      <div className="mt-10 grid gap-4 md:grid-cols-3">
        {trustItems.map(([title, body, Icon]) => (
          <div key={String(title)} className="rounded-[1.45rem] border border-slate-200/70 bg-white/72 p-5 shadow-sm backdrop-blur-xl">
            {React.createElement(Icon as React.ElementType, { className: 'h-5 w-5 text-emerald-600' })}
            <h3 className="mt-6 text-lg font-medium tracking-[-0.025em]">{title}</h3>
            <p className="mt-3 text-sm leading-6 text-slate-600">{body}</p>
          </div>
        ))}
      </div>
    </Section>
  );
}

function BookDemo() {
  return (
    <section id="book-demo" className="relative z-10 px-5 py-16 lg:px-8 lg:py-20">
      <div className="mx-auto max-w-6xl rounded-[1.8rem] bg-[#07111f] p-6 text-white shadow-xl shadow-slate-950/12 sm:p-10">
        <div className="grid gap-8 lg:grid-cols-[1fr_auto] lg:items-center">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-emerald-300">Book pilot</p>
            <h2 className="mt-4 text-[2.2rem] font-medium leading-[1.1] tracking-[-0.04em] text-white sm:text-[3rem]">Book a platform demo.</h2>
            <p className="mt-5 max-w-2xl text-base leading-8 text-white/64">Start with one hospital team, one workflow, and one measurable intelligence gap.</p>
          </div>
          <a href="mailto:hello@hanna.care?subject=Hanna%20Platform%20Demo" className="inline-flex items-center justify-center gap-2 rounded-full bg-white px-6 py-3.5 text-sm font-semibold text-slate-950 transition hover:bg-slate-100">
            Book a Platform Demo <ArrowRight className="h-4 w-4" />
          </a>
        </div>
      </div>
    </section>
  );
}

function Section({ id, children }: { id: string; children: React.ReactNode }) {
  return (
    <section id={id} className="relative z-10 px-5 py-14 lg:px-8 lg:py-20">
      <motion.div className="mx-auto max-w-7xl" initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.16 }} variants={fadeUp} transition={smooth}>
        {children}
      </motion.div>
    </section>
  );
}

function Footer() {
  return (
    <footer className="relative z-10 border-t border-slate-200/80 bg-white/60 px-5 py-10 backdrop-blur-xl lg:px-8">
      <div className="mx-auto flex max-w-7xl flex-col gap-5 text-sm text-slate-500 md:flex-row md:items-center md:justify-between">
        <div className="flex items-center gap-3">
          <img src="/hanna-logo.png" alt="Hanna" className="h-8 w-8 rounded-lg" />
          <span>© 2026 Hanna Care Intelligence</span>
        </div>
        <div className="flex flex-wrap gap-6">
          <a href="/privacy" className="transition hover:text-slate-950">Privacy</a>
          <a href="/terms" className="transition hover:text-slate-950">Terms</a>
          <a href="mailto:hello@hanna.care" className="transition hover:text-slate-950">hello@hanna.care</a>
        </div>
      </div>
    </footer>
  );
}
