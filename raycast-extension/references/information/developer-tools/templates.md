# Templates

Learn about the templates provided by Raycast to help kickstart your extension.

Raycast provides a variety of templates to kickstart your extension.

Raycast provides 3 types of templates:

* **Commands:** These are templates for [commands](/information/terminology.md).
* **Tools:** These are templates for [tools](/information/terminology.md#tool). You can select a different one for each tool that you add to your extension.
* **Extension Boilerplates:** These are fully built extensions designed to be tweaked by organizations for internal use.

## Commands

### Show Detail

<details>

<summary>Renders a simple Hello World from a markdown string.</summary>

![Detail Template Render](https://2922539984-files.gitbook.io/~/files/v0/b/gitbook-x-prod.appspot.com/o/spaces%2F-Me_8A39tFhZg3UaVoSN%2Fuploads%2Fgit-blob-9190e0860f24711b630e5e055456a2cd89bfb514%2Fhello-world-2.webp?alt=media)

{% hint style="info" %}
See the [API Reference](/api-reference/user-interface/detail.md) for more information about customization.
{% endhint %}

</details>

### Submit Form

<details>

<summary>Renders a form that showcases all available form elements.</summary>

![Submit Form Template Render](https://2922539984-files.gitbook.io/~/files/v0/b/gitbook-x-prod.appspot.com/o/spaces%2F-Me_8A39tFhZg3UaVoSN%2Fuploads%2Fgit-blob-ee2d5d4c3fa780b7f14309bf826073e9dde9a96e%2Fform-template.webp?alt=media)

{% hint style="info" %}
See the [API Reference](/api-reference/user-interface/form.md) for more information about customization.
{% endhint %}

</details>

### Show Grid

<details>

<summary>Renders a grid of Icons available from Raycast.</summary>

Defaults to a large grid, but provides a selection menu to change the size.

![Grid Template Render](https://2922539984-files.gitbook.io/~/files/v0/b/gitbook-x-prod.appspot.com/o/spaces%2F-Me_8A39tFhZg3UaVoSN%2Fuploads%2Fgit-blob-0e647f3ac99c0dd24ee62bde07dc093f95b2b404%2Fgrid-template.webp?alt=media)

{% hint style="info" %}
See the [API Reference](/api-reference/user-interface/grid.md) for more information about customization.

See here for information about [Icons](/api-reference/user-interface/icons-and-images.md).
{% endhint %}

</details>

### Show List and Detail

<details>

<summary>Renders a list of options. When an option is selected, a Detail view is displayed.</summary>

![List and Detail Template Render](https://2922539984-files.gitbook.io/~/files/v0/b/gitbook-x-prod.appspot.com/o/spaces%2F-Me_8A39tFhZg3UaVoSN%2Fuploads%2Fgit-blob-75521699b43de1cca6b5853739387b72ae663030%2Flist-detail-template.webp?alt=media)

{% hint style="info" %}
See the [API Reference](/api-reference/user-interface/list.md) for more information about customization.
{% endhint %}

</details>

### Menu Bar Extra

<details>

<summary>Adds a simple Menu Bar Extra with a menu.</summary>

![Menu Bar Extra Template Render](https://2922539984-files.gitbook.io/~/files/v0/b/gitbook-x-prod.appspot.com/o/spaces%2F-Me_8A39tFhZg3UaVoSN%2Fuploads%2Fgit-blob-7bd81f2bcee7918b6921e552dae157b7f9c21733%2Fmenu-bar-template.webp?alt=media)

{% hint style="info" %}
See the [API Reference](/api-reference/menu-bar-commands.md) for more information about customization.
{% endhint %}

</details>

### Run Script

A example of a no-view command which shows a simple [HUD](/api-reference/feedback/hud.md).

### Show List

<details>

<summary>Renders a static list with each entry containing an icon, title, subtitle, and accessory.</summary>

![List Template Render](https://2922539984-files.gitbook.io/~/files/v0/b/gitbook-x-prod.appspot.com/o/spaces%2F-Me_8A39tFhZg3UaVoSN%2Fuploads%2Fgit-blob-ce032b2d8a82dab374433eb9f40f3347e00e412e%2Flist-template.webp?alt=media)

{% hint style="info" %}
See the [API Reference](/api-reference/user-interface/list.md) for more information about customization.
{% endhint %}

</details>

### Show Typeahead Results

<details>

<summary>Renders a dynamic and searchable list of NPM packages. The command fetches new items as the search is updated by the user.</summary>

![Typeahead Results Template Render](https://2922539984-files.gitbook.io/~/files/v0/b/gitbook-x-prod.appspot.com/o/spaces%2F-Me_8A39tFhZg3UaVoSN%2Fuploads%2Fgit-blob-10b73f930dab0d742e677811c13b0b0c0706260b%2Ftypeahead-results-template.webp?alt=media)

</details>

### AI

<details>

<summary>Renders the output of an AI call in a Detail view.</summary>

![AI Template Render](https://2922539984-files.gitbook.io/~/files/v0/b/gitbook-x-prod.appspot.com/o/spaces%2F-Me_8A39tFhZg3UaVoSN%2Fuploads%2Fgit-blob-57ac09c0da60f75bd7efc443c1f2e3e6d3455716%2Fai-template.webp?alt=media)

</details>

## Tools

<details>

<summary>A simple tool which asks for confirmation before executing.</summary>

![Tool with Confirmation Template Render](https://2922539984-files.gitbook.io/~/files/v0/b/gitbook-x-prod.appspot.com/o/spaces%2F-Me_8A39tFhZg3UaVoSN%2Fuploads%2Fgit-blob-ca0c814b5be4d12d42bb1552be1f363aeb1450eb%2Ftool-with-confirmation-template.webp?alt=media)

{% hint style="info" %}
See the [API Reference](/api-reference/tool.md) for more information about customization.
{% endhint %}

</details>

## Extension Boilerplates

The Raycast Team has created high-quality templates to reinforce team experiences with the Raycast API.

Run `npm init raycast-extension -t <template-name>` to get started with these extensions. All templates can be found on the [templates page](https://www.raycast.com/templates).

Specific instructions about customizing the template can be found on the relevant [template page](https://www.raycast.com/templates). Simply customize the template as you see fit, then run `npm run publish` in the extension directory to allow your team to install the extension.


