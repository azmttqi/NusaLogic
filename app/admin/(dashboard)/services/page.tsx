import { prisma } from "@/lib/prisma";
import { createService, deleteService } from "../../actions";

export default async function ServicesAdminPage() {
  const services = await prisma.service.findMany({
    orderBy: { createdAt: "desc" },
  });

  return (
    <div>
      <div className="flex justify-between items-center mb-8">
        <h1 className="text-3xl font-bold">Manage Services</h1>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Form Add Service */}
        <div className="lg:col-span-1">
          <div className="bg-zinc-900 border border-zinc-800 p-6 rounded-xl sticky top-8">
            <h2 className="text-xl font-bold mb-4 text-blue-400">Add New Service</h2>
            <form action={createService} className="space-y-4">
              <div>
                <label className="block text-sm font-medium mb-1 text-zinc-400">Title</label>
                <input
                  type="text"
                  name="title"
                  required
                  className="w-full bg-zinc-950 border border-zinc-800 rounded-lg px-4 py-2 focus:outline-none focus:border-blue-500 transition-colors text-white"
                  placeholder="e.g. Web Development"
                />
              </div>
              
              <div>
                <label className="block text-sm font-medium mb-1 text-zinc-400">Description</label>
                <textarea
                  name="description"
                  required
                  rows={4}
                  className="w-full bg-zinc-950 border border-zinc-800 rounded-lg px-4 py-2 focus:outline-none focus:border-blue-500 transition-colors text-white resize-none"
                  placeholder="Service description..."
                ></textarea>
              </div>

              <div>
                <label className="block text-sm font-medium mb-1 text-zinc-400">Icon ClassName (Optional)</label>
                <input
                  type="text"
                  name="icon"
                  className="w-full bg-zinc-950 border border-zinc-800 rounded-lg px-4 py-2 focus:outline-none focus:border-blue-500 transition-colors text-white"
                  placeholder="e.g. FiMonitor"
                />
              </div>

              <button
                type="submit"
                className="w-full bg-blue-600 hover:bg-blue-700 text-white font-medium py-2 px-4 rounded-lg transition-colors"
              >
                Save Service
              </button>
            </form>
          </div>
        </div>

        {/* List Services */}
        <div className="lg:col-span-2 space-y-4">
          {services.length === 0 ? (
            <div className="bg-zinc-900 border border-zinc-800 p-8 rounded-xl text-center text-zinc-500">
              No services found. Add one from the form.
            </div>
          ) : (
            services.map((service: any) => (
              <div key={service.id} className="bg-zinc-900 border border-zinc-800 p-6 rounded-xl flex justify-between items-start">
                <div>
                  <h3 className="text-lg font-bold text-white flex items-center gap-2">
                    {service.icon && <span className="text-blue-500 text-sm">[{service.icon}]</span>}
                    {service.title}
                  </h3>
                  <p className="text-zinc-400 mt-2 text-sm">{service.description}</p>
                </div>
                <form action={async () => {
                  "use server";
                  await deleteService(service.id);
                }}>
                  <button
                    type="submit"
                    className="text-red-400 hover:text-red-300 hover:bg-red-500/10 px-3 py-1 rounded transition-colors text-sm"
                  >
                    Delete
                  </button>
                </form>
              </div>
            ))
          )}
        </div>
      </div>
    </div>
  );
}
