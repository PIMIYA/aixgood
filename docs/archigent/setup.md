# 安裝與設定

::: info 測試版 (Beta)
目前為受邀測試版本，安裝檔案由管理員提供。
:::

## 下載

測試期間，請向管理員取得適合你作業系統的安裝檔案：

| 平台 | 檔案 |
|------|------|
| macOS (Apple Silicon) | `Archigent-<版本>-arm64-mac.zip` |
| macOS (通用) | `Archigent-<版本>-universal-mac.zip` |
| Windows x64 | `Archigent Setup <版本>.exe` |

## 安裝步驟

### macOS

1. 解壓縮 ZIP 檔案，取得 **Archigent.app**
2. 將 **Archigent.app** 移至「應用程式」資料夾
3. 首次開啟時，macOS 可能會顯示安全性警告
4. 前往「系統設定 > 隱私權與安全性」，點擊「仍要打開」
5. 開啟後選取頁首的 About 按鈕，確認版本

### Windows

1. 執行下載的 NSIS 安裝程式
2. 依照安裝精靈的指示完成安裝
3. 從開始選單開啟 **Archigent**
4. 確認版本

## 初始設定

### 1. 設定 AI 服務供應商

開啟右上角的 **Settings**。Archigent 的 AI 功能分為兩類，需分別設定：

#### 文字與 Agent 供應商

在 **Settings > Text and Agent** 中設定：

| 供應商 | 用途 | 說明 |
|--------|------|------|
| ChatGPT 方案 | 文字 + Agent | 使用你的 ChatGPT Plus 或 Pro 帳號，選擇「使用 ChatGPT 繼續」完成登入 |
| OpenAI API 金鑰 | 文字 + Agent | 輸入你自己的 OpenAI API 金鑰 |
| Gemini API 金鑰 | 僅文字 | Gemini 可用於文字功能，但無法執行 Agent |
| OpenAI 相容服務 | 視服務而定 | 輸入基底網址與模型；需支援 Responses API 才能執行 Agent |

#### 影像產生（渲染、燈光、立面研究）

在 **Settings** 中的 Gemini 或 OpenAI 區塊輸入 API 金鑰。ChatGPT 方案登入不包含影像產生。

### 2. 金鑰儲存

桌面版會使用作業系統的憑證服務安全儲存 API 金鑰。金鑰不會包含在應用程式中，也不會顯示給你。設定中只會顯示「金鑰已儲存」。

### 3. 連接 ArchiLAW（選用）

如需查詢法規知識庫：

1. 在 **Settings > ArchiLAW** 輸入管理員提供的 HTTPS 連接網址
2. 儲存後選取「連線」
3. 使用你的受邀帳號完成登入
4. 狀態顯示已連線後，重新啟動 Agent 即可查詢法規

### 4. 介面語言

Archigent 支援英文與繁體中文，使用頁首的語言切換按鈕。

### 5. 外觀

**Settings > Appearance** 可選擇跟隨系統、淺色或深色模式。

## Windows Agent 安全設定

Windows 上首次使用 Agent 時，建議進行一次性的安全設定：

1. 開啟 **Settings > 安全設定**
2. 停止所有專案 Agent
3. 選擇「設定或修復安全設定」
4. 確認 UAC 提示

此設定會建立沙箱環境與防火牆規則，限制 Agent 執行的程式碼的網路存取與檔案權限。

## 更新

測試版更新由管理員通知，下載新版本覆蓋安裝即可。
