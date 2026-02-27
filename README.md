# OpenClaw Setup Guide

A documentation site covering how I set up and use [OpenClaw](https://github.com/openclaw/openclaw) as a personal AI operating system -- daily routines, knowledge management, content creation, development workflows, and automation.

**[openclaw.zkf.io](https://openclaw.zkf.io/)**

## About

I run OpenClaw on a Mac Mini connected to Telegram. Over a few months my agent (Chewbotca) and I built out a system that handles daily planning, processes books and papers into a zettelkasten vault, drafts content in my voice, delegates coding to sub-agents, and runs background maintenance automatically.

This site documents all of it -- what each piece does and setup prompts you can adapt for your own agent. It's not meant to be copied wholesale. Take what's useful, skip what's not.

## Sections

| Section | Covers |
|---------|--------|
| **Foundation** | Agent identity, memory, user profile, voice profile, Syncthing, Tailscale, screen sharing, maintenance cron jobs |
| **Knowledge Management** | LogSeq vault, zettelkasten process, semantic search (QMD), vault maintenance |
| **Life OS** | Goals, morning/evening check-ins, writing log, weekly and monthly reviews |
| **Content Creation** | Long-form writing workflow, short-form content pipeline |
| **Development** | Coding agents, spec-driven development, GitHub integration |
| **Automation** | Scheduling (launchd, cron, heartbeats), grocery ordering |
| **Infrastructure** | Brave Search, audio transcription, 1Password, Telegram |

## Tech Stack

- [Next.js](https://nextjs.org/) 16
- [Fumadocs](https://fumadocs.dev/) (MDX documentation framework)
- [Tailwind CSS](https://tailwindcss.com/)
- Deployed on [Netlify](https://netlify.com/)

## Local Development

```bash
git clone https://github.com/0xZakk/openclaw-setup-guide.git
cd openclaw-setup-guide
pnpm install
pnpm dev
```

Opens at [http://localhost:3000](http://localhost:3000).

## Author

[Zakk Fleischmann](https://x.com/0xZakk) -- Austin, TX
