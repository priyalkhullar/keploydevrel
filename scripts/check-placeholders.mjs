import { readFileSync } from "node:fs";

const file = "app/page.mdx";
const lines = readFileSync(file, "utf8").split(/\r?\n/);
const bad = lines
  .map((text, i) => ({ text, line: i + 1 }))
  .filter(({ text }) => /USER:|\bTODO\b/.test(text));

if (bad.length) {
  console.error(`${file} still has ${bad.length} placeholder(s):`);
  for (const b of bad) console.error(`  line ${b.line}: ${b.text.trim()}`);
  process.exit(1);
}
console.log(`${file}: no placeholders left.`);
