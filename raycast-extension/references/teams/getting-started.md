# Getting Started

This guide sets you up with Raycast for Teams.

Raycast for Teams allows you to build, share and discover extensions in a private store. The store is only accessible to members of your organization.

## Create Your Organization

To get started, create your organization. Specify the name of the organization, a handle (used in links, e.g. `https://raycast.com/your_org/some_extension`) and optionally upload an avatar.

![Create an Organization](https://2922539984-files.gitbook.io/~/files/v0/b/gitbook-x-prod.appspot.com/o/spaces%2F-Me_8A39tFhZg3UaVoSN%2Fuploads%2Fgit-blob-3317f218fb9427f3c92c90475980f2859ea23e29%2Fteams-create-organization.webp?alt=media)

{% hint style="info" %}
You can use the Manage Organization command to edit your organization's information later.
{% endhint %}

## Create Your Private Extension Store

After you've created your organization, it's time to set up a private store for your extensions.

### Init a Local Repository

First, select a folder to create a local repository for your private extension store. We create a folder that contains a Getting Started extension. We recommend to store all extensions of your team in a single repository. This makes it easy to collaborate.

![Create Local Repository](https://2922539984-files.gitbook.io/~/files/v0/b/gitbook-x-prod.appspot.com/o/spaces%2F-Me_8A39tFhZg3UaVoSN%2Fuploads%2Fgit-blob-d151ce8f86dd834e2f26037740dc7892eb6d7b86%2Fteams-create-repository.webp?alt=media)

### Build The Getting Started Extension

After you have created the local repository, navigate into the `getting-started` folder. The folder contains a simple extension with a command that shows a list with a few useful links. Run `npm run dev` in the folder to build the extension and start development mode. Raycast opens and you can see a new Development section in the root search. The section shows all commands that are under active development. You can open the command and open a few links.

![Build the Getting Started Extension](https://2922539984-files.gitbook.io/~/files/v0/b/gitbook-x-prod.appspot.com/o/spaces%2F-Me_8A39tFhZg3UaVoSN%2Fuploads%2Fgit-blob-2460a8a8514ae682c51d68a7afb4d49bba089601%2Fteams-develop-extension.webp?alt=media)

{% hint style="info" %}
See [Create Your First Extension](/basics/create-your-first-extension.md) for a more detailed guide on how to create an extension.
{% endhint %}

### Publish The Getting Started Extension

Now, we share the extension with your organization. Perform `npm run publish` in the extension folder. The command verifies, builds and publishes the extension to your private extension store. The extension is only accessible to members of your organization.

![Publish the Getting Started Extension](https://2922539984-files.gitbook.io/~/files/v0/b/gitbook-x-prod.appspot.com/o/spaces%2F-Me_8A39tFhZg3UaVoSN%2Fuploads%2Fgit-blob-3df843560081baea304cfb72cda40bc650398f06%2Fteams-publish-extension.webp?alt=media)

🎉 Congratulations! You built and published your first private extension. Now it's time to spread the word in your organization.

## Invite Your Teammates

Use the Copy Organization Invite Link command in Raycast to share access to your organization. Send the link to your teammates. You'll receive an email when somebody joins your organization. You can use the Manage Organization command to see who's part of your organization, reset the invite link and edit your organization details.

As a next step, follow [this guide](/teams/collaborate-on-private-extensions.md) to push your local repository to a source control system. This allows you to collaborate with your teammates on your extensions.


