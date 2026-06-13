> For the complete documentation index, see [llms.txt](https://developers.raycast.com/llms.txt). Markdown versions of documentation pages are available by appending `.md` to page URLs; this page is available as [Markdown](https://developers.raycast.com/api-reference/clipboard.md).

# Clipboard

Use the Clipboard APIs to work with content from your clipboard. You can write contents to the clipboard through [`Clipboard.copy`](#clipboard.copy) and clear it through [`Clipboard.clear`](#clipboard.clear). The [`Clipboard.paste`](#clipboard.paste) function inserts text at the current cursor position in your frontmost app.

The action [`Action.CopyToClipboard`](https://developers.raycast.com/api-reference/pages/-MiwANRaRK1jG1WJw3dy#action.copytoclipboard) can be used to copy content of a selected list item to the clipboard and the action [`Action.Paste`](https://developers.raycast.com/api-reference/pages/-MiwANRaRK1jG1WJw3dy#action.paste) can be used to insert text in your frontmost app.

## API Reference

### Clipboard.copy

Copies text or a file to the clipboard.

#### Signature

```typescript
async function copy(content: string | number | Content, options?: CopyOptions): Promise<void>;
```

#### Example

```typescript
import { Clipboard } from "@raycast/api";

export default async function Command() {
  // copy some text
  await Clipboard.copy("https://raycast.com");

  const textContent: Clipboard.Content = {
    text: "https://raycast.com",
  };
  await Clipboard.copy(textContent);

  // copy a file
  const file = "/path/to/file.pdf";
  try {
    const fileContent: Clipboard.Content = { file };
    await Clipboard.copy(fileContent);
  } catch (error) {
    console.log(`Could not copy file '${file}'. Reason: ${error}`);
  }

  // copy confidential data
  await Clipboard.copy("my-secret-password", { concealed: true });
}
```

#### Parameters

| Name                                      | Description                           | Type                                                              |
| ----------------------------------------- | ------------------------------------- | ----------------------------------------------------------------- |
| content<mark style="color:red;">\*</mark> | The content to copy to the clipboard. | `string` or `number` or [`Clipboard.Content`](#clipboard.content) |
| options                                   | Options for the copy operation.       | [`Clipboard.CopyOptions`](#clipboard.copyoptions)                 |

#### Return

A Promise that resolves when the content is copied to the clipboard.

### Clipboard.paste

Pastes text or a file to the current selection of the frontmost application.

#### Signature

```typescript
async function paste(content: string | Content): Promise<void>;
```

#### Example

```typescript
import { Clipboard } from "@raycast/api";

export default async function Command() {
  await Clipboard.paste("I really like Raycast's API");
}
```

#### Parameters

| Name                                      | Description                          | Type                                                              |
| ----------------------------------------- | ------------------------------------ | ----------------------------------------------------------------- |
| content<mark style="color:red;">\*</mark> | The content to insert at the cursor. | `string` or `number` or [`Clipboard.Content`](#clipboard.content) |

#### Return

A Promise that resolves when the content is pasted.

### Clipboard.clear

Clears the current clipboard contents.

#### Signature

```typescript
async function clear(): Promise<void>;
```

#### Example

```typescript
import { Clipboard } from "@raycast/api";

export default async function Command() {
  await Clipboard.clear();
}
```

#### Return

A Promise that resolves when the clipboard is cleared.

### Clipboard.read

Reads the clipboard content as plain text, file name, or HTML.

#### Signature

```typescript
async function read(options?: { offset?: number }): Promise<ReadContent>;
```

#### Example

```typescript
import { Clipboard } from "@raycast/api";

export default async () => {
  const { text, file, html } = await Clipboard.read();
  console.log(text);
  console.log(file);
  console.log(html);
};
```

#### Parameters

| Name           | Description                                                                                | Type     |
| -------------- | ------------------------------------------------------------------------------------------ | -------- |
| options        | Options for the read operation.                                                            | `Object` |
| options.offset | Specify an offset to access the Clipboard History. Minimum value is 0, maximum value is 5. | `number` |

#### Return

A promise that resolves when the clipboard content was read as plain text, file name, or HTML.

### Clipboard.readText

Reads the clipboard as plain text.

#### Signature

```typescript
async function readText(options?: { offset?: number }): Promise<string | undefined>;
```

#### Example

```typescript
import { Clipboard } from "@raycast/api";

export default async function Command() {
  const text = await Clipboard.readText();
  console.log(text);
}
```

#### Parameters

| Name           | Description                                                                                | Type     |
| -------------- | ------------------------------------------------------------------------------------------ | -------- |
| options        | Options for the readText operation.                                                        | `Object` |
| options.offset | Specify an offset to access the Clipboard History. Minimum value is 0, maximum value is 5. | `number` |

#### Return

A promise that resolves once the clipboard content is read as plain text.

## Types

### Clipboard.Content

Type of content that is copied and pasted to and from the Clipboard

```typescript
type Content =
  | {
      text: string;
    }
  | {
      file: PathLike;
    }
  | {
      html: string;
      text?: string; // The alternative text representation of the content.
    };
```

### Clipboard.ReadContent

Type of content that is read from the Clipboard

```typescript
type Content =
  | {
      text: string;
    }
  | {
      file?: string;
    }
  | {
      html?: string;
    };
```

### Clipboard.CopyOptions

Type of options passed to `Clipboard.copy`.

#### Properties

| Property  | Description                                                                                                            | Type      |
| --------- | ---------------------------------------------------------------------------------------------------------------------- | --------- |
| concealed | Indicates whether the content be treated as confidential. If `true`, it will not be recorded in the Clipboard History. | `boolean` |


---

# Agent Instructions
This documentation is published with GitBook. GitBook is the documentation platform designed so that both humans and AI agents can read, navigate, and reason over technical content effectively. Learn more at gitbook.com.

## Querying This Documentation
If you need additional information that is not directly available in this page, you can query the documentation dynamically by asking a question.

Perform an HTTP GET request on the current page URL with the `ask` query parameter:

```
GET https://developers.raycast.com/api-reference/clipboard.md?ask=<question>
```

The question should be specific, self-contained, and written in natural language.
The response will contain a direct answer to the question and relevant excerpts and sources from the documentation.

Use this mechanism when the answer is not explicitly present in the current page, you need clarification or additional context, or you want to retrieve related documentation sections.
