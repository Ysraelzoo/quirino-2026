/* ════════════════════════════════════════════════════
   QUIRINO.ORG — main.js
   Versión: 1.0
   Módulos:
     1. Nav — scroll state (dark ↔ light)
     2. Nav — lang selector
     3. Scroll reveal
     4. Footer — lang selector
   ════════════════════════════════════════════════════ */


/* ────────────────────────────
   1. NAV — SCROLL STATE
   Cambia la clase del nav al pasar
   el fold del hero para alternar
   entre modo oscuro y claro
──────────────────────────── */

(function initNavScroll() {
  const nav  = document.getElementById('nav');
  const hero = document.getElementById('hero');

  if (!nav || !hero) return;

  function updateNav() {
    const heroBottom = hero.getBoundingClientRect().bottom;

    if (heroBottom <= 0) {
      // Usuario ha pasado el hero: nav claro
      nav.classList.add('over-light');
      nav.classList.remove('over-dark');
    } else {
      // Usuario está sobre el hero: nav oscuro/transparente
      nav.classList.add('over-dark');
      nav.classList.remove('over-light');
    }
  }

  // Estado inicial
  updateNav();

  // Escuchar scroll
  window.addEventListener('scroll', updateNav, { passive: true });
})();


/* ────────────────────────────
   2. NAV — SELECTOR DE IDIOMA
   Toggle de clase .on entre botones
   de idioma en el nav
──────────────────────────── */

(function initNavLang() {
  const langBtns = document.querySelectorAll('.nav-lang');

  langBtns.forEach(btn => {
    btn.addEventListener('click', function () {
      langBtns.forEach(b => b.classList.remove('on'));
      this.classList.add('on');

      // TODO: aquí puedes conectar la lógica de i18n real
      // const lang = this.dataset.lang; // 'es' | 'pt' | 'en'
      // i18n.setLanguage(lang);
    });
  });
})();


/* ────────────────────────────
   3. SCROLL REVEAL
   Observa elementos con clase .reveal
   y añade .on cuando son visibles
   en el viewport (umbral: 6%)
──────────────────────────── */

(function initScrollReveal() {
  const elements = document.querySelectorAll('.reveal');

  if (!elements.length) return;

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('on');
          observer.unobserve(entry.target); // Animación solo una vez
        }
      });
    },
    {
      threshold: 0.06,
      rootMargin: '0px 0px -40px 0px'
    }
  );

  elements.forEach(el => observer.observe(el));
})();


/* ────────────────────────────
   4. FOOTER — SELECTOR DE IDIOMA
   Igual que en el nav, sincroniza
   los botones de idioma del footer
──────────────────────────── */

(function initFooterLang() {
  const langBtns = document.querySelectorAll('.fb-lang');

  langBtns.forEach(btn => {
    btn.addEventListener('click', function () {
      langBtns.forEach(b => b.classList.remove('on'));
      this.classList.add('on');

      // TODO: sincronizar con el selector del nav si implementas i18n
      // const lang = this.dataset.lang;
    });
  });
})();


/* ────────────────────────────
   5. NAV — SMOOTH SCROLL
   Para los links del nav que apuntan
   a anclas internas (#premios, etc.)
──────────────────────────── */

(function initSmoothScroll() {
  const navLinks = document.querySelectorAll('.nav-link[href^="#"]');

  navLinks.forEach(link => {
    link.addEventListener('click', function (e) {
      e.preventDefault();
      const target = document.querySelector(this.getAttribute('href'));
      if (!target) return;

      target.scrollIntoView({ behavior: 'smooth', block: 'start' });

      // Actualizar clase activa en el nav
      navLinks.forEach(l => l.classList.remove('on'));
      this.classList.add('on');
    });
  });
})();


/* ────────────────────────────
   6. OBRAS — HOVER (preparado)
   Placeholder para futura
   lógica de preview / lightbox
   cuando se conecten las fotos reales
──────────────────────────── */

(function initObrasHover() {
  const obras = document.querySelectorAll('.obra');

  obras.forEach(obra => {
    obra.addEventListener('click', function () {
      // TODO: abrir modal / lightbox con datos de la obra
      // const titulo = this.querySelector('.obra-title')?.textContent;
      // openModal(titulo);
      console.log('[Quirino] Obra seleccionada:', this.querySelector('.obra-title')?.textContent);
    });
  });
})();


/* ────────────────────────────
   7. EDICIONES — CLICK
   Placeholder para navegación
   a la página de cada edición
──────────────────────────── */

(function initEdicionesClick() {
  const rows = document.querySelectorAll('.ed-row:not(.active)');

  rows.forEach(row => {
    row.addEventListener('click', function () {
      const year = this.querySelector('.ed-year')?.textContent;
      // TODO: navegar a /ediciones/{year}
      console.log('[Quirino] Edición seleccionada:', year);
    });
  });
})();
