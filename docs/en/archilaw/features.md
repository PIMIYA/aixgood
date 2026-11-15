# Features

## Semantic search

ArchiLAW's core feature is semantic search. Unlike keyword search, you can describe a question in natural language and the system uses vector retrieval and a reranking model to find the most relevant regulatory provisions.

**Example queries:**

- "What documents are required for an interior renovation completion inspection?"
- "The relationship between building height limits and floor area ratio"
- "Ramp slope requirements for accessible facilities"

### Source scope filtering

You can narrow the search scope when querying:

| Scope | Description |
|-------|-------------|
| All sources | Search everything in the knowledge base (default) |
| Statutes | Statutes, regulations and administrative rules only |
| Rulings | Administrative rulings and interpretive orders only |
| Local practice | Municipal codes and local practice materials only |
| Government web | Government agency website content only |

You can also specify a jurisdiction (e.g. Taipei City or Kaohsiung City only).

## Citations and traceability

Every answer is annotated with regulatory sources including:

- Statute name and article number
- Source type (statute, administrative rule, ruling, local source, etc.)
- Jurisdiction level (national or municipal, with agency name)
- Last amendment date
- Source link (opens the original text on the government regulation site)
- Related article excerpts

## Citation checks

Citations in answers are automatically verified:

- Checks whether the cited statute exists in the knowledge base
- Confirms article numbers match correctly
- Flags citations that may need further verification
- Distinguishes verified and unverified citations visually

## Web search

When the knowledge base alone cannot answer a question, the system can search official websites for the latest information. Web results are labelled with their source and marked as "from web, unverified".

## Deep research mode

For complex questions, deep research mode performs a more thorough search and analysis for a more complete answer.

## Regulatory change tracking

The system automatically tracks regulatory changes daily, recording:

- Newly enacted or amended regulations
- Article-level change details (which articles were amended, added or repealed)
- Amendment and effective dates
- Draft announcements (proposed amendments not yet in force)

## File upload

The Web App supports uploading documents as supplementary material. Supported formats include PDF, images (PNG, JPEG, HEIC, WebP), Word, Excel, PowerPoint, ODT, RTF, CSV and plain text.

## Tables and charts

When an answer involves comparisons or data, the system can generate interactive tables and Vega-Lite charts.

## Feedback

Users can rate each answer or report errors (including a problem description and expected result) to help improve the service.

## Current limitations

::: warning Beta limitations
- The knowledge base does not yet cover all municipal codes; coverage is expanding
- The latest amendments may take 1-3 days to appear
- AI answers are for reference only and do not constitute legal advice
- Cross-references between regulations may be incomplete
- Web search results are unverified; please confirm before relying on them
:::

::: tip Domain-specific model
A building-domain language model is under development, optimized for regulatory comprehension. This page will be updated when it is released.
:::
