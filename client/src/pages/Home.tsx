import { Helmet } from "react-helmet-async";
import Header from "@/components/Header";
import HeroSection from "@/components/HeroSection";
import WhoWeAre from "@/components/WhoWeAre";
import ThreeStepProcess from "@/components/ThreeStepProcess";
import WhatWeDo from "@/components/WhatWeDo";
import VesselType from "@/components/VesselType";
import WhyChooseUs from "@/components/WhyChooseUs";
import FAQ from "@/components/FAQ";
import Gallery from "@/components/Gallery";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <div className="min-h-screen bg-background">
      <Helmet>
        <link rel="canonical" href="https://boatsremoval.com/" />
      </Helmet>
      <Header />
      <main className="relative">
        <HeroSection />
        <WhoWeAre />
        <ThreeStepProcess />
        <WhatWeDo />
        <VesselType />
        <WhyChooseUs />
        <FAQ />
        <Gallery />
        <ContactSection />
      </main>
      <Footer />
    </div>
  );
}
