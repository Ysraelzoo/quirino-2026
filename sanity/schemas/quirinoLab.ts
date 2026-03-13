// sanity/schemas/quirinoLab.ts

export default {
  name: 'quirinoLab',
  title: 'Quirino Lab',
  type: 'document',
  icon: () => '🔬',
  fields: [
    {
      name: 'tituloProyecto',
      title: 'Título del proyecto (i18n)',
      type: 'object',
      fields: [
        { name: 'es', type: 'string', title: 'Español' },
        { name: 'pt', type: 'string', title: 'Português' },
        { name: 'en', type: 'string', title: 'English' },
      ],
      validation: (Rule: any) => Rule.required(),
    },
    {
      name: 'estudio',
      title: 'Estudio / Productora',
      type: 'string',
      validation: (Rule: any) => Rule.required(),
    },
    {
      name: 'pais',
      title: 'País',
      type: 'string',
    },
    {
      name: 'imagen',
      title: 'Imagen del proyecto',
      type: 'image',
      options: { hotspot: true },
      fields: [{ name: 'alt', type: 'string', title: 'Texto alternativo' }],
    },
    {
      name: 'descripcion',
      title: 'Descripción (i18n)',
      type: 'object',
      fields: [
        { name: 'es', type: 'text', title: 'Español', rows: 3 },
        { name: 'pt', type: 'text', title: 'Português', rows: 3 },
        { name: 'en', type: 'text', title: 'English', rows: 3 },
      ],
    },
    {
      name: 'estado',
      title: 'Estado del proyecto',
      type: 'string',
      options: {
        list: [
          { title: 'En desarrollo', value: 'en-desarrollo' },
          { title: 'En producción', value: 'produccion' },
          { title: 'Completado', value: 'completado' },
        ],
      },
      initialValue: 'en-desarrollo',
    },
    {
      name: 'edicion',
      title: 'Edición Quirino Lab',
      type: 'reference',
      to: [{ type: 'edicion' }],
      validation: (Rule: any) => Rule.required(),
    },
  ],
  preview: {
    select: { title: 'tituloProyecto.es', subtitle: 'estudio', media: 'imagen' },
    prepare({ title, subtitle, media }: any) {
      return { title: title || 'Sin título', subtitle, media };
    },
  },
};
