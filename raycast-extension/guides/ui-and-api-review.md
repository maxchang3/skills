# UI and API Review Notes

Use when reviewing native UI behavior or replacing utility code. Check the behavior a custom implementation provides before suggesting a native replacement.

- **Favicons:** Prefer [`getFavicon`](../references/utilities/icons/getfavicon.md) from `@raycast/utils` over constructing provider URLs. Before replacing an existing implementation, check whether it adds needed validation, parallel source racing, force refresh, or additional sources; preserve useful behavior that the utility does not cover.
- **File disposal:** Use [`trash()`](../references/api-reference/utilities.md#trash) from `@raycast/api` for actions intended to move user files to the system trash, rather than invoking platform-specific shell commands. Temporary-file and cache cleanup may require direct deletion instead.
- **HTTP requests:** When the target Raycast runtime supplies global `fetch`, use it for ordinary requests instead of adding a fetch polyfill. Existing clients or SDKs may provide needed timeout handling, error conversion, or other behavior; do not remove them solely because global `fetch` exists. Verify the actual client's proxy behavior when changing the network stack.
- **Submenu titles:** Do not flag a missing literal ellipsis in [`ActionPanel.Submenu`](../references/api-reference/user-interface/action-panel.md#actionpanel.submenu) titles. Account for Raycast's rendered submenu affordance before adding punctuation; follow an explicit repository convention if one exists.
