document.addEventListener('DOMContentLoaded', () => {
  initSimulator();
  initHeaderScroll();
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
