"use client";

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { Card } from "@/components/ui/card";

const regions = [
  { id: 'andalusia', name: 'Andalusia', path: 'M50,300 L200,350 L180,400 L40,320 Z' },
  { id: 'catalonia', name: 'Catalonia', path: 'M350,100 L400,80 L420,150 L360,140 Z' },
  { id: 'madrid', name: 'Madrid', path: 'M200,200 L230,190 L240,220 L210,230 Z' },
  // Simplified paths for demonstration - would need actual SVG paths for Spain's regions
];

export default function SpainMap() {
  const router = useRouter();
  const [activeRegion, setActiveRegion] = useState<string | null>(null);

  const handleRegionClick = (regionId: string) => {
    router.push(`/regions/${regionId}`);
  };

  const handleRegionHover = (regionId: string | null) => {
    setActiveRegion(regionId);
  };

  return (
    <div className="relative aspect-[4/3] w-full">
      <Card className="absolute inset-0 overflow-hidden">
        <svg
          viewBox="0 0 500 500"
          className="w-full h-full"
          style={{ background: '#f0f0f0' }}
        >
          {regions.map((region) => (
            <path
              key={region.id}
              d={region.path}
              fill={activeRegion === region.id ? '#e2e8f0' : '#fff'}
              stroke="#000"
              strokeWidth="1"
              className="cursor-pointer transition-colors hover:fill-muted"
              onClick={() => handleRegionClick(region.id)}
              onMouseEnter={() => handleRegionHover(region.id)}
              onMouseLeave={() => handleRegionHover(null)}
            />
          ))}
        </svg>
        {activeRegion && (
          <div className="absolute top-4 right-4 bg-white p-2 rounded shadow">
            {regions.find(r => r.id === activeRegion)?.name}
          </div>
        )}
      </Card>
    </div>
  );
}