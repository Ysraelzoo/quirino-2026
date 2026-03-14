/**
 * scripts/import-sanity.mjs
 * Genera un fichero NDJSON con todas las ediciones y ganadores (2018-2025)
 * para importar en Sanity con:
 *   node scripts/import-sanity.mjs > data.ndjson
 *   npx sanity dataset import data.ndjson production --replace
 */

// ─── DATOS ────────────────────────────────────────────────────────────────────

const EDICIONES = [
  { year: 2018, numero: 1, sede: 'Santa Cruz de Tenerife' },
  { year: 2019, numero: 2, sede: 'Santa Cruz de Tenerife' },
  { year: 2020, numero: 3, sede: 'Online' },
  { year: 2021, numero: 4, sede: 'Santa Cruz de Tenerife' },
  { year: 2022, numero: 5, sede: 'Santa Cruz de Tenerife' },
  { year: 2023, numero: 6, sede: 'Santa Cruz de Tenerife' },
  { year: 2024, numero: 7, sede: 'Santa Cruz de Tenerife' },
  { year: 2025, numero: 8, sede: 'Santa Cruz de Tenerife' },
];

// Cada ganador: [categoria, tituloObra, pais, productora, director]
const GANADORES_POR_EDICION = {

  2018: [
    ['Mejor Largometraje',           'Ana y Bruno',                                    'México',              'Altavista Films, Lo Coloco Films, Ítaca Films, Ánima Estudios', 'Carlos Carrera'],
    ['Mejor Serie',                  'El Hombre Más Chiquito del Mundo',               'Argentina, Francia',  'Les Films De L\'Arlequin, JPL Films, Can Can Club',             'Juan Pablo Zaramella'],
    ['Mejor Cortometraje',           'Decorado',                                       'España, Francia',     'UniKo, Autour de Minuit, Abano Producións',                     'Alberto Vázquez'],
    ['Mejor Cortometraje de escuela','Tántalo',                                        'Argentina',           'Universidad de Buenos Aires',                                   'Juan Facundo Ayerbe, Christian Krieghoff'],
    ['Mejor Animación de Encargo',   'Cantar con Sentido: Una Biografía de Violeta Parra', 'Chile',           'Plastivida, Niño Viejo',                                        'Leonardo Beltrán'],
    ['Mejor Obra Innovadora',        'The Many Pieces of Mr Coo',                      'España',              'Nacho Rodríguez',                                               'Nacho Rodríguez'],
    ['Mejor Desarrollo Visual',      'Here\'s the Plan',                               'Chile',               'María José Barros',                                             'Fernanda Frick'],
    ['Mejor Diseño de Animación',    'Caminho dos Gigantes',                           'Brasil',              'Sinlogo Animation',                                             'Alois Di Leo'],
    ['Mejor Diseño de Sonido y Música', 'Tadeo Jones 2: El Secreto del Rey Midas',    'España',              'Telecinco Cinema, Telefónica Studios, 4Cats Pictures, Ikiru Films, Lightbox Animation', 'Enrique Gato, David Alonso'],
  ],

  2019: [
    ['Mejor Largometraje',           'Virus Tropical',                                 'Colombia',            'Timbo Estudio',                                                 'Santiago Caicedo'],
    ['Mejor Serie',                  'Irmão do Jorel – Seja Brócolis!',                'Brasil',              'Copa Studio',                                                   'Juliano Enrico'],
    ['Mejor Cortometraje',           'Guaxuma',                                        'Brasil, Francia',     'Vilarejo Filmes, Les Valseurs',                                  'Nara Normande'],
    ['Mejor Cortometraje de escuela','Patchwork',                                      'España',              'Universitat Politècnica de Valencia',                            'María Manero Muro'],
    ['Mejor Animación de Encargo',   'La Increíble Historia del Hombre que Podía Volar y no Sabía Cómo', 'España', 'Hiru Animation',                                          'Manuel Rubio'],
    ['Mejor Obra Innovadora',        'Belisario – El Pequeño Gran Héroe del Cosmos',   'Argentina',           'Planetario Ciudad De La Plata',                                 'Hernan Moyano'],
    ['Mejor Desarrollo Visual',      'La Casa Lobo',                                   'Chile',               'Diluvio, Globo Rojo',                                           'Cristóbal León, Joaquín Cociña'],
    ['Mejor Diseño de Animación',    'Puerto Papel 2ª Temporada',                      'Chile, Brasil, Colombia, Argentina', 'Zumbastico Studios, Gloob, Señal Colombia, Pakapaka', 'Álvaro Ceppi'],
    ['Mejor Diseño de Sonido y Música', 'Black is Beltza',                             'España',              'Black is Beltza A.I.E., Talka Records, Set Màgic Audiovisual',  'Fermín Muguruza'],
  ],

  2020: [
    ['Mejor Largometraje',           'Klaus',                                           'España',              'The SPA Studios, Atresmedia Cine',                              'Sergio Pablos'],
    ['Mejor Serie',                  'Tainá e os Guardiões da Amazônia',                'Brasil',              'Hype, Sincrocine',                                              'André Forni'],
    ['Mejor Cortometraje',           'El Pájarocubo',                                   'Colombia',            'La Valiente Estudio, Cintadhesiva Comunicaciones, Animaedro Estudio De Animación', 'Jorge Alberto Vega'],
    ['Mejor Cortometraje de escuela','Nestor',                                          'Portugal, Reino Unido','Royal College of Art',                                         'João Gonzalez'],
    ['Mejor Animación de Encargo',   'Mate?',                                           'Argentina, Bolivia, Brasil, Chile, Paraguay, Uruguay', 'Buda.tv',                     'Buda.tv'],
    ['Mejor Animación de Videojuego','Gris',                                            'España',              'Nomada Studio',                                                 'Conrad Roset'],
    ['Mejor Desarrollo Visual',      'O Peculiar Crime do Estranho Sr. Jacinto',        'Portugal, Francia',   'Cola – Colectivo Audiovisual, Wild Stream',                      'Bruno Caetano'],
    ['Mejor Diseño de Animación',    'Klaus',                                           'España',              'The SPA Studios, Atresmedia Cine',                              'Sergio Pablos'],
    ['Mejor Diseño de Sonido y Música', 'Nestor',                                       'Portugal, Reino Unido','Royal College of Art',                                         'João Gonzalez'],
  ],

  2021: [
    ['Mejor Largometraje',           'Un Disfraz para Nicolás',                         'México',              'Fotosíntesis Media, Péek Paax',                                 'Eduardo Rivero'],
    ['Mejor Serie',                  'Petit 2ª Temporada',                              'Argentina, Chile, Colombia', 'Pájaro, Pakapaka, Señal Colombia, Non Stop',             'Bernardita Ojeda'],
    ['Mejor Cortometraje',           'Homeless Home',                                   'España, Francia',     'Uniko, Autour de Minuit',                                       'Alberto Vázquez'],
    ['Mejor Cortometraje de escuela','Memories for Sale',                               'Costa Rica',          'Universidad Veritas',                                           'Manuel Lopez'],
    ['Mejor Animación de Encargo',   'Rutas',                                           'Argentina',           'Osa Estudio',                                                   'Alejandro Imondi'],
    ['Mejor Animación de Videojuego','Gylt',                                            'España',              'Tequila Works',                                                 ''],
    ['Mejor Desarrollo Visual',      'Elo',                                             'Portugal, Francia',   'Bando à Parte, Bap Animation Studios, Providences',             'Alexandra Ramires'],
    ['Mejor Diseño de Animación',    'Umbrellas',                                       'España, Francia',     'Bígaro Films, Moukda Production',                               'José Prats, Álvaro Robles'],
    ['Mejor Diseño de Sonido y Música', 'Loop',                                         'España, Argentina',   'Uniko',                                                         'Pablo Polledri'],
  ],

  2022: [
    ['Mejor Largometraje',           'Bob Cuspe – Nós Não Gostamos De Gente',           'Brasil',              'Coala Filmes, Cup Filmes',                                      'Cesar Cabral'],
    ['Mejor Serie',                  'Sustos Ocultos de Frankelda – Temporada 1',       'México',              'Cinema Fantasma',                                               'Roy Ambriz, Arturo Ambriz'],
    ['Mejor Cortometraje',           'Bestia',                                          'Chile',               'Trebol 3 Producciones, Maleza Estudio',                         'Hugo Covarrubias'],
    ['Mejor Cortometraje de escuela','Las moscas solo viven un día',                    'España',              'Máster en Animación UPV',                                       'Mauro Luis López'],
    ['Mejor Animación de Encargo',   '#normadegénerobinaria: Niñas',                    'Chile',               'Pájaro',                                                        'Bernardita Ojeda, Cristián Freire'],
    ['Mejor Animación de Videojuego','Greak: Memories of Azur',                        'Argentina, Ecuador, México, Venezuela', 'Navegante Entertainment',                     'Gustavo Alcalá, Rodrigo Fernández'],
    ['Mejor Desarrollo Visual',      'Bestia',                                          'Chile',               'Trebol 3 Producciones, Maleza Estudio',                         'Hugo Covarrubias'],
    ['Mejor Diseño de Animación',    'Sustos Ocultos de Frankelda',                     'México',              'Cinema Fantasma',                                               'Roy Ambriz, Arturo Ambriz'],
    ['Mejor Diseño de Sonido y Música', 'Bob Cuspe – Nós Não Gostamos De Gente',        'Brasil',              'Coala Filmes, Cup Filmes',                                      'Cesar Cabral'],
  ],

  2023: [
    ['Mejor Largometraje',           'Nayola',                                          'Bélgica, Francia, Países Bajos, Portugal', 'Praça Filmes, JPL Films, Soil Productions', 'José Miguel Ribeiro'],
    ['Mejor Serie',                  'Jasmine & Jambo',                                 'España',              'Teidees Audiovisuals, Corporació Catalana',                      'Sílvia Cortés'],
    ['Mejor Cortometraje',           'O Homem do Lixo',                                 'Portugal',            'Bando à Parte',                                                 'Laura Gonçalves'],
    ['Mejor Cortometraje de escuela','Chimborazo',                                      'Ecuador, España',     'Universitat Politècnica de València',                            'Keila Cepeda'],
    ['Mejor Animación de Encargo',   'Este perro está raro',                            'Argentina',           'Kiosko',                                                        'Facundo Quiroga, Juan Nadalino, Sebastian García'],
    ['Mejor Animación de Videojuego','Endling – Extinction is Forever',                 'España',              'Herobeat Studios',                                              'Javier Ramello'],
    ['Mejor Desarrollo Visual',      'Ice Merchants',                                   'Francia, Portugal, Reino Unido', 'Cola Animation, Wild Stream, Royal College Of Art',  'João Gonzalez'],
    ['Mejor Diseño de Animación',    'Pasajero',                                        'Argentina',           'JPZtudio',                                                      'Juan Pablo Zaramella'],
    ['Mejor Diseño de Sonido y Música', 'Garrano',                                      'Lituania, Portugal',  'Bap – Animation Studios, Art Shot',                             'David Doutel, Vasco Sá'],
  ],

  2024: [
    ['Mejor Largometraje',           'Robot Dreams',                                    'España, Francia',     'Arcadia Motion Pictures, Lokiz Films, Noodles Production',      'Pablo Berger'],
    ['Mejor Serie',                  'Jasmine & Jambo – Temporada 2',                   'España',              'Teidees Audiovisuals, Corporació Catalana',                      'Sílvia Cortés'],
    ['Mejor Cortometraje',           'Lulina e a Lua',                                  'Brasil',              'Estudio Teremim',                                               'Marcus Vinicius Vasconcelos, Alois Di Leo'],
    ['Mejor Cortometraje de escuela','La Fuga',                                         'Bélgica, Colombia',   'KASK & Conservatorium Hogeschool Gent',                          'Paola Cubillos'],
    ['Mejor Animación de Encargo',   'En las estrellas',                                'Chile, EEUU',         'Punkrobot Studio, Lucasfilm',                                   'Gabriel Osorio'],
    ['Mejor videoclip',              'I Inside the Old I Dying',                        'Chile',               'Diluvio, Globo Rojo, Pista B',                                  'Cristóbal León, Joaquín Cociña'],
    ['Mejor Animación de Videojuego','The Many Pieces of Mr Coo',                       'España',              'Gammera Nest',                                                  'Nacho Rodríguez'],
    ['Mejor Desarrollo Visual',      'El sueño de la Sultana',                          'Alemania, España',    'Abano Producións, El Gatoverde',                                 'Isabel Herguera'],
    ['Mejor Diseño de Animación',    'Sopa Fria',                                       'Francia, Portugal',   'Animais Avpl, La Clairière Ouest',                               'Marta Monteiro'],
    ['Mejor Diseño de Sonido y Música', 'Robot Dreams',                                 'España, Francia',     'Arcadia Motion Pictures, Lokiz Films',                          'Pablo Berger'],
  ],

  2025: [
    ['Mejor Largometraje',           'Mariposas negras',                                'España, Panamá',      'Ikiru Films, Tinglado Film, Anangu Grup, Tunche Films, Corporació Catalana', 'David Baute'],
    ['Mejor Serie',                  'Irmão Do Jorel – Temporada 5',                    'Brasil',              'Copa Studio, Warner Bros Discovery',                             'Juliano Enrico'],
    ['Mejor Cortometraje',           'Los carpinchos',                                  'Chile, Francia, Uruguay', 'Palermo Estudio, Autour de Minuit, Pájaro',                  'Alfredo Soderguit'],
    ['Mejor Cortometraje de escuela','Adiós',                                           'España, Reino Unido', 'National Film and Television School',                            'José Prats'],
    ['Mejor Animación de Encargo',   '47',                                              'Brasil',              'Zombie Studio',                                                 'Paulo Garcia, Natalia Gouvea'],
    ['Mejor videoclip',              'My Way',                                          'Argentina',           'Rudo Company',                                                  'Jesica Bianchi'],
    ['Mejor Animación de Videojuego','Neva',                                            'España',              'Nomada Studio',                                                 'Conrad Roset'],
    ['Mejor Desarrollo Visual',      '47',                                              'Brasil',              'Zombie Studio',                                                 'Paulo Garcia, Natalia Gouvea'],
    ['Mejor Diseño de Animación',    'Buffet Paraíso',                                  'España, Francia',     'Hampa Studio, WKND, DISNOSC',                                   'Santi Amézqueta, Héctor Zafra'],
    ['Mejor Diseño de Sonido y Música', 'Gilbert',                                      'España',              'Agencia Freak',                                                 'Alejandro Salueña García, Arturo Lacal Ruiz, Jordi Jiménez Xiberta'],
  ],
};

// ─── GENERADOR NDJSON ─────────────────────────────────────────────────────────

function slug(text) {
  return text.toString().toLowerCase()
    .normalize('NFD').replace(/[\u0300-\u036f]/g, '')
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/^-|-$/g, '');
}

const docs = [];

for (const ed of EDICIONES) {
  const edId = `edicion-${ed.year}`;
  const ganadores = GANADORES_POR_EDICION[ed.year] || [];
  const ganadorIds = [];

  for (const [i, [cat, titulo, pais, productora, director]] of ganadores.entries()) {
    const gId = `ganador-${ed.year}-${slug(cat)}`;
    ganadorIds.push(gId);

    docs.push({
      _id:       gId,
      _type:     'ganador',
      categoria: cat,
      tituloObra: { es: titulo, pt: '', en: '' },
      pais,
      productora,
      director:  director || '',
      edicion:   { _type: 'reference', _ref: edId },
    });
  }

  const ordinals = ['','1ª','2ª','3ª','4ª','5ª','6ª','7ª','8ª','9ª','10ª'];

  docs.push({
    _id:       edId,
    _type:     'edicion',
    year:      ed.year,
    numero:    ed.numero,
    titulo:    {
      es: `${ordinals[ed.numero]} edición — Premios Quirino ${ed.year}`,
      pt: `${ordinals[ed.numero]} edição — Prémios Quirino ${ed.year}`,
      en: `${ordinals[ed.numero]} Edition — Quirino Awards ${ed.year}`,
    },
    slug:      { _type: 'slug', current: String(ed.year) },
    sede:      ed.sede,
    publicada: true,
    ganadores: ganadorIds.map(ref => ({ _type: 'reference', _ref: ref, _key: ref })),
  });
}

// Imprimir NDJSON (una línea por documento)
for (const doc of docs) {
  process.stdout.write(JSON.stringify(doc) + '\n');
}

process.stderr.write(`✓ ${docs.length} documentos generados (${EDICIONES.length} ediciones + ${docs.length - EDICIONES.length} ganadores)\n`);
