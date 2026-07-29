import { execSync } from "child_process";
import { mkdirSync, cpSync, writeFileSync } from "fs";
import { resolve, dirname } from "path";
import { fileURLToPath } from "url";

// When Vercel root = artifacts/api-server, __dirname is that folder.
// Repo root is two levels up.
const __dirname = dirname(fileURLToPath(import.meta.url));
const repoRoot = resolve(__dirname, "../..");
const outputDir = resolve(__dirname, ".vercel/output");

// 1. Build the frontend
console.log("Building eclatamania-autos...");
execSync("pnpm --filter @workspace/eclatamania-autos run build", {
  stdio: "inherit",
  cwd: repoRoot,
});

// 2. Write Vercel Build Output API structure
console.log("Preparing .vercel/output...");
mkdirSync(`${outputDir}/static`, { recursive: true });

cpSync(
  resolve(repoRoot, "artifacts/eclatamania-autos/dist/public"),
  `${outputDir}/static`,
  { recursive: true }
);

writeFileSync(`${outputDir}/config.json`, JSON.stringify({ version: 3 }));

console.log("Done. Static files ready for Vercel.");
