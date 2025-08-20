// app/fleet/page.tsx
import VehicleCard from "@/components/VehicleCard";
import { Vehicle } from "@/types"; // Import the shared type

async function getVehicles() {
  // ... (the rest of the getVehicles function is the same)
  try {
    const res = await fetch('https://yourride-backend.onrender.com/api/vehicles', {
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
  const vehicles: Vehicle[] = await getVehicles(); // Use the Vehicle type here

  return (
    <main className="container mx-auto px-6 py-8">
      <h1 className="text-3xl font-bold text-center">Our Vehicle Fleet</h1>
      <p className="mt-4 text-lg text-gray-600 text-center">
        Choose from a wide variety of bikes and cars to suit your needs.
      </p>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-8">
        {vehicles.map((vehicle) => ( // No more 'any' type!
          <VehicleCard key={vehicle._id} vehicle={vehicle} />
        ))}
      </div>
    </main>
  );
}