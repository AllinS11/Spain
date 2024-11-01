import Link from "next/link";
import { Card, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";

interface RegionCardProps {
  id: string;
  name: string;
  description: string;
}

export function RegionCard({ id, name, description }: RegionCardProps) {
  return (
    <Link href={`/regions/${id}`}>
      <Card className="h-full hover:shadow-lg transition-shadow">
        <CardHeader>
          <CardTitle>{name}</CardTitle>
          <CardDescription>{description}</CardDescription>
        </CardHeader>
      </Card>
    </Link>
  );
}