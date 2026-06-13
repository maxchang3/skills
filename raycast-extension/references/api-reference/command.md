> For the complete documentation index, see [llms.txt](https://developers.raycast.com/llms.txt). Markdown versions of documentation pages are available by appending `.md` to page URLs; this page is available as [Markdown](https://developers.raycast.com/api-reference/command.md).

# Command

This set of utilities to work with Raycast commands.

## API Reference

### launchCommand

Launches another command. If the command does not exist, or if it's not enabled, an error will be thrown.\
If the command is part of another extension, the user will be presented with a permission alert.\
Use this method if your command needs to open another command based on user interaction,\
or when an immediate background refresh should be triggered, for example when a command needs to update an associated menu-bar command.

#### Signature

```typescript
export async function launchCommand(options: LaunchOptions): Promise<void>;
```

#### Example

```typescript
import { launchCommand, LaunchType } from "@raycast/api";

export default async function Command() {
  await launchCommand({ name: "list", type: LaunchType.UserInitiated, context: { foo: "bar" } });
}
```

#### Parameters

| Name                                      | Description                                                                    | Type                              |
| ----------------------------------------- | ------------------------------------------------------------------------------ | --------------------------------- |
| options<mark style="color:red;">\*</mark> | Options to launch a command within the same extension or in another extension. | [`LaunchOptions`](#launchoptions) |

#### Return

A Promise that resolves when the command has been launched. (Note that this does not indicate that the launched command has finished executing.)

### updateCommandMetadata

Update the values of properties declared in the manifest of the current command. Note that currently only `subtitle` is supported. Pass `null` to clear the custom subtitle.

{% hint style="info" %}
The actual manifest file is not modified, so the update applies as long as the command remains installed.
{% endhint %}

#### Signature

```typescript
export async function updateCommandMetadata(metadata: { subtitle?: string | null }): Promise<void>;
```

#### Example

```typescript
import { updateCommandMetadata } from "@raycast/api";

async function fetchUnreadNotificationCount() {
  return 10;
}

export default async function Command() {
  const count = await fetchUnreadNotificationCount();
  await updateCommandMetadata({ subtitle: `Unread Notifications: ${count}` });
}
```

#### Return

A Promise that resolves when the command's metadata have been updated.

## Types

### LaunchContext

Represents the passed context object of programmatic command launches.

### LaunchOptions

A parameter object used to decide which command should be launched and what data (arguments, context) it should receive.

#### IntraExtensionLaunchOptions

The options that can be used when launching a command from the same extension.

| Property                               | Description                                                                                                                                                             | Type                                                                   |
| -------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------- |
| name<mark style="color:red;">\*</mark> | Command name as defined in the extension's manifest                                                                                                                     | `string`                                                               |
| type<mark style="color:red;">\*</mark> | LaunchType.UserInitiated or LaunchType.Background                                                                                                                       | [`LaunchType`](/api-reference/environment.md#launchtype)               |
| arguments                              | Optional object for the argument properties and values as defined in the extension's manifest, for example: `{ "argument1": "value1" }`                                 | [`Arguments`](/information/lifecycle/arguments.md#arguments) or `null` |
| context                                | Arbitrary object for custom data that should be passed to the command and accessible as LaunchProps; the object must be JSON serializable (Dates and Buffers supported) | [`LaunchContext`](#launchcontext) or `null`                            |
| fallbackText                           | Optional string to send as fallback text to the command                                                                                                                 | `string` or `null`                                                     |

#### InterExtensionLaunchOptions

The options that can be used when launching a command from a different extension.

| Property                                            | Description                                                                                                                                                             | Type                                                                   |
| --------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------- |
| extensionName<mark style="color:red;">\*</mark>     | When launching command from a different extension, the extension name (as defined in the extension's manifest) is necessary                                             | `string`                                                               |
| name<mark style="color:red;">\*</mark>              | Command name as defined in the extension's manifest                                                                                                                     | `string`                                                               |
| ownerOrAuthorName<mark style="color:red;">\*</mark> | When launching command from a different extension, the owner or author (as defined in the extension's manifest) is necessary                                            | `string`                                                               |
| type<mark style="color:red;">\*</mark>              | LaunchType.UserInitiated or LaunchType.Background                                                                                                                       | [`LaunchType`](/api-reference/environment.md#launchtype)               |
| arguments                                           | Optional object for the argument properties and values as defined in the extension's manifest, for example: `{ "argument1": "value1" }`                                 | [`Arguments`](/information/lifecycle/arguments.md#arguments) or `null` |
| context                                             | Arbitrary object for custom data that should be passed to the command and accessible as LaunchProps; the object must be JSON serializable (Dates and Buffers supported) | [`LaunchContext`](#launchcontext) or `null`                            |
| fallbackText                                        | Optional string to send as fallback text to the command                                                                                                                 | `string` or `null`                                                     |


---

# Agent Instructions
This documentation is published with GitBook. GitBook is the documentation platform designed so that both humans and AI agents can read, navigate, and reason over technical content effectively. Learn more at gitbook.com.

## Querying This Documentation
If you need additional information that is not directly available in this page, you can query the documentation dynamically by asking a question.

Perform an HTTP GET request on the current page URL with the `ask` query parameter:

```
GET https://developers.raycast.com/api-reference/command.md?ask=<question>
```

The question should be specific, self-contained, and written in natural language.
The response will contain a direct answer to the question and relevant excerpts and sources from the documentation.

Use this mechanism when the answer is not explicitly present in the current page, you need clarification or additional context, or you want to retrieve related documentation sections.
