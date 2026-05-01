import React from 'react';
import { motion } from 'framer-motion';
import {
  ArrowRight,
  BarChart3,
  CheckCircle2,
  ClipboardList,
  FileText,
  HeartPulse,
  LineChart,
  LockKeyhole,
  MessageCircle,
  Mic2,
  ShieldCheck,
  Sparkles,
  Stethoscope,
  Users,
} from 'lucide-react';

const fadeUp = {
  hidden: { opacity: 0, y: 22 },
  visible: { opacity: 1, y: 0 },
};

const stagger = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.075 } },
};

const smooth = { duration: 0.65, ease: [0.22, 1, 0.36, 1] };

const navItems = [
  ['Platform', '#platform'],
  ['How it works', '#how-it-works'],
  ['Pricing', '#pricing'],
  ['Trust', '#trust'],
];

const loop = [
  {
    icon: Mic2,
    title: 'Note',
    body: 'The visit becomes a clinician-reviewed note, not another admin task.',
  },
  {
    icon: ClipboardList,
    title: 'Care plan',
    body: 'The note becomes clear patient instructions and follow-up timing.',
  },
  {
    icon: MessageCircle,
    title: 'Follow-up',
    body: 'Patients continue through LINE check-ins they can actually answer.',
  },
  {
    icon: HeartPulse,
    title: 'Priority',
    body: 'Nurses see who may need attention today, instead of chasing everyone manually.',
  },
];

const audiences = [
  ['Doctors', 'Less documentation burden. The visit becomes a reviewed note and care plan.', Stethoscope],
  ['Patients', 'Clearer next steps after the visit through LINE, without downloading a new app.', MessageCircle],
  ['Nurses', 'A shorter list of what matters, focused on patients who may need attention.', Users],
  ['Leadership', 'Visibility between visits with reports on follow-up, escalation, and continuity.', BarChart3],
];

const pilotIncludes = [
  'Clinician-reviewed note workflow',
  'Care plan generation',
  'LINE patient follow-up handoff',
  'Basic nurse priority view',
  'Risk signal capture',
  'Monthly leadership report',
  'Onboarding and setup',
  '90-day outcome summary',
];

const annualIncludes = [
  'Department-level Care Intelligence system',
  'Scribe workflow for clinical visits',
  'Care plans and LINE follow-up',
  'Nurse priority queue',
  'Monthly reports for leadership',
  'Workflow support and configuration',
];

const enterpriseIncludes = [
  'Multi-department configuration',
  'Executive reporting',
  'Custom workflows and risk rules',
  'Integration roadmap',
  'Dedicated rollout support',
];

const trustItems = [
  ['Clinician reviewed', 'AI drafts. The care team reviews, edits, and confirms.', ShieldCheck],
  ['Audit-ready workflow', 'Notes, care plans, check-ins, and escalations can be tracked.', LockKeyhole],
  ['Exception-first design', 'The system reduces noise so staff can focus on patients who need attention.', LineChart],
];

const HannaLanding: React.FC = () => {
  return (
    <main className="min-h-screen overflow-hidden bg-[#f7f8fb] text-[#07111f] antialiased selection:bg-[#07111f] selection:text-white">
      <Background />
      <Header />
      <Hero />
      <Problem />
      <CareLoop />
      <Audience />
      <HowItWorks />
      <Pricing />
      <PlatformSystem />
      <Trust />
      <BookDemo />
      <Footer />
    </main>
  );
};

function Background() {
  return (
    <div className="pointer-events-none fixed inset-0 z-0 overflow-hidden">
      <div className="absolute -left-40 -top-40 h-[520px] w-[520px] rounded-full bg-cyan-200/40 blur-3xl" />
      <div className="absolute right-[-140px] top-24 h-[620px] w-[620px] rounded-full bg-blue-200/35 blur-3xl" />
      <div className="absolute bottom-[-220px] left-[28%] h-[520px] w-[520px] rounded-full bg-emerald-100/65 blur-3xl" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_0%,rgba(255,255,255,0.95),rgba(247,248,251,0.25)_36%,rgba(247,248,251,0)_70%)]" />
    </div>
  );
}

function Header() {
  return (
    <header className="fixed inset-x-0 top-0 z-50 border-b border-white/70 bg-white/70 backdrop-blur-2xl">
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-5 lg:px-8">
        <a href="#top" className="group flex items-center gap-3" aria-label="Hanna home">
          <img src="/hanna-logo.png" alt="Hanna" className="h-8 w-8 rounded-xl shadow-sm transition duration-300 group-hover:scale-105" />
          <div className="leading-tight">
            <p className="text-[15px] font-semibold tracking-[-0.02em]">Hanna</p>
            <p className="text-[11px] font-medium text-slate-500">Care Intelligence</p>
          </div>
        </a>

        <nav className="hidden items-center gap-7 lg:flex">
          {navItems.map(([label, href]) => (
            <a key={label} href={href} className="text-sm font-medium text-slate-500 transition hover:text-slate-950">
              {label}
            </a>
          ))}
        </nav>

        <a href="mailto:hello@hanna.care?subject=Hanna%20Care%20Intelligence%20Pilot" className="rounded-full bg-[#07111f] px-5 py-2.5 text-sm font-semibold text-white shadow-lg shadow-slate-950/10 transition hover:-translate-y-0.5 hover:shadow-xl">
          Book pilot
        </a>
      </div>
    </header>
  );
}

function Hero() {
  return (
    <section id="top" className="relative z-10 px-5 pb-20 pt-32 lg:px-8 lg:pb-28 lg:pt-40">
      <motion.div className="mx-auto max-w-7xl" initial="hidden" animate="visible" variants={stagger}>
        <div className="grid items-center gap-14 lg:grid-cols-[1.03fr_0.97fr]">
          <motion.div variants={fadeUp} transition={smooth}>
            <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-white/80 bg-white/75 px-4 py-2 text-sm font-medium text-slate-700 shadow-sm backdrop-blur-xl">
              <Sparkles className="h-4 w-4 text-emerald-500" />
              Hanna Care Intelligence
            </div>

            <h1 className="max-w-5xl text-5xl font-semibold leading-[0.95] tracking-[-0.06em] text-slate-950 sm:text-6xl lg:text-7xl xl:text-[5.6rem]">
              Turn every clinic visit into a care plan, patient follow-up, and a nurse priority list.
            </h1>

            <p className="mt-7 max-w-2xl text-lg leading-8 text-slate-600 sm:text-xl">
              Hanna helps chronic care teams document visits, continue care through LINE, detect patient risk, and know who needs attention today.
            </p>

            <div className="mt-9 flex flex-col gap-3 sm:flex-row">
              <a href="mailto:hello@hanna.care?subject=Hanna%2090-Day%20Care%20Intelligence%20Pilot" className="group inline-flex items-center justify-center gap-2 rounded-full bg-[#07111f] px-7 py-4 text-base font-semibold text-white shadow-2xl shadow-slate-950/15 transition hover:-translate-y-1">
                Book a 90-day pilot
                <ArrowRight className="h-4 w-4 transition group-hover:translate-x-1" />
              </a>
              <a href="#platform" className="inline-flex items-center justify-center rounded-full border border-slate-200 bg-white/75 px-7 py-4 text-base font-semibold text-slate-900 shadow-sm backdrop-blur-xl transition hover:-translate-y-1 hover:bg-white">
                See the care loop
              </a>
            </div>

            <p className="mt-5 text-sm font-medium text-slate-500">
              One annual care intelligence system. Scribe is only the front door.
            </p>
          </motion.div>

          <CommandCenter />
        </div>

        <motion.div variants={fadeUp} transition={smooth} className="mt-12 grid gap-3 sm:grid-cols-3">
          {[
            ['Visit', 'captured and documented'],
            ['Follow-up', 'continued through LINE'],
            ['Priority', 'nurse attention focused'],
          ].map(([value, label]) => (
            <div key={label} className="rounded-[1.75rem] border border-white/80 bg-white/75 p-6 shadow-sm backdrop-blur-xl">
              <p className="text-4xl font-semibold tracking-[-0.05em] text-slate-950">{value}</p>
              <p className="mt-2 text-sm font-semibold text-slate-500">{label}</p>
            </div>
          ))}
        </motion.div>
      </motion.div>
    </section>
  );
}

function CommandCenter() {
  const rows = [
    ['Critical', 'Somchai P.', 'Missed medication + high glucose', 'bg-red-400'],
    ['High', 'Malee K.', 'No response for 72 hours', 'bg-amber-300'],
    ['Review', 'Anan S.', 'Voice reply: dizziness', 'bg-cyan-300'],
  ];

  return (
    <motion.div variants={fadeUp} transition={{ ...smooth, delay: 0.08 }} className="relative">
      <div className="absolute inset-0 rotate-3 rounded-[2.75rem] bg-gradient-to-br from-cyan-200 to-emerald-200 blur-2xl" />
      <div className="relative rounded-[2.75rem] border border-white/75 bg-white/80 p-4 shadow-2xl shadow-slate-950/10 backdrop-blur-2xl">
        <div className="overflow-hidden rounded-[2.15rem] bg-[#07111f] p-5 text-white">
          <div className="mb-6 flex items-center justify-between gap-4">
            <div>
              <p className="text-sm text-white/45">Nurse Command Center</p>
              <p className="text-2xl font-semibold tracking-[-0.04em]">Who needs attention today?</p>
            </div>
            <span className="rounded-full bg-emerald-400/15 px-3 py-1 text-xs font-semibold text-emerald-300">Care loop</span>
          </div>

          <div className="space-y-3">
            {rows.map(([level, name, reason, dot]) => (
              <div key={name} className="group rounded-2xl border border-white/10 bg-white/[0.08] p-4 transition hover:bg-white/[0.12]">
                <div className="flex items-center justify-between gap-4">
                  <div className="flex items-center gap-3">
                    <span className={`h-2.5 w-2.5 rounded-full ${dot}`} />
                    <div>
                      <p className="font-semibold">{name}</p>
                      <p className="text-sm text-white/50">{reason}</p>
                    </div>
                  </div>
                  <span className="rounded-full bg-white/10 px-3 py-1 text-xs font-semibold text-white/70">{level}</span>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-5 rounded-2xl bg-white p-4 text-slate-950">
            <p className="text-sm font-medium text-slate-500">The buyer outcome</p>
            <p className="mt-1 text-2xl font-semibold tracking-[-0.045em]">Routine care is automated. Exceptions reach the team faster.</p>
          </div>
        </div>
      </div>
    </motion.div>
  );
}

function Problem() {
  return (
    <Section id="problem">
      <div className="grid gap-12 lg:grid-cols-[0.85fr_1.15fr] lg:items-start">
        <SectionIntro eyebrow="The problem" title="The visit ends. The risk does not." />
        <div className="space-y-6 text-xl leading-8 text-slate-600">
          <p>After a chronic care visit, patients go home with instructions, medication changes, and symptoms to monitor.</p>
          <p>But follow-up is often manual. Nurses call when they can. Patients forget. Symptoms change quietly. Some patients return only when the problem is already worse.</p>
          <p className="font-medium text-slate-950">Hanna gives the care team visibility after the visit, without asking nurses to chase every patient manually.</p>
        </div>
      </div>
    </Section>
  );
}

function CareLoop() {
  return (
    <Section id="platform">
      <div className="mx-auto max-w-3xl text-center">
        <p className="text-sm font-semibold uppercase tracking-[0.2em] text-emerald-600">The product</p>
        <h2 className="mt-4 text-4xl font-semibold tracking-[-0.05em] text-slate-950 sm:text-6xl">One system from visit to nurse action.</h2>
        <p className="mt-5 text-lg leading-8 text-slate-600">Documentation is the entry point. The value is what happens after: care plans, follow-up, risk signals, nurse priority, and outcome reporting.</p>
      </div>

      <motion.div className="mt-14 grid gap-5 md:grid-cols-2 lg:grid-cols-4" initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.2 }} variants={stagger}>
        {loop.map((item, index) => {
          const Icon = item.icon;
          return (
            <motion.div key={item.title} variants={fadeUp} transition={smooth} className="group rounded-[2rem] border border-white/80 bg-white/78 p-6 shadow-sm backdrop-blur-xl transition duration-300 hover:-translate-y-1 hover:shadow-xl hover:shadow-slate-950/5">
              <div className="mb-8 flex items-center justify-between">
                <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-slate-950 text-white"><Icon className="h-5 w-5" /></div>
                <span className="text-sm font-semibold text-slate-300">0{index + 1}</span>
              </div>
              <h3 className="text-2xl font-semibold tracking-[-0.04em]">{item.title}</h3>
              <p className="mt-3 text-sm leading-6 text-slate-600">{item.body}</p>
            </motion.div>
          );
        })}
      </motion.div>
    </Section>
  );
}

function Audience() {
  return (
    <Section id="audience">
      <div className="grid gap-12 lg:grid-cols-[0.8fr_1.2fr]">
        <SectionIntro eyebrow="Built for the care team" title="Designed around the people already delivering care." />
        <div className="grid gap-4 sm:grid-cols-2">
          {audiences.map(([title, body, Icon]) => (
            <div key={String(title)} className="rounded-[1.75rem] border border-white/80 bg-white/75 p-6 shadow-sm backdrop-blur-xl">
              {React.createElement(Icon as React.ElementType, { className: 'h-6 w-6 text-emerald-600' })}
              <h3 className="mt-8 text-xl font-semibold tracking-[-0.035em]">{title}</h3>
              <p className="mt-3 text-sm leading-6 text-slate-600">{body}</p>
            </div>
          ))}
        </div>
      </div>
    </Section>
  );
}

function HowItWorks() {
  const steps = [
    ['Capture the visit', 'The clinician speaks naturally. Hanna drafts a structured clinical note for review.'],
    ['Generate the care plan', 'Hanna turns the note into patient-friendly instructions, reminders, and follow-up timing.'],
    ['Follow up through LINE', 'Patients receive check-ins through a familiar channel using buttons, short text, or voice.'],
    ['Detect patient risk', 'Symptoms, silence, abnormal values, and missed medication become risk signals.'],
    ['Prioritize nurse action', 'Nurses see the patients who may need attention today.'],
    ['Report continuity', 'Leadership sees follow-up activity, response rates, escalations, and outcomes.'],
  ];

  return (
    <section id="how-it-works" className="relative z-10 px-5 py-20 lg:px-8">
      <div className="mx-auto max-w-7xl rounded-[2.75rem] bg-[#07111f] px-6 py-16 text-white shadow-2xl shadow-slate-950/20 sm:px-10 lg:px-14">
        <div className="grid gap-12 lg:grid-cols-[0.8fr_1.2fr]">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-emerald-300">How it works</p>
            <h2 className="mt-4 text-4xl font-semibold tracking-[-0.05em] sm:text-6xl">From clinical note to continuous care.</h2>
            <p className="mt-5 text-lg leading-8 text-white/60">Hanna connects the work that usually lives in separate places: documentation, care planning, patient follow-up, risk detection, nurse action, and reporting.</p>
          </div>
          <div className="grid gap-4 sm:grid-cols-2">
            {steps.map(([title, body], index) => (
              <div key={title} className="rounded-[1.75rem] border border-white/10 bg-white/[0.06] p-5 transition hover:bg-white/[0.09]">
                <p className="text-xs font-semibold uppercase tracking-[0.18em] text-emerald-300">0{index + 1}</p>
                <h3 className="mt-4 text-xl font-semibold tracking-[-0.035em]">{title}</h3>
                <p className="mt-3 text-sm leading-6 text-white/60">{body}</p>
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
      <div className="mx-auto max-w-3xl text-center">
        <p className="text-sm font-semibold uppercase tracking-[0.2em] text-emerald-600">Packaging</p>
        <h2 className="mt-4 text-4xl font-semibold tracking-[-0.05em] text-slate-950 sm:text-6xl">Start with a pilot. Continue as your care intelligence system.</h2>
        <p className="mt-5 text-lg leading-8 text-slate-600">Hanna is sold as Care Intelligence for a department or chronic care program, not as a standalone scribe tool.</p>
      </div>

      <div className="mt-12 grid gap-5 lg:grid-cols-3">
        <PricingCard eyebrow="90-day proof program" title="Hanna Pilot" price="฿60,000" cadence="per month for 90 days" body="For one clinic, department, or chronic-care program to prove the care loop." items={pilotIncludes} cta="Book pilot" href="mailto:hello@hanna.care?subject=Hanna%2090-Day%20Care%20Intelligence%20Pilot" />
        <PricingCard featured eyebrow="Annual department system" title="Hanna Care Intelligence" price="฿85,000" cadence="per month, billed annually" body="The core annual care intelligence package for one department or chronic-care program." items={annualIncludes} cta="Discuss annual plan" href="mailto:hello@hanna.care?subject=Hanna%20Care%20Intelligence%20Annual" />
        <PricingCard eyebrow="Multi-site / payer" title="Hanna Enterprise" price="From ฿250,000" cadence="per month, annual only" body="For hospital groups, multi-department rollout, or insurer programs." items={enterpriseIncludes} cta="Talk enterprise" href="mailto:hello@hanna.care?subject=Hanna%20Enterprise" />
      </div>
    </Section>
  );
}

function PricingCard({ eyebrow, title, price, cadence, body, items, cta, href, featured = false }: { eyebrow: string; title: string; price: string; cadence: string; body: string; items: string[]; cta: string; href: string; featured?: boolean }) {
  return (
    <div className={`rounded-[2.35rem] border p-7 shadow-xl backdrop-blur-xl ${featured ? 'border-slate-950 bg-[#07111f] text-white shadow-slate-950/20' : 'border-white/80 bg-white/85 text-slate-950 shadow-slate-950/7'}`}>
      <div className="border-b border-current/10 pb-6">
        <p className={`text-sm font-semibold ${featured ? 'text-emerald-300' : 'text-emerald-600'}`}>{eyebrow}</p>
        <h3 className="mt-2 text-2xl font-semibold tracking-[-0.04em]">{title}</h3>
        <p className="mt-5 text-5xl font-semibold tracking-[-0.055em]">{price}</p>
        <p className={`mt-1 text-sm font-medium ${featured ? 'text-white/55' : 'text-slate-500'}`}>{cadence}</p>
        <p className={`mt-5 text-sm leading-6 ${featured ? 'text-white/65' : 'text-slate-600'}`}>{body}</p>
      </div>
      <div className="mt-7 grid gap-3">
        {items.map((item) => (
          <div key={item} className={`flex items-start gap-3 rounded-2xl p-4 ${featured ? 'bg-white/[0.07]' : 'bg-slate-50'}`}>
            <CheckCircle2 className={`mt-0.5 h-5 w-5 shrink-0 ${featured ? 'text-emerald-300' : 'text-emerald-500'}`} />
            <span className={`text-sm font-medium leading-6 ${featured ? 'text-white/78' : 'text-slate-700'}`}>{item}</span>
          </div>
        ))}
      </div>
      <a href={href} className={`mt-7 inline-flex w-full items-center justify-center gap-2 rounded-full px-6 py-4 text-sm font-semibold transition hover:-translate-y-0.5 ${featured ? 'bg-white text-slate-950' : 'bg-slate-950 text-white'}`}>
        {cta}<ArrowRight className="h-4 w-4" />
      </a>
    </div>
  );
}

function PlatformSystem() {
  return (
    <Section id="system">
      <div className="rounded-[2.75rem] border border-white/80 bg-white/75 p-7 shadow-xl shadow-slate-950/5 backdrop-blur-xl lg:p-10">
        <div className="grid gap-10 lg:grid-cols-[0.82fr_1.18fr] lg:items-center">
          <div>
            <div className="mb-6 flex h-14 w-14 items-center justify-center rounded-2xl bg-slate-950 text-white"><FileText className="h-6 w-6" /></div>
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-emerald-600">One platform</p>
            <h2 className="mt-4 text-4xl font-semibold tracking-[-0.05em] sm:text-6xl">Scribe is the front door. Care Intelligence is the product.</h2>
            <p className="mt-5 text-lg leading-8 text-slate-600">Hanna begins with the visit, but the business value is the loop after it: care plans, LINE follow-up, risk signals, nurse priority, and reports for leadership.</p>
          </div>

          <div className="grid gap-4 sm:grid-cols-2">
            {[
              ['Visit to note', 'Record the visit and prepare a clinician-reviewed note.'],
              ['Note to care plan', 'Turn the visit into patient instructions and follow-up timing.'],
              ['Care plan to signal', 'Collect replies, silence, symptoms, and adherence signals.'],
              ['Signal to action', 'Prioritize who nurses should review today.'],
            ].map(([title, body]) => (
              <div key={title} className="rounded-[1.75rem] bg-slate-50 p-6">
                <h3 className="text-xl font-semibold tracking-[-0.035em]">{title}</h3>
                <p className="mt-3 text-sm leading-6 text-slate-600">{body}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </Section>
  );
}

function Trust() {
  return (
    <Section id="trust">
      <div className="mx-auto max-w-3xl text-center">
        <p className="text-sm font-semibold uppercase tracking-[0.2em] text-emerald-600">Trust posture</p>
        <h2 className="mt-4 text-4xl font-semibold tracking-[-0.05em] text-slate-950 sm:text-6xl">Supervised AI, not autonomous care.</h2>
        <p className="mt-5 text-lg leading-8 text-slate-600">Hanna does not replace doctors or nurses. Hanna helps care teams document, organize, follow up, prioritize, and report.</p>
      </div>
      <div className="mt-14 grid gap-5 md:grid-cols-3">
        {trustItems.map(([title, body, Icon]) => (
          <div key={String(title)} className="rounded-[2rem] border border-white/80 bg-white/75 p-7 shadow-sm backdrop-blur-xl">
            {React.createElement(Icon as React.ElementType, { className: 'h-7 w-7 text-emerald-600' })}
            <h3 className="mt-8 text-xl font-semibold tracking-[-0.035em]">{title}</h3>
            <p className="mt-3 text-sm leading-6 text-slate-600">{body}</p>
          </div>
        ))}
      </div>
    </Section>
  );
}

function BookDemo() {
  return (
    <section id="book-demo" className="relative z-10 px-5 py-20 lg:px-8">
      <div className="mx-auto max-w-7xl rounded-[2.75rem] bg-[#07111f] p-8 text-white shadow-2xl shadow-slate-950/20 lg:p-12">
        <div className="grid gap-10 lg:grid-cols-[1fr_0.85fr] lg:items-start">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-emerald-300">Book pilot</p>
            <h2 className="mt-4 text-4xl font-semibold tracking-[-0.05em] sm:text-6xl">Start with one clinic. Prove the loop in 90 days.</h2>
            <p className="mt-5 max-w-2xl text-lg leading-8 text-white/62">We usually recommend starting with one chronic care group and one measurable follow-up problem. Tell us where care disappears after the visit.</p>
            <div className="mt-8 grid gap-3 sm:grid-cols-2">
              {['Chronic care clinic', 'Existing follow-up gap', 'Nurse capacity pressure', 'Need for better reporting'].map((item) => (
                <div key={item} className="rounded-2xl border border-white/10 bg-white/[0.06] p-4 text-sm font-semibold text-white/75">{item}</div>
              ))}
            </div>
          </div>

          <div className="rounded-[2rem] bg-white p-6 text-slate-950">
            <p className="text-sm font-semibold text-slate-500">Pilot request</p>
            <div className="mt-5 grid gap-3">
              {['Name', 'Organization', 'Role', 'Email', 'Clinic type', 'Main follow-up problem'].map((field) => (
                <div key={field} className="rounded-2xl border border-slate-200 bg-slate-50 px-4 py-3 text-sm font-medium text-slate-500">{field}</div>
              ))}
            </div>
            <a href="mailto:hello@hanna.care?subject=Hanna%20Care%20Intelligence%20Pilot%20Discussion" className="mt-5 inline-flex w-full items-center justify-center gap-2 rounded-full bg-slate-950 px-6 py-4 text-sm font-semibold text-white transition hover:-translate-y-0.5">
              Request pilot discussion<ArrowRight className="h-4 w-4" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

function Section({ id, children }: { id: string; children: React.ReactNode }) {
  return (
    <section id={id} className="relative z-10 px-5 py-20 lg:px-8">
      <motion.div className="mx-auto max-w-7xl" initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.18 }} variants={fadeUp} transition={smooth}>
        {children}
      </motion.div>
    </section>
  );
}

function SectionIntro({ eyebrow, title }: { eyebrow: string; title: string }) {
  return (
    <div>
      <p className="text-sm font-semibold uppercase tracking-[0.2em] text-emerald-600">{eyebrow}</p>
      <h2 className="mt-4 text-4xl font-semibold tracking-[-0.05em] sm:text-6xl">{title}</h2>
    </div>
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
        <div className="flex gap-6">
          <a href="/privacy" className="transition hover:text-slate-950">Privacy</a>
          <a href="/terms" className="transition hover:text-slate-950">Terms</a>
          <a href="mailto:hello@hanna.care" className="transition hover:text-slate-950">hello@hanna.care</a>
        </div>
      </div>
    </footer>
  );
}

export default HannaLanding;
