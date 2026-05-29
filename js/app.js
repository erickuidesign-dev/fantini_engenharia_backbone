document.addEventListener('DOMContentLoaded', () => {
  initSimulator();
  initHeaderScroll();
  initScrollAnimations();
  initMobileMenu();
  initHeroVideoCarousel();
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
  if (slides.length <= 1) return;

  let currentSlideIndex = 0;
  const slideInterval = 6000; // Rotaciona a cada 6 segundos

  // Prepara o lazy loading do próximo slide
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

  // Avança para o próximo slide
  function nextSlide() {
    const prevSlide = slides[currentSlideIndex];
    currentSlideIndex = (currentSlideIndex + 1) % slides.length;
    const nextSlideEl = slides[currentSlideIndex];

    // Carrega o vídeo do próximo slide antes de mostrá-lo
    preloadSlideVideo(nextSlideEl);

    // Faz a transição de opacidade via classe active (crossfade)
    prevSlide.classList.remove('active');
    nextSlideEl.classList.add('active');
  }

  // Inicia o loop automático do carrossel
  setInterval(nextSlide, slideInterval);
}

