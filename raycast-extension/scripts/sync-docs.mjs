#!/usr/bin/env node

import fs from 'node:fs/promises';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));

const targetDir = path.join(__dirname, '..', 'references');
await fs.mkdir(targetDir, { recursive: true });

console.log('Fetching llms.txt index...');
const res = await fetch('https://developers.raycast.com/llms.txt');
if (!res.ok) throw new Error(`Failed to fetch llms.txt: ${res.statusText}`);

const llmsText = await res.text();

// Extract all official raycast documentation URLs functionally
const urls = Array.from(llmsText.matchAll(/- \[.*?\]\((https:\/\/developers\.raycast\.com\/.*?)\)/g))
  .map(match => match[1]);

console.log(`Found ${urls.length} markdown files. Synchronizing concurrently...`);

await Promise.all(urls.map(async (url) => {
  try {
    const localRelativePath = new URL(url).pathname.slice(1);
    const localFilePath = path.join(targetDir, localRelativePath);
    
    await fs.mkdir(path.dirname(localFilePath), { recursive: true });

    const docRes = await fetch(url);
    if (!docRes.ok) {
      console.warn(`⚠️ Failed: ${url} (${docRes.statusText})`);
      return;
    }
    
    let markdown = await docRes.text();
    
    // Strip redundant GitBook boilerplate to save AI tokens
    markdown = markdown
      .replace(/> For the complete documentation index[\s\S]*?available as \[Markdown\]\(.*?\)\.\n\n/, '')
      .replace(/\n---\n\n# Agent Instructions\n[\s\S]*$/, '\n');
    
    await fs.writeFile(localFilePath, markdown);
  } catch (err) {
    console.error(`❌ Error processing ${url}: ${err.message}`);
  }
}));

console.log('Generating local index.md...');
const today = new Date().toLocaleDateString("sv-SE");
const indexContent = `# Raycast Developer Documentation Index\n\n> **Last Synced:** ${today}\n\n` 
  + llmsText.replace(/https:\/\/developers\.raycast\.com\//g, './');
  
await fs.writeFile(path.join(targetDir, 'index.md'), indexContent);

console.log('✨ Sync complete.');
