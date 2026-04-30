# Hanna Care Intelligence Productization Sprint

## Sprint goal

Productize Hanna into an enterprise-ready B2B care intelligence ecosystem that can be sold next month.

The website now sells the promise. This sprint makes the product match that promise.

## Final product category

Hanna Care Intelligence

## Final product promise

Turn every visit into a care plan, follow-up, and nurse priority list.

## Selling wedge

AI documentation that does not stop at notes.

Doctor speaks -> Hanna writes the note -> Hanna drafts the care plan -> patient follow-up continues through LINE -> nurses see who needs attention today -> leadership gets proof.

---

# Enterprise ecosystem map

## 1. Public website

Repo: `farhaned07/hanna-landing`

Domain: `hanna.care`

Job:
- Explain the category.
- Sell the 90-day pilot.
- Route interested buyers into a pilot discussion.

Current status:
- Launch-ready public website has been implemented.
- Mobile hero was tightened after visual review.

Required before sales:
- Replace mailto CTA with real lead capture or calendar booking.
- Add analytics tracking.
- Add hospital-pilot qualification fields.
- Add Thai-language alternate copy later if targeting Thai hospital executives directly.

## 2. Hanna Scribe

Repo: `farhaned07/hanna-scribe`

Domain: `app.hanna.care`

Job:
- Doctor-facing clinical capture.
- Transcription.
- AI clinical note generation.
- Clinician review and finalization.
- Care plan generation.
- Follow-up enrollment.

Productization decision:
Scribe is not the whole product. It is the wedge into the care loop.

Must-have functionality for next-month sales:
- Login/demo access.
- Create patient/session.
- Record or upload audio.
- Transcribe.
- Generate note.
- Review/edit/finalize note.
- Generate patient-friendly care plan from finalized note.
- Button: `Send to follow-up`.
- Button: `View in nurse queue` or `Enroll patient`.

Missing or needs confirmation:
- The standalone repo appears lightweight and needs deployment verification.
- Backend already exposes Scribe API surfaces under `/api/scribe`.
- The frontend must be wired to the correct backend URL and production env.

## 3. Care Plan engine

Repo owner: backend layer, likely `farhaned07/hanna-backend`

Job:
- Convert clinician-reviewed note into a structured care plan.
- Make it patient-friendly.
- Define follow-up questions and schedule.
- Define nurse escalation rules.

Care plan schema:
- patient_id
- session_id
- note_id
- diagnosis_context
- medications_or_adherence_items
- patient_instructions
- symptoms_to_watch
- check_in_questions
- check_in_schedule
- escalation_rules
- created_by_clinician_id
- clinician_review_status
- followup_status

Must-have functionality:
- Generate care plan from note.
- Clinician can edit plan.
- Clinician can approve plan.
- Approved plan can enroll patient into LINE follow-up.

Sales demo minimum:
- Even if automated plan generation is partial, show the workflow cleanly: note -> care plan draft -> approve -> follow-up.

## 4. LINE patient follow-up

Repo: `farhaned07/hanna-line-bot`

Domain: `line.hanna.care` or generated webhook URL

Job:
- Patient check-ins.
- Patient replies through LINE.
- Voice-friendly replies if available.
- Escalation signal creation.

Current observation:
- The LINE bot package is large and overlaps heavily with backend packages.
- It currently includes scripts for landing and scribe builds, which should not belong inside the line bot long-term.

Must-have functionality for next-month sales:
- Patient enrollment by phone/LINE ID.
- Scheduled check-in from care plan.
- Store patient reply.
- Calculate basic risk signal.
- Trigger nurse queue item.
- Handle no-response/silence as a signal.

Productization decision:
The LINE bot should become a thin patient-channel service. The intelligence and persistence should live in backend.

## 5. Nurse dashboard / Command Center

Repos found:
- `farhaned07/hanna-dashboard`
- `farhaned07/hanna-nurse-dashboard`

Domain target: `nurse.hanna.care`

Job:
- Show who needs attention today.
- Let nurses review patient context.
- Let nurses resolve, escalate, or mark action taken.

Current observation:
- There are duplicate dashboard repos.
- `hanna-dashboard` package name is `hanna-nurse-dashboard`.
- `hanna-nurse-dashboard` also exists separately and uses newer React/Tailwind versions.

Productization decision:
Choose ONE dashboard repo as canonical. Recommended: `hanna-nurse-dashboard` if it is the newer command-center implementation. Archive or demote the duplicate after audit.

Must-have functionality:
- Login or protected access.
- Today priority queue.
- Risk severity: critical / high / review / stable.
- Patient summary.
- Last check-in response.
- Care plan summary.
- Actions: call patient, mark reviewed, escalate, resolve.
- Simple report: actions completed today, open risks, no-response patients.

Sales demo minimum:
- Seeded demo data is acceptable if clearly demo-only.
- The visual must match the website promise: calm queue, not cluttered admin panel.

## 6. Backend / API

Repo: `farhaned07/hanna-backend`

Domain target: `api.hanna.care`

Job:
- Shared API.
- Auth.
- Scribe routes.
- Follow-up routes.
- Nurse routes.
- Analytics.
- Reports.
- Webhooks.
- Risk scoring.

Current observation:
- Backend already exposes routes for admin, auth, nurse, analytics, superadmin, patient, scribe, followup, webhooks, voice, and reports.
- Backend currently also serves Scribe and dashboard builds from `/scribe` and `/dashboard`, which conflicts with the separated Vercel product architecture.

Productization decision:
Backend should stop being a static frontend host long-term. It should become API-only for enterprise deployment clarity.

Short-term acceptable:
- Keep current static serving if production depends on it.
- But sales-facing product architecture should point to separated domains.

Required hardening:
- `/health` should expose useful status without leaking secrets.
- CORS must include all canonical domains.
- Demo mode must be explicit.
- Authentication must be enterprise-ready enough for pilots.
- Remove duplicate/legacy build responsibilities after successful deployment split.

## 7. Admin / Superadmin / Subscription / Announcement Dashboard

Likely surfaces:
- backend routes `/api/admin`
- `/api/superadmin`
- billing surfaces in `/api/scribe/billing`
- dashboard repos

Job:
- Manage organizations / clinics.
- Configure pilot.
- Manage users.
- View plan/subscription status.
- Announce updates or send clinic-wide notices.

Productization decision:
For next-month sales, this should NOT become a huge product.

Minimum admin functionality:
- Create organization.
- Create clinic.
- Add clinicians/nurses.
- See pilot status.
- View patient count.
- View usage: notes, plans, check-ins, escalations.
- Subscription/payment status can be manual for enterprise pilot.

Subscription decision:
Enterprise pilots should be invoice/manual payment first, not self-serve Stripe-first. Stripe can remain for Scribe/self-serve later.

Announcement dashboard decision:
Keep it simple. Admin can send:
- patient check-in template updates
- care team notes
- internal clinic announcements

Do not let announcements distract from the core sale.

---

# Productization priorities

## Priority 1: Demo-ready end-to-end care loop

The sales demo must show one flow:

1. Doctor records consultation in Scribe.
2. Hanna generates note.
3. Clinician reviews note.
4. Hanna creates care plan.
5. Patient is enrolled into LINE follow-up.
6. Patient reply creates a risk signal.
7. Nurse dashboard shows the patient in priority queue.
8. Nurse marks action taken.
9. Report shows continuity.

This is the enterprise story.

## Priority 2: Simplify repo ownership

Canonical ownership:

| Product | Repo | Domain |
|---|---|---|
| Public website | `hanna-landing` | `hanna.care` |
| Scribe app | `hanna-scribe` | `app.hanna.care` |
| Nurse dashboard | `hanna-nurse-dashboard` | `nurse.hanna.care` |
| Patient LINE channel | `hanna-line-bot` | `line.hanna.care` or webhook URL |
| Shared API | `hanna-backend` | `api.hanna.care` |

Deprecate ambiguity:
- `Hanna-Ai-Nurse` should not be the canonical product repo.
- `hanna-dashboard` vs `hanna-nurse-dashboard` must be resolved.
- `hanna-line-bot` should not build landing/scribe assets.

## Priority 3: Enterprise pilot packaging

Offer:

Hanna 90-Day Chronic Care Pilot

Price:
- ฿60,000/month
- 3 months
- ฿180,000 total

After pilot:
- ฿50,000/month per clinic annually
- up to 500 monitored patients
- overage: ฿100/patient/month

Pilot success metrics:
- Notes generated
- Care plans approved
- Patients enrolled
- Check-ins sent
- Patient response rate
- Risk flags created
- Nurse actions completed
- No-response patients detected
- 90-day continuity report

---

# Functional backlog

## Website

- [ ] Replace `mailto:` with form/calendar capture.
- [ ] Add analytics.
- [ ] Add Thai buyer copy later.
- [ ] Add downloadable one-page pilot brief.

## Scribe

- [ ] Verify production deployment.
- [ ] Wire to production backend.
- [ ] Confirm auth flow.
- [ ] Confirm audio capture/transcription.
- [ ] Confirm note generation.
- [ ] Add care plan generation screen.
- [ ] Add approve care plan action.
- [ ] Add enroll patient into follow-up action.

## Care Plan

- [ ] Define care plan database table.
- [ ] Add backend route: `POST /api/care-plans/from-note`.
- [ ] Add route: `PATCH /api/care-plans/:id`.
- [ ] Add route: `POST /api/care-plans/:id/approve`.
- [ ] Add route: `POST /api/care-plans/:id/enroll-followup`.

## LINE bot

- [ ] Verify webhook deployment.
- [ ] Confirm patient enrollment mechanism.
- [ ] Send check-ins from approved care plan.
- [ ] Store replies.
- [ ] Generate risk signal from reply/no-response.
- [ ] Send risk signal to backend queue.

## Nurse dashboard

- [ ] Choose canonical dashboard repo.
- [ ] Add today priority queue.
- [ ] Add patient detail drawer.
- [ ] Add care plan summary.
- [ ] Add nurse action buttons.
- [ ] Add daily operations report.

## Backend

- [ ] Confirm all env vars.
- [ ] Confirm production CORS domains.
- [ ] Create care plan routes.
- [ ] Create risk queue model.
- [ ] Create nurse action model.
- [ ] Add demo seed data.
- [ ] Add enterprise pilot healthcheck.

## Admin / Enterprise setup

- [ ] Organization model.
- [ ] Clinic model.
- [ ] Staff model.
- [ ] Pilot model.
- [ ] Usage dashboard.
- [ ] Manual invoice status.

---

# Sales-ready product definition

Hanna is not just a scribe, dashboard, bot, or care plan generator.

Hanna is a supervised care intelligence loop:

Documentation -> Care Plan -> LINE Follow-up -> Risk Signal -> Nurse Priority -> Report

If every product supports this loop, the ecosystem is sellable.

If any product does not support this loop, it is noise for this sprint.

---

# Next implementation sequence

## Week 1

- Pick canonical dashboard repo.
- Verify Scribe deployment.
- Verify backend deployment.
- Create care plan API routes.
- Add care plan UI after note generation.

## Week 2

- Connect approved care plan to follow-up enrollment.
- Verify LINE check-in path.
- Create risk signal objects.
- Show risk signals in nurse dashboard.

## Week 3

- Add pilot/admin setup.
- Add demo data.
- Add reports.
- Tighten UX and copy across Scribe and dashboard.

## Week 4

- Full end-to-end QA.
- Sales demo script.
- Pilot onboarding checklist.
- One-page PDF offer.
- Outreach starts.
