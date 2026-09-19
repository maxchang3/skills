---
name: raycast-extension
description: Build or debug Raycast API/UI integrations, manifest configuration, and platform behavior; prepare extensions for the Raycast Store.
---

# Raycast Extension

Use this skill for Raycast-specific decisions. Ordinary provider protocols, parsing, and TypeScript refactors need it only when they cross a Raycast boundary.

## Read What the Task Needs

Paths below are relative to this skill. Bundled references are documentation snapshots; check the installed package types for available signatures and current [official documentation](https://developers.raycast.com/) for version-dependent behavior. Verify native behavior when it matters; mocked tests cannot establish what Raycast displays or how it restores a command.

| Task | Relevant guidance |
| --- | --- |
| Create an extension or change command/tool entry points | [Create Extension](references/basics/create-your-first-extension.md), [manifest](references/information/manifest.md), [lifecycle](references/information/lifecycle.md) |
| UI, actions, navigation, or shortcuts | [UI](references/api-reference/user-interface.md), [ActionPanel](references/api-reference/user-interface/action-panel.md), [keyboard](references/api-reference/keyboard.md); [cookbook](assets/cookbook.md) for optional snippets |
| Preferences or credentials | [Preferences](references/api-reference/preferences.md), [LocalStorage](references/api-reference/storage.md), [OAuth utilities](references/utilities/oauth.md) |
| Fetching, React state, or caching | [Utility hooks](references/utilities/react-hooks.md), [Cache](references/api-reference/cache.md), [useCachedPromise](references/utilities/react-hooks/usecachedpromise.md), [withCache](references/utilities/functions/withcache.md) |
| Native behavior, permissions, or hard-to-reproduce failures | [Troubleshooting](guides/troubleshooting.md) and the affected API's reference |
| Raycast Store submission or release preparation | [Publishing checklist](assets/publish-checklist.md); ordinary repository PRs do not trigger Store preparation |

Read the relevant page or section, not the full reference collection. Platform support is documented with each API and in the manifest; do not pin a runtime version in this skill.

## Implementation Decisions

For UI review or utility replacements, read [UI and API review notes](guides/ui-and-api-review.md) for favicon, file disposal, fetch, and submenu behavior.

- Prefer native components and APIs, and use `@raycast/utils` when its semantics fit. Hooks and Promise caches are not automatic replacements for streaming, request cancellation, explicit regeneration, or custom cache invalidation. Check whether a cache hit also revalidates when avoiding network requests matters.
- Declare only supported target platforms. For APIs, scripts, paths, and custom shortcuts affected by a change, check compatibility and guard platform-specific behavior. Adding Windows to a manifest alone does not establish Windows support.

## Red Lines

- **Package managers:** Use npm and `package-lock.json` for Raycast extension dependencies; do not introduce yarn, pnpm, or bun.
- **ESLint:** Use `defineConfig` from `eslint/config` for new or changed flat configs when supported by the installed ESLint version. Do not rewrite unrelated lint configuration.
- **Preferences:** Use generated `Preferences` and `Arguments` from `raycast-env.d.ts`, with `getPreferenceValues<Preferences>()`. Do not redefine these types or add fallbacks for manifest-guaranteed values. Numeric preferences use a validated `textfield`, not a `number` type.
- **Credentials:** Do not request direct Keychain access. Preferences are encrypted regardless of their supported type; use password fields to mask fixed credentials and Raycast's encrypted `LocalStorage` for dynamic user configuration. `Cache` stores evictable files on disk; do not use it for credentials.
- **Networking:** Do not add custom proxy agents or extension-level proxy configuration. Use Raycast's system proxy support with a compatible network client; verify the actual client when troubleshooting proxy behavior.
- **Errors:** Do not leave failures from `getSelectedText`, `launchCommand`, or other async API calls unhandled. Catch at the boundary that can recover or show feedback; an existing caller catch or rejection handler is sufficient.
- **UI behavior:** Do not override the root command's `navigationTitle`. Group actions by purpose and frequency of use while preserving existing primary/secondary actions and their default shortcuts, unless the task intentionally changes that behavior. Use `Keyboard.Shortcut.Common` where appropriate and verify concrete key combinations against the target runtime before documenting them.
- **Localization:** Keep extension UI in US English; do not introduce custom UI localization wrappers. This does not restrict translated content, dictionary results, or language preferences that are part of the extension's functionality.

## Maintaining the Bundled Docs

For a missing or stale API detail, fetch that official page. Run `node scripts/sync-docs.mjs` from this skill directory only when refreshing the bundled documentation is part of the task. `node scripts/query-docs.js "question"` is an optional documentation lookup; verify its answer against the cited API page.
