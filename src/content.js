import { SITE } from './data/site.js';
import { CITIES, cityByPath, citiesInCounty } from './data/cities.js';
import { SERVICES } from './data/services.js';

// Small stable hash so each city always gets the same wording variant
const hash = (s) => [...s].reduce((h, c) => (h * 31 + c.charCodeAt(0)) >>> 0, 7);
const pick = (arr, key, salt = '') => arr[hash(key + salt) % arr.length];
const listJoin = (a) => (a.length < 2 ? a.join('') : a.slice(0, -1).join(', ') + ' and ' + a[a.length - 1]);

const INTROS = [
  (c) => `Have a boat in ${c.name} that you are done with? ${SITE.name} provides boat removal and boat disposal throughout ${c.region.name}, and ${c.name} is part of our regular service area.`,
  (c) => `If an old boat is taking up space at your ${c.name} home, dock or storage spot, one phone call is all it takes to get it gone. We handle boat removal and disposal across ${c.region.name}, including ${c.name}.`,
  (c) => `Boat owners in ${c.name} call us when a boat has stopped being worth the trouble. Our boat removal service covers pickup, dismantling and boat disposal, so you do not have to coordinate anything else.`,
  (c) => `${c.name} is one of the ${c.region.area} communities where we provide junk, salvage and sunken boat removal and disposal. Whether it is on a trailer, a lift or in the water, tell us where it is and we will plan the job.`,
  (c) => `Getting rid of a boat in ${c.name} should not mean weeks of listing it, calling scrapyards and arranging a tow. We do the whole job, from boat removal to boat disposal, for owners across ${c.region.name}.`,
  (c) => `From driveways to docks, we handle boat removal and disposal for boats of every size in ${c.name} and the surrounding parts of ${c.region.name}. Call ${SITE.phone} to describe your boat and get a quote over the phone.`,
];

const SITUATIONS = [
  'an HOA or code enforcement notice about a boat in the driveway',
  'a boat that has not run in years and keeps costing storage fees',
  'a storm-damaged boat sitting on a dock, lift or lawn',
  'a boat inherited with a house or from a family member',
  'a project boat that is never going to be finished',
  'a boat swamped or sunk at the dock',
  'a marina asking you to move a vessel that no longer runs',
  'a trailer and boat both past saving',
];

const DISPOSAL = [
  (c) => `Removing the boat is only half the job. Fiberglass hulls cannot just go in a dumpster, and many scrapyards will not take them. When we pick up a boat in ${c.name}, we also handle the boat disposal: dismantling it, separating metal, engines and other recyclable parts where possible, and taking the rest to facilities that accept it.`,
  (c) => `Many ${c.name} owners ask how to dispose of a boat properly. Our answer is that you do not have to figure it out. Boat disposal is included with every removal we do: the vessel is taken apart, usable and recyclable materials are separated where possible, and the remaining materials are disposed of at facilities that accept them.`,
  (c) => `Getting a boat off your property is one thing; getting rid of it properly is another. Our boat removal in ${c.name} always includes disposal. We dismantle the boat, separate metal and engines for recycling where possible, and handle the rest, so nothing ends up back in your hands.`,
];

const CLOSERS = [
  (c) => `Call ${SITE.phone} with the boat's size, condition and location in ${c.name}, and we will give you a quote and a date.`,
  (c) => `The fastest way to get started is a call to ${SITE.phone}. Tell us about the boat and where it sits in ${c.name}.`,
  (c) => `Ready to get rid of it? Call ${SITE.phone} for a quote on boat removal and disposal in ${c.name}.`,
];

function lakeOrWaters(c) {
  if (c.lake) return 'Lake Okeechobee and the canals around it';
  return listJoin(c.region.waters);
}

export function cityContent(c) {
  const situations = [0, 1, 2].map((i) => SITUATIONS[(hash(c.slug) + i * 3) % SITUATIONS.length]);
  const neighbors = citiesInCounty(c.county).filter((n) => n.slug !== c.slug);
  const start = hash(c.slug) % Math.max(neighbors.length, 1);
  const nearby = [...neighbors.slice(start), ...neighbors.slice(0, start)].slice(0, 8);

  return {
    title: `Boat Removal & Disposal in ${c.name}, FL | ${SITE.name}`,
    description: `Boat removal and boat disposal in ${c.name}, FL. Junk, damaged and sunken boats hauled away and disposed of. Call ${SITE.phone}.`,
    h1: `Boat Removal & Disposal in ${c.name}, FL`,
    intro: pick(INTROS, c.slug)(c),
    local: {
      h: `Boats around ${c.name}`,
      p: `${c.name} sits in ${c.region.name}, where boats are used on ${lakeOrWaters(c)}. ${c.region.setting}`,
    },
    situations: {
      h: `Common reasons ${c.name} owners call us`,
      items: situations,
    },
    disposal: {
      h: `Boat disposal in ${c.name}`,
      p: pick(DISPOSAL, c.slug, 'd')(c),
    },
    access: { h: `How a ${c.name} boat removal is planned`, p: c.region.access },
    closer: pick(CLOSERS, c.slug, 'x')(c),
    nearby,
    faq: [
      [`How much does boat removal cost in ${c.name}?`, `It depends on the boat's size and condition, whether it is on land or in the water, and how easy it is to reach. Call ${SITE.phone} with the details for a quote.`],
      [`What happens to my boat after it is removed from ${c.name}?`, `We take care of boat disposal for you. The boat is dismantled, metal and engines are separated for recycling where possible, and the rest goes to facilities that accept it. You do not need to arrange anything.`],
      [`Do you remove boats from the water in ${c.name}?`, c.lake
        ? `Yes. Along with boats on land, we handle boats in canals and at docks near the lake. Describe where the boat is when you call.`
        : `Yes. We remove boats from docks, lifts and canals as well as from driveways and storage lots. Describe where the boat is when you call.`],
      [`How do I get a quote?`, `Call ${SITE.phone} with the boat's type, size and condition and where it sits in ${c.name}. We can usually price it on the same call.`],
    ],
  };
}

// Longer, stand-alone pages for the two main cities in the sitemap
export const FEATURED = {
  '/pompano-beach-boat-removal': {
    city: cityByPath['/boat-removal-fl-pompano-beach'],
    title: `Pompano Beach Boat Removal & Disposal | ${SITE.name}`,
    description: `Pompano Beach boat removal and boat disposal for junk, storm-damaged and sunken boats. Canal homes, docks, lifts and driveways. Call ${SITE.phone}.`,
    h1: 'Pompano Beach Boat Removal & Disposal',
    intro:
      'Pompano Beach has a long stretch of Intracoastal frontage, a busy inlet nearby and canal neighborhoods where a boat behind the house is normal. That also means a steady supply of boats that have stopped running, been damaged in storms or simply outlived their owners\' interest. We remove them.',
    sections: [
      { h: 'Canal homes and docks', p: 'Many Pompano Beach removals start at a private dock or lift. We plan around canal width, bridges and the condition of the dock before the job, so the removal is quick and the seawall and dock are not damaged.' },
      { h: 'Driveways and storage lots', p: 'If the boat is on a trailer in your driveway or at a storage facility, the job is usually simple. We can often take the trailer too.' },
      { h: 'Boat disposal included', p: 'Every Pompano Beach boat removal includes disposal. We dismantle the boat, separate metal and engines for recycling where possible, and take the rest to facilities that accept it. You do not have to find a scrapyard or pay a dump fee yourself.' },
      { h: 'Boats that have sunk or been damaged', p: 'Swamped boats in canals and storm-damaged boats left on docks or lawns are handled as salvage jobs. Call as soon as you can, since these situations rarely get easier with time.' },
    ],
  },
  '/tampa-boat-removal': {
    city: cityByPath['/boat-removal-fl-tampa'],
    title: `Tampa Boat Removal & Disposal | ${SITE.name}`,
    description: `Tampa boat removal and boat disposal for old, damaged and sunken boats across the city and Hillsborough County. Call ${SITE.phone}.`,
    h1: 'Tampa Boat Removal & Disposal',
    intro:
      'From South Tampa waterfront homes to suburban driveways and the marinas along Tampa Bay and the Hillsborough River, there are a lot of boats in Tampa that nobody uses anymore. We remove them and take care of disposal, so you can get the space back.',
    sections: [
      { h: 'Waterfront and marina removals', p: 'Boats at private docks, on lifts or in marina slips need a removal plan that fits the location. We talk through access with you and, if needed, with the marina, before scheduling.' },
      { h: 'Neighborhood and yard removals', p: 'Across Tampa\'s neighborhoods, the most common call is a boat on a trailer that has sat for years. We remove the boat, and usually the trailer, in one visit.' },
      { h: 'Boat disposal in Tampa', p: 'Our Tampa boat removal service includes proper boat disposal. Boats are taken apart, recyclable metal and engines are separated where possible, and the remaining materials go to facilities that accept them.' },
      { h: 'After storms', p: 'Tampa Bay storms can leave boats damaged, displaced or sunk. Salvage removals are planned around how and where the boat ended up.' },
    ],
  },
};

export const SERVICE_BY_PATH = Object.fromEntries(SERVICES.map((s) => [s.path, s]));

// Every URL the site serves, in sitemap order
export const ALL_PATHS = [
  '/', '/quote', '/about', '/services', '/vessel',
  ...SERVICES.map((s) => s.path),
  ...Object.keys(FEATURED),
  ...CITIES.map((c) => c.path),
];

export const STATIC_META = {
  '/': {
    title: `Boat Removal & Boat Disposal in Florida | ${SITE.name}`,
    description: `Florida boat removal and boat disposal for junk, abandoned, storm-damaged and sunken boats. Yards, docks, lifts and canals. Call ${SITE.phone}.`,
  },
  '/quote': {
    title: `Get a Boat Removal & Disposal Quote | ${SITE.name}`,
    description: `Call ${SITE.phone} for a boat removal and disposal quote. Here is what to have ready so we can price your job quickly.`,
  },
  '/about': {
    title: `About ${SITE.name} | Florida Boat Removal & Disposal`,
    description: `${SITE.name} provides boat removal and boat disposal throughout Florida. Learn how we work.`,
  },
  '/services': {
    title: `Boat Removal & Disposal Services in Florida | ${SITE.name}`,
    description: `Junk, salvage and sunken boat removal plus boat disposal throughout Florida. Call ${SITE.phone}.`,
  },
  '/vessel': {
    title: `Types of Boats We Remove & Dispose Of | ${SITE.name}`,
    description: 'Boat removal and disposal for center consoles, cabin cruisers, sailboats, pontoons, houseboats, jet skis and trailers in Florida.',
  },
};

export function metaFor(path) {
  if (STATIC_META[path]) return STATIC_META[path];
  if (SERVICE_BY_PATH[path]) return SERVICE_BY_PATH[path];
  if (FEATURED[path]) return FEATURED[path];
  if (cityByPath[path]) return cityContent(cityByPath[path]);
  return null;
}
