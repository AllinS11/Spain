import { notFound } from 'next/navigation';
import { regions } from '@/lib/data';
import { generateMetadata } from '@/lib/utils';
import { Button } from '@/components/ui/button';

interface Props {
  params: {
    region: string;
    location: string;
  };
}

export async function generateStaticParams() {
  return regions.flatMap((region) =>
    region.locations.map((location) => ({
      region: region.id,
      location: location.name.toLowerCase(),
    }))
  );
}

export async function generateMetadata({ params }: Props) {
  const region = regions.find((r) => r.id === params.region);
  const location = region?.locations.find(
    (l) => l.name.toLowerCase() === params.location
  );
  if (!region || !location) return {};

  return generateMetadata(
    `${location.name}, ${region.name} - Regions of Spain`,
    `Visit ${location.name} in ${region.name}. Discover local attractions, culture, and plan your stay in this beautiful Spanish destination.`
  );
}

export default function LocationPage({ params }: Props) {
  const region = regions.find((r) => r.id === params.region);
  const location = region?.locations.find(
    (l) => l.name.toLowerCase() === params.location
  );

  if (!region || !location) notFound();

  return (
    <main className="max-w-7xl mx-auto px-4 py-12">
      <h1 className="text-4xl font-bold mb-2">{location.name}</h1>
      <p className="text-xl text-muted-foreground mb-8">{region.name}</p>
      
      <section className="prose max-w-none mb-12">
        <p>{location.description}</p>
      </section>

      <Button asChild>
        <a href={location.bookingUrl} target="_blank" rel="noopener noreferrer">
          Plan Your Visit
        </a>
      </Button>
    </main>
  );
}