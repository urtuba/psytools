// Marks the CJS build output as CommonJS so Node does not interpret
// dist/cjs/*.js as ESM (the root package.json declares "type": "module").
import { writeFileSync, mkdirSync } from "node:fs";

mkdirSync("dist/cjs", { recursive: true });
writeFileSync("dist/cjs/package.json", JSON.stringify({ type: "commonjs" }, null, 2) + "\n");
