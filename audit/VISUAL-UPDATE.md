# Atualização visual e cartões locais — 23/10/2026

Base: a7493e6b89e2c188d2efe67d0b4bcc13e5185cb4.
Preparação inicialmente isolada em C:/Users/user/AppData/Local/Temp/acquatec-preview-20261023-v2, sem Git.
Após autorização explícita de publicar o pacote, os arquivos revisados foram integrados ao repositório.

## Direção visual
Azul escuro, azul institucional e tons quentes da Acquatec preservados. Hero com fotografia real em moldura, hierarquia tipográfica reforçada, três etapas descritivas e ritmo de seções mais definido. Nenhuma promessa de resultado, prazo ou cobertura adicionada.
Menu mobile em blocos de pelo menos 48 px, submenu operável por teclado, logo centralizada. Rodapé com abertura de contato, logo Acquatec centralizada no mobile, grupos separados, links amplos, compartilhamento e controles de texto.
Crédito Suprema preservado com a imagem oficial exata. Retorno ao topo flutuante separado do WhatsApp; sem animação obrigatória.

## Imagens e conteúdo local
Fotos de hero, serviços e galeria: molduras uniformes 4:3, object-fit: contain; arquivos originais sem alteração e sem corte do objeto. Logos mantêm proporção natural.
144 cartões SVG de 250 × 250, um por página local existente: 29 cidades e 115 localidades. São artes informativas, não fotografias de obra ou indicação de filial.
Logo original incorporada integralmente; telefone derivado de CONTACT. Cada cartão tem texto alternativo, título/descrição em SVG e conteúdo HTML equivalente, descrição local e WhatsApp contextual.
144 descrições SEO distintas verificadas. Gerador scripts/generate-local-cards.mjs roda em todo build.
Não foram necessárias fotos sintéticas. O acervo de menor resolução continua preservado e identificado pelas legendas existentes.

## Preservação e testes
Oito serviços, 156 páginas indexáveis, todas as URLs legadas e 22 arquivos originais de imagem preservados.
Build, TypeScript, lint, auditoria estática e seis testes Playwright.
Cobertura: 320/390/1440 px, texto 200%, teclado, foco de Voltar ao topo, formulário sem envio externo, 404, imagens, compartilhamentos, reduced-motion, dimensões 250 × 250, CTA contextual e centralização das logos.
Auditoria: 8.804 referências internas; canonical, metadados, JSON-LD, sitemap e hashes dos originais conferidos.
Capturas do preview em sua pasta audit, incluindo desktop-viewport.png, preview-mobile-header.png, preview-mobile-footer.png e local-card-mobile.png.

## Pendências preservadas
Telefone (41) 99163-5740 e e-mail contato@acquateccalhas.com.br são os dados atuais do site/configuração, mantidos sem escolher entre cadastros externos divergentes. Não representam nova confirmação do cadastro mestre pelo cliente.
Referência Fanny mantida com pedido de confirmação antes de deslocamento; nenhum endereço de rua novo foi inventado.
Pesquisa geográfica parcial e lacunas de cobertura continuam explícitas nas páginas e no relatório anterior. Nenhuma filial criada.
Os dez alertas de dependências registrados anteriormente permanecem; este pacote não altera versões.
