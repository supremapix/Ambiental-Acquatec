# Revisão Acquatec — 23/10/2026

## Identidade e preservação
Repositório: supremapix/Ambiental-Acquatec. Base: 66a9ae0b8f5042daf373b21d8b941956151f53df.
Domínio configurado: https://www.acquateccalhas.com.br. Fluxo existente: Vercel conectado à main.
Telefone mantido: (41) 99163-5740; e-mail mantido: contato@acquateccalhas.com.br.
Endereços divergentes encontrados externamente não foram incorporados. O rodapé preserva a referência Fanny e pede confirmação antes de deslocamento.

Inventário antes: 8 serviços, 29 cidades, 99 localidades, 137 páginas.
Depois: 8 serviços, 29 cidades, 115 localidades, 156 páginas indexáveis, além de 404.
Todas as URLs anteriores e os arquivos originais de imagem foram preservados.
audit/before.json documenta o estado inicial; images.json contém hashes; after.json contém validação.
13 imagens únicas na galeria, incluindo duas peças de identidade/promocionais identificadas como tais. Quatro duplicatas exatas continuam disponíveis em seus URLs. Ícones e logo mantidos.
A imagem de exaustor tem baixa resolução e marca visível; origem da execução não confirmada, ressalva na legenda. Não houve edição de pixels, aumento artificial de resolução ou imagens sintéticas de obras.

## Conteúdo e interface
Catálogo integral, descrições técnicas sem preços, prazos ou garantias inventados. Navegação por teclado, foco visível, menu sem depender de hover, telefone e WhatsApp no topo, formulário com validação e preparação de mensagem, seis redes e copiar link, texto até 200%, reduced-motion e diagrama didático controlável.
Rodapé com uma única assinatura Suprema Sites Express, logo oficial ampliada e link supremasite.com.br.
SEO por rota, canonical, OG, Twitter, JSON-LD, sitemap, robots e arquivos llms coerentes. Não há promessa de ranking, rich results ou indexação por IA.
Removidas do conteúdo ativo métricas, avaliações e garantias sem comprovação. Não houve noindex em massa.
404 estático com status real substitui fallback que respondia conteúdo da home a URLs inexistentes.

## Pesquisa local e limites
Curitiba: 75 bairros oficiais pelo IPPUC, 20 referências populares com fontes específicas, 10 regionais municipais com classificação própria. Augusta, Riviera e São Miguel separados da CIC. Campo Comprido norte/sul esclarecido. Vila Zumbi corrigida para Colombo, Tanguá qualificado.
Vila São Pedro e Jardim Kosmos permanecem pendentes de associação territorial inequívoca.
Inventários municipais na página da cidade e em local-data.js:
- São José dos Pinhais: 41 entradas históricas, sem afirmar completude atual.
- Pinhais: 15 nomes em territórios CRAS; loteamentos incompletos.
- Colombo: 42 bairros, separados pela fonte em 20 rurais e 22 urbanos; mais de 200 loteamentos não inventariados.
- Araucária: 18 nomes urbanos; área rural parcial.
- Almirante Tamandaré: 6 localidades, parcial.
- Campo Largo: 9 distritos/localidades, parcial.
- Campo Magro: 6 localidades, parcial.
- Fazenda Rio Grande: 11 setores operacionais, não 11 bairros oficiais.
- Quatro Barras: 16 localidades de consulta LDO, não lei de bairros.
- Campina Grande do Sul: 5 localidades, recorte de notícia.
- Mandirituba: 5 referências de plano de mobilidade.
- Balsa Nova: 6 distritos/localidades.
- Rio Branco do Sul: 8 referências de PPA/notícias.
- Itaperuçu: 10 referências indexadas; acesso direto indisponível.
- Tijucas do Sul: 10 nomes históricos; delimitação atual não confirmada.
As outras 13 cidades legadas permanecem disponíveis com lacuna explícita. Atendimento em qualquer local depende de confirmação comercial.
Não foram criadas centenas de páginas de loteamentos metropolitanos com simples troca de nome: a expansão individual completa continua pendente de fontes e conteúdo específico suficiente.

Fontes completas por registro: local-data.js e regional-data.js; links também publicados nas respectivas páginas.
Intenções estudadas no concorrente ADL: instalação, limpeza, manutenção, vazamento/transbordamento, rufos/condutores e Pinhais. Sem copiar textos/imagens, sem afirmar posições em busca, sem incluir coifas/dutos não confirmados.
Fontes: https://adlcalhas.com.br/ ; https://adlcalhas.com.br/calhas-de-aluminio-em-curitiba ; https://adlcalhas.com.br/pr/calhas-em-pinhais .
Técnica: NR-35 no Ministério do Trabalho e exemplo público de dimensionamento pluvial citado no conteúdo; não transferir parâmetros de outra obra.

## Verificação
npm run build; npm run typecheck; npm run lint; npm run test:static; npm test.
Auditoria estática: 156 páginas, 8.348 referências internas, canonical único, metadados, JSON-LD válido, sitemap, todas as rotas anteriores e hashes de imagens.
Playwright: 320/390/1440 px e texto 200%, teclado, formulário sem envio externo, seis redes, carregamento das imagens locais, reduced-motion, 404 e amostra de páginas regionais. Capturas locais em audit/*.png (não versionadas).
Atualizações compatíveis aplicadas; npm audit ainda informa 10 alertas (5 moderados, 5 altos), envolvendo ferramentas de compilação Tailwind e React Router/SSG. Não aplicada migração forçada com quebra de versão. Site publicado como arquivos estáticos; isso não equivale a afirmar ausência de risco.
Confirmação de commit remoto, deploy e domínio deve ser registrada no relatório final após publicação.

Logo Suprema: cópia binária preservada de https://img.supremamidia.com/suprema-img.png em public/suprema-img.png para entrega no mesmo domínio. SHA-256: 9b14fb2baa235ad0616a435539a975106ee20f1bffdcb60afdbccc47ac06cc28. Nenhuma alteração de pixels.
