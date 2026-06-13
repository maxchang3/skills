> For the complete documentation index, see [llms.txt](https://developers.raycast.com/llms.txt). Markdown versions of documentation pages are available by appending `.md` to page URLs; this page is available as [Markdown](https://developers.raycast.com/utilities/oauth/getaccesstoken.md).

# getAccessToken

Utility function designed for retrieving authorization tokens within a component. It ensures that your React components have the necessary authentication state, either through OAuth or a personal access token.

{% hint style="info" %}
`getAccessToken` **must** be used within components that are nested inside a component wrapped with [`withAccessToken`](/utilities/oauth/withaccesstoken.md). Otherwise, the function will fail with an error.
{% endhint %}

## Signature

```tsx
function getAccessToken(): {
  token: string;
  type: "oauth" | "personal";
};
```

### Return

The function returns an object containing the following properties:

* `token`: A string representing the access token.
* `type`: An optional string that indicates the type of token retrieved. It can either be `oauth` for OAuth tokens or `personal` for personal access tokens.

## Example

```tsx
import { Detail } from "@raycast/api";
import { authorize } from "./oauth";

function AuthorizedComponent() {
  const { token } = getAccessToken();
  return <Detail markdown={`Access token: ${token}`} />;
}

export default withAccessToken({ authorize })(AuthorizedComponent);
```


---

# Agent Instructions
This documentation is published with GitBook. GitBook is the documentation platform designed so that both humans and AI agents can read, navigate, and reason over technical content effectively. Learn more at gitbook.com.

## Querying This Documentation
If you need additional information that is not directly available in this page, you can query the documentation dynamically by asking a question.

Perform an HTTP GET request on the current page URL with the `ask` query parameter:

```
GET https://developers.raycast.com/utilities/oauth/getaccesstoken.md?ask=<question>
```

The question should be specific, self-contained, and written in natural language.
The response will contain a direct answer to the question and relevant excerpts and sources from the documentation.

Use this mechanism when the answer is not explicitly present in the current page, you need clarification or additional context, or you want to retrieve related documentation sections.
