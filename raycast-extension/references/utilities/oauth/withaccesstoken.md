> For the complete documentation index, see [llms.txt](https://developers.raycast.com/llms.txt). Markdown versions of documentation pages are available by appending `.md` to page URLs; this page is available as [Markdown](https://developers.raycast.com/utilities/oauth/withaccesstoken.md).

# withAccessToken

Higher-order function fetching an authorization token to then access it. This makes it easier to handle OAuth in your different commands whether they're `view` commands, `no-view` commands, or `menu-bar` commands.

## Signature

```tsx
function withAccessToken<T = any>(
  options: WithAccessTokenParameters,
): <U extends WithAccessTokenComponentOrFn<T>>(
  fnOrComponent: U,
) => U extends (props: T) => Promise<void> | void ? Promise<void> : React.FunctionComponent<T>;
```

### Arguments

`options` is an object containing:

* `options.authorize`: a function that initiates the OAuth token retrieval process. It returns a promise that resolves to an access token.
* `options.personalAccessToken`: an optional string that represents an already obtained personal access token. When `options.personalAccessToken` is provided, it uses that token. Otherwise, it calls `options.authorize` to fetch an OAuth token asynchronously.
* `options.client`: an optional instance of a PKCE Client that you can create using Raycast API. This client is used to return the `idToken` as part of the `onAuthorize` callback below.
* `options.onAuthorize`: an optional callback function that is called once the user has been properly logged in through OAuth. This function is called with the `token`, its type (`oauth` if it comes from an OAuth flow or `personal` if it's a personal access token), and `idToken` if it's returned from `options.client`'s initial token set.

### Return

Returns the wrapped component if used in a `view` command or the wrapped function if used in a `no-view` command.

{% hint style="info" %}
Note that the access token isn't injected into the wrapped component props. Instead, it's been set as a global variable that you can get with [getAccessToken](/utilities/oauth/getaccesstoken.md).
{% endhint %}

## Example

{% tabs %}
{% tab title="view\.tsx" %}

```tsx
import { List } from "@raycast/api";
import { withAccessToken } from "@raycast/utils";
import { authorize } from "./oauth";

function AuthorizedComponent(props) {
  return; // ...
}

export default withAccessToken({ authorize })(AuthorizedComponent);
```

{% endtab %}

{% tab title="no-view\.tsx" %}

```tsx
import { showHUD } from "@raycast/api";
import { withAccessToken } from "@raycast/utils";
import { authorize } from "./oauth";

async function AuthorizedCommand() {
  await showHUD("Authorized");
}

export default withAccessToken({ authorize })(AuthorizedCommand);
```

{% endtab %}

{% tab title="onAuthorize.tsx" %}

```tsx
import { OAuthService } from "@raycast/utils";
import { LinearClient, LinearGraphQLClient } from "@linear/sdk";

let linearClient: LinearClient | null = null;

const linear = OAuthService.linear({
  scope: "read write",
  onAuthorize({ token }) {
    linearClient = new LinearClient({ accessToken: token });
  },
});

function MyIssues() {
  return; // ...
}

export default withAccessToken(linear)(View);
```

{% endtab %}
{% endtabs %}

## Types

### WithAccessTokenParameters

```ts
type OAuthType = "oauth" | "personal";

type OnAuthorizeParams = {
  token: string;
  type: OAuthType;
  idToken: string | null; // only present if `options.client` has been provided
};

type WithAccessTokenParameters = {
  client?: OAuth.PKCEClient;
  authorize: () => Promise<string>;
  personalAccessToken?: string;
  onAuthorize?: (params: OnAuthorizeParams) => void;
};
```

### WithAccessTokenComponentOrFn

```ts
type WithAccessTokenComponentOrFn<T = any> = ((params: T) => Promise<void> | void) | React.ComponentType<T>;
```


---

# Agent Instructions
This documentation is published with GitBook. GitBook is the documentation platform designed so that both humans and AI agents can read, navigate, and reason over technical content effectively. Learn more at gitbook.com.

## Querying This Documentation
If you need additional information that is not directly available in this page, you can query the documentation dynamically by asking a question.

Perform an HTTP GET request on the current page URL with the `ask` query parameter:

```
GET https://developers.raycast.com/utilities/oauth/withaccesstoken.md?ask=<question>
```

The question should be specific, self-contained, and written in natural language.
The response will contain a direct answer to the question and relevant excerpts and sources from the documentation.

Use this mechanism when the answer is not explicitly present in the current page, you need clarification or additional context, or you want to retrieve related documentation sections.
