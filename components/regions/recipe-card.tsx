import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { Utensils } from "lucide-react";

interface RecipeCardProps {
  name: string;
  description: string;
}

export function RecipeCard({ name, description }: RecipeCardProps) {
  return (
    <Card>
      <CardHeader>
        <CardTitle className="flex items-center gap-2">
          <Utensils className="h-5 w-5" />
          Traditional Recipe
        </CardTitle>
      </CardHeader>
      <CardContent>
        <h3 className="font-semibold mb-2">{name}</h3>
        <p className="text-muted-foreground">{description}</p>
      </CardContent>
    </Card>
  );
}