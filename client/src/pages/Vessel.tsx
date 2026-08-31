import { Link } from "wouter";
import { Helmet } from "react-helmet-async";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Ruler, Weight, Ship } from "lucide-react";
import heroImage from "@assets/Main2.webp";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import VesselType from "@/components/VesselType"
import Gallery from "@/components/Gallery";
import Ready from "@/components/Ready";

export default function Vessel() {
  return (
  <>
  <Helmet>
    <link rel="canonical" href="https://boatsremoval.com/vessel" />
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
          <span className="text-primary">FLORIDA BOAT REMOVAL</span>
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
            BOAT WE CAN REMOVE
          </h2>
           
        </div>

        {/* ================= SERVICES GRID ================= */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          
          {/* LENGHT */}
                    <a className="block">
              <Card className="text-center border-4 border-orange-600 rounded-xl h-full cursor-pointer hover:shadow-xl hover:-translate-y-1 transition">
                <CardHeader>
                  <Ruler className="mx-auto h-12 w-12 text-primary mb-4" />
                  <CardTitle>60 FT</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">
                    ANY VESSEL UP TO 60 FT
                  </p>
                </CardContent>
              </Card>
            </a>
         

          {/* WEIGHT */}
          
            <a className="block">
              <Card className="text-center border-4 border-orange-600 rounded-xl h-full cursor-pointer hover:shadow-xl hover:-translate-y-1 transition">
                <CardHeader>
                  <Weight className="mx-auto h-12 w-12 text-primary mb-4" />
                  <CardTitle>40 TONS</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">
                    ANY VESSEL UP TO 40 TONS
                  </p>
                </CardContent>
              </Card>
            </a>
        

          {/* ANY CONDITION */}
                    <a className="block">
              <Card className="text-center border-4 border-orange-600 rounded-xl h-full cursor-pointer hover:shadow-xl hover:-translate-y-1 transition">
                <CardHeader>
                  <Ship className="mx-auto h-12 w-12 text-primary mb-4" />
                  <CardTitle>ANY CONDITION</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">
                    Abondoned, Junk, Sunken, Broken, Salvage 
                  </p>
                </CardContent>
              </Card>
            </a>
            </div>
        </div>
     
     </section>
    <VesselType />
    <Gallery />
    <Ready />
     </main>
     <Footer />
  </>
  );

}
