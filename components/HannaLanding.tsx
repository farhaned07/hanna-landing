import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';

const fadeUp = {
  hidden: { opacity: 0, y: 18 },
  visible: { opacity: 1, y: 0 },
};

const transition = { duration: 0.55, ease: [0.22, 1, 0.36, 1] };

const nav = [
  ['Platform', '#platform'],
  ['Workflow', '#workflow'],
  ['Pilot', '#pilot'],
  ['Trust', '#trust'],
];

const workflow = [
  ['01', 'Capture', 'Doctor speaks. Hanna turns the visit into a structured clinical note.'],
  ['02', 'Continue', 'The note becomes a simple LINE follow-up plan for the patient.'],
  ['03', 'Prioritize', 'Signals, silence, symptoms, and adherence become a daily risk queue.'],
  ['04', 'Escalate', 'Nurses act only where human care is needed.'],
];

const audience = [
  ['Doctors', 'Voice-first documentation that reduces charting time.'],
  ['Patients', 'LINE-based check-ins with text, buttons, or voice.'],
  ['Nurses', 'A daily list of patients who need attention.'],
  ['Leadership', 'Reports that make follow-up visible.'],
];

const pilotItems = [
  'AI clinical documentation',
  'Follow-up plan generation',
  'LINE patient check-ins',
  'OneBrain risk prioritization',
  'Nurse command center',
  'Weekly operating report',
  '90-day outcome summary',
];

const HannaLanding: React.FC = () => {
  return (
    <main className="min-h-screen bg-[#fbfbf8] text-[#0a0a0a] selection:bg-black selection:text-white">
      <Header />
      <Hero />
      <Platform />
      <Workflow />
      <Pilot />
      <Trust />
      <FinalCta />
      <Footer />
    </main>
  );
};

function Header() {
  return (
    <header className="fixed inset-x-0 top-0 z-50 border-b border-black/[0.06] bg-[#fbfbf8]/85 backdrop-blur-xl">
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-5 lg:px-8">
        <a href="#top" className="group flex items-center gap-3" aria-label="Hanna home">
          <img src="/hanna-logo.png" alt="Hanna" className="h-7 w-7 rounded-md transition duration-300 group-hover:scale-[1.04]" />
          <span className="text-[15px] font-medium tracking-[-0.02em]">Hanna</span>
        </a>
        <nav className="hidden items-center gap-8 md:flex">
          {nav.map(([label, href]) => (
            <a key={label} href={href} className="text-[13px] text-black/55 transition-colors duration-200 hover:text-black">
              {label}
            </a>
          ))}
        </nav>
        <a href="mailto:hello@hanna.care?subject=Hanna%2090-Day%20Pilot" className="rounded-full border border-black px-4 py-2 text-[13px] font-medium transition duration-200 hover:bg-black hover:text-white">
          Book pilot
        </a>
      </div>
    </header>
  );
}

function Hero() {
  return (
    <section id="top" className="px-5 pt-32 lg:px-8 lg:pt-40">
      <motion.div className="mx-auto max-w-7xl" initial="hidden" animate="visible" transition={{ staggerChildren: 0.08 }}>
        <motion.p variants={fadeUp} transition={transition} className="text-[13px] font-medium uppercase tracking-[0.22em] text-black/45">
          Care intelligence for chronic care teams
        </motion.p>
        <motion.h1 variants={fadeUp} transition={transition} className="mt-8 max-w-6xl text-[clamp(3.5rem,10vw,10.5rem)] font-medium leading-[0.88] tracking-[-0.075em]">
          Know who needs care today.
        </motion.h1>
        <motion.div variants={fadeUp} transition={transition} className="mt-10 grid gap-8 border-t border-black/[0.08] pt-8 lg:grid-cols-[0.65fr_0.35fr]">
          <p className="max-w-3xl text-xl leading-[1.45] tracking-[-0.025em] text-black/72 lg:text-2xl">
            Hanna turns every chronic care visit into supervised follow-up through AI documentation, LINE check-ins, nurse prioritization, and outcome reporting.
          </p>
          <div className="flex flex-col items-start gap-3 lg:items-end">
            <a href="mailto:hello@hanna.care?subject=Hanna%2090-Day%20Chronic%20Care%20Pilot" className="group inline-flex items-center gap-2 rounded-full bg-black px-5 py-3 text-sm font-medium text-white transition duration-200 hover:-translate-y-0.5">
              Book a 90-day pilot
              <ArrowRight className="h-4 w-4 transition-transform duration-200 group-hover:translate-x-0.5" />
            </a>
            <a href="https://app.hanna.care" className="text-sm text-black/55 underline-offset-4 transition-colors duration-200 hover:text-black hover:underline">
              Try Hanna Scribe
            </a>
          </div>
        </motion.div>
      </motion.div>
    </section>
  );
}

function Platform() {
  return (
    <section id="platform" className="px-5 py-28 lg:px-8 lg:py-36">
      <div className="mx-auto max-w-7xl border-t border-black/[0.08] pt-12">
        <SectionKicker text="Platform" />
        <div className="mt-8 grid gap-12 lg:grid-cols-[0.45fr_0.55fr]">
          <h2 className="text-4xl font-medium leading-[1.02] tracking-[-0.055em] lg:text-7xl">
            One loop after the visit.
          </h2>
          <div className="space-y-10">
            <p className="max-w-2xl text-xl leading-[1.5] tracking-[-0.025em] text-black/68">
              Most care software adds another screen. Hanna removes ambiguity. It captures the visit, follows the patient, detects risk, and shows nurses what needs action.
            </p>
            <div className="grid border-t border-black/[0.08] sm:grid-cols-2">
              {audience.map(([title, body]) => (
                <MinimalCard key={title} title={title} body={body} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function Workflow() {
  return (
    <section id="workflow" className="bg-black px-5 py-28 text-white lg:px-8 lg:py-36">
      <div className="mx-auto max-w-7xl">
        <SectionKicker text="Workflow" inverted />
        <div className="mt-8 grid gap-12 lg:grid-cols-[0.45fr_0.55fr]">
          <h2 className="text-4xl font-medium leading-[1.02] tracking-[-0.055em] lg:text-7xl">
            Capture. Continue. Prioritize.
          </h2>
          <div className="border-t border-white/15">
            {workflow.map(([number, title, body]) => (
              <div key={title} className="group grid gap-4 border-b border-white/15 py-6 transition duration-300 hover:border-white/35 sm:grid-cols-[80px_1fr]">
                <span className="text-sm text-white/35 transition-colors duration-300 group-hover:text-white">{number}</span>
                <div>
                  <h3 className="text-2xl font-medium tracking-[-0.035em]">{title}</h3>
                  <p className="mt-2 max-w-xl text-base leading-7 text-white/58">{body}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

function Pilot() {
  return (
    <section id="pilot" className="px-5 py-28 lg:px-8 lg:py-36">
      <div className="mx-auto max-w-7xl border-t border-black/[0.08] pt-12">
        <SectionKicker text="Pilot" />
        <div className="mt-8 grid gap-16 lg:grid-cols-[0.55fr_0.45fr]">
          <div>
            <h2 className="max-w-4xl text-4xl font-medium leading-[1.02] tracking-[-0.055em] lg:text-7xl">
              Start with one clinic. Prove it in 90 days.
            </h2>
            <p className="mt-8 max-w-2xl text-xl leading-[1.5] tracking-[-0.025em] text-black/68">
              A focused chronic care follow-up pilot for diabetes, hypertension, or NCD clinics that need more patient visibility without adding nurse headcount.
            </p>
          </div>
          <div className="border border-black p-8 lg:p-10">
            <p className="text-sm uppercase tracking-[0.18em] text-black/45">90-day pilot</p>
            <p className="mt-6 text-5xl font-medium tracking-[-0.06em]">฿60,000</p>
            <p className="mt-2 text-sm text-black/55">per month. ฿180,000 total.</p>
            <div className="mt-8 border-t border-black/[0.08] pt-6">
              {pilotItems.map((item) => (
                <div key={item} className="flex items-center justify-between border-b border-black/[0.08] py-3 text-sm">
                  <span>{item}</span>
                  <span className="text-black/35">included</span>
                </div>
              ))}
            </div>
            <p className="mt-6 text-sm leading-6 text-black/58">
              After the pilot: ฿50,000/month per clinic annually, up to 500 monitored patients. Overage: ฿100/patient/month.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

function Trust() {
  return (
    <section id="trust" className="px-5 py-28 lg:px-8 lg:py-36">
      <div className="mx-auto max-w-7xl border-t border-black/[0.08] pt-12">
        <SectionKicker text="Trust" />
        <div className="mt-8 grid gap-12 lg:grid-cols-[0.45fr_0.55fr]">
          <h2 className="text-4xl font-medium leading-[1.02] tracking-[-0.055em] lg:text-7xl">
            Supervised by design.
          </h2>
          <div className="space-y-8 text-xl leading-[1.5] tracking-[-0.025em] text-black/68">
            <p>
              Hanna supports licensed staff. It does not diagnose, prescribe, or replace clinical judgment.
            </p>
            <p>
              The product is built around review, escalation, auditability, and clear operational ownership.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

function FinalCta() {
  return (
    <section className="px-5 py-28 lg:px-8 lg:py-36">
      <div className="mx-auto max-w-7xl border-t border-black pt-12">
        <div className="grid gap-10 lg:grid-cols-[0.7fr_0.3fr] lg:items-end">
          <h2 className="text-5xl font-medium leading-[0.95] tracking-[-0.065em] lg:text-8xl">
            More follow-up. Less noise.
          </h2>
          <div className="space-y-5 lg:text-right">
            <p className="text-base leading-7 text-black/60">
              Build daily visibility between clinic visits.
            </p>
            <a href="mailto:hello@hanna.care?subject=Book%20Hanna%2090-Day%20Pilot" className="group inline-flex items-center gap-2 rounded-full bg-black px-5 py-3 text-sm font-medium text-white transition duration-200 hover:-translate-y-0.5">
              Book the pilot
              <ArrowRight className="h-4 w-4 transition-transform duration-200 group-hover:translate-x-0.5" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

function SectionKicker({ text, inverted = false }: { text: string; inverted?: boolean }) {
  return <p className={`text-[12px] font-medium uppercase tracking-[0.22em] ${inverted ? 'text-white/40' : 'text-black/40'}`}>{text}</p>;
}

function MinimalCard({ title, body }: { title: string; body: string }) {
  return (
    <div className="group border-b border-black/[0.08] py-6 transition duration-300 hover:border-black sm:pr-8 sm:[&:nth-child(odd)]:border-r sm:[&:nth-child(even)]:pl-8">
      <h3 className="text-2xl font-medium tracking-[-0.035em]">{title}</h3>
      <p className="mt-3 max-w-sm text-sm leading-6 text-black/55 transition-colors duration-300 group-hover:text-black/70">{body}</p>
    </div>
  );
}

function Footer() {
  return (
    <footer className="border-t border-black/[0.08] px-5 py-8 lg:px-8">
      <div className="mx-auto flex max-w-7xl flex-col gap-4 text-[13px] text-black/45 md:flex-row md:items-center md:justify-between">
        <span>© 2026 Hanna Care Intelligence</span>
        <div className="flex gap-6">
          <a href="/privacy" className="transition-colors duration-200 hover:text-black">Privacy</a>
          <a href="/terms" className="transition-colors duration-200 hover:text-black">Terms</a>
          <a href="mailto:hello@hanna.care" className="transition-colors duration-200 hover:text-black">hello@hanna.care</a>
        </div>
      </div>
    </footer>
  );
}

export default HannaLanding;
