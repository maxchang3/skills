#!/usr/bin/env node

const fs = require('fs');
const path = require('path');

async function sync() {
  const targetDir = path.join(__dirname, '..', 'references');
  if (!fs.existsSync(targetDir)) {
    fs.mkdirSync(targetDir, { recursive: true });
  }

  console.log('Downloading llms.txt...');
  const res1 = await fetch('https://developers.raycast.com/llms.txt');
  if (!res1.ok) throw new Error(`Failed to fetch llms.txt: ${res1.statusText}`);
  const llmsText = await res1.text();

  const regex = /- \[.*?\]\((.*?)\)/g;
  let match;
  const urls = [];
  while ((match = regex.exec(llmsText)) !== null) {
    if (match[1].startsWith('https://developers.raycast.com/')) {
      urls.push(match[1]);
    }
  }

  console.log(`Found ${urls.length} markdown files to sync.`);

  for (const url of urls) {
    try {
      const urlPath = new URL(url).pathname; 
      const localRelativePath = urlPath.replace(/^\//, ''); 
      const localFilePath = path.join(targetDir, localRelativePath);
      const localDirPath = path.dirname(localFilePath);

      if (!fs.existsSync(localDirPath)) {
        fs.mkdirSync(localDirPath, { recursive: true });
      }

      console.log(`Downloading ${localRelativePath}...`);
      const res = await fetch(url);
      if (!res.ok) {
        console.warn(`Warning: Failed to fetch ${url}: ${res.statusText}`);
        continue;
      }
      
      fs.writeFileSync(localFilePath, await res.text());
    } catch (err) {
      console.error(`Error processing ${url}: ${err.message}`);
    }
  }

  console.log('Generating index.md...');
  let indexContent = llmsText.replace(/https:\/\/developers\.raycast\.com\//g, './');
  const today = new Date().toISOString().split('T')[0];
  indexContent = `# Raycast Developer Documentation Index\n\n> **Last Synced:** ${today}\n\n` + indexContent;
  fs.writeFileSync(path.join(targetDir, 'index.md'), indexContent);

  const fullTxtPath = path.join(targetDir, 'llms-full.txt');
  if (fs.existsSync(fullTxtPath)) {
    fs.unlinkSync(fullTxtPath);
    console.log('Removed old llms-full.txt');
  }

  console.log('Sync complete.');
}

sync().catch(console.error);

