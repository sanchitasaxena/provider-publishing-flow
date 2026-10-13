import { React as b, ReactDOM as y } from "./assets/react-runtime.js";
import {
  ProviderDetails,
  ProviderTable,
  KeyDialog,
  KeyCard,
  ConfirmKeyDeletion,
  PROVIDERS,
} from "./workflows.js?v=mock-keys-1";
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
function T({ children: e, className: t = ``, onClick: n, type: r = `button` }) {
  return b.createElement(`button`, {
    className: `action-button ${t}`,
    onClick: n,
    type: r,
    children: e,
  });
}
function E() {
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
}) {
  return e === `status` || e === `details` || e === `versions`
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
          e === `status`
            ? b.createElement(`button`, {
                className: `nav-item active`,
                type: `button`,
                children: `Status`,
              })
            : b.createElement(
                b.Fragment,
                {},
                b.createElement(`button`, {
                  className: `nav-item ${e === `details` ? `active` : ``}`,
                  onClick: () => n(`details`),
                  type: `button`,
                  children: `Overview`,
                }),
                b.createElement(`button`, {
                  className: `nav-item ${e === `versions` ? `active` : ``}`,
                  onClick: () => n(`versions`),
                  type: `button`,
                  children: `Versions`,
                }),
                b.createElement(`button`, {
                  className: `nav-item`,
                  type: `button`,
                  children: `Tags`,
                }),
                b.createElement(`button`, {
                  className: `nav-item`,
                  type: `button`,
                  children: `Testing`,
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
          b.createElement(`button`, {
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
      },
      b.createElement(
        T,
        {
          className: `primary new-key-toggle`,
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
          },
          b.createElement(
            `button`,
            {
              className: `scope-option`,
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
          children: `Select the repository for your provider’s release assets. Check if all required files are present to publish a version successfully .`,
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
                children: `✓`,
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
                children: `Add GPG key ↗`,
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
                children: `Add GPG key ↗`,
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
            href: `#required-files`,
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
                      children: `✓`,
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
}) {
  let [c, l] = (0, b.useState)(!1),
    u = (0, b.useRef)(null);
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
        b.createElement(
          `div`,
          {
            className: `publish-menu`,
            ref: u,
          },
          b.createElement(
            T,
            {
              className: `primary publish-button`,
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
      ? b.createElement(ProviderTable, { onSelectProvider })
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
          `View status`,
          b.createElement(w, { src: C.arrowRight }),
        ),
      ),
  );
}
var ge = [
  { version: `v0.12.0`, commit: `53xc67b`, status: `complete` },
  { version: `v0.13.0`, commit: `89kec67`, status: `complete` },
  {
    version: `v0.14.0`,
    commit: `m68c67d`,
    status: `pending`,
    outcome: `complete`,
  },
  {
    version: `v0.14.1`,
    commit: `88a1b2c`,
    status: `pending`,
    outcome: `error`,
  },
  {
    version: `v0.15.0`,
    commit: `e34f9a0`,
    status: `pending`,
    outcome: `complete`,
  },
  {
    version: `v0.15.1`,
    commit: `22ff61d`,
    status: `pending`,
    outcome: `error`,
  },
  {
    version: `v0.16.0`,
    commit: `fa77c22`,
    status: `pending`,
    outcome: `complete`,
  },
  {
    version: `v0.16.1`,
    commit: `9c8b7e6`,
    status: `pending`,
    outcome: `complete`,
  },
  {
    version: `v0.17.0`,
    commit: `a2b4c6d8`,
    status: `pending`,
    outcome: `complete`,
  },
  {
    version: `v0.17.1`,
    commit: `f1e3d5b7`,
    status: `pending`,
    outcome: `complete`,
  },
];
function _e({ current: e }) {
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
        children: `aws`,
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
            children: `◇ Tag based`,
          }),
        ),
        b.createElement(`p`, {
          children: `Provider works with Terraform and can do 1 2 3 4 5.`,
        }),
      ),
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
function ve({ onCancel: e, onComplete: t }) {
  let [n, r] = (0, b.useState)(ge.findIndex((e) => e.status === `pending`)),
    [i, a] = (0, b.useState)(!1),
    o = n >= ge.length;
  (0, b.useEffect)(() => {
    if (i) return;
    let e = window.setTimeout(
      () => {
        n < ge.length ? r((e) => e + 1) : t();
      },
      o ? 1400 : 1800,
    );
    return () => window.clearTimeout(e);
  }, [n, t, i, o]);
  let s = ge[n]?.version;
  return b.createElement(
    `main`,
    {
      className: `main-content provider-detail-page`,
    },
    b.createElement(_e, { current: `status` }),
    b.createElement(
      `section`,
      {
        className: `status-alert ${i ? `cancelled` : o ? `complete` : ``}`,
      },
      i
        ? b.createElement(`span`, {
            className: `status-cancelled-mark`,
            children: `×`,
          })
        : o
          ? b.createElement(`span`, {
              className: `status-complete-mark`,
              children: `✓`,
            })
          : b.createElement(`span`, {
              className: `loading-icon`,
              children: b.createElement(w, { src: C.loading }),
            }),
      b.createElement(
        `div`,
        {},
        b.createElement(`strong`, {
          children: i
            ? `Provider publishing was canceled.`
            : o
              ? `Publishing complete. Opening versions...`
              : `Publishing ${s}...`,
        }),
        b.createElement(`p`, {
          children: i
            ? `Versions that finished processing are still available. The active and queued versions were not published.`
            : o
              ? `The processed versions are ready to review.`
              : `A few versions still need to be published before this provider can be used....`,
        }),
        i
          ? b.createElement(T, {
              className: `secondary`,
              onClick: e,
              children: `Return to private library`,
            })
          : !o &&
              b.createElement(T, {
                className: `secondary`,
                onClick: () => a(!0),
                children: `Cancel`,
              }),
      ),
    ),
    b.createElement(
      `section`,
      {
        className: `queue-section`,
      },
      b.createElement(`div`, {
        className: `queue-heading`,
        children: b.createElement(`h2`, { children: `Version Queue` }),
      }),
      b.createElement(`div`, {
        className: `queue-list`,
        children: ge.map((e, t) => {
          let r =
            e.status === `pending`
              ? i && t === n
                ? `cancelled`
                : i && t > n
                  ? `not-published`
                  : t < n
                    ? e.outcome || `complete`
                    : t === n
                      ? `pending`
                      : `queued`
              : e.status;
          return b.createElement(
            `button`,
            {
              className: `queue-item ${r}`,
              type: `button`,
              key: e.version,
            },
            b.createElement(`span`, {
              className: `queue-status-icon`,
              children:
                r === `complete`
                  ? b.createElement(w, { src: C.statusCheck })
                  : r === `error`
                    ? b.createElement(w, { src: C.statusError })
                    : r === `queued`
                      ? b.createElement(`span`, {
                          className: `queued-dot`,
                        })
                      : r === `cancelled`
                        ? b.createElement(`span`, {
                            className: `cancelled-dot`,
                            children: `×`,
                          })
                        : r === `not-published`
                          ? b.createElement(`span`, {
                              className: `not-published-dot`,
                              children: `–`,
                            })
                          : b.createElement(`span`, {
                              className: `loading-icon`,
                              children: b.createElement(w, {
                                src: C.loading,
                              }),
                            }),
            }),
            b.createElement(`strong`, { children: e.version }),
            b.createElement(`span`, {
              className: `queue-age`,
              children:
                e.status === `pending`
                  ? r === `complete`
                    ? `Just published`
                    : r === `error`
                      ? `Publishing failed`
                      : r === `cancelled`
                        ? `Publishing canceled`
                        : r === `not-published`
                          ? `Not published`
                          : r === `pending`
                            ? `Publishing now`
                            : `Queued`
                  : `2 hours ago`,
            }),
            b.createElement(
              `span`,
              {
                className: `queue-commit`,
              },
              b.createElement(w, { src: C.gitCommit }),
              e.commit,
            ),
            r === `error` &&
              b.createElement(
                `span`,
                {
                  className: `queue-error`,
                },
                b.createElement(w, { src: C.statusWarning }),
                `VCS Publishing Error`,
              ),
          );
        }),
      }),
      b.createElement(
        `div`,
        {
          className: `queue-pagination`,
        },
        b.createElement(`button`, {
          type: `button`,
          children: `‹ Previous`,
        }),
        b.createElement(`button`, { type: `button`, children: `Next ›` }),
      ),
    ),
  );
}
var be = [
  { version: `v0.12.0`, status: `Ok` },
  { version: `v0.13.0`, status: `Ok` },
  { version: `v0.14.0`, status: `Ok` },
  { version: `v0.14.1`, status: `Error`, error: `Error: VCS Publishing error` },
  { version: `v0.15.0`, status: `Ok` },
  { version: `v0.15.1`, status: `Error`, error: `Error: VCS Publishing error` },
  { version: `v0.16.0`, status: `Ok` },
  { version: `v0.16.1`, status: `Ok` },
  { version: `v0.17.0`, status: `Ok` },
  { version: `v0.17.1`, status: `Ok` },
];
function xe() {
  let [e, t] = (0, b.useState)(`v0.14.1`);
  return b.createElement(
    `main`,
    {
      className: `main-content versions-page`,
    },
    b.createElement(
      `div`,
      {
        className: `breadcrumbs`,
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
        children: `Versions`,
      }),
    ),
    b.createElement(`h1`, { children: `Versions` }),
    b.createElement(`code`, { children: `provider: aws_rds_aurora` }),
    b.createElement(
      `div`,
      {
        className: `versions-heading`,
      },
      b.createElement(
        `h2`,
        {},
        `Versions `,
        b.createElement(`span`, { children: `10` }),
      ),
      b.createElement(`p`, {
        children: `Manage the versions of this module.`,
      }),
    ),
    b.createElement(
      `section`,
      {
        className: `versions-table-shell`,
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
      ),
      b.createElement(`div`, {
        className: `versions-table-wrap`,
        children: b.createElement(
          `table`,
          {
            className: `versions-table`,
          },
          b.createElement(`thead`, {
            children: b.createElement(
              `tr`,
              {},
              b.createElement(`th`, { children: `Version` }),
              b.createElement(`th`, { children: `Status` }),
              b.createElement(`th`, { children: `Published` }),
              b.createElement(`th`, { children: `Environment tags` }),
              b.createElement(`th`, { children: `Downloads` }),
              b.createElement(`th`, { children: `Actions` }),
            ),
          }),
          b.createElement(`tbody`, {
            children: be.map((n) =>
              b.createElement(
                b.Fragment,
                {
                  key: n.version,
                },
                b.createElement(
                  `tr`,
                  {},
                  b.createElement(`td`, {
                    children: b.createElement(
                      `button`,
                      {
                        className: `version-expand`,
                        onClick: () => t(e === n.version ? `` : n.version),
                        type: `button`,
                      },
                      n.error ? (e === n.version ? `⌃` : `⌄`) : ``,
                      b.createElement(`strong`, {
                        children: n.version,
                      }),
                    ),
                  }),
                  b.createElement(`td`, {
                    children: b.createElement(
                      `span`,
                      {
                        className: `version-status ${n.status.toLowerCase()}`,
                      },
                      n.status === `Ok` ? `✓` : `△`,
                      ` `,
                      n.status,
                    ),
                  }),
                  b.createElement(`td`, {
                    children: `March 28, 2026`,
                  }),
                  b.createElement(`td`, {}),
                  b.createElement(`td`, { children: `⇩ 12` }),
                  b.createElement(`td`, {
                    children: b.createElement(`button`, {
                      className: `row-menu`,
                      type: `button`,
                      children: `…`,
                    }),
                  }),
                ),
                n.error &&
                  e === n.version &&
                  b.createElement(`tr`, {
                    className: `version-error-row`,
                    children: b.createElement(`td`, {
                      colSpan: 6,
                      children: n.error,
                    }),
                  }),
              ),
            ),
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
      b.createElement(`div`, {
        "aria-labelledby": `cancel-publishing-title`,
        "aria-modal": `true`,
        className: `modal-overlay`,
        role: `dialog`,
        children: b.createElement(
          `section`,
          {
            className: `modal cancel-publishing-modal`,
          },
          b.createElement(
            `div`,
            {
              className: `modal-header`,
            },
            b.createElement(`h2`, {
              id: `cancel-publishing-title`,
              children: `Stop publishing this provider?`,
            }),
            b.createElement(`button`, {
              "aria-label": `Close`,
              className: `dismiss-button`,
              onClick: () => p(!1),
              type: `button`,
              children: b.createElement(w, { src: C.x }),
            }),
          ),
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
    v = n === `private` ? i : o;
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
  return b.createElement(
    `div`,
    {
      className: `app-shell ${f ? `nav-collapsed` : ``}`,
    },
    b.createElement(E, {}),
    b.createElement(ne, {
      activeView: e,
      collapsed: f,
      onNavigate: (view) => {
        t(view);
        if (window.matchMedia("(max-width: 767px)").matches) p(true);
      },
      onToggle: () => p((e) => !e),
      providerName: selectedProvider.name,
    }),
    e === `publish`
      ? b.createElement(k, {
          onCancel: () => t(`library`),
          onPublished: (e) => {
            (t(`library`), _(!0));
          },
        })
      : e === `library`
        ? b.createElement(he, {
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
              (_(!1), t(`status`));
            },
            showPublishToast: g,
            libraryTab,
            onLibraryTabChange: setLibraryTab,
            onSelectProvider: (provider) => {
              setSelectedProvider(provider);
              t(`details`);
            },
          })
        : e === `status`
          ? b.createElement(ve, {
              onCancel: () => t(`library`),
              onComplete: () => t(`details`),
            })
          : e === `details`
            ? b.createElement(ProviderDetails, {
                provider: selectedProvider,
                onBack: () => t(`library`),
                onViewVersions: () => t(`versions`),
                onManageKeys: () => {
                  r(`private`);
                  t(`gpg`);
                },
                signingKeys: i,
              })
            : e === `versions`
              ? b.createElement(xe, {})
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
