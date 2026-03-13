// sanity/schemas/index.ts
// Registro de todos los schemas del proyecto

import edicion      from './edicion';
import ganador      from './ganador';
import nominado     from './nominado';
import persona      from './persona';
import foro         from './foro';
import noticia      from './noticia';
import pagina       from './pagina';
import patrocinador from './patrocinador';
import quirinoLab   from './quirinoLab';

export const schemaTypes = [
  // Core
  edicion,
  ganador,
  nominado,
  // Personas
  persona,
  // Industria
  foro,
  quirinoLab,
  // Contenido
  noticia,
  pagina,
  // Soporte
  patrocinador,
];
