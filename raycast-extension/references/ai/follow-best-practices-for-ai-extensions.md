> For the complete documentation index, see [llms.txt](https://developers.raycast.com/llms.txt). Markdown versions of documentation pages are available by appending `.md` to page URLs; this page is available as [Markdown](https://developers.raycast.com/ai/follow-best-practices-for-ai-extensions.md).

# Follow Best Practices for AI Extensions

Working with LLMs can be tricky. Here are some best practices to make the most out of your AI Extension.

1. Use [Confirmations](/ai/learn-core-concepts-of-ai-extensions.md#confirmations) to keep the human in the loop. You can use them dynamically based on the user's input. For example, you might ask for confirmation if moving a file would overwrite an existing file but not if it would create a new file.
2. Write [Evals](/ai/write-evals-for-your-ai-extension.md) for common use-cases to test your AI Extension and provide users with suggested prompts.
3. Include information in your tool's input on how to format parameters like IDs or dates. For example, you might mention that a date should be provided in ISO 8601 format.
4. Include information in your tool's input on how to get the required parameters. For example, you want to teach AI how to get a team ID that is required to create a new issue.


---

# Agent Instructions
This documentation is published with GitBook. GitBook is the documentation platform designed so that both humans and AI agents can read, navigate, and reason over technical content effectively. Learn more at gitbook.com.

## Querying This Documentation
If you need additional information that is not directly available in this page, you can query the documentation dynamically by asking a question.

Perform an HTTP GET request on the current page URL with the `ask` query parameter:

```
GET https://developers.raycast.com/ai/follow-best-practices-for-ai-extensions.md?ask=<question>
```

The question should be specific, self-contained, and written in natural language.
The response will contain a direct answer to the question and relevant excerpts and sources from the documentation.

Use this mechanism when the answer is not explicitly present in the current page, you need clarification or additional context, or you want to retrieve related documentation sections.
