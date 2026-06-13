> For the complete documentation index, see [llms.txt](https://developers.raycast.com/llms.txt). Markdown versions of documentation pages are available by appending `.md` to page URLs; this page is available as [Markdown](https://developers.raycast.com/misc/faq.md).

# FAQ

<details>

<summary>What's the difference between <a href="https://github.com/raycast/script-commands">script commands</a> and extensions?</summary>

Script commands were the first way to extend Raycast. They are a simple way to execute a shell script and show some limited output in Raycast. Extensions are our next iteration to extend Raycast. While scripts can be written in pretty much any scripting language, extensions are written in TypeScript. They can show rich user interfaces like lists and forms but can also be "headless" and just run a simple script.

Extensions can be shared with our community via our Store. This makes them easy to discover and use for not so technical folks that don't have homebrew or other shell integrations on their Mac.

</details>

<details>

<summary>Why can I not use <code>react-dom</code>?</summary>

Even though you write JS/TS code, everything is rendered natively in Raycast. There isn't any HTML or CSS involved. Therefore you don't need the DOM-specific methods that the `react-dom` package provides.

Instead, we implemented a custom [reconciler](https://reactjs.org/docs/reconciliation.html) that converts your React component tree to a render tree that Raycast understands. The render tree is used natively to construct a view hierarchy that is backed by [Apple's AppKit](https://developer.apple.com/documentation/appkit/). This is similar to how [React Native](https://reactnative.dev) works.

</details>

<details>

<summary>Can I import ESM packages in my extension?</summary>

Yes, but you need to convert your extension to ESM.

Quick steps:

* Make sure you are using TypeScript 4.7 or later.
* Add `"type": "module"` to your package.json.
* Add `"module": "node16", "moduleResolution": "node16"` to your tsconfig.json.
* Use only full relative file paths for imports: `import x from '.';` → `import x from './index.js';`.
* Remove `namespace` usage and use `export` instead.
* Use the [`node:` protocol](https://nodejs.org/api/esm.html#esm_node_imports) for Node.js built-in imports.
* **You must use a `.js` extension in relative imports even though you're importing `.ts` files.**

</details>


---

# Agent Instructions
This documentation is published with GitBook. GitBook is the documentation platform designed so that both humans and AI agents can read, navigate, and reason over technical content effectively. Learn more at gitbook.com.

## Querying This Documentation
If you need additional information that is not directly available in this page, you can query the documentation dynamically by asking a question.

Perform an HTTP GET request on the current page URL with the `ask` query parameter:

```
GET https://developers.raycast.com/misc/faq.md?ask=<question>
```

The question should be specific, self-contained, and written in natural language.
The response will contain a direct answer to the question and relevant excerpts and sources from the documentation.

Use this mechanism when the answer is not explicitly present in the current page, you need clarification or additional context, or you want to retrieve related documentation sections.
