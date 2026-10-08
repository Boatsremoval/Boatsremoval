import React from 'react';
import { renderToString } from 'react-dom/server';
import App from './App.jsx';
import { SITE } from './data/site.js';
import { cityByPath } from './data/cities.js';
import { metaFor, ALL_PATHS, FEATURED, SERVICE_BY_PATH, cityContent } from './content.js';
import { SERVICES } from './data/services.js';

export { ALL_PATHS };

const esc = (s) =>
  String(s).replace(/&/g, '&amp;').replace(/"/g, '&quot;').replace(/</g, '&lt;').replace(/>/g, '&gt;');
const json = (o) => JSON.stringify(o).replace(/</g, '\\u003c');

function faqFor(path) {
  if (SERVICE_BY_PATH[path]) return SERVICE_BY_PATH[path].faq;
  if (cityByPath[path]) return cityContent(cityByPath[path]).faq;
  return null;
}

function schemaFor(path, meta) {
  const url = SITE.url + (path === '/' ? '/' : path);
  const business = {
    '@type': 'LocalBusiness',
    '@id': SITE.url + '/#business',
    name: SITE.name,
    url: SITE.url + '/',
    telephone: SITE.tel,
    areaServed: { '@type': 'State', name: 'Florida' },
    description: 'Removal of junk, salvage and sunken boats throughout Florida.',
    makesOffer: SERVICES.map((s) => ({
      '@type': 'Offer',
      itemOffered: { '@type': 'Service', name: s.name, url: SITE.url + s.path },
    })),
  };
  const graph = [business];

  const city = cityByPath[path] || (FEATURED[path] && FEATURED[path].city);
  const service = SERVICE_BY_PATH[path];
  if (city || service) {
    graph.push({
      '@type': 'Service',
      name: service ? service.name : `Boat removal in ${city.name}, FL`,
      serviceType: 'Boat removal',
      provider: { '@id': SITE.url + '/#business' },
      areaServed: city ? { '@type': 'City', name: `${city.name}, Florida` } : { '@type': 'State', name: 'Florida' },
      url,
    });
  }
  if (path !== '/') {
    graph.push({
      '@type': 'BreadcrumbList',
      itemListElement: [
        { '@type': 'ListItem', position: 1, name: 'Home', item: SITE.url + '/' },
        { '@type': 'ListItem', position: 2, name: meta.h1 || meta.title, item: url },
      ],
    });
  }
  const faq = faqFor(path);
  if (faq) {
    graph.push({
      '@type': 'FAQPage',
      mainEntity: faq.map(([q, a]) => ({ '@type': 'Question', name: q, acceptedAnswer: { '@type': 'Answer', text: a } })),
    });
  }
  return { '@context': 'https://schema.org', '@graph': graph };
}

export function render(path) {
  const html = renderToString(<App path={path} />);
  const meta = metaFor(path);
  if (!meta) {
    return {
      html,
      head: `<title>Page not found | ${SITE.name}</title>\n<meta name="robots" content="noindex">`,
    };
  }
  const url = SITE.url + (path === '/' ? '/' : path);
  const head = [
    `<title>${esc(meta.title)}</title>`,
    `<meta name="description" content="${esc(meta.description)}">`,
    `<link rel="canonical" href="${url}">`,
    `<meta property="og:type" content="website">`,
    `<meta property="og:site_name" content="${SITE.name}">`,
    `<meta property="og:title" content="${esc(meta.title)}">`,
    `<meta property="og:description" content="${esc(meta.description)}">`,
    `<meta property="og:url" content="${url}">`,
    `<meta name="twitter:card" content="summary">`,
    `<script type="application/ld+json">${json(schemaFor(path, meta))}</script>`,
  ].join('\n    ');
  return { html, head };
}
