# Hanna Deployment Map

This document defines the intended production split for Hanna. Keep product code, Vercel projects, and domains aligned with this map.

## Production domains

| Domain | Product | Vercel project | Intended repo |
|---|---|---|---|
| `hanna.care` | Public marketing website | `hanna-landing` | `farhaned07/hanna-landing` |
| `www.hanna.care` | Redirect to public website | `hanna-landing` | `farhaned07/hanna-landing` |
| `app.hanna.care` | Doctor-facing Scribe app | `hanna-scribe` | `farhaned07/hanna-scribe` or renamed `farhaned07/Hanna-Ai-Nurse` |
| `nurse.hanna.care` | Nurse command center | `hanna-nurse-dashboard` | `farhaned07/hanna-nurse-dashboard` |
| `api.hanna.care` | Core backend API | `hanna-backend` or Railway service | `farhaned07/hanna-backend` |
| `line.hanna.care` | LINE webhook service | `hanna-line-bot` | `farhaned07/hanna-line-bot` |

## Product ownership rules

- `hanna-landing` owns only the public website, legal pages, sales messaging, and marketing CTAs.
- `hanna-scribe` owns only the doctor-facing recording, transcription, note-generation, editing, export, and follow-up enrollment experience.
- `hanna-nurse-dashboard` owns only the nurse command center, task queue, patient risk review, resolution workflow, and reports.
- `hanna-line-bot` owns only LINE webhook handling, patient check-ins, patient replies, and message routing.
- `hanna-backend` owns shared APIs, auth, persistence, risk scoring, reporting, and integrations.

## Current cleanup priorities

1. Move `hanna.care` and `www.hanna.care` away from `hanna-line-bot` and attach them to `hanna-landing`.
2. Move `app.hanna.care` away from `hanna-nurse-dashboard` and attach it to the Scribe app only after Scribe deployment is healthy.
3. Attach `nurse.hanna.care` to `hanna-nurse-dashboard`.
4. Attach `line.hanna.care` to `hanna-line-bot` or use the generated Vercel webhook URL until DNS is ready.
5. Attach `api.hanna.care` to the backend service when the backend deployment is stable.

## Canonical product narrative

Hanna is care intelligence infrastructure for chronic care teams.

Primary promise: more follow-up capacity with less nurse burden.

Core workflow: Capture -> Continue -> Detect -> Escalate -> Prove.
