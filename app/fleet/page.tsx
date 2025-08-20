// app/fleet/page.tsx

export const dynamic = 'force-dynamic'; // Add this line!

import VehicleCard from "@/components/VehicleCard";
import { Vehicle } from "@/types";

async function getVehicles() {
  try {
    const res = await fetch('https://yourride-guwahati-backend.onrender.com/api/vehicles', {
      cache: 'no-store'
    });
    if (!res.ok) {
      throw new Error('Failed to fetch vehicles');
    }
    return res.json();
  } catch (error) {
    console.error(error);
    return [];
  }
}

export default async function FleetPage() {
  const vehicles: Vehicle[] = await getVehicles();

  return (
    <main className="container mx-auto px-6 py-8">
      <h1 className="text-3xl font-bold text-center">Our Vehicle Fleet</h1>
      <p className="mt-4 text-lg text-gray-600 text-center">
        Choose from a wide variety of bikes and cars to suit your needs.
      </p>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-8">
        {vehicles.map((vehicle) => (
          <VehicleCard key={vehicle._id} vehicle={vehicle} />
        ))}
      </div>
    </main>
  );
}