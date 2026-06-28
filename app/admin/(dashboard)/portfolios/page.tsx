import { prisma } from "@/lib/prisma";
import { createPortfolio, deletePortfolio } from "../../actions";

export default async function PortfoliosAdminPage() {
  const portfolios = await prisma.portfolio.findMany({
    orderBy: { createdAt: "desc" },
  });

  return (
    <div>
      <div className="flex justify-between items-center mb-8">
        <h1 className="text-3xl font-bold">Manage Portfolios</h1>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Form Add Portfolio */}
        <div className="lg:col-span-1">
          <div className="bg-zinc-900 border border-zinc-800 p-6 rounded-xl sticky top-8">
            <h2 className="text-xl font-bold mb-4 text-blue-400">Add New Portfolio</h2>
            <form action={createPortfolio} className="space-y-4">
              <div>
                <label className="block text-sm font-medium mb-1 text-zinc-400">Title</label>
                <input
                  type="text"
                  name="title"
                  required
                  className="w-full bg-zinc-950 border border-zinc-800 rounded-lg px-4 py-2 focus:outline-none focus:border-blue-500 transition-colors text-white"
                  placeholder="Project Name"
                />
              </div>
              
              <div>
                <label className="block text-sm font-medium mb-1 text-zinc-400">Description</label>
                <textarea
                  name="description"
                  required
                  rows={4}
                  className="w-full bg-zinc-950 border border-zinc-800 rounded-lg px-4 py-2 focus:outline-none focus:border-blue-500 transition-colors text-white resize-none"
                  placeholder="Project description..."
                ></textarea>
              </div>

              <div>
                <label className="block text-sm font-medium mb-1 text-zinc-400">Image URL (Optional)</label>
                <input
                  type="text"
                  name="imageUrl"
                  className="w-full bg-zinc-950 border border-zinc-800 rounded-lg px-4 py-2 focus:outline-none focus:border-blue-500 transition-colors text-white"
                  placeholder="https://example.com/image.jpg"
                />
              </div>
              
              <div>
                <label className="block text-sm font-medium mb-1 text-zinc-400">Project Link (Optional)</label>
                <input
                  type="text"
                  name="link"
                  className="w-full bg-zinc-950 border border-zinc-800 rounded-lg px-4 py-2 focus:outline-none focus:border-blue-500 transition-colors text-white"
                  placeholder="https://example.com"
                />
              </div>

              <button
                type="submit"
                className="w-full bg-blue-600 hover:bg-blue-700 text-white font-medium py-2 px-4 rounded-lg transition-colors"
              >
                Save Portfolio
              </button>
            </form>
          </div>
        </div>

        {/* List Portfolios */}
        <div className="lg:col-span-2 space-y-4">
          {portfolios.length === 0 ? (
            <div className="bg-zinc-900 border border-zinc-800 p-8 rounded-xl text-center text-zinc-500">
              No portfolios found. Add one from the form.
            </div>
          ) : (
            portfolios.map((item: any) => (
              <div key={item.id} className="bg-zinc-900 border border-zinc-800 p-6 rounded-xl flex gap-4">
                {item.imageUrl && (
                  <div className="w-32 h-24 bg-zinc-800 rounded-lg overflow-hidden shrink-0">
                    <img src={item.imageUrl} alt={item.title} className="w-full h-full object-cover" />
                  </div>
                )}
                <div className="flex-1">
                  <div className="flex justify-between items-start">
                    <div>
                      <h3 className="text-lg font-bold text-white">
                        {item.title}
                      </h3>
                      {item.link && (
                        <a href={item.link} target="_blank" rel="noreferrer" className="text-blue-500 text-sm hover:underline">
                          View Project &rarr;
                        </a>
                      )}
                    </div>
                    <form action={async () => {
                      "use server";
                      await deletePortfolio(item.id);
                    }}>
                      <button
                        type="submit"
                        className="text-red-400 hover:text-red-300 hover:bg-red-500/10 px-3 py-1 rounded transition-colors text-sm"
                      >
                        Delete
                      </button>
                    </form>
                  </div>
                  <p className="text-zinc-400 mt-2 text-sm">{item.description}</p>
                </div>
              </div>
            ))
          )}
        </div>
      </div>
    </div>
  );
}
