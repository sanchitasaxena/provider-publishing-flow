# Private provider publishing prototype

Static, clickable prototype. Serve this directory over HTTP and open `index.html`.
No build step or backend is required.

## Admin and non-admin prototype options

Use the header's **Prototype view** selector to switch between two previews:

- **Admin** (default): provider overview, documentation, the combined version
  queue/list, completed-queue filters, publishing, GPG management, and deletion.
  Tags remains visible but disabled because tag management is not prototyped.
- **Non-admin**: read-only provider overview, documentation, usage snippets, and
  a selector containing published versions only. Versions, Tags, Release Files,
  Manage, Actions, ingress warnings, publishing, and GPG management are hidden.

Switching to Non-admin while viewing Versions returns to the provider overview.
Switching from publishing setup or GPG management returns to the library.
Role changes close management dialogs; simulated ingestion continues without
losing progress, including when leaving an open cancellation confirmation.
Switching back to Admin restores management access.

This selector simulates visibility only. It is not authentication or backend
authorization; production APIs must enforce permissions separately. The role
and other simulated state reset on refresh.

## Provider documentation

1. Open **Private Library** and select **Providers**.
2. Select **aws-rds-aurora** to view provider metadata, versions, release files,
   usage instructions, and the Manage menu's GPG-key entry point.
3. Select **Documentation**. Browse Overview, Provider configuration, the resource,
   and the data source. Switching the provider version updates the documentation
   context and usage snippet.
4. Return to the library using the breadcrumb or sidebar. The Providers tab stays
   selected. Versions combines publishing status and version history in one view.

## Publishing and versions

- Repository helper text links to HashiCorp's
  [provider publishing requirements](https://developer.hashicorp.com/terraform/cloud-docs/registry/publish-providers).
- Publishing opens **Versions** directly. The status summary and version rows
  update in place through Queued, Publishing, Published, and Ingress incomplete.
- Search and **Filters** become available only after the version queue finishes
  or is canceled. The active queue always shows every version, without a filter
  toolbar, search, or applied-filter controls.
  Filter the completed list by **Status** and **Environments**.
  Status choices contain only final states present in the list: Published,
  Ingress incomplete, and (after cancellation) Canceled. Publishing and Queued
  are not filter choices; progress indicators remain in the active queue.
  The toolbar follows the Private Library pattern and the
  [HDS Filter Bar](https://helios.hashicorp.design/components/filter-bar):
  categories on the left, multi-select values on the right, **Clear selection**
  for the current category, and **Clear all filters** for both categories.
  Filtering remains live; there is no separate Apply step.
  Multiple values within a category use OR; Status, Environments, and search
  combine using AND. Counts reflect the full completed version dataset.
- Development, Staging, and Production are illustrative environment tags on
  mock versions, independent of ingress status, not real environment bindings.
  Tags appear below each version to make the filter results inspectable.
  Applied filters appear as removable `Category: value` tags with **Clear all**.
  Their section starts collapsed when empty, expands when a value is selected,
  and can be collapsed manually. Escape, an outside click, or leaving the
  dropdown dismisses it; Escape returns focus to Filters.
- Expand incomplete versions to review illustrative errors and access the
  release-file requirements. Error rows have a contrasting accordion chevron
  that points down when closed and up when open; details expand smoothly.
- The table briefly shows skeleton rows on load. Fixed column widths keep the
  layout steady as statuses change, and status changes, alert changes, and
  filter results fade in. Motion is disabled when
  `prefers-reduced-motion` is set.
- The combined table retains commit references from the original status queue
  (the original Versions table did not include them). Illustrative commits use
  the Git commit icon and seven-character hexadecimal SHAs in monospace badges,
  without links to nonexistent commits.
- Processing continues when navigating elsewhere. Returning to Versions preserves
  progress; completion stays on this same table without a status-page handoff.
- Published timestamps show measured elapsed time (seconds, minutes, hours, or
  days ago), update while the page is open, and expose the exact time on hover.
  Newly ingressed versions are timed from their simulated completion.
- Provider rows and headers use the existing AWS provider artwork. Download
  counts use the [Helios Flight download icon](https://github.com/hashicorp/design-system/blob/main/packages/flight-icons/svg/download-16.svg)
  rather than text arrows when present. Newly published providers have blank
  download cells and metrics: this prototype treats downloads as usage from the
  organization's private registry, not global or GitHub release download totals.
- All ingress state is simulated in memory and resets on refresh.

## GPG key workflows

- **Manage GPG Keys** includes separate Private and Public Namespaces lists.
- **New GPG Key** lets you choose a scope; public keys also require a namespace.
- The empty state and the blocked **Publish > Provider** menu offer an add-key
  shortcut. Adding a private key enables publishing; public keys do not.
- Enter any mock key text. There is no sample-key button.
  Title and Public key must contain non-whitespace text;
  no real key or specific key format is required. Source URL and duplicate
  checks in the same scope and namespace remain in place.
- Cancel, Close, and Escape dismiss the dialog without saving. Dialogs trap focus
  and return it to the triggering control.
- Delete requires confirmation and explains the effect on future releases.
  Removing the last private key restores the publishing prerequisite.

All provider content and release assets are illustrative. GPG IDs are simulated;
this prototype does not parse cryptographic packets, verify signatures, publish
releases, or upload keys. Use sample data only. Key changes are held in memory and
reset on refresh.

## Implementation

`prototype.js` contains the recovered application code from the original exported
bundle, with its existing publishing wizard and status screens. `workflows.js`
contains the provider documentation and GPG interactions; `prototype.css` adds
their styles. The original asset bundle now supplies the existing React runtime.

## Visual styling

New screens reuse the exported Helios palette, surface radii, and typography.
Provider metadata, status, copy, dismiss, tag, and dropdown controls use vendored
[Helios Flight icons](https://github.com/hashicorp/design-system/tree/main/packages/flight-icons/svg)
rather than text-symbol substitutes. Manage and Actions support arrow-key
navigation, Home/End, Escape with focus restoration, outside-click dismissal,
and closing when focus leaves. The filter dropdown focuses its active category,
supports vertical arrow-key category navigation and native checkbox keyboard
interaction, and closes on Escape or focus leaving.
Search ignores leading/trailing whitespace. Publishing setup now uses
the same focus-trapping confirmation dialog as the other workflows. Reduced
motion also disables loading spinners, queue pulses, and navigation transitions.
All HCL examples share a dark code block with a compact copy control,
keyboard-accessible horizontal scrolling, and explicit copy success/failure
feedback. The color, spacing, and border values follow the
[Helios Code Block guidance](https://helios.hashicorp.design/components/code-block)
and its published tokens. This is a React prototype styled to match Helios, not
an installation of Helios's Ember components.

Published preview: https://sanchitasaxena.github.io/provider-publishing-flow/

## Figma reference and status exploration

The signed-in [September 1 prototype page](https://www.figma.com/design/tAOpmdu1dbTO8IqgTz6TLx/Private-Provider-Publishing?node-id=1021-747)
is the visual source of truth. The overview, warning, status, documentation,
Manage-menu, and modal patterns were compared with frames `5720:53627`,
`5720:53497`, `5720:53335`, `5720:52550`, `5720:52806`, and `5720:52401`.
The header, metadata, four-column stats, release-files state, and
Workspaces/Stacks usage tabs reuse the original export layout rather than the
previous alternate provider layout. Documentation remains illustrative content.

Requested explorations that are intentionally different from those frames:

- Manage is absent on the combined Versions page.
- Errored version rows stay neutral; the icon and “Ingress incomplete”
  message communicate the failure without a red row background.
- The status alert offers “Cancel publishing” while ingress is running.
  Confirmation pauses processing; “Continue publishing” resumes it. Confirming
  cancellation stops active and queued versions without deleting the provider,
  published versions, or organization GPG keys. Cancellation persists across navigation.
- When processing finishes, including with errors, the alert's only action is
  “View provider”. Canceled publishing also offers “View provider”.
  Provider deletion remains a separate action in the overview's Manage menu.
- Completed ingestion stays on the same Versions table. “View provider” opens
  the overview, giving reviewers time to inspect errors instead of automatically navigating.

These explorations have not been written back into the Figma design file.
Provider deletion, like key creation, is simulated in memory and resets on refresh.
