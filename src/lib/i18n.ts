// src/lib/i18n.ts
// Helpers de internacionalización ES / PT / EN

export type Lang = 'es' | 'pt' | 'en';
export const LANGS: Lang[] = ['es', 'pt', 'en'];
export const DEFAULT_LANG: Lang = 'es';

// Etiquetas de UI estáticas — no vienen de Sanity
export const ui = {
  es: {
    'nav.premios':    'Premios',
    'nav.industria':  'Industria',
    'nav.ediciones':  'Ediciones',
    'nav.palmares':   'Palmarés',
    'nav.prensa':     'Prensa',
    'nav.cta':        'Inscríbete 2026',
    'hero.credit':    'Auditorio Adán Martín, Santa Cruz de Tenerife',
    'cat.label':      'Categorías',
    'cat.verTodas':   'Ver todas →',
    'news.verTodas':  'Ver todas las noticias →',
    'footer.copy':    '© 2026 Premios Quirino · Animación Iberoamericana',
    'edicion.activa': 'Convocatoria abierta',
    'col.edicion':    'Edición',
    'col.sede':       'Sede',
    'col.num':        'Nº',
    'col.categoria':  'Categoría',
    'col.tipo':       'Tipo',
    'col.fecha':      'Fecha',
    'col.area':       'Área',
    'col.noticia':    'Noticia',
    'industria.label': 'Industria',
    'industria.verMas': 'Ver más →',
    'ediciones.label': 'Ediciones',
    'patrocinadores.label': 'Patrocinadores',
    'col.estadistica': 'Estadística',
    'col.programa': 'Programa',
  },
  pt: {
    'nav.premios':    'Prémios',
    'nav.industria':  'Indústria',
    'nav.ediciones':  'Edições',
    'nav.palmares':   'Palmarés',
    'nav.prensa':     'Imprensa',
    'nav.cta':        'Inscreva-se 2026',
    'hero.credit':    'Auditório Adán Martín, Santa Cruz de Tenerife',
    'cat.label':      'Categorias',
    'cat.verTodas':   'Ver todas →',
    'news.verTodas':  'Ver todas as notícias →',
    'footer.copy':    '© 2026 Prémios Quirino · Animação Ibero-americana',
    'edicion.activa': 'Candidaturas abertas',
    'col.edicion':    'Edição',
    'col.sede':       'Sede',
    'col.num':        'Nº',
    'col.categoria':  'Categoria',
    'col.tipo':       'Tipo',
    'col.fecha':      'Data',
    'col.area':       'Área',
    'col.noticia':    'Notícia',
    'industria.label': 'Indústria',
    'industria.verMas': 'Saber mais →',
    'ediciones.label': 'Edições',
    'patrocinadores.label': 'Patrocinadores',
    'col.estadistica': 'Estatística',
    'col.programa': 'Programa',
  },
  en: {
    'nav.premios':    'Awards',
    'nav.industria':  'Industry',
    'nav.ediciones':  'Editions',
    'nav.palmares':   'Winners',
    'nav.prensa':     'Press',
    'nav.cta':        'Submit 2026',
    'hero.credit':    'Adán Martín Auditorium, Santa Cruz de Tenerife',
    'cat.label':      'Categories',
    'cat.verTodas':   'View all →',
    'news.verTodas':  'View all news →',
    'footer.copy':    '© 2026 Quirino Awards · Ibero-American Animation',
    'edicion.activa': 'Open submissions',
    'col.edicion':    'Edition',
    'col.sede':       'Location',
    'col.num':        'No.',
    'col.categoria':  'Category',
    'col.tipo':       'Type',
    'col.fecha':      'Date',
    'col.area':       'Area',
    'col.noticia':    'News',
    'industria.label': 'Industry',
    'industria.verMas': 'Learn more →',
    'ediciones.label': 'Editions',
    'patrocinadores.label': 'Sponsors',
    'col.estadistica': 'Stats',
    'col.programa': 'Programme',
  },
} as const;

type UIKey = keyof typeof ui.es;

// Función principal de traducción
export function useTranslations(lang: Lang) {
  return function t(key: UIKey): string {
    return ui[lang]?.[key] || ui[DEFAULT_LANG][key] || key;
  };
}

// Obtener idioma desde la URL
export function getLangFromUrl(url: URL): Lang {
  const [, lang] = url.pathname.split('/');
  if (lang && LANGS.includes(lang as Lang)) return lang as Lang;
  return DEFAULT_LANG;
}

// Construir URL para cambio de idioma
export function getLocalizedUrl(pathname: string, targetLang: Lang): string {
  // Por ahora redirección simple — en producción gestionar prefijos /es/ /pt/ /en/
  return `/${targetLang}${pathname}`;
}
