// src/lib/queries.ts
// Todas las queries GROQ del proyecto
// Importar: import { queries } from '@lib/queries';

import { client } from './sanity';

// ── Tipos base ─────────────────────────────────────
export type Lang = 'es' | 'pt' | 'en';

export interface I18nField {
  es: string;
  pt: string;
  en: string;
}

// Helper para extraer el campo del idioma correcto
export function t(field: I18nField, lang: Lang): string {
  return field?.[lang] || field?.es || '';
}

// ── Queries ────────────────────────────────────────

// Edición actual (la marcada como esActual en Sanity)
export async function getEdicionActual() {
  return client.fetch(`
    *[_type == "edicion" && esActual == true][0] {
      _id, year, numero, titulo, slug, fechaInicio, fechaFin, sede,
      heroImage, publicada
    }
  `);
}

// Todas las ediciones (para homepage y listado)
export async function getEdiciones() {
  return client.fetch(`
    *[_type == "edicion"] | order(year desc) {
      _id, year, numero, titulo, slug, fechaInicio, fechaFin, sede,
      heroImage, publicada
    }
  `);
}

// Una edición por año (para página de edición)
export async function getEdicion(year: number) {
  return client.fetch(`
    *[_type == "edicion" && year == $year][0] {
      _id, year, numero, titulo, slug, fechaInicio, fechaFin, sede,
      heroImage, videoResumen, sinopsis,
      "ganadores": ganadores[]-> { _id, categoria, tituloObra, pais, productora, director, imagen },
      "nominados": nominados[]-> { _id, categoria, tituloObra, pais, productora, director },
      "jurado": jurado[]-> { _id, nombre, cargo, empresa, pais, foto, tipo },
      "foro": foro-> { descripcion, nReuniones, nProfesionales, nPaises, fechas, urlInscripcion },
      publicada
    }
  `, { year });
}

// Slugs de todas las ediciones (para getStaticPaths)
export async function getEdicionSlugs() {
  return client.fetch(`
    *[_type == "edicion" && publicada == true] { year }
  `);
}

// Últimas noticias (para homepage)
export async function getNoticias(limit = 5) {
  return client.fetch(`
    *[_type == "noticia" && publicada == true] | order(fecha desc) [0...$limit] {
      _id, titulo, slug, extracto, imagen, categoria, fecha
    }
  `, { limit });
}

// Una noticia por slug
export async function getNoticia(slug: string) {
  return client.fetch(`
    *[_type == "noticia" && slug.current == $slug][0] {
      _id, titulo, extracto, cuerpo, imagen, categoria, fecha,
      "edicion": edicion-> { year, titulo }
    }
  `, { slug });
}

// Slugs de noticias (para getStaticPaths)
export async function getNoticiaSlugs() {
  return client.fetch(`
    *[_type == "noticia" && publicada == true] { "slug": slug.current }
  `);
}

// Ganadores de una edición
export async function getGanadores(edicionId: string) {
  return client.fetch(`
    *[_type == "ganador" && edicion._ref == $edicionId] | order(categoria asc) {
      _id, categoria, tituloObra, pais, productora, director, imagen, sinopsis, trailer
    }
  `, { edicionId });
}

// Nominados de una categoría
export async function getNominadosByCategoria(categoria: string, edicionId: string) {
  return client.fetch(`
    *[_type == "nominado" && categoria == $categoria && edicion._ref == $edicionId] {
      _id, tituloObra, pais, productora, director, imagen, esGanador
    }
  `, { categoria, edicionId });
}

// Patrocinadores activos
export async function getPatrocinadores(edicionYear?: number) {
  const filter = edicionYear
    ? `*[_type == "patrocinador" && $edicionYear in ediciones[]->year]`
    : `*[_type == "patrocinador"]`;
  return client.fetch(`
    ${filter} | order(nivel asc) {
      _id, nombre, logo, url, nivel, tipo
    }
  `, edicionYear ? { edicionYear } : {});
}

// Proyectos Quirino Lab
export async function getQuirinoLab(edicionYear?: number) {
  const filter = edicionYear
    ? `*[_type == "quirinoLab" && edicion->year == $edicionYear]`
    : `*[_type == "quirinoLab"]`;
  return client.fetch(`
    ${filter} | order(_createdAt desc) {
      _id, tituloProyecto, estudio, pais, imagen, descripcion, estado,
      "edicion": edicion-> { year }
    }
  `, edicionYear ? { edicionYear } : {});
}

// Palmarés histórico: todas las ediciones con ganadores y finalistas
export async function getPalmares() {
  return client.fetch(`
    *[_type == "edicion" && publicada == true] | order(year desc) {
      _id, year, numero, sede,
      "ganadores": ganadores[]-> | order(categoria asc) {
        _id, categoria, tituloObra, pais, productora, director
      },
      "finalistas": *[_type == "nominado" && edicion._ref == ^._id && esGanador == false] | order(categoria asc) {
        _id, categoria, tituloObra, pais, productora, director
      }
    }
  `);
}

// Página estática por slug
export async function getPagina(slug: string) {
  return client.fetch(`
    *[_type == "pagina" && slug.current == $slug][0] {
      _id, titulo, cuerpo, metaTitulo, metaDesc, ogImagen
    }
  `, { slug });
}
