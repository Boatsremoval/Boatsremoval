import React, { useState } from 'react';
import { SITE } from './data/site.js';
import { cityByPath } from './data/cities.js';
import { FEATURED, SERVICE_BY_PATH } from './content.js';
import { CallButton } from './CallButton.jsx';
import { Home, Services, ServicePage, CityPage, FeaturedPage, About, Quote, Vessel, NotFound } from './pages.jsx';

const NAV = [
  ['/services', 'Services'],
  ['/boat-disposal', 'Boat Disposal'],
  ['/vessel', 'Boats We Remove'],
  ['/#areas', 'Service Areas'],
  ['/about', 'About'],
  ['/quote', 'Get a Quote'],
];

function Header() {
  const [open, setOpen] = useState(false);
  return (
    <header className="site-header">
      <div className="wrap header-row">
        <a className="logo" href="/" aria-label={`${SITE.name} home`}>
          <svg viewBox="0 0 32 32" width="30" height="30" aria-hidden="true">
            <circle cx="16" cy="16" r="16" fill="var(--accent)" />
            <path d="M6 18h20l-3 5H9z M15 7v10 M15 8l7 8h-7z" fill="#fff" stroke="#fff" strokeWidth="1.5" strokeLinejoin="round" />
          </svg>
          <span>Boats<b>Removal</b></span>
        </a>
        <button className="menu-btn" aria-expanded={open} aria-controls="nav" onClick={() => setOpen(!open)}>
          {open ? 'Close' : 'Menu'}
        </button>
        <nav id="nav" className={open ? 'nav open' : 'nav'} aria-label="Main">
          {NAV.map(([href, label]) => (
            <a key={href} href={href}>{label}</a>
          ))}
          <CallButton className="btn btn-primary nav-call" />
        </nav>
      </div>
    </header>
  );
}

function Footer() {
  return (
    <footer className="site-footer">
      <div className="wrap footer-grid">
        <div>
          <p className="footer-logo">Boats<b>Removal</b></p>
          <p>Boat removal and boat disposal throughout Florida: junk, salvage and sunken boats.</p>
          <p><a className="footer-phone" href={`tel:${SITE.tel}`}>{SITE.phone}</a></p>
        </div>
        <div>
          <p className="footer-h">Services</p>
          <a href="/junk-boat-removal">Junk Boat Removal</a>
          <a href="/salvage-boat-removal">Salvage Boat Removal</a>
          <a href="/sunken-boat-removal">Sunken Boat Removal</a>
          <a href="/boat-disposal">Boat Disposal</a>
          <a href="/vessel">Boats We Remove</a>
        </div>
        <div>
          <p className="footer-h">Popular areas</p>
          <a href="/boat-removal-fl-miami">Miami</a>
          <a href="/boat-removal-fl-fort-lauderdale">Fort Lauderdale</a>
          <a href="/pompano-beach-boat-removal">Pompano Beach</a>
          <a href="/boat-removal-fl-west-palm-beach">West Palm Beach</a>
          <a href="/tampa-boat-removal">Tampa</a>
          <a href="/boat-removal-fl-cape-coral">Cape Coral</a>
        </div>
        <div>
          <p className="footer-h">Company</p>
          <a href="/about">About</a>
          <a href="/quote">Get a Quote</a>
          <a href="/services">All Services</a>
        </div>
      </div>
      <div className="wrap footer-bottom">© {SITE.name}. Serving all of Florida.</div>
    </footer>
  );
}

function pageFor(path) {
  switch (path) {
    case '/': return <Home />;
    case '/services': return <Services />;
    case '/about': return <About />;
    case '/quote': return <Quote />;
    case '/vessel': return <Vessel />;
  }
  if (SERVICE_BY_PATH[path]) return <ServicePage s={SERVICE_BY_PATH[path]} />;
  if (FEATURED[path]) return <FeaturedPage f={FEATURED[path]} />;
  if (cityByPath[path]) return <CityPage c={cityByPath[path]} />;
  return <NotFound />;
}

export default function App({ path }) {
  return (
    <>
      <a className="skip" href="#main">Skip to content</a>
      <Header />
      <main id="main">{pageFor(path)}</main>
      <Footer />
      <a className="sticky-call" href={`tel:${SITE.tel}`}>Call for a quote: {SITE.phone}</a>
    </>
  );
}
