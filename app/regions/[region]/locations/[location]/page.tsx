import { notFound } from "next/navigation";
import { getLocationBySlug, getRegionById } from "@/lib/data";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { ExternalLink, MapPin } from "lucide-react";
import Link from "next/link";
import type { Metadata } from "next";
import { MAIN_REGIONS } from "@/lib/constants";
import { locations } from "@/lib/data";
import { slugify } from "@/lib/utils";

interface Props {
  params: {
    region: string;
    location: string;
  };
}

export async function generateStaticParams() {
  return MAIN_REGIONS.flatMap((region) => {
    const regionLocations = locations.filter(loc => loc.region === region.id);
    return regionLocations.map((location) => ({
      region: region.id,
      location: slugify(location.name),
    }));
  });
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const location = getLocationBySlug(params.region, params.location);
  const region = getRegionById(params.region);

  if (!location || !region) {
    return {
      title: "Location Not Found",
      description: "The requested location could not be found.",
    };
  }

  return {
    title: `${location.name}, ${region.name} - Regions of Spain`,
    description: location.description,
    openGraph: {
      title: `${location.name} - ${region.name}`,
      description: location.description,
    },
  };
}

export default function LocationPage({ params }: Props) {
  const location = getLocationBySlug(params.region, params.location);
  const region = getRegionById(params.region);

  if (!location || !region) {
    notFound();
  }

  return (
    <main className="container py-6 md:py-12">
      <Link 
        href={`/regions/${params.region}`}
        className="text-sm text-muted-foreground hover:text-primary mb-6 block"
      >
        ← Back to {region.name}
      </Link>

      <h1 className="text-4xl font-bold mb-2">{location.name}</h1>
      <p className="text-xl text-muted-foreground mb-8">{region.name}</p>

      <div className="grid gap-8 lg:grid-cols-3">
        <div className="lg:col-span-2">
          <div className="prose max-w-none mb-8">
            <p>{location.description}</p>
          </div>

          <h2 className="text-2xl font-bold mb-4">Highlights</h2>
          <div className="grid gap-4 sm:grid-cols-2">
            {location.highlights.map((highlight) => (
              <Card key={highlight}>
                <CardContent className="flex items-start gap-2 p-4">
                  <MapPin className="h-5 w-5 flex-shrink-0 text-primary" />
                  <span>{highlight}</span>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        <div>
          <Card className="sticky top-24">
            <CardContent className="p-6">
              <h2 className="text-xl font-bold mb-4">Plan Your Visit</h2>
              <p className="text-muted-foreground mb-6">
                Ready to explore {location.name}? Book your perfect stay and start your adventure in {region.name}.
              </p>
              <Button asChild size="lg" className="w-full">
                <a 
                  href={location.bookingUrl} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="flex items-center gap-2"
                >
                  Book Now <ExternalLink className="h-5 w-5" />
                </a>
              </Button>
            </CardContent>
          </Card>
        </div>
      </div>
    </main>
  );
}