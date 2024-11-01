import { MAIN_REGIONS } from "@/lib/constants";
import { Card, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import Link from "next/link";

export default function HomePage() {
  return (
    <main className="container py-6 md:py-12">
      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold mb-4">Discover Spain's Regions</h1>
        <p className="text-xl text-muted-foreground">
          Explore the diverse cultures, cuisines, and landscapes of Spain's 17 autonomous communities
        </p>
      </div>

      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {MAIN_REGIONS.map((region) => (
          <Link key={region.id} href={`/regions/${region.id}`}>
            <Card className="h-full hover:bg-muted/50 transition-colors">
              <CardHeader>
                <CardTitle className="mb-2">{region.name}</CardTitle>
                <CardDescription>{region.description}</CardDescription>
              </CardHeader>
            </Card>
          </Link>
        ))}
      </div>
    </main>
  );
}