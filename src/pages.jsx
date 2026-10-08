import React from 'react';
import { SITE } from './data/site.js';
import { REGIONS } from './data/regions.js';
import { COUNTY_ORDER, citiesInCounty } from './data/cities.js';
import { SERVICES, BOAT_TYPES } from './data/services.js';
import { cityContent } from './content.js';
import { CallButton } from './CallButton.jsx';

function Crumbs({ items }) {
  return (
    <nav className="crumbs" aria-label="Breadcrumb">
      <a href="/">Home</a>
      {items.map(([href, label]) => (
        <span key={label}> / {href ? <a href={href}>{label}</a> : <span aria-current="page">{label}</span>}</span>
      ))}
    </nav>
  );
}

function PageHero({ crumbs, h1, intro, quote = true }) {
  return (
    <section className="page-hero">
      <div className="wrap">
        {crumbs && <Crumbs items={crumbs} />}
        <h1>{h1}</h1>
        <p className="lead">{intro}</p>
        <div className="hero-actions">
          <CallButton />
          {quote && <a className="btn btn-outline" href="/quote">Get a Quote</a>}
        </div>
      </div>
    </section>
  );
}

export function Faq({ items, title = 'Frequently asked questions' }) {
  return (
    <section className="section">
      <div className="wrap narrow">
        <h2>{title}</h2>
        {items.map(([q, a]) => (
          <details key={q} className="faq">
            <summary>{q}</summary>
            <p>{a}</p>
          </details>
        ))}
      </div>
    </section>
  );
}

function CtaBand({ text = 'Tell us about the boat and we will give you a quote over the phone.' }) {
  return (
    <section className="cta-band">
      <div className="wrap cta-row">
        <div>
          <h2>Ready to get rid of your boat?</h2>
          <p>{text}</p>
        </div>
        <div className="hero-actions">
          <CallButton className="btn btn-light" />
          <a className="btn btn-outline" href="/quote">Get a Quote</a>
        </div>
      </div>
    </section>
  );
}

function Steps() {
  const steps = [
    ['Call us', `Phone ${SITE.phone}. Tell us the boat's type, length, condition and where it is.`],
    ['Get a quote', 'We ask a few questions about access and give you a price on the call.'],
    ['Pick a date', 'We schedule the removal around the location, the boat and your timing.'],
    ['It\'s gone', 'We remove the boat, take it apart and handle disposal. Nothing left for you to arrange.'],
  ];
  return (
    <ol className="steps">
      {steps.map(([h, p], i) => (
        <li key={h}><span className="step-n">{i + 1}</span><h3>{h}</h3><p>{p}</p></li>
      ))}
    </ol>
  );
}

function ServiceCards() {
  return (
    <div className="cards">
      {SERVICES.map((s) => (
        <a key={s.path} className="card" href={s.path}>
          <h3>{s.name}</h3>
          <p>{s.short}</p>
          <span className="more">Learn more →</span>
        </a>
      ))}
    </div>
  );
}

function AreaDirectory() {
  return (
    <div className="areas">
      {COUNTY_ORDER.map((county) => (
        <div key={county} className="area">
          <h3>{REGIONS[county].name}</h3>
          <ul>
            {citiesInCounty(county).map((c) => (
              <li key={c.slug}><a href={c.path}>{c.name}</a></li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  );
}

export function Home() {
  return (
    <>
      <section className="hero">
        <div className="wrap">
          <p className="eyebrow">Serving all of Florida</p>
          <h1>Boat Removal & Boat Disposal in Florida</h1>
          <p className="lead">
            Junk, abandoned, storm-damaged and sunken boats removed from driveways, docks, lifts, canals and
            storage lots, with proper boat disposal included. One call, one quote, and the boat is gone.
          </p>
          <div className="hero-actions">
            <CallButton className="btn btn-primary btn-lg" />
            <a className="btn btn-outline btn-lg" href="/quote">Get a Quote</a>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="wrap">
          <h2>How boat removal and disposal works</h2>
          <Steps />
        </div>
      </section>

      <section className="section alt">
        <div className="wrap">
          <h2>Boat removal and disposal services</h2>
          <ServiceCards />
        </div>
      </section>

      <section className="section">
        <div className="wrap two-col">
          <div>
            <h2>Why Florida boat owners call {SITE.name}</h2>
            <p>
              A boat you no longer want rarely goes away on its own. Selling a boat that does not run is slow,
              scrapyards often will not take fiberglass, and towing it yourself just moves the problem somewhere else.
            </p>
            <p>
              We take the whole job off your hands: getting the boat out, taking it apart and dealing with disposal.
              You make one call and we handle the rest.
            </p>
          </div>
          <ul className="checks">
            <li>Boats on land or in the water</li>
            <li>Driveways, yards, docks, lifts and storage lots</li>
            <li>Storm-damaged and sunken boats</li>
            <li>Trailers removed with the boat</li>
            <li>Disposal taken care of</li>
          </ul>
        </div>
      </section>

      <section className="section alt">
        <div className="wrap two-col">
          <div>
            <h2>Boat disposal, handled for you</h2>
            <p>
              Getting rid of a boat is not just about hauling it away. Most landfills and scrapyards will not take
              a whole fiberglass hull, and a boat left on a lot or in the water only becomes a bigger problem.
            </p>
            <p>
              Every boat removal we do includes disposal: the boat is dismantled, metal and engines are separated
              for recycling where possible, and the remaining materials go to facilities that accept them.
            </p>
            <p><a href="/boat-disposal">How boat disposal works →</a></p>
          </div>
          <ul className="checks">
            <li>Dismantling on site or after removal</li>
            <li>Metal, engines and trailers recycled where possible</li>
            <li>Fiberglass and other materials disposed of properly</li>
            <li>No dumpsters, scrapyard trips or landfill runs for you</li>
          </ul>
        </div>
      </section>

      <section className="section">
        <div className="wrap">
          <h2>Boats we remove and dispose of</h2>
          <div className="types">
            {BOAT_TYPES.slice(0, 6).map(([h, p]) => (
              <div key={h} className="type"><h3>{h}</h3><p>{p}</p></div>
            ))}
          </div>
          <p><a href="/vessel">See all vessel types →</a></p>
        </div>
      </section>

      <section className="section" id="areas">
        <div className="wrap">
          <h2>Service areas</h2>
          <p>
            We remove boats throughout Florida. Below are some of the communities we serve most often,
            from Miami-Dade, Broward and Palm Beach counties to Tampa Bay and the Gulf coast.
            Don't see your city? Call us anyway.
          </p>
          <AreaDirectory />
        </div>
      </section>

      <Faq
        items={[
          ['How much does boat removal cost?', 'It depends on the size and condition of the boat, whether it is on land or in the water, and how easy it is to reach. Call us with those details and we will quote it on the phone.'],
          ['How do I dispose of a boat in Florida?', 'The easiest way is to have it removed and disposed of for you. We pick up the boat, dismantle it, recycle what we can and dispose of the rest, so you do not need to deal with landfills or scrapyards.'],
          ['Is boat disposal included with removal?', 'Yes. Every boat removal includes disposal.'],
          ['Do you remove abandoned or derelict boats?', 'Yes. Call us with the location and situation, including who is responsible for the boat, and we will explain how we can help.'],
          ['Do you remove boats that are in the water?', 'Yes, including boats at docks, on lifts, in canals, and boats that have partly or fully sunk.'],
          ['What paperwork do I need?', 'Have the title or registration if you have it. If paperwork is missing, call anyway and we will explain what can be done.'],
          ['Will you take the trailer?', 'Usually, yes. Mention it when you call.'],
        ]}
      />
      <CtaBand />
    </>
  );
}

export function Services() {
  return (
    <>
      <PageHero
        crumbs={[[null, 'Services']]}
        h1="Boat Removal & Disposal Services"
        intro="Whatever shape your boat is in and wherever it sits, we remove it and take care of boat disposal. Every job starts with a phone call."
      />
      <section className="section">
        <div className="wrap"><ServiceCards /></div>
      </section>
      <section className="section alt">
        <div className="wrap"><h2>How it works</h2><Steps /></div>
      </section>
      <CtaBand />
    </>
  );
}

export function ServicePage({ s }) {
  return (
    <>
      <PageHero crumbs={[['/services', 'Services'], [null, s.name]]} h1={s.h1} intro={s.intro} />
      <section className="section">
        <div className="wrap narrow">
          {s.sections.map(({ h, p }) => (
            <div key={h} className="block"><h2>{h}</h2><p>{p}</p></div>
          ))}
        </div>
      </section>
      <section className="section alt">
        <div className="wrap"><h2>How it works</h2><Steps /></div>
      </section>
      <Faq items={s.faq} />
      <section className="section">
        <div className="wrap">
          <h2>Other services</h2>
          <div className="cards">
            {SERVICES.filter((o) => o.path !== s.path).map((o) => (
              <a key={o.path} className="card" href={o.path}><h3>{o.name}</h3><p>{o.short}</p></a>
            ))}
          </div>
        </div>
      </section>
      <CtaBand />
    </>
  );
}

export function CityPage({ c }) {
  const k = cityContent(c);
  return (
    <>
      <PageHero crumbs={[['/#areas', 'Service Areas'], [null, c.name]]} h1={k.h1} intro={k.intro} />
      <section className="section">
        <div className="wrap narrow">
          <div className="block"><h2>{k.local.h}</h2><p>{k.local.p}</p></div>
          <div className="block">
            <h2>{k.situations.h}</h2>
            <ul className="checks">{k.situations.items.map((s) => <li key={s}>{s[0].toUpperCase() + s.slice(1)}</li>)}</ul>
          </div>
          <div className="block"><h2>{k.disposal.h}</h2><p>{k.disposal.p}</p></div>
          <div className="block"><h2>{k.access.h}</h2><p>{k.access.p}</p><p>{k.closer}</p></div>
        </div>
      </section>
      <section className="section alt">
        <div className="wrap">
          <h2>Boat removal and disposal services in {c.name}</h2>
          <ServiceCards />
        </div>
      </section>
      <Faq items={k.faq} title={`${c.name} boat removal FAQ`} />
      {k.nearby.length > 0 && (
        <section className="section">
          <div className="wrap">
            <h2>Boat removal near {c.name}</h2>
            <ul className="chips">
              {k.nearby.map((n) => <li key={n.slug}><a href={n.path}>{n.name}</a></li>)}
            </ul>
          </div>
        </section>
      )}
      <CtaBand text={`Boat in ${c.name}? Call and we will quote it on the phone.`} />
    </>
  );
}

export function FeaturedPage({ f }) {
  const c = f.city;
  const nearby = citiesInCounty(c.county).filter((n) => n.slug !== c.slug).slice(0, 12);
  return (
    <>
      <PageHero crumbs={[['/#areas', 'Service Areas'], [null, c.name]]} h1={f.h1} intro={f.intro} />
      <section className="section">
        <div className="wrap narrow">
          {f.sections.map(({ h, p }) => <div key={h} className="block"><h2>{h}</h2><p>{p}</p></div>)}
        </div>
      </section>
      <section className="section alt">
        <div className="wrap"><h2>How it works</h2><Steps /></div>
      </section>
      <section className="section">
        <div className="wrap">
          <h2>Services</h2>
          <ServiceCards />
        </div>
      </section>
      <section className="section alt">
        <div className="wrap">
          <h2>Also serving {c.region.name}</h2>
          <ul className="chips">
            {nearby.map((n) => <li key={n.slug}><a href={n.path}>{n.name}</a></li>)}
          </ul>
        </div>
      </section>
      <CtaBand text={`Boat in ${c.name}? Call and we will quote it on the phone.`} />
    </>
  );
}

export function Vessel() {
  return (
    <>
      <PageHero
        crumbs={[[null, 'Boats We Remove']]}
        h1="Types of Boats We Remove & Dispose Of"
        intro="If it floats, or used to, we can probably remove it. These are the vessels we are most often called about."
      />
      <section className="section">
        <div className="wrap">
          <div className="types">
            {BOAT_TYPES.map(([h, p]) => <div key={h} className="type"><h3>{h}</h3><p>{p}</p></div>)}
          </div>
        </div>
      </section>
      <section className="section alt">
        <div className="wrap narrow">
          <h2>Any condition</h2>
          <p>
            Running or not, complete or stripped, on a trailer or sitting in the water. Condition changes how the
            job is done, not whether we can do it. When you call, tell us the boat's type, length and condition,
            and where it is.
          </p>
        </div>
      </section>
      <CtaBand />
    </>
  );
}

export function About() {
  return (
    <>
      <PageHero
        crumbs={[[null, 'About']]}
        h1={`About ${SITE.name}`}
        intro={`${SITE.name} removes unwanted, damaged and sunken boats for owners throughout Florida.`}
      />
      <section className="section">
        <div className="wrap narrow">
          <div className="block">
            <h2>What we do</h2>
            <p>
              We provide boat removal and boat disposal for boats that have become a burden: out of the driveway,
              off the lift, out of the canal. Every job includes removal, dismantling and disposal, so owners do not
              have to coordinate tow trucks, scrapyards and landfills themselves.
            </p>
          </div>
          <div className="block">
            <h2>How quotes work</h2>
            <p>
              Every boat removal is different. A short call lets us ask about the boat, the access and the
              location, so we can give you an accurate price. Call {SITE.phone}.
            </p>
          </div>
          <div className="block">
            <h2>Where we work</h2>
            <p>
              We remove boats throughout Florida, on both the Atlantic and Gulf coasts and inland,
              from the Miami area and Palm Beach County to Tampa Bay, Sarasota, Fort Myers and Naples.
            </p>
            <p><a href="/#areas">See all service areas →</a></p>
          </div>
        </div>
      </section>
      <CtaBand />
    </>
  );
}

export function Quote() {
  return (
    <>
      <PageHero
        crumbs={[[null, 'Get a Quote']]}
        h1="Get a Boat Removal & Disposal Quote"
        quote={false}
        intro={`Call ${SITE.phone} for a quote. Having these details ready helps us price your job quickly.`}
      />
      <section className="section">
        <div className="wrap narrow">
          <a className="big-phone" href={`tel:${SITE.tel}`}>{SITE.phone}</a>
          <h2>What to have ready</h2>
          <ul className="checks">
            <li>Type of boat and its length</li>
            <li>Condition: running, not running, damaged or sunk</li>
            <li>Where it is: driveway, yard, storage lot, dock, lift, canal or marina</li>
            <li>The city or address area</li>
            <li>Whether there is a trailer, and if it rolls</li>
            <li>Title or registration, if you have it</li>
          </ul>
          <p>With these details we can usually give you a price on the same call.</p>
        </div>
      </section>
    </>
  );
}

export function NotFound() {
  return (
    <section className="section">
      <div className="wrap narrow">
        <h1>Page not found</h1>
        <p>The page you are looking for does not exist. <a href="/">Go to the homepage</a> or call {SITE.phone}.</p>
      </div>
    </section>
  );
}
