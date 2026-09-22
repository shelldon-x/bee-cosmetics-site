# Bee Cosmetics — Plataforma Web & Catálogo Digital

Plataforma Web da **Bee Cosmetics**, desenvolvida para apresentar a marca, organizar seus dez produtos capilares e conectar consumidores aos canais de venda.

Este repositório reúne **arquitetura de informação, desenvolvimento front-end, conteúdo de produto, validação funcional, SEO técnico e dados estruturados** em uma aplicação real.

🌐 **Site:** [https://beecosmetics.store](https://beecosmetics.store)

> Este README descreve os arquivos do projeto. A versão disponível no site depende do último deploy realizado na Vercel.

---

## 🎯 Sobre o projeto

A plataforma funciona como vitrine digital da **Bee Cosmetics**, marca de cuidados capilares voltada especialmente para cabelos ondulados, cacheados e crespos.

Em uma única experiência, o site reúne:

- apresentação da marca e de sua filosofia de cuidado;
- catálogo organizado por limpeza, tratamento e finalização;
- páginas individuais para os dez produtos;
- descrição, benefícios e modo de uso em português;
- composição em português e nomenclatura INCI para consulta;
- pH, processo Anvisa e código de barras de cada produto;
- links para canais externos de compra e contato;
- navegação adaptada para desktop e dispositivos móveis.

O site direciona a compra para plataformas externas; **não possui checkout próprio**.

---

## 👨‍💻 Minha atuação

Minha participação envolve a organização e a evolução do produto digital, incluindo:

- definição e organização de requisitos;
- arquitetura de informação e organização do catálogo;
- revisão das informações dos produtos com base nos materiais disponibilizados para o projeto;
- desenvolvimento e refinamento da interface com HTML, CSS e JavaScript;
- validação funcional e responsiva;
- identificação de inconsistências, correções e retestes;
- implementação e revisão de SEO técnico e dados estruturados;
- integração por links com marketplaces e WhatsApp;
- documentação do projeto;
- desenvolvimento assistido por IA, seguido de revisão e validação.

O repositório está no **GitHub** e o site utiliza a **Vercel** para publicação.

---

## 🧴 Catálogo de produtos

| Produto | Etapa | Página |
| --- | --- | --- |
| Born to BEE | Limpeza | `/produtos/born-to-bee` |
| Feel the BEEat | Limpeza | `/produtos/feel-the-beeat` |
| BEEtween Gardens | Tratamento | `/produtos/beetween-gardens` |
| After BEEach | Tratamento | `/produtos/after-beeach` |
| BEEloved Oil | Tratamento | `/produtos/beeloved-oil` |
| BEElieve in Acid | Tratamento e acidificação | `/produtos/beelieve-in-acid` |
| BEE Yourself | Finalização | `/produtos/bee-yourself` |
| Let it BEE | Finalização | `/produtos/let-it-bee` |
| BEE Proud | Finalização | `/produtos/bee-proud` |
| Be my BEE | Finalização e fixação | `/produtos/be-my-bee` |

Cada página apresenta informações específicas do produto, imagens, produtos relacionados e links para busca nos canais de venda. Alterações em fórmula, pH, modo de uso ou identificação devem ser conferidas com a versão vigente do material aprovado antes da publicação.

---

## 🧪 Qualidade e validação

As alterações são verificadas para preservar a navegação, a clareza do conteúdo e os caminhos de contato e compra.

### Validação funcional

Entre os elementos conferidos estão:

- menu e navegação;
- links entre a home e as páginas de produtos;
- botões e chamadas para ação;
- produtos relacionados;
- links para marketplaces e WhatsApp;
- funcionamento dos componentes da interface.

### Validação responsiva

A interface é conferida em diferentes larguras de tela, com atenção a:

- organização dos cards e das tags;
- legibilidade dos textos;
- proporção e carregamento das imagens;
- navegação móvel;
- botões e áreas de toque;
- ausência de conteúdo cortado ou rolagem horizontal indevida.

### Validação de conteúdo

A revisão considera nomes, descrições, benefícios, modo de uso, composição, pH, processo Anvisa, código de barras e metadados. As informações comerciais e técnicas devem permanecer coerentes com as fontes aprovadas para cada produto.

### Regressão e retestes

Após alterações relevantes, os fluxos afetados são conferidos novamente:

```text
Requisito
   ↓
Implementação
   ↓
Validação
   ↓
Correção, quando necessária
   ↓
Reteste
   ↓
Publicação
   ↓
Verificação do site publicado
```

Esse é um **roteiro de validação manual**. O projeto ainda não inclui uma suíte de testes automatizados.

---

## 📋 Matriz de validação

| Área | Principais verificações |
| --- | --- |
| Funcional | Navegação, catálogo, CTAs, menu e links |
| Responsividade | Layout, textos, imagens e controles em desktop e mobile |
| Conteúdo | Informações e identificação dos produtos |
| Regressão | Retestes dos fluxos afetados por alterações |
| Canais externos | Buscas nos marketplaces e links do WhatsApp |
| SEO | Metadados, canonical, sitemap, robots.txt e JSON-LD |
| Publicação | URLs e recursos após o deploy |

---

## 🛠️ Tecnologias

### Front-end

- HTML5
- CSS3
- JavaScript

### Repositório e hospedagem

- GitHub
- Vercel

### SEO e Web

- Schema.org e JSON-LD
- Open Graph
- Twitter Cards
- Sitemap XML
- Robots.txt
- Web Manifest
- URLs canônicas

---

## 🔎 SEO técnico

A home e as páginas de produtos incluem recursos para indexação e compartilhamento:

- títulos e meta descriptions;
- URLs canônicas;
- metadados Open Graph e Twitter Cards;
- `robots.txt` e `sitemap.xml`;
- favicon e Web Manifest;
- dados estruturados em JSON-LD.

Ao editar uma página, seu texto visível, seus metadados e seus dados estruturados devem continuar coerentes entre si.

---

## 🧩 Dados estruturados

O projeto utiliza **Schema.org / JSON-LD**.

Na home, a marcação representa a **organização**, o **website** e a **lista de produtos**. Nas páginas individuais, representa o **produto**, a **trilha de navegação** e as **perguntas frequentes** por meio dos tipos `Product`, `BreadcrumbList` e `FAQPage`.

A marcação ajuda ferramentas de busca a interpretar o conteúdo, mas não garante a exibição de resultados enriquecidos.

---

## 🛍️ Canais de venda

As páginas de produto oferecem links para:

- Amazon;
- Shopee;
- Mercado Livre.

Os botões abrem **buscas pelo produto**, não anúncios específicos. Preço, vendedor, estoque e disponibilidade devem ser conferidos na plataforma de destino.

O site também disponibiliza contato por **WhatsApp** para atendimento e interesse comercial.

---

## 📁 Estrutura do projeto

A aplicação é um site estático organizado em páginas HTML, estilos, script de navegação, configurações e recursos visuais.

```text
bee-cosmetics-site/
│
├── index.html
├── produtos/
│   └── <slug>/
│       └── index.html
├── assets/
│   ├── css/
│   │   └── site.css
│   ├── js/
│   │   └── site.js
│   └── images/
│       └── bee-hero-familia.webp
├── products/
├── logos/
├── results/
├── icons/
├── og/
├── scripts/
│   └── refresh-image-cache.cjs
├── favicon.ico
├── robots.txt
├── sitemap.xml
├── site.webmanifest
└── vercel.json
```

### Principais diretórios

- `produtos/` — páginas individuais dos dez produtos;
- `assets/css/` — estilos compartilhados e regras responsivas;
- `assets/js/` — comportamento do menu móvel;
- `assets/images/` — imagem da família de produtos no hero;
- `products/` — imagens individuais dos produtos;
- `logos/` — identidade visual do cabeçalho e rodapé;
- `results/` — galeria visual;
- `icons/` e `favicon.ico` — ícones do site;
- `og/` — recursos visuais para compartilhamento;
- `scripts/` — utilitário de atualização das versões das imagens de produtos.

---

## 🖼️ Atualização das imagens de produtos

Depois de substituir uma imagem em `products/`, execute na raiz do projeto:

```bash
node scripts/refresh-image-cache.cjs
```

O script calcula uma nova versão para a URL de cada imagem de produto e atualiza os arquivos HTML afetados. Publique os HTMLs atualizados junto com as novas imagens.

A imagem da família, `assets/images/bee-hero-familia.webp`, **não é processada por esse script**.

---

## ⚡ Deploy e entrega

O site é publicado pela **Vercel** a partir do repositório conectado. O arquivo `vercel.json` define URLs limpas, redirecionamentos e alguns cabeçalhos HTTP.

```text
Alteração dos arquivos
        ↓
Revisão e validação
        ↓
Atualização do repositório
        ↓
Deploy na Vercel
        ↓
Verificação do site publicado
```

Uma alteração no repositório não confirma, por si só, que a mesma versão já esteja disponível em produção. O resultado deve ser conferido após o deploy.

---

## 📱 Experiência responsiva

A interface foi estruturada para preservar a navegação, a leitura e a apresentação dos produtos em diferentes dispositivos.

No desktop, a revisão considera a hierarquia dos títulos, as tags, os cards e o enquadramento das imagens. No mobile, considera também o menu, a distribuição vertical do conteúdo e a facilidade de uso dos botões.

---

## 🤖 Desenvolvimento assistido por IA

Ferramentas de Inteligência Artificial apoiaram atividades como organização de conteúdo, geração e revisão de código, refatoração, documentação e identificação de melhorias.

As sugestões e alterações precisam ser revisadas e testadas antes da publicação. Esse cuidado é especialmente importante para **composição, claims, modo de uso e identificação dos produtos**, que dependem de fontes aprovadas.

---

## 💡 O que este projeto demonstra

A plataforma aplica conhecimentos de **produto, requisitos, desenvolvimento Web, qualidade e SEO** em um contexto real de negócio.

O trabalho envolve:

- organização de informações complexas em uma experiência de navegação clara;
- implementação de páginas e componentes responsivos;
- revisão de conteúdo técnico e comercial;
- validação funcional e retestes;
- estruturação de metadados e dados estruturados;
- integração do catálogo com canais externos;
- evolução da interface a partir de auditoria e feedback.

---

## 📚 Contexto profissional

A Bee Cosmetics também faz parte da minha atuação em **gestão de produtos e projetos**, com atividades ligadas a requisitos, especificações, acompanhamento de entregas, critérios de aceite e validação.

A plataforma Web permite aplicar essa visão de **produto e qualidade** à presença digital da marca.

---

## 🔄 Próximas evoluções

Entre as oportunidades de evolução estão:

- implementação de analytics e definição de eventos de catálogo e conversão;
- testes automatizados e validação de links;
- verificações de regressão visual;
- medição e melhoria dos Core Web Vitals;
- aprimoramentos de acessibilidade;
- otimização contínua de imagens e outros recursos;
- integração das validações ao fluxo de publicação.

As dez páginas individuais de produtos já fazem parte da estrutura atual.

---

## 👤 Autor

**Shelldon Linhares**  
QA Analyst | QA Engineer

- LinkedIn: [https://linkedin.com/in/shelldon](https://linkedin.com/in/shelldon)
- GitHub: [https://github.com/shelldon-x](https://github.com/shelldon-x)

---

> Este repositório faz parte do meu portfólio profissional e demonstra a integração entre produto, requisitos, desenvolvimento Web, qualidade e SEO técnico em uma aplicação real.
