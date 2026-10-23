import fs from 'node:fs';import crypto from 'node:crypto';
const captions={
'acquatec-calhas-e-telhados-em-curitiba-reformas-condominios-517x357.jpg':'Vista de cobertura com telhas e encontros junto às paredes.',
'acquatec-curitiba-pr-1-500x500 (1).jpeg':'Identidade visual verde do acervo Acquatec.',
'acquatec-curitiba-pr-4-560x560.jpeg':'Peça promocional antiga sobre matéria-prima. O texto da arte não substitui documentação de origem dos materiais.',
'acquatec-telhados-calhas-400x401.jpg':'Detalhe de abertura e união na saída de água da calha.',
'acquatec-telhados-condominios-reformas-preco-barato-manutencao-517x357.jpg':'Vista superior de cobertura com telhas claras.',
'acquatec-telhados-manutencao-condominios-insdustriais-residencias-curitiba-1-2000x900.jpeg':'Fachada com cobertura e elementos de acabamento.',
'acquatec-telhados-manutencao-condominios-insdustriais-residencias-curitiba-4-1889x850.jpeg':'Detalhe de trabalho em acabamento junto à borda da cobertura.',
'aplicacao_de_manta_em_calha.webp':'Encontro entre telhas, calha e parede lateral.',
'calhas-acquatec-400x401.jpg':'Cobertura curva translúcida vista pelo lado externo.',
'calhas-preco-400x402.jpg':'Vista interna de uma calha junto ao telhado.',
'Exaustores Eólicos.jpg':'Imagem de exaustor eólico já presente no site. Arquivo de baixa resolução, com marca de origem visível; autoria da obra não confirmada.',
'limpeza-personalizada-em-telhados-retrteis-400x395.jpg':'Cobertura com resíduos visíveis na superfície.',
'telhas-translucidas-iluminacao-solar.png':'Vista interna de cobertura com faixas de iluminação natural.'
};
const images=Object.entries(captions).map(([name,caption])=>({src:'/'+name,caption}));
fs.writeFileSync('gallery-data.js','export const GALLERY = '+JSON.stringify(images,null,2)+';\n');
const originals=JSON.parse(fs.readFileSync('audit/before.json','utf8')).files.filter(f=>/\.(jpg|jpeg|webp|png)$/i.test(f.name));
const report=originals.map(f=>({...f,preserved:crypto.createHash('sha256').update(fs.readFileSync('public/'+f.name)).digest('hex')===f.sha256,display:captions[f.name]?'gallery':f.name.includes('copy.')?'duplicate preserved; identical to gallery original':'brand/favicon retained'}));
fs.writeFileSync('audit/images.json',JSON.stringify(report,null,2));
let data=fs.readFileSync('site-data.js','utf8');data=data.replace('"image": "/aplicacao_de_manta_em_calha.webp"','"image": "/acquatec-telhados-manutencao-condominios-insdustriais-residencias-curitiba-4-1889x850.jpeg"');data=data.replace(/("id": "metalicos"[\s\S]*?"image": )"[^"]+"/,'$1"/acquatec-calhas-e-telhados-em-curitiba-reformas-condominios-517x357.jpg"');fs.writeFileSync('site-data.js',data);
