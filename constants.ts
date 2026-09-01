import { City, FAQItem, Service, Testimonial } from './types';
import {
  CITIES as CITIES_DATA,
  ALL_NEIGHBORHOODS as ALL_NEIGHBORHOODS_DATA,
  TOP_NEIGHBORHOODS as TOP_NEIGHBORHOODS_DATA,
  SERVICES as SERVICES_DATA,
  FAQS as FAQS_DATA,
  TESTIMONIALS as TESTIMONIALS_DATA
} from './site-data.js';

export interface Neighborhood {
  name: string;
  slug: string;
}

/**
 * Os dados vivem em `site-data.js` (JS puro) para que o app React e os scripts
 * de build (sitemap, meta tags, llms.txt) usem exatamente a mesma fonte.
 * Aqui apenas reexportamos com tipagem.
 */
export const CITIES: City[] = CITIES_DATA;
export const ALL_NEIGHBORHOODS: Neighborhood[] = ALL_NEIGHBORHOODS_DATA;
export const TOP_NEIGHBORHOODS: Neighborhood[] = TOP_NEIGHBORHOODS_DATA;
export const SERVICES: Service[] = SERVICES_DATA;
export const FAQS: FAQItem[] = FAQS_DATA;
export const TESTIMONIALS: Testimonial[] = TESTIMONIALS_DATA;

export { CONTACT, BUSINESS, SITE_URL } from './site-config.js';
