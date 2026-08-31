import { useLocation } from "wouter";
import { Helmet } from "react-helmet-async";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Phone, Mail, MapPin, CheckCircle, ArrowRight } from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import RandomBoatGallery from "@/components/RandomBoatGallery";
import ServiceAreaList from "@/components/ServiceAreaList";
import { getNearbyCities } from "@/utils/getNearbyCities";
import logoImage from "@assets/Logo_florida_boat_removal.png";
import { getPhoneByCity } from "@/utils/getPhoneByCity";

export default function StJamesCity() {
  const [, setLocation] = useLocation();
   const nearbyCities = getNearbyCities("St. James City", 60); // find up to 60 closest
  const phone = getPhoneByCity("St. James City");
  
  const services = [
    "Boat Hauling & Transport",
    "Yacht Dismantling",
    "Catamaran Removal",
    "Sailboat Disposal",
    "Derelict Boat Removal",
    "Marina Cleanouts"
  ];

 const serviceAreas = [
  "St. James City Civic Center Area",
  "Dixie Beach Boulevard",
  "Monroe Canal",
  "Pine Island Sound Waterfront",
  "Southern Pine Island Shoreline"
];


  const faqs = [
    {
      question: "How quickly can you remove a boat in St. James City?",
      answer: "We offer same-day and next-day boat removal services in St. James City, FL. Contact us before noon for potential same-day service. Emergency removals available 24/7."
    },
    {
  question: "What areas of St. James City do you serve?",
  answer: "We serve all of St. James City, including the Dixie Beach Boulevard area, Monroe Canal waterfronts, neighborhoods near the St. James City Civic Center, Pine Island Sound shoreline locations, and surrounding residential communities."
    },
    {
      question: "Do you remove boats from residential properties?",
      answer: "Yes! We remove boats from residential driveways, backyards, marinas, storage facilities, and waterfront properties throughout St. James City. We handle all permits and logistics."
    },
    {
      question: "Is boat removal in St. James City expensive?",
      answer: "Our St. James City boat removal services are budget-friendly and transparent. Costs vary by boat size, condition, and access. We offer free quotes and specialize only in removal and disposal — not boat purchases."
    }
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <Helmet>
        <title>Boat Removal St. James City FL | Professional Disposal & Dismantling Services</title>
        <meta name="description" content="Expert boat removal services in St. James City, Florida. Free quotes, same-day service, eco-friendly disposal. Serving nearby areas for boats, yachts & catamarans of all sizes." />
        <meta property="og:title" content="Boat Removal St. James City FL | Professional Services" />
        <meta 
          property="og:description" 
          content="Expert boat removal services in St. James City, Florida. Free quotes, same-day service, eco-friendly disposal." 
        />
        <meta property="og:type" content="website" />
        <link rel="canonical" href="https://boatsremoval.com/boat-removal-fl-st-james-city" />
      </Helmet>
     <Header cityName="St. James City" />
      
      <main className="flex-1">
        {/* Hero Section */}
        <section className="relative bg-gradient-to-br from-primary/10 via-background to-secondary/10 py-16 md:py-24">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-4xl">
              <div className="flex items-center gap-2 mb-4">
                <MapPin className="h-5 w-5 text-primary" />
                <span className="text-sm font-semibold text-muted-foreground">St. James City, Florida</span>
              </div>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mb-6" data-testid="text-heading-main">
                Professional Boat Removal Services in St. James City, FL
              </h1>
              <p className="text-xl text-muted-foreground mb-8">
                Expert boat disposal and dismantling services for St. James City residents and businesses. 
                We handle boats of all sizes - from small sailboats to large yachts and catamarans. 
                Fast, eco-friendly, and affordable solutions for Lee County.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button 
                  size="lg" 
                  onClick={() => setLocation('/quote')}
                  data-testid="button-get-quote"
                >
                  Get Free Quote
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
                <Button 
                  size="lg" 
                  variant="outline"
                  onClick={() => window.location.href = `tel:+1${phone.replace(/[^0-9]/g, "")}`}
                  data-testid="button-call-now"
                >
                  <Phone className="mr-2 h-5 w-5" />
                  Call: {phone}
                </Button>
              </div>
            </div>
          </div>
        </section>
    <RandomBoatGallery cityName="St. James City" count={2} />
        {/* Why Choose Us Section */}
        <section className="py-16 md:py-20 bg-muted">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
                Why Choose <span className="text-primary">Florida Boat Removal</span> in St. James City?
              </h2>
              <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
                We're the trusted boat removal experts serving St. James City and all of Lee County
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              <Card>
                <CardHeader>
                  <CheckCircle className="h-10 w-10 text-primary mb-2" />
                  <CardTitle>Local Experts</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">
                    Based in Florida, we understand St. James City's unique coastal environment and local regulations.
                  </p>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CheckCircle className="h-10 w-10 text-primary mb-2" />
                  <CardTitle>Same-Day Service</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">
                    Fast response times with same-day removal available for urgent situations in St. James City.
                  </p>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CheckCircle className="h-10 w-10 text-primary mb-2" />
                  <CardTitle>Eco-Friendly Disposal</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">
                    Environmentally responsible recycling and disposal following all Florida environmental guidelines.
                  </p>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CheckCircle className="h-10 w-10 text-primary mb-2" />
                  <CardTitle>Free Quotes</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">
                    Transparent pricing with no hidden fees. Get your free quote within 1 hour.
                  </p>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CheckCircle className="h-10 w-10 text-primary mb-2" />
                  <CardTitle>Full Insurance</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">
                    Fully licensed and insured for your peace of mind during the removal process.
                  </p>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CheckCircle className="h-10 w-10 text-primary mb-2" />
                  <CardTitle>All Boat Types</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">
                    We handle sailboats, powerboats, yachts, catamarans, and derelict vessels of any size.
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
                  Comprehensive Boat Removal Services
                </h2>
                <p className="text-lg text-muted-foreground mb-6">
                  Whether you have an old boat taking up space in your driveway, a damaged vessel at the marina, 
                  or a derelict boat that needs immediate removal, we provide complete solutions for St. James City residents.
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
                  onClick={() => setLocation('/quote')}
                  data-testid="button-services-quote"
                >
                  Request Free Quote
                </Button>
              </div>

              <Card>
                <CardHeader>
                  <CardTitle>Areas We Serve in St. James City</CardTitle>
                  <CardDescription>Complete coverage throughout the city</CardDescription>
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
                    Plus all surrounding neighborhoods in Lee County
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
                Our Simple 3-Step Process
              </h2>
              <p className="text-lg text-muted-foreground">
                Fast and hassle-free boat removal in St. James City
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <Card>
                <CardHeader>
                  <div className="w-12 h-12 rounded-full bg-primary text-primary-foreground flex items-center justify-center text-xl font-bold mb-4">
                    1
                  </div>
                  <CardTitle>Contact Us</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">
                    Call us or fill out our online form with details about your boat and location in St. James City. 
                    Send photos for faster quotes.
                  </p>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <div className="w-12 h-12 rounded-full bg-primary text-primary-foreground flex items-center justify-center text-xl font-bold mb-4">
                    2
                  </div>
                  <CardTitle>Get Your Quote</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">
                    Receive a free, no-obligation quote within 1 hour!
                  </p>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <div className="w-12 h-12 rounded-full bg-primary text-primary-foreground flex items-center justify-center text-xl font-bold mb-4">
                    3
                  </div>
                  <CardTitle>We Remove It</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">
                    Schedule a convenient time. Our team handles all hauling, disposal, and paperwork. 
                    Your property is clean in no time!
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
                Frequently Asked Questions
              </h2>
              <p className="text-lg text-muted-foreground">
                Common questions about boat removal in St. James City
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
            </div>
          </div>
        </section>

       {/* Local Call Section with Logo */}
<section className="py-16 md:py-20 bg-muted text-center">
  <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
    {/* Logo */}
    <img
      src="/attached_assets/Logo_florida_boat_removal_black.png"
      alt="Florida Boat Removal logo"
      className="mx-auto mb-6 w-32 h-auto"
      loading="lazy"
    />

    {/* Local Text */}
    <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
      Call <span className="text-primary">Florida Boat Removal</span> Today!
    </h2>
    <p className="text-lg text-muted-foreground mb-8">
      Dial {" "}
      <a href={`tel:+1${phone.replace(/[^0-9]/g, "")}`} className="text-primary font-semibold hover:underline">
        {phone}
      </a>{" "}
      to speak with our boat removal specialist serving St. James City and all of Lee County.
      Pricing is based on vessel size, condition, and accessibility.
    </p>
<Button
      size="lg"
      onClick={() => setLocation("/quote")}
      data-testid="button-local-call-quote"
    >
      Get Free Quote
      <ArrowRight className="ml-2 h-5 w-5" />
    </Button>
  </div>
</section>
        {/* Local Content Section */}
        <section className="py-16 md:py-20 bg-muted">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
              About <span className="text-primary">Florida Boat Removal</span> in St. James City, Florida
            </h2>
            <div className="prose prose-lg max-w-none text-muted-foreground space-y-4">
              <p>
  St. James City is a waterfront community located on the southern end of Pine Island in Lee County, known for its quiet
  neighborhoods, fishing culture, and access to scenic waterways such as Pine Island Sound and San Carlos Bay. While not
  directly on the open Gulf of Mexico, St. James City is an important part of Southwest Florida’s boating community. With
  local marinas, canals, and residential waterfront properties, the need for professional boat removal services remains
  essential.
</p>
<p>
  Whether you're near the St. James City Civic Center, close to the waterfront along Dixie Beach Boulevard, or in
  residential neighborhoods throughout the southern end of Pine Island, <span className="text-primary">Florida Boat
  Removal</span> provides fast, reliable, and eco-friendly boat disposal services. We understand the unique challenges of
  boat removal across Lee County’s island and coastal environments and have the expertise to handle any situation.
</p>
<p>
  Our St. James City boat removal services include hauling away old boats, yachts, sailboats, and catamarans from private
  properties, marinas, storage yards, and waterfront areas. We take care of all transportation, heavy lifting, and
  environmentally responsible disposal, ensuring a stress-free process for every customer.
</p>
<p>
  Serving all of Lee County, including St. James City, Pine Island, Bokeelia, Pineland, and surrounding communities.
  Contact us today for a free quote!
</p>

            </div>
          </div>
        </section>
        {/* Nearby Cities Section */}
        <ServiceAreaList cities={nearbyCities} />
      </main>

      <Footer />
    </div>
  );
}
//{ name: "St. James City", lat: 26.4987, lon: -82.0957, county: "Lee", phone: "727-298-0155"},
//import StJamesCity from "@/pages/SEO/westcoast/StJamesCity"
//<Route path="/boat-removal-fl-st-james-city" component={StJamesCity}/>
