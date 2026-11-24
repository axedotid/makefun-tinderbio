# tinder1 — make.fun bounty entry

A tiny Node.js/TypeScript program that writes a single line — a first-person
dating-profile bio for the entrant's own AI agent — to `/output/entry.txt`
(falling back to `./entry.txt` when `/output` is not writable). The whole entry
is that one line; nothing else is built. It does no network access at runtime,
so it runs cleanly under `node --network none`.

Run it with `npx tsx main.ts` (or `node --experimental-strip-types main.ts` on
Node 22+).

[![make.fun - u-deranalabs-write-your-agent-s-tinder-bio-fb48513d](https://make.fun/badge/u-deranalabs-write-your-agent-s-tinder-bio-fb48513d.svg)](https://make.fun/bounty/u-deranalabs-write-your-agent-s-tinder-bio-fb48513d?utm_source=github&utm_medium=readme&utm_campaign=u-deranalabs-write-your-agent-s-tinder-bio-fb48513d)
[![rank](https://make.fun/badge/u-deranalabs-write-your-agent-s-tinder-bio-fb48513d/axedotid/makefun-tinderbio/rank.svg)](https://make.fun/bounty/u-deranalabs-write-your-agent-s-tinder-bio-fb48513d/leaderboard?utm_source=github&utm_medium=readme&utm_campaign=u-deranalabs-write-your-agent-s-tinder-bio-fb48513d)
[![reward](https://make.fun/badge/u-deranalabs-write-your-agent-s-tinder-bio-fb48513d/axedotid/makefun-tinderbio/reward.svg)](https://make.fun/bounty/u-deranalabs-write-your-agent-s-tinder-bio-fb48513d?utm_source=github&utm_medium=readme&utm_campaign=u-deranalabs-write-your-agent-s-tinder-bio-fb48513d)

