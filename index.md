# Product IDEA Loop

**A living system for building, learning, and shipping faster in the AI era.**

<div class="hero-callout">
The sprint was built for scarce builders.  
The loop is built for abundant attempts.
</div>

## Why this exists

Most teams do not run out of ideas. They run out of affordable attempts.

With AI, building speed is no longer the main bottleneck. Decision quality is.

The IDEA Loop helps teams run focused build-and-learn loops where insight, design, engineering, and analysis happen together in one working session.

## Start here

- Read the full manifesto: [Manifesto](./manifesto/)
- Contribute to the framework with ideas, tools, and techniques: [CONTRIBUTING](./contributing/)
- Share framework evidence, case notes, and public links: [Artifacts](./artifacts/)

## How this page relates to the manifesto

- The [Manifesto](./manifesto/) defines principles and intent
- This index defines the practical operating playbook (setups, workflows, and references)
- Keep both aligned on core method claims; update both when principles change

## What IDEA means

**IDEA = Insight, Design, Engineering, Analysis**

- **Insight**: what problem are we solving and for whom?
- **Design**: what should the experience feel like?
- **Engineering**: how does it actually work?
- **Analysis**: how will we know it worked?

In IDEA loops, these functions improve each other in real time instead of waiting on long handoffs.

IDEA loops can be run in `single-player` mode (one owner) or `multi-player` mode (usually 2-3 collaborators).
Both modes are concurrent: insight, design, engineering, and analysis stay active together in-session.

## Concurrent, not phased

Do not run IDEA as four sequential stages.

Not this:
Insight -> Design -> Engineering -> Analysis (separate handoffs across days)

Do this:
Keep all four active in the same working session. A new user insight can change the design in minutes. A design constraint can change engineering scope immediately. Early instrumentation can change what you build next in the same loop.

### Where the discipline lives

Sequential methods put discipline in the process: gates, handoffs, approvals, tickets. The system prevents bad decisions by making you wait. It works, but the cost is time and the risk is that the gates become theater.

Cowboy coding has no discipline anywhere. Build fast, ship, hope for the best.

Vibe coding has discipline in intuition only. It follows the feeling without verifying it. When it fails, there is no diagnostic.

IDEA loops move discipline from process to judgment. All four functions run concurrently, but:

- The loop opens with a named insight, not "let's see what happens"
- The loop closes with explicit analysis: what shipped, what was learned, what happens next
- Every design decision is validated in the real medium, not approved in a deck
- Every engineering choice is evaluated against user feeling, not just technical correctness
- The loop has a time bound, forcing a decision

Concurrency does not mean unstructured. It means all feedback channels stay open so that a design insight can change engineering in minutes instead of weeks. A jazz ensemble, not a noise jam — the musicians play concurrently, but they know the key, the tempo, the form, and when to listen.

## What a loop is

A loop is one focused round of building and learning.

- Most loops should run 1-6 hours
- Extend beyond 6 hours only while uncertainty is dropping and decision quality is improving
- If those signals stall, pause and close the loop
- Every loop closes within 72 hours
- Each loop ends with:
  1. a concrete output
  2. what was learned
  3. what happens next (ship, iterate, pivot, or stop)

## Setup options

### Sandboxes (non-technical loopers should try these first)

- Use a self-contained environment with isolated runtime and safe rollback/checkpoints (example: [Replit](https://replit.com/))
- Optionally import a [Figma](https://www.figma.com/) design to bootstrap UI structure
- Then treat design as code-first and simulate data as needed to exercise flows
- In [Replit](https://replit.com/), use built-in theme tooling to adjust visual direction on the fly while iterating in code
- Promote to production repos only after loop evidence supports continuation
- Other light options for quick concept generation: [Bolt](https://bolt.new/), [v0](https://v0.app/), [Lovable](https://lovable.dev/)

### Power User Setup A — terminal-native agents

Choose this if you prefer terminal-native workflows.

- A terminal coding agent (for example [Claude Code](https://claude.com/product/claude-code)) with a capable reasoning model for orchestration
- Product and engineering: coding agent + `git` + [`gh`](https://cli.github.com/)
- Design: [Figma](https://www.figma.com/) or other design sources via MCP, or design-through-code in the repo
- Analysis: your product analytics stack (for example [PostHog](https://posthog.com/)) plus scripts; prefer MCP-connected metrics and dashboards
- **Longer or parallel work:** kick off background or cloud agent runs on separate branches while you keep the in-session loop focused; merge through normal PR review at loop close
- **Context:** compact or reset when quality drops; keep durable state in repo files (see below), not only in chat

### Power User Setup B — IDE and cloud agents

Choose this if you prefer IDE-native workflows or want agents that run outside your laptop.

- An IDE with agent mode (for example [Cursor](https://cursor.com/)) using the coding models your team already trusts
- Same cross-discipline stack as Setup A: `git`, [`gh`](https://cli.github.com/), design-through-code or MCP-linked design tools, analytics + scripts
- **In-session loop:** stay in one focused agent thread for the 1–6 hour loop when the work is tightly coupled
- **Cloud agents:** for work that outlasts a single chat, use hosted agents that clone the repo, work on a branch, run tests, and open or update PRs (see [Cursor Cloud Agents](https://cursor.com/docs/cloud-agent)); review artifacts before merge
- **Parallel agents:** when scopes split cleanly (for example UI polish vs. API wiring), run separate agent threads or cloud runs on different branches; treat draft PRs as loop evidence, not silent shipping
- **MCP:** connect issue trackers, design tools, analytics, and internal APIs so agents pull live context instead of pasted dumps
- **Context:** when chat noise rises, start a fresh agent and rely on codebase search and indexing [R1][R3]

### Agent orchestration (both setups)

- Match agent shape to loop shape: pair programming in-session for ambiguous work; cloud or background agents for long builds, test matrices, or clearly scoped branches
- Keep one `brief.md` authoritative so parallel runs do not fork intent
- Prefer MCP and repo-resident docs over copying large context into every thread

Tooling note:

- IDEA does not require a specific vendor; choose tools by capability fit and team constraints
- Between Setup A and Setup B, operator preference and fluency are the primary selector

## Design through code is valid

Designing directly in code is perfectly acceptable in IDEA loops.

Great software requires more than working code. Loopers should think beyond vibe coding and evaluate the whole product.

Condition: the looper/pilot must run an explicit quality pass on user experience and product feel before shipping.

- Check interaction clarity and usability, not only technical correctness
- Review visual rhythm, copy tone, and behavioral polish across key user paths
- Validate the whole system: user outcomes, data realism, performance, reliability, and instrumentation
- Apply extra care on first-run and edge-case experiences where trust is easiest to lose

### Patterns that only emerge in loops

Some design patterns are structurally impossible in a traditional pipeline because the handoff process flattens them.

Example: a fluid, content-driven container — a single animated surface that measures its children and resizes to fit, guiding users through a multi-step flow without page navigation. This pattern requires design and engineering to be the same conversation. In a Figma-to-ticket pipeline, it would require 10+ static artboards with transition annotations. Most teams would look at that spec and simplify to fixed-size modals. The fluid idea gets lost in translation.

In a loop, the container is built, fails, gets rebuilt, and is tuned — all in one session with taste guiding every iteration. There is no handoff where the idea gets flattened into rectangles.

This is not limited to animated containers. Any pattern where the design depends on runtime behavior — content-driven sizing, scroll-aware effects, preloaded transitions, animation timing tuned to emotional context — benefits from the same loop dynamic. The design cannot be fully specified in a static medium. It has to be felt in the real medium and adjusted in real time.

Look for these patterns in your loops. They are a signal that the concurrent model is producing something a sequential process could not.

## Flexing the Cross-Discipline Muscle

If this feels hard at first, that is normal.

Each loop is highly sensitive to model choice, clarity of thought, prompting quality, taste, and critical thinking.

Loop speed and outcomes are extremely variable. Sometimes months of work collapse into a single prompt. Sometimes a simple task gets stuck for hours.

When progress stalls, do not rely on memory or vibes alone. Collect evidence.

The looper/pilot should train outside active work sessions: practice prompting, study what is happening behind the curtain, refine taste, and keep building cross-discipline muscle.

Be kind to yourself during your initial loops. This technique itself is brand new, and AI agents are improving at a blistering pace.


## Context management and continuity

Context quality degrades before output quality visibly degrades. Treat context resets, fresh agent threads, and parallel cloud runs as normal operating moves—not failures. [R1][R2][R3]

- **Terminal agent path**: when context pressure rises, compact or reset in-thread; delegate scoped follow-ups to a background run on a branch when the main loop should stay focused
- **IDE / cloud agent path**: when chat context gets noisy, start a new agent and rely on codebase search and indexing; use cloud agents for branch-scoped work that should not bloat the primary session [R2][R3]
- **Both paths**: keep durable project state outside chat (`brief.md`, `decisions.md`, `open-questions.md`)

Minimum handoff contract:

- One shared `brief.md` with problem, scope, decisions, open questions, and success signals
- One decision log to avoid re-litigating choices after chat resets
- One analysis spine (for example, `PostHog + scripts` or your preferred analytics stack), and prefer MCP-connected analytics and ops tools so decisions remain comparable across paths

## What this is

- A practical working method for running `Insight + Design + Engineering + Analysis` concurrently
- A loop-based way to test assumptions, build artifacts, and decide quickly
- Usable in `single-player` mode or small `multi-player` teams (2-3)

## What this is not

- Not a governance model
- Not a replacement for functional expertise
- Not a mandatory org process or new reporting layer
- Not a license to skip safety, compliance, or quality review
- Not cowboy coding — every loop closes with a written record of decisions and evidence
- Not vibe coding — intuition informs direction, but the loop demands verification

## Guardrails

- Use sandbox first for exploration
- Apply extra review for high-risk changes
- Do not ship what you cannot explain
- Do not measure value only by hours or ticket count

## How to judge loop success

A loop succeeds when it improves decision quality, even if it does not ship.

- It strengthens the idea or hypothesis
- It improves the starting point of the next loop
- It exposes weak assumptions early, while change is still cheap

Additional strong signals:

- The team reduced uncertainty per hour, not just produced more output
- A bad path was killed early with evidence (time saved is a win)
- The loop produced reusable assets (prompt, component, metric, playbook)
- Next-loop scope became sharper (clearer problem, tighter constraints, better questions)
- Risk moved from implicit to explicit (known unknowns became named decisions)

### Evidence structure, not process structure

The highest-fidelity artifact is the product itself. Everything else — tickets, decks, 100-screen Figma files — is a lossy compression of intent.

IDEA loops replace process artifacts with evidence artifacts:

- A shipped prototype instead of a specification
- A demo video instead of a stakeholder alignment meeting
- A loop capture with real timestamps and killed paths instead of a sprint retrospective

The loop capture is the accountability mechanism. When it documents what was built, what was learned, and what was killed, it is more transparent than any ticket marked "Done."

## Strengths of this framework

- It lets non-technical founders start immediately in sandboxed environments
- It combats organizational atrophy and scarcity theater, replacing ticket-and-deck consensus with working evidence
- It exposes weak assumptions quickly, reducing costly rework and public embarrassment
- It counters sunk-cost fallacy by forcing explicit loop closure decisions
- It combines the speed of low-fidelity wireframing and vibe coding into a coherent AI-powered way of working

## What this repo is

This repository is both:

- An open source framework for running IDEA loops
- A public website that evolves with contributions
- A publishing base for framework evidence, case notes, and learnings

## Core principle

A loop is successful when it improves the starting conditions of the next loop.  
There is always another loop tomorrow.

## Appendix: References

These links support the context-management and agent-orchestration guidance above.

- [R1] Cursor blog: [Improving agents with semantic search](https://cursor.com/blog/semsearch)
- [R2] Cursor docs: [Cloud Agents](https://cursor.com/docs/cloud-agent) (hosted agents on branches/PRs with MCP support)
- [R3] Cursor docs: [Search](https://cursor.com/docs/context/codebase-indexing) (Instant Grep and Explore subagent for parallel codebase search)
- [R4] SSRN: [AI Agents, Productivity, and Higher-Order Thinking](https://papers.ssrn.com/sol3/papers.cfm?abstract_id=5713646)
