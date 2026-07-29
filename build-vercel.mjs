import { execSync } from "child_process";
import { mkdirSync, cpSync, writeFileSync } from "fs";

// 1. Build the frontend
console.log("Building eclatamania-autos...");
execSync(
  "pnpm --filter @workspace/eclatamania-autos run build",
  { stdio: "inherit" }
);

// 2. Set up Vercel Build Output API structure
console.log("Preparing .vercel/output...");
mkdirSync(".vercel/output/static", { recursive: true });

cpSync(
  "artifacts/eclatamania-autos/dist/public",
  ".vercel/output/static",
  { recursive: true }
);

writeFileSync(".vercel/output/config.json", JSON.stringify({ version: 3 }));

console.log("Done. Static files ready for Vercel.");
