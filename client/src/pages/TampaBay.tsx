import { useLocation } from "wouter";
import { Helmet } from "react-helmet-async";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Phone, Mail, MapPin, CheckCircle, ArrowRight } from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export default function TampaBoatRemoval() {
  const [, setLocation] = useLocation();

  // Tampa-specific service set, expanded for clarity and unique detail
  const services = [
    "Submerged boat recovery with pumps and lift bags",
    "Oversized yacht transport with permits and escorts",
    "Storm-damaged vessel stabilization and removal",
    "Derelict boat disposal and compliant documentation",
    "Canal and marina cleanouts with careful staging",
    "Eco-friendly dismantling and materials recycling",
    "Trailered boat hauling from residential properties",
    "Tight-access canal removals under low bridges",
    "Commercial craft and workboat extraction",
    "Insurance-coordinated removals after severe weather"
  ];

  // Primary service areas with full ZIP coverage for Tampa, St. Petersburg, Clearwater, Sarasota
  const serviceAreas = [
    // Tampa ZIP codes (33601–33694, including PO Boxes and unique ZIPs)
    "Tampa ZIP Codes: 33601, 33602, 33603, 33604, 33605, 33606, 33607, 33608, 33609, 33610, 33611, 33612, 33613, 33614, 33615, 33616, 33617, 33618, 33619, 33620, 33621, 33622, 33623, 33624, 33625, 33626, 33629, 33630, 33631, 33633, 33634, 33635, 33637, 33646, 33647, 33650, 33655, 33660, 33661, 33662, 33663, 33664, 33672, 33673, 33674, 33675, 33677, 33679, 33680, 33681, 33682, 33684, 33685, 33686, 33687, 33688, 33689, 33694",
    // St. Petersburg ZIP codes (33701–33784, inclusive of PO Boxes and unique ZIPs)
    "St. Petersburg ZIP Codes: 33701, 33702, 33703, 33704, 33705, 33706, 33707, 33708, 33709, 33710, 33711, 33712, 33713, 33714, 33715, 33716, 33729, 33730, 33731, 33732, 33733, 33734, 33736, 33738, 33740, 33741, 33742, 33743, 33747, 33784",
    // Clearwater ZIP codes (33755–33769, including Clearwater Beach and PO Boxes)
    "Clearwater ZIP Codes: 33755, 33756, 33757, 33758, 33759, 33760, 33761, 33762, 33763, 33764, 33765, 33766, 33767, 33769",
    // Sarasota ZIP codes (34230–34277, including barrier islands and unique ZIPs)
    "Sarasota ZIP Codes: 34230, 34231, 34232, 34233, 34234, 34235, 34236, 34237, 34238, 34239, 34240, 34241, 34242, 34243, 34249, 34260, 34276, 34277"
  ];

  // Tampa-focused FAQs with unique wording and details
  const faqs = [
    {
      question: "Do you handle storm-damaged boats across Tampa Bay marinas and canals?",
      answer:
        "Yes. After hurricanes or severe squalls, we secure sites, stabilize compromised hulls, and remove boats from marinas, private docks, and residential canals. We coordinate with property owners and insurers to prevent secondary impacts and expedite safe transport to approved facilities."
    },
    {
      question: "Which ZIP codes in Tampa, St. Petersburg, Clearwater, and Sarasota do you serve?",
      answer:
        "We cover Tampa (33601–33694), St. Petersburg (33701–33784), Clearwater (33755–33769), and Sarasota (34230–34277). If your ZIP code isn’t listed in our on-page examples, we likely still serve your location—share your address and site constraints for a fast, accurate quote."
    },
    {
      question: "Can you remove oversized yachts or commercial craft with limited road access?",
      answer:
        "Absolutely. We obtain permits and arrange escorts, route planning, and staging. For tight corridors and low-clearance bridges, we deploy compact rigs, modular gear, and specialized trailers to move large vessels safely and compliantly."
    },
    {
      question: "Is boat removal eco-friendly and compliant in Tampa Bay and neighboring waters?",
      answer:
        "Yes. We prioritize containment, recycling, and responsible disposal of fuel, oils, batteries, and composites. Operations are planned to protect Tampa Bay, Old Tampa Bay, and Intracoastal waterways, meeting Florida environmental regulations and local requirements."
    },
    {
      question: "How quickly can you schedule Tampa boat removal?",
      answer:
        "We provide clear estimates promptly and can often schedule within 24–48 hours. For urgent situations—storm debris, drifting hulls, or navigational hazards—same-day assessments are possible depending on access and equipment availability."
    }
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <Helmet>
        <title>Boat Removal in Tampa Bay, FL and Surrounding Towns | BoatsRemoval.com</title>
        <meta
          name="description"
          content="Professional boat removal in Tampa Bay, St. Petersburg, Clearwater, and Sarasota. Licensed crews handle submerged boats, storm-damaged vessels, oversized yachts, and derelict craft. Full coverage across Tampa, Pinellas, and Sarasota ZIP codes."
        />
        <meta property="og:title" content="Boat Removal Tampa Bay FL | Professional Services" />
        <meta
          property="og:description"
          content="Expert boat removal services across Tampa Bay and nearby towns. Free quotes, eco-friendly disposal, careful canal operations, and reliable scheduling for marinas, HOAs, and residential properties."
        />
        <meta property="og:type" content="website" />
        <link rel="canonical" href="https://boatsremoval.com/tampa-boat-removal" />
      </Helmet>

      <Header />

      <main className="flex-1">
        {/* Hero Section */}
        <section className="relative bg-gradient-to-br from-primary/10 via-background to-secondary/10 py-16 md:py-24">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-4xl">
              <div className="flex items-center gap-2 mb-4">
                <MapPin className="h-5 w-5 text-primary" />
                <span className="text-sm font-semibold text-muted-foreground">Tampa Bay, Florida</span>
              </div>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mb-6" data-testid="text-heading-main">
                Professional Boat Removal Services in Tampa Bay, FL
              </h1>
              <p className="text-xl text-muted-foreground mb-8">
                Tampa Bay’s boating culture spans quiet canals, busy marinas, and open bay waters. When a vessel becomes
                abandoned, storm-damaged, or simply unwanted, it can quickly turn from a memory into a liability. Our Tampa
                boat removal crews design operations around your property, timeline, and local regulations—protecting docks,
                seawalls, and landscaping while safely extracting and hauling. From submerged hull recovery to oversized yacht
                transport, we plan every step, communicate clearly, and deliver results with care and precision.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button size="lg" onClick={() => setLocation("/quote")} data-testid="button-get-quote">
                  Get Free Quote
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
                <Button
                  size="lg"
                  variant="outline"
                  onClick={() => (window.location.href = "tel:+17272980155")}
                  data-testid="button-call-now"
                >
                  <Phone className="mr-2 h-5 w-5" />
                  Call: 727-298-0155
                </Button>
              </div>
            </div>
          </div>
        </section>

        {/* Why Choose Us Section */}
        <section className="py-16 md:py-20 bg-muted">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
                Why choose BoatsRemoval in Tampa Bay?
              </h2>
              <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
                We serve Tampa, St. Petersburg, Clearwater, and Sarasota with licensed crews, purpose-built equipment,
                and a practical approach to complex waterfront removals. You get transparent pricing, reliable timelines,
                and documented disposal—every time.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              <Card>
                <CardHeader>
                  <CheckCircle className="h-10 w-10 text-primary mb-2" />
                  <CardTitle>Local waterways expertise</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">
                    We understand the logistics of Tampa Bay boat removal: shallow inlets, tidal currents, low bridges,
                    and tight canals. Our planning protects property and minimizes disruption during extraction and staging.
                  </p>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CheckCircle className="h-10 w-10 text-primary mb-2" />
                  <CardTitle>Fast, coordinated scheduling</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">
                    Quotes are clear and prompt. Many removals can be scheduled within 24–48 hours. Larger projects with
                    multiple boats receive coordinated timelines, route plans, and on-site documentation.
                  </p>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CheckCircle className="h-10 w-10 text-primary mb-2" />
                  <CardTitle>Eco-friendly disposal</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">
                    We prioritize recycling and handle fuels, oils, batteries, and composites with containment and compliant
                    processing, protecting Tampa Bay, Old Tampa Bay, and Intracoastal waters from contamination.
                  </p>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CheckCircle className="h-10 w-10 text-primary mb-2" />
                  <CardTitle>Transparent pricing</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">
                    No hidden fees. Your quote explains access assumptions, equipment sizing, haul routes, and disposal notes
                    so you understand how we deliver value without surprises.
                  </p>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CheckCircle className="h-10 w-10 text-primary mb-2" />
                  <CardTitle>Licensed and insured</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">
                    Crews are trained and insured. From compact canal extractions to heavy-lift operations, we work with the
                    right credentials and documented safety procedures.
                  </p>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CheckCircle className="h-10 w-10 text-primary mb-2" />
                  <CardTitle>All vessel types</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">
                    Powerboats, sailboats, catamarans, live-aboards, workboats, and yachts. Trailered boats, beached hulls,
                    submerged craft, and derelict vessels—we handle them responsibly and efficiently.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* Services Section */}
        <section className="py-16 md:py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
                  Comprehensive boat removal services
                </h2>
                <p className="text-lg text-muted-foreground mb-6">
                  Tampa Bay’s geography requires careful planning. We tailor equipment and crew size to your site: compact rigs
                  for narrow canals, lift bags for submerged boats, heavy-duty trailers for oversized yachts, and staged routes
                  for complex transport. Every removal plan is built to protect property and water quality while delivering a
                  reliable timeline and a clean finish.
                </p>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  {services.map((service, index) => (
                    <div key={index} className="flex items-center gap-2">
                      <CheckCircle className="h-5 w-5 text-primary flex-shrink-0" />
                      <span className="text-foreground">{service}</span>
                    </div>
                  ))}
                </div>
                <Button
                  size="lg"
                  className="mt-8"
                  onClick={() => setLocation("/quote")}
                  data-testid="button-services-quote"
                >
                  Request Free Quote
                </Button>
              </div>

              <Card>
                <CardHeader>
                  <CardTitle>Areas we serve across Tampa Bay</CardTitle>
                  <CardDescription>Full ZIP coverage for Tampa, St. Petersburg, Clearwater, Sarasota</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-2">
                    {serviceAreas.map((area, index) => (
                      <div key={index} className="flex items-center gap-2 p-2 rounded hover-elevate">
                        <MapPin className="h-4 w-4 text-primary flex-shrink-0" />
                        <span className="text-foreground">{area}</span>
                      </div>
                    ))}
                  </div>
                  <p className="text-sm text-muted-foreground mt-4">
                    If your ZIP code isn’t listed, we likely still serve your area. Share your address, boat dimensions, and
                    access notes for a quick, accurate estimate.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* Process Section */}
        <section className="py-16 md:py-20 bg-muted">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
                Our simple 4-step boat removal process
              </h2>
              <p className="text-lg text-muted-foreground">
                Clear communication, controlled operations, and documented disposal—designed for Tampa Bay’s canals and marinas.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
              <Card>
                <CardHeader>
                  <div className="w-12 h-12 rounded-full bg-primary text-primary-foreground flex items-center justify-center text-xl font-bold mb-4">
                    1
                  </div>
                  <CardTitle>Information and estimate</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">
                    Share your ZIP code, boat type and dimensions, condition (afloat, submerged, storm-damaged), and access
                    constraints. We return a clear quote and proposed timeline, noting equipment assumptions and disposal steps.
                  </p>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <div className="w-12 h-12 rounded-full bg-primary text-primary-foreground flex items-center justify-center text-xl font-bold mb-4">
                    2
                  </div>
                  <CardTitle>On-site assessment</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">
                    We confirm entry points, staging areas, bottom conditions, currents, and clearances. This step ensures
                    right-sizing and safe operations for canals, marinas, and residential waterfronts.
                  </p>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <div className="w-12 h-12 rounded-full bg-primary text-primary-foreground flex items-center justify-center text-xl font-bold mb-4">
                    3
                  </div>
                  <CardTitle>Removal operations</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">
                    Crews secure the vessel, protect nearby structures, and execute the plan using lift systems, compact rigs,
                    barges, or heavy-duty trailers as required. We maintain a controlled footprint and clear communications.
                  </p>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <div className="w-12 h-12 rounded-full bg-primary text-primary-foreground flex items-center justify-center text-xl font-bold mb-4">
                    4
                  </div>
                  <CardTitle>Transport and disposal</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">
                    Boats are hauled to approved facilities. Usable components are recycled; fuels, oils, batteries, and
                    composites are processed responsibly. Final site cleanup returns your property to a safe, orderly state.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="py-16 md:py-20">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
                Frequently asked questions
              </h2>
              <p className="text-lg text-muted-foreground">
                Clear answers about boat removal across Tampa, St. Petersburg, Clearwater, and Sarasota.
              </p>
            </div>

            <div className="space-y-4">
              {faqs.map((faq, index) => (
                <Card key={index}>
                  <CardHeader>
                    <CardTitle className="text-xl">{faq.question}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground">{faq.answer}</p>
                  </CardContent>
                </Card>
              ))}

              <Card>
                <CardHeader>
                  <CardTitle className="text-xl">Do you manage derelict boat documentation for HOAs and marinas?</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">
                    Yes. We document derelict vessel removals for property owners, HOAs, marinas, and municipalities. Our
                    records include site photos, access notes, equipment details, and disposal confirmation—supporting clear
                    communication and compliance.
                  </p>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle className="text-xl">Can you work under low-clearance bridges and tight canal turns?</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">
                    We plan around low bridges, narrow turns, and compact staging with modular gear and careful route design.
                    For extremely tight access, we deploy smaller rigs or water-side extraction to minimize impact on property.
                  </p>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle className="text-xl">What makes Tampa Bay boat removal different from other regions?</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">
                    Tampa Bay’s mix of shallow inlets, tidal movement, and dense waterfronts demands detailed planning. We
                    tailor operations to water depth, current, bottom conditions, and neighborhood access—protecting docks,
                    seawalls, and landscaping while delivering safe extractions.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 md:py-20 bg-primary text-primary-foreground">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Ready to remove your boat in Tampa Bay?
            </h2>
            <p className="text-xl text-primary-foreground/90 mb-8">
              Get your free quote now. We’ll ask for ZIP code, boat type and dimensions, condition, and access notes—then
              provide a clear plan, fair pricing, and a reliable timeline to reclaim your space safely.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                size="lg"
                variant="secondary"
                onClick={() => setLocation("/quote")}
                data-testid="button-cta-quote"
              >
                Get Free Quote
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="border-primary-foreground text-primary-foreground hover:bg-primary-foreground hover:text-primary"
                onClick={() => (window.location.href = "tel:+17792200187")}
                data-testid="button-cta-call"
              >
                <Phone className="mr-2 h-5 w-5" />
                Call Now
              </Button>
            </div>
            <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-6 text-primary-foreground/90">
              <div className="flex items-center gap-2">
                <Phone className="h-5 w-5" />
                <span>779-220-0187</span>
              </div>
              <div className="flex items-center gap-2">
                <Mail className="h-5 w-5" />
                <span>quote@boatsremoval.com</span>
              </div>
            </div>
          </div>
        </section>

        {/* Local Content Section */}
        <section className="py-16 md:py-20 bg-muted">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
              About boat removal in Tampa Bay, St. Petersburg, Clearwater, and Sarasota
            </h2>
            <div className="prose prose-lg max-w-none text-muted-foreground space-y-4">
              <p>
                Tampa Bay’s waterfronts stretch from Davis Islands and Harbour Island to Gandy Bridge corridors, Old Tampa Bay,
                and the canals of Westshore and Town ’n’ Country. Each site presents its own mix of access, depth, current,
                and property constraints. Our boat removal plans account for staging areas, low-clearance bridges, tight turns,
                and neighborhood logistics—balancing safety, efficiency, and respect for your property and community.
              </p>
              <p>
                St. Petersburg’s ZIPs span downtown marinas, Old Northeast, Shore Acres, and barrier island access near St. Pete
                Beach. Clearwater includes both residential neighborhoods and Clearwater Beach’s barrier island. Sarasota extends
                from mainland residential canals to Lido Key and Siesta Key waters. We structure extraction, transport, and
                disposal around these local realities, using the right rigs, lift systems, and route plans to protect docks,
                seawalls, and adjacent waterfronts.
              </p>
              <p>
                Complex scenarios are part of our daily work. Submerged boats require stabilization, lift bags, pumps, and careful
                rigging before overland movement. Oversized yachts and commercial craft demand permits, escorts, and staged transport.
                Storm-damaged vessels need fast site control to prevent drift or further impact. Derelict boats require compliant
                documentation with responsible recycling and disposal. Whatever the scenario, we deliver practical, engineered
                operations with clear communication.
              </p>
              <p>
                We proudly serve Tampa ZIP codes 33601, 33602, 33603, 33604, 33605, 33606, 33607, 33608, 33609, 33610, 33611,
                33612, 33613, 33614, 33615, 33616, 33617, 33618, 33619, 33620, 33621, 33622, 33623, 33624, 33625, 33626, 33629,
                33630, 33631, 33633, 33634, 33635, 33637, 33646, 33647, 33650, 33655, 33660, 33661, 33662, 33663, 33664, 33672,
                33673, 33674, 33675, 33677, 33679, 33680, 33681, 33682, 33684, 33685, 33686, 33687, 33688, 33689, and 33694; St.
                Petersburg ZIP codes 33701, 33702, 33703, 33704, 33705, 33706, 33707, 33708, 33709, 33710, 33711, 33712, 33713,
                33714, 33715, 33716, 33729, 33730, 33731, 33732, 33733, 33734, 33736, 33738, 33740, 33741, 33742, 33743, 33747,
                and 33784; Clearwater ZIP codes 33755, 33756, 33757, 33758, 33759, 33760, 33761, 33762, 33763, 33764, 33765,
                33766, 33767, and 33769; and Sarasota ZIP codes 34230, 34231, 34232, 34233, 34234, 34235, 34236, 34237, 34238,
                34239, 34240, 34241, 34242, 34243, 34249, 34260, 34276, and 34277. If your ZIP code falls nearby but isn’t
                indicated above, send your address and site details—we likely serve your location.
              </p>
              <p>
                Environmental stewardship matters. Boats contain materials that require strict handling. We deploy containment
                and follow documented procedures to minimize impact on local waters and wildlife. Recycling isn’t an afterthought
                but a key part of operations: usable components are reclaimed, and hazardous items are processed responsibly. This
                approach protects Tampa Bay, Old Tampa Bay, the Intracoastal, and neighborhood lakes while ensuring you meet
                obligations as a property owner, manager, or marina operator.
              </p>
              <p>
                Choosing a boat removal partner is about trust and execution. We provide transparent quotes, explain equipment and
                access assumptions, and offer reliable timelines. On-site, crews maintain a controlled footprint and keep you
                informed at each stage. After removal, transport and disposal conclude with a clean property and documented
                recycling. It’s a comprehensive service designed to solve a problem without creating new ones.
              </p>
              <p>
                If a vessel is taking up space, creating risk, or holding you back from your next plan, we can help. Share your ZIP
                code, boat details, and access notes. We’ll return a precise estimate with a practical approach to reclaim your
                space. From Tampa’s canals to St. Petersburg marinas, Clearwater neighborhoods to Sarasota waterfronts, we’re ready
                to handle complex boat removal with care, control, and professionalism.
              </p>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
