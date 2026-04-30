# Hanna GitHub Repo Organization

This is the canonical organization map for Hanna Care Intelligence.

The business is being productized as an enterprise B2B care intelligence ecosystem.

Core loop:

`Documentation -> Care Plan -> LINE Follow-up -> Risk Signal -> Nurse Priority Queue -> Report`

Every active repo must support this loop. If a repo does not support this loop, it is legacy, experiment, or non-core.

---

# Canonical repos

## 1. `hanna-landing`

Purpose: public marketing website and buyer conversion.

Domain:
- `hanna.care`
- `www.hanna.care`

Owns:
- website copy
- pilot offer
- buyer narrative
- lead capture
- productization docs
- sales assets

Does not own:
- Scribe app logic
- nurse dashboard logic
- LINE bot webhook
- backend API logic

Status:
- canonical and active

## 2. `hanna-scribe`

Purpose: doctor-facing AI documentation and care plan creation.

Domain:
- `app.hanna.care`

Owns:
- recording/upload flow
- transcription UI
- clinical note generation UI
- note review/finalization
- care plan draft UI
- approve care plan
- enroll patient into follow-up

Does not own:
- public website
- nurse dashboard
- patient LINE bot
- core API persistence

Status:
- canonical and active, but deployment/functionality requires verification

## 3. `hanna-backend`

Purpose: shared API and enterprise intelligence layer.

Domain:
- `api.hanna.care`

Owns:
- auth
- organizations / clinics / staff
- Scribe API
- care plan API
- follow-up API
- risk signal API
- nurse queue API
- reports
- analytics
- webhooks

Does not own long-term:
- static frontend hosting
- landing page builds
- Scribe frontend builds
- dashboard frontend builds

Status:
- canonical and active

## 4. `hanna-line-bot`

Purpose: patient LINE follow-up channel.

Domain:
- `line.hanna.care` or generated LINE webhook URL

Owns:
- LINE webhook
- patient check-in delivery
- patient reply handling
- voice-friendly reply handling
- patient-channel errors and retries

Does not own:
- landing page build
- Scribe frontend build
- dashboard frontend build
- core intelligence if backend can own it

Status:
- active but should be thinned into patient-channel service

## 5. `hanna-nurse-dashboard`

Purpose: nurse command center.

Domain:
- `nurse.hanna.care`

Owns:
- today priority queue
- patient risk review
- care plan summary
- nurse action workflow
- daily operations report

Status:
- recommended canonical dashboard repo pending final audit

---

# Duplicate / legacy repos to demote

## `Hanna-Ai-Nurse`

Previous broad prototype / mixed app repo.

Decision:
- do not use as canonical repo going forward
- keep as legacy reference only
- do not attach production domains

## `hanna-dashboard`

Potential duplicate of nurse dashboard.

Decision:
- audit against `hanna-nurse-dashboard`
- pick one canonical dashboard
- recommended canonical: `hanna-nurse-dashboard` if it contains the newer command-center implementation

## Other FastCare / older repos

Decision:
- keep outside Hanna Care Intelligence production scope unless explicitly revived
- do not use for current enterprise pilot sprint

---

# Production domain map

| Domain | Product | Repo |
|---|---|---|
| `hanna.care` | Public website | `hanna-landing` |
| `www.hanna.care` | Public website redirect | `hanna-landing` |
| `app.hanna.care` | Doctor Scribe app | `hanna-scribe` |
| `nurse.hanna.care` | Nurse dashboard | `hanna-nurse-dashboard` |
| `api.hanna.care` | Shared backend API | `hanna-backend` |
| `line.hanna.care` | LINE bot/webhook service | `hanna-line-bot` |

---

# Repo rules going forward

1. No landing-page code inside Scribe, backend, dashboard, or LINE bot repos.
2. No frontend static hosting inside backend long-term unless required as a temporary fallback.
3. No product work outside the canonical repos unless clearly marked experimental.
4. All productization work must support the core loop.
5. Enterprise pilot features beat consumer/self-serve features for this sprint.
6. Manual invoice / pilot setup is acceptable before Stripe self-serve.
7. Demo data is acceptable for sales if clearly demo-only and does not create fake clinical claims.

---

# Sprint objective

By the end of the productization sprint, Hanna must demonstrate this end-to-end flow:

1. Doctor records consultation in Scribe.
2. Hanna generates note.
3. Clinician reviews note.
4. Hanna creates care plan.
5. Clinician approves plan.
6. Patient is enrolled into LINE follow-up.
7. Patient reply creates risk signal.
8. Nurse dashboard shows the patient in priority queue.
9. Nurse records action.
10. Leadership report shows continuity.

This is the sellable product.
