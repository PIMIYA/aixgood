# FAQ

## Installation and Startup

### Windows SmartScreen shows "Windows protected your PC"

The Windows installer is not code-signed yet. Only for files received from the project team, choose **More info > Run anyway**. If your company blocks the installer, contact your IT administrator.

### Agent fails to start

Check in order:
1. Check the Agent provider settings and sign-in status (Settings > Agent)
2. Look for download or error messages; the first download requires internet
3. If using a ChatGPT plan, confirm you completed sign-in on the same computer
4. If using an API key, confirm the key shows as saved

### Cannot generate images (Render, Lighting, Facade study)

Image generation requires a Gemini or OpenAI API key, set in Settings. ChatGPT plan sign-in does not include image generation.

| Error | Action |
|-------|--------|
| Gemini model list shows fallback | Confirm the key is saved, select "Refresh models," check account, region, and network |
| `401` or `403` | Key is invalid or lacks permissions; re-enter the key |
| `429` | Quota or rate limit reached; try later or switch models |
| Cannot generate after update | Fully quit the application and reopen; confirm the key |

## Usage

### Agent response speed

Depends on the selected model and reasoning effort, question complexity, network quality, and AI service load.

### Citations reference non-existent regulation articles

AI models occasionally produce imprecise citations. If ArchiLAW is connected, the citation checker flags suspicious references. Always verify important regulation citations against the original text.

### Does the knowledge base include the latest amendments?

The ArchiLAW knowledge base updates automatically every day. However, there is typically a 1--3 day delay between an amendment's publication and its inclusion. To check the latest amendments, consult the government regulation database directly.

### Revit / SketchUp pairing fails

| Issue | Action |
|-------|--------|
| Plug-in snapshot did not arrive | Confirm Archigent and the host application are on the same computer; re-pair |
| Snapshot rejected | Pairing may have expired, image too large, or not a PNG/JPEG snapshot. Re-pair or import manually |
| Pairing code expired | Use a new code within five minutes |
| Archigent restarted | Local address changes; reconnect |

If the plug-in is not working, export a PNG/JPEG view from Revit or SketchUp and use Archigent's **Import image** button.

### Sheet check cannot send visual checks

First draw the title block area and confirm the masked pages in **Review before sending**. To send unmasked sheets, explicitly enable this in project settings and check what will be exposed.

### Lighting results are not as expected

- Existing daylight in the render (sunlit patches) will faintly remain after conversion to nighttime lighting; renders without direct sunlight work best
- Lighting simulation is a visual result and does not include illuminance values. For illuminance calculations, use DIALux or Relux

## Privacy and Security

### Where is data stored?

- Project records, conversations, and documents are stored locally in `archigen.sqlite`
- Agent working files are in `projects/<id>/workspace/`
- Desktop API keys are encrypted via the operating system credential service
- Browser canvas history and some web settings stay in that browser
- Exported files go to your chosen location; files in the Agent workspace are not automatically copied to Revit or CAD

### What data is sent to external services?

- AI queries and conversation content are sent to your chosen AI provider
- Render, Lighting, and similar features send images to the AI service
- Sheets are sent masked by default; "Send unmasked sheets" is a per-project setting, and changes and every send are logged
- ArchiLAW queries are sent to the ArchiLAW server
- Every send has an approval step, and every image send is logged

### Can I use it on a company computer?

Yes. Archigent does not require administrator privileges to install, and data is stored locally. Back up your original drawings separately.

## Reporting Issues

When reporting a bug, use the **Logs** panel at the bottom to copy masked error messages. Please provide:

- Application version and OS version
- Selected provider and model
- Whether masking or reference images were used
- Steps to reproduce

Do not include API keys, pairing codes, client names, or private drawings in screenshots or messages.

## Specialized Model

::: tip Coming Soon
A building-domain specialized language model is under development, to provide more accurate regulation understanding. Details will be updated here when the model is released.
:::
