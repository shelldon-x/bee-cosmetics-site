# Bee Cosmetics — arquivos prontos para revisão

```text
index.html                         Home, catálogo e rotina
produtos/<slug>/index.html         Dez páginas individuais
assets/css/site.css                Estilo compartilhado
assets/js/site.js                  Menu móvel
scripts/refresh-image-cache.cjs    Versionamento de imagens
products/                          Fotos dos produtos
results/, logos/, icons/, og/      Assets preservados
robots.txt, sitemap.xml            SEO
site.webmanifest, vercel.json      Configuração
```

Os textos, INCI e modos de uso foram conferidos com os dez PDFs de rótulos fornecidos pelo usuário. Leia `RELATORIO-REVISAO-ROTULOS.md` na pasta acima antes de publicar, especialmente as pendências de fórmula e claims.

Após alterar uma imagem de produto, execute na raiz deste projeto:

```bash
node scripts/refresh-image-cache.cjs
```

O comando atualiza as versões das URLs das imagens nas páginas. Faça commit/deploy dos HTML atualizados junto com as imagens. Nenhum deploy foi feito nesta entrega.
