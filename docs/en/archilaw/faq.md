# FAQ

## General

### How often is the regulatory data updated?

The knowledge base updates automatically every day, tracking changes across the MOJ Laws & Regulations Database, the MOI nlma Regulation Query System, municipal government regulation systems and related government websites. There is typically a 1-3 day delay from publication to ingestion.

### Can the answers be used as legal authority?

No. ArchiLAW answers are for reference only and do not constitute legal advice. For practice, consult official gazettes and competent authority announcements, and seek professional advice from architects or other qualified professionals when necessary.

### Which municipal codes are covered?

Municipal codes are expanding. Use the MCP `list_sources` tool to see all source groups currently in the knowledge base, or check the scope filter in the Web App for available cities and counties.

### Why does the system say "no relevant provisions found"?

Possible reasons include:
- The relevant regulation has not yet been ingested into the knowledge base
- The question needs more specific keywords
- The matter falls under municipal jurisdiction and that municipality's codes have not been ingested yet

Try rephrasing the question or specifying a more precise regulatory scope.

### What do the different citation marks mean?

The system automatically checks citation accuracy. A verified citation means the system confirmed the statute exists and the article number is correct. An unverified citation may need further checking -- compare with the original text.

## MCP

### Does the MCP connection cost anything?

During the beta, ArchiLAW's MCP service is free. However, the AI client itself (e.g. Claude Pro, ChatGPT Plus) has its own subscription fee charged by the respective platform.

### Do I need an account?

Yes. ArchiLAW uses OAuth authentication and requires an invitation account. Contact the administrator to apply.

### Can I use it in multiple AI tools at the same time?

Yes. ArchiLAW's MCP service supports simultaneous connections from multiple clients.

### Queries suddenly show format errors?

After an ArchiLAW update, older conversations may still hold the previous format. Common error messages mention "additional properties" or "schema". Start a new conversation or reconnect in your connector settings.

## Web App

### Are conversations saved?

Conversations are saved under your account. Clearing browser data does not affect conversation history; it is still available after signing in again.

### Does it work on mobile?

The Web App supports phone and tablet browsers. The interface adapts to screen size automatically.

### What file formats can I upload?

Supported formats include PDF, images (PNG, JPEG, HEIC, WebP), Word (.docx), Excel (.xlsx), PowerPoint (.pptx), ODT, RTF, CSV and plain text.

## Domain-specific model

::: tip Coming soon
A building-domain language model is under development, optimized for Taiwan's building regulations to provide more precise regulatory comprehension and answers.
:::
