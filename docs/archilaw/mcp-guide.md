# MCP 連接指南

::: info 什麼是 MCP
[Model Context Protocol (MCP)](https://modelcontextprotocol.io/) 是一種開放協定，讓 AI 工具可以連接外部知識來源。透過 MCP，你可以在 Claude、ChatGPT 等 AI 工具中直接查詢 ArchiLAW 知識庫。
:::

## 開始之前

- MCP 網址與邀請碼請向管理員取得。ArchiLAW Web App 的「MCP 連接」視窗也可以一鍵複製 MCP 網址。
- 邀請碼只需要輸入一次，之後由該工具自動續用，直到邀請碼到期或被停用。
- 登入時，瀏覽器會開啟標題為「連線到 ArchiLAW」的頁面。請確認頁面上顯示的應用程式名稱是您正在使用的工具（例如 Claude 或 ChatGPT），完成後會回到該工具的網站。確認無誤後輸入邀請碼，按「登入並允許」。如果不認得這個應用程式，或不是您自己發起的連線，請按「拒絕」。
- 問題會先經過個人資料遮蔽再查詢。請不要在問題裡輸入當事人姓名、身分證字號等個人資料。

## 支援的客戶端

| 客戶端 | 支援狀態 |
|--------|----------|
| Claude (claude.ai / Claude Desktop) | 已驗證 |
| ChatGPT (chatgpt.com / 桌面版) | 已驗證 |
| Gemini (gemini.google.com) | 尚未開放 |
| 其他 MCP 客戶端 | 理論上相容，歡迎回報 |

## 連接步驟

### Claude（網頁版與 Claude Desktop）

Claude 網頁版與 Claude Desktop 共用同一個帳號的連接器設定，在其中一邊加好，另一邊也能用。免費方案最多可加 1 個自訂連接器。

1. 開啟「Customize」>「Connectors」。
2. 按「+ Add」，選「Add custom connector」。
3. 名稱填 `ArchiLAW`，網址貼上管理員提供的 MCP 網址，按「Continue」。
4. 畫面會顯示偵測到的登入方式，直接按「Continue」。
5. 「Authentication」選「Sign in now」。
6. 「OAuth client」保持預設的「Use Claude's published identity (Recommended)」即可。「Request headers」保持空白。
7. 按「Add」。瀏覽器會開啟「連線到 ArchiLAW」頁面，確認後輸入邀請碼。
8. 在對話中使用：按輸入框左下角的「+」>「Connectors」，打開 ArchiLAW。

Team 與 Enterprise 方案：由組織的 Owner 在「Organization settings」>「Connectors」新增，每位成員到「Customize」>「Connectors」找到 ArchiLAW，按「Connect」，各自用自己的邀請碼登入。

### ChatGPT

網頁版與桌面版步驟相同。手機版目前不能新增自訂 MCP。

1. 開啟「Customize」>「Plugins」。
2. 按右上角「Add」>「Add custom MCP server」。
3. 填寫表單：
   - 「Name」：`ArchiLAW`
   - 「Connection」：選「Server URL」（不是「Tunnel」），貼上 MCP 網址
   - 「Authentication」：選「OAuth」
   - 「Advanced OAuth settings」：不用打開，保持預設
4. 確認網址是 ArchiLAW 的之後，勾選「I understand and want to continue」。
5. 按「Create as a plugin」（不要按「Upload plugin archive」）。
6. 開啟的登入頁面確認後輸入邀請碼，按「登入並允許」。
7. 在對話中使用：在輸入框打 `@` 選 ArchiLAW。選擇只對當則訊息有效；追問需要新資料時，再 `@` 一次。

如果「Add」選單裡沒有「Add custom MCP server」，表示您的方案或工作區目前不開放自訂 MCP。

### Gemini

目前還不能使用。Google Gemini 的自訂 MCP 功能目前僅開放給特定地區（美國）與帳號類型（個人 Google 帳號）。ArchiLAW 端也尚未完成 Gemini 相容性測試。開放後會更新本說明。在那之前，請使用 Claude 或 ChatGPT，或直接使用 ArchiLAW Web App。

## 可用的工具

連接後，AI 工具中會出現以下 ArchiLAW 工具：

### `search` -- 語意搜尋

以語意方式搜尋知識庫中的法規條文。知識庫內容為繁體中文台灣法規，查詢請使用繁體中文搭配台灣法律用語（例如建蔽率、容積率、法定空地、無障礙電梯），效果最佳。

**參數：**
- `query`（必填）：查詢文字
- `k`（選填）：回傳結果數量，1 至 20，預設 5
- `filters`（選填）：篩選條件

**範例查詢：**
- 「建築物室內裝修管理辦法中，竣工查驗需要哪些文件？」
- 「台北市建築管理自治條例對於違建的處理規定」
- 「無障礙設施的坡道坡度設計規範」

### `get_document` -- 取得單一文件

以文件識別碼取得完整的法規條文內容。用於查看 `search` 結果中引用的完整文件。

**參數：**
- `id`（必填）：文件識別碼（由 `search` 結果提供）

### `list_sources` -- 列出資料來源

列出知識庫中所有可用的資料來源群組與各群組的收錄數量。

## 使用建議

1. **使用繁體中文查詢**：知識庫內容為繁體中文法規，英文查詢能找到的相關條文較少。
2. **具體描述問題**：越具體的問題，回答越精確。比起「建築法規定」，「建築法對於建造執照申請期限的規定」會得到更好的結果。
3. **指定管轄範圍**：如果問題涉及特定縣市的地方規定，請在問題中註明。
4. **交叉驗證**：重要的法規適用判斷，建議對照政府法規資料庫原文確認。

## 疑難排解

| 問題 | 可能原因與解決方式 |
|------|-------------------|
| 連接失敗 | 確認網路連線正常，並檢查連接網址是否正確 |
| 認證失敗 | 確認你有邀請碼，並使用正確的邀請碼登入 |
| 工具未出現 | 重新整理頁面，或重新連接 MCP 伺服器 |
| 查詢出現格式錯誤 | ArchiLAW 更新後，舊對話可能出現含有「additional properties」或「schema」的錯誤。開一個新對話再試，或到連接器設定重新連接 |
| 回答與預期不符 | 嘗試更具體的描述，或拆解為多個小問題 |

## 停用或移除

- Claude：到「Customize」>「Connectors」，中斷或移除 ArchiLAW。
- ChatGPT：到「Customize」>「Plugins」，移除 ArchiLAW。
- 邀請碼遺失或外流時，請聯絡管理員停用。停用後，所有用這組邀請碼建立的連接會在下一次查詢時失效。
