import React from 'react';

export default function Community() {
  return (
    <>
<div className="community-bg" id="community">
  <div className="wrap" style={{ textAlign: 'center' }}>
    <div className="sec-eyebrow">
      <span className="sec-eyebrow-dot" style={{ background: '#10b981', boxShadow: '0 0 8px #10b981' }}></span>
      <span>Devcon 8 India · Current Event (2026)</span>
    </div>
    <div className="sec-title">Follow Along and Join the Discussion</div>
    <p className="sec-body" style={{ maxWidth: '740px', margin: '0 auto 16px', color: 'rgba(255, 255, 255, 0.78)' }}>
      Official live announcements and community discussions for our active flagship event — <strong>EIP Hub @ Devcon 8 India (Mumbai)</strong>.
    </p>
    <div style={{ display: 'inline-flex', alignItems: 'center', gap: '8px', padding: '6px 16px', borderRadius: '100px', background: 'rgba(16, 185, 129, 0.12)', border: '1px solid rgba(16, 185, 129, 0.35)', color: '#6ee7b7', fontSize: '12px', fontWeight: '700', marginBottom: '8px' }}>
      <span className="phase-dot dot-live"></span>
      <span>Current Event Official Posts &amp; Discussions</span>
    </div>

    <div className="community-grid" style={{ textAlign: 'left' }}>
      {/* Left Card: Official Original Twitter / X Announcement */}
      <div className="community-card">
        <h4><span className="feat-chip-dot" style={{ background: '#38bdf8' }}></span> Devcon 8 Mumbai · Official Announcement</h4>
        <div className="tweet-widget">
          <div className="tweet-meta-top">
            <span className="tweet-cat-badge"><span className="tweet-cat-dot"></span> Official X Post</span>
            <span className="tweet-x-icon">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
                <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
              </svg>
            </span>
          </div>

          <div className="tweet-author-bar">
            <div className="tweet-avatar">
              <svg width="38" height="38" viewBox="0 0 40 40" fill="none">
                <rect width="40" height="40" rx="10" fill="#121626"/>
                <polygon points="20 7 31 18 20 23 9 18" fill="url(#twt-grad1)"/>
                <polygon points="20 23 31 18 20 33" fill="url(#twt-grad2)"/>
                <polygon points="20 23 9 18 20 33" fill="url(#twt-grad3)"/>
                <defs>
                  <linearGradient id="twt-grad1" x1="20" y1="7" x2="20" y2="23" gradientUnits="userSpaceOnUse">
                    <stop stopColor="#f59e0b"/>
                    <stop offset="1" stopColor="#ef4444"/>
                  </linearGradient>
                  <linearGradient id="twt-grad2" x1="20" y1="18" x2="31" y2="33" gradientUnits="userSpaceOnUse">
                    <stop stopColor="#f59e0b"/>
                    <stop offset="1" stopColor="#d97706"/>
                  </linearGradient>
                  <linearGradient id="twt-grad3" x1="9" y1="18" x2="20" y2="33" gradientUnits="userSpaceOnUse">
                    <stop stopColor="#fbbf24"/>
                    <stop offset="1" stopColor="#b45309"/>
                  </linearGradient>
                </defs>
              </svg>
            </div>
            <div className="tweet-author-meta">
              <div className="tweet-author-name">
                <span>Devcon 8 | Mumbai, India 🇮🇳</span>
                <svg width="15" height="15" viewBox="0 0 24 24" fill="#38bdf8" style={{ verticalAlign: 'middle', marginLeft: '2px' }}>
                  <path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z"/>
                </svg>
              </div>
              <div className="tweet-author-handle">@EFDevcon · Sep 9, 2026</div>
            </div>
          </div>

          <div className="tweet-content-text">
            <p className="tweet-lead">Drumroll please... We are thrilled to announce the 14 Community Hubs selected for Devcon 8!</p>
            <div className="tweet-hubs-list">
              <div className="tweet-hub-row"><span>🔒</span> Privacy Hub</div>
              <div className="tweet-hub-row"><span>🛟</span> Security Hub</div>
              
              {/* HIGHLIGHTED EIP HUB (Spotlight where we are) */}
              <div className="tweet-hub-active">
                <span className="hub-active-icon">📄</span>
                <span className="hub-active-name">EIP Hub</span>
                <span className="hub-active-badge">📍 We Are Here ✨</span>
              </div>

              <div className="tweet-hub-row"><span>🤝</span> P2P Networking Hub</div>
              <div className="tweet-hub-row"><span>🪙</span> Token Rights Hub</div>
              <div className="tweet-hub-row"><span>📈</span> Prediction Markets Hub</div>
              <div className="tweet-hub-row"><span>🛠️</span> Open Source Builders Hub</div>
              <div className="tweet-hub-row"><span>🎨</span> Onchain Art Hub</div>
              <div className="tweet-hub-row"><span>🧬</span> DeSci Hub</div>
              <div className="tweet-hub-row"><span>🌐</span> Resilient Networks Hub</div>
            </div>
          </div>

          <div className="tweet-tags">
            <span className="tweet-tag">#Devcon8</span>
            <span className="tweet-tag">#Ethereum</span>
            <span className="tweet-tag">#CommunityHubs</span>
            <span className="tweet-tag">#EIPHub</span>
          </div>

          <div className="tweet-stats-bar">
            <span className="tweet-stat">💬 <b>28</b> replies</span>
            <span className="tweet-stat">🔁 <b>52</b> reposts</span>
            <span className="tweet-stat">❤️ <b>218</b> likes</span>
            <span className="tweet-stat">🔖 <b>64</b> bookmarks</span>
          </div>

          <div className="tweet-action-row">
            <a href="https://x.com/EFDevcon/status/2097721361770701294" target="_blank" rel="noopener noreferrer" className="btn-tweet-go">
              View on 𝕏 ↗
            </a>
            <a href="https://x.com/eiphub" target="_blank" rel="noopener noreferrer" className="btn-tweet-go" style={{ background: 'rgba(255,255,255,0.06)', borderColor: 'rgba(255,255,255,0.18)', color: '#fff' }}>
              Follow @eiphub ↗
            </a>
            <a href="https://www.linkedin.com/company/eip-hub/" target="_blank" rel="noopener noreferrer" className="btn-tweet-go" style={{ background: 'rgba(10,102,194,0.15)', borderColor: 'rgba(10,102,194,0.4)', color: '#fff' }}>
              Follow on LinkedIn ↗
            </a>
            <span className="tweet-url-hint">x.com/eiphub</span>
          </div>
        </div>
      </div>

      {/* Right Card: Rich Devcon Forum Thread Widget */}
      <div className="community-card">
        <h4><span className="feat-chip-dot" style={{ background: '#818cf8' }}></span> Devcon 8 Mumbai · Official Forum Thread</h4>
        <div className="forum-widget">
          <div className="forum-meta-top">
            <span className="forum-cat-badge"><span className="forum-cat-dot"></span> Community Hubs</span>
            <span className="forum-time">Devcon 8 India · Mumbai</span>
          </div>

          <div className="forum-author-bar">
            {/* Background color removed from letter EF avatar as requested */}
            <div className="forum-avatar">EF</div>
            <div>
              <div className="forum-author-name">Devcon Team & EIP Authors</div>
              <div className="forum-author-sub">Official Ethereum Foundation Forum</div>
            </div>
          </div>

          <a href="https://forum.devcon.org/t/devcon-8-india-community-hub-eip-hub/8747" target="_blank" className="forum-thread-title">
            [Devcon 8 India Community Hub] EIP Hub: Standards, Governance & Protocol Upgrades
          </a>

          <div className="forum-body-text">
            "A dedicated four-day collaborative space at Devcon 8 India for EIP authors, ERC standard contributors, editors, and protocol builders. Live office hours, dashboard stations, and onboarding for new contributors across APAC."
          </div>

          <div className="forum-tags">
            <span className="forum-tag">#devcon-8</span>
            <span className="forum-tag">#eip-hub</span>
            <span className="forum-tag">#standards</span>
            <span className="forum-tag">#ercs</span>
            <span className="forum-tag">#mumbai</span>
          </div>

          <div className="forum-stats-bar">
            <span className="forum-stat">💬 <b>48</b> replies</span>
            <span className="forum-stat">👁️ <b>2.6k</b> views</span>
            <span className="forum-stat">❤️ <b>124</b> likes</span>
            <span className="forum-stat">👥 <b>32</b> authors</span>
          </div>

          <div className="forum-action-row">
            <a href="https://forum.devcon.org/t/devcon-8-india-community-hub-eip-hub/8747" target="_blank" className="btn-forum-go">
              Read on Forum ↗
            </a>
            <span className="forum-url-hint">forum.devcon.org</span>
          </div>
        </div>
      </div>
    </div>
  </div>
</div>

    </>
  );
}
