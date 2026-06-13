> For the complete documentation index, see [llms.txt](https://developers.raycast.com/llms.txt). Markdown versions of documentation pages are available by appending `.md` to page URLs; this page is available as [Markdown](https://developers.raycast.com/ai/write-evals-for-your-ai-extension.md).

# Write Evals for Your AI Extension

We all know that AI is not always reliable. This is why it's important to write evals for your AI Extension. Evals allow you to test your AI Extension and make sure it behaves as expected.

## Add an Eval

The easiest way to add an eval is to first use your AI Extension. Then, once Raycast AI used your tools to finish its response, you can use the Copy Eval action to copy the eval to your clipboard.

![Copy Eval](/files/X076JiOBNME89i8p3y9o)

You can then paste the eval into the `evals` array in the [`package.json` file](/information/manifest.md).

```json
{
  "ai": {
    "evals": [
      {
        "input": "@todo-list what are my open todos",
        "mocks": {
          "get-todos": [
            {
              "id": "Z5lF8F-lSvGCD6e3uZwkL",
              "isCompleted": false,
              "title": "Buy oat milk"
            },
            {
              "id": "69Ag2mfaDakC3IP8XxpXU",
              "isCompleted": false,
              "title": "Play with my cat"
            }
          ]
        },
        "expected": [
          {
            "callsTool": "get-todos"
          }
        ]
      }
    ]
  }
}
```

## Run Your Evals

To run your evals, you can use the `npx ray evals` command. This will run the evals and print the results to the console. You get an overview of the evals that failed and the ones that passed. From here you can start improving the names and descriptions of your tools.

Visit [Learn Core Concepts of AI Extensions](/ai/learn-core-concepts-of-ai-extensions.md#evals) to learn more about the different types of evals you can write.


---

# Agent Instructions
This documentation is published with GitBook. GitBook is the documentation platform designed so that both humans and AI agents can read, navigate, and reason over technical content effectively. Learn more at gitbook.com.

## Querying This Documentation
If you need additional information that is not directly available in this page, you can query the documentation dynamically by asking a question.

Perform an HTTP GET request on the current page URL with the `ask` query parameter:

```
GET https://developers.raycast.com/ai/write-evals-for-your-ai-extension.md?ask=<question>
```

The question should be specific, self-contained, and written in natural language.
The response will contain a direct answer to the question and relevant excerpts and sources from the documentation.

Use this mechanism when the answer is not explicitly present in the current page, you need clarification or additional context, or you want to retrieve related documentation sections.
