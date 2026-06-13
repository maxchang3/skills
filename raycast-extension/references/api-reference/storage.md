> For the complete documentation index, see [llms.txt](https://developers.raycast.com/llms.txt). Markdown versions of documentation pages are available by appending `.md` to page URLs; this page is available as [Markdown](https://developers.raycast.com/api-reference/storage.md).

# Storage

The storage APIs can be used to store data in Raycast's [local encrypted database](/information/security.md#data-storage).

All commands in an extension have shared access to the stored data. Extensions can *not* access the storage of other extensions.

Values can be managed through functions such as [`LocalStorage.getItem`](#localstorage.getitem), [`LocalStorage.setItem`](#localstorage.setitem), or [`LocalStorage.removeItem`](#localstorage.removeitem). A typical use case is storing user-related data, for example entered todos.

{% hint style="info" %}
The API is not meant to store large amounts of data. For this, use [Node's built-in APIs to write files](https://nodejs.org/en/learn/manipulating-files/writing-files-with-nodejs), e.g. to the extension's [support directory](/api-reference/environment.md#environment).
{% endhint %}

## API Reference

### LocalStorage.getItem

Retrieve the stored value for the given key.

#### Signature

```typescript
async function getItem(key: string): Promise<Value | undefined>;
```

#### Example

```typescript
import { LocalStorage } from "@raycast/api";

export default async function Command() {
  await LocalStorage.setItem("favorite-fruit", "apple");
  const item = await LocalStorage.getItem<string>("favorite-fruit");
  console.log(item);
}
```

#### Parameters

| Name                                  | Description                                | Type     |
| ------------------------------------- | ------------------------------------------ | -------- |
| key<mark style="color:red;">\*</mark> | The key you want to retrieve the value of. | `string` |

#### Return

A Promise that resolves with the stored value for the given key. If the key does not exist, `undefined` is returned.

### LocalStorage.setItem

Stores a value for the given key.

#### Signature

```typescript
async function setItem(key: string, value: Value): Promise<void>;
```

#### Example

```typescript
import { LocalStorage } from "@raycast/api";

export default async function Command() {
  await LocalStorage.setItem("favorite-fruit", "apple");
  const item = await LocalStorage.getItem<string>("favorite-fruit");
  console.log(item);
}
```

#### Parameters

| Name                                    | Description                                               | Type                                        |
| --------------------------------------- | --------------------------------------------------------- | ------------------------------------------- |
| key<mark style="color:red;">\*</mark>   | The key you want to create or update the value of.        | `string`                                    |
| value<mark style="color:red;">\*</mark> | The value you want to create or update for the given key. | [`LocalStorage.Value`](#localstorage.value) |

#### Return

A Promise that resolves when the value is stored.

### LocalStorage.removeItem

Removes the stored value for the given key.

#### Signature

```typescript
async function removeItem(key: string): Promise<void>;
```

#### Example

```typescript
import { LocalStorage } from "@raycast/api";

export default async function Command() {
  await LocalStorage.setItem("favorite-fruit", "apple");
  console.log(await LocalStorage.getItem<string>("favorite-fruit"));
  await LocalStorage.removeItem("favorite-fruit");
  console.log(await LocalStorage.getItem<string>("favorite-fruit"));
}
```

#### Parameters

| Name                                  | Description                              | Type     |
| ------------------------------------- | ---------------------------------------- | -------- |
| key<mark style="color:red;">\*</mark> | The key you want to remove the value of. | `string` |

#### Return

A Promise that resolves when the value is removed.

### LocalStorage.allItems

Retrieve all stored values in the local storage of an extension.

#### Signature

```typescript
async function allItems(): Promise<Values>;
```

#### Example

```typescript
import { LocalStorage } from "@raycast/api";

interface Values {
  todo: string;
  priority: number;
}

export default async function Command() {
  const items = await LocalStorage.allItems<Values>();
  console.log(`Local storage item count: ${Object.entries(items).length}`);
}
```

#### Return

A Promise that resolves with an object containing all [Values](#localstorage.values).

### LocalStorage.clear

Removes all stored values of an extension.

#### Signature

```typescript
async function clear(): Promise<void>;
```

#### Example

```typescript
import { LocalStorage } from "@raycast/api";

export default async function Command() {
  await LocalStorage.clear();
}
```

#### Return

A Promise that resolves when all values are removed.

## Types

### LocalStorage.Values

Values of local storage items.

For type-safe values, you can define your own interface. Use the keys of the local storage items as the property names.

#### Properties

| Name           | Type  | Description                             |
| -------------- | ----- | --------------------------------------- |
| \[key: string] | `any` | The local storage value of a given key. |

### LocalStorage.Value

```typescript
Value: string | number | boolean;
```

Supported storage value types.

#### Example

```typescript
import { LocalStorage } from "@raycast/api";

export default async function Command() {
  // String
  await LocalStorage.setItem("favorite-fruit", "cherry");

  // Number
  await LocalStorage.setItem("fruit-basket-count", 3);

  // Boolean
  await LocalStorage.setItem("fruit-eaten-today", true);
}
```


---

# Agent Instructions
This documentation is published with GitBook. GitBook is the documentation platform designed so that both humans and AI agents can read, navigate, and reason over technical content effectively. Learn more at gitbook.com.

## Querying This Documentation
If you need additional information that is not directly available in this page, you can query the documentation dynamically by asking a question.

Perform an HTTP GET request on the current page URL with the `ask` query parameter:

```
GET https://developers.raycast.com/api-reference/storage.md?ask=<question>
```

The question should be specific, self-contained, and written in natural language.
The response will contain a direct answer to the question and relevant excerpts and sources from the documentation.

Use this mechanism when the answer is not explicitly present in the current page, you need clarification or additional context, or you want to retrieve related documentation sections.
