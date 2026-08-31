import { Link } from "wouter";
import { Helmet } from "react-helmet-async";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Biohazard,  HandCoins, Ship } from "lucide-react";
import heroImage from "@assets/Main3.webp";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Ready from "@/components/Ready";
import SunkenBoatImage from "@assets/Sunk_boat.webp";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const faqs = [
  {
    id: "faq-1",
    question: "What is the maximum depth you can work with sunken boats?",
    answer: "We can safely remove sunken boats from shallow waters and depths of up to 100 feet. Using specialized equipment such as cranes, winches, and flotation devices, we ensure the recovery is safe, efficient, and environmentally compliant",
  },
  {
    id: "faq-2",
    question: "Can my insurance cover your sunken boat removal services?",
    answer: "Yes. In many cases, insurance companies can cover sunken boat removal costs. We work directly with adjusters, provide all necessary documentation and photos, and coordinate the process to make filing your claim as smooth and hassle-free as possible",
  },
  {
    id: "faq-3",
    question: "Can you handle hazardous materials safely during sunken boat removal?",
    answer: "Yes. We carefully manage all hazardous materials, including fuel, batteries, oils, and chemicals. We use special floating barriers to contain any potential spills and ensure safe removal and disposal, fully complying with environmental regulations",
  },
  {
    id: "faq-4",
    question: "What areas do you service?",
    answer: "We proudly serve all of Florida! No matter where your boat is located — from Miami to Jacksonville, Tampa to the Keys — our local teams are ready to provide fast and professional boat removal anywhere in the state",
  }
];


export default function SunkenBoatRemoval() {
  return (
  <>
  <Helmet>
    <link rel="canonical" href="https://boatsremoval.com/sunken-boat-removal" />
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
        SUNKEN BOAT REMOVAL
        </h1>

        <p className="text-xl sm:text-2xl md:text-3xl font-semibold text-white">
          Sunken boats removed the easy way — no stress, no mess. 24/7 Emergency Service
        </p>

        </div>
    </section>
<section className="w-full py-16 bg-white">
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
        
        {/* Text Content */}
        <div>
          <h2 className="text-4xl text-orange-600 md:text-4xl font-bold mb-6">
            Sunken Boat Removal Done Right
          </h2>

          <p className="text-2xl text-gray-700 mb-4">
            We specialize in removing sunken boats quickly and safely throughout Florida. Using 
  specialized equipment and professional techniques, we recover vessels from waterways, 
  shorelines, or private property, and handle transport, disposal, and all paperwork.
          </p>

          <p className="text-2xl text-gray-700 mb-4 ">
            Sunken vessels often pose safety hazards, contain hazardous materials, and can damage surrounding property or waterways if not handled correctly. Our team uses cranes, winches, flotation devices, and other specialized tools to safely lift, transport, and remove submerged boats
          </p>
          <p className="text-2xl text-gray-700 ">
          We understand how critical fast action is, which is why we provide 24/7 emergency sunken boat removal services.
          </p>
        </div>

        {/* Image */}
        <div className="w-full">
          <img
            src={SunkenBoatImage}
            alt="Sunken boat removal"
            className="w-full h-auto rounded-2xl shadow-lg object-cover"
          />
        </div>

      </div>
    </section>

        <section className="py-16 md:py-20 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-700 mb-4">
            ACT FAST!
          </h2>
          <p className="text-muted-foreground">
                If your boat got sunken it is important to act ASAP
              </p>
        
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Step 1 */}
          <Card className="text-center border-4 border-orange-600 rounded-xl">
            <CardHeader>
              <Biohazard className="mx-auto h-12 w-12 text-primary mb-4" />
            <CardTitle>Environmental Hazards</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground">
                The less time a vessel remains underwater, the lower the environmental risk
              </p>
            </CardContent>
          </Card>

          {/* Step 2 */}
          <Card className="text-center border-4 border-orange-600 rounded-xl">
            <CardHeader>
              <Ship className="mx-auto h-12 w-12 text-primary mb-4" />
              <CardTitle>Repair</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground">
                The shorter the time a vessel is submerged, the better the chances of recovery
              </p>
            </CardContent>
          </Card>

          {/* Step 3 */}
         <Card className="text-center border-4 border-orange-600 rounded-xl">
            <CardHeader>
              <HandCoins className="mx-auto h-12 w-12 text-primary mb-4" />
              <CardTitle>Fines & Penalties</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground">
                Acting quickly helps minimize the risk of fines and penalties
              </p>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
       
       <section className="py-16 md:py-20 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-black mb-4">
            HOW OUR SUNKEN BOAT REMOVAL PROCESS WORKS
          </h2>
           
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* Step 1 */}
          <Card className="text-center border-4 border-orange-600 rounded-xl">
            <CardHeader>
              <div className="mx-auto w-14 h-14 rounded-full bg-primary text-primary-foreground flex items-center justify-center text-2xl font-bold mb-4">
                1
              </div>
              <CardTitle>Contact Us</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground">
                Don't wait, contact us ASAP
              </p>
            </CardContent>
          </Card>

          {/* Step 2 */}
          <Card className="text-center border-4 border-orange-600 rounded-xl">
            <CardHeader>
              <div className="mx-auto w-14 h-14 rounded-full bg-primary text-primary-foreground flex items-center justify-center text-2xl font-bold mb-4">
                2
              </div>
              <CardTitle>Initial Assessment</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground">
                We evaluate the sunken boat’s condition, location, and any hazards, including environmental risks and regulatory requirements
              </p>
            </CardContent>
          </Card>

          {/* Step 3 */}
         <Card className="text-center border-4 border-orange-600 rounded-xl">
            <CardHeader>
              <div className="mx-auto w-14 h-14 rounded-full bg-primary text-primary-foreground flex items-center justify-center text-2xl font-bold mb-4">
                3
              </div>
              <CardTitle>Scheduling & Emergency Response</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground">
                 We schedule removal at the earliest possible time. For urgent cases, we offer 24/7 emergency service to minimize environmental impact and risk of fines
              </p>
            </CardContent>
          </Card>
        
        {/* Step 4 */}
         <Card className="text-center border-4 border-orange-600 rounded-xl">
            <CardHeader>
              <div className="mx-auto w-14 h-14 rounded-full bg-primary text-primary-foreground flex items-center justify-center text-2xl font-bold mb-4">
                4
              </div>
              <CardTitle>Equipment Setup & Safety</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground">
                 Our team brings all that required, including cranes, winches, flotation devices, and other specialized tools. We secure the site and ensure safety for personnel, the public, and the environment
              </p>
            </CardContent>
          </Card>
   
      {/* Step 5 */}
         <Card className="text-center border-4 border-orange-600 rounded-xl">
            <CardHeader>
              <div className="mx-auto w-14 h-14 rounded-full bg-primary text-primary-foreground flex items-center justify-center text-2xl font-bold mb-4">
                4
              </div>
              <CardTitle>Disposal & Documentation</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground">
                 We handle legal disposal, recycling of materials, and complete all required paperwork. If applicable, we assist with insurance claims to make the process smooth and compliant
              </p>
            </CardContent>
          </Card>
    
      </div>
   </div>

    </section>
    

     <section id="faq" className="py-16 md:py-20 bg-muted">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4" data-testid="text-pricing-title">
                Frequently Asked Questions
              </h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto" data-testid="text-pricing-subtitle">
                Find answers to common questions about Sunken boat removal process
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