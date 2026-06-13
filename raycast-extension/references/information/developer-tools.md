> For the complete documentation index, see [llms.txt](https://developers.raycast.com/llms.txt). Markdown versions of documentation pages are available by appending `.md` to page URLs; this page is available as [Markdown](https://developers.raycast.com/information/developer-tools.md).

# Developer Tools

Raycast provides several tools to smoothen your experience when building extensions:

* [Manage Extensions Command](/information/developer-tools/manage-extensions-command.md) *- A Raycast command to manage your extensions, add new command, etc.*
* [CLI](/information/developer-tools/cli.md) *- A CLI to build, develop, and lint your extension*
* [ESLint](/information/developer-tools/eslint.md) *- An ESLint configuration helping you follow best practices as you build your extension*
* [Forked Extensions (community tool)](/information/developer-tools/forked-extensions.md) - *The extension for helping you manage your forked Raycast extensions*
* [VS Code (community tool)](/information/developer-tools/vscode.md) *- A VS Code extension to enhance your development experience*


---

# Agent Instructions
This documentation is published with GitBook. GitBook is the documentation platform designed so that both humans and AI agents can read, navigate, and reason over technical content effectively. Learn more at gitbook.com.

## Querying This Documentation
If you need additional information that is not directly available in this page, you can query the documentation dynamically by asking a question.

Perform an HTTP GET request on the current page URL with the `ask` query parameter:

```
GET https://developers.raycast.com/information/developer-tools.md?ask=<question>
```

The question should be specific, self-contained, and written in natural language.
The response will contain a direct answer to the question and relevant excerpts and sources from the documentation.

Use this mechanism when the answer is not explicitly present in the current page, you need clarification or additional context, or you want to retrieve related documentation sections.
