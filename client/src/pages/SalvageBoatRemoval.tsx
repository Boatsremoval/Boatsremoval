import { Link } from "wouter";
import { Helmet } from "react-helmet-async";
import { CheckCircle } from "lucide-react";
import heroImage from "@assets/Main4.webp";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Gallery from "@/components/Gallery";
import Ready from "@/components/Ready";
import junkBoatImage from "@assets/Boat_salvage.webp";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const faqs = [
  {
    id: "faq-1",
    question: "Do you work directly with insurance companies??",
    answer: "Yes. We have extensive experience working directly with insurance companies and adjusters. Our team coordinates salvage boat removal, provides required documentation and photos, assists with claims, and ensures the entire process meets insurance and regulatory requirements",
  },
  {
    id: "faq-2",
    question: "Do I need to have a title for salvage boat removal?  ",
    answer: "In Florida, a boat title is not always required for salvage boat removal. Depending on the situation, condition, and location of the vessel, we can proceed without a title and handle the necessary documentation to ensure the removal is done legally and in compliance with state regulations",
  },
  {
    id: "faq-3",
    question: "Can your salvage boat removal services be paid by an insurance company?",
    answer: "Yes. In many cases, salvage boat removal costs can be covered by the insurance company. We work directly with insurance adjusters, provide required documentation, and coordinate billing when applicable to help make the process as smooth as possible for the boat owner",
  },
  {
    id: "faq-4",
    question: "What areas do you service?",
    answer: "We proudly serve all of Florida! No matter where your boat is located — from Miami to Jacksonville, Tampa to the Keys — our local teams are ready to provide fast and professional boat removal anywhere in the state",
  },
    {
    id: "faq-5",
    question: "Can Florida Boat Removal remove boats from hard-to-reach locations?",
    answer: "Absolutely. We have the experience and specialized equipment to safely remove boats from even the most challenging and inaccessible spots.",
  },
];


export default function SalvageBoatRemoval() {
  return (
  <>
  <Helmet>
    <link rel="canonical" href="https://boatsremoval.com/salvage-boat-removal" />
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
        SALVAGE BOAT REMOVAL
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
            Salvage Boat Removal Done Right
          </h2>

          <p className="text-2xl text-gray-700 mb-4">
            Salvage boat removal is the safe recovery of damaged, disabled, grounded, or sunken boats. 
            Whether the vessel was impacted by a storm, accident, or mechanical failure, our experienced team uses 
            specialized equipment to lift, secure, and remove the boat while minimizing environmental impact.
          </p>

          <p className="text-2xl text-gray-700 ">
            We manage the entire removal process, including site assessment, recovery, transport, and required 
            documentation. Our team also works with insurance companies to assist with salvage claims and paperwork. 
            If a recovered vessel is not suitable for salvage, we can transition it into junk boat removal and 
            handle legal disposal in compliance with Florida regulations.
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

<section className="py-16 md:py-20 bg-muted">
  <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
      
      <div>
        <h2 className="text-3xl md:text-4xl font-bold text-gray-700 mb-6">
          Salvage Boat Types We Remove
        </h2>

        <p className="text-lg text-muted-foreground mb-6">
          We safely recover and remove a wide range of salvage vessels, using specialized
          equipment and environmentally responsible methods
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
          <div className="flex items-center gap-2">
            <CheckCircle className="h-5 w-5 text-primary flex-shrink-0" />
            <span className="text-foreground">Sunken boats</span>
          </div>

          <div className="flex items-center gap-2">
            <CheckCircle className="h-5 w-5 text-primary flex-shrink-0" />
            <span className="text-foreground">Grounded vessels</span>
          </div>

          <div className="flex items-center gap-2">
            <CheckCircle className="h-5 w-5 text-primary flex-shrink-0" />
            <span className="text-foreground">Storm-damaged boats</span>
          </div>

          <div className="flex items-center gap-2">
            <CheckCircle className="h-5 w-5 text-primary flex-shrink-0" />
            <span className="text-foreground">Accident-damaged vessels</span>
          </div>

          <div className="flex items-center gap-2">
            <CheckCircle className="h-5 w-5 text-primary flex-shrink-0" />
            <span className="text-foreground">Disabled or flooded boats</span>
          </div>

          <div className="flex items-center gap-2">
            <CheckCircle className="h-5 w-5 text-primary flex-shrink-0" />
            <span className="text-foreground">Abandoned salvage boats</span>
          </div>
        </div>
      </div>

    </div>
  </div>
  
</section>

    <section className="py-16 md:py-20 bg-muted/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl">
          <h2 className="text-3xl md:text-4xl font-bold text-primary mb-6">
            Insurance Claim Support
          </h2>

          <p className="text-lg text-muted-foreground mb-8">
            Salvage boat removal often involves insurance claims, inspections, and
            documentation. We work directly with insurance companies to simplify the
            process and ensure safe, compliant vessel removal.
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div className="flex items-start gap-3">
              <CheckCircle className="h-5 w-5 text-primary mt-1 flex-shrink-0" />
              <span className="text-foreground">
                Coordinate directly with insurance adjusters
              </span>
            </div>

            <div className="flex items-start gap-3">
              <CheckCircle className="h-5 w-5 text-primary mt-1 flex-shrink-0" />
              <span className="text-foreground">
                Provide photos and detailed salvage documentation
              </span>
            </div>

            <div className="flex items-start gap-3">
              <CheckCircle className="h-5 w-5 text-primary mt-1 flex-shrink-0" />
              <span className="text-foreground">
                Support salvage and total-loss insurance claims
              </span>
            </div>

            <div className="flex items-start gap-3">
              <CheckCircle className="h-5 w-5 text-primary mt-1 flex-shrink-0" />
              <span className="text-foreground">
                Transport vessels to a secure storage facility for inspection
              </span>
            </div>

            <div className="flex items-start gap-3">
              <CheckCircle className="h-5 w-5 text-primary mt-1 flex-shrink-0" />
              <span className="text-foreground">
                Ensure compliance with insurance and Florida regulations
              </span>
            </div>

            <div className="flex items-start gap-3">
              <CheckCircle className="h-5 w-5 text-primary mt-1 flex-shrink-0" />
              <span className="text-foreground">
                Handle communication to keep the process moving smoothly
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>

    <Gallery />

     <section id="faq" className="py-16 md:py-20 bg-muted">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4" data-testid="text-pricing-title">
                Frequently Asked Questions
              </h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto" data-testid="text-pricing-subtitle">
                Find answers to common questions about Salvage boat removal process
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