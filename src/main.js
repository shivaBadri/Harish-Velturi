import './styles.css';

const A = '/assets/';

const projects = [
  {
    title: 'Miyapur Commercial Reel',
    category: 'Brand Film / Commercial',
    video: 'videos/miyapur-showreel.mp4',
    ratio: 'vertical',
    brand: 'Miyapur Commercial Campaign',
    desc: 'Fast-cut promotional reel with attention-grabbing pacing, reveal moments and social-first storytelling.'
  },
  {
    title: 'Raghu Nandan Edit',
    category: 'Movie Style Cut',
    video: 'videos/raghu-nandan.mp4',
    ratio: 'vertical',
    brand: 'Independent Actor Edit',
    desc: 'Character-focused cinematic edit with dramatic timing, impact cuts, stylized transitions and emotional rhythm.'
  },
  {
    title: 'Oorvashee Coming Soon',
    category: 'Promo Trailer',
    video: 'videos/oorvashee.mp4',
    ratio: 'horizontal',
    brand: 'Oorvashee Saree House',
    desc: 'Elegant announcement trailer designed for premium brand recall and product launch visibility.'
  },
  {
    title: 'SR Cons Telugu Commercial',
    category: 'Corporate / Real Estate Film',
    video: 'videos/sr-cons.mp4',
    ratio: 'horizontal',
    brand: 'SR Cons Developers',
    desc: 'Professional corporate video with Telugu communication, clean brand presentation and sharp visual flow.'
  },
  {
    title: 'Transform Edit',
    category: 'Editing Effects / Social Reel',
    video: 'videos/edit-transform.mp4',
    ratio: 'vertical',
    brand: 'Creator Transformation Reel',
    desc: 'Before-and-after editing transformation focused on visual effects, transitions and mobile audience retention.'
  },
  {
    title: 'Viral Edit Pack',
    category: 'Short Form Reel Cut',
    video: 'videos/viral-edit.mp4',
    ratio: 'vertical',
    brand: 'Influencer / Social Campaign',
    desc: 'High-energy social media edit pack with hook-first pacing, beat sync and creator-friendly cuts.'
  }
];

const brands = ['Oorvashee Saree House', 'SR Cons Developers', 'Rapido Style Campaigns', 'Miyapur Commercials', 'Influencer Collaborations', 'Local Business Promotions'];
const skills = ['Feature Film Editing', 'Trailer Cuts', 'Commercial Ads', 'Brand Films', 'Music Videos', 'Reels & Shorts', 'Color Grading', 'Sound Polish', 'Motion Graphics', 'Beat Sync Edits'];
const gallery = [
  ['hero.jpg', 'Creative Director Portrait'],
  ['editor-suite.png', 'Editor Suite / Premiere Pro Workflow'],
  ['portrait-chair.jpg', 'Premium Profile Portrait'],
  ['cinematographer.jpg', 'Camera & BTS Work'],
  ['cinematographer-focus.jpg', 'On-ground Shooting'],
  ['portrait-walk.jpg', 'Cinematic Outdoor Visual']
];

let active = 0;
let soundEnabled = false;

function icon(name) {
  const icons = {
    play: '<svg viewBox="0 0 24 24"><path d="M8 5v14l11-7z"/></svg>',
    sound: '<svg viewBox="0 0 24 24"><path d="M3 9v6h4l5 5V4L7 9H3zm13.5 3A4.5 4.5 0 0 0 14 8v8a4.5 4.5 0 0 0 2.5-4z"/></svg>',
    film: '<svg viewBox="0 0 24 24"><path d="M4 4h16v16H4V4zm2 2v2h2V6H6zm10 0v2h2V6h-2zM6 16v2h2v-2H6zm10 0v2h2v-2h-2z"/></svg>',
    camera: '<svg viewBox="0 0 24 24"><path d="M9 4l-2 3H4a2 2 0 0 0-2 2v9a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V9a2 2 0 0 0-2-2h-3l-2-3H9zm3 14a4.5 4.5 0 1 1 0-9 4.5 4.5 0 0 1 0 9z"/></svg>'
  };
  return icons[name] || '';
}

function render() {
  document.getElementById('app').innerHTML = `
    <div class="loader"><div>HARISH VELTHURI</div><span></span></div>
    <div class="grain"></div>
    <nav>
      <a class="logo" href="#top">HV<span>Editor</span></a>
      <div class="navlinks"><a href="#work">Work</a><a href="#brands">Brands</a><a href="#gallery">Gallery</a><a href="#contact">Contact</a></div>
    </nav>

    <header class="hero" id="top">
      <video class="hero-bg" src="${A + projects[0].video}" autoplay muted loop playsinline></video>
      <div class="hero-shadow"></div>
      <div class="hero-copy reveal">
        <p class="kicker">Movie • Commercial • Professional Edits</p>
        <h1>HARISH<br><span>VELTHURI</span></h1>
        <p class="lead">Cinematic Video Editor, Colorist and Visual Storyteller crafting movie-style cuts, brand films, commercial reels, trailers, social campaigns and professional post-production content.</p>
        <div class="actions"><a class="btn primary" href="#work">${icon('play')} Watch Portfolio</a><a class="btn" href="#contact">Hire For Project</a></div>
      </div>
      <figure class="hero-card reveal delay-1"><img src="${A}images/hero.jpg" alt="Harish Velthuri professional portrait"><figcaption>Editor • Shooter • Storyteller</figcaption></figure>
    </header>

    <section class="marquee"><div>${skills.map(s => `<span>${s}</span>`).join('')}</div></section>

    <section class="intro">
      <div class="section-title reveal"><p>Profile Upgrade</p><h2>Built for movie teams, production houses, brands and creators.</h2></div>
      <div class="intro-grid">
        <div class="quote reveal">“A strong edit should feel like cinema — even when it is made for a reel.”</div>
        <div class="intro-copy reveal delay-1"><p>Harish presents a focused portfolio for film, OTT, advertisements, brand campaigns and creator content. The layout removes casual visuals and highlights only professional portraits, editor workstation visuals, camera work and selected video samples.</p></div>
        <div class="metrics reveal delay-2"><b>100+</b><span>Creative Edits</span><b>6</b><span>Portfolio Films</span><b>10+</b><span>Editing Skills</span></div>
      </div>
    </section>

    <section class="work" id="work">
      <div class="section-title center reveal"><p>Selected Work</p><h2>Frame-correct video showcase with sound.</h2></div>
      <div class="showcase">
        <div class="player-shell reveal">
          <div class="frame-label"><span>${projects[active].category}</span><strong>${projects[active].brand}</strong></div>
          <div class="video-frame ${projects[active].ratio}" id="videoFrame">
            <video id="activeVideo" src="${A + projects[active].video}" autoplay ${soundEnabled ? '' : 'muted'} loop playsinline controls preload="metadata"></video>
            <div class="switch-flash"></div>
          </div>
          <button class="sound-btn" id="soundBtn">${icon('sound')} ${soundEnabled ? 'Sound On' : 'Enable Sound'}</button>
        </div>
        <div class="project-list reveal delay-1">
          ${projects.map((p, i) => `
            <button class="project-btn ${i === active ? 'active' : ''}" data-index="${i}">
              <span>${String(i + 1).padStart(2, '0')}</span>
              <div><b>${p.title}</b><small>${p.category}</small><p>${p.desc}</p></div>
            </button>
          `).join('')}
        </div>
      </div>
    </section>

    <section class="brands" id="brands">
      <div class="section-title reveal"><p>Collaborations</p><h2>Professional projects and brand exposure.</h2></div>
      <div class="brand-grid">${brands.map((b, i) => `<div class="brand-card reveal" style="--i:${i}"><span>0${i+1}</span><b>${b}</b></div>`).join('')}</div>
    </section>

    <section class="effects">
      <div class="section-title center reveal"><p>Editing Effects</p><h2>Post-production value added to every project.</h2></div>
      <div class="effect-grid">
        ${['Seamless Transitions','Beat-Synced Cuts','Cinematic Color Grade','Sound Design & Polish','Text Reveal Animation','Trailer-Style Pacing','VFX Transformation Edits','Social Hook Building'].map((e,i)=>`<div class="effect-card reveal"><span>${String(i+1).padStart(2,'0')}</span>${e}</div>`).join('')}
      </div>
    </section>

    <section class="gallery" id="gallery">
      <div class="section-title reveal"><p>Professional Visuals</p><h2>Only relevant, clean and industry-ready images.</h2></div>
      <div class="gallery-grid">${gallery.map(([img,cap],i)=>`<figure class="reveal"><img src="${A}images/${img}" alt="${cap}"><figcaption>${cap}</figcaption></figure>`).join('')}</div>
    </section>

    <section class="workflow">
      <div class="section-title center reveal"><p>Workflow</p><h2>From raw footage to polished cinema-style export.</h2></div>
      <div class="timeline">${['Footage Review','Story & Beat Map','Rough Cut','Transitions & Motion','Color Grade','Sound Mix','Final Export'].map((s,i)=>`<div class="step reveal"><span>${String(i+1).padStart(2,'0')}</span><b>${s}</b></div>`).join('')}</div>
    </section>

    <section class="contact" id="contact">
      <div class="contact-copy reveal"><p class="kicker">Available For Films, Ads & Brand Campaigns</p><h2>Let’s cut your story like cinema.</h2><p>Harish Velthuri — Cinematic Video Editor • Colorist • Visual Storyteller</p><div class="actions"><a class="btn primary" href="tel:+917993291563">Call: 79932 91563</a><a class="btn" href="https://instagram.com/_harish_velthuri_" target="_blank">Instagram</a></div></div>
      <img class="contact-img reveal delay-1" src="${A}images/editor-suite.png" alt="Harish editing workstation">
    </section>

    <footer>© 2026 Harish Velthuri. Portfolio for movies, commercials, brand films and professional editing opportunities.</footer>
  `;
  bind();
  observe();
}

function bind() {
  document.querySelectorAll('.project-btn').forEach(btn => {
    btn.addEventListener('click', () => {
      active = Number(btn.dataset.index);
      render();
      const v = document.getElementById('activeVideo');
      if (v) { v.volume = soundEnabled ? 1 : 0; v.muted = !soundEnabled; v.play().catch(() => {}); }
    });
  });
  const soundBtn = document.getElementById('soundBtn');
  if (soundBtn) soundBtn.addEventListener('click', () => {
    soundEnabled = true;
    const v = document.getElementById('activeVideo');
    if (v) { v.muted = false; v.volume = 1; v.play().catch(() => {}); }
    soundBtn.innerHTML = `${icon('sound')} Sound On`;
  });
}

function observe() {
  const io = new IntersectionObserver((entries) => {
    entries.forEach(e => { if (e.isIntersecting) e.target.classList.add('in'); });
  }, { threshold: 0.12 });
  document.querySelectorAll('.reveal').forEach(el => io.observe(el));
}

render();
