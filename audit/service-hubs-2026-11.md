# Expansão dos serviços e guias

- Novo serviço: instalação de manta térmica, confirmado pelo solicitante.
- Nove hubs de serviços com explicações específicas, checklist, FAQs e referências.
- Seis guias originais; diretórios /servicos e /guias, navegação e links contextuais.
- HTML estático, títulos, descriptions, canonical, Article/Service/FAQPage/BreadcrumbList, sitemap e arquivos de referência llms atualizados.
- Imagens existentes preservadas. Imagem da página térmica é explicitamente contextual, não prova de instalação.
- Não há promessa de citação por IA, percentuais de desempenho nem certificações inventadas.

## Verificação

Passaram lint, TypeScript, build, test:static (165 páginas / 10.404 referências internas), test:cards (144 cartões) e test:knowledge (9 serviços / 6 artigos). git diff --check sem erros.

A suíte Playwright foi adicionada/ampliada, mas não iniciou neste executor: Chromium encontrou socket() Operation not permitted. A tentativa escalada teve a mesma limitação. O navegador cloud não alcança o servidor local. Isso não equivale a testes E2E aprovados. Validação visual de produção deve ser registrada separadamente após publicação.

## Orientação de busca

Google Search Central: https://developers.google.com/search/docs/appearance/ai-features
As práticas usuais de SEO também se aplicam aos recursos de IA. Elegibilidade, indexação e exibição não são garantidas. llms.txt é referência complementar, não requisito nem garantia de visibilidade.

## Ampliação metropolitana autorizada

Os 29 hubs municipais foram ampliados com 625 referências de bairros, distritos, vilas e nomes populares, agrupadas por município e acessíveis por busca e âncora. Não foram geradas centenas de URLs repetitivas. As 115 URLs de localidades existentes foram preservadas.

A composição municipal da RMC foi conferida na AMEP. Piraquara usa os 21 bairros da Lei 2672/2026; Bocaiúva do Sul distingue os 12 bairros da Lei 1059/2026 de seus loteamentos. Listas parciais, propostas não aprovadas e fontes históricas têm ressalvas locais. A cobertura dos 29 municípios não significa inventário exaustivo de todos os nomes populares nem disponibilidade comercial.

Fonte metropolitana: https://www.amep.pr.gov.br/FAQ/Municipios-da-Regiao-Metropolitana-de-Curitiba
Teste adicional: test:metro verifica 29 inventários com fonte e 625 âncoras únicas. Fontes individuais estão em metro-expansion.js e nas páginas municipais.

## Verificação de produção

Commit 92ac7df2ea9aa8c4f2876a5afb3cca75c9ec4df5 chegou a main e ao deploy Vercel dpl_BXvJWhoUnxNNRdAPScLpYQmeUag7, status READY em produção. No navegador cloud, a página de manta térmica carregou, a FAQ expandiu, a busca por Casas de Pedra retornou uma referência em Rio Negro e o link abriu sua seção com a classificação correta. A busca por Piraquara retornou 43 referências; o artigo comparativo de mantas carregou. A inspeção visual motivou ajuste no tamanho do título principal dos novos guias e diretórios. A suíte Playwright local continua não executada por limitação do executor; estes testes manuais não substituem sua cobertura integral.
