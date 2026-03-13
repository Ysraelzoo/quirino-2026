// sanity/schemas/persona.ts
// Schema polivalente: jurado, comité, embajadores, equipo

export default {
  name: 'persona',
  title: 'Persona',
  type: 'document',
  icon: () => '👤',
  fields: [
    {
      name: 'nombre',
      title: 'Nombre completo',
      type: 'string',
      validation: (Rule: any) => Rule.required(),
    },
    {
      name: 'cargo',
      title: 'Cargo / Rol (i18n)',
      type: 'object',
      fields: [
        { name: 'es', type: 'string', title: 'Español' },
        { name: 'pt', type: 'string', title: 'Português' },
        { name: 'en', type: 'string', title: 'English' },
      ],
    },
    {
      name: 'empresa',
      title: 'Empresa / Organización',
      type: 'string',
    },
    {
      name: 'pais',
      title: 'País',
      type: 'string',
    },
    {
      name: 'foto',
      title: 'Foto de perfil',
      type: 'image',
      options: { hotspot: true },
      fields: [{ name: 'alt', type: 'string', title: 'Texto alternativo' }],
    },
    {
      name: 'bio',
      title: 'Biografía (i18n)',
      type: 'object',
      fields: [
        { name: 'es', type: 'text', title: 'Español', rows: 4 },
        { name: 'pt', type: 'text', title: 'Português', rows: 4 },
        { name: 'en', type: 'text', title: 'English', rows: 4 },
      ],
    },
    {
      name: 'tipo',
      title: 'Tipo',
      type: 'string',
      options: {
        list: [
          { title: 'Jurado', value: 'jurado' },
          { title: 'Comité de selección', value: 'comite' },
          { title: 'Embajador/a', value: 'embajador' },
          { title: 'Equipo', value: 'equipo' },
        ],
      },
      validation: (Rule: any) => Rule.required(),
    },
    {
      name: 'linkedin',
      title: 'LinkedIn',
      type: 'url',
    },
    {
      name: 'ediciones',
      title: 'Ediciones en las que participa',
      type: 'array',
      of: [{ type: 'reference', to: [{ type: 'edicion' }] }],
    },
  ],
  preview: {
    select: { title: 'nombre', subtitle: 'tipo', media: 'foto' },
    prepare({ title, subtitle, media }: any) {
      const tipos: Record<string, string> = {
        jurado: 'Jurado', comite: 'Comité', embajador: 'Embajador/a', equipo: 'Equipo',
      };
      return { title, subtitle: tipos[subtitle] || subtitle, media };
    },
  },
};
