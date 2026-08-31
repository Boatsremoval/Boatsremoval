import React from "react";
import { City } from "@/data/cities";

interface Props {
  cities: (City & { distance?: number })[];
}
function slugifyCity(name: string) {
  return name
    .normalize("NFD")                      // split accents
    .replace(/[\u0300-\u036f]/g, "")      // remove accents
    .replace(/[^a-zA-Z0-9]/g, "-")        // any non-alphanumeric → "-"
    .replace(/-+/g, "-")                  // collapse multiple ---- to single -
    .replace(/^-|-$/g, "")                // trim "-" at start/end
    .toLowerCase();
}
export default function ServiceAreaList({ cities }: Props) {
  const schemaData = {
    "@context": "https://schema.org",
    "@type": "ItemList",
    "name": "Florida Boat Removal Service Areas",
    "itemListElement": cities.map((city, index) => ({
      "@type": "ListItem",
      "position": index + 1,
      "name": `${city.name}, Fl Boat Removal`,
      "url": `https://boatsremoval.com/boat-removal-fl-${slugifyCity(city.name)}`
    }))
  };

  return (
    <section className="py-16 bg-background border-t">
      <script type="application/ld+json">{JSON.stringify(schemaData)}</script>

      <div className="max-w-6xl mx-auto px-4 text-center">
        <h2 className="text-3xl font-bold mb-8">
          OTHER NEARBY TOWNS WE SERVE
        </h2>
        <p className="text-muted-foreground mb-10">
          <span className="text-primary font-semibold">Florida Boat Removal</span> proudly serves customers across all Florida. 
          Below are nearby cities where we provide junk boat removal, dismantle, towing, and disposal services.
        </p>

        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-3 text-left text-sm md:text-base">
          {cities.map((city) => (
            <a
              key={city.name}
             href={`/boat-removal-fl-${slugifyCity(city.name)}`}
              className="hover:text-primary transition-colors"
            >
              {city.name}
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
