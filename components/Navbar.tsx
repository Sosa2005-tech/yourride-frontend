// components/Navbar.tsx
import Link from 'next/link';

export default function Navbar() {
  return (
    <header className="bg-white shadow-md">
      <nav className="container mx-auto px-6 py-4 flex justify-between items-center">
        <Link href="/" className="text-2xl font-bold text-blue-800">
          YourRide<span className="text-orange-500">Guwahati</span>
        </Link>
        <div className="flex space-x-6 text-gray-700">
          <Link href="/" className="hover:text-orange-500">Home</Link>
          <Link href="/fleet" className="hover:text-orange-500">Our Fleet</Link>
        </div>
      </nav>
    </header>
  );
}