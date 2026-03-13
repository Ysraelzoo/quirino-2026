// astro.config.mjs
import { defineConfig } from 'astro/config';

export default defineConfig({
  // Output: static (SSG)
  output: 'static',

  // Dominio de producción
  site: 'https://premiosquirino.org',

  // Build options
  build: {
    assets: 'assets',
  },

  // Nota: añadir integración @sanity/astro cuando esté disponible en red
  // integrations: [
  //   sanity({
  //     projectId: import.meta.env.PUBLIC_SANITY_PROJECT_ID,
  //     dataset: import.meta.env.PUBLIC_SANITY_DATASET,
  //     useCdn: false,
  //     apiVersion: '2024-01-01',
  //     studioBasePath: '/studio',
  //   }),
  // ],
});
