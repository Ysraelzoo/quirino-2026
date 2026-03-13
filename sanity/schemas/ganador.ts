// sanity/schemas/ganador.ts

const CATEGORIAS = [
  'Mejor Largometraje Iberoamericano',
  'Mejor Largometraje Europeo-Iberoamericano',
  'Mejor Serie de Animación',
  'Mejor Cortometraje',
  'Mejor Videojuego',
  'Mejor Producción de Encargo',
  'Mejor Producción de Escuela',
  'Premio del Público',
  'Premio Especial del Jurado',
  'Premio Trayectoria Iberoamericana',
];

export default {
  name: 'ganador',
  title: 'Ganador',
  type: 'document',
  icon: () => '🥇',
  fields: [
    {
      name: 'categoria',
      title: 'Categoría',
      type: 'string',
      options: { list: CATEGORIAS.map(c => ({ title: c, value: c })) },
      validation: (Rule: any) => Rule.required(),
    },
    {
      name: 'tituloObra',
      title: 'Título de la obra (i18n)',
      type: 'object',
      fields: [
        { name: 'es', type: 'string', title: 'Español' },
        { name: 'pt', type: 'string', title: 'Português' },
        { name: 'en', type: 'string', title: 'English' },
      ],
      validation: (Rule: any) => Rule.required(),
    },
    {
      name: 'pais',
      title: 'País de producción',
      type: 'string',
    },
    {
      name: 'productora',
      title: 'Productora',
      type: 'string',
    },
    {
      name: 'director',
      title: 'Director/a',
      type: 'string',
    },
    {
      name: 'imagen',
      title: 'Imagen / Póster',
      type: 'image',
      options: { hotspot: true },
      fields: [{ name: 'alt', type: 'string', title: 'Texto alternativo' }],
    },
    {
      name: 'trailer',
      title: 'URL tráiler',
      type: 'url',
    },
    {
      name: 'sinopsis',
      title: 'Sinopsis (i18n)',
      type: 'object',
      fields: [
        { name: 'es', type: 'text', title: 'Español', rows: 3 },
        { name: 'pt', type: 'text', title: 'Português', rows: 3 },
        { name: 'en', type: 'text', title: 'English', rows: 3 },
      ],
    },
    {
      name: 'edicion',
      title: 'Edición',
      type: 'reference',
      to: [{ type: 'edicion' }],
      validation: (Rule: any) => Rule.required(),
    },
  ],
  preview: {
    select: { title: 'tituloObra.es', subtitle: 'categoria', media: 'imagen' },
    prepare({ title, subtitle, media }: any) {
      return { title: title || 'Sin título', subtitle, media };
    },
  },
};
