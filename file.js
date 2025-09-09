import fs from "fs/promises";
import { fileURLToPath } from "url";
import path from "path";

async function analyzeScripts() {
  let json, data;
  let paths = path.dirname(fileURLToPath(import.meta.url));
  let packagePath = path.resolve(paths, "../package.json");
  let keys = [
    // Basic info
    "name",
    "version",
    "description",
    "type", // "module" or "commonjs"
    "main", // entry point
    "files", // controls publishable files

    // Project meta
    "repository", // git repo details
    "bugs", // issue tracker
    "homepage", // docs/landing page
    "keywords", // npm/github discoverability

    // People
    "author",
    "contributors",

    // License
    "license",

    // Runtime
    "engines", // node version requirement
    "scripts", // npm scripts
    "dependencies",
    "devDependencies",
    "peerDependencies", // for libraries
    "optionalDependencies",

    // Config/Other
    "config", // app-specific npm configs
    "bin", // CLI entry points
    "directories", // structure hints (like "lib", "test")
    "private", // prevent accidental npm publish
  ];

  try {
    const data = await fs.readFile(packagePath, "utf-8");
    console.log(`\nFile has been read successfully`);
    json = JSON.parse(data);
  } catch (err) {
    console.error(`\nError finding, reading or parsing file: ${err.message}`);
    return; // stop execution if file not found / invalid
  }

  if (json.scripts) {
    const onlyTest =
      Object.keys(json.scripts).length === 1 &&
      Object.keys(json.scripts).every((key) => key === "test");

    data = onlyTest
      ? {
          scripts: json.scripts,
          warn:
            json.scripts.test === `echo "Error: no test specified" && exit 1`
              ? "Default npm init test script found.\n"
              : "Only test script found..\n",
        }
      : {
          scripts: json.scripts,
          warn: "Kindly check for correct commands..\n",
        };
  }
  json.author.length && console.log(`\nAuthor : ${json.author}`);
  json.main && console.log(`\nMain : ${json.main}`);
  json.repository &&
    console.log(`Repository : ${json.repository.url}(${json.repository.type})`);
  json.bugs && console.log(`Bugs : ${json.bugs.url}`);
  json.homepage && console.log(`Homepage : ${json.homepage.url}`);
  json.keywords.length && console.log(`Keywords : ${json.keywords.join(" ")}`);
  console.log(`Version : ${json.version}`);
  json.description && console.log(`Description : ${json.description}`);
  json.type && console.log(`Type : ${json.type}\n`);

  json.dependencies &&
    (console.log("\nDependencies used:"), console.table(json.dependencies));
  json.devDependencies &&
    (console.log("\nDev Dependencies used:"),
    console.table(json.devDependencies));
  (json.peerDependencies ?? console.log(`\nNo Peer Dependencies`)) &&
    (console.log("\nPeer Dependencies used:"),
    console.table(json.peerDependencies));
  (json.optionalDependencies ?? console.log(`\nNo Optional Dependencies`)) &&
    (console.log("\nOptional Dependencies used:"),
    console.table(json.optionalDependencies));

  console.log("\nScript commands :");
  for (const key of Object.keys(json.scripts)) {
    const defaultTest =
      key === "test" &&
      json.scripts[key] === `echo "Error: no test specified" && exit 1`;

    console.table(
      `npm ${key === "start" ? key : `run ${key}`} ${
        defaultTest ? "(Default npm init test script)" : ""
      }`
    );
  }
  console.log();
  console.table(data.scripts);
  console.log(data.warn);

  let reqKey = keys.filter((key) => !Object.keys(json).includes(key));

  reqKey &&
    console.log(
      `\nRecommended options for a better package.json : ${reqKey.map(
        (e) => `\n${e}`
      )}`
    );
}

analyzeScripts();
