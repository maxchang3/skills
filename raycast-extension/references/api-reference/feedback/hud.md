> For the complete documentation index, see [llms.txt](https://developers.raycast.com/llms.txt). Markdown versions of documentation pages are available by appending `.md` to page URLs; this page is available as [Markdown](https://developers.raycast.com/api-reference/feedback/hud.md).

# HUD

When the user takes an action that has the side effect of closing Raycast (for example when copying something in the [Clipboard](/api-reference/clipboard.md)), you can use a HUD to confirm that the action worked properly.

![](/files/m0UfB9PkHck48Uel6Bmk)

## API Reference

### showHUD

A HUD will automatically hide the main window and show a compact message at the bottom of the screen.

#### Signature

```typescript
async function showHUD(
  title: string,
  options?: { clearRootSearch?: boolean; popToRootType?: PopToRootType }
): Promise<void>;
```

#### Example

```typescript
import { showHUD } from "@raycast/api";

export default async function Command() {
  await showHUD("Hey there 👋");
}
```

`showHUD` closes the main window when called, so you can use the same options as `closeMainWindow`:

```typescript
import { PopToRootType, showHUD } from "@raycast/api";

export default async function Command() {
  await showHUD("Hey there 👋", { clearRootSearch: true, popToRootType: PopToRootType.Immediate });
}
```

#### Parameters

| Name                                    | Description                                                                                                                          | Type                                                                     |
| --------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------ |
| title<mark style="color:red;">\*</mark> | The title that will be displayed in the HUD.                                                                                         | `string`                                                                 |
| options                                 | Can be used to control the behaviour after closing the main window.                                                                  | `Object`                                                                 |
| options.clearRootSearch                 | Clears the text in the root search bar and scrolls to the top                                                                        | `boolean`                                                                |
| options.popToRootType                   | Defines the pop to root behavior (PopToRootType); the default is to to respect the user's "Pop to Root Search" preference in Raycast | [`PopToRootType`](/api-reference/window-and-search-bar.md#poptoroottype) |

#### Return

A Promise that resolves when the HUD is shown.


---

# Agent Instructions
This documentation is published with GitBook. GitBook is the documentation platform designed so that both humans and AI agents can read, navigate, and reason over technical content effectively. Learn more at gitbook.com.

## Querying This Documentation
If you need additional information that is not directly available in this page, you can query the documentation dynamically by asking a question.

Perform an HTTP GET request on the current page URL with the `ask` query parameter:

```
GET https://developers.raycast.com/api-reference/feedback/hud.md?ask=<question>
```

The question should be specific, self-contained, and written in natural language.
The response will contain a direct answer to the question and relevant excerpts and sources from the documentation.

Use this mechanism when the answer is not explicitly present in the current page, you need clarification or additional context, or you want to retrieve related documentation sections.
