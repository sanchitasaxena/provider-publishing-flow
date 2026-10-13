import { React } from "./assets/react-runtime.js";

const h = React.createElement;
export const PROVIDERS = [
  {
    name: "aws-rds-aurora",
    namespace: "coolcorp",
    description:
      "Manage Aurora database clusters in your organization's private infrastructure.",
    repository: "hashi/aws-rds-aurora",
    version: "0.17.1",
    versions: ["0.17.1", "0.16.1"],
    downloads: 123,
  },
];

function button(
  text,
  onClick,
  className = "action-button secondary",
  props = {},
) {
  return h("button", { type: "button", className, onClick, ...props }, text);
}

function tabs(items, active, onSelect, label, className = "detail-tabs") {
  return h(
    "div",
    { className, role: "tablist", "aria-label": label },
    items.map(([id, text]) =>
      button(text, () => onSelect(id), active === id ? "active" : "", {
        key: id,
        role: "tab",
        "aria-selected": active === id,
        tabIndex: active === id ? 0 : -1,
        id: `${label}-${id}`,
        "aria-controls": `${label}-panel`,
        onKeyDown: (event) => {
          const index = items.findIndex(([value]) => value === id);
          const next =
            event.key === "ArrowRight"
              ? (index + 1) % items.length
              : event.key === "ArrowLeft"
                ? (index + items.length - 1) % items.length
                : event.key === "Home"
                  ? 0
                  : event.key === "End"
                    ? items.length - 1
                    : null;
          if (next === null) return;
          event.preventDefault();
          onSelect(items[next][0]);
          event.currentTarget.parentElement
            .querySelectorAll("button")
            [next].focus();
        },
      }),
    ),
  );
}

export function ProviderTable({ onSelectProvider }) {
  const [search, setSearch] = React.useState("");
  const providers = PROVIDERS.filter((provider) =>
    `${provider.name} ${provider.description}`
      .toLowerCase()
      .includes(search.toLowerCase()),
  );
  return h(
    "section",
    { className: "library-table-shell", "aria-label": "Providers" },
    h(
      "div",
      { className: "library-toolbar" },
      h(
        "label",
        { className: "library-search" },
        h("span", { className: "visually-hidden" }, "Search providers"),
        h("input", {
          placeholder: "Search providers",
          value: search,
          onChange: (event) => setSearch(event.target.value),
        }),
      ),
      h(
        "span",
        null,
        `${providers.length} provider${providers.length === 1 ? "" : "s"}`,
      ),
    ),
    h(
      "div",
      { className: "library-table-wrap" },
      h(
        "table",
        { className: "library-table" },
        h(
          "thead",
          null,
          h(
            "tr",
            null,
            [
              "Providers",
              "Latest version",
              "Publishing method",
              "Downloads",
              "Registry",
              "Owner",
            ].map((name) => h("th", { key: name, scope: "col" }, name)),
          ),
        ),
        h(
          "tbody",
          null,
          providers.map((provider) =>
            h(
              "tr",
              { key: provider.name },
              h(
                "td",
                null,
                button(
                  provider.name,
                  () => onSelectProvider(provider),
                  "provider-name-link",
                ),
                h("span", null, provider.description),
              ),
              h(
                "td",
                null,
                provider.version,
                h("small", null, "Published just now"),
              ),
              h(
                "td",
                null,
                h("span", { className: "neutral-badge" }, "GitHub Releases"),
              ),
              h("td", null, provider.downloads),
              h("td", null, "Private"),
              h("td", null, provider.namespace),
            ),
          ),
        ),
      ),
    ),
    providers.length === 0 &&
      h(
        "p",
        { className: "prototype-empty", role: "status" },
        "No providers match your search.",
      ),
  );
}

function stat(label, value) {
  return h("div", { key: label }, h("dt", null, label), h("dd", null, value));
}

function usage(provider, version) {
  return `terraform {
  required_providers {
    aurora = {
      source  = "app.terraform.io/${provider.namespace}/${provider.name}"
      version = "~> ${version}"
    }
  }
}`;
}

function CodeBlock({ value, label }) {
  const [status, setStatus] = React.useState("");
  const [error, setError] = React.useState("");
  React.useEffect(() => {
    setStatus("");
    setError("");
  }, [value]);
  async function copy() {
    setStatus("");
    setError("");
    try {
      await navigator.clipboard.writeText(value);
      setStatus("Code copied to clipboard.");
    } catch {
      setError("Unable to copy. Select the code and copy it manually.");
    }
  }
  return h(
    "section",
    { className: "prototype-code-block", "aria-label": label },
    h(
      "div",
      { className: "prototype-code-header" },
      h("span", null, "HCL"),
      button(status ? "Copied" : "Copy", copy, "prototype-code-copy", {
        "aria-label": `Copy ${label}`,
      }),
    ),
    h(
      "div",
      { className: "prototype-code-body" },
      h(
        "div",
        { className: "prototype-code-lines", "aria-hidden": true },
        value
          .split("\n")
          .map((_, index) => h("span", { key: index }, index + 1)),
      ),
      h("pre", { tabIndex: 0, "aria-label": label }, h("code", null, value)),
    ),
    status &&
      h("p", { className: "prototype-code-message", role: "status" }, status),
    error &&
      h("p", { className: "prototype-code-message", role: "alert" }, error),
  );
}

function Documentation({ provider, version }) {
  const [page, setPage] = React.useState("overview");
  const pages = [
    ["overview", "Overview"],
    ["configuration", "Provider configuration"],
    ["resource", "Resource: aurora_cluster"],
    ["data", "Data source: aurora_cluster"],
  ];
  return h(
    "div",
    { className: "documentation-layout" },
    h(
      "nav",
      {
        className: "documentation-nav",
        "aria-label": "Provider documentation",
      },
      pages.map(([id, label]) =>
        button(label, () => setPage(id), page === id ? "active" : "", {
          key: id,
          "aria-current": page === id ? "page" : undefined,
        }),
      ),
    ),
    h(
      "article",
      { className: "documentation-article" },
      h(
        "p",
        { className: "prototype-note" },
        `Illustrative prototype documentation for ${provider.name} v${version}.`,
      ),
      page === "overview"
        ? h(
            React.Fragment,
            null,
            h("h3", null, `${provider.name} provider`),
            h("p", null, provider.description),
            h("h4", null, "Getting started"),
            h(
              "p",
              null,
              "Declare the provider in your Terraform configuration. Authenticate to HCP Terraform, then run terraform init.",
            ),
            h(CodeBlock, {
              value: usage(provider, version),
              label: "Provider installation example",
            }),
            button("Configure the provider", () => setPage("configuration")),
          )
        : page === "configuration"
          ? h(
              React.Fragment,
              null,
              h("h3", null, "Provider configuration"),
              h(
                "p",
                null,
                "Configure the region where your database clusters will be managed. Use environment variables for credentials; never commit secrets.",
              ),
              h(CodeBlock, {
                value: 'provider "aurora" {\n  region = "us-east-1"\n}',
                label: "Provider configuration example",
              }),
              h("h4", null, "Argument reference"),
              h(
                "p",
                null,
                "region (required): The region used for Aurora database resources.",
              ),
              button("View aurora_cluster resource", () => setPage("resource")),
            )
          : page === "resource"
            ? h(
                React.Fragment,
                null,
                h("h3", null, "aurora_cluster resource"),
                h("p", null, "Creates and manages an Aurora database cluster."),
                h("h4", null, "Example usage"),
                h(CodeBlock, {
                  value:
                    'resource "aurora_cluster" "example" {\n  name   = "application-db"\n  engine = "aurora-postgresql"\n}',
                  label: "Aurora cluster resource example",
                }),
                h("h4", null, "Argument reference"),
                h(
                  "p",
                  null,
                  "name (required): A unique cluster name. engine (required): The database engine.",
                ),
                h("h4", null, "Attribute reference"),
                h(
                  "p",
                  null,
                  "id: The cluster identifier. endpoint: The cluster connection endpoint.",
                ),
              )
            : h(
                React.Fragment,
                null,
                h("h3", null, "aurora_cluster data source"),
                h("p", null, "Look up an existing database cluster by name."),
                h(CodeBlock, {
                  value:
                    'data "aurora_cluster" "existing" {\n  name = "application-db"\n}',
                  label: "Aurora cluster data source example",
                }),
                h("h4", null, "Argument reference"),
                h(
                  "p",
                  null,
                  "name (required): The name of an existing cluster.",
                ),
                h("h4", null, "Attribute reference"),
                h(
                  "p",
                  null,
                  "id and endpoint: The identifier and connection endpoint of the existing cluster.",
                ),
              ),
    ),
  );
}

export function ProviderDetails({
  provider,
  onBack,
  onViewVersions,
  onManageKeys,
  signingKeys,
}) {
  const [tab, setTab] = React.useState("files");
  const [version, setVersion] = React.useState(provider.version);
  const [showWarning, setShowWarning] = React.useState(true);
  return h(
    "main",
    { className: "main-content provider-detail-page" },
    h(
      "div",
      { className: "breadcrumbs" },
      button("CoolCorp", onBack, ""),
      h("span", null, "/"),
      button("Private Library", onBack, ""),
      h("span", null, "/"),
      button("Providers", onBack, ""),
      h("span", null, "/"),
      h("span", null, provider.name),
    ),
    h("h1", { className: "prototype-provider-title" }, provider.name),
    h(
      "div",
      { className: "provider-metadata" },
      h("span", null, `By ${provider.namespace}`),
      h("span", null, `Version ${version}`),
      h("span", null, "Private provider"),
      h("span", null, "GitHub Releases"),
    ),
    showWarning &&
      h(
        "section",
        { className: "provider-warning-alert" },
        h(
          "div",
          null,
          h(
            "strong",
            null,
            "Provider is usable, but some versions have errors.",
          ),
          h(
            "p",
            null,
            "Provider versions 0.14.1 and 0.15.1 failed to publish.",
          ),
          button("See all versions", onViewVersions),
        ),
        button("×", () => setShowWarning(false), "dismiss-button", {
          "aria-label": "Dismiss alert",
        }),
      ),
    h(
      "section",
      { className: "provider-details-content" },
      h("h2", null, "Provider details"),
      h("p", null, provider.description),
      h(
        "label",
        { className: "version-select-field" },
        h("span", null, "Select version"),
        h(
          "select",
          {
            value: version,
            onChange: (event) => setVersion(event.target.value),
          },
          provider.versions.map((value) =>
            h(
              "option",
              { key: value, value },
              value === provider.version ? `${value} (latest)` : value,
            ),
          ),
        ),
      ),
      h(
        "dl",
        { className: "provider-stats" },
        stat("Version downloads", provider.downloads),
        stat(
          "Repository",
          h(
            "a",
            {
              href: `https://github.com/${provider.repository}`,
              target: "_blank",
              rel: "noreferrer",
            },
            provider.repository,
          ),
        ),
        stat("Publishing method", "GitHub Releases"),
        stat(
          "Signing keys",
          button(
            `${signingKeys.length} organization key${signingKeys.length === 1 ? "" : "s"} · Manage GPG keys`,
            onManageKeys,
            "provider-name-link",
          ),
        ),
      ),
      h(
        "div",
        { className: "provider-lower-grid" },
        h(
          "section",
          { className: "release-files" },
          tabs(
            [
              ["files", "Release Files"],
              ["docs", "Documentation"],
            ],
            tab,
            setTab,
            "provider-content",
          ),
          h(
            "div",
            {
              role: "tabpanel",
              id: "provider-content-panel",
              "aria-labelledby": `provider-content-${tab}`,
            },
            tab === "docs"
              ? h(Documentation, { provider, version })
              : h(
                  React.Fragment,
                  null,
                  h("h3", null, "Release Files"),
                  h("p", { className: "upload-success" }, "Uploaded (4)"),
                  h(
                    "ul",
                    { className: "release-file-list" },
                    [
                      "darwin_arm64.zip",
                      "linux_amd64.zip",
                      "SHA256SUMS",
                      "SHA256SUMS.sig",
                    ].map((file) =>
                      h(
                        "li",
                        { key: file },
                        `terraform-provider-${provider.name}_${version}_${file}`,
                      ),
                    ),
                  ),
                  h(
                    "p",
                    { className: "prototype-note" },
                    "Sample release assets for this prototype.",
                  ),
                ),
          ),
        ),
        h(
          "aside",
          { className: "usage-card" },
          h("h3", null, `Usage Instructions (${version})`),
          h(
            "p",
            null,
            "Copy this snippet to your Terraform configuration, then run terraform init.",
          ),
          h(CodeBlock, {
            value: usage(provider, version),
            label: "Provider usage instructions",
          }),
        ),
      ),
    ),
  );
}

function Modal({ title, onClose, children, onSubmit }) {
  const ref = React.useRef(null);
  const titleId = React.useId();
  React.useEffect(() => {
    const previous = document.activeElement;
    const dialog = ref.current;
    dialog.querySelector("input, button")?.focus();
    function onKey(event) {
      if (event.key === "Escape") onClose();
      if (event.key !== "Tab") return;
      const elements = [
        ...dialog.querySelectorAll(
          "button:not(:disabled), input, textarea, select, a[href]",
        ),
      ];
      const first = elements[0],
        last = elements.at(-1);
      if (event.shiftKey && document.activeElement === first) {
        event.preventDefault();
        last.focus();
      }
      if (!event.shiftKey && document.activeElement === last) {
        event.preventDefault();
        first.focus();
      }
    }
    dialog.addEventListener("keydown", onKey);
    return () => {
      dialog.removeEventListener("keydown", onKey);
      previous?.focus();
    };
  }, [onClose]);
  return h(
    "div",
    {
      className: "modal-overlay",
      role: "dialog",
      "aria-modal": true,
      "aria-labelledby": titleId,
    },
    h(
      onSubmit ? "form" : "div",
      { className: "modal", ref, onSubmit, noValidate: true },
      h(
        "div",
        { className: "modal-header" },
        h("h2", { id: titleId }, title),
        button("×", onClose, "dismiss-button", { "aria-label": "Close" }),
      ),
      children,
    ),
  );
}

export const SAMPLE_PUBLIC_KEY = `-----BEGIN PGP PUBLIC KEY BLOCK-----
Prototype-only sample. Not a cryptographic key.
-----END PGP PUBLIC KEY BLOCK-----`;

export function validateKey(
  { title, key, sourceURL, namespace },
  existingKeys,
) {
  if (!title.trim()) return "Enter a title for this GPG key.";
  if (!key.trim()) return "Enter mock text for this GPG key.";
  if (sourceURL) {
    let url;
    try {
      url = new URL(sourceURL);
    } catch {
      return "Enter a valid http:// or https:// source URL.";
    }
    if (!["https:", "http:"].includes(url.protocol))
      return "Source URL must use http:// or https://.";
  }
  if (
    existingKeys.some(
      (item) =>
        item.prototypeKey === key.trim() && item.namespace === namespace,
    )
  )
    return "This public key has already been added to this scope and namespace.";
  return "";
}

export function KeyDialog({ scope, onClose, onSubmit, existingKeys }) {
  const [title, setTitle] = React.useState("");
  const [key, setKey] = React.useState("");
  const [source, setSource] = React.useState("");
  const [sourceURL, setSourceURL] = React.useState("");
  const [namespace, setNamespace] = React.useState("fake-corp");
  const [error, setError] = React.useState("");
  const field = (label, control) =>
    h("label", { className: "form-field" }, h("span", null, label), control);
  function submit(event) {
    event.preventDefault();
    const keyNamespace = scope === "public" ? namespace : undefined;
    const message = validateKey(
      { title, key, sourceURL, namespace: keyNamespace },
      existingKeys,
    );
    setError(message);
    if (message) return;
    onSubmit({
      id: crypto.randomUUID(),
      title: title.trim(),
      keyId: `DEMO-${crypto.randomUUID().slice(0, 8).toUpperCase()}`,
      source: source.trim() || "Manual entry",
      sourceURL: sourceURL.trim(),
      namespace: keyNamespace,
      added: "just now",
      prototypeKey: key.trim(),
    });
  }
  return h(
    Modal,
    {
      title: `Add new GPG key · ${scope === "private" ? "Private" : "Public Namespace"}`,
      onClose,
      onSubmit: submit,
    },
    h(
      "div",
      { className: "modal-body" },
      h(
        "p",
        { className: "prototype-note" },
        "Prototype only: enter any mock key text, not real keys. Title and Public key are required. No key format validation, cryptographic verification, or upload takes place. IDs are simulated.",
      ),
      scope === "public" &&
        field(
          "Namespace",
          h(
            "select",
            {
              value: namespace,
              onChange: (event) => setNamespace(event.target.value),
            },
            ["fake-corp", "hashicorp", "terraform-partners"].map((name) =>
              h("option", { key: name }, name),
            ),
          ),
        ),
      field(
        "Title",
        h("input", {
          value: title,
          onChange: (event) => setTitle(event.target.value),
          required: true,
        }),
      ),
      field(
        "Public key",
        h("textarea", {
          value: key,
          onChange: (event) => setKey(event.target.value),
          placeholder: "Enter any mock key text (e.g. demo-signing-key)",
          required: true,
          "aria-describedby": error ? "key-error" : undefined,
          "aria-invalid": Boolean(error),
        }),
      ),
      button("Use sample public key", () => {
        setKey(SAMPLE_PUBLIC_KEY);
        setTitle(title || "Provider release signing");
      }),
      field(
        "Source (e.g. Keybase)",
        h("input", {
          value: source,
          onChange: (event) => setSource(event.target.value),
        }),
      ),
      field(
        "Source URL",
        h("input", {
          type: "url",
          value: sourceURL,
          onChange: (event) => setSourceURL(event.target.value),
          placeholder: "https://keybase.io/example",
        }),
      ),
      error &&
        h(
          "p",
          { className: "prototype-error", id: "key-error", role: "alert" },
          error,
        ),
    ),
    h(
      "div",
      { className: "modal-footer" },
      h(
        "button",
        { type: "submit", className: "action-button primary" },
        "Add GPG key",
      ),
      button("Cancel", onClose),
    ),
  );
}

export function KeyCard({ item, onDelete }) {
  return h(
    "article",
    { className: "key-card" },
    h(
      "div",
      { className: "key-card-main" },
      h(
        "div",
        { className: "key-icon-tile" },
        h("img", { src: "./assets/c7060.svg", alt: "" }),
      ),
      h(
        "div",
        { className: "key-details" },
        item.title && h("strong", null, item.title),
        h(
          "div",
          { className: "key-id" },
          h("span", null, "Key ID:"),
          h("span", null, item.keyId),
        ),
        h(
          "dl",
          null,
          stat(
            "Source:",
            item.sourceURL
              ? h(
                  "a",
                  { href: item.sourceURL, target: "_blank", rel: "noreferrer" },
                  item.source,
                )
              : item.source,
          ),
          item.namespace && stat("Namespace:", item.namespace),
          stat("Added:", item.added),
        ),
      ),
    ),
    button("Delete", onDelete, "delete-button", {
      "aria-label": `Delete GPG key ${item.keyId}`,
    }),
  );
}

export function ConfirmKeyDeletion({ item, onClose, onConfirm }) {
  return h(
    Modal,
    { title: "Delete GPG key?", onClose },
    h(
      "div",
      { className: "modal-body" },
      h("p", null, `Remove ${item.title || item.keyId} (${item.keyId})?`),
      h(
        "p",
        null,
        "Future releases signed with this key may fail verification. Existing published versions remain available.",
      ),
    ),
    h(
      "div",
      { className: "modal-footer" },
      button("Delete GPG key", onConfirm, "action-button danger"),
      button("Cancel", onClose),
    ),
  );
}
