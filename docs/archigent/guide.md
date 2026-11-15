# Archigent architect guide / Archigent 建築師使用指南

Contents / 目錄

- [Quick start / 快速開始](#quick-start)
- [1. First start and providers / 首次啟動與服務設定](#section-1)
- [2. Create a project and use the Agent / 建立專案與使用 Agent](#section-2)
- [3. Choose an Agent engine: Codex, Claude Code or Pi / 選擇 Agent 執行引擎：Codex、Claude Code 或 Pi](#section-3)
- [4. Approvals, rules, and project settings / 核准、規則與專案設定](#section-4)
- [5. Standalone tools / 獨立工具](#section-5)
- [6. ArchiLAW and Revit / ArchiLAW 與 Revit](#section-6)
- [7. Files and troubleshooting / 檔案位置與疑難排解](#section-7)


Use Archigent on the computer where you work. Projects keep the Agent's files separate from Revit and CAD files. Standalone tools can be used without a project. The Agent and image tools may use paid provider services; review what will be sent.

請在工作電腦上使用 Archigent。專案 Agent 的檔案與 Revit、CAD 檔案分開存放；獨立工具不需要建立專案。Agent 與影像工具可能使用付費服務，傳送前請確認內容。

Screenshots show the Traditional Chinese interface with a fictional sample project (示範案：河岸住宅) and no keys. Your screen may differ slightly by version and operating system; use the header 中文 / EN switch to change the language.

截圖使用繁體中文介面與虛構的示範專案（示範案：河岸住宅），未設定任何金鑰。畫面可能因版本及作業系統略有不同；可用頁首的「中文／EN」切換語言。

![Home: create or open a project, or use a standalone tool / 首頁：建立或開啟專案，或直接使用獨立工具](./images/01-home.png)

*Home: create or open a project, or use a standalone tool* / *首頁：建立或開啟專案，或直接使用獨立工具*

<a id="quick-start"></a>

## Quick start / 快速開始

1. Install Archigent (section 1) and open it.
2. In **Settings > Accounts & API**, sign in to ChatGPT or paste an API key (section 1).
3. Check the Agent engine in **Settings > Agent**: Codex is the default; Claude Code and Pi are described in section 3.
4. On **Home**, create a project and open a stage (section 2).
5. Select **Start Agent**, choose a suggested step or type a request, and select **Send**.
6. Read every approval card before you approve it (section 4).

1. 安裝並開啟 Archigent（第 1 章）。
2. 在「設定 > 帳號與 API」登入 ChatGPT 或貼上 API 金鑰（第 1 章）。
3. 在「設定 > Agent」確認 Agent 執行引擎：預設為 Codex；Claude Code 與 Pi 的設定見第 3 章。
4. 在「首頁」建立專案並開啟一個階段（第 2 章）。
5. 選取「啟動 Agent」，選擇建議步驟或自行輸入請求，再按「送出」。
6. 核准前請詳讀每一張核准卡片（第 4 章）。

<a id="section-1"></a>

## 1. First start and providers / 首次啟動與服務設定

Open the desktop app, or ask your administrator for the local web address. Use the header language switch for English or Traditional Chinese. Open **Settings**. For a ChatGPT Plus or Pro account, choose **ChatGPT > Continue with ChatGPT**; finish sign-in in the system browser on this same computer and return to the app. Check that Settings says you are signed in. Sign out there when needed. A remote or shared server cannot use this sign-in.

開啟桌面應用程式，或向管理員取得本機網頁位址。使用頁首語言切換鈕選擇英文或繁體中文。開啟「設定」，如有 ChatGPT Plus 或 Pro 帳號，選取「ChatGPT > 使用 ChatGPT 繼續」，在同一部電腦的系統瀏覽器完成登入，返回應用程式並確認登入狀態。需要時可在同一處登出。遠端或共用伺服器不提供此登入方式。


![Settings > Accounts & API: subscription sign-in and API keys / 設定 > 帳號與 API：訂閱登入及 API 金鑰](./images/03-settings-accounts.png)

*Settings > Accounts & API: subscription sign-in and API keys* / *設定 > 帳號與 API：訂閱登入及 API 金鑰*

In **Settings > Agent > Provider selection**, choose a text provider and a separate Agent provider. With the default Codex engine, the Agent accepts a ChatGPT plan, an OpenAI API key, or an OpenAI-compatible service that supports Responses; Claude Code and Pi are covered in section 3. Gemini and chat-only compatible services can serve text tasks. For a compatible service, enter its base URL, model, and key, then mark Responses support only if the service actually provides it. For **Render**, **Lighting**, or **Facade study**, enter a Gemini or OpenAI API key in Settings; ChatGPT plan use does not pay for image generation. Desktop keys use the operating system credential service. If that service is unavailable, ask the administrator to configure the server environment.

在「設定 > Agent > 服務供應商選擇」分別選擇文字及 Agent 供應商。使用預設的 Codex 引擎時，Agent 可使用 ChatGPT 方案、OpenAI API 金鑰，或支援 Responses 的 OpenAI 相容服務；Claude Code 與 Pi 請見第 3 章。Gemini 與僅支援對話的相容服務可供文字功能使用。相容服務需填入基底網址、模型及金鑰；只有確實支援 Responses 時才勾選。使用「渲染」、「燈光」或「立面研究」時，仍須在設定中提供 Gemini 或 OpenAI API 金鑰；ChatGPT 方案不包含影像產生。桌面版會使用作業系統憑證服務儲存金鑰；若無法使用，請管理員設定伺服器環境。


![Settings > Agent: default engine and providers / 設定 > Agent：預設執行引擎與服務供應商](./images/04-settings-agent.png)

*Settings > Agent: default engine and providers* / *設定 > Agent：預設執行引擎與服務供應商*

### Install the desktop app / 安裝應用程式

#### Windows

1. Download `Archigent-Setup-<version>-x64.exe` from the release page the project team shares with you.
2. Run the installer and follow its steps. The Windows installer is not code-signed yet, so Windows SmartScreen may show **Windows protected your PC**. Only for a file you received from the project team, choose **More info > Run anyway**. If your company blocks the installer, ask your IT administrator.
3. Open **Archigent** from the Start menu.
4. Select **About** in the header and check the version against the release page.

1. 從專案團隊提供的發行頁面下載 `Archigent-Setup-<版本>-x64.exe`。
2. 執行安裝程式並依照步驟完成安裝。Windows 安裝程式目前尚未程式碼簽章，SmartScreen 可能顯示「Windows 已保護您的電腦」。只有確認檔案來自專案團隊時，才選擇「其他資訊 > 仍要執行」。若公司政策封鎖安裝程式，請洽詢 IT 管理員。
3. 從開始功能表開啟 **Archigent**。
4. 選取頁首的「關於」，確認版本與發行頁面相同。

![About: check the installed version / 關於：確認已安裝的版本](./images/02-about.png)

*About: check the installed version* / *關於：確認已安裝的版本*


#### macOS

Choose one ZIP supplied by the project team:

- `Archigent-<version>-arm64-mac.zip` for Apple Silicon Macs.
- `Archigent-<version>-universal-mac.zip` for Apple Silicon or Intel Macs.

1. Double-click the ZIP to extract **Archigent.app**.
2. Move **Archigent.app** to Applications.
3. Open the app. It is signed and notarized by Apple; on first open macOS asks whether to open an app downloaded from the internet. Choose **Open**.
4. Select **About** in the header and check the version against the release page.

Upgrading from ArchiGen Studio: the app is now named Archigent. Projects, settings and saved keys stay where they were
and appear in Archigent. On a Mac, quit the old app and delete **ArchiGen Studio.app** from Applications after
installing **Archigent.app**. On Windows, the installer replaces the old version. Reinstall the SketchUp and Revit
plug-ins from the app so their menus also show Archigent; pairing keeps working with the older plug-ins until then.

請從專案團隊提供的 ZIP 選擇其中一個：

- Apple Silicon Mac 使用 `Archigent-<版本>-arm64-mac.zip`。
- Apple Silicon 或 Intel Mac 使用 `Archigent-<版本>-universal-mac.zip`。

1. 連按兩下 ZIP，解壓縮 **Archigent.app**。
2. 將 **Archigent.app** 移至「應用程式」。
3. 開啟應用程式。此程式已由 Apple 簽章及公證；第一次開啟時，macOS 會詢問是否開啟從網路下載的應用程式，請選擇「打開」。
4. 選取頁首的「關於」，確認版本與發行頁面相同。

從 ArchiGen Studio 升級：軟體已改名為 Archigent。專案、設定與已儲存的金鑰都留在原處，會直接出現在 Archigent。Mac 安裝
**Archigent.app** 後，請結束舊程式，並從「應用程式」刪除 **ArchiGen Studio.app**。Windows 安裝程式會直接取代舊版。請從
軟體內重新安裝 SketchUp 與 Revit 外掛，外掛選單才會顯示 Archigent；重新安裝前，舊外掛仍可正常配對。

### Save keys and choose models / 設定服務金鑰

1. Open **Settings** in the upper-right corner and choose **Accounts & API**.
2. Under **Google Gemini** and/or **OpenAI**, paste your own API key.
3. Select **Save**. The desktop app stores the key using your operating system credential service; it is not bundled into the app or shown back to you.
4. Reopen Settings and confirm the key is marked as saved.

1. 點選右上角的「設定」，選擇「帳號與 API」。
2. 在 **Google Gemini** 及／或 **OpenAI** 區塊貼上您自己的 API 金鑰。
3. 選取「儲存」。桌面應用程式會透過作業系統憑證服務保存金鑰；金鑰不會被包入應用程式，也不會再次顯示給您。
4. 重新開啟「設定」，確認金鑰顯示為已儲存。

#### Text and Agent providers / 文字與 Agent 服務供應商

In **Settings > Agent**, **Default engine** chooses Codex (ChatGPT plan or OpenAI), Pi (several API providers) or Claude Code (a Claude subscription through the official Claude Code installed on this computer). Under **Provider selection**, choose the provider for text features and for the Agent separately. Text features support **Use your ChatGPT plan**, OpenAI key, Gemini key and an OpenAI-compatible endpoint. The Agent supports the ChatGPT plan, OpenAI key and compatible endpoints that support the Responses API. Sign in in the ChatGPT section first to use the plan. Gemini and chat-only endpoints cannot run the Agent. For a compatible endpoint, enter the base URL and model, then optionally an API key. The key field shows **Saved key** without revealing the key; use **Replace** or **Clear key** and Save. The URL must use HTTPS, except HTTP to a literal loopback address such as `127.0.0.1`. Image generation still uses the Gemini or OpenAI settings below.

在「設定 > Agent」中，「預設執行引擎」可選擇 Codex（ChatGPT 方案或 OpenAI）、Pi（多家 API 供應商）或 Claude Code（透過本機安裝的官方 Claude Code 使用 Claude 訂閱）。在「服務供應商選擇」分別選擇文字功能與 Agent 的服務供應商。文字功能支援 ChatGPT 方案、OpenAI 金鑰、Gemini 金鑰與 OpenAI 相容端點。Agent 支援 ChatGPT 方案、OpenAI 金鑰，以及支援 Responses API 的相容端點。若要使用 ChatGPT 方案，請先在 ChatGPT 區塊登入。Gemini 與僅支援聊天的端點無法執行 Agent。使用相容端點時，請輸入基底網址與模型，並可選擇輸入 API 金鑰。金鑰欄只會顯示「金鑰已儲存」，不會顯示金鑰內容；可選擇「取代」或「清除金鑰」後儲存。網址須使用 HTTPS，只有 `127.0.0.1` 等明確的本機迴圈位址可使用 HTTP。影像生成仍使用下方的 Gemini 或 OpenAI 設定。

#### Gemini models / Gemini 模型

The image-model list in **Settings > Images & drawings** is fetched from your Gemini account when Settings opens. Select **Refresh models** to retrieve the latest available models. A fallback list does not guarantee that a model is enabled for your account, region, or API key.

開啟「設定」時，系統會從您的 Gemini 帳戶取得「圖像與圖面」中的影像模型清單。選取「重新整理模型」 可重新取得最新可用模型。備援清單不代表該模型已對您的帳戶、地區或 API 金鑰啟用。

<a id="section-2"></a>

## 2. Create a project and use the Agent / 建立專案與使用 Agent

### Create and open a project / 建立與開啟專案

1. On **Home**, type a project name under **Project name** and select **Create project**. Existing projects are listed below; select one to open it.
2. The project opens on its first stage. The left column lists the seven stages (Sketch, CAD, Model, Sheets, Quantities and cost, Render, Lighting). A stage status is only a guide; you can open any stage at any time.
3. The centre shows the stage's files or tool. The right column is the **Agent panel**, with the tabs **Agent** and **Quick question**.

1. 在「首頁」的「專案名稱」輸入名稱，選取「建立專案」。既有專案列在下方，選取即可開啟。
2. 專案會從第一個階段開啟。左欄列出七個階段（手稿、CAD、模型、圖紙、數量造價、渲染、燈光）；階段狀態僅供參考，隨時可以開啟任何階段。
3. 中央顯示該階段的檔案或工具；右欄是「Agent 面板」，有「Agent」與「快速提問」兩個分頁。

![Project workbench: stages on the left, the current stage in the centre, the Agent panel on the right / 專案畫面：左側為階段，中央為目前階段，右側為 Agent 面板](./images/05-project-workbench.png)

*Project workbench: stages on the left, the current stage in the centre, the Agent panel on the right* / *專案畫面：左側為階段，中央為目前階段，右側為 Agent 面板*

### Run the Agent / 使用 Agent

1. Check the engine and account at the top of the Agent panel (for example `CODEX · CHATGPT：已登入`). To use another engine, see section 3.
2. Select **Start Agent**. On first use the engine is downloaded and verified; wait for the progress indicator.
3. Select one of the **Suggested steps** to put a request in the message box, or type your own. Suggestions never send by themselves. Edit the text, then select **Send**.
4. Watch the plan and the **Activity log**. When the Agent needs your decision, an approval card or a question appears in the panel (see section 4).
5. **Interrupt** stops the current turn; **Stop** ends the Agent session. The Agent also stops by itself after 15 minutes without activity.

Every turn, the Agent receives the current stage's guidance, your project rules and the project settings.

1. 查看 Agent 面板上方顯示的引擎與帳號（例如 `CODEX · CHATGPT：已登入`）。要改用其他引擎，請見第 3 章。
2. 選取「啟動 Agent」。第一次使用時會下載並驗證執行引擎，請等待進度顯示。
3. 選取「建議步驟」把請求帶入訊息框，或自行輸入；建議步驟不會自動送出。確認內容後按「送出」。
4. 檢視計畫與「活動紀錄」。需要您決定時，面板會出現核准卡片或提問（見第 4 章）。
5. 「中斷」可停止本輪；「停止」會結束 Agent 工作階段。閒置 15 分鐘後 Agent 也會自動停止。

每一輪 Agent 都會取得目前階段的指引、專案規則與專案設定。

### Agent controls / Agent 控制

Select the sliders button (**Agent controls**) at the top of the Agent panel to show these controls:

- **Agent engine**: the engine this project uses (change it in Settings, see section 3).
- **Model** and **Reasoning effort**: available after the Agent starts. A compatible endpoint fixes the model.
- **Auto mode**: **Ask every time** (default); **Auto: low risk** approves creating and editing the Agent's own Revit and SketchUp elements without a card; **Auto: full** also approves exports and project rules. Custom C# or Ruby, ArchiLAW queries, paid image generation, deletion and Codex commands outside its sandbox always ask. At most 20 actions per turn are approved automatically, and each appears in the activity log as *Auto-approved*.
- **Plan first**: the Agent proposes a plan without changing anything; select **Run the plan** to carry it out.
- **Conversation**: earlier conversations of this engine (the most recent one continues when the Agent starts) and **+ New conversation**. An older conversation started with earlier tools shows a notice to start a new one.

選取 Agent 面板上方的調整按鈕（「Agent 控制」）即可顯示：

- 「Agent 執行引擎」：此專案使用的引擎（在設定中變更，見第 3 章）。
- 「模型」與「思考強度」：Agent 啟動後可選。相容端點的模型固定。
- 「自動模式」：「每次都問」（預設）；「自動：低風險」會自動核准建立與修改 Agent 自己建立的 Revit、SketchUp 元素；「自動：完整」再加上匯出與專案規則。自訂 C# 或 Ruby、ArchiLAW 查詢、付費出圖、刪除，以及 Codex 在沙箱外的指令一定會詢問。每輪最多自動核准 20 次，每次都會在活動紀錄顯示「自動核准」。
- 「先計畫」：Agent 先提出計畫、不做任何變更，按「依計畫執行」才開始。
- 「對話」：此引擎之前的對話（啟動時會接續最近一次）與「＋ 新對話」。以較舊工具建立的對話會提示您開始新對話。

### Attach files, saved prompts and notifications / 附加檔案、常用指令與通知

- **Attach** (or drop files on the message box) adds PNG, JPEG or PDF files, up to 15 MB each and 10 per message, to the project folder. Images are sent to the model only when the project allows unmasked sending, and each such send is recorded; PDFs are referred to by name only.
- **Saved prompts** are shared by the whole office: type a message and choose **Save message as prompt**; click a prompt to insert it.
- **Settings > General > Notifications** shows a desktop notification when the Agent finishes or needs approval while Archigent is in the background. It never includes message content.

- 「附加檔案」（或把檔案拖到訊息框）可把 PNG、JPEG 或 PDF 加入專案資料夾，每個檔案 15 MB 以內、每則訊息最多 10 個。只有專案開放未遮罩傳送時，圖片才會傳給模型，且每次都會記錄；PDF 只以檔名提供。
- 「常用指令」全事務所共用：輸入訊息後按「存成常用指令」，點選即可帶入。
- 「設定 > 一般 > 通知」可在 Archigent 不在前景時，於 Agent 完成或需要核准時顯示桌面通知，通知不含訊息內容。

![Agent panel with Agent controls open: engine, model, reasoning effort, auto mode, conversation, Plan first and project rules / Agent 面板展開「Agent 控制」：引擎、模型、思考強度、自動模式、對話、先計畫與專案規則](./images/06-agent-panel.png)

*Agent panel with Agent controls open: engine, model, reasoning effort, auto mode, conversation, Plan first and project rules* / *Agent 面板展開「Agent 控制」：引擎、模型、思考強度、自動模式、對話、先計畫與專案規則*

### Arrange the workspace / 調整工作區

To give the centre more room, collapse the stage list with the button beside **Stages** and the Agent panel with the button at its top right. The collapsed stage rail keeps numbered links to every stage. The Agent keeps working while collapsed; when it waits for your approval, the collapsed rail shows the count and a notice appears. Drag the Agent panel's left edge to make it wider or narrower (double-click the edge to reset). The app remembers these choices. **Settings > General > Appearance** switches between **Match system**, **Light**, and **Dark**.

若需要更大的中央工作區，可用「階段」旁的按鈕收合階段列，用 Agent 面板右上角的按鈕收合 Agent 面板。收合後的階段列仍保留各階段的編號連結。收合時 Agent 會繼續工作；需要你核准時，收合列會顯示等你核准的數量並跳出提醒。拖曳 Agent 面板左側邊緣可調整寬度（在邊緣按兩下恢復預設）。這些設定都會記住。「設定 > 一般 > 外觀」可選擇「跟隨系統」、「淺色」或「深色」。

### What to ask in each stage / 各階段可請 Agent 處理的事項

| Stage | What to ask and check / 可請 Agent 處理及應檢查的事項 |
| --- | --- |
| Sketch / 手稿 | Inventory versions, find missing dimensions, calibrate against known site dimensions; confirm assumptions and the chosen sketch. / 整理版本、找出缺少的尺寸，依已知基地尺寸校正；確認假設與採用的手稿。 |
| CAD | Draft millimetre-scale layers and dimensions, export DWG/DXF and PDF, compare against sketch; review inferred dimensions and layer names. / 建立毫米尺寸的圖層與標註，匯出 DWG／DXF 及 PDF，與手稿疊合；檢查推估尺寸與圖層名稱。 |
| Model / 模型 | Read the paired Revit or SketchUp model, report the architect's intervening edits, propose a versioned change; approve each write only after checking revision and affected elements. In SketchUp a batch is one undo step and is undone completely on any failure. / 讀取配對的 Revit 或 SketchUp 模型、報告建築師新增的修改、提出版本化變更；核對版本及受影響元素後逐項核准寫入。SketchUp 的一批變更是一個復原步驟，任何失敗都會整批復原。 |
| Sheets / 圖紙 | List required sheets, export and check every sheet for overlaps, text outside the frame, and Simplified characters; review title blocks and numbering. / 列出所需圖紙，逐張匯出並檢查文字重疊、超出圖框及簡體字；檢查標題欄與圖號。 |
| Quantities and cost / 數量造價 | Request quantities with source references, independent recomputation and a difference report; check each unit-price source and flagged AI estimates. / 要求附來源的數量、獨立重算及差異報告；檢查單價來源與標示的 AI 估價。 |
| Render / 渲染 | State what must stay, site conditions, and design freedom; compare the generated view and alignment score. / 說明必須保留的部分、基地條件與設計自由度；比較生成視圖及對位分數。 |
| Lighting / 燈光 | Read the plan and fixture schedule, review positions and editable regions, compare schemes. / 讀取圖紙與燈具表、確認位置及可修改區域、比較方案。 |

Sketch, CAD, Model, and Quantities currently show guidance rather than dedicated editing panels. The Agent can work in its project workspace; Revit and SketchUp work needs a paired plug-in (pair it in the Model stage) and explicit approvals. CAD export and cost conclusions require architect review.

手稿、CAD、模型及數量造價目前提供階段指引，尚無專用編輯面板。Agent 可在專案工作目錄處理檔案；Revit 與 SketchUp 操作需要在「模型」階段配對外掛，並經明確核准。CAD 匯出與造價結論仍須由建築師檢查。

<a id="section-3"></a>

## 3. Choose an Agent engine: Codex, Claude Code or Pi / 選擇 Agent 執行引擎：Codex、Claude Code 或 Pi

The project Agent can run on one of three engines. All three use the same Archigent tools (project files, sketch and CAD tools, ArchiLAW, Revit and SketchUp), the same approval cards and the same project rules. They differ in which accounts they can use, how they are installed and how they are protected.

專案 Agent 可使用三種執行引擎之一。三者都使用相同的 Archigent 工具（專案檔案、手稿與 CAD 工具、ArchiLAW、Revit 與 SketchUp）、同一套核准卡片及專案規則；差別在於可使用的帳號、安裝方式與保護方式。

| | Codex (default / 預設) | Claude Code | Pi |
| --- | --- | --- | --- |
| Accounts / 可用帳號 | ChatGPT plan, OpenAI API key, OpenAI-compatible endpoint with the Responses API / ChatGPT 方案、OpenAI API 金鑰、支援 Responses API 的 OpenAI 相容端點 | Your own Claude subscription, or Claude Console (API billing) / 個人 Claude 訂閱，或 Claude Console（API 計費） | ChatGPT plan, OpenAI, Anthropic (Claude models, API billing), Google Gemini, xAI, Kimi, OpenRouter, compatible endpoint / ChatGPT 方案、OpenAI、Anthropic（Claude 模型，API 計費）、Google Gemini、xAI、Kimi、OpenRouter、相容端點 |
| Installation / 安裝 | Downloaded and verified automatically on first start / 首次啟動時自動下載並驗證 | You install the official Claude Code yourself (version 2.1.319 or later in 2.1) / 須自行安裝官方 Claude Code（2.1 版中的 2.1.319 以上） | Downloaded and verified automatically on first use (about 25 MB) / 首次使用時自動下載並驗證（約 25 MB） |
| Tools / 工具 | Archigent tools, plus its own commands and file edits in a sandbox, each approved by you / Archigent 工具，另有在沙箱內執行的指令與檔案修改，每次都須核准 | Archigent tools only; its own terminal, file and web tools are turned off / 只有 Archigent 工具，內建終端機、檔案及網頁工具均關閉 | Archigent tools only / 只有 Archigent 工具 |
| Protection / 保護 | Operating-system sandbox, no network for commands / 作業系統沙箱，指令不可連網 | Restricted tool set; no operating-system sandbox / 限制工具範圍，沒有作業系統沙箱 | Runs inside the same sandbox as Codex / 在與 Codex 相同的沙箱內執行 |
| macOS | Yes / 可用 | Preview / 預覽 | Yes / 可用 |
| Windows | Yes; full protection after the one-time security setup / 可用；完成一次性安全設定後才有完整保護 | Not available yet / 尚未開放 | Only after the one-time security setup / 完成一次性安全設定後才可用 |
| Models / 模型 | From your account after start / 啟動後依帳號列出 | sonnet (default), opus, fable / sonnet（預設）、opus、fable | A fixed list per provider, chosen in Settings / 依供應商的固定清單，在設定中選擇 |

Which one to use: start with **Codex** if you have a ChatGPT Plus or Pro plan or an OpenAI key. Use **Claude Code** if you have a personal Claude subscription and work on a Mac; it is a preview (see below). Use **Pi** for an Anthropic, Gemini, xAI, Kimi or OpenRouter API key. A Claude subscription is used only through Claude Code; Pi with Anthropic is billed per API use. GitHub Copilot is not available.

選擇建議：有 ChatGPT Plus 或 Pro 方案、或 OpenAI 金鑰時，先使用 **Codex**。有個人 Claude 訂閱且在 Mac 上工作時，使用 **Claude Code**（目前為預覽，見下文）。要使用 Anthropic、Gemini、xAI、Kimi 或 OpenRouter 的 API 金鑰時，使用 **Pi**。Claude 訂閱只能透過 Claude Code 使用；Pi 搭配 Anthropic 是依 API 用量計費。目前不提供 GitHub Copilot。

### Switch the engine / 切換引擎

![Settings > Agent: the default engine, the current project's engine, and the Pi provider and model / 設定 > Agent：預設執行引擎、目前專案的引擎，以及 Pi 供應商與模型](./images/14-engine-settings.png)

*Settings > Agent: the default engine, the current project's engine, and the Pi provider and model* / *設定 > Agent：預設執行引擎、目前專案的引擎，以及 Pi 供應商與模型*

There are two levels. **Default engine** applies to every project that has no choice of its own. **This project** (shown only while a project is open) overrides the default for that project.

1. Open a project if you want to change only that project, then select **Settings** in the header and choose **Agent**.
2. Under **Agent engine**, choose **Default engine**, or **This project**. Choose **Use the app default** to remove a project's own choice.
3. The choice is saved immediately; there is no Save button. It takes effect the next time the Agent starts.
4. To change **This project**, first select **Stop** in that project's Agent panel. The selection is locked while that project's Agent is running. The default engine can be changed at any time; a running Agent keeps its engine until it is stopped.
5. Changing a project's engine resets that project's **Model** and **Reasoning effort** to their defaults.
6. Select **Start Agent**. Check the engine name at the top of the Agent panel (for example `CODEX · CHATGPT：已登入`, `CLAUDE CODE · 訂閱已連線` or `PI · ANTHROPIC API 金鑰 · CLAUDE-SONNET-4-5`).

An engine that cannot run on this computer is shown but cannot be chosen: Claude Code shows **Setup required** until it is installed and signed in; Pi shows **unavailable on this device** when this computer cannot run it.

引擎有兩個層級。「預設執行引擎」適用於所有沒有另外指定的專案；「目前專案」（只在開啟專案時顯示）只改變該專案。

1. 只想改變某個專案時，先開啟該專案；再選取頁首的「設定」，選擇「Agent」。
2. 在「Agent 執行引擎」選擇「預設執行引擎」或「目前專案」。選擇「使用 App 預設值」可取消專案自己的設定。
3. 選擇後會立即儲存，不需要按「儲存」，並在下次啟動 Agent 時生效。
4. 要變更「目前專案」，請先在該專案的 Agent 面板按「停止」；Agent 執行中時此選項會鎖定。預設執行引擎隨時可以變更；執行中的 Agent 會繼續使用原本的引擎，直到停止為止。
5. 變更專案的引擎時，該專案的「模型」與「思考強度」會恢復預設值。
6. 選取「啟動 Agent」，並查看 Agent 面板上方顯示的引擎名稱（例如 `CODEX · CHATGPT：已登入`、`CLAUDE CODE · 訂閱已連線` 或 `PI · ANTHROPIC API 金鑰 · CLAUDE-SONNET-4-5`）。

無法在這部電腦執行的引擎仍會列出，但不能選取：Claude Code 在安裝並登入前會顯示「需要設定」；這部電腦無法執行 Pi 時會顯示「此裝置尚未支援」。

### Conversations when you switch / 切換後的對話

Each engine keeps its own conversations. Switching does not convert or delete them: conversations made with Codex appear again when you switch back to Codex. When the Agent starts, it continues the engine's most recent conversation; choose **+ New conversation** in the Agent controls to start fresh. After 15 minutes without activity the Agent stops by itself; start it again to continue.

每個引擎的對話分開保存。切換引擎不會轉換或刪除對話：切回 Codex 時，之前用 Codex 的對話會再出現。啟動 Agent 時會接續該引擎最近一次的對話；要重新開始，請在「Agent 控制」選擇「＋ 新對話」。閒置 15 分鐘後 Agent 會自動停止，再次啟動即可接續。

### Set up Codex / 設定 Codex

1. Open **Settings > Accounts & API**. For a ChatGPT plan, select **Continue with ChatGPT** under **ChatGPT**, finish sign-in in the browser on this computer, and return to Archigent. For an OpenAI key, paste it under **OpenAI**.
2. In **Settings > Agent**, set **Codex / Pi provider** to **Use your ChatGPT plan**, **OpenAI API key** or **OpenAI-compatible endpoint**. A compatible endpoint can be chosen only when **Supports the Responses API** is ticked in Accounts & API.
3. Select **Start Agent**. The first start downloads and verifies Codex (**Downloading Agent runtime**, then **Verifying Agent runtime**).

If the panel says **Sign in with ChatGPT in Settings to use this agent provider**, use **Open Settings** and sign in. The Anthropic, Gemini, xAI, Kimi and OpenRouter choices in the provider list are marked **— Pi** and work only with the Pi engine; with Codex the Agent does not start.

1. 開啟「設定 > 帳號與 API」。使用 ChatGPT 方案時，在「ChatGPT」選取「使用 ChatGPT 繼續」，在這部電腦的瀏覽器完成登入後回到 Archigent；使用 OpenAI 金鑰時，貼到「OpenAI」欄位。
2. 在「設定 > Agent」把「Codex／Pi 服務供應商」設為「使用您的 ChatGPT 方案」、「OpenAI API 金鑰」或「OpenAI 相容端點」。只有在「帳號與 API」勾選「支援 Responses API」後，才能選擇相容端點。
3. 選取「啟動 Agent」。第一次啟動會下載並驗證 Codex（先顯示「正在下載 Agent 執行引擎」，再顯示「正在驗證 Agent 執行引擎」）。

若面板顯示「請到設定登入 ChatGPT，才能使用此 Agent 服務」，請按「開啟設定」登入。供應商清單中標示「— Pi」的 Anthropic、Gemini、xAI、Kimi 與 OpenRouter 只能搭配 Pi 引擎；使用 Codex 時 Agent 無法啟動。

### Set up Claude Code / 設定 Claude Code

Claude Code is a preview in this version: signed-in use in the installed desktop app has not been fully verified yet. If something does not work, switch the project back to Codex and report the problem with the steps you took.

Claude Code 在此版本為預覽功能：在已安裝的桌面版中登入後實際使用的情況尚未完整驗證。若無法正常運作，請把專案改回 Codex，並附上操作步驟回報問題。

![Settings > Accounts & API: the Claude Code card before installation / 設定 > 帳號與 API：尚未安裝時的 Claude Code 區塊](./images/15-claude-code-account.png)

*Settings > Accounts & API: the Claude Code card before installation* / *設定 > 帳號與 API：尚未安裝時的 Claude Code 區塊*

1. Install the official Claude Code on this computer (**Official installation instructions** opens Anthropic's setup page). Archigent does not install or change it. Version 2.1.319 or later in the 2.1 series is required; an older version shows **Update official Claude Code**.
2. In **Settings > Accounts & API**, under **Claude Code · Subscription**, select **Sign in with Claude** for your subscription, or **Claude Console sign-in (API billing)** for API billing. Complete the official sign-in in the browser, then return to Archigent. The card shows **Subscription connected** or **Claude Console connected · API billing, not subscription**. Archigent keeps its own Claude Code settings folder, so sign in here even if you already use Claude Code in a terminal.
3. In **Settings > Agent**, choose **Claude Code · Subscription** as the default or for this project, then start the Agent. Choose the model (sonnet, opus or fable) and the reasoning effort after it starts.

Sign-in and credentials stay with Claude Code; Archigent never reads them. Stop every Claude Code Agent before signing in, signing out or switching between subscription and API billing. If your company manages Claude Code with policies, the engine is turned off to protect the project (**Managed Claude policies were detected**). Claude Code is not available on Windows yet; Claude models remain available there through Pi with an Anthropic API key.

1. 在這部電腦安裝官方 Claude Code（「官方安裝說明」會開啟 Anthropic 的安裝頁面）。Archigent 不會安裝或修改它。需要 2.1 版中的 2.1.319 以上；版本太舊時會顯示「請更新官方 Claude Code」。
2. 在「設定 > 帳號與 API」的「Claude Code · 訂閱」區塊，使用訂閱時選取「使用 Claude 登入」，使用 API 計費時選取「Claude Console 登入（API 計費）」。在瀏覽器完成官方登入後回到 Archigent，區塊會顯示「訂閱已連線」或「Claude Console 已連線，使用 API 計費而非訂閱」。Archigent 使用自己的 Claude Code 設定資料夾；即使已在終端機使用 Claude Code，仍請在這裡登入。
3. 在「設定 > Agent」把預設執行引擎或目前專案設為「Claude Code · 訂閱」，再啟動 Agent。啟動後可選擇模型（sonnet、opus 或 fable）與思考強度。

登入與憑證由 Claude Code 保管，Archigent 不會讀取。登入、登出或在訂閱與 API 計費之間切換前，請先停止所有使用 Claude Code 的 Agent。若公司以原則管理 Claude Code，為保護專案，此引擎會停用（「偵測到受管理的 Claude 原則」）。Windows 目前不提供 Claude Code；在 Windows 上仍可透過 Pi 搭配 Anthropic API 金鑰使用 Claude 模型。

### Set up Pi / 設定 Pi

1. Add the account Pi will use. ChatGPT plan: sign in under **Settings > Accounts & API > ChatGPT**. OpenAI or Gemini: paste the key in its existing field. Anthropic, xAI, Kimi or OpenRouter: in the desktop app, enter the key under **Pi provider API keys**; it is stored with the operating system's credential service.
2. In **Settings > Agent**, choose **Pi · Multiple providers** as the default or for this project.
3. Choose the **Pi provider** and **Pi model**. Only providers you have signed in to or saved a key for are listed. **Use the configured Agent provider** follows the **Codex / Pi provider** setting; **Use the provider default** takes the first model of that provider. These two settings apply to every project and are used the next time the Agent starts.
4. Select **Start Agent**. The first use downloads and verifies Pi (about 25 MB). Reasoning effort (low, medium, high) is offered only for models that support it.

On Windows, Pi becomes available after the one-time security setup (see "Windows notes" below). If the Agent does not start, check that the chosen Pi provider shows **API key configured**, or choose another provider.

1. 先準備 Pi 要使用的帳號。ChatGPT 方案：在「設定 > 帳號與 API > ChatGPT」登入。OpenAI 或 Gemini：貼到原有的金鑰欄位。Anthropic、xAI、Kimi 或 OpenRouter：在桌面版的「Pi 服務 API 金鑰」輸入金鑰，金鑰會以作業系統憑證服務保存。
2. 在「設定 > Agent」把預設執行引擎或目前專案設為「Pi · 多家供應商」。
3. 選擇「Pi 供應商」與「Pi 模型」。清單只會列出已登入或已儲存金鑰的供應商。「使用已設定的 Agent 供應商」會沿用「Codex／Pi 服務供應商」的設定；「使用供應商預設模型」會採用該供應商的第一個模型。這兩項設定適用於所有專案，並在下次啟動 Agent 時使用。
4. 選取「啟動 Agent」。第一次使用會下載並驗證 Pi（約 25 MB）。只有支援的模型才會提供思考強度（低、中、高）。

在 Windows 上，完成一次性安全設定後才能使用 Pi（見下方「Windows 注意事項」）。若 Agent 無法啟動，請確認所選的 Pi 供應商顯示「已設定 API 金鑰」，或改選其他供應商。

### Windows notes / Windows 注意事項

Codex runs on Windows after you either complete the one-time security setup or accept limited protection (**Windows Agent protection is limited** card, **I understand the risks — continue**). For full protection, open **Settings > Integrations & security**, select **Set up or repair security** and approve the administrator prompt. When it is verified, the elevated sandbox and Pi become available, and one project Agent can run at a time on that computer. Claude Code is not offered on Windows yet.

在 Windows 上，完成一次性安全設定，或在「Windows Agent 的保護有限」卡片選擇「我瞭解風險，繼續使用」後，即可使用 Codex。要取得完整保護，請開啟「設定 > 整合與安全」，選取「設定或修復安全保護」並同意系統管理員提示。驗證完成後即可使用完整沙箱及 Pi；這部電腦一次只能執行一個專案的 Agent。Windows 目前不提供 Claude Code。

### Engine troubleshooting / 引擎疑難排解

| Symptom / 狀況 | What to do / 處理方式 |
| --- | --- |
| The engine choice is greyed out / 引擎選項無法選取 | Claude Code: install it, sign in, and check its version. Pi on Windows: complete the security setup. / Claude Code：安裝、登入並確認版本。Windows 上的 Pi：完成安全設定。 |
| **Could not save the engine choice** / 「無法儲存引擎選擇」 | Stop this project's Agent, then choose again. / 先停止此專案的 Agent，再重新選擇。 |
| The Agent does not start after choosing Anthropic, Gemini, xAI, Kimi or OpenRouter / 選擇 Anthropic、Gemini、xAI、Kimi 或 OpenRouter 後 Agent 無法啟動 | These providers work only with Pi; switch the engine to Pi. / 這些供應商只能搭配 Pi，請把引擎改為 Pi。 |
| Claude Code shows **Not signed in** or **A personal Claude subscription sign-in is required** / Claude Code 顯示「尚未登入」或「需要個人的 Claude 訂閱登入」 | Sign in again under Accounts & API with a personal subscription, or choose Claude Console for API billing. / 在「帳號與 API」用個人訂閱重新登入，或改用 Claude Console（API 計費）。 |
| The model list is empty / 模型清單是空的 | Models are listed after the Agent starts. / 啟動 Agent 後才會列出模型。 |
| An older conversation shows a notice about earlier tools / 舊對話顯示工具較舊的提醒 | Start a new conversation to use the tools added since then. / 開始新對話，即可使用之後新增的工具。 |

<a id="section-4"></a>

## 4. Approvals, rules, and project settings / 核准、規則與專案設定

An approval card shows the proposed command, file change, external lookup, or model action. Read its exact arguments and affected files, then choose **Approve** or **Decline**. Decline and ask for a narrower action if anything is unclear. An ArchiLAW lookup shows its query or document ID. A Revit code run must show the full C# source and hash. Broad permission grants cannot be accepted through a single action card. Do not approve sending client names, contact details, or case details to an external service.

核准卡片會顯示建議的指令、檔案變更、對外查詢或模型操作。檢查完整參數及受影響檔案，再選擇「核准」或「拒絕」；內容不清楚時，先拒絕並要求縮小範圍。ArchiLAW 查詢會顯示查詢文字或文件識別碼。執行 Revit 程式碼前應看到完整 C# 原始碼與雜湊值。單次卡片不能核准廣泛權限。不要核准將客戶姓名、聯絡資訊或案件細節傳給外部服務。

In **Project rules**, add, edit, or remove short directives; save edits to existing rules. An Agent-proposed rule needs your approval before it is stored. Use the **Settings** button at the top of the Agent panel (beside the project name) for **Project settings**: optional design standard, family library path, and title-block rectangle. Title-block values are percentages of a sheet. The default is masked drawing sends. **Send drawings unmasked** is a project choice recorded with every send; review the outgoing pages separately even when it is enabled.

在「專案規則」新增、修改或移除簡短指示；修改既有規則後請儲存。Agent 建議的新規則也需要核准才會保存。Agent 面板上方、專案名稱旁的「設定」按鈕開啟「專案設定」，可設定選用的設計標準、族群資料庫路徑及標題欄範圍。標題欄以圖紙百分比表示。圖紙預設遮罩；「傳送未遮罩圖紙」是個別專案設定，變更及每次傳送都會留下紀錄。即使啟用此選項，每次仍要檢查即將傳送的頁面。


![Project settings (Settings button at the top of the Agent panel) / 專案設定（Agent 面板上方的「設定」按鈕）](./images/07-project-settings.png)

*Project settings (Settings button at the top of the Agent panel)* / *專案設定（Agent 面板上方的「設定」按鈕）*

<a id="section-5"></a>

## 5. Standalone tools / 獨立工具

### Render an image / 產生影像

1. From Home, open **Render**, or select a project's **Render** stage, then upload a base image.
2. Enter the overall architectural prompt.
3. Optionally add regions, paint only the areas to edit, and give each region a specific instruction.
4. Choose Gemini or OpenAI as the provider.
5. Select **Generate Render**.
6. Review the result. Use **Use as Base Image** only when you want the result to replace the current canvas image.

1. 從首頁開啟「渲染」，或選擇專案的「渲染」階段，再上傳一張基礎影像。
2. 輸入整體建築設計提示詞。
3. 視需要新增區域，只塗繪要編輯的範圍，並為各區域輸入具體指示。
4. 選擇 Gemini 或 OpenAI 作為服務供應商。
5. 選取「產生渲染圖（Gemini）」或「產生渲染圖（OpenAI）」。
6. 檢查結果。只有在要以結果取代目前畫布影像時，才使用「設為基底影像」。


![Render with a base image on the canvas; Capture from Revit / SketchUp is in the Control Center / 渲染：畫布載入基礎影像；「從 Revit／SketchUp 擷取」位於控制中心](./images/08-render.png)

*Render with a base image on the canvas; Capture from Revit / SketchUp is in the Control Center* / *渲染：畫布載入基礎影像；「從 Revit／SketchUp 擷取」位於控制中心*

### Study a facade / 立面研究

1. From Home, open **Facade study**. In a project, open the **Render** stage and select the **Facade study** tab.
2. Add one view of the existing building and 2 to 5 reference project images. Images must be PNG, JPEG or WebP, at most 20 MiB each, 8192 pixels per side, and 35 MiB combined.
3. Optionally enter site conditions and a design standard. Choose Gemini or OpenAI and 1 to 3 alternatives.
4. Select **Review before send**. Check the exact images and instruction. Gemini uses all references; OpenAI uses the first two and tells you how many others are omitted. Press **Send** to start generation with the provider API key.
5. Compare each result with the base view. Scores of 0.35 or higher are **Valid alternative**. Scores from 0.25 to below 0.35 show **Check the massing**: review the camera, massing, storeys and openings, then click **I confirm the massing for use and saving** to allow saving and **Use as base image in Render**. The warning label stays after confirmation. Scores below 0.25 show **Massing changed** and cannot be used or saved. In a project, valid alternatives are saved to its local timeline automatically; results marked **Check the massing** are saved only after your confirmation.

1. 從首頁開啟**立面研究**。若在專案中，請開啟**渲染**階段，再選擇**立面研究**分頁。
2. 加入一張現有建築視角，以及 2 至 5 張參考案例圖片。圖片須為 PNG、JPEG 或 WebP，每張不超過 20 MiB、單邊不超過 8192 像素，總大小不超過 35 MiB。
3. 視需要輸入基地條件與設計標準，選擇 Gemini 或 OpenAI，並指定 1 至 3 個方案。
4. 選擇**檢查後送出**，核對實際要傳送的圖片與指令。Gemini 使用所有參考圖；OpenAI 只使用前兩張，畫面會說明略過的張數。按下**送出**後，才會使用服務金鑰開始產生影像。
5. 將每個結果與建築原始視角比較。分數達 0.35 的結果會標示為**有效方案**。分數達 0.25 但未達 0.35 的結果會標示為**請確認量體**；請檢查相機位置、量體、樓層與開口，再按下**我確認量體，可供使用與儲存**，才能儲存或選擇**作為渲染工具的基礎影像**。確認後仍保留警示標示。分數低於 0.25 的結果會標示為**量體已變更**，不可使用或儲存。在專案內，有效方案會自動儲存至本機時間軸；標示「請確認量體」的結果，須經您確認後才會儲存。

![Facade study with an existing view and two references chosen / 立面研究：已選擇現有建築視角與兩張參考圖](./images/13-facade-study.png)

*Facade study with an existing view and two references chosen* / *立面研究：已選擇現有建築視角與兩張參考圖*

### Develop a lighting scheme / 燈光模擬

1. From Home, open **Standalone tools > Lighting**, or choose **Lighting** in a project workbench, then load the viewpoint render into the canvas.
2. Open the drawing set PDF. Choose the ceiling plan (天花) and, if the space has floor lamps or wall lights, the floor plan (地坪).
3. In the **Plan** tab, for each sheet: drag a crop around the area the render shows, leaving out the title block and legend, select **Confirm crop**, then switch to **Camera**, click where the camera stands and drag towards where it looks. Use the same position on both sheets.
4. Optionally import the fixture schedule (燈具表). If it spans several sheets, import each one; rows are combined by code. It is read on this computer only. Check the brand and model columns; **Look up** searches the web for missing data after you confirm the exact brand/model pairs, and saves the result for later projects.
5. Choose the scene and, optionally, add notes.
6. Select **Review and generate**. Check the images and the instruction text, then select **Send**. Nothing is sent before that.

By default the result preserves the structure of your render and transfers the lighting from the AI image (**Settings > Images & drawings > Lighting > Output: Lighting transfer**). If the model changed the space too much to match your render, the result is rejected and your render is unchanged; generate again. The other option, *AI image*, shows the model's image as is and warns when the space changed.

Compare lighting schemes:
1. After the crop is confirmed and the camera is aimed, the fixtures in view are placed on the plan automatically. The panel shows how many; labels whose fixture variant is unclear are counted so you can add them yourself.
2. In the **Plan** tab, choose **Fixtures** to move, add (pick the code first), disable or delete markers. Changing the view moves the automatic markers until you edit one.
3. Use **New copy** in the scheme control to try another arrangement, then generate each scheme. The **Compare** tab shows the latest result of every scheme side by side.

Change the lighting in one area: select **Use as Base Image** on a result, paint a region on the **Render** tab, write what should change in the **Region edits** step, and generate with Gemini. Only the painted area changes; OpenAI lighting region edits are refused before sending. To let the AI draw fixture bodies (for example track spotlights) in a painted area, turn on **Settings > Images & drawings > Lighting > Show fixture bodies in painted regions** and set that region to **Fixture body**.

Fixture library: in the **Fixtures** tab choose **Fixture library** to search by brand, model or type, add or edit fixtures by hand, look one up online, or assign it to a fixture code with **Add to project**.

The result is a visual simulation, not a lighting calculation (no lux values). Use DIALux or Relux for calculations. Daylight already in the render (sun patches) stays faintly visible after a night transfer; a render without direct sunlight works best.

1. 從首頁開啟 **獨立工具 > 燈光**，或在專案工作台選擇 **燈光**，再將視點渲染圖載入畫布。
2. 開啟圖說 PDF。選擇天花照明配置平面圖；若空間有立燈或壁燈，再選擇地坪照明配置平面圖。
3. 在「平面圖」分頁中，對每一張圖：拖曳框出渲染圖所看到的範圍，不要包含圖框與圖例，選取「確認裁切範圍」；再切換到「相機」，點一下相機位置並拖曳到視線方向。兩張圖請標在同一個位置。
4. 可選擇匯入燈具表。若燈具表跨多張圖，請逐張匯入，資料會依燈具編號合併。燈具表只在這台電腦上讀取。請確認廠牌與型號欄位；「查詢」會在您確認要送出的廠牌與型號後上網查詢缺少的資料，並保存供之後的專案使用。
5. 選擇場景，並視需要輸入補充說明。
6. 選取「檢查並產生（Gemini）」。確認圖片與指令文字後選取「傳送至 Gemini」；在此之前不會送出任何內容。


![Lighting: schemes and the six steps from viewpoint render to scene / 燈光模擬：方案與從視角渲染圖到場景的六個步驟](./images/09-lighting.png)

*Lighting: schemes and the six steps from viewpoint render to scene* / *燈光模擬：方案與從視角渲染圖到場景的六個步驟*

預設情況下，結果會保留渲染圖的結構，並從 AI 影像轉移燈光（「設定 > 圖像與圖面 > 燈光 > 輸出：燈光轉移」）。若模型把空間改動到無法與渲染圖對齊，結果會被退回，您的渲染圖不會改變，請重新產生。另一個選項「AI 影像」會直接顯示模型產生的影像，並在空間被改動時提出警告。

比較燈光方案：
1. 確認裁切範圍並設定好相機方向後，視角內的燈具會自動放到平面圖上。面板會顯示數量；無法判斷燈具規格變體的標籤會另外計數，請自行加入。
2. 在「平面圖」分頁選擇「燈具」，即可移動、新增（先選擇燈具編號）、停用或刪除標記。在您編輯任何標記之前，改變視角時自動標記會跟著更新。
3. 使用方案控制項中的「建立副本」嘗試另一種配置，再分別產生各方案。「比較」分頁會並排顯示每個方案的最新結果。

只修改某個區域的燈光：在結果上選取「設為基底影像」，在「渲染圖」分頁塗繪區域，於「區域編輯」步驟寫下要修改的內容，再使用 Gemini 產生。只有塗繪的區域會改變；OpenAI 燈光區域編輯會在傳送前被拒絕。若要讓 AI 在塗繪區域畫出燈具本體（例如軌道投射燈），請開啟「設定 > 圖像與圖面 > 燈光 > 在繪製區域中顯示燈具本體」，並將該區域設為「燈具本體」。

燈具資料庫：在「燈具」分頁選擇「燈具資料庫」，可依廠牌、型號或類型搜尋，手動新增或編輯燈具，上網查詢，或用「新增至專案」指定給某個燈具編號。

結果是視覺模擬，不是照明計算，沒有照度數值。照度計算請使用 DIALux 或 Relux。渲染圖中原有的日光（陽光照射的光斑）在轉換成夜間燈光後仍會淡淡可見；使用沒有直射陽光的渲染圖效果最好。

### Ask the Agent to render or check workspace files / 請 Agent 渲染或檢查專案檔案

For files already in the project workspace, ask the Agent to render a PNG/JPEG view, study a facade
with 2–5 reference images and 1–3 alternatives, or check PDF sheets locally. Image tools use Gemini
by default; you can ask for OpenAI (facade studies allow only two references with OpenAI). Agent
image tools use server-configured keys or desktop keys, not browser-only personal overrides.

若檔案已在專案工作目錄，可請 Agent 渲染 PNG／JPEG 視圖、以 2–5 張參考圖產生 1–3 個立面方案，
或在本機檢查 PDF 圖紙。影像工具預設使用 Gemini，也可指定 OpenAI；OpenAI 立面研究僅接受兩張
參考圖。Agent 影像工具使用伺服器或桌面版設定的金鑰，不使用僅儲存在瀏覽器的個人金鑰。

Before approving, inspect every image preview, its path and dimensions, the full instruction,
provider/model and number of paid outputs. These tools send views as shown without masking title
blocks; decline if a view exposes private drawing information. PDFs cannot be sent through render
or facade tools. If a source changes while you review, request a new review. Declining makes no
provider request and saves no result.

核准前，請檢查每張圖片預覽、路徑與尺寸、完整指示、供應商／模型及付費輸出數量。這些工具會依
預覽原樣傳送視圖，不會遮蔽標題欄；若視圖包含私人圖面資訊，請拒絕。渲染及立面工具不接受 PDF。
審核期間若來源檔案改變，請重新要求審核。拒絕後不會呼叫供應商，也不會儲存結果。

Results appear under `renders/` or `facade/` with an alignment score. At 0.35 or above the level is
`valid`; 0.25 to below 0.35 means `check` (check the massing); below 0.25 means `changed` (massing
changed), and the saved filename includes `massing-changed`. Review the building geometry before
using the image. Lighting is not an Agent tool: its UI needs plan crops and a camera drawn on the plan.

結果會存入 `renders/` 或 `facade/`，並附上對齊分數。0.35 以上為 `valid`；0.25 至未滿 0.35 為
`check`，表示應檢查量體；低於 0.25 為 `changed`，表示量體已改變，儲存檔名也會加上
`massing-changed`。使用前請檢查建築幾何。燈光不是 Agent 工具；請在燈光介面裁切平面圖，並於圖上
繪製相機位置與方向。

Agent `sheet_check` reads PDFs locally for Simplified characters, overlapping text and text outside
the detected frame. It has no AI visual check and does not automatically complete a stage. Pages
without a text layer or detected frame need manual review in Sheet check.

Agent 的 `sheet_check` 會在本機檢查 PDF 的簡體字、文字重疊及超出偵測圖框的文字，不提供 AI
視覺檢查，也不會自動完成階段。沒有文字層或偵測圖框的頁面，請在圖紙檢查介面人工確認。

### Check sheets / 檢查圖紙

**Sheet check:** Import PDF, PNG, or JPG sheets. PDF text checks run locally for Simplified Chinese, overlapping text, and text outside the detected or manually drawn frame. Image-only pages have no local text check. Export findings as Markdown or CSV. For an optional visual check, draw the title-block region, select **Review before send**, inspect each masked page and instruction, then confirm the send. In a project, use the unmasked switch only after reviewing what it reveals. A Sheet check does not automatically mark the stage done.

「圖紙檢查」：匯入 PDF、PNG 或 JPG 圖紙。PDF 的文字檢查在本機進行，包括簡體字、文字重疊及超出自動偵測或手動畫定圖框的文字。純影像頁面沒有本機文字檢查。結果可匯出為 Markdown 或 CSV。選用視覺檢查時，先框選標題欄，選取「傳送前檢視」，逐頁確認遮罩影像及指示，最後再確認傳送。專案若啟用未遮罩傳送，請先檢查會暴露的內容。圖紙檢查不會自動將階段標示完成。


![Sheet check with a sample PDF: pages, frame tools and findings / 圖紙檢查載入範例 PDF：頁面、圖框工具與檢查結果](./images/10-sheet-check.png)

*Sheet check with a sample PDF: pages, frame tools and findings* / *圖紙檢查載入範例 PDF：頁面、圖框工具與檢查結果*

<a id="section-6"></a>

## 6. ArchiLAW and Revit / ArchiLAW 與 Revit

For regulation research, enter the administrator's HTTPS MCP URL under **Settings > Integrations & security > ArchiLAW**, save it, and select **Connect**. Sign in with your own invited account on this computer. After the status shows connected, restart the Agent and ask a question. Inspect the exact proposed query and optional jurisdiction or document ID before approval; remove personal and case details. Check the cited sources in the answer. **Disconnect** removes local credentials; a blank saved URL disables the endpoint.

查詢法規時，在「設定 > 整合與安全 > ArchiLAW」填入管理員提供的 HTTPS MCP 網址，儲存後選取「連線」，並在這部電腦使用自己的受邀帳號登入。狀態顯示已連線後，重新啟動 Agent 再提問。核准前檢查完整查詢文字、選填的管轄範圍或文件識別碼，移除個人及案件資訊；收到答案後檢查引用來源。「中斷連線」會移除本機憑證，儲存空白網址可停用服務。


![Settings > Integrations & security: ArchiLAW connection / 設定 > 整合與安全：ArchiLAW 連線](./images/12-settings-integrations.png)

*Settings > Integrations & security: ArchiLAW connection* / *設定 > 整合與安全：ArchiLAW 連線*

For a viewport image, install the matching Revit or SketchUp companion, open **Capture from Revit / SketchUp > Connect companion**, and enter the local endpoint and temporary token in the companion. Capture the current view in the host app. In Archigent, inspect the thumbnail and choose **Use in canvas** or **Discard**; capture never replaces the canvas automatically. Keep the pairing token out of screenshots. Revit model pairing for Agent actions is separate from viewport capture. An administrator must install the Revit 2025/2026 add-in and pair the selected project. Revit writes save a version and use a ledger of Agent-created elements; architect edits must be reported before another write. The bridge has not yet been verified in Revit on Windows.

若要取得視圖影像，先安裝對應的 Revit 或 SketchUp 擴充功能，在「從 Revit／SketchUp 擷取 > 連接擴充功能」取得本機端點與暫時權杖，輸入擴充功能後於主機程式擷取目前視圖。回到 Archigent 檢查縮圖，選擇「用於畫布」或「捨棄」；擷取不會自動取代畫布。截圖不要包含配對權杖。Agent 的 Revit 模型配對與視圖擷取是不同流程；管理員須安裝 Revit 2025／2026 增益集並配對所選專案。Revit 寫入前會儲存版本，並以紀錄追蹤 Agent 建立的元素；再次寫入前須報告建築師的修改。此橋接功能尚未在 Windows 的 Revit 中實測。


![Model stage: Revit and SketchUp model bridges before pairing. After you pair, the endpoint and token appear here; keep them out of screenshots. / 模型階段：尚未配對的 Revit 與 SketchUp 模型橋接。配對後此處會顯示端點與權杖，截圖時請勿包含。](./images/11-model-pairing.png)

*Model stage: Revit and SketchUp model bridges before pairing. After you pair, the endpoint and token appear here; keep them out of screenshots.* / *模型階段：尚未配對的 Revit 與 SketchUp 模型橋接。配對後此處會顯示端點與權杖，截圖時請勿包含。*

### Capture a viewport image / 擷取 Revit 或 SketchUp 視圖

Use this optional workflow to send a raster snapshot of the current host-application viewport into Archigent. Archigent does not upload, open, or store RVT/SKP model files.

1. Install the matching companion before starting this workflow; Archigent cannot auto-discover Revit or SketchUp, and it cannot capture another application's window directly. SketchUp (macOS/Windows): install `ArchiGen-SketchUp-<version>.rbz` with **Extensions → Extension Manager → Install Extension**. Revit 2025/2026 (Windows): extract `ArchiGen-Revit<year>-<version>.zip` and run `install.ps1`. The desktop app carries the installers: download them from the **Install the plug-in** links in this panel or in the Model stage.
2. In the Control Center, open **Capture from Revit / SketchUp** and select **Connect companion**.
3. Copy the endpoint and pairing token shown in the panel into the companion (each **Copy** button, or **Copy both** and then **Paste from clipboard** in Revit). Do not include either value in screenshots or support requests.
4. In SketchUp, use **Extensions → Archigent → Capture current view to Archigent**. In Revit on Windows, run **Capture current view to Archigent** from the installed add-in.
5. Return to Archigent and review the thumbnail, source application, document display name, and dimensions.
6. Select **Use in canvas** to replace the current base image, or select the trash button to **Discard** the received snapshot. A capture never replaces the canvas automatically.

此為選用流程，可將目前主機應用程式視圖的點陣快照傳送至 Archigent。Archigent 不會上傳、開啟或儲存 RVT／SKP 模型檔案。

1. 開始此流程前，請先安裝對應的擴充功能；Archigent 無法自動探索 Revit 或 SketchUp，也無法直接擷取其他應用程式視窗。SketchUp（macOS／Windows）：以 **Extensions → Extension Manager → Install Extension** 安裝 `ArchiGen-SketchUp-<版本>.rbz`。Revit 2025／2026（Windows）：解壓縮 `ArchiGen-Revit<年份>-<版本>.zip` 並執行 `install.ps1`。桌面版已內附安裝檔，可從此面板或「模型」階段的「安裝外掛」連結下載。
2. 在「控制中心」的「從 Revit／SketchUp 擷取」區塊，選取「連接外掛程式」。
3. 將面板顯示的位址與配對碼貼到擴充功能（逐項按「複製」，或按「兩者一起複製」後在 Revit 按「從剪貼簿貼上」）。請勿在螢幕截圖或支援請求中包含這些值。
4. 在 SketchUp 中使用 **Extensions → Archigent → Capture current view to Archigent**。在 Windows 的 Revit 中，從已安裝的增益集執行 **Capture current view to Archigent**。
5. 回到 Archigent，檢查縮圖、來源應用程式、文件顯示名稱與尺寸。
6. 選取「在畫布中使用」以取代目前基礎影像，或選取垃圾桶按鈕「捨棄」接收的快照。接收的快照不會自動取代畫布。

#### Supported platforms and fallback / 支援平台與備援方式

- The SketchUp companion is intended for macOS and Windows. The Revit companion is Windows-only because Revit is Windows-only.
- Pairing is local to the same computer and accepts PNG/JPEG snapshots only. Use a new token within five minutes; after the first capture it stays valid until 12 hours after the last capture. Connect again after restarting Archigent, because its local address changes.
- If a companion is unavailable, pairing expires, or a host version is unsupported, export the current view as PNG/JPEG in Revit or SketchUp and use the ordinary **Import image** button in Archigent.
- Installation instructions for testers are in `integrations/README.md`.

- SketchUp 擴充功能適用於 macOS 與 Windows。Revit 增益集僅支援 Windows，因為 Revit 僅支援 Windows。
- 配對僅限同一台電腦，且只接受 PNG／JPEG 快照。新的配對碼須在五分鐘內使用；第一次擷取後，會在最後一次擷取後 12 小時內持續有效。重新啟動 Archigent 後本機位址會改變，請重新連接。
- 若擴充功能無法使用、配對已過期，或主機版本不受支援，請在 Revit 或 SketchUp 匯出目前視圖為 PNG／JPEG，再使用 Archigent 的「匯入影像」按鈕。
- 測試者的安裝說明位於 `integrations/README.md`。

### Chat and documents / 對話與文件

The **Assistant** (speech-bubble icon in the Render and Lighting workspace) is for quick design questions and prompt ideas. It answers only and changes nothing; it uses the current main prompt, approved project memories and matching uploaded reference documents, and it works without a project, a ChatGPT sign-in or Revit, with Gemini or OpenAI (Settings > Text provider). When a reply suggests a prompt, choose **Apply to prompt** to put it in the canvas prompt field. In a project, the **Agent** is the main assistant: it can also search the same reference documents and approved memories, and it can act with your approval. The Agent panel's **Quick question** tab opens the same lightweight assistant. Projects, chat history and memories are kept in the local database.

「助理」（渲染與燈光工作區的對話泡泡圖示）用於快速詢問設計問題、討論提示詞，只回答、不會修改任何東西；它會參考目前的主提示詞、已核准的專案記憶與上傳的相關參考文件，不需要專案、ChatGPT 登入或 Revit，可用 Gemini 或 OpenAI（設定 > 文字服務）。回答中有建議的提示詞時，按「套用到提示詞」即可帶入畫布的提示詞欄。在專案中以 Agent 為主要助手：它也能查詢同樣的參考文件與已核准記憶，並在你核准後執行操作。Agent 面板的「快速提問」分頁開啟同一個輕量助理。專案、對話紀錄與記憶會儲存在本機資料庫。

<a id="section-7"></a>

## 7. Files and troubleshooting / 檔案位置與疑難排解

The desktop app keeps private application data in its operating system user-data folder; the local web server defaults to `~/.archigen-studio` unless `ARCHIGEN_DATA_DIR` is set. Project records, chat, and documents are in `archigen.sqlite`; Agent workspace files are under `projects/<id>/workspace/`. Rules and settings are stored per project. Browser canvas timelines and some web settings stay in that browser. Exported images, Markdown/CSV findings, and CAD/Revit files go to the location you choose or to the host application's file location; an Agent workspace file is not automatically copied into Revit or CAD. Back up your source drawings separately.

桌面版會在作業系統的使用者資料目錄保存私人資料；本機網頁伺服器預設使用 `~/.archigen-studio`，也可由 `ARCHIGEN_DATA_DIR` 指定。專案、對話與文件存於 `archigen.sqlite`；Agent 工作檔案位於 `projects/<id>/workspace/`，規則與設定則按專案保存。瀏覽器畫布歷程及部分網頁設定留在該瀏覽器。匯出的影像、Markdown／CSV 結果及 CAD／Revit 檔案會保存到您選擇或主機程式指定的位置；Agent 工作目錄的檔案不會自動複製到 Revit 或 CAD。請另行備份原始圖紙。

If **Start Agent** fails, check the selected Agent provider and sign-in status, then its download/error message; the first download needs network access. If image generation is unavailable, check the Gemini/OpenAI key, selected model, and Settings status; ChatGPT sign-in alone is insufficient. If a visual Sheet check cannot send, draw a title-block rectangle and review the masked pages, or explicitly enable and review unmasked sending for that project. If Revit pairing fails, ensure Archigent and Revit run on the same computer, repeat pairing before the five-minute token expires, and use the add-in matching the Revit year. For an ArchiLAW failure, check the HTTPS URL, sign-in status, and approval; reconnect and restart the Agent after an account change. Report errors without sending credentials, pairing tokens, client names, or private drawings in screenshots.

若「啟動 Agent」失敗，檢查 Agent 供應商與登入狀態，再查看下載或錯誤訊息；首次下載需要網路。若無法產生影像，檢查 Gemini／OpenAI 金鑰、模型及設定狀態；只有 ChatGPT 登入仍不足。若圖紙視覺檢查不能傳送，請框選標題欄並檢查遮罩頁面，或在該專案明確啟用未遮罩傳送並確認內容。若 Revit 配對失敗，確認 Archigent 與 Revit 在同一部電腦，於五分鐘權杖期限內重新配對，並使用對應年份的增益集。ArchiLAW 失敗時，檢查 HTTPS 網址、登入狀態與核准內容；變更帳號後重新連線並啟動 Agent。回報錯誤時，截圖不要包含憑證、配對權杖、客戶姓名或私人圖紙。

### Common errors / 疑難排解

| Issue | What to do |
| --- | --- |
| Gemini model list shows a fallback | Confirm the key is saved, select **Refresh models**, then check that your key, account, region, and network can access Gemini. |
| `401` or `403` provider error | The key is invalid, unavailable, or lacks permission. Replace it in Settings. |
| `429` provider error | The provider quota or rate limit was reached. Wait, choose another available model, or check your provider account. |
| Image result is unexpected | Retry with one clear scene description, fewer reference images, and painted masks only where editing is required. |
| The app cannot generate after an update | Quit the app completely, reopen it, and confirm the saved key in Settings. |
| A companion capture does not arrive | Confirm Archigent is running on the same computer, pair again, and copy the current local endpoint and token into the host extension. |
| A companion capture is rejected | The pairing may have expired, the image may be too large, or the request is not a PNG/JPEG snapshot. Pair again or use manual PNG/JPEG import. |

| 問題 | 處理方式 |
| --- | --- |
| Gemini 模型清單顯示備援內容 | 確認金鑰已儲存，在「設定 > 圖像與圖面」選取「重新整理模型」，再檢查 API 金鑰、帳戶、地區與網路是否可存取 Gemini。 |
| 出現 `401` 或 `403` 服務錯誤 | 金鑰無效、無法使用或權限不足。請在「設定 > 帳號與 API」重新輸入金鑰。 |
| 出現 `429` 服務錯誤 | 已達服務供應商的配額或速率限制。請稍後再試、改用其他可用模型，或檢查供應商帳戶。 |
| 影像結果不如預期 | 使用單一明確場景描述重試，減少參考影像，並只在需要編輯處塗繪遮罩。 |
| 更新後無法產生影像 | 完全結束應用程式後重新開啟，並在「設定 > 帳號與 API」確認已儲存金鑰。 |
| 未收到擴充功能快照 | 確認 Archigent 與主機應用程式在同一台電腦上執行，重新配對，並將目前本機端點與權杖複製到主機擴充功能。 |
| 擴充功能快照遭拒絕 | 配對可能已過期、影像可能過大，或請求不是 PNG／JPEG 快照。請重新配對，或改用手動 PNG／JPEG 匯入。 |

### Report an issue / 安全與回饋

- Never send API keys, viewport pairing tokens, or captured model-file paths in screenshots, chat messages, issue reports, or email.
- Use the bottom **Logs** panel when reporting an error. Copy the redacted error message and the steps that caused it; do not include keys or pairing tokens.
- Report the app version, operating system version, selected provider/model, and whether a mask or reference image was used.

- 請勿在螢幕截圖、對話訊息、問題回報或電子郵件中傳送 API 金鑰、視圖配對權杖或擷取的模型檔案路徑。
- 回報錯誤時請使用底部的「日誌」面板。複製已遮蔽的錯誤訊息與重現步驟；不要包含金鑰或配對權杖。
- 請提供應用程式版本、作業系統版本、選擇的服務供應商／模型，以及是否使用遮罩或參考影像。
