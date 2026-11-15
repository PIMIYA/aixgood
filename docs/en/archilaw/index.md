# ArchiLAW Overview

::: info Beta
ArchiLAW is currently in beta. The knowledge base and features are expanding.
:::

## What is ArchiLAW

ArchiLAW is an AI-powered retrieval service built specifically for Taiwan's building regulations. It aggregates statutes, rules, administrative rulings and government web sources scattered across multiple official sites into a single knowledge base, using semantic search and AI to help building professionals find the regulations they need.

## Knowledge base scope

The knowledge base currently holds over 45,000 data units from the following sources:

| Source | Description |
|--------|-------------|
| National statutes | Building Act, Building Technical Regulations, management rules, etc. (MOJ Laws & Regulations Database) |
| Administrative rules & rulings | Rules, rulings and interpretive orders from the nlma (MOI Regulation Query System) |
| Municipal codes | Building management self-governance ordinances from municipalities and counties (expanding) |
| Government web sources | Building-related content from competent authority websites |
| Practice references | Professional association handbooks, seminar materials and practice guides |

The knowledge base updates automatically every day and tracks regulatory changes. The system also records article-level amendment details.

## How to use

ArchiLAW can be accessed in three ways:

### 1. MCP connection

Through the [Model Context Protocol (MCP)](https://modelcontextprotocol.io/), you can use ArchiLAW directly from any MCP-capable AI tool. Verified clients include Claude (claude.ai) and ChatGPT (chatgpt.com).

[MCP Guide ->](./mcp-guide)

### 2. Web App

A browser-based interface offering a full conversational query experience with source citations, citation checks, web search, deep research and more.

[Web App Guide ->](./webapp)

### 3. Through Archigent

In the Archigent desktop application, the project Agent can query the ArchiLAW knowledge base directly, integrating regulatory information into the architectural workflow.

[About Archigent ->](/en/archigent/)

## Technical architecture

- **Retrieval**: Vector semantic search (RAG) with GPU reranking for precision
- **Updates**: Automated daily ingestion tracking multiple government regulation sources
- **Citations**: Every answer includes regulatory source citations with links to the original text
- **Citation checks**: Automatic verification of regulatory citations in AI answers
- **Authentication**: OAuth-based access with invitation accounts
