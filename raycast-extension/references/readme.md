> For the complete documentation index, see [llms.txt](https://developers.raycast.com/llms.txt). Markdown versions of documentation pages are available by appending `.md` to page URLs; this page is available as [Markdown](https://developers.raycast.com/readme.md).

# Introduction

Welcome, developers! Our docs cover guides, examples, references, and more to help you build extensions and share them with [our community](https://raycast.com/community) and [your team](/teams/getting-started.md).

![](/files/ZsS9KGMtcehM70c2tUwC)

The Raycast Platform consists of two parts:

* **API:** This allows developers to build rich extensions with React, Node.js, and TypeScript. The docs explain how to use the API to build top-notch experiences.
* **Store:** This lets developers share their extensions with all Raycast users. You'll learn how to [publish your extension](/basics/publish-an-extension.md).

## Key features

Here are a few points that make our ecosystem special:

* **Powerful and familiar tooling:** Extensions are built with TypeScript, React, and Node. Leverage npm's ecosystem to quickly build what you imagine.
* **No-brainer to build UI:** You concentrate on the logic, we push the pixels. Use our built-in UI components to be consistent with all our extensions.
* **Collaborate with our community:** Build your extension, share it with our community, and get inspired by others.
* **Developer experience front and foremost:** A strongly typed API, hot-reloading, and modern tooling that makes it a blast to work with.
* **Easy to start, flexible to scale:** Start with a simple script, add a static UI or use React to go wild. Anything goes.

## Overview

A quick overview about where to find what in our docs:

* [**Basics:**](/basics/getting-started.md) Go over this section to learn how to build extensions in our step-by-step guides.
* [**Teams:**](/teams/getting-started.md) Build and share extensions with your teammates to speed up common workflows.
* [**Examples:**](/examples/doppler.md) Kickstart your extension by using an open-source example and learn as you go.
* [**Information:**](/information/best-practices.md) Get the background knowledge to master your understanding of our platform.
* [**API Reference:**](/api-reference/ai.md) Go into details with the API reference that includes code snippets.
* [**Utilities:**](/utilities/getting-started.md) A set of utilities to streamline common patterns and operations used in extensions.

Now, let's build 💪


---

# Agent Instructions
This documentation is published with GitBook. GitBook is the documentation platform designed so that both humans and AI agents can read, navigate, and reason over technical content effectively. Learn more at gitbook.com.

## Querying This Documentation
If you need additional information that is not directly available in this page, you can query the documentation dynamically by asking a question.

Perform an HTTP GET request on the current page URL with the `ask` query parameter:

```
GET https://developers.raycast.com/readme.md?ask=<question>
```

The question should be specific, self-contained, and written in natural language.
The response will contain a direct answer to the question and relevant excerpts and sources from the documentation.

Use this mechanism when the answer is not explicitly present in the current page, you need clarification or additional context, or you want to retrieve related documentation sections.
