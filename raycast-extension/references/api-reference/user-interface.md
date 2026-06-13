> For the complete documentation index, see [llms.txt](https://developers.raycast.com/llms.txt). Markdown versions of documentation pages are available by appending `.md` to page URLs; this page is available as [Markdown](https://developers.raycast.com/api-reference/user-interface.md).

# User Interface

Raycast uses React for its user interface declaration and renders the supported elements to our native UI. The API comes with a set of UI components that you can use to build your extensions. Think of it as a design system. The high-level components are the following:

* [List](/api-reference/user-interface/list.md) to show multiple similar items, f.e. a list of your open todos.
* [Grid](/api-reference/user-interface/grid.md) similar to a List but with more legroom to show an image for each item, f.e. a collection of icons.
* [Detail](/api-reference/user-interface/detail.md) to present more information, f.e. the details of a GitHub pull request.
* [Form](/api-reference/user-interface/form.md) to create new content, f.e. filing a bug report.

Each component can provide interaction via an [ActionPanel](/api-reference/user-interface/action-panel.md). The panel has a list of [Actions](/api-reference/user-interface/actions.md) where each one can be associated with a [keyboard shortcut](/api-reference/keyboard.md). Shortcuts allow users to use Raycast without using their mouse.

## Rendering

To render a user interface, you need to do the following:

* Set the `mode` to `view` in the [`package.json` manifest file](/information/manifest.md#command-properties)
* Export a React component from your command entry file

As a general rule of thumb, you should render something as quickly as possible. This guarantees that your command feels responsive. If you don't have data available to show, you can set the `isLoading` prop to `true` on top-level components such as [`<Detail>`](/api-reference/user-interface/detail.md), [`<Form>`](/api-reference/user-interface/form.md), or [`<List>`](/api-reference/user-interface/list.md). It shows a loading indicator at the top of Raycast.

Here is an example that shows a loading indicator for 2 seconds after the command got launched:

```typescript
import { List } from "@raycast/api";
import { useEffect, useState } from "react";

export default function Command() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => setIsLoading(false), 2000);
  }, []);

  return <List isLoading={isLoading}>{/* Render your data */}</List>;
}
```


---

# Agent Instructions
This documentation is published with GitBook. GitBook is the documentation platform designed so that both humans and AI agents can read, navigate, and reason over technical content effectively. Learn more at gitbook.com.

## Querying This Documentation
If you need additional information that is not directly available in this page, you can query the documentation dynamically by asking a question.

Perform an HTTP GET request on the current page URL with the `ask` query parameter:

```
GET https://developers.raycast.com/api-reference/user-interface.md?ask=<question>
```

The question should be specific, self-contained, and written in natural language.
The response will contain a direct answer to the question and relevant excerpts and sources from the documentation.

Use this mechanism when the answer is not explicitly present in the current page, you need clarification or additional context, or you want to retrieve related documentation sections.
