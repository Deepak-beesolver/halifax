// Page content for Home, About, Where We Add Value, Insights.
// Condensed faithfully from the client's draft.

/* ---------------- HOME ---------------- */

export const home = {
  hero: {
    eyebrow: "UK Defence Advisory & International Liaison",
    headline: "Defence consulting for serious decisions in complex environments",
    sub: "Halifax Defence Consulting is a UK-based defence advisory and international liaison firm, established to support organisations working across defence, security, procurement, capability development, hardware systems, technology, risk and governance.",
    support:
      "We help clients and partners bring structure to high-trust decisions where clarity matters, documentation matters and responsible engagement is essential.",
  },
  intro: {
    eyebrow: "Who We Are",
    title: "Bringing order to complexity",
    body: [
      "Defence work is rarely straightforward. A single decision may involve strategic priorities, operational requirements, supplier capability, procurement expectations, international stakeholders, legal and regulatory considerations, sensitive information, commercial risk and reputational consequences. Poor structure at the beginning can create serious problems later.",
      "Halifax exists to help bring order to that complexity. We support clients by helping them define requirements, assess risks, prepare documentation, structure discussions, review supplier information, develop procurement readiness, strengthen governance and approach international engagement responsibly.",
      "We do not believe serious defence-related work should be driven by vague claims or unsupported assumptions. Our approach is built around careful communication, professional restraint, documented reasoning and practical judgement.",
    ],
  },
  // Positioned as a newly incorporated firm — these are principles, not claims.
  measures: [
    { value: "9", label: "Core advisory services" },
    { value: "1", label: "Compliance-first operating principle" },
    { value: "UK", label: "Based, with international reach" },
    { value: "100%", label: "Governance-led delivery" },
  ],
  whatWeDo: {
    eyebrow: "What We Do",
    title: "Advisory, liaison and support — in the space between ambition and decision",
    body: "Many organisations know what they want to achieve, but need support in defining the route, organising the evidence and preparing the right materials for internal or external review. Halifax helps create that structure.",
  },
  whyPillars: [
    {
      title: "Compliance",
      body: "A serious decision should be capable of being explained, evidenced, documented and defended. Where a matter may involve regulated activity, the right questions must be raised early.",
    },
    {
      title: "Structure",
      body: "We help clients move from broad ambition to practical direction — from uncertainty to structure, and from informal discussion to disciplined engagement.",
    },
    {
      title: "Restraint",
      body: "We will not claim approvals, clearances, operational history or capabilities that cannot be evidenced. Credibility in the defence sector is built through accuracy, not overstatement.",
    },
  ],
  process: [
    {
      step: "01",
      title: "Define",
      body: "We establish the objective, the current position, the stakeholders involved and the decisions required — defining the work in plain terms.",
    },
    {
      step: "02",
      title: "Map",
      body: "We review available information, surface untested assumptions and identify what is known, uncertain and missing.",
    },
    {
      step: "03",
      title: "Structure",
      body: "We frame the options, risks and dependencies, and agree appropriate information boundaries where the matter is sensitive.",
    },
    {
      step: "04",
      title: "Deliver",
      body: "We produce decision-ready outputs — briefings, options notes, risk registers and roadmaps — that leadership and partners can act on with confidence.",
    },
  ],
  cta: {
    title: "Ready for a serious, structured conversation?",
    body: "Tell us what you are trying to achieve, where the complexity sits and what decision needs to be supported. We will review your enquiry and respond with a suitable next step, a request for further information, or an honest view if the matter falls outside our scope.",
  },
};

/* ---------------- ABOUT ---------------- */

export const about = {
  hero: {
    eyebrow: "About Halifax",
    title: "Clear thinking for high-trust environments",
    sub: "Halifax Defence Consulting Limited is a UK-based defence consulting and international liaison organisation established to support structured decision-making in complex, sensitive and high-trust environments.",
  },
  intro: [
    "The company has been created for organisations that require clear thinking, disciplined documentation, careful engagement and credible advisory support across defence, security, procurement, capability development, risk, technology, hardware systems and international coordination.",
    "Defence-facing work often involves several layers of complexity. In these environments, assumptions can change quickly, and poorly structured decisions can create significant problems later. Halifax exists to help bring order to that complexity.",
    "We do not believe that serious defence-related work should be driven by vague claims, informal conversations or unsupported assumptions. Our approach is based on structure, evidence, governance and professional restraint.",
  ],
  pillars: [
    {
      title: "Our Purpose",
      body: "To provide serious, structured and compliance-aware advisory support for organisations operating in defence, security and related international markets — helping clients move from uncertainty to clarity, and to ask the right questions before decisions become commitments.",
    },
    {
      title: "Our Mission",
      body: "To support defence and security-facing organisations with clear, practical and professionally governed advisory services that strengthen decision-making, improve procurement readiness, reduce avoidable risk and support responsible international engagement.",
    },
    {
      title: "Our Vision",
      body: "To become a trusted UK defence consulting organisation recognised for disciplined advisory work, careful international liaison, serious governance standards and practical support for clients operating in complex defence and security environments.",
    },
  ],
  approach: {
    title: "Our approach to defence consulting",
    body: [
      "Our work is built around a simple principle: a serious decision should be capable of being explained, evidenced, documented and defended. This applies to strategy, procurement, risk, technology, hardware and international liaison alike.",
      "Halifax begins with a structured discovery stage. We seek to understand the objective, the current position, the stakeholders involved, the decisions required and the constraints that may affect the work. Once the objective is understood, we define a scope that is focused enough to deliver but broad enough to be useful.",
      "We then deliver work in formats decision-makers can use — briefing papers, options notes, risk registers, procurement readiness documents, requirements summaries, stakeholder maps, decision logs, policy notes and implementation plans. Our aim is to make complex work easier to understand, not to make simple matters look complicated.",
    ],
  },
  values: [
    {
      title: "Integrity",
      body: "Advice should be honest, even when the answer is inconvenient. If a proposal appears unrealistic or depends on weak assumptions, we will say so.",
    },
    {
      title: "Clarity",
      body: "In complex environments, unclear language can hide weak reasoning. We define objectives, roles, risks and next steps in plain professional language.",
    },
    {
      title: "Accountability",
      body: "Good work should leave a record. We support proportionate documentation so clients can see what was discussed, agreed and what remains open.",
    },
    {
      title: "Evidence",
      body: "We prefer evidence over assertion. Where a recommendation is made, the reasoning should be visible and the trade-offs understood.",
    },
    {
      title: "Confidentiality",
      body: "We treat confidentiality seriously and expect sensitive information to be shared through appropriate routes, never casual website forms.",
    },
    {
      title: "Practical judgement",
      body: "Our work must be useful. A strategy should support action; a risk assessment should support decisions; a policy should guide behaviour.",
    },
  ],
  whoWeSupport: {
    title: "Who we support",
    body: "Halifax is positioned to support organisations operating in or around defence, security, procurement, technology, capability development, hardware systems and international liaison.",
    list: [
      "Public-sector and government-facing bodies",
      "Defence primes and specialist suppliers",
      "Security organisations",
      "Technology companies",
      "Procurement teams and programme leaders",
      "International partners and professional advisers",
    ],
  },
};

/* ---------------- WHERE WE ADD VALUE ---------------- */

export type Scenario = {
  n: number;
  title: string;
  body: string;
  service: { label: string; href: string };
};

export const scenarios: Scenario[] = [
  {
    n: 1,
    title: "A broad objective but no clear route to delivery",
    body: "Stakeholders may agree that something needs to be done, but not yet agree on what to prioritise, the realistic options or the risks to accept. Halifax helps move from broad ambition to a decision-ready framework leaders can review, challenge and approve.",
    service: { label: "Strategy Advisory", href: "/services/strategy-advisory" },
  },
  {
    n: 2,
    title: "A programme is moving forward but the risks are not understood",
    body: "There may be a risk register, but it may be too broad, too static or disconnected from decisions. Halifax helps build a clearer view of what could affect success, credibility or lawfulness — and what action is required.",
    service: { label: "Risk & Threat Assessment", href: "/services/risk-assessment" },
  },
  {
    n: 3,
    title: "Preparing for procurement but the requirement is not yet mature",
    body: "The organisation may know the outcome it wants, but the requirement may not be written so suppliers can answer consistently or decision-makers can evaluate fairly. Halifax helps clarify the requirement before the process becomes formal.",
    service: { label: "Procurement Support", href: "/services/procurement-support" },
  },
  {
    n: 4,
    title: "Considering defence hardware without manufacturing or holding stock",
    body: "A discussion may involve unmanned systems, radar, communications, protective equipment or sustainment. Halifax does not sell or supply equipment — we help define the requirement, review supplier information and document the decision pathway.",
    service: { label: "Hardware & Systems Advisory", href: "/services/hardware-systems-advisory" },
  },
  {
    n: 5,
    title: "An international discussion needs structure before it becomes formal",
    body: "Conversations can develop faster than the governance around them. Halifax helps define the purpose of engagement, prepare agendas, identify parties, record actions and keep early discussions appropriately framed.",
    service: { label: "Policy & Compliance", href: "/services/policy-compliance" },
  },
  {
    n: 6,
    title: "Understanding whether a supplier is suitable",
    body: "Supplier suitability is not only price or presentation — it involves delivery capacity, governance, ownership, documentation, security awareness and subcontractors. Halifax helps organise the questions before a relationship progresses.",
    service: { label: "Procurement Support", href: "/services/procurement-support" },
  },
  {
    n: 7,
    title: "A technology opportunity looks promising but integration is unclear",
    body: "A solution that looks strong in isolation may not work if the organisation is not ready to adopt it. Halifax helps examine whether the technology fits the wider environment and builds a staged implementation view.",
    service: { label: "Technology Integration", href: "/services/technology-integration" },
  },
  {
    n: 8,
    title: "Capability needs to improve but the gap is unclear",
    body: "The issue may appear to be equipment, but the deeper problem may be training, process, governance or integration. Halifax helps establish a capability baseline, identify gaps and prepare a staged development pathway.",
    service: { label: "Capability Development", href: "/services/capability-development" },
  },
  {
    n: 9,
    title: "Training is needed, connected to real readiness",
    body: "The issue may involve decision-making, incident readiness, procurement awareness or governance. Halifax designs training connected to real capability needs and converts lessons into actions — readiness, not attendance records.",
    service: { label: "Training & Simulation", href: "/services/training-simulation" },
  },
  {
    n: 10,
    title: "Better policies are needed — but not empty paperwork",
    body: "Policies may be too generic, outdated or disconnected from practice. Halifax helps develop practical policies and procedures people can actually use, focused on responsibilities, approval routes and documentation.",
    service: { label: "Policy & Compliance", href: "/services/policy-compliance" },
  },
  {
    n: 11,
    title: "Preparing for a tender or bid partnership",
    body: "A tender can fail not because the capability is weak, but because the response is unclear or poorly structured. Halifax helps shape the response, prepare supporting content, review risks and clarify roles.",
    service: { label: "Tendering", href: "/tendering" },
  },
  {
    n: 12,
    title: "An independent view is needed before committing to a direction",
    body: "Internal teams may be too close to the matter. Halifax provides a short, focused review — assessing risks, clarifying assumptions and producing a decision note — to help prevent premature commitments.",
    service: { label: "Strategy Advisory", href: "/services/strategy-advisory" },
  },
  {
    n: 13,
    title: "A new defence-facing business needs credible operating structure",
    body: "Commercial ambition may exist without the operating structure expected in a sensitive sector. Halifax helps with clearer service descriptions, compliance posture, information-handling rules and governance processes.",
    service: { label: "Policy & Compliance", href: "/services/policy-compliance" },
  },
  {
    n: 14,
    title: "A multi-party programme needs better coordination",
    body: "Without structure, communication becomes fragmented and accountability unclear. Halifax helps establish meeting structures, action trackers, issue logs, role definitions and reporting formats. Coordination is a control mechanism.",
    service: { label: "Capability Development", href: "/services/capability-development" },
  },
  {
    n: 15,
    title: "Exploring a market without making premature claims",
    body: "A client may need to understand stakeholders, procurement routes and risks before committing resources. Halifax helps explore a market carefully and responsibly, keeping the work exploratory until proper review has taken place.",
    service: { label: "Strategy Advisory", href: "/services/strategy-advisory" },
  },
];

/* ---------------- INSIGHTS ---------------- */

export type Insight = {
  title: string;
  body: string;
};

export const insightNotes: Insight[] = [
  {
    title: "Defence consulting requires more than contacts",
    body: "Relationships matter, but they are not enough. Serious advisory work requires structure, documentation, careful communication and a clear understanding of what can properly be discussed at each stage. Credibility comes from discipline, not overstatement.",
  },
  {
    title: "Procurement should begin before the tender",
    body: "Many procurement problems begin before the formal process starts — unclear requirements, weak supplier questions and evaluation criteria that do not match the intended outcome. Good preparation reduces this risk before the process becomes difficult to change.",
  },
  {
    title: "Hardware decisions are capability decisions",
    body: "Equipment must be assessed in relation to purpose, users, training, sustainment, maintenance, integration and compliance context. The question is not whether a piece of equipment performs well on paper, but whether it fits the client's actual capability need.",
  },
  {
    title: "Risk work must lead to decisions",
    body: "A long risk register is not always a useful one. If risks are listed but not prioritised, owned or connected to action, the document creates the appearance of control without improving decision-making. Risk work is a decision-support discipline.",
  },
  {
    title: "International liaison needs boundaries",
    body: "Cross-border engagement can move quickly once parties begin talking. Responsible liaison requires structure — clear purpose, recorded actions, and sensitive information handled properly, with regulated matters reviewed before they progress.",
  },
  {
    title: "Technology integration is not just a technical question",
    body: "Integration often fails because organisations focus too much on the system and not enough on the environment into which it will be introduced — users, processes, training, data, governance, supplier support and long-term sustainment.",
  },
];

export const insightsIntro = [
  "Halifax Defence Consulting is a newly established defence consulting organisation. As the company develops, this section will publish practical commentary, short briefings and structured notes on defence, security, procurement, capability, hardware advisory, policy, compliance, technology integration and international liaison.",
  "We do not intend this section to become a news feed or a place for general opinion. Our aim is to publish useful, careful and professionally written material that helps clients, partners and stakeholders think more clearly about complex defence-facing work.",
];
