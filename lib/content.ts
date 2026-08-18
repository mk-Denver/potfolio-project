export type LinkRef = {
  label: string;
  url: string;
  kind: 'pr' | 'issue' | 'repo' | 'commit' | 'article' | 'external';
};

export type SpecSection = {
  heading: string;
  body: string;
};

export type Spec = {
  pip: string;
  title: string;
  status: 'Draft' | 'Accepted' | 'Final' | 'Merged';
  summary: string;
  sections: SpecSection[];
  links: LinkRef[];
  repo: { name: string; url: string };
};

export type Crate = {
  name: string;
  role: string;
  description: string;
  highlights: string[];
};

export type Workspace = {
  name: string;
  description: string;
  repo: { name: string; url: string };
  crates: Crate[];
  themes: string[];
};

export type Article = {
  slug: string;
  title: string;
  publication: string;
  topic: string;
  date: string;
  summary: string;
  url?: string;
};

export const profile = {
  name: 'Denver Mtange',
  handle: 'mk-Denver',
  role: 'Protocol engineer & technical writer',
  location: 'Kenya',
  tagline:
    'Building open-source protocol infrastructure, Rust developer tooling, and technical writing for the Bitcoin ecosystem.',
  github: 'https://github.com/mk-Denver',
  email: 'mailto:mtangedenver@gmail.com',
  x: 'https://x.com/Btc_Stoic_',
  linkedin: 'https://www.linkedin.com/in/denver-kiravuka-276344240/',
} as const;

export const specs: Spec[] = [
  {
    pip: 'PIP-01 (extended)',
    title: 'Standalone Escrows — Extension to PIP-01',
    status: 'Merged',
    summary:
      'Extension to PIP-01 introducing standalone escrows to the Pontmore protocol — covering escrow creation, funding status observation, release mechanisms, and structured error handling as a self-contained escrow lifecycle layered on top of PIP-01.',
    repo: { name: 'pontmore/protocol', url: 'https://github.com/pontmore/protocol' },
    sections: [
      {
        heading: 'Escrow Creation',
        body: 'Defines the structured creation of a standalone escrow object layered on PIP-01, including the required parties, commitment amounts, and the initial state transitions that gate entry into the funding phase.',
      },
      {
        heading: 'Funding Status Observation',
        body: 'Specifies how observers track the funding state of an escrow, establishing the canonical view of whether an escrow is underfunded, fully funded, or overfunded, and how that state is surfaced to participants.',
      },
      {
        heading: 'Release Mechanisms',
        body: 'Describes the conditional release paths that move funds out of escrow — cooperative release, dispute-driven release, and timeout-based fallback — along with the signals that trigger each path.',
      },
      {
        heading: 'Error Handling',
        body: 'Enumerates the recoverable and non-recoverable failure modes across the lifecycle, prescribing structured error codes and the expected state recovery behavior for each.',
      },
    ],
    links: [
      {
        label: 'PR #12 — Extend PIP-01 with standalone escrows',
        url: 'https://github.com/pontmore/protocol/pull/12',
        kind: 'pr',
      },
      {
        label: 'Issue #13 — Sybil resistance in dispute resolution',
        url: 'https://github.com/pontmore/protocol/issues/13',
        kind: 'issue',
      },
      { label: 'pontmore/protocol', url: 'https://github.com/pontmore/protocol', kind: 'repo' },
    ],
  },
];

export const workspace: Workspace = {
  name: 'descriptor-POC',
  description:
    'A Rust workspace implementing output descriptor parsing and validation rules, structured as composable crates with a proof-of-concept CLI and mock service for end-to-end testing.',
  repo: { name: 'mk-Denver/descriptor-POC', url: 'https://github.com/mk-Denver/descriptor-POC' },
  themes: ['Developer tooling', 'Descriptor parsing & validation', 'Censorship resistance'],
  crates: [
    {
      name: 'descriptor',
      role: 'Core library',
      description:
        'The foundational crate implementing descriptor parsing and the validation rules that govern descriptor correctness, structure, and policy semantics.',
      highlights: [
        'Descriptor parsing into a typed AST',
        'Validation rules for policy structure and key origin',
        'Deterministic checksum handling',
      ],
    },
    {
      name: 'client',
      role: 'Client layer',
      description:
        'A client crate providing the interaction surface for consumers that need to construct, validate, and inspect descriptors against the core rules.',
      highlights: [
        'High-level builder API over the core parser',
        'Validation result reporting for downstream consumers',
        'Decoupled from transport specifics',
      ],
    },
    {
      name: 'poc-cli',
      role: 'Command-line interface',
      description:
        'A proof-of-concept CLI exposing descriptor parsing and validation as a developer-facing command, designed for quick inspection and scripting.',
      highlights: [
        'Parse and validate descriptors from stdin or args',
        'Human-readable validation diagnostics',
        'Composable in shell pipelines',
      ],
    },
    {
      name: 'mock-service',
      role: 'Testing harness',
      description:
        'A mock service crate simulating a descriptor-aware service endpoint, enabling end-to-end testing of the client and CLI against a controlled, predictable backend.',
      highlights: [
        'Predictable simulated responses',
        'Integration test scaffolding for the full workspace',
        'No external network dependencies',
      ],
    },
  ],
};

export const articles: Article[] = [
  {
    slug: 'building-pontmore-from-spec-to-escrow-poc',
    title: 'Building Pontmore: From Protocol Spec to Working Standalone Escrow POC',
    publication: 'DEV Community',
    topic: 'Protocol design',
    date: 'Aug 2026',
    summary:
      'Tracing the path from PIP-01 (discovery-only) through PR #12 (standalone service interface) to PR #17 (simplification) — including the working Lightning escrow POC, its NIP-98 auth architecture, a 50-test integration suite, and what building against an evolving spec teaches you about protocol design.',
    url: 'https://dev.to/mtange/building-pontmore-from-protocol-spec-to-working-standalone-escrow-poc-39gh',
  },
  {
    slug: 'designing-standalone-escrows-in-pontmore-pip-01',
    title: 'Designing Standalone Escrows in Pontmore PIP-01',
    publication: 'Open Bitcoin Africa',
    topic: 'Protocol design',
    date: 'Aug 2026',
    summary:
      'Expanding PIP-01 from discovery-only into a standalone service interface — the `service` block, schema_url vs. event bloat, NIP-98 authentication, split_decision release vocabularies, escrow state machines, deadlock prevention, and the security trade-offs across the lightning_hold_invoice, custodial_escrow, and cashu_escrow subtypes.',
    url: 'https://openbitcoin.africa/t/designing-standalone-escrows-in-pontmore-pip-01/28',
  },
  {
    slug: 'introducing-pontmore-nostr-native-protocol',
    title: 'Introducing Pontmore: a Nostr-native protocol for agent discovery, escrow, and swaps',
    publication: 'Open Bitcoin Africa',
    topic: 'Protocol design',
    date: 'Jul 2026',
    summary:
      'Advertising Pontmore escrow service capabilities directly on Nostr — extending PIP-01 with an optional `service` block (PR #12) so standalone, non-swap applications can discover, parse, and invoke a published escrow service via HTTPS endpoints, NIP-98 authentication, and declared release-decision formats without out-of-band coordination.',
    url: 'https://openbitcoin.africa/t/introducing-pontmore-a-nostr-native-protocol-for-agent-discovery-escrow-and-swaps/16/2',
  },
];

export const focusAreas = [
  {
    key: 'specifications',
    label: 'Protocol Development',
    blurb:
      'Authoring protocol specifications and contributing to the Pontmore protocol core repository.',
    cta: 'View specifications',
  },
  {
    key: 'tooling',
    label: 'Developer Tooling',
    blurb:
      'Building Rust workspace tooling for descriptor parsing, validation, and censorship resistance.',
    cta: 'View tooling',
  },
  {
    key: 'articles',
    label: 'Technical Writing',
    blurb:
      'Technical deep-dives on protocol design, service discovery, and escrow architecture for DEV Community and Open Bitcoin Africa.',
    cta: 'Read articles',
  },
] as const;
