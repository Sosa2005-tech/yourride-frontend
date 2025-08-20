export default function Footer() {
return (
<footer className="bg-gray-900 text-gray-300 mt-12">
<div className="container mx-auto px-6 py-8">
<div className="text-center">
<h3 className="text-2xl font-bold text-blue-400">YourRide Guwahati</h3>
<p className="mt-2 text-gray-400">&quot;Your Journey, Our Wheels&quot;</p>
<p className="mt-4 text-sm text-gray-500">© {new Date().getFullYear()} YourRide Guwahati. All Rights Reserved.</p>
</div>
</div>
</footer>
);
}