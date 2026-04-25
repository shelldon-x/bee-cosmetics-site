/* =========================================================
   BEE COSMETICS — bee.js
   Catalogo, modais, filtros, B2B form, before/after sliders
   --------------------------------------------------------- */
(function() {
  'use strict';

  // Remover class no-js (o bee.js carregou = JS funciona)
  document.documentElement.classList.remove('no-js');

const PRODUCTS = [
      {id:'born-to-bee', name:'Born to BEE', category:'Shampoo Sem Sulfato', size:'300 ml / 10.14 fl.oz', ph:'pH 4,5', anvisa:'25351.459676/2022-71', barcode:'7899085798567', actives:'Extrato de Aloe Vera, Vitamina B12, Hydra Repair (Blend Especial)', description:'Limpeza eficaz sem ressecar ou agredir os fios. Ideal para uma limpeza suave, com sensorial confortável e desembaraço facilitado.', full_description:'Tenha uma limpeza eficaz sem ressecar ou agredir os fios. Nosso Shampoo Sem Sulfato Born to BEE, com limpante natural, deixa o cabelo limpo e hidratado, perfeito para adeptas de técnicas com limpeza suave.', usage:'Aplique no cabelo molhado, massageando suavemente o couro cabeludo em movimentos circulares. Enxágue bem. Repita se necessário.', composition:'Água Deionizada, Lauril Sulfosucinato de Sódio, Cocoamidopropil Betaína, Dietanolamida de Ácidos Graxos de Côco, Fragrância, Poliquatérnio-39, Hidroxietil Uréia, Extrato de Babosa, Cloreto de Guar Hidroxipropiltrimônio, Distearato do PEG-150, Poliquatérnio-22, Poliquatérnio-55, Poliquatérnio-47, Metilglucose Eter do PPG-20, Glicerina, Álcool Benzílico, Clorfenesina, EDTA Dissódico, Metilcloroisotiazolinona, Metilisotiazolinona, Aldeído Hexil Cinâmico, Salicilato de Benzila, Linalol, Geraniol.', kind:'limpeza', tag:'low poo', image:'products/born-to-bee.webp'},
      {id:'feel-the-beeat', name:'Feel the BEEat', category:'Co-Wash', size:'300 ml / 10.14 fl.oz', ph:'pH 4,5', anvisa:'25351.459590/2022-48', barcode:'7899085798611', actives:'Extrato de Aloe Vera, Manteiga de Oliva, Hydra Repair (Blend Especial), Queratina', description:'Limpa, condiciona, hidrata e repara em um só passo. Excelente para rotinas no poo e para quem quer suavidade desde a limpeza.', full_description:'Um produto completo que limpa, condiciona, hidrata e repara os fios. Com aloe vera, manteiga de oliva e queratina, é ideal para quem segue uma rotina mais suave e delicada.', usage:'Aplique nos cabelos molhados, massageando o couro cabeludo e distribuindo pelo comprimento. Enxágue bem. Repita se necessário.', composition:'Água Deionizada, Cocoamidopropil Betaina, Álcool Cetoestarílico, Álcool Cetílico, Cloreto de Cetrimônio, Cloreto de Berrentrimômio, Fragrância, Poliquatérnio-39, Poliquatérnio-22, Poliquatérnio-47, Poliquatérnio-55, Metilglucose Eter do PPG-20, Glicerina, Álcool Benzílico, Clorfenesina, Queratina Hidrolizada, Manteiga de Oliva, Extrato de Babosa, Cloreto de Guar Hidroxipropiltrimônio, Fenoxietanol, Ácido Lático, EDTA Dissódico.', kind:'limpeza', tag:'no poo', image:'products/feel-the-beeat.webp'},
      {id:'beetween-gardens', name:'BEEtween Gardens', category:'Máscara de Nutrição', size:'300 g / 10.58 oz', ph:'pH 4,0', anvisa:'25351.459556/2022-73', barcode:'7899085798598', actives:'Manteiga de Abacate, Óleo de Coco, D-Pantenol (Vitamina B5)', description:'Hidratação e nutrição no mesmo produto, com emoliência, maciez e ajuda no controle do frizz.', full_description:'Uma máscara que entrega hidratação e nutrição em equilíbrio, com toque mais macio e aparência mais cuidada para os fios.', usage:'Aplique após a limpeza, enluvando as mechas. Deixe agir por 10 minutos e enxágue.', composition:'Água Deionizada, Cloreto de Berrentrimônio, Álcool Cetoestarílico, Álcool Cetílico, Cloreto de Cetrimônio, Metosulfato de Berrentrimônio, Fragrância, Glicerina, Poliquatérnio-39, Vitamina B5, Óleo de Coco, Manteiga de Abacate, Hidroxietilcelulose, Fenoxietanol, Ácido Lático, EDTA Dissódico.', kind:'tratamento', tag:'hidratação + nutrição', image:'products/beetween-gardens.webp'},
      {id:'after-beeach', name:'After BEEach', category:'Máscara de Reconstrução', size:'300 g / 10.58 oz', ph:'pH 4,0', anvisa:'25351.459709/2022-82', barcode:'7899085798574', actives:'Manteiga de Oliva, Proteína do Trigo, Recovery Hair Pro', description:'Reparo intensivo para fios danificados por coloração, químicas, sol ou mar.', full_description:'Uma máscara de reconstrução pensada para devolver força, melhorar o toque e acompanhar fios que passaram por processos de desgaste.', usage:'Aplique após a limpeza, enluvando as mechas. Deixe agir por 10 minutos e enxágue.', composition:'Água Deionizada, Cloreto de Berrentrimônio, Álcool Cetoestarílico, Álcool Cetílico, Cloreto de Cetrimônio, Metosulfato de Berrentrimônio, Fragrância, Glicerina, Poliquatérnio-39, Poliquatérnio-10, Polióxido de Etileno 90 M, Proteína Hidrolisada de Arroz, Carbocisteína, Serina, Ácido Glutâmico, Manteiga de Oliva, Vitamina E, Fenoxietanol, EDTA Dissódico.', kind:'tratamento', tag:'reconstrução', image:'products/after-beeach.webp'},
      {id:'beeloved-oil', name:'BEEloved Oil', category:'Máscara de Umectação', size:'300 g / 10.58 oz', ph:'pH 4,0', anvisa:'25351.459606/2022-12', barcode:'7899085798581', actives:'Óleo de Coco, Óleo de Linhaça, Manteiga de Oliva, Cera de Arroz', description:'Umectação profunda com toque macio, fortalecimento e hidratação para ondulados, cacheados e crespos.', full_description:'Uma combinação nutritiva que envolve os fios com conforto, maciez e aparência mais saudável.', usage:'Aplique após a limpeza, enluvando as mechas. Deixe agir por 10 minutos e enxágue.', composition:'Água Deionizada, Cloreto de Berrentrimônio, Álcool Cetoestarílico, Álcool Cetílico, Cloreto de Cetrimônio, Metosulfato de Berrentrimônio, Fragrância, Glicerina, Poliquatérnio-39, Cera de Arroz, Óleo de Coco, Óleo de Linhaça, Manteiga de Oliva, Hidroxietilcelulose, Fenoxietanol, Ácido Lático, EDTA Dissódico.', kind:'tratamento', tag:'umectação', image:'products/beeloved-oil.webp'},
      {id:'bee-yourself', name:'BEE Yourself', category:'Leave-in Super Definição', size:'300 ml / 10.14 fl.oz', ph:'pH 4,0', anvisa:'25351.459723/2022-86', barcode:'7899085798635', actives:'Manteiga de Abacate, Proteína do Trigo, Recovery Hair Pro', description:'Definição intensa com brilho, condicionamento, retenção de água e redução de porosidade.', full_description:'Perfeito para quem busca mais definição, brilho e acabamento com presença, sem abrir mão do cuidado.', usage:'Aplique nos fios úmidos, distribua com a técnica de finalização de sua preferência e siga com difusor ou secagem natural.', composition:'Água Deionizada, Metosulfato de Berrentrimônio, Álcool Cetoestarílico, Álcool Cetílico, Cloreto de Cetrimônio, Cloreto de Berrentrimônio, Fragrância, Polióxido de Etilleno 90 M, Poliquatérnio–39, Hidroxietilcelulose, Manteiga de Abacate, Proteína Hidrolizada do Trigo, Fenoxietanol, Ácido Lático, EDTA Dissódico.', kind:'finalizacao', tag:'super definição', image:'products/bee-yourself.webp'},
      {id:'let-it-bee', name:'Let it BEE', category:'Leave-in Leveza Natural', size:'300 ml / 10.14 fl.oz', ph:'pH 4,0', anvisa:'25351.459688/2022-03', barcode:'7899085798628', actives:'Manteiga de Karité, Óleo de Amêndoas, Recovery Hair Pro', description:'Brilho e fixação suave para uma definição leve, elegante e com day after favorecido.', full_description:'Uma finalização leve, confortável e luminosa para quem prefere movimento natural e toque suave.', usage:'Aplique nos fios úmidos e modele com as mãos. Finalize ao natural ou com difusor.', composition:'Água Deionizada, Álcool Cetoestearílico, Álcool Cetílico, Metasulfato de Berrentrimônio, Cloreto de Cetrimônio, Cloreto de Berrentrimônio, Fragrância, Manteiga de Karité, Poliquatérnio-39, Hidroxietilcelulose, Óleo de Amêndoas Doce, Fenoxietanol, Ácido Lático, EDTA Dissódico.', kind:'finalizacao', tag:'leveza natural', image:'products/let-it-bee.webp'},
      {id:'bee-proud', name:'BEE Proud', category:'Leave-in Antiencolhimento', size:'300 ml / 10.14 fl.oz', ph:'pH 4,0', anvisa:'25351.459582/2022-00', barcode:'7899085798642', actives:'Manteiga de Oliva, Óleo de Algodão, Liss Repair (Blend Especial)', description:'Ajuda a prevenir o fator encolhimento, mantendo fios bonitos, saudáveis e com menos frizz.', full_description:'Ideal para quem gosta de alongamento visual da curvatura e quer um resultado mais controlado e elegante.', usage:'Aplique nos fios úmidos, distribua bem e finalize da forma desejada.', composition:'Água Deionizada, Álcool Cetoestarílico, Álcool Cetílico, Metosulfato de Berrentrimônio, Cloreto de Berrentrimônio, Cloreto de Cetrimônio, Fragrância, Poliquatérnio–39, Manteiga de Oliva, Óleo de Algodão, Acetamida Mea, Berrenamidopropil Dimetilamina, Ácido Glutâmico, Ácido Lático.', kind:'finalizacao', tag:'antiencolhimento', image:'products/bee-proud.webp'},
      {id:'be-my-bee', name:'Be my BEE', category:'Gelatina Capilar', size:'300 g / 10.58 oz', ph:'pH 4,0', anvisa:'25351.459703/2022-13', barcode:'7899085798604', actives:'Extrato de Aloe Vera, Extrato de Cana de Açúcar, Vitaminas B12', description:'Fixação com estilo, hidratação e retenção de umidade para fios macios e brilhosos.', full_description:'Uma gelatina para reforçar definição e fixação com toque mais agradável e aparência hidratada.', usage:'Aplique após o leave-in e amasse os fios para ativar a curvatura.', composition:'Água Deionizada, Fragrância, Carbômero, Aminometil Propanol, Glicerina, Extrato de Aloe Vera, Extrato de Mel, PVP, Fenoxietanol, EDTA Dissódico.', kind:'finalizacao', tag:'gelatina', image:'products/be-my-bee.webp'},
      {id:'beelieve-in-acid', name:'BEElieve in Acid', category:'Elixir Acidificante', size:'140 ml / 4.74 fl.oz', ph:'pH 3,5', anvisa:'não informado', barcode:'7899085798659', actives:'Bioacetum Maçã, Betacaroteno, Potássio', description:'Equilibra o pH, sela as cutículas, intensifica o brilho e prepara o cabelo para tratamentos mais profundos.', full_description:'Um acidificante que ajuda a reorganizar o fio, melhorar o brilho e preparar o cabelo para uma etapa de tratamento mais rica.', usage:'Aplique após a limpeza, deixe agir por alguns minutos e enxágue antes da máscara.', composition:'Água Purificada, Vinagre, Extrato de Maçã, Frutose, Glicose, Ácido Glucônico, Gliconolactona, Goma de Falso Pau Brasil, Fragrância, Propilenoglicol, Fenoxietanol.', kind:'tratamento', tag:'acidificação', image:'products/beelieve-in-acid.webp'}
    ];

    const MARKET_LINKS = {
      'mercado-livre': 'https://www.mercadolivre.com.br/',
      'amazon': 'https://www.amazon.com.br/s?me=APT6H1P1PWJY4&marketplaceID=A2Q3Y263D00KWC',
      'shopee': 'https://shopee.com.br/'
    };

    const productsGrid = document.getElementById('productsGrid');
    const productModal = document.getElementById('productModal');
    const productModalContent = document.getElementById('productModalContent');
    const marketModal = document.getElementById('marketModal');
    const menuToggle = document.querySelector('.menu-toggle');
    const mobilePanel = document.getElementById('mobilePanel');
    let scrollPosition = 0;
    let openModalCount = 0;

    function renderProducts(filter = 'all') {
      const list = PRODUCTS.filter(product => filter === 'all' || product.kind === filter);
      productsGrid.innerHTML = list.map(product => `
        <article class="product-card" data-kind="${product.kind}">
          <div class="product-media">
            <img src="${product.image}" alt="${product.category} ${product.name}" loading="lazy" onerror="this.style.display='none'; this.parentElement.classList.add('is-fallback')">
            <div class="product-bottle" aria-hidden="true"><span>${product.name}</span></div>
          </div>
          <div>
            <div class="product-meta">${product.category}</div>
            <h3 style="margin-top:8px;">${product.name}</h3>
            <p style="margin-top:12px;">${product.description}</p>
            <div class="pill-row" style="margin-top:14px;">
              <span class="pill">${product.tag}</span>
              <span class="pill ghost">${product.ph}</span>
            </div>
            <div class="product-footer">
              <button class="btn btn-dark" type="button" data-open-product="${product.id}">Ver ficha completa</button>
              <button class="btn btn-primary" type="button" data-open-market>Onde comprar</button>
            </div>
          </div>
        </article>
      `).join('');
    }

    function buildProductModal(product) {
      productModalContent.innerHTML = `
        <div class="product-modal-grid">
          <div class="product-shot">
            <img src="${product.image}" alt="${product.name}" onerror="this.style.display='none'; this.parentElement.classList.add('is-fallback')">
            <div class="product-bottle" aria-hidden="true"><span>${product.name}</span></div>
          </div>
          <div>
            <span class="eyebrow">Ficha completa</span>
            <h2 class="title-lg" id="productModalTitle" style="margin-top:14px;">${product.name}</h2>
            <p class="lead" style="margin-top:12px;">${product.full_description}</p>
            <div class="spec-grid">
              <div class="spec"><span>Categoria</span><strong>${product.category}</strong></div>
              <div class="spec"><span>Tamanho</span><strong>${product.size}</strong></div>
              <div class="spec"><span>pH</span><strong>${product.ph}</strong></div>
              <div class="spec"><span>Ativos</span><strong>${product.actives}</strong></div>
              <div class="spec"><span>ANVISA</span><strong>${product.anvisa}</strong></div>
              <div class="spec"><span>Código de barras</span><strong>${product.barcode}</strong></div>
            </div>
          </div>
        </div>
        <div class="detail-block" style="margin-top:18px;">
          <h3>Como usar</h3>
          <p>${product.usage}</p>
        </div>
        <div class="detail-block" style="margin-top:14px;">
          <h3>Composição</h3>
          <p>${product.composition}</p>
        </div>
        <div style="display:flex; flex-wrap:wrap; gap:12px; margin-top:18px;">
          <button class="btn btn-primary" type="button" data-open-market>Onde comprar</button>
        </div>
      `;
      openModal(productModal);
    }

    function lockBody() {
      if (openModalCount === 0) {
        scrollPosition = window.scrollY || document.documentElement.scrollTop;
        document.body.classList.add('modal-open');
        document.body.style.top = `-${scrollPosition}px`;
      }
      openModalCount += 1;
    }

    function unlockBody() {
      openModalCount = Math.max(0, openModalCount - 1);
      if (openModalCount === 0) {
        document.body.classList.remove('modal-open');
        document.body.style.top = '';
        const previousScrollBehavior = document.documentElement.style.scrollBehavior;
        document.documentElement.style.scrollBehavior = 'auto';
        window.scrollTo(0, scrollPosition);
        requestAnimationFrame(() => {
          document.documentElement.style.scrollBehavior = previousScrollBehavior;
        });
      }
    }

    function openModal(modal, preserveLock = false) {
      if (!modal || modal.classList.contains('open')) return;
      if (!preserveLock) lockBody();
      modal.classList.add('open');
      modal.setAttribute('aria-hidden', 'false');
    }

    function closeModal(modal, preserveLock = false) {
      if (!modal || !modal.classList.contains('open')) return;
      modal.classList.remove('open');
      modal.setAttribute('aria-hidden', 'true');
      if (!preserveLock) unlockBody();
    }

    function switchToMarketModal() {
      if (productModal.classList.contains('open')) {
        closeModal(productModal, true);
        openModal(marketModal, true);
        return;
      }
      openModal(marketModal);
    }

    document.querySelectorAll('.filter-btn').forEach(btn => {
      btn.addEventListener('click', () => {
        document.querySelectorAll('.filter-btn').forEach(item => item.classList.remove('active'));
        btn.classList.add('active');
        renderProducts(btn.dataset.filter);
      });
    });

    document.addEventListener('click', e => {
      const openProduct = e.target.closest('[data-open-product]');
      const openMarket = e.target.closest('[data-open-market]');
      const closeBtn = e.target.closest('[data-close-modal]');

      if (openProduct) {
        const product = PRODUCTS.find(item => item.id === openProduct.dataset.openProduct);
        if (product) buildProductModal(product);
      }

      if (openMarket) switchToMarketModal();

      if (closeBtn) {
        closeModal(closeBtn.closest('.modal'));
      }

      if (e.target.classList.contains('modal')) {
        closeModal(e.target);
      }
    });

    document.querySelectorAll('[data-market-link]').forEach(link => {
      link.href = MARKET_LINKS[link.dataset.marketLink] || '#';
    });

    menuToggle?.addEventListener('click', () => {
      const isOpen = mobilePanel.classList.toggle('open');
      menuToggle.classList.toggle('active', isOpen);
      mobilePanel.hidden = !isOpen;
      menuToggle.setAttribute('aria-expanded', String(isOpen));
    });

    mobilePanel?.querySelectorAll('a').forEach(link => {
      link.addEventListener('click', () => {
        mobilePanel.classList.remove('open');
        mobilePanel.hidden = true;
        menuToggle.classList.remove('active');
        menuToggle.setAttribute('aria-expanded', 'false');
      });
    });

    document.querySelectorAll('[data-before-after]').forEach(wrapper => {
      const range = wrapper.querySelector('input[type="range"]');
      const afterWrap = wrapper.querySelector('.after-wrap');
      const divider = wrapper.querySelector('.divider');
      const handle = wrapper.querySelector('.handle');
      const update = value => {
        afterWrap.style.width = `${value}%`;
        divider.style.left = `${value}%`;
        handle.style.left = `${value}%`;
      };
      update(range.value);
      range.addEventListener('input', e => update(e.target.value));
    });

    document.getElementById('b2bForm').addEventListener('submit', e => {
      e.preventDefault();
      const form = e.currentTarget;
      const data = new FormData(form);
      // Honeypot anti-spam: se o campo oculto foi preenchido, é bot
      if (data.get('_website') || data.get('_hp')) {
        console.warn('[b2b] honeypot triggered');
        return;
      }
      const lines = [
        'Olá! Tenho interesse comercial na Bee Cosmetics.',
        '',
        `Nome: ${data.get('nome') || ''}`,
        `Empresa ou salão: ${data.get('empresa') || ''}`,
        `Perfil: ${data.get('tipo') || ''}`,
        `WhatsApp: ${data.get('telefone') || ''}`,
        `Cidade/Estado: ${data.get('cidade') || ''} - ${data.get('estado') || ''}`,
        `Canal principal de venda: ${data.get('canal') || ''}`,
        `Interesse inicial: ${data.get('interesse') || ''}`,
        `Mensagem: ${data.get('mensagem') || ''}`
      ];
      const text = encodeURIComponent(lines.join('\n'));
      const phone = '5511992690486';
      window.open(`https://wa.me/${phone}?text=${text}`, '_blank', 'noopener');
    });

    document.addEventListener('keydown', e => {
      if (e.key === 'Escape') {
        if (productModal.classList.contains('open')) closeModal(productModal);
        if (marketModal.classList.contains('open')) closeModal(marketModal);
      }
    });

    renderProducts();

  // Registrar service worker para PWA (cache-first em assets)
  if ('serviceWorker' in navigator) {
    window.addEventListener('load', function() {
      navigator.serviceWorker.register('/sw.js').catch(function(err) {
        console.warn('[sw] registro falhou', err);
      });
    });
  }

})();
