/* ============================================================
   GLAM STUDIO — script.js
   ============================================================ */

// ── PRELOADER ──────────────────────────────────────────────
window.addEventListener('load', () => {
  setTimeout(() => {
    document.getElementById('preloader').classList.add('hidden');
  }, 1600);
});

// ── NAVBAR SCROLL ──────────────────────────────────────────
const navbar = document.getElementById('navbar');
window.addEventListener('scroll', () => {
  navbar.classList.toggle('scrolled', window.scrollY > 60);
  document.getElementById('backTop').classList.toggle('show', window.scrollY > 400);
});

// ── HAMBURGER / MOBILE MENU ────────────────────────────────
const hamburger   = document.getElementById('hamburger');
const mobileMenu  = document.getElementById('mobileMenu');
const closeMenu   = document.getElementById('closeMenu');
const overlay     = document.getElementById('menuOverlay');

function openMenu()  { mobileMenu.classList.add('open'); overlay.classList.add('show'); document.body.style.overflow = 'hidden'; }
function closeMobMenu() { mobileMenu.classList.remove('open'); overlay.classList.remove('show'); document.body.style.overflow = ''; }

hamburger.addEventListener('click', openMenu);
closeMenu.addEventListener('click', closeMobMenu);
overlay.addEventListener('click', closeMobMenu);
mobileMenu.querySelectorAll('a').forEach(a => a.addEventListener('click', closeMobMenu));

// ── SERVICES DATA ──────────────────────────────────────────
const servicesData = {
  women: [
    {
      img: 'https://images.unsplash.com/photo-1522337360788-8b13dee7a37e?w=500&q=80',
      title: 'Hair Styling & Cuts',
      desc: 'Expert cuts, vibrant coloring, luxurious conditioning and smoothing treatments tailored for you.'
    },
    {
      img: 'https://images.unsplash.com/photo-1596755389378-c31d21fd1273?w=500&q=80',
      title: 'Skin & Facials',
      desc: 'Rejuvenating facials, deep cleansing, hydration treatments and anti-aging solutions for radiant skin.'
    },
    {
      img: 'https://images.unsplash.com/photo-1570172619644-dfd03ed5d881?w=500&q=80',
      title: 'Body Treatments',
      desc: 'Relaxing massages, exfoliating scrubs, detoxifying treatments and full-body pampering.'
    },
    {
      img: 'https://images.unsplash.com/photo-1604654894610-df63bc536371?w=500&q=80',
      title: 'Nail Art & Care',
      desc: 'Gorgeous manicures, pedicures, gel nails, nail art and full nail care treatments.'
    }
  ],
  men: [
    {
      img: 'https://images.unsplash.com/photo-1503951914875-452162b0f3f1?w=500&q=80',
      title: 'Haircut & Barbering',
      desc: 'Precise styling, fades, trims and classic barbering with relaxing treatments.'
    },
    {
      img: 'https://images.unsplash.com/photo-1556228578-8c89e6adf883?w=500&q=80',
      title: 'Men\'s Skin Treatments',
      desc: 'Advanced skincare including deep cleansing facials, exfoliation and anti-aging solutions.'
    },
    {
      img: 'https://images.unsplash.com/photo-1519824145371-296894a0daa9?w=500&q=80',
      title: 'Body & Massage',
      desc: 'Body scrubs, detox treatments, body polishing and full-body relaxation sessions.'
    },
    {
      img: 'https://images.unsplash.com/photo-1567894340315-735d7c361db0?w=500&q=80',
      title: 'Beard Grooming',
      desc: 'Expert beard shaping, conditioning, trimming and luxury beard treatments.'
    }
  ],
  'bridal-tab': [
    {
      img: 'https://images.unsplash.com/photo-1511285560929-80b456fea0bc?w=500&q=80',
      title: 'Bridal Makeup',
      desc: 'Flawless, long-lasting bridal makeup that enhances your natural beauty on your big day.'
    },
    {
      img: 'https://images.unsplash.com/photo-1487412947147-5cebf100ffc2?w=500&q=80',
      title: 'Pre-Bridal Packages',
      desc: 'Skin prep, hair nourishment, body polish and complete bridal glow packages.'
    },
    {
      img: 'https://images.unsplash.com/photo-1519741347686-c1e331fcb1e8?w=500&q=80',
      title: 'Bridal Hair Styling',
      desc: 'Exquisite bridal hair styles — updos, braids, curls and everything in between.'
    },
    {
      img: 'https://images.unsplash.com/photo-1469371670807-013ccf25f16a?w=500&q=80',
      title: 'Family Packages',
      desc: 'Complete beauty packages for the entire bridal party — mother, sisters and more.'
    }
  ]
};

// ── RENDER SERVICES ────────────────────────────────────────
function renderServices(tab) {
  const grid = document.getElementById('servicesGrid');
  const data = servicesData[tab];
  grid.innerHTML = '';
  data.forEach(item => {
    const card = document.createElement('div');
    card.className = 'service-card reveal';
    card.innerHTML = `
      <div class="service-img-wrap">
        <img src="${item.img}" alt="${item.title}" class="service-img" loading="lazy"/>
      </div>
      <div class="service-body">
        <h3>${item.title}</h3>
        <p>${item.desc}</p>
        <a href="#book" class="service-link">Book Now <i class="fas fa-arrow-right"></i></a>
      </div>`;
    grid.appendChild(card);
  });
  observeReveal();
}

// ── SERVICE TABS ───────────────────────────────────────────
document.querySelectorAll('.tab').forEach(btn => {
  btn.addEventListener('click', () => {
    document.querySelectorAll('.tab').forEach(t => t.classList.remove('active'));
    btn.classList.add('active');
    renderServices(btn.dataset.tab);
  });
});
renderServices('women');

// ── TESTIMONIALS ───────────────────────────────────────────
const testimonials = [
  {
    text: 'I recently went for a haircut and one of their senior staff attended to me. The whole experience was comfortable and I absolutely love the result!',
    name: 'Priya Sharma', loc: 'Mumbai',
    avatar: 'https://i.pravatar.cc/100?img=47'
  },
  {
    text: 'I had an amazing experience at Glam Studio! The staff was friendly and professional, and they took the time to understand exactly what I wanted.',
    name: 'Ananya Krishnan', loc: 'Chennai',
    avatar: 'https://i.pravatar.cc/100?img=48'
  },
  {
    text: 'The bridal package was absolutely magical. Every detail was perfect and I felt like a queen on my wedding day. Highly recommend!',
    name: 'Meera Iyer', loc: 'Bangalore',
    avatar: 'https://i.pravatar.cc/100?img=49'
  },
  {
    text: 'I had a wonderful experience at Glam Studio. The haircut was satisfying, and the hairdresser was truly hospitable. Great service overall!',
    name: 'Divya Nair', loc: 'Hyderabad',
    avatar: 'https://i.pravatar.cc/100?img=50'
  },
  {
    text: 'I got my haircut and facial done here. It was an amazing job — very professional and the ambience was so pleasant. Will definitely return!',
    name: 'Sneha Reddy', loc: 'Pune',
    avatar: 'https://i.pravatar.cc/100?img=51'
  },
  {
    text: 'The skin treatment package gave me the glow I always wanted. The team is incredibly knowledgeable and caring. Best salon in the city!',
    name: 'Lakshmi Patel', loc: 'Ahmedabad',
    avatar: 'https://i.pravatar.cc/100?img=52'
  }
];

const track = document.getElementById('testTrack');
const dotsContainer = document.getElementById('testDots');
let currentSlide = 0;
const visibleCount = () => window.innerWidth < 768 ? 1 : window.innerWidth < 1024 ? 2 : 3;

testimonials.forEach(t => {
  const card = document.createElement('div');
  card.className = 'test-card';
  card.innerHTML = `
    <div class="test-stars">${'★'.repeat(5)}</div>
    <p class="test-text">"${t.text}"</p>
    <div class="test-author">
      <img src="${t.avatar}" alt="${t.name}" class="test-avatar"/>
      <div>
        <div class="test-name">${t.name}</div>
        <div class="test-loc">${t.loc}</div>
      </div>
    </div>`;
  track.appendChild(card);
});

function buildDots() {
  dotsContainer.innerHTML = '';
  const pages = Math.ceil(testimonials.length / visibleCount());
  for (let i = 0; i < pages; i++) {
    const d = document.createElement('button');
    d.className = 'dot' + (i === currentSlide ? ' active' : '');
    d.setAttribute('aria-label', `Slide ${i+1}`);
    d.addEventListener('click', () => goToSlide(i));
    dotsContainer.appendChild(d);
  }
}

function goToSlide(n) {
  const pages = Math.ceil(testimonials.length / visibleCount());
  currentSlide = (n + pages) % pages;
  const offset = currentSlide * visibleCount();
  const cardWidth = track.children[0] ? track.children[0].offsetWidth + 24 : 0;
  track.style.transform = `translateX(-${offset * cardWidth}px)`;
  document.querySelectorAll('.dot').forEach((d,i) => d.classList.toggle('active', i === currentSlide));
}

buildDots();
window.addEventListener('resize', () => { buildDots(); goToSlide(0); });

// Auto-advance
setInterval(() => goToSlide(currentSlide + 1), 4500);

// ── FORMS ─────────────────────────────────────────────────
document.getElementById('bookForm').addEventListener('submit', e => {
  e.preventDefault();
  const btn = e.target.querySelector('button');
  const orig = btn.textContent;
  btn.textContent = '✓ Booking Confirmed!';
  btn.style.background = 'linear-gradient(135deg, #1a7a3a, #2ea854)';
  setTimeout(() => { btn.textContent = orig; btn.style.background = ''; e.target.reset(); }, 3000);
});

document.getElementById('contactForm').addEventListener('submit', e => {
  e.preventDefault();
  const btn = e.target.querySelector('button');
  const orig = btn.textContent;
  btn.textContent = '✓ Message Sent!';
  btn.style.background = 'linear-gradient(135deg, #1a7a3a, #2ea854)';
  setTimeout(() => { btn.textContent = orig; btn.style.background = ''; e.target.reset(); }, 3000);
});

// ── BACK TO TOP ────────────────────────────────────────────
document.getElementById('backTop').addEventListener('click', () => {
  window.scrollTo({ top: 0, behavior: 'smooth' });
});

// ── SCROLL REVEAL ──────────────────────────────────────────
function observeReveal() {
  const els = document.querySelectorAll('.reveal');
  const observer = new IntersectionObserver(entries => {
    entries.forEach((e, i) => {
      if (e.isIntersecting) {
        setTimeout(() => e.target.classList.add('visible'), i * 80);
        observer.unobserve(e.target);
      }
    });
  }, { threshold: 0.12 });
  els.forEach(el => observer.observe(el));
}

// Add reveal classes to sections
document.querySelectorAll('.feature-card, .service-card, .fr-card, .test-card, .bridal-content, .franchise-content, .academy-content').forEach(el => {
  el.classList.add('reveal');
});
observeReveal();

// ── SMOOTH ANCHOR CLOSE ON MOBILE ──────────────────────────
document.querySelectorAll('a[href^="#"]').forEach(a => {
  a.addEventListener('click', () => closeMobMenu());
});
