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
    affiliation: 'EVVM · ETH Cinco De Mayo',
    designation: 'Co-Founder & CTO, EVVM · Standards Tooling Contributor',
    day: 'Day 1 – November 3, 2026',
    track: 'Day 1 · Nov 3 · EIP Process & General Overview',
    time: '⏱️ Session Time: TBA · Day 1',
    format: '⚡ Tooling & Standards Talk',
    talkTitle: 'EIP Process & Standards Tooling: Accelerating Proposal Workflows',
    talkDesc: 'Discover the tooling innovations and automated pipelines built at EVVM that empower authors to validate formatting, test markdown schemas, verify interface signatures, and streamline the editorial review process.',
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
    affiliation: 'Besu (Hyperledger Besu)',
    designation: 'Engineering Manager, Besu',
    day: 'Day 2 – November 4, 2026',
    track: 'Day 2 · Nov 4 · Protocol EIPs & Network Upgrades',
    time: '⏱️ Session Time: TBA · Day 2',
    format: '🎙️ 30m Talk + 15m Q&A',
    talkTitle: 'EIP-8184: LUCID Encrypted Mempool',
    talkDesc: "Why encrypting the mempool is hard, and what the latest tradeoffs are. With over $600M extracted from users, encrypted mempools represent a vital defense for Ethereum users. This session explores the technical challenges and trade-offs of mempool encryption, including approaches already ruled out, the complications introduced by post-quantum cryptography, and the current solution model proposed through EIP-8184.",
    bio: [
      'Herding cats, connecting dots.',
      'Justin Florentine is an Engineering Manager at Hyperledger Besu, focused on connecting ideas, people, and technical efforts within the Ethereum ecosystem.'
    ],
    takeaways: [
      'What approaches to encrypting the mempool have already been ruled out, and why.',
      'Why the problem is so hard: trade-offs around transaction ordering, DOS resistance, and latency.',
      'How Q day (post-quantum cryptography) complicates things and what the current solution model looks like with EIP-8184.'
    ],
    relatedEip: 'EIP-8184: LUCID Encrypted Mempool',
    relatedEipUrl: 'https://eipsinsight.com/eips/8184',
    audience: ['Developers', 'Researchers', 'General community'],
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
    time: '⏱️ 1:30 PM · Day 2 (Nov 4)',
    format: '⚡ 30m Talk + 15m Q&A',
    talkTitle: 'Limits to Single Slot Finality',
    talkDesc: "An exploration of the theoretical limits of signature aggregation and network latency in achieving Ethereum's Single Slot Finality (SSF) and 3-Slot Finality (3SF) goals. The session examines theoretical bounds, recent research progress, and future directions in relation to recent consensus EIPs.",
    bio: [
      'Currently on sabbatical, Abhimanyu is a MITACS Fellow at the University of Alberta in the Department of Mathematical and Statistical Sciences as well as an Engineering Manager at Canvas, Canada. He holds a BSc in Statistics from the University of Alberta and has built a career across Financial Risk Management and Market Design in DeFi along with Algorithmic Mechanism Design in Blockchains.',
      'He has worked with hedge funds like multipli.fi, as a research scientist at Catalysis Labs for DeFi vault insurance and also served as Chief Scientist at Antler-backed Chainrisk Labs. His research has been published by IEEE, Springer, and Financial Cryptography and he has delivered numerous industry talks, including a TEDx Salon talk on Game Theory for Social Good.',
      'He authored EIP-5133 and was cited in the Ethereum Research Paper at the age of 20 while at Nethermind and is widely recognized as a rising leader at the intersection of cryptography and economics.'
    ],
    takeaways: [
      'Theoretical limits of signature aggregation and latency for SSF and 3SF goals of Ethereum',
      'Network latency thresholds and p2p gossip constraints across global validator sets',
      'Recent protocol progress and future directions in relation to recent consensus EIPs'
    ],
    relatedEip: 'EIP-5133: Delaying Difficulty Bomb to mid-September 2022',
    relatedEipUrl: 'https://eips.ethereum.org/EIPS/eip-5133',
    audience: ['Developers', 'Researchers', 'General community'],
    linkedin: 'https://www.linkedin.com/in/abhimanyu-nag-682747201',
    twitter: 'https://x.com/AbhiMan1601',
    telegram: '@AbhiMan160102',
    discord: 'AbhiMan#8284'
  },
  rachit: {
    dayNum: 2,
    name: 'Rachit Anand Srivastava',
    photo: 'Assets/speakers/rachit-anand-srivastava.png',
    affiliation: 'Avail Project',
    designation: 'Senior Research and Development Engineer',
    day: 'Day 2 – November 4, 2026',
    track: 'Day 2 · Nov 4 · Protocol EIPs & Network Upgrades',
    time: '⏱️ 9:10 AM · Day 2 (Nov 4)',
    format: '⚡ Tech Deep-Dive',
    talkTitle: 'Ethereum in the Age of Proofs',
    talkDesc: "A technical tour of the cryptography and infrastructure shaping Ethereum’s next phase, from PeerDAS and KZG to zkVMs, new proving systems, and post-quantum cryptography. The talk looks at where these technologies are heading and what they could mean for the protocol.",
    bio: [
      'Rachit is a Senior R&D Engineer at Avail who likes turning cryptographic ideas into working systems. He works across data availability, consensus, zero-knowledge proofs, TEEs, and distributed systems, with research spanning KZG multiproofs, FRI, Binius, and other proof constructions.',
      'At Avail, he has worked on KZG multiproofs, FRIVail: a FRI/Binius-based DAS construction for 10GB data blocks, and Nightshade, a privacy-focused rollup for private trades. His work has ranged from cryptographic protocol research and security analysis to building low-latency software and reliable ZK systems.',
      'He has also worked with teams including Nethermind and Harmony. At Nethermind, he worked across DeFi and cryptography, contributing to both protocol research and engineering. He has also worked as a consultant and contractor across blockchain and cryptographic systems.'
    ],
    takeaways: [
      'A practical understanding of how data availability, ZK proving, and emerging cryptographic tooling fit together',
      'Technical tour of cryptography shaping Ethereum next phase: PeerDAS, KZG, zkVMs, and new proving systems',
      'A clearer view of the trade-offs and open problems shaping Ethereum’s next phase'
    ],
    relatedEip: 'PeerDAS (EIP-7594) & Cryptographic Proving Systems',
    relatedEipUrl: 'https://eips.ethereum.org/EIPS/eip-7594',
    audience: ['Developers', 'Researchers', 'Enterprises', 'General community'],
    linkedin: 'https://www.linkedin.com/in/rachit-anand-srivastava/',
    twitter: 'https://x.com/privacy_prophet',
    telegram: '@privacy_prophet',
    discord: 'privacy_prophet'
  },
  maria: {
    dayNum: 2,
    name: 'Maria Silva',
    photo: 'Assets/speakers/maria-silva.jpg',
    affiliation: 'Ethereum Foundation',
    designation: 'Researcher, Ethereum Foundation',
    day: 'Day 2 – November 4, 2026',
    track: 'Day 2 · Nov 4 · Protocol EIPs & Network Upgrades',
    time: '⏱️ 11:00 AM · Day 2 (Nov 4)',
    format: '🎙️ 30m Talk + 15m Q&A',
    talkTitle: 'The Price Is Right: Setting Gas Prices for Glamsterdam',
    talkDesc: 'Ethereum’s gas schedule is both an accounting system and a safety boundary, so choosing new numbers requires more than timing a few opcodes. This talk opens the black box behind the Glamsterdam repricing work: how synthetic blocks isolate state access and transaction overhead, how results across execution clients are normalized, and how a throughput target becomes concrete gas costs. Using EIP 8038 and EIP 2780 as case studies, it explains how measurements, resource decomposition, conservative assumptions, and edge cases shape the final model. Attendees will learn how to read repricing evidence, challenge its assumptions, and understand why numbers such as cold access costs and intrinsic transaction gas change.',
    bio: [
      'Maria is a researcher at the Ethereum Foundation working on gas pricing, EVM, state, and incentives in decentralized networks. Her interests include statistical simulation, time-series data mining, network science, and applications of Machine Learning to finance and economics, with previous work in fraud detection and cybercrime.',
      'She holds a Ph.D. in Information Management and is a lead researcher behind the Glamsterdam repricing efforts (EIP-8007, EIP-8038, EIP-2780), research that allowed safely scaling the gas limit in Glamsterdam by 3x (from 60M to 200M).'
    ],
    takeaways: [
      'How synthetic benchmarks isolate state access and transaction overhead, and how results are normalized across execution clients',
      'How throughput targets, resource costs, and conservative safety assumptions translate into proposed gas prices in EIP-8038 and EIP-2780',
      'How to critically assess repricing evidence, question its assumptions, and spot edge cases that influence cold access costs and intrinsic transaction gas'
    ],
    relatedEip: 'EIP-8007, EIP-8038 & EIP-2780: Glamsterdam Gas Repricings',
    relatedEipUrl: 'https://eips.ethereum.org/EIPS/eip-8007',
    audience: ['General Community', 'Core Developers', 'Protocol Researchers', 'Smart Contract Engineers'],
    linkedin: null,
    twitter: 'https://x.com/misilva73',
    github: 'https://github.com/misilva73',
    website: 'https://nightingalelab.io/'
  },
  gavin: {
    dayNum: 2,
    name: 'Gavin Birch',
    photo: 'Assets/speakers/gavin-birch.jpg',
    affiliation: 'Armada',
    designation: 'Cofounder, Armada',
    day: 'Day 2 – November 4, 2026',
    track: 'Day 2 · Nov 4 · Protocol EIPs & Network Upgrades',
    time: '⏱️ 12:00 PM · Day 2 (Nov 4)',
    format: '🎙️ 30m Talk + 15m Q&A',
    talkTitle: 'Frame txs & private payments: EIP-8141 in practice',
    talkDesc: 'EIP-8141 will enable Frame Transactions, separating transaction validation, gas payment, and execution in a native Ethereum transaction type. Using Armada’s shielded payment architecture as a case study, this talk explores what Frames enable for private transactions, where the current proposal still creates constraints, and what a practical implementation could look like.',
    bio: [
      'Gavin Birch is the founder of Armada, privacy infrastructure for organizational stablecoin flows on Ethereum.',
      'His work focuses on operational privacy, mechanism design, and how emerging Ethereum protocol features can reduce reliance on trusted transaction infrastructure.'
    ],
    takeaways: [
      'How EIP-8141 separates authorization, gas payment, and execution natively on Ethereum',
      'How shielded payments map onto Frame validation, sponsorship, and execution',
      'Remaining engineering and privacy constraints around public mempool admission, state dependencies, sponsorship, and metadata leakage'
    ],
    relatedEip: 'EIP-8141: Frame Transactions',
    relatedEipUrl: 'https://eips.ethereum.org/EIPS/eip-8141',
    audience: ['Authors', 'Core Developers', 'Protocol Researchers', 'Privacy Engineers'],
    linkedin: null,
    twitter: 'https://x.com/Ether_Gavin',
    telegram: '@gavinly',
    discord: 'gavinly'
  },
  jochem: {
    dayNum: 1,
    name: 'Jochem Brouwer',
    photo: 'Assets/photos/speaker-jochem-brouwer.jpg',
    affiliation: 'Ethereum Foundation',
    designation: 'Execution Layer Specifications (EF) · EIP Editor',
    day: 'Day 1 – November 3, 2026',
    track: 'Day 1 · Nov 3 · EIP Process & General Overview',
    time: '⏱️ 1:30 PM · Day 1 (Nov 3)',
    format: '🎙️ 30m Talk + 15m Q&A',
    talkTitle: 'EIP content in the new AI-era: why specification clarity matters more than ever',
    talkDesc: 'We are all using AIs much more than in the past. We point our AIs to implement specifications, such as EIP documents. These documents are not only used as the root source of truth now, but will also be like this in the future. It is therefore even more important that the quality of these documents is as high as possible. Not just for core developers, but also for AIs which implement it, and for the general communication with the public.',
    bio: [
      'Jochem Brouwer works on Execution Layer Specifications at the Ethereum Foundation and is an active EIP Editor.',
      'His work focuses on ensuring specification precision, thorough peer review, and maintaining EIPs as the unambiguous root source of truth for both human engineers and AI code generation systems across the Ethereum ecosystem.'
    ],
    takeaways: [
      'Why EIPs are the root source of truth that AIs and client implementations depend on directly',
      'The compounding risks of ambiguous specifications and why thorough review is paramount',
      'Practical standards clarity lessons from EIP-1 and upcoming meta-EIPs for hard forks (EIP-7773, EIP-8081)'
    ],
    relatedEip: 'EIP-1, EIP-7773, EIP-8081 & ERC Specifications',
    relatedEipUrl: 'https://eips.ethereum.org/EIPS/eip-1',
    audience: ['Authors', 'Core Developers', 'Protocol Researchers', 'AI & Tooling Engineers'],
    linkedin: 'https://www.linkedin.com/in/jochem-brouwer-9b5537137',
    twitter: 'https://x.com/JochemBrouwer96',
    telegram: '@jochembrouwer',
    discord: 'jochembrouwer'
  },
  daniel: {
    dayNum: 3,
    name: 'Dr. Daniel Nagy',
    photo: 'Assets/speakers/daniel-nagy.png',
    affiliation: 'ERC-8009 / Red Duck',
    designation: 'Author, ERC-8009 · Cryptographer & Swarm Designer',
    day: 'Day 3 – November 5, 2026',
    track: 'Day 3 · Nov 5 · Application EIPs & Ecosystem Support',
    time: '⏱️ 10:00 AM · Day 3 (Nov 5)',
    format: '🎙️ 30m Talk + 15m Q&A',
    talkTitle: 'ERC-8009 & Clear-Signing',
    talkDesc: "Discussion on Clear-Signing as a solution to the primary security challenge of the Ethereum ecosystem today known as 'Blind Signing', featuring a live demo on real Trezor and Ledger devices. It demonstrates a concrete way to resolve the vulnerability that led to some of the largest hacks in crypto history, such as the ByBit $1.5B exploit.",
    bio: [
      'Dr. Daniel Nagy is the author of ERC-8009 (Proxy Clear Signing), an open standard that lets hardware wallets show users the guaranteed outcome of a transaction before they sign, even for unknown smart contracts.',
      'One of Ethereum’s earliest developers and the designer of Swarm, he has worked in financial cryptography since 2006 and holds a PhD in applied mathematics.'
    ],
    takeaways: [
      'What limitations hardware wallets have that make them vulnerable to blind signing exploits',
      'How hardware wallet vulnerabilities can be resolved through open ERC standards',
      'Which standards are already being proposed (ERC-8009) and how they work in practice with live demos on Ledger and Trezor'
    ],
    relatedEip: 'ERC-8009: Proxy Clear Signing',
    relatedEipUrl: 'https://github.com/ethereum/ERCs/pull/1184',
    audience: ['Researchers', 'Security Engineers', 'Wallet Developers', 'General community'],
    linkedin: null,
    twitter: 'https://x.com/redduckteam'
  },
  dhruvang: {
    dayNum: 3,
    name: 'Dhruvang Choudhari',
    photo: 'Assets/speakers/dhruvang-choudhari.jpg',
    affiliation: 'AMINA Group',
    designation: 'Crypto Research Analyst, AMINA Group / Bank',
    day: 'Day 3 – November 5, 2026',
    track: 'Day 3 · Nov 5 · Application EIPs & Ecosystem Support',
    time: '⏱️ 10:50 AM · Day 3 (Nov 5)',
    format: '🎙️ 30m Talk + 15m Q&A',
    talkTitle: "The Token Is Standardised. The Institution Isn't: Where Should Ethereum Standards Stop?",
    talkDesc: "Putting an asset on Ethereum is becoming the easy part. The difficult part starts when that asset has investors with different eligibility, jurisdictions, compliance requirements, custody arrangements and transfer rules. This talk examines what standards such as ERC-3643 and ERC-7943 are getting right, where they still leave gaps, and whether we are standardising the right layer of institutional finance.",
    bio: [
      'Dhruvang Choudhari is a Crypto Research Analyst at AMINA Bank and has been working in blockchain and Web3 since 2019, after entering the crypto space in 2016.',
      'He has built blockchain applications, researched DeFi and emerging protocols, worked in community and partnerships, and participated in hackathons, winning three. He has mentored at ETHGlobal New Delhi and helped organise blockchain and Web3 events and developer initiatives across India.',
      'He has also worked on blockchain education and academic initiatives, including serving as a consultant professor for blockchain at IIT Madras.'
    ],
    takeaways: [
      'The difference between making an asset tokenised and making it usable across institutional infrastructure',
      'What ERC-3643 and ERC-7943 tell us about the direction of standards for regulated assets, and what they deliberately leave outside the protocol',
      'A practical way to think about the boundary between a common Ethereum standard and institution-specific infrastructure'
    ],
    relatedEip: 'ERC-7943 & ERC-3643 (Supporting: ERC-1400, ERC-4626, ERC-20, ERC-7208)',
    relatedEipUrl: 'https://eips.ethereum.org/EIPS/eip-3643',
    audience: ['Enterprises', 'Institutional Architects', 'Token Engineers', 'Legal & Compliance'],
    linkedin: 'https://www.linkedin.com/in/dhruvang-choudhari/',
    twitter: 'https://x.com/0xDhruvang',
    telegram: '@Dhruvang3',
    discord: '.dhruvang'
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
    time: '⏱️ 11:00 AM · Day 4',
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
    affiliation: 'GeSIM',
    designation: 'Founder & CEO, GeSIM',
    day: 'Day 4 – November 6, 2026',
    track: 'Day 4 · Nov 6 · Enterprise Readiness & EIPs for Consideration',
    time: '⏱️ 9:10 AM · Day 4 (Nov 6)',
    format: '⚡ 20m Presentation',
    talkTitle: 'Privacy & human connectivity',
    talkDesc: "I’ll cover what it actually takes to run telecom on-chain, what users will and won’t pay for. The people who most need private connectivity (travellers, journalists, users in restrictive markets, crypto-native users who don’t want identity tied to traffic) are the ones locked out. Crypto solved permissionless money but not permissionless connectivity.",
    bio: [
      'Charchit Kumawat is the Founder & CEO of GeSIM and a Web3 product builder and growth specialist.',
      'He focuses on decentralized mobile connectivity, on-chain telecom, and privacy infrastructure, bringing real-world private communications to global users.'
    ],
    takeaways: [
      'What it actually takes to run telecom on-chain: infrastructure, identity, and traffic decoupling',
      'Why private connectivity is vital for travellers, journalists, and users in restrictive jurisdictions',
      'What makes people pay for privacy: pricing, conversion, and onboarding lessons from ~900 users and 400+ paying customers'
    ],
    relatedEip: 'Decentralized Identity, Privacy & Telecom Primitives',
    relatedEipUrl: 'https://eips.ethereum.org/',
    audience: ['General Community', 'Privacy Advocates', 'DePIN Builders', 'Founders'],
    linkedin: 'https://www.linkedin.com/in/charchit-kumawat-blockchain/',
    twitter: 'https://x.com/Charchit_web3',
    telegram: '@Charchit_WEB3',
    discord: 'Charchit_WEB3'
  },
  abhay: {
    dayNum: 4,
    name: 'Abhay Singh',
    photo: 'Assets/speakers/abhay-singh.jpg',
    affiliation: 'HyprEarn',
    designation: 'Founder & CEO, HyprEarn',
    day: 'Day 4 – November 6, 2026',
    track: 'Day 4 · Nov 6 · Enterprise Readiness & EIPs for Consideration',
    time: '⏱️ 9:30 AM · Day 4 (Nov 6)',
    format: '⚡ 20m Presentation',
    talkTitle: 'The Agent Economy: Why AI Needs Crypto Rails',
    talkDesc: 'AI agents are starting to trade, route liquidity and move real money onchain. Using live perp trading as a case study, this talk shows what agents actually need from crypto rails (permissions, signing, identity and settlement) and where the hype runs ahead of real traction.',
    bio: [
      'Abhay Singh is the co-founder and CEO of HyprEarn, a non-custodial AI trading desk for perpetual futures that routes trades across multiple perp DEXs.',
      'He has 15+ years in crypto and AI, has worked at Fab.com and The Graph, and is a second-time founder whose previous venture scaled to $2M ARR. At HyprEarn he works on how AI agents can execute trades for users without taking custody of their funds.'
    ],
    takeaways: [
      'What agents actually do onchain today, and what is still hype',
      'Why they need crypto rails: permissionless access, programmable permissions and verifiable settlement',
      'Which gaps (delegation, spend limits, agent identity) builders and EIP authors could close next'
    ],
    relatedEip: 'ERC-7715, ERC-7579 & Account Delegation Primitives',
    relatedEipUrl: 'https://eips.ethereum.org/',
    audience: ['Developers', 'AI Engineers', 'Protocol Architects', 'DeFi Builders'],
    linkedin: 'https://www.linkedin.com/in/abhay-%F0%9F%93%8Dtoken-%F0%9F%87%B8%F0%9F%87%AC-15156316/',
    twitter: 'https://x.com/abhayait',
    telegram: '@napolean0',
    discord: 'abhayks'
  },
  loring: {
    dayNum: 4,
    name: 'Loring Harkness',
    photo: 'Assets/speakers/loring-harkness.jpg',
    affiliation: 'Shutter Network',
    designation: 'Head of Commercial, brainbot GmbH · Core Contributor, Shutter Network',
    day: 'Day 4 – November 6, 2026',
    track: 'Day 4 · Nov 6 · Enterprise Readiness & EIPs for Consideration',
    time: '⏱️ Session Time: TBA · Day 4',
    format: '🎙️ 30m Talk + 15m Q&A',
    talkTitle: 'Encrypted Mempools & Threshold Encryption: Privacy and Fairness for Enterprise',
    talkDesc: 'How threshold encryption and encrypted mempools address enterprise challenges around fairness, privacy, and trust. Loring Harkness explores the development, trade-offs, and commercial adoption of encrypted transaction pools across enterprise rollups and Ethereum infrastructure.',
    bio: [
      'Loring Harkness is Head of Commercial at brainbot GmbH and a core contributor to Shutter Network. His work focuses on using blockchain and cryptography to address challenges around fairness, privacy, and trust, including the development and adoption of encrypted mempools and threshold encryption.',
      'Before joining brainbot, Loring worked across financial inclusion, venture capital, startup ecosystems, and economic development in emerging markets, particularly in Southeast Asia.'
    ],
    takeaways: [
      'How threshold encryption and encrypted mempools mitigate malicious MEV and protect transaction privacy',
      'Commercial and architectural considerations for deploying encrypted pools in enterprise ecosystems',
      'Practical lessons from integrating threshold cryptography across production rollup stacks'
    ],
    relatedEip: 'Encrypted Mempools & Threshold Encryption Standards',
    relatedEipUrl: 'https://shutter.network/',
    audience: ['Developers', 'Researchers', 'Enterprises', 'General community'],
    linkedin: 'https://www.linkedin.com/in/loringharkness',
    twitter: 'https://x.com/LoringHarkness',
    telegram: '@LoringHarkness'
  },
  yudhishthra: {
    dayNum: 4,
    name: 'Yudhishthra',
    photo: 'Assets/speakers/yudhishthra.jpg',
    affiliation: 'Aqua0',
    designation: 'Co-Founder & CTO, Aqua0',
    day: 'Day 4 – November 6, 2026',
    track: 'Day 4 · Nov 6 · Enterprise Readiness & EIPs for Consideration',
    time: '⏱️ 10:30 AM · Day 4 (Nov 6)',
    format: '🎙️ 30m Talk + 15m Q&A',
    talkTitle: 'Why Your Local-Currency Stablecoin Has No Market',
    talkDesc: "Local-currency stablecoins keep launching, but they can’t scale because their liquidity is too thin and too fragmented to trade on. Using data and case studies from issuers and market makers in Aqua0’s beta, this talk shows where the inefficiencies come from, what they cost, and what it takes to fix them.",
    bio: [
      'Yudhishthra is the Co-Founder & CTO of Aqua0, the liquidity layer for onchain stablecoins and FX, which lets one deposit back liquidity across every pool and every chain at once.',
      'Previously, he built Starknet developer tools at Nethermind and worked on security and developer SDKs at Etherscan. He has competed in 40+ hackathons, grew Malaysia’s largest university blockchain club to 600+ members, and was one of 50 Ethereum Foundation Devcon Scholars at 19.'
    ],
    takeaways: [
      'The real numbers behind thin local-currency markets: spreads, depth, and how much capital fragmentation costs issuers and market makers',
      'Case studies from BRL and MYR stablecoin issuers and market makers on scaling bottlenecks and unified cross-chain liquidity',
      'Which gaps are standards problems (cross-chain token interfaces, price and depeg signals) and what the ecosystem should standardize next'
    ],
    relatedEip: 'Cross-Chain Token Standards & FX Liquidity Interfaces',
    relatedEipUrl: 'https://eips.ethereum.org/',
    audience: ['Developers', 'Enterprises', 'General community'],
    linkedin: 'https://www.linkedin.com/in/yudhishthra/',
    twitter: 'https://x.com/0xYudhishthra',
    telegram: '@yudhishthra',
    discord: 'yudhishthra.eth'
  },
  dhruv: {
    dayNum: 4,
    name: 'Dhruv Gera',
    photo: 'Assets/speakers/dhruv-gera.jpg',
    affiliation: 'DashX',
    designation: 'Founder & CEO, DashX',
    day: 'Day 4 – November 6, 2026',
    track: 'Day 4 · Nov 6 · Enterprise Readiness & EIPs for Consideration',
    time: '⏱️ 9:50 AM · Day 4 (Nov 6)',
    format: '🎙️ 30m Talk + 15m Q&A',
    talkTitle: 'Are Confidential Tokens Ready for Enterprise Payments? (Impl: ERC-7984)',
    talkDesc: "ERC-7984 standardizes confidential fungible tokens with encrypted balances and transfer amounts. Drawing on building stablecoin cross-border payment rails at DashX, this talk tests the interface against what enterprise payments need: auditability, selective disclosure, reconciliation, and fiat settlement.",
    bio: [
      'Dhruv Gera is the Founder & CEO of DashX Payments and a second-time founder building cross-border payment rails.',
      'At DashX, he develops compliant fiat and stablecoin rails, focusing on bridging enterprise payment workflows with on-chain confidential token standards and selective-disclosure architectures.'
    ],
    takeaways: [
      'How ERC-7984 works (encrypted amounts, operators, access control) and what changes compared with ERC-20 for wallets, custodians, and indexers',
      'Where confidential payments break down in practice: reconciliation without visible amounts, auditor access, and fiat off-ramp handoffs',
      'Concrete proposals: selective-disclosure viewing-key extensions, multi-implementation auditor access, and comparisons with protocol-level privacy like EIP-8182'
    ],
    relatedEip: 'ERC-7984 (Confidential Fungible Token Interface) & EIP-8182',
    relatedEipUrl: 'https://eips.ethereum.org/EIPS/eip-7984',
    audience: ['Developers', 'Researchers', 'Enterprises'],
    linkedin: 'https://www.linkedin.com/in/dhruv-gera/',
    twitter: 'https://x.com/dhruvgera_',
    telegram: '@dhruv_gera'
  },
  simona: {
    dayNum: 4,
    name: 'Simona Serban',
    photo: 'Assets/speakers/simona-serban.jpeg',
    affiliation: 'ETHCluj',
    designation: 'Co-founder, ETHCluj · Community Builder',
    day: 'Day 4 – November 6, 2026',
    track: 'Day 4 · Nov 6 · Enterprise Readiness & EIPs for Consideration',
    time: '⏱️ 12:30 PM · Day 4 (Nov 6)',
    format: '🎙️ 30m Talk + 15m Q&A',
    talkTitle: 'Building Trustless Systems, Together',
    talkDesc: 'Ethereum is built on a powerful promise: creating systems that remove our reliance on trusted intermediaries. Yet, building these very systems requires human trust: people who trust each other enough to collaborate openly, share knowledge, challenge assumptions, and hold each other accountable. From her experience helping build the ETHCluj community, this talk explores the unique tension between human trust and code-based trustlessness, showing how we can keep collaborating effectively as AI, privacy concerns, and security challenges reshape how we connect and build.',
    bio: [
      'Simona is a community builder and co-founder of ETHCluj, a space where people come together to learn and collaborate on all things Ethereum, open source, and public goods.',
      'Her work covers everything from building partnerships and visibility to communications and contributing to meaningful strategies that drive sustainable growth and impact. At her core, she loves helping people and projects connect, share knowledge, and build sustainable ecosystems.'
    ],
    takeaways: [
      'Trust and trustlessness complement each other: designing systems that do not require blind trust while fostering accountability',
      'The critical role of the social layer in building communities that protect freedom, privacy, and open contribution',
      'Connecting human collaboration with emerging protocol standards like EIP-8141 (Frame Transactions) and ERC-7984 (Confidential Tokens)'
    ],
    relatedEip: 'EIP-8141 (Frame Txs) & ERC-7984 (Confidential Fungible Tokens)',
    relatedEipUrl: 'https://eips.ethereum.org/EIPS/eip-8141',
    audience: ['General Community', 'Ecosystem Builders', 'Core Developers', 'Researchers'],
    linkedin: 'https://www.linkedin.com/in/simona-serban-97734918',
    twitter: 'https://x.com/SimonaSerban_',
    telegram: '@Simona_Serban',
    discord: 'simonaserban_'
  },
  'german-combined': {
    dayNum: 1,
    name: 'German Abal',
    photo: 'Assets/speakers/german-abal.jpg',
    affiliation: 'EVVM · ETH Cinco De Mayo',
    designation: 'Co-Founder & CTO, EVVM · Standards Tooling Contributor',
    day: 'Day 1 (Nov 3) & Day 4 (Nov 6)',
    track: 'Dual Track Speaker: EIP Process & Tooling (Day 1) + EVVM State Scaling (Day 4)',
    time: 'Day 1: Standards Talk · Day 4: 11:00 AM',
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
