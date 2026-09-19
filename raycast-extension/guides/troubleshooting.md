# Native Behavior and Diagnostics

Use this guide for lifecycle, selection, permissions, shortcuts, and failures that differ between development and Store installations. See the [debugging reference](../references/basics/debug-an-extension.md) and [current official guide](https://developers.raycast.com/basics/debug-an-extension).

- Establish the relevant Raycast/OS/extension versions, development versus Store build, and launch path. Distinguish an observed failure, a code-level risk, and a hypothesis about native behavior. A mock can demonstrate a race in our code without reproducing the user's native failure.
- Check Raycast's existing diagnostic facilities before building an export feature: `View Issues` / Extension Issue Dashboard for unhandled failures, and `Extension Diagnostics` with export when available in the installed app. Confirm availability and what those records actually contain.
- Development console output is disabled in Store extensions. The issue dashboard covers unhandled exceptions and rejections; a caught error or an empty successful result may leave no report. If existing diagnostics miss the failure, add only the instrumentation needed to distinguish the remaining hypotheses.
- For async selection or input bugs, trace who owns the input when the result arrives, and whether a command mounted anew or resumed existing state. For shortcut discrepancies, inspect the native action label instead of treating a documentation table as runtime evidence.
- If adding diagnostic logs, record status, timing, and counts instead of selected text, clipboard contents, queries, or credentials. State what was verified in Raycast and what was only checked with types or mocks.
