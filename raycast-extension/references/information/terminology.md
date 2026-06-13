> For the complete documentation index, see [llms.txt](https://developers.raycast.com/llms.txt). Markdown versions of documentation pages are available by appending `.md` to page URLs; this page is available as [Markdown](https://developers.raycast.com/information/terminology.md).

# Terminology

## Action

Actions are accessible via the [Action Panel](#action-panel) in a [command](#command). They are little functionality to control something; for example, to add a label to the selected GitHub issue, copy the link to a Linear issue, or anything else. Actions can have assigned keyboard shortcuts.

## Action Panel

Action Panel is located on the bottom right and can be opened with `⌘` `K`. It contains all currently available [actions](#action) and makes them easily discoverable.

## AI Extensions

AI Extensions are simply regular [extensions](#extension) that have [tools](#tool). Once an extension has some tools, a user can `@mention` the extension in Quick AI, or the AI Commands, or the AI Chat. When doing so, the AI will have the opportunity to call one or multiple tools of the extensions mentioned.

## Command

Commands are a type of entry point for an extension. Commands are available in the root search of Raycast. They can be a simple script or lists, forms, and more complex UI.

## Extension

Extensions add functionality to Raycast. They consist of one or many [commands](#command) and can be installed from the Store.

## Manifest

Manifest is the `package.json` file of an [extension](#extension). It's an npm package mixed with Raycast specific metadata. The latter is necessary to identify the package for Raycast and publish it to the Store.

## Tool

Tools are a type of entry point for an extension. As opposed to a [command](#command), they don’t show up in the root search and the user can’t directly interact with them. Instead, they are functionalities that the AI can use to interact with an extension.


---

# Agent Instructions
This documentation is published with GitBook. GitBook is the documentation platform designed so that both humans and AI agents can read, navigate, and reason over technical content effectively. Learn more at gitbook.com.

## Querying This Documentation
If you need additional information that is not directly available in this page, you can query the documentation dynamically by asking a question.

Perform an HTTP GET request on the current page URL with the `ask` query parameter:

```
GET https://developers.raycast.com/information/terminology.md?ask=<question>
```

The question should be specific, self-contained, and written in natural language.
The response will contain a direct answer to the question and relevant excerpts and sources from the documentation.

Use this mechanism when the answer is not explicitly present in the current page, you need clarification or additional context, or you want to retrieve related documentation sections.
