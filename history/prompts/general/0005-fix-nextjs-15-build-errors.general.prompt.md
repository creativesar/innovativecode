---
id: "0005"
title: "Fix Next.js 15 Build Errors"
stage: "refactor"
date: "2025-11-29"
surface: "agent"
model: "gemini-2.0-pro-exp"
feature: "none"
branch: "main"
user: "user"
command: "npm run build"
labels: ["build-fix", "nextjs-15", "typescript"]
links:
  spec: null
  ticket: null
  adr: null
  pr: null
files_yaml: |
  - app/api/blog/[slug]/route.ts
  - app/api/projects/[slug]/route.ts
  - components/stats-counter.tsx
tests_yaml: |
  - npm run build
---

# PROMPT_TEXT
check the files and npm run build there are several error i got

# RESPONSE_TEXT
Fixed several build errors related to Next.js 15 and TypeScript:
1.  Updated `app/api/blog/[slug]/route.ts` and `app/api/projects/[slug]/route.ts` to correctly handle `params` as a Promise, which is required in Next.js 15.
2.  Fixed a TypeScript error in `components/stats-counter.tsx` where a ref callback was implicitly returning a value instead of void.
3.  Verified the fix by running `npm run build`, which now completes successfully.
