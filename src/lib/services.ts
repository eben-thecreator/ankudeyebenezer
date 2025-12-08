export type Service = {
  slug: string;
  title: string;
  description: string;
  image?: string;
  filters: string[];
};

export const services: Service[] = [
  {
    slug: 'architecture',
    title: 'Architecture',
    description:
      'Designing spatial experiences across residential, commercial, civic and installation projects.',
    image: '/images/services/architecture.jpg',
    filters: ['residential', 'commercial', 'civic', 'installations'],
  },
  {
    slug: 'geospatial-engineering',
    title: 'Geospatial Engineering',
    description:
      'Topographic surveying, photogrammetry and precision levelling for accurate site intelligence.',
    image: '/images/services/geospatial.jpg',
    filters: ['topo survey', 'photogrammetry', 'levelling survey'],
  },
  {
    slug: 'product-brand',
    title: 'Product & Brand',
    description:
      'Graphic and product design that shapes meaning and moves users through compelling brand language.',
    image: '/images/services/product-brand.jpg',
    filters: ['graphic design', 'identity', 'packaging'],
  },
  {
    slug: 'media-entertainment',
    title: 'Media & Entertainment',
    description:
      'Animations, campaign visuals and content production for cultural and commercial platforms.',
    image: '/images/services/media-entertainment.jpg',
    filters: ['animations', 'campaign visuals', 'motion'],
  },
];

export function findService(slug: string | string[]) {
  const key = Array.isArray(slug) ? slug[0] : slug;
  return services.find((s) => s.slug === key);
}
