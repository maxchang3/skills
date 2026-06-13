> For the complete documentation index, see [llms.txt](https://developers.raycast.com/llms.txt). Markdown versions of documentation pages are available by appending `.md` to page URLs; this page is available as [Markdown](https://developers.raycast.com/information/developer-tools/vscode.md).

# VS Code (community tool)

You can enhance your VS Code development experience by installing the [Raycast extension in the marketplace](https://marketplace.visualstudio.com/items?itemName=tonka3000.raycast). Here's a list of features provided by the extension:

* IntelliSense for image assets
* A tree view for easier navigation (commands and preferences)
* VS Code commands for creating new commands and preferences
* The possibility to attach a Node.js debugger
* VS Code commands for `ray` operations like `build`, `dev`, `lint`, or `fix-lint`


---

# Agent Instructions
This documentation is published with GitBook. GitBook is the documentation platform designed so that both humans and AI agents can read, navigate, and reason over technical content effectively. Learn more at gitbook.com.

## Querying This Documentation
If you need additional information that is not directly available in this page, you can query the documentation dynamically by asking a question.

Perform an HTTP GET request on the current page URL with the `ask` query parameter:

```
GET https://developers.raycast.com/information/developer-tools/vscode.md?ask=<question>
```

The question should be specific, self-contained, and written in natural language.
The response will contain a direct answer to the question and relevant excerpts and sources from the documentation.

Use this mechanism when the answer is not explicitly present in the current page, you need clarification or additional context, or you want to retrieve related documentation sections.
