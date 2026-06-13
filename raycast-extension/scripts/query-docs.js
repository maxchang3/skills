#!/usr/bin/env node

const [,, ...args] = process.argv;
const question = args.join(' ');

if (!question) {
  console.error("Usage: node query-docs.js <question>");
  process.exit(1);
}

async function query() {
  const url = new URL('https://developers.raycast.com/readme.md');
  url.searchParams.append('ask', question);
  
  console.log(`Querying: ${url.toString()}...`);
  const res = await fetch(url.toString(), {
    headers: {
      'Accept': 'text/plain, text/markdown'
    }
  });
  
  if (!res.ok) {
    console.error(`Failed: ${res.status} ${res.statusText}`);
    console.error(await res.text());
    process.exit(1);
  }
  
  const text = await res.text();
  console.log('\n--- Result ---\n');
  console.log(text);
}

query().catch(console.error);
