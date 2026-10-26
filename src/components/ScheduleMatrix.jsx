import React, { useState, useMemo } from 'react';
import { SUMMIT_SCHEDULE } from '../data/scheduleData.js';

export default function ScheduleMatrix() {
  const [selectedDay, setSelectedDay] = useState('all');
  const [selectedFormat, setSelectedFormat] = useState('all');
  const [searchQuery, setSearchQuery] = useState('');

  const formats = [
    { id: 'all', label: 'All Formats', icon: '✨' },
    { id: 'Talk', label: 'Keynotes & Talks', icon: '🎙️' },
    { id: 'Workshop', label: 'Workshops', icon: '🛠️' },
    { id: 'AMA', label: 'AMAs & Fishbowls', icon: '💬' },
    { id: 'Quiz', label: 'Quiz Games', icon: '🏆' },
    { id: 'Break', label: 'Breaks & Networking', icon: '☕' }
  ];

  const filteredSessions = useMemo(() => {
    return SUMMIT_SCHEDULE.filter(session => {
      // Day filter
      if (selectedDay !== 'all' && String(session.day) !== String(selectedDay)) {
        return false;
      }

      // Format filter
      if (selectedFormat !== 'all') {
        if (selectedFormat === 'AMA') {
          if (session.format !== 'AMA' && session.format !== 'Fishbowl') return false;
        } else if (selectedFormat === 'Break') {
          if (session.format !== 'Break' && session.format !== 'Networking') return false;
        } else if (session.format !== selectedFormat) {
          return false;
        }
      }

      // Search query
      if (searchQuery.trim()) {
        const q = searchQuery.toLowerCase().trim();
        const inTitle = session.title?.toLowerCase().includes(q);
        const inDesc = session.description?.toLowerCase().includes(q);
        const inSpeakers = session.speakers?.toLowerCase().includes(q);
        const inTopic = session.topic?.toLowerCase().includes(q);
        const inTime = session.timeDisplay?.toLowerCase().includes(q);
        if (!inTitle && !inDesc && !inSpeakers && !inTopic && !inTime) {
          return false;
        }
      }

      return true;
    });
  }, [selectedDay, selectedFormat, searchQuery]);

  const dayCounts = useMemo(() => {
    return {
      all: SUMMIT_SCHEDULE.length,
      1: SUMMIT_SCHEDULE.filter((s) => s.day === 1).length,
      2: SUMMIT_SCHEDULE.filter((s) => s.day === 2).length,
      3: SUMMIT_SCHEDULE.filter((s) => s.day === 3).length,
      4: SUMMIT_SCHEDULE.filter((s) => s.day === 4).length
    };
  }, []);

  const getFormatBadgeStyle = (format) => {
    switch (format) {
      case 'Talk':
        return { background: 'rgba(129, 140, 248, 0.16)', color: '#c7d2fe', border: '1px solid rgba(129, 140, 248, 0.35)' };
      case 'Workshop':
      case 'Fishbowl':
        return { background: 'rgba(251, 191, 36, 0.16)', color: '#fde68a', border: '1px solid rgba(251, 191, 36, 0.35)' };
      case 'AMA':
        return { background: 'rgba(6, 182, 212, 0.16)', color: '#7dd3fc', border: '1px solid rgba(6, 182, 212, 0.35)' };
      case 'Quiz':
        return { background: 'rgba(236, 72, 153, 0.16)', color: '#fbcfe8', border: '1px solid rgba(236, 72, 153, 0.35)' };
      case 'Break':
      case 'Networking':
        return { background: 'rgba(16, 185, 129, 0.16)', color: '#a7f3d0', border: '1px solid rgba(16, 185, 129, 0.35)' };
      case 'Welcome':
      case 'Closing':
        return { background: 'rgba(168, 85, 247, 0.16)', color: '#e9d5ff', border: '1px solid rgba(168, 85, 247, 0.35)' };
      default:
        return { background: 'rgba(255, 255, 255, 0.08)', color: '#e2e8f0', border: '1px solid rgba(255, 255, 255, 0.15)' };
    }
  };

  const getDayBadge = (day) => {
    switch (day) {
      case 1:
        return { label: 'Day 1 · Nov 3', color: '#fbbf24', bg: 'rgba(251, 191, 36, 0.15)' };
      case 2:
        return { label: 'Day 2 · Nov 4', color: '#818cf8', bg: 'rgba(129, 140, 248, 0.15)' };
      case 3:
        return { label: 'Day 3 · Nov 5', color: '#06b6d4', bg: 'rgba(6, 182, 212, 0.15)' };
      case 4:
        return { label: 'Day 4 · Nov 6', color: '#10b981', bg: 'rgba(16, 185, 129, 0.15)' };
      default:
        return { label: `Day ${day}`, color: '#94a3b8', bg: 'rgba(255, 255, 255, 0.1)' };
    }
  };

  return (
    <div className="schedule-matrix-wrapper" id="schedule-matrix">
      <div className="schedule-matrix-header">
        <div className="matrix-title-pod">
          <span className="matrix-badge"><span className="day-pulse-dot"></span> Confirmed Schedule</span>
          <h2 className="matrix-heading">Official 4-Day Session Timeline</h2>
          <p className="matrix-sub">
            Browse the complete minute-by-minute schedule across all 4 days at Jio World Centre, Mumbai.
          </p>
        </div>

        {/* Search Input */}
        <div className="matrix-search-wrap">
          <span className="matrix-search-icon">🔍</span>
          <input
            type="text"
            className="matrix-search-input"
            placeholder="Search sessions, topics, EIP numbers, or speakers..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
          />
          {searchQuery && (
            <button
              type="button"
              className="matrix-clear-search-btn"
              onClick={() => setSearchQuery('')}
              title="Clear search"
            >
              ✕
            </button>
          )}
        </div>
      </div>

      {/* Day Selector Tabs */}
      <div className="matrix-day-tabs">
        <button
          type="button"
          className={`matrix-day-tab ${selectedDay === 'all' ? 'active' : ''}`}
          onClick={() => setSelectedDay('all')}
        >
          <span className="tab-circle-dot" style={{ background: '#c7d2fe' }}></span>
          <span>All 4 Days</span>
          <span className="matrix-tab-count">{dayCounts.all}</span>
        </button>
        <button
          type="button"
          className={`matrix-day-tab ${selectedDay === '1' ? 'active' : ''}`}
          onClick={() => setSelectedDay('1')}
        >
          <span className="tab-circle-dot" style={{ background: '#fbbf24' }}></span>
          <span>Day 1 · Nov 3</span>
          <span className="matrix-tab-count">{dayCounts[1]}</span>
        </button>
        <button
          type="button"
          className={`matrix-day-tab ${selectedDay === '2' ? 'active' : ''}`}
          onClick={() => setSelectedDay('2')}
        >
          <span className="tab-circle-dot" style={{ background: '#818cf8' }}></span>
          <span>Day 2 · Nov 4</span>
          <span className="matrix-tab-count">{dayCounts[2]}</span>
        </button>
        <button
          type="button"
          className={`matrix-day-tab ${selectedDay === '3' ? 'active' : ''}`}
          onClick={() => setSelectedDay('3')}
        >
          <span className="tab-circle-dot" style={{ background: '#06b6d4' }}></span>
          <span>Day 3 · Nov 5</span>
          <span className="matrix-tab-count">{dayCounts[3]}</span>
        </button>
        <button
          type="button"
          className={`matrix-day-tab ${selectedDay === '4' ? 'active' : ''}`}
          onClick={() => setSelectedDay('4')}
        >
          <span className="tab-circle-dot" style={{ background: '#10b981' }}></span>
          <span>Day 4 · Nov 6</span>
          <span className="matrix-tab-count">{dayCounts[4]}</span>
        </button>
      </div>

      {/* Format Filter Bar */}
      <div className="matrix-format-bar">
        {formats.map((fmt) => (
          <button
            key={fmt.id}
            type="button"
            className={`matrix-format-pill ${selectedFormat === fmt.id ? 'active' : ''}`}
            onClick={() => setSelectedFormat(fmt.id)}
          >
            <span>{fmt.icon}</span>
            <span>{fmt.label}</span>
          </button>
        ))}
      </div>

      {/* Sessions Count Indicator */}
      <div className="matrix-results-bar">
        <span className="results-count-text">
          Showing <strong>{filteredSessions.length}</strong> {filteredSessions.length === 1 ? 'session' : 'sessions'}
          {selectedDay !== 'all' ? ` on Day ${selectedDay}` : ' across the summit'}
        </span>
        <span className="timezone-pill">⏱️ All times in IST (UTC+5:30)</span>
      </div>

      {/* Sessions Timeline List */}
      <div className="matrix-timeline-stream">
        {filteredSessions.length === 0 ? (
          <div className="matrix-no-results">
            <div className="no-res-icon">🔍</div>
            <h4>No sessions found</h4>
            <p>No scheduled events match your current filter criteria.</p>
            <button
              type="button"
              className="matrix-btn-reset"
              onClick={() => {
                setSelectedDay('all');
                setSelectedFormat('all');
                setSearchQuery('');
              }}
            >
              Reset All Filters
            </button>
          </div>
        ) : (
          filteredSessions.map((session) => {
            const dayBadge = getDayBadge(session.day);
            const formatStyle = getFormatBadgeStyle(session.format);

            return (
              <div
                key={session.id}
                className={`matrix-session-card ${session.isBreak ? 'is-break-card' : ''}`}
              >
                <div className="matrix-time-col">
                  <div className="session-time-block">
                    <span className="session-time-start">{session.from}</span>
                    <span className="session-time-arrow">–</span>
                    <span className="session-time-end">{session.to}</span>
                  </div>
                  <span
                    className="session-day-tag"
                    style={{ background: dayBadge.bg, color: dayBadge.color, border: `1px solid ${dayBadge.color}35` }}
                  >
                    {dayBadge.label}
                  </span>
                </div>

                <div className="matrix-content-col">
                  <div className="session-header-row">
                    <div className="session-badges-wrap">
                      <span className="session-format-badge" style={formatStyle}>
                        <span>{session.formatIcon}</span>
                        <span>{session.format}</span>
                      </span>
                      {session.topic && (
                        <span className="session-topic-tag">{session.topic}</span>
                      )}
                    </div>
                  </div>

                  <h3 className="session-title">{session.title}</h3>

                  {session.speakers && (
                    <div className="session-speakers-row">
                      <span className="speakers-label-icon">🎙️</span>
                      <div className="speakers-names-list">
                        {session.speakerKeys && session.speakerKeys.length > 0 ? (
                          session.speakerKeys.map((key, idx) => (
                            <button
                              key={key}
                              type="button"
                              className="matrix-speaker-btn"
                              onClick={() => window.openSpeakerModal && window.openSpeakerModal(key)}
                              title="Click to view speaker profile"
                            >
                              <span>{session.speakers.split(', ')[idx] || session.speakers}</span>
                              <span className="spk-arrow">➔</span>
                            </button>
                          ))
                        ) : (
                          <span className="speakers-plain-text">{session.speakers}</span>
                        )}
                      </div>
                    </div>
                  )}

                  {session.description && (
                    <p className="session-desc-text">{session.description}</p>
                  )}
                </div>
              </div>
            );
          })
        )}
      </div>

      <div className="matrix-footer-cta">
        <div className="footer-cta-text">
          <strong>Need to prepare your session deck or check stage AV?</strong>
          <span>Reach out to the EIP Hub Editorial &amp; Review Committee at Jio World Centre.</span>
        </div>
        <a href="https://lu.ma/czi58jpe" target="_blank" rel="noopener noreferrer" className="btn-matrix-luma">
          <span>Register on Luma</span>
          <span>↗</span>
        </a>
      </div>
    </div>
  );
}
