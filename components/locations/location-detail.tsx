import { Location } from "@/lib/data";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { MapPin, Calendar, Info, ExternalLink, Compass } from "lucide-react";

interface LocationDetailProps {
  location: Location;
  regionName: string;
}

export function LocationDetail({ location, regionName }: LocationDetailProps) {
  return (
    <div className="grid gap-8 lg:grid-cols-3">
      <div className="lg:col-span-2 space-y-8">
        <section>
          <h2 className="text-2xl font-bold mb-4">About {location.name}</h2>
          <div className="prose max-w-none">
            <p className="text-muted-foreground leading-relaxed">{location.description}</p>
            {location.history && (
              <div className="mt-4">
                <h3 className="text-xl font-semibold mb-2">History</h3>
                <p className="text-muted-foreground">{location.history}</p>
              </div>
            )}
          </div>
        </section>

        <section>
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
        </section>

        {location.activities && (
          <section>
            <h2 className="text-2xl font-bold mb-4">Things to Do</h2>
            <div className="grid gap-4 sm:grid-cols-2">
              {location.activities.map((activity) => (
                <Card key={activity}>
                  <CardContent className="flex items-start gap-2 p-4">
                    <Compass className="h-5 w-5 flex-shrink-0 text-primary" />
                    <span>{activity}</span>
                  </CardContent>
                </Card>
              ))}
            </div>
          </section>
        )}
      </div>

      <div className="space-y-6">
        <Card>
          <CardContent className="p-6 space-y-6">
            {location.bestTimeToVisit && (
              <div className="flex gap-2">
                <Calendar className="h-5 w-5 flex-shrink-0 text-primary" />
                <div>
                  <h3 className="font-semibold">Best Time to Visit</h3>
                  <p className="text-sm text-muted-foreground">{location.bestTimeToVisit}</p>
                </div>
              </div>
            )}

            {location.localTips && (
              <div className="flex gap-2">
                <Info className="h-5 w-5 flex-shrink-0 text-primary" />
                <div>
                  <h3 className="font-semibold">Local Tips</h3>
                  <ul className="text-sm text-muted-foreground list-disc pl-4 mt-2 space-y-2">
                    {location.localTips.map((tip) => (
                      <li key={tip}>{tip}</li>
                    ))}
                  </ul>
                </div>
              </div>
            )}
          </CardContent>
        </Card>

        <Button asChild size="lg" className="w-full">
          <a 
            href={location.bookingUrl} 
            target="_blank" 
            rel="noopener noreferrer"
            className="flex items-center gap-2"
          >
            Plan Your Visit <ExternalLink className="h-5 w-5" />
          </a>
        </Button>
      </div>
    </div>
  );
}