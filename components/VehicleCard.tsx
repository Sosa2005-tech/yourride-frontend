// components/VehicleCard.tsx

// We define a 'type' for our vehicle data for TypeScript
type Vehicle = {
  _id: string;
  name: string;
  type: string;
  price: number;
  imageUrl: string;
  isAvailable: boolean;
};

// The component accepts a 'vehicle' object as a prop
export default function VehicleCard({ vehicle }: { vehicle: Vehicle }) {
  const availabilityClass = vehicle.isAvailable ? 'bg-green-100 text-green-800' : 'bg-red-100 text-red-800';
  const availabilityText = vehicle.isAvailable ? 'Available' : 'Booked Today';

  return (
    <div className="border rounded-lg shadow-lg overflow-hidden bg-white text-gray-800">
      <img src={vehicle.imageUrl} alt={vehicle.name} className="w-full h-48 object-cover" />
      <div className="p-4">
        <h3 className="text-xl font-bold">{vehicle.name}</h3>
        <div className="flex justify-between items-center mt-2">
          <span className={`text-xs font-semibold px-2 py-1 rounded-full ${availabilityClass}`}>
            {availabilityText}
          </span>
          <span className="text-gray-600">{vehicle.type}</span>
        </div>
        <p className="text-lg font-semibold text-blue-800 mt-4">
          ₹{vehicle.price}<span className="text-sm font-normal text-gray-600">/day</span>
        </p>
        <button className="mt-4 w-full bg-orange-500 text-white py-2 rounded-lg hover:bg-orange-600 transition-colors">
          Book Now
        </button>
      </div>
    </div>
  );
}