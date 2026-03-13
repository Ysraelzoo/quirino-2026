// sanity/schemas/patrocinador.ts

export default {
  name: 'patrocinador',
  title: 'Patrocinador',
  type: 'document',
  icon: () => '🤲',
  fields: [
    {
      name: 'nombre',
      title: 'Nombre',
      type: 'string',
      validation: (Rule: any) => Rule.required(),
    },
    {
      name: 'logo',
      title: 'Logo',
      type: 'image',
      description: 'Preferiblemente PNG con fondo transparente o SVG',
      options: { hotspot: false },
      fields: [{ name: 'alt', type: 'string', title: 'Texto alternativo' }],
    },
    {
      name: 'url',
      title: 'Web del patrocinador',
      type: 'url',
    },
    {
      name: 'nivel',
      title: 'Nivel de patrocinio',
      type: 'string',
      options: {
        list: [
          { title: 'Principal', value: 'principal' },
          { title: 'Oro', value: 'oro' },
          { title: 'Plata', value: 'plata' },
          { title: 'Colaborador', value: 'colaborador' },
        ],
      },
      validation: (Rule: any) => Rule.required(),
    },
    {
      name: 'tipo',
      title: 'Tipo',
      type: 'string',
      options: {
        list: [
          { title: 'Institucional', value: 'institucional' },
          { title: 'Privado', value: 'privado' },
          { title: 'Media Partner', value: 'mediaPartner' },
        ],
      },
    },
    {
      name: 'ediciones',
      title: 'Ediciones en las que participa',
      type: 'array',
      of: [{ type: 'reference', to: [{ type: 'edicion' }] }],
    },
  ],
  orderings: [
    {
      title: 'Nivel de patrocinio',
      name: 'nivelAsc',
      by: [{ field: 'nivel', direction: 'asc' }],
    },
  ],
  preview: {
    select: { title: 'nombre', subtitle: 'nivel', media: 'logo' },
    prepare({ title, subtitle, media }: any) {
      const niveles: Record<string, string> = {
        principal: '⭐ Principal', oro: '🥇 Oro', plata: '🥈 Plata', colaborador: 'Colaborador',
      };
      return { title, subtitle: niveles[subtitle] || subtitle, media };
    },
  },
};
