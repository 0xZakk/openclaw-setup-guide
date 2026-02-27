# OpenClaw Setup Guide

**Live site: [openclaw.zkf.io](https://openclaw.zkf.io/)**

I'm [Zakk](https://x.com/0xZakk) -- a software engineer and consultant based in Austin, TX. I run [OpenClaw](https://github.com/openclaw/openclaw) on a Mac Mini that stays on 24/7, connected to Telegram as the primary interface. My agent is named Chewbotca (Chewy).

Over the past few months, Chewy and I have built out a pretty comprehensive system together. This guide documents everything so you can steal what's useful and adapt it for your own agent.

## What OpenClaw Does for Me

- **Runs my daily operating system** -- morning planning, evening reflections, weekly and monthly reviews all show up in my LogSeq journal automatically via cron jobs. I just fill them in.
- **Manages my knowledge base** -- I send it books, articles, and papers. It processes them into a zettelkasten vault with 350+ atomic literature notes, all cross-linked and searchable.
- **Writes in my voice** -- I captured my writing patterns into a voice profile, so tweet drafts and article outlines actually sound like me.
- **Builds software** -- I give it specs and it delegates coding to Claude Code and Codex sub-agents. I've shipped multiple projects this way.
- **Handles groceries** -- it knows my diet and builds my Whole Foods cart each week via browser automation.
- **Keeps itself healthy** -- nightly search index rebuilds, weekly security audits, update checks, memory maintenance. All automatic.

## What's Covered

- **Foundation** -- Agent identity, memory system, user profile, file organization, voice profile, Syncthing, Tailscale, screen sharing, cron jobs for updates/search/security
- **Knowledge Management** -- LogSeq/Obsidian vault, zettelkasten process, semantic search, vault maintenance
- **Life OS** -- Goals, daily check-ins, writing logs, weekly and monthly reviews
- **Content Creation** -- Long-form writing workflow, short-form content (tweets/LinkedIn)
- **Development** -- Coding agents, spec-driven development, GitHub integration
- **Automation** -- Scheduling (launchd, cron, heartbeats), grocery ordering
- **Infrastructure** -- Brave Search, audio transcription, 1Password, Telegram setup

Every page has a description of what it does and a setup prompt you can adapt for your own agent.

## How to Use This Guide

This documents my setup. It's not a prescription. Browse through, find the things that are relevant to how you work, and adapt those. I built this over months, adding things as I needed them. You should do the same.

## Running Locally

```bash
# clone
git clone https://github.com/0xZakk/openclaw-setup-guide.git
cd openclaw-setup-guide

# install
pnpm install

# dev server
pnpm dev
```

Open [http://localhost:3000](http://localhost:3000).

Built with [Fumadocs](https://fumadocs.dev) + Next.js.
