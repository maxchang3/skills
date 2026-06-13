---
name: raycast-extension
description: Use when building, debugging, or maintaining Raycast extensions. Triggers for @raycast/api components, extension preferences, Raycast utilities, command architecture, publishing requirements, and cross-platform compatibility.
---

# Raycast Extension

## Overview

Raycast extensions are built with React and Node.js. Prefer the official Raycast ecosystem (`@raycast/api`, `@raycast/utils`) over custom implementations.

- **View Commands**: Export a React component. Raycast renders the UI natively.
- **No-View Commands**: Export an async function; communicate through `showHUD` or `showToast`.
- **Lifecycle**: Extensions are unloaded when execution finishes or user returns to root search. Do not rely on long-lived in-memory state.

## Documentation & Tooling

- **Docs Reference**: Check `references/` for official API documentation.
- **Sync Docs**: `node scripts/sync-docs.js`
- **Query AI**: `node scripts/query-docs.js "How to...?"`
- **Scaffolding**: Must be created via the Raycast app (**Create Extension**). Ask the user for the generated directory before making changes.

## Quick Reference (Prefer Raycast Ecosystem)

### 1. `@raycast/utils` (Requires `npm install @raycast/utils`)

| Instead of... | Use Utils Equivalent | Why? |
| - | - | - |
| `fetch` + `useEffect` / Custom State | `useFetch`, `usePromise` | Handles loading, pagination, and caching natively |
| `useState` + `LocalStorage` | `useCachedState` | Persists React state across extension launches natively |
| Manual form state & validation | `useForm` | Built-in validation, focus management, and draft persistence |
| Manual error toast logic | `showFailureToast` | Standardized error handling |
| Custom favicon/avatar | `getFavicon()`, `getAvatarIcon()` | Built-in utilities |
| Custom shell/script execution | `useExec`, `runAppleScript`, `runPowerShellScript` | Handles lifecycle and platform scripts natively |

### 2. `@raycast/api` (Built-in)

| Instead of... | Use API Equivalent | Why? |
| - | - | - |
| `fs.unlink()` / `rm` | `trash()` | Safely moves files to the system bin |
| Custom OAuth | `OAuthService` | Built-in auth (pair with `withAccessToken` from utils) |
| Manual notifications | `showToast()`, `showHUD()` | Native UX patterns |
| Custom persistence | `LocalStorage`, `Cache` | Built-in storage |
| Custom encryption | `password` preference type | Secure credential storage (via Manifest) |

## Cross-Platform (macOS & Windows)

- **Manifest**: Explicitly add `"platforms": ["macOS", "Windows"]`.
- **API Support**: Always verify platform support in official docs before use. Guard platform-specific APIs with runtime checks.
- **Keyboard Shortcuts**: Use `Keyboard.Shortcut.Common` for automatic cross-platform support. For custom shortcuts, use the nested platform syntax (e.g., `{ macOS: ..., Windows: ... }`).
- **Preferences**: Platform-specific defaults are supported by passing an object: `{ "macOS": ..., "Windows": ... }`.
- **File Picker**: `canChooseDirectories` is ignored on Windows when `canChooseFiles` is `true`.
- **Paths & Shells**: Never assume POSIX-style paths (use Node.js path utils). Never assume Bash/Zsh/PowerShell availability unless the extension is platform-restricted.

## Red Flags — STOP and Correct

- 🚩 **Package Managers**: Use ONLY `npm` and `package-lock.json`. Do NOT use `yarn`, `pnpm`, or `bun`.
- 🚩 **ESLint**: For v9+, ensure the flat configuration uses `import { defineConfig } from "eslint/config"`.
- 🚩 **Preferences**: Do NOT create a manual `Preferences` interface; use generated types from `raycast-env.d.ts`. Do NOT use redundant `?.`, `??`, or `||` for preferences with defaults. Raycast has no `number` preference type (use `textfield` with validation).
- 🚩 **Security**: Do NOT request direct Keychain access. Use Raycast preferences.
- 🚩 **Networking**: Do NOT write custom proxy logic (e.g., `https-proxy-agent`). Raycast's native `fetch` automatically respects the "Use System Proxy Settings" configuration in the app.
- 🚩 **Error Handling**: Do NOT call `launchCommand` or `getSelectedText()` without a `try-catch` block. They throw errors and will crash the extension if permissions fail or no text is selected.
- 🚩 **UX**: Do NOT change the root command's `navigationTitle`.
- 🚩 **Localization**: Do NOT build custom translation wrappers (Raycast targets US English).

## Implementation & UX Patterns

- **Actions First**: Expose primary functionality through `ActionPanel`. Append `…` to actions that open additional flows.
- **States**: Provide meaningful `List.EmptyView` content. Use `isLoading` during async operations.
- **Naming**: Use Title Case for commands and actions. Always provide placeholders for text fields.
- **Publishing**: 
  - **Screenshots**: Provide a `metadata/` directory with at least 3 screenshots (2000x1250px, 16:10 PNG) for view commands.
  - **Changelog**: Maintain a root-level `CHANGELOG.md` for new features or fixes. Use the exact format: `## [Brief Description] - {PR_MERGE_DATE}`.

## Cookbook Snippets

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