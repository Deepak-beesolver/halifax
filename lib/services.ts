// The nine core Halifax services. Content condensed faithfully from the
// client's draft. `icon` maps to a lucide-react icon (see components/ServiceIcon).

export type ServiceSection = {
  heading: string;
  body: string[];
};

export type Service = {
  slug: string;
  title: string;
  shortTitle: string;
  icon: string;
  tagline: string;
  summary: string;
  seoTitle: string;
  metaDescription: string;
  intro: string[];
  sections: ServiceSection[];
  delivers: string[];
  forWho: string;
  related: string[];
};

export const services: Service[] = [
  {
    slug: "strategy-advisory",
    title: "Strategy Advisory",
    shortTitle: "Strategy Advisory",
    icon: "Compass",
    tagline: "From broad objectives to decision-ready direction.",
    summary:
      "We turn broad ambition into clear, approved and actionable strategy — identifying priorities, constraints, options and the most realistic sequence of action.",
    seoTitle: "Defence Strategy Advisory",
    metaDescription:
      "Strategy advisory for defence and security-facing organisations — turning broad objectives into clear, decision-ready direction that can be approved and acted upon.",
    intro: [
      "Strategy is not a slogan, and it is not simply a slide deck prepared for a meeting. In defence and security-facing work, strategy is the disciplined connection between ambition, reality and action — the bridge between national priorities, institutional objectives, operational requirements, commercial constraints and what can genuinely be delivered.",
      "Halifax supports clients who need strategy that can be understood, approved and acted upon. Our role is to help turn broad direction into clear choices: what matters most, where the risks sit, which priorities come first, and what sequence of action is most likely to produce a credible result.",
      "A strategy that cannot be explained, measured or implemented is not a strategy. It is an aspiration. We help clients move beyond aspiration and towards structured, practical direction.",
    ],
    sections: [
      {
        heading: "Bringing order to complexity",
        body: [
          "In defence-related environments, strategic decisions are rarely simple. A single decision may need to satisfy senior leadership, procurement teams, commercial partners, technical advisers, legal reviewers and external stakeholders at the same time.",
          "Our work begins with understanding the client's objective — what the organisation is trying to achieve, why it matters, what constraints exist and what conditions must be satisfied before a decision can move forward. Many programmes lose time when work begins before the real question has been defined.",
        ],
      },
      {
        heading: "Priorities, sequencing and trade-offs",
        body: [
          "In complex defence environments, not everything can be done at once. We help clients distinguish between urgent, important, optional and premature activity, so that effort is directed where it will have the greatest value.",
          "Every serious decision involves compromise. Time, cost, capability, risk, compliance and stakeholder appetite all shape what is realistic. Halifax makes these trade-offs visible, so decision-makers understand not only what is recommended, but what was considered and ruled out, and why.",
        ],
      },
      {
        heading: "Strategy that survives scrutiny",
        body: [
          "Strong strategy must survive review. A reviewer should be able to follow the reasoning, see the assumptions, understand the options considered and identify the basis for a recommendation. We support decision logs, structured notes, roadmaps and briefing papers that maintain a clear record of thinking.",
          "A good strategy also needs flexibility. Defence environments change quickly. We help clients find the right balance: enough structure to guide action, enough discipline to support governance, and enough flexibility to adapt when new information emerges.",
        ],
      },
    ],
    delivers: [
      "Strategic briefs and options papers",
      "Stakeholder maps and decision frameworks",
      "Engagement plans and capability roadmaps",
      "Priority schedules and implementation pathways",
      "Risk summaries written for governance review",
    ],
    forWho:
      "Government bodies, public-sector organisations, defence primes, security and technology companies, specialist suppliers, international partners, boards, investors, programme leaders and senior decision-makers who need a clearer route through complexity before committing resources.",
    related: ["risk-assessment", "capability-development", "technology-integration"],
  },
  {
    slug: "hardware-systems-advisory",
    title: "Hardware and Systems Advisory",
    shortTitle: "Hardware & Systems",
    icon: "Radar",
    tagline: "Advisory and liaison — never sale or supply.",
    summary:
      "Structured advisory support around defence hardware and specialist systems: requirements, capability fit, supplier review, procurement readiness and sustainment.",
    seoTitle: "Defence Hardware and Systems Advisory",
    metaDescription:
      "Advisory support for defence hardware, systems, supplier engagement, procurement readiness, capability fit and responsible liaison. Halifax does not manufacture, stock or sell equipment.",
    intro: [
      "Defence hardware and systems form a critical part of national security, operational readiness and long-term capability. But equipment decisions should never be treated as simple product selection. Hardware must be considered in relation to purpose, capability, end use, training, sustainment, procurement rules, integration, supply-chain resilience and regulatory approvals.",
      "Halifax supports clients who require structured advisory and liaison support around defence hardware, security equipment and specialist systems. We help organisations define requirements, evaluate options, engage suppliers in a disciplined manner, prepare procurement information and consider the wider implications of hardware decisions.",
      "Halifax does not manufacture, stock, sell or supply defence equipment through this website. We are not a manufacturer, distributor or public sales platform. Our work is advisory, liaison-based and governance-focused.",
    ],
    sections: [
      {
        heading: "Requirement definition and capability fit",
        body: [
          "The first question in any hardware discussion should be: what capability is required? The answer should not begin with a product name. It should begin with the operational, organisational or security outcome the client is trying to achieve.",
          "A hardware option may be strong on paper but unsuitable in practice — difficult to maintain, hard to integrate, unsupported locally or poorly aligned with user capability. We help clients examine these issues before decisions are made.",
        ],
      },
      {
        heading: "Categories we can advise on",
        body: [
          "Subject always to lawful scope and any required approvals, Halifax can support advisory work across unmanned and counter-unmanned systems, radar and sensor systems, communications and command-and-control, electronic warfare and spectrum systems, protective and security equipment, armoured and tactical mobility, soldier and field support systems, and training and simulation equipment.",
          "Highly regulated categories — such as ammunition, munitions and certain security or public-order equipment — require particular caution and must be carefully framed and properly reviewed before progressing. We help clients organise high-level requirements and identify where specialist regulatory or legal review is required.",
        ],
      },
      {
        heading: "Supplier engagement and procurement readiness",
        body: [
          "Halifax helps clients engage suppliers and specialist partners in a professional, documented manner — preparing questions, structuring meetings, recording actions and identifying further information required. The aim is useful information, not premature commitment.",
          "Hardware decisions should be supported by clear documentation: requirement notes, supplier information summaries, comparison frameworks, risk notes and procurement readiness papers. Procurement readiness means the client understands what it is asking for, what information it needs and how responses may be assessed.",
        ],
      },
      {
        heading: "Integration, sustainment and compliance",
        body: [
          "Hardware must be integrated into a real environment of users, facilities, maintenance, procedures, training and supplier support. A hardware decision without an integration plan can lead to underused or difficult-to-sustain capability. A hardware option that cannot be sustained should not be treated as a complete capability.",
          "Where work involves controlled goods, controlled technology, export controls, trade controls, sanctions, end-use requirements or formal approvals, the matter must be assessed through the appropriate process before activity progresses. Clients should not send controlled or classified material through public website forms.",
        ],
      },
    ],
    delivers: [
      "Hardware requirement documents and supplier question sets",
      "Capability-fit assessments and supplier response summaries",
      "Procurement readiness notes and risk summaries",
      "Integration consideration and sustainment review notes",
      "Stakeholder engagement plans and governance briefings",
    ],
    forWho:
      "Government bodies, defence primes, security organisations, specialist suppliers, technology companies, international partners and programme teams defining requirements, reviewing supplier options or considering hardware as part of a wider programme.",
    related: ["procurement-support", "capability-development", "technology-integration", "policy-compliance"],
  },
  {
    slug: "risk-assessment",
    title: "Risk and Threat Assessment",
    shortTitle: "Risk & Threat",
    icon: "ShieldAlert",
    tagline: "Risk understood, prioritised and connected to decisions.",
    summary:
      "Decision-focused risk work that helps leadership see what can be controlled, what must be escalated, what should be monitored and what may need to be accepted.",
    seoTitle: "Risk and Threat Assessment",
    metaDescription:
      "Practical, decision-focused risk and threat assessment for defence and security-facing organisations — prioritised, owned and connected to real decisions.",
    intro: [
      "Risk in defence and security-facing work cannot be treated as a routine checklist. It must be understood, prioritised and connected to real decisions. Risk rarely sits in one place — it may arise from the operating context, the supply chain, the political environment, the reliability of partners or the organisation's own ability to deliver.",
      "Many risk assessments fail because they create volume without clarity. A list of risks is not the same as risk management. If risks are not prioritised, owned, reviewed and connected to action, the process becomes administrative rather than useful.",
      "Halifax approaches risk and threat assessment as a decision-support function. The aim is not to remove all risk — that is rarely possible — but to ensure risk is understood honestly and managed deliberately.",
    ],
    sections: [
      {
        heading: "What we assess",
        body: [
          "Depending on the matter, we assess strategic, operational, stakeholder, supplier and supply-chain, information and confidentiality, compliance and reputational risk. We do not treat all risks as equal, and we do not apply a generic template without first understanding the environment.",
          "In the defence sector, reputation is a serious asset. Poorly structured engagements, unclear counterparties or casual language can create concern even where the underlying intention is legitimate. We help clients consider how their actions may be viewed by partners, authorities and procurement teams.",
        ],
      },
      {
        heading: "Testing whether controls are real",
        body: [
          "Many organisations list mitigations that sound reassuring but are not actually in place, funded, owned or monitored. We test whether controls are practical. If a control depends on a person, process or approval that does not yet exist, it should not be treated as protection.",
          "A risk without an owner is rarely managed properly. Each significant risk should have a responsible person, a review point and a clear understanding of what action is required.",
        ],
      },
      {
        heading: "Making risk useful for decision-makers",
        body: [
          "Phrases such as “high risk” or “medium risk” are not enough on their own. We explain why a risk is serious, what would happen if it materialised, who would be affected, what action is available and what decision is required now.",
          "We also help clients distinguish between risk, issue and uncertainty — and, where the work is ongoing, establish a review rhythm matched to the seriousness and pace of the engagement.",
        ],
      },
    ],
    delivers: [
      "Risk assessment reports and prioritised risk registers",
      "Threat summaries and stakeholder risk maps",
      "Supplier risk notes and mitigation plans",
      "Escalation frameworks and decision briefings",
      "Programme risk reviews with a defined review rhythm",
    ],
    forWho:
      "Government bodies, defence primes, public-sector organisations, security firms, specialist suppliers, technology companies, international partners, boards, programme teams and senior leaders — particularly where a matter involves multiple stakeholders, cross-border engagement or sensitive information.",
    related: ["strategy-advisory", "procurement-support", "policy-compliance"],
  },
  {
    slug: "procurement-support",
    title: "Procurement Support",
    shortTitle: "Procurement Support",
    icon: "ClipboardCheck",
    tagline: "Good procurement begins before the tender.",
    summary:
      "Preparation, structuring and decision support that make procurement clearer, more defensible and aligned with the realities of defence-facing work.",
    seoTitle: "Defence Procurement Support",
    metaDescription:
      "Procurement support for defence and security-facing organisations — clarifying requirements, structuring evaluation, reviewing suppliers and building defensible decisions.",
    intro: [
      "Defence procurement is not simply a purchasing exercise. It is a structured decision-making process where strategic intent, operational need, public accountability, commercial discipline and risk management come together.",
      "Halifax helps clients prepare properly before they enter discussions, issue requirements, assess suppliers or commit to a procurement route. A weak process often begins with unclear requirements — too vague and suppliers respond inconsistently; too narrow and better options are excluded.",
      "We do not treat procurement support as a paperwork exercise. We see it as a way of improving decision quality, managing risk earlier and avoiding avoidable delays once formal engagement begins.",
    ],
    sections: [
      {
        heading: "A security and governance activity",
        body: [
          "In the defence sector, procurement choices become operational reality. The wrong specification, partner, assumptions or contract structure can later appear as a delivery failure, capability gap, governance issue or reputational problem.",
          "Procurement cannot be judged only by price or speed. A low-cost option may carry hidden risk; a fast route may create documentation gaps. We help clients consider decisions in a wider context so the commercial process supports the strategic objective.",
        ],
      },
      {
        heading: "Where we support",
        body: [
          "We help clarify the purpose of the procurement, prepare clear and proportionate requirements, review the supplier landscape, support tender readiness and strengthen evaluation thinking. A process is only as strong as the criteria used to assess responses.",
          "We also support procurement governance — decision logs, internal approval papers, risk summaries, supplier review notes and clarification trackers that create a clear audit trail rather than relying on memory or informal discussion.",
        ],
      },
      {
        heading: "Supplier review and due diligence",
        body: [
          "Supplier capability is not just whether an organisation says it can deliver. We help clients consider stated capability, experience, governance, ownership, delivery capacity, financial resilience, information handling, subcontracting and reputation.",
          "In many defence environments the immediate supplier is only one part of a wider chain. We help clients understand who else is involved, what dependencies exist and whether risks sit beyond the first-level relationship — before commitments become difficult to reverse.",
        ],
      },
    ],
    delivers: [
      "Procurement readiness reviews and requirements documents",
      "Supplier review frameworks and due-diligence checklists",
      "Tender support material and evaluation criteria",
      "Clarification questions and risk summaries",
      "Decision logs, governance packs and internal briefing notes",
    ],
    forWho:
      "Public-sector bodies, defence primes, security organisations, technology companies, specialist suppliers, international partners, programme teams and senior leaders involved in defence-facing or security-related procurement.",
    related: ["risk-assessment", "policy-compliance", "technology-integration"],
  },
  {
    slug: "capability-development",
    title: "Capability Development",
    shortTitle: "Capability",
    icon: "Layers",
    tagline: "Capability is more than equipment.",
    summary:
      "Helping organisations define, assess and strengthen capability across people, process, systems, training, governance and sustainment.",
    seoTitle: "Capability Development",
    metaDescription:
      "Capability development for defence and security-facing organisations — defining requirements, assessing gaps and building realistic, measurable development pathways.",
    intro: [
      "Capability is not simply equipment, technology or ambition. It is the ability to achieve a defined outcome reliably, responsibly and repeatedly. It depends on people, processes, systems, training, governance, information, supply chains, leadership and the ability to sustain performance over time.",
      "Many organisations speak about capability without defining it clearly. If capability is not defined, it cannot be assessed; if it cannot be assessed, it cannot be improved. Halifax helps clients establish a clearer foundation.",
      "A common mistake is to treat capability development as a procurement issue only. A new system or partner will not create lasting capability if the organisation lacks the right training, governance, procedures, support model and integration plan.",
    ],
    sections: [
      {
        heading: "Defining the requirement and current position",
        body: [
          "We help clients define the capability requirement in a way that can be understood, reviewed and acted upon — the intended outcome, the users, the constraints and the standard of performance expected. We help separate needs from preferences.",
          "Before developing capability, an organisation must understand its current position. A gap may not be caused by lack of technology — it may be unclear ownership, weak procedures, insufficient training or poor integration. We help identify the real issue so the response is properly targeted.",
        ],
      },
      {
        heading: "A practical development pathway",
        body: [
          "Capability development should be staged. Some foundations must be in place before more advanced activity can succeed — governance clarified before delivery, training designed before a system is used effectively. We help build a plan that is ambitious enough to create progress but grounded enough to be delivered.",
          "We also help clients consider what minimum viable capability looks like — a controlled stage on a wider development path, not an excuse for weak governance or incomplete planning.",
        ],
      },
      {
        heading: "Readiness, adoption and sustainment",
        body: [
          "Readiness determines whether an organisation can use a capability effectively. We help clients assess honestly whether people, processes, facilities, systems, training and support arrangements are ready — before time and money are committed.",
          "Capability must be integrated and sustained over time through training, supplier management, performance monitoring and documentation. We help clients include sustainment thinking from the outset rather than treating it as an afterthought.",
        ],
      },
    ],
    delivers: [
      "Capability reviews and gap analysis reports",
      "Capability roadmaps and readiness assessments",
      "Implementation plans and stakeholder maps",
      "Training needs summaries and governance frameworks",
      "Risk reviews and progress reporting structures",
    ],
    forWho:
      "Government bodies, defence primes, security organisations, technology firms, specialist suppliers, public-sector organisations, international partners and senior teams responsible for improving performance or readiness.",
    related: ["strategy-advisory", "training-simulation", "technology-integration", "risk-assessment"],
  },
  {
    slug: "cyber-intelligence",
    title: "Cyber and Intelligence",
    shortTitle: "Cyber & Intelligence",
    icon: "ShieldCheck",
    tagline: "Lawful, practical, decision-focused.",
    summary:
      "Cyber risk awareness, information governance, intelligence process design and decision support — focused on what matters, not technical jargon.",
    seoTitle: "Cyber and Intelligence Consulting",
    metaDescription:
      "Cyber and intelligence consulting for defence and security-facing organisations — risk awareness, information governance, intelligence processes and decision support.",
    intro: [
      "In modern defence and security-facing environments, cyber and intelligence are central to how organisations understand threats, protect information, support decisions and maintain confidence. A weak approach to cyber risk can expose sensitive information; a weak intelligence process can leave decision-makers reacting late.",
      "Our focus is not on technical jargon or unnecessary complexity. It is on helping organisations understand what matters, protect what is sensitive, organise information properly and use intelligence in a way that supports better decisions.",
      "We support lawful, responsible and decision-focused activity. We do not support unauthorised access, intrusive activity, covert collection or unlawful surveillance.",
    ],
    sections: [
      {
        heading: "Cyber risk and information protection",
        body: [
          "Cyber risk is not limited to external attacks. It also includes weak access control, unmanaged data sharing, unclear responsibilities and inadequate response planning. In sensitive environments, how information is stored, shared and discussed can matter as much as the technology used to protect it.",
          "A good approach identifies what information is most important and why. We help clients make these distinctions so controls are proportionate and practical, and so everyday working practices do not undermine policies that look strong on paper.",
        ],
      },
      {
        heading: "Intelligence processes and analytical discipline",
        body: [
          "Intelligence is more than gathering information. It is a clear process for deciding what is needed, how reliable it is, how it should be interpreted and how it should be presented to those who must act. A common weakness is the absence of clear questions.",
          "We help clients begin with the decision and work backwards, and distinguish between information, assessment and judgement so decision-makers can see the basis for each conclusion.",
        ],
      },
      {
        heading: "Supplier risk, incident readiness and governance",
        body: [
          "Many cyber risks enter through suppliers and partners. We help clients consider information risk across the wider supplier environment — who has access, what systems are used, what subcontractors are involved and what happens if there is an incident.",
          "The best time to prepare for an incident is before one occurs. We help develop practical escalation routes, responsibility maps and response checklists, and reporting structures that make cyber and intelligence information usable for leadership.",
        ],
      },
    ],
    delivers: [
      "Cyber risk reviews and information handling assessments",
      "Intelligence process reviews and reporting templates",
      "Supplier cyber risk summaries",
      "Incident readiness plans and governance frameworks",
      "Leadership briefing materials and improvement roadmaps",
    ],
    forWho:
      "Government bodies, defence primes, security organisations, technology firms, specialist suppliers, international partners, programme teams and senior leaders handling sensitive information, reviewing suppliers or strengthening internal governance.",
    related: ["policy-compliance", "risk-assessment", "technology-integration"],
  },
  {
    slug: "training-simulation",
    title: "Training and Simulation",
    shortTitle: "Training & Simulation",
    icon: "GraduationCap",
    tagline: "Readiness, not attendance records.",
    summary:
      "Training, tabletop exercises, decision workshops and simulation designed to improve readiness, decision-making, coordination and organisational learning.",
    seoTitle: "Training and Simulation",
    metaDescription:
      "Training and simulation support for defence and security-facing organisations — improving readiness, decision-making, coordination, governance and organisational learning.",
    intro: [
      "Training is not simply an activity delivered to fill a calendar. In defence and security-facing environments, training should strengthen readiness, improve judgement, clarify responsibilities and help organisations perform with confidence when decisions matter.",
      "Simulation has a similar purpose. It allows organisations to test assumptions, rehearse decision-making, examine communication lines and identify weaknesses before they become real problems. Its value is not drama — it is seeing how an organisation behaves when plans meet pressure.",
      "Halifax helps clients use training and simulation as serious tools for improvement. Training should not end when the session ends. It should leave the organisation stronger, clearer and better prepared.",
    ],
    sections: [
      {
        heading: "Designed around real organisational need",
        body: [
          "Many training programmes fail by starting with content rather than purpose. We help clients define what the training is meant to achieve first — the problem it solves, the decisions people must make, the behaviours that need to improve.",
          "We then design training that is relevant, proportionate and usable, matching format to audience. A board-level session should not look like a staff induction; a programme readiness exercise should not look like a classroom presentation.",
        ],
      },
      {
        heading: "Tabletop exercises and decision workshops",
        body: [
          "Tabletop exercises bring stakeholders together to examine how a team would respond to a situation — testing coordination, leadership response, escalation routes and decision-making under uncertainty. The value comes from the quality of discussion and the honesty of the review.",
          "Simulation can reveal gaps that are invisible in written procedures. A policy may appear clear, but a scenario may show that the escalation route is not understood. We design exercises that remain appropriate, lawful and proportionate.",
        ],
      },
      {
        heading: "Capturing lessons and turning them into improvement",
        body: [
          "Training and simulation are only valuable if the learning is captured and used. We help clients record what happened, what worked, what needs improvement and what actions should follow — with clear owners and timescales.",
          "Many organisations identify lessons but do not embed them. Our approach keeps the focus on practical improvement, moving from learning to implementation.",
        ],
      },
    ],
    delivers: [
      "Training needs assessments and workshop plans",
      "Tabletop exercise packs and scenario materials",
      "Facilitator notes and participant briefings",
      "Lessons-learned reports and action plans",
      "Governance summaries and improvement roadmaps",
    ],
    forWho:
      "Government bodies, defence primes, public-sector organisations, security firms, specialist suppliers, technology companies, international partners, programme teams and senior leaders who need to improve readiness, test governance or embed lessons.",
    related: ["capability-development", "risk-assessment", "policy-compliance"],
  },
  {
    slug: "policy-compliance",
    title: "Policy and Compliance",
    shortTitle: "Policy & Compliance",
    icon: "Scale",
    tagline: "Serious process for serious activity.",
    summary:
      "Practical policies, internal controls and governance for defence-facing work — covering information handling, counterparty review, export awareness and responsible engagement.",
    seoTitle: "Policy and Compliance",
    metaDescription:
      "Policy and compliance support for defence and security-facing organisations — governance, information handling, counterparty review, international liaison and responsible engagement.",
    intro: [
      "Policy and compliance sit at the centre of responsible defence-facing work. In this sector, credibility is built through discipline, proper process, careful documentation, lawful conduct and the ability to show that decisions have been considered before action is taken.",
      "Compliance should not be treated as a last-minute obstacle. When considered too late, it can cause delay, reputational exposure or the need to redesign work. Halifax treats compliance as part of good planning — the earlier the relevant issues are identified, the easier they are to manage.",
      "Our work is not about creating unnecessary bureaucracy. It is about making sure that serious activity is supported by serious process.",
    ],
    sections: [
      {
        heading: "Policy, internal controls and governance",
        body: [
          "A policy that sits unread in a folder does not protect an organisation. We support policies and procedures that can be understood and applied — covering information handling, conflicts of interest, anti-bribery, counterparty review, procurement governance, document control and approval routes.",
          "Defence-facing work often involves decisions that must be explained later. We help clients create governance that supports accountability: decision logs, approval notes, meeting records, issue trackers and review schedules — so the organisation is not relying on memory or undocumented conversations.",
        ],
      },
      {
        heading: "Export controls, sanctions and counterparty awareness",
        body: [
          "Defence-facing work can involve export controls, trade controls, sanctions, controlled technology, end-use considerations, classified material and formal approval requirements. Where an engagement may touch regulated activity, we identify the issue early and ensure the client understands what further review may be required.",
          "It is not enough to know the name of the organisation on an email. We help clients build proportionate counterparty review — understanding ownership, control, role, authority, end user and whether restrictions or sensitivities apply, before a matter progresses.",
        ],
      },
      {
        heading: "Ethics, data protection and procurement compliance",
        body: [
          "We support practical controls around ethical conduct — anti-bribery principles, conflict declarations, approval routes for third-party engagement and guidance on appropriate communication. In sensitive sectors, good intentions are not enough; the process must also be clean.",
          "We help clients handle personal information responsibly and support procurement-related compliance — organising requirements, documenting decisions and maintaining records so a process can be shown to have been reasonable, consistent and properly considered.",
        ],
      },
    ],
    delivers: [
      "Policy reviews and governance frameworks",
      "Information-handling and counterparty review procedures",
      "Compliance readiness notes and procurement governance materials",
      "Risk escalation routes and decision record templates",
      "Internal briefing documents and practical guidance",
    ],
    forWho:
      "Government bodies, defence primes, public-sector organisations, security firms, specialist suppliers, technology companies, international partners, programme teams and senior leaders preparing for engagement, reviewing procurement readiness or strengthening governance.",
    related: ["cyber-intelligence", "risk-assessment", "procurement-support"],
  },
  {
    slug: "technology-integration",
    title: "Technology Integration",
    shortTitle: "Technology Integration",
    icon: "Cpu",
    tagline: "Where programmes succeed or fail.",
    summary:
      "Requirements, supplier review, integration planning, governance and operational readiness — so technology decisions are realistic, defensible and adopted.",
    seoTitle: "Technology Integration",
    metaDescription:
      "Technology integration support for defence and security-facing organisations — requirements, supplier review, integration planning, governance, risk and operational readiness.",
    intro: [
      "Technology only creates value when it is properly understood, properly introduced and properly governed. In defence and security-facing environments, new technology rarely enters a simple setting — it must operate within existing systems, established procedures, supplier relationships, security expectations and real operational pressures.",
      "Technology integration should not be treated as a technical add-on at the end of a programme. It is often where the success or failure of the whole programme becomes visible. We help clients look at integration as a whole-programme issue — people, processes, controls, training, documentation, suppliers and decision structures.",
      "We do not start with the assumption that every problem needs a new system. Sometimes the issue is process, governance or training. Halifax helps clients understand the real problem before committing to a solution.",
    ],
    sections: [
      {
        heading: "Understanding the requirement",
        body: [
          "If the requirement is unclear, everything that follows becomes weaker — suppliers provide unsuitable solutions, teams make inconsistent assumptions and leaders struggle to judge success. We help clients clarify requirements before technology decisions are finalised.",
          "A strong requirement is specific enough to guide decisions but not so narrow that it prevents sensible solutions. We help distinguish between essential requirements, desirable features, assumptions and areas needing further review.",
        ],
      },
      {
        heading: "Supplier review and integration planning",
        body: [
          "Choosing a supplier is not only a commercial decision — it is a governance, resilience and delivery decision. We help review capability, security posture, support arrangements, subcontracting and ability to work within the client's environment, and help clients ask better questions during engagement.",
          "An integration plan should explain how a solution moves from approval to practical use — stages, responsibilities, dependencies, testing, training and review points. We help clients build a plan that is structured but not rigid, allowing adjustment without losing control.",
        ],
      },
      {
        heading: "Governance, deployment and sustainment",
        body: [
          "Technology integration requires clear governance — decision owners, review points, issue logs, risk registers and escalation routes — so the right people see the right information at the right time. Deployment is often the most sensitive stage; we help clients consider phased rollout, testing, user preparation and fallback arrangements.",
          "Integration does not end at launch. A solution must be maintained, supported, reviewed and improved. We help clients plan sustainment, ownership and information handling from the beginning, so a system that works initially does not become unreliable or underused.",
        ],
      },
    ],
    delivers: [
      "Requirements documents and integration plans",
      "Supplier review notes and risk registers",
      "Implementation roadmaps and testing frameworks",
      "Governance packs, adoption plans and training summaries",
      "Decision logs and post-implementation review reports",
    ],
    forWho:
      "Government bodies, defence primes, public-sector organisations, security firms, specialist suppliers, technology companies, international partners, programme teams and senior decision-makers considering new technology or managing complex deployments.",
    related: ["procurement-support", "cyber-intelligence", "capability-development", "risk-assessment"],
  },
];

export const serviceSlugs = services.map((s) => s.slug);

export function getService(slug: string): Service | undefined {
  return services.find((s) => s.slug === slug);
}
