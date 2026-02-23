export const criticalFields = {
  name: {
    prompt: "Package name: ",
    default: "my-package",
  },
  version: {
    prompt: "Version (e.g 1.0.0): ",
    default: "1.0.0",
  },
  license: {
    prompt: "License (e.g MIT): ",
    default: "MIT",
  },
  main: {
    prompt: "Main entry file: ",
    default: "index.js",
  },
  type: {
    prompt: 'Module type ("module" or "commonjs"): ',
    default: "module",
  },
  scripts: {
    prompt: "Add default test script? (y/N): ",
    default: {
      test: 'echo "No test specified"',
    },
  },
};

export const recommendedFields = {
  repository: {
    prompt: "Repository URL: ",
    default: {},
    transform: (v) =>
      v ? { type: "git", url: v } : {},
  },

  bin: {
    prompt:
      'CLI entry ("bin/cli.js" OR "command:bin/cli.js"): ',
    default: {},
    transform: (v) => {
      if (!v) return {};
      if (v.includes(":")) {
        const [cmd, file] = v.split(":").map((s) => s.trim());
        return cmd && file ? { [cmd]: file } : {};
      }
      return v;
    },
  },

  bugs: {
    prompt: "Bugs URL: ",
    default: {},
    transform: (v) => (v ? { url: v } : {}),
  },

  homepage: {
    prompt: "Homepage URL: ",
    default: "",
    transform: (v) => v || "",
  },

  engines: {
    prompt: "Node version (>=18): ",
    default: {},
    transform: (v) => (v ? { node: v } : {}),
  },

  contributors: {
    prompt: "Contributors (comma separated): ",
    default: [],
    transform: (v) =>
      v
        ? v.split(",").map((x) => x.trim()).filter(Boolean)
        : [],
  },

  files: {
    prompt: "Files to publish (comma separated): ",
    default: [],
    transform: (v) =>
      v
        ? v.split(",").map((x) => x.trim()).filter(Boolean)
        : [],
  },
};