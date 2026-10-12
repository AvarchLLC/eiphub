# Pull Request Details

## 🎯 PR Title
```text
feat(speakers): separate multi-speaker profiles, add ethPandaOps leaders, and add comprehensive site documentation
```

---

## 📋 Direct PR Creation Links

- **Compare & Create PR (Feature Branch - Recommended):**  
  [https://github.com/AvarchLLC/eiphub/compare/main...shubham0454:eiphub:feat/speakers-update-and-docs?expand=1](https://github.com/AvarchLLC/eiphub/compare/main...shubham0454:eiphub:feat/speakers-update-and-docs?expand=1)

- **Compare & Create PR (Main Branch):**  
  [https://github.com/AvarchLLC/eiphub/compare/main...shubham0454:eiphub:main?expand=1](https://github.com/AvarchLLC/eiphub/compare/main...shubham0454:eiphub:main?expand=1)

---

## 📝 PR Description (Copy & Paste below into GitHub)

```markdown
### Summary of Changes

This pull request updates the speaker roster architecture, separates co-presenter cards into distinct individual profiles, integrates new ethPandaOps leadership profiles with verified 𝕏 / Twitter links and real headshots, prunes redundant legacy assets, and adds comprehensive website architecture documentation.

---

### Key Updates

#### 1. 🎤 Speaker Profiles & Separation
- **Individualized Co-Presenters**: Separated joint cards into dedicated cards for **Prem Makeig** (PeerDAS / Lighthouse) and **Thomas Clowes** (PeerDAS / Lighthouse) with unique bios, avatar headshots, and badges.
- **ethPandaOps Leadership Added**:
  - **Stefan Starflinger** (`@stefan_star`): DevOps Engineer, ethPandaOps / Ethereum Foundation — Day 1 Focus on Consensus Layer & Ephemery testnet.
  - **Rafael Matias** (`@skylenet`): DevOps Engineer, ethPandaOps / Ethereum Foundation — Day 1 Focus on Network Health, DevOps & Testing.
- **Synchronized Social Links**: Verified and linked direct 𝕏 / Twitter profiles across `SPEAKERS_DATA` modal dictionary and interactive card links.

#### 2. 🎠 Hero Moving Carousel Showcase
- Expanded infinite moving carousel to include **13 distinct leaders** across both Loop Set 1 & Set 2 with optimized avatars and bio tooltips.

#### 3. 🗓️ Interactive Day Filter & Schedule Sync
- Updated speaker category tab counters to accurately reflect the 13 confirmed speakers:
  - **All Days**: 13
  - **Day 1**: 4 (Stefan Starflinger, Rafael Matias, Prem Makeig, Thomas Clowes)
  - **Day 2**: 5 (Maria Silva, German Abal, Gavin Birch, Dhruvang Choudhari, Charchit Kumawat)
  - **Day 3**: 3 (Pooja Ranjan, Justin Florentine, Abhimanyu Nag)
  - **Day 4**: 3 (Pooja Ranjan, Rachit Anand Srivastava, Justin Florentine)
  - *(Note: Pooja Ranjan and Justin Florentine speak across multiple days)*
- Synchronized Day 1 Schedule breakdown tags to highlight Stefan Starflinger and Rafael Matias.

#### 4. 🧹 Asset Optimization & Repository Cleanup
- Pruned redundant high-weight legacy files (AI vector files, Photoshop `.psd`, duplicate `.zip`, uncompressed TTF) saving repository footprint.
- Optimized and compressed avatar headshots (`Assets/speakers/stefan.jpg`, `Assets/speakers/rafael.jpg`, etc.) for sub-second loading.

#### 5. 📚 Documentation
- Added `EIP_HUB_DOCUMENTATION.md` detailing:
  - Complete section-by-section breakdown (Hero, About, Speakers, Schedule, Partners, Venue, FAQ, Footer).
  - Speaker directory with official 𝕏 / Twitter links and day assignments.
  - Ecosystem and Community partner list.

---

### Speaker Directory Reference

| # | Speaker | Role / Organization | Track / Day | 𝕏 / Twitter Link |
|---|---|---|---|---|
| 1 | **Stefan Starflinger** | DevOps Engineer, ethPandaOps | Day 1 | [x.com/stefan_star](https://x.com/stefan_star) |
| 2 | **Rafael Matias** | DevOps Engineer, ethPandaOps | Day 1 | [x.com/skylenet](https://x.com/skylenet) |
| 3 | **Prem Makeig** | PeerDAS Researcher, Lighthouse / Sigma Prime | Day 1 | [x.com/premmakeig](https://x.com/premmakeig) |
| 4 | **Thomas Clowes** | Core Dev, Lighthouse / Sigma Prime | Day 1 | [x.com/thomasclowes](https://x.com/thomasclowes) |
| 5 | **Maria Silva** | Ethereum Core Contributor, ECH | Day 2 | [x.com/MariaSilva_ETH](https://x.com/MariaSilva_ETH) |
| 6 | **German Abal** | Protocol Engineer & Researcher | Day 2 | [x.com/germanabal](https://x.com/germanabal) |
| 7 | **Gavin Birch** | Protocol Contributor & Ecosystem Lead | Day 2 | [x.com/gavin_birch](https://x.com/gavin_birch) |
| 8 | **Dhruvang Choudhari** | Protocol Engineer | Day 2 | [x.com/dhruvangc](https://x.com/dhruvangc) |
| 9 | **Charchit Kumawat** | Protocol Engineer & EIP Contributor | Day 2 | [x.com/kumawatcharchit](https://x.com/kumawatcharchit) |
| 10 | **Pooja Ranjan** | Founder, Ethereum Cat Herders | Day 3 & 4 | [x.com/poojaranjan19](https://x.com/poojaranjan19) |
| 11 | **Justin Florentine** | Core Contributor, Besu | Day 3 & 4 | [x.com/jflo](https://x.com/jflo) |
| 12 | **Abhimanyu Nag** | Protocol Specialist, ECH | Day 3 | [x.com/abhimanyunag](https://x.com/abhimanyunag) |
| 13 | **Rachit Anand Srivastava** | Protocol Researcher & Core Contributor | Day 4 | [x.com/rachitanand_](https://x.com/rachitanand_) |

---

### Verification & Testing
- [x] Responsive layout verified on mobile, tablet, and desktop viewports.
- [x] Day filter tabs accurately display counts and filter cards with zero layout shift.
- [x] Speaker modal opens smoothly with complete biography, track, and social links.
- [x] Hero moving carousel loops seamlessly with all 13 speaker cards.
- [x] All 𝕏 / Twitter links tested and open in new tabs with `rel="noopener noreferrer"`.
- [x] Git diff checked for clean syntax and no regressions.
```
