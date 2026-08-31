import { useRef, useState, useEffect } from "react";
import { Helmet } from "react-helmet-async";
import heroImage from "@assets/Main_photo.webp";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import WhyChooseUs from "@/components/WhyChooseUs";
import Ready from "@/components/Ready";

export default function About() {
  const recentBoats = [
    "/attached_assets/Boat_images/Boat_removal_12.webp",
    "/attached_assets/Boat_images/Boat_removal_7.webp",
    "/attached_assets/Boat_images/Boat_disposal_6.webp",
    "/attached_assets/Boat_images/Boat_removal_19.webp",
    "/attached_assets/Boat_images/Boat_removal_20.webp",
    "/attached_assets/Boat_images/Boat_disposal_10.webp",
  ];

  const [activeIndex, setActiveIndex] = useState(0);
  const scrollRef = useRef<HTMLDivElement>(null);

  const handleScroll = () => {
    if (!scrollRef.current) return;

    const container = scrollRef.current;
    const slide = container.firstElementChild as HTMLElement;
    if (!slide) return;

    const slideWidth = slide.offsetWidth;
    const index = Math.round(container.scrollLeft / slideWidth);

    setActiveIndex(index);
  };

  useEffect(() => {
    const container = scrollRef.current;
    if (!container) return;

    container.addEventListener("scroll", handleScroll);
    return () => container.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToIndex = (index: number) => {
    if (!scrollRef.current) return;

    const container = scrollRef.current;
    const slideWidth = container.offsetWidth;

    container.scrollTo({
      left: index * slideWidth,
      behavior: "smooth",
    });

    setActiveIndex(index);
  };

  return (
<>
<Helmet>
  <link rel="canonical" href="https://boatsremoval.com/about" />
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
          ABOUT FLORIDA BOAT REMOVAL
        </h1>

        <p className="text-xl sm:text-2xl md:text-3xl font-semibold text-primary">
          Trusted boat removal and disposal team proudly serving Florida since 1997
        </p>

        </div>
    </section>

      {/* ================= WHO WE ARE ================= */}
      <section className="pb-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white border-4 border-primary rounded-2xl p-8 max-w-4xl mx-auto text-left space-y-5">
            <p>
              <span className="text-primary font-bold">Florida Boat Removal</span>{" "}
              is a <strong>local, family-run company</strong> providing professional
              boat removal services <strong>since 1997</strong>.
            </p>

            <p>
              <strong>Boats on land, in the water, or even submerged</strong> —
              we handle the entire process from start to finish using experienced
              crews and specialized equipment.
            </p>

            <p>
              We focus on <strong>eco-friendly, professional utilization and disposal</strong>,
              following all Florida state and environmental regulations to protect
              waterways and coastal areas.
            </p>

            <p>
              As a <strong>small local business</strong>, we avoid the high overhead
              of national operators, allowing us to provide{" "}
              <strong>better pricing with hands-on service</strong>.
            </p>

            <p>
              Our services help property owners avoid{" "}
              <strong>code violations, fines, and storage fees</strong> while
              ensuring legal and responsible removal.
            </p>
          </div>
        </div>
      </section>

 <section className="py-16 md:py-20 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-black mb-4">
            <span className="text-primary">Florida Boat Removal </span> numbers
          </h2>
          
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* 1 */}
          <Card className="text-center border-4 border-orange-600 rounded-xl">
            <CardHeader>
              <div className="mx-auto w-14 h-14 rounded-full bg-primary text-primary-foreground flex items-center justify-center text-2xl font-bold mb-4">
                29
              </div>
              <CardTitle>YEARS IN BUSINESS</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground">
                We are a second-generation, family-owned company proudly serving Florida since 1997
              </p>
            </CardContent>
          </Card>

          {/* 2 */}
          <Card className="text-center border-4 border-orange-600 rounded-xl">
            <CardHeader>
              <div className="mx-auto w-20 h-20 rounded-full bg-primary text-primary-foreground flex items-center justify-center text-2xl font-bold mb-4">
                5000+
              </div>
              <CardTitle>BOAT REMOVALS DONE</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground">
                Trusted by thousands, delivering real environmental benefits
              </p>
            </CardContent>
          </Card>

          {/* 3 */}
         <Card className="text-center border-4 border-orange-600 rounded-xl">
            <CardHeader>
              <div className="mx-auto w-14 h-14 rounded-full bg-primary text-primary-foreground flex items-center justify-center text-2xl font-bold mb-4">
                15
              </div>
              <CardTitle>BOAT REMOVAL TEAMS</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground">
                With 15 boat removal teams across Florida, we provide fast, local service wherever you’re located
              </p>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>

<WhyChooseUs />

      {/* ================= RECENT JOBS ================= */}
      <section className="pb-24 bg-muted">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center bg-white py-12 rounded-2xl border-4 border-primary shadow-lg">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900">
              OUR RECENT JOBS
            </h2>

            <div className="mt-4 mx-auto h-1 w-24 bg-primary rounded-full"></div>

            <div
              ref={scrollRef}
              className="flex overflow-x-auto snap-x snap-mandatory scrollbar-hide scroll-smooth mt-8"
            >
              {recentBoats.map((img, index) => (
                <div
                  key={index}
                  className="flex-shrink-0 w-full snap-start rounded-lg overflow-hidden"
                >
                  <img
                    src={img}
                    alt={`Recent removal ${index + 1}`}
                    className="w-full h-80 sm:h-96 object-cover transition-transform hover:scale-105"
                  />
                </div>
              ))}
            </div>

            <div className="flex justify-center mt-4 space-x-2">
              {recentBoats.map((_, index) => (
                <button
                  key={index}
                  onClick={() => scrollToIndex(index)}
                  className={`w-3 h-3 rounded-full transition-colors ${
                    activeIndex === index ? "bg-primary" : "bg-gray-300"
                  }`}
                />
              ))}
            </div>
          </div>
        </div>
      </section>
    <Ready />
    </main>
    <Footer />
 </>
  );
}
