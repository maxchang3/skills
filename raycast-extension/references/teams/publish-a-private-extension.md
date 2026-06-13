> For the complete documentation index, see [llms.txt](https://developers.raycast.com/llms.txt). Markdown versions of documentation pages are available by appending `.md` to page URLs; this page is available as [Markdown](https://developers.raycast.com/teams/publish-a-private-extension.md).

# Publish a Private Extension

To publish an extension, run `npm run publish` in the extension directory. The command verifies, builds and publishes the extension to the owner's store. The extension is only available to members of this organization. A link to your extension is copied to your clipboard to share it with your teammates. Happy publishing 🥳

To mark an extension as private, you need to set the `owner` field in your `package.json` to your organization handle. If you don't know your handle, open the Manage Organization command, select your organization in the dropdown on the top right and perform the Copy Organization Handle action (`⌘` `⇧` `.`).

{% hint style="info" %}
Use the Create Extension command to create a private extension for your organization.
{% endhint %}

To be able to publish a private extension to an organization, you need to be logged in. Raycast takes care of logging you in with the CLI as well. In case you aren't logged in or need to switch an account, you can run `npx ray login` and `npx ray logout`.


---

# Agent Instructions
This documentation is published with GitBook. GitBook is the documentation platform designed so that both humans and AI agents can read, navigate, and reason over technical content effectively. Learn more at gitbook.com.

## Querying This Documentation
If you need additional information that is not directly available in this page, you can query the documentation dynamically by asking a question.

Perform an HTTP GET request on the current page URL with the `ask` query parameter:

```
GET https://developers.raycast.com/teams/publish-a-private-extension.md?ask=<question>
```

The question should be specific, self-contained, and written in natural language.
The response will contain a direct answer to the question and relevant excerpts and sources from the documentation.

Use this mechanism when the answer is not explicitly present in the current page, you need clarification or additional context, or you want to retrieve related documentation sections.
