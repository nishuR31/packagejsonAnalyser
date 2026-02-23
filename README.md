# packagejson-analyser

A robust, interactive CLI tool to analyze and upgrade your `package.json` files. No external dependencies required.

## Features

- **Completeness Rating:** Rates your `package.json` before and after upgrade.
- **Missing Fields Detection:** Lists all recommended fields missing from your `package.json`.
- **Interactive Upgrade:** Prompts you to add missing fields, with the option to provide a value or leave empty (empty fields are still added for completeness).
- **Summary Output:** Shows a summary of your package, including scripts and key metadata.
- **No External Libraries:** Uses only Node.js built-in modules (`readline`, `fs/promises`).

## Usage

1. Place the CLI script (`index.js`) and your `package.json` in the same directory.
2. Run the analyzer:

```sh
node index.js
```

3. The CLI will:
   - Rate your current `package.json` completeness.
   - List missing recommended fields.
   - Ask if you want to upgrade by adding missing fields.
   - Prompt for each missing field (default is empty if you skip).
   - Save the upgraded `package.json` and show the new completeness rating and summary.

## Example Output

```
File has been read successfully
Current completeness: 40%
Missing fields: version, description, author, ...
Do you want to upgrade? (y/n): y
Enter value for version (default empty): 1.0.0
Enter value for description (default empty):
...
Upgrade complete!
New completeness: 100%
Summary:
  Author: ...
  Main: ...
  Scripts: ...
  ...
```

## Notes

- If you skip a field, it will be added with an empty value.
- No external dependencies are used.
- Designed for Node.js 16+.

## License

MIT
