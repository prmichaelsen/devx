#!/usr/bin/env ts-node-script
import fs from 'fs';
import path from 'path';

const args = process.argv;

const targetDir = args[2];
const dir = path.join(targetDir, args[3] || '.');

function listRelativePaths(directoryPath: string, currentPath = ''): void {
  const items = fs.readdirSync(directoryPath);

  items.forEach(item => {
    const itemPath = path.join(directoryPath, item);
    const relativePath = path.join(currentPath, item);

    if (fs.statSync(itemPath).isDirectory()) {
      console.log(relativePath);
      listRelativePaths(itemPath, relativePath);
    }
  });
}

listRelativePaths(dir);
