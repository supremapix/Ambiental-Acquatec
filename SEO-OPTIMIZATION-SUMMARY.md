# SEO, contato e schema — resumo das alterações

Última revisão: 2026-09-01

## 1. Contato único: (41) 99163-5740

Todo o site usa um único número, para ligação e WhatsApp:

- Telefone: `+55 41 99163-5740` (`tel:+5541991635740`)
- WhatsApp: `https://wa.me/5541991635740?text=Olá, achei seu site no *Google e gostaria de saber sobre:*`

O número **não é mais escrito à mão em nenhum componente**. Tudo vem de
`site-config.js` (`CONTACT.phoneDisplay`, `CONTACT.phoneHref`, `CONTACT.whatsappUrl`,
`waLink(mensagem)`). Para trocar o número no futuro, basta editar esse arquivo.

O telefone fixo (41) 3053-5740 foi removido do header, footer, botões flutuantes,
formulário e schema. A antiga seção `LandlineSection` virou `DirectLineSection`, com
o mesmo layout e o número único (botão de ligar + botão de WhatsApp).

## 2. Arquitetura de dados e SEO

| Arquivo | Papel |
| --- | --- |
| `site-data.js` | Cidades, bairros, serviços, FAQs e depoimentos (fonte única) |
| `site-config.js` | Marca, contato, endereço, horários, redes sociais |
| `seo-meta.js` | Title, description, keywords e canonical de **cada** página |
| `utils/seo-schemas.ts` | Nós JSON-LD (`@graph`) |
| `scripts/postbuild.mjs` | Pós-build: valida meta tags, versiona o SW, gera sitemap/robots/llms |

`constants.ts` apenas reexporta `site-data.js` com tipagem, então app React e
scripts de build leem exatamente os mesmos dados.

## 3. SEO por página (137 páginas)

- Title, description e canonical **únicos** em todas as 137 páginas (validado no build).
- Descriptions entre 110 e 158 caracteres, sempre terminando com o telefone completo.
- Descrições de cidades e bairros usam 4 variações, escolhidas por hash do slug, para
  não repetir o mesmo texto em 128 páginas.
- Descrições dos 8 serviços são escritas uma a uma.
- Corrigido o bug do `inject-meta.mjs`: ele injetava um **segundo `<title>`** (sem
  acentos) em cada página e mantinha uma cópia desatualizada das cidades/bairros.
  O script foi substituído por `postbuild.mjs`, que apenas valida e remove duplicatas.
- Página 404 passou a ter `noindex, follow`.

## 4. Schema.org

Um único bloco `<script type="application/ld+json">` por página, com `@graph` e `@id`
estáveis (sem schemas repetidos entre componentes):

- `RoofingContractor` + `LocalBusiness` + `HomeAndConstructionBusiness` (`#organization`):
  endereço, geo, horários, formas de pagamento, `areaServed` com as 29 cidades,
  `contactPoint` (atendimento e emergência 24h), `knowsAbout`, `hasOfferCatalog` com os
  8 serviços e `potentialAction` de WhatsApp.
- `WebSite` (`#website`), `WebPage` (`#webpage`) com `speakable` e `primaryImageOfPage`.
- `BreadcrumbList` em serviços, cidades e bairros.
- `Service` com `offers`, `warranty` (5 anos) e `availableChannel`.
- `FAQPage` por página (o `FAQSection` não emite mais um segundo FAQPage nem microdata
  duplicada).
- `ItemList` de cidades e bairros, `VideoObject` do vídeo do YouTube.
- `aggregateRating` e `review` embutidos na empresa, na home, refletindo os depoimentos
  publicados na página.

## 5. llms.txt

- `/llms.txt` — resumo da empresa, contato, serviços com preço e índice de todas as URLs.
- `/llms-full.txt` — versão completa, com descrição de cada serviço, todas as FAQs e
  a lista completa de cobertura.
- `robots.txt` regerado no build, liberando GPTBot, OAI-SearchBot, ChatGPT-User,
  PerplexityBot, ClaudeBot, Claude-User, Google-Extended e Applebot-Extended.

## 6. Favicons (padrão realfavicongenerator)

Gerados a partir do símbolo do logo: `favicon.ico` (16/32/48), `favicon.svg`,
`favicon-96x96.png`, `apple-touch-icon.png` (180), `web-app-manifest-192x192.png`,
`web-app-manifest-512x512.png` e `site.webmanifest` (ícones maskable com zona segura).
`manifest.json` foi mantido com o mesmo conteúdo para não quebrar links antigos.

## 7. Correção do erro "Unexpected token '<' ... is not valid JSON"

Causa: o service worker (`acquatec-v1`) guardava o `index.html` em cache com estratégia
*cache-first*. Depois de um deploy novo, o HTML antigo pedia
`static-loader-data-manifest-<hash>.json` de um build que não existe mais; o servidor
respondia o `index.html` (200) e o `JSON.parse` quebrava.

Correções:

- `public/sw.js` reescrito: **network-first** para navegações e arquivos de dados,
  cache-first apenas para `/assets/*` e imagens, versão do cache carimbada a cada build
  (`postbuild.mjs`), `skipWaiting` + `clients.claim` e limpeza de caches antigos.
- `main.tsx` força `registration.update()` e ativa o worker novo assim que ele instala.
- `vercel.json`, `netlify.toml`, `public/_redirects` e `.htaccess`: arquivos estáticos
  inexistentes passam a retornar 404 em vez do `index.html`, e `/assets/*` ganha
  `Cache-Control: immutable` enquanto `sw.js` nunca é cacheado.

## 8. Pendências para o cliente confirmar

- **E-mail**: o rodapé usava `contato@acquatec.com.br` e o schema `contato@acquateccalhas.com.br`.
  Ficou o segundo — confirmar qual é o correto em `site-config.js`.
- **Endereço**: hoje só existe "Bairro Fanny, Curitiba - PR". Um endereço completo com CEP
  melhora o SEO local e o Google Meu Negócio.
- **Avaliações**: `aggregateRating` reflete os 5 depoimentos do site (5.0). Se houver
  avaliações reais no Google Meu Negócio, usar a nota e a quantidade de lá.
- **Tailwind via CDN** (`index.html`): prejudica Core Web Vitals. Migrar para o Tailwind
  compilado no build é a maior oportunidade de performance restante.
