> For the complete documentation index, see [llms.txt](https://developers.raycast.com/llms.txt). Markdown versions of documentation pages are available by appending `.md` to page URLs; this page is available as [Markdown](https://developers.raycast.com/misc/migration.md).

# Migration

This section contains guides to help migrate your extension to a newer version of the API.

## How to automatically migrate your extensions

Whenever possible, we provide tools to automate the migration to a newer version of the API using [codemods](https://github.com/facebook/jscodeshift).

To run the codemods, run the following command in your extension directory:

```bash
npx ray migrate
```

or

```bash
npx @raycast/migration@latest .
```

It will detect the version of the API you were previously using and apply all the migrations that have been available since.

After running it, do go through the updated files and make sure nothing is broken - there are always edge cases.


---

# Agent Instructions
This documentation is published with GitBook. GitBook is the documentation platform designed so that both humans and AI agents can read, navigate, and reason over technical content effectively. Learn more at gitbook.com.

## Querying This Documentation
If you need additional information that is not directly available in this page, you can query the documentation dynamically by asking a question.

Perform an HTTP GET request on the current page URL with the `ask` query parameter:

```
GET https://developers.raycast.com/misc/migration.md?ask=<question>
```

The question should be specific, self-contained, and written in natural language.
The response will contain a direct answer to the question and relevant excerpts and sources from the documentation.

Use this mechanism when the answer is not explicitly present in the current page, you need clarification or additional context, or you want to retrieve related documentation sections.
