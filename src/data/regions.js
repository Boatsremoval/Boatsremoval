// One profile per county. City pages pull their local details from here.
export const REGIONS = {
  'miami-dade': {
    name: 'Miami-Dade County',
    area: 'South Florida',
    waters: ['Biscayne Bay', 'the Miami River', 'the Intracoastal Waterway', 'residential canals'],
    setting:
      'Miami-Dade has one of the densest boating populations in the state, from bayfront condos with assigned slips to single-family homes on tidal canals. Many of the boats we get called about here have simply outlived their owners\' plans: a center console that sat on a lift through too many summers, a cabin cruiser whose engines were never rebuilt, or a project boat parked beside a house in the suburbs west of the turnpike.',
    access:
      'Tight streets, HOA rules and busy marinas mean removal here is usually about planning access. We work out whether the boat comes out from the water, off a lift, or from a driveway or storage lot before anyone shows up.',
  },
  broward: {
    name: 'Broward County',
    area: 'South Florida',
    waters: ['the New River', 'the Intracoastal Waterway', 'Port Everglades', 'the Hillsboro Inlet area', 'canal neighborhoods'],
    setting:
      'Broward\'s miles of residential canals put a boat behind a huge number of homes, and a lot of those boats eventually stop running. We remove everything from small runabouts left on trailers in western suburbs to larger vessels tied up behind waterfront homes in the coastal cities.',
    access:
      'Canal-front jobs often depend on bridge clearances and dock condition, while inland jobs depend on driveway and gate access. When you call, have the location and a rough sense of access ready, and we can tell you how the job would go.',
  },
  'palm-beach': {
    name: 'Palm Beach County',
    area: 'South Florida',
    waters: ['the Lake Worth Lagoon', 'the Loxahatchee River', 'the Intracoastal Waterway', 'Lake Okeechobee in the Glades'],
    setting:
      'Palm Beach County covers a lot of ground, from the coastal towns along the Lake Worth Lagoon and the Jupiter area to equestrian and farming communities farther west. Unwanted boats turn up everywhere: behind waterfront homes, in backyards, at storage facilities and on rural properties.',
    access:
      'Coastal jobs here often involve docks and lifts, while western communities usually mean trailers, yards and long driveways. Either way, the first step is the same: a phone call with the boat\'s size, condition and location.',
  },
  pinellas: {
    name: 'Pinellas County',
    area: 'Tampa Bay',
    waters: ['Tampa Bay', 'Boca Ciega Bay', 'Clearwater Harbor', 'the Gulf of Mexico', 'the Anclote River'],
    setting:
      'Pinellas is a peninsula surrounded by water, so boats are part of everyday life here, and so are boats that no longer get used. Storm seasons have left plenty of damaged vessels around the beach communities, while older boats sit in backyards and storage lots across the mainland cities.',
    access:
      'Barrier-island streets are narrow and parking is tight, so beach-community jobs take some coordination. Mainland jobs are usually simpler. We go over the details on the phone so there are no surprises on the day.',
  },
  hillsborough: {
    name: 'Hillsborough County',
    area: 'Tampa Bay',
    waters: ['Tampa Bay', 'the Hillsborough River', 'the Alafia River', 'the Little Manatee River'],
    setting:
      'Hillsborough mixes the urban waterfront of Tampa with fast-growing suburbs and rural land to the east. That means our calls range from boats in city marinas and South Tampa backyards to old bass boats and pontoons sitting on farm properties and in suburban driveways.',
    access:
      'Suburban HOAs often set deadlines for removing a boat from a driveway, and rural properties can involve soft ground or long access roads. Tell us about the site when you call and we\'ll plan around it.',
  },
  pasco: {
    name: 'Pasco County',
    area: 'Tampa Bay',
    waters: ['the Gulf coast', 'the Pithlachascotee River', 'coastal canals'],
    setting:
      'Pasco\'s coastline is lined with canal communities, and inland Pasco has grown quickly with new neighborhoods and older rural lots. Boats that have sat unused for years, especially on trailers, are a common sight in both.',
    access:
      'Many Pasco jobs are trailer and driveway removals, while coastal ones can involve shallow canals and older docks. A quick call is enough for us to understand what the job needs.',
  },
  manatee: {
    name: 'Manatee County',
    area: 'Suncoast',
    waters: ['the Manatee River', 'Anna Maria Sound', 'Sarasota Bay', 'Tampa Bay'],
    setting:
      'Manatee County runs from the Anna Maria Island beaches to the river towns and newer inland communities. We remove boats from island homes, riverfront properties, marinas and planned communities with strict storage rules.',
    access:
      'Island jobs can be limited by bridges and narrow roads, and gated communities often require scheduling ahead. We take care of that planning with you over the phone.',
  },
  sarasota: {
    name: 'Sarasota County',
    area: 'Suncoast',
    waters: ['Sarasota Bay', 'Little Sarasota Bay', 'Lemon Bay', 'the Myakka River', 'the Venice Inlet area'],
    setting:
      'Sarasota County has a long, boat-friendly coastline and a lot of seasonal residents, which means many boats sit unused for long stretches. Eventually some of them become more trouble than they\'re worth, and that\'s where we come in.',
    access:
      'Keys and coastal neighborhoods have their own access challenges, while North Port and inland areas are mostly yard and trailer removals. We\'ll figure out the right approach when you call.',
  },
  charlotte: {
    name: 'Charlotte County',
    area: 'Southwest Florida',
    waters: ['Charlotte Harbor', 'the Peace River', 'the Myakka River', 'Lemon Bay', 'Gasparilla Sound'],
    setting:
      'Charlotte County is built around Charlotte Harbor and an enormous network of residential canals. Boats are everywhere here, and so are boats damaged by storms or left behind when owners moved away or lost interest.',
    access:
      'Canal homes, harbor-front marinas and quiet waterfront communities all bring different access questions. We work them out in advance so the removal itself goes smoothly.',
  },
  lee: {
    name: 'Lee County',
    area: 'Southwest Florida',
    waters: ['the Caloosahatchee River', 'Pine Island Sound', 'Matlacha Pass', 'Estero Bay', 'Cape Coral\'s canal system'],
    setting:
      'Lee County has one of the largest canal systems anywhere, plus island communities only reachable across long causeways or by boat. After hurricanes, the number of damaged and abandoned boats here climbs fast, and many sit for months before anyone deals with them.',
    access:
      'Island and canal jobs need the most planning, especially for boats that are partly submerged or stuck on a damaged lift. Mainland trailer jobs are usually straightforward.',
  },
  collier: {
    name: 'Collier County',
    area: 'Southwest Florida',
    waters: ['Naples Bay', 'the Gulf of Mexico', 'Marco Island waterways', 'the Ten Thousand Islands'],
    setting:
      'Collier County ranges from Naples-area communities with strict appearance rules to the fishing towns at the edge of the Everglades. Boats left too long in a driveway or on a lift draw attention quickly in many neighborhoods here.',
    access:
      'Many communities in Collier County are gated, with rules about when service vehicles can enter. Out toward the Everglades, distances and water access matter more. We cover both on the phone.',
  },
};
