import { React as b, ReactDOM as y } from "./assets/react-runtime.js";
import {
  ProviderDetails,
  ProviderTable,
  KeyDialog,
  KeyCard,
  ConfirmKeyDeletion,
  ConfirmPublishingCancellation,
  PROVIDERS,
  ProviderIcon,
  PublishedTime,
  FlightIcon,
  Modal,
  navigateMenu,
} from "./workflows.js?v=role-views-1";
var C = {
    arrowRight: `./assets/816b2.svg`,
    aws: `./assets/6aa6a.svg`,
    azure: `./assets/c6c38.svg`,
    back: `./assets/b0ec6.svg`,
    caretDown: `./assets/e52f4.svg`,
    caretSelect: `./assets/edaef.svg`,
    caretUp: `./assets/d95a0.svg`,
    cloudUpload: `./assets/0408c.svg`,
    collapse: `./assets/ca94c.svg`,
    externalLink: `./assets/f355e.svg`,
    filter: `./assets/35127.svg`,
    github: `./assets/8d459.svg`,
    gitCommit: `./assets/7c3ee.svg`,
    gitlab: `./assets/b54e8.svg`,
    help: `./assets/d5e03.svg`,
    key: `./assets/c7060.svg`,
    keyEmpty: `./assets/f8bba.svg`,
    lineActive: `./assets/6ee6a.svg`,
    lineComplete: `./assets/1ce3d.svg`,
    lineIdle: `./assets/0cd8b.svg`,
    loading: `./assets/2ab2e.svg`,
    module: `./assets/d9b0b.svg`,
    more: `./assets/2e8f1.svg`,
    newKey: `./assets/8a90b.svg`,
    organization: `./assets/60438.svg`,
    organizationAvatar: `./assets/a6f1c.png`,
    organizationAvatarAlt: `./assets/f0cda.png`,
    previous: `./assets/1158f.svg`,
    privateActive: `./assets/c7b90.svg`,
    privateMenu: `./assets/637c9.svg`,
    provider: `./assets/01a4a.svg`,
    providerTab: `./assets/cf5d9.svg`,
    publicActive: `./assets/979ae.svg`,
    publicMenu: `./assets/6bdec.svg`,
    reload: `./assets/74035.svg`,
    search: `./assets/37953.svg`,
    stepActive: `./assets/b4437.svg`,
    stepComplete: `./assets/d2e07.svg`,
    stepIdle: `./assets/c7d4b.svg`,
    stack: `./assets/fd665.svg`,
    statusCheck: `./assets/11a5f.svg`,
    statusError: `./assets/1de3b.svg`,
    statusWarning: `./assets/d37f0.svg`,
    terraform: `./assets/37dfd.svg`,
    trash: `./assets/b86ca.svg`,
    utilityCaret: `./assets/afce4.svg`,
    x: `./assets/1e014.svg`,
  },
  ee = [],
  te = [
    {
      id: 3,
      keyId: `27070DE8382A550E`,
      source: `keybase`,
      namespace: `hashicorp`,
      added: `30 days ago`,
    },
    {
      id: 4,
      keyId: `27070DE8382A550E`,
      source: `keybase`,
      namespace: `hashicorp`,
      added: `30 days ago`,
    },
  ];
function w({ src: e, alt: t = `` }) {
  return b.createElement(`img`, { alt: t, src: e });
}
function T({ children: e, className: t = ``, onClick: n, type: r = `button`, ...props }) {
  return b.createElement(`button`, {
    ...props,
    className: `action-button ${t}`,
    onClick: n,
    type: r,
    children: e,
  });
}
function E({ role, onRoleChange }) {
  return b.createElement(
    `header`,
    {
      className: `app-header`,
    },
    b.createElement(
      `div`,
      {
        className: `global-nav`,
      },
      b.createElement(`button`, {
        "aria-label": `Terraform home`,
        className: `home-link`,
        type: `button`,
        children: b.createElement(w, { src: C.terraform }),
      }),
      b.createElement(
        `button`,
        {
          className: `context-switcher`,
          type: `button`,
        },
        b.createElement(w, { src: C.organization }),
        b.createElement(`span`, { children: `CoolCorp` }),
        b.createElement(w, { src: C.utilityCaret }),
      ),
    ),
    b.createElement(
      `div`,
      {
        className: `utility-nav`,
      },
      b.createElement(`label`, { className: `prototype-role-switch` },
        b.createElement(`span`, {}, `Prototype view`),
        b.createElement(`select`, {
          "aria-label": `Prototype view`,
          value: role,
          onChange: (event) => onRoleChange(event.target.value),
        },
        b.createElement(`option`, { value: `admin` }, `Admin`),
        b.createElement(`option`, { value: `non-admin` }, `Non-admin`)),
      ),
      b.createElement(`button`, {
        "aria-label": `Search`,
        className: `utility-button`,
        type: `button`,
        children: b.createElement(w, { src: C.search }),
      }),
      b.createElement(
        `button`,
        {
          "aria-label": `Help`,
          className: `help-button`,
          type: `button`,
        },
        b.createElement(w, { src: C.help }),
        b.createElement(w, { src: C.utilityCaret }),
      ),
      b.createElement(
        `button`,
        {
          "aria-label": `User menu`,
          className: `user-button`,
          type: `button`,
        },
        b.createElement(`span`, { className: `avatar`, children: `AB` }),
        b.createElement(w, { src: C.utilityCaret }),
      ),
    ),
  );
}
function ne({
  activeView: e,
  collapsed: t,
  onNavigate: n,
  onToggle: r,
  providerName,
  isAdmin,
}) {
  return e === `status` || e === `details` || e === `versions` || e === `documentation`
    ? b.createElement(
        `aside`,
        {
          className: `side-nav ${t ? `is-collapsed` : ``}`,
        },
        b.createElement(
          `button`,
          {
            className: `back-link`,
            onClick: () => n(`library`),
            type: `button`,
          },
          b.createElement(w, { src: C.back }),
          b.createElement(`span`, { children: `Private Library` }),
        ),
        b.createElement(
          `nav`,
          {
            "aria-label": `Provider`,
          },
          b.createElement(`p`, {
            className: `nav-title provider-nav-title`,
            children: providerName,
          }),
          b.createElement(
                b.Fragment,
                {},
                b.createElement(`button`, {
                  className: `nav-item ${e === `details` ? `active` : ``}`,
                  "aria-current": e === `details` ? `page` : undefined,
                  onClick: () => n(`details`),
                  type: `button`,
                  children: `Overview`,
                }),
                b.createElement(`button`, {
                  className: `nav-item ${e === `documentation` ? `active` : ``}`,
                  "aria-current": e === `documentation` ? `page` : undefined,
                  onClick: () => n(`documentation`),
                  type: `button`,
                  children: `Documentation`,
                }),
                isAdmin && b.createElement(`button`, {
                  className: `nav-item ${e === `versions` || e === `status` ? `active` : ``}`,
                  "aria-current": e === `versions` || e === `status` ? `page` : undefined,
                  onClick: () => n(`versions`),
                  type: `button`,
                  children: `Versions`,
                }),
                isAdmin && b.createElement(`button`, {
                  className: `nav-item`,
                  disabled: true,
                  title: `Tag management is not included in this prototype`,
                  type: `button`,
                  children: `Tags`,
                }),
              ),
        ),
        b.createElement(`button`, {
          "aria-label": t ? `Expand navigation` : `Collapse navigation`,
          className: `collapse-button`,
          onClick: r,
          type: `button`,
          children: b.createElement(w, { src: C.collapse }),
        }),
      )
    : b.createElement(
        `aside`,
        {
          className: `side-nav ${t ? `is-collapsed` : ``}`,
        },
        b.createElement(
          `button`,
          {
            className: `back-link`,
            type: `button`,
          },
          b.createElement(w, { src: C.back }),
          b.createElement(`span`, { children: `Workspaces` }),
        ),
        b.createElement(
          `nav`,
          {
            "aria-label": `Registry`,
          },
          b.createElement(`p`, {
            className: `nav-title`,
            children: `Registry`,
          }),
          b.createElement(`button`, {
            className: `nav-item ${e === `publish` || e === `library` ? `active` : ``}`,
            onClick: () => n(`library`),
            type: `button`,
            children: `Private Library`,
          }),
          b.createElement(`button`, {
            className: `nav-item`,
            type: `button`,
            children: `Public Namespaces`,
          }),
          isAdmin && b.createElement(`button`, {
            className: `nav-item ${e === `gpg` ? `active` : ``}`,
            onClick: () => n(`gpg`),
            type: `button`,
            children: `Manage GPG Keys`,
          }),
        ),
        b.createElement(`button`, {
          "aria-label": t ? `Expand navigation` : `Collapse navigation`,
          className: `collapse-button`,
          onClick: r,
          type: `button`,
          children: b.createElement(w, { src: C.collapse }),
        }),
      );
}
function D({ scope: e, menu: t = !1 }) {
  return b.createElement(w, {
    src:
      e === `private`
        ? t
          ? C.privateMenu
          : C.privateActive
        : t
          ? C.publicMenu
          : C.publicActive,
  });
}
function re({ open: e, onOpenChange: t, onSelect: n }) {
  let r = (0, b.useRef)(null);
  b.useEffect(() => {
    if (e) r.current?.querySelector(`[role="menuitem"]`)?.focus();
  }, [e]);
  return (
    (0, b.useEffect)(() => {
      function e(e) {
        r.current?.contains(e.target) || t(!1);
      }
      return (
        document.addEventListener(`mousedown`, e),
        () => document.removeEventListener(`mousedown`, e)
      );
    }, [t]),
    b.createElement(
      `div`,
      {
        className: `new-key-menu`,
        ref: r,
        onBlur: (event) => {
          if (!event.currentTarget.contains(event.relatedTarget)) t(false);
        },
        onKeyDown: (event) => {
          if (event.key === `Escape`) {
            t(false);
            r.current?.querySelector(`.new-key-toggle`)?.focus();
          }
        },
      },
      b.createElement(
        T,
        {
          className: `primary new-key-toggle`,
          "aria-expanded": e,
          "aria-controls": `new-key-options`,
          "aria-haspopup": `menu`,
          onKeyDown: (event) => {
            if (event.key === `ArrowDown`) { event.preventDefault(); t(true); }
          },
          onClick: () => t(!e),
        },
        b.createElement(
          `span`,
          {
            className: `button-leading`,
          },
          b.createElement(w, { src: C.newKey }),
          b.createElement(`span`, { children: `New GPG Key` }),
        ),
        b.createElement(w, { src: e ? C.caretUp : C.caretDown }),
      ),
      e &&
        b.createElement(
          `div`,
          {
            className: `new-key-popover`,
            id: `new-key-options`,
            role: `menu`,
            "aria-label": `GPG key scope`,
            onKeyDown: navigateMenu,
          },
          b.createElement(
            `button`,
            {
              className: `scope-option`,
              role: `menuitem`,
              onClick: () => n(`private`),
              type: `button`,
            },
            b.createElement(
              `span`,
              {
                className: `scope-option-title`,
              },
              b.createElement(D, { menu: !0, scope: `private` }),
              b.createElement(`span`, { children: `Private` }),
            ),
            b.createElement(
              `span`,
              {
                className: `scope-option-description`,
              },
              `This is a list of GPG keys associated with`,
              ` `,
              b.createElement(`strong`, { children: `CoolCorp` }),
              ` organization.`,
            ),
          ),
          b.createElement(`div`, { className: `menu-separator` }),
          b.createElement(
            `button`,
            {
              className: `scope-option`,
              role: `menuitem`,
              onClick: () => n(`public`),
              type: `button`,
            },
            b.createElement(
              `span`,
              {
                className: `scope-option-title`,
              },
              b.createElement(D, { menu: !0, scope: `public` }),
              b.createElement(`span`, {
                children: `Public Namespaces`,
              }),
            ),
            b.createElement(`span`, {
              className: `scope-option-description`,
              children: `This is a list of GPG keys associated with Public Namespaces.`,
            }),
          ),
        ),
    )
  );
}
function O({ onAdd: e, scope: t }) {
  return b.createElement(`section`, {
    className: `empty-state`,
    children: b.createElement(
      `div`,
      {
        className: `empty-content`,
      },
      b.createElement(
        `div`,
        {},
        b.createElement(
          `div`,
          {
            className: `empty-title`,
          },
          b.createElement(w, { src: C.keyEmpty }),
          b.createElement(`h2`, { children: `No GPG keys yet` }),
        ),
        b.createElement(`p`, {
          children:
            t === `private`
              ? `There are no GPG keys associated with this organization. Add a key to start signing and verifying packages.`
              : `There are no GPG keys associated with your Public Namespaces. Add a key to start signing and verifying packages.`,
        }),
      ),
      b.createElement(T, {
        className: `primary`,
        onClick: e,
        children: `Add GPG key`,
      }),
    ),
  });
}
function se() {
  return b.createElement(
    `div`,
    {
      className: `breadcrumbs`,
    },
    b.createElement(`button`, { type: `button`, children: `CoolCorp` }),
    b.createElement(`span`, { children: `/` }),
    b.createElement(`button`, { type: `button`, children: `Registry` }),
    b.createElement(`span`, { children: `/` }),
    b.createElement(`button`, { type: `button`, children: `Providers` }),
    b.createElement(`span`, { children: `/` }),
    b.createElement(`button`, {
      className: `current`,
      type: `button`,
      children: `Add Provider`,
    }),
  );
}
function ce({ step: e }) {
  return b.createElement(`div`, {
    className: `provider-stepper`,
    children: [
      `Connect to VCS`,
      `Choose a repository`,
      `Configure settings`,
    ].map((t, n) => {
      let r = n + 1,
        i = r < e ? `complete` : r === e ? `active` : `idle`;
      return b.createElement(
        `div`,
        {
          className: `provider-step ${i}`,
          key: t,
        },
        b.createElement(`div`, {
          className: `step-line`,
          children: b.createElement(w, {
            src:
              i === `active`
                ? C.lineActive
                : i === `complete`
                  ? C.lineComplete
                  : C.lineIdle,
          }),
        }),
        b.createElement(
          `div`,
          {
            className: `step-content`,
          },
          b.createElement(
            `span`,
            {
              className: `step-indicator`,
            },
            b.createElement(w, {
              src:
                i === `complete`
                  ? C.stepComplete
                  : i === `active`
                    ? C.stepActive
                    : C.stepIdle,
            }),
            i !== `complete` && b.createElement(`span`, { children: r }),
          ),
          b.createElement(`span`, { children: t }),
        ),
      );
    }),
  });
}
function le({
  onCancel: e,
  onNext: t,
  onPrevious: n,
  primaryLabel: r,
  showPrevious: i = !0,
}) {
  return b.createElement(
    `div`,
    {
      className: `wizard-footer`,
    },
    i
      ? b.createElement(
          `button`,
          {
            className: `previous-button`,
            onClick: n,
            type: `button`,
          },
          b.createElement(w, { src: C.previous }),
          b.createElement(`span`, { children: `Previous` }),
        )
      : b.createElement(`span`, {}),
    b.createElement(
      `div`,
      {
        className: `wizard-footer-actions`,
      },
      b.createElement(T, {
        className: `secondary`,
        onClick: e,
        children: `Cancel`,
      }),
      r &&
        b.createElement(T, {
          className: `primary`,
          onClick: t,
          children: r,
        }),
    ),
  );
}
function ue({ onCancel: e, onSelect: t }) {
  let n = [
    { label: `GitHub`, icon: C.github },
    { label: `GitLab`, icon: C.gitlab },
    { label: `Azure DevOps`, icon: C.azure },
  ];
  return b.createElement(
    b.Fragment,
    {},
    b.createElement(
      `section`,
      {
        className: `wizard-section vcs-step`,
      },
      b.createElement(`h2`, {
        children: `Connect to a version control provider`,
      }),
      b.createElement(`p`, {
        children: `Choose the version control provider that hosts your provider binary.`,
      }),
      b.createElement(
        `div`,
        {
          className: `vcs-actions`,
        },
        n.map((e) =>
          b.createElement(
            `button`,
            {
              className: `vcs-button`,
              onClick: () => t(e.label),
              type: `button`,
              key: e.label,
            },
            b.createElement(
              `span`,
              {},
              b.createElement(w, { src: e.icon }),
              e.label,
            ),
            b.createElement(w, { src: C.caretDown }),
          ),
        ),
        b.createElement(
          `button`,
          {
            className: `different-vcs`,
            onClick: () => t(`GitHub`),
            type: `button`,
          },
          b.createElement(w, { src: C.provider }),
          b.createElement(`span`, {
            children: `Connect to a different VCS`,
          }),
        ),
      ),
    ),
    b.createElement(le, { onCancel: e, showPrevious: !1 }),
  );
}
var de = [
  `hashi/aws-lambda`,
  `hashi/aws-rds-aurora`,
  `hashi/fakewebservices-ec2-cluster`,
  `hashi/animal-crossing`,
  `hashi/animal-collective-2`,
];
function fe({
  organization: e,
  onCancel: t,
  onNext: n,
  onOrganizationChange: r,
  onPrevious: i,
  onRepositoryChange: a,
  repository: o,
}) {
  let [s, c] = (0, b.useState)(!1),
    [l, u] = (0, b.useState)(!1),
    [d, f] = (0, b.useState)(``),
    p = de.filter((e) => e.toLowerCase().includes(d.toLowerCase()));
  function m(e) {
    (r(e), c(!1));
  }
  function h(e) {
    (a(e), u(!1));
  }
  return b.createElement(
    b.Fragment,
    {},
    b.createElement(
      `section`,
      {
        className: `wizard-section repository-step`,
      },
      b.createElement(
        `div`,
        {
          className: `wizard-section-heading`,
        },
        b.createElement(`h2`, { children: `Configure VCS Repository` }),
        b.createElement(`p`, {
          children: `Select the repository for your provider’s release assets. Check if all required files are present to publish a version successfully.`,
        }),
      ),
      b.createElement(
        `div`,
        {
          className: `provider-field organization-field`,
        },
        b.createElement(`label`, { children: `Github organization` }),
        b.createElement(
          `button`,
          {
            "aria-expanded": s,
            className: `super-select`,
            onClick: () => {
              (c((e) => !e), u(!1));
            },
            type: `button`,
          },
          b.createElement(
            `span`,
            {
              className: e ? `selected-value` : ``,
            },
            e && b.createElement(w, { src: C.github }),
            e || `Select an organization`,
          ),
          b.createElement(w, { src: C.caretSelect }),
        ),
        s &&
          b.createElement(
            `div`,
            {
              className: `select-popover organization-popover`,
            },
            b.createElement(
              `button`,
              {
                className: `select-option selected`,
                onClick: () => m(`hashi`),
                type: `button`,
              },
              b.createElement(`span`, {
                className: `option-check`,
                children: b.createElement(FlightIcon, { name: `check` }),
              }),
              b.createElement(w, { src: C.github }),
              b.createElement(`span`, { children: `hashi` }),
            ),
            b.createElement(
              `div`,
              {
                className: `organization-row`,
              },
              b.createElement(
                `button`,
                {
                  className: `select-option`,
                  onClick: () => m(`hashicorp`),
                  type: `button`,
                },
                b.createElement(w, { src: C.organizationAvatar }),
                b.createElement(`span`, { children: `hashicorp` }),
              ),
              b.createElement(`a`, {
                className: `add-gpg-link`,
                href: `https://docs.github.com/en/authentication/managing-commit-signature-verification/generating-a-new-gpg-key`,
                rel: `noreferrer`,
                target: `_blank`,
                children: b.createElement(b.Fragment, {}, `Add GPG key `, b.createElement(w, { src: C.externalLink })),
              }),
            ),
            b.createElement(
              `div`,
              {
                className: `organization-row`,
              },
              b.createElement(
                `button`,
                {
                  className: `select-option`,
                  onClick: () => m(`another-org-name`),
                  type: `button`,
                },
                b.createElement(w, {
                  src: C.organizationAvatarAlt,
                }),
                b.createElement(`span`, {
                  children: `another-org-name`,
                }),
              ),
              b.createElement(`a`, {
                className: `add-gpg-link`,
                href: `https://docs.github.com/en/authentication/managing-commit-signature-verification/generating-a-new-gpg-key`,
                rel: `noreferrer`,
                target: `_blank`,
                children: b.createElement(b.Fragment, {}, `Add GPG key `, b.createElement(w, { src: C.externalLink })),
              }),
            ),
            b.createElement(`div`, {
              className: `select-footer organization-footer`,
              children: b.createElement(
                `button`,
                {
                  type: `button`,
                },
                `Add another organization`,
                b.createElement(w, { src: C.externalLink }),
              ),
            }),
          ),
      ),
      b.createElement(
        `div`,
        {
          className: `provider-field repository-field`,
        },
        b.createElement(`label`, { children: `Select VCS repository` }),
        b.createElement(
          `p`,
          {},
          `Update the repository to include all necessary files to publish a version of the provider, including documentation. Learn more about`,
          ` `,
          b.createElement(`a`, {
            href: `https://developer.hashicorp.com/terraform/cloud-docs/registry/publish-providers`,
            target: `_blank`,
            rel: `noreferrer`,
            children: `what files are required`,
          }),
          ` for a provider’s release assets.`,
        ),
        b.createElement(
          `button`,
          {
            "aria-expanded": l,
            className: `super-select`,
            onClick: () => {
              (u((e) => !e), c(!1));
            },
            type: `button`,
          },
          b.createElement(`span`, {
            className: o ? `selected-value` : ``,
            children: o || `Select Repository`,
          }),
          b.createElement(w, { src: C.caretSelect }),
        ),
        l &&
          b.createElement(
            `div`,
            {
              className: `select-popover repository-popover`,
            },
            b.createElement(
              `label`,
              {
                className: `repository-search`,
              },
              b.createElement(w, { src: C.search }),
              b.createElement(`input`, {
                onChange: (e) => f(e.target.value),
                placeholder: `Search`,
                value: d,
              }),
            ),
            b.createElement(`div`, {
              className: `repository-options`,
              children: p.map((e) =>
                b.createElement(
                  `button`,
                  {
                    className: `select-option ${o === e ? `selected` : ``}`,
                    onClick: () => h(e),
                    type: `button`,
                    key: e,
                  },
                  o === e &&
                    b.createElement(`span`, {
                      className: `option-check`,
                      children: b.createElement(FlightIcon, { name: `check` }),
                    }),
                  b.createElement(`span`, { children: e }),
                ),
              ),
            }),
            b.createElement(
              `div`,
              {
                className: `select-footer repository-footer`,
              },
              b.createElement(
                `span`,
                {},
                `Can’t see your repository?`,
                ` `,
                b.createElement(
                  `button`,
                  {
                    type: `button`,
                  },
                  `Enter ID manually`,
                  b.createElement(w, { src: C.arrowRight }),
                ),
              ),
              b.createElement(
                `span`,
                {},
                b.createElement(
                  `button`,
                  {
                    type: `button`,
                  },
                  b.createElement(w, { src: C.reload }),
                  `Refresh`,
                ),
                b.createElement(`span`, {
                  className: `repo-count`,
                  children: `2304 total`,
                }),
              ),
            ),
          ),
      ),
    ),
    b.createElement(le, {
      onCancel: t,
      onNext: n,
      onPrevious: i,
      primaryLabel: `Next`,
    }),
  );
}
function pe({
  onCancel: e,
  onPrevious: t,
  onPublish: n,
  providerName: r,
  repository: i,
  setProviderName: a,
  vcsProvider: o,
}) {
  return b.createElement(
    b.Fragment,
    {},
    b.createElement(
      `section`,
      {
        className: `wizard-section configure-step`,
      },
      b.createElement(`h2`, { children: `Configure provider settings` }),
      b.createElement(
        `label`,
        {
          className: `provider-name-field`,
        },
        b.createElement(
          `span`,
          {
            className: `provider-label`,
          },
          `Provider Name `,
          b.createElement(`span`, {
            className: `optional-badge`,
            children: `Optional`,
          }),
        ),
        b.createElement(`span`, {
          className: `provider-helper`,
          children: `Change the name of the provider from the repository name to something else for your organization’s private registry.`,
        }),
        b.createElement(`input`, {
          onChange: (e) => a(e.target.value),
          value: r,
        }),
      ),
      b.createElement(
        `dl`,
        {
          className: `provider-summary`,
        },
        b.createElement(
          `div`,
          {},
          b.createElement(`dt`, { children: `Name` }),
          b.createElement(`dd`, { children: r }),
        ),
        b.createElement(
          `div`,
          {},
          b.createElement(`dt`, { children: `VCS Provider` }),
          b.createElement(`dd`, { children: o }),
        ),
        b.createElement(
          `div`,
          {},
          b.createElement(`dt`, { children: `Repository` }),
          b.createElement(`dd`, { children: i }),
        ),
      ),
    ),
    b.createElement(le, {
      onCancel: e,
      onNext: n,
      onPrevious: t,
      primaryLabel: `Publish`,
    }),
  );
}
var me = [
  `aws-rds-starter-module`,
  `aws-s3-bucket-module`,
  `aws-vpc-network-module`,
  `azure-keyvault-secrets`,
  `gcp-cloud-sql-module`,
  `aws-lambda-api-gateway`,
];
function he({
  isAdmin,
  hasPrivateGpgKey: e,
  onAddGpgKey: t,
  onDismissToast: n,
  onPublishModule: r,
  onPublishProvider: i,
  onPublishStack: a,
  onViewStatus: o,
  showPublishToast: s,
  libraryTab,
  onLibraryTabChange,
  onSelectProvider,
  providers,
}) {
  let [c, l] = (0, b.useState)(!1),
    u = (0, b.useRef)(null);
  b.useEffect(() => {
    if (c) u.current?.querySelector(`[role="menuitem"]:not(:disabled)`)?.focus();
  }, [c]);
  (0, b.useEffect)(() => {
    function e(e) {
      u.current?.contains(e.target) || l(!1);
    }
    return (
      document.addEventListener(`mousedown`, e),
      () => document.removeEventListener(`mousedown`, e)
    );
  }, []);
  function d() {
    (l(!1), i());
  }
  return b.createElement(
    `main`,
    {
      className: `main-content library-page`,
    },
    b.createElement(
      `div`,
      {
        className: `library-header`,
      },
      b.createElement(
        `div`,
        {},
        b.createElement(
          `div`,
          {
            className: `breadcrumbs`,
          },
          b.createElement(`button`, {
            type: `button`,
            children: `CoolCorp`,
          }),
          b.createElement(`span`, { children: `/` }),
          b.createElement(`button`, {
            type: `button`,
            children: `Registry`,
          }),
          b.createElement(`span`, { children: `/` }),
          b.createElement(`button`, {
            className: `current`,
            type: `button`,
            children: `Private Library`,
          }),
        ),
        b.createElement(`h1`, { children: `Private Library` }),
      ),
      b.createElement(
        `div`,
        {
          className: `library-actions`,
        },
        b.createElement(T, {
          className: `secondary`,
          children: `Search public registry`,
        }),
        isAdmin && b.createElement(
          `div`,
          {
            className: `publish-menu`,
            ref: u,
            onBlur: (event) => {
              if (!event.currentTarget.contains(event.relatedTarget)) l(false);
            },
            onKeyDown: (event) => {
              if (event.key === `Escape`) {
                l(false);
                u.current?.querySelector(`.publish-button`)?.focus();
              }
            },
          },
          b.createElement(
            T,
            {
              className: `primary publish-button`,
              "aria-expanded": c,
              "aria-controls": `publish-options`,
              "aria-haspopup": `menu`,
              onKeyDown: (event) => {
                if (event.key === `ArrowDown`) { event.preventDefault(); l(true); }
              },
              onClick: () => l((e) => !e),
            },
            b.createElement(
              `span`,
              {
                className: `button-leading`,
              },
              b.createElement(w, { src: C.cloudUpload }),
              b.createElement(`span`, { children: `Publish` }),
            ),
            b.createElement(w, { src: c ? C.caretUp : C.caretDown }),
          ),
          c &&
            b.createElement(
              `div`,
              {
                className: `publish-popover`,
                role: `menu`,
                id: `publish-options`,
                "aria-label": `Publish`,
                onKeyDown: navigateMenu,
              },
              b.createElement(
                `div`,
                {
                  className: `provider-publish-option ${e ? `` : `requires-key`}`,
                },
                b.createElement(
                  `button`,
                  {
                    className: `publish-option`,
                    disabled: !e,
                    onClick: d,
                    role: `menuitem`,
                    type: `button`,
                  },
                  b.createElement(`span`, {
                    className: `publish-option-icon`,
                    children: b.createElement(w, {
                      src: C.providerTab,
                    }),
                  }),
                  b.createElement(
                    `span`,
                    {},
                    b.createElement(`strong`, {
                      children: `Provider`,
                    }),
                    b.createElement(`small`, {
                      children: `Publish a provider from a VCS repository.`,
                    }),
                  ),
                ),
                !e &&
                  b.createElement(`button`, {
                    className: `provider-add-key`,
                    role: `menuitem`,
                    onClick: () => {
                      (l(!1), t());
                    },
                    type: `button`,
                    children: `Add a GPG key`,
                  }),
              ),
              b.createElement(`div`, { className: `menu-separator` }),
              b.createElement(
                `button`,
                {
                  className: `publish-option`,
                  onClick: () => {
                    (l(!1), r());
                  },
                  role: `menuitem`,
                  type: `button`,
                },
                b.createElement(`span`, {
                  className: `publish-option-icon`,
                  children: b.createElement(w, { src: C.module }),
                }),
                b.createElement(
                  `span`,
                  {},
                  b.createElement(`strong`, {
                    children: `Module`,
                  }),
                  b.createElement(`small`, {
                    children: `Publish a module to the private registry.`,
                  }),
                ),
              ),
              b.createElement(
                `button`,
                {
                  className: `publish-option`,
                  onClick: () => {
                    (l(!1), a());
                  },
                  role: `menuitem`,
                  type: `button`,
                },
                b.createElement(`span`, {
                  className: `publish-option-icon`,
                  children: b.createElement(w, { src: C.stack }),
                }),
                b.createElement(
                  `span`,
                  {},
                  b.createElement(`strong`, {
                    children: `Stack component configuration`,
                  }),
                  b.createElement(`small`, {
                    children: `Publish a component configuration to the private registry.`,
                  }),
                ),
              ),
            ),
        ),
      ),
    ),
    b.createElement(
      `div`,
      {
        className: `library-tabs`,
        role: `tablist`,
        "aria-label": `Private library`,
      },
      b.createElement(
        `button`,
        {
          className: libraryTab === `modules` ? `active` : ``,
          role: `tab`,
          "aria-selected": libraryTab === `modules`,
          onClick: () => onLibraryTabChange(`modules`),
          type: `button`,
        },
        b.createElement(w, { src: C.module }),
        `Modules`,
      ),
      b.createElement(
        `button`,
        {
          type: `button`,
          className: libraryTab === `providers` ? `active` : ``,
          role: `tab`,
          "aria-selected": libraryTab === `providers`,
          onClick: () => onLibraryTabChange(`providers`),
        },
        b.createElement(w, { src: C.providerTab }),
        `Providers`,
      ),
      b.createElement(
        `button`,
        {
          type: `button`,
        },
        b.createElement(w, { src: C.stack }),
        `Stack component configurations`,
      ),
    ),
    libraryTab === `providers`
      ? b.createElement(ProviderTable, { onSelectProvider, providers })
      : b.createElement(
          `section`,
          {
            className: `library-table-shell`,
          },
          b.createElement(
            `div`,
            {
              className: `library-toolbar`,
            },
            b.createElement(`button`, {
              className: `small-icon-button`,
              type: `button`,
              children: `↕`,
            }),
            b.createElement(
              `button`,
              {
                className: `filter-button`,
                type: `button`,
              },
              b.createElement(w, { src: C.filter }),
              `Filters`,
              b.createElement(w, { src: C.caretDown }),
            ),
            b.createElement(
              `label`,
              {
                className: `library-search`,
              },
              b.createElement(w, { src: C.search }),
              b.createElement(`input`, { placeholder: `Search` }),
            ),
            b.createElement(T, {
              className: `secondary bulk-button`,
              children: `Bulk select modules`,
            }),
          ),
          b.createElement(`div`, {
            className: `no-filters`,
            children: `No filters applied`,
          }),
          b.createElement(`div`, {
            className: `library-table-wrap`,
            children: b.createElement(
              `table`,
              {
                className: `library-table`,
              },
              b.createElement(`thead`, {
                children: b.createElement(
                  `tr`,
                  {},
                  b.createElement(`th`, { children: `Modules` }),
                  b.createElement(`th`, { children: `Latest version` }),
                  b.createElement(`th`, { children: `Provider` }),
                  b.createElement(`th`, { children: `Downloads ↕` }),
                  b.createElement(`th`, { children: `Registry` }),
                  b.createElement(`th`, { children: `Owner` }),
                  b.createElement(`th`, {}),
                ),
              }),
              b.createElement(`tbody`, {
                children: me.map((e, t) =>
                  b.createElement(
                    `tr`,
                    {
                      key: e,
                    },
                    b.createElement(
                      `td`,
                      {},
                      b.createElement(`strong`, {}, e, ` ◇`),
                      b.createElement(`span`, {
                        children: `AWS starter kit module for RDS to. AWS starter mod...`,
                      }),
                      b.createElement(
                        `span`,
                        {
                          className: `neutral-badge`,
                        },
                        `◇ `,
                        t % 3 == 1 ? `Branch based` : `Tag based`,
                      ),
                    ),
                    b.createElement(
                      `td`,
                      {},
                      b.createElement(`span`, { children: `1.2.3` }),
                      b.createElement(`small`, {
                        children: `Published 3 days ago`,
                      }),
                      t % 2 == 0 &&
                        b.createElement(`span`, {
                          className: `neutral-badge`,
                          children: `△ Status`,
                        }),
                    ),
                    b.createElement(`td`, {
                      children: b.createElement(
                        `span`,
                        {
                          className: `provider-cell`,
                        },
                        b.createElement(w, { src: C.aws }),
                        ` AWS`,
                      ),
                    }),
                    b.createElement(`td`, { children: `⇩ 123` }),
                    b.createElement(`td`, {
                      children: b.createElement(`span`, {
                        className: `private-badge`,
                        children: `◎ Private`,
                      }),
                    }),
                    b.createElement(`td`, {
                      children: b.createElement(`button`, {
                        className: `owner-link`,
                        type: `button`,
                        children: `Team_Name`,
                      }),
                    }),
                    b.createElement(`td`, {
                      children: b.createElement(`button`, {
                        className: `row-menu`,
                        type: `button`,
                        children: `…`,
                      }),
                    }),
                  ),
                ),
              }),
            ),
          }),
        ),
    s &&
      b.createElement(
        `aside`,
        {
          "aria-live": `polite`,
          className: `publish-toast`,
        },
        b.createElement(`button`, {
          "aria-label": `Dismiss publishing notification`,
          className: `toast-dismiss`,
          onClick: n,
          type: `button`,
          children: `×`,
        }),
        b.createElement(
          `div`,
          {
            className: `publish-toast-title`,
          },
          b.createElement(`span`, {
            className: `toast-info`,
            children: `i`,
          }),
          b.createElement(`strong`, {
            children: `Publishing to the private registry.`,
          }),
        ),
        b.createElement(
          `div`,
          {
            className: `publish-toast-progress`,
          },
          b.createElement(`span`, {
            className: `loading-icon`,
            children: b.createElement(w, { src: C.loading }),
          }),
          b.createElement(`span`, { children: `Publish in progress...` }),
        ),
        b.createElement(
          T,
          {
            className: `secondary toast-action`,
            onClick: o,
          },
          `View versions`,
          b.createElement(w, { src: C.arrowRight }),
        ),
      ),
  );
}
var ge = [
  { version: `v0.12.0`, commit: `53ac67b`, status: `complete`, environments: [`Production`] },
  { version: `v0.13.0`, commit: `89aec67`, status: `complete`, environments: [`Staging`, `Production`] },
  {
    version: `v0.14.0`,
    environments: [`Staging`],
    commit: `a68c67d`,
    status: `pending`,
    outcome: `complete`,
  },
  {
    version: `v0.14.1`,
    environments: [`Development`],
    commit: `88a1b2c`,
    status: `pending`,
    outcome: `error`,
  },
  {
    version: `v0.15.0`,
    environments: [`Production`],
    commit: `e34f9a0`,
    status: `pending`,
    outcome: `complete`,
  },
  {
    version: `v0.15.1`,
    environments: [`Staging`],
    commit: `22ff61d`,
    status: `pending`,
    outcome: `error`,
  },
  {
    version: `v0.16.0`,
    environments: [`Development`, `Staging`],
    commit: `fa77c22`,
    status: `pending`,
    outcome: `complete`,
  },
  {
    version: `v0.16.1`,
    environments: [`Development`],
    commit: `9c8b7e6`,
    status: `pending`,
    outcome: `complete`,
  },
  {
    version: `v0.17.0`,
    environments: [`Staging`],
    commit: `a2b4c6d`,
    status: `pending`,
    outcome: `complete`,
  },
  {
    version: `v0.17.1`,
    environments: [`Development`],
    commit: `f1e3d5b`,
    status: `pending`,
    outcome: `complete`,
  },
];
function _e({ current: e, showManage = true, onBack }) {
  return b.createElement(
    b.Fragment,
    {},
    b.createElement(
      `div`,
      {
        className: `provider-detail-breadcrumbs breadcrumbs`,
      },
      b.createElement(`button`, {
        type: `button`,
        children: `Organization`,
      }),
      b.createElement(`span`, { children: `/` }),
      b.createElement(`button`, { type: `button`, children: `Registry` }),
      b.createElement(`span`, { children: `/` }),
      b.createElement(`button`, {
        type: `button`,
        onClick: onBack,
        children: `Private Library`,
      }),
      b.createElement(`span`, { children: `/` }),
      b.createElement(`button`, { type: `button`, children: `provider` }),
      b.createElement(`span`, { children: `/` }),
      b.createElement(`button`, {
        type: `button`,
        children: `aws_rds_aurora`,
      }),
      b.createElement(`span`, { children: `/` }),
      b.createElement(`button`, {
        className: `current`,
        type: `button`,
        children: e,
      }),
    ),
    b.createElement(
      `div`,
      {
        className: `provider-detail-header`,
      },
      b.createElement(`div`, {
        className: `provider-logo`,
        children: b.createElement(ProviderIcon),
      }),
      b.createElement(
        `div`,
        {},
        b.createElement(
          `div`,
          {
            className: `provider-name-row`,
          },
          b.createElement(`h1`, { children: `aws-rds-aurora` }),
          b.createElement(`span`, {
            className: `neutral-badge`,
            children: b.createElement(b.Fragment, {}, b.createElement(FlightIcon, { name: `tag` }), ` Tag based`),
          }),
        ),
        b.createElement(`p`, {
          children: `Provider works with Terraform and can do 1 2 3 4 5.`,
        }),
      ),
      showManage &&
        b.createElement(
          T,
          {
            className: `secondary manage-button`,
          },
          `Manage`,
          b.createElement(w, { src: C.caretDown }),
        ),
    ),
  );
}
function versionRows(progress, cancelled = false) {
  return ge.map((item, index) => ({
    ...item,
    status: item.status === `complete` || index < progress
      ? item.outcome || `complete`
      : cancelled ? `cancelled` : index === progress ? `pending` : `queued`,
  }));
}
function ve({
  onCancel: e,
  onComplete: t,
  onCancelPublishing,
  progress: n,
  paused: cancelOpen,
  onPause: setCancelOpen,
  cancelled,
  publishedTimes,
}) {
  const o = n >= ge.length || cancelled;
  const rows = versionRows(n, cancelled);
  let s = ge[n]?.version;
  const completed = rows.filter((item) => item.status === `complete`).length;
  const errors = rows.filter((item) => item.status === `error`).length;
  const hasErrors = errors > 0;
  return b.createElement(
    `main`,
    {
      className: `main-content provider-detail-page`,
    },
    b.createElement(_e, { current: `Versions`, showManage: false, onBack: e }),
    b.createElement(
      `section`,
      {
        className: `status-alert ${cancelled ? `cancelled` : hasErrors ? `incomplete` : o ? `complete` : ``}`,
        role: `status`,
      },
      cancelled
        ? b.createElement(FlightIcon, { name: `minus-circle` })
        : hasErrors
        ? b.createElement(w, { src: C.statusWarning })
        : o
            ? b.createElement(`span`, {
                className: `status-complete-mark`,
                children: b.createElement(FlightIcon, { name: `check` }),
              })
            : b.createElement(`span`, {
                className: `loading-icon`,
                children: b.createElement(w, { src: C.loading }),
              }),
      b.createElement(
        `div`,
        {},
        b.createElement(`strong`, {
          children: cancelled
            ? `Provider publishing was canceled.`
            : !o
            ? `Publishing ${s}...`
            : hasErrors
              ? `Version ingress finished with errors.`
              : `Version ingress complete.`,
        }),
        b.createElement(`p`, {
          children: `${completed} published, ${errors} incomplete, ${ge.length - completed - errors} ${cancelled ? `canceled` : `remaining`}. ${
            cancelled
              ? `Active and queued versions were not published. Previously published versions remain available.`
              : o
              ? hasErrors
                ? `Published versions are available. Expand incomplete versions below to review errors.`
                : `All versions are ready to use.`
              : `This list updates as each version is processed. You can leave this page and return without losing progress.`
          }`,
        }),
        !o &&
              b.createElement(T, {
                className: `secondary`,
                onClick: () => setCancelOpen(true),
                children: `Cancel publishing`,
              }),
        o &&
          b.createElement(T, {
            className: `secondary`,
            onClick: t,
            children: `View provider`,
          }),
      ),
    ),
    b.createElement(xe, { rows, publishedTimes, filteringAvailable: o }),
    cancelOpen &&
      b.createElement(ConfirmPublishingCancellation, {
        onClose: () => setCancelOpen(false),
        onConfirm: onCancelPublishing,
      }),
  );
}
function xe({ rows, publishedTimes, filteringAvailable }) {
  const [expanded, setExpanded] = b.useState([]);
  const [search, setSearch] = b.useState(``);
  const [filters, setFilters] = b.useState([]);
  const [environments, setEnvironments] = b.useState([]);
  const [filterGroup, setFilterGroup] = b.useState(`status`);
  const [showApplied, setShowApplied] = b.useState(false);
  const [filterOpen, setFilterOpen] = b.useState(false);
  const [loading, setLoading] = b.useState(true);
  const filterMenu = b.useRef(null);
  const filterButton = b.useRef(null);
  const labels = {
    complete: `Published`,
    error: `Ingress incomplete`,
    pending: `Publishing`,
    queued: `Queued`,
    cancelled: `Canceled`,
  };
  const environmentOptions = [...new Set(rows.flatMap((row) => row.environments))].sort();
  const statusOptions = Object.entries(labels).filter(([value]) =>
    [`complete`, `error`, `cancelled`].includes(value) &&
    rows.some((row) => row.status === value),
  );
  const appliedCount = filters.length + environments.length;
  const groups = [
    { id: `status`, label: `Status`, count: filters.length },
    { id: `environments`, label: `Environments`, count: environments.length },
  ];
  b.useEffect(() => {
    const timer = window.setTimeout(() => setLoading(false), 450);
    return () => window.clearTimeout(timer);
  }, []);
  b.useEffect(() => {
    if (!filterOpen) return undefined;
    filterMenu.current?.querySelector(`[role="tab"][aria-selected="true"]`)?.focus();
    const closeOutside = (event) => {
      if (!filterMenu.current?.contains(event.target)) setFilterOpen(false);
    };
    const closeOnEscape = (event) => {
      if (event.key === `Escape`) {
        setFilterOpen(false);
        filterButton.current?.focus();
      }
    };
    document.addEventListener(`pointerdown`, closeOutside);
    document.addEventListener(`keydown`, closeOnEscape);
    return () => {
      document.removeEventListener(`pointerdown`, closeOutside);
      document.removeEventListener(`keydown`, closeOnEscape);
    };
  }, [filterOpen]);
  const toggleFilter = (value, group = `status`) => {
    const update = group === `status` ? setFilters : setEnvironments;
    update((items) =>
      items.includes(value) ? items.filter((item) => item !== value) : [...items, value],
    );
    setShowApplied(true);
  };
  const clearSelections = () => {
    setFilters([]);
    setEnvironments([]);
  };
  const clearFilters = () => {
    clearSelections();
    setSearch(``);
  };
  const visibleRows = !filteringAvailable ? rows : rows.filter((row) =>
    row.version.toLowerCase().includes(search.trim().toLowerCase()) &&
    (filters.length === 0 || filters.includes(row.status)) &&
    (environments.length === 0 || row.environments.some((value) => environments.includes(value))),
  );
  const hasQuery = appliedCount > 0 || search.trim() !== ``;
  const statusIcon = (status) =>
    b.createElement(
      `span`,
      { className: `version-status-icon`, "aria-hidden": true },
      status === `queued` || status === `cancelled`
        ? b.createElement(`span`, {
            className: status === `queued` ? `queued-dot` : `cancelled-dot`,
            children: status === `cancelled` ? b.createElement(FlightIcon, { name: `minus-circle` }) : null,
          })
        : b.createElement(`span`, {
            className: status === `pending` ? `loading-icon` : ``,
            children: b.createElement(w, {
              src: status === `complete` ? C.statusCheck
                : status === `error` ? C.statusError : C.loading,
            }),
          }),
    );
  return b.createElement(
    `section`,
    {
      className: `combined-versions`,
      "aria-label": `Provider versions`,
    },
    b.createElement(
      `div`,
      {
        className: `versions-heading`,
      },
      b.createElement(
        `h2`,
        {},
        `Versions `,
        b.createElement(`span`, { children: rows.length }),
      ),
      b.createElement(`p`, {
        children: `Track publishing progress and review all provider versions in one place.`,
      }),
    ),
    b.createElement(
      `section`,
      {
        className: `versions-table-shell`,
      },
      filteringAvailable && b.createElement(b.Fragment, {},
      b.createElement(
        `div`,
        {
          className: `library-toolbar`,
        },
        b.createElement(
          `div`,
          {
            className: `version-filter-menu`,
            ref: filterMenu,
            onBlur: (event) => {
              if (!event.currentTarget.contains(event.relatedTarget)) setFilterOpen(false);
            },
          },
          b.createElement(
            `button`,
            {
              className: `filter-button ${appliedCount ? `active` : ``}`,
              type: `button`,
              ref: filterButton,
              "aria-expanded": filterOpen,
              "aria-controls": `version-filters`,
              onKeyDown: (event) => {
                if (event.key === `ArrowDown`) {
                  event.preventDefault();
                  setFilterOpen(true);
                }
              },
              onClick: () => setFilterOpen((open) => !open),
            },
            b.createElement(w, { src: C.filter }),
            `Filters`,
            appliedCount > 0 &&
              b.createElement(`span`, {
                className: `filter-count`,
                "aria-label": `${appliedCount} applied`,
                children: appliedCount,
              }),
            b.createElement(w, { src: C.caretDown }),
          ),
          filterOpen &&
            b.createElement(
              `div`,
              {
                className: `filter-popover version-filter-popover`,
                id: `version-filters`,
                role: `group`,
                "aria-label": `Filter versions`,
              },
              b.createElement(`div`, { className: `filter-panels` },
                b.createElement(`div`, {
                  className: `filter-categories`,
                  role: `tablist`,
                  "aria-label": `Filter categories`,
                  "aria-orientation": `vertical`,
                }, groups.map((group, index) =>
                  b.createElement(`button`, {
                    key: group.id,
                    type: `button`,
                    role: `tab`,
                    id: `filter-category-${group.id}`,
                    "aria-selected": filterGroup === group.id,
                    "aria-controls": `filter-values`,
                    tabIndex: filterGroup === group.id ? 0 : -1,
                    onClick: () => setFilterGroup(group.id),
                    onKeyDown: (event) => {
                      const next = event.key === `ArrowDown` ? (index + 1) % groups.length
                        : event.key === `ArrowUp` ? (index + groups.length - 1) % groups.length
                        : event.key === `Home` ? 0 : event.key === `End` ? groups.length - 1 : null;
                      if (next === null) return;
                      event.preventDefault();
                      setFilterGroup(groups[next].id);
                      event.currentTarget.parentElement.querySelectorAll(`button`)[next].focus();
                    },
                  },
                  group.label,
                  group.count > 0 && b.createElement(`span`, { className: `filter-category-count` }, group.count),
                  ),
                )),
                b.createElement(`div`, {
                  className: `filter-values`,
                  role: `tabpanel`,
                  id: `filter-values`,
                  "aria-labelledby": `filter-category-${filterGroup}`,
                },
              b.createElement(`p`, { className: `filter-popover-title`, children: filterGroup === `status` ? `Status` : `Environments` }),
              (filterGroup === `status` ? statusOptions : environmentOptions.map((value) => [value, value])).map(([value, label]) =>
                b.createElement(
                  `label`,
                  { className: `filter-option`, key: `${filterGroup}-${value}` },
                  b.createElement(`input`, {
                    type: `checkbox`,
                    checked: (filterGroup === `status` ? filters : environments).includes(value),
                    onChange: () => toggleFilter(value, filterGroup),
                  }),
                  filterGroup === `status` && statusIcon(value),
                  b.createElement(`span`, { className: `filter-option-label`, children: label }),
                  b.createElement(`span`, {
                    className: `filter-option-count`,
                    children: rows.filter((row) => filterGroup === `status`
                      ? row.status === value : row.environments.includes(value)).length,
                  }),
                ),
              ),
              b.createElement(`button`, {
                type: `button`,
                className: `text-button filter-clear-selection`,
                disabled: (filterGroup === `status` ? filters : environments).length === 0,
                onClick: () => (filterGroup === `status` ? setFilters : setEnvironments)([]),
                children: `Clear selection`,
              }),
              )),
              b.createElement(
                `div`,
                { className: `filter-popover-footer` },
                b.createElement(`button`, {
                  type: `button`,
                  className: `text-button`,
                  disabled: appliedCount === 0,
                  onClick: clearSelections,
                  children: `Clear all filters`,
                }),
                b.createElement(`span`, { className: `filter-live-note`, children: `Filters apply instantly` }),
              ),
            ),
        ),
        b.createElement(
          `label`,
          {
            className: `library-search`,
          },
          b.createElement(w, { src: C.search }),
          b.createElement(`input`, {
            "aria-label": `Search versions`,
            placeholder: `Search`,
            type: `search`,
            value: search,
            onChange: (event) => setSearch(event.target.value),
          }),
        ),
      ),
      b.createElement(
        `div`,
        {
          className: `no-filters version-filter-summary`,
        },
        b.createElement(`button`, {
          type: `button`,
          className: `applied-filters-toggle`,
          "aria-expanded": showApplied,
          "aria-controls": `applied-version-filters`,
          onClick: () => setShowApplied((show) => !show),
        },
        b.createElement(FlightIcon, { name: showApplied ? `chevron-up` : `chevron-down` }),
        appliedCount ? `${appliedCount} applied filter${appliedCount === 1 ? `` : `s`}` : `No filters applied`,
        ),
        b.createElement(`span`, {
          className: `filter-result-count`,
          "aria-live": `polite`,
          children: loading ? `Loading versions…` : `${visibleRows.length} of ${rows.length} versions`,
        }),
      ),
      b.createElement(`div`, { id: `applied-version-filters`, hidden: !showApplied, className: `applied-version-filters` },
        appliedCount === 0
          ? b.createElement(`span`, {}, `No filters applied`)
          : b.createElement(
              `div`,
              { className: `filter-tags` },
              [
                ...filters.map((value) => ({ value, group: `status`, text: `Status: ${labels[value]}` })),
                ...environments.map((value) => ({ value, group: `environments`, text: `Environments: ${value}` })),
              ].map(({ value, group, text }) =>
                b.createElement(
                  `span`,
                  { className: `filter-tag`, key: `${group}-${value}`, title: text },
                  b.createElement(`span`, { className: `filter-tag-text` }, text),
                  b.createElement(
                    `button`,
                    {
                      type: `button`,
                      "aria-label": `Remove ${group === `status` ? labels[value] : value} filter`,
                      onClick: () => {
                        toggleFilter(value, group);
                        filterButton.current?.focus();
                      },
                    },
                    b.createElement(w, { src: C.x }),
                  ),
                ),
              ),
              b.createElement(`button`, {
                type: `button`,
                className: `text-button`,
                onClick: clearSelections,
                children: `Clear all`,
              }),
            ),
      ),
      ),
      b.createElement(`div`, {
        className: `versions-table-wrap`,
        "aria-busy": loading,
        children: b.createElement(
          `table`,
          {
            className: `versions-table`,
          },
          b.createElement(
            `colgroup`,
            {},
            b.createElement(`col`, { className: `col-version` }),
            b.createElement(`col`, { className: `col-status` }),
            b.createElement(`col`, { className: `col-published` }),
            b.createElement(`col`, { className: `col-commit` }),
            b.createElement(`col`, { className: `col-downloads` }),
          ),
          b.createElement(`thead`, {
            children: b.createElement(
              `tr`,
              {},
              b.createElement(`th`, { scope: `col`, children: `Version` }),
              b.createElement(`th`, { scope: `col`, children: `Status` }),
              b.createElement(`th`, { scope: `col`, children: `Published` }),
              b.createElement(`th`, { scope: `col`, children: `Commit` }),
              b.createElement(`th`, {
                scope: `col`,
                title: `Downloads from this organization's private registry, not global or GitHub release downloads.`,
                children: `Downloads`,
              }),
            ),
          }),
          b.createElement(`tbody`, {
            children: loading
              ? Array.from({ length: 4 }, (_, index) =>
                  b.createElement(
                    `tr`,
                    { key: `skeleton-${index}`, className: `version-skeleton-row`, "aria-hidden": true },
                    [72, 120, 96, 84, 0].map((width, cell) =>
                      b.createElement(`td`, {
                        key: cell,
                        children: width
                          ? b.createElement(`span`, { className: `skeleton-bar`, style: { width } })
                          : null,
                      }),
                    ),
                  ),
                )
              : visibleRows.map((n) => {
              const open = expanded.includes(n.version);
              return b.createElement(
                b.Fragment,
                {
                  key: n.version,
                },
                b.createElement(
                  `tr`,
                  { className: `version-row is-${n.status}` },
                  b.createElement(`td`, {
                    children: b.createElement(b.Fragment, {},
                    n.status === `error` ? b.createElement(
                      `button`,
                      {
                        className: `version-expand`,
                        "aria-expanded": open,
                        "aria-controls": `error-${n.version}`,
                        onClick: () => setExpanded((items) =>
                          items.includes(n.version)
                            ? items.filter((item) => item !== n.version)
                            : [...items, n.version],
                        ),
                        type: `button`,
                      },
                      b.createElement(
                        `svg`,
                        {
                          className: `version-chevron`,
                          width: 16,
                          height: 16,
                          viewBox: `0 0 16 16`,
                          fill: `none`,
                          "aria-hidden": true,
                        },
                        b.createElement(`path`, {
                          d: `m6 3 5 5-5 5`,
                          stroke: `currentColor`,
                          strokeWidth: 1.5,
                          strokeLinecap: `round`,
                          strokeLinejoin: `round`,
                        }),
                      ),
                      b.createElement(`strong`, {
                        children: n.version,
                      }),
                    ) : b.createElement(`strong`, { className: `version-name` }, n.version),
                    b.createElement(`span`, {
                      className: `version-environments`,
                      title: `Environments: ${n.environments.join(`, `)}`,
                    }, b.createElement(FlightIcon, { name: `tag` }),
                    b.createElement(`span`, {}, n.environments.join(`, `))),
                    ),
                  }),
                  b.createElement(`td`, {
                    children: b.createElement(
                      `span`,
                      {
                        className: `version-status ${n.status} cell-swap`,
                        key: n.status,
                      },
                      statusIcon(n.status),
                      labels[n.status],
                    ),
                  }),
                  b.createElement(`td`, {
                    children: b.createElement(
                      `span`,
                      { className: `cell-swap`, key: n.status === `complete` ? `published` : `unpublished` },
                      n.status === `complete`
                        ? b.createElement(PublishedTime, { timestamp: publishedTimes[n.version.slice(1)] })
                        : b.createElement(`span`, { className: `version-muted` }, `Not published`),
                    ),
                  }),
                  b.createElement(`td`, {
                    children: b.createElement(
                      `span`,
                      {
                        className: `version-commit`,
                        title: `Illustrative commit ${n.commit}`,
                      },
                      b.createElement(w, { src: C.gitCommit }),
                      b.createElement(`code`, null, n.commit),
                    ),
                  }),
                  b.createElement(`td`, {}),
                ),
                n.status === `error` &&
                  b.createElement(`tr`, {
                    className: `version-error-row ${open ? `open` : ``}`,
                    id: `error-${n.version}`,
                    children: b.createElement(`td`, {
                      colSpan: 5,
                      children: b.createElement(
                        `div`,
                        { className: `version-error-panel` },
                        b.createElement(
                          `div`,
                          { className: `version-error-content` },
                          b.createElement(`strong`, null, `Version ingress incomplete: VCS publishing error.`),
                          b.createElement(`p`, null, `Check this release's required files and signing key, then publish a corrected release. Error details are illustrative in this prototype.`),
                          b.createElement(`a`, {
                            href: `https://developer.hashicorp.com/terraform/cloud-docs/registry/publish-providers`,
                            target: `_blank`,
                            rel: `noreferrer`,
                            children: `Review required release files`,
                          }),
                        ),
                      ),
                    }),
                  }),
              );
            }).concat(visibleRows.length ? [] : [
                b.createElement(`tr`, { key: `empty`, className: `version-row` },
                  b.createElement(`td`, { colSpan: 5, className: `prototype-empty` },
                    b.createElement(`strong`, null, `No versions match your filters`),
                    b.createElement(`p`, null, `Try a different version or status.`),
                    hasQuery && b.createElement(T, {
                      className: `secondary`,
                      onClick: clearFilters,
                      children: `Clear filters`,
                    }),
                  ),
                ),
            ]),
          }),
        ),
      }),
    ),
  );
}
function k({ onCancel: e, onPublished: t }) {
  let [n, r] = (0, b.useState)(1),
    [i, a] = (0, b.useState)(`GitHub`),
    [o, s] = (0, b.useState)(``),
    [c, l] = (0, b.useState)(``),
    [u, d] = (0, b.useState)(``),
    [f, p] = (0, b.useState)(!1);
  (0, b.useEffect)(() => {
    if (!f) return;
    function e(e) {
      e.key === `Escape` && p(!1);
    }
    return (
      document.addEventListener(`keydown`, e),
      () => document.removeEventListener(`keydown`, e)
    );
  }, [f]);
  function m() {
    let e = o || `hashi`,
      t = c || `hashi/aws-rds-aurora`;
    (s(e), l(t), d(u || `${t.split(`/`).pop() || `provider`}-coolcorp`), r(3));
  }
  return b.createElement(
    b.Fragment,
    {},
    b.createElement(
      `main`,
      {
        className: `main-content provider-flow`,
      },
      b.createElement(
        `div`,
        {
          className: `provider-page-header`,
        },
        b.createElement(se, {}),
        b.createElement(`h1`, { children: `Add Provider` }),
        b.createElement(
          `p`,
          {},
          `This provider will be created under the current organization,`,
          ` `,
          b.createElement(`strong`, { children: `CoolCorp` }),
          `. Providers can be added from all`,
          ` `,
          b.createElement(`a`, {
            href: `https://developer.hashicorp.com/terraform/cloud-docs/vcs#supported-vcs-providers`,
            rel: `noreferrer`,
            target: `_blank`,
            children: `supported VCS providers`,
          }),
          `.`,
        ),
      ),
      b.createElement(ce, { step: n }),
      n === 1 &&
        b.createElement(ue, {
          onCancel: () => p(!0),
          onSelect: (e) => {
            (a(e), r(2));
          },
        }),
      n === 2 &&
        b.createElement(fe, {
          onCancel: () => p(!0),
          onNext: m,
          onOrganizationChange: s,
          onPrevious: () => r(1),
          onRepositoryChange: l,
          organization: o,
          repository: c,
        }),
      n === 3 &&
        b.createElement(pe, {
          onCancel: () => p(!0),
          onPrevious: () => r(2),
          onPublish: () => t(u),
          providerName: u,
          repository: c,
          setProviderName: d,
          vcsProvider: i,
        }),
    ),
    f &&
      b.createElement(Modal, {
        title: `Stop publishing this provider?`,
        onClose: () => p(!1),
        children: b.createElement(
          b.Fragment,
          {},
          b.createElement(`div`, {
            className: `modal-body`,
            children: b.createElement(`p`, {
              children: `Your progress in this publishing setup won’t be saved. Are you sure you want to stop publishing?`,
            }),
          }),
          b.createElement(
            `div`,
            {
              className: `modal-footer`,
            },
            b.createElement(T, {
              className: `danger`,
              onClick: e,
              children: `Stop publishing`,
            }),
            b.createElement(T, {
              className: `secondary`,
              onClick: () => p(!1),
              children: `Continue publishing`,
            }),
          ),
        ),
      }),
  );
}
function Se() {
  let [e, t] = (0, b.useState)(`library`),
    [role, setRole] = b.useState(`admin`),
    [n, r] = (0, b.useState)(`private`),
    [i, a] = (0, b.useState)(ee),
    [o, s] = (0, b.useState)(te),
    [c, l] = (0, b.useState)(!1),
    [u, d] = (0, b.useState)(null),
    [f, p] = b.useState(() => window.matchMedia("(max-width: 767px)").matches),
    [m, h] = (0, b.useState)(``),
    [g, _] = (0, b.useState)(!1),
    [libraryTab, setLibraryTab] = b.useState(`modules`),
    [selectedProvider, setSelectedProvider] = b.useState(PROVIDERS[0]),
    [deleteKey, setDeleteKey] = b.useState(null),
    [providers, setProviders] = b.useState(PROVIDERS),
    [ingressProgress, setIngressProgress] = b.useState(ge.length),
    [ingressPaused, setIngressPaused] = b.useState(false),
    [ingressCancelled, setIngressCancelled] = b.useState(false),
    [publishedTimes, setPublishedTimes] = b.useState(() =>
      Object.fromEntries(ge.map((item, index) => [
        item.version.slice(1), Date.now() - (ge.length - index) * 3600000,
      ])),
    ),
    v = n === `private` ? i : o;
  const isAdmin = role === `admin`;
  function changeRole(nextRole) {
    setRole(nextRole);
    d(null);
    setDeleteKey(null);
    l(false);
    if (nextRole !== `admin`) setIngressPaused(false);
    if (nextRole !== `admin` && [`versions`, `status`, `publish`, `gpg`].includes(e)) {
      t([`versions`, `status`].includes(e) ? `details` : `library`);
    }
  }
  b.useEffect(() => {
    if (ingressPaused || ingressCancelled || ingressProgress >= ge.length) return;
    const timer = window.setTimeout(() => {
      setPublishedTimes((times) => ({
        ...times,
        [ge[ingressProgress].version.slice(1)]: Date.now(),
      }));
      setIngressProgress((progress) => progress + 1);
    }, 1800);
    return () => window.clearTimeout(timer);
  }, [ingressProgress, ingressPaused, ingressCancelled]);
  const ingressRows = versionRows(ingressProgress, ingressCancelled);
  const publishedVersions = ingressRows
    .filter((item) => item.status === `complete`)
    .map((item) => item.version.slice(1))
    .reverse();
  const providerVersions = {
    version: publishedVersions[0],
    versions: publishedVersions,
    publishedAt: publishedTimes[publishedVersions[0]],
    publishedTimes,
  };
  const failedVersions = ingressRows
    .filter((item) => item.status === `error`)
    .map((item) => item.version.slice(1));
  function y(e) {
    (r(e), d(e), l(!1));
  }
  function C(e) {
    (u === `public` ? s((t) => [...t, e]) : a((t) => [...t, e]),
      d(null),
      h(`GPG key added successfully`),
      window.setTimeout(() => h(``), 2600));
  }
  function w(e) {
    (n === `public`
      ? s((t) => t.filter((t) => t.id !== e))
      : a((t) => t.filter((t) => t.id !== e)),
      h(`GPG key removed`),
      setDeleteKey(null),
      window.setTimeout(() => h(``), 2600));
  }
  function deleteProvider() {
    setProviders((items) =>
      items.filter((item) => item.name !== selectedProvider.name),
    );
    setLibraryTab(`providers`);
    setIngressProgress(ge.length);
    setIngressPaused(false);
    setIngressCancelled(false);
    _(!1);
    t(`library`);
    h(`Provider deleted from organization`);
    window.setTimeout(() => h(``), 2600);
  }
  return b.createElement(
    `div`,
    {
      className: `app-shell ${f ? `nav-collapsed` : ``}`,
    },
    b.createElement(E, { role, onRoleChange: changeRole }),
    b.createElement(ne, {
      activeView: e,
      collapsed: f,
      onNavigate: (view) => {
        t(view);
        if (window.matchMedia("(max-width: 767px)").matches) p(true);
      },
      onToggle: () => p((e) => !e),
      providerName: selectedProvider.name,
      isAdmin,
    }),
    e === `publish`
      ? b.createElement(k, {
          onCancel: () => t(`library`),
          onPublished: (e) => {
            setProviders(PROVIDERS);
            setSelectedProvider(PROVIDERS[0]);
            setIngressProgress(ge.findIndex((item) => item.status === `pending`));
            setIngressPaused(false);
            setIngressCancelled(false);
            setLibraryTab(`providers`);
            (t(`versions`), _(!1));
          },
        })
      : e === `library`
        ? b.createElement(he, {
            isAdmin,
            hasPrivateGpgKey: i.length > 0,
            onAddGpgKey: () => y(`private`),
            onDismissToast: () => _(!1),
            onPublishModule: () => {
              (h(`Module publishing selected`),
                window.setTimeout(() => h(``), 2600));
            },
            onPublishProvider: () => t(`publish`),
            onPublishStack: () => {
              (h(`Stack component configuration publishing selected`),
                window.setTimeout(() => h(``), 2600));
            },
            onViewStatus: () => {
              (_(!1), t(`versions`));
            },
            showPublishToast: g,
            libraryTab,
            providers: providers.map((provider) => ({ ...provider, ...providerVersions })),
            onLibraryTabChange: setLibraryTab,
            onSelectProvider: (provider) => {
              setSelectedProvider(provider);
              t(`details`);
            },
          })
        : e === `status` || e === `versions`
          ? b.createElement(ve, {
              onCancel: () => t(`library`),
              onComplete: () => t(`details`),
              onCancelPublishing: () => {
                setIngressCancelled(true);
                setIngressPaused(false);
              },
              cancelled: ingressCancelled,
              progress: ingressProgress,
              paused: ingressPaused,
              onPause: setIngressPaused,
              publishedTimes,
            })
          : e === `details` || e === `documentation`
            ? b.createElement(ProviderDetails, {
                key: role,
                isAdmin,
                contentTab: e === `documentation` || !isAdmin ? `docs` : `files`,
                onContentTabChange: (tab) => t(tab === `docs` ? `documentation` : `details`),
                provider: { ...selectedProvider, ...providerVersions },
                onBack: () => t(`library`),
                onViewVersions: () => t(`versions`),
                onManageKeys: () => {
                  r(`private`);
                  t(`gpg`);
                },
                onDeleteProvider: deleteProvider,
                ingressComplete: ingressProgress >= ge.length || ingressCancelled,
                failedVersions,
                Header: _e,
              })
            : b.createElement(
                  `main`,
                  {
                    className: `main-content`,
                  },
                  b.createElement(
                    `div`,
                    {
                      className: `page-header`,
                    },
                    b.createElement(
                      `div`,
                      {
                        className: `breadcrumbs`,
                      },
                      b.createElement(`button`, {
                        type: `button`,
                        children: `CoolCorp`,
                      }),
                      b.createElement(`span`, { children: `/` }),
                      b.createElement(`button`, {
                        type: `button`,
                        children: `Registry`,
                      }),
                      b.createElement(`span`, { children: `/` }),
                      b.createElement(`button`, {
                        className: `current`,
                        type: `button`,
                        children: `Manage GPG Keys`,
                      }),
                    ),
                    b.createElement(
                      `div`,
                      {
                        className: `title-row`,
                      },
                      b.createElement(`h1`, {
                        children: `Manage GPG Keys`,
                      }),
                      b.createElement(re, {
                        onOpenChange: l,
                        onSelect: y,
                        open: c,
                      }),
                    ),
                    b.createElement(
                      `div`,
                      {
                        className: `intro`,
                      },
                      b.createElement(`p`, {
                        children: `The Terraform Registry (and Terraform CLI) use GPG to verify signed provider releases.`,
                      }),
                      b.createElement(
                        `p`,
                        {},
                        `For more information, read our documentation on`,
                        ` `,
                        b.createElement(`a`, {
                          href: `https://www.terraform.io/docs/registry/providers/publishing.html`,
                          rel: `noreferrer`,
                          target: `_blank`,
                          children: `Publishing Terraform Providers to the Terraform Registry`,
                        }),
                      ),
                    ),
                  ),
                  b.createElement(
                    `div`,
                    {
                      className: `tabs`,
                      role: `tablist`,
                    },
                    b.createElement(
                      `button`,
                      {
                        "aria-selected": n === `private`,
                        className: n === `private` ? `active` : ``,
                        onClick: () => r(`private`),
                        role: `tab`,
                        type: `button`,
                      },
                      b.createElement(D, { scope: `private` }),
                      b.createElement(`span`, { children: `Private` }),
                    ),
                    b.createElement(
                      `button`,
                      {
                        "aria-selected": n === `public`,
                        className: n === `public` ? `active` : ``,
                        onClick: () => r(`public`),
                        role: `tab`,
                        type: `button`,
                      },
                      b.createElement(D, { scope: `public` }),
                      b.createElement(`span`, {
                        children: `Public Namespaces`,
                      }),
                    ),
                  ),
                  b.createElement(
                    `section`,
                    {
                      className: `keys-content`,
                    },
                    b.createElement(`p`, {
                      className: `microcopy`,
                      children:
                        n === `private`
                          ? `This is a list of GPG keys associated with CoolCorp organization.`
                          : `This is a list of GPG keys associated with your Public Namespaces.`,
                    }),
                    v.length
                      ? b.createElement(`div`, {
                          className: `key-list`,
                          children: v.map((e) =>
                            b.createElement(KeyCard, {
                              item: e,
                              onDelete: () => setDeleteKey(e),
                              key: e.id,
                            }),
                          ),
                        })
                      : b.createElement(O, {
                          onAdd: () => y(n),
                          scope: n,
                        }),
                  ),
                ),
    u &&
      b.createElement(KeyDialog, {
        onClose: () => d(null),
        onSubmit: C,
        scope: u,
        existingKeys: u === `private` ? i : o,
      }),
    deleteKey &&
      b.createElement(ConfirmKeyDeletion, {
        item: deleteKey,
        onClose: () => setDeleteKey(null),
        onConfirm: () => w(deleteKey.id),
      }),
    m &&
      b.createElement(`div`, {
        "aria-live": `polite`,
        className: `toast`,
        role: `status`,
        children: m,
      }),
  );
}
y.createRoot(document.getElementById(`root`)).render(
  b.createElement(b.StrictMode, {
    children: b.createElement(Se, {}),
  }),
);
