// sanity/schemas/foro.ts
// Foro de Coproducción y Negocios

export default {
  name: 'foro',
  title: 'Foro de Negocios',
  type: 'document',
  icon: () => '🤝',
  fields: [
    {
      name: 'descripcion',
      title: 'Descripción (i18n)',
      type: 'object',
      fields: [
        { name: 'es', type: 'text', title: 'Español', rows: 4 },
        { name: 'pt', type: 'text', title: 'Português', rows: 4 },
        { name: 'en', type: 'text', title: 'English', rows: 4 },
      ],
    },
    {
      name: 'nReuniones',
      title: 'Nº de reuniones B2B',
      type: 'number',
      description: 'Ej: 1500',
    },
    {
      name: 'nProfesionales',
      title: 'Nº de profesionales',
      type: 'number',
    },
    {
      name: 'nPaises',
      title: 'Nº de países',
      type: 'number',
    },
    {
      name: 'nEmpresas',
      title: 'Nº de empresas',
      type: 'number',
    },
    {
      name: 'fechas',
      title: 'Fechas del Foro',
      type: 'string',
      description: 'Ej: 15–17 Abril 2026',
    },
    {
      name: 'precios',
      title: 'Precios e inscripción (i18n)',
      type: 'object',
      fields: [
        { name: 'es', type: 'text', title: 'Español', rows: 3 },
        { name: 'pt', type: 'text', title: 'Português', rows: 3 },
        { name: 'en', type: 'text', title: 'English', rows: 3 },
      ],
    },
    {
      name: 'programa',
      title: 'Programa (i18n)',
      type: 'object',
      fields: [
        {
          name: 'es', type: 'array', title: 'Español',
          of: [{ type: 'block' }],
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
      name: 'urlInscripcion',
      title: 'URL de inscripción',
      type: 'url',
    },
    {
      name: 'empresas',
      title: 'Empresas participantes',
      type: 'array',
      of: [{ type: 'string' }],
      description: 'Lista de nombres de empresas inscritas',
    },
    {
      name: 'edicion',
      title: 'Edición',
      type: 'reference',
      to: [{ type: 'edicion' }],
    },
  ],
  preview: {
    select: { year: 'edicion.year', reuniones: 'nReuniones' },
    prepare({ year, reuniones }: any) {
      return {
        title: `Foro ${year || ''}`,
        subtitle: reuniones ? `${reuniones} reuniones B2B` : '',
      };
    },
  },
};
