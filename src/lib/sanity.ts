// src/lib/sanity.ts
// Cliente de Sanity y helper de imágenes

import { createClient } from '@sanity/client';
import imageUrlBuilder from '@sanity/image-url';

export const client = createClient({
  projectId: import.meta.env.PUBLIC_SANITY_PROJECT_ID,
  dataset:   import.meta.env.PUBLIC_SANITY_DATASET || 'production',
  apiVersion: '2024-01-01',
  useCdn:    false,               // false en SSG: siempre datos frescos en build
  token:     import.meta.env.SANITY_API_TOKEN,
  perspective: 'published',       // excluir drafts (docs con prefijo drafts.*)
});

// Helper para construir URLs de imágenes de Sanity
const builder = imageUrlBuilder(client);

export function urlFor(source: any) {
  return builder.image(source);
}
