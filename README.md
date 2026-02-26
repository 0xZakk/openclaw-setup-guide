# OpenClaw Setup Guide -- Everything We've Built

A comprehensive list of every system, workflow, skill, and configuration running on Zakk's OpenClaw instance. Each item includes a description and a setup prompt your friend can adapt.

See `SETUP-PROMPTS.md` for the full prompt for each item.

---

## Overview

### Foundation Layer (Agent Identity & Memory)
1. **Agent Identity** -- Named persona with personality, soul, voice profile
2. **Memory System** -- Daily logs + curated long-term memory (MEMORY.md)
3. **User Profile** -- Who the human is, preferences, goals, personality assessments
4. **PARA File Organization** -- Projects/Areas/Resources/Archive structure in workspace
5. **Voice Profile** -- Writing voice capture for ghostwriting tweets, articles, emails

### Knowledge Management
6. **LogSeq Vault (Zettelkasten)** -- Personal knowledge base with reference notes + literature notes
7. **Zettelkasten Processing Skill** -- Two-pass pipeline to turn any source into atomic notes
8. **QMD Local Search Engine** -- Semantic + keyword search across all markdown files
9. **Vault Maintenance Skill** -- Cross-linking notes, finding underlinked pages
10. **Obsidian Skill** -- General vault operations via obsidian-cli

### Life OS (Daily Operating System)
11. **Daily Morning Check-in** -- Cron job: journal template at 8 AM
12. **Daily Evening Check-in** -- Cron job: reflection template at 4 PM (CST)
13. **Morning Writing Log** -- Cron job: active drafts list at 5 AM
14. **Sunday Weekly Review** -- Cron job: weekly review template
15. **Monthly Review** -- Cron job: monthly review template on the 1st

### Content Creation
16. **Tweet Pipeline Skill** -- Turn vault notes into tweets using voice profile
17. **X Writing System Skill** -- Research-backed rewrite system for X posts
18. **Voice Profile (VOICE.md)** -- Captured writing patterns for authentic ghostwriting

### App Development
19. **Coding Agent Skill** -- Delegate coding to Claude Code / Codex sub-agents
20. **Ralph Workflow Skill** -- Structured TDD/spec-driven coding loops
21. **GitHub Skill** -- PR management, issues, CI via gh CLI

### Grocery & Life Automation
22. **Grocery Order Skill** -- Whole Foods cart automation via browser + diet profile
23. **Grocery Profile** -- Dietary preferences, staple items, delivery cadence

### Infrastructure & Maintenance
24. **Nightly QMD Reindex** -- Cron job: re-embed all search collections at 2 AM
25. **Nightly OpenClaw Update Check** -- Cron job: check for new versions at 3 AM
26. **Weekly Security Audit** -- Cron job: permission checks, security scan
27. **Local Audio Transcription** -- Whisper.cpp for voice messages
28. **Brave Search API** -- Web search without browser
29. **1Password Integration** -- Credential management via op CLI
30. **Telegram Channel** -- Primary messaging surface
31. **Local Memory Search** -- On-device embedding model (Qwen3) for memory recall
32. **Table-Image Skill** -- Markdown tables to PNG for Telegram
33. **Heartbeat System** -- Periodic proactive check-ins

### Other Skills Available
34. **Mobile Testing Skill** -- iOS Simulator via Maestro
35. **Summarize Skill** -- Extract/summarize URLs, podcasts, videos
36. **Session Logs Skill** -- Search past conversation logs
37. **Weather Skill** -- Forecasts via wttr.in
38. **BlogWatcher Skill** -- Monitor RSS/Atom feeds
39. **Google Workspace (gog)** -- Gmail, Calendar, Drive, Sheets, Docs
40. **Gemini CLI** -- One-shot queries to Gemini
