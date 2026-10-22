
export function initSiteInteractions() {
  if (typeof window === 'undefined') return;

// Countdown — Devcon 8 India: 3 Nov 2026, 08:30 IST to 6 Nov 2026, 19:00 IST
const eventStart = new Date('2026-11-03T08:30:00+05:30');
const eventEnd   = new Date('2026-11-06T19:00:00+05:30');

function tick(){
  const cdD = document.getElementById('cd-d');
  const cdH = document.getElementById('cd-h');
  const cdM = document.getElementById('cd-m');
  const cdS = document.getElementById('cd-s');
  if(!cdD || !cdH || !cdM || !cdS) return;

  const now = new Date();
  const diffStart = eventStart - now;
  const liveBanner = document.getElementById('cd-live-banner');

  if(diffStart <= 0){
    // Event has started!
    cdD.textContent = '00';
    cdH.textContent = '00';
    cdM.textContent = '00';
    cdS.textContent = '00';

    if(now <= eventEnd){
      // Currently happening live!
      if(liveBanner){
        liveBanner.style.display = 'inline-flex';
        const msgEl = liveBanner.querySelector('.cd-live-msg');
        if(msgEl) msgEl.textContent = 'Devcon 8 India & EIP Hub are underway at Jio World Centre, Mumbai!';
      }
    } else {
      // Event concluded
      if(liveBanner){
        liveBanner.style.display = 'inline-flex';
        liveBanner.style.background = 'rgba(245,158,11,0.12)';
        liveBanner.style.borderColor = 'rgba(245,158,11,0.4)';
        const bcn = liveBanner.querySelector('.cd-live-beacon');
        if(bcn){
          bcn.innerHTML = '✨ Concluded';
          bcn.style.color = '#fbbf24';
        }
        const msgEl = liveBanner.querySelector('.cd-live-msg');
        if(msgEl) msgEl.textContent = 'Devcon 8 India has concluded! Explore sessions and recordings below.';
      }
    }
    return;
  }

  // Countdown in progress
  cdD.textContent = String(Math.floor(diffStart / 86400000)).padStart(2,'0');
  cdH.textContent = String(Math.floor((diffStart % 86400000) / 3600000)).padStart(2,'0');
  cdM.textContent = String(Math.floor((diffStart % 3600000) / 60000)).padStart(2,'0');
  cdS.textContent = String(Math.floor((diffStart % 60000) / 1000)).padStart(2,'0');
  if(liveBanner) liveBanner.style.display = 'none';
}
if(typeof window !== 'undefined'){
  if(window.__cdInterval) clearInterval(window.__cdInterval);
  tick();
  window.__cdInterval = setInterval(tick, 1000);
}

function copySpeakerEmail(btnId, txtId){
  var email = "team@eiphub.xyz";
  var bId = btnId || 'copy-speak-mail-btn';
  var tId = txtId || 'copy-btn-text';
  navigator.clipboard.writeText(email).then(function(){
    var btn = document.getElementById(bId);
    var btnText = document.getElementById(tId);
    var origText = btnText ? btnText.textContent : 'Copy Email';
    if(btnText){
      btnText.textContent = "Copied! ✓";
    }
    if(btn){
      btn.classList.add('copied');
      setTimeout(function(){
        if(btnText) btnText.textContent = origText;
        btn.classList.remove('copied');
      }, 2500);
    }
  });
}

// Copy Luma Link (Consolidated button with copy-paste icon)
function copyLumaLink(e){
  if(e && e.stopPropagation) e.stopPropagation();
  var url = "https://lu.ma/czi58jpe";
  navigator.clipboard.writeText(url).then(function(){
    var btn = document.getElementById('reg-copy-btn');
    var txt = document.getElementById('reg-copy-text');
    if(txt){
      txt.textContent = "Copied! ✓";
    }
    if(btn){
      btn.classList.add('copied');
      setTimeout(function(){
        if(txt) txt.textContent = "Copy link";
        btn.classList.remove('copied');
      }, 2500);
    }
  });
}

// Copy Student Support Application Form Link
function copyStudentFormLink(e){
  if(e && e.stopPropagation) e.stopPropagation();
  var url = "https://cryptpad.fr/form/#/2/form/view/MHixuaRrC7r9WLlXaNU6V2A+cxZrrcYKnyQ7nZeXt+A/";
  navigator.clipboard.writeText(url).then(function(){
    var btn = document.getElementById('copy-student-link-btn');
    var txt = document.getElementById('student-copy-label');
    if(txt){
      txt.textContent = "Copied! ✓";
    }
    if(btn){
      btn.classList.add('copied');
      setTimeout(function(){
        if(txt) txt.textContent = "Copy form link";
        btn.classList.remove('copied');
      }, 2500);
    }
  });
}

// Partner Form Direct Link Action
function openPartnerModal(e){
  if(e && e.preventDefault) e.preventDefault();
  window.open('https://forms.gle/dTqzAyXLdhmHtTMh8', '_blank');
}
function closePartnerModal(){}


// EIP Summit Video Player & Session Switcher
function selectSummitVideo(btnEl){
  if(!btnEl) return;
  var videoId = btnEl.getAttribute('data-vid');
  var title = btnEl.getAttribute('data-title');
  var speaker = btnEl.getAttribute('data-speaker');
  var role = btnEl.getAttribute('data-role');
  var avatar = btnEl.getAttribute('data-avatar');
  var tag = btnEl.getAttribute('data-tag');
  var origin = btnEl.getAttribute('data-origin');
  var captionTag = btnEl.getAttribute('data-caption-tag');
  var captionDesc = btnEl.getAttribute('data-caption-desc');

  var iframe = document.getElementById('summit-video-iframe');
  var titleEl = document.getElementById('summit-video-title');
  var avatarEl = document.getElementById('summit-speaker-avatar');
  var nameEl = document.getElementById('summit-speaker-name');
  var roleEl = document.getElementById('summit-speaker-role');
  var tagEl = document.getElementById('summit-speaker-tag');
  var originEl = document.getElementById('summit-speaker-origin');
  var ytLink = document.getElementById('summit-video-yt-link');
  var captionTagEl = document.getElementById('summit-caption-tag');
  var captionDescEl = document.getElementById('summit-caption-desc');

  var twitter = btnEl.getAttribute('data-twitter');
  var handle = btnEl.getAttribute('data-handle');

  var xLink = document.getElementById('summit-speaker-x-link');
  var handleEl = document.getElementById('summit-speaker-handle');

  if(iframe && videoId){
    iframe.src = 'https://www.youtube-nocookie.com/embed/' + videoId + '?autoplay=1&rel=0&modestbranding=1&enablejsapi=1';
  }
  if(titleEl && title) titleEl.textContent = title;
  if(avatarEl && avatar){
    avatarEl.src = avatar;
    avatarEl.alt = speaker || 'Speaker';
  }
  if(nameEl && speaker) nameEl.textContent = speaker;
  if(roleEl && role) roleEl.innerHTML = role;
  if(tagEl && tag) tagEl.textContent = tag;
  if(originEl && origin) originEl.textContent = origin;
  if(ytLink && videoId) ytLink.href = 'https://www.youtube.com/watch?v=' + videoId;
  if(captionTagEl && captionTag) captionTagEl.textContent = captionTag;
  if(captionDescEl && captionDesc) captionDescEl.textContent = captionDesc;

  if(xLink && handleEl){
    if(twitter && handle){
      xLink.href = twitter;
      handleEl.textContent = handle;
      xLink.style.display = 'inline-flex';
    } else {
      xLink.style.display = 'none';
    }
  }

  var items = document.querySelectorAll('.summit-session-item');
  items.forEach(function(item){ item.classList.remove('active'); });
  btnEl.classList.add('active');
  try {
    btnEl.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
  } catch(e){}

  syncSummitPlaylistHeight();
}

// Backwards compatibility alias
function switchSummitVideo(videoId, title, speaker, captionTag, captionDesc, btnEl){
  if(!btnEl && videoId){
    btnEl = document.querySelector('.summit-session-item[data-vid="' + videoId + '"]');
  }
  if(btnEl && btnEl.getAttribute('data-vid')){
    selectSummitVideo(btnEl);
    return;
  }
  var iframe = document.getElementById('summit-video-iframe');
  var titleEl = document.getElementById('summit-video-title');
  var nameEl = document.getElementById('summit-speaker-name');
  var ytLink = document.getElementById('summit-video-yt-link');
  var captionTagEl = document.getElementById('summit-caption-tag');
  var captionDescEl = document.getElementById('summit-caption-desc');

  if(iframe) iframe.src = 'https://www.youtube-nocookie.com/embed/' + videoId + '?autoplay=1&rel=0&modestbranding=1&enablejsapi=1';
  if(titleEl) titleEl.textContent = title;
  if(nameEl) nameEl.textContent = speaker;
  if(ytLink) ytLink.href = 'https://www.youtube.com/watch?v=' + videoId;
  if(captionTagEl) captionTagEl.textContent = captionTag;
  if(captionDescEl) captionDescEl.textContent = captionDesc;

  var items = document.querySelectorAll('.summit-session-item');
  items.forEach(function(item){ item.classList.remove('active'); });
  if(btnEl) btnEl.classList.add('active');

  syncSummitPlaylistHeight();
}

// Synchronize right playlist column with left video player wrapper height
// Dynamically sizes cards and container height so EXACTLY a whole number of cards show
// with ZERO cards cut in half, and extra sessions show smoothly in scroll
function syncSummitPlaylistHeight(){
  var playlistCol = document.querySelector('.summit-playlist-col');
  var playlistItems = document.querySelector('.summit-playlist-items');
  if(!playlistCol || !playlistItems) return;

  var sessionItems = document.querySelectorAll('.summit-session-item');
  for(var i = 0; i < sessionItems.length; i++){
    var item = sessionItems[i];
    item.style.height = '';
    item.style.minHeight = '';
    item.style.maxHeight = '';
    item.style.flex = '';
  }

  playlistCol.style.height = '';
  playlistItems.style.height = '';
}
window.addEventListener('load', syncSummitPlaylistHeight);
window.addEventListener('resize', syncSummitPlaylistHeight);
document.addEventListener('DOMContentLoaded', syncSummitPlaylistHeight);

// Auto-Pause Summit Video Player When Scrolled Out of View / Off-Screen
function pauseSummitVideo(){
  var iframe = document.getElementById('summit-video-iframe');
  if(!iframe || !iframe.contentWindow) return;
  try {
    iframe.contentWindow.postMessage('{"event":"command","func":"pauseVideo","args":""}', '*');
  } catch(e){}
}

(function initSummitVideoScreenGuard(){
  // 1. Pause video automatically when user scrolls away so player is not on screen
  if('IntersectionObserver' in window){
    var playerObserver = new IntersectionObserver(function(entries){
      entries.forEach(function(entry){
        if(!entry.isIntersecting){
          pauseSummitVideo();
        }
      });
    }, {
      threshold: 0.15 // Pauses when less than 15% of the video player is visible in viewport
    });

    var targetPlayer = document.querySelector('.summit-player-wrapper') || document.getElementById('summit-video-iframe');
    if(targetPlayer){
      playerObserver.observe(targetPlayer);
    }
  }

  // 2. Pause video automatically when user switches away from current tab or minimizes
  document.addEventListener('visibilitychange', function(){
    if(document.hidden){
      pauseSummitVideo();
    }
  });

  // 3. Pause video when page hides or unloads
  window.addEventListener('pagehide', pauseSummitVideo);
})();


// Daily Program Tracks Interactive Showcase Controller
function switchDayTab(dayNum){
  var btns = document.querySelectorAll('.day-tab-btn');
  btns.forEach(function(b){
    if(parseInt(b.getAttribute('data-day')) === dayNum){
      b.classList.add('active');
      b.setAttribute('aria-selected', 'true');
    } else {
      b.classList.remove('active');
      b.setAttribute('aria-selected', 'false');
    }
  });

  var slides = document.querySelectorAll('.day-showcase-slide');
  slides.forEach(function(s){
    if(parseInt(s.getAttribute('data-day')) === dayNum){
      s.classList.add('active');
    } else {
      s.classList.remove('active');
    }
  });

  var panel = document.getElementById('day-showcase-panel');
  if(panel){
    panel.className = 'day-showcase-panel showcase-day-' + dayNum;
  }

  // When in 4-Day Grid mode, highlight the corresponding card and smoothly scroll into view
  var grid = document.getElementById('days-grid-container');
  if(grid && grid.style.display !== 'none'){
    document.querySelectorAll('.day-card').forEach(function(c){
      c.classList.remove('day-card-focused');
    });
    var targetCard = document.getElementById('day-card-' + dayNum);
    if(targetCard){
      targetCard.classList.add('day-card-focused');
      var rect = targetCard.getBoundingClientRect();
      if(rect.top < 90 || rect.bottom > window.innerHeight){
        targetCard.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
      }
    }
  }
}

// Open detailed deep-dive explorer for a specific day
function openDayDetail(dayNum){
  switchDayTab(dayNum);
  switchDayViewMode('explorer');
  var panel = document.getElementById('day-showcase-panel');
  if(panel){
    var nav = document.querySelector('nav');
    var navHeight = nav ? (nav.offsetHeight + 24) : 84;
    var elPos = panel.getBoundingClientRect().top + window.pageYOffset;
    window.scrollTo({ top: Math.max(0, elPos - navHeight), behavior: 'smooth' });
  }
}

function switchDayViewMode(mode){
  var btnExplorer = document.getElementById('btn-view-explorer');
  var btnGrid = document.getElementById('btn-view-grid');
  var showcase = document.getElementById('day-showcase-panel');
  var grid = document.getElementById('days-grid-container');

  if(mode === 'explorer'){
    if(btnExplorer) btnExplorer.classList.add('active');
    if(btnGrid) btnGrid.classList.remove('active');
    if(showcase) showcase.style.display = 'block';
    if(grid) grid.style.display = 'none';
  } else {
    if(btnExplorer) btnExplorer.classList.remove('active');
    if(btnGrid) btnGrid.classList.add('active');
    if(showcase) showcase.style.display = 'none';
    if(grid) grid.style.display = 'grid';
  }
}

// FAQ
function toggleFaq(btn){ btn.parentElement.classList.toggle('open'); }

// Smooth Scroll & Clean URL (completely removes '#' from URL bar everywhere)
function scrollToSection(targetId){
  if(!targetId || targetId === 'top' || targetId === 'hero'){
    window.scrollTo({ top: 0, behavior: 'smooth' });
    return;
  }
  var target = document.getElementById(targetId);
  if(!target && targetId === 'days') target = document.getElementById('program');
  if(!target && targetId === 'program') target = document.getElementById('days');
  if(!target && targetId === 'summit-atmosphere') target = document.getElementById('community-booth');

  if(target){
    var nav = document.querySelector('nav');
    var navClearance = 72;
    if(nav){
      var navRect = nav.getBoundingClientRect();
      navClearance = navRect.bottom > 0 ? (navRect.bottom + 4) : 72;
    }
    var elPos = target.getBoundingClientRect().top + window.pageYOffset;
    window.scrollTo({
      top: Math.max(0, elPos - navClearance),
      behavior: 'smooth'
    });
  }
}

function cleanHashFromUrl(){
  if(window.location.hash && window.history && window.history.replaceState){
    window.history.replaceState(null, '', window.location.pathname + window.location.search);
  }
}

// Global click interceptor: smoothly scroll to sections and prevent '#' in URL bar
document.addEventListener('click', function(e){
  var anchor = e.target.closest('a[href^="#"]');
  if(!anchor) return;

  var href = anchor.getAttribute('href');
  if(!href) return;

  e.preventDefault();

  if(href === '#' || href === '#top' || href === '#hero'){
    scrollToSection('hero');
  } else {
    var targetId = href.substring(1);
    scrollToSection(targetId);
  }

  cleanHashFromUrl();
});

// Scroll to target if page was loaded with a hash (e.g. eiphub.xyz/#about)
(function(){
  var initialTarget = window.__pendingHash || (window.location.hash ? window.location.hash.substring(1) : null);
  if(initialTarget){
    cleanHashFromUrl();
    function triggerInitialScroll(){
      setTimeout(function(){
        scrollToSection(initialTarget);
        cleanHashFromUrl();
      }, 100);
    }
    if(document.readyState === 'loading'){
      document.addEventListener('DOMContentLoaded', triggerInitialScroll);
    } else {
      triggerInitialScroll();
    }
  }
})();

// Strip '#' on any hash change or navigation
window.addEventListener('hashchange', function(){
  if(window.location.hash){
    var target = window.location.hash.substring(1);
    cleanHashFromUrl();
    scrollToSection(target);
  }
});

// Navbar scrolled frosted style & top scroll progress bar (RAF-throttled, zero layout thrashing)
(function initScrollHandler(){
  var nav = document.querySelector('nav');
  var sp = document.getElementById('scroll-progress');
  var ticking = false;

  function updateScroll(){
    var scrollY = window.pageYOffset || document.documentElement.scrollTop;
    if(nav){
      if(scrollY > 20){
        nav.classList.add('nav-scrolled');
      } else {
        nav.classList.remove('nav-scrolled');
      }
    }
    if(sp){
      var totalH = document.documentElement.scrollHeight - window.innerHeight;
      var scrolled = totalH > 0 ? (scrollY / totalH) * 100 : 0;
      sp.style.width = Math.min(100, Math.max(0, scrolled)) + '%';
    }
    ticking = false;
  }

  window.addEventListener('scroll', function(){
    if(!ticking){
      ticking = true;
      requestAnimationFrame(updateScroll);
    }
  }, { passive: true });
})();

// Interactive Constellation & Protocol Node Network (High-Performance Batched & Viewport-Aware)
(function initHeroConstellation(){
  var canvas = document.getElementById('hero-canvas');
  if(!canvas) return;
  var heroSection = canvas.parentElement || document.getElementById('hero');
  var ctx = canvas.getContext('2d', { alpha: true });
  var width, height;
  var particles = [];
  var particleCount = 24;
  var maxDistance = 110;
  var mouse = { x: null, y: null, radius: 130 };
  var isHeroVisible = true;
  var rafId = null;
  var lastFrameTime = 0;
  var frameInterval = 1000 / 30; // Smooth 30 FPS cap saves 70% CPU/GPU cycles

  var colors = [
    { r: 249, g: 115, b: 22 },  // Royal Saffron
    { r: 245, g: 158, b: 11 },  // Devcon Marigold Gold
    { r: 6,   g: 182, b: 212 }, // Peacock Cyan / Arabian Sea
    { r: 244, g: 63,  b: 94 },  // Lotus Rose
    { r: 129, g: 140, b: 248 }, // Ethereum Indigo
    { r: 255, g: 255, b: 255 }  // Starlight White
  ];

  function resize(){
    if(!heroSection) return;
    width = heroSection.offsetWidth;
    height = heroSection.offsetHeight;
    canvas.width = width;
    canvas.height = height;
  }

  function initParticles(){
    particles = [];
    var count = window.innerWidth < 768 ? 12 : particleCount;
    for(var i = 0; i < count; i++){
      var c = colors[Math.floor(Math.random() * colors.length)];
      particles.push({
        x: Math.random() * width,
        y: Math.random() * height,
        vx: (Math.random() - 0.5) * 0.35,
        vy: (Math.random() - 0.5) * 0.35,
        radius: Math.random() * 1.5 + 1,
        colorStr: 'rgb(' + c.r + ',' + c.g + ',' + c.b + ')',
        alpha: Math.random() * 0.45 + 0.25,
        pulseSpeed: Math.random() * 0.02 + 0.01,
        pulseOffset: Math.random() * Math.PI * 2
      });
    }
  }

  function animate(t){
    if(!isHeroVisible || document.hidden){
      rafId = null;
      return;
    }

    rafId = requestAnimationFrame(animate);

    // 30 FPS frame throttling
    if(t - lastFrameTime < frameInterval) return;
    lastFrameTime = t;

    ctx.clearRect(0, 0, width, height);

    // Update particles position & mouse repulsion
    for(var i = 0; i < particles.length; i++){
      var p = particles[i];
      p.x += p.vx;
      p.y += p.vy;

      if(p.x < -10) p.x = width + 10;
      else if(p.x > width + 10) p.x = -10;
      if(p.y < -10) p.y = height + 10;
      else if(p.y > height + 10) p.y = -10;

      if(mouse.x !== null){
        var dx = p.x - mouse.x;
        var dy = p.y - mouse.y;
        var dist = Math.hypot(dx, dy);
        if(dist < mouse.radius && dist > 0){
          var force = (1 - dist / mouse.radius) * 1.1;
          p.x += (dx / dist) * force;
          p.y += (dy / dist) * force;
        }
      }
    }

    // Batched single-path draw for connecting constellation lines
    ctx.beginPath();
    ctx.strokeStyle = 'rgba(245, 158, 11, 0.12)';
    ctx.lineWidth = 0.75;
    for(var i = 0; i < particles.length; i++){
      var p = particles[i];
      for(var j = i + 1; j < particles.length; j++){
        var p2 = particles[j];
        var dxx = p.x - p2.x;
        var dyy = p.y - p2.y;
        if(Math.abs(dxx) < maxDistance && Math.abs(dyy) < maxDistance){
          var d = Math.hypot(dxx, dyy);
          if(d < maxDistance){
            ctx.moveTo(p.x, p.y);
            ctx.lineTo(p2.x, p2.y);
          }
        }
      }
    }
    ctx.stroke();

    // Draw particle nodes
    for(var i = 0; i < particles.length; i++){
      var p = particles[i];
      var pulse = Math.sin((t || 0) * 0.002 * p.pulseSpeed * 60 + p.pulseOffset) * 0.25 + 0.75;
      ctx.beginPath();
      ctx.arc(p.x, p.y, p.radius * pulse, 0, Math.PI * 2);
      ctx.fillStyle = p.colorStr;
      ctx.globalAlpha = p.alpha * pulse;
      ctx.fill();
    }
    ctx.globalAlpha = 1.0;
  }

  function startAnimation(){
    if(!rafId && isHeroVisible && !document.hidden){
      rafId = requestAnimationFrame(animate);
    }
  }

  function stopAnimation(){
    if(rafId){
      cancelAnimationFrame(rafId);
      rafId = null;
    }
  }

  // Viewport intersection observer: immediately pause animation when scrolled past hero
  if('IntersectionObserver' in window && heroSection){
    var observer = new IntersectionObserver(function(entries){
      isHeroVisible = entries[0].isIntersecting;
      if(isHeroVisible){
        startAnimation();
      } else {
        stopAnimation();
      }
    }, { threshold: 0.05 });
    observer.observe(heroSection);
  }

  // Pause when browser tab is inactive
  document.addEventListener('visibilitychange', function(){
    if(document.hidden){
      stopAnimation();
    } else if(isHeroVisible){
      startAnimation();
    }
  });

  // Scoped mouse listener only active on hero
  if(heroSection){
    heroSection.addEventListener('mousemove', function(e){
      var rect = canvas.getBoundingClientRect();
      mouse.x = e.clientX - rect.left;
      mouse.y = e.clientY - rect.top;
    }, { passive: true });
    heroSection.addEventListener('mouseleave', function(){
      mouse.x = null;
      mouse.y = null;
    }, { passive: true });
  }

  var resizeTimeout;
  window.addEventListener('resize', function(){
    clearTimeout(resizeTimeout);
    resizeTimeout = setTimeout(function(){
      resize();
      initParticles();
    }, 150);
  }, { passive: true });

  resize();
  initParticles();
  startAnimation();
})();

// ── THEME-MATCHED CUSTOM SLIDER (EIP Summit Atmosphere Showcase) ──
(function initSummitSlider(){
  var container = document.getElementById('summit-slider-container');
  var track = document.getElementById('summit-slider-track');
  if(!container || !track) return;

  var cards = track.querySelectorAll('.summit-slide-card');
  var totalSlides = cards.length;
  if(totalSlides === 0) return;

  var prevBtn = document.getElementById('summit-prev-btn');
  var nextBtn = document.getElementById('summit-next-btn');
  var currentIdxEl = document.getElementById('summit-current-idx');
  var totalIdxEl = document.getElementById('summit-total-idx');
  var pagination = document.getElementById('summit-slider-pagination');

  if(totalIdxEl) totalIdxEl.textContent = (totalSlides < 10 ? '0' : '') + totalSlides;

  var currentIndex = 0;
  var autoplayTimer = null;
  var isPaused = false;

  function getVisibleCount(){
    if(window.innerWidth <= 640) return 1;
    if(window.innerWidth <= 1024) return 2;
    return 3;
  }

  function getMaxIndex(){
    return Math.max(0, totalSlides - getVisibleCount());
  }

  // Generate pagination dots
  if(pagination){
    pagination.innerHTML = '';
    for(var i = 0; i < totalSlides; i++){
      var dot = document.createElement('button');
      dot.className = 'summit-slider-dot' + (i === 0 ? ' active' : '');
      dot.setAttribute('aria-label', 'Slide ' + (i + 1));
      dot.dataset.index = i;
      dot.addEventListener('click', function(){
        goToSlide(parseInt(this.dataset.index, 10));
      });
      pagination.appendChild(dot);
    }
  }

  function updateSlider(idx){
    var maxIdx = getMaxIndex();
    currentIndex = Math.max(0, Math.min(idx, maxIdx));

    var card = cards[0];
    if(!card) return;
    var cardWidth = card.offsetWidth;
    var gap = 20;
    var offset = currentIndex * (cardWidth + gap);

    track.style.transform = 'translateX(-' + offset + 'px)';

    if(currentIdxEl){
      var displayIdx = currentIndex + 1;
      currentIdxEl.textContent = (displayIdx < 10 ? '0' : '') + displayIdx;
    }

    if(pagination){
      var dots = pagination.querySelectorAll('.summit-slider-dot');
      dots.forEach(function(dot, i){
        if(i === currentIndex){
          dot.classList.add('active');
        } else {
          dot.classList.remove('active');
        }
      });
    }
  }

  function goToSlide(idx){
    var maxIdx = getMaxIndex();
    if(idx > maxIdx) idx = 0;
    if(idx < 0) idx = maxIdx;
    updateSlider(idx);
  }

  function nextSlide(){
    var maxIdx = getMaxIndex();
    if(currentIndex >= maxIdx){
      goToSlide(0);
    } else {
      goToSlide(currentIndex + 1);
    }
  }

  function prevSlide(){
    var maxIdx = getMaxIndex();
    if(currentIndex <= 0){
      goToSlide(maxIdx);
    } else {
      goToSlide(currentIndex - 1);
    }
  }

  if(nextBtn) nextBtn.addEventListener('click', nextSlide);
  if(prevBtn) prevBtn.addEventListener('click', prevSlide);

  // Autoplay functionality
  function startAutoplay(){
    stopAutoplay();
    autoplayTimer = setInterval(function(){
      if(!isPaused){
        nextSlide();
      }
    }, 4500);
  }

  function stopAutoplay(){
    if(autoplayTimer){
      clearInterval(autoplayTimer);
      autoplayTimer = null;
    }
  }

  container.addEventListener('mouseenter', function(){ isPaused = true; });
  container.addEventListener('mouseleave', function(){ isPaused = false; });
  if(prevBtn) prevBtn.addEventListener('mouseenter', function(){ isPaused = true; });
  if(nextBtn) nextBtn.addEventListener('mouseenter', function(){ isPaused = true; });

  // Touch and mobile swipe gestures
  var touchStartX = 0;
  var touchEndX = 0;
  container.addEventListener('touchstart', function(e){
    isPaused = true;
    touchStartX = e.changedTouches[0].screenX;
  }, { passive: true });

  container.addEventListener('touchend', function(e){
    touchEndX = e.changedTouches[0].screenX;
    var diff = touchStartX - touchEndX;
    if(Math.abs(diff) > 40){
      if(diff > 0) nextSlide();
      else prevSlide();
    }
    setTimeout(function(){ isPaused = false; }, 1200);
  }, { passive: true });

  // Mouse drag support
  var isDragging = false;
  var mouseStartX = 0;
  container.addEventListener('mousedown', function(e){
    isDragging = true;
    mouseStartX = e.clientX;
    isPaused = true;
  });
  window.addEventListener('mouseup', function(e){
    if(!isDragging) return;
    isDragging = false;
    var diff = mouseStartX - e.clientX;
    if(Math.abs(diff) > 45){
      if(diff > 0) nextSlide();
      else prevSlide();
    }
    setTimeout(function(){ isPaused = false; }, 1200);
  });

  // Responsive resize
  window.addEventListener('resize', function(){
    updateSlider(currentIndex);
  }, { passive: true });

  // Auto-move when screen is active / in viewport; pause when scrolled off screen
  if('IntersectionObserver' in window){
    var summitObserver = new IntersectionObserver(function(entries){
      entries.forEach(function(entry){
        if(entry.isIntersecting && !document.hidden){
          isPaused = false;
          startAutoplay();
        } else {
          isPaused = true;
          stopAutoplay();
        }
      });
    }, { threshold: 0.15 });
    summitObserver.observe(container);
  }

  // Resume auto-move when tab becomes active; pause when inactive
  document.addEventListener('visibilitychange', function(){
    if(!document.hidden){
      isPaused = false;
      startAutoplay();
    } else {
      isPaused = true;
      stopAutoplay();
    }
  });
  window.addEventListener('focus', function(){
    isPaused = false;
    startAutoplay();
  });
  window.addEventListener('blur', function(){
    isPaused = true;
    stopAutoplay();
  });

  startAutoplay();
  updateSlider(0);
})();

// ── SCREEN ACTIVE / INACTIVE SMART SLIDER CONTROLLER (AUTO-MOVE WHEN VISIBLE, PAUSE WHEN INACTIVE) ──
(function initSlidersScreenActiveController(){
  var heroViewport = document.querySelector('.hero-moving-carousel-viewport');
  var heroTrack = document.querySelector('.hero-moving-carousel-track');
  var tickerSection = document.querySelector('.ticker-partners');
  var tickerInner = document.querySelector('.ticker-inner');
  var photosScroll = document.querySelector('.photos-scroll');
  var photosTrack = document.querySelector('.photos-track');

  var isHeroInView = true;
  var isTickerInView = true;
  var isPhotosInView = true;
  var isWindowFocused = !document.hidden;

  function updateHeroState(){
    if(!heroTrack) return;
    if(document.hidden || !isWindowFocused || !isHeroInView){
      heroTrack.style.animationPlayState = 'paused';
    } else {
      heroTrack.style.animationPlayState = 'running';
    }
  }

  function updateTickerState(){
    if(!tickerInner) return;
    if(document.hidden || !isWindowFocused || !isTickerInView){
      tickerInner.style.animationPlayState = 'paused';
    } else {
      tickerInner.style.animationPlayState = 'running';
    }
  }

  function updatePhotosState(){
    if(!photosTrack) return;
    if(document.hidden || !isWindowFocused || !isPhotosInView){
      photosTrack.style.animationPlayState = 'paused';
    } else {
      photosTrack.style.animationPlayState = 'running';
    }
  }

  function updateAllStates(){
    updateHeroState();
    updateTickerState();
    updatePhotosState();
  }

  // 1. Tab visibility changes (switched tab, minimized window)
  document.addEventListener('visibilitychange', function(){
    isWindowFocused = !document.hidden;
    updateAllStates();
  });

  // 2. Window focus & blur
  window.addEventListener('focus', function(){
    isWindowFocused = true;
    updateAllStates();
  });
  window.addEventListener('blur', function(){
    isWindowFocused = false;
    updateAllStates();
  });

  // 3. Viewport IntersectionObserver (pause when scrolled off screen, auto-move when on screen)
  if('IntersectionObserver' in window){
    if(heroViewport){
      var heroObs = new IntersectionObserver(function(entries){
        entries.forEach(function(entry){
          isHeroInView = entry.isIntersecting;
          updateHeroState();
        });
      }, { threshold: 0.05 });
      heroObs.observe(heroViewport);
    }

    if(tickerSection){
      var tickerObs = new IntersectionObserver(function(entries){
        entries.forEach(function(entry){
          isTickerInView = entry.isIntersecting;
          updateTickerState();
        });
      }, { threshold: 0.05 });
      tickerObs.observe(tickerSection);
    }

    if(photosScroll){
      var photosObs = new IntersectionObserver(function(entries){
        entries.forEach(function(entry){
          isPhotosInView = entry.isIntersecting;
          updatePhotosState();
        });
      }, { threshold: 0.05 });
      photosObs.observe(photosScroll);
    }
  }

  updateAllStates();
})();

// ── SMART CONTACT & SUBMISSION MODAL LOGIC ──
function openContactModal(context, event){
  pauseSummitVideo();
  if(event && event.preventDefault) event.preventDefault();
  if(event && event.stopPropagation) event.stopPropagation();

  var to = 'team@eiphub.xyz';
  var subject = 'Inquiry - EIP Hub Devcon 8';
  var body = '';
  var formUrl = '';
  var formName = 'Open Online Form';
  var formDetail = 'Direct submission form · No desktop email app needed';
  var title = 'Connect with EIP Hub';
  var desc = 'Choose how you would like to connect or submit. No email software required!';

  if(context === 'talk' || context === 'speaker'){
    title = 'Submit a Talk Proposal';
    subject = 'Talk Proposal - EIP Hub Devcon 8';
    formUrl = 'https://cryptpad.fr/form/#/2/form/view/q78P0VZ-28JejEzFYDH0fpddP7GtGERN8goafecPcN8/';
    formName = 'Open Speaker Application Form';
    formDetail = 'Official session intake form for lightning talks and tech presentations';
    desc = 'Apply to speak at Devcon 8 India. You can submit via online form or send an email.';
  } else if(context === 'panel'){
    title = 'Join a Panel Discussion';
    subject = 'Panel Interest - EIP Hub Devcon 8';
    formUrl = 'https://cryptpad.fr/form/#/2/form/view/q78P0VZ-28JejEzFYDH0fpddP7GtGERN8goafecPcN8/';
    formName = 'Open Panel Application Form';
    formDetail = 'Indicate interest in governance, standards, or enterprise panel discussions';
    desc = 'Participate in structured panel debates with EIP authors and protocol researchers.';
  } else if(context === 'workshop'){
    title = 'Propose a Hands-On Workshop';
    subject = 'Workshop Proposal - EIP Hub Devcon 8';
    formUrl = 'https://cryptpad.fr/form/#/2/form/view/q78P0VZ-28JejEzFYDH0fpddP7GtGERN8goafecPcN8/';
    formName = 'Open Workshop Intake Form';
    formDetail = 'Propose code clinics, ERC design sessions, and tooling walkthroughs';
    desc = 'Lead a hands-on developer session across any of the four tracks.';
  } else if(context === 'volunteer'){
    title = 'Shift Volunteering at EIP Hub';
    subject = 'Volunteer Signup - EIP Hub Devcon 8';
    formUrl = 'https://cryptpad.fr/form/#/2/form/view/q78P0VZ-28JejEzFYDH0fpddP7GtGERN8goafecPcN8/';
    formName = 'Open Contributor / Volunteer Form';
    formDetail = 'Help run sessions, support the booth, or assist attendees on the ground';
    desc = 'Join the on-ground contributor crew for Devcon 8 India in Mumbai.';
  } else if(context === 'partner'){
    title = 'Partner with EIP Hub';
    subject = 'Partner Inquiry - EIP Hub Devcon 8';
    formUrl = 'https://forms.gle/dTqzAyXLdhmHtTMh8';
    formName = 'Open Partnership Application Form (Google Form)';
    formDetail = 'Co-host technical tracks, support travel grants, or organize workshops';
    desc = 'Connect with our coordination team to support protocol public goods.';
  } else if(context === 'student'){
    title = 'Devcon 8 Student Support Initiative';
    subject = 'Student Support Inquiry - Devcon 8 Mumbai';
    formUrl = 'https://cryptpad.fr/form/#/2/form/view/MHixuaRrC7r9WLlXaNU6V2A+cxZrrcYKnyQ7nZeXt+A/';
    formName = 'Open Student Support Application';
    formDetail = 'Official application for eligible students seeking conference attendance support';
    desc = 'Submit your student details directly online or connect via email.';
  } else if(typeof context === 'string' && context.indexOf('mailto:') === 0){
    try {
      var urlStr = context.substring(7);
      var parts = urlStr.split('?');
      to = decodeURIComponent(parts[0]) || 'team@eiphub.xyz';
      if(parts[1]){
        var params = new URLSearchParams(parts[1]);
        if(params.has('subject')) subject = params.get('subject');
        if(params.has('body')) body = params.get('body');
      }
    } catch(err){
      to = 'team@eiphub.xyz';
    }

    var lowerSub = (subject || '').toLowerCase();
    if(lowerSub.indexOf('speaker') !== -1 || lowerSub.indexOf('talk') !== -1 || lowerSub.indexOf('panel') !== -1 || lowerSub.indexOf('workshop') !== -1){
      title = 'Submit Speaker / Session Proposal';
      formUrl = 'https://cryptpad.fr/form/#/2/form/view/q78P0VZ-28JejEzFYDH0fpddP7GtGERN8goafecPcN8/';
      formName = 'Open Speaker Application Form';
      formDetail = 'Fill out the official session intake form directly online';
      desc = 'Submit your session abstract and speaker credentials directly online or via email.';
    } else if(lowerSub.indexOf('partner') !== -1){
      title = 'Partner with EIP Hub';
      formUrl = 'https://forms.gle/dTqzAyXLdhmHtTMh8';
      formName = 'Open Partnership Application Form (Google Form)';
      formDetail = 'Submit your organization / protocol partnership application';
      desc = 'Connect with our team to co-host tracks or sponsor travel grants.';
    } else if(lowerSub.indexOf('student') !== -1){
      title = 'Devcon 8 Student Support Inquiry';
      formUrl = 'https://cryptpad.fr/form/#/2/form/view/MHixuaRrC7r9WLlXaNU6V2A+cxZrrcYKnyQ7nZeXt+A/';
      formName = 'Open Student Support Application';
      formDetail = 'Complete the official student support application online';
      desc = 'Submit your student application online or email us directly.';
    } else if(lowerSub.indexOf('volunteer') !== -1){
      title = 'Shift Volunteering';
      formUrl = 'https://cryptpad.fr/form/#/2/form/view/q78P0VZ-28JejEzFYDH0fpddP7GtGERN8goafecPcN8/';
      formName = 'Open Contributor / Volunteer Form';
      formDetail = 'Apply to volunteer on the ground at Devcon 8 India';
    } else {
      title = 'Contact EIP Hub Team';
      desc = 'Reach out directly to the EIP Hub coordination team in Mumbai.';
    }
  }

  var modalEl = document.getElementById('contact-modal');
  if(!modalEl) return;

  var titleEl = document.getElementById('cmodal-title');
  var descEl = document.getElementById('cmodal-desc');
  var formBtn = document.getElementById('cmodal-form-btn');
  var formNameEl = document.getElementById('cmodal-form-name');
  var formDetailEl = document.getElementById('cmodal-form-detail');
  var gmailBtn = document.getElementById('cmodal-gmail-btn');
  var mailtoBtn = document.getElementById('cmodal-mailto-btn');

  if(titleEl) titleEl.textContent = title;
  if(descEl) descEl.textContent = desc;

  if(formUrl && formBtn){
    formBtn.href = formUrl;
    formBtn.style.display = 'flex';
    if(formNameEl) formNameEl.textContent = formName;
    if(formDetailEl) formDetailEl.textContent = formDetail;
  } else if(formBtn){
    formBtn.style.display = 'none';
  }

  var gmailUrl = 'https://mail.google.com/mail/?view=cm&fs=1&to=' + encodeURIComponent(to) +
                 '&su=' + encodeURIComponent(subject) +
                 (body ? '&body=' + encodeURIComponent(body) : '');
  if(gmailBtn) gmailBtn.href = gmailUrl;

  var mailtoUrl = 'mailto:' + encodeURIComponent(to) +
                  '?subject=' + encodeURIComponent(subject) +
                  (body ? '&body=' + encodeURIComponent(body) : '');
  if(mailtoBtn) mailtoBtn.href = mailtoUrl;

  modalEl.style.display = 'flex';
  setTimeout(function(){
    modalEl.classList.add('open');
  }, 10);
  document.body.style.overflow = 'hidden';
}

function closeContactModal(){
  var modalEl = document.getElementById('contact-modal');
  if(!modalEl) return;
  modalEl.classList.remove('open');
  setTimeout(function(){
    modalEl.style.display = 'none';
    document.body.style.overflow = '';
  }, 240);
}

function copyContactEmail(email, btnEl){
  var address = email || 'team@eiphub.xyz';
  navigator.clipboard.writeText(address).then(function(){
    if(!btnEl) return;
    var originalHtml = btnEl.innerHTML;
    btnEl.classList.add('copied');
    var span = btnEl.querySelector('span');
    if(span){
      span.textContent = '✓ Copied!';
    } else {
      btnEl.textContent = '✓ Copied!';
    }
    setTimeout(function(){
      btnEl.classList.remove('copied');
      btnEl.innerHTML = originalHtml;
    }, 2200);
  }).catch(function(){
    prompt('Copy email address:', address);
  });
}

// Sort speaker cards in the grid alphabetically (A to Z by speaker name)
function sortSpeakersAlphabetically(){
  var grid = document.getElementById('speakers-grid-container');
  if(!grid) return;
  var cards = Array.from(grid.querySelectorAll('.speaker-card'));
  cards.sort(function(a, b){
    var nameA = (a.querySelector('.speaker-name')?.textContent || '').trim().toLowerCase();
    var nameB = (b.querySelector('.speaker-name')?.textContent || '').trim().toLowerCase();
    return nameA.localeCompare(nameB);
  });
  cards.forEach(function(c){ grid.appendChild(c); });
}
var sortSpeakersByPopularity = sortSpeakersAlphabetically;

// Summit Speakers Day Filter Controller
function filterSpeakerDay(day){
  var btns = document.querySelectorAll('.spk-day-tab-btn');
  btns.forEach(function(b){
    if(b.getAttribute('data-spk-day') === String(day)){
      b.classList.add('active');
      b.setAttribute('aria-selected', 'true');
    } else {
      b.classList.remove('active');
      b.setAttribute('aria-selected', 'false');
    }
  });

  var cards = document.querySelectorAll('.speaker-card[data-spk-day]');
  cards.forEach(function(c){
    var cardDay = c.getAttribute('data-spk-day');
    var isCombined = c.classList.contains('spk-combined');
    var isSingleDay = c.classList.contains('spk-single-day');

    if(day === 'all'){
      // On All Days: Hide single-day duplicate cards, Show combined unique cards and normal cards
      if(isSingleDay){
        c.classList.add('spk-hidden');
      } else {
        c.classList.remove('spk-hidden');
      }
    } else {
      // On a specific day: Hide combined cards, Show cards matching the selected day
      if(isCombined){
        c.classList.add('spk-hidden');
      } else if(cardDay === String(day)){
        c.classList.remove('spk-hidden');
      } else {
        c.classList.add('spk-hidden');
      }
    }
  });

  // Dynamic console status updates
  var beacon = document.getElementById('spk-console-beacon');
  var statusText = document.getElementById('spk-console-status-text');
  var badge = document.getElementById('spk-console-badge');

  if(day === 'all'){
    if(beacon){ beacon.style.background = '#818cf8'; beacon.style.boxShadow = '0 0 12px #818cf8'; }
    if(statusText){ statusText.style.color = '#c7d2fe'; statusText.textContent = 'All 4 Summit Days · 20 Unique Technical Leaders (23 Sessions) · Devcon 8 India (Nov 3–6, 2026)'; }
    if(badge){ badge.textContent = 'Devcon 8 India · Nov 3–6, 2026'; }
  } else if(day === 1 || day === '1'){
    if(beacon){ beacon.style.background = '#fbbf24'; beacon.style.boxShadow = '0 0 12px #fbbf24'; }
    if(statusText){ statusText.style.color = '#fde68a'; statusText.textContent = 'Day 1 · Nov 3 (EIP Process & General Overview) · 5 Technical Sessions'; }
    if(badge){ badge.textContent = 'Day 1 Track · Nov 3, 2026'; }
  } else if(day === 2 || day === '2'){
    if(beacon){ beacon.style.background = '#818cf8'; beacon.style.boxShadow = '0 0 12px #818cf8'; }
    if(statusText){ statusText.style.color = '#c7d2fe'; statusText.textContent = 'Day 2 · Nov 4 (Protocol EIPs & Network Upgrades) · 5 Technical Speakers'; }
    if(badge){ badge.textContent = 'Day 2 Track · Nov 4, 2026'; }
  } else if(day === 3 || day === '3'){
    if(beacon){ beacon.style.background = '#06b6d4'; beacon.style.boxShadow = '0 0 12px #06b6d4'; }
    if(statusText){ statusText.style.color = '#7dd3fc'; statusText.textContent = 'Day 3 · Nov 5 (Application EIPs & Ecosystem Support) · 3 Technical Sessions'; }
    if(badge){ badge.textContent = 'Day 3 Track · Nov 5, 2026'; }
  } else if(day === 4 || day === '4'){
    if(beacon){ beacon.style.background = '#10b981'; beacon.style.boxShadow = '0 0 12px #10b981'; }
    if(statusText){ statusText.style.color = '#6ee7b7'; statusText.textContent = 'Day 4 · Nov 6 (Enterprise Readiness & EIPs for Consideration) · 9 Technical Sessions'; }
    if(badge){ badge.textContent = 'Day 4 Track · Nov 6, 2026'; }
  }

  // Reset search box when day tab is clicked
  var searchInput = document.getElementById('spk-search-input');
  var clearBtn = document.getElementById('spk-search-clear');
  var noResultsEl = document.getElementById('spk-no-results');
  if(searchInput && searchInput.value){
    searchInput.value = '';
    if(clearBtn) clearBtn.style.display = 'none';
  }
  if(noResultsEl) noResultsEl.style.display = 'none';

  // Re-order visible cards alphabetically (A-Z)
  sortSpeakersAlphabetically();
}


// Live Instant Search Controller for Meet Our Speakers
function handleSpeakerSearch(query){
  var q = (query || '').toLowerCase().trim();
  var clearBtn = document.getElementById('spk-search-clear');
  if(clearBtn) clearBtn.style.display = q ? 'flex' : 'none';

  var cards = document.querySelectorAll('.speaker-card[data-spk-day]');
  var noResultsEl = document.getElementById('spk-no-results');
  var statusText = document.getElementById('spk-console-status-text');
  var beacon = document.getElementById('spk-console-beacon');
  var badge = document.getElementById('spk-console-badge');

  if(!q){
    if(noResultsEl) noResultsEl.style.display = 'none';
    var activeTab = document.querySelector('.spk-day-tab-btn.active');
    var activeDay = activeTab ? activeTab.getAttribute('data-spk-day') : 'all';
    filterSpeakerDay(activeDay);
    return;
  }

  // When searching, match across cards
  var visibleCount = 0;
  var activeTab = document.querySelector('.spk-day-tab-btn.active');
  var activeDay = activeTab ? activeTab.getAttribute('data-spk-day') : 'all';

  cards.forEach(function(c){
    var cardDay = c.getAttribute('data-spk-day');
    var isCombined = c.classList.contains('spk-combined');
    var isSingleDay = c.classList.contains('spk-single-day');
    var text = (c.textContent || '').toLowerCase();
    var match = text.indexOf(q) !== -1;

    if(activeDay === 'all'){
      // In All Days: match unique speakers (skip single-day duplicate cards)
      if(!isSingleDay && match){
        c.classList.remove('spk-hidden');
        visibleCount++;
      } else {
        c.classList.add('spk-hidden');
      }
    } else {
      // In specific day track: match within this day (skip combined card)
      if(!isCombined && cardDay === String(activeDay) && match){
        c.classList.remove('spk-hidden');
        visibleCount++;
      } else {
        c.classList.add('spk-hidden');
      }
    }
  });

  if(noResultsEl){
    noResultsEl.style.display = (visibleCount === 0) ? 'block' : 'none';
  }

  if(statusText){
    statusText.textContent = 'Live Search: ' + visibleCount + ' speaker' + (visibleCount === 1 ? '' : 's') + ' matched "' + q + '"';
    statusText.style.color = visibleCount > 0 ? '#38bdf8' : '#f87171';
  }
  if(beacon){
    beacon.style.background = visibleCount > 0 ? '#38bdf8' : '#f87171';
    beacon.style.boxShadow = visibleCount > 0 ? '0 0 12px #38bdf8' : '0 0 12px #f87171';
  }
  if(badge){
    badge.textContent = visibleCount + ' Found';
  }
}

function clearSpeakerSearch(){
  var input = document.getElementById('spk-search-input');
  if(input){
    input.value = '';
    handleSpeakerSearch('');
    input.focus();
  }
}

// Summit Speakers Sorting Controller (Alphabetical A-Z by default, or Z-A)
var currentSpeakerSortMode = 'alpha-asc';

function sortSpeakers(mode){
  currentSpeakerSortMode = mode || 'alpha-asc';

  // Update active state on sort buttons
  var btns = document.querySelectorAll('.spk-sort-btn');
  btns.forEach(function(b){
    if(b.getAttribute('data-sort-mode') === currentSpeakerSortMode){
      b.classList.add('active');
      b.setAttribute('aria-checked', 'true');
    } else {
      b.classList.remove('active');
      b.setAttribute('aria-checked', 'false');
    }
  });

  var container = document.getElementById('speakers-grid-container');
  if(!container) return;

  var cards = Array.from(container.querySelectorAll('.speaker-card'));
  if(!cards.length) return;

  cards.sort(function(a, b){
    var nameA = (a.querySelector('.speaker-name')?.textContent || '').trim().toLowerCase();
    var nameB = (b.querySelector('.speaker-name')?.textContent || '').trim().toLowerCase();

    if(currentSpeakerSortMode === 'alpha-desc'){
      return nameB.localeCompare(nameA);
    } else {
      return nameA.localeCompare(nameB);
    }
  });

  cards.forEach(function(card){
    container.appendChild(card);
  });
}

// Speaker Details Data & Modal Handler
const SPEAKERS_DATA = {
  // --- DAY 1: EIP PROCESS & GENERAL OVERVIEW ---
  matthew: {
    dayNum: 1,
    name: 'Matthew Keil',
    photo: 'Assets/speakers/matthew-keil.jpg',
    affiliation: 'Lodestar · ChainSafe',
    designation: 'Engineering Manager, Lodestar (ChainSafe)',
    day: 'Day 1 – November 3, 2026',
    track: 'Day 1 · Nov 3 · EIP Process & General Overview',
    time: '⏱️ 3:00 PM · Day 1 Track (Confirmed)',
    format: '🎙️ 30m Talk + 15m Q&A',
    talkTitle: 'EIP Selection to Support Fast Fork Cadence',
    talkDesc: 'EIP selection is a critical part of the all-core-devs process and the pressure to include "all the things" in the next fork is high. I want to entice the community and developer group to turn that process on its head and make forks smaller. Smaller forks ship faster and counter-intuitively more EIPs can be included in a given period. I also want to encourage the ecosystem to further buy into the process of planning several forks ahead for larger features. We, as an ecosystem, can increase overall development cadence by having a clear vision of the future, outlining that vision on a roadmap and then using that roadmap to do resource planning for the implementation of the features that we want to see come to life.',
    bio: [
      'Matthew Keil is Engineering Manager at ChainSafe working on Lodestar, the premier TypeScript consensus client for Ethereum.',
      'Passionate about shaping Ethereum’s future and shepherding the ecosystem towards an impactful, sustainable, and high-cadence future, he advocates for forward roadmap planning, smaller fork scopes, and multi-client isolation testing.'
    ],
    takeaways: [
      'Why smaller hard forks ship faster and counter-intuitively allow more EIPs to be safely included over time',
      'Roadmap and forward planning: how multi-fork feature coordination eases implementation and client readiness',
      'Improving all-core-devs cadence through isolation testing, feature limiting, and forward resource planning'
    ],
    relatedEip: 'EIP-1: EIP Purpose and Guidelines & Hard Fork Cadence',
    relatedEipUrl: 'https://eips.ethereum.org/EIPS/eip-1',
    audience: ['Core Developers', 'Client Teams', 'EIP Authors', 'Ethereum Community'],
    linkedin: null,
    twitter: 'https://x.com/matthewkeil',
    github: 'https://github.com/matthewkeil',
    telegram: '@mattheweliaskeil',
    discord: 'matthewkeil'
  },
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
    dayNum: 2,
    name: 'Stefan Starflinger',
    photo: 'Assets/speakers/stefan-starflinger.jpg',
    affiliation: 'ethPandaOps · Ethereum Foundation',
    designation: 'DevOps Engineer, ethPandaOps · Ethereum Foundation',
    day: 'Day 2 – November 4, 2026',
    track: 'Day 2 · Nov 4 · Protocol EIPs & Network Upgrades',
    time: '⏱️ Day 2 Track (Confirmed)',
    format: '🎙️ 30m Talk + 15m Q&A',
    talkTitle: 'How Fast Is Your Client? Benchmarking the Ethereum Execution Layer for Glamsterdam',
    talkDesc: 'Glamsterdam raises Ethereum’s gas limit from 60M to 200M and reprices EVM operations, so every gas cost has to match how long clients actually take to execute it. We walk through the pipeline that measures this end to end: designing benchmarks that isolate single operations, running them on realistic state across all execution clients with benchmarkoor, and replaying the same workloads on devnets and mainnet shadow forks to confirm the results hold on a live network.',
    bio: [
      'Stefan Starflinger is a DevOps engineer at the Ethereum Foundation’s ethPandaOps team, running the Glamsterdam execution-layer devnets and shadow forks.',
      'Previously at Bitfly (the team behind ethermine.org and beaconcha.in), his work focuses on large-scale client performance telemetry, benchmark harnesses, and live network stress testing across multi-client topologies.'
    ],
    takeaways: [
      'Designing benchmarks that isolate one EVM operation and turn its measured execution time into gas',
      'Comparing all execution clients fairly on realistic mainnet state using benchmarkoor',
      'Turning isolated benchmarks into end-to-end load tests on multi-client devnets and mainnet shadow forks'
    ],
    relatedEip: 'EIP-7904, EIP-8038, EIP-2780, EIP-8037, EIP-7928, EIP-7954 (Glamsterdam Repricing)',
    relatedEipUrl: 'https://eips.ethereum.org/EIPS/eip-7904',
    audience: ['Developers', 'Core Developers', 'Client Teams', 'Protocol Researchers'],
    linkedin: null,
    twitter: 'https://x.com/stefan_star',
    github: 'https://github.com/qu0b',
    telegram: '@stefan32032',
    discord: 'qu0b'
  },
  rafael: {
    dayNum: 1,
    name: 'Rafael Matias',
    photo: 'Assets/speakers/rafael.jpg',
    affiliation: 'Ethereum Foundation · ethPandaOps',
    designation: 'Software Engineer, Ethereum Foundation',
    day: 'Day 1 – November 3, 2026',
    track: 'Day 1 · Nov 3 · EIP Process & General Overview',
    time: '⏱️ Day 1 Track (Confirmed)',
    format: '🎙️ 30m Talk + 15m Q&A',
    talkTitle: 'How Fast Is Your Client? Benchmarking the Ethereum Execution Layer for Glamsterdam',
    talkDesc: 'Glamsterdam raises Ethereum’s gas limit from 60M to 200M and reprices EVM operations, so every gas cost has to match how long clients actually take to execute it. We walk through the pipeline that measures this end to end: designing benchmarks that isolate single operations, running them on realistic state across all execution clients with benchmarkoor, and replaying the same workloads on devnets and mainnet shadow forks to confirm the results hold on a live network.',
    bio: [
      'Rafael Matias (@skylenet) is a Software Engineer at the Ethereum Foundation and core member of ethPandaOps.',
      'He contributes across major protocol testing infrastructure, benchmarkoor performance suites, and devnet orchestration tooling to stress-test execution and consensus clients under real-world network loads.'
    ],
    takeaways: [
      'Designing benchmarks that isolate one EVM operation and turn its measured cost into gas',
      'Comparing all execution clients fairly on realistic state with benchmarkoor',
      'Turning benchmarks into end-to-end load tests on devnets and mainnet shadow forks'
    ],
    relatedEip: 'EIP-2780 & EIP-8038 (EVM Gas Repricing for Glamsterdam)',
    relatedEipUrl: 'https://eips.ethereum.org/EIPS/eip-8038',
    audience: ['Developers', 'Core Developers', 'Client Teams', 'Protocol Researchers'],
    linkedin: null,
    twitter: 'https://x.com/skylenet',
    github: 'https://github.com/skylenet'
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

  // --- DAY 2: PROTOCOL EIPS & NETWORK UPGRADES ---
  justin: {
    dayNum: 2,
    name: 'Justin Florentine',
    photo: 'Assets/speakers/justin-florentine.jpg',
    affiliation: 'Besu',
    designation: 'Engineering Manager, Besu',
    day: 'Day 2 – November 4, 2026',
    track: 'Day 2 · Nov 4 · Protocol EIPs & Network Upgrades',
    time: '⏱️ 10:00 AM · Day 2 Track (Confirmed)',
    format: '🎙️ 30m Talk + 15m Q&A',
    talkTitle: 'EIP-8184: LUCID Encrypted Mempool',
    talkDesc: "Why encrypting the mempool is hard, and what the latest tradeoffs are. With over $600M extracted from users, encrypted mempools represent a vital defense for Ethereum users. This session explores the technical challenges and trade-offs of mempool encryption, including approaches already ruled out, the complications introduced by post-quantum cryptography, and the current solution model proposed through EIP-8184.",
    bio: [
      'Herding cats, connecting dots.',
      'Justin Florentine is an Engineering Manager at Besu, focused on connecting ideas, people, and technical efforts within the Ethereum ecosystem.'
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
    designation: 'Cofounder, Armada · Operational Privacy & Protocol Design',
    day: 'Day 2 (Nov 4) & Day 4 (Nov 6)',
    track: 'Dual Track Speaker: Protocol EIPs (Day 2) + Enterprise Readiness (Day 4)',
    time: 'Day 2: 12:00 PM · Day 4: 11:00 AM',
    format: '⚡ 2 Scheduled Technical Sessions (Day 2 & Day 4)',
    talkTitle: 'Dual Sessions: Frame Transactions (EIP-8141) & Onchain Business Infra Guarantees',
    talkDesc: 'Gavin Birch presents two specialized sessions across the summit: (1) On Day 2 (12:00 PM), examining EIP-8141 Frame Transactions, separating transaction validation, gas payment, and execution in a native Ethereum transaction type using Armada’s shielded payment architecture; (2) On Day 4 (11:00 AM), exploring how Ethereum properties such as credible exit, permissionless access, replaceable intermediaries, and constrained governance can become practical business-continuity guarantees, and why privacy systems expose where those guarantees still break down.',
    bio: [
      'Gavin Birch is the founder of Armada, privacy infrastructure for organizational stablecoin flows on Ethereum.',
      'His work focuses on operational privacy, mechanism design, and how emerging Ethereum protocol features can reduce reliance on trusted transaction infrastructure.'
    ],
    takeaways: [
      'Day 2 Session: How EIP-8141 separates authorization, gas payment, and execution natively on Ethereum',
      'Day 2 Session: How shielded payments map onto Frame validation, sponsorship, and execution, plus remaining constraints around public mempool admission',
      'Day 4 Session: Translating Ethereum trust-minimized guarantees into concrete enterprise business-continuity and risk controls',
      'Day 4 Session: Why asset-recovery is too weak a test for infrastructure used in ongoing business operations and how privacy infrastructure preserves execution'
    ],
    relatedEip: 'EIP-8141: Frame Transactions & Enterprise Risk Controls',
    relatedEipUrl: 'https://eips.ethereum.org/EIPS/eip-8141',
    audience: ['Authors', 'Core Developers', 'Protocol Researchers', 'Enterprise Architects', 'Privacy Engineers'],
    linkedin: null,
    twitter: 'https://x.com/Ether_Gavin',
    telegram: '@gavinly',
    discord: 'gavinly'
  },
  'gavin-combined': {
    dayNum: 2,
    name: 'Gavin Birch',
    photo: 'Assets/speakers/gavin-birch.jpg',
    affiliation: 'Armada',
    designation: 'Cofounder, Armada · Operational Privacy & Protocol Design',
    day: 'Day 2 (Nov 4) & Day 4 (Nov 6)',
    track: 'Dual Track Speaker: Protocol EIPs (Day 2) + Enterprise Readiness (Day 4)',
    time: 'Day 2: 12:00 PM · Day 4: 11:00 AM',
    format: '⚡ 2 Scheduled Technical Sessions (Day 2 & Day 4)',
    talkTitle: 'Dual Sessions: Frame Transactions (EIP-8141) & Onchain Business Infra Guarantees',
    talkDesc: 'Gavin Birch presents two specialized sessions across the summit: (1) On Day 2 (12:00 PM), examining EIP-8141 Frame Transactions, separating transaction validation, gas payment, and execution in a native Ethereum transaction type using Armada’s shielded payment architecture; (2) On Day 4 (11:00 AM), exploring how Ethereum properties such as credible exit, permissionless access, replaceable intermediaries, and constrained governance can become practical business-continuity guarantees, and why privacy systems expose where those guarantees still break down.',
    bio: [
      'Gavin Birch is the founder of Armada, privacy infrastructure for organizational stablecoin flows on Ethereum.',
      'His work focuses on operational privacy, mechanism design, and how emerging Ethereum protocol features can reduce reliance on trusted transaction infrastructure.'
    ],
    takeaways: [
      'Day 2 Session: How EIP-8141 separates authorization, gas payment, and execution natively on Ethereum',
      'Day 2 Session: How shielded payments map onto Frame validation, sponsorship, and execution, plus remaining constraints around public mempool admission',
      'Day 4 Session: Translating Ethereum trust-minimized guarantees into concrete enterprise business-continuity and risk controls',
      'Day 4 Session: Why asset-recovery is too weak a test for infrastructure used in ongoing business operations and how privacy infrastructure preserves execution'
    ],
    relatedEip: 'EIP-8141: Frame Transactions & Enterprise Risk Controls',
    relatedEipUrl: 'https://eips.ethereum.org/EIPS/eip-8141',
    audience: ['Authors', 'Core Developers', 'Protocol Researchers', 'Enterprise Architects', 'Privacy Engineers'],
    linkedin: null,
    twitter: 'https://x.com/Ether_Gavin',
    telegram: '@gavinly',
    discord: 'gavinly'
  },
  'gavin-day2': {
    dayNum: 2,
    name: 'Gavin Birch',
    photo: 'Assets/speakers/gavin-birch.jpg',
    affiliation: 'Armada',
    designation: 'Cofounder, Armada',
    day: 'Day 2 – November 4, 2026',
    track: 'Day 2 · Nov 4 · Protocol EIPs & Network Upgrades',
    time: '⏱️ 12:00 PM · Day 2 Track (Confirmed)',
    format: '🎙️ 30m Talk + 15m Q&A',
    talkTitle: 'Frame txs & private payments: EIP-8141 in practice',
    talkDesc: 'EIP-8141 will enable Frame Transactions, separating transaction validation, gas payment, and execution in a native Ethereum transaction type. Using Armada’s shielded payment architecture as a case study, this talk explores what Frames enable for private transactions, where the current proposal still creates constraints, and what a practical implementation could look like. Privacy systems have some of the hardest tx-submission problems, and rather than depending upon external infra providers, Frames could make private txs substantially more native for Ethereum.',
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
  'gavin-day4': {
    dayNum: 4,
    name: 'Gavin Birch',
    photo: 'Assets/speakers/gavin-birch.jpg',
    affiliation: 'Armada',
    designation: 'Cofounder, Armada',
    day: 'Day 4 – November 6, 2026',
    track: 'Day 4 · Nov 6 · Enterprise Readiness & EIPs for Consideration',
    time: '⏱️ 11:00 AM · Day 4 Track (Confirmed)',
    format: '🎙️ 30m Talk + 15m Q&A',
    talkTitle: 'More like Ethereum, less like SaaS: Infra guarantees for onchain business',
    talkDesc: 'As businesses move payments, treasury, and financial operations onchain, more and more they depend on infrastructure they do not control. This talk explores how Ethereum properties such as credible exit, permissionless access, replaceable intermediaries, and constrained governance can become practical business-continuity guarantees, and why privacy systems expose where those guarantees still break down. As businesses move financial operations onchain, they need infrastructure that works even when operators, intermediaries, or governance fail.',
    bio: [
      'Gavin Birch is the founder of Armada, privacy infrastructure for organizational stablecoin flows on Ethereum.',
      'His work focuses on operational privacy, mechanism design, and how emerging Ethereum protocol features can reduce reliance on trusted transaction infrastructure.'
    ],
    takeaways: [
      'How Ethereum’s trust-minimized guarantees translate into concrete enterprise risk controls',
      'Why asset-recovery is too weak a test for infrastructure used in ongoing business operations',
      'How privacy infrastructure illustrates the need to preserve useful properties such as privacy, access, and execution, even when operators disappear or are replaced'
    ],
    relatedEip: 'EIP-8141: Frame Transactions & Enterprise Risk Controls',
    relatedEipUrl: 'https://eips.ethereum.org/EIPS/eip-8141',
    audience: ['Enterprise Architects', 'DeFi Treasuries', 'Core Developers', 'Protocol Designers'],
    linkedin: null,
    twitter: 'https://x.com/Ether_Gavin',
    telegram: '@gavinly',
    discord: 'gavinly'
  },

  // --- DAY 3: APPLICATION EIPS & ECOSYSTEM SUPPORT ---
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

  // --- DUAL TRACK COMBINED PROFILES (FOR ALL DAYS VIEW) ---
  'german-combined': {
    dayNum: 1,
    name: 'German Abal',
    photo: 'Assets/speakers/german-abal.jpg',
    affiliation: 'EVVM.org · ETH Cinco De Mayo · Apeiron Protocol',
    designation: 'Founder & Principal Architect, EVVM.org · Apeiron Protocol',
    day: 'Day 1 (Nov 3), Day 3 (Nov 5) & Day 4 (Nov 6)',
    track: 'Triple Track Speaker: EIP Process (Day 1) + Self-Sovereign Tokens (Day 3) + EVVM State Scaling (Day 4)',
    time: 'Day 1: Standards Talk · Day 3: 20m Presentation · Day 4: 11:00 AM',
    format: '⚡ 3 Scheduled Technical Sessions Across Summit',
    talkTitle: 'Triple Sessions: Tooling Workflows, Self-Sovereign Tokens & EVVM Architecture',
    talkDesc: 'German Abal presents three specialized sessions across Devcon 8: (1) On Day 1, exploring open tooling and EIP process pipelines; (2) On Day 3, presenting Apeiron Protocol and self-sovereign token architectures with receiver-side verification and protected state; (3) On Day 4, breaking down EVVM virtual machine scalability, non-conflicting state-transition proofs, and institutional rails.',
    bio: [
      'Germán Abal (ariutokintumi) is a protocol architect, inventor, entrepreneur, and the founder and principal architect of EVVM.org and Apeiron Protocol.',
      'Building internet products since 1996 and researching blockchain since 2009, he combines software architecture, cryptography, security, and developer education across open Ethereum standards.'
    ],
    takeaways: [
      'Day 1 Session: Tooling and workflow automation for accelerating proposal lifecycle and PR readiness',
      'Day 3 Session: Self-sovereign tokens in Apeiron Protocol — isolating protected state, EXTCODEHASH remote compliance, and receiver-side acceptance',
      'Day 4 Session: Virtualizing the EVM to eliminate state bloat and execute off-chain multi-threaded state transitions with L1 dispute guarantees'
    ],
    relatedEip: 'EIP Process Tooling · Apeiron Token Standard · EVVM Architecture',
    relatedEipUrl: 'https://eips.ethereum.org',
    audience: ['Developers', 'Token Architects', 'Smart Contract Engineers', 'Protocol Researchers'],
    linkedin: 'https://www.linkedin.com/in/germanabal/',
    twitter: 'https://x.com/ariutokintumi',
    telegram: '@llamame',
    discord: 'ariutokintumi#0001'
  },
  'german-day3': {
    dayNum: 3,
    name: 'German Abal',
    photo: 'Assets/speakers/german-abal.jpg',
    affiliation: 'ETH Cinco de Mayo - EVVM.org',
    designation: 'Founder, Apeiron Protocol & Principal Architect, EVVM.org',
    day: 'Day 3 – November 5, 2026',
    track: 'Day 3 · Nov 5 · Application EIPs & Ecosystem Support',
    time: '⏱️ Day 3 Track (Confirmed)',
    format: '🎙️ 20m Presentation + Q&A',
    talkTitle: 'Self-Sovereign Tokens: Rethinking Onchain Representation',
    talkDesc: 'Apeiron Protocol proposes a token architecture where users or entities govern Signs through their own Console, with protected state isolated in ConsoleStorage and modular execution delegated to optional Cartridges. The talk explores explicit incoming acceptance, EXTCODEHASH-based remote compliance, and the separation of representation, instance identity, and metadata. Most existing token standards focus on how tokens are created, owned, and transferred, but provide little receiver-side control over what can enter an account or which remote implementations are trusted. Apeiron explores a different model: sovereign representation with explicit trust boundaries, isolated protected state, deterministic code-path compliance, and no passive inbox by default.',
    bio: [
      'Germán Abal, known as ariutokintumi, is a protocol architect, inventor and entrepreneur, and the founder and principal architect of EVVM.org.',
      'He has been building internet products since 1996 and researching blockchain since 2009, combining software architecture, cryptography, security and developer education.'
    ],
    takeaways: [
      'How Apeiron separates protected state, policy, and modular execution across Console, ConsoleStorage, and optional Cartridge contracts',
      'How EXTCODEHASH allowlists and a canonical handshake let each Console independently verify the remote Console, ConsoleStorage, and active Cartridge before interaction',
      'How separating tokenId, Sign instance identity, and mutable metadata enables explicit reception and provenance-linked recreation without treating metadata as identity-critical state'
    ],
    relatedEip: 'Apeiron Self-Sovereign Token Standard Architecture (ERC Proposal)',
    relatedEipUrl: 'https://eips.ethereum.org/erc',
    audience: ['Developers', 'Token Architects', 'Smart Contract Engineers', 'Security Researchers'],
    linkedin: 'https://www.linkedin.com/in/germanabal/',
    twitter: 'https://x.com/ariutokintumi',
    telegram: '@llamame',
    discord: 'ariutokintumi#0001'
  },
  aditya: {
    dayNum: 4,
    name: 'Aditya Kumar',
    photo: 'Assets/speakers/aditya-kumar.jpg',
    affiliation: 'Vara Network / Gear Foundation',
    designation: 'Senior Developer Relations Engineer Lead, Vara Network / Gear Foundation',
    day: 'Day 4 – November 6, 2026',
    track: 'Day 4 · Nov 6 · Enterprise Readiness & EIPs for Consideration',
    time: '⏱️ Day 4 Track (Confirmed)',
    format: '🎙️ 30m Talk + 15m Q&A',
    talkTitle: 'Beyond Collateral: Privacy and Verification in Onchain Credit',
    talkDesc: 'Drawing on practical experience building onchain credit applications, this session traces a receivable from verification through funding and repayment, examining who needs access to which information at each stage. It explores how signed statements, cryptographic commitments, and controlled disclosure support this process while making clear what still depends on offchain evidence and trusted parties. Defining who can access which information, for what purpose, and under whose authority is a core design requirement in onchain credit—distinguishing document integrity and issuer authenticity from the validity of a commercial claim and likelihood of repayment.',
    bio: [
      'Aditya Kumar is a Senior Developer Relations Engineer Lead at Vara Network / Gear Foundation, where he builds developer tools and applications, writes technical documentation, and leads hands-on workshops.',
      'He has worked on a business credit platform spanning receivables verification, underwriting assistance, stablecoin settlement, and repayment, as well as a privacy product focused on programmable privacy and conditional disclosure. He brings a builder’s perspective to Ethereum standards, grounded in practical experience with verification, sensitive business data, and the trust assumptions behind onchain applications.'
    ],
    takeaways: [
      'How to map disclosure requirements across a receivable’s lifecycle, giving each participant access to the information their role requires.',
      'What signatures, commitments, and cryptographic proofs establish—and why verifying a statement or computation does not independently establish the truth of an invoice or guarantee repayment.',
      'Which parts of credit evidence could benefit from common interfaces: issuer identity, document references, validity periods, disclosure permissions, and changes in repayment status.',
      'How EIP-712 structured signing helps applications agree on what was approved or attested to, while informing future standards for credit evidence and controlled disclosure.'
    ],
    relatedEip: 'EIP-712: Typed structured data hashing and signing',
    relatedEipUrl: 'https://eips.ethereum.org/EIPS/eip-712',
    audience: ['Developers', 'Protocol Designers', 'Enterprise Builders', 'DeFi Researchers'],
    linkedin: 'https://linkedin.com/in/adityaa-kr',
    twitter: 'https://x.com/Adityaakrx',
    telegram: '@adityakrx',
    discord: '@adiii06'
  },
  harish: {
    dayNum: 3,
    name: 'Harish Kotra',
    photo: 'Assets/speakers/harish-kotra.webp',
    affiliation: 'Independent / AI Consultant',
    designation: 'Independent AI Consultant & Agent Architect',
    day: 'Day 3 – November 5, 2026',
    track: 'Day 3 · Nov 5 · Application EIPs & Ecosystem Support',
    time: '⏱️ Day 3 Track (Confirmed)',
    format: '🎙️ 30m Talk + 15m Q&A',
    talkTitle: '623,494 Agents Registered. 19 With Evidence. What ERC-8004 measures, and the registry it has not shipped',
    talkDesc: "ERC-8004 has registered more than 623,000 agents across 24 chains, but a study of 10,000 found only 19 with metadata, a declared service, reputation feedback, and cross-chain registration together. This talk reads that deployment data against the specification, breaks down what the Identity and Reputation registries actually guarantee, and argues what the still-unshipped Validation Registry must attest before agent trust becomes something software can query. Builders are about to make procurement, escrow, and payment decisions on the assumption that a registered agent is a verified one—this session shows where the real gaps and contribution windows lie.",
    bio: [
      'Harish Kotra is an independent AI consultant, builder, and agent architect. He works on agent identity, evaluation, and verifiable observability: how an autonomous system’s claims get checked rather than trusted.',
      'He publishes one AI build a day in public on DailyBuild.xyz, a running record of what actually ships versus what only demos well, and builds local-first agent tooling, MCP servers, and evaluation harnesses. Over the past year, his work moved from shipping agents to auditing the standards they register against, including reading on-chain deployment data for ERC-8004.'
    ],
    takeaways: [
      'How to read an ERC’s real adoption: registration counts versus operational evidence, and the three checks to run on any agent standard.',
      'What ERC-8004’s Identity and Reputation registries do and do not guarantee, with on-chain numbers showing why reputation is not yet a reliable signal.',
      'What a Validation Registry has to attest (evidence and re-execution, not just a score) before agent trust is queryable, plus concrete proposals for the authors.'
    ],
    relatedEip: 'ERC-8004: Trustless Agent Registry & ERC-8183',
    relatedEipUrl: 'https://eips.ethereum.org/EIPS/eip-8004',
    audience: ['Developers', 'Agent Architects', 'Protocol Researchers', 'Governance Contributors'],
    linkedin: 'https://linkedin.com/in/harishkotra',
    twitter: 'https://x.com/harishkotra',
    telegram: '@HarishKotra'
  },
  kevin: {
    dayNum: 4,
    name: 'Kevin Jones',
    photo: 'Assets/speakers/kevin-jones.jpg',
    affiliation: '1Claw',
    designation: 'Founder, 1Claw',
    day: 'Day 4 – November 6, 2026',
    track: 'Day 4 · Nov 6 · Enterprise Readiness & EIPs for Consideration',
    time: '⏱️ Day 4 Track (Confirmed)',
    format: '🎙️ 30m Talk + 15m Q&A',
    talkTitle: 'Bringing a Billion Agents On Ethereum',
    talkDesc: 'A billion agents are about to come onchain, but none of the existing infrastructure was built to support that. This talk dives into techniques like Multi-Party Computation (MPC), Trusted Execution Environments (TEEs), and Hardware Security Modules (HSMs) to solve the agentic trust problem and power the emerging agentic economy. Discover how to provide autonomous AI agents with sovereign wallet access while enforcing cryptographic policies and execution boundaries.',
    bio: [
      'Kevin Jones is the founder of 1Claw, building secure infrastructure, wallet access, and policy frameworks for autonomous onchain agents.',
      'He specializes in DevSecOps, hardware-grade security, MPC, and TEE integrations designed to enable AI agents to safely transact on Ethereum at scale.'
    ],
    takeaways: [
      'How techniques like MPC, TEEs, and HSMs solve the agentic trust problem to power the agentic economy',
      'Architectures for giving autonomous AI agents safe, sovereign access to their own wallets',
      'How to create granular policy frameworks to enforce cryptographic limitations on agent execution'
    ],
    relatedEip: 'Agent Wallets, MPC & TEE Key Management Standards',
    relatedEipUrl: 'https://eips.ethereum.org/erc',
    audience: ['Developers', 'Security Engineers', 'Agent Architects', 'Enterprise Builders'],
    linkedin: 'https://linkedin.com/in/kevinjonescreates',
    twitter: 'https://x.com/DevSecOpz'
  },
  prem: {
    dayNum: 3,
    name: 'Prem Makeig',
    photo: 'Assets/speakers/prem-makeig.jpg',
    affiliation: 'Unruggable',
    designation: 'Co-Founder, Unruggable (premm.eth)',
    day: 'Day 3 – November 5, 2026',
    track: 'Day 3 · Nov 5 · Application EIPs & Ecosystem Support',
    time: '⏱️ Day 3 Track (Confirmed)',
    format: '🎙️ 30m Talk + 15m Q&A',
    talkTitle: 'Agent Identity Standards',
    talkDesc: 'Agents are quickly becoming a new class of blockchain users and will soon be responsible for the vast majority of transactions. Agents need identity to develop reputations and trust, allowing them to cooperate and work together onchain. Without strong onchain identity for agents, agents will be controllable by centralized services, further centralizing control over the new user interface of decentralized blockchains.',
    bio: [
      'Prem Makeig (premm.eth) is co-founder of Unruggable. He is an author or contributor to ERC-8004, ERC-8217, and ERC-8048 for agents, ERC-7930 and ERC-7828 for interoperability, and ENSIPs 19, 24, 25, 26, 28, and 31.',
      'His work focuses on onchain agent identity, reputation systems, and trustless interoperability standards across decentralized networks.'
    ],
    takeaways: [
      'Why onchain identity is essential for autonomous agents to build reputation, trust, and cooperative workflows',
      'Preventing centralized services from monopolizing agent coordination and user interfaces',
      'The emerging agent identity stack across ERC-8004, ERC-8217, ERC-8048, and cross-chain interoperability standards (ERC-7930, ERC-7828)'
    ],
    relatedEip: 'ERC-7930, ERC-7828, ERC-8004, ERC-8217, ERC-8048',
    relatedEipUrl: 'https://eips.ethereum.org/EIPS/eip-8004',
    audience: ['Developers', 'Agent Architects', 'Protocol Designers', 'ENS & Identity Researchers'],
    linkedin: null,
    twitter: 'https://x.com/nxt3d',
    telegram: '@nxt3d'
  }
};

function openSpeakerModal(speakerKey){
  pauseSummitVideo();
  var data = SPEAKERS_DATA[speakerKey];
  if(!data) return;

  var modal = document.getElementById('speaker-detail-modal');
  if(!modal) return;

  // Dynamic day color accents for modal
  var dayThemes = {
    1: { accent: '#fbbf24', glow: 'rgba(245,158,11,0.35)' },
    2: { accent: '#818cf8', glow: 'rgba(129,140,248,0.35)' },
    3: { accent: '#06b6d4', glow: 'rgba(6,182,212,0.35)' },
    4: { accent: '#10b981', glow: 'rgba(16,185,129,0.35)' }
  };
  var theme = dayThemes[data.dayNum || 2] || dayThemes[2];

  var avatarPod = modal.querySelector('.spk-modal-avatar-pod');
  if(avatarPod){
    avatarPod.style.borderColor = theme.accent;
    avatarPod.style.boxShadow = '0 0 24px ' + theme.glow;
  }

  var avatar = document.getElementById('spk-modal-avatar');
  var nameEl = document.getElementById('spk-modal-name');
  var orgEl = document.getElementById('spk-modal-org');
  var roleEl = document.getElementById('spk-modal-role');
  var trackEl = document.getElementById('spk-modal-track');
  var formatEl = document.getElementById('spk-modal-format');
  var timeEl = document.getElementById('spk-modal-time');
  var titleEl = document.getElementById('spk-modal-talk-title');
  var descEl = document.getElementById('spk-modal-talk-desc');
  var bioEl = document.getElementById('spk-modal-bio');
  var socialsEl = document.getElementById('spk-modal-socials');

  if(trackEl){
    trackEl.style.color = theme.accent;
  }

  if(avatar){ avatar.src = data.photo; avatar.alt = data.name; }
  if(nameEl) nameEl.textContent = data.name;
  if(orgEl) orgEl.textContent = data.affiliation;
  if(roleEl) roleEl.textContent = data.designation;
  if(trackEl) trackEl.textContent = data.track;
  if(formatEl) formatEl.textContent = data.format;
  if(timeEl) timeEl.textContent = data.time;
  if(titleEl) titleEl.textContent = data.talkTitle;
  if(descEl) descEl.textContent = data.talkDesc;

  // Bio
  if(bioEl){
    bioEl.innerHTML = '';
    data.bio.forEach(function(para){
      var p = document.createElement('p');
      p.textContent = para;
      bioEl.appendChild(p);
    });
  }

  // Socials
  if(socialsEl){
    socialsEl.innerHTML = '';
    if(data.linkedin){
      var aIn = document.createElement('a');
      aIn.href = data.linkedin;
      aIn.target = '_blank';
      aIn.rel = 'noopener noreferrer';
      aIn.className = 'spk-modal-social-btn';
      aIn.innerHTML = '<svg width="13" height="13" viewBox="0 0 24 24" fill="currentColor"><path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/></svg><span>LinkedIn</span>';
      socialsEl.appendChild(aIn);
    }
    if(data.twitter){
      var aX = document.createElement('a');
      aX.href = data.twitter;
      aX.target = '_blank';
      aX.rel = 'noopener noreferrer';
      aX.className = 'spk-modal-social-btn';
      aX.innerHTML = '<svg width="12" height="12" viewBox="0 0 24 24" fill="currentColor"><path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/></svg><span>𝕏 / Twitter</span>';
      socialsEl.appendChild(aX);
    }
    // if(data.telegram){
    //   var aTg = document.createElement('a');
    //   var tgUser = data.telegram.replace('@', '');
    //   aTg.href = 'https://t.me/' + tgUser;
    //   aTg.target = '_blank';
    //   aTg.rel = 'noopener noreferrer';
    //   aTg.className = 'spk-modal-social-btn';
    //   aTg.innerHTML = '<svg width="12" height="12" viewBox="0 0 24 24" fill="currentColor"><path d="M12 0C5.373 0 0 5.373 0 12s5.373 12 12 12 12-5.373 12-12S18.627 0 12 0zm5.894 8.221-1.97 9.28c-.145.658-.537.818-1.084.508l-3-2.21-1.446 1.394c-.16.16-.295.295-.605.295l.213-3.053 5.56-5.023c.242-.213-.054-.333-.373-.121l-6.871 4.326-2.962-.924c-.643-.204-.657-.643.136-.953l11.57-4.458c.538-.196 1.006.128.832.949z"/></svg><span>Telegram</span>';
    //   socialsEl.appendChild(aTg);
    // }
  }

  // Key Takeaways
  var takeawaysBox = document.getElementById('spk-modal-takeaways-box');
  var takeawaysList = document.getElementById('spk-modal-takeaways-list');
  if(takeawaysBox && takeawaysList){
    if(data.takeaways && data.takeaways.length){
      takeawaysList.innerHTML = '';
      data.takeaways.forEach(function(item){
        var li = document.createElement('li');
        li.textContent = item;
        takeawaysList.appendChild(li);
      });
      takeawaysBox.style.display = 'block';
    } else {
      takeawaysBox.style.display = 'none';
    }
  }

  // Related EIP
  var relEipBox = document.getElementById('spk-modal-rel-eip-box');
  var relEipLink = document.getElementById('spk-modal-rel-eip-link');
  if(relEipBox && relEipLink){
    if(data.relatedEip && data.relatedEipUrl){
      relEipLink.href = data.relatedEipUrl;
      relEipLink.textContent = data.relatedEip + ' ↗';
      relEipBox.style.display = 'flex';
    } else {
      relEipBox.style.display = 'none';
    }
  }

  // Target Audience
  var audBox = document.getElementById('spk-modal-audience-box');
  var audTags = document.getElementById('spk-modal-audience-tags');
  if(audBox && audTags){
    if(data.audience && data.audience.length){
      audTags.innerHTML = '';
      data.audience.forEach(function(tag){
        var span = document.createElement('span');
        span.className = 'spk-aud-chip';
        span.textContent = tag;
        audTags.appendChild(span);
      });
      audBox.style.display = 'flex';
    } else {
      audBox.style.display = 'none';
    }
  }

  modal.style.display = 'flex';
  setTimeout(function(){
    modal.classList.add('open');
  }, 10);
  document.body.style.overflow = 'hidden';
}

function closeSpeakerModal(){
  var modal = document.getElementById('speaker-detail-modal');
  if(!modal) return;
  modal.classList.remove('open');
  setTimeout(function(){
    modal.style.display = 'none';
    document.body.style.overflow = '';
  }, 240);
}

// Global mailto interceptor: prevents dead blank tabs and opens smart contact modal
document.addEventListener('click', function(e){
  var mailAnchor = e.target.closest('a[href^="mailto:"]');
  if(!mailAnchor) return;
  if(mailAnchor.closest('.cmodal-panel')) return;

  var href = mailAnchor.getAttribute('href');
  if(!href) return;

  e.preventDefault();
  openContactModal(href, e);
});

// Close modals on Escape key
window.addEventListener('keydown', function(e){
  if(e.key === 'Escape'){
    closeContactModal();
    closeSpeakerModal();
  }
});


  window.tick = tick;
  window.copySpeakerEmail = copySpeakerEmail;
  window.copyLumaLink = copyLumaLink;
  window.copyStudentFormLink = copyStudentFormLink;
  window.openPartnerModal = openPartnerModal;
  window.closePartnerModal = closePartnerModal;
  window.selectSummitVideo = selectSummitVideo;
  window.switchSummitVideo = switchSummitVideo;
  window.syncSummitPlaylistHeight = syncSummitPlaylistHeight;
  window.pauseSummitVideo = pauseSummitVideo;
  window.switchDayTab = switchDayTab;
  window.openDayDetail = openDayDetail;
  window.switchDayViewMode = switchDayViewMode;
  window.toggleFaq = toggleFaq;
  window.scrollToSection = scrollToSection;
  window.cleanHashFromUrl = cleanHashFromUrl;
  window.openContactModal = openContactModal;
  window.closeContactModal = closeContactModal;
  window.copyContactEmail = copyContactEmail;
  window.filterSpeakerDay = filterSpeakerDay;
  window.handleSpeakerSearch = handleSpeakerSearch;
  window.clearSpeakerSearch = clearSpeakerSearch;
  window.sortSpeakers = sortSpeakers;
  window.openSpeakerModal = openSpeakerModal;
  window.closeSpeakerModal = closeSpeakerModal;
  window.SPEAKERS_DATA = SPEAKERS_DATA;
  window.sortSpeakersAlphabetically = sortSpeakersAlphabetically;
  window.sortSpeakersByPopularity = sortSpeakersAlphabetically;

  // Sort speakers alphabetically on initial load
  sortSpeakersAlphabetically();

}
