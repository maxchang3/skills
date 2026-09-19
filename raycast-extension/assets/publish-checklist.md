# Raycast Store Preparation

Use for a Raycast Store submission or release, not every repository PR. Apply checks relevant to the change and follow the repository's release conventions. The [current Store guide](https://developers.raycast.com/basics/prepare-an-extension-for-store) is authoritative; a [bundled snapshot](../references/basics/prepare-an-extension-for-store.md) is available for reference.

## Review Readiness

- Raycast team review requires a non-draft PR. Check Ready for review status when handing off a completed Store submission; development PRs may remain drafts while work is in progress.

## Package and Runtime

- Use `npm` and include `package-lock.json` for Store builds. Check author, license, API compatibility, and supported platforms in the manifest.
- Run the repository's build and lint commands and any required tests on the final change. A distribution build performs type checking; verify affected flows in Raycast when runtime behavior matters, and report any native/platform checks that were unavailable.

## Store Assets

- Store submissions with view commands must include a `metadata/` directory with Raycast-styled screenshots. Use Raycast Window Capture to produce them.
- Icons are 512 × 512 PNGs and should work in both themes. Screenshots in `metadata/` are 2000 × 1250 PNGs; the Store permits up to six and recommends at least three. Three is a recommendation, not a mandatory minimum.
- Review changed assets and add screenshots when needed to explain the feature. A small update does not automatically need a new screenshot set or image-validation workflow.

## User Documentation

- Every Store submission PR should create or update `CHANGELOG.md` with the relevant changes. This Store review requirement does not require invented release entries for internal documentation, test, or refactoring PRs; follow the project's changelog scope for those.
- Document user-visible changes and any necessary setup. Changelog headings use `## [Title] - {PR_MERGE_DATE}`; a repository may use a version such as `vX.Y.Z` for the title. Preserve the placeholder until merge, including Initial Release entries.
- Describe the final user-facing change, using the repository's changelog and versioning rules where present.

## Optional Automation

[ci.yml](ci.yml) and [check-images.yml](check-images.yml) are templates for projects that need them. Reuse existing validation; add or change workflows only when that is part of the requested work.
