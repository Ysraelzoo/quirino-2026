// sanity/schemas/pagina.ts
// Páginas estáticas: Acerca de, Bases, Aviso legal...

export default {
  name: 'pagina',
  title: 'Página',
  type: 'document',
  icon: () => '📄',
  fields: [
    {
      name: 'titulo',
      title: 'Título (i18n)',
      type: 'object',
      fields: [
        { name: 'es', type: 'string', title: 'Español' },
        { name: 'pt', type: 'string', title: 'Português' },
        { name: 'en', type: 'string', title: 'English' },
      ],
      validation: (Rule: any) => Rule.required(),
    },
    {
      name: 'slug',
      title: 'Slug URL',
      type: 'slug',
      options: { source: 'titulo.es', maxLength: 96 },
      validation: (Rule: any) => Rule.required(),
    },
    {
      name: 'cuerpo',
      title: 'Contenido (i18n)',
      type: 'object',
      fields: [
        {
          name: 'es', type: 'array', title: 'Español',
          of: [
            { type: 'block' },
            {
              type: 'image',
              options: { hotspot: true },
              fields: [{ name: 'caption', type: 'string', title: 'Pie de foto' }],
            },
          ],
        },
        { name: 'pt', type: 'array', title: 'Português', of: [{ type: 'block' }] },
        { name: 'en', type: 'array', title: 'English', of: [{ type: 'block' }] },
      ],
    },
    {
      name: 'metaTitulo',
      title: 'SEO — Meta título (i18n)',
      type: 'object',
      fields: [
        { name: 'es', type: 'string', title: 'Español' },
        { name: 'pt', type: 'string', title: 'Português' },
        { name: 'en', type: 'string', title: 'English' },
      ],
    },
    {
      name: 'metaDesc',
      title: 'SEO — Meta descripción (i18n)',
      type: 'object',
      fields: [
        { name: 'es', type: 'text', title: 'Español', rows: 2 },
        { name: 'pt', type: 'text', title: 'Português', rows: 2 },
        { name: 'en', type: 'text', title: 'English', rows: 2 },
      ],
    },
    {
      name: 'ogImagen',
      title: 'Imagen Open Graph',
      type: 'image',
      description: 'Imagen para compartir en redes sociales (1200×630px recomendado)',
    },
  ],
  preview: {
    select: { title: 'titulo.es', subtitle: 'slug.current' },
    prepare({ title, subtitle }: any) {
      return { title: title || 'Sin título', subtitle: `/${subtitle}` };
    },
  },
};
