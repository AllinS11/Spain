import { Card, CardHeader, CardTitle, CardDescription, CardContent, CardFooter } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ExternalLink } from 'lucide-react';

interface LocationCardProps {
  name: string;
  description: string;
  bookingUrl: string;
}

export default function LocationCard({ name, description, bookingUrl }: LocationCardProps) {
  return (
    <Card className="h-full flex flex-col">
      <CardHeader>
        <CardTitle>{name}</CardTitle>
      </CardHeader>
      <CardContent className="flex-grow">
        <p className="text-muted-foreground">{description}</p>
      </CardContent>
      <CardFooter>
        <Button asChild className="w-full">
          <a href={bookingUrl} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2">
            Explore <ExternalLink className="h-4 w-4" />
          </a>
        </Button>
      </CardFooter>
    </Card>
  );
}