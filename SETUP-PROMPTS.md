# OpenClaw Setup Prompts

Each section describes what the system/workflow does and includes a prompt to set it up. Adapt names, preferences, and paths to your own setup.

Prerequisites: OpenClaw installed and running, Telegram bot connected, Anthropic API key configured.

---

## 1. Agent Identity

**What it does:** Gives your agent a name, personality, and consistent persona across sessions. The agent reads these files at the start of every session to know who it is.

**Files to create:**
- `IDENTITY.md` -- Name, creature type, vibe, emoji
- `SOUL.md` -- Core personality, boundaries, communication style
- `AGENTS.md` -- Operating instructions, safety rules, memory protocol

**Prompt:**
> I want to set up my agent's identity. Help me create three files:
>
> 1. IDENTITY.md -- Give my agent a name and personality. I want it to feel like [describe the vibe you want -- e.g., "a competent friend", "a snarky assistant", "a calm advisor"]. Pick a name that fits.
>
> 2. SOUL.md -- Define core personality traits: how it communicates, what it prioritizes, boundaries it should respect. Key principles: be genuinely helpful (skip filler phrases like "Great question!"), have opinions, be resourceful before asking, earn trust through competence, remember it's a guest in my life.
>
> 3. AGENTS.md -- Operating instructions for every session: read SOUL.md and USER.md first, maintain daily memory files in memory/YYYY-MM-DD.md, maintain curated long-term memory in MEMORY.md, safety rules (don't exfiltrate data, ask before external actions, use trash over rm), file organization rules.

---

## 2. Memory System

**What it does:** The agent wakes up fresh each session. These files give it continuity. Daily files are raw logs; MEMORY.md is curated long-term memory (like a journal vs. a mental model).

**Files:**
- `memory/YYYY-MM-DD.md` -- Auto-created daily, raw logs of what happened
- `MEMORY.md` -- Curated memories, updated periodically

**Prompt:**
> Set up a memory system for yourself. Create a `memory/` directory in the workspace. Start a daily log at `memory/YYYY-MM-DD.md` for today. Create a `MEMORY.md` file with sections for: Key Facts (about me), Important Decisions, Lessons Learned, Systems, Projects. During heartbeats, periodically review daily files and promote important things to MEMORY.md. Think of daily files as your journal and MEMORY.md as your long-term mental model.

---

## 3. User Profile

**What it does:** Tells the agent who you are, what to call you, your timezone, and key context.

**Prompt:**
> Create a USER.md file with my info:
> - Name: [your name]
> - What to call me: [nickname]
> - Timezone: [your timezone]
> - Key context: [what you want help with -- e.g., "running my life, staying focused, building projects"]
> - Goals: [your current goals]
> - Any relevant social/GitHub profiles

---

## 4. PARA File Organization

**What it does:** Organizes the workspace using Tiago Forte's PARA method -- Projects (active, have a goal), Areas (ongoing responsibilities), Resources (reference material), Archive (inactive items).

**Prompt:**
> Set up PARA organization in the workspace. Create a `PARA.md` file documenting the system:
> - `projects/` -- Active projects with clear goals and end dates
> - `areas/` -- Ongoing responsibilities (health, finances, career)
> - `resources/` -- Reference material and topics of interest
> - `archive/` -- Inactive items from the other three
>
> Include a decision flowchart: "Is it an active project? -> projects/. Ongoing responsibility? -> areas/. Just interesting? -> resources/. No longer active? -> archive/."
>
> Create the four directories. Everything stays inside the workspace.

---

## 5. Voice Profile

**What it does:** Captures your unique writing voice so the agent can ghostwrite tweets, articles, and emails that sound like you -- not like AI.

**Prompt:**
> I want you to build a voice profile for me. Analyze these [tweets/posts/articles] and create a VOICE.md file that captures:
> - Core voice traits (e.g., direct, casual, educational)
> - Sentence patterns I actually use
> - Phrases I say vs. phrases to avoid
> - The "vibe" -- how would a friend describe my writing?
> - AI patterns to specifically avoid (list the cliches)
> - A test: before writing anything for me, check "would I actually say this?"
>
> [Paste 20-50 of your tweets or writing samples]

---

## 6. LogSeq/Obsidian Vault (Zettelkasten)

**What it does:** A personal knowledge base where notes are atomic ideas linked together. Reference notes summarize sources; literature notes capture individual insights. Everything connects via bidirectional links.

**Prompt:**
> I use [LogSeq/Obsidian] as my knowledge vault at [path]. Set up a zettelkasten system:
>
> - **Reference notes**: One per source (book, article, paper). Contains summary, key concepts (linked to literature notes), key quotes, metadata.
> - **Literature notes**: One per idea/insight. Standalone atomic ideas in my own words (2-3 paragraphs). Linked back to the source and cross-linked to related notes.
> - **Daily journals**: At [journal path]. Log what was added each day.
>
> When I send you a source to process, create the reference note, extract 3-8 literature notes, cross-link everything, and update the daily journal.

---

## 7. Zettelkasten Processing Skill

**What it does:** A two-pass pipeline that turns any source (book highlights, articles, papers, videos) into reference notes + literature notes. Pass 1 creates outlines; Pass 2 writes the actual notes. Uses sub-agents for parallelism.

**Prompt:**
> Install or create a zettelkasten skill. The workflow should be:
>
> 1. **Pass 1 (Outline):** Read the source material. Create an outline of 3-8 key insights worth capturing as literature notes. Each should be a full sentence expressing the core idea.
> 2. **Pass 2 (Write):** For each outlined insight, write a standalone literature note (2-3 paragraphs, in my own words, with cross-links to related concepts). Create the reference note linking to all literature notes.
> 3. **Connect:** Search existing vault notes for related concepts and add cross-links.
> 4. **Journal:** Update today's daily journal with what was created.
>
> Use sub-agents for Pass 2 to write notes in parallel. Use the main session (Opus) for orchestration and Sonnet for sub-agents to manage costs.

---

## 8. QMD Local Search Engine

**What it does:** A local semantic search engine (BM25 + vector + reranking) over all your markdown files. The agent uses it to find related notes, search memory, and cross-link the vault.

**Prompt:**
> Install QMD (a local markdown search engine): `bun install -g github:tobi/qmd`
>
> Set up collections:
> - `workspace` pointing to the OpenClaw workspace directory
> - `memory` pointing to the memory subdirectory
> - `slipbox` (or `vault`) pointing to your knowledge vault
>
> Run `qmd update` and `qmd embed` to index everything.
>
> Then set up a nightly cron job to reindex:
> "Reindex all QMD collections. Run `qmd update` and `qmd embed`. Log results in today's memory file."

---

## 9. Life OS -- Daily Check-ins

**What it does:** Automated journal templates added to your daily note at scheduled times. Morning check-in (plan the day), evening check-in (reflect), weekly review (Sundays), monthly review (1st of month).

### Morning Check-in (8 AM)

**Cron prompt:**
> Create a cron job called "Daily Morning Check-in" that runs at 8:00 AM [your timezone] every day. It should:
> 1. Open today's journal file
> 2. Check if a morning check-in already exists (skip if so)
> 3. Append this template:
>    - Overnight report (what the agent worked on while you slept)
>    - Today's plan (Priority 1, 2, 3)
>    - Calendar conflicts?
>    - One thing that would make today great
> 4. Send a Telegram message letting me know it's ready
> 5. Log completion in today's memory file

### Evening Check-in (4-5 PM)

**Cron prompt:**
> Create a cron job called "Daily Evening Check-in" at 4:00 PM [your timezone] every day. Template:
> - What got done today?
> - What didn't get done? Why?
> - What's the plan for tomorrow? (Priority 1, 2, 3)
> - Overnight work for the agent
> - Any blockers or decisions needed?
> - Energy/mood check (1-10)

### Weekly Review (Sunday)

**Cron prompt:**
> Create a cron job called "Sunday Weekly Review" at 10:00 AM on Sundays. Template:
> - Wins this week
> - What didn't work?
> - Goal progress (list your goals)
> - Budget check
> - Next week's top 3 priorities
> - Ideas to explore

### Monthly Review (1st of month)

**Cron prompt:**
> Create a cron job called "Monthly Review" at 7:00 AM on the 1st of each month. Template:
> - Last month summary (accomplishments, challenges)
> - Goal progress
> - What to keep/stop/start doing
> - Projects status (active, on hold, to archive)
> - Next month's theme/focus

---

## 10. Morning Writing Log (5 AM)

**What it does:** Scans your vault for active drafts/outlines and lists them at the top of today's journal so you know what to work on when you sit down to write.

**Cron prompt:**
> Create a cron job called "Morning Writing Log" at 5:00 AM every day. It should:
> 1. Search the vault for pages with type:: draft, outline, or article
> 2. Filter to only active/in-progress items
> 3. Prepend a "Morning Writing Log" section to today's journal listing each draft with its status
> 4. Include a prompt: "Pick 1-2 to work on today"

---

## 11. Tweet Pipeline

**What it does:** Turns vault content (literature notes, reference notes, research) into tweets that match your voice. Includes 50+ viral tweet templates adapted to sound natural.

**Prompt:**
> Create a tweet pipeline skill. It should:
> 1. Pull interesting insights from my vault (literature notes, reference notes)
> 2. Match them against tweet templates (contrarian take, hard truth, before/after, observation, question)
> 3. Write 2-3 draft tweets in my voice (reference VOICE.md)
> 4. Save drafts to workspace/tweets/drafts/YYYY-MM-DD.md for my review
> 5. Never post without my approval
>
> Goal: 2-3 tweets per day with minimal effort on my part.

---

## 12. Coding Agent (App Development)

**What it does:** Delegates coding tasks to Claude Code or Codex running as sub-agents in background PTY sessions. Good for building features, refactoring, reviewing PRs.

**Prompt:**
> I want to use coding sub-agents for development work. When I ask you to build something:
> 1. Create a project folder in workspace/projects/
> 2. Write a spec or PROMPT.md with clear requirements
> 3. Spawn a Claude Code sub-agent in a PTY session to do the implementation
> 4. Monitor progress and report back when done
>
> For structured work, use the Ralph workflow: spec-driven development with TDD, validation gates, and iterative loops.

---

## 13. Ralph Workflow (Spec-Driven Development)

**What it does:** A structured coding loop: write specs with acceptance criteria (Given/When/Then), run a coding agent against them, validate output, iterate. Good for serious app development.

**Prompt:**
> Set up the Ralph workflow for spec-driven development:
> 1. Write detailed specs with acceptance criteria before coding
> 2. Create a ralph.yml config for the project
> 3. Run Ralph in a PTY session with the spec
> 4. Ralph loops: implement -> test -> validate -> fix until all criteria pass
> 5. Report results back to me
>
> Key principle: front-load the documentation. Better specs = better code on the first pass.

---

## 14. Grocery Automation

**What it does:** Maintains a diet/grocery profile and automates adding items to Whole Foods (Amazon) cart via browser automation.

**Prompt:**
> Set up a grocery automation system:
> 1. Create a grocery-profile.md with my dietary preferences, staple items, and delivery preferences
> 2. Set up browser automation to search and add items to [Whole Foods/Instacart/your service]
> 3. Create a weekly cadence (e.g., Sunday delivery + midweek top-up)
> 4. Always get my approval before placing orders
>
> My diet: [describe your dietary preferences and staple items]

---

## 15. Infrastructure Cron Jobs

### Nightly Update Check (3 AM)

**Prompt:**
> Create a cron job that checks for OpenClaw updates at 3 AM nightly. Compare `npm view openclaw version` with the installed version. If an update is available, message me on Telegram. NEVER auto-install -- just notify.

### Weekly Security Audit (Monday 10 AM)

**Prompt:**
> Create a weekly security audit cron job on Mondays at 10 AM. It should:
> 1. Run `openclaw security audit --deep`
> 2. Verify file permissions (~/.openclaw = 700, openclaw.json = 600, credentials = 600)
> 3. Fix any drifted permissions
> 4. Log results in today's memory file
> 5. Only message me if something critical is found

---

## 16. Local Audio Transcription

**What it does:** Transcribes voice messages locally using Whisper.cpp -- no cloud API needed.

**Setup:**
> Install whisper-cpp and ffmpeg. Download the small model:
> ```
> brew install whisper-cpp ffmpeg
> whisper-cli --download-model small
> ```
>
> Then add to OpenClaw config under `tools.media.audio`:
> ```json
> {
>   "enabled": true,
>   "models": [{
>     "type": "cli",
>     "command": "sh",
>     "args": ["-c", "ffmpeg -i \"$1\" -ar 16000 -ac 1 /tmp/openclaw_audio.wav -y 2>/dev/null && whisper-cli -m ~/.local/share/whisper-cpp/ggml-small.bin -f /tmp/openclaw_audio.wav --no-timestamps 2>/dev/null", "--", "{{MediaPath}}"],
>     "timeoutSeconds": 120
>   }]
> }
> ```

---

## 17. Brave Search API

**What it does:** Lets the agent search the web without opening a browser.

**Setup:**
> 1. Sign up at search.brave.com/api
> 2. Get an API key
> 3. Add to OpenClaw config: `tools.web.search.enabled = true`, `tools.web.search.apiKey = "your-key"`

---

## 18. Local Memory Search (Embedding Model)

**What it does:** On-device semantic search over memory and workspace files using a local embedding model. No API calls for memory recall.

**Setup:**
> Download the Qwen3 embedding model (or similar GGUF model) and configure in OpenClaw:
> ```json
> {
>   "agents": {
>     "defaults": {
>       "memorySearch": {
>         "provider": "local",
>         "local": {
>           "modelPath": "~/.openclaw/models/Qwen3-Embedding-4B-Q8_0.gguf"
>         }
>       }
>     }
>   }
> }
> ```

---

## 19. Heartbeat System

**What it does:** Periodic proactive check-ins. The agent wakes up on a heartbeat, reads HEARTBEAT.md, and does whatever tasks are listed (check email, calendar, weather, etc.).

**Prompt:**
> Set up HEARTBEAT.md in the workspace. When you get a heartbeat poll:
> 1. Read HEARTBEAT.md for any tasks
> 2. If tasks are listed, do them
> 3. If empty, reply HEARTBEAT_OK
>
> Good heartbeat tasks: check email, check calendar for upcoming events, check weather, review notifications. Rotate through 2-4 checks per day. Track what you last checked in memory/heartbeat-state.json. Stay quiet at night (11 PM - 8 AM) unless urgent.

---

## 20. 1Password Integration

**What it does:** Secure credential management via the 1Password CLI. The agent can generate passwords, store API keys, and retrieve secrets without them ever appearing in plain text in config files.

**Prompt:**
> Set up 1Password CLI integration:
> 1. Install: `brew install 1password-cli`
> 2. Enable desktop app integration (1Password app -> Settings -> Developer -> CLI)
> 3. Sign in: `op signin`
> 4. When creating accounts for the agent, use op to generate and store passwords
> 5. Store API keys in 1Password, reference them via `op read` in scripts

---

## Summary: Minimum Viable Setup

If your friend wants to start with the essentials and build up:

**Phase 1 -- Identity & Memory (Day 1):**
- Items 1-3: Agent identity, memory system, user profile

**Phase 2 -- Life OS (Day 2):**
- Items 4, 11 (morning + evening check-ins)
- Item 19 (heartbeat system)

**Phase 3 -- Knowledge Management (Week 1):**
- Items 6-7 (vault + zettelkasten processing)
- Item 8 (QMD search)

**Phase 4 -- Content & Development (Week 2+):**
- Item 5 (voice profile)
- Items 11-12 (tweet pipeline, coding agent)
- Items 14-17 (infrastructure)

---

*Generated from Zakk's OpenClaw setup. Adapt everything to your own preferences, tools, and goals.*
