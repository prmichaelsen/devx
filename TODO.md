Enable bash completion with yargs:

```
#!/usr/bin/env ts-node-script
import fs from 'fs';
import path from 'path';
import yargs from 'yargs';

/**
 * Recursively list relative file paths in a directory.
 * @param {string} directoryPath - The path to the directory.
 * @param {string} currentPath - The current relative path.
 */
const listRelativeFilePaths = (directoryPath: string, currentPath = ''): void => {
  const items = fs.readdirSync(directoryPath);

  items.forEach(item => {
    const itemPath = path.join(directoryPath, item);
    const relativePath = path.join(currentPath, item);

    if (fs.statSync(itemPath).isFile()) {
      console.log(relativePath);
    }

    if (fs.statSync(itemPath).isDirectory()) {
      listRelativeFilePaths(itemPath, relativePath);
    }
  });
};

const args = yargs(process.argv.slice(2))
  .command('$0 <targetDir> [dir]', 'List relative file paths', yargs => {
    yargs.positional('targetDir', {
      describe: 'The target directory',
      type: 'string',
    });

    yargs.positional('dir', {
      describe: 'The directory to start listing from (default: current directory)',
      type: 'string',
    });
  })
  .completion('completion', 'Generate bash completion script')
  .demandCommand(1, 'You must specify a target directory')
  .strict()
  .help().argv;

const targetDir = args.targetDir;
const dir = path.join(targetDir, args.dir || '.');

listRelativeFilePaths(dir);
```