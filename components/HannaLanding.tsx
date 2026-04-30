import React from 'react';
import { motion } from 'framer-motion';
import { Activity, ArrowRight, BarChart3, Brain, CheckCircle2, ClipboardCheck, FileText, HeartPulse, LineChart, MessageCircle, Mic2, ShieldCheck, Sparkles, Stethoscope, Users } from 'lucide-react';

const fadeUp = { hidden: { opacity: 0, y: 24 }, visible: { opacity: 1, y: 0 } };
const stagger = { hidden: {}, visible: { transition: { staggerChildren: 0.08 } } };

const nav = [['Platform', '#platform'], ['Workflow', '#workflow'], ['Pilot', '#pilot'], ['Scribe', '#scribe'], ['Trust', '#trust']];
const pillars = [
  ['For doctors', 'Voice-first Scribe captures the visit and creates structured documentation.', Stethoscope],
  ['For patients', 'LINE check-ins use buttons, text, and voice-friendly replies. No new app.', MessageCircle],
  ['For nurses', 'A daily exception queue shows who needs attention today.', Users],
  ['For leadership', 'Reports show check-ins, risk flags, nurse actions, and continuity.', BarChart3],
];
const workflow = [
  ['Capture', 'Doctor speaks. Hanna writes.', 'The consultation becomes a structured clinical note.', Mic2],
  ['Continue', 'The note becomes follow-up.', 'Hanna creates a follow-up plan and reaches patients through LINE.', ClipboardCheck],
  ['Detect', 'OneBrain watches for drift.', 'Vitals, adherence, symptoms, and silence become a risk signal.', Brain],
  ['Escalate', 'Nurses see who needs attention.', 'The command center prioritizes cases that need human review.', HeartPulse],
];
const includes = ['Hanna Scribe for clinical capture', 'Follow-up plan generation from notes', 'LINE patient check-ins and reminders', 'Voice-friendly patient responses', 'OneBrain risk scoring', 'Nurse command center', 'Weekly operational reports', '90-day outcome summary'];
const trust = [
  ['Supervised AI', 'Hanna supports licensed staff. Clinicians remain in control.', ShieldCheck],
  ['Exception management', 'Routine signals are organized so nurses can focus on high-need patients.', Activity],
  ['Outcome visibility', 'Reports make follow-up activity, actions, and continuity visible.', LineChart],
];

const HannaLanding: React.FC = () => {
  return (
    <main className="min-h-screen overflow-hidden bg-[#f5f7fb] text-slate-950">
      <Background />
      <nav className="fixed inset-x-0 top-0 z-50 border-b border-white/70 bg-white/75 backdrop-blur-2xl">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-5 py-4 lg:px-8">
          <a href="#top" className="flex items-center gap-3" aria-label="Hanna home">
            <img src="/hanna-logo.png" alt="Hanna" className="h-9 w-9 rounded-xl shadow-sm" />
            <div className="leading-tight"><p className="text-base font-semibold tracking-tight">Hanna</p><p className="text-xs font-medium text-slate-500">Care Intelligence</p></div>
          </a>
          <div className="hidden items-center gap-7 lg:flex">{nav.map(([label, href]) => <a key={label} href={href} className="text-sm font-medium text-slate-600 transition hover:text-slate-950">{label}</a>)}</div>
          <a href="mailto:hello@hanna.care?subject=Hanna%2090-Day%20Pilot" className="rounded-full bg-slate-950 px-5 py-2.5 text-sm font-semibold text-white shadow-lg shadow-slate-950/10 transition hover:-translate-y-0.5 hover:shadow-xl">Book pilot</a>
        </div>
      </nav>

      <section id="top" className="relative z-10 px-5 pb-20 pt-32 lg:px-8 lg:pb-28 lg:pt-40">
        <motion.div className="mx-auto max-w-7xl" initial="hidden" animate="visible" variants={stagger}>
          <div className="grid items-center gap-12 lg:grid-cols-[1.05fr_0.95fr]">
            <motion.div variants={fadeUp} transition={{ duration: 0.7, ease: 'easeOut' }}>
              <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-white/70 bg-white/70 px-4 py-2 text-sm font-medium text-slate-700 shadow-sm backdrop-blur-xl"><Sparkles className="h-4 w-4 text-emerald-500" />After-visit follow-up infrastructure for chronic care clinics</div>
              <h1 className="max-w-5xl text-5xl font-semibold tracking-[-0.055em] text-slate-950 sm:text-6xl lg:text-7xl">Know which patients need attention today.</h1>
              <p className="mt-7 max-w-2xl text-lg leading-8 text-slate-600 sm:text-xl">Hanna helps hospitals turn every chronic care visit into supervised follow-up through AI documentation, LINE check-ins, risk scoring, and nurse-led escalation.</p>
              <div className="mt-9 flex flex-col gap-3 sm:flex-row">
                <a href="mailto:hello@hanna.care?subject=Hanna%2090-Day%20Chronic%20Care%20Pilot" className="group inline-flex items-center justify-center gap-2 rounded-full bg-slate-950 px-7 py-4 text-base font-semibold text-white shadow-2xl shadow-slate-950/15 transition hover:-translate-y-1">Book a 90-day pilot <ArrowRight className="h-4 w-4 transition group-hover:translate-x-1" /></a>
                <a href="https://app.hanna.care" className="inline-flex items-center justify-center rounded-full border border-slate-200 bg-white/75 px-7 py-4 text-base font-semibold text-slate-900 shadow-sm backdrop-blur-xl transition hover:-translate-y-1 hover:bg-white">Try Hanna Scribe</a>
              </div>
              <div className="mt-10 grid max-w-2xl gap-3 sm:grid-cols-3">
                {['500 patients per clinic pilot', '<24h target action window', '90-day proof period'].map((item) => <div key={item} className="rounded-3xl border border-white/70 bg-white/75 p-5 text-sm font-semibold text-slate-700 shadow-sm backdrop-blur-xl">{item}</div>)}
              </div>
            </motion.div>
            <CommandCenter />
          </div>
        </motion.div>
      </section>

      <section id="platform" className="relative z-10 px-5 py-20 lg:px-8"><div className="mx-auto max-w-7xl"><SectionTitle eyebrow="The platform" title="One care loop, not another hospital app." body="Hanna connects documentation, follow-up, risk detection, nurse action, and outcome reporting into one workflow after the patient leaves the clinic." /><CardGrid items={pillars} /></div></section>
      <section id="workflow" className="relative z-10 px-5 py-20 lg:px-8"><Workflow /></section>
      <section id="pilot" className="relative z-10 px-5 py-20 lg:px-8"><Pilot /></section>
      <section id="scribe" className="relative z-10 px-5 py-20 lg:px-8"><ScribeSection /></section>
      <section id="trust" className="relative z-10 px-5 py-20 lg:px-8"><div className="mx-auto max-w-7xl"><SectionTitle eyebrow="Trust posture" title="Built to support care teams, not replace them." /><CardGrid items={trust} /></div></section>
      <FinalCta />
      <Footer />
    </main>
  );
};

function Background() { return <div className="pointer-events-none fixed inset-0 z-0"><div className="absolute -left-24 -top-28 h-[420px] w-[420px] rounded-full bg-cyan-200/40 blur-3xl" /><div className="absolute -right-28 top-[18%] h-[520px] w-[520px] rounded-full bg-blue-200/40 blur-3xl" /><div className="absolute bottom-[-15%] left-[25%] h-[460px] w-[460px] rounded-full bg-emerald-100/60 blur-3xl" /></div>; }
function CommandCenter() { return <motion.div variants={fadeUp} transition={{ duration: 0.8, ease: 'easeOut', delay: 0.1 }} className="relative"><div className="absolute inset-0 rotate-3 rounded-[2.5rem] bg-gradient-to-br from-cyan-200 to-emerald-200 blur-2xl" /><div className="relative rounded-[2.5rem] border border-white/70 bg-white/80 p-4 shadow-2xl shadow-slate-950/10 backdrop-blur-2xl"><div className="rounded-[2rem] bg-slate-950 p-5 text-white"><div className="mb-6 flex items-center justify-between"><div><p className="text-sm text-white/50">Nurse Command Center</p><p className="text-xl font-semibold tracking-tight">Today&apos;s attention queue</p></div><div className="rounded-full bg-emerald-400/15 px-3 py-1 text-xs font-semibold text-emerald-300">Live</div></div>{[['Somchai P.', 'Glucose rising, missed medication', 'Critical'], ['Malee K.', 'No check-in for 72 hours', 'High'], ['Anan S.', 'Dizziness reported by voice', 'Review']].map(([n, r, l]) => <div key={n} className="mb-3 rounded-2xl border border-white/10 bg-white/[0.08] p-4"><div className="flex items-center justify-between gap-4"><div><p className="font-semibold">{n}</p><p className="text-sm text-white/50">{r}</p></div><span className="rounded-full bg-white/10 px-3 py-1 text-xs font-semibold text-white/70">{l}</span></div></div>)}<div className="mt-6 rounded-2xl bg-white p-4 text-slate-950"><p className="text-sm font-medium text-slate-500">Care capacity signal</p><p className="mt-1 text-2xl font-semibold tracking-tight">AI organizes routine signals. Nurses handle exceptions.</p></div></div></div></motion.div>; }
function SectionTitle({ eyebrow, title, body }: { eyebrow: string; title: string; body?: string }) { return <motion.div className="mx-auto max-w-3xl text-center" initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.3 }} variants={fadeUp} transition={{ duration: 0.7 }}><p className="text-sm font-semibold uppercase tracking-[0.2em] text-emerald-600">{eyebrow}</p><h2 className="mt-4 text-4xl font-semibold tracking-[-0.04em] sm:text-5xl">{title}</h2>{body && <p className="mt-5 text-lg leading-8 text-slate-600">{body}</p>}</motion.div>; }
function CardGrid({ items }: { items: Array<[string, string, React.ElementType]> }) { return <motion.div className="mt-14 grid gap-5 md:grid-cols-2 lg:grid-cols-4" initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.2 }} variants={stagger}>{items.map(([title, body, Icon]) => <FeatureCard key={title} title={title} body={body} Icon={Icon} />)}</motion.div>; }
function FeatureCard({ title, body, Icon }: { title: string; body: string; Icon: React.ElementType }) { return <motion.div variants={fadeUp} transition={{ duration: 0.55 }} className="rounded-[2rem] border border-white/80 bg-white/75 p-6 shadow-sm backdrop-blur-xl transition hover:-translate-y-1 hover:shadow-xl hover:shadow-slate-950/5"><div className="mb-8 flex h-12 w-12 items-center justify-center rounded-2xl bg-slate-950 text-white"><Icon className="h-5 w-5" /></div><h3 className="text-xl font-semibold tracking-tight">{title}</h3><p className="mt-3 text-sm leading-6 text-slate-600">{body}</p></motion.div>; }
function Workflow() { return <div className="mx-auto max-w-7xl rounded-[2.5rem] bg-slate-950 px-6 py-16 text-white shadow-2xl shadow-slate-950/20 sm:px-10 lg:px-14"><div className="grid gap-12 lg:grid-cols-[0.75fr_1.25fr]"><div><p className="text-sm font-semibold uppercase tracking-[0.2em] text-emerald-300">Workflow</p><h2 className="mt-4 text-4xl font-semibold tracking-[-0.04em] sm:text-5xl">Capture. Continue. Escalate. Prove.</h2><p className="mt-5 text-lg leading-8 text-white/60">Voice-first where it removes friction. Dashboard-first where teams need control. Report-first where leadership needs proof.</p></div><div className="grid gap-4 md:grid-cols-2">{workflow.map(([e, t, b, Icon]) => <div key={String(t)} className="rounded-[1.75rem] border border-white/10 bg-white/[0.06] p-6"><Icon className="mb-5 h-9 w-9 rounded-2xl bg-white p-2 text-slate-950" /><p className="text-xs font-semibold uppercase tracking-[0.18em] text-emerald-300">{String(e)}</p><h3 className="mt-3 text-xl font-semibold tracking-tight">{String(t)}</h3><p className="mt-3 text-sm leading-6 text-white/60">{String(b)}</p></div>)}</div></div></div>; }
function Pilot() { return <div className="mx-auto grid max-w-7xl gap-8 lg:grid-cols-[0.95fr_1.05fr] lg:items-center"><div><p className="text-sm font-semibold uppercase tracking-[0.2em] text-emerald-600">The offer</p><h2 className="mt-4 text-4xl font-semibold tracking-[-0.04em] sm:text-5xl">Start with one clinic. Prove the loop in 90 days.</h2><p className="mt-5 text-lg leading-8 text-slate-600">A focused pilot for diabetes, hypertension, and NCD clinics that need more follow-up capacity without hiring a new care team.</p></div><div className="rounded-[2.25rem] border border-white/80 bg-white/80 p-7 shadow-2xl shadow-slate-950/10 backdrop-blur-xl"><div className="border-b border-slate-200 pb-6"><p className="text-sm font-semibold text-slate-500">Hanna 90-Day Chronic Care Follow-up Pilot</p><p className="mt-3 text-5xl font-semibold tracking-[-0.05em]">฿60,000</p><p className="mt-1 text-sm font-medium text-slate-500">per month, 3-month pilot. ฿180,000 total.</p></div><div className="mt-7 grid gap-3 sm:grid-cols-2">{includes.map((item) => <div key={item} className="flex items-start gap-3 rounded-2xl bg-slate-50 p-4"><CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-emerald-500" /><span className="text-sm font-medium leading-6 text-slate-700">{item}</span></div>)}</div><div className="mt-7 rounded-2xl bg-emerald-50 p-5 text-sm leading-6 text-emerald-950">After the pilot: ฿50,000/month per clinic annually, up to 500 monitored patients. Overage: ฿100/patient/month.</div></div></div>; }
function ScribeSection() { return <div className="mx-auto max-w-7xl rounded-[2.5rem] border border-white/80 bg-white/75 p-7 shadow-xl shadow-slate-950/5 backdrop-blur-xl lg:p-10"><div className="grid gap-10 lg:grid-cols-[0.85fr_1.15fr] lg:items-center"><div><div className="mb-6 flex h-14 w-14 items-center justify-center rounded-2xl bg-slate-950 text-white"><FileText className="h-6 w-6" /></div><p className="text-sm font-semibold uppercase tracking-[0.2em] text-emerald-600">Scribe remains the wedge</p><h2 className="mt-4 text-4xl font-semibold tracking-[-0.04em] sm:text-5xl">Start with documentation. End with care continuity.</h2><p className="mt-5 text-lg leading-8 text-slate-600">Hanna Scribe is the easiest way to enter the clinical workflow and create the data needed for supervised follow-up.</p><a href="https://app.hanna.care" className="mt-8 inline-flex items-center gap-2 rounded-full bg-slate-950 px-6 py-3 text-sm font-semibold text-white transition hover:-translate-y-0.5">Open Scribe <ArrowRight className="h-4 w-4" /></a></div><div className="grid gap-4 sm:grid-cols-2">{pillars.slice(0, 4).map(([title, body, Icon]) => <FeatureCard key={String(title)} title={String(title)} body={String(body)} Icon={Icon as React.ElementType} />)}</div></div></div>; }
function FinalCta() { return <section className="relative z-10 px-5 py-20 lg:px-8"><div className="mx-auto max-w-5xl text-center"><h2 className="text-4xl font-semibold tracking-[-0.045em] sm:text-6xl">More follow-up capacity. Less nurse burden.</h2><p className="mx-auto mt-6 max-w-2xl text-lg leading-8 text-slate-600">Hanna is built for hospitals that need daily patient visibility after the visit, without asking already-stretched care teams to do more manual work.</p><div className="mt-9 flex flex-col justify-center gap-3 sm:flex-row"><a href="mailto:hello@hanna.care?subject=Book%20Hanna%2090-Day%20Pilot" className="inline-flex items-center justify-center gap-2 rounded-full bg-slate-950 px-8 py-4 text-base font-semibold text-white shadow-2xl shadow-slate-950/15 transition hover:-translate-y-1">Book the pilot <ArrowRight className="h-4 w-4" /></a><a href="mailto:hello@hanna.care?subject=Request%20Hanna%20Demo" className="inline-flex items-center justify-center rounded-full border border-slate-200 bg-white/75 px-8 py-4 text-base font-semibold text-slate-900 shadow-sm backdrop-blur-xl transition hover:-translate-y-1 hover:bg-white">Request demo</a></div></div></section>; }
function Footer() { return <footer className="relative z-10 border-t border-slate-200/80 bg-white/70 px-5 py-10 backdrop-blur-xl lg:px-8"><div className="mx-auto flex max-w-7xl flex-col gap-5 text-sm text-slate-500 md:flex-row md:items-center md:justify-between"><div className="flex items-center gap-3"><img src="/hanna-logo.png" alt="Hanna" className="h-8 w-8 rounded-lg" /><span>© 2026 Hanna Care Intelligence</span></div><div className="flex gap-6"><a href="/privacy" className="transition hover:text-slate-950">Privacy</a><a href="/terms" className="transition hover:text-slate-950">Terms</a><a href="mailto:hello@hanna.care" className="transition hover:text-slate-950">hello@hanna.care</a></div></div></footer>; }

export default HannaLanding;
