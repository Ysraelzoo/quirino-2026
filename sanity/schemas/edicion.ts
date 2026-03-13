// sanity/schemas/edicion.ts
// Schema central — cada año del premio

export default {
  name: 'edicion',
  title: 'Edición',
  type: 'document',
  icon: () => '🏆',
  fields: [
    {
      name: 'year',
      title: 'Año',
      type: 'number',
      validation: (Rule: any) => Rule.required().min(2018).max(2100),
    },
    {
      name: 'numero',
      title: 'Número de edición',
      type: 'number',
      description: 'Ej: 9 para la 9ª edición',
      validation: (Rule: any) => Rule.required(),
    },
    {
      name: 'titulo',
      title: 'Título (i18n)',
      type: 'object',
      fields: [
        { name: 'es', type: 'string', title: 'Español' },
        { name: 'pt', type: 'string', title: 'Português' },
        { name: 'en', type: 'string', title: 'English' },
      ],
    },
    {
      name: 'slug',
      title: 'Slug URL',
      type: 'slug',
      description: 'Se genera automáticamente desde el año',
      options: { source: 'year', maxLength: 10 },
      validation: (Rule: any) => Rule.required(),
    },
    {
      name: 'fechaInicio',
      title: 'Fecha inicio',
      type: 'date',
    },
    {
      name: 'fechaFin',
      title: 'Fecha fin',
      type: 'date',
    },
    {
      name: 'sede',
      title: 'Sede',
      type: 'string',
      description: 'Ej: Auditorio Adán Martín, Santa Cruz de Tenerife',
    },
    {
      name: 'heroImage',
      title: 'Imagen principal',
      type: 'image',
      options: { hotspot: true },
      fields: [
        { name: 'alt', type: 'string', title: 'Texto alternativo' },
        { name: 'credit', type: 'string', title: 'Crédito fotográfico' },
      ],
    },
    {
      name: 'videoResumen',
      title: 'URL vídeo resumen',
      type: 'url',
      description: 'YouTube o Vimeo',
    },
    {
      name: 'sinopsis',
      title: 'Sinopsis (i18n)',
      type: 'object',
      fields: [
        { name: 'es', type: 'text', title: 'Español', rows: 4 },
        { name: 'pt', type: 'text', title: 'Português', rows: 4 },
        { name: 'en', type: 'text', title: 'English', rows: 4 },
      ],
    },
    {
      name: 'ganadores',
      title: 'Ganadores',
      type: 'array',
      of: [{ type: 'reference', to: [{ type: 'ganador' }] }],
    },
    {
      name: 'nominados',
      title: 'Nominados',
      type: 'array',
      of: [{ type: 'reference', to: [{ type: 'nominado' }] }],
    },
    {
      name: 'jurado',
      title: 'Jurado',
      type: 'array',
      of: [{ type: 'reference', to: [{ type: 'persona' }] }],
    },
    {
      name: 'foro',
      title: 'Foro de Coproducción',
      type: 'reference',
      to: [{ type: 'foro' }],
    },
    {
      name: 'publicada',
      title: 'Publicada',
      type: 'boolean',
      description: 'Activar para que sea visible en la web',
      initialValue: false,
    },
  ],
  orderings: [{ title: 'Año (desc)', name: 'yearDesc', by: [{ field: 'year', direction: 'desc' }] }],
  preview: {
    select: { title: 'year', subtitle: 'sede', published: 'publicada' },
    prepare({ title, subtitle, published }: any) {
      return {
        title: `${title} — ${published ? '✓ Publicada' : 'Borrador'}`,
        subtitle,
      };
    },
  },
};
