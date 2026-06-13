> For the complete documentation index, see [llms.txt](https://developers.raycast.com/llms.txt). Markdown versions of documentation pages are available by appending `.md` to page URLs; this page is available as [Markdown](https://developers.raycast.com/basics/getting-started.md).

# Getting Started

## System Requirements

Before you can create your first extension, make sure you have the following prerequisites.

* You have Raycast 1.26.0 or higher installed.
* You have [Node.js](https://nodejs.org) 22.14 or higher installed. We recommend [nvm](https://github.com/nvm-sh/nvm) to install Node.
* You have [npm](http://npmjs.com) 7 or higher
* You are familiar with [React](https://reactjs.org) and [TypeScript](https://www.typescriptlang.org). Don't worry, you don't need to be an expert. If you need some help with the basics, check out TypeScript's [Handbook](https://www.typescriptlang.org/docs/handbook/intro.html) and React's [Getting Started](https://react.dev/learn) guide.

## Sign In

![Opening the "Store" command in Raycast](/files/5OQFZ5ha7iayQA8d54Bq)

You need to be signed in to use the following extension development commands.

* **Store:** Search and install all published extensions
* **Create Extension:** Create new extensions from templates
* **Import Extension:** Import extensions from source code
* **Manage Extensions**: List and edit your published extensions


---

# Agent Instructions
This documentation is published with GitBook. GitBook is the documentation platform designed so that both humans and AI agents can read, navigate, and reason over technical content effectively. Learn more at gitbook.com.

## Querying This Documentation
If you need additional information that is not directly available in this page, you can query the documentation dynamically by asking a question.

Perform an HTTP GET request on the current page URL with the `ask` query parameter:

```
GET https://developers.raycast.com/basics/getting-started.md?ask=<question>
```

The question should be specific, self-contained, and written in natural language.
The response will contain a direct answer to the question and relevant excerpts and sources from the documentation.

Use this mechanism when the answer is not explicitly present in the current page, you need clarification or additional context, or you want to retrieve related documentation sections.
