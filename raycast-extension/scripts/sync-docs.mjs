#!/usr/bin/env node

import fs from 'node:fs/promises';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));

const targetDir = path.join(__dirname, '..', 'references');
await fs.mkdir(targetDir, { recursive: true });

const agentInstructionsRegex = /\n---\n\n# Agent Instructions\n[\s\S]*$/;
const lastSyncedRegex = /^> \*\*Last Synced:\*\* \d{4}-\d{2}-\d{2}$/m;
const lastSyncedPlaceholder = '> **Last Synced:** {LAST_SYNCED}';

async function readFileIfExists(filePath) {
  try {
    return await fs.readFile(filePath, 'utf8');
  } catch (err) {
    if (err.code === 'ENOENT') return null;
    throw err;
  }
}

async function writeFileIfChanged(filePath, content) {
  if (await readFileIfExists(filePath) === content) return false;

  await fs.mkdir(path.dirname(filePath), { recursive: true });
  await fs.writeFile(filePath, content);
  return true;
}

async function fetchWithRetry(url, attempts = 3) {
  let lastError;

  for (let attempt = 1; attempt <= attempts; attempt += 1) {
    try {
      const response = await fetch(url);
      if (response.ok) return response;
      lastError = new Error(`${response.status} ${response.statusText}`);
    } catch (err) {
      lastError = err;
    }

    if (attempt < attempts) {
      await new Promise(resolve => setTimeout(resolve, 500 * 2 ** (attempt - 1)));
    }
  }

  throw lastError;
}

console.log('Fetching llms.txt index...');
const res = await fetchWithRetry('https://developers.raycast.com/llms.txt');
const llmsText = await res.text();

// Extract all official raycast documentation URLs functionally
const urls = Array.from(llmsText.matchAll(/- \[.*?\]\((https:\/\/developers\.raycast\.com\/.*?)\)/g))
  .map(match => match[1]);

console.log(`Found ${urls.length} markdown files. Fetching concurrently...`);

const fetchedDocuments = await Promise.all(urls.map(async (url) => {
  try {
    const localRelativePath = new URL(url).pathname.slice(1);
    const localFilePath = path.join(targetDir, localRelativePath);

    const docRes = await fetchWithRetry(url);

    let markdown = await docRes.text();

    // Strip redundant GitBook boilerplate to save AI tokens
    markdown = markdown
      .replace(/> For the complete documentation index[\s\S]*?available as \[Markdown\]\(.*?\)\.\n\n/, '')
      .replace(agentInstructionsRegex, '\n');

    return { localFilePath, markdown };
  } catch (err) {
    console.error(`❌ Error processing ${url}: ${err.message}`);
    return null;
  }
}));

const failedDocumentCount = fetchedDocuments.filter(document => document === null).length;
if (failedDocumentCount > 0) {
  throw new Error(`Failed to fetch ${failedDocumentCount} document(s); no files were updated.`);
}

const documentChanges = await Promise.all(fetchedDocuments.map(({ localFilePath, markdown }) =>
  writeFileIfChanged(localFilePath, markdown)
));

console.log('Generating local index.md...');
const cleanLlmsText = llmsText
  .replace(agentInstructionsRegex, '\n');

const indexTemplate = `# Raycast Developer Documentation Index\n\n${lastSyncedPlaceholder}\n\n`
  + cleanLlmsText.replace(/https:\/\/developers\.raycast\.com\//g, './');

const indexPath = path.join(targetDir, 'index.md');
const existingIndex = await readFileIfExists(indexPath);
const existingIndexTemplate = existingIndex
  ?.replace(lastSyncedRegex, lastSyncedPlaceholder)
  .trimEnd();
const documentationChanged = documentChanges.some(Boolean)
  || existingIndexTemplate !== indexTemplate.trimEnd();
const previousSyncDate = existingIndex?.match(lastSyncedRegex)?.[0].slice(-10);
const syncDate = documentationChanged
  ? new Date().toISOString().slice(0, 10)
  : previousSyncDate ?? new Date().toISOString().slice(0, 10);
const indexContent = indexTemplate.replace('{LAST_SYNCED}', syncDate);

await writeFileIfChanged(indexPath, indexContent);

console.log(documentationChanged
  ? `✨ Sync complete. Documentation updated on ${syncDate}.`
  : `✨ Sync complete. No documentation changes; keeping ${syncDate}.`);
