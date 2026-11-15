# MCP Guide

::: info What is MCP
[Model Context Protocol (MCP)](https://modelcontextprotocol.io/) is an open protocol that lets AI tools connect to external knowledge sources. Through MCP you can query the ArchiLAW knowledge base directly from Claude, ChatGPT and other AI tools.
:::

## Before you start

- Obtain the MCP URL and invitation code from your administrator. The ArchiLAW Web App's "MCP Connection" dialog also provides a one-click copy of the MCP URL.
- The invitation code only needs to be entered once; the tool renews it automatically until the code expires or is revoked.
- When signing in, the browser opens a page titled "Connect to ArchiLAW". Confirm that the application name shown matches the tool you are using (e.g. Claude or ChatGPT); after completion you are returned to the tool's site. Enter the invitation code and select "Sign in and allow". If you do not recognise the application or did not initiate the connection, select "Reject".
- Queries are passed through personal data masking before reaching the knowledge base. Do not include names, ID numbers or other personal data in your queries.

## Supported clients

| Client | Status |
|--------|--------|
| Claude (claude.ai / Claude Desktop) | Verified |
| ChatGPT (chatgpt.com / desktop) | Verified |
| Gemini (gemini.google.com) | Not yet available |
| Other MCP clients | Should be compatible; please report results |

## Connection steps

### Claude (web and Claude Desktop)

Claude web and Claude Desktop share connector settings under the same account -- set up on one and it works on the other. Free plans allow up to 1 custom connector.

1. Open **Customize** > **Connectors**.
2. Select **+ Add** > **Add custom connector**.
3. Enter `ArchiLAW` as the name, paste the MCP URL and select **Continue**.
4. The detected sign-in method appears; select **Continue**.
5. Under **Authentication**, select **Sign in now**.
6. Keep the default **Use Claude's published identity (Recommended)** for the OAuth client. Leave **Request headers** empty.
7. Select **Add**. The browser opens the "Connect to ArchiLAW" page; enter the invitation code.
8. In a conversation: select the **+** at the bottom-left of the input box > **Connectors** and enable ArchiLAW.

Team and Enterprise plans: the organization Owner adds the connector in **Organization settings** > **Connectors**. Each member then goes to **Customize** > **Connectors**, finds ArchiLAW, selects **Connect** and signs in with their own invitation code.

### ChatGPT

The steps are the same on web and desktop. Mobile does not currently support adding custom MCP servers.

1. Open **Customize** > **Plugins**.
2. Select **Add** (top right) > **Add custom MCP server**.
3. Fill in the form:
   - **Name**: `ArchiLAW`
   - **Connection**: select **Server URL** (not "Tunnel") and paste the MCP URL
   - **Authentication**: select **OAuth**
   - **Advanced OAuth settings**: leave at defaults
4. Confirm the URL is ArchiLAW's, then check **I understand and want to continue**.
5. Select **Create as a plugin** (not "Upload plugin archive").
6. On the sign-in page, enter the invitation code and select "Sign in and allow".
7. In a conversation: type `@` in the input box and select ArchiLAW. The selection applies to that message only; `@` again when a follow-up needs fresh data.

If "Add custom MCP server" does not appear under **Add**, your plan or workspace does not currently support custom MCP.

### Gemini

Not yet available. Google Gemini's custom MCP is currently limited to specific regions (US) and account types (personal Google accounts). ArchiLAW has not completed Gemini compatibility testing. This page will be updated when available. In the meantime, use Claude, ChatGPT or the ArchiLAW Web App.

## Available tools

Once connected, the following ArchiLAW tools appear in the AI tool:

### `search` -- semantic search

Searches the knowledge base by meaning. The knowledge base contains Traditional Chinese Taiwan regulations; queries work best in Traditional Chinese using Taiwan legal terminology (e.g. floor coverage ratio, floor area ratio, statutory open space, accessible elevator).

**Parameters:**
- `query` (required): query text
- `k` (optional): number of results, 1 to 20, default 5
- `filters` (optional): filter conditions

**Example queries:**
- "What documents are needed for the completion inspection under the Interior Renovation Management Act?"
- "How does the Taipei City Building Management Self-governance Ordinance handle illegal structures?"
- "Ramp slope design standards for accessible facilities"

### `get_document` -- retrieve a document

Retrieves the full text of a regulatory document by its ID. Use this to read the complete document behind a `search` result.

**Parameters:**
- `id` (required): document ID (provided by `search` results)

### `list_sources` -- list data sources

Lists all available source groups in the knowledge base and the number of items in each group.

## Tips

1. **Query in Traditional Chinese**: the knowledge base is in Traditional Chinese; English queries return fewer matches.
2. **Be specific**: more specific questions yield more precise answers. "Building Act provisions on construction permit application deadlines" works better than "Building Act provisions".
3. **Specify jurisdiction**: if the question involves a specific city or county, mention it.
4. **Cross-verify**: for important regulatory decisions, compare with the original text on the government regulation site.

## Troubleshooting

| Problem | Possible cause and solution |
|---------|----------------------------|
| Connection fails | Check your network and verify the MCP URL |
| Authentication fails | Confirm you have an invitation code and entered it correctly |
| Tools not appearing | Refresh the page or reconnect the MCP server |
| Format error in query | After an ArchiLAW update, older conversations may show errors mentioning "additional properties" or "schema". Start a new conversation, or reconnect in your connector settings |
| Answer does not match expectations | Try a more specific description or break the question into smaller parts |

## Disabling or removing

- Claude: go to **Customize** > **Connectors** and disconnect or remove ArchiLAW.
- ChatGPT: go to **Customize** > **Plugins** and remove ArchiLAW.
- If an invitation code is lost or leaked, contact the administrator to revoke it. Once revoked, all connections created with that code will fail on the next query.
