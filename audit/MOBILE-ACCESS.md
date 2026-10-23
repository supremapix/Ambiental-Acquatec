# Revisão mobile para idosos — 23/10/2026
Base aprovada em desktop: c418672a3ff481fa27008e7401a1307fbf1b495d.

## Achados na versão publicada
Menu sempre aberto ocupava 474 px do início da tela de 390 px. O submenu se abria dentro de uma coluna estreita.
O WhatsApp flutuante cobria parte dos parágrafos/CTAs. Contatos do rodapé eram links de texto pouco separados.
As fotos panorâmicas e os cards não apresentavam deformação; seus originais e proporções foram mantidos.

## Correções
Menu mobile com botão textual Abrir menu / Fechar menu, aria-expanded e aria-controls, opções em uma coluna e alvos de no mínimo 56 px. Submenu em largura integral e indicador nativo único.
Escape fecha o menu e retorna o foco. Escolher uma página fecha o menu; links de seção preservam o destino. Sem JavaScript, a navegação permanece visível.
Cabeçalho fechado passou de 474 para 342 px na captura de 390 px. Hero com título e texto ajustados apenas no mobile, antecipando leitura e CTAs.
Contatos, serviços e informações do rodapé agora são blocos separados, legíveis e com alvos de pelo menos 56 px. Logo centralizada, crédito Suprema, seis redes e controles de texto preservados.
WhatsApp e Voltar ao topo organizados lado a lado em uma barra inferior opaca no mobile, com espaço final e margens de rolagem ajustados à altura da barra. Um não cobre o outro; foco conferido acima da barra.
Desktop preservado: a captura da primeira tela 1440 × 1000 teve o mesmo SHA-256 da versão aprovada (90019ca1a3b54a867cbd388177c95adce50ed322a1144665eba6e883fe597819).

## Validação local
Build, tipos, lint, auditoria de links, cartões e imagens.
12 cenários Playwright abrangendo 320, 360, 390, 430 e 1440 px, texto 200%, menu, Escape/foco, navegação, formulário sem envio externo, imagens, 404, reduced-motion e dimensões de toque.
Verificações adicionais: menu acessível sem JavaScript e controle focado acima da barra inferior com texto 200%.
156 páginas, oito serviços, 29 cidades, 115 localidades e 144 artes 250 × 250 preservados. Hashes dos 22 arquivos originais de imagem mantidos.
Nenhuma mudança nos contatos ou no endereço divergente. Limites territoriais e comerciais permanecem explícitos.

## Capturas
- [Cabeçalho antes](mobile-before-390.png) / [depois](mobile-after-390.png).
- [Rodapé antes](mobile-footer-before.png) / [depois](mobile-footer-after.png).
- [Menu aberto](mobile-menu-open.png).

A confirmação da versão em produção consta no resultado final da tarefa; estes testes são locais, salvo as capturas de antes obtidas do domínio publicado.
