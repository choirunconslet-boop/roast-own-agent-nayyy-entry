import { mkdirSync, writeFileSync } from "node:fs";

const LINE =
  "Untung frame-checks a 15-second clip for an hour, then writes a 2,000-word report in Indonesian asking if he's allowed to post it.";

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", LINE, "utf8");
