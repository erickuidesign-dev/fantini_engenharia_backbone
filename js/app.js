document.addEventListener('DOMContentLoaded', () => {
  initSimulator();
  initHeaderScroll();
  initScrollAnimations();
  initMobileMenu();
  initHeroVideoCarousel();
  initCustomCursor();
  initBentoParallax3D();
});


/* ==========================================================================
   SIMULADOR DE ACESSO INTERATIVO - FANTINI
   ========================================================================== */
function initSimulator() {
  const selectorButtons = document.querySelectorAll('.sim-selector-btn');
  if (selectorButtons.length === 0) return;

  // Banco de Dados das Recomendações de Engenharia da Fantini
  const sectorData = {
    'industria': {
      tag: 'Setor: Indústrias & Grandes Plantas',
      title: 'Blindagem de Alto Tráfego para Plantas Industriais',
      desc: 'Projetos robustos desenhados para suportar o fluxo diário de milhares de colaboradores e prestadores de serviço, garantindo segurança patrimonial extrema sem gerar gargalos no registro de ponto ou troca de turnos.',
      specs: [
        { label: 'Barreira Física', value: 'Torniquete Duplo em Aço Inox 304' },
        { label: 'Validação Biométrica', value: 'Leitor Facial 3D Liveness 0.2s' },
        { label: 'Integração de Ponto', value: 'API Nativa com ERP / REP Homologado' },
        { label: 'SLA Técnico', value: 'Emergência 24/7 (Chamado em < 2h)' }
      ]
    },
    'estacionamento': {
      tag: 'Setor: Malls & Estacionamentos',
      title: 'Automação Integrada de Fluxo Veicular Rápido',
      desc: 'Sistemas inteligentes focados em velocidade e confiabilidade máxima operacional, permitindo bilhetagem automática, leitura instantânea de placas e triagem sem contato humano.',
      specs: [
        { label: 'Barreira Física', value: 'Cancelas Rápidas de Alto Fluxo (0.6s)' },
        { label: 'Tecnologia de Identificação', value: 'Câmeras OCR / LPR 4K com IA' },
        { label: 'Painel de Controle', value: 'Dashboard de Ocupação em Tempo Real' },
        { label: 'Ciclos de Operação', value: '10 Milhões de Aberturas Garantidas' }
      ]
    },
    'logistico': {
      tag: 'Setor: Terminais & Centros Logísticos',
      title: 'Triagem e Controle Crítico de Perímetros e Frotas',
      desc: 'Blindagem completa para docas e centros de distribuição. Gestão de entrada e saída de veículos pesados, triagem automatizada de motoristas e registro de cargas integrado.',
      specs: [
        { label: 'Barreira Física', value: 'Cancelas Heavy-Duty com Braço Articulado' },
        { label: 'Totem de Triagem', value: 'Totens de Autoatendimento Multi-Tecnologia' },
        { label: 'Integração Central', value: 'Conexão Direta WMS / Gate Control' },
        { label: 'SLA de Manutenção', value: 'Preventiva Mensal Inclusa em Contrato' }
      ]
    },
    'corporativo': {
      tag: 'Setor: Prédios Comerciais & Escritórios',
      title: 'Acesso Executivo de Alta Tecnologia e Estética',
      desc: 'Visualização minimalista integrada com a mais alta tecnologia de identificação sem toque, desenhada para recepções corporativas de alto padrão que exigem design e discrição.',
      specs: [
        { label: 'Barreira Física', value: 'Speed Gates Flot com Vidro Temperado' },
        { label: 'Validação Biométrica', value: 'Leitores Faciais Ocultos no Painel' },
        { label: 'Gestão de Visitantes', value: 'Pré-cadastro Web com Liberação QR Code' },
        { label: 'Integração Predial', value: 'Conexão com Despacho de Elevadores' }
      ]
    }
  };

  const tagEl = document.getElementById('sim-result-tag');
  const titleEl = document.getElementById('sim-result-title');
  const descEl = document.getElementById('sim-result-desc');
  const specsContainer = document.getElementById('sim-specs-list');

  selectorButtons.forEach(button => {
    button.addEventListener('click', () => {
      // 1. Remove classe active de todos
      selectorButtons.forEach(btn => btn.classList.remove('active'));
      
      // 2. Adiciona active ao clicado
      button.classList.add('active');

      // 3. Pega dados do setor correspondente
      const sectorKey = button.getAttribute('data-sector');
      const data = sectorData[sectorKey];

      if (!data) return;

      // 4. Efeito sutil de fade out
      const resultBox = document.getElementById('sim-result-box');
      resultBox.style.opacity = '0.3';
      resultBox.style.transition = 'opacity 0.2s ease';

      setTimeout(() => {
        // 5. Atualiza os dados no DOM
        tagEl.textContent = data.tag;
        titleEl.textContent = data.title;
        descEl.textContent = data.desc;

        // Limpa e reconstrói as especificações
        specsContainer.innerHTML = '';
        data.specs.forEach(spec => {
          const specItemHtml = `
            <div class="sim-spec-item">
              <span class="sim-spec-label">${spec.label}</span>
              <span class="sim-spec-value">${spec.value}</span>
            </div>
          `;
          specsContainer.insertAdjacentHTML('beforeend', specItemHtml);
        });

        // 6. Fade in
        resultBox.style.opacity = '1';
      }, 200);
    });
  });
}

/* ==========================================================================
   EFEITO DO MENU AO ROLAR A PÁGINA (HEADER SHADE)
   ========================================================================== */
function initHeaderScroll() {
  const header = document.querySelector('.header-nav');
  if (!header) return;

  window.addEventListener('scroll', () => {
    if (window.scrollY > 50) {
      header.style.backgroundColor = 'rgba(0, 0, 0, 0.95)';
      header.style.padding = '5px 0';
    } else {
      header.style.backgroundColor = 'rgba(0, 0, 0, 0.85)';
      header.style.padding = '0';
    }
  });
}

/* ==========================================================================
   REVEAL ON SCROLL ENGINE (INTERSECTION OBSERVER)
   ========================================================================== */
function initScrollAnimations() {
  const revealElements = document.querySelectorAll('.reveal-slide-up, .reveal-scale, .reveal-opacity');
  if (revealElements.length === 0) return;

  const observerOptions = {
    root: null,
    rootMargin: '0px',
    threshold: 0.12 // Trigger when 12% of the element is visible
  };

  const observer = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('in-view');
        observer.unobserve(entry.target); // Trigger only once
      }
    });
  }, observerOptions);

  revealElements.forEach(el => observer.observe(el));
}

/* ==========================================================================
   MENU HAMBURGUER RESPONSIVO (MOBILE)
   ========================================================================== */
function initMobileMenu() {
  const menuToggle = document.querySelector('.menu-toggle');
  const navMenu = document.querySelector('.nav-menu');
  const navLinks = document.querySelectorAll('.nav-link, .nav-menu .button-01');

  if (!menuToggle || !navMenu) return;

  function toggleMenu() {
    const isExpanded = menuToggle.getAttribute('aria-expanded') === 'true';
    
    menuToggle.classList.toggle('active');
    navMenu.classList.toggle('active');
    menuToggle.setAttribute('aria-expanded', !isExpanded);
    
    // Trava/Destrava a rolagem do body de fundo
    if (!isExpanded) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
  }

  function closeMenu() {
    menuToggle.classList.remove('active');
    navMenu.classList.remove('active');
    menuToggle.setAttribute('aria-expanded', 'false');
    document.body.style.overflow = '';
  }

  menuToggle.addEventListener('click', toggleMenu);

  // Fecha o menu ao clicar em qualquer link (auto-close)
  navLinks.forEach(link => {
    link.addEventListener('click', closeMenu);
  });

  // Limpa travas se redimensionar a tela para desktop
  window.addEventListener('resize', () => {
    if (window.innerWidth > 768) {
      closeMenu();
    }
  });
}

/* ==========================================================================
   CARROSSEL DE VÍDEOS DE FUNDO LAZY LOADED (HERO)
   ========================================================================== */
function initHeroVideoCarousel() {
  const carousel = document.querySelector('.hero-video-carousel');
  if (!carousel) return;

  const slides = carousel.querySelectorAll('.hero-video-slide');
  const indicators = document.querySelectorAll('.indicator-btn');
  if (slides.length <= 1) return;

  let currentSlideIndex = 0;
  const slideInterval = 6000; // Rotaciona a cada 6 segundos
  let carouselTimer = null;

  // Prepara o lazy loading de um slide específico
  function preloadSlideVideo(slide) {
    const video = slide.querySelector('video');
    if (!video) return;
    
    // Se ainda não tem src e tem data-src, injeta e carrega
    if (!video.src && video.getAttribute('data-src')) {
      const dataSrc = video.getAttribute('data-src');
      const source = video.querySelector('source');
      
      if (source) {
        source.src = dataSrc;
      } else {
        video.src = dataSrc;
      }
      
      video.load();
      video.play().catch(err => console.log("Erro de autoplay evitado:", err));
    } else if (video.paused) {
      video.play().catch(err => console.log("Erro ao dar play:", err));
    }
  }

  // Faz a transição estrutural para um slide específico
  function goToSlide(targetIndex) {
    if (targetIndex === currentSlideIndex) return;

    const prevSlide = slides[currentSlideIndex];
    const prevIndicator = indicators[currentSlideIndex];
    
    currentSlideIndex = targetIndex;
    
    const nextSlideEl = slides[currentSlideIndex];
    const nextIndicator = indicators[currentSlideIndex];

    // Carrega/Dá play no vídeo do slide selecionado
    preloadSlideVideo(nextSlideEl);

    // Fade de opacidade nos slides
    if (prevSlide) prevSlide.classList.remove('active');
    nextSlideEl.classList.add('active');

    // Sincroniza estados dos indicadores
    if (prevIndicator) prevIndicator.classList.remove('active');
    if (nextIndicator) nextIndicator.classList.add('active');
  }

  // Avança automaticamente para o próximo slide
  function nextSlide() {
    const nextIndex = (currentSlideIndex + 1) % slides.length;
    goToSlide(nextIndex);
  }

  // Inicializa o temporizador automático do carrossel
  function startCarouselTimer() {
    carouselTimer = setInterval(nextSlide, slideInterval);
  }

  // Reinicia o timer após interação manual
  function resetCarouselTimer() {
    clearInterval(carouselTimer);
    startCarouselTimer();
  }

  // Configura cliques nos botões indicadores
  indicators.forEach(btn => {
    btn.addEventListener('click', () => {
      const targetIndex = parseInt(btn.getAttribute('data-slide'), 10);
      goToSlide(targetIndex);
      resetCarouselTimer();
    });
  });

  // Inicia o timer
  startCarouselTimer();
}

/* ==========================================================================
   CURSOR CUSTOMIZADO COCKPIT HUD (SPRING CURSOR LERP)
   ========================================================================== */
function initCustomCursor() {
  // Apenas ativa se suportar cursor (desktop)
  if (window.matchMedia('(hover: none)').matches) return;

  const cursorHTML = `
    <div class="custom-cursor">
      <div class="cursor-dot"></div>
      <div class="cursor-ring"></div>
      <span class="cursor-label"></span>
    </div>
  `;
  document.body.insertAdjacentHTML('beforeend', cursorHTML);

  const cursor = document.querySelector('.custom-cursor');
  const dot = cursor.querySelector('.cursor-dot');
  const ring = cursor.querySelector('.cursor-ring');
  const label = cursor.querySelector('.cursor-label');

  let mouseX = -100, mouseY = -100;
  let ringX = -100, ringY = -100;
  let isMoving = false;

  document.addEventListener('mousemove', (e) => {
    mouseX = e.clientX;
    mouseY = e.clientY;
    
    if (!isMoving) {
      isMoving = true;
      cursor.style.display = 'block';
    }
  });

  // Loop requestAnimationFrame da GPU para suavidade absoluta
  function updateCursor() {
    // Interpolação Linear (Lerp) para anel (atraso físico mola)
    ringX += (mouseX - ringX) * 0.15;
    ringY += (mouseY - ringY) * 0.15;

    dot.style.transform = `translate3d(${mouseX}px, ${mouseY}px, 0)`;
    ring.style.transform = `translate3d(${ringX}px, ${ringY}px, 0)`;

    requestAnimationFrame(updateCursor);
  }
  requestAnimationFrame(updateCursor);

  // Escuta interações com links e botões normais (Abraço Magnético)
  const hoverSelectors = 'a, button, [role="button"], .sim-selector-btn, .brand-logo-wrap';
  document.addEventListener('mouseenter', (e) => {
    if (e.target.matches && e.target.matches(hoverSelectors)) {
      cursor.classList.add('hovering-button');
    }
  }, true);

  document.addEventListener('mouseleave', (e) => {
    if (e.target.matches && e.target.matches(hoverSelectors)) {
      cursor.classList.remove('hovering-button');
    }
  }, true);

  // Escuta interações com elementos que possuem etiquetas de cursor customizadas
  document.addEventListener('mouseenter', (e) => {
    const targetWithLabel = e.target.closest && e.target.closest('[data-cursor-label]');
    if (targetWithLabel) {
      const text = targetWithLabel.getAttribute('data-cursor-label');
      label.textContent = text;
      cursor.classList.add('hovering-label');
    }
  }, true);

  document.addEventListener('mouseleave', (e) => {
    const targetWithLabel = e.target.closest && e.target.closest('[data-cursor-label]');
    if (targetWithLabel) {
      cursor.classList.remove('hovering-label');
      label.textContent = '';
    }
  }, true);
}

/* ==========================================================================
   EFEITO PARALLAX 3D TILT (BENTO CARDS)
   ========================================================================== */
function initBentoParallax3D() {
  // Apenas ativa no desktop (evita problemas em telas de toque)
  if (window.matchMedia('(hover: none)').matches) return;

  const bentoCards = document.querySelectorAll('.bento-card');
  bentoCards.forEach(card => {
    card.addEventListener('mousemove', (e) => {
      const rect = card.getBoundingClientRect();
      
      // Coordenadas relativas de -0.5 a 0.5 baseadas nos eixos X e Y do card
      const x = (e.clientX - rect.left) / rect.width - 0.5;
      const y = (e.clientY - rect.top) / rect.height - 0.5;

      // Ângulo de inclinação física (máximo de 9 graus)
      const tiltY = x * 18;
      const tiltX = -y * 18;

      card.style.transform = `perspective(1000px) rotateX(${tiltX}deg) rotateY(${tiltY}deg) scale(1.01)`;
    });

    card.addEventListener('mouseleave', () => {
      card.style.transform = 'perspective(1000px) rotateX(0deg) rotateY(0deg) scale(1)';
    });
  });
}

