> For the complete documentation index, see [llms.txt](https://developers.raycast.com/llms.txt). Markdown versions of documentation pages are available by appending `.md` to page URLs; this page is available as [Markdown](https://developers.raycast.com/utilities/icons/getavataricon.md).

# getAvatarIcon

Icon to represent an avatar when you don't have one. The generated avatar will be generated from the initials of the name and have a colorful but consistent background.

![Avatar Icon example](/files/lla4WXz1PTLF2fdeIyDb)

## Signature

```ts
function getAvatarIcon(
  name: string,
  options?: {
    background?: string;
    gradient?: boolean;
  },
): Image.Asset;
```

* `name` is a string of the subject's name.
* `options.background` is a hexadecimal representation of a color to be used as the background color. By default, the hook will pick a random but consistent (eg. the same name will the same color) color from a set handpicked to nicely match Raycast.
* `options.gradient` is a boolean to choose whether the background should have a slight gradient or not. By default, it will.

Returns an [Image.Asset](/api-reference/user-interface/icons-and-images.md) that can be used where Raycast expects them.

## Example

```tsx
import { List } from "@raycast/api";
import { getAvatarIcon } from "@raycast/utils";

export default function Command() {
  return (
    <List>
      <List.Item icon={getAvatarIcon("John Doe")} title="John Doe" />
    </List>
  );
}
```


---

# Agent Instructions
This documentation is published with GitBook. GitBook is the documentation platform designed so that both humans and AI agents can read, navigate, and reason over technical content effectively. Learn more at gitbook.com.

## Querying This Documentation
If you need additional information that is not directly available in this page, you can query the documentation dynamically by asking a question.

Perform an HTTP GET request on the current page URL with the `ask` query parameter:

```
GET https://developers.raycast.com/utilities/icons/getavataricon.md?ask=<question>
```

The question should be specific, self-contained, and written in natural language.
The response will contain a direct answer to the question and relevant excerpts and sources from the documentation.

Use this mechanism when the answer is not explicitly present in the current page, you need clarification or additional context, or you want to retrieve related documentation sections.
