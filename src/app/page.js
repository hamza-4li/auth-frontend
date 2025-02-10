import Navbar from "@/components/navbar";
export default function Home() {
  return (
    <div>
      <Navbar />
      <div className="flex items-center justify-center h-screen bg-gray-100">
        <h1 className="text-4xl font-bold text-blue-600">Home Page</h1>
      </div>
    </div>
  );
}