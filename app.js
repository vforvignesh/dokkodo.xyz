/* app.js — Dokkodo client-side router & content */

// ============================================
// CONTENT DATABASE
// ============================================
const CATEGORIES = {
  money: {
    label: 'MONEY',
    title: 'Finance & Markets',
    description: 'First principles of investing, market philosophy, and the discipline of walking alone in markets. Thinking clearly about risk, conviction, and the long game.'
  },
  meditations: {
    label: 'MEDITATIONS',
    title: 'Thoughts & Philosophy',
    description: 'Reflections on Musashi\'s precepts, stoic thought, and the examined life. Short essays on principle, practice, and the art of thinking well.'
  },
  music: {
    label: 'MUSIC',
    title: 'Sound & Rhythm',
    description: 'Artists, albums, and mixes that shaped a worldview. Reviews, recommendations, and the stories behind the sounds.'
  },
  mountains: {
    label: 'MOUNTAINS',
    title: 'Outdoor Adventures',
    description: 'Trail reports, peak reflections, and the lessons that only altitude and exhaustion can teach. Where the path meets the mountain.'
  }
};

const POSTS = [
  {
    slug: 'dokkodo-of-investing',
    category: 'money',
    title: 'The Dokkodo of Investing',
    date: '2026-02-15',
    readTime: '12 min read',
    excerpt: 'What Miyamoto Musashi\'s 21 precepts teach us about conviction, patience, and the courage to walk alone in markets.',
    body: `
      <p>Miyamoto Musashi wrote the Dokkodo — "The Way of Walking Alone" — in the final weeks of his life, alone in a cave on Mount Iwato. He had won over sixty duels. He had mastered the sword, the brush, and the carpenter's plane. And in the end, he distilled everything he knew into twenty-one precepts.</p>

      <p>I keep returning to these precepts because they map, with startling precision, onto the discipline of investing well.</p>

      <h2>Accept Everything Just the Way It Is</h2>

      <p>The first precept. Markets don't care about your thesis. They don't care about your entry price, your conviction, or your carefully modeled DCF. The market is what it is. The price is the price. Your job is not to argue with reality but to see it clearly and act accordingly.</p>

      <p>Most investors fail here. They anchor to a price. They fall in love with a narrative. They argue with the tape. Musashi would recognize this as a failure of perception — seeing what you wish to see rather than what is.</p>

      <blockquote>Do not seek pleasure for its own sake.</blockquote>

      <p>In investing, this translates directly: do not chase returns for the dopamine hit. The pleasure-seeking investor buys what's already risen, sells what's already fallen, and mistakes activity for progress. The disciplined investor — the ronin walking alone — takes no pleasure in being right and no pain in being wrong. There is only the position and the facts.</p>

      <h2>First Principles Over Consensus</h2>

      <p>Musashi's ninth precept: "Do not let yourself be guided by the feeling of lust or love." In the market's vocabulary: do not let yourself be guided by herd sentiment or narrative momentum.</p>

      <p>The greatest investments of the past century were consensus contrarian at the point of execution. Buying Amazon in 2001 when the dot-com rubble was still smoldering. Buying bank stocks in March 2009 when the financial system was supposedly dead. Buying Bitcoin in 2018 when "crypto is over" was the prevailing sentiment.</p>

      <p>In each case, the investor had to walk alone. Had to trust their own analysis over the crowd's conviction. Had to accept the discomfort of being early, which is indistinguishable from being wrong until suddenly it isn't.</p>

      <h2>Patience as a Weapon</h2>

      <p>Musashi's fourteenth precept: "Do not pursue the taste of good food." Translated: do not overtrade. Do not chase the next hot thing. Do not mistake motion for progress.</p>

      <p>Warren Buffett has called this the "twenty-punch-card" approach — imagining you only get twenty investment decisions in your entire life. Each one matters enormously. You'd study harder. Wait longer. Demand more conviction before acting.</p>

      <p>The best investors I've observed share this quality of almost preternatural patience. They can sit in cash for years, unmoved by the noise, waiting for the fat pitch. They understand that the cost of missing a mediocre opportunity is zero, while the cost of entering a bad one is substantial.</p>

      <h2>The Path Forward</h2>

      <p>Musashi's final precept — the twenty-first — reads: "Respect Buddha and the Gods without counting on their help."</p>

      <p>In investing: respect the market. Study it. Understand its mechanisms and its history. But do not count on it to bail you out. Do not count on the Fed, on mean reversion, on "stocks always go up in the long run." Build your process as if no one is coming to save you. Because no one is.</p>

      <p>This is the Dokkodo of investing. The way of walking alone. It is uncomfortable. It is often lonely. But it is the only path that leads to genuine understanding of risk, reward, and the nature of markets.</p>

      <hr>

      <p class="post-end-mark">独行道</p>
    `
  },
  {
    slug: '21-precepts',
    category: 'meditations',
    title: '21 Precepts',
    date: '2026-01-28',
    readTime: '15 min read',
    excerpt: 'Thoughts on Miyamoto Musashi\'s 21 precepts from the Dokkodo, written in the final days of his life in a cave on Mount Iwato.',
    body: `
      <p>In the spring of 1645, Miyamoto Musashi — undefeated swordsman, painter, calligrapher, and philosopher — retreated to Reigan Cave on Mount Iwato to write his final works. He was sixty years old and had perhaps weeks to live. He gave away his possessions. He completed <em>The Book of Five Rings</em>. And then, in his final days, he wrote something far more personal: the Dokkodo.</p>

      <p>Twenty-one precepts. No explanation. No commentary. Just statements, each one a compressed lifetime of experience. Here are my reflections on the ones that have shaped me most.</p>

      <h2>1. Accept Everything Just the Way It Is</h2>

      <p>Not resignation. Not passivity. Acceptance as the precondition for clear action. You cannot change what you refuse to see. The Stoics called this <em>amor fati</em> — love of fate. Musashi arrived at the same place through the sword rather than philosophy: in a duel, the moment you wish your opponent were different is the moment you die.</p>

      <h2>6. Do Not Regret What You Have Done</h2>

      <p>This one took me years. Regret is a recursive loop — you suffer the event, then you suffer the suffering. Musashi killed his first man at thirteen. He maimed, scarred, and destroyed dozens of opponents over decades. To live with that requires not the absence of memory but the refusal to weaponize memory against yourself.</p>

      <p>In practice: make decisions with the best information available. Execute fully. Then release. The decision is done. Learn from it, yes. But do not relitigate it. The past is a teacher, not a judge.</p>

      <h2>12. Do Not Seek Elegant Residences</h2>

      <p>Comfort is the enemy of growth. Musashi slept in fields, in temples, in caves. Not because he couldn't afford better — by the end of his life he was famous throughout Japan — but because comfort makes you soft. It makes you dependent on things outside your control.</p>

      <p>I think about this in the context of lifestyle inflation. Every upgrade — the nicer apartment, the better car, the premium subscription — becomes a new baseline. A new dependency. A new thing you need to maintain. The truly free person needs very little.</p>

      <blockquote>Do not act following customary beliefs.</blockquote>

      <h2>17. Do Not Fear Death</h2>

      <p>The final freedom. Not a morbid fascination but a liberation. When you stop fearing the worst thing that can happen, everything else loses its power over you. The investor who doesn't fear loss can think clearly about risk. The writer who doesn't fear criticism can say what's true. The person who doesn't fear death can live fully.</p>

      <p>Musashi's genius was understanding that fear of death is really fear of unlived life. Face that fear and you find not courage but clarity.</p>

      <h2>21. Respect Buddha and the Gods Without Counting on Their Help</h2>

      <p>The final precept. Respect the forces larger than yourself — call them God, fate, the market, the universe — but do not wait for rescue. Do not delegate your agency. Pray if it brings you peace, but act as if no one is listening.</p>

      <p>This is the heart of the Dokkodo. Self-reliance as a spiritual practice. Walking alone not because you reject others but because you refuse to depend on them. The path is yours. Walk it.</p>

      <hr>

      <p class="post-end-mark">独行道</p>
    `
  },
  {
    slug: 'sounds-that-shaped-me',
    category: 'music',
    title: 'Sounds That Shaped Me',
    date: '2026-01-10',
    readTime: '10 min read',
    excerpt: 'A personal catalog of the albums, artists, and moments that built a musical identity. From Coltrane to Burial, from concert halls to headphones at 3 AM.',
    body: `
      <p>Music has always been the art form that bypasses the intellect entirely. A book argues. A painting suggests. But music simply <em>is</em> — it enters through the ears and goes straight to whatever part of you is most awake at that moment. These are the records that rewired me.</p>

      <h2>John Coltrane — A Love Supreme (1965)</h2>

      <p>I first heard this album at nineteen, alone in a rented room with nothing but a mattress and a borrowed speaker. It destroyed me. Not in the way that sad music destroys — in the way that sacred music destroys. Coltrane wasn't playing jazz. He was praying through a saxophone.</p>

      <p>The four-movement structure — Acknowledgement, Resolution, Pursuance, Psalm — is a spiritual autobiography compressed into thirty-three minutes. When Coltrane chants "a love supreme" in the first movement, repeating it like a mantra, he's doing what Musashi did with the sword: taking something worldly and making it transcendent.</p>

      <h2>Burial — Untrue (2007)</h2>

      <p>London at 3 AM in the rain. That's what this album sounds like. Burial (William Bevan) made electronic music that felt like memory — smeared, half-heard vocal samples over crackle and bass that seems to come from underneath the floor.</p>

      <p>I discovered Untrue during a period when I was working nights and sleeping days, and it became the soundtrack to that inverted life. "Archangel" still makes the hair on my arms stand up. It's music that understands loneliness not as suffering but as a kind of intimacy with the city.</p>

      <h2>Ryuichi Sakamoto — async (2017)</h2>

      <p>Sakamoto made this album while recovering from throat cancer, and you can hear mortality in every sound. It's not sad exactly — it's clear. The way a window is clear after rain. Sparse piano, field recordings, electronic textures that feel like the spaces between thoughts.</p>

      <p>This is the album I put on when I need to think about something difficult. It creates a kind of cognitive clearing — enough structure to keep the mind from wandering, enough space to let ideas form on their own schedule.</p>

      <h2>Miles Davis — Kind of Blue (1959)</h2>

      <p>The most important jazz album ever recorded, and possibly the most important album of any genre. Miles assembled the greatest ensemble in jazz history — Coltrane, Cannonball Adderley, Bill Evans, Paul Chambers, Jimmy Cobb — and gave them modal sketches instead of chord changes. The result was music that sounds like it has always existed, as if Miles didn't compose it but discovered it.</p>

      <p>"So What" is the sound of absolute confidence. Two chords. A question and answer. The most famous bass line in jazz. And then Miles comes in with that muted trumpet, unhurried, inevitable, playing the spaces between the notes as much as the notes themselves.</p>

      <h2>Radiohead — Kid A (2000)</h2>

      <p>The album that taught a generation that you could be experimental and emotional at the same time. After OK Computer, Radiohead could have made another guitar album and sold millions. Instead they dismantled everything and rebuilt it from electronic rubble. "Everything in Its Right Place" still sounds like the future.</p>

      <hr>

      <p class="post-end-mark">独行道</p>
    `
  },
  {
    slug: 'into-the-wild',
    category: 'mountains',
    title: 'Into the Wild',
    date: '2025-12-20',
    readTime: '8 min read',
    excerpt: 'A winter ascent, a broken trail, and the clarity that only comes above the treeline when the wind is trying to kill you.',
    body: `
      <p>The trail disappeared at 2,800 meters. Not gradually — it just stopped, buried under a meter of fresh snow that had fallen overnight. I stood at the edge of the visible world, breathing hard, watching my breath crystallize and vanish, and made the only decision that mattered: keep going or turn back.</p>

      <p>I kept going.</p>

      <h2>The Approach</h2>

      <p>I'd started at 5 AM from the trailhead, headlamp cutting a weak cone through predawn darkness. The first hour was mechanical — switchbacks through dense forest, boots finding the frozen path by muscle memory. My pack was heavy with winter gear: crampons, ice axe, bivvy sack, stove, two liters of water that would freeze solid by noon if I didn't keep them close to my body.</p>

      <p>There's a particular quality to predawn mountain walking that I've never found anywhere else. The world contracts to the circle of your headlamp and the sound of your breathing. Thoughts arise and dissolve without sticking. You become, temporarily, an organism doing exactly what it evolved to do: moving through landscape, alert, alive, unburdened by abstraction.</p>

      <h2>Above the Treeline</h2>

      <p>At the treeline the wind hit. Not wind as you know it in the city — not an inconvenience, not weather — but wind as a physical force, a thing with mass and intention. I leaned into it at what felt like twenty degrees off vertical and made slow progress across an exposed ridge.</p>

      <blockquote>The mountain doesn't care about your training plan, your gear, or your ego. It only cares about physics.</blockquote>

      <p>This is what I come here for. Not the summit — though summits are satisfying — but this. The stripping away. In the mountains, with real consequences for bad decisions, the noise falls away. You don't think about email. You don't think about markets. You think about the next step, the next handhold, the weather window, the descent route. Your world becomes immediate and real in a way that modern life actively prevents.</p>

      <h2>The Summit Ridge</h2>

      <p>I reached the summit ridge at noon, five hours after leaving the treeline. The snow was wind-packed and firm here, good for crampons, and I made quick progress along the narrow crest. To my left, a thousand-meter drop into cloud. To my right, the same. Ahead, the summit — a nondescript pile of rocks with a weathered marker.</p>

      <p>I sat on the summit for exactly eight minutes. Long enough to eat half a frozen energy bar and take in the view — an ocean of peaks in every direction, cloud rivers flowing through the valleys below. Then I started down. The weather was holding, but weather in the mountains is a promise that can be broken at any moment.</p>

      <h2>The Descent</h2>

      <p>They say most accidents happen on the descent, and I understand why. You're tired. You're relieved. The psychological intensity drops and with it your attention. I forced myself to stay sharp, placing each step deliberately, keeping three points of contact on the steeper sections.</p>

      <p>I reached the trailhead at 4 PM, eleven hours after starting. My legs were finished. My face was sunburned despite the cold. I sat in the car with the heater running and felt that particular mountain contentment — not happiness exactly, but a deep, animal satisfaction. I had gone up. I had come down. I was alive and warm and the world was exactly as I had left it, but I was not.</p>

      <p>That's the trade the mountains offer. You give them your comfort, your certainty, your control. They give you back clarity. It's the best deal I know.</p>

      <hr>

      <p class="post-end-mark">独行道</p>
    `
  }
];

// ============================================
// FORMAT HELPERS
// ============================================
function formatDate(dateStr) {
  const d = new Date(dateStr + 'T00:00:00');
  return d.toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' });
}

function formatDateShort(dateStr) {
  const d = new Date(dateStr + 'T00:00:00');
  return d.toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' });
}

// ============================================
// RENDER HELPERS
// ============================================
function renderPostItem(post, showCategory) {
  const categoryLabel = showCategory
    ? `<span class="post-item-category">${CATEGORIES[post.category].label}</span>`
    : '';
  return `
    <a href="#/post/${post.slug}" class="post-item" data-link>
      <div class="post-item-meta">
        ${categoryLabel}
        <span class="post-item-date">${formatDateShort(post.date)}</span>
      </div>
      <h3 class="post-item-title">${post.title}</h3>
      <p class="post-item-excerpt">${post.excerpt}</p>
    </a>
  `;
}

function renderRecentPosts() {
  const container = document.getElementById('recent-posts');
  if (!container) return;
  const sorted = [...POSTS].sort((a, b) => new Date(b.date) - new Date(a.date));
  container.innerHTML = sorted.map(p => renderPostItem(p, true)).join('');
}

function renderCategoryPosts(category) {
  const cat = CATEGORIES[category];
  if (!cat) return;

  document.getElementById('category-label').textContent = cat.label;
  document.getElementById('category-title').textContent = cat.title;
  document.getElementById('category-desc').textContent = cat.description;

  const container = document.getElementById('category-posts');
  const posts = POSTS
    .filter(p => p.category === category)
    .sort((a, b) => new Date(b.date) - new Date(a.date));

  container.innerHTML = posts.length
    ? posts.map(p => renderPostItem(p, false)).join('')
    : '<p style="color:var(--color-text-muted);font-style:italic;">No posts yet in this category.</p>';
}

function renderPost(slug) {
  const post = POSTS.find(p => p.slug === slug);
  if (!post) return false;

  const cat = CATEGORIES[post.category];
  const backLink = document.getElementById('post-back-link');
  backLink.href = `#/${post.category}`;
  backLink.textContent = `← ${cat.title}`;

  document.getElementById('post-category-label').textContent = cat.label;
  document.getElementById('post-title').textContent = post.title;
  document.getElementById('post-date').textContent = formatDate(post.date);
  document.getElementById('post-read-time').textContent = post.readTime;
  document.getElementById('post-body').innerHTML = post.body;

  // Update page title
  document.title = `${post.title} — Dokkodo`;

  return true;
}

// ============================================
// ROUTER
// ============================================
function getRoute() {
  const hash = window.location.hash || '#/';
  return hash.slice(1); // Remove #
}

function showView(viewId) {
  document.querySelectorAll('.view').forEach(v => {
    v.style.display = 'none';
  });
  const target = document.getElementById(viewId);
  if (target) {
    target.style.display = '';
    target.style.opacity = '0';
    requestAnimationFrame(() => {
      target.style.opacity = '1';
    });
  }
}

function updateActiveNav(category) {
  document.querySelectorAll('.nav-link').forEach(link => {
    link.classList.remove('active');
    if (category && link.dataset.category === category) {
      link.classList.add('active');
    }
  });
}

function navigate() {
  const route = getRoute();

  // Close mobile menu
  closeMobileMenu();

  // Scroll to top
  window.scrollTo({ top: 0, behavior: 'instant' });

  if (route === '/' || route === '') {
    // Home
    showView('view-home');
    renderRecentPosts();
    updateActiveNav(null);
    document.title = 'Dokkodo — The Way of Walking Alone';
  } else if (route.startsWith('/post/')) {
    // Individual post
    const slug = route.replace('/post/', '');
    const success = renderPost(slug);
    if (success) {
      const post = POSTS.find(p => p.slug === slug);
      showView('view-post');
      updateActiveNav(post ? post.category : null);
    } else {
      window.location.hash = '#/';
    }
  } else {
    // Category page
    const category = route.replace('/', '');
    if (CATEGORIES[category]) {
      renderCategoryPosts(category);
      showView('view-category');
      updateActiveNav(category);
      document.title = `${CATEGORIES[category].title} — Dokkodo`;
    } else {
      window.location.hash = '#/';
    }
  }
}

// ============================================
// THEME TOGGLE
// ============================================
(function initTheme() {
  const root = document.documentElement;
  // Default to dark mode as specified
  let theme = 'dark';
  // Check system preference but default to dark
  if (window.matchMedia && window.matchMedia('(prefers-color-scheme: light)').matches) {
    // Even with light system preference, we default to dark for this site
    theme = 'dark';
  }
  root.setAttribute('data-theme', theme);

  function updateToggleIcons(t) {
    document.querySelectorAll('[data-theme-toggle]').forEach(toggle => {
      toggle.setAttribute('aria-label', `Switch to ${t === 'dark' ? 'light' : 'dark'} mode`);
      toggle.innerHTML = t === 'dark'
        ? '<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="12" r="5"/><path d="M12 1v2M12 21v2M4.22 4.22l1.42 1.42M18.36 18.36l1.42 1.42M1 12h2M21 12h2M4.22 19.78l1.42-1.42M18.36 5.64l1.42-1.42"/></svg>'
        : '<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"/></svg>';
      // Re-add label for mobile
      if (toggle.classList.contains('mobile-theme-btn')) {
        toggle.innerHTML += '<span class="mobile-theme-label">Toggle theme</span>';
      }
    });
  }

  updateToggleIcons(theme);

  document.addEventListener('click', function(e) {
    const toggle = e.target.closest('[data-theme-toggle]');
    if (toggle) {
      theme = theme === 'dark' ? 'light' : 'dark';
      root.setAttribute('data-theme', theme);
      updateToggleIcons(theme);
    }
  });
})();

// ============================================
// MOBILE MENU
// ============================================
function closeMobileMenu() {
  const overlay = document.getElementById('mobile-menu-overlay');
  const btn = document.getElementById('mobile-menu-btn');
  if (overlay) overlay.classList.remove('open');
  if (btn) btn.setAttribute('aria-expanded', 'false');
  document.body.style.overflow = '';
}

(function initMobileMenu() {
  const btn = document.getElementById('mobile-menu-btn');
  const overlay = document.getElementById('mobile-menu-overlay');

  if (btn && overlay) {
    btn.addEventListener('click', function() {
      const isOpen = overlay.classList.contains('open');
      if (isOpen) {
        closeMobileMenu();
      } else {
        overlay.classList.add('open');
        btn.setAttribute('aria-expanded', 'true');
        document.body.style.overflow = 'hidden';
      }
    });

    // Close on overlay background click
    overlay.addEventListener('click', function(e) {
      if (e.target === overlay || e.target === overlay.querySelector('.mobile-menu-content')) {
        closeMobileMenu();
      }
    });

    // Close on Escape
    document.addEventListener('keydown', function(e) {
      if (e.key === 'Escape' && overlay.classList.contains('open')) {
        closeMobileMenu();
      }
    });
  }
})();

// ============================================
// SCROLL REVEAL (JS fallback for browsers without animation-timeline)
// ============================================
(function initScrollReveal() {
  if (CSS.supports && CSS.supports('animation-timeline', 'scroll()')) return;

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.style.opacity = '1';
          observer.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.1 }
  );

  function observeElements() {
    document.querySelectorAll('.fade-in').forEach(el => {
      el.style.opacity = '0';
      el.style.transition = 'opacity 600ms cubic-bezier(0.16, 1, 0.3, 1)';
      observer.observe(el);
    });
  }

  // Re-observe when views change
  const origNavigate = navigate;
  window._scrollObserver = observer;
  window._observeElements = observeElements;
})();

// ============================================
// STAGGER ANIMATION
// ============================================
function staggerIn(selector, delay) {
  delay = delay || 50;
  const els = document.querySelectorAll(selector);
  els.forEach((el, i) => {
    el.classList.remove('visible');
    el.style.opacity = '0';
    setTimeout(() => {
      el.style.transition = `opacity 400ms cubic-bezier(0.16, 1, 0.3, 1)`;
      el.style.opacity = '1';
    }, i * delay + 50);
  });
}

// ============================================
// INIT
// ============================================
window.addEventListener('hashchange', navigate);
window.addEventListener('DOMContentLoaded', function() {
  navigate();
});

// Handle link clicks for smooth navigation
document.addEventListener('click', function(e) {
  const link = e.target.closest('[data-link]');
  if (link) {
    // Mobile menu links
    closeMobileMenu();
  }
});
