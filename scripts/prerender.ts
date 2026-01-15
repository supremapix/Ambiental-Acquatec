import { ALL_NEIGHBORHOODS, CITIES, SERVICES } from '../constants';

export function getRoutes(): string[] {
  return [
    '/',
    ...SERVICES.map(s => `/servicos/${s.id}`),
    ...CITIES.map(c => `/cidades/${c.slug}`),
    ...ALL_NEIGHBORHOODS.map(n => `/bairros/${n.slug}`)
  ];
}

console.log('Total routes to pre-render:', getRoutes().length);
console.log('Routes:', getRoutes().slice(0, 10), '...');
