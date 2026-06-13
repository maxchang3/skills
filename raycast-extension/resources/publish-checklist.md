# Publishing Checklist

A quick checklist of the most common reasons Raycast extension PRs get rejected during the publishing phase.

## 1. Metadata & Build
- [ ] **Dependencies**: Must use `npm` (no yarn/pnpm/bun) and include `package-lock.json`.
- [ ] **Build Check**: Ran `npm run build` and `npm run lint` successfully without errors. *(See `resources/ci.yml` for an automated workflow template)*.

## 2. Store Assets
- [ ] **Automated Validation**: Set up a GitHub Action to enforce image constraints (dimensions and padding symmetry) automatically on PR/Push.
  *(See `resources/check-images.yml` for a ready-to-use CI template).*
- [ ] **Screenshots**: At least 3 screenshots in the `metadata/` directory. Must be exactly `2000x1250px` (16:10 PNG). *(Tip: use the built-in Window Capture command in dev mode)*.
- [ ] **Icon**: 512x512px PNG, looks good in both light and dark modes. (No default Raycast icons).

## 3. Versioning & Docs
- [ ] **Changelog**: Must use the exact PR placeholder format: `## [Brief Description] - {PR_MERGE_DATE}`. (`{PR_MERGE_DATE}` is a placeholder and will be automatically replaced when the PR is merged.)
- [ ] **README**: Provided if the extension requires API tokens, preferences setup, or has complex usage.
