import Link from 'next/link';
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from "@/components/ui/card";
import { ArrowRight } from 'lucide-react';

interface RegionCardProps {
  id: string;
  name: string;
  description: string;
  locationCount: number;
}

export default function RegionCard({ id, name, description, locationCount }: RegionCardProps) {
  return (
    <Link href={`/regions/${id}`}>
      <Card className="h-full hover:shadow-lg transition-shadow">
        <CardHeader>
          <CardTitle className="flex items-center justify-between">
            {name}
            <ArrowRight className="h-5 w-5 text-muted-foreground" />
          </CardTitle>
        </CardHeader>
        <CardContent>
          <p className="text-muted-foreground mb-4">{description}</p>
          <p className="text-sm font-medium text-primary">
            {locationCount} locations to explore
          </p>
        </CardContent>
      </Card>
    </Link>
  );
}