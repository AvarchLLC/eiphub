export const SPEAKERS_DATA = {
  // --- DAY 1: EIP PROCESS & GENERAL OVERVIEW ---
  pooja: {
    dayNum: 1,
    name: 'Pooja Ranjan',
    photo: 'Assets/speakers/pooja-ranjan.jpg',
    affiliation: 'ECH Institute',
    designation: 'Founder, ECH Institute & EIP Editor / Devcon EIP Hub Lead',
    day: 'Day 1 – November 3, 2026',
    track: 'Day 1 · Nov 3 · EIP Process & General Overview',
    time: '⏱️ Session Time: TBA · Day 1',
    format: '🎙️ Keynote & Governance Overview',
    talkTitle: 'EIP Process & Overview: The Journey of Ethereum Standards',
    talkDesc: 'An authoritative overview of how Ethereum Improvement Proposals are born, reviewed, and finalized. Discover the vital roles of EIP Editors, ECH Institute coordinators, client developers, and community consensus in keeping Ethereum decentralized, robust, and open.',
    bio: [
      'Pooja Ranjan is the founder of ECH Institute. She has been instrumental in coordinating Ethereum network upgrades, facilitating AllCoreDevs meetings, and mentoring contributors across the global Ethereum ecosystem.',
      'Under her leadership, the EIP Hub brings together editors, client developers, and authors at Devcon 8 to demystify proposal authoring, streamline PR reviews, and foster open governance collaboration.'
    ],
    takeaways: [
      'The complete end-to-end lifecycle of an EIP from idea to Mainnet hard fork',
      'How community consensus and technical validation guard against centralized capture',
      'Direct pathways for new authors and developers to participate in the standards process'
    ],
    relatedEip: 'EIP-1: EIP Purpose and Guidelines',
    relatedEipUrl: 'https://eips.ethereum.org/EIPS/eip-1',
    audience: ['Developers', 'Researchers', 'Governance Contributors', 'Ethereum Community'],
    linkedin: 'https://www.linkedin.com/in/poojaranjan/',
    twitter: 'https://x.com/poojaranjan19'
  },
  stefan: {
    dayNum: 1,
    name: 'Stefan',
    photo: 'Assets/speakers/stefan.jpg',
    affiliation: 'ethPandaOps · Ethereum Foundation',
    designation: 'DevOps & Devnet Operations Engineer, ethPandaOps',
    day: 'Day 1 – November 3, 2026',
    track: 'Day 1 · Nov 3 · EIP Process & General Overview',
    time: '⏱️ Session Time: TBA · Day 1',
    format: '🎙️ 30m Talk + 15m Q&A',
    talkTitle: 'Testing Ethereum Upgrades: Devnets, Shadow Forks & EIP Validation',
    talkDesc: 'An inside look into how ethPandaOps deploys, stress-tests, and monitors multi-client Ethereum development networks to validate Core EIPs, diagnose client divergences, and ensure smooth mainnet activations.',
    bio: [
      'Stefan (@stefan_star) is an infrastructure and DevOps engineer with ethPandaOps at the Ethereum Foundation. He specializes in spinning up ephemeral devnets, shadow forking mainnet state, and coordinating client teams across execution and consensus layer transitions.',
      'His work provides essential tooling and live operational telemetry that empowers core developers and EIP authors to validate complex protocol changes at scale before network deployment.'
    ],
    takeaways: [
      'How multi-client devnets are orchestrated to stress-test complex Core EIPs',
      'Diagnosing execution and consensus client interoperability issues under real load',
      'Best practices for testing and validating protocol specification edge-cases'
    ],
    relatedEip: 'Core EIPs & Ethereum Devnet Infrastructure',
    relatedEipUrl: 'https://github.com/ethpandaops',
    audience: ['Core Developers', 'Client Implementers', 'DevOps Engineers', 'Protocol Researchers'],
    linkedin: null,
    twitter: 'https://x.com/stefan_star'
  },
  rafael: {
    dayNum: 1,
    name: 'Rafael Matias',
    photo: 'Assets/speakers/rafael.jpg',
    affiliation: 'ethPandaOps · Ethereum Foundation',
    designation: 'DevOps Engineer, ethPandaOps · Core Protocol Contributor',
    day: 'Day 1 – November 3, 2026',
    track: 'Day 1 · Nov 3 · EIP Process & General Overview',
    time: '⏱️ Session Time: TBA · Day 1',
    format: '🎙️ 30m Talk + 15m Q&A',
    talkTitle: 'Devnet Operations: Kurtosis Packaging & Multi-Client EIP Testing',
    talkDesc: 'Discover the automated testing pipelines, Kurtosis packaging patterns, and open-source infrastructure tools engineered by ethPandaOps that allow any author or team to instantiate local multi-client Ethereum networks to benchmark EIPs.',
    bio: [
      'Rafael Matias (@skylenet) is a DevOps Engineer at the Ethereum Foundation and core member of ethPandaOps. He has contributed across major repositories including go-ethereum (geth), ethereum-package, and genesis generation tooling.',
      'Rafael focuses on building reproducible, containerized test environments that accelerate the feedback loop between protocol research, client engineering, and specification testing.'
    ],
    takeaways: [
      'Deploying reproducible multi-client devnets locally using ethereum-package and Kurtosis',
      'Automating benchmark test suites for proposed state and opcode changes',
      'Collaborating effectively across disparate client engineering teams during upgrade testing'
    ],
    relatedEip: 'Core EIPs & Ethereum Infrastructure',
    relatedEipUrl: 'https://github.com/ethpandaops/ethereum-package',
    audience: ['Core Developers', 'Tooling Engineers', 'Client Implementers', 'Node Operators'],
    linkedin: null,
    twitter: 'https://x.com/skylenet'
  },
  'german-eiplabs': {
    dayNum: 1,
    name: 'German Abal',
    photo: 'Assets/speakers/german-abal.jpg',
    affiliation: 'EVVM (@RollAMate) · EIP Labs',
    designation: 'Co-Founder & CTO, EVVM · Standards Tooling Contributor',
    day: 'Day 1 – November 3, 2026',
    track: 'Day 1 · Nov 3 · EIP Process & General Overview',
    time: '⏱️ Session Time: TBA · Day 1',
    format: '⚡ Tooling & Standards Talk',
    talkTitle: 'EIP Process & Standards Tooling: Accelerating Proposal Workflows',
    talkDesc: 'Discover the tooling innovations and automated pipelines built at EIP Labs and EVVM that empower authors to validate formatting, test markdown schemas, verify interface signatures, and streamline the editorial review process.',
    bio: [
      'German Abal (@ariutokintumi) is a blockchain technologist, co-founder & CTO of EVVM, author of EIP-8141 and EIP-8250, and core organizer at ETH Cinco De Mayo. He is dedicated to engineering developer infrastructure that lowers friction for open-source Ethereum specification contributors.',
      'Through EVVM and open tooling, German bridges the builder community with formal standardization pipelines to foster quicker iteration and higher-quality EIP drafts.'
    ],
    takeaways: [
      'Modern automated linters, validators, and bot workflows for EIP repositories',
      'How developer tooling prevents syntax and compliance bottlenecks in PRs',
      'Future roadmap for open EIP authoring tools and collaborative workspaces'
    ],
    relatedEip: 'EIPs Repository Tooling & CI/CD Pipelines',
    relatedEipUrl: 'https://github.com/ethereum/EIPs',
    audience: ['EIP Authors', 'Tooling Developers', 'Open Source Contributors'],
    linkedin: 'https://www.linkedin.com/in/germanabal/',
    twitter: 'https://x.com/ariutokintumi'
  },

  // --- DAY 2: PROTOCOL EIPS & NETWORK UPGRADES ---
  justin: {
    dayNum: 2,
    name: 'Justin Florentine',
    photo: 'Assets/speakers/justin-florentine.jpg',
    affiliation: 'Hyperledger Besu (Consensys)',
    designation: 'Engineering Manager, Besu',
    day: 'Day 2 – November 4, 2026',
    track: 'Day 2 · Nov 4 · Protocol EIPs & Network Upgrades',
    time: '⏱️ Session Time: TBA · Day 2',
    format: '🎙️ 30m Talk + 15m Q&A',
    talkTitle: 'EIP-8184: LUCID Encrypted Mempool',
    talkDesc: "Why is encrypting Ethereum's mempool so difficult? This session explores the technical challenges and trade-offs of encrypted mempools, including approaches that have already been ruled out, the complications introduced by post-quantum cryptography, and the current solution model proposed through EIP-8184.",
    bio: [
      'Justin Florentine is an Engineering Manager at Hyperledger Besu, focused on connecting ideas, people, and technical efforts within the Ethereum ecosystem.'
    ],
    takeaways: [
      'Why earlier encrypted mempool approaches have been ruled out.',
      'The technical challenges and trade-offs of mempool encryption.',
      'How post-quantum considerations complicate the problem and what the current proposed solution looks like.'
    ],
    relatedEip: 'EIP-8184: LUCID Encrypted Mempool',
    relatedEipUrl: 'https://eipsinsight.com/eips/8184',
    audience: ['Developers', 'Researchers', 'General Ethereum Community'],
    linkedin: 'https://www.linkedin.com/in/justinflorentine/',
    twitter: null
  },
  abhimanyu: {
    dayNum: 2,
    name: 'Abhimanyu Nag',
    photo: 'Assets/speakers/abhimanyu-nag.png',
    affiliation: 'University of Alberta',
    designation: 'MITACS Fellow, University of Alberta / Engineering Manager, Canvas (on sabbatical)',
    day: 'Day 2 – November 4, 2026',
    track: 'Day 2 · Nov 4 · Protocol EIPs & Network Upgrades',
    time: '⏱️ Session Time: TBA · Day 2',
    format: '⚡ 30m Talk + 15m Q&A',
    talkTitle: 'Limits to Single Slot Finality',
    talkDesc: "An exploration of the theoretical limits of signature aggregation and network latency in achieving Ethereum's Single Slot Finality (SSF) and 3-Slot Finality (3SF) goals. The session will examine the technical challenges involved, recent research progress, and future directions in relation to emerging Ethereum Improvement Proposals (EIPs).",
    bio: [
      'Abhimanyu Nag is a MITACS Fellow at the University of Alberta and an Engineering Manager at Canvas, Canada, currently on sabbatical. His expertise spans financial risk management, DeFi market design, cryptography, and blockchain mechanism design.',
      'He previously served as Chief Scientist at Chainrisk Labs and has worked with Nethermind and Catalysis Labs. His research has been published by IEEE, Springer, and Financial Cryptography. He is also the author of EIP-5133 and has delivered several industry talks, including a TEDx Salon talk on game theory.'
    ],
    takeaways: [
      'Theoretical bounds of signature aggregation and BLS batch verification in SSF vs. 3SF',
      'Network latency thresholds and p2p gossip constraints across global validator sets',
      'Recent protocol research updates and future directions for consensus EIPs'
    ],
    relatedEip: 'EIP-5133: Delaying Difficulty Bomb to mid-September 2022',
    relatedEipUrl: 'https://eips.ethereum.org/EIPS/eip-5133',
    audience: ['Researchers', 'Core Developers', 'Consensus Implementers', 'Ethereum Community'],
    linkedin: 'https://www.linkedin.com/in/abhimanyu-nag-682747201',
    twitter: 'https://x.com/AbhiMan1601'
  },
  rachit: {
    dayNum: 2,
    name: 'Rachit Anand Srivastava',
    photo: 'Assets/speakers/rachit-anand-srivastava.png',
    affiliation: 'Avail Project',
    designation: 'Senior Research and Development Engineer',
    day: 'Day 2 – November 4, 2026',
    track: 'Day 2 · Nov 4 · Protocol EIPs & Network Upgrades',
    time: '⏱️ Session Time: TBA · Day 2',
    format: '⚡ Tech Deep-Dive',
    talkTitle: 'Ethereum in the Age of Proofs',
    talkDesc: "A technical tour of the cryptography and infrastructure shaping Ethereum's next phase, from PeerDAS and KZG to zkVMs, new proving systems, and post-quantum cryptography. The talk examines where these technologies are heading and what they could mean for the Ethereum protocol.",
    bio: [
      'Rachit Anand Srivastava is a Senior R&D Engineer at Avail, working across data availability, consensus, zero-knowledge proofs, trusted execution environments, and distributed systems.',
      'His research spans KZG multiproofs, FRI, Binius, and other proof constructions. At Avail, he has contributed to FRIVail, a FRI/Binius-based data availability sampling construction for 10GB data blocks, and Nightshade, a privacy-focused rollup for private trades.',
      'He has previously worked with Nethermind and Harmony, contributing to cryptographic protocol research, security analysis, and blockchain engineering.'
    ],
    takeaways: [
      'How data availability, ZK proving, and emerging cryptographic systems fit together.',
      'The role of PeerDAS, KZG, zkVMs, and newer proof constructions in Ethereum evolution.',
      'The technical trade-offs and open challenges shaping Ethereum future.'
    ],
    relatedEip: 'PeerDAS (EIP-7594) & Cryptographic Proving Systems',
    relatedEipUrl: 'https://eips.ethereum.org/EIPS/eip-7594',
    audience: ['Developers', 'Researchers', 'Enterprises', 'General Ethereum Community'],
    linkedin: 'https://www.linkedin.com/in/rachit-anand-srivastava/',
    twitter: 'https://x.com/privacy_prophet'
  },
  maria: {
    dayNum: 2,
    name: 'Maria Inês Silva',
    photo: 'Assets/speakers/maria-silva.jpg',
    affiliation: 'Ethereum Foundation',
    designation: 'Research Data Scientist, Ethereum Foundation',
    day: 'Day 2 – November 4, 2026',
    track: 'Day 2 · Nov 4 · Protocol EIPs & Network Upgrades',
    time: '⏱️ Session Time: TBA · Day 2',
    format: '⚡ 30m Talk + 15m Q&A',
    talkTitle: 'Glamsterdam Repricing Efforts: Gas Economics & Protocol Calibration',
    talkDesc: 'An in-depth analysis of execution resource consumption, opcode pricing calibration, and gas accounting reforms under investigation for the Glamsterdam network upgrade. Explores empirical client benchmarks, state growth management, and multidimensional gas mechanics.',
    bio: [
      'Maria Inês Silva is a Research Data Scientist at the Ethereum Foundation specializing in execution layer performance, opcode gas benchmarking, and economic mechanism design.',
      'She is the lead author of EIP-8007 (Glamsterdam Gas Repricings) and provides essential empirical data and modeling that informs AllCoreDevs decisions around gas schedules, state bloat mitigation, and execution safety.'
    ],
    takeaways: [
      'Empirical measurements of execution costs and resource imbalances across EVM opcodes',
      'Proposed repricing models designed for the Glamsterdam upgrade cycle (EIP-8007)',
      'Implications for smart contract developers and protocol throughput limits'
    ],
    relatedEip: 'EIP-8007: Glamsterdam Gas Repricings',
    relatedEipUrl: 'https://eips.ethereum.org/EIPS/eip-8007',
    audience: ['Core Developers', 'Smart Contract Engineers', 'Protocol Researchers'],
    linkedin: null,
    twitter: 'https://x.com/misilva73'
  },
  jochem: {
    dayNum: 1,
    name: 'Jochem Brouwer',
    photo: 'Assets/photos/speaker-jochem-brouwer.jpg',
    affiliation: 'Ethereum Foundation / EIP Editor',
    designation: 'EIP Editor & Protocol Contributor',
    day: 'Day 1 – November 3, 2026',
    track: 'Day 1 · Nov 3 · EIP Process & General Overview',
    time: '⏱️ Session Time: TBA · Day 1',
    format: '🎙️ 30m Talk + 15m Q&A',
    talkTitle: "Navigating the EIP Process: An Editor's Perspective on Standards Evolution",
    talkDesc: 'An inside look into the review workflows and quality standards of the Ethereum Improvement Proposal ecosystem. Jochem Brouwer explains how proposals transition from initial discussion on Ethereum Magicians to formal peer review, editor consensus, and inclusion in network upgrades.',
    bio: [
      'Jochem Brouwer is an active EIP Editor and core protocol contributor dedicated to advancing open specifications and standardization across Ethereum execution and consensus layers.',
      'He regularly assists authors in structuring proposals, clarifying specification edge-cases, and facilitating multi-client coordination during AllCoreDevs and author clinics.'
    ],
    takeaways: [
      'Core responsibilities and review criteria of EIP Editors',
      'Common pitfalls to avoid when drafting technical specifications and ERC standards',
      'How to engage effectively with client implementers and the broader developer community'
    ],
    relatedEip: 'EIP-1: EIP Purpose and Guidelines',
    relatedEipUrl: 'https://eips.ethereum.org/EIPS/eip-1',
    audience: ['EIP Authors', 'Core Developers', 'Protocol Researchers', 'Smart Contract Engineers'],
    linkedin: null,
    twitter: 'https://x.com/JochemBrouwer96'
  },
  dhruvang: {
    dayNum: 3,
    name: 'Dhruvang Choudhari',
    photo: 'Assets/speakers/dhruvang-choudhari.jpg',
    affiliation: 'AMINA Bank',
    designation: 'Crypto Research Analyst, AMINA Bank / Web3 Developer',
    day: 'Day 3 – November 5, 2026',
    track: 'Day 3 · Nov 5 · Application EIPs & Ecosystem Support',
    time: '⏱️ Session Time: TBA · Day 3',
    format: '🎙️ 30m Talk + 15m Q&A',
    talkTitle: "The Token Is Standardised. The Institution Isn't: Where Should Ethereum Standards Stop? [ERC-7943, ERC-3643]",
    talkDesc: "As institutional real-world assets (RWAs) and regulated securities move on-chain, token standards like ERC-3643 and ERC-7943 embed compliance and identity constraints directly into smart contracts. This session examines the philosophical and technical tensions: where should immutable Ethereum standards end, and institutional governance begin?",
    bio: [
      'Dhruvang Choudhari is a Crypto Research Analyst at AMINA Bank (formerly SEBA Bank) and a Web3 developer specializing in digital asset regulation, tokenization standards, and institutional crypto market infrastructure.',
      'He has contributed to account abstraction and ERC standards research, investigating the intersection of formal Ethereum specifications and regulated financial institutions.'
    ],
    takeaways: [
      'Comparative breakdown of ERC-7943 and ERC-3643 permissioned token models',
      'Balancing censorship resistance and permissionless composability with legal mandates',
      'Practical architectural patterns for institutions deploying tokenized assets on public Ethereum'
    ],
    relatedEip: 'ERC-3643 & ERC-7943 Permissioned Token Standards',
    relatedEipUrl: 'https://eips.ethereum.org/EIPS/eip-3643',
    audience: ['Institutional Architects', 'RWA Builders', 'Token Engineers', 'Legal & Compliance'],
    linkedin: 'https://www.linkedin.com/in/dhruvang-choudhari/',
    twitter: 'https://x.com/0xDhruvang'
  },

  // --- DAY 4: ENTERPRISE READINESS & EIPS FOR CONSIDERATION ---
  'german-evvm': {
    dayNum: 4,
    name: 'German Abal',
    photo: 'Assets/speakers/german-abal.jpg',
    affiliation: 'EVVM (@RollAMate)',
    designation: 'Co-Founder & CTO, EVVM · Core Team ETH Cinco De Mayo',
    day: 'Day 4 – November 6, 2026',
    track: 'Day 4 · Nov 6 · Enterprise Readiness & EIPs for Consideration',
    time: '⏱️ 11:00 AM · Day 4 (Confirmed)',
    format: '👥 EVM & Scalability Architecture Presentation',
    talkTitle: 'EVVM: Ethereum Virtual Virtual Machine Architecture & State Scaling',
    talkDesc: 'Explore EVVM (Ethereum Virtual Virtual Machine) and how contract-native virtual blockchains enable high-performance execution, custom rulesets, and privacy while maintaining trust-minimized settlement on Ethereum.',
    bio: [
      'German Abal (@ariutokintumi) is a blockchain engineer, co-founder & CTO of EVVM, author of EIP-8141 and EIP-8250, and core team member of ETH Cinco De Mayo.',
      'His work centers on enabling developers to deploy smart-contract-native execution environments without node forks or validator overhead, creating scalable rollup primitives for the broader Ethereum ecosystem.'
    ],
    takeaways: [
      'Core architecture of EVVM and how virtual execution layers settle state on Ethereum',
      'Deploying custom transaction models and gas mechanics on L1/L2 contracts',
      'Real-world implementations and standards interoperability with EIP-8141 and EIP-8250'
    ],
    relatedEip: 'EIP-8141 & EIP-8250 Virtual Machine Standards',
    relatedEipUrl: 'https://eips.ethereum.org/',
    audience: ['Core Developers', 'Protocol Architects', 'Rollup Engineers', 'Ethereum Builders'],
    linkedin: 'https://www.linkedin.com/in/germanabal/',
    twitter: 'https://x.com/ariutokintumi'
  },
  charchit: {
    dayNum: 4,
    name: 'Charchit Kumawat',
    photo: 'Assets/speakers/charchit-kumawat.jpg',
    affiliation: 'GeSIM.xyz',
    designation: 'Founder & Builder, GeSIM.xyz',
    day: 'Day 4 – November 6, 2026',
    track: 'Day 4 · Nov 6 · Enterprise Readiness & EIPs for Consideration',
    time: '⏱️ Session Time: TBA · Day 4',
    format: '🎙️ 30m Talk + 15m Q&A',
    talkTitle: 'Privacy & Human Connectivity: Decentralized Identity & SIM Infrastructure',
    talkDesc: 'How can telecommunications and mobile connectivity respect privacy in a world of pervasive surveillance? Charchit explores how GeSIM.xyz leverages decentralized identity, verifiable credentials, and Ethereum standards to build private, borderless, and sovereign connectivity.',
    bio: [
      'Charchit Kumawat is the founder of GeSIM.xyz and an active Web3 builder and content creator. He focuses on decentralized physical infrastructure networks (DePIN), digital privacy, and mobile connectivity.',
      'At GeSIM.xyz, he is pioneering the use of crypto-economic mechanisms and zero-knowledge identity to provide seamless global data connectivity without compromising user privacy.'
    ],
    takeaways: [
      'How decentralized eSIM infrastructure integrates with Ethereum identity standards',
      'Zero-knowledge authentication models preventing user location and identity leakage',
      'The intersection of telecom standards, DePIN, and open Ethereum protocols'
    ],
    relatedEip: 'Decentralized Identity & Verifiable Credentials',
    relatedEipUrl: 'https://eips.ethereum.org/',
    audience: ['Privacy Advocates', 'DePIN Builders', 'Telecom Architects', 'General Community'],
    linkedin: null,
    twitter: 'https://x.com/Charchit_web3'
  },
  'german-combined': {
    dayNum: 1,
    name: 'German Abal',
    photo: 'Assets/speakers/german-abal.jpg',
    affiliation: 'EVVM (@RollAMate) · ETH Cinco De Mayo · EIP Labs',
    designation: 'Co-Founder & CTO, EVVM · Standards Tooling Contributor',
    day: 'Day 1 (Nov 3) & Day 4 (Nov 6)',
    track: 'Dual Track Speaker: EIP Process & Tooling (Day 1) + EVVM State Scaling (Day 4)',
    time: 'Day 1: Standards Talk · Day 4: 11:00 AM (Confirmed)',
    format: '⚡ 2 Scheduled Technical Sessions',
    talkTitle: 'Dual Sessions: EIP Process Tooling Workflows & EVVM Scalability',
    talkDesc: 'German Abal presents two specialized sessions across the summit: (1) On Day 1, exploring open-source CI/CD tooling, markdown schema linters, and verification workflows for EIP authors; (2) On Day 4, breaking down EVVM (Ethereum Virtual Virtual Machine) and how contract-native virtual blockchains enable high-performance execution while settling state on Ethereum.',
    bio: [
      'German Abal (@ariutokintumi) is a blockchain engineer, co-founder & CTO of EVVM (@RollAMate), author of EIP-8141 and EIP-8250, and core team member of ETH Cinco De Mayo (@ETHCincoDeMayo).',
      'His contributions span developer tooling that lowers friction for open-source Ethereum specification contributors, as well as novel virtual machine architectures that enable developers to build virtual blockchains natively on top of smart contracts.'
    ],
    takeaways: [
      'Day 1 Session: Automated validation pipelines and developer tooling for accelerating EIP reviews',
      'Day 4 Session: EVVM architecture, custom transaction models, and settlement on public Ethereum consensus',
      'Author insights from navigating EIP-8141 and EIP-8250 through peer review and ecosystem adoption'
    ],
    relatedEip: 'EIP-8141, EIP-8250 & EIP Tooling Pipelines',
    relatedEipUrl: 'https://eips.ethereum.org/',
    audience: ['EIP Authors', 'Core Developers', 'Rollup Engineers', 'Open Source Tooling Builders'],
    linkedin: 'https://www.linkedin.com/in/germanabal/',
    twitter: 'https://x.com/ariutokintumi'
  }
};
