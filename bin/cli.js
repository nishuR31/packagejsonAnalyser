#!/usr/bin/env node
import { runAnalyzer } from "../lib/analyzer.js";

const args = process.argv.slice(2);

const flags = {
  auto: args.includes("--auto"),
  validate: args.includes("--validate"),
};

runAnalyzer(flags);