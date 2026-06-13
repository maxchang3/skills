---
name: raycast-extension
description: Use when building, debugging, or maintaining Raycast extensions. Triggers for @raycast/api components, extension preferences, Raycast utilities, command architecture, publishing requirements, and cross-platform compatibility.
---

# Raycast Extension

## Overview

Raycast extensions are built with React and Node.js (the built-in version is v22.22.2). Prefer the official Raycast ecosystem (`@raycast/api`, `@raycast/utils`) over custom implementations.

- **View Commands**: Export a React component. Raycast renders the UI natively.
- **No-View Commands**: Export an async function; communicate through `showHUD` or `showToast`.
- **Lifecycle**: Extensions are unloaded when execution finishes or user returns to root search. Do not rely on long-lived in-memory state.

## Documentation & Tooling

- **Docs Reference**: Check `references/` for official API documentation.
- **Sync Docs**: `node scripts/sync-docs.mjs`
- **Query AI**: `node scripts/query-docs.js "How to...?"`

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
- **Publishing**: When the user asks you to prepare the extension for publishing or submit a PR, strictly follow the steps in `resources/publish-checklist.md`.

## Cookbook Snippets

If you need boilerplate code for UI components like List, Detail, Form, or Cache, please read `resources/cookbook.md`. For comprehensive examples, see `references/examples/`.