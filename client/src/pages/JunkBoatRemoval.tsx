import { Link } from "wouter";
import { Helmet } from "react-helmet-async";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Forklift, PhoneCall, Recycle } from "lucide-react";
import heroImage from "@assets/Main3.webp";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Gallery from "@/components/Gallery";
import Ready from "@/components/Ready";
import junkBoatImage from "@assets/Junk_boat.webp";
import VesselType from "@/components/VesselType";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const faqs = [
  {
    id: "faq-1",
    question: "Can I take care of the junk boat removal myself?",
    answer: "Yes, it’s possible—but junk boat removal is often more challenging than it appears. Boats contain hazardous materials, metal components, electrical systems, and fluids that must be properly removed and disposed of according to regulations. In addition, fiberglass hulls must be cut and shredded using specialized equipment. Without the right tools, permits, and experience, the process can be time-consuming, costly, and unsafe. That’s why many owners choose professional removal to ensure everything is handled legally and responsibly",
  },
  {
    id: "faq-2",
    question: "What if my boat contains hazardous materials?",
    answer: "All hazardous materials are managed according to environmental regulations to ensure safe and proper disposal",
  },
  {
    id: "faq-3",
    question: "Do I need a title to remove junk boat?",
    answer: "In Florida, a boat title is not always required for junk or abandoned boat removal. Our team can legally remove boats even without a title, handling all necessary paperwork and compliance with state regulations. This makes the process fast, safe, and hassle-free for you",
  },
  {
    id: "faq-4",
    question: "What areas do you service?",
    answer: "We proudly serve all of Florida! No matter where your boat is located — from Miami to Jacksonville, Tampa to the Keys — our local teams are ready to provide fast and professional boat removal anywhere in the state",
  },
  {
    id: "faq-5",
    question: "Do I need to be present during the boat removal?",
    answer: "Your presence isn’t required, but it can be helpful. We can coordinate everything beforehand to make the process seamless.",
  },
  {
    id: "faq-6",
    question: "Can Florida Boat Removal remove boats from hard-to-reach locations?",
    answer: "Absolutely. We have the experience and specialized equipment to safely remove boats from even the most challenging and inaccessible spots.",
  },
];


export default function JunkBoatRemoval() {
  return (
  <>
  <Helmet>
    <link rel="canonical" href="https://boatsremoval.com/junk-boat-removal" />
  </Helmet>
  <Header />

     <main className="bg-secondary">
        <section className="relative w-full bg-secondary">
      {/* Background image */}
      <div className="absolute inset-0 h-[50vh] sm:h-[60vh] md:h-screen">
  <img
    src={heroImage}
    alt="Boat removal in Florida"
    className="w-full h-full object-cover"
  />
  <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/70 to-black/50" />
</div>

      {/* Content */}
      <div className="relative z-10 flex flex-col items-center text-center justify-center h-[50vh] sm:h-[60vh] md:h-screen pt-16 sm:pt-20 md:pt-32 px-4 sm:px-6 md:px-8 space-y-6">
        <h1 className="text-3xl sm:text-4xl md:text-6xl lg:text-7xl font-extrabold text-primary leading-tight">
        JUNK BOAT REMOVAL, DISMANTLING & DISPOSAL
        </h1>

        <p className="text-xl sm:text-2xl md:text-3xl font-semibold text-white">
          No matter where—on land, on water, or sunken
        </p>

        </div>
    </section>
<section className="w-full py-16 bg-white">
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
        
        {/* Text Content */}
        <div>
          <h2 className="text-4xl text-orange-600 md:text-4xl font-bold mb-6">
            Junk Boat Removal Made Easy
          </h2>

          <p className="text-2xl text-gray-700 mb-4">
            We offer fast, legal, and environmentally responsible junk boat removal throughout Florida.
            From damaged and abandoned boats to fully sunken vessels, our experienced team handles every
            step of the process, including hauling, disposal, and required paperwork.
          </p>

          <p className="text-2xl text-gray-700 ">
            No project is too small or too large, and no location is too challenging. We remove boats from
            private property, marinas, waterways, and shorelines — on land, on water, or sunken. Trusted by
            thousands of Floridians, we focus on protecting the environment while leaving your property
            clean and hassle-free.
          </p>
        </div>

        {/* Image */}
        <div className="w-full">
          <img
            src={junkBoatImage}
            alt="Junk boat removal"
            className="w-full h-auto rounded-2xl shadow-lg object-cover"
          />
        </div>

      </div>
    </section>

        <section className="py-16 md:py-20 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-700 mb-4">
            JUNK BOAT REMOVAL PROCESS DONE RIGHT
          </h2>
        
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Step 1 */}
          <Card className="text-center border-4 border-orange-600 rounded-xl">
            <CardHeader>
              <PhoneCall className="mx-auto h-12 w-12 text-primary mb-4" />
            <CardTitle>Contact Us</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground">
                Contact us to receive a free, no-obligation estimate and schedule a convenient time for your junk boat removal
              </p>
            </CardContent>
          </Card>

          {/* Step 2 */}
          <Card className="text-center border-4 border-orange-600 rounded-xl">
            <CardHeader>
              <Forklift className="mx-auto h-12 w-12 text-primary mb-4" />
              <CardTitle>Remove & Dismantle</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground">
                Our experienced team arrives as scheduled to safely remove the boat, handle hauling, and dismantle it using proper equipment
              </p>
            </CardContent>
          </Card>

          {/* Step 3 */}
         <Card className="text-center border-4 border-orange-600 rounded-xl">
            <CardHeader>
              <Recycle className="mx-auto h-12 w-12 text-primary mb-4" />
              <CardTitle>Dispose & Clean Up</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground">
                We manage legal disposal, required paperwork, and the proper removal of all hazardous materials, leaving your property clean, safe, and environmentally compliant
              </p>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
    <VesselType />
    <Gallery />

     <section id="faq" className="py-16 md:py-20 bg-muted">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4" data-testid="text-pricing-title">
                Frequently Asked Questions
              </h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto" data-testid="text-pricing-subtitle">
                Find answers to common questions about Junk boat removal process
              </p>
            </div>
    
            <Accordion type="single" collapsible className="w-full space-y-4">
              {faqs.map((faq) => (
                <AccordionItem key={faq.id} value={faq.id} className="bg-background rounded-md border-primary px-6" data-testid={`accordion-${faq.id}`}>
                  <AccordionTrigger className="text-left hover:no-underline" data-testid={`trigger-${faq.id}`}>
                    <span className="font-semibold text-foreground">{faq.question}</span>
                  </AccordionTrigger>
                  <AccordionContent className="text-muted-foreground" data-testid={`content-${faq.id}`}>
                    {faq.answer}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>
        </section>

    <Ready />
     </main>
     <Footer />
  </>
  );

}
