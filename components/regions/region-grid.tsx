import { RegionCard } from "./region-card";
import { MAIN_REGIONS } from "@/lib/constants";

export function RegionGrid() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {MAIN_REGIONS.map((region) => (
        <RegionCard
          key={region.id}
          id={region.id}
          name={region.name}
          description={region.description}
        />
      ))}
    </div>
  );
}