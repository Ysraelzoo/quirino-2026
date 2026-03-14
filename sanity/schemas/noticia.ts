// sanity/schemas/noticia.ts

export default {
  name: 'noticia',
  title: 'Noticia',
  type: 'document',
  icon: () => '📰',
  fields: [
    {
      name: 'titulo',
      title: 'Titular (i18n)',
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
      name: 'imagen',
      title: 'Imagen de portada',
      type: 'image',
      options: { hotspot: true },
      fields: [{ name: 'alt', type: 'string', title: 'Texto alternativo' }],
    },
    {
      name: 'extracto',
      title: 'Extracto (i18n)',
      type: 'object',
      description: 'Resumen corto — aparece en listados',
      fields: [
        { name: 'es', type: 'text', title: 'Español', rows: 2 },
        { name: 'pt', type: 'text', title: 'Português', rows: 2 },
        { name: 'en', type: 'text', title: 'English', rows: 2 },
      ],
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
        {
          name: 'pt', type: 'array', title: 'Português',
          of: [{ type: 'block' }],
        },
        {
          name: 'en', type: 'array', title: 'English',
          of: [{ type: 'block' }],
        },
      ],
    },
    {
      name: 'categoria',
      title: 'Categoría',
      type: 'string',
      options: {
        list: [
          { title: 'Convocatoria', value: 'Convocatoria' },
          { title: 'Foro',         value: 'Foro' },
          { title: 'Quirino Lab',  value: 'Quirino Lab' },
          { title: 'Premios',      value: 'Premios' },
          { title: 'Internacional',value: 'Internacional' },
          { title: 'General',      value: 'General' },
        ],
      },
    },
    {
      name: 'fecha',
      title: 'Fecha de publicación',
      type: 'date',
      validation: (Rule: any) => Rule.required(),
    },
    {
      name: 'edicion',
      title: 'Edición relacionada',
      type: 'reference',
      to: [{ type: 'edicion' }],
      description: 'Opcional — vincular a una edición concreta',
    },
    {
      name: 'publicada',
      title: 'Publicada',
      type: 'boolean',
      initialValue: false,
    },
  ],
  orderings: [{ title: 'Fecha (desc)', name: 'fechaDesc', by: [{ field: 'fecha', direction: 'desc' }] }],
  preview: {
    select: { title: 'titulo.es', subtitle: 'fecha', media: 'imagen', published: 'publicada' },
    prepare({ title, subtitle, media, published }: any) {
      return {
        title: `${published ? '' : '⏸ '}${title || 'Sin título'}`,
        subtitle,
        media,
      };
    },
  },
};
