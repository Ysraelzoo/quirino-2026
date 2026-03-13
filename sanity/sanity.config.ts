// sanity/sanity.config.ts
import { defineConfig } from 'sanity';
import { structureTool } from 'sanity/structure';
import { visionTool } from '@sanity/vision';
import { schemaTypes } from './schemas';

export default defineConfig({
  name: 'quirino',
  title: 'Premios Quirino CMS',

  projectId: 'wcbrrfh8',
  dataset:   'production',

  plugins: [
    structureTool({
      structure: (S) =>
        S.list()
          .title('Contenido')
          .items([
            S.listItem().title('📅 Ediciones').schemaType('edicion').child(
              S.documentTypeList('edicion').title('Ediciones')
            ),
            S.divider(),
            S.listItem().title('🏆 Ganadores').schemaType('ganador').child(
              S.documentTypeList('ganador').title('Ganadores')
            ),
            S.listItem().title('🎬 Nominados').schemaType('nominado').child(
              S.documentTypeList('nominado').title('Nominados')
            ),
            S.divider(),
            S.listItem().title('👤 Personas').schemaType('persona').child(
              S.documentTypeList('persona').title('Personas')
            ),
            S.divider(),
            S.listItem().title('🤝 Foro de Negocios').schemaType('foro').child(
              S.documentTypeList('foro').title('Foros')
            ),
            S.listItem().title('🔬 Quirino Lab').schemaType('quirinoLab').child(
              S.documentTypeList('quirinoLab').title('Quirino Lab')
            ),
            S.divider(),
            S.listItem().title('📰 Noticias').schemaType('noticia').child(
              S.documentTypeList('noticia').title('Noticias')
            ),
            S.listItem().title('📄 Páginas').schemaType('pagina').child(
              S.documentTypeList('pagina').title('Páginas')
            ),
            S.divider(),
            S.listItem().title('🤲 Patrocinadores').schemaType('patrocinador').child(
              S.documentTypeList('patrocinador').title('Patrocinadores')
            ),
          ]),
    }),
    visionTool(), // Para testear queries GROQ directamente en el Studio
  ],

  schema: { types: schemaTypes },
});
