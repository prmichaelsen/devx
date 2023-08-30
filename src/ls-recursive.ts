#!/usr/bin/env ts-node-script
import fs from 'fs';
import path from 'path';

const args = process.argv;

const dir = args[2] || '.';

function listRelativePaths(directoryPath: string, currentPath = ''): void {
  const items = fs.readdirSync(directoryPath);

  items.forEach(item => {
    const itemPath = path.join(directoryPath, item);
    const relativePath = path.join(currentPath, item);

    console.log(relativePath);

    if (fs.statSync(itemPath).isDirectory()) {
      listRelativePaths(itemPath, relativePath);
    }
  });
}

listRelativePaths(dir);
