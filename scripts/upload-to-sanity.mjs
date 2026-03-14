/**
 * scripts/upload-to-sanity.mjs
 * Importa ediciones, ganadores y finalistas directamente a Sanity.
 * Ejecutar: node scripts/upload-to-sanity.mjs
 */

import { createClient } from '@sanity/client';

const client = createClient({
  projectId: 'wcbrrfh8',
  dataset:   'production',
  apiVersion: '2024-01-01',
  token: 'skCRsrqOvTOalMT2qghTYmyQZnyxStgi4II9Jqe47X8N8gJfEZhXMm4MU63PPKgM54mSSkanzp3LdjPpVfMgg1cQvfoRhAt1A16aT25W3uF8xGnDPCbBHupccvV7QMYgbUgf89kzJGfyBIassq1Kg8W6lrxLkn5T4vFzCTVVJxCpwhpsR5MU',
  useCdn: false,
});

// ─── EDICIONES ────────────────────────────────────────────────────────────────

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

// ─── GANADORES ────────────────────────────────────────────────────────────────
// [categoria, titulo, pais, productora, director]

const GANADORES = {
  2018: [
    ['Mejor Largometraje',              'Ana y Bruno',                                           'México',                                    'Altavista Films, Lo Coloco Films, Ítaca Films, Ánima Estudios',        'Carlos Carrera'],
    ['Mejor Serie',                     'El Hombre Más Chiquito del Mundo',                      'Argentina, Francia',                        'Les Films De L\'Arlequin, JPL Films, Can Can Club',                    'Juan Pablo Zaramella'],
    ['Mejor Cortometraje',              'Decorado',                                              'España, Francia',                           'UniKo, Autour de Minuit, Abano Producións',                           'Alberto Vázquez'],
    ['Mejor Cortometraje de escuela',   'Tántalo',                                               'Argentina',                                 'Universidad de Buenos Aires',                                         'Juan Facundo Ayerbe, Christian Krieghoff'],
    ['Mejor Animación de Encargo',      'Cantar con Sentido: Una Biografía de Violeta Parra',    'Chile',                                     'Plastivida, Niño Viejo',                                              'Leonardo Beltrán'],
    ['Mejor Obra Innovadora',           'The Many Pieces of Mr Coo',                             'España',                                    'Nacho Rodríguez',                                                     'Nacho Rodríguez'],
    ['Mejor Desarrollo Visual',         'Here\'s the Plan',                                      'Chile',                                     'María José Barros',                                                   'Fernanda Frick'],
    ['Mejor Diseño de Animación',       'Caminho dos Gigantes',                                  'Brasil',                                    'Sinlogo Animation',                                                   'Alois Di Leo'],
    ['Mejor Diseño de Sonido y Música', 'Tadeo Jones 2: El Secreto del Rey Midas',               'España',                                    'Telecinco Cinema, Telefónica Studios, 4Cats Pictures, Ikiru Films',   'Enrique Gato, David Alonso'],
  ],
  2019: [
    ['Mejor Largometraje',              'Virus Tropical',                                        'Colombia',                                  'Timbo Estudio',                                                       'Santiago Caicedo'],
    ['Mejor Serie',                     'Irmão do Jorel – Seja Brócolis!',                       'Brasil',                                    'Copa Studio',                                                         'Juliano Enrico'],
    ['Mejor Cortometraje',              'Guaxuma',                                               'Brasil, Francia',                           'Vilarejo Filmes, Les Valseurs',                                        'Nara Normande'],
    ['Mejor Cortometraje de escuela',   'Patchwork',                                             'España',                                    'Universitat Politècnica de Valencia',                                 'María Manero Muro'],
    ['Mejor Animación de Encargo',      'La Increíble Historia del Hombre que Podía Volar y no Sabía Cómo', 'España',                         'Hiru Animation',                                                      'Manuel Rubio'],
    ['Mejor Obra Innovadora',           'Belisario – El Pequeño Gran Héroe del Cosmos',          'Argentina',                                 'Planetario Ciudad De La Plata',                                       'Hernan Moyano'],
    ['Mejor Desarrollo Visual',         'La Casa Lobo',                                          'Chile',                                     'Diluvio, Globo Rojo',                                                 'Cristóbal León, Joaquín Cociña'],
    ['Mejor Diseño de Animación',       'Puerto Papel 2ª Temporada',                             'Chile, Brasil, Colombia, Argentina',         'Zumbastico Studios, Gloob, Señal Colombia, Pakapaka',                 'Álvaro Ceppi'],
    ['Mejor Diseño de Sonido y Música', 'Black is Beltza',                                       'España',                                    'Black is Beltza A.I.E., Talka Records, Set Màgic Audiovisual',        'Fermín Muguruza'],
  ],
  2020: [
    ['Mejor Largometraje',              'Klaus',                                                 'España',                                    'The SPA Studios, Atresmedia Cine',                                    'Sergio Pablos'],
    ['Mejor Serie',                     'Tainá e os Guardiões da Amazônia',                      'Brasil',                                    'Hype, Sincrocine',                                                    'André Forni'],
    ['Mejor Cortometraje',              'El Pájarocubo',                                         'Colombia',                                  'La Valiente Estudio, Cintadhesiva Comunicaciones, Animaedro',         'Jorge Alberto Vega'],
    ['Mejor Cortometraje de escuela',   'Nestor',                                                'Portugal, Reino Unido',                     'Royal College of Art',                                                'João Gonzalez'],
    ['Mejor Animación de Encargo',      'Mate?',                                                 'Argentina, Bolivia, Brasil, Chile, Paraguay, Uruguay', 'Buda.tv',                                              'Buda.tv'],
    ['Mejor Animación de Videojuego',   'Gris',                                                  'España',                                    'Nomada Studio',                                                       'Conrad Roset'],
    ['Mejor Desarrollo Visual',         'O Peculiar Crime do Estranho Sr. Jacinto',              'Portugal, Francia',                         'Cola – Colectivo Audiovisual, Wild Stream',                           'Bruno Caetano'],
    ['Mejor Diseño de Animación',       'Klaus',                                                 'España',                                    'The SPA Studios, Atresmedia Cine',                                    'Sergio Pablos'],
    ['Mejor Diseño de Sonido y Música', 'Nestor',                                                'Portugal, Reino Unido',                     'Royal College of Art',                                                'João Gonzalez'],
  ],
  2021: [
    ['Mejor Largometraje',              'Un Disfraz para Nicolás',                               'México',                                    'Fotosíntesis Media, Péek Paax',                                       'Eduardo Rivero'],
    ['Mejor Serie',                     'Petit 2ª Temporada',                                    'Argentina, Chile, Colombia',                'Pájaro, Pakapaka, Señal Colombia, Non Stop',                          'Bernardita Ojeda'],
    ['Mejor Cortometraje',              'Homeless Home',                                         'España, Francia',                           'Uniko, Autour de Minuit',                                             'Alberto Vázquez'],
    ['Mejor Cortometraje de escuela',   'Memories for Sale',                                     'Costa Rica',                                'Universidad Veritas',                                                 'Manuel Lopez'],
    ['Mejor Animación de Encargo',      'Rutas',                                                 'Argentina',                                 'Osa Estudio',                                                         'Alejandro Imondi'],
    ['Mejor Animación de Videojuego',   'Gylt',                                                  'España',                                    'Tequila Works',                                                       ''],
    ['Mejor Desarrollo Visual',         'Elo',                                                   'Portugal, Francia',                         'Bando à Parte, Bap Animation Studios, Providences',                   'Alexandra Ramires'],
    ['Mejor Diseño de Animación',       'Umbrellas',                                             'España, Francia',                           'Bígaro Films, Moukda Production',                                     'José Prats, Álvaro Robles'],
    ['Mejor Diseño de Sonido y Música', 'Loop',                                                  'España, Argentina',                         'Uniko',                                                               'Pablo Polledri'],
  ],
  2022: [
    ['Mejor Largometraje',              'Bob Cuspe – Nós Não Gostamos De Gente',                 'Brasil',                                    'Coala Filmes, Cup Filmes',                                            'Cesar Cabral'],
    ['Mejor Serie',                     'Sustos Ocultos de Frankelda – Temporada 1',             'México',                                    'Cinema Fantasma',                                                     'Roy Ambriz, Arturo Ambriz'],
    ['Mejor Cortometraje',              'Bestia',                                                'Chile',                                     'Trebol 3 Producciones, Maleza Estudio',                               'Hugo Covarrubias'],
    ['Mejor Cortometraje de escuela',   'Las moscas solo viven un día',                          'España',                                    'Máster en Animación UPV',                                             'Mauro Luis López'],
    ['Mejor Animación de Encargo',      '#normadegénerobinaria: Niñas',                          'Chile',                                     'Pájaro',                                                              'Bernardita Ojeda, Cristián Freire'],
    ['Mejor Animación de Videojuego',   'Greak: Memories of Azur',                               'Argentina, Ecuador, México, Venezuela',      'Navegante Entertainment',                                             'Gustavo Alcalá, Rodrigo Fernández'],
    ['Mejor Desarrollo Visual',         'Bestia',                                                'Chile',                                     'Trebol 3 Producciones, Maleza Estudio',                               'Hugo Covarrubias'],
    ['Mejor Diseño de Animación',       'Sustos Ocultos de Frankelda',                           'México',                                    'Cinema Fantasma',                                                     'Roy Ambriz, Arturo Ambriz'],
    ['Mejor Diseño de Sonido y Música', 'Bob Cuspe – Nós Não Gostamos De Gente',                 'Brasil',                                    'Coala Filmes, Cup Filmes',                                            'Cesar Cabral'],
  ],
  2023: [
    ['Mejor Largometraje',              'Nayola',                                                'Bélgica, Francia, Países Bajos, Portugal',   'Praça Filmes, JPL Films, Soil Productions',                           'José Miguel Ribeiro'],
    ['Mejor Serie',                     'Jasmine & Jambo',                                       'España',                                    'Teidees Audiovisuals, Corporació Catalana',                           'Sílvia Cortés'],
    ['Mejor Cortometraje',              'O Homem do Lixo',                                       'Portugal',                                  'Bando à Parte',                                                       'Laura Gonçalves'],
    ['Mejor Cortometraje de escuela',   'Chimborazo',                                            'Ecuador, España',                           'Universitat Politècnica de València',                                 'Keila Cepeda'],
    ['Mejor Animación de Encargo',      'Este perro está raro',                                  'Argentina',                                 'Kiosko',                                                              'Facundo Quiroga, Juan Nadalino, Sebastian García'],
    ['Mejor Animación de Videojuego',   'Endling – Extinction is Forever',                       'España',                                    'Herobeat Studios',                                                    'Javier Ramello'],
    ['Mejor Desarrollo Visual',         'Ice Merchants',                                         'Francia, Portugal, Reino Unido',             'Cola Animation, Wild Stream, Royal College Of Art',                   'João Gonzalez'],
    ['Mejor Diseño de Animación',       'Pasajero',                                              'Argentina',                                 'JPZtudio',                                                            'Juan Pablo Zaramella'],
    ['Mejor Diseño de Sonido y Música', 'Garrano',                                               'Lituania, Portugal',                        'Bap – Animation Studios, Art Shot',                                   'David Doutel, Vasco Sá'],
  ],
  2024: [
    ['Mejor Largometraje',              'Robot Dreams',                                          'España, Francia',                           'Arcadia Motion Pictures, Lokiz Films, Noodles Production',            'Pablo Berger'],
    ['Mejor Serie',                     'Jasmine & Jambo – Temporada 2',                         'España',                                    'Teidees Audiovisuals, Corporació Catalana',                           'Sílvia Cortés'],
    ['Mejor Cortometraje',              'Lulina e a Lua',                                        'Brasil',                                    'Estudio Teremim',                                                     'Marcus Vinicius Vasconcelos, Alois Di Leo'],
    ['Mejor Cortometraje de escuela',   'La Fuga',                                               'Bélgica, Colombia',                         'KASK & Conservatorium Hogeschool Gent',                               'Paola Cubillos'],
    ['Mejor Animación de Encargo',      'En las estrellas',                                      'Chile, EEUU',                               'Punkrobot Studio, Lucasfilm',                                         'Gabriel Osorio'],
    ['Mejor Videoclip',                 'I Inside the Old I Dying',                              'Chile',                                     'Diluvio, Globo Rojo, Pista B',                                        'Cristóbal León, Joaquín Cociña'],
    ['Mejor Animación de Videojuego',   'The Many Pieces of Mr Coo',                             'España',                                    'Gammera Nest',                                                        'Nacho Rodríguez'],
    ['Mejor Desarrollo Visual',         'El sueño de la Sultana',                                'Alemania, España',                          'Abano Producións, El Gatoverde',                                      'Isabel Herguera'],
    ['Mejor Diseño de Animación',       'Sopa Fria',                                             'Francia, Portugal',                         'Animais Avpl, La Clairière Ouest',                                    'Marta Monteiro'],
    ['Mejor Diseño de Sonido y Música', 'Robot Dreams',                                          'España, Francia',                           'Arcadia Motion Pictures, Lokiz Films',                                'Pablo Berger'],
  ],
  2025: [
    ['Mejor Largometraje',              'Mariposas negras',                                      'España, Panamá',                            'Ikiru Films, Tinglado Film, Anangu Grup, Tunche Films',               'David Baute'],
    ['Mejor Serie',                     'Irmão Do Jorel – Temporada 5',                          'Brasil',                                    'Copa Studio, Warner Bros Discovery',                                  'Juliano Enrico'],
    ['Mejor Cortometraje',              'Los carpinchos',                                        'Chile, Francia, Uruguay',                   'Palermo Estudio, Autour de Minuit, Pájaro',                           'Alfredo Soderguit'],
    ['Mejor Cortometraje de escuela',   'Adiós',                                                 'España, Reino Unido',                       'National Film and Television School',                                 'José Prats'],
    ['Mejor Animación de Encargo',      '47',                                                    'Brasil',                                    'Zombie Studio',                                                       'Paulo Garcia, Natalia Gouvea'],
    ['Mejor Videoclip',                 'My Way',                                                'Argentina',                                 'Rudo Company',                                                        'Jesica Bianchi'],
    ['Mejor Animación de Videojuego',   'Neva',                                                  'España',                                    'Nomada Studio',                                                       'Conrad Roset'],
    ['Mejor Desarrollo Visual',         '47',                                                    'Brasil',                                    'Zombie Studio',                                                       'Paulo Garcia, Natalia Gouvea'],
    ['Mejor Diseño de Animación',       'Buffet Paraíso',                                        'España, Francia',                           'Hampa Studio, WKND, DISNOSC',                                         'Santi Amézqueta, Héctor Zafra'],
    ['Mejor Diseño de Sonido y Música', 'Gilbert',                                               'España',                                    'Agencia Freak',                                                       'Alejandro Salueña García, Arturo Lacal Ruiz, Jordi Jiménez Xiberta'],
  ],
};

// ─── FINALISTAS ───────────────────────────────────────────────────────────────
// [categoria, titulo, pais, productora, director]
// Solo incluimos los finalistas (los que NO ganaron)

const FINALISTAS = {
  2018: [
    ['Mejor Largometraje',              'Deep',                                                  'España',                                    'The Thinklab, The Kraken Films',                                      'Julio Soto Gurpide'],
    ['Mejor Largometraje',              'El Libro de Lila',                                      'Colombia, Uruguay',                         'Fosfenos Media, Palermo Estudio',                                     'Marcela Rincón González'],
    ['Mejor Largometraje',              'Tadeo Jones 2: El Secreto del Rey Midas',               'España',                                    'Telecinco Cinema, Telefónica Studios, 4Cats Pictures, Ikiru Films',   'Enrique Gato, David Alonso'],
    ['Mejor Serie',                     'Cuentos de Viejos – Temporada 3',                       'Colombia, España',                          'HierroAnimación, Piaggiodematei, Señal Colombia',                     'Marcelo Dematei, Carlos Smith'],
    ['Mejor Serie',                     'Pocoyó – Temporada 4',                                  'España',                                    'Zinkia Entertainment',                                                'Alex Hidalgo'],
    ['Mejor Serie',                     'Puerto Papel',                                          'Chile, Brasil, Argentina, Colombia',         'Zumbastico Studios, Gloob, Señal Colombia, ANTV, Pakapaka, TVN',      'Alvaro Ceppi, Hugo Covarrubias'],
    ['Mejor Cortometraje',              'Afterwork',                                             'Ecuador, España, Perú',                     'Matte CG, Uson Studio, Apus Estudios',                                'Luis Uson, Andres Aguilar'],
    ['Mejor Cortometraje',              'Cerulia',                                               'México',                                    'Nahuyaca Films',                                                      'Sofia Carrillo González'],
    ['Mejor Cortometraje de escuela',   'Un Día en el Parque',                                   'España',                                    'ESNE, Escuela Universitaria de Diseño',                               'Diego Porral'],
    ['Mejor Cortometraje de escuela',   'We Are the Immigrants',                                 'Colombia, EEUU',                            'University of Southern California',                                   'Catalina Matamoros'],
    ['Mejor Animación de Encargo',      'Morte e Vida Uterina',                                  'Brasil',                                    'Daniel Bruson',                                                       'Daniel Bruson'],
    ['Mejor Animación de Encargo',      'Solar City: How Energy Gets to You',                    'Argentina',                                 '1stAveMachine, Tronco',                                               'Mariano Bergara, Becho Lo Bianco'],
    ['Mejor Obra Innovadora',           'Arqueoastronomía Maya: Observadores del Universo',      'México',                                    'Frutos Digitales',                                                    'Milagros Varguez'],
    ['Mejor Obra Innovadora',           'Blank Canvas',                                          'España',                                    'Albert Sherman',                                                      'Albert Sherman'],
    ['Mejor Desarrollo Visual',         'El Libro de Lila',                                      'Colombia, Uruguay',                         'Fosfenos Media, Palermo Estudio',                                     'Marcela Rincón González'],
    ['Mejor Desarrollo Visual',         'Los Aeronautas',                                        'México',                                    'IMCINE, Outik',                                                       'León Fernández'],
    ['Mejor Diseño de Animación',       'Cerulia',                                               'México',                                    'Nahuyaca Films',                                                      'Sofia Carrillo González'],
    ['Mejor Diseño de Animación',       'Tadeo Jones 2: El Secreto del Rey Midas',               'España',                                    'Telecinco Cinema, Telefónica Studios, 4Cats Pictures, Ikiru Films',   'Enrique Gato, David Alonso'],
    ['Mejor Diseño de Sonido y Música', 'Caminho dos Gigantes',                                  'Brasil',                                    'Sinlogo Animation',                                                   'Alois Di Leo'],
    ['Mejor Diseño de Sonido y Música', 'The Neverending Wall',                                  'España',                                    'Abano Producións',                                                    'Silvia Carpizo'],
  ],
  2019: [
    ['Mejor Largometraje',              'Another Day of Life',                                   'España, Polonia, Bélgica, Alemania',         'Platige Films, Kanaki Films, Walking The Dog, Wüste Film',            'Raúl de la Fuente, Damian Nenow'],
    ['Mejor Largometraje',              'Buñuel en el Laberinto de las Tortugas',                'España, Países Bajos',                      'Sygnatia Films, The Glow, Submarine B.V., Hampa Animation Studio',    'Salvador Simó'],
    ['Mejor Largometraje',              'Tito e os Pássaros',                                    'Brasil',                                    'Bits Filmes',                                                         'Gustavo Steinberg, Gabriel Bitar, André Catoto'],
    ['Mejor Serie',                     'Petit',                                                 'Chile, Argentina, Colombia',                'Pájaro, Pakapaka, Non Stop, Señal Colombia',                          'Bernardita Ojeda'],
    ['Mejor Serie',                     'Puerto Papel 2ª Temporada',                             'Chile, Brasil, Colombia, Argentina',         'Zumbastico Studios, Gloob, Señal Colombia, Pakapaka',                 'Álvaro Ceppi'],
    ['Mejor Cortometraje',              'La Noria',                                              'España',                                    'Nightwheel Pictures',                                                 'Carlos Baena'],
    ['Mejor Cortometraje',              'Soy una Tumba',                                         'España, Francia',                           'UniKo, Autour de Minuit',                                             'Khris Cembe'],
    ['Mejor Cortometraje de escuela',   'O Chapéu',                                              'Portugal',                                  'Instituto Politécnico do Cávado e do Ave',                            'Alexandra Allen'],
    ['Mejor Cortometraje de escuela',   'Reverie',                                               'México, Dinamarca',                         'The Animation Workshop – VIA University College',                     'Philip Piaget'],
    ['Mejor Animación de Encargo',      'Lorenzo Live 2018 Intro',                               'España, Italia',                            'Silly Walks Studio',                                                  'Manuele Fior, Silly Walks Studio'],
    ['Mejor Animación de Encargo',      'Partir de Cero',                                        'España',                                    'User T38, DDB',                                                       'Carlos Salgado'],
    ['Mejor Animación de Encargo',      'A Queda',                                               'Brasil',                                    'Zombie Studio',                                                       'Paulo Garcia'],
    ['Mejor Obra Innovadora',           'Bring You Home',                                        'España',                                    'Alike Studio',                                                        'Marc Terris, Xavi Terris'],
    ['Mejor Obra Innovadora',           'Mibots Playroom',                                       'España',                                    'Wise Blue Studios',                                                   'Nathalie Martinez'],
    ['Mejor Desarrollo Visual',         'Agouro',                                                'Portugal, Francia',                         'Bando À Parte, Zéro De Conduite Productions',                         'David Doutel, Vasco Sá'],
    ['Mejor Desarrollo Visual',         'La Noria',                                              'España',                                    'Nightwheel Pictures',                                                 'Carlos Baena'],
    ['Mejor Diseño de Animación',       'Lino – Uma Aventura de Sete Vidas',                     'Brasil',                                    'Startanima',                                                          'Rafael Ribas'],
    ['Mejor Diseño de Animación',       'La Noria',                                              'España',                                    'Nightwheel Pictures',                                                 'Carlos Baena'],
    ['Mejor Diseño de Sonido y Música', 'Entre Sombras',                                         'Portugal, Francia',                         'Animais, Vivement Lundi!, Um Segundo Filmes',                         'Mónica Santos, Alice Guimarães'],
    ['Mejor Diseño de Sonido y Música', 'Virus Tropical',                                        'Colombia',                                  'Timbo Estudio',                                                       'Santiago Caicedo'],
  ],
  2020: [
    ['Mejor Largometraje',              'La Gallina Turuleca',                                   'España, Argentina',                         'Tandem Films, Producions a Fonsagrada',                               'Víctor Monigote, Eduardo Gondell'],
    ['Mejor Largometraje',              'El Patalarga',                                          'Argentina',                                 'Eucalyptus Animación',                                                'Mercedes Moreira'],
    ['Mejor Largometraje',              'Relatos de Reconciliación',                             'Colombia',                                  'Carlos Santa, Rubén Monroy',                                          'Carlos Santa, Rubén Monroy'],
    ['Mejor Serie',                     'Crías – Cocodrilos',                                    'Portugal, Francia',                         'Videolotion, Praça Filmes, JPL Films',                                'Mélia Gilson, Camille Authouart'],
    ['Mejor Serie',                     'Momonsters',                                            'España',                                    'Big Bang Box, KD Toons & Games',                                      'Javier Martínez, Alberto Martínez'],
    ['Mejor Serie',                     'Pollos Espaciales del Espacio',                         'México, Reino Unido, Irlanda, Australia',    'Ánima, Cake Entertainment, Disney',                                   'Tommy Vad Flaaten, Markus Vad Flaaten'],
    ['Mejor Cortometraje',              'Purpleboy',                                             'Portugal, Bélgica, Francia',                'Bando à Parte, Rainbox Productions',                                  'Alexandre Siqueira'],
    ['Mejor Cortometraje',              'Tio Tomás a Contabilidade dos Dias',                    'Portugal, Canadá, Francia',                 'Ciclope Filmes, ONF/NFB, Les Armateurs',                              'Regina Pessoa'],
    ['Mejor Cortometraje de escuela',   'Gravedad',                                              'Bolivia, Alemania',                         'Filmakademie Baden-Württemberg',                                      'Matisse Gonzalez'],
    ['Mejor Cortometraje de escuela',   'Só sei que foi assim',                                  'Brasil',                                    'Cinema de Animação, Centro de Artes UFPEL',                           'Giovanna Muzel Da Paixao'],
    ['Mejor Animación de Encargo',      'In Your Hands',                                         'Argentina',                                 'Le Cube',                                                             'Ralph Karam'],
    ['Mejor Animación de Encargo',      'Tenemos Voz',                                           'Argentina',                                 'Juan Manuel Costa',                                                   'Juan Manuel Costa'],
    ['Mejor Animación de Videojuego',   'Shadow Brawlers',                                       'Argentina',                                 'Guazú',                                                               'Paco Álvarez, Lucía Castez, Rojo McGil'],
    ['Mejor Animación de Videojuego',   'Very Little Nightmares',                                'España',                                    'Alike Studio',                                                        'Marc Terris, Xavi Terris'],
    ['Mejor Desarrollo Visual',         'Nestor',                                                'Portugal, Reino Unido',                     'Royal College of Art',                                                'João Gonzalez'],
    ['Mejor Desarrollo Visual',         'Tio Tomás a Contabilidade dos Dias',                    'Portugal, Canadá, Francia',                 'Ciclope Filmes, ONF/NFB, Les Armateurs',                              'Regina Pessoa'],
    ['Mejor Diseño de Animación',       'Nestor',                                                'Portugal, Reino Unido',                     'Royal College of Art',                                                'João Gonzalez'],
    ['Mejor Diseño de Animación',       'Tio Tomás a Contabilidade dos Dias',                    'Portugal, Canadá, Francia',                 'Ciclope Filmes, ONF/NFB, Les Armateurs',                              'Regina Pessoa'],
    ['Mejor Diseño de Sonido y Música', 'Drawing Life',                                          'Brasil',                                    'Openthedoor Studios',                                                 'Luciano Lagares'],
    ['Mejor Diseño de Sonido y Música', 'Klaus',                                                 'España',                                    'The SPA Studios, Atresmedia Cine',                                    'Sergio Pablos'],
  ],
  2021: [
    ['Mejor Largometraje',              'El camino de Xico',                                     'México',                                    'Cristina Pineda Antúnez',                                             'Eric Cabello Díaz'],
    ['Mejor Largometraje',              'Escuela de miedo',                                      'México, Reino Unido',                       'Ánima',                                                               'Leopoldo Aguilar'],
    ['Mejor Largometraje',              'Nahuel y el libro mágico',                              'Brasil, Chile',                             'Carburadores, Levante Films, Punkrobot Animation Studio',             'Germán Acuña Delgadillo'],
    ['Mejor Serie',                     'Conta Comigo',                                          'Brasil',                                    '2DLab',                                                               'Andrés Lieban, Alessandro Monnerat'],
    ['Mejor Serie',                     'Los Zurf',                                              'España',                                    'Hampa Studio, Gallego Bros, À Punt Mèdia',                            'Alex Cervantes'],
    ['Mejor Serie',                     'Yo, Elvis Riboldi',                                     'España, Francia',                           'Peekaboo Animation, Watch Next Media, Wuji House, Insomne Animation', 'Javier Galán, Raphaël Lamarque'],
    ['Mejor Cortometraje',              'Elo',                                                   'Francia, Portugal',                         'Bando à Parte, BAP Animation Studios, Providences',                   'Alexandra Ramires'],
    ['Mejor Cortometraje',              'Roberto',                                               'España',                                    'Carmen Córdoba González',                                             'Carmen Córdoba González'],
    ['Mejor Cortometraje de escuela',   'La Bestia',                                             'Francia, México',                           'Gobelins L\'École de l\'Image',                                       'Ram Tamez, Alfredo Gerard Kuttikatt, Marlijn Van Nuenen'],
    ['Mejor Cortometraje de escuela',   'Le Retour des Vagues',                                  'Francia, México, Portugal',                 'Gobelins L\'École de l\'Image',                                       'Alejandra Guevara, Manon Cansell, Edward Kurchevsky, Francisco Moutinho, Hortense Mariano'],
    ['Mejor Animación de Encargo',      'Pixelatl 2020',                                         'México',                                    'Exodo Animation Studios',                                             'Francisco Zamudio'],
    ['Mejor Animación de Encargo',      'Stormzy - Superheroes',                                 'Argentina, Reino Unido',                    '2 Veinte',                                                            'Taz Tron Delix'],
    ['Mejor Animación de Videojuego',   'Adore',                                                 'Brasil',                                    'Cadabra Games',                                                       'Diogo Carneiro'],
    ['Mejor Animación de Videojuego',   'El niño antimateria',                                   'Argentina',                                 'Cosmic Brew Studios',                                                 'Kevin Rutolo'],
    ['Mejor Desarrollo Visual',         'Petit 2ª Temporada',                                    'Argentina, Chile, Colombia',                'Pájaro, Pakapaka, Señal Colombia, Non Stop',                          'Bernardita Ojeda'],
    ['Mejor Desarrollo Visual',         'Wayback',                                               'España',                                    'User T38',                                                            'Carlos Salgado'],
  ],
  2022: [
    ['Mejor Largometraje',              'Ainbo la guerrera del Amazonas',                        'Países Bajos, Perú',                        'Tunche Films, Cool Beans',                                            'Jose Zelada, Richard Claus'],
    ['Mejor Largometraje',              'Meu Tio José',                                          'Brasil',                                    'Origem Produtora de Conteúdo',                                        'Ducca Rios'],
    ['Mejor Largometraje',              'Valentina',                                             'España, Portugal',                          'Abano, Antaruxa, Gatoverde, Sparkle Animation',                       'Chelo Loureiro'],
    ['Mejor Serie',                     'Dos Pajaritos – Temporada 1',                           'Argentina, Colombia, Uruguay',              'Palermo Estudio, Can Can Club, Señal Colombia',                       'Alfredo Soderguit, Alejo Schettini'],
    ['Mejor Serie',                     'Zander – Temporada 1',                                  'Chile, Colombia',                           'Tres Tercios Producciones, Señal Colombia, TVN, CNTV',                'Enrique Ortega'],
    ['Mejor Cortometraje',              'Leopoldo el del bar',                                   'España',                                    'Joaquín Garralda',                                                    'Diego Porral'],
    ['Mejor Cortometraje',              'Tío',                                                   'México',                                    'Outik Animation',                                                     'Juan Medina'],
    ['Mejor Cortometraje de escuela',   'Abril',                                                 'Uruguay',                                   'Universidad ORT Uruguay',                                             'Sofia Caponnetto, Eliana Fernández'],
    ['Mejor Cortometraje de escuela',   'Lágrimas de dragón',                                    'España',                                    'U-Tad Centro Universitario de Tecnología y Arte Digital',             'Íñigo Álvarez, Antonio García Tardón'],
    ['Mejor Animación de Encargo',      'Dia de los muertos',                                    'Argentina, Brasil, México',                 'Zombie Studio',                                                       'Paulo Garcia'],
    ['Mejor Animación de Encargo',      'Las Mariposas: How Three Sisters Defied a Dictator',    'República Dominicana',                      'TED-Ed',                                                              'Tomás Pichardo'],
    ['Mejor Animación de Videojuego',   'Arrog',                                                 'Perú',                                      'Hermanos Magia, Leap Game Studios',                                   'Mateo Alayza'],
    ['Mejor Animación de Videojuego',   'Narita Boy',                                            'España',                                    'Studio Koba',                                                         'Eduardo Fornieles'],
    ['Mejor Desarrollo Visual',         'Bob Cuspe – Nós Não Gostamos De Gente',                 'Brasil',                                    'Coala Filmes, Cup Filmes',                                            'Cesar Cabral'],
    ['Mejor Desarrollo Visual',         'Sustos Ocultos de Frankelda – Temporada 1',             'México',                                    'Cinema Fantasma',                                                     'Roy Ambriz, Arturo Ambriz'],
    ['Mejor Diseño de Animación',       'Bestia',                                                'Chile',                                     'Trebol 3 Producciones, Maleza Estudio',                               'Hugo Covarrubias'],
    ['Mejor Diseño de Animación',       'Bob Cuspe – Nós Não Gostamos De Gente',                 'Brasil',                                    'Coala Filmes, Cup Filmes',                                            'Cesar Cabral'],
    ['Mejor Diseño de Sonido y Música', 'Ainbo la guerrera del Amazonas',                        'Países Bajos, Perú',                        'Tunche Films, Cool Beans',                                            'Jose Zelada, Richard Claus'],
    ['Mejor Diseño de Sonido y Música', 'Bestia',                                                'Chile',                                     'Trebol 3 Producciones, Maleza Estudio',                               'Hugo Covarrubias'],
  ],
  2023: [
    ['Mejor Largometraje',              'La otra forma',                                         'Brasil, Colombia',                          'Smith & Smith, Hierroanimación, Estúdio Giz, RTVCPlay',               'Diego Guzmán'],
    ['Mejor Largometraje',              'Tromba Trem – O Filme',                                 'Brasil',                                    'Copa Studio',                                                         'Zé Brandão'],
    ['Mejor Largometraje',              'Unicorn Wars',                                          'España, Francia',                           'Abano Producións, UniKo, Autour de Minuit, Schmuby Productions',      'Alberto Vázquez'],
    ['Mejor Serie',                     'La Orquestita',                                         'Argentina, Colombia, España, Perú, Uruguay', 'Señal Colombia, CPSE, Chucho TV, Apus Estudio, Mago Production, RTVE', 'Juan Carve'],
    ['Mejor Serie',                     'Petit – 3T',                                            'Argentina, Chile, Colombia, España',         'Pájaro, RTVE, TV3, WKND, Pakapaka, Señal Colombia',                  'Bernardita Ojeda'],
    ['Mejor Serie',                     'Polinopolis',                                           'Argentina, España, Francia, México',         'Mago Production, Apapacho Films, Godo Studio, RTVE, Televisió de Catalunya', 'María Antolini, Martin Guido'],
    ['Mejor Cortometraje',              'Ice Merchants',                                         'Francia, Portugal, Reino Unido',             'Cola Animation, Wild Stream, Royal College Of Art',                   'João Gonzalez'],
    ['Mejor Cortometraje',              'Pasajero',                                              'Argentina',                                 'JPZtudio',                                                            'Juan Pablo Zaramella'],
    ['Mejor Cortometraje de escuela',   'Carlos Montaña',                                        'Argentina',                                 'Universidad Nacional de Córdoba',                                     'Ita Romero'],
    ['Mejor Cortometraje de escuela',   'Papirola',                                              'España',                                    'Universitat Politècnica de València',                                 'Fabián Molinaro'],
    ['Mejor Animación de Encargo',      'Despertar juntas',                                      'Uruguay',                                   'Claudia Prezioso',                                                    'Claudia Prezioso'],
    ['Mejor Animación de Encargo',      'El Arte de Recuperarte',                                'Argentina',                                 'Dante Zaballa',                                                       'Dante Zaballa'],
    ['Mejor Animación de Videojuego',   'Atuel',                                                 'Argentina',                                 'Matajuegos',                                                          'Santiago Franzani'],
    ['Mejor Animación de Videojuego',   'Han\'yo',                                               'España',                                    'Hangover Studios – Digipen Institute of Technology Europe Bilbao',   'Hangover Studios'],
    ['Mejor Desarrollo Visual',         'Nayola',                                                'Bélgica, Francia, Países Bajos, Portugal',   'Praça Filmes, JPL Films, Soil Productions, Il Luster, Luna Blue Filmes', 'José Miguel Ribeiro'],
    ['Mejor Desarrollo Visual',         'Pasajero',                                              'Argentina',                                 'JPZtudio',                                                            'Juan Pablo Zaramella'],
    ['Mejor Diseño de Animación',       'O Homem do Lixo',                                       'Portugal',                                  'Bando à Parte',                                                       'Laura Gonçalves'],
    ['Mejor Diseño de Animación',       'Ice Merchants',                                         'Francia, Portugal, Reino Unido',             'Cola Animation, Wild Stream, Royal College Of Art',                   'João Gonzalez'],
    ['Mejor Diseño de Sonido y Música', 'O Homem do Lixo',                                       'Portugal',                                  'Bando à Parte',                                                       'Laura Gonçalves'],
    ['Mejor Diseño de Sonido y Música', 'Ice Merchants',                                         'Francia, Portugal, Reino Unido',             'Cola Animation, Wild Stream, Royal College Of Art',                   'João Gonzalez'],
    ['Mejor Diseño de Sonido y Música', 'Pasajero',                                              'Argentina',                                 'JPZtudio',                                                            'Juan Pablo Zaramella'],
  ],
  2024: [
    ['Mejor Largometraje',              'El Paraíso',                                            'Argentina',                                 'FS Entertainment, Nomad Cine, EOK Producciones, Mcfly Studio',        'Fernando Sirianni, Federico Breser'],
    ['Mejor Largometraje',              'Hanna y los monstruos',                                 'España',                                    'Mr. Miyagi Films, Doce Entertainment',                                'Lorena Ares'],
    ['Mejor Largometraje',              'El sueño de la Sultana',                                'Alemania, España',                          'Abano Producións, El Gatoverde Producciones, UniKo, Sultana Films',   'Isabel Herguera'],
    ['Mejor Serie',                     'O Hotel Silvestre de Ana Flor – Temporada 1',           'Brasil',                                    '2DLab',                                                               'Andrés Lieban, Alessandro Monnerat'],
    ['Mejor Serie',                     'O Menino Maluquinho – Temporada 2',                     'Brasil',                                    'Chatrone',                                                            'Michele Massagli, Beto Gomez'],
    ['Mejor Serie',                     'Pobre Diablo – Temporada 1',                            'España',                                    'Buendía Estudios, Rokyn Animation, HBO Max',                          'Miguel Esteban'],
    ['Mejor Serie',                     'Sex Symbols – Temporada 1',                             'España',                                    'TV ON Producciones, Admirable Films',                                 'Paloma Mora Iñesta, Alex Cervantes'],
    ['Mejor Cortometraje',              'Quase me Lembro',                                       'Portugal',                                  'Bap Animation Studio',                                                'Miguel Lima, Dimitrije Mihajlovic'],
    ['Mejor Cortometraje',              'To Bird or Not to Bird',                                'España',                                    'UniKo, Abano Producións',                                             'Martín Romero'],
    ['Mejor Cortometraje de escuela',   'Carcinización',                                         'Brasil',                                    'Universidade Federal de Pelotas',                                     'Denis Souza'],
    ['Mejor Cortometraje de escuela',   'Shell Shock',                                           'México',                                    'Escena, Escuela de Animación y Artes Creativas',                      'Emilio Ramirez Castro'],
    ['Mejor Animación de Encargo',      'Sith',                                                  'EEUU, España',                              'El Guiri Studios',                                                    'Rodrigo Blaas'],
    ['Mejor Animación de Encargo',      'Somos pajaritos',                                       'México',                                    'Médicos Sin Fronteras, Hola Combo',                                   'Gabriela Badillo'],
    ['Mejor Videoclip',                 'All the Best',                                          'Argentina',                                 'Rudo Company',                                                        'Pablo Roldan'],
    ['Mejor Videoclip',                 'O Futuro que me Alcance',                               'Brasil',                                    'Nat Grego',                                                           'Nat Grego'],
    ['Mejor Animación de Videojuego',   'American Arcadia',                                      'España',                                    'Out of the Blue Games',                                               'Tatiana Delgado Yunquera'],
    ['Mejor Animación de Videojuego',   'Anyu',                                                  'España',                                    'Antipodas Studio – DigiPen Europe-Bilbao',                            'Antipodas Studio'],
    ['Mejor Desarrollo Visual',         'Robot Dreams',                                          'España, Francia',                           'Arcadia Motion Pictures, Lokiz Films, Noodles Production',            'Pablo Berger'],
    ['Mejor Desarrollo Visual',         'Sith',                                                  'EEUU, España',                              'El Guiri Studios',                                                    'Rodrigo Blaas'],
    ['Mejor Diseño de Animación',       'En las estrellas',                                      'Chile, EEUU',                               'Punkrobot Studio, Lucasfilm',                                         'Gabriel Osorio'],
    ['Mejor Diseño de Animación',       'Lulina e a Lua',                                        'Brasil',                                    'Estudio Teremim',                                                     'Marcus Vinicius Vasconcelos, Alois Di Leo'],
    ['Mejor Diseño de Sonido y Música', 'Jasmine & Jambo – Temporada 2',                         'España',                                    'Teidees Audiovisuals, CCMA',                                          'Sílvia Cortés'],
    ['Mejor Diseño de Sonido y Música', 'Lulina e a Lua',                                        'Brasil',                                    'Estudio Teremim',                                                     'Marcus Vinicius Vasconcelos, Alois Di Leo'],
  ],
  2025: [
    ['Mejor Largometraje',              'Buffalo Kids',                                          'España',                                    'Atresmedia Cine, 4Cats Pictures, Little Big Boy, Anangu Grup',        'Pedro Solís, Juan Jesús García "Galo"'],
    ['Mejor Largometraje',              'Dispararon al pianista',                                 'España, Francia, Países Bajos, Perú, Portugal', 'They Shot The Piano Player, Fernando Trueba PC, Les Films d\'Ici Méditerranée', 'Javier Mariscal, Fernando Trueba'],
  ],
};

// ─── HELPERS ──────────────────────────────────────────────────────────────────

function slugify(text) {
  return text.toString().toLowerCase()
    .normalize('NFD').replace(/[\u0300-\u036f]/g, '')
    .replace(/[^a-z0-9]+/g, '-').replace(/^-|-$/g, '');
}

const ordinals = ['','1ª','2ª','3ª','4ª','5ª','6ª','7ª','8ª','9ª','10ª'];

// ─── UPLOAD ───────────────────────────────────────────────────────────────────

async function main() {
  let total = 0;

  // PASO 1: Crear todas las ediciones primero
  process.stdout.write('── Paso 1: creando ediciones...\n');
  for (const ed of EDICIONES) {
    const edId = `edicion-${ed.year}`;
    await client.createOrReplace({
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
      ganadores: [],
    });
    process.stdout.write(`  ✓ Edición ${ed.year}\n`);
    total++;
  }

  // PASO 2a: Crear ganadores
  process.stdout.write('\n── Paso 2a: creando ganadores...\n');
  for (const ed of EDICIONES) {
    const edId = `edicion-${ed.year}`;
    for (const [cat, titulo, pais, productora, director] of (GANADORES[ed.year] || [])) {
      const gId = `ganador-${ed.year}-${slugify(cat)}`;
      await client.createOrReplace({
        _id:        gId,
        _type:      'ganador',
        categoria:  cat,
        tituloObra: { es: titulo, pt: '', en: '' },
        pais,
        productora,
        director:   director || '',
        edicion:    { _type: 'reference', _ref: edId },
      });
      process.stdout.write(`  ✓ ${ed.year} · ${cat}\n`);
      total++;
    }
  }

  // PASO 2b: Crear finalistas
  process.stdout.write('\n── Paso 2b: creando finalistas...\n');
  for (const ed of EDICIONES) {
    const edId = `edicion-${ed.year}`;
    const lista = FINALISTAS[ed.year] || [];
    // índice por categoría para generar IDs únicos
    const catCount = {};
    for (const [cat, titulo, pais, productora, director] of lista) {
      catCount[cat] = (catCount[cat] || 0) + 1;
      const nId = `finalista-${ed.year}-${slugify(cat)}-${catCount[cat]}`;
      await client.createOrReplace({
        _id:        nId,
        _type:      'nominado',
        categoria:  cat,
        tituloObra: { es: titulo, pt: '', en: '' },
        pais,
        productora,
        director:   director || '',
        esGanador:  false,
        edicion:    { _type: 'reference', _ref: edId },
      });
      process.stdout.write(`  ✓ ${ed.year} · ${cat}: ${titulo}\n`);
      total++;
    }
  }

  // PASO 3: Enlazar ganadores a ediciones
  process.stdout.write('\n── Paso 3: enlazando ganadores a ediciones...\n');
  for (const ed of EDICIONES) {
    const edId = `edicion-${ed.year}`;
    const refs = (GANADORES[ed.year] || []).map(([cat]) => {
      const gId = `ganador-${ed.year}-${slugify(cat)}`;
      return { _type: 'reference', _ref: gId, _key: gId };
    });
    await client.patch(edId).set({ ganadores: refs }).commit();
    process.stdout.write(`  ✓ Edición ${ed.year} — ${refs.length} ganadores enlazados\n`);
  }

  process.stdout.write(`\n🎉 Listo: ${total} documentos subidos a Sanity.\n`);
}

main().catch(err => {
  console.error('❌ Error:', err.message);
  process.exit(1);
});
