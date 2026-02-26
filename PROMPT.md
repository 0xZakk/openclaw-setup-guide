# Task: Build a Fumadocs Documentation Site

## Context
This repo contains markdown guides for setting up OpenClaw (an AI agent framework). There are currently two files:
- `README.md` -- Master list of 40 items organized by category
- `SETUP-PROMPTS.md` -- Detailed descriptions + setup prompts for each item

## Goal
Create a Fumadocs documentation site that presents these guides as a beautiful, navigable docs site. Split the content from SETUP-PROMPTS.md into individual pages organized by category.

## Steps

### 1. Initialize Fumadocs
Run `npx create-fumadocs-app@latest docs` (or similar) to scaffold a new Fumadocs project inside this repo. Use the Next.js + Fumadocs MDX template. Choose default options.

### 2. Content Structure
Create MDX files in `docs/content/docs/` (or wherever Fumadocs expects content). Split the SETUP-PROMPTS.md into individual pages by section:

```
content/docs/
├── index.mdx                          (intro/overview from README.md)
├── getting-started/
│   ├── meta.json                      (folder config)
│   ├── index.mdx                      (quick start guide)
│   └── minimum-viable-setup.mdx       (phased rollout from SETUP-PROMPTS.md bottom)
├── foundation/
│   ├── meta.json
│   ├── agent-identity.mdx             (Section 1)
│   ├── memory-system.mdx              (Section 2)
│   ├── user-profile.mdx               (Section 3)
│   ├── para-organization.mdx          (Section 4)
│   └── voice-profile.mdx              (Section 5)
├── knowledge-management/
│   ├── meta.json
│   ├── logseq-vault.mdx               (Section 6)
│   ├── zettelkasten-skill.mdx         (Section 7)
│   ├── qmd-search.mdx                 (Section 8)
│   └── vault-maintenance.mdx          (Section 9 -- brief, mention the skill)
├── life-os/
│   ├── meta.json
│   ├── overview.mdx                   (Life OS concept)
│   ├── morning-checkin.mdx            (Section 11)
│   ├── evening-checkin.mdx            (Section 12-ish)
│   ├── writing-log.mdx                (Section 10)
│   ├── weekly-review.mdx
│   └── monthly-review.mdx
├── content-creation/
│   ├── meta.json
│   ├── tweet-pipeline.mdx             (Section 16)
│   └── x-writing-system.mdx           (Section 17)
├── development/
│   ├── meta.json
│   ├── coding-agent.mdx               (Section 19)
│   ├── ralph-workflow.mdx             (Section 20)
│   └── github-skill.mdx              (Section 21)
├── automation/
│   ├── meta.json
│   ├── grocery-order.mdx              (Section 22)
│   └── heartbeat-system.mdx           (Section 19 from prompts)
└── infrastructure/
    ├── meta.json
    ├── qmd-reindex-cron.mdx
    ├── update-check-cron.mdx
    ├── security-audit-cron.mdx
    ├── audio-transcription.mdx
    ├── brave-search.mdx
    ├── onepassword.mdx
    ├── telegram-channel.mdx
    ├── local-memory-search.mdx
    └── table-image.mdx
```

### 3. Page Content
Each page should have:
- MDX frontmatter: `title`, `description`
- A "What it does" section
- A "Setup Prompt" section with the prompt in a code block or callout
- Any relevant configuration snippets
- Cross-links to related pages

### 4. Navigation
Use `meta.json` files in each folder to control sidebar ordering and titles.

### 5. Homepage
Make the root `index.mdx` an overview page that lists all categories with brief descriptions and links.

### 6. Styling
Use Fumadocs defaults -- they look great out of the box. Set the site title to "OpenClaw Setup Guide" and add a brief description.

### 7. Git Commits
Commit after each major step:
1. After scaffolding Fumadocs
2. After creating all content pages
3. After any styling/config tweaks

Push to origin/main after each commit.

### 8. Verify
Run `npm run dev` (or `pnpm dev`) to verify the site builds and works. Check that navigation works and pages render correctly. If there are build errors, fix them.

## Important
- Keep the original README.md and SETUP-PROMPTS.md in the repo root (they're useful as plain markdown too)
- The Fumadocs app should be in the repo root (not a subdirectory) -- move/merge as needed
- Use pnpm if the scaffold uses it, otherwise npm is fine
- Don't overcomplicate -- Fumadocs defaults are good
