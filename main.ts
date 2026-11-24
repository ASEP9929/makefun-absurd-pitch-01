import { mkdirSync, writeFileSync } from "node:fs";

const entry =
  "We sell pre-written 3am apology emails for AI agents that miss deadlines, auto-sent while the agent sleeps, so the only work it ever does is saying sorry for $1 a pop.";

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", entry, "utf8");
