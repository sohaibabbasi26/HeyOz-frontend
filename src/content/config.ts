import { defineCollection, z } from 'astro:content';

const teamCollection = defineCollection({
  type: 'data',
  schema: z.object({
    name: z.string(),
    position: z.string(),
    image: z.string(),
    description: z.string(),
    order: z.number(),
  }),
});

const servicesCollection = defineCollection({
  type: 'data',
  schema: z.object({
    title: z.string(),
    image: z.string(),
    cardBg: z.string().default('bg-heyOzGray'),
    headingBg: z.string().default('bg-heyOzGreen'),
    arrowBg: z.string().default('bg-black'),
    order: z.number(),
  }),
});

const testimonialsCollection = defineCollection({
  type: 'data',
  schema: z.object({
    name: z.string(),
    position: z.string(),
    text: z.string(),
    order: z.number(),
  }),
});

const caseStudiesCollection = defineCollection({
  type: 'data',
  schema: z.object({
    client: z.string(),
    service: z.string(),
    description: z.string(),
    order: z.number(),
  }),
});

export const collections = {
  'team': teamCollection,
  'services': servicesCollection,
  'testimonials': testimonialsCollection,
  'case-studies': caseStudiesCollection,
};
