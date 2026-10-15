# Private provider publishing prototype

Static, clickable prototype. Serve this directory over HTTP and open `index.html`.
No build step or backend is required.

## Provider documentation

1. Open **Private Library** and select **Providers**.
2. Select **aws-rds-aurora** to view provider metadata, versions, release files,
   usage instructions, and the Manage menu's GPG-key entry point.
3. Select **Documentation**. Browse Overview, Provider configuration, the resource,
   and the data source. Switching the provider version updates the documentation
   context and usage snippet.
4. Return to the library using the breadcrumb or sidebar. The Providers tab stays
   selected. The existing Versions and publishing-status views remain available.

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

- Manage is absent on the provider status page.
- Errored queue rows stay neutral; the icon and “Version ingress incomplete”
  message communicate the failure without a red row background.
- The status alert offers deletion from the organization after an ingress error.
  Cancel also opens this confirmation; nothing is removed before confirmation.
  “Keep provider” resumes the queue. “Delete provider” removes the mock provider
  and its versions from the list, preserving organization GPG keys.
- Completed ingestion stays on the queue until “View provider” is selected,
  giving reviewers time to inspect errors instead of automatically navigating.

These explorations have not been written back into the Figma design file.
Provider deletion, like key creation, is simulated in memory and resets on refresh.
