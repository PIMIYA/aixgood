# Archigent

::: info Beta
Archigent is currently in beta. Features are under active development.
:::

## Agentic Architecture Design

Archigent is an agentic architecture design workbench: an AI Agent participates directly in the architectural workflow, assisting at every stage from sketch to sheet output -- not just answering questions but operating, checking and producing. The Agent reads your Revit or SketchUp model, generates renders, checks sheets and queries regulations, with every step subject to your approval.

Archigent runs on your computer. Project data stays local.

## Seven project stages

| Stage | Description |
|-------|-------------|
| Sketch | Organize versions, calibrate dimensions, compare against site conditions |
| CAD | Layer annotation, DWG/DXF/PDF export, overlay comparison with sketches |
| Model | Read and operate a paired Revit or SketchUp model |
| Sheets | Sheet quality check: simplified characters, text overlap, text outside title block |
| Quantities | Quantity takeoff, unit price verification, variance reports |
| Render | AI architectural renders and facade studies |
| Lighting | Lighting scheme simulation and comparison |

Each stage provides corresponding Agent goals, check items and suggested requests to guide the workflow. Stage status is a navigation hint and does not restrict switching.

## AI Agent

Each project has a built-in AI Agent that can:

- Read and modify Revit / SketchUp models (requires a paired extension and per-item approval)
- Generate architectural renders and facade proposals
- Check PDF sheet quality
- Query the ArchiLAW regulatory knowledge base
- Work with files in the project workspace
- Answer questions based on project rules and approval memory

### Agent engines

Three engine options are available:

| Engine | Description |
|--------|-------------|
| Codex | Uses a ChatGPT plan or OpenAI API |
| Pi | Supports multiple API providers |
| Claude Code | Uses a Claude subscription through locally installed official Claude Code |

### Provider support

| Provider | Text features | Agent: Codex | Agent: Pi | Agent: Claude Code | Image generation |
| --- | --- | --- | --- | --- | --- |
| ChatGPT Plus or Pro | Yes | Yes | Yes | No | No |
| Claude subscription (e.g. Pro or Max) | No | No | No | Yes (preview) | No |
| Claude Console | No | No | No | Yes (preview) | No |
| OpenAI API key | Yes | Yes | Yes | No | Yes |
| Google Gemini API key | Yes | No | Yes | No | Yes |
| Anthropic (Claude models) via Pi | No | No | Yes | No | No |
| xAI (Grok) via Pi | No | No | Yes | No | No |
| Kimi (Moonshot) via Pi | No | No | Yes | No | No |
| OpenRouter via Pi | No | No | Yes | No | No |
| OpenAI-compatible endpoint | Yes | Requires Responses API | Yes | No | No |

## Standalone tools

These tools can be used without creating a project:

- **Render**: upload a base image, use area masks and prompts to generate architectural renders
- **Facade study**: provide a current-state photo and reference examples, generate facade proposals evaluated with an alignment score
- **Lighting**: import floor plans and a fixture list, simulate lighting schemes and compare options
- **Sheet check**: import PDF/PNG/JPG sheets and check for simplified characters, text overlap and text outside the title block

Standalone tools do not require a ChatGPT sign-in or Revit, but image generation requires a Gemini or OpenAI API key.

## Revit and SketchUp integration

Archigent connects to Revit 2023/2025/2026 and SketchUp 2024+ through extensions (plug-ins):

- **View capture**: capture the current view from Revit or SketchUp as a base image for rendering
- **Model read/write**: the Agent can read model information, propose changes, and write them after the architect's approval
- Each write saves a version and tracks Agent-created elements

## ArchiLAW connection

In **Settings > Integrations & Security**, enter the ArchiLAW MCP URL and sign in. The Agent can then query the regulatory knowledge base. Each query requires your approval.

## System requirements

| Item | Requirement |
|------|-------------|
| OS | macOS (Apple Silicon or Intel), Windows 10+ |
| Runtime | Node.js 20+ (local web version) |
| Network | Internet connection required for AI services |
| AI service | ChatGPT Plus/Pro account, or OpenAI/Gemini API key |

## Relationship with ArchiLAW

| | ArchiLAW | Archigent |
|---|---|---|
| Purpose | Regulatory knowledge retrieval and Q&A | Architectural project workbench |
| Interface | MCP connection or Web App | Desktop app or local web |
| Use cases | Regulation queries, comparison, change tracking | Design, modelling, rendering, sheets -- full workflow |
| AI service | Built-in (server-side) | User-provided API key or ChatGPT account |
| Data location | Server | Local |

[Setup ->](./setup)
