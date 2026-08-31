import { Link } from "wouter";
import { Helmet } from "react-helmet-async";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Trash, Ship, Waves } from "lucide-react";
import heroImage from "@assets/Main1.webp";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import WhyChooseUs from "@/components/WhyChooseUs"
import Gallery from "@/components/Gallery";
import Ready from "@/components/Ready";

export default function Services() {
  return (
  <>
  <Helmet>
    <link rel="canonical" href="https://boatsremoval.com/services" />
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
        <h1 className="text-3xl sm:text-4xl md:text-6xl lg:text-7xl font-extrabold text-white leading-tight">
          <span className="text-primary">FLORIDA BOAT REMOVAL</span> SERVICES
        </h1>

        <p className="text-xl sm:text-2xl md:text-3xl font-semibold text-white">
          No boat removal job is too small or too big for us
        </p>

        </div>
    </section>

    <section className="py-16 md:py-20 bg-secondary">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* ================= TITLE ================= */}
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
           We can take care of any vessel type up to 60 ft anywhere: on land, on water, even sunken
          </h2>
           
        </div>

        {/* ================= SERVICES GRID ================= */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          
          {/* Junk Boat Removal */}
          <Link href="/junk-boat-removal">
            <a className="block">
              <Card className="text-center border-4 border-orange-600 rounded-xl h-full cursor-pointer hover:shadow-xl hover:-translate-y-1 transition">
                <CardHeader>
                  <Trash className="mx-auto h-12 w-12 text-primary mb-4" />
                  <CardTitle>Junk Boat Removal</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">
                    Removal of old, abandoned, or unusable boats from yards,
                    marinas, docks, and private property.
                  </p>
                </CardContent>
              </Card>
            </a>
          </Link>

          {/* Salvage Boat Removal */}
          <Link href="/salvage-boat-removal">
            <a className="block">
              <Card className="text-center border-4 border-orange-600 rounded-xl h-full cursor-pointer hover:shadow-xl hover:-translate-y-1 transition">
                <CardHeader>
                  <Ship className="mx-auto h-12 w-12 text-primary mb-4" />
                  <CardTitle>Salvage Boat Removal</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">
                    Safe and legal removal of damaged or wrecked boats after
                    storms, accidents, or insurance claims.
                  </p>
                </CardContent>
              </Card>
            </a>
          </Link>

          {/* Sunken Boat Removal */}
          <Link href="/sunken-boat-removal">
            <a className="block">
              <Card className="text-center border-4 border-orange-600 rounded-xl h-full cursor-pointer hover:shadow-xl hover:-translate-y-1 transition">
                <CardHeader>
                  <Waves className="mx-auto h-12 w-12 text-primary mb-4" />
                  <CardTitle>Sunken Boat Removal</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">
                    Professional recovery and disposal of partially or fully
                    sunken boats from waterways and marinas.
                  </p>
                </CardContent>
              </Card>
            </a>
          </Link>

        </div>
       
      </div>
    </section>
    <WhyChooseUs />
    <Gallery />
    <Ready />
     </main>
     <Footer />
  </>
  );

}
