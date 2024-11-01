import { Metadata } from 'next';
import SpainMap from '@/components/SpainMap';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

export const metadata: Metadata = {
  title: 'Interactive Map of Spain | Regional Guide',
  description: 'Explore Spain\'s 17 regions through our interactive map. Discover local attractions, cuisine, and culture across the country.',
  keywords: 'Spain map, Spanish regions, interactive map, Spain tourism',
};

export default function MapPage() {
  return (
    <div className="max-w-7xl mx-auto px-4 py-8">
      <h1 className="text-4xl font-bold mb-8 text-center">
        Explore Spain's Regions
      </h1>
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        <Card className="lg:col-span-2">
          <CardHeader>
            <CardTitle>Interactive Map</CardTitle>
          </CardHeader>
          <CardContent>
            <SpainMap />
          </CardContent>
        </Card>
        <div className="space-y-6">
          <Card>
            <CardHeader>
              <CardTitle>Region Information</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground">
                Click on a region to learn more about its culture, cuisine, and attractions.
              </p>
            </CardContent>
          </Card>
          <Card>
            <CardHeader>
              <CardTitle>Quick Facts</CardTitle>
            </CardHeader>
            <CardContent>
              <ul className="space-y-2 text-sm">
                <li>• 17 autonomous communities</li>
                <li>• 50 provinces</li>
                <li>• Diverse landscapes from mountains to beaches</li>
                <li>• Rich cultural heritage</li>
                <li>• Unique regional cuisines</li>
              </ul>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
}