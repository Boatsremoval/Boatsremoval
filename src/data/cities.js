import { REGIONS } from './regions.js';

// Cities by county. Each becomes /boat-removal-fl-<slug>
const BY_COUNTY = {
  'miami-dade': 'miami hialeah miami-beach coral-gables doral homestead kendall north-miami miami-gardens sunny-isles-beach cutler-bay aventura palmetto-bay pinecrest miami-lakes',
  broward: 'coconut-creek cooper-city coral-springs dania-beach deerfield-beach fort-lauderdale hallandale-beach hollywood lauderdale-lakes lauderhill lighthouse-point margate miramar north-lauderdale oakland-park parkland pembroke-pines plantation pompano-beach sunrise tamarac weston wilton-manors davie hillsboro-beach lauderdale-by-the-sea pembroke-park southwest-ranches lazy-lake sea-ranch-lakes broadview-park',
  'palm-beach': 'atlantis belle-glade boca-raton boynton-beach briny-breezes cloud-lake delray-beach glen-ridge golf greenacres gulf-stream haverhill highland-beach hypoluxo juno-beach jupiter jupiter-inlet-colony lake-clarke-shores lake-park lake-worth-beach lantana loxahatchee-groves manalapan mangonia-park north-palm-beach ocean-ridge pahokee palm-beach palm-beach-gardens palm-beach-shores palm-springs riviera-beach royal-palm-beach south-bay south-palm-beach tequesta wellington westlake west-palm-beach',
  pinellas: 'east-lake tarpon-springs palm-harbor safety-harbor dunedin clearwater belleair largo pinellas-park indian-rocks-beach indian-shores madeira-beach seminole st-pete-beach treasure-island st-petersburg oldsmar',
  hillsborough: 'lutz tampa town-n-country palm-river-clair-mel westchase greater-carrollwood citrus-park temple-terrace university odessa plant-city dover seffner brandon thonotosassa gibsonton riverview bloomingdale apollo-beach ruskin sun-city-center wimauma',
  pasco: 'holiday land-o-lakes new-port-richey bayonet-point hudson',
  manatee: 'anna-maria bradenton parrish ellenton palmetto lakewood-ranch bayshore-gardens tallevast holmes-beach bradenton-beach',
  sarasota: 'sarasota longboat-key siesta-key fruitville palmer-ranch osprey nokomis venice venice-gardens south-venice warm-mineral-springs north-port englewood',
  charlotte: 'port-charlotte charlotte-harbor lake-suzy harbor-heights punta-gorda acline burnt-store-marina el-jobean manasota-key rotonda-west cape-haze placida',
  lee: 'boca-grande cayo-costa bokeelia pineland matlacha cape-coral pine-island st-james-city fort-myers tice north-fort-myers cypress-lake iona fort-myers-beach estero san-carlos-park bonita-springs',
  collier: 'heritage-bay naples-park pelican-marsh pelican-bay island-walk vineyards golden-gate berkshire-lakes lely lely-resort marco-island goodland everglades-city chokoloskee',
};

const NAME_OVERRIDES = {
  'town-n-country': "Town 'n' Country",
  'palm-river-clair-mel': 'Palm River-Clair Mel',
  'land-o-lakes': "Land O' Lakes",
  'lauderdale-by-the-sea': 'Lauderdale-by-the-Sea',
  'st-pete-beach': 'St. Pete Beach',
  'st-petersburg': 'St. Petersburg',
  'st-james-city': 'St. James City',
};

// Places where the local water is Lake Okeechobee rather than the coast
const LAKE_TOWNS = new Set(['belle-glade', 'pahokee', 'south-bay']);

const titleCase = (slug) =>
  slug.split('-').map((w) => w[0].toUpperCase() + w.slice(1)).join(' ');

export const CITIES = [];
for (const [county, list] of Object.entries(BY_COUNTY)) {
  for (const slug of list.split(' ')) {
    CITIES.push({
      slug,
      name: NAME_OVERRIDES[slug] || titleCase(slug),
      county,
      region: REGIONS[county],
      lake: LAKE_TOWNS.has(slug),
      path: `/boat-removal-fl-${slug}`,
    });
  }
}

export const cityByPath = Object.fromEntries(CITIES.map((c) => [c.path, c]));
export const COUNTY_ORDER = Object.keys(BY_COUNTY);
export const citiesInCounty = (county) => CITIES.filter((c) => c.county === county);
