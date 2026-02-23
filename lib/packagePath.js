import fs from "fs/promises";
import path from "path";

const packagePath = async () => {
  let currentDir = process.cwd();

  while (true) {
    const candidate = path.join(currentDir, "../package.json");
    // console.log(candidate);

    try {
      await fs.access(candidate);
      return candidate;
    } catch {
      const parentDir = path.dirname(currentDir);

      if (parentDir === currentDir) {
        throw new Error(
          "No package.json found in this directory or any parent.",
        );
      }

      currentDir = parentDir;
    }
  }
};

// packagePath();
export default packagePath;
