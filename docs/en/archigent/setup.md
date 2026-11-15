# Setup and Configuration

::: info Beta
This is an invitation-only beta. Installation files are provided by the project team.
:::

## Download

During the beta, obtain the installation file for your operating system from the project team:

| Platform | File |
|----------|------|
| macOS (Apple Silicon) | `Archigent-<version>-arm64-mac.zip` |
| macOS (Universal) | `Archigent-<version>-universal-mac.zip` |
| Windows x64 | `Archigent-Setup-<version>-x64.exe` |

## Installation

### macOS

1. Double-click the ZIP to extract **Archigent.app**
2. Move **Archigent.app** to Applications
3. Open the app. It is signed and notarized by Apple; on first open, macOS asks whether to open an app downloaded from the internet -- choose **Open**
4. Select **About** in the header and confirm the version matches the release page

### Windows

1. Run the installer and follow the steps
2. The Windows installer is not code-signed yet; SmartScreen may show "Windows protected your PC." Only for files received from the project team, choose **More info > Run anyway**. If your company blocks the installer, contact your IT administrator
3. Open **Archigent** from the Start menu
4. Select **About** in the header and confirm the version

### Upgrading from ArchiGen Studio

The app has been renamed to Archigent. Projects, settings, and saved keys stay where they were and appear in Archigent.

- **Mac**: After installing Archigent.app, quit the old app and delete **ArchiGen Studio.app** from Applications
- **Windows**: The installer replaces the old version

Reinstall the SketchUp and Revit plug-ins from within the app so their menus show Archigent; pairing keeps working with the older plug-ins until then.

## Initial Configuration

### 1. AI Service Providers

Open **Settings** from the top right.

#### Accounts and API Keys

In **Settings > Accounts & API**:

- For a ChatGPT Plus or Pro account, select **ChatGPT > Continue with ChatGPT**, complete sign-in in the system browser on the same computer, return to the app, and confirm sign-in status. Remote or shared servers cannot use this sign-in method
- In the **Google Gemini** and/or **OpenAI** sections, paste your API key and select **Save**

Desktop keys are stored using the operating system credential service. Keys are not embedded in the application and are never displayed again. Settings only shows "Key saved"; you can choose **Replace** or **Clear key** and save.

#### Provider and Engine Overview

Archigent uses AI services in three areas: **text features** (assistant, prompt help), the project **Agent**, and **image generation** (Render, Lighting, Facade study). Each service uses either a **subscription sign-in** (ChatGPT, Claude) or a provider's pay-per-use **API key**. The Agent can run on one of three execution engines; the table below shows where each provider can be used.

| Provider | Connection | Text | Agent: Codex | Agent: Pi | Agent: Claude Code | Images |
| --- | --- | --- | --- | --- | --- | --- |
| ChatGPT Plus or Pro | Subscription: Accounts & API > ChatGPT | Yes | Yes | Yes | No | No |
| Claude personal subscription (e.g., Pro or Max) | Subscription: Accounts & API > Claude Code > "Sign in with Claude" | No | No | No | Yes (preview) | No |
| Claude Console | API billing: Accounts & API > Claude Code > "Claude Console sign-in" | No | No | No | Yes (preview) | No |
| OpenAI | API key: Accounts & API > OpenAI | Yes | Yes | Yes | No | Yes |
| Google Gemini | API key: Accounts & API > Google Gemini | Yes | No | Yes | No | Yes |
| Anthropic (Claude models) | API key: Accounts & API > "Pi service API key" | No | No | Yes | No | No |
| xAI (Grok) | API key: "Pi service API key" | No | No | Yes | No | No |
| Kimi (Moonshot) | API key: "Pi service API key" | No | No | Yes | No | No |
| OpenRouter | API key: "Pi service API key" | No | No | Yes | No | No |
| OpenAI-compatible endpoint | Base URL, model, optional key: Accounts & API | Yes | Requires Responses API | Yes | No | No |

Notes:

- **Subscriptions do not cover images or API fees.** A ChatGPT or Claude subscription can run the Agent, but Render, Lighting, and Facade study always require a Gemini or OpenAI API key.
- **A Claude subscription can only be used through the Claude Code engine.** You must install official Claude Code locally, then sign in from Archigent; Archigent never sees your Claude password or credentials. Claude Team and Enterprise accounts are not accepted; use Claude Console (API billing) or Pi with an Anthropic key instead. Claude Code is not available on Windows; in this version Claude Code is a preview feature.
- **Pi with API keys** supports Anthropic (Claude models), Google Gemini, xAI, Kimi, OpenRouter, OpenAI, or compatible endpoints, billed by each provider. Anthropic, xAI, Kimi, and OpenRouter keys are entered under "Pi service API key" (desktop, stored via OS credential service); Gemini and OpenAI keys use their own fields.
- **Codex** only accepts a ChatGPT plan, an OpenAI key, or a compatible endpoint that supports the Responses API. Providers marked "-- Pi" in the list require the Pi engine.
- GitHub Copilot is not currently supported.

#### Text and Agent Providers

In **Settings > Agent**, the **default execution engine** can be set to Codex (ChatGPT plan or OpenAI), Pi (multiple API providers), or Claude Code (Claude subscription via locally installed official Claude Code). Under **Provider selection**, choose text and Agent providers separately. Text features support ChatGPT plan, OpenAI key, Gemini key, and OpenAI-compatible endpoints. The Agent supports ChatGPT plan, OpenAI key, and Responses-compatible endpoints. To use a ChatGPT plan, sign in under the ChatGPT section first. Gemini and chat-only endpoints cannot run the Agent. For a compatible endpoint, enter the base URL and model, with an optional API key. The key field only shows "Key saved" and never displays the key; use **Replace** or **Clear key** and save. URLs must use HTTPS; only explicit loopback addresses such as `127.0.0.1` may use HTTP. Image generation still uses the Gemini or OpenAI settings below.

#### Image Generation

Render, Lighting, and Facade study require a Gemini or OpenAI API key set in Settings. ChatGPT plan does not include image generation.

In **Settings > Images & Drawings**, the image model list is fetched from the Gemini account. Select **Refresh models** to update available models.

### 2. Connect ArchiLAW (Optional)

To query the regulation knowledge base:

1. In **Settings > Integrations & Security > ArchiLAW**, enter the HTTPS MCP URL provided by your administrator
2. Save and select **Connect**
3. Complete sign-in with your invitation account in the browser on the same computer
4. Once the status shows connected, restart the Agent to query regulations

**Disconnect** removes the local credential; saving a blank URL disables the service.

### 3. Interface and Appearance

- Use the header language switch for English or Traditional Chinese
- **Settings > General > Appearance**: choose "Follow system," "Light," or "Dark"
- **Settings > General > Notifications**: show desktop notifications when the Agent completes or needs approval (notifications do not include message content)

## Updates

Beta updates are announced by the project team; download the new version and install over the existing one. After an update changes the Agent's tools, older conversations may not continue automatically and will prompt you to start a new conversation.
