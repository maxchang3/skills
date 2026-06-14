# Cookbook Snippets

> For comprehensive examples, see `references/examples/`.

### 1. List & Grid (Searchable UI)

Use `List` for text-heavy data and `Grid` for image-heavy data. You can switch from `List` to `Grid` by changing `icon` to `content` and removing `detail` and `accessories`.

```tsx
<List isLoading={isLoading} searchBarPlaceholder="Search items..." throttle>
  <List.Item
    title="Item Title"
    subtitle="Subtitle"
    accessories={[{ text: "Tag" }]}
    actions={
      <ActionPanel>
        <Action.Push title="View Details" target={<Detail markdown="# Details" />} />
        <Action.CopyToClipboard title="Copy" content="value" />
      </ActionPanel>
    }
  />
</List>
```

### 2. Detail (Rich Markdown)

Use for displaying long-form content or item details.

```tsx
<Detail
  isLoading={isLoading}
  markdown="# Heading\nContent here."
  metadata={
    <Detail.Metadata>
      <Detail.Metadata.Label title="Status" text="Active" icon={Icon.Checkmark} />
    </Detail.Metadata>
  }
/>
```

### 3. Form (User Input)

Always include a `SubmitForm` action.

```tsx
<Form
  actions={
    <ActionPanel>
      <Action.SubmitForm onSubmit={(values) => console.log(values)} />
    </ActionPanel>
  }
>
  <Form.TextField id="title" title="Title" placeholder="Enter title" />
  <Form.TextArea id="description" title="Description" />
</Form>
```

### 4. Feedback & Interactivity

Prefer `showToast` for most feedback.

```typescript
// Success/Failure
await showToast({ style: Toast.Style.Success, title: "Success!" });

// HUD (Overlay)
await showHUD("Done!");
```

### 5. Data Persistence

Use `Cache` for performance, `LocalStorage` for persistence.

```typescript
// Cache (Sync/Transient)
const cache = new Cache();
cache.set("key", "value");

// LocalStorage (Async/Persistent)
await LocalStorage.setItem("key", "value");
```

### 6. AI & Browser Extension (Restricted APIs)

Always wrap in `environment.canAccess` checks.

```typescript
if (environment.canAccess(AI)) {
  const result = await AI.ask("Prompt");
}

if (environment.canAccess(BrowserExtension)) {
  const tabs = await BrowserExtension.getTabs();
}
```
