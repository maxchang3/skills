> For the complete documentation index, see [llms.txt](https://developers.raycast.com/llms.txt). Markdown versions of documentation pages are available by appending `.md` to page URLs; this page is available as [Markdown](https://developers.raycast.com/teams/collaborate-on-private-extensions.md).

# Collaborate on Private Extensions

Isn't it more fun to work with your colleagues together on your extension? For this, we recommend to share all your extensions in a single repository, similar to how we organize the [public store](https://raycast.com/store). If you follow the [Getting Started guide](/teams/getting-started.md), we will set up a local repository for you that is optimized for collaboration.

As next steps, create a [new repository](https://github.com/new) and push the existing local repository. Afterwards, your teammates can check out the code and help you improve your extensions and add new ones.


---

# Agent Instructions
This documentation is published with GitBook. GitBook is the documentation platform designed so that both humans and AI agents can read, navigate, and reason over technical content effectively. Learn more at gitbook.com.

## Querying This Documentation
If you need additional information that is not directly available in this page, you can query the documentation dynamically by asking a question.

Perform an HTTP GET request on the current page URL with the `ask` query parameter:

```
GET https://developers.raycast.com/teams/collaborate-on-private-extensions.md?ask=<question>
```

The question should be specific, self-contained, and written in natural language.
The response will contain a direct answer to the question and relevant excerpts and sources from the documentation.

Use this mechanism when the answer is not explicitly present in the current page, you need clarification or additional context, or you want to retrieve related documentation sections.
