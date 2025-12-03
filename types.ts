export interface City {
  name: string;
  slug: string;
}

export interface Service {
  id: string;
  title: string;
  description: string[];
  price: string;
  image: string;
  cta: string;
}

export interface FAQItem {
  question: string;
  answer: string;
}

export interface Testimonial {
  name: string;
  role: string;
  location: string;
  text: string;
  stars: number;
}
