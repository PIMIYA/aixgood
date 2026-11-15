# 安裝與設定

::: info 測試版 (Beta)
目前為受邀測試版本，安裝檔案由專案團隊提供。
:::

## 下載

測試期間，請向專案團隊取得適合你作業系統的安裝檔案：

| 平台 | 檔案 |
|------|------|
| macOS (Apple Silicon) | `Archigent-<版本>-arm64-mac.zip` |
| macOS (通用) | `Archigent-<版本>-universal-mac.zip` |
| Windows x64 | `Archigent-Setup-<版本>-x64.exe` |

## 安裝步驟

### macOS

1. 連按兩下 ZIP，解壓縮 **Archigent.app**
2. 將 **Archigent.app** 移至「應用程式」
3. 開啟應用程式。此程式已由 Apple 簽章及公證；第一次開啟時，macOS 會詢問是否開啟從網路下載的應用程式，請選擇「打開」
4. 選取頁首的「關於」，確認版本與發行頁面相同

### Windows

1. 執行安裝程式並依照步驟完成安裝
2. Windows 安裝程式目前尚未程式碼簽章，SmartScreen 可能顯示「Windows 已保護您的電腦」。只有確認檔案來自專案團隊時，才選擇「其他資訊 > 仍要執行」。若公司政策封鎖安裝程式，請洽詢 IT 管理員
3. 從開始功能表開啟 **Archigent**
4. 選取頁首的「關於」，確認版本

### 從 ArchiGen Studio 升級

軟體已改名為 Archigent。專案、設定與已儲存的金鑰都留在原處，會直接出現在 Archigent。

- **Mac**：安裝 Archigent.app 後，請結束舊程式，並從「應用程式」刪除 ArchiGen Studio.app
- **Windows**：安裝程式會直接取代舊版

請從軟體內重新安裝 SketchUp 與 Revit 外掛，外掛選單才會顯示 Archigent；重新安裝前，舊外掛仍可正常配對。

## 初始設定

### 1. AI 服務供應商

開啟右上角的 **設定**。

#### 帳號與 API 金鑰

在 **設定 > 帳號與 API** 中：

- 若有 ChatGPT Plus 或 Pro 帳號，選取「ChatGPT > 使用 ChatGPT 繼續」，在同一部電腦的系統瀏覽器完成登入，返回應用程式並確認登入狀態。遠端或共用伺服器不提供此登入方式
- 在 **Google Gemini** 及／或 **OpenAI** 區塊貼上你自己的 API 金鑰，選取「儲存」

桌面版會透過作業系統憑證服務保存金鑰。金鑰不會被包入應用程式，也不會再次顯示。設定中只會顯示「金鑰已儲存」；可選擇「取代」或「清除金鑰」後儲存。

#### 服務供應商與執行引擎一覽

Archigent 在三個地方使用 AI 服務：**文字功能**（助理、提示詞協助）、專案 **Agent**，以及**影像產生**（渲染、燈光、立面研究）。每項服務若不是**訂閱登入**（ChatGPT、Claude），就是由供應商依用量計費的 **API 金鑰**。Agent 可在三種執行引擎之一上執行；下表列出各供應商可用的地方。

| 供應商 | 連接方式 | 文字功能 | Agent: Codex | Agent: Pi | Agent: Claude Code | 影像產生 |
| --- | --- | --- | --- | --- | --- | --- |
| ChatGPT Plus 或 Pro | 訂閱登入：帳號與 API > ChatGPT | 可 | 可 | 可 | 否 | 否 |
| Claude 個人訂閱（例如 Pro 或 Max） | 訂閱登入：帳號與 API > Claude Code >「使用 Claude 登入」 | 否 | 否 | 否 | 可（預覽） | 否 |
| Claude Console | API 計費：帳號與 API > Claude Code >「Claude Console 登入」 | 否 | 否 | 否 | 可（預覽） | 否 |
| OpenAI | API 金鑰：帳號與 API > OpenAI | 可 | 可 | 可 | 否 | 可 |
| Google Gemini | API 金鑰：帳號與 API > Google Gemini | 可 | 否 | 可 | 否 | 可 |
| Anthropic（Claude 模型） | API 金鑰：帳號與 API >「Pi 服務 API 金鑰」 | 否 | 否 | 可 | 否 | 否 |
| xAI (Grok) | API 金鑰：「Pi 服務 API 金鑰」 | 否 | 否 | 可 | 否 | 否 |
| Kimi (Moonshot) | API 金鑰：「Pi 服務 API 金鑰」 | 否 | 否 | 可 | 否 | 否 |
| OpenRouter | API 金鑰：「Pi 服務 API 金鑰」 | 否 | 否 | 可 | 否 | 否 |
| OpenAI 相容端點 | 基底網址、模型、選填金鑰：帳號與 API | 可 | 須支援 Responses API | 可 | 否 | 否 |

須知：

- **訂閱不包含影像與 API 費用。** ChatGPT 或 Claude 訂閱可以執行 Agent，但渲染、燈光與立面研究一定需要 Gemini 或 OpenAI API 金鑰。
- **Claude 訂閱只能透過 Claude Code 引擎使用。** 須自行安裝官方 Claude Code，再從 Archigent 登入；Archigent 不會看到您的 Claude 密碼或憑證。不接受 Claude Team 與 Enterprise 帳號；請改用 Claude Console（API 計費），或以 Pi 搭配 Anthropic 金鑰。Windows 目前不提供 Claude Code，此版本中 Claude Code 為預覽功能。
- **Pi 搭配 API 金鑰**可使用 Anthropic（Claude 模型）、Google Gemini、xAI、Kimi、OpenRouter、OpenAI 或相容端點，由各供應商依用量計費。Anthropic、xAI、Kimi 與 OpenRouter 的金鑰輸入「Pi 服務 API 金鑰」（桌面版，以作業系統憑證服務保存）；Gemini 與 OpenAI 金鑰使用各自的欄位。
- **Codex** 只接受 ChatGPT 方案、OpenAI 金鑰，或支援 Responses API 的相容端點。供應商清單中標示「— Pi」的選項須搭配 Pi 引擎。
- 目前不提供 GitHub Copilot。

#### 文字與 Agent 服務供應商

在「設定 > Agent」中，「預設執行引擎」可選擇 Codex（ChatGPT 方案或 OpenAI）、Pi（多家 API 供應商）或 Claude Code（透過本機安裝的官方 Claude Code 使用 Claude 訂閱）。在「服務供應商選擇」分別選擇文字功能與 Agent 的服務供應商。文字功能支援 ChatGPT 方案、OpenAI 金鑰、Gemini 金鑰與 OpenAI 相容端點。Agent 支援 ChatGPT 方案、OpenAI 金鑰，以及支援 Responses API 的相容端點。若要使用 ChatGPT 方案，請先在 ChatGPT 區塊登入。Gemini 與僅支援聊天的端點無法執行 Agent。使用相容端點時，請輸入基底網址與模型，並可選擇輸入 API 金鑰。金鑰欄只會顯示「金鑰已儲存」，不會顯示金鑰內容；可選擇「取代」或「清除金鑰」後儲存。網址須使用 HTTPS，只有 `127.0.0.1` 等明確的本機迴圈位址可使用 HTTP。影像生成仍使用下方的 Gemini 或 OpenAI 設定。

#### 影像產生

使用「渲染」、「燈光」或「立面研究」時，須在設定中提供 Gemini 或 OpenAI API 金鑰。ChatGPT 方案不包含影像產生。

在 **設定 > 圖像與圖面** 中，影像模型清單會從 Gemini 帳戶取得。選取「重新整理模型」可更新可用模型。

### 2. 連接 ArchiLAW（選用）

如需查詢法規知識庫：

1. 在 **設定 > 整合與安全 > ArchiLAW** 填入管理員提供的 HTTPS MCP 網址
2. 儲存後選取「連線」
3. 使用你的受邀帳號在同一部電腦完成登入
4. 狀態顯示已連線後，重新啟動 Agent 即可查詢法規

「中斷連線」會移除本機憑證；儲存空白網址可停用服務。

### 3. 介面與外觀

- 使用頁首的語言切換按鈕選擇英文或繁體中文
- **設定 > 一般 > 外觀**可選擇「跟隨系統」、「淺色」或「深色」
- **設定 > 一般 > 通知**可在 Agent 完成或需要核准時顯示桌面通知（通知不含訊息內容）

## 更新

測試版更新由專案團隊通知，下載新版本覆蓋安裝即可。更新改變 Agent 的工具後，較舊的對話不會自動接續，開啟時會提示你開始新對話。
