import Link from "next/link";
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ExternalLink, MapPin } from "lucide-react";

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
        <div className="flex items-start gap-2">
          <MapPin className="h-5 w-5 flex-shrink-0 text-primary mt-1" />
          <div>
            <CardTitle className="text-xl">{name}</CardTitle>
            <CardDescription className="mt-2">{description}</CardDescription>
          </div>
        </div>
      </CardHeader>
      <CardContent className="mt-auto pt-4">
        <div className="flex flex-col gap-2">
          <Link href={`/regions/${regionId}/locations/${slug}`}>
            <Button variant="outline" className="w-full">
              Learn More
            </Button>
          </Link>
          <a href={bookingUrl} target="_blank" rel="noopener noreferrer">
            <Button className="w-full">
              Plan Your Visit
              <ExternalLink className="ml-2 h-4 w-4" />
            </Button>
          </a>
        </div>
      </CardContent>
    </Card>
  );
}