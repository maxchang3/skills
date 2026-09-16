# Create an AI Extension

Learn how to turn a regular extension into an AI-powered one.

To turn your regular extension into an AI-powered one, you need to add a set of tools that allow Raycast AI to interact with your extension.

## Add AI Tools

The simplest way to add a tool to your extensions is to open the Manage Extensions command, search for your extension and perform the Add New Tool action via the Action Panel (or press `⌥` `⌘` `T`).

![Add New Tool](https://2922539984-files.gitbook.io/~/files/v0/b/gitbook-x-prod.appspot.com/o/spaces%2F-Me_8A39tFhZg3UaVoSN%2Fuploads%2Fgit-blob-1be2e53c0b44ea6d5b7b3071c72b9747c88ea1f1%2Fadd-new-tool.webp?alt=media)

{% hint style="info" %}
Alternatively you can edit the [`package.json` file](/information/manifest.md) manually and add a new entry to the `tools` array.
{% endhint %}

Give the tool a name, a description, and pick a template. The name and description will show up in the UI as well as the Store. The description is passed to AI to help it understand how to use the tool.

## Build Your AI Extension

Just like with regular extensions, you need to build your AI Extension. After you've added a tool, switch to your terminal and navigate to your extension directory. Run `npm install && npm run dev` to start the extension in development mode.

{% hint style="info" %}
`npm run dev` starts the extension in development mode with hot reloading, error reporting and [more](/information/developer-tools/cli.md#development).
{% endhint %}

## Use Your AI Extension

Open Raycast, and you'll notice a new list item saying "Ask ..." at the top of the root search. Press `↵` to open it. From there on, you can chat to your AI Extension.

![AI Extension](https://2922539984-files.gitbook.io/~/files/v0/b/gitbook-x-prod.appspot.com/o/spaces%2F-Me_8A39tFhZg3UaVoSN%2Fuploads%2Fgit-blob-363c9e267e98ca7564e7b7a84f28e3a8863f0123%2Fuse-ai-extension.webp?alt=media)

Alternatively, you can open Raycast's AI Chat and start chatting to your AI Extension there. Simply type `@` and start typing the name of your extension.

![AI Chat](https://2922539984-files.gitbook.io/~/files/v0/b/gitbook-x-prod.appspot.com/o/spaces%2F-Me_8A39tFhZg3UaVoSN%2Fuploads%2Fgit-blob-7b52aef66f69747c06b2420c3a67515e3e090a3e%2Fai-chat.webp?alt=media)

🎉 Congratulations! You built your first AI extension. Now you can start adding more tools to your extension to make it more powerful.


