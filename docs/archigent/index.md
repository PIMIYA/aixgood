# Archigent

::: info 測試版 (Beta)
Archigent 目前為測試版本，功能持續開發中。
:::

## Agentic Architecture Design

Archigent 是一款 agentic 架構設計工作台：AI Agent 直接參與建築設計工作流程，從草圖到出圖的每個階段都可以請 Agent 操作、檢查、產出，而不只是問答。Agent 讀取你的 Revit 或 SketchUp 模型、產生渲染圖、檢查圖紙、查詢法規，每一步都經過你的核准。

Archigent 在你的電腦上運行，專案資料保存在本機。

## 七個專案階段

| 階段 | 說明 |
|------|------|
| 手稿 (Sketch) | 整理版本、校正尺寸、比對基地條件 |
| CAD | 圖層標註、DWG/DXF/PDF 匯出、與手稿疊合比對 |
| 模型 (Model) | 讀取與操作已配對的 Revit 或 SketchUp 模型 |
| 圖紙 (Sheets) | 圖紙品質檢查：簡體字、文字重疊、超出圖框 |
| 數量造價 (Quantities) | 數量統計、單價查核、差異報告 |
| 渲染 (Render) | AI 建築渲染圖與立面研究 |
| 燈光 (Lighting) | 燈光方案模擬與比較 |

每個階段提供對應的 Agent 目標、檢查項目與建議請求，引導工作流程。階段狀態是導覽提示，不會限制切換。

## AI Agent

每個專案內建 AI Agent，可以：

- 讀取與修改 Revit / SketchUp 模型（需配對擴充功能並逐項核准）
- 產生建築渲染圖與立面方案
- 檢查 PDF 圖紙品質
- 查詢 ArchiLAW 法規知識庫
- 在專案工作目錄中處理檔案
- 根據專案規則與核准記憶回答問題

### 執行引擎

Agent 提供三種執行引擎：

| 引擎 | 說明 |
|------|------|
| Codex | 使用 ChatGPT 方案或 OpenAI API |
| Pi | 支援多家 API 供應商 |
| Claude Code | 透過本機安裝的官方 Claude Code 使用 Claude 訂閱 |

### 供應商支援

| 供應商 | 文字功能 | Agent: Codex | Agent: Pi | Agent: Claude Code | 影像產生 |
| --- | --- | --- | --- | --- | --- |
| ChatGPT Plus 或 Pro | 可 | 可 | 可 | 否 | 否 |
| Claude 個人訂閱（例如 Pro 或 Max） | 否 | 否 | 否 | 可（預覽） | 否 |
| Claude Console | 否 | 否 | 否 | 可（預覽） | 否 |
| OpenAI API 金鑰 | 可 | 可 | 可 | 否 | 可 |
| Google Gemini API 金鑰 | 可 | 否 | 可 | 否 | 可 |
| Anthropic（Claude 模型）API 金鑰 | 否 | 否 | 可 | 否 | 否 |
| xAI (Grok) API 金鑰 | 否 | 否 | 可 | 否 | 否 |
| Kimi (Moonshot) API 金鑰 | 否 | 否 | 可 | 否 | 否 |
| OpenRouter API 金鑰 | 否 | 否 | 可 | 否 | 否 |
| OpenAI 相容端點 | 可 | 須支援 Responses API | 可 | 否 | 否 |

## 獨立工具

以下工具不需要建立專案即可使用：

- **渲染 (Render)**：上傳基礎影像，以區域遮罩與提示詞產生建築渲染圖
- **立面研究 (Facade study)**：提供現狀照片與參考案例，產生立面方案並以對齊分數評估
- **燈光 (Lighting)**：匯入平面圖與燈具表，模擬燈光配置並比較方案
- **圖紙檢查 (Sheet check)**：匯入 PDF/PNG/JPG 圖紙，檢查簡體字、文字重疊與超出圖框

獨立工具不需要 ChatGPT 登入或 Revit，但產生影像需要 Gemini 或 OpenAI API 金鑰。

## Revit 與 SketchUp 整合

Archigent 可透過擴充功能（plug-in）配對 Revit 2023/2025/2026 與 SketchUp 2024+：

- **視圖擷取**：從 Revit 或 SketchUp 擷取當前視圖快照作為渲染基礎影像
- **模型讀寫**：Agent 可讀取模型資訊、提出修改建議，經建築師核准後寫入
- 每次寫入都會儲存版本並追蹤 Agent 建立的元素

## ArchiLAW 連接

在 **設定 > 整合與安全** 輸入 ArchiLAW 的 MCP 連接網址並登入後，Agent 即可查詢法規知識庫。每次查詢都需要你的核准。

## 系統需求

| 項目 | 需求 |
|------|------|
| 作業系統 | macOS（Apple Silicon 或 Intel）、Windows 10+ |
| 執行環境 | Node.js 20+（本機網頁版） |
| 網路 | 需要網路連線以使用 AI 服務 |
| AI 服務 | ChatGPT Plus/Pro 帳號，或 OpenAI/Gemini API 金鑰 |

## 與 ArchiLAW 的關係

| | ArchiLAW | Archigent |
|---|---|---|
| 用途 | 法規知識庫檢索與問答 | 建築專案工作台 |
| 使用方式 | MCP 連接或 Web App | 桌面應用程式或本機網頁 |
| 適用場景 | 法規查詢、法規比較、法規追蹤 | 設計、建模、渲染、出圖全流程 |
| AI 服務 | 內建（由伺服器端提供） | 使用者自備 API 金鑰或 ChatGPT 帳號 |
| 資料位置 | 伺服器端 | 本機 |

[安裝與設定 ->](./setup)
