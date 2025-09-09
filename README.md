
# Package.json Analyzer

[![Node.js](https://img.shields.io/badge/Node%20>=18-green?logo=node.js&logoColor=black&style=flat)](https://nodejs.org)
[![Status](https://img.shields.io/badge/status--active-success.svg?logoColor=black&logo=node.js&style=flat)]()
[![Made With](https://img.shields.io/badge/made%20with%20JavaScript-yellow?logo=javascript&logoColor=black&style=flat)]()

A simple **standalone script** to analyze your project’s `package.json`.
It checks for missing keys, evaluates scripts, lists dependencies, and gives suggestions for making your `package.json` more professional.

---

## Features

* Reads the **parent folder’s `package.json`** automatically
* Validates and prints:

  * Basic metadata (`name`, `version`, `author`, etc.)
  * Repository / homepage / bugs links
  * Scripts (warns if only default `test` script exists)
  * Dependencies, devDependencies, peer & optional dependencies
* Suggests missing keys that are recommended for npm/GitHub projects

---

## Installation

This is not an npm package. Clone and run directly:

```bash
git clone https://github.com/nishuR31/packagejsonAnalyser.git
cd packagejsonAnalyser
```

Since the script analyzes the **parent folder’s package.json**, keep this repo inside your project root like:

```
my-project/
  ├── package.json   <- gets analyzed
  ├── packagejsonAnalyser/
  │     └── file.js
  └── src/
```

---

##  Usage

Run the analyzer with Node:

```bash
node file.js
```

### Example output:

```
File has been read successfully

Author : nishan nishant
Main : server.js
Repository : git (github.com/nishuR31/packagejsonAnalyser)

Dependencies used:
┌─────────┬────────────┐
│ express │ ^5.1.0     │
│ mongoose│ ^8.16.1    │
└─────────┴────────────┘

Script commands :
npm run dev
npm start
npm test (Default npm init test script)

Recommended options for a better package.json :
repository
keywords
homepage
contributors
```

---

## Requirements

* [Node.js](https://nodejs.org) v18+
* A `package.json` in the parent directory

---

## Recommended Next Steps

* Add missing keys like `repository`, `keywords`, `homepage`, `contributors`
* Replace the default test script with a real test runner (`jest`, `mocha`, etc.)

---

## License

This project is [licensed](LICENSE) under the **MIT License**.
