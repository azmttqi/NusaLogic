import { prisma } from "@/lib/prisma";

export default async function AdminDashboard() {
  const serviceCount = await prisma.service.count();
  const portfolioCount = await prisma.portfolio.count();

  return (
    <div>
      <h1 className="text-3xl font-bold mb-8">Dashboard</h1>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        <div className="bg-zinc-900 border border-zinc-800 p-6 rounded-xl">
          <h3 className="text-zinc-400 font-medium mb-2">Total Services</h3>
          <p className="text-4xl font-bold text-blue-500">{serviceCount}</p>
        </div>
        
        <div className="bg-zinc-900 border border-zinc-800 p-6 rounded-xl">
          <h3 className="text-zinc-400 font-medium mb-2">Total Portfolios</h3>
          <p className="text-4xl font-bold text-blue-500">{portfolioCount}</p>
        </div>
      </div>
    </div>
  );
}
