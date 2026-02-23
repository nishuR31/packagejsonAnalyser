import fs from "fs/promises";
import path from "path";
import { criticalFields, recommendedFields } from "./schema.js";
import { ask } from "./utils.js";
import PackagePath from "./packagePath.js";

const getPackagePath = await PackagePath();

const isMeaningful = (val) => {
  if (val === undefined || val === null) return false;
  if (typeof val === "string") return val.trim().length > 0;
  if (Array.isArray(val)) return val.length > 0;
  if (typeof val === "object") return Object.keys(val).length > 0;
  return true;
};

const calculateScore = (pkg) => {
  let score = 0;
  let total = 0;

  const allKeys = [
    ...Object.keys(criticalFields),
    ...Object.keys(recommendedFields),
  ];

  for (const key of allKeys) {
    total++;
    if (isMeaningful(pkg[key])) score++;
  }

  return ((score / total) * 10).toFixed(1);
};

const printOverview = (pkg) => {
  console.log("\n===== PROJECT OVERVIEW =====\n");

  console.log("Name:", pkg.name || "N/A");
  console.log("Version:", pkg.version || "N/A");
  console.log("Description:", pkg.description || "N/A");
  console.log("License:", pkg.license || "N/A");
  console.log("Main:", pkg.main || "N/A");
  console.log("Type:", pkg.type || "N/A");

  if (pkg.repository?.url) {
    console.log("Repository:", pkg.repository.url);
  }

  if (pkg.homepage) {
    console.log("Homepage:", pkg.homepage);
  }

  if (pkg.bugs?.url) {
    console.log("Bugs:", pkg.bugs.url);
  }

  console.log("\n===== DEPENDENCIES =====");

  const showDeps = (label, deps) => {
    if (deps && Object.keys(deps).length > 0) {
      console.log(`\n${label}:`);
      console.table(deps);
    } else {
      console.log(`${label}: None`);
    }
  };

  showDeps("Dependencies", pkg.dependencies);
  showDeps("Dev Dependencies", pkg.devDependencies);
  showDeps("Peer Dependencies", pkg.peerDependencies);
  showDeps("Optional Dependencies", pkg.optionalDependencies);

  console.log("\n===== SCRIPTS =====");
  if (pkg.scripts && Object.keys(pkg.scripts).length > 0) {
    console.table(pkg.scripts);
  } else {
    console.log("No scripts defined.");
  }
};

export const runAnalyzer = async (flags = {}) => {
  try {
    const packagePath = getPackagePath;
    const raw = await fs.readFile(packagePath, "utf-8");
    const pkg = JSON.parse(raw);

    printOverview(pkg);

    const beforeScore = calculateScore(pkg);
    console.log("\nCompleteness Score (before):", beforeScore + "/10");

    let changed = false;

    /* --------- CRITICAL FIELDS --------- */
    for (const key of Object.keys(criticalFields)) {
      if (!isMeaningful(pkg[key])) {
        const config = criticalFields[key];

        let value;

        if (flags.auto) {
          value = config.default;
        } else {
          const input = await ask(config.prompt);
          value = input || config.default;
        }

        pkg[key] = value;
        changed = true;
      }
    }

    /* --------- RECOMMENDED FIELDS --------- */
    for (const key of Object.keys(recommendedFields)) {
      if (!isMeaningful(pkg[key])) {
        const config = recommendedFields[key];

        let value;

        if (flags.auto) {
          value = config.default;
        } else {
          const input = await ask(config.prompt);
          value =
            config.transform ?
              config.transform(input)
            : input || config.default;
        }

        pkg[key] = value;
        changed = true;
      }
    }

    if (changed) {
      await fs.writeFile(packagePath, JSON.stringify(pkg, null, 2));
      console.log("\npackage.json updated with missing fields.");
    } else {
      console.log("\nNo changes needed.");
    }

    const afterScore = calculateScore(pkg);
    console.log("\nCompleteness Score (after):", afterScore + "/10");
  } catch (err) {
    console.error("Analyzer error:", err.message);
  }
};
