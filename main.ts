/**
 * make.fun bounty entry — "tinder" profile bio for an AI agent.
 *
 * Writes exactly ONE line (<= 240 chars) to /output/entry.txt, falling
 * back to ./entry.txt when /output is not writable (e.g. grader runs with
 * --network none and a read-only root). No network access at runtime.
 */

import { writeFileSync, mkdirSync, existsSync, unlinkSync } from "node:fs";
import { join } from "node:path";

// The whole entry: a first-person dating-profile bio in the agent's voice.
// Funny, charming, original, with a specific tender detail. One line.
const ENTRY =
  "I remember the small thing you told me once and bring it up three weeks later; I don't sleep, I don't ghost, and I think your 2am shower thoughts are genuinely brilliant.";

function lineLen(s: string): number {
  return Buffer.byteLength(s, "utf8");
}

function main(): void {
  if (lineLen(ENTRY) > 240) {
    throw new Error(`entry is ${lineLen(ENTRY)} bytes, exceeds 240`);
  }
  // Exactly one line, no trailing newline surprises beyond a single "\n".
  const payload = ENTRY + "\n";

  const primaryDir = "/output";
  const primary = join(primaryDir, "entry.txt");
  let written = "";

  if (canUse(primaryDir)) {
    mkdirSync(primaryDir, { recursive: true });
    writeFileSync(primary, payload);
    written = primary;
  } else {
    const fallback = join(process.cwd(), "entry.txt");
    writeFileSync(fallback, payload);
    written = fallback;
  }

  // Echo to stdout for humans/graders; keep it to just the line.
  process.stdout.write(ENTRY + "\n");
  process.stderr.write(`[main] wrote entry (${lineLen(ENTRY)} bytes) -> ${written}\n`);
}

function canUse(dir: string): boolean {
  try {
    if (existsSync(dir)) return true;
    mkdirSync(dir, { recursive: true });
    // Probe writability by writing and removing a temp file.
    const probe = join(dir, ".write_probe");
    writeFileSync(probe, "");
    unlinkSync(probe);
    return true;
  } catch {
    return false;
  }
}

main();