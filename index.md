---
layout: default
title: Product IDEA Loop
nav_exclude: true
---

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

## Design through code is valid

Designing directly in code is perfectly acceptable in IDEA loops.

Condition: the looper/pilot must run an explicit quality pass on user experience and product feel before shipping.

- Check interaction clarity and usability, not only technical correctness
- Review visual rhythm, copy tone, and behavioral polish across key user paths
- Apply extra care on first-run and edge-case experiences where trust is easiest to lose

## What this is

- A practical working method for running `Insight + Design + Engineering + Analysis` concurrently
- A loop-based way to test assumptions, build artifacts, and decide quickly
- Usable in `single-player` mode or small `multi-player` teams (2-3)

## What this is not

- Not a governance model
- Not a replacement for functional expertise
- Not a mandatory org process or new reporting layer
- Not a license to skip safety, compliance, or quality review

## Strengths of this framework

- It lets non-technical founders start immediately in sandboxed environments
- It combats organizational atrophy and scarcity theater, replacing ticket-and-deck consensus with working evidence
- It exposes weak assumptions quickly, reducing costly rework and public embarrassment
- It counters sunk-cost fallacy by forcing explicit loop closure decisions
- It combines the speed of low-fidelity wireframing and vibe coding into a coherent AI-powered way of working

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

## What this repo is

This repository is both:

- An open source framework for running IDEA loops
- A public website that evolves with contributions
- A publishing base for framework evidence, case notes, and learnings

## Guardrails

- Use sandbox first for exploration
- Apply extra review for high-risk changes
- Do not ship what you cannot explain
- Do not measure value only by hours or ticket count

## Setup paths (alternate, not combined)

Choose one path per project phase. Do not run both at once.

- **Path A**: Claude Code + Opus as orchestrator
- **Path B**: Cursor + (GPT-Codex or Opus) as orchestrator

Shared tool stack across both paths:

- **Product tool**: coding agent + orchestrator
- **Design tool**: Pencil.dev or Figma MCP
- **Engineering tool**: coding agent + `git` / `gh` CLI
- **Analysis tool**: PostHog MCP + orchestrator + custom scripts

## Context management and continuity

Context quality degrades before output quality visibly degrades. Treat context resets as a normal operating move. [R1][R2][R3]

- **Claude Code path**: when context pressure rises, compact context before continuing in-thread
- **Cursor path**: when chat context gets noisy, start a new agent chat and rely on project indexing/retrieval [R1][R2][R3]
- **Both paths**: keep durable project state outside chat (`brief.md`, `decisions.md`, `open-questions.md`)

Minimum handoff contract:

- One shared `brief.md` with problem, scope, decisions, open questions, and success signals
- One decision log to avoid re-litigating choices after chat resets
- One analysis spine (`PostHog MCP + scripts`) so decisions are comparable across paths

## Core principle

A loop is successful when it improves the starting conditions of the next loop.  
There is always another loop tomorrow.

## Appendix: References

These links support the context-management guidance above, especially for Cursor indexing and long-range retrieval behavior.

- [R1] Cursor blog (November 6, 2025): [Improving agent with semantic search](https://cursor.com/blog/semsearch)
- [R2] Cursor changelog 1.2 (July 3, 2025): [Agent Planning, Better Context & Faster Tab](https://cursor.com/changelog/1-2)
- [R3] Cursor docs: [Codebase Indexing](https://docs.cursor.com/context/codebase-indexing)
- [R4] SSRN (November 7, 2025): [AI Agents, Productivity, and Higher-Order Thinking](https://papers.ssrn.com/sol3/papers.cfm?abstract_id=5713646)
