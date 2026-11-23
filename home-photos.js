import { GALLERY } from './gallery-data.js';

const findArchive = (src) => {
  const photo = GALLERY.find(item => item.src === src);
  if (!photo) throw new Error('Imagem do acervo indisponível: ' + src);
  return photo;
};

// As escolhas abaixo são exclusivas da home; o catálogo de cada serviço fica intacto.
export const HOME_HERO = [
  { ...findArchive('/acquatec-telhados-manutencao-condominios-insdustriais-residencias-curitiba-1-2000x900.jpeg'), focus: '48% 48%' },
  { ...findArchive('/acquatec-telhados-manutencao-condominios-insdustriais-residencias-curitiba-4-1889x850.jpeg'), focus: '46% 33%' },
  { ...findArchive('/acquatec-telhados-condominios-reformas-preco-barato-manutencao-517x357.jpg'), focus: '50% 57%' },
];

export const HOME_ABOUT = [
  { ...findArchive('/acquatec-calhas-e-telhados-em-curitiba-reformas-condominios-517x357.jpg'), focus: '36% 52%' },
  { ...findArchive('/calhas-preco-400x402.jpg'), focus: '0% 52%' },
];

export const HOME_ARCHIVE_FEATURED = [
  { ...findArchive('/aplicacao_de_manta_em_calha.webp'), focus: '52% 45%', scale: 1.08 },
  { ...findArchive('/calhas-acquatec-400x401.jpg'), focus: '50% 25%', scale: 1.14 },
];

export const HOME_SERVICE_PHOTOS = {
  'manta-termica': { alt: 'Camada isolante aluminizada instalada sob uma cobertura inclinada', caption: 'Exemplo visual da manta trabalhando entre a cobertura e a área interna.', focus: '50% 49%' },
  calhas: { alt: 'Calha metálica e tubo de descida no canto de uma fachada', caption: 'Detalhe de captação no beiral e transição para o condutor.', focus: '88% 48%' },
  manutencao: { alt: 'Telhas desgastadas e fora de posição em um telhado antigo', caption: 'Telhas deslocadas e desgastadas: sinais que merecem avaliação antes de escolher o reparo.', focus: '50% 40%' },
  rufos: { alt: 'Rufo metálico no encontro entre uma parede e uma cobertura inclinada', caption: 'Arremate metálico no encontro que direciona a água para fora da parede.', focus: '50% 48%' },
  reformas: { alt: 'Cobertura residencial com chapas instaladas e parte da estrutura ainda visível', caption: 'Imóvel com a troca da cobertura em andamento, da estrutura ao acabamento.', focus: '50% 53%' },
  eolicos: { alt: 'Exaustor giratório metálico instalado sobre uma cobertura de chapas perfiladas', caption: 'Exaustor eólico no telhado, com destaque para a peça e a base.', focus: '50% 45%' },
  metalicos: { alt: 'Cobertura de chapas metálicas perfiladas com linhas de emendas visíveis', caption: 'Exemplo de uma cobertura metálica em que se veem as chapas e seus encontros.', focus: '50% 48%' },
};

export function getHomeServicePhoto(service) {
  const illustration = HOME_SERVICE_PHOTOS[service.id];
  if (illustration) return { ...illustration, src: '/imagens/home-acquatec/' + service.id + '.webp', illustrative: true };
  const original = findArchive(service.image);
  const positions = { captacao: '54% 48%', solar: '50% 32%' };
  return { ...original, alt: original.caption, focus: positions[service.id] || 'center', illustrative: false };
}
