import Link from "next/link";
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ExternalLink } from "lucide-react";

interface LocationCardProps {
  name: string;
  description: string;
  bookingUrl: string;
  slug: string;
  regionId: string;
}

export function LocationCard({ name, description, bookingUrl, slug, regionId }: LocationCardProps) {
  return (
    <Card className="h-full flex flex-col">
      <CardHeader>
        <CardTitle>{name}</CardTitle>
        <CardDescription>{description}</CardDescription>
      </CardHeader>
      <CardContent className="mt-auto pt-4">
        <div className="flex flex-col gap-2">
          <Link href={`/regions/${regionId}/locations/${slug}`}>
            <Button variant="outline" className="w-full">Learn More</Button>
          </Link>
          <Button asChild className="w-full">
            <a href={bookingUrl} target="_blank" rel="noopener noreferrer">
              Plan Your Visit <ExternalLink className="ml-2 h-4 w-4" />
            </a>
          </Button>
        </div>
      </CardContent>
    </Card>
  );
}