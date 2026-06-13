> For the complete documentation index, see [llms.txt](https://developers.raycast.com/llms.txt). Markdown versions of documentation pages are available by appending `.md` to page URLs; this page is available as [Markdown](https://developers.raycast.com/api-reference/feedback/alert.md).

# Alert

When the user takes an important action (for example when irreversibly deleting something), you can ask for confirmation by using `confirmAlert`.

![](/files/vQLVEcQrOYPBncc5nzMq)

## API Reference

### confirmAlert

Creates and shows a confirmation Alert with the given [options](#alert.options).

#### Signature

```typescript
async function confirmAlert(options: Alert.Options): Promise<boolean>;
```

#### Example

```typescript
import { confirmAlert } from "@raycast/api";

export default async function Command() {
  if (await confirmAlert({ title: "Are you sure?" })) {
    console.log("confirmed");
    // do something
  } else {
    console.log("canceled");
  }
}
```

#### Parameters

| Name                                      | Description                           | Type                              |
| ----------------------------------------- | ------------------------------------- | --------------------------------- |
| options<mark style="color:red;">\*</mark> | The options used to create the Alert. | [`Alert.Options`](#alert.options) |

#### Return

A Promise that resolves to a boolean when the user triggers one of the actions.\
It will be `true` for the primary Action, `false` for the dismiss Action.

## Types

### Alert.Options

The options to create an Alert.

#### Example

```typescript
import { Alert, confirmAlert } from "@raycast/api";

export default async function Command() {
  const options: Alert.Options = {
    title: "Finished cooking",
    message: "Delicious pasta for lunch",
    primaryAction: {
      title: "Do something",
      onAction: () => {
        // while you can register a handler for an action, it's more elegant
        // to use the `if (await confirmAlert(...)) { ... }` pattern
        console.log("The alert action has been triggered");
      },
    },
  };
  await confirmAlert(options);
}
```

#### Properties

| Property                                | Description                                                                                                                                                                                                                                                | Type                                                                                                                  |
| --------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------- |
| title<mark style="color:red;">\*</mark> | The title of an alert. Displayed below the icon.                                                                                                                                                                                                           | `string`                                                                                                              |
| dismissAction                           | The Action to dismiss the alert. There usually shouldn't be any side effects when the user takes this action.                                                                                                                                              | [`Alert.ActionOptions`](#alert.actionoptions)                                                                         |
| icon                                    | The icon of an alert to illustrate the action. Displayed on the top.                                                                                                                                                                                       | [`Image.ImageLike`](https://developers.raycast.com/api-reference/feedback/pages/-MiwANRdFuMoKkR6at_E#image.imagelike) |
| message                                 | An additional message for an Alert. Useful to show more information, e.g. a confirmation message for a destructive action.                                                                                                                                 | `string`                                                                                                              |
| primaryAction                           | The primary Action the user can take.                                                                                                                                                                                                                      | [`Alert.ActionOptions`](#alert.actionoptions)                                                                         |
| rememberUserChoice                      | If set to true, the Alert will also display a `Do not show this message again` checkbox. When checked, the answer is persisted and directly returned to the extension the next time the alert should be shown, without the user actually seeing the alert. | `boolean`                                                                                                             |

### Alert.ActionOptions

The options to create an Alert Action.

#### Properties

| Property                                | Description                                     | Type                                      |
| --------------------------------------- | ----------------------------------------------- | ----------------------------------------- |
| title<mark style="color:red;">\*</mark> | The title of the action.                        | `string`                                  |
| onAction                                | A callback called when the action is triggered. | `() => void`                              |
| style                                   | The style of the action.                        | [`Alert.ActionStyle`](#alert.actionstyle) |

### Alert.ActionStyle

Defines the visual style of an Action of the Alert.

Use [Alert.ActionStyle.Default](#alert.actionstyle) for confirmations of a positive action.\
Use [Alert.ActionStyle.Destructive](#alert.actionstyle) for confirmations of a destructive action (eg. deleting a file).

#### Enumeration members

| Name        | Value                            |
| ----------- | -------------------------------- |
| Default     | ![](/files/ShpFTsD8Vwn5btGFXcuX) |
| Destructive | ![](/files/nuVI4TyncukC2w1dIkPi) |
| Cancel      | ![](/files/9Ykp3RQrgxMBAQof70Hq) |


---

# Agent Instructions
This documentation is published with GitBook. GitBook is the documentation platform designed so that both humans and AI agents can read, navigate, and reason over technical content effectively. Learn more at gitbook.com.

## Querying This Documentation
If you need additional information that is not directly available in this page, you can query the documentation dynamically by asking a question.

Perform an HTTP GET request on the current page URL with the `ask` query parameter:

```
GET https://developers.raycast.com/api-reference/feedback/alert.md?ask=<question>
```

The question should be specific, self-contained, and written in natural language.
The response will contain a direct answer to the question and relevant excerpts and sources from the documentation.

Use this mechanism when the answer is not explicitly present in the current page, you need clarification or additional context, or you want to retrieve related documentation sections.
