import { notFound } from "next/navigation";
import { MAIN_REGIONS } from "@/lib/constants";
import { getRegionLocations } from "@/lib/data";
import { Card, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { RecipeCard } from "@/components/regions/recipe-card";
import { LocationCard } from "@/components/regions/location-card";
import Link from "next/link";
import { Metadata } from "next";
import {
  Pagination,
  PaginationContent,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from "@/components/ui/pagination";

interface Props {
  params: {
    region: string;
  };
  searchParams: {
    page?: string;
  };
}

const ITEMS_PER_PAGE = 6;

export async function generateStaticParams() {
  return MAIN_REGIONS.map((region) => ({
    region: region.id,
  }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const region = MAIN_REGIONS.find((r) => r.id === params.region);
  if (!region) return {};

  return {
    title: `${region.name} - Regions of Spain`,
    description: region.description,
    openGraph: {
      title: `${region.name} - Regions of Spain`,
      description: region.description,
    },
  };
}

export default function RegionPage({ params, searchParams }: Props) {
  const region = MAIN_REGIONS.find((r) => r.id === params.region);
  
  if (!region) {
    notFound();
  }

  const locations = getRegionLocations(params.region);
  const currentPage = Number(searchParams.page) || 1;
  const totalPages = Math.ceil(locations.length / ITEMS_PER_PAGE);
  
  const paginatedLocations = locations.slice(
    (currentPage - 1) * ITEMS_PER_PAGE,
    currentPage * ITEMS_PER_PAGE
  );

  return (
    <main className="container py-6 md:py-12">
      <Link href="/" className="text-sm text-muted-foreground hover:text-primary mb-6 block">
        ← Back to all regions
      </Link>
      
      <h1 className="text-4xl font-bold mb-4">{region.name}</h1>
      <p className="text-xl text-muted-foreground mb-8">{region.description}</p>

      <div className="grid gap-8">
        <section>
          <h2 className="text-2xl font-semibold mb-6">Traditional Recipe</h2>
          <RecipeCard 
            name={region.name}
            description={region.recipe || ""}
          />
        </section>

        <section>
          <h2 className="text-2xl font-semibold mb-6">Explore {region.name}</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {paginatedLocations.map((location) => (
              <LocationCard
                key={location.name}
                name={location.name}
                description={location.description}
                bookingUrl={location.bookingUrl}
                slug={location.name.toLowerCase().replace(/\s+/g, '-')}
                regionId={params.region}
              />
            ))}
          </div>

          {totalPages > 1 && (
            <Pagination className="mt-8">
              <PaginationContent>
                <PaginationItem>
                  <PaginationPrevious
                    href={`/regions/${params.region}?page=${currentPage - 1}`}
                    disabled={currentPage <= 1}
                  />
                </PaginationItem>
                
                {Array.from({ length: totalPages }, (_, i) => i + 1).map((page) => (
                  <PaginationItem key={page}>
                    <PaginationLink
                      href={`/regions/${params.region}?page=${page}`}
                      isActive={currentPage === page}
                    >
                      {page}
                    </PaginationLink>
                  </PaginationItem>
                ))}

                <PaginationItem>
                  <PaginationNext
                    href={`/regions/${params.region}?page=${currentPage + 1}`}
                    disabled={currentPage >= totalPages}
                  />
                </PaginationItem>
              </PaginationContent>
            </Pagination>
          )}
        </section>
      </div>
    </main>
  );
}