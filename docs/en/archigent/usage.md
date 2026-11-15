# Usage Guide

## Creating a Project

1. On the Home screen, enter a project name and select **Create project**
2. Open any stage from the stage list on the left
3. The center shows stage tools or files; the right side has **Agent** and **Conversation** tabs
4. Stage status does not restrict switching; you can freely move between stages

## Using the Agent

### Starting and Conversing

Select **Start Agent** in the Agent panel. On first use, it downloads and verifies its pinned version of Codex; wait for the progress indicator.

Select a suggested request, edit the message, then select **Send**; suggested requests are not sent automatically. Each round, the Agent receives the current stage guidance, project rules, and settings. **Interrupt** stops the current round; **Stop** ends the Agent session.

### Agent Controls

The Agent panel header provides these controls (available after the Agent starts):

| Control | Description |
|---------|-------------|
| Model | Choose the AI model (fixed for compatible endpoints) |
| Reasoning effort | Adjust reasoning depth |
| Auto mode | Control the approval level (see below) |
| Plan first | The Agent proposes a plan without making changes; select **Execute plan** to begin |

#### Auto Mode

| Mode | Description |
|------|-------------|
| Ask every time (default) | Every action requires approval |
| Auto: low risk | Auto-approves creating and modifying Revit/SketchUp elements the Agent itself created |
| Auto: full | Adds exports and project rules |

The following always require approval: custom C# or Ruby, ArchiLAW queries, paid image generation, deletion, and Codex commands outside the sandbox. Each round auto-approves up to 20 times, with each shown as "auto-approved" in the activity log.

### Approvals

Approval cards show proposed commands, file changes, external queries, or model operations. Review all parameters and affected files before choosing **Approve** or **Deny**. When the content is unclear, deny first and ask the Agent to narrow the scope.

- ArchiLAW queries show the query text or document ID
- Revit code execution should show the full C# source and hash
- Do not approve sending client names, contact details, or case specifics to external services

### Conversation Management

- **Conversations** lists previous conversations; starting resumes the most recent one
- **+ New conversation** starts a fresh conversation
- After an update changes the Agent's tools, older conversations may not resume automatically

### Attaching Files and Saved Prompts

- **Attach file** (or drag and drop onto the message box): add PNG, JPEG, or PDF files up to 15 MB to the project folder
- **Saved prompts**: firm-wide prompt templates; type a message and save it as a prompt, then tap to insert

## Stage Descriptions

| Stage | What the Agent can help with |
|-------|------------------------------|
| Sketch | Organize versions, find missing dimensions, calibrate against known site dimensions; confirm assumptions and the adopted sketch |
| CAD | Create mm-scale layers and annotations, export DWG/DXF/PDF, overlay comparison with sketches; check estimated dimensions and layer names |
| Model | Read the paired Revit or SketchUp model, report architect-added changes, propose versioned modifications; review versions and affected elements, then approve writes item by item. A SketchUp batch is one undo step; any failure rolls back the entire batch |
| Sheets | List required sheets, export and check each for text overlap, text beyond title block, and simplified Chinese; check title block and sheet numbers |
| Quantities | Sourced quantity take-offs, independent recalculations, and variance reports; check unit price sources and AI-estimated values |
| Render | Describe what must be preserved, site conditions, and design freedom; compare generated views and alignment scores |
| Lighting | Read drawings and fixture schedule, confirm locations and modifiable areas, compare options |

Sketch, CAD, Model, and Quantities currently provide stage guidance but no dedicated editing panel. The Agent can work with files in the project workspace; Revit and SketchUp operations require pairing the plug-in in the Model stage and explicit approval.

## Standalone Tools

### Render

1. Open **Render** from Home, or from the Render stage in a project
2. Upload a base image and enter an architectural design prompt
3. Optionally add region masks, painting only the area to modify, with instructions for each region
4. Choose Gemini or OpenAI to generate the render
5. Review the result. Only use **Set as base image** when you want to replace the current canvas image with the result

### Facade Study

1. Open **Facade study** from Home, or from the Render stage's **Facade study** tab
2. Add one existing building view and 2--5 reference example images (PNG, JPEG, or WebP; each up to 20 MiB, max 8192 px per side, total up to 35 MiB)
3. Optionally enter site conditions and design criteria, choose Gemini or OpenAI, and specify 1--3 options
4. Select **Review before sending** and verify the images and instructions that will be sent. Gemini uses all references; OpenAI uses only the first two
5. Compare results:

| Alignment score | Label | Usable |
|-----------------|-------|--------|
| 0.35 or above | Valid option | Use and save directly |
| 0.25 -- 0.35 | Verify massing | Usable after confirming massing |
| Below 0.25 | Massing changed | Cannot use or save |

### Lighting

1. Load a viewpoint render and open a floor plan PDF (ceiling plan; optionally add a floor plan)
2. For each drawing: crop to the area visible in the render (excluding the title block and legend), set camera position and direction
3. Optionally import a fixture schedule (for multiple drawings, import per drawing; data merges by fixture number). **Query** can search online for missing data after confirming the brand and model
4. Choose a scene and generate the lighting simulation

The default preserves the render's structure and transfers lighting effects. If the model changes the space so it cannot be aligned, the result is rejected.

**Compare options**: Use **Create copy** to try different configurations; the **Compare** tab shows each option's latest result side by side.

**Region editing**: Select **Set as base image** on a result, paint the area to modify, and generate with Gemini. Only the painted area changes.

**Fixture database**: In the **Fixtures** tab, select **Fixture database** to search by brand, model, or type, manually add or edit, and use **Add to project** to assign to a fixture number.

Lighting simulation is a visual result and does not include illuminance values. For illuminance calculations, use DIALux or Relux.

### Sheet Check

Import PDF, PNG, or JPG sheets. PDF text checking runs locally:

- Simplified Chinese characters
- Text overlap
- Text beyond the auto-detected or manually drawn title block

For visual checking, first draw the title block area, select **Review before sending**, and confirm the masked image and instructions page by page before sending. Results can be exported as Markdown or CSV.

### Agent Image Tools

The Agent can also directly use project files for Render, Facade study, and Sheet check. Before approving, check every image preview, path, full instructions, and provider. These tools send views as previewed and do not mask the title block; if the view contains private drawing information, deny the request.

## Revit / SketchUp Integration

### View Capture

1. Install the corresponding plug-in:
   - SketchUp (macOS/Windows): install the `.rbz` extension
   - Revit 2025/2026 (Windows): extract and run `install.ps1`
   - Desktop builds include installers, accessible via the **Install plug-in** link
2. In **Control Center** > **Capture from Revit/SketchUp**, select **Connect plug-in**
3. Paste the endpoint and pairing code shown in the panel into the plug-in
4. Capture the current view in Revit/SketchUp
5. Return to Archigent, check the thumbnail, and choose **Use in canvas** or **Discard**

Pairing is limited to the same computer, the code is valid for five minutes, and remains active for 12 hours after the first capture. Reconnect after restarting Archigent. Do not include the pairing code in screenshots.

### Model Operations

The Agent can read and modify Revit/SketchUp models through a paired plug-in. Each write requires approval and saves a version beforehand. Agent-created elements are recorded in a tracking ledger; the Agent must report architect-made changes before writing again. A SketchUp batch is one undo step; any failure rolls back the entire batch.

## Conversation Assistant and References

The **Assistant** (conversation bubble icon in the Render and Lighting workspaces) is for quick design questions and discussing prompts: it only answers and never modifies anything. It references the current main prompt, approved project memories, and uploaded references. No project, ChatGPT sign-in, or Revit is needed; it works with Gemini or OpenAI.

When an answer includes a suggested prompt, select **Apply to prompt** to insert it into the canvas prompt field. The **Quick question** tab in the Agent panel also opens this lightweight assistant.

## Interface Controls

- **Collapse panels**: Use the button next to "Stages" to collapse the stage list; the button at the top right of the Agent panel collapses the Agent panel. The collapsed stage list still shows numbered stage links
- **Agent panel width**: Drag the left edge to resize; double-click to reset to default
- **Project rules**: Add, edit, or remove short instructions; Agent-suggested rules also require approval
- **Project settings**: The **Settings** button next to the project name at the top of the Agent panel, for design criteria, family library path, and title block area
- **Agent controls**: The **sliders** button at the top of the Agent panel, for engine, model, reasoning effort, auto mode, conversation, and Plan first

## Specialized Model

::: tip Coming Soon
A building-domain specialized language model is under development, to improve regulation understanding and professional architectural answers. It will be selectable in model settings once available.
:::
